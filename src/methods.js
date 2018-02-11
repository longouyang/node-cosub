var AWS = require('aws-sdk'),
    _ = require('lodash'),
    minimist = require('minimist'),
    ask = require('./ask'),
    fs = require('fs'),
    convert = require('xml-js'),
    assert = require('assert');

// returns an mturk instance for either production or sandbox
// HT https://github.com/aws/aws-sdk-js/issues/1390
var getClient = function(_opts) {
  var opts = _.defaults(_opts || {},
                        {endpoint: 'sandbox'})

  var endpoint = (opts.endpoint == 'production'
                  ? 'https://mturk-requester.us-east-1.amazonaws.com'
                  : 'https://mturk-requester-sandbox.us-east-1.amazonaws.com');

  //console.log('endpoint is ' + endpoint);

  return new AWS.MTurk(
    {apiVersion: '2017-01-17',
     endpoint: endpoint
    });
}

// TODO? in addition to command-line and stdin interfaces, also allow programmatic access
function create(settings) {
  // TODO: if we already created this hit (in non-batch-mode, don't allow cosub create)

  var unitsToSeconds = {second: 1, minute: 60, hour: 3600, day: 86400, week: 604800};

  // converts a string input to a number of seconds
  function extractDuration(x) {
    var match = /(\d+)\s*(second|minute|hour|day|week)/.exec(x);
    var numUnits = parseFloat(match[1]),
        unit = match[2];

    return numUnits * unitsToSeconds[unit];
  }

  function validateDuration(x) {
    return /\d+\s*(second|minute|hour|day|week)s?/.test(x)
  }

  var allQuestions = [
    {
      name: 'endpoint',
      message: 'Do you want to run on production or sandbox?',
      validate: function(x) {
        return ('production'.indexOf(x) > -1 || 'sandbox'.indexOf(x) > -1) ? true : 'Type p for production and s for sandbox'
      },
      transform: function(x) {
        return 'production'.indexOf(x) > -1 ? 'production' : 'sandbox'
      }
    },
    {
      name: 'assignments',
      message: 'How many assignments do you want to run?',
      validate: function(x) {
        return _.isInteger(x) ? true : 'Answer must be a number'
      },
      transform: function(x) {
        return parseInt(x)
      }
    },
    {
      name: 'duration',
      message: ['How long do you want to run the HIT?',
                'You can give an answer in seconds, minutes, hours, days, or weeks.',
                '(You can always add more time using cosub add)'].join('\n'),
      validate: function(x) {
        return validateDuration(x) ? true : 'Invalid duration'
      },
      transform: function(x) {
        return extractDuration(x)
      }
    }
  ];

  var questionsPartitioned = _.partition(allQuestions,
                                         function(q) {
                                           return _.has(argv, q.name) && q.validate(argv[q.name])
                                         }),
      answeredQuestions = questionsPartitioned[0],
      unansweredQuestions = questionsPartitioned[1];

  var noninteractiveAnswers = _.chain(answeredQuestions)
      .map(function(q) { return [q.name, q.transform(argv[q.name])] })
      .fromPairs()
      .value();

  var interactiveAnswers = _.fromPairs(ask.many(unansweredQuestions));

  var answers = _.extend({},noninteractiveAnswers, interactiveAnswers);

  // transform anything passed in via command line

  var externalQuestion =
      `<ExternalQuestion xmlns="http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2006-07-14/ExternalQuestion.xsd">
  <ExternalURL>${settings.Url}</ExternalURL>
  <FrameHeight>${settings.FrameHeight}</FrameHeight>
</ExternalQuestion>`;

  var allParams = _.extend({}, settings, answers, {Question: externalQuestion})

  var renames = {
    'duration': 'LifetimeInSeconds',
    'assignments': 'MaxAssignments',
    'AssignmentDuration': 'AssignmentDurationInSeconds',
    'AutoApprovalDelay': 'AutoApprovalDelayInSeconds'
  };

  function renameOldKey(_k) {
    var key = _.has(renames, _k) ? renames[_k] : _k;
    return key
  }

  function renameOldKeys(dict) {
    var oldKeys = _.keys(dict),
    newKeys = _.map(oldKeys, renameOldKey),
    oldValues = _.values(dict),
    newValues = _.map(oldValues,
                      function(v) {
                        return (_.isArray(v)
                                ? _.map(v, renameOldKeys)
                                : (_.isObject(v) ? renameOldKeys(v) : v)) })

    return _.chain(newKeys).zip(newValues).fromPairs().value()
  }

  var turkParams = _.pick(renameOldKeys(allParams),
                          ['Title', 'Description', 'Keywords', 'AssignmentDurationInSeconds',
                           'AutoApprovalDelayInSeconds', 'LifetimeInSeconds', 'Reward',
                           'QualificationRequirements', 'Question', 'MaxAssignments'
                          ]);
  turkParams.AssignmentDurationInSeconds = extractDuration(turkParams.AssignmentDurationInSeconds)
  turkParams.AutoApprovalDelayInSeconds = extractDuration(turkParams.AutoApprovalDelayInSeconds)
  turkParams.Reward = turkParams.Reward + ""

  // TODO: handle qualification requirements

  if (allParams.Batch) {
    createBatch(turkParams, answers.endpoint)
  } else {
    createSingle(turkParams, answers.endpoint)
  }

}

function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t)
  });
}

function createBatch(turkParams, endpoint) {
  var mtc = getClient({endpoint: endpoint});

  var metadata = {};

  mtc.createHITType(_.omit(turkParams, 'LifetimeInSeconds', 'Question', 'MaxAssignments')).promise()
    .then(function(data) {
      console.log('Created HIT Type ' + data.HITTypeId)

      var n = parseInt(turkParams.MaxAssignments),
          numBatches = Math.ceil(n / 9),
          batchSizes = _.map(_.range(numBatches),
                             function(i) {
                               return i < (numBatches - 1) ? 9 :
                                 (n % 9 == 0 ? 9 : n % 9)
                             })

      console.log('Created HITs:');
      var promises = batchSizes.map(function(size, i) {
        return delay(i * 500).then(
          function() {
            return mtc.createHITWithHITType({
              HITTypeId: data.HITTypeId,
              MaxAssignments: size,
              LifetimeInSeconds: turkParams.LifetimeInSeconds,
              Question: turkParams.Question
            }).promise().then(function(dat) {
              console.log(dat.HIT.HITId)
              return dat
            })
          }
        )
      })
      return Promise.all(promises)
    })
    .catch(function(err) {
      console.log('Error')
      console.error(err.message)
    })
    .then(function(data) {
      var existingData = fs.existsSync('hit-ids.json') ? JSON.parse(fs.readFileSync('hit-ids.json')) : {}

      fs.writeFileSync('hit-ids.json',
                       JSON.stringify(_.extend({},
                                               existingData,
                                               _.fromPairs([[endpoint, data]])),
                                      null,
                                      1
                                     ))

    })
}

function createSingle(turkParams, endpoint) {
  var mtc = getClient({endpoint: endpoint});

  mtc.createHIT(turkParams).promise()
    .then(function(data) {
      var hit = data.HIT
      var existingHitIds = fs.existsSync('hit-ids.json') ? JSON.parse(fs.readFileSync('hit-ids.json')) : {}

      fs.writeFileSync('hit-ids.json',
                       JSON.stringify(_.extend({},
                                               existingHitIds,
                                               _.fromPairs([[endpoint, hit]]))))

      console.log('Created HIT ' + hit.HITId)
      // TODO: add link
    })
    .catch(function(err) {
      console.log('Error creating HIT')
      console.error(err.message)
    })
}

// TODO: add --page-size option?
function downloadSingle(endpoint) {
  var data = JSON.parse(fs.readFileSync('hit-ids.json'));
  if (!_.has(data, endpoint)) {
    console.error('Error: this HIT hasn\'t been created on ' + endpoint + ' yet');
    process.exit()
  }

  var HITId = data[endpoint].HITId

  var mtc = getClient({endpoint: endpoint});

  var dirName = endpoint + '-results/'
  if (!fs.readdirSync(dirName)) {
    fs.mkdirSync(dirName);
  }

  var numAssignmentsSubmitted = 0;
  var existingAssignmentIds = _.chain(fs.readdirSync(dirName))
      .filter(function(filename) { return /\.json$/.test(filename) })
      .map(function(filename) { return filename.replace(".json", "")})
      .value()

  var doPaginatedDownload = function(nextToken, assnCount) {
    if (typeof assnCount == 'undefined') {
      assnCount = 0
    }

    var requestParams = _.extend({HITId: HITId,
                                  AssignmentStatuses: ['Submitted', 'Approved', 'Rejected']
                                 },
                                 nextToken ? {NextToken: nextToken} : {})

    mtc
      .listAssignmentsForHIT(requestParams)
      .promise()
      .then(function(data) {
        //console.log(`NextToken is ${data.NextToken}`)
        // read the xml inside each assignment, convert to js
        _.each(data.Assignments,
               function(a, i) {
                 var assnNum = assnCount + i + 1;
                 if (_.includes(existingAssignmentIds, a.AssignmentId)) {
                   console.log(`${assnNum} Skipping ${a.AssignmentId}`)
                   return
                 }
                 var metadata = _.omit(a, 'Answer')
                 var xmlDoc = a.Answer;
                 var xmlConverted = convert.xml2js(xmlDoc, {compact: true});
                 var pairs = xmlConverted.QuestionFormAnswers.Answer
                     .map(function(e) {
                       var parsedText
                       try {
                         parsedText = JSON.parse(e.FreeText._text)
                       } catch (err) {
                         console.log(`Couldn't parse ${e.QuestionIdentifier} response so left as string: `)
                         console.log(e.FreeText._text)
                         parsedText = e.FreeText._text
                       }

                       return [e.QuestionIdentifier._text, parsedText]
                   })
                 var data = _.extend({}, metadata, {answers: _.fromPairs(pairs)})

                 console.log(`${assnNum} Downloaded ${a.AssignmentId}`)
                 var filename = endpoint + '-results/' + a.AssignmentId + '.json';
                 fs.writeFileSync(filename, JSON.stringify(a, null, 1))
               })

        if (assnCount < numAssignmentsSubmitted) {
          return new Promise(function() {
            doPaginatedDownload(data.NextToken, assnCount + data.NumResults)
          })
        }
      })
      .catch(function(e) {
        console.log(e)
      })
  }

  mtc
    .getHIT({HITId: HITId})
    .promise()
    .then(function(data) {
      numAssignmentsSubmitted = data.HIT.MaxAssignments - data.HIT.NumberOfAssignmentsAvailable
      console.log(`There are ${numAssignmentsSubmitted} submitted assignments`)
      console.log(`We have data from ${existingAssignmentIds.length}`)
      if (numAssignmentsSubmitted == existingAssignmentIds.length) {
        console.log('Nothing new to download.')
      } else {
        return new Promise(function() {
          return doPaginatedDownload()
        })
      }
    })

}

function addTime(endpoint) {
  var data = JSON.parse(fs.readFileSync('hit-ids.json'));
  if (!_.has(data, endpoint)) {
    console.error('Error: this HIT hasn\'t been created on ' + endpoint + ' yet');
    process.exit()
  }

  var HITId = data[endpoint].HITId

  var mtc = getClient({endpoint: endpoint})

  mtc.getHIT({HITId: HITId}).promise().then(function(data) {
    console.log(data.HIT.Expiration)
  })
}

function balance(endpoint) {
  var data = JSON.parse(fs.readFileSync('hit-ids.json'));
  if (!_.has(data, endpoint)) {
    console.error('Error: this HIT hasn\'t been created on ' + endpoint + ' yet');
    process.exit()
  }

  // TODO: sandbox versus production
  var mtc = getClient({endpoint: endpoint});

  mtc.getAccountBalance({})
    .promise()
    .then(function(data) {
      console.log(`Available balance is ${data.AvailableBalance}`)
    })
    .catch(function(err) {
      console.error('Error: ' + err)
    })
}

// TODO: clean up output
function status(endpoint) {
  var data = JSON.parse(fs.readFileSync('hit-ids.json'));
  if (!_.has(data, endpoint)) {
    console.error('Error: this HIT hasn\'t been created on ' + endpoint + ' yet');
    process.exit()
  }

  var HITId = data[endpoint].HITId

  var mtc = getClient({endpoint: endpoint});

  mtc
    .getHIT({HITId: HITId})
    .promise()
    .then(function(data) {
      console.log(data)
    })
    .catch(function(err) {
      console.error(err)
    })

}


module.exports = {
  create: create,
  download: downloadSingle,
  addTime: addTime,
  balance: balance,
  status: status
}

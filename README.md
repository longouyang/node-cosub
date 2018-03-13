# nosub

A command-line tool for managing external HITs on Amazon's Mechanical Turk.

## Philosophy

Many behavioral scientists use a Mechanical Turk workflow where they create a single External HIT with many assignments.
This corresponds to a single experiment with many participants.
The same HIT is often repurposed for multiple versions of the same experiment, so there's a need for a HIT management tool that facilitates multiple rounds of data collection and updating.

## Requirements

Node.js version 4 or higher.

## Installation

```
sudo npm install -g longouyang/nosub
```

(todo: windows)

# Usage

## Authentication credentials

First, place your AWS authentication credentials in `~/.aws/credentials` in this format:

```
[default]
aws_access_key_id = <ACCESS KEY ID>
aws_secret_access_key = <SECRET ACCESS KEY>
```

(todo: windows)

(todo: mention auth variables, maybe custom allow auth files too)

## Initializing a HIT

Next, go to a folder where you want to store your settings and results for a single HIT.
Now, initialize by running `nosub init`.
This will walk you through creating your HIT and store your settings in the file `settings.json`:

```
What is your task URL?
> https://foo.com
What is the title of your HIT?
> Bar
What is the description of your HIT?
> Baz
Provide some keywords for the HIT:
> qux
Do you want to run in (b)atch or (s)ingle mode?
> b
What frame height do you want?
> 450
How long will a worker have to complete your HIT?
You can answer in seconds, minutes, hours, days, or weeks.
> 30 minutes
After how long should unreviewed assignments be automatically approved?
You can answer in seconds, minutes, hours, days, or weeks.
> 5 minutes
How much you will pay each worker (in dollars)?
> $1
Wrote to settings.json
```

In batch mode, your task is spread across multiple HITs of 9 or fewer assignments (this avoids the extra 20% fee charged by Amazon).
Note that if you choose to use batch mode, you may want to implement some way of preventing the same worker from completing assignments in multiple batches (e.g., [uniqueturker.com](http://uniqueturker.com))

## Managing a HIT

After initializing, you can do these management actions.

```
nosub create   # create hit based on settings in settings.json
nosub update   # update hit based on settings in settings.json
nosub add <N> assignments
nosub add <N> {days/hours/minutes}
nosub expire   # expire hit
nosub download # download results to sandbox-results/ or production-results/
nosub status   # summarize HIT (settings, time left, # assignments, ...)
nosub history  # show history of nosub actions
nosub balance  # get mturk balance
```

By default, actions take place on the sandbox. You can run actions in production mode by adding '-p' after nosub, e.g., nosub -p create creates the HIT on the production site rather than the sandbox.

(todo: not yet implemented: `history`, `update`, `qualifications`)

### `create`


### `add`

You can also combine adding assignments and time:

```
nosub add 40 assignments and 3 hours
```

In batch mode,

### `download`

### `status`

### `balance`

### `history`

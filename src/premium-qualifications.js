// extracted from web interface for creating HITs by hand
// note that the names for Age 18-25, 25-30, 30-35, 35-45, 45-55, and 55+ are a little different between sandbox and production
// note also that Voted in 2016 is not available for 2016

module.exports = [
    { "name": "Blogger", "sandboxId": "37V1T9MUUQLS5X0CG7PBSP0508ANH0", "productionId": "35NJOM7A2AHJ8CEAOZJYOG2F0DRZXE", "feeInDollars": "0.25" },
    { "name": "Born 1918 to 1960 (Age 55 or older)", "sandboxId": "37RZ1IA9BMTRDMCD256BNAG9EPOL19", "productionId": "3A52214HXRPE0WD0NJJNM1K3JA7PM6", "feeInDollars": "0.50" },
    { "name": "Born 1961 to 1971 (Age 45-55)", "sandboxId": "3RDXNS6RRB0V0OTA1HKLYE1WR1JCYI", "productionId": "3YVJFZ3OL3WO7MYJTQ5K0WEIOULEIU", "feeInDollars": "0.50" },
    { "name": "Born 1972 to 1981 (Age 35-45)", "sandboxId": "33LUKQBDROXW64AYQRI5E2CN4VK9SK", "productionId": "3LLOUF5SOO5RS1LW45IHW772RRZMUZ", "feeInDollars": "0.50" },
    { "name": "Born 1982 to 1986 (Age 30-35)", "sandboxId": "39VCNG5CRYL60J30WLYJF0UNPVPCXC", "productionId": "362T88CWSBZ89UNF27OEYG2KXGMSD7", "feeInDollars": "0.50" },
    { "name": "Born 1987 to 1991 (Age 25-30)", "sandboxId": "33PZ965V93XK5PALB2I0OS7RIT19RW", "productionId": "3KAU8F4DS29KIEY0ZKYNZG93O0HPN6", "feeInDollars": "0.50" },
    { "name": "Born 1992 to 1999 (Age 18-25)", "sandboxId": "3UAQCEERORX7JVO3O49VXC7OQZ2FK1", "productionId": "3DWHSFAI6V6LLE6N73LD41NC328HA9", "feeInDollars": "0.50" },
    { "name": "Borrower - Auto Loans", "sandboxId": "39VCNG5CRYL60J30WLYJF0UNPW4XCE", "productionId": "3TZRB59MJX9EZ3CJ289HU3GCYFFPZF", "feeInDollars": "0.40" },
    { "name": "Borrower - Business Loan", "sandboxId": "3VG0IABS94XN0BZR0CCIGSSBH74OQ9", "productionId": "30WE6L5BIE9XY0JQQFGVLZAAYXVC5K", "feeInDollars": "0.40" },
    { "name": "Borrower - Credit Cards", "sandboxId": "3F540QR0WZ78IJAPGO2L1HBT0AZ65Z", "productionId": "3N2JCLSAPVSJ3M45SDHFA9TDUKFXYF", "feeInDollars": "0.40" },
    { "name": "Borrower - Home Mortgage", "sandboxId": "3RDXNS6RRB0V0OTA1HKLYE1WR2ZCY0", "productionId": "3D0GLTVX4T0NNPQSP9L19L2DEAFL3G", "feeInDollars": "0.40" },
    { "name": "Borrower - Personal Loan", "sandboxId": "3S7V3UIV5MQDGQ3OFWOD1L6U1K7IR9", "productionId": "33IG9TQV30U24JSQUAFE2EMAQWQQ1K", "feeInDollars": "0.40" },
    { "name": "Borrower - Student Loan", "sandboxId": "3N6NEM56T1ZVIGM6K4SMPPDXJZV8EX", "productionId": "3CNI31T0B4UBAG4GYWW7VI682GZ3B9", "feeInDollars": "0.40" },
    { "name": "Car Owner", "sandboxId": "38ASEUC7MCFMV5JQT3CG25R8ZWZGHW", "productionId": "3386W7HUQQSXQJ791BKE9X3GA3WPV0", "feeInDollars": "0.25" },
    { "name": "Current Residence - Owned", "sandboxId": "38CFFZ6E4YEWFSATOJEZFYAAES4KV6", "productionId": "39YXZTLR4QPV5E3FX3NBA3H5ZVWCZI", "feeInDollars": "0.40" },
    { "name": "Current Residence - Rented", "sandboxId": "3OS50CZA2F39AOE5XZYICQ781HZICU", "productionId": "3LKGEFGLB5GRI2HNAZ1N97O9AEW7EE", "feeInDollars": "0.40" },
    { "name": "Daily Internet Usage - 1 to 4 hours", "sandboxId": "3YVJFZ3OL3WO7MYJTQ4D2E7BMTSIE3", "productionId": "3N60G9VU1ZLD7G2LLJKE8XXW7S6E1Y", "feeInDollars": "0.30" },
    { "name": "Daily Internet Usage - 5 to 7 hours", "sandboxId": "3UKR6HO4BPAQ14DW3S8NQ0TQQ4NL5J", "productionId": "31UNFWDGB9IC0EALTXUCE613CRCGTQ", "feeInDollars": "0.30" },
    { "name": "Daily Internet Usage - 7+ hours", "sandboxId": "32S84VH440P85L9WPNPDL8NCQ8SL4E", "productionId": "3FPQM8KMWPO5BZAAIASSM73E5R0MDL", "feeInDollars": "0.30" },
    { "name": "Employment Industry - Banking & Financial Services", "sandboxId": "3ZG54WTVCO9XL4NDFRNVO7896FRT9O", "productionId": "3NRTOFVPEPMYQNL5UTIXVXBCK2GR3O", "feeInDollars": "0.40" },
    { "name": "Employment Industry - Education", "sandboxId": "381E5BGASO1DQEPDVYG9G3166AT48F", "productionId": "3Y5W7PXQK1CVDVSABGG3OAKDFPOOA8", "feeInDollars": "0.40" },
    { "name": "Employment Industry - Food & Beverage", "sandboxId": "36GCTHBRVS9BQNXI7X1VK2JTCX9TA3", "productionId": "3CJL7HHWEWBJ8J49U7NG523IY2CR49", "feeInDollars": "0.40" },
    { "name": "Employment Industry - Government & Non-Profit", "sandboxId": "3IMKWLF0QJ62V2P9CPPURHO6K81W66", "productionId": "37U44YZ6NLP71XCREIOLWTX5IT5G3H", "feeInDollars": "0.40" },
    { "name": "Employment Industry - Healthcare", "sandboxId": "3VG0IABS94XN0BZR0CCIGSSBH7EQOL", "productionId": "3YCLS7T9O1Q0W5X2HUGZJL4JX79OB3", "feeInDollars": "0.40" },
    { "name": "Employment Industry - Manufacturing", "sandboxId": "3U8EC01SO75D4J8N0QMNGZWHQGB494", "productionId": "3IUNJINV144Y83SHSUDOPSJ2A7DLJ4", "feeInDollars": "0.40" },
    { "name": "Employment Industry - Media & Entertainment", "sandboxId": "318L1LJO7B5R92ISSW0NCU71WYT4AJ", "productionId": "3516A3CDOFVJ6AP8VUCUU5A1FS9OCA", "feeInDollars": "0.40" },
    { "name": "Employment Industry - Retail, Wholesale & Distribution", "sandboxId": "3X9X6Q117EWFUQWUNKWQOBOHM29QL4", "productionId": "33JQ0O0WIQ78X00L82YU09NR6G8TWA", "feeInDollars": "0.40" },
    { "name": "Employment Industry - Software & IT Services", "sandboxId": "3VSNQAPCUINZ6QITJEAGN90IR3FYR5", "productionId": "3WZ6TNF1F40TJNYZAFD0Q7JFPWDLK3", "feeInDollars": "0.40" },
    { "name": "Employment Sector - Non-Profit", "sandboxId": "3YJFVCPRIV85A69TXZHFWRSGIVLZDI", "productionId": "38N62D8ZZITEJF95RGO3TB2QXECUC8", "feeInDollars": "0.30" },
    { "name": "Employment Status - Full time (35+ hours per week)", "sandboxId": "37O6MXR7LKP41NA3L7CQTNPTW4Z662", "productionId": "3CN779IP5ARANI0OHMQV5W7HSJ2OH5", "feeInDollars": "0.35" },
    { "name": "Employment Status - Part time (1-34 hours per week)", "sandboxId": "3WALDZ9X0OB7T78DPLL9BGAVCDC3M3", "productionId": "33PZ965V93XK5PALB2J7MAEYKTER9R", "feeInDollars": "0.35" },
    { "name": "Employment Status - Unemployed", "sandboxId": "36FDJD9TVZVDBPTD1M09OVZVH3M3N3", "productionId": "38K25CGMOFSUWCZ7BJZJCFJZTGUU1P", "feeInDollars": "0.35" },
    { "name": "Exercise - Every Day", "sandboxId": "3HIOL0MDAM28KD395PPQBT5O8ADV7O", "productionId": "3516A3CDOFVJ6AP8VUCUU5A1FS3COS", "feeInDollars": "0.30" },
    { "name": "Exercise - Four Plus Times a Week", "sandboxId": "3XDG87E9EDCIDR3KWGJSAX8OBJ3PT9", "productionId": "3CSEDZSBFSFSRC2T2S28OIM5GEW704", "feeInDollars": "0.30" },
    { "name": "Exercise - Not at All", "sandboxId": "3YKCX89WCYJVC8U03Y3Z1CBBM7BN7Z", "productionId": "381E5BGASO1DQEPDVYHGEL8D8AI484", "feeInDollars": "0.30" },
    { "name": "Exercise - Once a Week", "sandboxId": "3SO0EPWUEPDXD4I9WL92FTUQUXAPU0", "productionId": "3090W3GIDVP1OPPWUFCHFGAWPIYCND", "feeInDollars": "0.30" },
    { "name": "Exercise - Two to Three Times a Week", "sandboxId": "31I5O1WRTD0HYRQ57GE20SC290PSPN", "productionId": "352JK99ZK9Q5DU2HGU4KQFIWJUL1F5", "feeInDollars": "0.30" },
    { "name": "Facebook Account Holder", "sandboxId": "3DUWYN247KLA7MVH3492QD8FQANM5Y", "productionId": "31I5O1WRTD0HYRQ57GF9YAJ9BZSSPO", "feeInDollars": "0.05" },
    { "name": "Financial Asset Owned - Certificate of Deposit (CD)", "sandboxId": "3XQ9NVMYZF1MNFFC46ABFAB5VKPMHS", "productionId": "3OFC1SZPZBGYILXQLIAALYSKP2K9KI", "feeInDollars": "0.40" },
    { "name": "Financial Asset Owned - Checking Account", "sandboxId": "3CYRGFX2KAGUQWY1O2DWAYZ1HGKUSM", "productionId": "3XQ9NVMYZF1MNFFC46BIDSICXKHMHK", "feeInDollars": "0.40" },
    { "name": "Financial Asset Owned - Common Share Stocks", "sandboxId": "3KX8IXT6XLTGSPSUVK1U7H2AVG9P5A", "productionId": "3U6957PSHU11P81WN7TSION9K16KO7", "feeInDollars": "0.40" },
    { "name": "Financial Asset Owned - Exchange-Traded Fund (ETF)", "sandboxId": "30IMET1JUJVFS468HLWNQTP0KS6UOG", "productionId": "3MCN53K310JJA8DX27677OSZU62KPO", "feeInDollars": "0.40" },
    { "name": "Financial Asset Owned - Money Market Account", "sandboxId": "31QNSEW3RLFMJAQWAOSWFMCKVX4MIL", "productionId": "37W5KW7BZVI2Y3RK7TUYYF9JGW1SQ4", "feeInDollars": "0.40" },
    { "name": "Financial Asset Owned - Mutual Funds", "sandboxId": "3CFGI1NEWHBV9Y4M9WMEXU17I4LS4O", "productionId": "3P251L9XP7U9T4AMDEFS7XWFI22Q2Z", "feeInDollars": "0.40" },
    { "name": "Financial Asset Owned - Real Estate Investment Trusts (REITs)", "sandboxId": "3KSLQLZFBV6O9BY2VRP9724CC12LM2", "productionId": "3KAW48Y220TUQTG7L3ZR85IRJ6P6OR", "feeInDollars": "0.40" },
    { "name": "Financial Asset Owned - Savings Account", "sandboxId": "32X4SEUEDBB9OU0UR7SXA3RZXZ4TD1", "productionId": "3JNQNCT8EX31RTFB185PGFFLNYPJUF", "feeInDollars": "0.40" },
    { "name": "Financial Asset Owned - Stock Options", "sandboxId": "3KIOY293YU0U223PKQ4HWEV10W3V0K", "productionId": "36WA3USMNR67GVWIFX7D86CSXLJ9HH", "feeInDollars": "0.40" },
    { "name": "Financial Asset Owned - U.S. Treasury Bills/Government Debt", "sandboxId": "33GZIFUQUFLJOGHJ5AKMT722KGIF7D", "productionId": "3GR2JZHT4D1GD0YFO1PQIEZI0WQFI5", "feeInDollars": "0.40" },
    { "name": "Gender - Female", "sandboxId": "3ZA6VN4RCNNAUKDJ130LXNQBVABXQN", "productionId": "3ZA6VN4RCNNAUKDJ130LXNQBVABXQN", "feeInDollars": "0.50" },
    { "name": "Gender - Male", "sandboxId": "3EDENFEKRDIEJX4GW8JJ0LTB6CQJW0", "productionId": "3L339059XKHPK185F1OKFVBZUGV0H0", "feeInDollars": "0.50" },
    { "name": "Google Account Holder", "sandboxId": "347ZKNUE36WD5H8MN15O2M7LIZ8S5J", "productionId": "32ZCPHM80CAMDRFATRHE7Z6Y66VYIY", "feeInDollars": "0.05" },
    { "name": "Handedness - Left", "sandboxId": "3AWO8D2RFXK7CQ72LFORA060VWNI94", "productionId": "3HN7AXFHKYFFQJJCOXOT3KK602PST5", "feeInDollars": "0.15" },
    { "name": "Handedness - Right", "sandboxId": "37RZ1IA9BMTRDMCD256BNAG9EOTL1C", "productionId": "3CYRGFX2KAGUQWY1O2E38G68JGWSUW", "feeInDollars": "0.15" },
    { "name": "Household Income - $100,000 or more", "sandboxId": "3RAGO4OQ8ADTOL3XK54GWS5D19B8YJ", "productionId": "3QQSTXYW62LN5NO84HIPXJWWTG676R", "feeInDollars": "0.50" },
    { "name": "Household Income - $25,000 - $49,999", "sandboxId": "33AD3SBATXLPZG8X54MSBVKXQ1B8WK", "productionId": "3HWVXYKNY1KLH9H7DL3Y4DOR3F7IAN", "feeInDollars": "0.50" },
    { "name": "Household Income - $50,000 - $74,999", "sandboxId": "3NRTOFVPEPMYQNL5UTHQXF45I043RK", "productionId": "37RZ1IA9BMTRDMCD257ILSNGGPVL1G", "feeInDollars": "0.50" },
    { "name": "Household Income - $75,000 - $99,999", "sandboxId": "39SVOSNB8XY4OGDNF9IEDEY4Z3H8XD", "productionId": "35Y2D2K0DCUZJ7FAFXNAD9RABU01OD", "feeInDollars": "0.50" },
    { "name": "Household Income - Less than $25,000", "sandboxId": "3J4VL7BYSILCKR8SFUHWPT1JJS98VA", "productionId": "3GR2JZHT4D1GD0YFO1PQIEZI0VKFIX", "feeInDollars": "0.50" },
    { "name": "Insurance Policyholder - Auto Insurance", "sandboxId": "3NRTOFVPEPMYQNL5UTHQXF45I1L3R3", "productionId": "3TW6ZST7655PU8C41QLWXI01QFCXPL", "feeInDollars": "0.40" },
    { "name": "Insurance Policyholder - Healthcare Insurance", "sandboxId": "3IZO2596DL7WFW1Z8J51ZJ8675FOMS", "productionId": "31QNSEW3RLFMJAQWAOT3D4JRXXXMIE", "feeInDollars": "0.40" },
    { "name": "Insurance Policyholder - Home Owners Insurance", "sandboxId": "3DHGVT984THT2QM7PXAUWO0OLHW9YG", "productionId": "3ZT0H6K5ONSI316L94M3AURAH0KFLJ", "feeInDollars": "0.40" },
    { "name": "Insurance Policyholder - Life Insurance", "sandboxId": "3LLOUF5SOO5RS1LW45HAYP0VPSDUMN", "productionId": "3UV5AGTJTXIOBRNZN8NZ0KD3OIUEHR", "feeInDollars": "0.40" },
    { "name": "Insurance Policyholder - Renters Insurance", "sandboxId": "3S3QEEODN7QPH531ULOIRVBQNMQISX", "productionId": "3AWO8D2RFXK7CQ72LFPY8ID7XYY9IA", "feeInDollars": "0.40" },
    { "name": "Job Function - Accounting & Finance", "sandboxId": "34B493OWLLW142898C5JCC2PWYBR5I", "productionId": "3WU6VAO3A6EXN68NDVGV20NWUTIR6U", "feeInDollars": "0.40" },
    { "name": "Job Function - Administrative", "sandboxId": "3CFGI1NEWHBV9Y4M9WMEXU17I404SF", "productionId": "3USHEAR81307LIBCNX3VJ1BBO3XAG7", "feeInDollars": "0.40" },
    { "name": "Job Function - Arts & Design", "sandboxId": "3L4WO517FMRS1L81B3OKDXR50W522E", "productionId": "3V2NCA4P7579S86DRL2J8RSKTT2DBV", "feeInDollars": "0.40" },
    { "name": "Job Function - Education & Training", "sandboxId": "39VG053QLP2TTBD2GR6ZAZEF75VZ8L", "productionId": "36YI3I1DYLN87YE90ZGSDPACW367UD", "feeInDollars": "0.40" },
    { "name": "Job Function - Engineering", "sandboxId": "38AR275WHHNWOYH1YWR47ZXTKNE4T4", "productionId": "3HIOL0MDAM28KD395PQX9BCVAAF7V2", "feeInDollars": "0.40" },
    { "name": "Job Function - Information Technology", "sandboxId": "3V2G7UO8H86T7GWCLJCDAV9QRBDZ9A", "productionId": "3X03TQUWQDTQ9M9IMW2V2BV4C51OFL", "feeInDollars": "0.40" },
    { "name": "Job Function - Management", "sandboxId": "37OFGIIEXQV7I0N6J2SXSMKY2XYWSS", "productionId": "33LB8PNHHTOBOBWQY1ILADQ251GU4G", "feeInDollars": "0.40" },
    { "name": "Job Function - Marketing, Sales & Business Development", "sandboxId": "3WU6VAO3A6EXN68NDVFO4IGPSTMR6Y", "productionId": "32R8U6NT7JCS2DYJ5LYEJBY2BE2DC2", "feeInDollars": "0.40" },
    { "name": "Job Function - Operations", "sandboxId": "33LB8PNHHTOBOBWQY1HECVJV31L4UV", "productionId": "3VDUABUHOI9TKU0QC61VF5WG5XBU5L", "feeInDollars": "0.40" },
    { "name": "Language Fluency (Basic) - Brazilian Portuguese", "sandboxId": "3X4GDYFBXICH47RBUXZI4RPTJ0J1PJ", "productionId": "3KSLQLZFBV6O9BY2VRQG5KBJE18LM8", "feeInDollars": "1.00" },
    { "name": "Language Fluency (Basic) - Chinese Mandarin", "sandboxId": "3GYFJBAR5GJ55GZO1DFWIKJEC2ZDYP", "productionId": "3KSRVTP5A9P9ET3LRHH4AWD036IHC2", "feeInDollars": "1.00" },
    { "name": "Language Fluency (Basic) - French", "sandboxId": "37AYPMB2R96GO8LN6LUXBB8N89XPE0", "productionId": "35ZCVQVYQ96BLEX64XPM415HA9RSG8", "feeInDollars": "1.00" },
    { "name": "Language Fluency (Basic) - German", "sandboxId": "3C8RYQJ3V2MT89XT6UMJ2TDHC76M9R", "productionId": "39G8VCQFG4E57E1BTDJ4MG559URSF9", "feeInDollars": "1.00" },
    { "name": "Language Fluency (Basic) - Spanish", "sandboxId": "3MS26IBOMQWBW27NAQJD5TQ28XWPD7", "productionId": "3O3C9VE8V1CPLASHO374P1HIP94SH7", "feeInDollars": "1.00" },
    { "name": "LinkedIn Account Holder", "sandboxId": "3S4G8J928WR2XEMZKKK1CYX6CV5NO7", "productionId": "3XS9XHLESXZW2DLTJT51HUFY2M9KUX", "feeInDollars": "0.05" },
    { "name": "Marital Status - Divorced", "sandboxId": "3NZO41202V5GP4GHF5O23SXFVZ15NJ", "productionId": "3SVBP8NUKC741C30HH6WT5VDV9BF5K", "feeInDollars": "0.50" },
    { "name": "Marital Status - Married", "sandboxId": "3YG2ZEI8VYM6QSK9IRW2Y9OY33LBF1", "productionId": "38TZCON5HMNS4DN924LVU8DM20XPIY", "feeInDollars": "0.50" },
    { "name": "Marital Status - Single", "sandboxId": "3VQG0T5OJZPXAJ6WG6WAB4PVUGTUNP", "productionId": "3C8RYQJ3V2MT89XT6UNQ0BKOE669MC", "feeInDollars": "0.50" },
    { "name": "Military experience", "sandboxId": "3S8XFQY1FTN8R196LH1BP4OSKTYNF3", "productionId": "3Q1RR1YLZJITU4EJ12HC0FPDU01M8D", "feeInDollars": "0.30" },
    { "name": "Myspace Account Holder", "sandboxId": "3NWWWIUOD3RP3Y04HPAT9T39ZRH6U6", "productionId": "3W17X9IGO7LEWI06MTWPQEBHY03ZNI", "feeInDollars": "0.05" },
    { "name": "Online Purchase - Automotive Products", "sandboxId": "3SO0EPWUEPDXD4I9WL92FTUQUX2UPX", "productionId": "33IG9TQV30U24JSQUAFE2EMAQWOQ1I", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Baby & Kids", "sandboxId": "36GZVHHGINJ565HZKBZDESSFC2Y0FK", "productionId": "34TL75D0PG9S8ICPWM3AUWC72PWPHN", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Books", "sandboxId": "3D3M1MRGIBSYAII7PSDCKRQMKG4C1E", "productionId": "3VM8BVD4MFUH6ECNJ2O6C4NAD2IKBY", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Clothing & Shoes", "sandboxId": "3LRU1FDZH09315T0WC3ZNKZJ61B290", "productionId": "3LQVAWME7LMA7ZRYHYU52LISC7XB6J", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Electronics & Computers", "sandboxId": "3NF0BIUSIULEG0EUN23HGL9KXB5TEU", "productionId": "347ZKNUE36WD5H8MN16V04ESK09S5M", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Groceries & Food", "sandboxId": "38K25CGMOFSUWCZ7BJYCEXCSRGD1UF", "productionId": "33I37607V28KFJCBTVOTHO9I42PQ8X", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Handmade Products", "sandboxId": "3YGUJZ9C534G5B9EWHTUZ6C5AWGXDE", "productionId": "3EG4VP8Y3KQ2HXXR4UA3DF3NXFXHLJ", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Health & Beauty", "sandboxId": "3J9MM9U3SHCS8I69VKBQ6Y90S9Y38S", "productionId": "35BVSWWGO1PCYWR2KMOHN73150MV9L", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Home & Garden", "sandboxId": "39J7PQMMU2E3YJ2RTNRWKECMAH63WE", "productionId": "35BVSWWGO1PCYWR2KMOHN73150NV9M", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Jewelry", "sandboxId": "31QSZWYWMZN79803MQ7AA0O4EA9XOX", "productionId": "3I33WYIJ9CJ32C8P009TUALM2VQH78", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Movies", "sandboxId": "3FQW154NSKK6JPQ6Y2AFTGU59SL4HU", "productionId": "32O4X5VGWGB8FAOLPO9U2FFB7HV1DK", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Music", "sandboxId": "30LLKV2ET72W5VQMHPZL4W6494009P", "productionId": "3JC3LXC4BIZUKLWMCWS262CQK1Y3CF", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Sports & Outdoor Equipment", "sandboxId": "32Z3VVMZSSBBK5DUVV5VWDSRDHY0GJ", "productionId": "3F81WX5QE0K4XVWTSIZZXZ1Q83HEFT", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Toys", "sandboxId": "3JO55QYDJPCOTS97D1ZW9AZYB632P7", "productionId": "3NNOZZ17WAMAR2LI9II2L7G864K3S9", "feeInDollars": "0.40" },
    { "name": "Online Purchase - Videogames", "sandboxId": "35TOGO3TMMYHM34KF32PW7WX6AA32V", "productionId": "38XLHGG4PNI4PD20CSNDQ8U851A3DF", "feeInDollars": "0.40" },
    { "name": "Parenthood Status", "sandboxId": "3J4VL7BYSILCKR8SFUI3NB8QLSUV8I", "productionId": "3J4VL7BYSILCKR8SFUI3NB8QLSUV8I", "feeInDollars": "0.50" },
    { "name": "Pinterest Account Holder", "sandboxId": "33LK6UI8E3VMRM2OA73RLSYUSS9QC0", "productionId": "32DH8RR06QAI82ZGB92EJ0LYJLKYJA", "feeInDollars": "0.05" },
    { "name": "Primary Internet Device - Desktop", "sandboxId": "3ZZ3ITZ94KDP2GDEGUQ4BS2ELTP7G7", "productionId": "34FD3JAXAUPRR8KFJU8B493B6V8ZUK", "feeInDollars": "0.40" },
    { "name": "Primary Internet Device - Laptop", "sandboxId": "3LRU1FDZH09315T0WC3ZNKZJ60829V", "productionId": "3AZSL89P122CVY34M6MQBNADJ875E3", "feeInDollars": "0.40" },
    { "name": "Primary Internet Device - Smartphone or Tablet", "sandboxId": "3PP3EVLPRLCKTOVLYNT0J2XMM6M9QG", "productionId": "36YI3I1DYLN87YE90ZGSDPACW2VU7N", "feeInDollars": "0.40" },
    { "name": "Primary Mobile Device - Android", "sandboxId": "3N5CCFXKGLIIGFG8AI99F1L6ACYG2T", "productionId": "3LPLT0UQKO3E8MHECGLS9W06NN0GPS", "feeInDollars": "0.50" },
    { "name": "Primary Mobile Device - iPhone", "sandboxId": "3OP13B7XRC2PNL47H29YVUOHXJC1IP", "productionId": "3GYFJBAR5GJ55GZO1DG3G2QLE0NDY9", "feeInDollars": "0.50" },
    { "name": "Primary News Source - Online News (News Websites, News Apps)", "sandboxId": "3J9ZOWKR0FYAXIMOWZ2BROMSE3N313", "productionId": "3J9L42OG8J35WIV5JQKP4E0LAJYUIC", "feeInDollars": "0.30" },
    { "name": "Primary News Source - Podcasts", "sandboxId": "3321WWT37PF955PMQT3LE5ZDCOAR27", "productionId": "3FIQQ827RGNC88GVKOZETGIMTWK6NC", "feeInDollars": "0.30" },
    { "name": "Primary News Source - Print (Newspapers & Periodicals)", "sandboxId": "3L339059XKHPK185F1NDHD4SSHB0HI", "productionId": "3BR5WBA9O5CABVSO325HFK129IHEGS", "feeInDollars": "0.30" },
    { "name": "Primary News Source - Radio (AM/FM, Internet, Satellite)", "sandboxId": "3PDP75MATNEQJU2M3DM0YCT83843V4", "productionId": "3RKPRCCAXU9D101FY2ZY4YK5XT9SEO", "feeInDollars": "0.30" },
    { "name": "Primary News Source - Social Media", "sandboxId": "3RAGO4OQ8ADTOL3XK54GWS5D1ARY8R", "productionId": "3GJ2YWF1397Z08EFNWYCM6ADO7EMQH", "feeInDollars": "0.30" },
    { "name": "Primary News Source - TV (Late Night Comedy, Other)", "sandboxId": "3XS9XHLESXZW2DLTJT4UJC8R0NWUKW", "productionId": "31I5O1WRTD0HYRQ57GF9YAJ9B0FSPD", "feeInDollars": "0.30" },
    { "name": "Primary News Source - TV (Local/Cable News Broadcast)", "sandboxId": "34O6GN9FZ907HR3UA09DIGEF74GW04", "productionId": "3ENYA26IMHKFPAZ0FV59TEEN5BD0TZ", "feeInDollars": "0.30" },
    { "name": "Primary News Source - Word of Mouth", "sandboxId": "3EJZ0T8ZKH8RJ6C1JEF2DXGVM7M96Z", "productionId": "34CSR6UIX2L2MDK0ICKQ7ON0YW5XUI", "feeInDollars": "0.30" },
    { "name": "Reddit Account Holder", "sandboxId": "3E3LVQS9GBGA13KVM7XDK8VMZK4Y53", "productionId": "32HPRZ3TSLYH2064JOFRCYTWJ82KT6", "feeInDollars": "0.05" },
    { "name": "Single Family Home Resident", "sandboxId": "376OOLYQQ1F0O28454Q8ZE29OJF7XT", "productionId": "3EG4VP8Y3KQ2HXXR4UA3DF3NXEVLHJ", "feeInDollars": "0.30" },
    { "name": "Smoker", "sandboxId": "3SHVXOT5TLQLCGN7C39I3WQQ0ZVSJV", "productionId": "3RESSZVHR4L0V1E1D9V5LNAGGXAHHW", "feeInDollars": "0.30" },
    { "name": "Tablet Owner", "sandboxId": "33AQ5F1Y1V77OGOC6JDDWLXPCUPW16", "productionId": "3TKFE7XEDHKIEKXQGFGM4W4E7VDNBS", "feeInDollars": "0.20" },
    { "name": "Tumblr Account Holder", "sandboxId": "3VKHPH0RG1TTUYMY19TSTYJXP51QFB", "productionId": "38CFFZ6E4YEWFSATOJF6DGHHGTIKVM", "feeInDollars": "0.05" },
    { "name": "Twitter Account Holder", "sandboxId": "3KSRVTP5A9P9ET3LRHH4AWD035YCHB", "productionId": "3KSRVTP5A9P9ET3LRHH4AWD035YCHB", "feeInDollars": "0.05" },
    { "name": "US Bachelor's Degree", "sandboxId": "3QTUCSJAYWPDXVKYZOFDFX70RD5GK2", "productionId": "3PDP75MATNEQJU2M3DN7WU0F5763V4", "feeInDollars": "0.50" },
    { "name": "US Graduate Degree", "sandboxId": "3Q1RR1YLZJITU4EJ12G52XI6SZU8MQ", "productionId": "3FWY9OFI9302ZS90N2UV3APJC2AVXZ", "feeInDollars": "0.65" },
    { "name": "US High School Graduate", "sandboxId": "3BB04KUNDGX1NXGW3YHWGQQMFB6F3C", "productionId": "3D95X78DG55X7Z43AZIOMTK5O7D8TE", "feeInDollars": "0.05" },
    { "name": "US Political Affiliation - Conservative", "sandboxId": "35KYC9RVPIDU3HEVNHU6TDFXQB0XXI", "productionId": "33YW7GZLPAFL6KPZ5I4X2XBG0O5S24", "feeInDollars": "0.40" },
    { "name": "US Political Affiliation - Liberal", "sandboxId": "3N2JCLSAPVSJ3M45SDG8CRM6SHUXYO", "productionId": "33JPNCO5K9MZ3NX69YSPG1RHL3YXL6", "feeInDollars": "0.40" },
    { "name": "Vacation Frequency - Every Few Years", "sandboxId": "3XEJ90GX9GFRZXZASYFQO6PLC9MYVS", "productionId": "3XYNUJ3W3LMZNM57HF6M76FKDCH72P", "feeInDollars": "0.30" },
    { "name": "Vacation Frequency - Every Month", "sandboxId": "3U8EC01SO75D4J8N0QMNGZWHQG549Y", "productionId": "3OP13B7XRC2PNL47H2A5TCVOZME1IX", "feeInDollars": "0.30" },
    { "name": "Vacation Frequency - Every Quarter", "sandboxId": "3O6AJM428T355ZYBFHJIORM8EYYCJE", "productionId": "3D7IO5DB211EXB1N746VICF8JW2NM6", "feeInDollars": "0.30" },
    { "name": "Vacation Frequency - Every Year", "sandboxId": "3FIQQ827RGNC88GVKOY7VYBFRWS6NK", "productionId": "3PUFX7K0N27ED168PNEYZME163PW2F", "feeInDollars": "0.30" },
    { "name": "Vacation Frequency - Never", "sandboxId": "3KAW48Y220TUQTG7L3YKANBKH6X6OZ", "productionId": "3HNFM25IALTO841QLFKRQGKCJQH730", "feeInDollars": "0.30" },
    { "name": "Voted in 2012 US Presidential Election", "sandboxId": "31XUIG3A6ON28QNPO5C5KRV1U6AZFY", "productionId": "38SUGEXZPORO1M4JW2TJ93MRWJRVDO", "feeInDollars": "0.10" },
    { "name": "Voted in 2016 US Presidential Election", "sandboxId": false, "productionId": "37U3YJ2MMPUB0PMBI2W22O67KNZCLC", "feeInDollars": "0.10" },
    { "name": "YouTube Account Holder", "sandboxId": "3D9IZUY1O3RFWZKIBE8291QQ82HT1R", "productionId": "3GI0IWJ6KQ6DJM5YTU2QKFLBYAKYK9", "feeInDollars": "0.05" }
]

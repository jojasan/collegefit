import schoolsDB from './SchoolsDB';

const tableA1 = [
  {
    state: 'alabama',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,
  },
  {
    state: 'alaska',
    percentBelow15k: 0.02,
    percentAbove15k: 0.01,},
  {
    state: 'american Samoa',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'arizona',
    percentBelow15k: 0.04,
    percentAbove15k: 0.03,},
  {
    state: 'arkansas',
    percentBelow15k: 0.04,
    percentAbove15k: 0.03,},
  {
    state: 'california',
    percentBelow15k: 0.08,
    percentAbove15k: 0.07,},
  {
    state: 'canada and canadian provinces',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'colorado',
    percentBelow15k: 0.04,
    percentAbove15k: 0.03,},
  {
    state: 'connecticut',
    percentBelow15k: 0.09,
    percentAbove15k: 0.08,},
  {
    state: 'delaware',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'district of columbia',
    percentBelow15k: 0.07,
    percentAbove15k: 0.06,},
  {
    state: 'federated states of micronesia',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'florida',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'georgia',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'guam',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'hawaii',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'idaho',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'illinois',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'indiana',
    percentBelow15k: 0.04,
    percentAbove15k: 0.03,},
  {
    state: 'iowa',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'Kansas',
    percentBelow15k: 0.04,
    percentAbove15k: 0.03,},
  {
    state: 'kentucky',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'louisiana',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'maine',
    percentBelow15k: 0.06,
    percentAbove15k: 0.05,},
  {
    state: 'marshall islands',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'maryland',
    percentBelow15k: 0.08,
    percentAbove15k: 0.07,},
  {
    state: 'massachusetts',
    percentBelow15k: 0.07,
    percentAbove15k: 0.06,},
  {
    state: 'mexico',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'michigan',
    percentBelow15k: 0.04,
    percentAbove15k: 0.03,},
  {
    state: 'minnesota',
    percentBelow15k: 0.06,
    percentAbove15k: 0.05,},
  {
    state: 'mississippi',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'missouri',
    percentBelow15k: 0.04,
    percentAbove15k: 0.03,},
  {
    state: 'montana',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'nebraska',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'nevada',
    percentBelow15k: 0.02,
    percentAbove15k: 0.01,},
  {
    state: 'new hampshire',
    percentBelow15k: 0.04,
    percentAbove15k: 0.03,},
  {
    state: 'new jersey',
    percentBelow15k: 0.09,
    percentAbove15k: 0.08,},
  {
    state: 'new mexico',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'new york',
    percentBelow15k: 0.09,
    percentAbove15k: 0.08,},
  {
    state: 'north carolina',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'north dakota',
    percentBelow15k: 0.02,
    percentAbove15k: 0.01,},
  {
    state: 'northern mariana islands',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'ohio',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'oklahoma',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'oregon',
    percentBelow15k: 0.07,
    percentAbove15k: 0.06,},
  {
    state: 'palau',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'pennsylvania',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'puerto rico',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'rhode island',
    percentBelow15k: 0.06,
    percentAbove15k: 0.05,},
  {
    state: 'south carolina',
    percentBelow15k: 0.04,
    percentAbove15k: 0.03,},
  {
    state: 'south dakota',
    percentBelow15k: 0.02,
    percentAbove15k: 0.01,},
  {
    state: 'tennessee',
    percentBelow15k: 0.02,
    percentAbove15k: 0.01,},
  {
    state: 'texas',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'utah',
    percentBelow15k: 0.05,
    percentAbove15k: 0.04,},
  {
    state: 'vermont',
    percentBelow15k: 0.06,
    percentAbove15k: 0.05,},
  {
    state: 'virgin islands',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'virginia',
    percentBelow15k: 0.06,
    percentAbove15k: 0.05,},
  {
    state: 'washington',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'west virginia',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'wisconsin',
    percentBelow15k: 0.06,
    percentAbove15k: 0.05,},
  {
    state: 'wyoming',
    percentBelow15k: 0.02,
    percentAbove15k: 0.01,},
  {
    state: 'blank or invalid state',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},
  {
    state: 'other',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,},

];

const tableA2 = [
  {
    range_low: 0,
    range_high: 127200,
    fixedContribution: 0,
    percAAIOverX: 0.0765,
    x: 0
  },
  {
    range_low: 127201,
    range_high: 9999999999,
    fixedContribution:  9730.80,
    percAAIOverX: 0.0145,
    x:  127200
  },
];

const tableA3 = [ //row is # in household, column is # in college
  [ //first row doesnt'exist: number in household can't be less than 2
    0,0,0,0,0,0,0,0,0,0,0,0,0,0 //15 zeroes for first row
  ],
  [
    18580,15400,0,0,0,0,0,0,0,0,0,0,0,0 //in total there should be 14 elements
  ],
  //do the rest
  [
    23140,19980,16800,0,0,0,0,0,0,0,0,0,0,0
  ],
  [
    28580,25400,22240,19060,0,0,0,0,0,0,0,0,0,0
  ],
  [
    33720,30540,27380,24200,21040,0,0,0,0,0,0,0,0,0
  ],
  [
    39430,36260,33100,29920,26760,23600,0,0,0,0,0,0,0,0
  ],
  [
    43880,40720,37560,34400,31240,28080,24920,0,0,0,0,0,0,0
  ],
  [
    48330,45170,42010,38850,35690,32530,29370,26210,0,0,0,0,0,0
  ],
  [
    52780,49620,46460,43300,40140,36980,33820,30660,27500,0,0,0,0,0
  ],
  [
    57230,54070,50910,47750,44590,41430,38270,35110,31950,28790,0,0,0,0
  ],
  [
    61680,58520,55360,52200,49040,45880,42720,39560,36400,33240,30080,0,0,0
  ],
  [
    66130,62970,59810,56650,53490,50330,47170,44010,40850,37690,34530,31370,0,0
  ],
  [
    70580,67420,64260,61100,57940,54780,51620,48460,45300,42140,38980,35820,32660,0
  ],
  [
    75030,71870,68710,65550,62390,59230,56070,52910,49750,46590,43430,40270,37110,33950
  ],
  [
    79480,76320,73160,70000,66840,63680,60520,57360,54200,51040,47880,44720,41560,38400
  ],

];

const tableA4 = [
  {
    range_low: 0,
    range_high: 1,
    fixedContribution: 0,
    percAAIOverX: 0.0,
    x: 0
  },
  {
    range_low: 1,
    range_high: 13000,
    fixedContribution: 0,
    percAAIOverX: 0.4,
    x: 0
  },
  {
    range_low: 130001,
    range_high: 395000,
    fixedContribution: 52000,
    percAAIOverX: 0.5,
    x: 130000
  },
  {
    range_low: 395001,
    range_high: 660000,
    fixedContribution: 184500,
    percAAIOverX: 0.6,
    x: 395000
  },
  {
    range_low: 660001,
    range_high: 9999999999,
    fixedContribution: 343500,
    percAAIOverX: 1.0,
    x: 660000
  },
];

const tableA5 = [
  {
    ageOfOlderParent: 25,
    allowanceIf2Parent: 0,
    allowanceIf1Parent: 0,
  },
  {
    ageOfOlderParent: 26,
    allowanceIf2Parent: 700,
    allowanceIf1Parent: 300,
  },
  {
    ageOfOlderParent: 27,
    allowanceIf2Parent: 1300,
    allowanceIf1Parent: 700,
  },
  {
    ageOfOlderParent: 28,
    allowanceIf2Parent: 2000,
    allowanceIf1Parent: 1000,
  },
  {
    ageOfOlderParent: 29,
    allowanceIf2Parent: 2600,
    allowanceIf1Parent: 1400,
  },
  {
    ageOfOlderParent: 30,
    allowanceIf2Parent: 3300,
    allowanceIf1Parent: 1700,
  },
  {
    ageOfOlderParent: 31,
    allowanceIf2Parent: 4000,
    allowanceIf1Parent: 2100,
  },
  {
    ageOfOlderParent: 32,
    allowanceIf2Parent: 4600,
    allowanceIf1Parent: 2400,
  },
  {
    ageOfOlderParent: 33,
    allowanceIf2Parent: 5300,
    allowanceIf1Parent: 2800,
  },
  {
    ageOfOlderParent: 34,
    allowanceIf2Parent: 5900,
    allowanceIf1Parent: 3100,
  },
  {
    ageOfOlderParent: 35,
    allowanceIf2Parent: 6600,
    allowanceIf1Parent: 3500,
  },
  {
    ageOfOlderParent: 36,
    allowanceIf2Parent: 7300,
    allowanceIf1Parent: 3800,
  },
  {
    ageOfOlderParent: 37,
    allowanceIf2Parent: 7900,
    allowanceIf1Parent: 4200,
  },
  {
    ageOfOlderParent: 38,
    allowanceIf2Parent: 8600,
    allowanceIf1Parent: 4500,
  },
  {
    ageOfOlderParent: 39,
    allowanceIf2Parent: 9200,
    allowanceIf1Parent: 4900,
  },
  {
    ageOfOlderParent: 40,
    allowanceIf2Parent: 9900,
    allowanceIf1Parent: 5200,
  },
  {
    ageOfOlderParent: 41,
    allowanceIf2Parent: 10100,
    allowanceIf1Parent: 5300,
  },
  {
    ageOfOlderParent: 42,
    allowanceIf2Parent: 10400,
    allowanceIf1Parent: 5500,
  },
  {
    ageOfOlderParent: 43,
    allowanceIf2Parent: 10600,
    allowanceIf1Parent: 5600,
  },
  {
    ageOfOlderParent: 44,
    allowanceIf2Parent: 10900,
    allowanceIf1Parent: 5700,
  },
  {
    ageOfOlderParent: 45,
    allowanceIf2Parent: 11100,
    allowanceIf1Parent: 5800,
  },
  {
    ageOfOlderParent: 46,
    allowanceIf2Parent: 11400,
    allowanceIf1Parent: 6000,
  },
  {
    ageOfOlderParent: 47,
    allowanceIf2Parent: 11600,
    allowanceIf1Parent: 6100,
  },
  {
    ageOfOlderParent: 48,
    allowanceIf2Parent: 11900,
    allowanceIf1Parent: 6200,
  },
  {
    ageOfOlderParent: 49,
    allowanceIf2Parent: 12200,
    allowanceIf1Parent: 6400,
  },
  {
    ageOfOlderParent: 50,
    allowanceIf2Parent: 12500,
    allowanceIf1Parent: 6500,
  },
  {
    ageOfOlderParent: 51,
    allowanceIf2Parent: 12900,
    allowanceIf1Parent: 6700,
  },
  {
    ageOfOlderParent: 52,
    allowanceIf2Parent: 13200,
    allowanceIf1Parent: 6800,
  },
  {
    ageOfOlderParent: 53,
    allowanceIf2Parent: 13500,
    allowanceIf1Parent: 7000,
  },
  {
    ageOfOlderParent: 54,
    allowanceIf2Parent: 13900,
    allowanceIf1Parent: 7200,
  },
  {
    ageOfOlderParent: 55,
    allowanceIf2Parent: 14300,
    allowanceIf1Parent: 7300,
  },
  {
    ageOfOlderParent: 56,
    allowanceIf2Parent: 14700,
    allowanceIf1Parent: 7500,
  },
  {
    ageOfOlderParent: 57,
    allowanceIf2Parent: 15100,
    allowanceIf1Parent: 7700,
  },
  {
    ageOfOlderParent: 58,
    allowanceIf2Parent: 15500,
    allowanceIf1Parent: 7900,
  },
  {
    ageOfOlderParent: 59,
    allowanceIf2Parent: 15900,
    allowanceIf1Parent: 8100,
  },
  {
    ageOfOlderParent: 60,
    allowanceIf2Parent: 16400,
    allowanceIf1Parent: 8300,
  },
  {
    ageOfOlderParent: 61,
    allowanceIf2Parent: 16800,
    allowanceIf1Parent: 8500,
  },
  {
    ageOfOlderParent: 62,
    allowanceIf2Parent: 17300,
    allowanceIf1Parent: 8800,
  },
  {
    ageOfOlderParent: 63,
    allowanceIf2Parent: 17800,
    allowanceIf1Parent: 9000,
  },
  {
    ageOfOlderParent: 64,
    allowanceIf2Parent: 18300,
    allowanceIf1Parent: 9200,
  },
  {
    ageOfOlderParent: 65,
    allowanceIf2Parent: 18900,
    allowanceIf1Parent: 9500,
  },
];

const tableA6 = [
  {
    range_low: 0,
    range_high: 3408,
    fixedContribution: -750000,
    percAAIOverX: 0.0,
    x: 0
  },
  {
    range_low: 3409,
    range_high: 16600,
    fixedContribution: 0,
    percAAIOverX: 0.22,
    x: 0
  },
  {
    range_low: 16601,
    range_high: 20800,
    fixedContribution: 3652,
    percAAIOverX: 0.25,
    x: 16600
  },
  {
    range_low: 20801,
    range_high: 25100,
    fixedContribution: 4702,
    percAAIOverX: .29,
    x: 20800
  },
  {
    range_low: 25101,
    range_high: 29300,
    fixedContribution: 5949,
    percAAIOverX: .34,
    x: 25100
  },
  {
    range_low: 29301,
    range_high: 23600,
    fixedContribution: 7377,
    percAAIOverX: .40,
    x: 29300
  },
  {
    range_low: 33601,
    range_high: 9999999999,
    fixedContribution: 9097,
    percAAIOverX: .47,
    x: 33600
  },
];

const tableA7 = [
  {
    state: 'alabama',
    percent: 0.02
  },
  {
    state: 'alaska',
    percent: 0.0
  },
  {
    state: 'american samoa',
    percent: 0.02
  },
  {
    state: 'arizona',
    percent: 0.02
  },
  {
    state: 'arkansas',
    percent: 0.03
  },
  {
    state: 'california',
    percent: 0.06
  },
  {
    state: 'canada and canadian provinces',
    percent: 0.02
  },
  {
    state: 'colorado',
    percent: 0.03
  },
  {
    state: 'connecticut',
    percent: 0.05
  },
  {
    state: 'delaware',
    percent: 0.03
  },
  {
    state: 'district of columbia',
    percent: 0.06
  },
  {
    state: 'federated states of micronesia',
    percent: 0.02
  },
  {
    state: 'florida',
    percent: 0.01
  },
  {
    state: 'georgia',
    percent: 0.03
  },
  {
    state: 'guam',
    percent: 0.02
  },
  {
    state: 'hawaii',
    percent: 0.04
  },
  {
    state: 'idaho',
    percent: 0.03
  },
  {
    state: 'illinois',
    percent: 0.03
  },
  {
    state: 'indiana',
    percent: 0.03
  },
  {
    state: 'iowa',
    percent: 0.03
  },
  {
    state: 'kansas',
    percent: 0.02
  },
  {
    state: 'kentucky',
    percent: 0.04
  },
  {
    state: 'louisiana',
    percent: 0.02
  },
  {
    state: 'maine',
    percent: 0.03
  },
  {
    state: 'marshall islands',
    percent: 0.02
  },
  {
    state: 'maryland',
    percent: 0.06
  },
  {
    state: 'massachusetts',
    percent: 0.04
  },
  {
    state: 'mexico',
    percent: 0.02
  },
  {
    state: 'michigan',
    percent: 0.03
  },
  {
    state: 'minnesota',
    percent: 0.05
  },
  {
    state: 'mississippi',
    percent: 0.02
  },
  {
    state: 'missouri',
    percent: 0.03
  },
  {
    state: 'montana',
    percent: 0.03
  },
  {
    state: 'nebraska',
    percent: 0.03
  },
  {
    state: 'nevada',
    percent: 0.01
  },
  {
    state: 'new hampshire',
    percent: 0.01
  },
  {
    state: 'new jersey',
    percent: 0.05
  },
  {
    state: 'new mexico',
    percent: 0.02
  },
  {
    state: 'new york',
    percent: 0.07
  },
  {
    state: 'north carolina',
    percent: 0.03
  },
  {
    state: 'north dakota',
    percent: 0.01
  },
  {
    state: 'northern mariana islands',
    percent: 0.02
  },
  {
    state: 'ohio',
    percent: 0.03
  },
  {
    state: 'oklahoma',
    percent: 0.02
  },
  {
    state: 'oregon',
    percent: 0.05
  },
  {
    state: 'palau',
    percent: 0.02
  },
  {
    state: 'pennsylvania',
    percent: 0.03
  },
  {
    state: 'puerto rico',
    percent: 0.02
  },
  {
    state: 'rhode island',
    percent: 0.04
  },
  {
    state: 'south carolina',
    percent: 0.03
  },
  {
    state: 'south dakota',
    percent: 0.01
  },
  {
    state: 'tennessee',
    percent: 0.01
  },
  {
    state: 'texas',
    percent: 0.01
  },
  {
    state: 'utah',
    percent: 0.03
  },
  {
    state: 'vermont',
    percent: 0.03
  },
  {
    state: 'virgin islands',
    percent: 0.02
  },
  {
    state: 'virginia',
    percent: 0.04
  },
  {
    state: 'washington',
    percent: 0.01
  },
  {
    state: 'west virginia',
    percent: 0.03
  },
  {
    state: 'wisconsin',
    percent: 0.04
  },
  {
    state: 'wyoming',
    percent: 0.01
  },
  {
    state: 'blank or invalid state',
    percent: 0.02
  },
  {
    state: 'other',
    percent: 0.02
  },
];

const incomeceiling = [
  {
    familysize: 2,
    calgrantA: 92100,
    calgrantB: 43000,
    calgrantC: 92100,
  },
  {
    familysize: 3,
    calgrantA: 94400,
    calgrantB: 48500,
    calgrantC: 94400,
  },
  {
    familysize: 4,
    calgrantA: 102500,
    calgrantB: 53900,
    calgrantC: 102500,
  },
  {
    familysize: 5,
    calgrantA: 109900,
    calgrantB: 60300,
    calgrantC: 109900,
  },
  {
    familysize: 6,
    calgrantA: 118500,
    calgrantB: 65100,
    calgrantC: 118500,
  },
];

const stateaid = [ //TODO Check with Oscar, this is wrong
  {
    aidtype: 'calgrantA',
    schooltype: 'CSU',
    y1: 92100,
    y2: 92100,
    y3: 92100,
    y4: 92100,
  },
  {
    aidtype: 'calgrantA',
    schooltype: 'UC',
    y1: 14130, //I updated this to what I think it should be
    y2: 94400,
    y3: 94400,
    y4: 94400,
  },
  {
    aidtype: 'calgrantA',
    schooltype: 'For-Profit (Non-WASC)',
    y1: 102500,
    y2: 102500,
    y3: 102500,
    y4: 102500,
  },
  {
    aidtype: 'calgrantA',
    schooltype: 'For-Profit (WASC)',
    y1: 109900,
    y2: 109900,
    y3: 109900,
    y4: 109900,
  },
  {
    aidtype: 'calgrantA',
    schooltype: 'Private Non-Profit',
    y1: 118500,
    y2: 118500,
    y3: 118500,
    y4: 118500,
  },
  {
    aidtype: 'calgrantB',
    schooltype: 'CSU',
    y1: 1672,
    y2: 92100,
    y3: 92100,
    y4: 92100,
  },
  {
    aidtype: 'calgrantB',
    schooltype: 'UC',
    y1: 1672,
    y2: 94400,
    y3: 94400,
    y4: 94400,
  },
  {
    aidtype: 'calgrantB',
    schooltype: 'For-Profit (Non-WASC)',
    y1: 1672,
    y2: 102500,
    y3: 102500,
    y4: 102500,
  },
  {
    aidtype: 'calgrantB',
    schooltype: 'For-Profit (WASC)',
    y1: 1672,
    y2: 109900,
    y3: 109900,
    y4: 109900,
  },
  {
    aidtype: 'calgrantB',
    schooltype: 'Private Non-Profit',
    y1: 1672,
    y2: 118500,
    y3: 118500,
    y4: 118500,
  },
];

const pellGrantProgram = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [650,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [750,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [850,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [950,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1050,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1150,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1250,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1350,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1450,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1550,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1650,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1750,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1850,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1950,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2050,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2150,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2250,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2350,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2450,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2550,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2650,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2750,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2850,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2950,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3050,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3150,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3250,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3350,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3450,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3550,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3650,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3750,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3850,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3950,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4050,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4150,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4250,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4350,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4450,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4550,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4650,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4750,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4850,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [4950,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [5050,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0,0],
  [5150,5100,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0,0],
  [5250,5200,5100,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0,0],
  [5350,5300,5200,5100,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0,0],
  [5450,5400,5300,5200,5100,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0,0],
  [5550,5500,5400,5300,5200,5100,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0,0],
  [5650,5600,5500,5400,5300,5200,5100,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0,0],
  [5750,5700,5600,5500,5400,5300,5200,5100,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0,0],
  [5850,5800,5700,5600,5500,5400,5300,5200,5100,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0,0],
  [5950,5900,5800,5700,5600,5500,5400,5300,5200,5100,5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,0,0,0],
  [6047,5997,5897,5797,5697,5597,5497,5397,5297,5197,5097,4997,4897,4797,4697,4597,4497,4397,4297,4197,4097,3997,3897,3797,3697,3597,3497,3397,3297,3197,3097,2997,2897,2797,2697,2597,2497,2397,2297,2197,2097,1997,1897,1797,1697,1597,1497,1397,1297,1197,1097,997,897,797,697,0,0],
  [6095,6045,5945,5845,5745,5645,5545,5445,5345,5245,5145,5045,4945,4845,4745,4645,4545,4445,4345,4245,4145,4045,3945,3845,3745,3645,3545,3445,3345,3245,3145,3045,2945,2845,2745,2645,2545,2445,2345,2245,2145,2045,1945,1845,1745,1645,1545,1445,1345,1245,1145,1045,945,845,745,652,0],
];

const searchTableA1 = (searchState, totalIncome) => {
  for (var i = 0; i < tableA1.length; i++) {
    const { state, percentBelow15k, percentAbove15k } = tableA1[i];
    if(tableA1[i].state.toLocaleLowerCase().localeCompare(searchState.toLocaleLowerCase()) == 0) {
      return (totalIncome < 15000) ? percentBelow15k : percentAbove15k;
    }
  }
  return 0;
};

const searchTableA2 = (pIncome) => {
  for (var i = 0; i < tableA2.length; i++) {
    let { range_low, range_high, fixedContribution, percAAIOverX, x } = tableA2[i];
    if(pIncome >= range_low && pIncome <= range_high) {
      return fixedContribution + (pIncome - x) * percAAIOverX;
    }
  }
  return 0;
};

const searchTableA3 = (numberInHousehold, numberInCollege) => {
  return tableA3[numberInHousehold-1][numberInCollege-1];
};

const searchTableA4 = (worthBiz) => {
  for (var i = 0; i < tableA4.length; i++) {
    let { range_low, range_high, fixedContribution, percAAIOverX, x } = tableA4[i];
    if(worthBiz >= range_low && worthBiz <= range_high) {
      return fixedContribution + (worthBiz - x) * percAAIOverX;
    }
  }
  return 0;
};

const searchTableA5 = (age, numberOfParents) => {
  if(age <= 25) {
    return (numberOfParents == 1) ? tableA5[0].allowanceIf1Parent : tableA5[0].allowanceIf2Parent;
  }
  for (var i = 0; i < tableA5.length; i++) {
    let { ageOfOlderParent, allowanceIf1Parent, allowanceIf2Parent } = tableA5[i];
    if(ageOfOlderParent == age) {
      return (numberOfParents == 1) ? allowanceIf1Parent : allowanceIf2Parent;
    }
  }
  return 0;
};

const searchTableA6 = (aai) => {
  for (var i = 0; i < tableA6.length; i++) {
    let { range_low, range_high, fixedContribution, percAAIOverX, x } = tableA6[i];
    if(aai >= range_low && aai <= range_high) {
      return fixedContribution + (aai - x) * percAAIOverX;
    }
  }
  return 0;
};

const searchTableA7 = (state) => {
  for (var i = 0; i < tableA7.length; i++) {
    if(tableA7[i].state.toLocaleLowerCase().localeCompare(state.toLocaleLowerCase()) == 0) {
      return tableA7[i].percent;
    }
  }
  return 0;
};

const searchPellGrantProgram = (coa, efc) => {
  let x_coord = 0
  let y_coord = 0;
  if(coa != 200 && efc != 0) {
    x_coord = Math.floor(coa/100) - 1
    y_coord = efc%100 == 0 ? efc/100 : Math.floor(efc/100) + 1;
  }
  if(coa > 6095) x_coord = pellGrantProgram.length - 1;
  if(efc > 6487) y_coord = pellGrantProgram[0].length - 1;
  console.log(pellGrantProgram[x_coord][y_coord])
  //TODO missing case when only efc = 0 (first column)
  return pellGrantProgram[x_coord][y_coord];
};

const searchIncomeCeiling = (familySize, grantType) => {
  for (var i = 0; i < incomeceiling.length; i++) {
    const { familysize, calgrantA, calgrantB } = incomeceiling[i];
    if(familySize == familysize) {
      if(grantType == 'A') {
        return calgrantA;
      } else {
        return calgrantB;
      }
    }
  }
  return 0;
};

const searchStateAid = (schoolID, grantType) => {
  const schoolTypeSearched = schoolsDB.searchSchoolType(schoolID);
  for (var i = 0; i < stateaid.length; i++) {
    const { aidtype, schooltype, y1, y2, y3, y4 } = stateaid[i];
    let yearlyAids = [y1, y2, y3, y4];
    if(grantType == 'A') {
      if(aidtype == 'calgrantA' && schoolTypeSearched == schooltype) {
        return yearlyAids;
      }
    } else if (grantType =='B') {
      if(aidtype == 'calgrantB' && schoolTypeSearched == schooltype) {
        return yearlyAids;
      }
    }
  }
  return [0,0,0,0];
};

const databases = {
  searchTableA1,
  searchTableA2,
  searchTableA3,
  searchTableA4,
  searchTableA5,
  searchTableA6,
  searchTableA7,
  searchPellGrantProgram,
  searchIncomeCeiling,
  searchStateAid,
};

export default databases;

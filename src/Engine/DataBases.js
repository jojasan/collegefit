const tableA1 = [
  {
    state: 'alabama',
    percentBelow15k: 0.03,
    percentAbove15k: 0.02,
  },
  {//ADD the rest here
    state: 'state',
    percentBelow15k: 0.0,
    percentAbove15k: 0.0,
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

const searchTableA3 = (numberInHousehold, numberInCollege) => {
  return tableA3[numberInHousehold][numberInCollege];
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

const databases = {
  searchTableA5,
  searchTableA6,
};

export default databases;

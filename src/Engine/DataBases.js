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
  {//ADD the rest here
    ageOfOlderParent: 0,
    allowanceIf2Parent: 0,
    allowanceIf1Parent: 0,
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
  { //ADD the rest here
    range_low: 0,
    range_high: 0,
    fixedContribution: 0,
    percAAIOverX: 0,
    x: 0
  },
];

const tableA7 = [
  {
    state: 'alabama',
    percent: 0.02
  },
  {//ADD the rest here
    state: 'name',
    percent: 0.0
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

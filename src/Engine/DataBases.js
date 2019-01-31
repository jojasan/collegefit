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

const tableA3 = [
  [
// josue
  ],
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

const databases = {
  searchTableA5,
  searchTableA6,
};

export default databases;

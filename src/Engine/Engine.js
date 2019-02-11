import databases from './DataBases';
import schoolsDB from './SchoolsDB';

const runEngine = (inputs) => {
  console.log('Engine starting with following params:');
  console.log(inputs);
  addAssumptionsFixes(inputs);
  //TODO: need to loop through all the schools. Initially set 1 school as default
  const results1 = runEngineForSchoolMajor(inputs, inputs.schoolCompare1, 'Major1');
  const results2 = runEngineForSchoolMajor(inputs, inputs.schoolCompare2, 'Major1');
  const results3 = runEngineForSchoolMajor(inputs, inputs.schoolCompare3, 'Major1');

  const results = [
    results1,
    results2,
    results3,
  ];

  return results;
};

const runEngineForSchoolMajor = (inputs, school, major) => {
  console.log('Running Engine for School -' + school + '- and Major -' + major + '-')
  inputs['currentSchool'] = school;
  inputs['currentMajor'] = major;
  //starting with federal aid
  const federalAid = getFederalAid(inputs);
  const totalCOA = getTotalCostAttendance(inputs);
  const efc = getEFC(inputs, false);
  const financialNeed = totalCOA - efc;
  const finNeedAfterFedAid = financialNeed - federalAid;

  //now doing state aid
  const stateAid = getStateAid(inputs, finNeedAfterFedAid);

  //now private aid
  const privateAid = getPrivatelAid(inputs);

  //
  const totalAid = federalAid + stateAid + privateAid;

  console.log('Fed aid is: ' + federalAid);
  console.log('State aid is: ' + stateAid);
  console.log('Private aid is: ' + privateAid);
  console.log('Total aid is: ' + totalAid);

  const result = {
    federalAid,
    stateAid,
    privateAid,
    totalCOA,
    efc,
    roi: 0,
  };

  return result;
};

//-------------------- FEDERAL AID SECTION ----------------------
const getFederalAid = (inputs) => {
  console.log('Calculating Federal Aid');
  const efc = getEFC(inputs, true);
  console.log('EFC is: ' + efc);
  const totalCOA = getTotalCostAttendance(inputs);
  console.log('Total COA is : ' + totalCOA);
  const grants = getGrants(inputs, efc, totalCOA);
  return grants;
};

const getEFC = (inputs, showLogs) => {
  const parentsContribution = getParentsContribution(inputs);
  const studentContributionAAI = getStudentContributionAAIncome(inputs);
  const studentContributionAssets = getStudentContributionAssets(inputs);
  if(showLogs) {
    console.log('Parents Contribution is: ' + parentsContribution);
    console.log('Student Contribution AAI is: ' + studentContributionAAI);
    console.log('Student Contribution Assets is: ' + studentContributionAssets);
  }
  return parentsContribution + studentContributionAAI + studentContributionAssets;
};

const getTotalCostAttendance = (inputs) => {
  const { studentState, livingPreferences, currentSchool } = inputs;
  const tuitionCost = schoolsDB.searchSchoolCost(currentSchool, studentState);
  const livingExpenses = schoolsDB.searchSchoolLivingExpenses(currentSchool, livingPreferences);
  return tuitionCost + livingExpenses;
};

const getGrants = (inputs, efc, totalCost) => {
  const { parentPassedAwayMilitary, careerInTeaching } = inputs;
  const pellGrant = databases.searchPellGrantProgram(totalCost, efc);
  //TODO: what should be done with all the other grants that have ranges?
  return pellGrant;
};

const getParentsContribution = (inputs) => {
  const { numberInCollege } = inputs;
  const availableIncome = getParentsAvailableIncome(inputs);
  const contributionAssets = getParentsContributionAssets(inputs);
  const aai = availableIncome + contributionAssets;
  const pContributionAAITotal = databases.searchTableA6(aai);
  return pContributionAAITotal / numberInCollege;
};

const getParentsAvailableIncome = (inputs) => {
  const { p1Income, p2Income, pUntaxedIncome, pTotalAdditionalInfo } = inputs;
  const totalAllowances = getParentsTotalAllowances(inputs);
  const totalIncome = getParentsTotalIncome(inputs);
  return totalIncome - totalAllowances;
};

const getParentsTotalIncome = (inputs) => {
  const { p1Income, p2Income, pUntaxedIncome, pTotalAdditionalInfo } = inputs;
  return p1Income + p2Income + pUntaxedIncome + pTotalAdditionalInfo;
};

const getParentsTotalAllowances = (inputs) => {
  const { maritalStatus, incomeTaxPaidP1P2, parentState, numberInCollege, numberInHousehold, p1Income, p2Income } = inputs;
  const totalIncome = getParentsTotalIncome(inputs);
  const stateTaxAllowance = databases.searchTableA1(parentState, totalIncome) * totalIncome;
  const ssTaxAllowP1 = databases.searchTableA2(p1Income);
  const ssTaxAllowP2 = databases.searchTableA2(p2Income);
  const incomeProtectionAllowance = databases.searchTableA3(numberInHousehold, numberInCollege);
  const pEmploymentExpenseAllowance = getParentEmploymentExpenseAllowance(inputs);
  return incomeTaxPaidP1P2 + stateTaxAllowance + ssTaxAllowP1 + ssTaxAllowP2 + incomeProtectionAllowance + pEmploymentExpenseAllowance;
};

const getParentEmploymentExpenseAllowance = (inputs) => { //TODO this might need a review! logic is complicated
  const { numberOfParents, maritalStatus, p1Income, p2Income } = inputs;
  const percIncomeP1 = p1Income * 0.35;
  const percIncomeP2 = p2Income * 0.35;
  if(numberOfParents == 2 && (
    maritalStatus.value.toLocaleLowerCase().localeCompare('Married') == 0 ||
    maritalStatus.value.toLocaleLowerCase().localeCompare('Living Together') == 0 )) {
    if(p2Income == 0) return 0; //case when only one working parent
    if(percIncomeP1 < percIncomeP2) {
      return (percIncomeP1 < 4000) ? percIncomeP1 : 4000;
    }
    else return (percIncomeP2 < 4000) ? percIncomeP2 : 4000;
  }
  else if(numberOfParents == 1) {
    return (percIncomeP1 < 4000) ? percIncomeP1 * 0.35 : 4000;
  }
  else {
    return 0;
  }
};

const getParentsContributionAssets = (inputs) => {
  const { pCashSavingsCheckings, pWorthInvestments, pWorthBiz, numberOfParents, parent1DoB, parent2DoB } = inputs;
  const pBizWorthAdjusted = databases.searchTableA4(pWorthBiz);
  const pEdSavingsAssetProt = databases.searchTableA5(getEldestParentAge(parent1DoB, parent2DoB), numberOfParents);
  const result = (pCashSavingsCheckings + pWorthInvestments + pBizWorthAdjusted - pEdSavingsAssetProt) * 0.12;
  return result > 0 ? result : 0;
};

const getStudentContributionAAIncome = (inputs) => {
  const studentIncome = getStudentTotalIncome(inputs);
  const studentAllowances = getStudentAllowances(inputs);
  const result = studentIncome - studentAllowances;
  return result < 0 ? 0 : result;
};

const getStudentTotalIncome = (inputs) => {
  const { studentIncome, studentUntaxedIncome, studentTotalAdditionalInfo } = inputs;
  return studentIncome + studentUntaxedIncome + studentTotalAdditionalInfo;
};

const getStudentAllowances = (inputs) => {
  const { studentIncomeTaxPaid, studentState, studentIncome, studentIncProtAllowance } = inputs;
  const sStateTaxAllowance = databases.searchTableA7(studentState);
  const sSocialSecurityTax = databases.searchTableA2(studentIncome);
  //TODO: verify with Oscar
  const parentsAllowances = getParentsContribution(inputs);
  const adjustedPAllowances = parentsAllowances < 0 ? -parentsAllowances : 0;
  return sStateTaxAllowance + sSocialSecurityTax + studentIncomeTaxPaid + studentIncProtAllowance + adjustedPAllowances;
};

const getStudentContributionAssets = (inputs) => {
  const { studentCashSavingsCheckings, studentWorthInvestments, studentWorthBiz } = inputs;
  return (studentCashSavingsCheckings + studentWorthInvestments + studentWorthBiz) * 0.2;
};

//-------------------- STATE AID SECTION ----------------------
const getStateAid = (inputs, finNeedAfterFedAid) => {
  console.log('Calculating State Aid');
  const { studentIncome, p1Income, p2Income, studentCashSavingsCheckings, pCashSavingsCheckings,
    studentWorthInvestments, pWorthInvestments, studentWorthBiz, pWorthBiz, currentSchool, isDependant, gpa, numberInHousehold } = inputs;
  const totalAssets = studentCashSavingsCheckings + pCashSavingsCheckings +
    studentWorthInvestments + pWorthInvestments +
    studentWorthBiz + pWorthBiz;
  const totalIncome = studentIncome + p1Income + p2Income;
  const assetCeiling = isDependant ? 79300 : 37700;
  const grantType = (gpa >= 3) ? 'A' : 'B';
  const incomeCeiling = databases.searchIncomeCeiling(numberInHousehold, grantType);

  console.log('Asset ceiling is: ' + assetCeiling);
  console.log('Grant Type is: '+ grantType);
  console.log('Income ceiling is: ' + incomeCeiling);

  let grant = 0;
  const stateAidSchool = databases.searchStateAid(currentSchool, grantType);
  if(totalIncome > incomeCeiling || totalAssets > assetCeiling) {
    grant = 0;
  }
  else if(grantType == 'A') {
    if(finNeedAfterFedAid > stateAidSchool + 1500) {
      return stateAidSchool;
    }
  } else if(grantType == 'B') {
    if(finNeedAfterFedAid > 700) {
      return stateAidSchool;
    }
  }
  return appliesForStateAid ? grant : 0;
};

const appliesForStateAid = (inputs, grantType) => {
  //TODO: what's the logic! we didn't document this ask oscar
  return true;
};

//-------------------- PRIVATE AID SECTION ----------------------
const getPrivatelAid = (inputs) => {
  console.log('Calculating Private Aid');
  return 0;
};

//-------------------- HELPERS ----------------------
const addAssumptionsFixes = (inputs) => {
  console.log('Adding constants and assumptions to given inputs');
  inputs['studentIncProtAllowance'] = 6600;
  //fix numbers by converting from strings
  inputs['p1Income'] = Number(inputs['p1Income']);
  inputs['p2Income'] = Number(inputs['p2Income']);
  inputs['studentIncome'] = Number(inputs['studentIncome']);
  inputs['studentIncomeTaxPaid'] = Number(inputs['studentIncomeTaxPaid']);
  inputs['incomeTaxPaidP1P2'] = Number(inputs['incomeTaxPaidP1P2']);
  return;
};

const getEldestParentAge = (date1, date2) => {
  //TODO!
  return getAgeFromDate(date1);
};

const getAgeFromDate = (date) => {
  //TODO!
  return 27;
};

export default runEngine;

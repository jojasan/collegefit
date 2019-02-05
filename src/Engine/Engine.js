import databases from './DataBases';

const runEngine = (inputs) => {
  console.log('Engine starting with following params:');
  console.log(inputs);
  const fullInputs = addAssumptions(inputs);
  //TODO: need to loop through all the schools. Initially set 1 school as default
  const federalAid = getFederalAid(fullInputs);
  const stateAid = getStateAid(fullInputs);
  const privateAid = getPrivatelAid(fullInputs);
  const totalAid = federalAid + stateAid + privateAid;
  console.log('Total aid is: ' + totalAid);
};

//-------------------- FEDERAL AID SECTION ----------------------
const getFederalAid = (inputs) => {
  //TODO: assigned to XXX
  console.log('Calculating Federal Aid');
  const efc = getEFC(inputs);
  console.log('EFC is: ' + efc);

  return 0;
};

const getEFC = (inputs) => {
  //TODO: assigned to XXX
  console.log('Calculating EFC');
  const parentsContribution = getParentsContribution(inputs);
  const studentContributionAAI = getStudentContributionAAIncome(inputs);
  const studentContributionAssets = getStudentContributionAssets(inputs);
  console.log('Parents Contribution is: ' + parentsContribution);
  console.log('Student Contribution AAI is: ' + studentContributionAAI);
  console.log('Student Contribution Assets is: ' + studentContributionAssets);
  return parentsContribution + studentContributionAAI + studentContributionAssets;
};

const getGrants = (inputs) => {

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
  const stateTaxAllowance = databases.searchTableA1(parentState, totalIncome);
  const ssTaxP1 = databases.searchTableA2(p1Income);
  const ssTaxP2 = databases.searchTableA2(p2Income);
  const incomeProtectionAllowance = databases.searchTableA3(numberInHousehold, numberInCollege);
  const pEmploymentExpenseAllowance = getParentEmploymentExpenseAllowance(inputs);
  return stateTaxAllowance + ssTaxP1 + ssTaxP2 + incomeProtectionAllowance + pEmploymentExpenseAllowance;
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
  const sStateTaxAllowance = databases.searchTableA7(studentState.name);
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
const getStateAid = (inputs) => {
  //TODO: assigned to XXX
  console.log('Calculating State Aid');
  return 0;
};

//-------------------- FEDERAL AID SECTION ----------------------
const getPrivatelAid = (inputs) => {
  //TODO: assigned to XXX
  console.log('Calculating Private Aid');
  return 0;
};

//-------------------- HELPERS ----------------------
const addAssumptions = (inputs) => {
  //TODO: assigned to John
  console.log('Adding constants and assumptions to given inputs');
  const fullInputs = inputs;
  fullInputs['studentIncProtAllowance'] = 6600;
  return fullInputs;
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

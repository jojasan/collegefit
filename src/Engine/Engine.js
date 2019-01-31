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
  return 0;
};

const getEFC = (inputs) => {
  //TODO: assigned to XXX
  console.log('Calculating EFC');
  getParentsContribution(inputs);
  return 0;
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
  const { p1Income, p2Income, pUntaxedIncome, pTotalAdditionalInfo }
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
  
  return 0;
};

const getParentsContributionAssets = (inputs) => {

  return 0;
};

const getStudentContributionAAIncome = (inputs) => {

  return 0;
};

const getStudentContributionAssets = (inputs) => {

  return 0;
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
  return fullInputs;
};

export default runEngine;

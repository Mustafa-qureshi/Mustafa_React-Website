const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'mustafa-reactapp',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createCompanyInfoRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCompanyInfo');
}
createCompanyInfoRef.operationName = 'CreateCompanyInfo';
exports.createCompanyInfoRef = createCompanyInfoRef;

exports.createCompanyInfo = function createCompanyInfo(dc) {
  return executeMutation(createCompanyInfoRef(dc));
};

const listProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProjects');
}
listProjectsRef.operationName = 'ListProjects';
exports.listProjectsRef = listProjectsRef;

exports.listProjects = function listProjects(dc) {
  return executeQuery(listProjectsRef(dc));
};

const updateTeamMemberRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateTeamMember', inputVars);
}
updateTeamMemberRef.operationName = 'UpdateTeamMember';
exports.updateTeamMemberRef = updateTeamMemberRef;

exports.updateTeamMember = function updateTeamMember(dcOrVars, vars) {
  return executeMutation(updateTeamMemberRef(dcOrVars, vars));
};

const getTestimonialRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTestimonial', inputVars);
}
getTestimonialRef.operationName = 'GetTestimonial';
exports.getTestimonialRef = getTestimonialRef;

exports.getTestimonial = function getTestimonial(dcOrVars, vars) {
  return executeQuery(getTestimonialRef(dcOrVars, vars));
};

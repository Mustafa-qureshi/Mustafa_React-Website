import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'mustafa-reactapp',
  location: 'us-east4'
};

export const createCompanyInfoRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCompanyInfo');
}
createCompanyInfoRef.operationName = 'CreateCompanyInfo';

export function createCompanyInfo(dc) {
  return executeMutation(createCompanyInfoRef(dc));
}

export const listProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProjects');
}
listProjectsRef.operationName = 'ListProjects';

export function listProjects(dc) {
  return executeQuery(listProjectsRef(dc));
}

export const updateTeamMemberRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateTeamMember', inputVars);
}
updateTeamMemberRef.operationName = 'UpdateTeamMember';

export function updateTeamMember(dcOrVars, vars) {
  return executeMutation(updateTeamMemberRef(dcOrVars, vars));
}

export const getTestimonialRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTestimonial', inputVars);
}
getTestimonialRef.operationName = 'GetTestimonial';

export function getTestimonial(dcOrVars, vars) {
  return executeQuery(getTestimonialRef(dcOrVars, vars));
}


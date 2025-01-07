const repository = require('../../repositories/org/index.js');

const orgServices = {
   getAllOrgs: () => {
      const orgs = repository.getAllOrgs();
      return orgs;
   },
   searchOrgs: (searchTerm) => {
      return repository.searchOrgs(searchTerm);
   },
   getOrg: (orgId) => {
      const org = repository.getOrgById(orgId);
      return org;
   },
   createOrg: (orgData) => {
      const newOrg = repository.createOrg(orgData);
      return newOrg;
   },
   updateOrg: (orgId, orgData) => {
      const updatedOrg = repository.updateOrg(orgId, orgData);
      return updatedOrg;
   },
   deleteOrg: (orgId) => {
      const deletedOrg = repository.deleteOrg(orgId);
      return deletedOrg;
   }
};

module.exports = orgServices;
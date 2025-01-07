const orgService = require('../../services/org/index.js');

// Controller functions
const getAllOrgs = async (req, res) => {
   try {
      const orgs = await orgService.getAllOrgs();
      res.status(200).json(orgs);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const searchOrgs = async (req, res) => {
   const searchTerm = req.query.name;
   try {
      const orgs = await orgService.searchOrgs(searchTerm);
      if (orgs.length === 0) {
         res.status(404).json({ message: 'No organizations found' });
      } else {
         res.status(200).json(orgs);
      }
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const getOrgById = async (req, res) => {
   const orgId = req.params.id;
   try {
      const org = await orgService.getOrgById(orgId);
      res.status(200).json(org);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const createOrg = async (req, res) => {
   const newOrg = req.body;
   try {
      const org = await orgService.createOrg(newOrg);
      res.status(201).json(org);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const updateOrg = async (req, res) => {
   const orgId = req.params.id;
   const updatedOrg = req.body;
   try {
      const org = await orgService.updateOrg(orgId, updatedOrg);
      res.status(200).json(org);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const deleteOrg = async (req, res) => {
   const orgId = req.params.id;
   try {
      const org = await orgService.deleteOrg(orgId);
      res.status(200).json(org);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

module.exports = {
   getAllOrgs,
   searchOrgs,
   getOrgById,
   createOrg,
   updateOrg,
   deleteOrg
};
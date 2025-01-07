const Org = require('../../models/org/Org.js');

const getAllOrgs = async () => {
   try {
      const orgs = await Org.find({});
      return orgs;
   } catch (error) {
      throw new Error('Error fetching organizations: ' + error.message);
   }
};

const searchOrgs = async (searchTerm) => {
   try {
      const orgs = await Org.find({ name: { $regex: searchTerm, $options: 'i' } });
      return orgs;
   } catch (error) {
      console.log(error);
      throw new Error('Error searching organizations: ' + error.message);
   }
}

const createOrg = async (orgData) => {
   try {
      const org = new Org(orgData);
      await org.save();
      return org;
   } catch (error) {
      throw new Error('Error creating organization: ' + error.message);
   }
};

const getOrgById = async (id) => {
   try {
      const org = await Org.findById(id);
      if (!org) {
         throw new Error('Organization not found');
      }
      return org;
   } catch (error) {
      throw new Error('Error fetching organization: ' + error.message);
   }
};

const updateOrg = async (id, updateData) => {
   try {
      const org = await Org.findByIdAndUpdate(id, updateData, { new: true });
      if (!org) {
         throw new Error('Organization not found');
      }
      return org;
   } catch (error) {
      throw new Error('Error updating organization: ' + error.message);
   }
};

const deleteOrg = async (id) => {
   try {
      const org = await Org.findByIdAndDelete(id);
      if (!org) {
         throw new Error('Organization not found');
      }
      return org;
   } catch (error) {
      throw new Error('Error deleting organization: ' + error.message);
   }
};

module.exports = {
   getAllOrgs,
   searchOrgs,
   createOrg,
   getOrgById,
   updateOrg,
   deleteOrg,
};
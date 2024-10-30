const Home = require("../../../models/Home.js");

const getMembers = async (homeId) => {
  return await Home.findById(homeId).populate("members");
};

const createMember = async (homeId, userId) => {
  return await Home.findByIdAndUpdate(
    homeId,
    { $push: { members: userId } },
    { new: true }
  );
};

const inviteMember = async (homeId, userId) => {
  return await Home.findByIdAndUpdate(
    homeId,
    { $push: { invites: userId } },
    { new: true }
  );
};

const acceptInvitation = async (homeId, userId) => {
  return await Home.findByIdAndUpdate(
    homeId,
    { $push: { members: userId } },
    { $pull: { invites: userId } },
    { new: true }
  );
};

const rejectInvitation = async (homeId, userId) => {
  return await Home.findByIdAndUpdate(
    homeId,
    { $pull: { members: userId } },
    { new: true }
  );
};

const leaveHome = async (homeId, userId) => {
  return await Home.findByIdAndUpdate(
    homeId,
    { $pull: { members: userId } },
    { new: true }
  );
};

const kickMember = async (homeId, userId) => {
  return await Home.findByIdAndUpdate(
    homeId,
    { $pull: { members: userId } },
    { new: true }
  );
};

const deleteMember = async (homeId, userId) => {
  return await Home.findByIdAndUpdate(
    homeId,
    { $pull: { members: userId } },
    { new: true }
  );
};

module.exports = {
  getMembers,
  createMember,
  inviteMember,
  acceptInvitation,
  rejectInvitation,
  leaveHome,
  kickMember,
  deleteMember,
};

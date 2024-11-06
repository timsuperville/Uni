const homeRopository = require('../../../repositories/home/index.js');
const homeMembersRepository = require('../../../repositories/home/members/index.js');

const getMembers = async (userId) => {
  const homeId = await homeRopository.getUserHome(userId);
  return await homeMembersRepository.getMembers(homeId);
};

const createMember = async (homeId, userId) => {
   return await homeMembersRepository.addMember(homeId, userId);
};

const inviteMember = async (homeId, userId) => {
  return await homeMembersRepository.addMember(homeId, userId);
};

const acceptInvitation = async (homeId, userId) => {
  return await homeMembersRepository.addMember(homeId, userId);
};

const rejectInvitation = async (homeId, userId) => {
  return await homeMembersRepository.removeMember(homeId, userId);
};

const leaveHome = async (homeId, userId) => {
  return await homeMembersRepository.removeMember(homeId, userId);
};

const kickMember = async (homeId, userId) => {
  return await homeMembersRepository.removeMember(homeId, userId);
};

const deleteMember = async (homeId, userId) => {
  return await homeMembersRepository.removeMember(homeId, userId);
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

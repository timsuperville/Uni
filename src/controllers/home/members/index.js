const memberServices = require('../../../services/home/members/index.js');

const getMembers = async (req, res) => {
  const homeId = req.params.homeId;
  const members = await memberServices.getMembers(homeId);
  res.json(members);
};

const createMember = async (req, res) => {
  const homeId = req.params.homeId;
  const userId = req.body.userId;
  const member = await memberServices.createMember(homeId, userId);
  res.json(member);
}

const inviteMember = async (req, res) => {
  const homeId = req.params.homeId;
  const userId = req.params.userId;
  const member = await memberServices.inviteMember(homeId, userId);
  res.json(member);
}

const acceptInvitation = async (req, res) => {
  const homeId = req.params.homeId;
  const userId = req.params.userId;
  const member = await memberServices.acceptInvitation(homeId, userId);
  res.json(member);
}

const rejectInvitation = async (req, res) => {
  const homeId = req.params.homeId;
  const userId = req.params.userId;
  const member = await memberServices.rejectInvitation(homeId, userId);
  res.json(member);
}

const leaveHome = async (req, res) => {
  const homeId = req.params.homeId;
  const userId = req.params.userId;
  const member = await memberServices.leaveHome(homeId, userId);
  res.json(member);
}

const kickMember = async (req, res) => {
  const homeId = req.params.homeId;
  const userId = req.params.userId;
  const member = await memberServices.kickMember(homeId, userId);
  res.json(member);
}

const deleteMember = async (req, res) => {
  const homeId = req.params.homeId;
  const userId = req.params.userId;
  await memberServices.deleteMember(homeId, userId);
  res.sendStatus(204);
}

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
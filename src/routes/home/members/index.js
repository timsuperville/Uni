const membersRouter = require('express').Router();

const membersController = require('../../../controllers/home/members/index.js');

membersRouter.get('/', membersController.getMembers);
membersRouter.post('/', membersController.createMember);
membersRouter.post('/invite/:id', membersController.inviteMember);
membersRouter.post('/accept/:id', membersController.acceptInvitation);
membersRouter.post('/reject/:id', membersController.rejectInvitation);
membersRouter.post('/leave/:id', membersController.leaveHome);
membersRouter.post('/kick/:id', membersController.kickMember);
membersRouter.delete('/:id', membersController.deleteMember);

module.exports = membersRouter;
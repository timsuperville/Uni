const express = require('express');

const { protect } = require('../middlewares/authMiddleware');
const { allowRoles } = require("../middlewares/roleMiddleware");

const {
   createTeam,
   updateTeam,
   deleteTeam,
   getAllTeams,
   getTeamDetails,
   } = require('../controllers/teamsController');
const express = require('express');

const { protect } = require('../middlewares/authMiddleware');

const { allowRoles } = require("../middlewares/roleMiddleware");

const {
   createMember,
   updateMember,
   deleteMember,
   getAllMembers,
   getMemberDetails,
   } = require('../controllers/membersController');

const router = express.Router();

// Route to create a new member
router.post('/', protect, allowRoles('admin'), createMember);

// Route to update a member's details
router.put('/:memberId', protect, allowRoles('admin'), updateMember);

// Route to delete a member
router.delete('/:memberId', protect, allowRoles('admin'), deleteMember);

// Route to get all members
router.get('/', protect, getAllMembers);

// Route to get details of a specific member
router.get('/:memberId', protect, getMemberDetails);

module.exports = router;

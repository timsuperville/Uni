// routes/churchRoutes.js
const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");
const {
    createChurch,
    updateChurch,
    deleteChurch,
    getAllChurches,
    getChurchDetails,
} = require("../controllers/churchController");

const router = express.Router();

// Route to create a new church
router.post("/", protect, createChurch);
// Route to get all churches
router.get("/", protect, getAllChurches);
// Route to get details of a specific church
router.get("/:id", protect, getChurchDetails);
// Route to update a church's details
router.put("/:churchId", protect, allowRoles("admin"), updateChurch);
// Route to delete a church
router.delete("/:churchId", protect, allowRoles("admin"), deleteChurch);

const membersRoutes = require("./membersRoutes");
router.use("/:churchId/members", membersRoutes);

const servicesRoutes = require("./services/servicesRoutes");
router.use("/:churchId/services", servicesRoutes);

module.exports = router;

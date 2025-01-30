const express = require("express");

const { protect } = require("../middlewares/authMiddleware");

const { allowRoles } = require("../middlewares/roleMiddleware");

const {
  addServiceSegment,
  updateServiceSegment,
  deleteServiceSegment,
  getAllServiceSegments,
  getServiceSegmentDetails,
} = require("../controllers/segmentController");

const router = express.Router();

// Route to add a segment to a service
router.post("/", protect, allowRoles("admin"), addServiceSegment);

// Route to update a segment's details
router.put("/:segmentId", protect, allowRoles("admin"), updateServiceSegment);

// Route to delete a segment
router.delete("/:segmentId", protect, allowRoles("admin"), deleteServiceSegment);

// Route to get all segments
router.get("/", protect, getAllServiceSegments);

// Route to get details of a specific segment
router.get("/:segmentId", protect, getServiceSegmentDetails);

module.exports = router;

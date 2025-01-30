const express = require('express');

const { protect } = require('../middlewares/authMiddleware');
const { allowRoles } = require("../middlewares/roleMiddleware");

const {
   createService,
   updateService,
   deleteService,
   getAllServices,
   getServiceDetails,
   } = require('../controllers/servicesController');

const router = express.Router();

   // Route to create a new service
router.post('/', protect, allowRoles('admin'), createService);
// Route to update a service's details
router.put('/:serviceId', protect, allowRoles('admin'), updateService);
// Route to delete a service
router.delete('/:serviceId', protect, allowRoles('admin'), deleteService);
// Route to get all services
router.get('/', protect, getAllServices);
// Route to get details of a specific service
router.get('/:serviceId', protect, getServiceDetails);

const segmentRoutes = require("./segmentRoutes");
router.use("/:serviceId/segments", segmentRoutes);

module.exports = router;

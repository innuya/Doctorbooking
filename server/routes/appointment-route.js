// const express = require('express');
// const controllers = require('../controllers/appointmentController');
// const router = express.Router();

// router.get('/', controllers.getAppointment);
// router.post('/', controllers.postAppointment);

// module.exports = router;

const express = require('express');
const controller = require('../controllers/appointmentControllers');

const router = express.Router();

router.get('/doctor/:id', controller.getAppointmentByDoctor);
router.get('/user/:id', controller.getAppointmentByUser);

module.exports = router;

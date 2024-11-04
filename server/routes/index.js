// const express = require('express');
// const departmentRouter = require('./department-route');
// const hospitalRouter = require('./hospital-router');
// const doctorRouter = require('./doctor-route');
// const slotRouter = require('./slot-route');
// const userRouter = require('./user-route');

// const router = express.Router();

// router.use('/department', departmentRouter);
// router.use('/hospital', hospitalRouter);
// router.use('/doctor', doctorRouter);
// router.use('/slot', slotRouter);
// router.use('/user', userRouter);

// module.exports = router;

const express = require('express');

const departmentRoutes = require('./department-route');
const hospitalRoutes = require('./hospital-routes');
const doctorRoutes = require('./doctor-route');
const userRoutes = require('./user-routes');
const slotRoutes = require('./slot-routes');
const appointmentRoutes = require('./appointment-routes');
const router = express.Router();

router.use('/department', departmentRoutes);
router.use('/hospital', hospitalRoutes);
router.use('/doctor', doctorRoutes);
router.use('/user', userRoutes);
router.use('/slot', slotRoutes);
router.use('/appointment', appointmentRoutes);

module.exports = router;

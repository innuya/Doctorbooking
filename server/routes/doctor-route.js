// const express = require('express');
// const controllers = require('../controllers/doctorControllers');
// const upload = require('../middlewares/upload');

// const router = express.Router();
// router.get('/', controllers.getDoctor);
// router.post('/', upload.single('image'), controllers.postDoctor);
// router.post('/signup', upload.single('image'), controllers.postSignup);
// router.post('/login', controllers.loginDoctor);
// router.post('/forgot-password', controllers.forgotPassword);
// router.post('/reset/:token', controllers.resetPassword);
// router.get('/:id', controllers.getDoctorById);

// // router.get('/id', chechToken(['DOCTOR']), controllers.getDoctorById);

// // router.delete('/:id', controllers.deleteDoctor);
// module.exports = router;

const express = require('express');
const upload = require('../middlewares/upload');
const controller = require('../controllers/doctorControllers');
const checkToken = require('../middlewares/checkToken');

const router = express.Router();

router.post('/sign-up', upload.single('image'), controller.signupDoctor);
router.post('/login', controller.loginDoctor);
router.post('/forgot-password', controller.forgotPassword);
router.post('/reset/:token', controller.resetPassword);
router.get('/', controller.getDoctor);
router.get('/:id', controller.getDoctorById);
router.get('/:id/doctor', controller.getDoctorByDepartmentId);

router.get(
  '/hospital/:hospitalid/department/:departmentid',
  controller.getDoctorByHospitalAndDepartment
);
router.patch('/:id', controller.patchDoctor);
router.delete('/:id', controller.deleteDoctor);

module.exports = router;

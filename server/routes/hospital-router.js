// const express = require('express');
// const controllers = require('../controllers/hospitalControllers');
// const router = express.Router();
// const upload = require('../middlewares/upload');

// router.get('/', controllers.getHospital);
// router.post('/', upload.single('image'), controllers.postHospital);
// router.get('/:id', controllers.getHospitalById);
// router.get('/:id/department', controllers.getDepartmentByHospitalId);
// router.get('/:id/doctor', controllers.getDoctorByHospitalId);

// router.delete('/:id', controllers.deleteHospital);
// router.patch('/:id', controllers.patchHospital);

// module.exports = router;

const express = require('express');
const upload = require('../middlewares/upload');
const controller = require('../controllers/hospitalControllers');

const router = express.Router();

router.get('/', controller.getHospital);
router.post('/', upload.single('image'), controller.postHospital);
router.get('/:id', controller.getHospitalById);
router.get('/:id/department', controller.getDepartmentByHospitalId);
router.get('/:id/doctor', controller.getDoctorByHospitalId);

router.delete('/:id', controller.deleteHospital);
router.patch('/:id', controller.patchHospital);

module.exports = router;

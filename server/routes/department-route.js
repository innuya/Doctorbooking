// const express = require('express');
// const controllers = require('../controllers/departmentControllers');
// const upload = require('../middlewares/upload');
// const router = express.Router();
// router.get('/', controllers.getDepartment);
// router.post('/', upload.single('image'), controllers.postDepartment);
// module.exports = router;

const express = require('express');
const upload = require('../middlewares/upload');
const controller = require('../controllers/departmentControllers');

const router = express.Router();

router.get('/', controller.getDepartment);
router.post('/', upload.single('image'), controller.postDepartment);
router.get('/:id', controller.getDepartmentById);

router.delete('/:id', controller.deleteDepartment);
router.patch('/:id', controller.patchDepartment);

module.exports = router;

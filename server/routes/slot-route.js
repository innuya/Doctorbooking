// const express = require('express');
// const controllers = require('../controllers/slotController');
// const router = express.Router();
// router.get('/', controllers.getSlot);
// router.post('/', controllers.postSlot);
// router.post('/doctors/:id/add-slot', controllers.getAddSlot);
// module.exports = router;

const express = require('express');

const controller = require('../controllers/slotControllers');

const router = express.Router();

router.get('/', controller.getSlot);
router.post('/', controller.postSlot);
router.get('/:id', controller.getSlotByDoctorId);
router.delete('/:id', controller.deleteSlot);
router.patch('/:id', controller.patchSlot);
router.post('/bookslot/:id', controller.bookSlotsById);

module.exports = router;

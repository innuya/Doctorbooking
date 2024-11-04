// const express = require('express');
// const controllers = require('../controllers/userControllers');
// const router = express.Router();

// router.post('/sign-up', controllers.signupUser);
// router.post('/login', controllers.loginUser);
// router.post('/forgot-Password', controllers.forgotPassword);
// // router.post('/reset-Password', controllers.resetPassword);
// router.post('/reset/:id', controllers.resetPassword);
// module.exports = router;

const express = require('express');

const controller = require('../controllers/userControllers');

const router = express.Router();

router.post('/sign-up', controller.signupUser);
router.post('/login', controller.loginUser);
router.get('/userbyid/:id', controller.getUserById);
router.post('/forgot-password', controller.forgotPassword);
router.post('/reset/:token', controller.resetPassword);

module.exports = router;

const express = require('express');
const router = express.Router();

// include controllers
const doctorController = require('../controllers/doctorController');

const jwtHelper = require('../config/jwtHelper');

router.get('/',doctorController.getAllUsers);
router.post('/register', doctorController.register);
router.post('/login', doctorController.authenticate);
router.get('/clientProfile',jwtHelper.verifyJwtToken, doctorController.userProfile);
router.post('/updateProfile/:id',doctorController.updateProfile);
router.post('/delete/:id',doctorController.removeUser);

module.exports = router;




const express = require('express');
const router = express.Router();

// include controllers
const clientController = require('../controllers/patientController');

const jwtHelper = require('../config/jwtHelper');

router.get('/',clientController.getAllUsers);
router.post('/register', clientController.register);
router.post('/login', clientController.authenticate);
router.get('/clientProfile',jwtHelper.verifyJwtToken, clientController.userProfile);
router.put('/updateProfile/:id',clientController.updateProfile);
router.delete('/delete/:id',clientController.removeUser);

module.exports = router;




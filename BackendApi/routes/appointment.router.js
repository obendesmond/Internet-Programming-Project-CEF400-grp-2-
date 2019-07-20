const express = require('express');
const router = express.Router();

// include controllers
const appointmentController = require('../controllers/appointmentController');

router.get('/all',appointmentController.getAllAppointments);
router.post('/add', appointmentController.addAnAppointment);
router.put('/update/:id',appointmentController.updateAnAppointment);
router.delete('/delete/:id',appointmentController.removeAnAppointment);

module.exports = router;

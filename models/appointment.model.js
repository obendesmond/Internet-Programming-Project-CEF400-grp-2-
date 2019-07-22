const mongoose = require('mongoose');

const appointmentSchema =new mongoose.Schema(
    {
        doctor_id: { type: String },
        patient_id: { type: String },
        session: { type: String },
    }
);

var Appointment = mongoose.model('Appointment', appointmentSchema);
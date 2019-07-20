const mongoose = require('mongoose');

var Appointment = mongoose.model('Appointment', {
    doctor_id: { type: String },
    patient_id: { type: String },
    session: { type: String },

});

module.exports = { Appointment };
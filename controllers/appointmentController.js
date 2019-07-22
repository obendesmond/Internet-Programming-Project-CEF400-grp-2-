const express = require('express');
const mongoose = require('mongoose');

// import doctor model
const Appointment = mongoose.model("Appointment");

//get all appointments
module.exports.getAllAppointments = (req,res,next) => {
    Appointment.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            return next(err);
        }
    });
}

//add Appointment
module.exports.addAnAppointment = (req,res,next) => {
    // create new appointment to add
    var appointment = new Appointment();
    appointment.doctor_id = req.body.doctor_id;
    appointment.patient_id = req.body.patient_id;
    appointment.session = req.body.session;

    appointment.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return next(err)
        }
    });
}


// get specific appointment
module.exports.getAnAppointment = (req,res,next) => {
    var id = req.params.id;
    Appointment.findById(id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return next(err);
        }
    });
}

// update appointment
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
module.exports.updateAnAppointment = (req,res,next) => {
    var id = req.params.id;
    // create updated appointment 
    var updatedAppointment = {};
    updatedAppointment.doctor_id = req.body.doctor_id;
    updatedAppointment.patient_id = req.body.patient_id;
    updatedAppointment.session = req.body.session;

    // update Appointment with respect to id
    Appointment.findByIdAndUpdate(id, { $set: updatedAppointment }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return next(err)
        }
    });

}

//delete appointment
module.exports.removeAnAppointment = (req,res,next) => {
    var id = req.params.id;
    //delete doctor from db
    Appointment.findByIdAndRemove(id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return next(err);
        }
    });

}

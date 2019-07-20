const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');

// require obeject id to check if a specific id exists in the db
const ObjectId = require('mongoose').Types.ObjectId;

// import doctor model
const { Appointment } = require('../models/appointment.model');

//get all appointments (localhost:3000/api/appointments/)
route.get('/', (req, res) => {
    Appointment.find((err, docs) => {
        if (!err) {
            res.send(docs);
            console.log("Appointments retrived successfully!!")
        } else {
            console.log('Error Getting Appointments: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//add Appointment
route.post('/add', (req, res) => {
    // create new appointment to add
    var appointment = new Appointment();
    appointment.doctor_id = req.body.doctor_id;
    appointment.patient_id = req.body.patient_id;
    appointment.session = req.body.session;

    appointment.save((err, doc) => {
        if (!err) {
            res.send(doc);
            console.log("Appointment Data saved successfully!!");
        } else {
            console.log('Error while savind Appointment: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// get specific appointment
route.get('/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with the given id: " + id);
    } else {
        Appointment.findById(id, (err, doc) => {
            if (!err) {
                res.send(doc);
                console.log("Appointment retrived successfully!! (_id: " + id + ")");
            } else {
                console.log("Error in retriving Appointment: " + JSON.stringify(err, undefined, 2))
            }
        });
    }
});

// update appointment
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);
route.put('/:id', (req, res) => {
    var id = req.params.id;
    // check if id is valid or in db
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with the given id: " + id);
    } else {
        // create updated appointment 
        var updatedAppointment = {};
        updatedAppointment.doctor_id = req.body.doctor_id;
        updatedAppointment.patient_id = req.body.patient_id;
        updatedAppointment.session = req.body.session;

        // update Appointment with respect to id
        Appointment.findByIdAndUpdate(id, { $set: updatedAppointment }, { new: true }, (err, doc) => {
            if (!err) {
                res.send(doc);
                console.log("Appointment updated successfully!!! (old_id: " + id + ")");
            } else {
                console.log("Error updating appointment: " + JSON.stringify(err, undefined, 2));
            }
        });
    }
});

//delete appointment
route.delete('/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with the given id: " + id);
    } else {
        //delete doctor from db
        Apppointment.findByIdAndRemove(id, (err, doc) => {
            if (!err) {
                res.send(doc);
                console.log("Appointment deleted successfully!!! (_id: " + id + ")");
            } else {
                console.log("Error deleting appointment: " + JSON.stringify(err, undefined, 2))
            }
        });
    }
});


module.exports = route;
const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');

// require hashpassword controller
const hashPass = require('./hashPasswordController');

// require obeject id to check if a specific id exists in the db
const ObjectId = require('mongoose').Types.ObjectId;

// import doctor model
const { Patient } = require('../models/patient.model');

//get all patients (localhost:3000/api/patients/)
route.get('/', (req, res) => {
    Patient.find((err, docs) => {
        if (!err) {
            res.send(docs);
            console.log("Patients retrived successfully!!")
        } else {
            console.log('Error Getting Patients: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//register patients
route.post('/register', (req, res) => {
    // create new patient to register
    var patient = new Patient();
    patient.name = req.body.name;
    patient.email = req.body.email;
    patient.tel = req.body.tel;
    patient.password = hashPass(req.body.password);

    patient.save((err, doc) => {
        if (!err) {
            res.send(doc);
            console.log("Patient Data saved successfully!!");
        } else {
            console.log('Error while savind Patient: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// get specific patient
route.get('/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with the given id: " + id);
    } else {
        Patient.findById(id, (err, doc) => {
            if (!err) {
                res.send(doc);
                console.log("Patient user retrived successfully!! (_id: " + id + ")");
            } else {
                console.log("Error in retriving Patient: " + JSON.stringify(err, undefined, 2))
            }
        });
    }
});

// update users account
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);
route.put('/:id', (req, res) => {
    var id = req.params.id;
    // check if id is valid or in db
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with the given id: " + id);
    } else {
        // create updated patient 
        var updatedPatient = {
            name: req.body.name,
            email: req.body.email,
            tel: req.body.tel,
            password: hashPass(req.body.password)
        }


        // update patient with respect to id
        Patient.findByIdAndUpdate(id, { $set: updatedPatient }, { new: true }, (err, doc) => {
            /*
                the {new: boolean} tells mongodb to either return old or updated data of patient, so
                {new: true} will return the updated data of patient stored in the doc variable
            */
            if (!err) {
                res.send(doc);
                console.log("Patient updated successfully!!! (old_id: " + id + ")");
            } else {
                console.log("Error updating patient: " + JSON.stringify(err, undefined, 2));
            }
        });
    }
});

//delete patients account
route.delete('/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with the given id: " + id);
    } else {
        //delete patient from db
        Patient.findByIdAndRemove(id, (err, doc) => {
            if (!err) {
                res.send(doc);
                console.log("Patient Account deleted successfully!!! (_id: " + id + ")");
            } else {
                console.log("Error deleting patient: " + JSON.stringify(err, undefined, 2))
            }
        });
    }
});


module.exports = route;
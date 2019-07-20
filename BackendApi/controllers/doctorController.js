const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');

// require hashPassword controller
const hashPass = require("./hashPasswordController");

// require obeject id to check if a specific id exists in the db
const ObjectId = require('mongoose').Types.ObjectId;

// import doctor model
const { Doctor } = require('../models/doctor.model');

//get all doctors (localhost:3000/api/doctors/)
route.get('/', (req, res) => {
    Doctor.find((err, docs) => {
        if (!err) {
            res.send(docs);
            console.log("Doctors retrived successfully!!")
        } else {
            console.log('Error Getting Doctors: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//register doctors
route.post('/register', async(req, res) => {
    // create new doctor to register
    var doctor = new Doctor();
    doctor.name = req.body.name;
    doctor.email = req.body.email;
    doctor.tel = req.body.tel;
    doctor.specialty = req.body.specialty;
    doctor.consultation_fee = req.body.consultation_fee;
    doctor.location = req.body.location;
    doctor.password = hashPass(req.body.password);
    doctor.biography = req.body.biography;

    doctor.save((err, doc) => {
        if (!err) {
            res.send(doc);
            console.log("Doctor Data saved successfully!!");
        } else {
            console.log('Error while savind Doctor: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// get specific doctor
route.get('/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with the given id: " + id);
    } else {
        Doctor.findById(id, (err, doc) => {
            if (!err) {
                res.send(doc);
                console.log("Doctor user retrived successfully!! (_id: " + id + ")");
            } else {
                console.log("Error in retriving Doctor: " + JSON.stringify(err, undefined, 2))
            }
        });
    }
});

// update doctors 
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);
route.put('/:id', (req, res) => {
    var id = req.params.id;
    // check if id is valid or in db
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with the given id: " + id);
    } else {
        // create updated doctor 
        var updatedDoctor = {};
        updatedDoctor.name = req.body.name;
        updatedDoctor.email = req.body.email;
        updatedDoctor.tel = req.body.tel;
        updatedDoctor.specialty = req.body.specialty;
        updatedDoctor.consultation_fee = req.body.consultation_fee;
        updatedDoctor.location = req.body.location;
        updatedDoctor.password = hashPass(req.body.password);
        updatedDoctor.biography = req.body.biography;

        // update doctor with respect to id
        Doctor.findByIdAndUpdate(id, { $set: updatedDoctor }, { new: true }, (err, doc) => {
            /*
                the {new: boolean} tells mongodb to either return old or updated data of doctor, so
                {new: true} will return the updated data of doctor stored in the doc variable
            */
            if (!err) {
                res.send(doc);
                console.log("Doctor updated successfully!!! (old_id: " + id + ")");
            } else {
                console.log("Error updating doctor: " + JSON.stringify(err, undefined, 2));
            }
        });
    }
});

//delete doctors account
route.delete('/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with the given id: " + id);
    } else {
        //delete doctor from db
        Doctor.findByIdAndRemove(id, (err, doc) => {
            if (!err) {
                res.send(doc);
                console.log("Doctor Account deleted successfully!!! (_id: " + id + ")");
            } else {
                console.log("Error deleting doctor: " + JSON.stringify(err, undefined, 2))
            }
        });
    }
});



module.exports = route;
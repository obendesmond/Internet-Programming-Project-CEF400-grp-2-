const express = require('express');
const route = express.Router();
const bcrypt = require('bcryptjs');

// require patient and doctor models
const Patient = require('../models/patient.model');
const Doctor = require('../models/doctor.model');

route.post('/login', (req, res) => {

    Patient.findOne({ email: req.body.password }, (err, doc) => {

    });
    Doctor.findOne({ email: req.body.password });

    if (!patient) {
        return res.status(400).send({ message: "The username does not exist" });
    }
    if (!doctor) {
        return res.status(400).send({ message: "The username does not exist" });
    }
    if (!bcrypt.compareSync(req.body.password, patient.password)) {
        return res.status(400).send({ message: "The password is invalid" });
    }
    if (!bcrypt.compareSync(req.body.password, doctor.password)) {
        return res.status(400).send({ message: "The password is invalid" });
    } else {
        res.send({ message: "The username and password combination is correct!" });
        console.log('login successful!!!');
    }
});

module.exports = route;
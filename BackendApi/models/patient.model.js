const mongoose = require("mongoose");

// prevent collection.ensureIndex deprecated error
mongoose.set('useCreateIndex', true);

// create schema(db structure)
var patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name can\'t be empty',
        minlength: [4, 'name must be atleast 4 character long']
    },
    email: {
        type: String,
        required: 'email can\'t be empty',
        unique: true
    },
    tel: {
        type: String,
        required: 'phone number can\'t be empty'
    },
    password: {
        type: String,
        required: 'password can\'t be empty',
        minlength: [5, 'password must be atleast 5 character long']
    }
});

// custom validation for email property
patientSchema.path('email').validate((val) => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(val);
}, 'invalid email');

var Patient = mongoose.model('Patient', patientSchema);

module.exports = { Patient };
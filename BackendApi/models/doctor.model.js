const mongoose = require('mongoose');
// prevent collection.ensureIndex deprecated error
mongoose.set('useCreateIndex', true);

// schema
const doctorSchema = new mongoose.Schema({
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
    specialty: {
        type: String,
        required: 'specialty can\'t be empty'
    },
    consultation_fee: {
        type: Number,
        required: 'consultation fee can\'t be empty'
    },
    location: {
        type: String,
        required: 'location can\'t be empty'
    },
    password: {
        type: String,
        required: 'password can\'t be empty',
        minlength: [5, 'password must be atleast 5 characters']
    },
    biography: {
        type: String,
        required: 'biography can\'t be empty'
    }
});

// custom validation for email property
doctorSchema.path('email').validate((val) => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(val);
}, 'invalid email');

// by default mongodb will know that the db is "doctors" ->
//or you specify database as third parameter 
var Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = { Doctor };
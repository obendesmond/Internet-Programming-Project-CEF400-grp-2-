const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// schema
var userSchema = new mongoose.Schema({
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
    },
    saltSecret: String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userSchema.methods.verifyPasswordDoctor = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}



mongoose.model('Doctor', userSchema);
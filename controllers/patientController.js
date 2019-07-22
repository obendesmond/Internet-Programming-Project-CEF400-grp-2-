const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
// const ObjectId = mongoose.Types.ObjectId();

const User = mongoose.model('Patient');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.tel = req.body.tel;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('clientStrategy', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['name','email','tel']) });
        }
    );
}

//get all patients
module.exports.getAllUsers = (req, res, next) => {
    User.find((err, users) => {
        if (!err) {
            res.send(users);
        } else {
            return res.status(400).json(err);
        }
    });
}

// update users account
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
// mongoose.set('useFindAndModify', false);

module.exports.updateProfile = (req,res,next) => {
    var id = req.params.id;

        // create updated patient 
        var updatedPatient = {
            name: req.body.name,
            email: req.body.email,
            tel: req.body.tel,
            password: req.body.password
        }
        // update patient with respect to id
        User.findByIdAndUpdate(id, { $set: updatedPatient }, { new: true }, (err, doc) => {
            /*
                the {new: boolean} tells mongodb to either return old or updated data of patient, so
                {new: true} will return the updated data of patient stored in the doc variable
            */
            if (!err) {
                res.send(doc);
            } else {
                return res.status(400).json(err);
            }
        });
 
}

//delete patients account
module.exports.removeUser = (req,res,next) => {
    var id = req.params.id;
        //delete patient from db
        User.findByIdAndRemove(id, (err, doc) => {
            if (!err) {
                res.send(doc);
            } else {
                return res.status(400).json(err);
            }
        });
}

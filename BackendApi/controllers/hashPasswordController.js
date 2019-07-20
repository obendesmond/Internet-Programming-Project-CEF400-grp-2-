// require bcrypt to hash password
const bcrypt = require('bcryptjs');


module.exports = (pass) => {
    var hashed = bcrypt.hashSync(pass, 10);
    console.log("Password hashed successfuly!!! (pswd: " + hashed + ")");
    return hashed;
};
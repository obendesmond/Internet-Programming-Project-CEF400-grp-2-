const mongoose = require("mongoose");

console.log('Making mongodb database connection....')
    //settings
var settings = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}

const url = "";

mongoose.connect(process.env.MONGODB_URI, settings, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); } else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

// include all the models
require('./patient.model');
require('./doctor.model');
require('./appointment.model');
// execute configuration file and establish connection
require('./config/config');
require('./models/db');

// require node_modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// require controllers
var doctorController = require('./controllers/doctorController');
var patientController = require('./controllers/patientController');
var appointmentController = require('./controllers/appointmentController');
var loginController = require('./controllers/loginController');

// create express app
var app = express();

// middlewares
// in other to let our backend receive json from requests
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/api/doctors', doctorController);
app.use('/api/patients', patientController);
app.use('/api/appointments', appointmentController);
app.use('/api', loginController);

// handle errors
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    } else {
        res.send('No errors found');
    }
});


app.listen(process.env.PORT, () => { console.log('Server started at port:: ' + process.env.PORT) })
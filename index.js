// include configuration files
require('./config/config');
require('./models/db');
require('./config/passportConfig');

// set port
var port = process.env.PORT || 3000;

// include modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// include routes
const clientRouter = require('./routes/client.router');
const doctorRouter = require('./routes/doctor.router');
const appointmentRouter = require('./routes/appointment.router');

// start app
var app = express();


app.use(express.static(path.join(__dirname,
    'public')));

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api/clients', clientRouter);
app.use('/api/doctors', doctorRouter);
app.use('/api/appointments', appointmentRouter);

// app error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    } else {
        console.log(err);
    }
});

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
    console.log('Invalid endpoint');
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index'));
});

// start server
app.listen(port, () => console.log(`Server started at port : ${port}`));
// check environment using NODE_ENV
var env = process.env.NODE_ENV || 'development';
// var env = 'production'
console.log('desmond this is env: ' + process.env.NODE_ENV)
    // fetch environment configuration json file
var config = require('./config.json');

var envConfig = config[env];

Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);
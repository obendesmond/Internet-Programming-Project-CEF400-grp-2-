// check environment using NODE_ENV
var env = process.env.PORT || 'development';
// var env = 'production'

// fetch environment configuration json file
var config = require('./config.json');

var envConfig = config[env];

Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);
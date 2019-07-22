// check environment using NODE_ENV
var env = process.env.NODE_ENV || 'development';

// fetch environment configuration json file
var config = require('./config.json');

var envConfig = config[env];

Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);

console.log('DATA:' + JSON.stringify(process.env, undefined, 2));
// check environment using NODE_ENV
var env = process.env.NODE_ENV || 'development';
console.log('desmond this is env: ' + env);
console.log('Old Port: ' + env.PORT);
if (process.env.NODE_ENV == 'production') {
    env.PORT = process.env.PORT;
}

console.log('Port Used: ' + env.PORT);

// fetch environment configuration json file
var config = require('./config.json');

var envConfig = config[env];

Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);
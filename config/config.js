// check environment using NODE_ENV
var env = process.env.NODE_ENV || 'production';

console.log('desmond this is env: ' + env);

// fetch environment configuration json file
// var config = require('./config.json');
// var envConfig = config[env];
var port = process.env.PORT;
var envConfig = {
    PORT: port,
    MONGODB_URI: "mongodb+srv://desmondperick:desmondperick@cluster0-pc94f.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "SECRET#123",
    JWT_EXP: "3m"
}
console.log(envConfig);

Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
});

console.log('FINAL PORT: ' + process.env.PORT);
console.log('FINAL CON URL: ' + process.env.MONGODB_URI);
console.log('FINAL JWT_EXP: ' + process.env.JWT_EXP);
console.log('FINAL JWT_SECRET: ' + process.env.JWT_SECRET);
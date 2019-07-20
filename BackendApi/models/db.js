// import mongoose and make database connection
const mongoose = require("mongoose");

console.log('Making mongodb database connection....')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("MongoDB connection is successful!!!");
    } else {
        console.log("Error: " + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;
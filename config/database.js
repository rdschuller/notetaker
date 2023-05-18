const mongoose = require('mongoose');
require('dotenv').config();

//connect to database

connection = mongoose.createConnection(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//schemas for use with the database
const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});

const User = connection.model('User', UserSchema);

module.exports = mongoose.connection;
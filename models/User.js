var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    isAdmin: Boolean
})

// schema -> model
var User = mongoose.model('user', userSchema)

module.exports = User;
var mongoose = require('mongoose')

//schema
var userSchema = mongoose.Schema({
    username: String,
    password: String
})

// schema -> model
var user = mongoose.model('user', userSchema)

module.exports = User
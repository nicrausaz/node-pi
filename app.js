var http = require('http')
var express = require('express')
var mongoose = require('mongoose')

var app = express()
//var User = require('schemas/User.js')

mongoose.connect('mongodb://nodePiServiceAccount:1234@192.168.1.121:27017/node-pi')


// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function () {

//   //model instance
//   var newUser = new user({ username: 'test', password: "test1234" })

//   console.log(newUser.username)
// });


app.use(express.static('public'))

app.get('/login', function (req, res) {

  var username = req.body.username
  var password = req.body.password
  console.log(username + password)

});

app.get('/newNote', function (req, res) {

  //var username = req.body.username
  //var password = req.body.password

});

app.get('*', function (req, res) {
  //create a 404 page
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
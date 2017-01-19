var http = require('http')
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var User = require('./models/User.js');
var Note = require('./models/Note.js');

// https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

var app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var dbUrl = "mongodb://nodePiServiceAccount:1234@192.168.1.121:27017/node-pi"

app.use(express.static('public'))

mongoose.connect(dbUrl);

//var nicolasTest = new User({ username: 'test', password: "test1234", isAdmin: false })

// on every save
/*
nicolasTest.pre('save', function (next) {

  //this.updated_at = currentDate;

  if (!this.isAdmin)
    console.log("you are not admin")

  next();
});
*/


app.post('/login', urlencodedParser, function (req, res) {

  mongooseFindLoginUser(req.body)
  //need to return in case of errors
  //res.redirect('main.html')
});

app.post('/newNote', urlencodedParser, function (req, res) {
  var newNote = new Note({ semestre: 3, branche: req.body.branche, note: req.body.note })
  mongooseSaveNote(newNote);
});

app.get('*', function (req, res) {

});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

//check credentials
function mongooseFindLoginUser(reqBody) {

  User.findOne({ username: reqBody.username, password: reqBody.password }, function (err, user) {

    if (err) throw err;
  });
}

function mongooseSaveNote(newNote) {
  newNote.save(function (err) {
    if (err) throw err;
    console.log('Note saved');
  });
}
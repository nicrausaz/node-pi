var http = require('http')
var express = require('express')
var mongodb = require('mongodb')

var app = express()
var MongoClient = mongodb.MongoClient
var url = 'mongodb://nodePiServiceAccount:1234@192.168.1.121:27017/node-pi'

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err)
  } else {

    console.log('Connection established to', url)

    var collection = db.collection('users')

    var user1 = { name: 'test1', age: 42 }
    var user2 = { name: 'test1', age: 42 }

    db.close()
  }
});

app.use(express.static('public'))

app.get('/', function (req, res) {

})

app.get('/newNote', function (req, res) {
  res.send('branche: ' + req.query['branche'] + ' note: ' + req.query['note'])
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

function dbAddObject(collection, requestedObject) {
  collection.insert(requestedObject, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log("inserted")
    }
  })
}
var http = require('http');
var express = require('express')
var app = express()
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname + '/public/index.html'))
})

app.get('/newNote', function (req, res) {
  res.send('branche: ' + req.query['branche'] + ' note: ' + req.query['note'])
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
var http = require('http');
var express = require('express')
var app = express()
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname + '/public/index.html'))
})

app.post('/newNote', function(req, res){
    res.send("hey");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
const fs = require('fs');
const express = require('express');

app = express();

const jsonData = { count: 12, message: 'hey' };

app.get('/', function(req, res) {
  fs.readFile('index.html', function(err, buffer){
    var html = buffer.toString();
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  })
});


app.get('/data', function(req, res) {
  res.json(jsonData);
});

app.listen(3030);

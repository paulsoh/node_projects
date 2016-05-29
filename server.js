const fs = require('fs');
const express = require('express');

app = express();

const jsonData = { count: 12, message: 'hey' };

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html', function(err) {
    if (err) res.status(500).send(err);
  });
});


app.get('/data', function(req, res) {
  res.json(jsonData);
});

app.listen(3030);

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// viewed at based directory http://localhost:8080/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'views/index.html'));
});

// add other routes below
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8080);

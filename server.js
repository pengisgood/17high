const express = require('express');

const app = express();

app.use(express.static('public'));

// viewed at based directory http://localhost:8080/
app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

app.listen(process.env.PORT || 8080);

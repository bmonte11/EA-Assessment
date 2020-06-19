const path = require('path');
const express = require('express');

const app = express();

app.use('/static', express.static('Public'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const PORT = 3000;

console.log('Starting express server on port: ', PORT);
app.listen(PORT);

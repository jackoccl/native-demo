const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const fs = require('fs');
const e = require('express');
const { json } = require('express');

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
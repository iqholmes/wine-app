const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require('http');

mongoose.connect('mongodb://localhost/wine-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//server setup
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Node.js listening on port ${PORT}`);
});
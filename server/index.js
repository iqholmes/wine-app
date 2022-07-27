const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const allRoutes = require('./routes/main');

mongoose.connect('mongodb://localhost/wine-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(allRoutes);


//server setup
app.listen(8000, () => {
  console.log(`Node.js listening on port ${8000}`);
});

// const PORT = process.env.PORT || 8000;
// const server = http.createServer(app);
// server.listen(PORT, () => {
//   console.log(`Node.js listening on port ${PORT}`);
// });
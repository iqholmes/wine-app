const router = require("express").Router();
const Wine = require('../models/wine');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//get all wines
router.get("/wines", (req, res) => {
  Wine.find((error, wine) => {
    res.send(wine);
  })
})

module.exports = router;
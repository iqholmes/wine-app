const router = require("express").Router();
const Wine = require('../models/wine');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

router.param('id', (req, res, next, id) => {
  Wine.findById(id, function(err, wine){
    if (err) {
      return res.status(404).send('No wine with that ID found!');
    } else if (wine) {
      req.wine = wine;
      next();
    }
  });
});

//get all wines
router.get("/wines", (req, res) => {
  Wine.find((error, wine) => {
    res.send(wine);
  })
})

//get specific wine by id
router.get("/wines/:id", (req, res) => {
  res.send(req.wine);
});

module.exports = router;
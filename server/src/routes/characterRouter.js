var express = require('express');
var app = express();
var characterRouter = express.Router();

// Require Item model in our routes module
var Character = require('../models/Character');

// Defined routes
characterRouter.route('/').get(function (req, res) {
  Character.find(function (err, characters){
    if(err){
      console.log(err);
    }
    else {
      console.log("characters", characters)
      res.json(characters);
    }
  });
});

characterRouter.route('/:id').get(function (req, res) {
  var id = req.params.id;
  Character.findById(id, function (err, character){
      res.json(character);
  });
});

module.exports = characterRouter;
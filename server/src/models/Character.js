var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Characters
var Character = new Schema({
  name: {
    type: String
  },
  race: {
    type: String
  },
  class: {
    type: String
  },
},{
    collection: 'characters'
});

module.exports = mongoose.model('Character', Character);

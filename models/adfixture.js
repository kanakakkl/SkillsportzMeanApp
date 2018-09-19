const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Adfixture
let adfixture = new Schema({
  date: {
    type: String
  },
  match_id: {
    type: String
  },
  match_name: {
    type: String
  },
  team_a: {
    type: String
  },
  team_b: {
    type: String
  },
  match_type: {
    type: String
  },
  stadium: {
    type: String
  },
  ist: {
    type: String
  },
  gmt: {
    type: String
  },
  local_time: {
    type: String
  }
},{
    collection: 'fixtures'
});

module.exports = mongoose.model('adfixture', adfixture);
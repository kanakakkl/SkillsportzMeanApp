const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Adsquad
let adsquad = new Schema({
  teamseries_name: {
    type: String
  },
  teamname: {
    type: String
  },
  teamname_mobile: {
    type: String
  },
  squad_list: {
    type: Object
  }
},{
    collection: 'squads'
});

module.exports = mongoose.model('adsquad', adsquad);
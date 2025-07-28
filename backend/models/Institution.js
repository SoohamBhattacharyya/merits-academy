const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
  name: String,
  location: String,
  email: { type: String, unique: true },
  contact: String,
  password: String
});

module.exports = mongoose.model('Institution', institutionSchema);

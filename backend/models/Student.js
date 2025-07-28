const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  schoolCollege: String,
  yearOfStudy: String,
  mobileNumber: String,
  email: { type: String, unique: true },
  password: String,
  preference: String
});

module.exports = mongoose.model('Student', studentSchema);

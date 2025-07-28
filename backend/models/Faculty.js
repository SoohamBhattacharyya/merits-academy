const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: String,
  organization: String,
  yearsOfExperience: String,
  mobileNumber: String,
  email: { type: String, unique: true },
  password: String,
  subjectSpecialization: String,
  location: String,
  preference: String
});

module.exports = mongoose.model('Faculty', facultySchema);

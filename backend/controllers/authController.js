const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Student = require('../models/Student');
const Faculty = require('../models/Faculty');
const Institution = require('../models/Institution');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const registerUser = async (req, res, Model, role) => {
  try {
    const { email, password } = req.body;
    const userExists = await Model.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Model({ ...req.body, password: hashedPassword });
    await user.save();

    res.status(201).json({
      _id: user._id,
      token: generateToken(user._id, role),
      role
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res, Model, role) => {
  try {
    const { email, password } = req.body;
    const user = await Model.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or user not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid password' });

    res.status(200).json({
      _id: user._id,
      token: generateToken(user._id, role),
      role
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  studentRegister: (req, res) => registerUser(req, res, Student, 'student'),
  studentLogin: (req, res) => loginUser(req, res, Student, 'student'),
  facultyRegister: (req, res) => registerUser(req, res, Faculty, 'faculty'),
  facultyLogin: (req, res) => loginUser(req, res, Faculty, 'faculty'),
  institutionRegister: (req, res) => registerUser(req, res, Institution, 'institution'),
  institutionLogin: (req, res) => loginUser(req, res, Institution, 'institution'),
};

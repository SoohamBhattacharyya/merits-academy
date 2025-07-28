const express = require('express');
const router = express.Router();
const {
  studentRegister, studentLogin,
  facultyRegister, facultyLogin,
  institutionRegister, institutionLogin
} = require('../controllers/authController');

// Student routes
router.post('/register/student', studentRegister);
router.post('/login/student', studentLogin);

// Faculty routes
router.post('/register/faculty', facultyRegister);
router.post('/login/faculty', facultyLogin);

// Institution routes
router.post('/register/institution', institutionRegister);
router.post('/login/institution', institutionLogin);

module.exports = router;

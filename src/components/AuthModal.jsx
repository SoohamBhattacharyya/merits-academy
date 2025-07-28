import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = ({ onClose }) => {
  const [role, setRole] = useState('student');
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({});

  const roleSchemas = {
    student: ['name', 'schoolCollege', 'yearOfStudy', 'mobileNumber', 'email', 'password', 'preference'],
    faculty: ['name', 'organization', 'yearsOfExperience', 'mobileNumber', 'email', 'password', 'subjectSpecialization', 'location', 'preference'],
    institution: ['name', 'location', 'email', 'password', 'contact']
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? `login/${role}` : `register/${role}`;
    const res = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      alert('Success!');
      onClose();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{isLogin ? 'Login' : 'Register'} as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="institution">Institution</option>
        </select>

        <form onSubmit={handleSubmit}>
          {roleSchemas[role].map((field) => (
            <input
              key={field}
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              placeholder={field.replace(/([A-Z])/g, ' $1')}
              onChange={handleChange}
              required
            />
          ))}
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>

        <p className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;

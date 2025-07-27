import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>Drop any subjects and hire your passionate educators</h1>
        <p>Join our community of learners and educators</p>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for courses, teachers, or topics..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>
        
        <div className="categories">
          <button className="category-btn">Courses</button>
          <button className="category-btn">Teachers</button>
          <button className="category-btn">Blogs</button>
          <button className="category-btn">Tutorials</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
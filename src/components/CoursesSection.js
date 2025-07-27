import React from 'react';
import './CoursesSection.css';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "Programming",
      rating: 4.8,
      students: 1250,
      price: 299
    },
    {
      id: 2,
      title: "Graphic Design Masterclass",
      category: "Design",
      rating: 4.6,
      students: 890,
      price: 199
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      category: "Science",
      rating: 4.9,
      students: 2100,
      price: 399
    }
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <h2>Featured Courses</h2>
        <p className="section-subtitle">Learn from the best courses in the industry</p>
        
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <div className="category-badge">{course.category}</div>
              </div>
              <div className="course-details">
                <h3>{course.title}</h3>
                <div className="course-meta">
                  <span>⭐ {course.rating}</span>
                  <span>👥 {course.students}+ students</span>
                </div>
                <div className="course-price">inr {course.price}</div>
                <button className="view-btn">View Course</button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="see-all-btn">See All Courses</button>
      </div>
    </section>
  );
};

export default CoursesSection;
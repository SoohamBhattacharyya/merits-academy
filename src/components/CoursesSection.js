import React from 'react';
import './CoursesSection.css';

const CoursesSection = () => {
  const getCategoryIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'programming': return '💻';
      case 'design': return '🎨';
      case 'science': return '🔬';
      default: return '📚';
    }
  };

  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "Programming",
      difficulty: "Intermediate",
      rating: 4.8,
      students: 1250,
      price: 299,
      seatsLeft: 15,
      isNew: true
    },
    {
      id: 2,
      title: "Graphic Design Masterclass",
      category: "Design",
      difficulty: "Beginner",
      rating: 4.6,
      students: 890,
      price: 199,
      seatsLeft: 8,
      isNew: false
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      category: "Science",
      difficulty: "Advanced",
      rating: 4.9,
      students: 2100,
      price: 399,
      seatsLeft: 3,
      isNew: true
    }
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <h2>Featured Courses</h2>
        <p className="section-subtitle">Transform your skills with our expert-led courses</p>
        
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                {course.isNew && <div className="new-badge">NEW</div>}
                <div className="category-badge">{course.category}</div>
                <div className="difficulty-badge">{course.difficulty}</div>
                <div className="seats-left">{course.seatsLeft} seats left</div>
              </div>
              <div className="course-details">
                <h3>{getCategoryIcon(course.category)} {course.title}</h3>
                <div className="course-meta">
                  <span>⭐ {course.rating}</span>
                  <span>👥 {course.students}+ students</span>
                </div>
                <div className="course-price">inr {course.price}</div>
                <button className="view-btn">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="see-all-btn">Browse All Courses</button>
      </div>
    </section>
  );
};

export default CoursesSection;
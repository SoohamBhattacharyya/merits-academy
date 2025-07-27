import React from 'react';
import Slider from 'react-slick';
import './CoursesSection.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import webDevImg from '../assets/web-dev.jpg';
import designImg from '../assets/design.jpg';
import dataScienceImg from '../assets/data-science.jpg';
import mathImg from '../assets/math.jpg';
import physicsImg from '../assets/physics.jpg';
import chemistryImg from '../assets/chemistry.jpg';
import englishImg from '../assets/english.jpg';
import businessImg from '../assets/business.jpg';

const CoursesSection = () => {
  const getCategoryIcon = (category) => {
    const icons = {
      programming: '💻',
      design: '🎨',
      science: '🔬',
      mathematics: '🧮',
      physics: '⚛️',
      chemistry: '🧪',
      english: '📖',
      business: '💼'
    };
    return icons[category.toLowerCase()] || '📚';
  };

  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "Programming",
      difficulty: "Intermediate",
      rating: 4.8,
      students: 109,
      price: 900,
      seatsLeft: 15,
      isNew: true,
      image: webDevImg
    },
    {
      id: 2,
      title: "Graphic Design Masterclass",
      category: "Design",
      difficulty: "Beginner",
      rating: 4.6,
      students: 89,
      price: 600,
      seatsLeft: 8,
      isNew: false,
      image: designImg
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      category: "Science",
      difficulty: "Advanced",
      rating: 4.9,
      students: 210,
      price: 400,
      seatsLeft: 3,
      isNew: true,
      image: dataScienceImg
    },
    {
      id: 4,
      title: "Advanced Calculus",
      category: "Mathematics",
      difficulty: "Advanced",
      rating: 4.7,
      students: 98,
      price: 450,
      seatsLeft: 12,
      isNew: false,
      image: mathImg
    },
    {
      id: 5,
      title: "Quantum Physics",
      category: "Physics",
      difficulty: "Advanced",
      rating: 4.9,
      students: 75,
      price: 700,
      seatsLeft: 5,
      isNew: true,
      image: physicsImg
    },
    {
      id: 6,
      title: "Organic Chemistry",
      category: "Chemistry",
      difficulty: "Intermediate",
      rating: 4.5,
      students: 120,
      price: 600,
      seatsLeft: 7,
      isNew: false,
      image: chemistryImg
    },
    {
      id: 7,
      title: "Business English",
      category: "English",
      difficulty: "Beginner",
      rating: 4.6,
      students: 150,
      price: 1000,
      seatsLeft: 20,
      isNew: false,
      image: englishImg
    },
    {
      id: 8,
      title: "Startup Fundamentals",
      category: "Business",
      difficulty: "Intermediate",
      rating: 4.7,
      students: 210,
      price: 500,
      seatsLeft: 18,
      isNew: true,
      image: businessImg
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="courses-section">
      <div className="container">
        <h2>Featured Courses</h2>
        <p className="section-subtitle">Transform your skills with our expert-led courses</p>
        
        <Slider {...sliderSettings} className="courses-slider">
          {courses.map(course => (
            <div key={course.id} className="course-slide">
              <div className="course-card">
                <div 
                  className="course-image"
                  style={{ backgroundImage: `url(${course.image})` }}
                >
                  {course.isNew && <div className="new-badge">NEW</div>}
                  <div className="category-badge">{course.category}</div>
                  <div className="difficulty-badge">{course.difficulty}</div>
                  <div className="seats-left">{course.seatsLeft} seats left</div>
                </div>
                <div className="course-details">
                  <h3>{getCategoryIcon(course.category)} {course.title}</h3>
                  <div className="course-meta">
                    <span>⭐ {course.rating}</span>
                    <span>👥 {course.students.toLocaleString()}+ students</span>
                  </div>
                  <div className="course-price">inr {course.price}</div>
                  <button className="view-btn">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        <button className="see-all-btn">Browse All Courses</button>
      </div>
    </section>
  );
};

export default CoursesSection;
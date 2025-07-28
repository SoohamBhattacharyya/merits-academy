import React, { useState } from 'react';
import Slider from 'react-slick';
import './TeachersSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import teacher images (ensure you have these in your assets folder)
import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teacher2.jpg';
import teacher3 from '../assets/teacher3.jpg';
import teacher4 from '../assets/teacher4.jpg';
import teacher5 from '../assets/teacher5.jpg';
import teacher6 from '../assets/teacher6.jpg';
import teacher7 from '../assets/teacher7.jpg';
import teacher8 from '../assets/teacher8.jpg';
import teacher9 from '../assets/teacher9.jpg';
import teacher10 from '../assets/teacher10.jpg';
import teacher11 from '../assets/teacher11.jpg';
import teacher12 from '../assets/teacher12.jpg';
import teacher13 from '../assets/teacher13.jpg';
import teacher14 from '../assets/teacher14.jpg';
import teacher15 from '../assets/teacher15.jpg';

const TeachersSection = () => {
  const [expandedTeacher, setExpandedTeacher] = useState(null);

  const toggleCourses = (teacherId) => {
    setExpandedTeacher(expandedTeacher === teacherId ? null : teacherId);
  };

  const teachers = [
    {
      id: 1,
      name: "Dr. Dev Chakroborty",
      subject: "Mathematics",
      experience: "15 years",
      rating: 4.9,
      students: 1320,
      image: teacher1,
      bio: "PhD in Applied Mathematics from MIT. Specializes in Calculus and Linear Algebra.",
      courses: [
        { id: 101, title: "Advanced Calculus", price: 299, duration: "12 weeks", students: 450 },
        { id: 102, title: "Linear Algebra Mastery", price: 249, duration: "8 weeks", students: 320 },
        { id: 103, title: "Discrete Mathematics", price: 199, duration: "6 weeks", students: 280 }
      ]
    },
    {
      id: 2,
      name: "Prof. Abhijit Barman",
      subject: "Physics",
      experience: "12 years",
      rating: 4.8,
      students: 1280,
      image: teacher2,
      bio: "Former CERN researcher with expertise in Quantum Mechanics and Astrophysics.",
      courses: [
        { id: 201, title: "Quantum Physics", price: 349, duration: "10 weeks", students: 520 },
        { id: 202, title: "Astrophysics Fundamentals", price: 299, duration: "8 weeks", students: 380 }
      ]
    },
    {
      id: 3,
      name: "Dr. Ankush Kumar Singh",
      subject: "Chemistry",
      experience: "10 years",
      rating: 4.7,
      students: 1250,
      image: teacher3,
      bio: "Organic chemistry specialist with pharmaceutical industry experience.",
      courses: [
        { id: 301, title: "Organic Chemistry", price: 279, duration: "10 weeks", students: 420 },
        { id: 302, title: "Biochemistry", price: 249, duration: "8 weeks", students: 350 }
      ]
    },
    {
      id: 4,
      name: "Subham Chakroborty",
      subject: "Web Development",
      experience: "8 years",
      rating: 4.9,
      students: 2420,
      image: teacher4,
      bio: "Full-stack developer with 5 years at Google. Focus on React and Node.js.",
      courses: [
        { id: 401, title: "MERN Stack Mastery", price: 399, duration: "12 weeks", students: 820 },
        { id: 402, title: "Advanced JavaScript", price: 299, duration: "6 weeks", students: 650 }
      ]
    },
    {
      id: 5,
      name: "Megha Ghosh",
      subject: "Graphic Design",
      experience: "7 years",
      rating: 4.8,
      students: 1380,
      image: teacher5,
      bio: "Award-winning designer with expertise in UI/UX and branding.",
      courses: [
        { id: 501, title: "UI/UX Design Pro", price: 349, duration: "10 weeks", students: 520 },
        { id: 502, title: "Adobe Creative Suite", price: 299, duration: "8 weeks", students: 480 }
      ]
    },
    {
      id: 6,
      name: "Dr. Priya Sharma",
      subject: "Biology",
      experience: "14 years",
      rating: 4.8,
      students: 1150,
      image: teacher6,
      bio: "Molecular biologist with research experience at Harvard Medical School.",
      courses: [
        { id: 601, title: "Molecular Biology", price: 329, duration: "12 weeks", students: 380 },
        { id: 602, title: "Genetics", price: 279, duration: "10 weeks", students: 420 }
      ]
    },
    {
      id: 7,
      name: "Prof. Rajiv Malhotra",
      subject: "Computer Science",
      experience: "11 years",
      rating: 4.9,
      students: 2100,
      image: teacher7,
      bio: "Specialist in algorithms and data structures with PhD from Stanford.",
      courses: [
        { id: 701, title: "Data Structures", price: 349, duration: "8 weeks", students: 720 },
        { id: 702, title: "Competitive Programming", price: 399, duration: "12 weeks", students: 580 }
      ]
    },
    {
      id: 8,
      name: "Dr. Sneha Patel",
      subject: "Economics",
      experience: "9 years",
      rating: 4.7,
      students: 980,
      image: teacher8,
      bio: "Macroeconomics expert with IMF consulting experience.",
      courses: [
        { id: 801, title: "Macroeconomics", price: 279, duration: "10 weeks", students: 320 },
        { id: 802, title: "Econometrics", price: 299, duration: "8 weeks", students: 280 }
      ]
    },
    {
      id: 9,
      name: "Amit Kumar",
      subject: "Data Science",
      experience: "6 years",
      rating: 4.8,
      students: 1850,
      image: teacher9,
      bio: "Lead Data Scientist at a Fortune 500 company.",
      courses: [
        { id: 901, title: "Machine Learning", price: 399, duration: "12 weeks", students: 920 },
        { id: 902, title: "Python for Data Science", price: 299, duration: "6 weeks", students: 750 }
      ]
    },
    {
      id: 10,
      name: "Dr. Nandini Gupta",
      subject: "Literature",
      experience: "13 years",
      rating: 4.7,
      students: 870,
      image: teacher10,
      bio: "Postcolonial literature specialist with Oxford PhD.",
      courses: [
        { id: 1001, title: "Modern Literature", price: 249, duration: "8 weeks", students: 320 },
        { id: 1002, title: "Creative Writing", price: 229, duration: "6 weeks", students: 280 }
      ]
    },
    {
      id: 11,
      name: "Prof. Vikram Joshi",
      subject: "Electronics",
      experience: "10 years",
      rating: 4.8,
      students: 1120,
      image: teacher11,
      bio: "VLSI design expert with 15+ patents.",
      courses: [
        { id: 1101, title: "Embedded Systems", price: 349, duration: "10 weeks", students: 420 },
        { id: 1102, title: "IoT Fundamentals", price: 299, duration: "8 weeks", students: 380 }
      ]
    },
    {
      id: 12,
      name: "Dr. Ananya Das",
      subject: "Psychology",
      experience: "8 years",
      rating: 4.7,
      students: 950,
      image: teacher12,
      bio: "Clinical psychologist with cognitive neuroscience expertise.",
      courses: [
        { id: 1201, title: "Cognitive Psychology", price: 279, duration: "10 weeks", students: 320 },
        { id: 1202, title: "Behavioral Therapy", price: 299, duration: "8 weeks", students: 280 }
      ]
    },
    {
      id: 13,
      name: "Rahul Mehta",
      subject: "Business",
      experience: "12 years",
      rating: 4.8,
      students: 1650,
      image: teacher13,
      bio: "Former McKinsey consultant turned entrepreneur.",
      courses: [
        { id: 1301, title: "Business Strategy", price: 349, duration: "8 weeks", students: 520 },
        { id: 1302, title: "Digital Marketing", price: 299, duration: "6 weeks", students: 480 }
      ]
    },
    {
      id: 14,
      name: "Dr. Sunita Rao",
      subject: "Medicine",
      experience: "15 years",
      rating: 4.9,
      students: 1320,
      image: teacher14,
      bio: "Cardiologist with research publications in top journals.",
      courses: [
        { id: 1401, title: "Medical Physiology", price: 399, duration: "12 weeks", students: 420 },
        { id: 1402, title: "Clinical Diagnosis", price: 349, duration: "10 weeks", students: 380 }
      ]
    },
    {
      id: 15,
      name: "Arjun Kapoor",
      subject: "Photography",
      experience: "7 years",
      rating: 4.7,
      students: 880,
      image: teacher15,
      bio: "Award-winning National Geographic photographer.",
      courses: [
        { id: 1501, title: "Digital Photography", price: 299, duration: "8 weeks", students: 320 },
        { id: 1502, title: "Photojournalism", price: 349, duration: "10 weeks", students: 280 }
      ]
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
        breakpoint: 1200,
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
    <section className="teachers-section">
      <div className="container">
        <h2>Our Expert Educators</h2>
        <p className="section-subtitle">Learn directly from professionals and access their courses</p>
        
        <Slider {...sliderSettings} className="teachers-slider">
          {teachers.map(teacher => (
            <div key={teacher.id} className="teacher-slide">
              <div className={`teacher-card ${expandedTeacher === teacher.id ? 'expanded' : ''}`}>
                <div className="teacher-image-container">
                  <div 
                    className="teacher-image"
                    style={{ backgroundImage: `url(${teacher.image})` }}
                  >
                    <div className="teacher-rating">⭐ {teacher.rating}</div>
                  </div>
                </div>
                <div className="teacher-details">
                  <h3>{teacher.name}</h3>
                  <div className="teacher-meta">
                    <span className="subject">{teacher.subject}</span>
                    <span className="experience">{teacher.experience} experience</span>
                  </div>
                  <p className="teacher-bio">{teacher.bio}</p>
                  <div className="teacher-stats">
                    <span>👥 {teacher.students.toLocaleString()}+ students</span>
                  </div>
                  
                  <button 
                    className={`toggle-courses-btn ${expandedTeacher === teacher.id ? 'active' : ''}`}
                    onClick={() => toggleCourses(teacher.id)}
                  >
                    {expandedTeacher === teacher.id ? 'Hide Courses' : 'View Courses'}
                  </button>

                  {expandedTeacher === teacher.id && (
                    <div className="teacher-courses">
                      <h4>Available Courses</h4>
                      <div className="courses-list">
                        {teacher.courses.map(course => (
                          <div key={course.id} className="course-item">
                            <div className="course-info">
                              <h5>{course.title}</h5>
                              <div className="course-meta">
                                <span>⏱️ {course.duration}</span>
                                <span>👥 {course.students} enrolled</span>
                              </div>
                            </div>
                            <div className="course-actions">
                              <div className="course-price">${course.price}</div>
                              <button className="enroll-btn">Enroll</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        <button className="see-all-teachers-btn">View All Educators</button>
      </div>
    </section>
  );
};

export default TeachersSection;
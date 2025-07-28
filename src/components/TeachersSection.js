import React from 'react';
import Slider from 'react-slick';
import './TeachersSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teacher2.jpg';
import teacher3 from '../assets/teacher3.jpg';
import teacher4 from '../assets/teacher4.jpg';
import teacher5 from '../assets/teacher5.jpg';

const TeachersSection = () => {
  const teachers = [
    {
      id: 1,
      name: "Dr. Dev Chakroborty",
      subject: "Mathematics",
      experience: "15 years",
      rating: 4.9,
      students: 320,
      image: teacher1,
      bio: "PhD in Applied Mathematics from MIT. Specializes in Calculus and Linear Algebra."
    },
    {
      id: 2,
      name: "Prof. Abhijit Barman",
      subject: "Physics",
      experience: "12 years",
      rating: 4.8,
      students: 280,
      image: teacher2,
      bio: "Former CERN researcher with expertise in Quantum Mechanics and Astrophysics."
    },
    {
      id: 3,
      name: "Dr. Ankush Kumar Singh",
      subject: "Chemistry",
      experience: "10 years",
      rating: 4.7,
      students: 250,
      image: teacher3,
      bio: "Organic chemistry specialist with pharmaceutical industry experience."
    },
    {
      id: 4,
      name: "Subham Chakroborty",
      subject: "Web Development",
      experience: "8 years",
      rating: 4.9,
      students: 420,
      image: teacher4,
      bio: "Full-stack developer with 5 years at Google. Focus on React and Node.js."
    },
    {
      id: 5,
      name: "Megha Ghosh",
      subject: "Graphic Design",
      experience: "7 years",
      rating: 4.8,
      students: 380,
      image: teacher5,
      bio: "Award-winning designer with expertise in UI/UX and branding."
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
    <section className="teachers-section">
      <div className="container">
        <h2>Our Expert Educators</h2>
        <p className="section-subtitle">Learn from our industry professionals and academic experts</p>
        
        <Slider {...sliderSettings} className="teachers-slider">
          {teachers.map(teacher => (
            <div key={teacher.id} className="teacher-slide">
              <div className="teacher-card">
                <div 
                  className="teacher-image"
                  style={{ backgroundImage: `url(${teacher.image})` }}
                >
                  <div className="teacher-rating">⭐ {teacher.rating}</div>
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
                  <button className="view-profile-btn">View Profile</button>
                  <button className="message-btn">Message</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        <button className="see-all-teachers-btn">Meet All Our Teachers</button>
      </div>
    </section>
  );
};

export default TeachersSection;
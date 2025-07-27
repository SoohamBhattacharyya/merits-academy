import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <div className="App">
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        {/* We'll add more sections here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
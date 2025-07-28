import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import SEO from './components/SEO';
import TeachersSection from './components/TeachersSection';

function App() {
  return (
    <div className="App">
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <TeachersSection />
        {/* We'll add more sections here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
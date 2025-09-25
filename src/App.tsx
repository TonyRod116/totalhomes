import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import FinishesSection from './sections/FinishesSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <FinishesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
import Footer from './components/Footer'
import Header from './components/Header'
import AboutSection from './sections/AboutSection'
import GallerySection from './sections/GallerySection'
import HeroSection from './sections/HeroSection'
import PainPointsSection from './sections/PainPointsSection'
import ProjectsSection from './sections/ProjectsSection'
import QualitySection from './sections/QualitySection'
import ServicesSection from './sections/ServicesSection'
import StepsSection from './sections/StepsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ValuePropsSection from './sections/ValuePropsSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <PainPointsSection />
        <AboutSection />
        <ServicesSection />
        <StepsSection />
        <TestimonialsSection />
        <GallerySection />
        <ProjectsSection />
        <QualitySection />
      </main>
      <Footer />
    </div>
  )
}

export default App


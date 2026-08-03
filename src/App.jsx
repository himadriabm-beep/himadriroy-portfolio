import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AICenterOfExcellence from './components/AICenterOfExcellence';
import Metrics from './components/Metrics';
import CustomerStories from './components/CustomerStories';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { theme, toggleTheme } = useTheme();
  const sectionIds = ['home', 'about', 'ai-coe', 'metrics', 'stories', 'timeline', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <AICenterOfExcellence />
        <Metrics />
        <CustomerStories />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
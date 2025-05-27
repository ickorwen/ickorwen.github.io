import { motion } from 'framer-motion';
import './App.css';
import {
  Navigation,
  Hero,
  AboutSection,
  TechStackSection,
  ExperienceSection,
  ProjectsSection,
  CSContentSection,
  ContactSection,
} from './components';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '100vh', background: 'var(--space-cadet)' }}
    >
      <Navigation />
      <div style={{ paddingTop: '80px' }}>
        <Hero />
        <main>
          <AboutSection />
          <TechStackSection />
          <ExperienceSection />
          <ProjectsSection />
          <CSContentSection />
          <ContactSection />
        </main>
      </div>
    </motion.div>
  );
}

export default App;

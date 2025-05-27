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
} from './components';

function App() {
  return (    <motion.div
      className="app-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '100vh', background: 'var(--space-cadet)' }}
    >
      <Navigation />
      <div style={{ paddingTop: '80px' }}>
        <Hero />        <main>
          <AboutSection />
          <TechStackSection />
          <ExperienceSection />
          <ProjectsSection />
          <CSContentSection />
        </main>
      </div>
    </motion.div>
  );
}

export default App;

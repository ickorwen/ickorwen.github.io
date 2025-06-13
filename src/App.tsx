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
  CursorParticles,
  InteractiveStarfield,
  AmbientMusicToggle,
} from './components';

function App() {
  return (    <motion.div
      className="app-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '100vh', background: 'var(--space-cadet)', display: 'flex', flexDirection: 'column' }}
    >
      {/* Interactive Background Effects */}
      <InteractiveStarfield />
      <CursorParticles />
      
      {/* Ambient Music Control */}
      <AmbientMusicToggle />
      
      <Navigation />
      <div style={{ 
        paddingTop: '40px', 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column'
      }}>
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

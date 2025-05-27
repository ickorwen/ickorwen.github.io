import { motion } from 'framer-motion';
import { Section } from './Section';
import ItchBadge from '../assets/itchio-badge.svg';
import TestiusThumb from '../assets/testius-gamius-thumb.png';

export function ProjectsSection() {
  return (
    <Section delay={0.15}>
      <h2 id="gamedev">GameDev Projects</h2>      <div className="projects-grid">
        <motion.div
          className="gamedev-project"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1, type: 'spring', stiffness: 140 }}
          style={{
            background: 'rgba(29,27,66,0.85)',
            border: '2px solid #23214a',
            borderRadius: '1.2rem',
            boxShadow: '0 2px 12px #1d1b4280',
            padding: '2rem 1.5rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 340,
            position: 'relative',
            transition: 'box-shadow 0.2s',
          }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #dfd39099' }}
        >
          <img 
            src={TestiusThumb} 
            alt="Testius Gamius thumbnail" 
            className="thumbnail" 
            style={{ 
              width: 220, 
              height: 220, 
              borderRadius: '1rem', 
              objectFit: 'cover', 
              marginBottom: 18, 
              boxShadow: '0 2px 16px #1d1b4280' 
            }} 
          />
          <h3 style={{ fontSize: 24, margin: 0, color: '#dfd390' }}>Testius Gamius</h3>
          <p style={{ textAlign: 'center', margin: '1rem 0 0 0', opacity: 0.92, fontSize: 16 }}>
            A test game available on my itch.io page. You can play it I thnk, expect absolutely nothing tho i just used this to test linking games
          </p>
          <div className="itch-link" style={{ marginTop: 16 }}>
            <a href="https://ickor.itch.io/test-game" target="_blank" rel="noopener noreferrer">
              <img src={ItchBadge} alt="itch.io badge" style={{ height: 40, filter: 'drop-shadow(0 0 6px #dfd39088)' }} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="gamedev-project"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.18, type: 'spring', stiffness: 140 }}
          style={{
            background: 'rgba(29,27,66,0.85)',
            border: '2px solid #23214a',
            borderRadius: '1.2rem',
            boxShadow: '0 2px 12px #1d1b4280',
            padding: '2rem 1.5rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 340,
            position: 'relative',
            transition: 'box-shadow 0.2s',
          }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #dfd39099' }}
        >
          <div 
            className="thumbnail" 
            style={{ 
              width: 220, 
              height: 220, 
              borderRadius: '1rem', 
              background: '#1d1b42', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#dfd39080', 
              fontSize: 64, 
              fontWeight: 700, 
              marginBottom: 18 
            }}
          >
            ?
          </div>
          <h3 style={{ fontSize: 24, margin: 0, color: '#dfd390' }}>
            Where the Sun Sleeps{' '}
            <span style={{ fontSize: '1.1rem', color: '#dfd390b0', fontWeight: 400 }}>
              (in development, 2025)
            </span>
          </h3>
          <p style={{ textAlign: 'center', margin: '1rem 0 0 0', opacity: 0.92, fontSize: 16 }}>
            A new game project started this year. Not released yet. Stay tuned for more info!
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

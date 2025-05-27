import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaItchIo } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

export function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <motion.section
      ref={ref}
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
      style={{
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >      <div className="hero-content">
        <div className="hero-image" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#dfd390' }} />
          <div style={{ width: 4, height: 180, background: 'linear-gradient(180deg, #dfd390 0%, #1d1b42 100%)', borderRadius: 8, marginTop: 4 }} />
        </div>        <div className="hero-text">          <h1 style={{ 
            fontSize: '3.2rem', 
            fontWeight: 700, 
            color: '#dfd390', 
            marginBottom: 0,
            lineHeight: 1.1,
            wordBreak: 'break-word'
          }}>
            Hi, I'm <span style={{ color: '#fffbe0' }}>Ickor</span>
          </h1>
          <div style={{ 
            fontSize: window.innerWidth < 768 ? '1.2rem' : '1.5rem', 
            color: '#dfd390', 
            marginTop: 12, 
            fontWeight: 400, 
            minHeight: window.innerWidth < 768 ? 36 : 48 
          }}>
            I do{' '}
            <span style={{ color: '#fffbe0', fontWeight: 600 }}>
              <Typewriter
                options={{
                  strings: [
                    'Game Development',
                    'Creative Coding',
                    'Interactive Tech',
                    'CS Projects',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 80,
                }}
              />
            </span>
          </div>
          <p style={{ fontSize: '1.15rem', opacity: 0.92, lineHeight: 1.7, marginTop: 18, maxWidth: 600, color: '#dfd390' }}>
            This site is a work in progress lmao I'm missing like a whole bunch of stuff
          </p>          <div className="contact-icons" style={{ marginTop: 24, display: 'flex', gap: '2rem' }}>
            <a className="icon-link" href="https://github.com/ickorwen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className="icon-link" href="https://www.linkedin.com/in/kenzi-chua/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a className="icon-link" href="mailto:chua.raignekenzi@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a className="icon-link" href="https://ickor.itch.io" target="_blank" rel="noopener noreferrer" aria-label="Itch.io">
              <FaItchIo />
            </a>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #dfd390 0%, #b8a96b 100%)',
                color: '#1d1b42',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(223, 211, 144, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(223, 211, 144, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(223, 211, 144, 0.2)';
              }}
            >
              Resume
              <span style={{ fontSize: '0.8rem', marginLeft: '0.25rem' }}>›</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

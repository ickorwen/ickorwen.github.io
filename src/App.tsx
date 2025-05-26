import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaItchIo } from 'react-icons/fa';
import './App.css'
import ItchBadge from './assets/itchio-badge.svg';
import TestiusThumb from './assets/testius-gamius-thumb.png';
import MeSVG from './assets/me-placeholder.png';

function Section({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
      }}
      style={{ margin: '4rem 0', padding: '2rem', borderRadius: '1rem', background: 'rgba(29,27,66,0.7)', boxShadow: '0 4px 32px #1d1b4280' }}
    >
      {children}
    </motion.section>
  );
}

function Hero() {
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
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-40px',
        left: '-60px',
        width: '220px',
        height: '220px',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
        <img src={MeSVG} alt="Me placeholder" style={{ width: 120, height: 120, borderRadius: '50%', background: '#23214a', boxShadow: '0 2px 16px #1d1b4280', objectFit: 'cover' }} />
        <div>
          <motion.h1
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 120 }}
          >
            Ickor
          </motion.h1>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25, type: 'spring', stiffness: 120 }}
          >
            Game Development & Computer Science
          </motion.h2>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.35, type: 'spring', stiffness: 120 }}
        style={{ fontSize: '1.15rem', opacity: 0.92, lineHeight: 1.7, marginBottom: '0.5rem', maxWidth: 600, position: 'relative', zIndex: 1 }}
      >
        CS student that focuses mostly on game development, interactive tech, and creative coding. This site is a work in progress lmao just you wait
      </motion.p>
      <motion.div
        className="contact-icons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.45, type: 'spring', stiffness: 120 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <a className="icon-link" href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a className="icon-link" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a className="icon-link" href="mailto:chua.raignekenzi@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a className="icon-link" href="https://ickor.itch.io" target="_blank" rel="noopener noreferrer" aria-label="Itch.io">
          <FaItchIo/>
        </a>
      </motion.div>
    </motion.section>
  );
}

function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const navTop = navRef.current.getBoundingClientRect().top;
      setIsSticky(navTop <= 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        ref={navRef}
        className="nav-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
      >
        <a href="#gamedev" className="nav-link">GameDev Projects</a>
        <a href="#cscontent" className="nav-link">CS Content</a>
        <a href="#contact" className="nav-link">Contact</a>
      </motion.div>
      {isSticky && (
        <nav
          id="main-nav"
          className="navbar-sticky"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            background: 'rgba(29,27,66,0.98)',
            boxShadow: '0 2px 16px #1d1b4280',
            borderBottom: '2px solid #dfd39044',
            transition: 'all 0.3s',
            padding: '0.5rem 2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
          }}
        >
          <a href="#gamedev" className="nav-link">GameDev Projects</a>
          <a href="#cscontent" className="nav-link">CS Content</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      )}
    </>
  );
}

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '100vh', background: 'var(--space-cadet)' }}
    >
      <Hero />
      <Navigation />
      <main>
        <Section delay={0.15}>
          <h2 id="gamedev">GameDev Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            <motion.div
              className="gamedev-project"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.1, type: 'spring', stiffness: 140 }}
            >
              <img src={TestiusThumb} alt="Testius Gamius thumbnail" className="thumbnail" />
              <h3>Testius Gamius</h3>
              <p>A test game available on my itch.io page. Try it out!</p>
              <div className="itch-link">
                <a href="https://ickor.itch.io/test-game" target="_blank" rel="noopener noreferrer">
                  <img src={ItchBadge} alt="itch.io badge" />
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
            >
              <div className="thumbnail" style={{ width: 320, height: 320, borderRadius: '1.2rem', background: '#1d1b42', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dfd39080', fontSize: 64, fontWeight: 700, marginBottom: 24 }}>
                ?
              </div>
              <h3>Where the Sun Sleeps <span style={{ fontSize: '1.1rem', color: '#dfd390b0', fontWeight: 400 }}>(in development, 2025)</span></h3>
              <p>A new game project started this year. Not released yet. Stay tuned for more info!</p>
            </motion.div>
          </div>
        </Section>
        <Section delay={0.22}>
          <h2 id="cscontent">CS Content</h2>
          <p>[Stuff I did for school, idk how to get this yet will add shit later]</p>
        </Section>
      </main>
    </motion.div>
  )
}

export default App

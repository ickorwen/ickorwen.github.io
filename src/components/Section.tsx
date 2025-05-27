import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  delay?: number;
}

export function Section({ children, delay = 0 }: SectionProps) {
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
      style={{ 
        margin: '4rem 0', 
        padding: '2rem', 
        borderRadius: '1rem', 
        background: 'rgba(29,27,66,0.7)', 
        boxShadow: '0 4px 32px #1d1b4280' 
      }}
    >
      {children}
    </motion.section>
  );
}

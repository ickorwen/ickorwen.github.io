import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
}

export function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;
    let animationFrame: number;    const handleMouseMove = (e: MouseEvent) => {
      // Create new particle
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX + (Math.random() - 0.5) * 20,
        y: e.clientY + (Math.random() - 0.5) * 20,
        size: Math.random() * 4 + 2,
        opacity: 1,
        color: Math.random() > 0.5 ? '#dfd390' : '#fffbe0',
        life: 1
      };

      setParticles(prev => [...prev.slice(-15), newParticle]); // Keep only last 16 particles
    };

    const updateParticles = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          life: particle.life - 0.02,
          opacity: particle.life - 0.02,
          y: particle.y - 1,
          x: particle.x + (Math.random() - 0.5) * 0.5
        })).filter(particle => particle.life > 0)
      );
      
      animationFrame = requestAnimationFrame(updateParticles);
    };

    document.addEventListener('mousemove', handleMouseMove);
    updateParticles();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="cursor-particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            backgroundColor: particle.color,
            position: 'fixed',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            filter: `drop-shadow(0 0 4px ${particle.color})`,
            transition: 'none'
          }}
        />
      ))}
    </div>
  );
}

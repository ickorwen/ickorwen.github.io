import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  id: number;
}

export function InteractiveStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);
  const shootingStarsRef = useRef<ShootingStar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          color: Math.random() > 0.7 ? '#dfd390' : '#fffbe0'
        });
      }
      setStars(newStars);
    };

    generateStars();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);    // Create shooting star occasionally
    const createShootingStar = () => {
      if (Math.random() < 0.003) { // 0.3% chance each frame
        const newShootingStar: ShootingStar = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5, // Top half of screen
          length: Math.random() * 80 + 20,
          speed: Math.random() * 5 + 3,
          angle: Math.random() * Math.PI / 4 + Math.PI / 4, // 45-90 degrees
          opacity: 1,
          id: Date.now() + Math.random()
        };
        shootingStarsRef.current = [...shootingStarsRef.current, newShootingStar];
      }
    };

    // Animation loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);      // Update and draw stars
      stars.forEach((star) => {
        // Mouse interaction - stars get brighter when mouse is near
        const distance = Math.sqrt(
          Math.pow(star.x - mousePos.x, 2) + Math.pow(star.y - mousePos.y, 2)
        );
        const maxDistance = 100;
        const mouseEffect = Math.max(0, 1 - distance / maxDistance);
        
        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7;
        const finalOpacity = (star.opacity * twinkle + mouseEffect * 0.5) * 0.8;
        
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = finalOpacity;
        ctx.arc(star.x, star.y, star.size + mouseEffect * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect for nearby stars
        if (mouseEffect > 0.3) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = star.color;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size + mouseEffect * 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });      // Update and draw shooting stars
      shootingStarsRef.current = shootingStarsRef.current.map(shootingStar => {
        const newX = shootingStar.x + Math.cos(shootingStar.angle) * shootingStar.speed;
        const newY = shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.speed;
        
        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          shootingStar.x, shootingStar.y,
          newX, newY
        );
        gradient.addColorStop(0, `rgba(223, 211, 144, ${shootingStar.opacity})`);
        gradient.addColorStop(1, 'rgba(223, 211, 144, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.globalAlpha = shootingStar.opacity;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(newX, newY);
        ctx.stroke();
        
        return {
          ...shootingStar,
          x: newX,
          y: newY,
          opacity: shootingStar.opacity - 0.01
        };
      }).filter((star: ShootingStar) => star.opacity > 0 && star.x < canvas.width + 100 && star.y < canvas.height + 100);

      createShootingStar();
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stars, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-starfield"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        background: 'transparent'
      }}
    />
  );
}

import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiVite, SiGodotengine, SiCplusplus, SiPython, SiBlender } from 'react-icons/si';
import { Section } from './Section';

interface TechItem {
  name: string;
  icon: React.ReactElement;
  color: string;
}

export function TechStackSection() {  
  const techs: TechItem[] = [
    { name: 'TypeScript', icon: <SiTypescript className="tech-icon-svg" color="#3178c6" />, color: "#3178c6" },
    { name: 'React', icon: <FaReact className="tech-icon-svg" color="#61dafb" />, color: "#61dafb" },
    { name: 'Vite', icon: <SiVite className="tech-icon-svg" color="#ffd62e" />, color: "#ffd62e" },
    { name: 'Godot', icon: <SiGodotengine className="tech-icon-svg" color="#478cbf" />, color: "#478cbf" },
    { name: 'Blender', icon: <SiBlender className="tech-icon-svg" color="#f5792a" />, color: "#f5792a" },
    { name: 'C++', icon: <SiCplusplus className="tech-icon-svg" color="#00599c" />, color: "#00599c" },
    { name: 'Python', icon: <SiPython className="tech-icon-svg" color="#ffd343" />, color: "#ffd343" },
  ];
  
  return (
    <Section delay={0.21}>
      <h2 id="tech">Tech Stack</h2>      <div className="tech-grid">{techs.map((tech) => (
          <div
            key={tech.name}
            className="tech-item"
            style={{
              color: tech.color,
            }}
            title={tech.name}
          >
            <span className="tech-icon" style={{ 
              color: tech.color,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {tech.icon}
            </span>
            <span style={{ fontSize: 15, opacity: 0.92, color: '#dfd390' }}>{tech.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

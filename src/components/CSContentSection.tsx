import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Section } from './Section';

interface CSProject {
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  type: string;
}

export function CSContentSection() {
  const csProjects: CSProject[] = [
    {
      title: "Hospital Registration System",
      description: "A comprehensive terminal-based hospital registration system built for managing patient data, appointments, and medical records efficiently.",
      githubUrl: "https://github.com/ickorwen/Hospital-Registration-System",
      technologies: ["Terminal", "Data Management", "System Design"],
      type: "System Application"
    },
    {
      title: "Architecture of a Microcomputer",
      description: "An interactive educational website that explains the fundamental architecture and components of microcomputers in an engaging way.",
      githubUrl: "https://github.com/ickorwen/Architecture-of-a-Microcomputer",
      technologies: ["Web Development", "Educational Content", "Computer Architecture"],
      type: "Educational Website"
    },
    {
      title: "Interactive Calendar Todo App",
      description: "A feature-rich terminal-based calendar and todo application with interactive functionality for task management and scheduling.",
      githubUrl: "https://github.com/ickorwen/finals2ndsem",
      technologies: ["Terminal", "Calendar System", "Task Management"],
      type: "Productivity Tool"
    }
  ];

  return (
    <Section delay={0.22}>
      <h2 id="cscontent">CS Projects</h2>
      <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
        Here are some projects I developed during my Computer Science coursework, showcasing various programming concepts and problem-solving approaches.
      </p>
        <div className="cs-projects-grid">
        {csProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 120 }}
            style={{
              background: 'rgba(29,27,66,0.8)',
              border: '2px solid #23214a',
              borderRadius: '1rem',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
            whileHover={{
              scale: 1.02,
              borderColor: '#dfd390',
              boxShadow: '0 8px 32px rgba(223,211,144,0.2)'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <span style={{
                background: 'rgba(223,211,144,0.15)',
                color: '#dfd390',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.8rem',
                fontWeight: '500',
                border: '1px solid rgba(223,211,144,0.3)'
              }}>
                {project.type}
              </span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#dfd390',
                  fontSize: '1.2rem',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fffbe0'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#dfd390'}
              >
                <FaGithub />
              </a>
            </div>
            
            <h3 style={{
              color: '#fffbe0',
              fontSize: '1.3rem',
              fontWeight: '600',
              margin: '0 0 0.75rem 0',
              lineHeight: 1.3
            }}>
              {project.title}
            </h3>
            
            <p style={{
              color: '#dfd390',
              opacity: 0.9,
              lineHeight: 1.6,
              margin: '0 0 1rem 0',
              fontSize: '0.95rem'
            }}>
              {project.description}
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '1rem'
            }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: 'rgba(255,251,224,0.1)',
                    color: '#fffbe0',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    border: '1px solid rgba(255,251,224,0.2)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

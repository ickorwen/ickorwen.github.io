import { Section } from './Section';

export function ExperienceSection() {
  return (
    <Section delay={0.18}>
      <h2 id="experience">Experience</h2>
      <div style={{
        position: 'relative',
        paddingLeft: '2rem',
        marginTop: '2rem',
      }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '0.75rem',
          top: '0',
          bottom: '0',
          width: '3px',
          background: 'linear-gradient(180deg, #dfd390 0%, rgba(223,211,144,0.3) 100%)',
          borderRadius: '2px',
        }}></div>

        {/* Education */}
        <div style={{
          position: 'relative',
          marginBottom: '2rem',
          paddingLeft: '1.5rem',
        }}>
          <div className="experience-item">
            <div className="experience-marker"></div>
            <h3 style={{ 
              fontSize: '1.1rem', 
              color: '#dfd390', 
              margin: '0 0 0.5rem 0',
              fontWeight: '600' 
            }}>
              Student, Computer Science
            </h3>
            <p style={{ 
              fontSize: '0.95rem', 
              opacity: 0.9, 
              margin: '0 0 0.5rem 0',
              color: '#fffbe0'
            }}>
              West Visayas State University
            </p>
            <span style={{ 
              fontSize: '0.85rem', 
              color: '#dfd390', 
              opacity: 0.8,
              fontWeight: '500'
            }}>
              2024 – Present
            </span>
          </div>
        </div>

        {/* Game Jams */}
        <div style={{
          position: 'relative',
          paddingLeft: '1.5rem',
        }}>
          <div className="experience-item">
            <div className="experience-marker"></div>
            <h3 style={{ 
              fontSize: '1.1rem', 
              color: '#dfd390', 
              margin: '0 0 0.5rem 0',
              fontWeight: '600' 
            }}>
              Game Jam Participant
            </h3>
            <p style={{ 
              fontSize: '0.95rem', 
              opacity: 0.9, 
              margin: '0 0 0.5rem 0',
              color: '#fffbe0'
            }}>
              Various game development competitions and events
            </p>
            <span style={{ 
              fontSize: '0.85rem', 
              color: '#dfd390', 
              opacity: 0.8,
              fontWeight: '500'
            }}>
              2025 – Present
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

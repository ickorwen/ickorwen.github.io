import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ProfilePic from '../assets/me-placeholder.png';

interface NavLink {
  id: string;
  title: string;
}

export function Navigation() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);
  const navLinks: NavLink[] = [
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'tech', title: 'Tech Stack' },
    { id: 'gamedev', title: 'Projects' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
      setToggle(false);
    }
  };

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: 'rgba(29,27,66,0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(29,27,66,0.4)',
        borderBottom: '1px solid rgba(223,211,144,0.2)',
        padding: '0.75rem 2rem',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        {/* Logo/Name section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
          }}
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src={ProfilePic}
            alt="Ickor Profile"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #dfd390',
            }}
          />
          <div>
            <p style={{
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: 'normal',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
            }}>
              KENZI CHUA
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul style={{ 
            listStyle: 'none', 
            margin: 0, 
            padding: 0, 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                style={{
                  color: active === link.title ? '#dfd390' : 'white',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#dfd390';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = active === link.title ? '#dfd390' : 'white';
                }}
              >
                {link.title}
              </li>
            ))}
            <li
              style={{
                color: 'white',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onClick={openResume}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#dfd390';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              Resume
            </li>
          </ul>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <div ref={mobileMenuRef}>
            <button
              onClick={() => setToggle(!toggle)}
              style={{
                background: 'none',
                border: 'none',
                color: '#dfd390',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {toggle ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu Sidebar */}
            {toggle && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: '1rem',
                  background: 'rgba(29,27,66,0.98)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '1rem',
                  border: '1px solid rgba(223,211,144,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  padding: '1.5rem',
                  minWidth: '200px',
                  transform: 'translateY(0)',
                  opacity: 1,
                  visibility: 'visible',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem' 
                }}>
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      style={{
                        color: active === link.title ? 'white' : '#dfd390',
                        fontSize: '1.1rem',
                        fontWeight: 'medium',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        transition: 'all 0.2s ease',
                      }}
                      onClick={() => scrollToSection(link.id)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(223,211,144,0.1)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'none';
                        e.currentTarget.style.color = active === link.title ? 'white' : '#dfd390';
                      }}
                    >
                      {link.title}
                    </li>
                  ))}
                  <li
                    style={{
                      color: '#dfd390',
                      fontSize: '1.1rem',
                      fontWeight: 'medium',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      transition: 'all 0.2s ease',
                    }}
                    onClick={openResume}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(223,211,144,0.1)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'none';
                      e.currentTarget.style.color = '#dfd390';
                    }}
                  >
                    Resume
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

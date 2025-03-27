import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(145deg, #000000, #8B0000)', // Gradient from black to dark red
        color: '#fff', // White text
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 -2px 10px rgba(255, 0, 0, 0.3)', // Subtle red shadow
      }}
    >
      <div>
        <h4 style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Game Verse
        </h4>
        <p style={{ margin: '10px 0', fontSize: '1rem' }}>
          Your ultimate gaming destination
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '1rem',
          }}
        >
          {/* Facebook Icon */}
          <a
            href="#"
            style={{
              color: '#fff', // White by default
              fontSize: '1.5rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#ff0000')} // Red on hover
            onMouseLeave={(e) => (e.target.style.color = '#fff')} // White when not hovered
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter Icon */}
          <a
            href="#"
            style={{
              color: '#fff', // White by default
              fontSize: '1.5rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#ff0000')}
            onMouseLeave={(e) => (e.target.style.color = '#fff')}
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Instagram Icon */}
          <a
            href="#"
            style={{
              color: '#fff', // White by default
              fontSize: '1.5rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#ff0000')}
            onMouseLeave={(e) => (e.target.style.color = '#fff')}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Game Verse. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

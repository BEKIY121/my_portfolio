import React from 'react';
import ProfileCard from '../TiltedCard';

function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: 70,
      backgroundColor: 'rgba(0,0,0,0.85)',
      borderBottom: '1px solid #444',
      display: 'flex',
      alignItems: 'center',
      padding: '0 30px',
      color: '#7cff67',
      fontWeight: '700',
      fontSize: '1.5rem',
      fontFamily: "'Inter', sans-serif",
      zIndex: 1000,
      userSelect: 'none',
    }}>
      Beki Kusha Portfolio
    </header>
  );
}

function Footer() {
  return (
    <footer style={{
      marginTop: '100px',
      padding: '30px 20px',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#aaa',
      borderTop: '1px solid #444',
      fontFamily: "'Inter', sans-serif",
    }}>
      &copy; {new Date().getFullYear()} Beki Kusha. All rights reserved.
    </footer>
  );
}

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: 100,
      paddingBottom: 80,
      color: '#eee',
      fontFamily: "'Inter', sans-serif",
      overflowX: 'hidden',
    }}>
      <Header />

      {/* Hero Section: side-by-side layout */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          maxWidth: 1000,
          margin: '0 auto',
          border: '1px solid #444',
          borderRadius: 10,
          padding: '40px',
          backgroundColor: 'rgba(0,0,0,0.4)',
          boxSizing: 'border-box',
        }}
      > 
      {/* Profile Card */}
        <div style={{ flex: '0 1 320px' }}>
          <ProfileCard
            name="Beki Kusha"
            title="Software Engineer"
            handle="bekikusha"
            status="Online"
            contactText="Contact Me"
            avatarUrl="src/assets/enka.png"
            miniAvatarUrl="src/assets/enka.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>

        {/* Text Intro */}
        <div style={{ flex: '1 1 320px', minWidth: 280 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: 20, color: '#7cff67' }}>
            Hello, I'm Beki Kusha
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#ccc', lineHeight: 1.6 }}>
            A <strong>Software Engineer</strong> passionate about building scalable full-stack applications,
            beautiful user experiences, and clean, maintainable code.
          </p>
        </div>

        
      </section>

      {/* Skills Section */}
      <section
        style={{
          marginTop: 80,
          maxWidth: 900,
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1px solid #444',
          borderRadius: 10,
          padding: 30,
          backgroundColor: 'rgba(0,0,0,0.3)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: 30, color: '#7cff67' }}>🛠️ Core Skills</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 16,
        }}>
          {['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'PostgreSQL', 'Git & GitHub'].map(skill => (
            <span
              key={skill}
              style={{
                border: '1px solid #555',
                padding: '10px 18px',
                borderRadius: 8,
                fontSize: 16,
                color: '#eee',
                userSelect: 'none',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        style={{
          marginTop: 100,
          maxWidth: 1000,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 30,
          border: '1px solid #444',
          borderRadius: 10,
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: 20, color: '#7cff67', textAlign: 'center' }}>📁 Featured Projects</h2>
        <p style={{ color: '#aaa', marginBottom: 30, textAlign: 'center' }}>Projects demonstrating my skills and innovation.</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 30,
        }}>
          {[{
            title: "NextGen Dashboard",
            desc: "A real-time analytics dashboard with React, Node.js & WebSocket.",
            link: "#",
          }, {
            title: "E-Commerce Platform",
            desc: "Scalable online store with payment integration.",
            link: "#",
          }, {
            title: "Open Source CLI",
            desc: "Developer CLI tool for enhancing workflow and productivity.",
            link: "#",
          }].map(({ title, desc, link }) => (
            <div
              key={title}
              style={{
                border: '1px solid #555',
                padding: 20,
                borderRadius: 10,
                backgroundColor: '#121212',
              }}
            >
              <h3 style={{ color: '#7cff67', marginBottom: 12 }}>{title}</h3>
              <p style={{ fontSize: 14, color: '#bbb', marginBottom: 18 }}>{desc}</p>
              <a href={link} style={{ color: '#7cff67', fontWeight: 'bold', textDecoration: 'none' }}>
                View Details →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{
          marginTop: 100,
          maxWidth: 800,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 30,
          border: '1px solid #444',
          borderRadius: 10,
          backgroundColor: 'rgba(0,0,0,0.3)',
          fontStyle: 'italic',
          color: '#ccc',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: 20, color: '#7cff67', textAlign: 'center' }}>💬 What People Say</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          <blockquote style={{
            border: '1px solid #555',
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#121212',
          }}>
            “Working with Beki was a great experience. He delivered everything on time and exceeded expectations in terms of design and performance.”
            <br /><span style={{ fontWeight: 'bold', color: '#7cff67' }}>– Client Name, Startup CEO</span>
          </blockquote>
          <blockquote style={{
            border: '1px solid #555',
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#121212',
          }}>
            “His attention to detail and architectural decisions improved our product’s scalability significantly.”
            <br /><span style={{ fontWeight: 'bold', color: '#7cff67' }}>– Tech Lead, SaaS Company</span>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          marginTop: 100,
          textAlign: 'center',
          border: '1px solid #444',
          borderRadius: 10,
          padding: 40,
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      >
        <h3 style={{ fontSize: '1.8rem', marginBottom: 10, color: '#7cff67' }}>📬 Let's Work Together</h3>
        <p style={{ color: '#aaa', marginBottom: 30 }}>
          Whether you’re building a new product, need a full-stack developer, or want to collaborate—let’s connect!
        </p>
        <a
          href="/contact"
          style={{
            background: '#7cff67',
            color: '#000',
            padding: '14px 28px',
            borderRadius: 8,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'background-color 0.3s',
            display: 'inline-block',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#63c451'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#7cff67'}
        >
          Get In Touch
        </a>
      </section>

      <Footer />
    </div>
  );
}

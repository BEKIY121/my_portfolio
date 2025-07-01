// src/pages/Home.jsx
import { Background } from 'react-bits'; // Adjust if the name is different

const Home = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
           <Background /> {/* or ParticlesBg type="circle" */}
        <h1 style={styles.heading}>Hey, I'm <span style={styles.name}>Beki Kusha</span></h1>
        <p style={styles.subtext}>I'm a full-stack developer passionate about building modern web apps.</p>
        <a href="/projects" style={styles.button}>See My Work</a>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  container: {
    textAlign: 'center',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  name: {
    color: '#0070f3',
  },
  subtext: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  button: {
    textDecoration: 'none',
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
};

export default Home;

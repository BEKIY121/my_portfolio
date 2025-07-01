import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Aurora from './components/Aurora';
import Dock from './components/Dock';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

import { VscHome, VscAccount, VscCheck, VscAttach, VscHistory } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

function MainLayout() {
  const navigate = useNavigate();

  const items = [
    { label: 'Home', icon: <VscHome />, onClick: () => navigate('/') },
    { label: 'About', icon: <VscAccount />, onClick: () => navigate('/about') },
    { label: 'Projects', icon: <VscCheck />, onClick: () => navigate('/projects') },
    { label: 'Resume', icon: <VscAttach />, onClick: () => navigate('/resume') },
    { label: 'Contact', icon: <VscHistory />, onClick: () => navigate('/contact') },
  ];

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#000' }}>
      <Aurora
        colorStops={["#5227ff", "#7cff67", "#5227ff"]}
        blend={10.5}
        amplitude={0.5}
        speed={0.5}
      />

      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        overflowY: 'auto',
        paddingBottom: '100px',
      }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Dock 
          items={items}
          panelHeight={88}
          baseItemSize={60}
          magnification={80}
        />
      </div>
    </div>
  );
}

export default App;

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
    { label: 'Home', icon: <VscHome />, onClick: () => navigate('/my_portfolio/') },
    { label: 'About', icon: <VscAccount />, onClick: () => navigate('/my_portfolio/about') },
    { label: 'Projects', icon: <VscCheck />, onClick: () => navigate('/my_portfolio/projects') },
    { label: 'Resume', icon: <VscAttach />, onClick: () => navigate('/my_portfolio/resume') },
    { label: 'Contact', icon: <VscHistory />, onClick: () => navigate('/my_portfolio/contact') },
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
          <Route path="/my_portfolio/" element={<HomePage />} />
          <Route path="/my_portfolio/about" element={<AboutPage />} />
          <Route path="/my_portfolio/projects" element={<ProjectsPage />} />
          <Route path="/my_portfolio/resume" element={<ResumePage />} />
          <Route path="/my_portfolio/contact" element={<ContactPage />} />
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

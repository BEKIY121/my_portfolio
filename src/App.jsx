import Card from './components/Card';
import Counter from './components/Counter';
import Student from './Student.jsx';
import Aurora from './components/Aurora';
import ProfileCard from './TiltedCard';
              import Dock from './components/Dock';
// import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
  


function App() {
  const items = [
                { label: 'Home', onClick: () => alert('Home!') },
                { label: 'Archive', onClick: () => alert('Archive!') },
                { label: 'Profile', onClick: () => alert('Profile!') },
                { label: 'Settings', onClick: () => alert('Settings!') },
              ];


  return (
    <div className="App" style={{ height: '60vh', width: '100vw', overflow: 'hidden' }}>
      {/* <Student /> */}

      <Aurora
        colorStops={["#5227ff", "#7cff67", "#5227ff"]}
        blend={10.5}
        amplitude={0.5}
        speed={0.5}>
        </Aurora>
      <div className="content" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <div style={{ display: 'flex',alignItems: 'center', justifyContent: 'center' }}>   

              <ProfileCard
                name="BEki Kusha"
                title="Software Engineer"
                handle="bekikusha"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/src/assets/enka.png"
                miniAvatarUrl={"/src/assets/enka.png"}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log('Contact clicked')}
              />

              <Dock 
                items={items}
                panelHeight={88}
                baseItemSize={60}
                magnification={100}
              />

        </div>``
      

        </div>

      </div>

  );
}

export default App;

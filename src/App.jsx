import React, { useState, useEffect, useRef } from 'react';
import EntryScreen from './components/EntryScreen';
import MobileLayout from './components/Layout/MobileLayout';
import DesktopLayout from './components/Layout/DesktopLayout';
import { useMediaQuery } from './components/hooks/useMediaQuery';
import { content } from './components/data/content';
import ParticlesBackground from './components/UI/ParticlesBackground';
import InteractiveBackground from "./components/UI/InteractiveBackground";


export default function App() {
  const [showEntry, setShowEntry] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
});

  // Music state
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  localStorage.setItem('theme', theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleEnter = () => {
    setShowEntry(false);
  };

  if (showEntry) {
    return <EntryScreen onEnter={handleEnter} content={content} />;
  }return (
    
 <div className="relative h-screen w-full overflow-hidden">
  <div className="relative z-10 h-full w-full overflow-hidden">
   
    <div className="absolute inset-0 z-0">
  <InteractiveBackground theme={theme} />
</div>

  <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <ParticlesBackground />
    </div> 
{/* 
    
   <div className="absolute inset-0 z-0">

  {theme === 'dark' ? (
    <>
      * 🌌 DARK MODE → SHADER *
      <GradientBackground />

      
      <div className="absolute inset-0 backdrop-blur-3xl opacity-70" />
    </>
  ) : (
    <>
   
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_30%_30%,#c7d2fe,transparent_50%),
            radial-gradient(circle_at_70%_60%,#67e8f9,transparent_50%),
            linear-gradient(to_bottom,#f8fafc,#e2e8f0)]
      " />
    </>
  )}

</div>
*/ }
  
   

    


    {/* UI */}
    <div className="relative z-10 h-full w-full">
      {isMobile ? (
        <MobileLayout 
          theme={theme} 
          toggleTheme={toggleTheme}
          audioRef={audioRef}
          playing={playing}
          setPlaying={setPlaying}
        />
      ) : (
        <DesktopLayout
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          theme={theme}
          toggleTheme={toggleTheme}
          audioRef={audioRef}
          playing={playing}
          setPlaying={setPlaying}
        />
      )}
    </div>

    {/* Global Audio Element */}
    <audio ref={audioRef} />

  </div>
  </div>
);
};

import React from 'react';
import { Sun, Moon, User, Folder, Briefcase, Wrench, FileText, Mail, Music } from 'lucide-react';
import { content } from '../data/content';

import About from '../Sections/About';
import Projects from '../Sections/Projects';
import Experience from '../Sections/Experience';
import Skills from '../Sections/Skills';
import Resume from '../Sections/Resume';
import Contact from '../Sections/Contact';
import MusicWidget from '../UI/MusicWidget';
import NavbarOrb from '../UI/NavbarOrb';

const menuItems = [
  { id: 'about', name: 'About', icon: User },
  { id: 'projects', name: 'Projects', icon: Folder },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'skills', name: 'Skills', icon: Wrench },
  { id: 'resume', name: 'Resume', icon: FileText },
  { id: 'contact', name: 'Contact', icon: Mail },
];

const DesktopLayout = ({ activeSection, setActiveSection, theme, toggleTheme, audioRef, playing, setPlaying }) => {

  const renderSection = () => {
    switch (activeSection) {
      case 'about': return <About setActiveSection={setActiveSection} />;
      case 'projects': return <Projects />;
      case 'experience': return <Experience />;
      case 'skills': return <Skills />;
      case 'resume': return <Resume />;
      case 'contact': return <Contact />;
      default: return <About setActiveSection={setActiveSection} />;
    }
  };

  return (
<div className="h-full w-full flex text-text">
      {/* 🧊 APP LAYER */}
      <div className="relative z-10 flex h-full w-full">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-72 glass border-r border-border flex flex-col shadow-2xl">

          {/* Header */}
          <div className="px-6 py-6 border-b border-border flex items-center gap-3">
            <img 
              src="/src/assets/avatar.jpeg" 
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover border border-border"
            />
            <div>
              <h2 className="text-sm font-semibold">{content.personal.name}</h2>
              <p className="text-xs text-muted">FullStack Dev</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all
                    hover:scale-[1.02] hover:shadow-lg
                    ${active
                      ? 'glass border border-white/10 text-accent bg-white/5'
                      : 'text-muted hover:text-primary'
                    }
                  `}
                >
                  <Icon size={18} className={`${active ? 'text-accent' : 'text-muted'}`} />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border"> <button onClick={toggleTheme} 
          className="w-full glass flex items-center 
          justify-center gap-2 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition" > 
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
           Theme </button>
            </div>
            
             </aside>
        {/* ================= MAIN ================= */}
        <main className="flex-1 flex flex-col h-full overflow-hidden">

          {/* Top Bar */}
          <div className="h-16 glass flex items-center justify-between px-8 border-b border-border shadow-sm">

  {/* LEFT → SECTION TITLE */}
  <h1 className="text-lg font-semibold capitalize">
    {activeSection}
  </h1>

  {/* RIGHT → MUSIC + THEME (optional combo) */}
  <div className="flex items-center gap-4">

    {/* 🎧 Music Widget */}
    <div className="w-[280px]">
      <MusicWidget 
        audioRef={audioRef}
        playing={playing}
        setPlaying={setPlaying}
      />
    </div>

  </div>

</div>
          {/* Content - Full Width */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-8 py-8 w-full">
              {renderSection()}
            </div>
          </div>

        </main>

      </div>
    </div>
  );
};

export default DesktopLayout;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sun, Moon,
  User, Folder, Briefcase,
  Wrench, FileText, Mail,
  Image
} from 'lucide-react';

import { content } from '../data/content';

import About from '../Sections/About';
import Projects from '../Sections/Projects';
import Experience from '../Sections/Experience';
import Skills from '../Sections/Skills';
import Resume from '../Sections/Resume';
import Contact from '../Sections/Contact';
import Gallery from '../Sections/Gallery';

import ClockWidget from '../UI/ClockWidget';
import { StatsWidget } from '../UI/StatsWidget';
import MusicWidget from '../UI/MusicWidget';

/* ================= APPS ================= */

const apps = [
  { id: 'about', name: 'About', icon: User },
  { id: 'projects', name: 'Projects', icon: Folder },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'skills', name: 'Skills', icon: Wrench },
  { id: 'resume', name: 'Resume', icon: FileText },
  { id: 'contact', name: 'Contact', icon: Mail },
  { id: 'gallery', name: 'Gallery', icon: Image },
];

/* ================= COMPONENT ================= */

const MobileLayout = ({ theme, toggleTheme, audioRef, playing, setPlaying }) => {
  const [activeApp, setActiveApp] = useState(null);

  /* 🔥 HANDLE MOBILE BACK BUTTON */
  useEffect(() => {
    const handleBack = () => {
      if (activeApp) {
        setActiveApp(null);
      }
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [activeApp]);

  /* 🔥 PUSH HISTORY WHEN OPEN APP */
  const openApp = (id) => {
    setActiveApp(id);
    window.history.pushState({ app: id }, "");
  };

  const renderSection = () => {
    switch (activeApp) {
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'experience': return <Experience />;
      case 'skills': return <Skills />;
      case 'resume': return <Resume />;
      case 'contact': return <Contact />;
      case 'gallery': return <Gallery />;
      default: return null;
    }
  };

  /* ================= APP SCREEN ================= */
  if (activeApp) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-full flex flex-col text-text"
      >
        {/* Header */}
        <div className="glass px-4 py-3 flex justify-between items-center">

          <button onClick={() => {
            setActiveApp(null);
            window.history.back(); // 🔥 sync history
          }}>
            Back
          </button>

          <span className="capitalize text-sm font-medium">
            {activeApp}
          </span>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto w-full px-4 pb-4">
          {renderSection()}
        </div>
      </motion.div>
    );
  }

  /* ================= HOME ================= */

  return (
    <div className="h-full w-full flex flex-col text-text overflow-hidden">

      {/* HEADER */}
      <div className="flex justify-between px-4 pt-5 pb-3">
        <div>
          <h1 className="text-lg font-semibold">
            {content.personal.name}
          </h1>
          <p className="text-xs text-muted">
            {content.personal.title}
          </p>
        </div>

        <button
          onClick={toggleTheme}
          className="glass w-10 h-10 rounded-xl flex items-center justify-center"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* CLOCK */}
      <div className="px-4 mb-3">
        <ClockWidget />
      </div>

      {/* STATS */}
      <div className="px-4 mb-4">
        <StatsWidget stats={content.stats} />
      </div>

      {/* APPS GRID */}
      <div className="px-4 grid grid-cols-4 gap-4 mb-6">
        {apps.map((app) => {
          const Icon = app.icon;

          return (
            <motion.button
              key={app.id}
              onClick={() => openApp(app.id)} // 🔥 FIXED
              whileTap={{ scale: 0.85 }}
              className="glass rounded-2xl p-3 flex flex-col items-center"
            >
              <Icon size={20} className="text-muted" />
              <span className="text-[11px] mt-1">{app.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* MUSIC */}
      <div className="flex justify-center">
        <MusicWidget
          audioRef={audioRef}
          playing={playing}
          setPlaying={setPlaying}
        />
      </div>

      {/* FOOTER */}
      <div className="px-4 pb-6 mt-auto">

        <div className="h-32" />

        {/* 🔥 BOTTOM NAV FIXED */}
        <div className="glass rounded-2xl flex justify-around py-2">
          {[
            { id: 'about', icon: User },
            { id: 'projects', icon: Folder },
            { id: 'gallery', icon: Image },
            { id: 'contact', icon: Mail },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => openApp(item.id)} // 🔥 FIXED
                className="w-10 h-10 flex items-center justify-center rounded-xl text-muted hover:bg-white/10"
              >
                <Icon size={20} />
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default MobileLayout;
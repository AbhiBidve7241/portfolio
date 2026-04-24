import React from 'react';
import { motion } from 'framer-motion';
import ShapeGrid from './ShapeGrid';
import InteractiveBackground from './UI/InteractiveBackground';

const EntryScreen = ({ onEnter, content }) => {
  const isDark =
  typeof window !== "undefined" &&
   localStorage.getItem('theme') === 'dark';

  return (
    <div className="h-screen w-full relative overflow-hidden text-text">

      {/* BACKGROUND */}
      {isDark ? (
        <div className="absolute inset-0 opacity-40">
          <ShapeGrid
            speed={0.3}
            squareSize={60}
            direction="diagonal"
            borderColor="rgba(255,255,255,0.08)"
            hoverFillColor="rgba(99,102,241,0.25)"
          />
        </div>
      ) : (
        <InteractiveBackground theme="light" />
      )}

      {/* MAIN */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* AVATAR */}
        <motion.img
          src="Avatar2.png"
          alt="avatar"
          className="w-28 h-28 rounded-full mb-6 object-cover shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        />

        {/* NAME */}
        <h1 className="
          text-4xl md:text-5xl font-bold
          bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400
          text-transparent bg-clip-text
        ">
          {content.personal.name}
        </h1>

        {/* TITLE */}
        <p className="mt-3 text-muted text-sm md:text-base">
          {content.personal.title}
        </p>

        {/* 🔥 ENTER BUTTON */}
        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="
            mt-8 px-10 py-3 rounded-full
            font-semibold text-white
            bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500
            shadow-xl hover:shadow-2xl transition
          "
        >
          Enter Portfolio
        </motion.button>

        {/* 🔥 SOCIAL ICONS (PNG) */}
        <div className="mt-8 flex items-center gap-6">

          <a href={content.personal.github} target="_blank" rel="noreferrer">
            <img
              src="/gitHub.png"
              alt="github"
              className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-110 transition"
            />
          </a>

          <a href={content.personal.linkedin} target="_blank" rel="noreferrer">
            <img
              src="/linkedIn.png"
              alt="linkedin"
              className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-110 transition"
            />
          </a>

          {/* <a href={content.personal.resume} target="_blank" rel="noreferrer">
            <img
              src="/resume.png"
              alt="resume"
              className="w-6 h-6 opacity-80 hover:opacity-100 hover:scale-110 transition"
            />
          </a> */}

        </div>

      </div>
    </div>
  );
};

export default EntryScreen;
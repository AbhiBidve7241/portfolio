import React from 'react';
import { motion } from 'framer-motion';
import ShapeGrid from './ShapeGrid';
import ShinyText from './ShinyText';
import InteractiveBackground from './UI/InteractiveBackground';

const EntryScreen = ({ onEnter, content }) => {
  return (
    <div className="h-screen relative bg-background text-text overflow-hidden">

if (localstorage.theme===dark) {
  <div className="absolute inset-0 opacity-30">
        <ShapeGrid 
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(99,102,241,0.2)"
        />
      </div>
}else{
<div className="absolute inset-0 z-0">
        <InteractiveBackground theme={localStorage.theme} />
      </div>
}
      {/* Background */}
      

      

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="glass rounded-3xl border border-border shadow-lg p-10 max-w-xl w-full text-center"
        >
          <motion.img
            src="src\assets\avatar.jpeg"
            alt="avatar"
            className="w-28 h-28 rounded-full mx-auto mb-6 border border-border"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />

          <div className="text-4xl font-semibold tracking-tight mb-2">
            <ShinyText text={content.personal.name} speed={3} color="var(--color-text)" />
          </div>

          <p className="text-muted mb-8">{content.personal.title}</p>

          <motion.button
            onClick={onEnter}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glass rounded-2xl px-8 py-3 shadow-lg border border-border text-sm font-semibold transition"
          >
            Enter Portfolio
          </motion.button>

          <div className="mt-6 flex flex-col sm:flex-col items-center gap-3">
            <a
              href={content.personal.resume}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl px-4 py-2 text-sm shadow-lg transition hover:shadow-xl"
            >
              Resume
            </a>
            <a
              href={content.personal.github}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl px-4 py-2 text-sm shadow-lg transition hover:shadow-xl"
            >
              GitHub
            </a>
            <a
              href={content.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl px-4 py-2 text-sm shadow-lg transition hover:shadow-xl"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EntryScreen;
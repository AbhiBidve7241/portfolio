import React from "react";
import GradientBackground from "./UI/GradientBackground";
import ParticlesBackground from "./UI/ParticlesBackground";


const ThemeBackground = ({ theme }) => {
  return (
    <>
      {/* 🌌 DARK MODE */}
      {theme === "dark" ? (
        <>
          <div className="absolute inset-0 z-0">
            <GradientBackground backdropBlurAmount="sm" />
          </div>

          <div className="absolute inset-0 z-0 opacity-50">
            <ParticlesBackground />
          </div>
        </>
      ) : (
        <>
          {/* ☀️ LIGHT MODE WALLPAPER */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,#ffffff,#e2e8f0)]" />

          <div className="absolute inset-0 z-0 opacity-40">
            <ParticlesBackground />
          </div>
        </>
      )}
    </>
  );
};

export default ThemeBackground;
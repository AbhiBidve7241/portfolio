import React from "react";

const NavbarOrb = () => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">

      {/* Glow */}
      <div className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 blur-md opacity-70 animate-pulse" />

      {/* Core */}
      <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-400 to-cyan-300 animate-float shadow-[0_0_12px_rgba(99,102,241,0.8)]" />

    </div>
  );
};

export default NavbarOrb;
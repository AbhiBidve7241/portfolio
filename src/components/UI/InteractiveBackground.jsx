import { useEffect, useState } from "react";

export default function InteractiveBackground({ theme }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (theme === "light") {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-200" />

        {/* Floating blobs */}
        <div className="absolute w-[400px] h-[400px] bg-purple-300 rounded-full blur-[120px] opacity-40 animate-pulse top-[-60px] left-[-80px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-300 rounded-full blur-[160px] opacity-40 animate-pulse bottom-[-90px] right-[-60px]" />

        {/* Mouse glow */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full blur-[120px] opacity-30 bg-pink-300 pointer-events-none"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: "translate(-30%, -30%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#020617]">

      {/* Floating blobs */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-400 rounded-full blur-[140px] opacity-20 animate-pulse top-[-200px] left-[-200px]" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-400 rounded-full blur-[120px] opacity-20 animate-pulse bottom-[-200px] right-[-200px]" />
      <div className="absolute w-[260px] h-[260px] bg-purple-400 rounded-full blur-[120px] opacity-20 animate-pulse top-[30%] left-[60%]" />

      {/* Mouse glow */}
      <div
        className="absolute w-[150px] h-[250px] rounded-full blur-[120px] opacity-25 bg-blue-500 pointer-events-none"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Smooth blur overlay */}
      <div className="absolute inset-0 backdrop-blur-2xl" />
    </div>
  );
}
import React from 'react';
import { Play, Pause, Music, Shuffle } from 'lucide-react';

const tracks = [
  "/1.mp3",
  "/2.mp3",
  "/3.mp3",
  "/4.mp3",
  "/5.mp3",
];

const MusicWidget = ({ audioRef, playing, setPlaying }) => {

  // ✅ Detect mobile
  const isMobile = window.innerWidth <= 768;
  const bars = isMobile ? 40 : 25;

  const playRandom = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const track = tracks[Math.floor(Math.random() * tracks.length)];

    try {
      audio.src = track;
      audio.load();
      audio.volume = 0.3;
      await audio.play();
      setPlaying(true);
    } catch (err) {
      console.error("Play failed:", err);
    }
  };

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        if (!audio.src) {
          await playRandom();
        } else {
          await audio.play();
          setPlaying(true);
        }
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch (err) {
      console.error("Toggle failed:", err);
    }
  };

  const shuffle = async () => {
    await playRandom();
  };

  return (
    <div className="
      flex items-center gap-3
      px-3 py-2
      rounded-xl
      border border-white/10
      bg-white/5
      backdrop-blur-lg
      w-full max-w-sm
    ">

      {/* ICON */}
      <Music size={16} className="text-accent shrink-0" />

      {/* TEXT */}
      <span className="text-xs text-muted whitespace-nowrap">
        Chill Mode
      </span>

      {/* 🌊 GRADIENT WAVES */}
      <div className="flex items-end gap-[2px] h-5 flex-1 overflow-hidden">
        {[...Array(bars)].map((_, i) => (
          <span
            key={i}
            className={`w-[2px] rounded-full ${
              playing ? "animate-wave h-4" : "h-1 opacity-40"
            }`}
            style={{
              animationDelay: `${i * 0.05}s`,
              background: "linear-gradient(180deg, #6366f1, #06b6d4, #22c55e)"
            }}
          />
        ))}
      </div>

      {/* 🔀 SHUFFLE */}
      <button
        onClick={shuffle}
        className="p-1 hover:bg-white/10 rounded transition"
      >
        <Shuffle size={14} />
      </button>

      {/* ▶ PLAY */}
      <button
        onClick={toggle}
        className="p-1 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {playing ? <Pause size={14} /> : <Play size={14} />}
      </button>

    </div>
  );
};

export default MusicWidget;
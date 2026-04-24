// ClockWidget.jsx
import React, { useEffect, useState } from 'react';

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-2xl p-4 shadow-lg flex items-center justify-between">
      
      <div>
        <h1 className="text-3xl font-semibold">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </h1>

        <p className="text-sm text-muted mt-1">
          {time.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'short' })}
        </p>
      </div>

      <img 
        src="/Avatar2.png" 
        alt="avatar2"
        className="w-12 h-12 rounded-full object-cover border border-border"
      />

    </div>
  );
};

export default ClockWidget;


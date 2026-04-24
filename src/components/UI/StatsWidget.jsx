// StatsWidget.jsx
export const StatsWidget = ({ stats }) => {
  return (
    <div className="glass rounded-2xl p-4 shadow-lg grid grid-cols-3 text-center">
      
      <div>
        <p className="text-lg font-semibold">{stats.projects}</p>
        <p className="text-xs text-muted">Projects</p>
      </div>

      <div>
        <p className="text-lg font-semibold">{stats.experience}</p>
        <p className="text-xs text-muted">Exp</p>
      </div>

      <div>
        <p className="text-lg font-semibold">{stats.techStack}</p>
        <p className="text-xs text-muted">Tech</p>
      </div>

    </div>
  );
};


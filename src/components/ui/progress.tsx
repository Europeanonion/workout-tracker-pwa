export default function Progress({ value, className }) {
    return (
      <div className={`progress ${className}`}>
        <div className="progress-bar" style={{ width: `${value}%` }}></div>
      </div>
    );
  }
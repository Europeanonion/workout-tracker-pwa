export default function Progress({ value, className }: { value: number, className?: string }) {
    return (
      <div className={`progress ${className}`}>
        <div className="progress-bar" style={{ width: `${value}%` }}></div>
      </div>
    );
  }
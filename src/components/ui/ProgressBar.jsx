export default function ProgressBar({ value, label}) {
    const pct = Math.max(0, Math.min(100, value))
    return (
        <div 
        className="progress"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        >
            <div className="progress__fill" style={{ width: `${pct}%`}} />
        </div>
    )
}
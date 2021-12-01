import "./timer.css";

export default function Timer(props: { min: number; sec: number }) {
  return (
    <div className="timer">
      <span className="timer__minutes timer__value">
        {timeToString(props.min)}
      </span>

      <span className="timer__separator">:</span>

      <span className="timer__secunds timer__value">
        {timeToString(props.sec)}
      </span>
    </div>
  );
}

function timeToString(time: number) {
  return String(time).padStart(2, "0");
}

import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer); // Initialize remainingTime with timer

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => {
        const newTime = prevTime - 10; // Subtract 10 from previous time
        return newTime >= 0 ? newTime : 0; // Ensure remainingTime is never negative
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []); // Run effect only once after component mount

  return <progress value={remainingTime.toString()} max={timer.toString()} />;
}

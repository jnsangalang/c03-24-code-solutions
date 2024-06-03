import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import './Stopwatch.css';

export function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId: null | NodeJS.Timeout = null;

    if (isActive && isPaused === false) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(intervalId ?? 0);
    }
    return () => {
      clearInterval(intervalId ?? 0);
    };
  }, [isActive, isPaused, time]);
  let playClassName = '';
  let pauseClassName = '';

  if (isActive === true && isPaused === false) {
    playClassName = 'hidden';
  }
  if (isActive === false && isPaused === true) {
    pauseClassName = 'hidden';
  }

  return (
    <div className="stopwatch">
      <p className="watch-face" onClick={() => setTime(0)}>
        {time}
      </p>
      <FaPlay
        className={playClassName}
        onClick={() => {
          setIsActive(true);
          setIsPaused(false);
        }}
      />
      <FaPause
        className={pauseClassName}
        onClick={() => {
          setIsActive(false);
          setIsPaused(true);
        }}
      />
    </div>
  );
}

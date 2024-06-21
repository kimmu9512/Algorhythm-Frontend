import React, { useState, useEffect } from "react";
import "../../styles/components/question/Timer.css";
const Timer = ({ onStart, onFinish }) => {
  const [timerOn, setTimerOn] = useState(false);
  const [timerLabel, setTimerLabel] = useState("Start");
  const [currentInterval, setCurrentInterval] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const handleStart = () => {
    if (!timerOn) {
      alert("Timer started");
      const start = new Date();
      setStartTime(start);
      setTimerOn(true);

      const intervalId = setInterval(() => {
        const now = new Date();
        const elapsed = new Date(now - start);
        const hours = elapsed.getUTCHours();
        const minutes = elapsed.getUTCMinutes();
        const seconds = elapsed.getUTCSeconds();
        setTimerLabel(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }, 1000);

      setCurrentInterval(intervalId);
      onStart(start);
    } else {
      clearInterval(currentInterval);
      setTimerOn(false);
      setTimerLabel("Start");
    }
  };

  const handleFinish = () => {
    if (timerOn) {
      const finishTime = new Date();
      clearInterval(currentInterval);
      setTimerOn(false);
      setTimerLabel("Start");
      onFinish(startTime, finishTime);
    }
  };

  return (
    <div className="question-controls">
      <button onClick={handleStart}>{timerLabel}</button>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
};

export default Timer;

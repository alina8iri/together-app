import React, { useState, useEffect } from 'react';
const TakeTurns = () => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [active, setActive] = useState(true);
  const [turn, setTurn] = useState(1);

  useEffect(() => {
    if (!active || timeLeft <= 0) return;
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 1) {
      setTimeout(() => {
        setTurn((prev) => (prev === 1 ? 2 : 1));
        setTimeLeft(120);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [timeLeft, active]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Take Turns – Partner {turn}'s Turn</h2>
      <p>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
      <button onClick={() => setActive(!active)}>
        {active ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
};
export default TakeTurns;
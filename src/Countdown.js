import React, { useState, useEffect } from "react";
import "./App.css"; // Upewnij się, że plik CSS jest w katalogu 'src'

const CountdownTimer = () => {
  const targetDate = new Date("2025-06-10T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <h1 className="countdown-title">⏳ Odliczanie do egzaminu zawodowego INF.03 </h1><h3>(częśc praktyczna)</h3>
      <div className="countdown-grid">
        <div className="countdown-item">
          <p className="countdown-number">{timeLeft.days}</p>
          <p className="countdown-label">Dni</p>
        </div>
        <div className="countdown-item">
          <p className="countdown-number">{timeLeft.hours}</p>
          <p className="countdown-label">Godzin</p>
        </div>
        <div className="countdown-item">
          <p className="countdown-number">{timeLeft.minutes}</p>
          <p className="countdown-label">Minut</p>
        </div>
        <div className="countdown-item">
          <p className="countdown-number">{timeLeft.seconds}</p>
          <p className="countdown-label">Sekund</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

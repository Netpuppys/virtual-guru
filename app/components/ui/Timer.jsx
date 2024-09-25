'use client'

import { useState, useEffect } from 'react';

const date = "2024-09-27T12:00:00"

const Timer = () => {
  const targetDateKey = 'targetDate';
  const [timeLeft, setTimeLeft] = useState({});
  
  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      const savedDate = localStorage.getItem(targetDateKey);
      const initialTargetDate = savedDate || new Date(date).toISOString();
      localStorage.setItem(targetDateKey, initialTargetDate);

      const calculateTimeLeft = () => {
        const targetDate = new Date(initialTargetDate).getTime();
        const currentTime = new Date().getTime();
        const difference = targetDate - currentTime;

        if (difference > 0) {
          return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      };

      setTimeLeft(calculateTimeLeft());

      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 py-2 px-4 w-[28rem] mt-[1.3rem] h-[4.6rem] bg-[#d9d9d9] rounded-full">
      <span className="text-4xl font-bold text-gray-700">{timeLeft.days?.toString().padStart(2, '0')}</span>
      <span className="text-4xl font-bold text-theme-orange">:</span>
      <span className="text-4xl font-bold text-gray-700">{timeLeft.hours?.toString().padStart(2, '0')}</span>
      <span className="text-4xl font-bold text-theme-orange">:</span>
      <span className="text-4xl font-bold text-gray-700">{timeLeft.minutes?.toString().padStart(2, '0')}</span>
      <span className="text-4xl font-bold text-theme-orange">:</span>
      <span className="text-4xl font-bold text-gray-700">{timeLeft.seconds?.toString().padStart(2, '0')}</span>
    </div>
  );
};

export default Timer;
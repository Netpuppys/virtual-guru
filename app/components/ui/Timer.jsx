'use client'

import { useState, useEffect } from 'react';

const date = "2024-09-24T12:00:00"

const Timer = () => {
  const targetDateKey = 'targetDate';
  
  // Initialize target date and store it in localStorage if not already present
  const initialTargetDate = localStorage.getItem(targetDateKey) || new Date(date).toISOString();
  localStorage.setItem(targetDateKey, initialTargetDate);

  const calculateTimeLeft = () => {
    const targetDate = new Date(initialTargetDate).getTime();
    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // If time is up, reset to 0
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
      <div className="flex items-center justify-center space-x-2 py-2 px-4 w-[28rem] mt-[1.3rem] h-[4.6rem] bg-[#d9d9d9] rounded-full">
        <span className="text-4xl font-bold text-gray-700">{timeLeft.days.toString().padStart(2, '0')}</span>
        <span className="text-4xl font-bold text-gray-700">:</span>
        <span className="text-4xl font-bold text-gray-700">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="text-4xl font-bold text-gray-700">:</span>
        <span className="text-4xl font-bold text-gray-700">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="text-4xl font-bold text-gray-700">:</span>
        <span className="text-4xl font-bold text-gray-700">{timeLeft.seconds.toString().padStart(2, '0')}</span>
      </div>
  );
};

export default Timer;

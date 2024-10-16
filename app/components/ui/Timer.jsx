"use client";

import { useState, useEffect } from "react";

// const targetDate = "2024-10-27T12:00:00";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTargetDate = () => {
      const currentDate = new Date();
      const targetDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        23,
        59,
        59
      );
      return targetDate.getTime();
    };

    const calculateTimeLeft = () => {
      const targetDateTime = calculateTargetDate();
      const currentTime = new Date().getTime();
      const difference = targetDateTime - currentTime;

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
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 py-2 px-4 w-[17rem] lg:w-[28rem] mt-[1.3rem] h-[3rem] lg:h-[4.6rem] bg-[#d9d9d9] rounded-full">
      <span className="text-[2rem] lg:text-4xl font-bold text-gray-700">
        {timeLeft.days?.toString().padStart(2, "0")}
      </span>
      <span className="text-[2rem] lg:text-4xl font-bold text-theme-orange">
        :
      </span>
      <span className="text-[2rem] lg:text-4xl font-bold text-gray-700">
        {timeLeft.hours?.toString().padStart(2, "0")}
      </span>
      <span className="text-[2rem] lg:text-4xl font-bold text-theme-orange">
        :
      </span>
      <span className="text-[2rem] lg:text-4xl font-bold text-gray-700">
        {timeLeft.minutes?.toString().padStart(2, "0")}
      </span>
      <span className="text-[2rem] lg:text-4xl font-bold text-theme-orange">
        :
      </span>
      <span className="text-[2rem] lg:text-4xl font-bold text-gray-700">
        {timeLeft.seconds?.toString().padStart(2, "0")}
      </span>
    </div>
  );
};

export default Timer;

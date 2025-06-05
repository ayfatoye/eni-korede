import { useEffect, useState } from "react";

function Countdown() {
  const calculateTimeLeft = () => {
    const target = new Date("2025-12-20T10:00:00-06:00");
    const now = new Date();
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isZero =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="text-[#717769] text-lg md:text-2xl font-light md:font-medium py-6 md:py-12 flex justify-center space-x-6">
      {isZero ? (
        <span>Happening now!</span>
      ) : (
        <>
          <span>{timeLeft.days} days</span>
          <span>{timeLeft.hours} hours</span>
          <span>{timeLeft.minutes} minutes</span>
          <span>{timeLeft.seconds} seconds</span>
        </>
      )}
    </div>
  );
}

export default Countdown;

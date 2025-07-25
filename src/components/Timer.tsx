import { useEffect, useState } from "react";

type TimeLeft = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(targetDate: Date): TimeLeft {
  const now = new Date();
  const total = targetDate.getTime() - now.getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function Timer({
  endDate,
  primary,
}: {
  endDate: Date;
  primary?: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeRemaining(endDate));

  useEffect(() => {
    if (timeLeft.total <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(endDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft.total]);

  if (timeLeft.total <= 0) {
    return <></>;
  }

  return (
    <div className="flex items-center gap-4 timer">
      <div className={primary ? "timer-bg" : ""}>
        {!primary && <p>Days</p>}
        <p className={`${primary ? "font-semibold text-lg" : "time"}`}>
          {timeLeft.days}
        </p>
        {primary && <p className="text-sm">Days</p>}
      </div>
      {!primary && <p className="colan">:</p>}
      <div className={primary ? "timer-bg" : ""}>
        {!primary && <p>Hours</p>}
        <p className={`${primary ? "font-semibold text-lg" : "time"}`}>
          {timeLeft.hours}
        </p>
        {primary && <p className="text-sm">Hours</p>}
      </div>
      {!primary && <p className="colan">:</p>}
      <div className={primary ? "timer-bg" : ""}>
        {!primary && <p>Minutes</p>}
        <p className={`${primary ? "font-semibold text-lg" : "time"}`}>
          {timeLeft.minutes}
        </p>
        {primary && <p className="text-sm">Minutes</p>}
      </div>
      {!primary && <p className="colan">:</p>}
      <div className={primary ? "timer-bg" : ""}>
        {!primary && <p>Seconds</p>}
        <p className={`${primary ? "font-semibold text-lg" : "time"}`}>
          {timeLeft.seconds}
        </p>
        {primary && <p className="text-sm">Seconds</p>}
      </div>
    </div>
  );
}

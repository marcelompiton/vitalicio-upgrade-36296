import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = ({ endDate }: { endDate: Date }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = endDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-card to-card/80 border border-border rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] shadow-lg">
        <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-glow))] bg-clip-text text-transparent">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-3 md:gap-4 justify-center">
      <TimeBox value={timeLeft.days} label="Dias" />
      <TimeBox value={timeLeft.hours} label="Horas" />
      <TimeBox value={timeLeft.minutes} label="Minutos" />
      <TimeBox value={timeLeft.seconds} label="Segundos" />
    </div>
  );
};

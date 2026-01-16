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
    <div className="flex flex-col items-center group">
      <div className="relative">
        {/* Glow effect behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        
        <div className="relative bg-gradient-to-br from-card via-card/90 to-card/70 border-2 border-accent/40 rounded-xl p-3 md:p-5 min-w-[70px] md:min-w-[90px] shadow-xl backdrop-blur-sm">
          <span className="text-2xl md:text-4xl font-black bg-gradient-to-br from-[hsl(var(--accent))] via-[hsl(var(--primary))] to-[hsl(var(--accent-glow))] bg-clip-text text-transparent drop-shadow-lg">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="text-[10px] md:text-xs text-muted-foreground mt-2 uppercase tracking-widest font-semibold">{label}</span>
    </div>
  );

  return (
    <div className="relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-primary/20 blur-3xl" />
      
      <div className="relative flex gap-2 md:gap-3 justify-center">
        <TimeBox value={timeLeft.days} label="Dias" />
        <div className="flex items-center text-2xl md:text-3xl font-bold text-accent animate-pulse self-start mt-4 md:mt-6">:</div>
        <TimeBox value={timeLeft.hours} label="Horas" />
        <div className="flex items-center text-2xl md:text-3xl font-bold text-accent animate-pulse self-start mt-4 md:mt-6">:</div>
        <TimeBox value={timeLeft.minutes} label="Minutos" />
        <div className="flex items-center text-2xl md:text-3xl font-bold text-accent animate-pulse self-start mt-4 md:mt-6">:</div>
        <TimeBox value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

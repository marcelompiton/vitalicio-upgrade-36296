import { Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toZonedTime } from 'date-fns-tz';

export const SpotsRemaining = () => {
  const totalSpots = 20;
  const initialSpots = 16; // Começa com 16 vagas disponíveis
  
  const calculateSpotsRemaining = () => {
    // Horário de início: 08:30 de Brasília (hoje)
    const timezone = 'America/Sao_Paulo';
    const now = toZonedTime(new Date(), timezone);
    
    // Define 08:30 de hoje em Brasília
    const startTime = new Date(now);
    startTime.setHours(8, 30, 0, 0);
    
    // Calcula minutos decorridos desde 08:30
    const minutesElapsed = Math.floor((now.getTime() - startTime.getTime()) / (1000 * 60));
    
    // Se ainda não passou das 08:30, retorna vagas iniciais
    if (minutesElapsed < 0) {
      return initialSpots;
    }
    
    // Reduz 1 vaga a cada 45 minutos
    const spotsReduced = Math.floor(minutesElapsed / 45);
    
    // Retorna vagas restantes, mínimo 1 (sempre deixa pelo menos 1 vaga)
    return Math.max(initialSpots - spotsReduced, 1);
  };
  
  const [spotsRemaining, setSpotsRemaining] = useState(calculateSpotsRemaining());
  const spotsTaken = totalSpots - spotsRemaining;
  const percentageFilled = Math.min(Math.max((spotsTaken / totalSpots) * 100, 0), 100);
  
  useEffect(() => {
    // Atualiza a cada 30 segundos para maior precisão
    const interval = setInterval(() => {
      setSpotsRemaining(calculateSpotsRemaining());
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/50 border border-accent/30 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-accent/10 p-3 rounded-lg">
          <Users className="w-6 h-6 text-accent" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Vagas Disponíveis</p>
          <p className="text-2xl font-bold text-accent">
            {spotsRemaining} de {totalSpots}
          </p>
        </div>
      </div>
      
      <div className="relative w-full bg-muted rounded-full h-3 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-accent to-accent-glow rounded-full transition-all duration-1000 animate-pulse-slow"
          style={{ width: `${percentageFilled}%` }}
        />
      </div>
      
      <p className="text-xs text-muted-foreground mt-3 text-center">
        ⚠️ Apenas {spotsRemaining} vagas restantes!
      </p>
    </div>
  );
};

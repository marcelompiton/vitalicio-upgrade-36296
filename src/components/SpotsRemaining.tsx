import { Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export const SpotsRemaining = () => {
  const totalSpots = 20;
  const initialSpots = 3; // Começa com 3 vagas disponíveis
  
  const calculateSpotsRemaining = () => {
    // Horário de início: 31 de outubro de 2025 às 18:52 (horário de Brasília)
    // A cada 45 minutos diminui 1 vaga, começando com 3 vagas
    const startTime = new Date('2025-10-31T18:52:00-03:00');
    const now = new Date();
    
    // Se ainda não começou, retorna todas as vagas iniciais
    if (now < startTime) {
      return initialSpots;
    }
    
    // Calcula minutos decorridos desde o início
    const minutesElapsed = Math.floor((now.getTime() - startTime.getTime()) / (1000 * 60));
    
    // Reduz 1 vaga a cada 45 minutos
    const spotsReduced = Math.floor(minutesElapsed / 45);
    
    // Retorna vagas restantes, mínimo 0
    return Math.max(initialSpots - spotsReduced, 0);
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

import { TrendingDown } from "lucide-react";

interface SavingsPeriod {
  period: string;
  withoutUpgrade: number;
  withUpgrade: number;
  savings: number;
}

export const SavingsCalculator = () => {
  const periods: SavingsPeriod[] = [
    { period: "1 ano", withoutUpgrade: 0, withUpgrade: 650, savings: 0 },
    { period: "2 anos", withoutUpgrade: 1200, withUpgrade: 650, savings: 550 },
    { period: "3 anos", withoutUpgrade: 2400, withUpgrade: 650, savings: 1750 },
    { period: "5 anos", withoutUpgrade: 4800, withUpgrade: 650, savings: 4150 },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {periods.map((period, index) => {
        const maxSavings = 4150;
        const savingsPercentage = (period.savings / maxSavings) * 100;
        
        return (
          <div
            key={index}
            className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-foreground">{period.period}</h4>
                {period.savings > 0 && (
                  <TrendingDown className="w-5 h-5 text-primary" />
                )}
              </div>
              
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Sem upgrade</p>
                  <p className="text-lg font-semibold text-muted-foreground line-through">
                    R$ {period.withoutUpgrade.toLocaleString('pt-BR')}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Com vitalício</p>
                  <p className="text-2xl font-bold text-primary">
                    R$ 650
                  </p>
                </div>
              </div>
              
              {period.savings > 0 && (
                <>
                  <div className="w-full bg-muted rounded-full h-2 mb-3 overflow-hidden">
                    <div 
                      className="h-full bg-[var(--gradient-primary)] rounded-full transition-all duration-500"
                      style={{ width: `${savingsPercentage}%` }}
                    />
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-center">
                    <p className="text-sm font-bold text-primary">
                      Economia: R$ {period.savings.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </>
              )}
              
              {period.savings === 0 && (
                <p className="text-xs text-muted-foreground text-center italic">
                  Investimento inicial
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export const BenefitCard = ({ icon: Icon, title, description, image }: BenefitCardProps) => {
  return (
    <div className="relative bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 hover:border-primary transition-all duration-500 hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] hover:scale-105 group overflow-hidden">
      {/* Efeito de brilho no fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {image ? (
          <div className="mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 p-4">
            <img 
              src={image} 
              alt={title} 
              className="w-full max-w-[180px] h-auto mx-auto group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary to-primary-glow flex items-center justify-center mb-4 mx-auto shadow-[0_0_30px_hsl(var(--primary)/0.4)] group-hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <Icon className="w-8 h-8 text-primary-foreground" strokeWidth={2.5} />
          </div>
        )}
        <h3 className="text-xl font-bold mb-3 text-center group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-center group-hover:text-foreground/80 transition-colors duration-300">{description}</p>
      </div>
      
      {/* Borda animada */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
    </div>
  );
};

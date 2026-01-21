import { CheckCircle2, Target, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/button";

interface JourneyTimelineProps {
  onCtaClick: () => void;
}

export const JourneyTimeline = ({ onCtaClick }: JourneyTimelineProps) => {
  const journeySteps = [
    {
      completed: true,
      text: "Conheceu o curso",
    },
    {
      completed: true,
      text: "Aprendeu a utilizar a IA, com qualidade, na rotina jurídica",
    },
    {
      completed: true,
      text: "Teve acesso a Prompts que transformaram sua forma de trabalhar",
    },
    {
      completed: true,
      text: "Fez parte de uma comunidade de profissionais que lideram a mudança",
    },
  ];

  const benefits = [
    "Nunca mais se preocupa com renovações ou perda de acesso",
    "Recebe automaticamente todos os novos prompts e atualizações",
    "Continua liderando enquanto outros ficam para trás",
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(var(--accent)/0.08),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sua Evolução</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Olha Só a{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
                Sua Jornada Até Aqui
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Você já conquistou muito. Falta apenas um passo.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent md:-translate-x-1/2" />
          
          {/* Completed Steps */}
          {journeySteps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className={`relative flex items-center gap-4 md:gap-8 mb-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} pl-4 md:pl-0`}>
                  <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <p className="text-foreground font-medium">{step.text}</p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            </ScrollReveal>
          ))}

          {/* Next Step - Highlighted */}
          <ScrollReveal delay={journeySteps.length * 150}>
            <div className="relative flex items-center gap-4 md:gap-8 mb-8">
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-xl shadow-accent/30 animate-pulse">
                  <Target className="w-7 h-7 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 md:mx-auto md:max-w-md pl-4 md:pl-0 md:pt-20">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border-2 border-accent/40 rounded-xl p-5 text-center shadow-xl shadow-accent/10">
                  <p className="text-xl font-bold text-accent mb-1">🎯 Próximo Passo</p>
                  <p className="text-lg text-foreground font-semibold">Garanta o Seu Acesso Vitalício</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Benefits Section */}
        <ScrollReveal delay={600}>
          <div className="mt-12 bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
              Com isso, você:
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-background/50 rounded-xl p-4 border border-accent/10 hover:border-accent/30 transition-all duration-300"
                >
                  <span className="text-2xl flex-shrink-0">🫵</span>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button 
                variant="accent" 
                size="xl" 
                onClick={onCtaClick}
                className="animate-pulse-slow"
              >
                Completar Minha Jornada
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

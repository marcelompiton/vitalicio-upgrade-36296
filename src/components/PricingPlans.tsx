import { Check, Star, Clock } from "lucide-react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  priceLabel: string;
  features: PlanFeature[];
  hotmartUrl: string;
  highlighted?: boolean;
  badge?: string;
  icon: React.ReactNode;
}

const PricingPlan = ({
  title,
  subtitle,
  price,
  originalPrice,
  priceLabel,
  features,
  hotmartUrl,
  highlighted = false,
  badge,
  icon,
}: PricingPlanProps) => {
  return (
    <div
      className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        highlighted
          ? "bg-gradient-to-br from-accent/20 via-primary/10 to-accent/10 border-2 border-accent shadow-[var(--shadow-glow)] scale-105"
          : "bg-card border border-border hover:border-primary/50"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
            {badge}
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          {icon}
          <h3 className={`text-xl md:text-2xl font-bold ${highlighted ? "text-accent" : "text-foreground"}`}>
            {title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>

      <div className="text-center mb-6">
        {originalPrice && (
          <div className="text-muted-foreground line-through text-lg mb-1">
            De R$ {originalPrice}
          </div>
        )}
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-lg text-muted-foreground">R$</span>
          <span className={`text-4xl md:text-5xl font-bold ${highlighted ? "text-accent" : "text-primary"}`}>
            {price}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{priceLabel}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                feature.included ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
              }`}
            >
              <Check className="w-3 h-3" />
            </div>
            <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground line-through"}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Hotmart Embedded Widget */}
      <div className="hotmart-widget-container rounded-xl overflow-hidden">
        <iframe
          src={`${hotmartUrl}&widget=true`}
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          className="w-full"
          title={`Checkout ${title}`}
        />
      </div>
    </div>
  );
};

export const PricingPlans = () => {
  const oneYearFeatures: PlanFeature[] = [
    { text: "Acesso por mais 1 ano", included: true },
    { text: "Todos os módulos do curso", included: true },
    { text: "Atualizações durante 1 ano", included: true },
    { text: "Comunidade de alunos (1 ano)", included: true },
    { text: "App mobile (1 ano)", included: true },
    { text: "Precisa renovar anualmente", included: true },
    { text: "Livro de IA incluído", included: false },
    { text: "Acesso vitalício", included: false },
  ];

  const lifetimeFeatures: PlanFeature[] = [
    { text: "Acesso VITALÍCIO para sempre", included: true },
    { text: "Todos os módulos do curso", included: true },
    { text: "TODAS as atualizações futuras", included: true },
    { text: "Comunidade VITALÍCIA", included: true },
    { text: "App mobile VITALÍCIO", included: true },
    { text: "Nunca mais pague renovação", included: true },
    { text: 'Livro "IA para o Direito" INCLUÍDO', included: true },
    { text: "Economia garantida a longo prazo", included: true },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Escolha Seu{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent">
              Plano
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Renove por 1 ano ou garanta o acesso vitalício</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-6 items-start">
          <PricingPlan
            title="Renovação Anual"
            subtitle="Mais 1 ano de acesso"
            price="350"
            priceLabel="por mais 1 ano"
            features={oneYearFeatures}
            hotmartUrl="https://pay.hotmart.com/M96848969A?checkoutMode=2&off=ziut525z"
            icon={<Clock className="w-6 h-6 text-primary" />}
          />

          <PricingPlan
            title="Acesso Vitalício"
            subtitle="Pague uma vez, acesse para sempre"
            price="750"
            originalPrice="987"
            priceLabel="pagamento único"
            features={lifetimeFeatures}
            hotmartUrl="https://pay.hotmart.com/S103204336V?checkoutMode=2&off=tb7xto77"
            highlighted
            badge="⭐ MELHOR OPÇÃO"
            icon={<Star className="w-6 h-6 text-accent" />}
          />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-3">
            <span className="text-xl">💡</span>
            <p className="text-sm md:text-base font-medium">
              <span className="text-accent font-bold">Invista R$ 400 a mais e tenha acesso PARA SEMPRE!</span>{" "}
              <span className="text-muted-foreground">O vitalício é o melhor investimento.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

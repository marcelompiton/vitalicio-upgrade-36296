import { Check, X } from "lucide-react";

interface ComparisonCardProps {
  title: string;
  price: string;
  features: { text: string; included: boolean }[];
  highlighted?: boolean;
}

export const ComparisonCard = ({ title, price, features, highlighted }: ComparisonCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        highlighted
          ? "bg-gradient-to-br from-card to-card/80 border-2 border-primary shadow-[var(--shadow-glow)] scale-105"
          : "bg-card/50 border border-border hover:border-primary/50"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-glow))] text-accent-foreground px-6 py-1 rounded-full text-sm font-bold">
          OFERTA ÚNICA - APENAS 20 VAGAS
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-sm text-muted-foreground">R$</span>
          <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {price}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? "text-foreground" : "text-muted-foreground line-through"}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

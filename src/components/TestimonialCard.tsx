import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image?: string;
  highlight?: string;
}

export const TestimonialCard = ({ name, role, content, image, highlight }: TestimonialCardProps) => {
  return (
    <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
      
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">{content}</p>
      
      {highlight && (
        <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
          <p className="text-sm text-primary font-semibold">✨ {highlight}</p>
        </div>
      )}
    </div>
  );
};
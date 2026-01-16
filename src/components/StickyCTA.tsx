import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface StickyCTAProps {
  onClick: () => void;
}

export const StickyCTA = ({ onClick }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [spotsLeft] = useState(35);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent pointer-events-none">
      <div className="max-w-lg mx-auto pointer-events-auto">
        <div className="bg-card/95 backdrop-blur-lg border border-accent/30 rounded-2xl p-4 shadow-2xl shadow-accent/20">
          {/* Progress bar for spots */}
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Vagas restantes</span>
              <span className="text-accent font-semibold">{spotsLeft} de 35</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000"
                style={{ width: `${(spotsLeft / 35) * 100}%` }}
              />
            </div>
          </div>

          <Button
            variant="accent"
            size="lg"
            onClick={onClick}
            className="w-full animate-pulse-slow group"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Garantir Acesso Vitalício - R$ 750
          </Button>
        </div>
      </div>
    </div>
  );
};

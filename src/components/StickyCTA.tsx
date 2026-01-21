import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, RefreshCw } from "lucide-react";

interface StickyCTAProps {
  onClick: () => void;
}

export const StickyCTA = ({ onClick }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

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
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <div className="bg-card/95 backdrop-blur-lg border border-accent/30 rounded-2xl p-4 shadow-2xl shadow-accent/20">
          <p className="text-center text-sm font-medium text-accent mb-3">🚀 Lidere a mudança — Garanta o Vitalício</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="accent"
              size="lg"
              onClick={onClick}
              className="flex-1 animate-pulse-slow group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Acesso Vitalício - R$ 750
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={onClick}
              className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary group"
            >
              <RefreshCw className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Renovação Anual - R$ 350
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

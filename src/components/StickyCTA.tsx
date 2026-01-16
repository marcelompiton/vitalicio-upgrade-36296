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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 pointer-events-none">
      <div className="max-w-2xl mx-auto pointer-events-auto">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent blur-2xl -z-10" />
        
        <div className="bg-card/98 backdrop-blur-xl border-2 border-accent/40 rounded-2xl p-3 md:p-4 shadow-[0_-10px_50px_hsl(var(--accent)/0.3)]">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            {/* Botão principal - Vitalício */}
            <Button
              variant="accent"
              size="lg"
              onClick={onClick}
              className="flex-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-black">Vitalício - R$ 750</span>
            </Button>
            
            {/* Botão secundário - Renovação */}
            <Button
              variant="outline"
              size="lg"
              onClick={onClick}
              className="flex-1 border-muted-foreground/30 hover:bg-muted/20 hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              <span>Renovação - R$ 350</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

export const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
    testimonial6,
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-4 h-4 border border-muted-foreground/30 rounded-full" />
        <div className="absolute top-20 left-[20%] w-3 h-3 border border-muted-foreground/20 rounded-full" />
        <div className="absolute top-32 left-[40%] w-5 h-5 border border-muted-foreground/20 rounded-full" />
        <div className="absolute top-16 right-[30%] w-4 h-4 border border-muted-foreground/30 rounded-full" />
        <div className="absolute top-40 right-[15%] w-3 h-3 border border-muted-foreground/20 rounded-full" />
        <div className="absolute bottom-20 left-[25%] w-4 h-4 border border-muted-foreground/20 rounded-full" />
        <div className="absolute bottom-32 right-[35%] w-5 h-5 border border-muted-foreground/30 rounded-full" />
        <div className="absolute bottom-16 right-[10%] w-3 h-3 border border-muted-foreground/20 rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-5 py-2.5 mb-6">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">O Que Dizem Nossos Alunos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
              Resultados Reais
            </span>{" "}
            de Alunos Reais
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que profissionais do direito estão dizendo sobre o curso e como a IA transformou suas rotinas
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground hover:border-accent rounded-full w-10 h-10 md:w-12 md:h-12 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground hover:border-accent rounded-full w-10 h-10 md:w-12 md:h-12 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          {/* Embla Carousel */}
          <div className="overflow-hidden mx-8 md:mx-12" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-[85%] sm:w-[45%] lg:w-[30%]"
                >
                  <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 bg-card">
                    <Zoom>
                      <img
                        src={testimonial}
                        alt={`Depoimento de aluno ${index + 1}`}
                        className="w-full h-auto cursor-zoom-in"
                      />
                    </Zoom>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          👆 Arraste ou use as setas para ver mais depoimentos
        </p>
      </div>
    </section>
  );
};

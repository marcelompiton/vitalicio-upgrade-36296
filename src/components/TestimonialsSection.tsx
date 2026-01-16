import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { MessageCircle } from "lucide-react";

import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

export const TestimonialsSection = () => {
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--accent)/0.05),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--primary)/0.05),transparent_40%)]" />
      
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Zoom>
                <img
                  src={testimonial}
                  alt={`Depoimento de aluno ${index + 1}`}
                  className="w-full h-auto cursor-zoom-in"
                />
              </Zoom>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
          👆 Toque nas imagens para ampliar
        </p>
      </div>
    </section>
  );
};

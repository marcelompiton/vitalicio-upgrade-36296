import { Button } from "@/components/ui/button";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Countdown } from "@/components/Countdown";
import { ComparisonCard } from "@/components/ComparisonCard";
import { BenefitCard } from "@/components/BenefitCard";
import { FAQSection } from "@/components/FAQItem";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { StickyCTA } from "@/components/StickyCTA";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

import { PricingPlans } from "@/components/PricingPlans";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Infinity, Clock, TrendingUp, Award, Zap, Shield, Star, Users, Sparkles, Bot } from "lucide-react";
import heroInstructor from "@/assets/hero-instructor.jpg";
import coursePlatform from "@/assets/course-platform.webp";
import courseClassroom from "@/assets/course-classroom.jpg";
import courseImmersion from "@/assets/course-immersion.png";
import appCommunity from "@/assets/app-community.png";
import offerExclusive from "@/assets/offer-exclusive.png";
import aiVanguard from "@/assets/ai-vanguard.png";
import aiBrain from "@/assets/ai-brain.png";
import bookIaDireito from "@/assets/book-ia-direito.png";
import assistentesRobos from "@/assets/assistentes-robos.webp";
import { toZonedTime } from "date-fns-tz";

const Index = () => {
  // Data de fim da promoção: 22 de fevereiro (domingo) às 23:59 no horário de Brasília
  const promoEndDate = new Date("2026-02-22T23:59:59-03:00");

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-plans");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: Infinity,
      title: "Acesso vitalício aos Robôs do Professor Marcelo",
      description:
        "Tenha acesso vitalício aos assistentes que fazem toda a diferença ao trabalhar com ferramentas de inteligência artificial.",
    },
    {
      icon: TrendingUp,
      title: "Aplicativo para celular e Comunidade Exclusiva para Sempre",
      description:
        "Acesso vitalício ao nosso aplicativo para celular exclusivo e à comunidade de alunos. Compartilhe experiências, tire dúvidas e crie conexões profissionais que duram para toda a vida.",
      image: appCommunity,
    },
    {
      icon: Zap,
      title: "Todas as Atualizações Futuras",
      description:
        "Receba automaticamente todo novo conteúdo, módulos, funcionalidades do app e melhorias sem pagar nada a mais, para sempre.",
    },
    {
      icon: Award,
      title: "Economia Garantida em 2 Anos",
      description:
        "Em apenas 2 anos, o acesso vitalício já se paga completamente! Depois disso, são anos de economia e acesso garantido sem preocupações.",
    },
    {
      icon: Shield,
      title: "Na Vanguarda da IA Jurídica",
      description: "Esteja sempre na vanguarda do uso da inteligência artificial na rotina jurídica.",
      image: aiVanguard,
    },
    {
      icon: Clock,
      title: "Aprenda no Seu Ritmo",
      description:
        "Sem pressão de tempo ou data de vencimento. Acesse o conteúdo quando quiser, quantas vezes quiser, para sempre.",
    },
    {
      icon: Users,
      title: "Evolução Profissional Contínua",
      description:
        "Faça parte de um seleto grupo de alunos que sempre vai estar em contato e evoluindo na sua vida profissional.",
    },
    {
      icon: Award,
      title: 'Livro "Inteligência Artificial para Profissionais do Direito"',
      description:
        "Receba acesso vitalício ao livro digital, sempre que lançado! Um guia completo sobre IA jurídica - totalmente incluído no seu acesso vitalício.",
      image: bookIaDireito,
    },
  ];

  const faqItems = [
    {
      question: "Como funciona o acesso vitalício?",
      answer:
        "Com o acesso vitalício, você terá acesso ilimitado a todos os módulos do curso, incluindo futuras atualizações e novos conteúdos, sem precisar pagar mensalidades ou renovações.",
    },
    {
      question: "Essa promoção é realmente válida até domingo?",
      answer:
        "Sim! Esta é uma oferta exclusiva válida apenas até domingo (22/02) às 23:59. Após esse horário, a promoção será encerrada definitivamente.",
    },
    {
      question: "O que acontece se eu não aproveitar essa oferta?",
      answer:
        "Esta é uma oportunidade única e irrepetível. Você perderá a chance de ter acesso vitalício por apenas R$ 750,00. Após domingo (22/02) às 23:59, essa oferta especial não estará mais disponível.",
    },
    {
      question: "Quem pode aproveitar essa oferta?",
      answer:
        "Esta oferta é exclusiva para alunos do curso! Se você já é aluno, esta é sua oportunidade de garantir acesso vitalício por um valor especial.",
    },
    {
      question: "O que são os Robôs/Assistentes de IA?",
      answer:
        "São mais de 70 prompts profissionais prontos para usar no ChatGPT, Claude, Gemini ou Grok. Eles automatizam tarefas como criação de petições, análise de documentos, memoriais, contestações e muito mais. Todos estão inclusos no acesso vitalício.",
    },
    {
      question: "Posso parcelar o pagamento?",
      answer:
        "Sim! Trabalhamos com as principais formas de pagamento e oferecemos opções de parcelamento. Confira as condições ao clicar no botão de garantir acesso vitalício.",
    },
    {
      question: "Existe alguma garantia?",
      answer:
        "Sim! Você tem 7 dias de garantia incondicional. Se não ficar satisfeito com o acesso vitalício, devolvemos 100% do seu investimento, sem perguntas.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky CTA */}
      <StickyCTA onClick={scrollToPricing} />


      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.1),transparent)]" />
        <div className="absolute inset-0 opacity-10">
          <img src={heroInstructor} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm animate-float-slow">
                <span className="text-accent font-semibold">🎯 Você já deu o primeiro passo. Agora complete a jornada.</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Lidere Para Sempre:
                <br />
                <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
                  Garanta o Seu Acesso Vitalício
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground font-medium mb-4">
                A questão é: você <span className="text-accent font-bold">lidera</span> ou <span className="text-muted-foreground">corre atrás</span>?
              </p>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                <span className="block mb-3">
                  <span className="text-destructive font-bold text-sm px-3 py-1.5 bg-destructive/10 rounded-full inline-block">
                    ⚠️ OPÇÃO INDISPONÍVEL - ELA APENAS ESTÁ À VENDA AGORA
                  </span>
                </span>
                Por apenas <span className="text-accent font-bold text-2xl">R$ 750,00</span>, garanta seu acesso{" "}
                <span className="text-foreground font-semibold">vitalício</span> ao curso completo de IA Jurídica, aos robôs e prompts sempre atualizados
              </p>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 rounded-xl p-4 mb-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📚</span>
                  <p className="font-bold text-accent">BÔNUS EXCLUSIVO</p>
                </div>
                <p className="text-base text-foreground">
                  + Acesso vitalício ao livro{" "}
                  <span className="font-semibold">"Inteligência Artificial para Profissionais do Direito"</span>. Receba
                  sempre a última versão atualizada!
                </p>
              </div>

              <div className="mb-8 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">A promoção encerra em:</p>
                  <Countdown endDate={promoEndDate} />
                </div>

                <div className="bg-card/50 border border-accent/30 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-accent" />
                    <p className="text-2xl font-bold text-accent">Oferta por tempo limitado</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Exclusivo para alunos do curso</p>
                </div>
              </div>

              <Button
                variant="accent"
                size="xl"
                onClick={scrollToPricing}
                className="mb-4 animate-pulse-slow w-full md:w-auto"
              >
                Ver Opções de Acesso
              </Button>

              <p className="text-sm text-muted-foreground mt-4">⚡ 35 profissionais já garantiram • +15 vagas liberadas • 🔒 Pagamento 100% seguro</p>
            </div>

            <div className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-glow)] border border-primary/20">
                <img
                  src={heroInstructor}
                  alt="Professor Marcelo Piton ensinando IA para prática jurídica"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <div id="pricing-plans">
        <PricingPlans />
      </div>

      {/* Journey Timeline Section */}
      <JourneyTimeline onCtaClick={scrollToPricing} />

      {/* Urgency Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 bg-gradient-to-br from-card to-card/50 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-block bg-accent/10 border border-accent rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <span className="text-accent font-semibold">⏰ Tempo Limitado</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ficar de Fora Significa <span className="highlight-underline text-accent">Ficar Para Trás</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Você já conhece o poder da IA na rotina jurídica. A diferença entre quem domina e quem apenas observa
              está se definindo <span className="text-foreground font-semibold">agora</span>. Oferta válida até domingo (22/02) às 23:59.
            </p>
            
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 mb-8 max-w-xl mx-auto">
              <p className="text-destructive font-medium">
                ⚠️ Em 2 anos, quem não dominar IA no direito estará competindo em desvantagem. 
                Você quer liderar ou correr atrás?
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="bg-card/50 border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={15} />
                </div>
                <div className="text-muted-foreground">Novas vagas liberadas</div>
                <p className="text-xs text-accent mt-2">🔥 35 profissionais já garantiram!</p>
                <div className="mt-3">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"
                      style={{ width: '30%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">Até Domingo</div>
                <div className="text-muted-foreground">Termina 22/02 às 23:59</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Button variant="hero" size="xl" onClick={scrollToPricing} className="animate-pulse-glow">
              Ver Opções de Acesso
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Immersion Section */}
      <section className="py-8 md:py-12 px-4 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.05),transparent)]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Uma Imersão Completa Criada
              <br />
              <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent">
                Especialmente Para Profissionais do Direito
              </span>
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20 mb-8 animate-scale-in">
            <img
              src={courseImmersion}
              alt="Plataforma completa de imersão em IA para profissionais do direito"
              className="w-full h-auto"
            />
          </div>

          {/* Animated highlight bar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
            <div className="relative bg-gradient-to-r from-card to-card/50 border-2 border-accent/30 rounded-xl p-6 md:p-8 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-12 bg-gradient-to-b from-accent to-primary rounded-full animate-pulse" />
                <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  Tudo o que você precisa para dominar{" "}
                  <span className="text-accent">desde os conceitos fundamentais</span>, até as{" "}
                  <span className="text-primary">aplicações práticas avançadas</span>.
                </p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Assistentes/Robôs Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.08),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-float">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  +<AnimatedCounter end={72} className="font-bold" /> Assistentes Prontos
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Robôs de IA Prontos Para
                <br />
                <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent highlight-underline">
                  Automatizar Seu Trabalho
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Prompts profissionais testados e otimizados para usar no ChatGPT, Claude, Gemini ou Grok. 
                Crie petições, analise documentos e agilize sua rotina jurídica.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale" delay={200}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/30 group-hover:border-accent/50 transition-all duration-300">
                <Zoom>
                  <img
                    src={assistentesRobos}
                    alt="Mais de 70 assistentes de IA para profissionais do direito"
                    className="w-full h-auto cursor-zoom-in"
                  />
                </Zoom>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 md:hidden">
                👆 Toque na imagem para ampliar
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                <span className="text-accent font-semibold animate-text-glow">Incluso no acesso vitalício:</span> Todos os assistentes + atualizações futuras
              </p>
              <Button
                variant="accent"
                size="lg"
                onClick={scrollToPricing}
                className="animate-pulse-glow"
              >
                Quero Acesso aos Robôs
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Renovar por 1 Ano ou Ter Acesso Vitalício?</h2>
            <p className="text-xl text-muted-foreground">Compare as opções e escolha a melhor para você!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ComparisonCard
              title="Renovação Anual"
              price="350"
              features={[
                { text: "Acesso por mais 1 ano", included: true },
                { text: "Precisa renovar anualmente", included: true },
                { text: "Atualizações durante 1 ano", included: true },
                { text: "Comunidade por 1 ano", included: true },
                { text: "Livro de IA incluído", included: false },
                { text: "Acesso vitalício", included: false },
              ]}
            />

            <ComparisonCard
              title="Vitalício por R$ 750"
              price="750"
              highlighted
              features={[
                { text: "Pagamento ÚNICO para sempre", included: true },
                { text: "TODAS as atualizações futuras", included: true },
                { text: "Nunca mais pague renovação", included: true },
                { text: "Acesso garantido para sempre", included: true },
                { text: "Comunidade vitalícia", included: true },
                { text: "Livro de IA incluído", included: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Benefits Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por Que Completar Sua Jornada Agora?</h2>
            <p className="text-xl text-muted-foreground">Você já deu o primeiro passo. Veja o que falta conquistar:</p>
          </div>

          {/* Course Platform Image */}
          <div className="mb-8 max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
              <img src={courseClassroom} alt="Comunidade de alunos do curso" className="w-full h-auto" />
            </div>
          </div>

          {/* Highlighted Info Box */}
          <div className="relative group mb-12 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
            <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-all duration-300 overflow-hidden">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex-shrink-0">
                  <img src={aiBrain} alt="IA Cérebro" className="w-48 md:w-64 h-auto rounded-xl" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent">Acesso Vitalício aos Prompts</h3>
                  <p className="text-lg md:text-xl leading-relaxed text-foreground">
                    Você sempre terá os prompts que forem sendo criados pelo Professor Marcelo, podendo utilizá-los no{" "}
                    <span className="font-semibold text-accent">ChatGPT</span>,{" "}
                    <span className="font-semibold text-primary">Claude</span>,{" "}
                    <span className="font-semibold text-accent">Gemini</span> e{" "}
                    <span className="font-semibold text-primary">Grok</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-xl text-muted-foreground">Tire suas dúvidas sobre o acesso</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <FAQSection items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 Curso com IA. Todos os direitos reservados.</p>
          <p className="text-xs">Oferta única e especial. Válida até domingo (22/02) às 23:59.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

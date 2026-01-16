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
  // Data de fim da promoção: 21 de janeiro às 23:59 no horário de Brasília
  const promoEndDate = new Date("2026-01-21T23:59:59-03:00");

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
      question: "Essa promoção é realmente válida até quarta-feira?",
      answer:
        "Sim! Esta é uma oferta exclusiva válida apenas até quarta-feira (21/01) às 23:59. Após esse horário, a promoção será encerrada definitivamente.",
    },
    {
      question: "O que acontece se eu não aproveitar essa oferta?",
      answer:
        "Esta é uma oportunidade única e irrepetível. Você perderá a chance de ter acesso vitalício por apenas R$ 750,00. Após quarta-feira (21/01) às 23:59, essa oferta especial não estará mais disponível.",
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
      <section className="relative min-h-screen flex items-center pt-8 pb-16 md:pt-12 md:pb-24 px-4 overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <img 
            src={heroInstructor} 
            alt="" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-block bg-accent/20 border-2 border-accent/40 rounded-full px-5 py-2 mb-6 backdrop-blur-sm animate-float-slow">
              <span className="text-accent font-bold text-sm">🔥 Oferta Exclusiva para Alunos</span>
            </div>

            {/* Headline simplificada */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 leading-[1.1]">
              Pare de Renovar.
              <br />
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary-glow))] to-[hsl(var(--primary))] bg-clip-text text-transparent">
                Compre Uma Vez.
              </span>
            </h1>

            {/* Preço em destaque */}
            <div className="mb-6">
              <p className="text-muted-foreground text-lg mb-2">
                <span className="line-through text-destructive/70">R$ 1.750</span>
                <span className="text-sm ml-2">(5 anos renovando)</span>
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl md:text-7xl font-black text-accent drop-shadow-[0_0_30px_hsl(var(--accent)/0.5)]">
                  R$ 750
                </span>
                <span className="text-xl text-muted-foreground font-medium">uma vez, para sempre</span>
              </div>
            </div>

            {/* Aviso de escassez */}
            <div className="inline-block bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-2 mb-8">
              <span className="text-destructive font-bold text-sm">
                ⚠️ OPÇÃO NORMALMENTE INDISPONÍVEL - Apenas agora à venda
              </span>
            </div>

            {/* Bônus em destaque */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
              <div className="relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-2 border-accent/50 rounded-2xl p-5 overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  GRÁTIS
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden shadow-lg border border-accent/30">
                    <img src={bookIaDireito} alt="Livro IA Direito" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-black text-accent text-lg mb-1">📚 BÔNUS EXCLUSIVO</p>
                    <p className="text-foreground font-medium">
                      Livro <span className="text-primary">"IA para Profissionais do Direito"</span>
                    </p>
                    <p className="text-sm text-muted-foreground">Sempre atualizado, incluído no vitalício</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Countdown melhorado */}
            <div className="mb-8">
              <p className="text-sm text-accent font-semibold mb-3 uppercase tracking-widest">⏰ Oferta encerra em:</p>
              <Countdown endDate={promoEndDate} />
            </div>

            {/* Vagas */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card/50 border border-accent/30 rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="font-bold text-accent">35 vagas</span>
              </div>
              <span className="text-sm text-muted-foreground">• Condição única e limitada</span>
            </div>

            {/* CTA */}
            <Button
              variant="accent"
              size="xl"
              onClick={scrollToPricing}
              className="w-full sm:w-auto text-lg px-10 shadow-[0_0_40px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_60px_hsl(var(--accent)/0.6)] transition-all"
            >
              Garantir Meu Acesso Vitalício
            </Button>

            <p className="text-sm text-muted-foreground mt-4 flex items-center gap-4">
              <span>🔒 Pagamento seguro</span>
              <span>•</span>
              <span>7 dias de garantia</span>
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.1),transparent)]" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 border-2 border-accent/40 rounded-full px-6 py-3 mb-6 backdrop-blur-sm animate-pulse">
              <span className="text-3xl animate-bounce">▶️</span>
              <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent">
                Clique no vídeo abaixo e descubra como a IA pode mudar a tua rotina jurídica
              </p>
            </div>
          </div>

          <div className="relative group animate-scale-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse opacity-75" />
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-glow)] border-2 border-accent/30 group-hover:border-accent/50 transition-all duration-300 bg-black">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/IkDAGKuc50c"
                  title="Como a IA pode transformar sua rotina jurídica"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section - After Video */}
      <div id="pricing-plans">
        <PricingPlans />
      </div>

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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por Que Fazer o VITALÍCIO Agora?</h2>
            <p className="text-xl text-muted-foreground">Todos os benefícios que você vai conquistar</p>
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

      {/* Urgency Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 bg-gradient-to-br from-card to-card/50 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-block bg-accent/10 border border-accent rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <span className="text-accent font-semibold">⏰ Tempo Limitado</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Não Perca Esta <span className="highlight-underline text-accent">Oportunidade Única</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Esta é uma oferta especial válida até quarta-feira (21/01) às 23:59! O acesso vitalício não estará mais
              disponível por este valor promocional. Esta oportunidade não se repetirá.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="bg-card/50 border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={35} />
                </div>
                <div className="text-muted-foreground">Vagas limitadas</div>
                {/* Progress bar for spots */}
                <div className="mt-3">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">Até Quarta</div>
                <div className="text-muted-foreground">Termina 21/01 às 23:59</div>
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
          <p className="text-xs">Oferta única e especial. Válida até quarta-feira (21/01) às 23:59.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

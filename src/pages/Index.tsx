import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/Countdown";
import { ComparisonCard } from "@/components/ComparisonCard";
import { BenefitCard } from "@/components/BenefitCard";
import { FAQSection } from "@/components/FAQItem";
import { SpotsRemaining } from "@/components/SpotsRemaining";
import { Infinity, Clock, TrendingUp, Award, Zap, Shield, Star, Users } from "lucide-react";
import heroInstructor from "@/assets/hero-instructor.jpg";
import coursePlatform from "@/assets/course-platform.png";
import courseClassroom from "@/assets/course-classroom.jpg";
import courseImmersion from "@/assets/course-immersion.png";
import appCommunity from "@/assets/app-community.png";
import offerExclusive from "@/assets/offer-exclusive.png";
import aiVanguard from "@/assets/ai-vanguard.png";
import aiBrain from "@/assets/ai-brain.png";
import bookIaDireito from "@/assets/book-ia-direito.png";
import { toZonedTime } from 'date-fns-tz';

const Index = () => {
  // Data de fim da promoção: hoje às 23:59 no horário de Brasília
  const today = new Date();
  const brasiliaTime = toZonedTime(today, 'America/Sao_Paulo');
  const promoEndDate = new Date(brasiliaTime);
  promoEndDate.setHours(23, 59, 59, 999);

  const handleCTAClick = () => {
    window.open("https://pay.hotmart.com/M96848969A?off=ckiusfpy&bid=1760153935709", "_blank");
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
      icon: Star,
      title: "Reconhecimento aos Alunos Pioneiros",
      description:
        "Esta promoção não vai se repetir. Estamos fazendo essa oferta única apenas para você, que é aluno desde o início do curso e faz parte da nossa comunidade original.",
      image: offerExclusive,
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
        "Receba acesso vitalício ao livro digital, sempre que lançado! Um guia completo sobre IA jurídica - totalmente incluído no seu upgrade.",
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
      question: "Essa promoção é realmente apenas até hoje?",
      answer:
        "Sim! Esta é uma oferta exclusiva e limitada até hoje às 23:59 para nossos alunos atuais. Após esse horário, a promoção será encerrada definitivamente.",
    },
    {
      question: "O que acontece se eu não aproveitar essa oferta hoje?",
      answer:
        "Esta é uma oportunidade única e irrepetível. Você perderá a chance de ter acesso vitalício por apenas R$ 687,00. Após hoje, essa oferta especial não estará mais disponível.",
    },
    {
      question: "Quem pode aproveitar essa oferta?",
      answer:
        "Qualquer pessoa interessada em dominar a IA na prática jurídica! Esta é uma oferta especial de 1 dia aberta para todos que desejam investir no seu futuro profissional.",
    },
    {
      question: "Posso parcelar o pagamento?",
      answer:
        "Sim! Trabalhamos com as principais formas de pagamento e oferecemos opções de parcelamento. Confira as condições ao clicar no botão de garantir acesso vitalício.",
    },
    {
      question: "Existe alguma garantia?",
      answer:
        "Sim! Você tem 7 dias de garantia incondicional. Se não ficar satisfeito com o upgrade, devolvemos 100% do seu investimento, sem perguntas.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
                <span className="text-accent font-semibold">🔥 Oferta Única de 1 Dia - APENAS 20 VAGAS</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Torne-se um Aluno
                <br />
                <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
                  Vitalício Agora
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                <span className="block mb-2">
                  <span className="text-muted-foreground line-through text-lg">De R$ 4.875,00</span>
                  <span className="ml-2 text-sm bg-accent/20 text-accent px-2 py-1 rounded-full font-semibold">
                    86% OFF
                  </span>
                </span>
                Por apenas <span className="text-accent font-bold text-2xl">R$ 687,00</span>, garanta seu acesso{" "}
                <span className="text-foreground font-semibold">vitalício</span> ao curso completo de IA Jurídica
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

                <SpotsRemaining />
              </div>

              <Button
                variant="accent"
                size="xl"
                onClick={handleCTAClick}
                className="mb-4 animate-pulse-slow w-full md:w-auto"
              >
                Garantir Acesso Vitalício Agora
              </Button>

              <p className="text-sm text-muted-foreground mt-4">⚡ Apenas 20 vagas • 🔒 Pagamento 100% seguro</p>
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

      {/* Comparison Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Compare e Veja a Diferença</h2>
            <p className="text-xl text-muted-foreground">Invista no seu futuro com a melhor opção</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ComparisonCard
              title="Acesso Atual"
              price="—"
              features={[
                { text: "Acesso por 1 ano apenas", included: true },
                { text: "Renovação necessária", included: true },
                { text: "Custos recorrentes", included: true },
                { text: "Todas as atualizações futuras", included: false },
                { text: "Comunidade vitalícia", included: false },
                { text: "Acesso vitalício ao app", included: false },
                { text: 'Livro "IA para Profissionais do Direito"', included: false },
              ]}
            />

            <ComparisonCard
              title="Acesso Vitalício"
              price="687"
              highlighted
              features={[
                { text: "Acesso para sempre", included: true },
                { text: "Sem renovações necessárias", included: true },
                { text: "Pagamento único", included: true },
                { text: "Todas as atualizações futuras", included: true },
                { text: "Comunidade vitalícia", included: true },
                { text: "Acesso vitalício ao app", included: true },
                { text: "Sempre que lançada uma edição do livro, você será o primeiro a recebê-la!", included: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por Que Fazer o Upgrade Agora?</h2>
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
          <div className="inline-block bg-accent/10 border border-accent rounded-full px-6 py-2 mb-6 animate-pulse">
            <span className="text-accent font-semibold">⏰ Tempo Limitado</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">Não Perca Esta Oportunidade Única</h2>

          <p className="text-xl text-muted-foreground mb-8">
            Esta é uma oferta especial de 1 dia apenas! Após as 23:59 de hoje, o acesso vitalício não estará mais disponível por
            este valor promocional. Esta oportunidade não se repetirá.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-card/50 border border-border rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">20</div>
              <div className="text-muted-foreground">Vagas limitadas</div>
            </div>
            <div className="bg-card/50 border border-border rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">Hoje</div>
              <div className="text-muted-foreground">Encerra às 23:59</div>
            </div>
          </div>

          <Button variant="hero" size="xl" onClick={handleCTAClick}>
            Sim, Quero Acesso Vitalício!
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground">Tire suas dúvidas sobre o upgrade vitalício</p>
          </div>

          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 bg-gradient-to-br from-card to-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto Para Garantir Seu Acesso Vitalício?</h2>

          <p className="text-xl text-muted-foreground mb-8">
            Aproveite esta oferta especial de 1 dia e invista no seu futuro por apenas R$ 687,00
          </p>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 rounded-xl p-6 mb-12 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-3xl">📚</span>
              <p className="text-xl font-bold text-accent">BÔNUS INCLUÍDO</p>
            </div>
            <p className="text-lg text-foreground text-center">
              Acesso vitalício às atualizações do Livro{" "}
              <span className="font-semibold">"Inteligência Artificial para Profissionais do Direito"</span>.
            </p>
          </div>

          <Button variant="accent" size="xl" onClick={handleCTAClick} className="mb-6">
            Fazer Upgrade Agora
          </Button>

          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p>✓ Pagamento 100% Seguro</p>
            <p>✓ Garantia de 7 Dias</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 Curso com IA. Todos os direitos reservados.</p>
          <p className="text-xs">Oferta única e especial. Válida apenas por 1 dia - até hoje às 23:59.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

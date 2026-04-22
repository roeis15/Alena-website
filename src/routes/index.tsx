import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Star, Flame, Clock, MapPin, ArrowRight } from "lucide-react";
import burgerImg from "@/assets/br-burger.jpg";
import friesImg from "@/assets/br-fries.jpg";
import drinkImg from "@/assets/br-drink.jpg";
import interiorImg from "@/assets/br-interior.jpg";

const Burger3D = lazy(() => import("@/components/Burger3D").then((m) => ({ default: m.Burger3D })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brazilian Hamburgueria — Smash Burgers & Vibe São Paulo Style" },
      { name: "description", content: "Hamburgueria brasileira com smash burgers suculentos, fritas crocantes e drinks gelados. Aberto a partir das 18h." },
      { property: "og:title", content: "Brazilian Hamburgueria — São Paulo's juiciest smash burgers" },
      { property: "og:description", content: "Carne na chapa, queijo derretido, drinks autorais. Aberto a partir das 18h." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Ticker />
      <Signature />
      <MenuPreview />
      <Story />
      <Reviews />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden grid-bg">
      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-flame/20 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24 relative">
        <div className="animate-float-up relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-display text-xs tracking-widest text-primary">
            <Star className="w-3.5 h-3.5 fill-primary" /> 3.9 · 63 GOOGLE REVIEWS
          </span>
          <h1 className="mt-6 font-display text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.85] text-foreground">
            SMASH
            <br />
            <span className="text-gradient-jungle">burgers</span>
            <br />
            <span className="font-serif italic text-flame text-6xl md:text-7xl lg:text-8xl">do brasil.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
            Carne fresca esmagada na chapa. Queijo derretido. Pão brioche dourado. E aquele drink gelado que faz a noite virar.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-lg tracking-wide text-primary-foreground shadow-glow-lime hover:scale-105 transition-transform">
              Ver Cardápio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/5511956534487" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/20 bg-secondary/60 backdrop-blur px-7 py-4 font-display text-lg tracking-wide text-foreground hover:border-primary hover:text-primary transition-colors">
              Pedir no WhatsApp
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            <Stat icon={<Clock className="w-4 h-4" />} value="18h–00h" label="Diariamente" />
            <Stat icon={<Flame className="w-4 h-4" />} value="100%" label="Carne fresca" />
            <Stat icon={<MapPin className="w-4 h-4" />} value="SP" label="Vila Madalena" />
          </div>
        </div>

        <div className="relative h-[500px] md:h-[600px] lg:h-[680px]">
          <div className="absolute inset-0 bg-gradient-jungle opacity-20 blur-3xl animate-blob" />
          <div className="relative w-full h-full">
            <Suspense fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={burgerImg} alt="Brazilian smash burger" width={1400} height={1400}
                  className="w-full h-full object-contain animate-pulse-glow rounded-3xl" />
              </div>
            }>
              <Burger3D />
            </Suspense>
          </div>
          <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur border border-primary/40 rounded-2xl px-4 py-3 shadow-glow-lime">
            <div className="font-serif text-primary text-base leading-none">3D ao vivo</div>
            <div className="font-display text-sm text-muted-foreground mt-1">arraste para girar</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-4">
      <div className="flex items-center gap-1.5 text-primary">{icon}</div>
      <div className="font-display text-xl text-foreground mt-1">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Ticker() {
  const items = ["CARNE FRESCA", "CHAPA QUENTE", "DRINKS AUTORAIS", "BACON CRISPY", "PÃO BRIOCHE", "★ ★ ★ ★ ★", "SMASH STYLE", "VEM COM FOME"];
  const row = [...items, ...items, ...items];
  return (
    <div className="bg-primary text-primary-foreground py-4 overflow-hidden border-y-2 border-primary">
      <div className="flex gap-10 animate-ticker whitespace-nowrap font-display text-2xl tracking-widest">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-flame">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Signature() {
  return (
    <section className="container mx-auto px-5 py-24 lg:py-32">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 relative">
          <div className="absolute -inset-4 bg-gradient-jungle rounded-[3rem] opacity-30 blur-2xl animate-blob" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-soft">
            <img src={friesImg} alt="Crispy fries with chimichurri" loading="lazy" width={1200} height={1200}
              className="w-full aspect-square object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-flame text-background rounded-2xl px-5 py-4 rotate-[6deg] shadow-glow-flame">
            <div className="font-display text-3xl leading-none">R$ 22</div>
            <div className="font-serif text-sm">sempre crocante</div>
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="font-serif text-primary text-2xl">a clássica</p>
          <h2 className="mt-2 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
            FRITAS
            <br />
            <span className="text-gradient-flame">crocantes,</span>
            <span className="font-serif italic text-foreground"> sempre.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
            Cortadas na hora, fritas duas vezes, sal grosso na medida certa. Vem com o nosso molho de chimichurri da casa. Pede com uma caipirinha — é a combinação que ninguém esquece.
          </p>
          <Link to="/menu" className="mt-8 inline-flex items-center gap-2 font-display text-lg text-primary border-b-2 border-primary hover:text-foreground hover:border-foreground transition-colors">
            Ver cardápio completo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MenuPreview() {
  const cards = [
    { tag: "SMASH", title: "Brasileirão", desc: "Dois patties smash, queijo cheddar duplo, bacon crispy, cebola caramelizada e pão brioche.", price: "R$ 38", img: burgerImg },
    { tag: "STREET", title: "X-Tudo SP", desc: "Carne, queijo, presunto, ovo, milho, batata palha, alface, tomate. Aquele com tudo dentro.", price: "R$ 42", img: friesImg },
    { tag: "BAR", title: "Caipirinha", desc: "Cachaça artesanal, limão tahiti, açúcar mascavo. Gelada como deve ser.", price: "R$ 24", img: drinkImg },
  ];
  return (
    <section className="relative bg-card border-y border-border overflow-hidden">
      <div className="absolute -top-20 right-1/4 w-[400px] h-[400px] bg-flame/10 blur-3xl rounded-full" />
      <div className="container mx-auto px-5 py-24 lg:py-32 relative">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-serif text-primary text-2xl">o que tá bombando</p>
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9]">DA <span className="text-gradient-jungle">CHAPA</span></h2>
          </div>
          <Link to="/menu" className="inline-flex items-center gap-2 font-display text-lg text-primary hover:text-foreground border-b-2 border-primary">
            CARDÁPIO COMPLETO <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article key={i} className="group rounded-3xl border border-border bg-background overflow-hidden hover:border-primary transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={1200} height={900}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-display text-xs tracking-widest shadow-glow-lime">{c.tag}</span>
                <span className="absolute top-4 right-4 bg-background/80 backdrop-blur text-foreground px-3 py-1 rounded-full font-display text-lg">{c.price}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl text-foreground">{c.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="container mx-auto px-5 py-24 lg:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-serif text-primary text-2xl">nossa história</p>
          <h2 className="mt-2 font-display text-6xl md:text-7xl leading-[0.9]">
            DO FOOD TRUCK
            <br />
            <span className="text-gradient-flame italic font-serif">à hamburgueria.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A gente começou num food truck na Vila Madalena em 2019, servindo smash burgers pra galera saindo do bar. A fila virou notícia, a notícia virou hype, e o hype virou esse lugar — uma hamburgueria de bairro com alma de food truck e tempero brasileiro de verdade.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-display text-lg text-foreground border-b-2 border-primary hover:text-primary transition-colors">
            Conhecer a história <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-flame opacity-30 blur-2xl rounded-[3rem]" />
          <img src={interiorImg} alt="Inside Brazilian Hamburgueria" loading="lazy" width={1600} height={1100}
            className="relative rounded-[2rem] border border-border w-full shadow-soft" />
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { stars: 5, text: "O melhor smash burger que já comi em São Paulo. A carne é absurda, o pão é macio, e o atendimento é nota mil.", who: "Lucas M.", src: "Google" },
    { stars: 5, text: "Ambiente lindo, drinks bem feitos, e o burger Brasileirão é simplesmente viciante. Voltei três vezes essa semana.", who: "Marina C.", src: "iFood" },
    { stars: 4, text: "Vale cada centavo. Pede o X-Tudo SP com a fritas trufadas. Você não vai se arrepender.", who: "Rodrigo P.", src: "Google" },
  ];
  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-5 py-20 lg:py-24">
        <div className="text-center mb-14">
          <p className="font-serif text-primary text-2xl">o que falam de nós</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">★ 3.9 · 63 REVIEWS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-3xl border border-border bg-background p-7 hover:border-primary transition-colors">
              <div className="text-primary text-2xl mb-3">{"★".repeat(r.stars)}<span className="text-muted-foreground/30">{"★".repeat(5 - r.stars)}</span></div>
              <p className="text-lg text-foreground leading-relaxed">"{r.text}"</p>
              <div className="mt-5 font-display text-sm tracking-wider text-muted-foreground">— {r.who} · {r.src}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container mx-auto px-5 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-jungle text-primary-foreground p-12 md:p-20 shadow-glow-lime">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-flame/40 blur-3xl rounded-full" />
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-background/10 blur-3xl rounded-full" />
        <div className="relative max-w-2xl">
          <p className="font-serif text-background text-2xl">vem com fome</p>
          <h2 className="mt-2 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
            ABRIMOS ÀS 18H
            <br />
            <span className="font-serif italic">a chapa tá quente.</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-xl">
            Reserva não precisa — basta vir. Mas se quiser pedir delivery ou retirada, é no WhatsApp em 2 minutos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/5511956534487" target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-background text-foreground px-7 py-4 font-display text-lg tracking-wide hover:bg-flame hover:text-background transition-colors">
              WhatsApp Pedido
            </a>
            <Link to="/contact"
              className="rounded-full border-2 border-background/40 bg-background/10 backdrop-blur px-7 py-4 font-display text-lg tracking-wide hover:bg-background/20 transition-colors">
              Como chegar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

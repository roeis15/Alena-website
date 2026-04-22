import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import interiorImg from "@/assets/br-interior.jpg";
import burgerImg from "@/assets/br-burger.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre — Brazilian Hamburgueria" },
      { name: "description", content: "De um food truck na Vila Madalena para a hamburgueria preferida do bairro. Conheça a história da Brazilian." },
      { property: "og:title", content: "Sobre — Brazilian Hamburgueria" },
      { property: "og:description", content: "De um food truck na Vila Madalena para a hamburgueria preferida do bairro." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container mx-auto px-5 py-16 lg:py-24">
        <p className="font-serif text-primary text-2xl">nossa história</p>
        <h1 className="font-display text-7xl md:text-9xl text-foreground leading-[0.85]">
          DO TRUCK
          <br />
          <span className="text-gradient-flame italic font-serif">à casa.</span>
        </h1>
      </section>

      <section className="container mx-auto px-5 grid md:grid-cols-2 gap-12 items-center pb-20">
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-jungle opacity-30 blur-2xl rounded-[3rem] animate-blob" />
          <img src={interiorImg} alt="Brazilian Hamburgueria interior" loading="lazy" width={1600} height={1100}
            className="relative rounded-[2rem] border border-border w-full shadow-soft" />
        </div>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Em 2019, o Felipe e a Bruna juntaram tudo o que tinham e compraram um food truck velho. Estacionaram na Vila Madalena, perto dos bares, e começaram a vender smash burgers às sextas e sábados à noite.
          </p>
          <p>
            A fila virou notícia. A notícia virou hype. Em 2022, abriram a primeira hamburgueria física — pequena, com 18 lugares, mas com a mesma chapa preta e a mesma carne fresca todo dia.
          </p>
          <p>
            Hoje servimos mais de 200 burgers por noite. Crescemos, mas a obsessão é a mesma: o melhor smash burger de São Paulo, num lugar onde você se sente em casa.
          </p>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-5 py-20 grid md:grid-cols-3 gap-8">
          {[
            { n: "01", t: "Carne fresca", d: "Moemos a carne todo dia. Patties prontos antes do almoço, na chapa antes do anoitecer." },
            { n: "02", t: "Pão da padaria", d: "Pão brioche entregue toda manhã pela padaria do seu Antônio, na esquina." },
            { n: "03", t: "Molhos da casa", d: "Maionese, chimichurri, geleia de bacon — tudo feito por nós, sem atalhos." },
          ].map((p) => (
            <div key={p.n} className="rounded-3xl border border-border bg-background p-8">
              <div className="font-display text-6xl text-gradient-jungle">{p.n}</div>
              <h3 className="mt-4 font-display text-3xl text-foreground">{p.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-5 py-20 text-center">
        <img src={burgerImg} alt="" aria-hidden loading="lazy" width={400} height={400}
          className="mx-auto w-32 h-32 object-cover rounded-full border-4 border-primary shadow-glow-lime mb-8" />
        <h2 className="font-display text-5xl md:text-7xl text-foreground">vem provar.</h2>
        <Link to="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-display text-lg text-primary-foreground shadow-glow-lime hover:scale-105 transition-transform">
          Como chegar →
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}

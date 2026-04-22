import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Users, Truck, PartyPopper } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Eventos & Catering — Brazilian Hamburgueria" },
      { name: "description", content: "Smash burgers para o seu evento. Festas, casamentos, eventos corporativos. Pacotes a partir de 30 pessoas." },
      { property: "og:title", content: "Eventos & Catering — Brazilian Hamburgueria" },
      { property: "og:description", content: "Smash burgers para o seu evento. Pacotes a partir de 30 pessoas." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container mx-auto px-5 py-16 lg:py-24">
        <p className="font-serif text-primary text-2xl">eventos & catering</p>
        <h1 className="font-display text-7xl md:text-9xl text-foreground leading-[0.85]">
          A FESTA
          <br />
          <span className="text-gradient-jungle">é sua,</span>
          <br />
          <span className="font-serif italic text-flame">a chapa é nossa.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Levamos nossa chapa, nossos cozinheiros e nossa carne pro seu evento. Festas, casamentos, eventos corporativos — fazemos do tamanho que você precisa.
        </p>
      </section>

      <section className="container mx-auto px-5 grid md:grid-cols-3 gap-6 pb-20">
        {[
          { icon: <Users className="w-8 h-8" />, title: "Festa Pequena", desc: "30–60 pessoas. Cardápio de 3 burgers + acompanhamentos.", price: "A partir de R$ 4.500" },
          { icon: <PartyPopper className="w-8 h-8" />, title: "Casamento / Aniversário", desc: "60–150 pessoas. Cardápio completo + drinks e equipe full service.", price: "A partir de R$ 12.000" },
          { icon: <Truck className="w-8 h-8" />, title: "Food Truck", desc: "Nosso truck no seu evento. Até 300 burgers, montagem inclusa.", price: "A partir de R$ 8.500" },
        ].map((p, i) => (
          <article key={i} className="rounded-3xl border border-border bg-card p-8 hover:border-primary transition-colors">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary text-primary-foreground shadow-glow-lime mb-5">
              {p.icon}
            </div>
            <h3 className="font-display text-3xl text-foreground">{p.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-5 font-display text-xl text-primary">{p.price}</div>
          </article>
        ))}
      </section>

      <section className="container mx-auto px-5 pb-24">
        <div className="rounded-[2.5rem] bg-gradient-jungle text-primary-foreground p-12 md:p-16 shadow-glow-lime relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-flame/30 blur-3xl rounded-full" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-serif text-2xl">vamos conversar?</p>
              <h2 className="mt-2 font-display text-5xl md:text-6xl">PEÇA UM ORÇAMENTO</h2>
              <p className="mt-4 text-primary-foreground/90 max-w-md">
                Manda uma mensagem com a data, número de pessoas e tipo de evento. Respondemos em poucas horas.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/5511956534487" target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-background text-foreground px-7 py-4 font-display text-lg text-center hover:bg-flame hover:text-background transition-colors">
                WhatsApp: +55 11 95653-4487
              </a>
              <a href="mailto:eventos@brazilianhamburgueria.com.br"
                className="rounded-full border-2 border-background/40 bg-background/10 backdrop-blur px-7 py-4 font-display text-lg text-center hover:bg-background/20 transition-colors">
                eventos@brazilianhamburgueria.com.br
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

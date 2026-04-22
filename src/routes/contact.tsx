import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contato — Brazilian Hamburgueria" },
      { name: "description", content: "Vila Madalena, São Paulo. Aberto das 18h às 00h, todos os dias. WhatsApp +55 11 95653-4487." },
      { property: "og:title", content: "Contato — Brazilian Hamburgueria" },
      { property: "og:description", content: "Vila Madalena, São Paulo. Aberto das 18h às 00h, todos os dias." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container mx-auto px-5 py-16 lg:py-24">
        <p className="font-serif text-primary text-2xl">a gente te espera</p>
        <h1 className="font-display text-7xl md:text-9xl text-foreground leading-[0.85]">
          VEM
          <br />
          <span className="text-gradient-jungle">comer.</span>
        </h1>
      </section>

      <section className="container mx-auto px-5 pb-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {[
            { icon: <MapPin className="w-6 h-6" />, title: "Endereço", lines: ["Vila Madalena", "São Paulo, SP"] },
            { icon: <Clock className="w-6 h-6" />, title: "Horário", lines: ["Todos os dias", "18h — 00h"] },
            { icon: <Phone className="w-6 h-6" />, title: "Telefone", lines: ["+55 11 95653-4487"], href: "tel:+5511956534487" },
            { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", lines: ["Pedidos & reservas em segundos"], href: "https://wa.me/5511956534487" },
          ].map((c, i) => {
            const Wrapper: any = c.href ? "a" : "div";
            const props = c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {};
            return (
              <Wrapper key={i} {...props} className="block rounded-2xl border border-border bg-card p-6 hover:border-primary transition-colors">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-primary-foreground shadow-glow-lime">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground">{c.title}</h3>
                    {c.lines.map((l, j) => (
                      <p key={j} className="text-muted-foreground">{l}</p>
                    ))}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-border shadow-soft min-h-[400px]">
          <iframe
            title="Mapa Brazilian Hamburgueria"
            src="https://www.google.com/maps?q=Vila+Madalena+S%C3%A3o+Paulo&output=embed"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

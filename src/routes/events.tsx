import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Catering & Private Events — Hamburger America NYC" },
      { name: "description", content: "Office lunches, birthdays, film wraps and full buyouts. We pack a hot griddle and we travel." },
      { property: "og:title", content: "Catering & Events — Hamburger America" },
      { property: "og:description", content: "We bring the griddle to you." },
    ],
  }),
  component: Events,
});

function Events() {
  const packages = [
    { name: "Office Lunch", count: "10 — 30 GUESTS", desc: "Boxed smash burger lunches delivered hot to your office. Add fries, drinks, pie.", price: "from $22 / head" },
    { name: "Private Buyout", count: "30 — 60 GUESTS", desc: "Take over the whole counter. Custom menu, full bar, your soundtrack on the jukebox.", price: "custom quote" },
    { name: "Griddle On-Site", count: "50 — 200 GUESTS", desc: "Film wraps, weddings, store openings. We bring the flat-top, the beef, the team.", price: "starts at $4,500" },
  ];
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b-2 border-foreground">
        <div className="container mx-auto px-5 py-20">
          <p className="font-serif italic text-primary text-xl">Cater · Buyout · On-site grilling</p>
          <h1 className="mt-2 font-display text-7xl md:text-9xl leading-[0.85]">
            WE PACK
            <br />
            <span className="text-primary italic font-serif">the griddle</span>
            <br />
            & TRAVEL.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Whether it's twelve hungry coworkers or two hundred guests on a film set, we deliver classic American burgers with the same crispy onions and warm soft buns we serve on West Houston.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-5 py-16 grid md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <div key={p.name} className="bg-background border-2 border-foreground p-8 shadow-pop hover:translate-x-[-3px] hover:translate-y-[-3px] transition-transform">
            <div className="bg-accent text-accent-foreground inline-block px-3 py-1 font-display text-xs tracking-widest border-2 border-foreground">{p.count}</div>
            <h3 className="mt-4 font-display text-4xl">{p.name}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-6 font-display text-2xl text-primary">{p.price}</div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-5 pb-20">
        <div className="bg-primary text-primary-foreground p-10 md:p-16 text-center border-2 border-foreground shadow-pop">
          <p className="font-serif italic text-accent text-xl">Let's plan it</p>
          <h2 className="mt-2 font-display text-5xl md:text-7xl">FEED YOUR PEOPLE.</h2>
          <p className="mt-3 text-lg text-primary-foreground/90 max-w-xl mx-auto">Send us the date, headcount and the vibe. We'll do the rest.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a href="mailto:catering@hamburgeramerica.com" className="rounded-md bg-foreground text-background px-7 py-3 font-display text-xl tracking-wide border-2 border-foreground hover:bg-accent hover:text-accent-foreground transition-colors">catering@hamburgeramerica.com</a>
            <a href="tel:+12125551234" className="rounded-md bg-accent text-accent-foreground px-7 py-3 font-display text-xl tracking-wide border-2 border-foreground hover:bg-background hover:text-foreground transition-colors">(212) 555-1234</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

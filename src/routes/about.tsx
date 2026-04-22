import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import dinerImg from "@/assets/diner.jpg";
import heroBurger from "@/assets/hero-burger.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Hamburger America NYC" },
      { name: "description", content: "Forty years of road trips, two cookbooks, one counter on West Houston. The story of Hamburger America." },
      { property: "og:title", content: "Our Story — Hamburger America" },
      { property: "og:description", content: "From documentary to cookbook to a tiny NYC counter." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b-2 border-foreground">
        <div className="container mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-serif italic text-primary text-xl">Since 2008 · Counter since 2024</p>
            <h1 className="mt-2 font-display text-7xl md:text-9xl leading-[0.85]">
              ROAD TRIPS,
              <br />
              <span className="text-primary italic font-serif">grease,</span>
              <br />
              & MEMORY.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Hamburger America started as a film, became a book, and grew into a 40-year search across every corner of America for the burgers worth driving for. In 2024 we built a counter on West Houston so anyone could taste them without the road trip.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent rotate-3 border-2 border-foreground shadow-pop" />
            <img src={heroBurger} alt="Burger" loading="lazy" width={1600} height={1100}
              className="relative w-full border-2 border-foreground" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Real Beef. Daily.", text: "Fresh, never frozen. Ground in-house, smashed to order on a screaming-hot griddle." },
            { num: "02", title: "Regional Originals.", text: "Oklahoma fried onion. Connecticut steamed. Pittsburgh hot ham. We chase the originals." },
            { num: "03", title: "A Counter, Not a Show.", text: "Eight stools. Open kitchen. The food is the point. Sit, watch, eat, leave happy." },
          ].map((v) => (
            <div key={v.num} className="bg-background border-2 border-foreground p-8 shadow-pop">
              <div className="font-display text-6xl text-primary leading-none">{v.num}</div>
              <h3 className="mt-4 font-display text-3xl">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background border-y-2 border-foreground">
        <div className="container mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
          <img src={dinerImg} alt="Diner" loading="lazy" width={1600} height={1100} className="border-2 border-background w-full" />
          <div>
            <p className="font-serif italic text-accent text-xl">In the room</p>
            <h2 className="mt-2 font-display text-6xl md:text-7xl leading-[0.9]">
              IT'S NOISY.
              <br />
              <span className="text-accent italic font-serif">it's good.</span>
            </h2>
            <p className="mt-5 text-lg text-background/80 leading-relaxed">
              Red leather, checkered tile, a jukebox that knows every Motown hit. We built this room because that's where America's best burgers were born — and because eating one feels better with the right soundtrack.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

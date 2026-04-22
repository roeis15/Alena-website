import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroBurger from "@/assets/hero-burger.jpg";
import friesImg from "@/assets/fries.jpg";
import pieImg from "@/assets/pie.jpg";
import dinerImg from "@/assets/diner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamburger America — Classic Smash Burgers · West Village NYC" },
      { name: "description", content: "George Motz's love letter to the American hamburger. Fried-onion smash burgers, shoestring fries, key lime pie. 155 W Houston St." },
      { property: "og:title", content: "Hamburger America — NYC's classic smash burger joint" },
      { property: "og:description", content: "Old recipes. Fresh beef. Hot griddles. Open daily on West Houston." },
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
      <Menu />
      <Story />
      <Reviews />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-foreground">
      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
        <div className="animate-float-up relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 font-display text-sm tracking-widest text-accent-foreground border-2 border-foreground">
            ★ 4.5 · 2,985 GOOGLE REVIEWS
          </span>
          <h1 className="mt-6 font-display text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-foreground">
            THE GREAT
            <br />
            <span className="text-primary italic font-serif">American</span>
            <br />
            HAMBURGER.
          </h1>
          <p className="mt-6 font-serif italic text-xl text-muted-foreground max-w-md">
            Forty regional classics. One little counter on West Houston. Smashed, griddled, and served with a wink.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/menu"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 font-display text-xl tracking-wide text-primary-foreground border-2 border-foreground shadow-pop hover:translate-x-[-3px] hover:translate-y-[-3px] transition-transform">
              See the Menu →
            </Link>
            <Link to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-background px-7 py-4 font-display text-xl tracking-wide text-foreground border-2 border-foreground shadow-pop hover:translate-x-[-3px] hover:translate-y-[-3px] transition-transform">
              Find the Counter
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <div><strong className="font-display text-2xl text-foreground tracking-wide block">$10–20</strong> per person</div>
            <div className="h-10 w-px bg-foreground/30" />
            <div><strong className="font-display text-2xl text-foreground tracking-wide block">11AM–10PM</strong> daily</div>
            <div className="h-10 w-px bg-foreground/30" />
            <div><strong className="font-display text-2xl text-foreground tracking-wide block">~30 min</strong> avg visit</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-accent rotate-[-3deg] border-2 border-foreground shadow-pop" />
          <img src={heroBurger} alt="George Motz's Fried Onion Burger" width={1600} height={1100}
            className="relative w-full border-2 border-foreground" />
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground border-2 border-foreground p-4 rotate-[6deg] shadow-pop max-w-[180px]">
            <div className="font-display text-3xl leading-none">FRIED</div>
            <div className="font-display text-3xl leading-none">ONION</div>
            <div className="font-display text-3xl leading-none text-accent">SMASH</div>
            <div className="font-serif italic text-xs mt-1">the house classic</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["FRESH BEEF DAILY", "HOT GRIDDLE", "REGIONAL CLASSICS", "NO FREEZER", "EST. NYC", "★ ★ ★ ★ ★", "SHOESTRING FRIES", "KEY LIME PIE"];
  const row = [...items, ...items, ...items];
  return (
    <div className="bg-foreground text-background py-4 overflow-hidden border-y-2 border-foreground">
      <div className="flex gap-10 animate-ticker whitespace-nowrap font-display text-2xl tracking-widest">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-primary">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Signature() {
  return (
    <section className="container mx-auto px-5 py-20 lg:py-28">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 relative">
          <div className="absolute -inset-3 bg-primary rotate-2 border-2 border-foreground" />
          <img src={friesImg} alt="Shoestring fries" loading="lazy" width={1200} height={1200}
            className="relative border-2 border-foreground w-full" />
        </div>
        <div className="md:col-span-7">
          <p className="font-serif italic text-primary text-xl">No. 01 — The Sidekick</p>
          <h2 className="mt-2 font-display text-6xl md:text-8xl leading-[0.9]">
            SHOESTRING
            <br />
            <span className="text-primary">FRIES,</span>
            <em className="font-serif italic text-foreground"> always.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
            Hand-cut, twice-fried, dusted with the right amount of salt. They arrive at your counter fast and they don't survive long. Pair them with a Coffee Soda and you're doing it right.
          </p>
          <div className="mt-8 inline-block bg-foreground text-background px-5 py-3 font-display text-xl tracking-wide -rotate-1 border-2 border-foreground">
            $5 · ALWAYS HOT
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const cards = [
    { tag: "GRIDDLED", title: "Onion Smash", desc: "A single patty smashed thin onto a bed of onions until the edges go lacy and crisp. American cheese, soft bun.", price: "$9" },
    { tag: "DOUBLE", title: "Fried Onion Double", desc: "Two patties, two slices of cheese, twice the crispy onions. The reason people fly in.", price: "$14" },
    { tag: "DESSERT", title: "Key Lime Pie", desc: "Tart, cold, with a graham crust and a swirl of cream. We've yet to meet someone who refused.", price: "$7" },
  ];
  return (
    <section className="bg-foreground text-background border-y-2 border-foreground">
      <div className="container mx-auto px-5 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-serif italic text-accent text-xl">What's good</p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-background">FROM THE <span className="text-accent">GRIDDLE</span></h2>
          </div>
          <Link to="/menu" className="font-display text-xl tracking-wide text-accent hover:text-background border-b-2 border-accent">FULL MENU →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article key={i} className="bg-background text-foreground border-2 border-background p-7 shadow-pop-red hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform">
              <div className="flex items-start justify-between mb-3">
                <span className="bg-accent text-accent-foreground px-3 py-1 font-display text-sm tracking-widest border-2 border-foreground">{c.tag}</span>
                <span className="font-display text-3xl text-primary">{c.price}</span>
              </div>
              <h3 className="font-display text-4xl mt-4">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="container mx-auto px-5 py-20 lg:py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-serif italic text-primary text-xl">A short history</p>
          <h2 className="mt-2 font-display text-6xl md:text-7xl leading-[0.9]">
            FORTY YEARS,
            <br />
            <span className="text-primary italic font-serif">one obsession.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Hamburger America began as a documentary, then a book, then a roadside obsession that drove from Connecticut steamed cheeseburgers to Oklahoma fried-onion smashes. In 2024 we opened a counter in NYC to bring the very best of those finds — done exactly the way they were taught to us — to anyone hungry enough to walk in.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-display text-xl tracking-wide text-foreground border-b-2 border-primary hover:text-primary">
            READ THE STORY →
          </Link>
        </div>
        <div className="relative">
          <img src={dinerImg} alt="Inside the diner" loading="lazy" width={1600} height={1100}
            className="border-2 border-foreground w-full shadow-pop" />
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { stars: 5, text: "Possibly the best smash burger I've eaten in my entire life. The onions are everything.", who: "Marcus T.", src: "Google" },
    { stars: 5, text: "Tiny counter, huge flavor. The fried onion double will haunt me until I come back.", who: "Priya S.", src: "Resy" },
    { stars: 4, text: "Worth the wait. Order the key lime pie even if you're full. Trust.", who: "Ethan W.", src: "Google" },
  ];
  return (
    <section className="bg-accent border-y-2 border-foreground">
      <div className="container mx-auto px-5 py-20 lg:py-24">
        <div className="text-center mb-14">
          <p className="font-serif italic text-foreground text-xl">The word on the street</p>
          <h2 className="font-display text-6xl md:text-7xl text-foreground">★ 4.5 · 2,985 REVIEWS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-background border-2 border-foreground p-7 shadow-pop">
              <div className="text-primary text-2xl mb-3">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
              <p className="font-serif italic text-lg text-foreground leading-relaxed">"{r.text}"</p>
              <div className="mt-5 font-display text-base tracking-wider text-muted-foreground">— {r.who} · {r.src}</div>
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
      <div className="relative overflow-hidden bg-primary text-primary-foreground border-2 border-foreground p-12 md:p-20 shadow-pop">
        <img src={pieImg} alt="" aria-hidden className="absolute -right-10 -bottom-10 w-72 rotate-12 opacity-30 hidden md:block" />
        <div className="relative max-w-2xl">
          <p className="font-serif italic text-accent text-xl">Come hungry</p>
          <h2 className="mt-2 font-display text-6xl md:text-8xl leading-[0.9]">
            155 W HOUSTON ST
            <br />
            <span className="text-accent italic font-serif">we'll save a seat.</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-xl">
            Walk in, sit at the counter, watch the griddle. No reservations — that's part of the fun.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://www.google.com/maps?q=155+W+Houston+St+New+York" target="_blank" rel="noopener noreferrer"
              className="rounded-md bg-foreground text-background px-7 py-4 font-display text-xl tracking-wide border-2 border-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              Get Directions
            </a>
            <Link to="/menu"
              className="rounded-md bg-accent text-accent-foreground px-7 py-4 font-display text-xl tracking-wide border-2 border-foreground hover:bg-background transition-colors">
              See the Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

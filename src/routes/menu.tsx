import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu — Hamburger America NYC" },
      { name: "description", content: "Regional American classics: fried onion smash burgers, steamed cheeseburgers, shoestring fries, key lime pie, coffee soda and more." },
      { property: "og:title", content: "Hamburger America Menu" },
      { property: "og:description", content: "Forty regional American burgers, sandwiches and sides." },
    ],
  }),
  component: Menu,
});

const sections = [
  {
    title: "BURGERS",
    note: "Smashed and griddled to order. Served on a soft potato bun.",
    items: [
      { name: "Onion Smash Burger", desc: "Single patty smashed onto onions, American cheese.", price: "$9", tag: "POPULAR" },
      { name: "Double Onion Burger", desc: "Two thin patties, double cheese, double onions.", price: "$13", tag: "POPULAR" },
      { name: "George Motz's Fried Onion Double Cheeseburger", desc: "The original. Two patties, lacy crispy onions, two slices American.", price: "$14", tag: "SIGNATURE" },
      { name: "Steamed Burger", desc: "Connecticut-style. Steamed beef, sharp white cheddar, soft roll.", price: "$11", tag: "" },
      { name: "Krabby Patty", desc: "Don't ask. Just order.", price: "$10", tag: "WHAT?" },
    ],
  },
  {
    title: "SIDES",
    note: "Things that make a burger a meal.",
    items: [
      { name: "Shoestring Fries", desc: "Hand-cut, twice fried.", price: "$5", tag: "POPULAR" },
      { name: "Egg Salad Sandwich", desc: "Classic, on white toast.", price: "$8", tag: "" },
      { name: "Hot Ham Sandwich", desc: "Pittsburgh-style, with mustard.", price: "$9", tag: "" },
      { name: "Peanut Butter & Jelly", desc: "Yes, really. And it's perfect.", price: "$6", tag: "" },
    ],
  },
  {
    title: "SWEETS & SIPS",
    note: "End strong.",
    items: [
      { name: "Key Lime Pie", desc: "Tart, cold, graham crust, whipped cream.", price: "$7", tag: "POPULAR" },
      { name: "Coffee Soda", desc: "Coffee + soda. Don't knock it.", price: "$5", tag: "POPULAR" },
      { name: "Chocolate Milk", desc: "Cold and proper.", price: "$4", tag: "" },
      { name: "Coffee Milk", desc: "Rhode Island's official drink.", price: "$4", tag: "" },
      { name: "Arnold Palmer", desc: "Half iced tea, half lemonade.", price: "$4", tag: "" },
      { name: "Miller High Life", desc: "Champagne of beers.", price: "$5", tag: "" },
    ],
  },
];

function Menu() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b-2 border-foreground">
        <div className="container mx-auto px-5 py-20">
          <p className="font-serif italic text-primary text-xl">The whole counter</p>
          <h1 className="mt-2 font-display text-7xl md:text-9xl leading-[0.88]">
            THE <span className="text-primary">MENU</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Built around forty years of road trips, two regional cookbooks, and one stubborn idea: the burger you remember from when you were a kid still exists. Here it is.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-5 py-16 space-y-20">
        {sections.map((s) => (
          <div key={s.title}>
            <div className="flex flex-wrap items-end justify-between gap-3 mb-2 border-b-2 border-foreground pb-4">
              <h2 className="font-display text-5xl md:text-7xl">{s.title}</h2>
              <p className="font-serif italic text-muted-foreground">{s.note}</p>
            </div>
            <div className="divide-y divide-foreground/15">
              {s.items.map((it) => (
                <div key={it.name} className="flex items-baseline gap-4 py-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display text-3xl tracking-wide">{it.name}</h3>
                      {it.tag && (
                        <span className="bg-accent text-accent-foreground px-2 py-0.5 font-display text-xs tracking-widest border-2 border-foreground">{it.tag}</span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-1">{it.desc}</p>
                  </div>
                  <div className="font-display text-3xl text-primary whitespace-nowrap">{it.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-foreground text-background p-10 text-center border-2 border-foreground shadow-pop-red">
          <p className="font-serif italic text-accent text-xl">Walk-in only · No reservations</p>
          <h3 className="mt-2 font-display text-5xl md:text-6xl">COME ON OVER</h3>
          <p className="mt-4 text-background/80">155 W Houston St · Open 11AM — 10PM daily</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a href="https://www.google.com/maps?q=155+W+Houston+St+New+York" target="_blank" rel="noopener noreferrer"
              className="rounded-md bg-primary text-primary-foreground px-7 py-3 font-display text-xl tracking-wide border-2 border-background hover:bg-accent hover:text-accent-foreground transition-colors">
              Get Directions
            </a>
            <Link to="/contact"
              className="rounded-md bg-background text-foreground px-7 py-3 font-display text-xl tracking-wide border-2 border-background hover:bg-accent transition-colors">
              Visit Page
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

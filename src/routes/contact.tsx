import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit — Hamburger America · 155 W Houston St NYC" },
      { name: "description", content: "Open daily 11AM — 10PM at 155 W Houston St, New York. Walk-in counter. No reservations." },
      { property: "og:title", content: "Visit Hamburger America" },
      { property: "og:description", content: "155 W Houston St, NYC. Open daily 11AM — 10PM." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const hours = [
    ["Sun", "11:00 AM — 10:00 PM"],
    ["Mon", "11:00 AM — 10:00 PM"],
    ["Tue", "11:00 AM — 10:00 PM"],
    ["Wed", "11:00 AM — 10:00 PM"],
    ["Thu", "11:00 AM — 11:00 PM"],
    ["Fri", "11:00 AM — 12:00 AM"],
    ["Sat", "11:00 AM — 12:00 AM"],
  ];
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b-2 border-foreground">
        <div className="container mx-auto px-5 py-20">
          <p className="font-serif italic text-primary text-xl">West Village, NYC</p>
          <h1 className="mt-2 font-display text-7xl md:text-9xl leading-[0.85]">
            COME ON <span className="text-primary">IN.</span>
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-5 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-background border-2 border-foreground p-8 md:p-10 shadow-pop">
          <h2 className="font-display text-4xl mb-6">DETAILS</h2>
          <dl className="space-y-5">
            <div>
              <dt className="font-serif italic text-primary text-base mb-1">Address</dt>
              <dd className="text-lg">155 W Houston St, New York, NY 10012</dd>
            </div>
            <div>
              <dt className="font-serif italic text-primary text-base mb-1">Phone</dt>
              <dd className="text-lg"><a href="tel:+12125551234" className="hover:text-primary border-b-2 border-transparent hover:border-primary">(212) 555-1234</a></dd>
            </div>
            <div>
              <dt className="font-serif italic text-primary text-base mb-1">Reservations</dt>
              <dd className="text-lg">Walk-in counter only. No reservations.</dd>
            </div>
            <div>
              <dt className="font-serif italic text-primary text-base mb-1">Delivery</dt>
              <dd className="text-lg">DoorDash · Uber Eats · Caviar</dd>
            </div>
            <div>
              <dt className="font-serif italic text-primary text-base mb-1">Follow</dt>
              <dd className="text-lg"><a href="https://www.instagram.com/hamburgeramerica" target="_blank" rel="noopener noreferrer" className="hover:text-primary border-b-2 border-transparent hover:border-primary">@hamburgeramerica</a></dd>
            </div>
          </dl>
        </div>

        <div className="bg-foreground text-background border-2 border-foreground p-8 md:p-10 shadow-pop-red">
          <h2 className="font-display text-4xl mb-6 text-accent">HOURS</h2>
          <ul className="divide-y divide-background/20">
            {hours.map(([d, h]) => (
              <li key={d} className="flex items-center justify-between py-3">
                <span className="font-display text-2xl tracking-wide">{d}</span>
                <span className="text-background/80">{h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-serif italic text-sm text-background/60">Holiday hours may vary — check our Instagram.</p>
        </div>
      </section>

      <section className="container mx-auto px-5 pb-20">
        <div className="overflow-hidden border-2 border-foreground h-[420px] shadow-pop">
          <iframe
            title="Hamburger America map"
            src="https://www.google.com/maps?q=155+W+Houston+St+New+York+NY&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

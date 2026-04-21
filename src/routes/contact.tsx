import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "צור קשר — עלינא בפיתה רוטשילד 104 ראשון לציון" },
      { name: "description", content: "רוטשילד 104 ראשון לציון. טלפון 03-622-8055. פתוח כל יום מ־13:00 עד חצות." },
      { property: "og:title", content: "צור קשר — עלינא" },
      { property: "og:description", content: "איפה אנחנו, מתי פתוח ואיך מזמינים." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const hours = [
    ["ראשון", "13:00 — 00:00"],
    ["שני", "13:00 — 00:00"],
    ["שלישי", "13:00 — 00:00"],
    ["רביעי", "13:00 — 00:00"],
    ["חמישי", "13:00 — 01:00"],
    ["שישי", "12:00 — שעה לפני שבת"],
    ["שבת", "צאת השבת — 01:00"],
  ];
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container mx-auto px-5 pt-20 pb-10">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">צור קשר</p>
        <h1 className="font-display text-5xl md:text-7xl font-black">בואו <span className="text-gradient-ember">לבקר</span></h1>
      </section>

      <section className="container mx-auto px-5 pb-20 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <h2 className="font-display text-3xl font-black mb-6">פרטים</h2>
          <dl className="space-y-5">
            <div>
              <dt className="text-sm font-bold tracking-widest uppercase text-accent mb-1">כתובת</dt>
              <dd className="text-lg">רוטשילד 104, ראשון לציון</dd>
            </div>
            <div>
              <dt className="text-sm font-bold tracking-widest uppercase text-accent mb-1">טלפון</dt>
              <dd className="text-lg"><a href="tel:036228055" className="hover:text-primary">03-622-8055</a></dd>
            </div>
            <div>
              <dt className="text-sm font-bold tracking-widest uppercase text-accent mb-1">הזמנת מקום</dt>
              <dd><a href="https://ontopo.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary">דרך אונטופו ←</a></dd>
            </div>
            <div>
              <dt className="text-sm font-bold tracking-widest uppercase text-accent mb-1">משלוחים</dt>
              <dd className="text-lg">תן ביס · Wolt · משלוחה</dd>
            </div>
            <div>
              <dt className="text-sm font-bold tracking-widest uppercase text-accent mb-1">עקבו אחרינו</dt>
              <dd><a href="https://www.instagram.com/alena.hamara" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary">@alena.hamara</a></dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <h2 className="font-display text-3xl font-black mb-6">שעות פתיחה</h2>
          <ul className="divide-y divide-border/60">
            {hours.map(([d, h]) => (
              <li key={d} className="flex items-center justify-between py-3">
                <span className="font-bold">{d}</span>
                <span className="text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground italic">ייתכנו שינויים בחגים — מומלץ להתקשר.</p>
        </div>
      </section>

      <section className="container mx-auto px-5 pb-20">
        <div className="overflow-hidden rounded-3xl border border-border h-[420px]">
          <iframe
            title="מפת עלינא ראשון לציון"
            src="https://www.google.com/maps?q=רוטשילד+104+ראשון+לציון&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

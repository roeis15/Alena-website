import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "אירועים פרטיים — עלינא בפיתה ראשון לציון" },
      { name: "description", content: "ימי הולדת, מסיבות רווקות, ערבי חברה ואירועי חברה. עלינא מארחת אתכם בראשון לציון." },
      { property: "og:title", content: "אירועים פרטיים בעלינא" },
      { property: "og:description", content: "סוגרים את המקום, מארחים בסטייל ים תיכוני." },
    ],
  }),
  component: Events,
});

function Events() {
  const packages = [
    { name: "שולחן חברים", count: "10—20 אורחים", desc: "שולחן ארוך באמצע המקום, תפריט שיירינג עשיר ובר פתוח לפי הזמנה.", price: "החל מ־150 ₪ לאדם" },
    { name: "סגירת המקום", count: "30—70 אורחים", desc: "כל החמארה לכם. תפריט מותאם אישית, בר מלא ודיג'יי.", price: "חבילות אישיות" },
    { name: "אירוח עסקי", count: "עד 25 אנשים", desc: "ארוחות צוות, השקות וערבי לקוחות. אווירה רגועה עם אוכל מעולה.", price: "תפריט קבוע" },
  ];
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container mx-auto px-5 pt-20 pb-10">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">אירועים פרטיים</p>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95]">
          חוגגים אצלנו.
          <br />
          <span className="text-gradient-ember">דואגים לכל השאר.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          ימי הולדת, מסיבות רווקות, ערבי חברה, השקות וכל סיבה לחגוג. צוות עלינא בונה אתכם תפריט, בוחר את הבר ודואג לאווירה.
        </p>
      </section>

      <section className="container mx-auto px-5 py-14 grid md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <div key={p.name} className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors">
            <div className="text-xs font-bold tracking-widest uppercase text-accent">{p.count}</div>
            <h3 className="mt-2 font-display text-3xl font-black">{p.name}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-6 font-display text-xl font-black text-primary">{p.price}</div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-5 py-10">
        <div className="rounded-3xl bg-gradient-ember p-10 md:p-14 text-center shadow-ember">
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary-foreground">מתכננים אירוע?</h2>
          <p className="mt-3 text-lg text-primary-foreground/90 max-w-xl mx-auto">חייגו אלינו ונבנה לכם חוויה מותאמת אישית.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="tel:036228055" className="rounded-full bg-charcoal text-cream px-8 py-4 font-bold">03-622-8055</a>
            <a href="mailto:events@alenabepita.co.il" className="rounded-full border-2 border-charcoal text-charcoal px-8 py-4 font-bold hover:bg-charcoal hover:text-cream transition-colors">events@alenabepita.co.il</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

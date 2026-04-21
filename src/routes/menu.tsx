import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "התפריט — עלינא בפיתה ראשון לציון" },
      { name: "description", content: "פיתות פחמים, מנות שיירינג, סלטים, ערק וקוקטיילים. התפריט המלא של עלינא בראשון לציון." },
      { property: "og:title", content: "התפריט של עלינא בפיתה" },
      { property: "og:description", content: "פיתות פחמים, מנות שיירינג ובר ים תיכוני." },
    ],
  }),
  component: Menu,
});

const sections = [
  {
    title: "פיתות הפחמים",
    note: "כל הפיתות מגיעות עם סלט משוואיה, תפו״א קריספי, חמוצים וטחינה",
    items: [
      { name: "פיתת קבב טלה ובקר", desc: "טחון טרי, מתובל בידיים, נצרב על הגחלים", price: "59" },
      { name: "פיתת פרגית", desc: "חזה עוף עסיסי בתבלינים סודיים", price: "55" },
      { name: "פיתת אסאדו", desc: "אסאדו במרינדה, מתפרק בפה", price: "69" },
      { name: "פיתת אנטריקוט", desc: "פרוס דק, מלוח קל, על האש", price: "75" },
      { name: "פיתת מרגז ביתי", desc: "נקניקיית כבש חריפה במזיד", price: "55" },
      { name: "פיתת ירקות שרופים", desc: "טבעוני · חציל, פלפל, עגבנייה ועוד", price: "45" },
    ],
  },
  {
    title: "מנות לחלוק",
    note: "להזמין באמצע ולחלוק עם כולם",
    items: [
      { name: "מזה עלינא", desc: "8 סלטים, חומוס, טחינה, חצילים שרופים", price: "78" },
      { name: "כבד עוף על הפלנצ'ה", desc: "עם בצל מקורמל ופטרוזיליה", price: "52" },
      { name: "ארטישוק על הגריל", desc: "עם איולי לימון", price: "48" },
      { name: "צ'יפס בית", desc: "פריך מבחוץ, רך מבפנים, עם איולי שום", price: "32" },
      { name: "פלטת בשרים מעורבת", desc: "לשניים — קבב, פרגית, אסאדו, מרגז", price: "169" },
    ],
  },
  {
    title: "מהבר",
    note: "ערק, קוקטיילים, בירות קרות",
    items: [
      { name: "ערק נענע", desc: "הקלאסיקה של עלינא", price: "28" },
      { name: "ערמוני אררט", desc: "ערק, רימון, נענע, לימון", price: "42" },
      { name: "אספרסו מרטיני", desc: "וודקה, קליואה, אספרסו", price: "44" },
      { name: "בירה גולדסטאר חבית", desc: "שליש / חצי", price: "24 / 32" },
      { name: "יין הבית", desc: "כוס · אדום או לבן", price: "32" },
    ],
  },
];

function Menu() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container mx-auto px-5 pt-20 pb-10">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">התפריט</p>
        <h1 className="font-display text-5xl md:text-7xl font-black">מהפחמים <span className="text-gradient-ember">לפיתה</span></h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          בחרנו לעבוד עם בשרים טריים, תבלינים אמיתיים ופחמים בוערות. כל מה שיוצא מהמטבח שלנו עובר באש לפני שהוא מגיע אליכם.
        </p>
      </section>

      <section className="container mx-auto px-5 pb-20 space-y-16">
        {sections.map((s) => (
          <div key={s.title}>
            <div className="flex items-end justify-between flex-wrap gap-2 mb-2 border-b border-border pb-4">
              <h2 className="font-display text-3xl md:text-5xl font-black">{s.title}</h2>
              <p className="text-sm text-muted-foreground italic">{s.note}</p>
            </div>
            <div className="divide-y divide-border/60">
              {s.items.map((it) => (
                <div key={it.name} className="flex items-baseline gap-4 py-5">
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold">{it.name}</h3>
                    <p className="text-muted-foreground mt-1">{it.desc}</p>
                  </div>
                  <div className="font-display text-2xl font-black text-primary whitespace-nowrap">₪{it.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl bg-card border border-border p-7 text-center">
          <p className="text-muted-foreground">המחירים יכולים להשתנות. כשר בשרי בהשגחת הרבנות ראשון לציון.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="https://ontopo.com" target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-gradient-ember px-7 py-3 font-bold text-primary-foreground shadow-ember">
              הזמינו שולחן
            </a>
            <a href="https://www.mishloha.co.il" target="_blank" rel="noopener noreferrer"
              className="rounded-full border-2 border-border px-7 py-3 font-bold hover:bg-card transition-colors">
              משלוח / איסוף
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-grill.jpg";
import pitaImg from "@/assets/pita.jpg";
import mezzeImg from "@/assets/mezze.jpg";
import barImg from "@/assets/bar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "עלינא בפיתה — חמארה ים תיכונית בראשון לציון" },
      { name: "description", content: "החמארה הראשונה בראשלצ. בשרים על הפחמים, ערק, אווירה שמחה. רוטשילד 104." },
      { property: "og:title", content: "עלינא בפיתה — חמארה בראשון לציון" },
      { property: "og:description", content: "אוכל רחוב על טהרת הפחמים, ערק ואווירה ים תיכונית." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Strip />
      <Highlights />
      <Signature />
      <BarSection />
      <Reviews />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden">
      <img src={heroImg} alt="גריל פחמים בעלינא" width={1600} height={1100}
        className="absolute inset-0 h-full w-full object-cover animate-flicker" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="container mx-auto px-5 pb-20 md:pb-28 relative z-10">
        <div className="max-w-3xl animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 backdrop-blur px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-primary">
            ✦ החמארה הראשונה בראשון לציון
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95]">
            על הפחמים.
            <br />
            <span className="text-gradient-ember">על הכיף.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-xl leading-relaxed">
            בשר טרי על הגחלים, ערק עממי, מנות שיירינג שכיף לחלוק ובר רחוב שלא נגמר. ברוכים הבאים לעלינא.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="https://ontopo.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-ember px-8 py-4 font-bold text-primary-foreground shadow-ember hover:scale-105 transition-transform">
              הזמינו שולחן
            </a>
            <Link to="/menu"
              className="inline-flex items-center justify-center rounded-full border-2 border-cream/30 bg-background/40 backdrop-blur px-8 py-4 font-bold text-cream hover:bg-cream hover:text-charcoal transition-colors">
              לתפריט המלא →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Strip() {
  const items = ["פחמים אמיתיים", "ערק עממי", "כשר בשרי", "אווירה ראשלצית", "פתוח עד חצות"];
  return (
    <div className="border-y border-border bg-card/30 overflow-hidden">
      <div className="container mx-auto px-5 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm font-bold tracking-wider uppercase text-muted-foreground">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="text-primary">●</span>{t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Highlights() {
  const cards = [
    { img: pitaImg, kicker: "החתימה שלנו", title: "פיתות הפחמים", text: "פיתה לוהטת מהתנור, בשר טרי על האש, סלט משוואיה, צ'יפס פריך וחמוצים. חוויה אחת קטנה ומושלמת." },
    { img: mezzeImg, kicker: "לחלוק", title: "מנות שיירינג", text: "סלטים, מטבלים, מנות פתיחה ואקסטרות שמגיעות לשולחן וכולם יושבים, אוכלים ונהנים יחד." },
    { img: barImg, kicker: "אחרי 19:00", title: "בר עם הפנים לרחוב", text: "ערק, קוקטיילים, בירה קרה ומוזיקה שמחה. תפריט ערב מלא ובר עד שעות הקטנות." },
  ];
  return (
    <section className="container mx-auto px-5 py-24">
      <div className="mb-14 max-w-2xl">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">מה יש אצלנו</p>
        <h2 className="font-display text-4xl md:text-6xl font-black">שלושה דברים שעושים <span className="text-gradient-ember">עלינא</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <article key={i} className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card-warm hover:border-primary/50 transition-all">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={c.img} alt={c.title} loading="lazy" width={1200} height={1200}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-7">
              <span className="text-xs font-bold tracking-widest uppercase text-accent">{c.kicker}</span>
              <h3 className="mt-2 font-display text-2xl font-extrabold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-5 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">המנה החתומה</p>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95]">פיתת הקבב</h2>
          <p className="mt-2 text-3xl md:text-4xl text-accent font-display">מהפחמים ישר אליכם</p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
            בשר טחון טרי, מתובל בידיים, נצרב על האש מעל גחלים בוערות ונמסר לפיתה רכה עם סלט משוואיה, תפו"א פריך, חמוצים ושני סוגי טחינה.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div>
              <div className="font-display text-3xl font-black text-primary">100%</div>
              <div className="text-muted-foreground">בשר טרי</div>
            </div>
            <div>
              <div className="font-display text-3xl font-black text-primary">15 דק׳</div>
              <div className="text-muted-foreground">זמן הכנה</div>
            </div>
            <div>
              <div className="font-display text-3xl font-black text-primary">★ 4.4</div>
              <div className="text-muted-foreground">תן ביס</div>
            </div>
          </div>
          <Link to="/menu" className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all">
            צפו בכל הפיתות ←
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-ember opacity-20 blur-3xl rounded-full" />
          <img src={pitaImg} alt="פיתת קבב" loading="lazy" width={1200} height={1200}
            className="relative rounded-3xl shadow-ember w-full" />
        </div>
      </div>
    </section>
  );
}

function BarSection() {
  return (
    <section className="relative">
      <div className="container mx-auto px-5">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={barImg} alt="בר עלינא" loading="lazy" width={1200} height={1200}
            className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-charcoal via-charcoal/70 to-transparent" />
          <div className="relative p-10 md:p-20 max-w-xl">
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">אחרי השקיעה</p>
            <h2 className="font-display text-4xl md:text-5xl font-black">הבר נדלק</h2>
            <p className="mt-4 text-lg text-cream/80 leading-relaxed">
              ערק עם נענע, קוקטיילים מעולים, מוזיקה שמחה ושולחנות בחוץ. עלינא הופכת בערב לבר רחוב אמיתי בלב רוטשילד.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="https://ontopo.com" target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-cream text-charcoal px-6 py-3 font-bold hover:bg-accent transition-colors">
                שמרו מקום בערב
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { stars: 5, text: "המקום הכי שמח ברוטשילד. הקבב על הפחמים שווה כל דקה של נסיעה.", who: "דניאל ר.", src: "Google" },
    { stars: 5, text: "ערק טוב, אוכל מצוין, ואווירה ראשלצית אמיתית. חוזרים בכל שבוע.", who: "שירי כ.", src: "תן ביס" },
    { stars: 4, text: "הפיתות פצצה. הצוות חמוד והאוכל יוצא מהר. ממליצה בחום.", who: "אבי מ.", src: "Google" },
  ];
  return (
    <section className="container mx-auto px-5 py-24">
      <div className="text-center mb-14">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">מה הלקוחות אומרים</p>
        <h2 className="font-display text-4xl md:text-6xl font-black">★ 4.2 על 480 ביקורות</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-colors">
            <div className="text-accent text-lg mb-3">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
            <p className="text-foreground leading-relaxed">"{r.text}"</p>
            <div className="mt-5 text-sm text-muted-foreground">— {r.who} · {r.src}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="container mx-auto px-5">
      <div className="rounded-3xl bg-gradient-ember p-10 md:p-16 text-center shadow-ember">
        <h2 className="font-display text-4xl md:text-6xl font-black text-primary-foreground">בואו לאכול אצלנו</h2>
        <p className="mt-4 text-lg text-primary-foreground/90 max-w-xl mx-auto">
          רוטשילד 104, ראשון לציון · פתוח כל יום מ־13:00. ישיבה בחוץ, חניה בסביבה, אווירה תמיד.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://ontopo.com" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-charcoal text-cream px-8 py-4 font-bold hover:bg-charcoal/80 transition-colors">
            הזמנת שולחן
          </a>
          <a href="tel:036228055"
            className="rounded-full border-2 border-charcoal text-charcoal px-8 py-4 font-bold hover:bg-charcoal hover:text-cream transition-colors">
            03-622-8055
          </a>
        </div>
      </div>
    </section>
  );
}

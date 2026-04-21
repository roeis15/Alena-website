import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import mezzeImg from "@/assets/mezze.jpg";
import heroImg from "@/assets/hero-grill.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "עלינא — הסיפור שלנו | ראשון לציון" },
      { name: "description", content: "החמארה הראשונה בראשון לציון. בשרים על הפחמים, ערק ואווירה ים תיכונית בלב רוטשילד." },
      { property: "og:title", content: "הסיפור של עלינא בפיתה" },
      { property: "og:description", content: "חמארה ים תיכונית בראשלצ — הסיפור, האנשים והאוכל." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container mx-auto px-5 pt-20 pb-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">הסיפור שלנו</p>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95]">
            התחלנו כדוכן.
            <br />
            <span className="text-gradient-ember">נשארנו שכונה.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            עלינא נולדה כדוכן פיתות קטן בראשון לציון, עם פלנצ'ה אחת ותנור פחמים לוהט. רצינו להחזיר לרחוב את הטעם של פעם — בשר אמיתי, פיתה רכה, סלטים שעושים בידיים והרבה אהבה.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            היום אנחנו ברוטשילד 104, במקום חדש שמשלב חמארה אותנטית, בר רחוב שמח ומטבח פתוח שלא נח. אבל בלב — אנחנו עדיין אותו דוכן.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-ember opacity-25 blur-3xl rounded-full" />
          <img src={heroImg} alt="עלינא" loading="lazy" width={1600} height={1100}
            className="relative rounded-3xl shadow-ember w-full" />
        </div>
      </section>

      <section className="container mx-auto px-5 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "פחמים אמיתיים", text: "אש פתוחה, גחלים בוערות וזמן. ככה צריך לצלות בשר." },
            { title: "תבלינים בידיים", text: "טוחנים, מערבבים ומתבלים אצלנו במטבח. בלי קיצורי דרך." },
            { title: "שכונה ראשון", text: "אנחנו של ראשון לציון. הלקוחות שלנו הם השכנים שלנו." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-black text-primary">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-5 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={mezzeImg} alt="מזה עלינא" loading="lazy" width={1200} height={1200} className="rounded-3xl shadow-card-warm" />
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black">אוכל שמתחלק. <span className="text-gradient-ember">חוויה שלא נשכחת.</span></h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              אצלנו מזמינים באמצע, מחלקים, טועמים אחד מהצלחת של השני, מרימים כוסית ערק וצוחקים. זאת חמארה. ככה זה אצלנו.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

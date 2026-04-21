import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40 mt-24">
      <div className="container mx-auto px-5 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-ember text-primary-foreground font-black">ע</span>
            <span className="font-display text-2xl font-extrabold">עלינא <span className="text-primary">בפיתה</span></span>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            החמארה הראשונה בראשון לציון. אוכל רחוב על טהרת הפחמים, ערק עממי ואווירה ים תיכונית שמחה.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">כשר בשרי · בהשגחת הרבנות ראשון לציון</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-primary">ניווט</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="text-muted-foreground hover:text-foreground">התפריט</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">עלינא</Link></li>
            <li><Link to="/events" className="text-muted-foreground hover:text-foreground">אירועים</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">צור קשר</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-primary">פרטים</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>רוטשילד 104, ראשון לציון</li>
            <li><a href="tel:036228055" className="hover:text-foreground">03-622-8055</a></li>
            <li>פתוח 13:00 — 00:00</li>
            <li><a href="https://www.instagram.com/alena.hamara" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">אינסטגרם @alena.hamara</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} עלינא בפיתה · כל הזכויות שמורות
      </div>
    </footer>
  );
}

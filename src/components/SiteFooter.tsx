import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-background mt-24">
      <div className="container mx-auto px-5 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-2xl border-2 border-background">H</span>
            <div className="leading-none">
              <div className="font-display text-2xl tracking-wide text-background">HAMBURGER AMERICA</div>
              <div className="font-serif italic text-sm text-accent -mt-1">Classic smash burgers · NYC</div>
            </div>
          </div>
          <p className="text-background/70 max-w-md leading-relaxed">
            A love letter to the great American hamburger. Old recipes, fresh beef, hot griddles, and a soundtrack you'll like.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl text-accent mb-4 tracking-wider">VISIT</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li>155 W Houston St</li>
            <li>New York, NY 10012</li>
            <li>Open daily · 11AM — 10PM</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl text-accent mb-4 tracking-wider">EXPLORE</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="text-background/70 hover:text-accent">The Menu</Link></li>
            <li><Link to="/about" className="text-background/70 hover:text-accent">Our Story</Link></li>
            <li><Link to="/events" className="text-background/70 hover:text-accent">Catering</Link></li>
            <li><Link to="/contact" className="text-background/70 hover:text-accent">Find Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/20 py-5 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Hamburger America · Made with grease in NYC
      </div>
    </footer>
  );
}

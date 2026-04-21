import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "בית" },
  { to: "/menu", label: "תפריט" },
  { to: "/about", label: "עלינא" },
  { to: "/events", label: "אירועים" },
  { to: "/contact", label: "צור קשר" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-ember shadow-ember text-primary-foreground font-black text-lg">ע</span>
          <span className="font-display text-xl font-extrabold tracking-tight">עלינא <span className="text-primary">בפיתה</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-primary rounded-md" }}
              activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:036228055" className="text-sm font-semibold text-muted-foreground hover:text-foreground">03-622-8055</a>
          <a href="https://ontopo.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-ember px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-ember hover:scale-105 transition-transform">
            הזמנת מקום
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="תפריט">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground"></span>
            <span className="block h-0.5 w-6 bg-foreground"></span>
            <span className="block h-0.5 w-6 bg-foreground"></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 px-5 py-4 space-y-2">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="block py-2 font-semibold text-foreground">{l.label}</Link>
          ))}
          <a href="https://ontopo.com" target="_blank" rel="noopener noreferrer"
            className="block text-center mt-3 rounded-full bg-gradient-ember px-5 py-3 font-bold text-primary-foreground">
            הזמנת מקום
          </a>
        </div>
      )}
    </header>
  );
}

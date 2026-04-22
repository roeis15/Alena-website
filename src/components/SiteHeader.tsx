import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/events", label: "Catering" },
  { to: "/contact", label: "Visit" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b-2 border-foreground">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-2xl border-2 border-foreground shadow-pop">H</span>
          <div className="leading-none">
            <div className="font-display text-2xl tracking-wide">HAMBURGER</div>
            <div className="font-serif italic text-sm text-primary -mt-1">America · est. NYC</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className="px-4 py-2 font-display text-lg tracking-wider text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "px-4 py-2 font-display text-lg tracking-wider text-primary underline decoration-2 underline-offset-8" }}
              activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.google.com/maps?q=155+W+Houston+St+New+York" target="_blank" rel="noopener noreferrer"
            className="font-display text-base tracking-wide text-foreground hover:text-primary">
            155 W HOUSTON
          </a>
          <a href="/menu"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 font-display text-lg tracking-wide text-primary-foreground border-2 border-foreground shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
            Order Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground"></span>
            <span className="block h-0.5 w-6 bg-foreground"></span>
            <span className="block h-0.5 w-6 bg-foreground"></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t-2 border-foreground bg-background px-5 py-4 space-y-2">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="block py-2 font-display text-2xl tracking-wide text-foreground">{l.label}</Link>
          ))}
          <a href="/menu" onClick={() => setOpen(false)}
            className="block text-center mt-3 rounded-md bg-primary px-5 py-3 font-display text-xl tracking-wide text-primary-foreground border-2 border-foreground shadow-pop">
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}

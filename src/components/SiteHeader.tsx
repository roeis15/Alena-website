import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Início" },
    { to: "/menu", label: "Cardápio" },
    { to: "/about", label: "Sobre" },
    { to: "/events", label: "Eventos" },
    { to: "/contact", label: "Contato" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto px-5 h-18 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-jungle font-display text-2xl text-primary-foreground shadow-glow-lime group-hover:scale-110 transition-transform">
            B
          </span>
          <div className="leading-none">
            <div className="font-display text-xl tracking-tight text-foreground">BRAZILIAN</div>
            <div className="font-serif text-sm text-primary -mt-1">hamburgueria</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              activeProps={{ className: "px-4 py-2 rounded-full font-medium text-sm text-primary-foreground bg-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5511956534487"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-sm tracking-wide text-primary-foreground shadow-glow-lime hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" /> Pedir agora
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-foreground"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="container mx-auto px-5 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl font-medium text-foreground hover:bg-secondary"
                activeProps={{ className: "px-4 py-3 rounded-xl font-medium text-primary-foreground bg-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5511956534487"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-display text-base text-primary-foreground"
            >
              <Phone className="w-4 h-4" /> WhatsApp pedido
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

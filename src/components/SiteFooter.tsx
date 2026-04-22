import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background mt-24 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />
      <div className="container mx-auto px-5 py-16 grid gap-10 md:grid-cols-4 relative">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-jungle font-display text-2xl text-primary-foreground shadow-glow-lime">B</span>
            <div className="leading-none">
              <div className="font-display text-2xl tracking-tight text-foreground">BRAZILIAN HAMBURGUERIA</div>
              <div className="font-serif text-base text-primary -mt-1">smash burgers · São Paulo</div>
            </div>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Carne fresca, queijo derretido na chapa, pão brioche e drinks gelados. A noite começa às 18h — vem com fome.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/5511956534487" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <Link to="/contact" aria-label="Map"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <MapPin className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary mb-4">VISITE</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>São Paulo, SP</li>
            <li>Aberto · 18h — 00h</li>
            <li>+55 11 95653-4487</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary mb-4">EXPLORE</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="text-muted-foreground hover:text-primary">Cardápio</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">Nossa história</Link></li>
            <li><Link to="/events" className="text-muted-foreground hover:text-primary">Eventos</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contato</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Brazilian Hamburgueria · Feito com fogo no Brasil 🔥
      </div>
    </footer>
  );
}

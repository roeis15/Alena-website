import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-9xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-3xl text-foreground">Esta página saiu do cardápio</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist. Let's get you back to the burgers.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-display text-lg tracking-wide text-primary-foreground shadow-glow-lime transition-transform hover:scale-105"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Brazilian Hamburgueria — Smash Burgers & Vibe São Paulo Style" },
      { name: "description", content: "Hamburgueria brasileira com smash burgers suculentos, fritas crocantes e drinks gelados. Aberto a partir das 18h." },
      { name: "author", content: "Brazilian Hamburgueria" },
      { property: "og:title", content: "Brazilian Hamburgueria — Smash Burgers São Paulo Style" },
      { property: "og:description", content: "Hamburgueria brasileira com smash burgers suculentos, fritas crocantes e drinks gelados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Brazilian Hamburgueria — Smash Burgers São Paulo Style" },
      { name: "twitter:description", content: "Hamburgueria brasileira com smash burgers suculentos." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Caveat:wght@500;700&family=Sora:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

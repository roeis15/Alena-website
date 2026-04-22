import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-9xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-3xl text-foreground">This page is off the menu</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist — or moved to a different counter.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-display text-lg tracking-wide text-primary-foreground shadow-pop transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            Back to the diner
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
      { title: "Hamburger America — Classic Smash Burgers in NYC" },
      { name: "description", content: "Old-school American burgers, fried-onion smashes, shoestring fries and key lime pie. 155 W Houston St, NYC." },
      { name: "author", content: "Hamburger America" },
      { property: "og:title", content: "Hamburger America — Classic Smash Burgers in NYC" },
      { property: "og:description", content: "Old-school American burgers, fried-onion smashes, shoestring fries and key lime pie. 155 W Houston St, NYC." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hamburger America — Classic Smash Burgers in NYC" },
      { name: "twitter:description", content: "Old-school American burgers in the heart of the West Village." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;700&display=swap",
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

import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">הדף לא נמצא</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          הדף שחיפשתם לא קיים או הועבר.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            חזרה לדף הבית
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
      { title: "עלינא בפיתה — חמארה ים תיכונית בראשון לציון" },
      { name: "description", content: "החמארה הראשונה בראשון לציון. בשרים על הפחמים, ערק, אווירה ים תיכונית. רוטשילד 104." },
      { name: "author", content: "עלינא" },
      { property: "og:title", content: "עלינא בפיתה — חמארה ים תיכונית בראשון לציון" },
      { property: "og:description", content: "החמארה הראשונה בראשון לציון. בשרים על הפחמים, ערק, אווירה ים תיכונית. רוטשילד 104." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "עלינא בפיתה — חמארה ים תיכונית בראשון לציון" },
      { name: "twitter:description", content: "החמארה הראשונה בראשון לציון. בשרים על הפחמים, ערק, אווירה ים תיכונית. רוטשילד 104." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4a79d990-fb13-48c7-bf29-2d99ff0e3d09/id-preview-0f703df0--6986b874-887d-47ff-b183-5ef18d897294.lovable.app-1776780950036.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4a79d990-fb13-48c7-bf29-2d99ff0e3d09/id-preview-0f703df0--6986b874-887d-47ff-b183-5ef18d897294.lovable.app-1776780950036.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@400;700;800;900&family=Assistant:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
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

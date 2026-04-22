import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import burgerImg from "@/assets/br-burger.jpg";
import friesImg from "@/assets/br-fries.jpg";
import drinkImg from "@/assets/br-drink.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Cardápio — Brazilian Hamburgueria" },
      { name: "description", content: "Smash burgers, fritas crocantes, drinks autorais. Veja o cardápio completo da Brazilian Hamburgueria." },
      { property: "og:title", content: "Cardápio — Brazilian Hamburgueria" },
      { property: "og:description", content: "Smash burgers, fritas crocantes, drinks autorais." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; tag?: string };

const burgers: Item[] = [
  { name: "Brasileirão", desc: "Dois patties smash 80g, cheddar duplo, bacon crispy, cebola caramelizada, pão brioche.", price: "R$ 38", tag: "TOP" },
  { name: "X-Tudo SP", desc: "Carne, queijo, presunto, ovo, milho, batata palha, alface, tomate, maionese da casa.", price: "R$ 42" },
  { name: "Smash Clássico", desc: "Patty smash 120g, queijo cheddar, picles, mostarda dijon, pão brioche.", price: "R$ 28" },
  { name: "Bacon Lover", desc: "Patty 120g, cheddar, bacon triplo, geleia de bacon, cebola roxa.", price: "R$ 36", tag: "PICANTE" },
  { name: "Veggie Brasil", desc: "Patty de feijão preto e mandioca, queijo coalho, vinagrete, pão de fermentação natural.", price: "R$ 32" },
  { name: "Truffle Smash", desc: "Patty smash 120g, queijo gruyère, cogumelos paris, maionese trufada.", price: "R$ 44" },
];

const sides: Item[] = [
  { name: "Fritas crocantes", desc: "Cortadas na hora, fritas duas vezes, sal grosso, chimichurri da casa.", price: "R$ 22" },
  { name: "Fritas trufadas", desc: "Mesmas fritas, com queijo parmesão e óleo de trufa.", price: "R$ 32", tag: "TOP" },
  { name: "Onion rings", desc: "Cebola empanada na cerveja, molho de mostarda e mel.", price: "R$ 24" },
  { name: "Mandioca frita", desc: "Mandioca cremosa por dentro, crocante por fora. Com aioli de alho.", price: "R$ 20" },
];

const drinks: Item[] = [
  { name: "Caipirinha", desc: "Cachaça artesanal, limão tahiti, açúcar mascavo.", price: "R$ 24", tag: "TOP" },
  { name: "Caipiroska de maracujá", desc: "Vodka, polpa de maracujá fresco, açúcar.", price: "R$ 26" },
  { name: "Chopp Brahma", desc: "300ml, gelado direto na pressão.", price: "R$ 12" },
  { name: "Guaraná Antarctica", desc: "350ml, lata gelada.", price: "R$ 8" },
  { name: "Suco de maracujá", desc: "Natural, sem açúcar adicionado.", price: "R$ 14" },
];

function MenuPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container mx-auto px-5 py-16 lg:py-24">
        <p className="font-serif text-primary text-2xl">o que rola por aqui</p>
        <h1 className="font-display text-7xl md:text-9xl text-foreground leading-[0.85]">
          O <span className="text-gradient-jungle">CARDÁPIO.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Tudo feito na hora, com ingredientes frescos. Carne moída todo dia, pão recebido da padaria do bairro pela manhã, molhos da casa.
        </p>
      </section>

      <Section title="HAMBÚRGUERES" subtitle="da chapa quente" items={burgers} img={burgerImg} />
      <Section title="ACOMPANHAMENTOS" subtitle="o lado bom da vida" items={sides} img={friesImg} reverse />
      <Section title="DRINKS & BEBIDAS" subtitle="pra acompanhar" items={drinks} img={drinkImg} />

      <SiteFooter />
    </div>
  );
}

function Section({ title, subtitle, items, img, reverse = false }: { title: string; subtitle: string; items: Item[]; img: string; reverse?: boolean }) {
  return (
    <section className="border-t border-border">
      <div className={`container mx-auto px-5 py-20 grid lg:grid-cols-12 gap-10 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-soft">
              <img src={img} alt={title} loading="lazy" width={1200} height={1200}
                className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-serif text-primary text-xl">{subtitle}</p>
                <h2 className="font-display text-5xl text-foreground">{title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {items.map((it, i) => (
            <article key={i} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl text-foreground">{it.name}</h3>
                    {it.tag && <span className="bg-flame text-background px-2 py-0.5 rounded-full font-display text-xs tracking-wider">{it.tag}</span>}
                  </div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
                <div className="font-display text-2xl text-primary whitespace-nowrap">{it.price}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

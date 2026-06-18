import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand strategy, digital marketing, web development, SEO, AI SaaS and creative design — engineered for measurable growth.",
  openGraph: {
    title: "Services — StratGrove",
    description: "Six practices, one growth system. Explore StratGrove's services.",
  },
};

const services = [
  { n: "01", title: "Brand Strategy & Marketing", body: "Positioning, narrative architecture, go-to-market playbooks." },
  { n: "02", title: "Digital Marketing", body: "Full-funnel paid, organic and lifecycle across channels." },
  { n: "03", title: "Website Development", body: "Composable, edge-rendered sites built for Core Web Vitals." },
  { n: "04", title: "Search Engine Optimization", body: "Topical authority, programmatic SEO and AI-overview optimization." },
  { n: "05", title: "AI SaaS Solutions", body: "Custom AI products and internal copilots that compound team output." },
  { n: "06", title: "Creative & Design", body: "Identity systems, motion, and editorial design built for scale." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--sg-black)] text-[var(--sg-white)]">
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="font-display text-xl font-bold">
          Strat<span className="text-[var(--sg-green)]">Grove</span>
        </Link>
        <Link href="/" className="text-sm text-[var(--sg-white)]/70 hover:text-[var(--sg-yellow)]">
          ← Home
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--sg-yellow)]">
          [ Services ]
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
          Six practices.<br />
          <span className="text-[var(--sg-green)]">One growth system.</span>
        </h1>

        <div className="mt-20 grid gap-px bg-[var(--sg-white)]/10 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.n} className="bg-[var(--sg-black)] p-10 transition-colors hover:bg-[var(--sg-violet)]/10">
              <div className="font-mono text-xs text-[var(--sg-yellow)]">{s.n}</div>
              <h2 className="mt-4 font-display text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-[var(--sg-white)]/70">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

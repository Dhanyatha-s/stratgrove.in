import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work from StratGrove — brand systems, growth programs and AI products for category-defining teams.",
  openGraph: {
    title: "Portfolio — StratGrove",
    description: "Case studies and selected work from the StratGrove studio.",
  },
};

const work = [
  { client: "Northwind Labs", category: "AI SaaS · Brand", metric: "+312% pipeline" },
  { client: "Helio Energy", category: "Web · SEO", metric: "4.2× organic" },
  { client: "Forma Studios", category: "Brand · Identity", metric: "Cannes shortlist" },
  { client: "Quanta Health", category: "Performance", metric: "−47% CAC" },
];

export default function PortfolioPage() {
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
          [ Selected Work — 2024 / 2026 ]
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
          Strategy made <span className="text-[var(--sg-violet)]">visible.</span>
        </h1>

        <ul className="mt-20 divide-y divide-[var(--sg-white)]/10 border-y border-[var(--sg-white)]/10">
          {work.map((w) => (
            <li key={w.client} className="group flex flex-col gap-2 py-8 transition-colors hover:bg-[var(--sg-yellow)]/5 md:flex-row md:items-baseline md:justify-between md:gap-8 md:px-4">
              <div>
                <h2 className="font-display text-3xl font-semibold md:text-4xl">
                  {w.client}
                </h2>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[var(--sg-white)]/50">
                  {w.category}
                </p>
              </div>
              <div className="font-mono text-sm text-[var(--sg-green)]">{w.metric}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

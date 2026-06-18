import type { Metadata } from "next";
import Link from "next/link";
import { WordRoller } from "@/components/sg/WordRoller";

export const metadata: Metadata = {
  title: "About",
  description:
    "StratGrove is a strategy-led marketing agency engineering brand, digital and AI growth systems for ambitious teams in 2026.",
  openGraph: {
    title: "About — StratGrove",
    description:
      "Meet the studio behind Strategies for Growth — a hybrid of strategists, engineers and designers.",
  },
};

export default function AboutPage() {
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

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--sg-yellow)]">
          [ About — est. 2026 ]
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
          We design{" "}
          <WordRoller
            words={["strategy", "systems", "stories", "software"]}
            className="text-[var(--sg-green)]"
          />{" "}
          for the growth era.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[var(--sg-white)]/70">
          StratGrove is a hybrid studio of strategists, engineers, and creative
          technologists. We translate ambitious business goals into compounding
          marketing, product, and brand systems — measured in revenue, not
          impressions.
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[var(--sg-yellow)]">
              Our Practice
            </h2>
            <p className="mt-4 text-[var(--sg-white)]/70">
              Strategy first. Then the work. Every engagement starts with
              category and customer research and ends with a system the in-house
              team can run.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-[var(--sg-violet)]">
              Our Belief
            </h2>
            <p className="mt-4 text-[var(--sg-white)]/70">
              Growth is engineered, not stumbled into. The brands that compound
              in 2026 treat marketing like product — with iteration, telemetry,
              and craft.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

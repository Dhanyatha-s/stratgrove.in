import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with StratGrove. Brand, digital, web, SEO and AI SaaS engagements for ambitious teams.",
  openGraph: {
    title: "Contact — StratGrove",
    description: "Tell us about the work. We'll reply within one business day.",
  },
};

export default function ContactPage() {
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

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:px-12 md:py-32">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--sg-yellow)]">
            [ Contact ]
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
            Let's build the <span className="text-[var(--sg-green)]">next quarter.</span>
          </h1>
          <p className="mt-6 max-w-md text-[var(--sg-white)]/70">
            Tell us about the work, the timeline, and the metric that matters.
            We reply within one business day.
          </p>
        </div>

        <dl className="space-y-6 bg-[var(--sg-violet)]/15 p-8 backdrop-blur-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-[var(--sg-yellow)]">Email</dt>
            <dd className="mt-1 text-lg">
              <a href="mailto:stratgrove00@gmail.com" className="hover:text-[var(--sg-yellow)] hover:underline">
                stratgrove00@gmail.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-[var(--sg-yellow)]">Phone</dt>
            <dd className="mt-1 text-lg">
              <a href="tel:+919743652331" className="hover:text-[var(--sg-yellow)] hover:underline">
                +91 9743652331
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-[var(--sg-yellow)]">Studio</dt>
            <dd className="mt-1 text-lg">Deepanjali nagar, Bengaluru -560026</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-[var(--sg-yellow)]">WhatsApp</dt>
            <dd className="mt-1 text-lg">
              <a href="https://wa.me/919743652331" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--sg-yellow)] hover:underline">
                +91 9743652331
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}

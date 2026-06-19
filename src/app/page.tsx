"use client";

import { useEffect, useRef, useState } from "react";
import { StrataHero } from "@/components/sg/StrataHero";
import { Counter } from "@/components/sg/Counter";
import { WordRoller } from "@/components/sg/WordRoller";
import { PixelLogo } from "@/components/sg/PixelLogo";

const brandNorthwind = "/works/brand-northwind.jpg";
const digitalHelios = "/works/digital-helios.jpg";
const webAtlas = "/works/web-atlas.jpg";
const seoVerdant = "/works/seo-verdant.jpg";
const aiOndo = "/works/ai-ondo.jpg";
const designPioneer = "/works/design-pioneer.jpg";
const brandMode7 = "/works/brand-mode7.jpg";
const webQuanta = "/works/web-quanta.jpg";

const services = [
  {
    n: "01",
    title: "Brand Strategy & Marketing",
    body: "Positioning, narrative architecture and go-to-market playbooks built on category research — so the brand earns attention before the ad spend does.",
    tag: "Strategy",
  },
  {
    n: "02",
    title: "Digital Marketing",
    body: "Full-funnel paid, organic and lifecycle programs orchestrated across channels with attribution that survives a cookieless 2026.",
    tag: "Performance",
  },
  {
    n: "03",
    title: "Website Development",
    body: "Composable, edge-rendered sites in React and TanStack — built for Core Web Vitals, conversion and a five-year roadmap.",
    tag: "Build",
  },
  {
    n: "04",
    title: "Search Engine Optimization",
    body: "Topical authority, programmatic SEO and AI-overview optimization. We engineer the page, the schema and the link graph.",
    tag: "Reach",
  },
  {
    n: "05",
    title: "AI SaaS Integration",
    body: "Custom agents, RAG pipelines and workflow automation glued into your stack — measured against revenue, not novelty.",
    tag: "Systems",
  },
  {
    n: "06",
    title: "Creative Design Solutions",
    body: "Identity systems, motion, 3D and editorial campaigns — design as a competitive moat, not a deliverable.",
    tag: "Craft",
  },
];

const works = [
  { cat: "Brand", title: "Northwind Rebrand", color: "var(--sg-green)", img: brandNorthwind },
  { cat: "Digital", title: "Helios Performance", color: "var(--sg-yellow)", img: digitalHelios },
  { cat: "Web", title: "Atlas Commerce", color: "var(--sg-violet)", img: webAtlas },
  { cat: "SEO", title: "Verdant Scale", color: "var(--sg-green)", img: seoVerdant },
  { cat: "AI", title: "Ondo Copilot", color: "var(--sg-violet)", img: aiOndo },
  { cat: "Design", title: "Pioneer Studio", color: "var(--sg-yellow)", img: designPioneer },
  { cat: "Brand", title: "Mode 7 Launch", color: "var(--sg-black)", img: brandMode7 },
  { cat: "Web", title: "Quanta Portal", color: "var(--sg-green)", img: webQuanta },
];

export default function Page() {
  return (
    <div className="min-h-dvh bg-background font-display text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <PixelLogo />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
            StratGrove<span className="text-[var(--sg-violet)]">®</span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {[
            ["Services", "#services"],
            ["Work", "#work"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="font-mono text-[11px] uppercase tracking-[0.18em] hover:text-[var(--sg-violet)]"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group relative hidden items-center gap-2 border border-black bg-[var(--sg-black)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--sg-white)] transition-colors hover:bg-[var(--sg-violet)] md:inline-flex"
        >
          Start a project
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative h-auto min-h-0 w-full overflow-hidden bg-background pt-16 md:h-dvh md:min-h-[640px]"
    >
      <StrataHero />

      {/* MOBILE ONLY ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 z-[1] md:hidden">
        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(123,255,90,.08), transparent 60%)",
          }}
        />

        {/* Scanlines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 6px, black 7px)",
          }}
        />

        {/* Data Labels */}
        <div className="absolute left-4 top-28 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
          FIELD ACTIVE
        </div>

        <div className="absolute right-4 top-28 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
          Q1'26
        </div>

        <div className="absolute left-4 bottom-32 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
          STRATA SHIFT
        </div>

        <div className="absolute right-4 bottom-32 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
          NODE-01
        </div>

        {/* Floating technical dots */}
        <span className="absolute left-4 top-[22%] size-1 rounded-full bg-foreground/30 animate-pulse" />
        <span className="absolute right-5 top-[48%] size-1 rounded-full bg-foreground/30 animate-pulse" />
        <span className="absolute left-6 top-[68%] size-1 rounded-full bg-foreground/30 animate-pulse" />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-[1400px] flex-col gap-10 px-6 py-10 md:justify-between md:gap-0">
        {/* Top Meta */}
        <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
          <span
            style={{
              opacity: 0,
              animation: "sg-fade 0.6s 0.1s forwards",
            }}
          >
            [ 01 — Agency / 2026 ]
          </span>

          <span
            style={{
              opacity: 0,
              animation: "sg-fade 0.6s 0.2s forwards",
            }}
          >
            N 40.7128° · W 74.0060°
          </span>
        </div>

        {/* MOBILE SPACER - REDUCED */}
        <div className="relative h-[24vh] min-h-[140px] max-h-[220px] md:hidden" />

        {/* HERO TITLE */}
        <div className="absolute left-6 right-6 top-[14vh] max-w-3xl sm:top-[18vh] md:static md:left-auto md:right-auto md:top-auto">
          <h1
            className="ml-4 mt-8 font-display text-[clamp(4rem,14vw,10rem)] font-medium leading-[0.9] tracking-[-0.04em] mix-blend-difference text-[var(--sg-white)] sm:ml-4 sm:mt-8 md:ml-0 md:mt-0"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              animation:
                "sg-rise-text 1s 0.5s cubic-bezier(.2,.7,.2,1) forwards",
            }}
          >
            <span className="text-[var(--sg-green)]">Strat</span>Grove.
          </h1>
        </div>

        {/* HERO SUBTITLE */}
        <div className="absolute left-6 right-6 top-[26vh] max-w-3xl sm:top-[31vh] md:static md:left-auto md:right-auto md:top-auto">
          <p
            className="ml-2 mt-8 max-w-md font-display text-xl leading-tight tracking-tight sm:ml-4 sm:text-2xl md:ml-0 md:mt-6"
            style={{
              opacity: 0,
              animation: "sg-fade 0.8s 1.1s forwards",
            }}
          >
            Strategies for{" "}
            <WordRoller
              words={[
                "growth.",
                "brands.",
                "revenue.",
                "scale.",
                "the next era.",
              ]}
              className="text-[var(--sg-violet)]"
            />
          </p>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p
            className="max-w-sm text-sm leading-relaxed text-foreground/80"
            style={{
              opacity: 0,
              animation: "sg-fade 0.8s 1.3s forwards",
            }}
          >
            A growth agency engineering brand, digital and AI systems for teams
            who plan to win the next five years — not the next quarter.
          </p>

          {/* Enhanced Mobile Scroll Indicator */}
          <div
            className="flex flex-col items-start gap-2 font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{
              opacity: 0,
              animation: "sg-fade 0.8s 1.5s forwards",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-block size-2 animate-pulse bg-[var(--sg-green)]" />
              <span>Scroll</span>
            </div>

            <span className="animate-bounce text-xs">↓</span>

            <span className="text-foreground/60">
              The Strata Shift
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative border-t border-black/10 bg-background py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
              [ 02 — About ]
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              We design the
              <br />
              <span className="text-[var(--sg-violet)]">unfair</span> kind of
              <br />
              growth.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-16">
            <p className="text-xl leading-snug tracking-tight">
              StratGrove is a small, senior team of strategists, engineers and
              designers. We build the brand, the site, the SEO surface and the
              AI tooling around it — then we keep iterating until the numbers
              move.
            </p>
            <div className="mt-10 space-y-2 font-display text-3xl leading-tight tracking-tight md:text-4xl">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-foreground/50">→</span>
                <span>
                  We obsess over{" "}
                  <WordRoller
                    words={["retention.", "compounding.", "clarity.", "speed.", "craft."]}
                    className="text-[var(--sg-green)]"
                  />
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-foreground/50">→</span>
                <span>
                  We ship across{" "}
                  <WordRoller
                    words={["brand.", "product.", "search.", "AI.", "motion."]}
                    className="text-[var(--sg-violet)]"
                    duration={9}
                  />
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-foreground/50">→</span>
                <span>
                  Measured on{" "}
                  <WordRoller
                    words={["revenue.", "LTV.", "rank.", "pipeline.", "share."]}
                    className="text-[var(--sg-yellow)]"
                    duration={7}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-4">
          {[
            { v: 96, s: "%", l: "Client retention" },
            { v: 142, s: "+", l: "Happy clients" },
            { v: 27, s: "", l: "Countries served" },
            { v: 8, s: "yrs", l: "Compounding craft" },
          ].map((m) => (
            <div key={m.l} className="bg-background p-8">
              <div className="font-display text-6xl font-medium tracking-tight md:text-7xl">
                <Counter to={m.v} suffix={m.s} />
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                {m.l}
              </div>
            </div>
          ))}
        </div>

        <Marquee />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Brand Strategy",
    "Performance Media",
    "Composable Web",
    "Programmatic SEO",
    "AI Agents",
    "Motion & 3D",
    "Lifecycle CRM",
    "Conversion Engineering",
  ];
  return (
    <div className="mt-20 overflow-hidden border-y border-black/10 py-6">
      <div
        className="flex w-max gap-12 whitespace-nowrap"
        style={{ animation: "sg-marquee 38s linear infinite" }}
      >
        {[...items, ...items, ...items].map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-3xl tracking-tight md:text-5xl"
          >
            {w}
            <span className="inline-block size-3 bg-[var(--sg-violet)]" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-black/10 bg-[var(--sg-black)] py-28 text-[var(--sg-white)]"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--sg-white)]/60">
              [ 03 — Capabilities ]
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Six disciplines.
              <br />
              <span className="text-[var(--sg-green)]">One growth engine.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--sg-white)]/50 md:block">
            Each capability is a standalone team — together they form the
            StratGrove operating system.
          </p>
        </div>

        <div className="mt-16 grid divide-y divide-[var(--sg-white)]/15 border-y border-[var(--sg-white)]/15">
          {services.map((s) => (
            <ServiceRow key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  n,
  title,
  body,
  tag,
}: {
  n: string;
  title: string;
  body: string;
  tag: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(false);
      }}
      onClick={() => setOpen((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      aria-expanded={open}
      className="group relative grid cursor-pointer grid-cols-12 items-center gap-6 px-2 py-8 transition-colors duration-300 hover:bg-[var(--sg-white)]/[0.03]"
    >
      <span className="col-span-2 font-mono text-xs tracking-[0.2em] text-[var(--sg-white)]/50">
        {n}
      </span>
      <h3
        className={`col-span-7 font-display text-2xl tracking-tight transition-colors md:text-4xl ${
          open ? "text-[var(--sg-green)]" : "text-[var(--sg-white)]"
        }`}
      >
        {title}
      </h3>
      <span className="col-span-3 hidden text-right font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--sg-white)]/50 md:block">
        {tag}
      </span>
      <div
        className={`col-span-12 grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-12 gap-6 pt-6">
            <div className="col-span-2" />
            <p className="col-span-9 max-w-2xl text-base leading-relaxed text-[var(--sg-white)]/80 md:text-lg">
              {body}
            </p>
            <PixelStrip className="col-span-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PixelStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`mt-4 flex gap-1 ${className}`} aria-hidden="true">
      {Array.from({ length: 60 }).map((_, i) => {
        const colors = [
          "var(--sg-green)",
          "var(--sg-yellow)",
          "var(--sg-violet)",
          "transparent",
        ];
        const c = colors[i % 4];
        return (
          <span
            key={i}
            className="h-2 w-2"
            style={{
              background: c,
              animation: `sg-strip 1.4s ease-in-out ${i * 0.03}s infinite alternate`,
            }}
          />
        );
      })}
    </div>
  );
}

function Works() {
  return (
    <section id="work" className="border-t border-black/10 bg-background py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
              [ 04 — Selected work ]
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              The pixel
              <br />
              <span className="text-[var(--sg-violet)]">gallery.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden font-mono text-[11px] uppercase tracking-[0.2em] underline-offset-4 hover:underline md:inline"
          >
            View case studies →
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {works.map((w, i) => (
            <WorkCard key={w.title} index={i} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  title,
  cat,
  color,
  index,
  img,
}: {
  title: string;
  cat: string;
  color: string;
  index: number;
  img: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [m, setM] = useState({ x: 50, y: 50, active: false });

  return (
    <article
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setM({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
          active: true,
        });
      }}
      onPointerLeave={() => setM({ x: 50, y: 50, active: false })}
      className="group relative aspect-[4/5] w-full overflow-hidden border border-black/10 bg-[var(--sg-black)]"
    >
      {/* Artwork image */}
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* Pixel pattern background */}
      <div
        className="absolute inset-0 opacity-90 transition-transform duration-500 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${m.x}% ${m.y}%, ${color} 0%, transparent 45%),
            repeating-conic-gradient(var(--sg-black) 0% 25%, #111 0% 50%)`,
          backgroundSize: `100% 100%, 14px 14px`,
        }}
      />
      {/* Pixel overlay grid */}
      <div
        className="absolute inset-0 mix-blend-screen transition-opacity duration-300"
        style={{
          opacity: m.active ? 0.9 : 0.35,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
        }}
      />
      {/* Scanline accent */}
      <div
        className="absolute inset-x-0 h-px bg-[var(--sg-white)]/40 transition-all duration-200"
        style={{ top: `${m.y}%`, opacity: m.active ? 1 : 0 }}
      />
      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 text-[var(--sg-white)]">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sg-white)]/70">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{cat}</span>
        </div>
        <div>
          <h3 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sg-white)]/60">
            Case study →
          </p>
        </div>
      </div>
    </article>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-black/10 py-28"
      style={{ background: "oklch(0.22 0.05 150)" }}
    >
      <ContactPixels />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-[var(--sg-white)]">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--sg-green)]">
              [ 05 — Let's talk ]
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-8xl">
              Build the
              <br />
              <span className="text-[var(--sg-green)]">next chapter.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--sg-white)]/75">
              We take on a small number of partnerships each quarter. Tell us
              what you're trying to grow — we'll reply within one business day.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border border-[var(--sg-white)]/15 bg-[var(--sg-black)]/40 p-8 text-sm backdrop-blur">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sg-yellow)]">
                  Email
                </dt>
                <dd className="mt-1">
                  <a href="mailto:stratgrove00@gmail.com" className="hover:text-[var(--sg-yellow)] hover:underline">
                    stratgrove00@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sg-yellow)]">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a href="tel:+919743652331" className="hover:text-[var(--sg-yellow)] hover:underline">
                    +91 9743652331
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sg-yellow)]">
                  Studio
                </dt>
                <dd className="mt-1">
                  Deepanjali nagar, Bengaluru -560026
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sg-yellow)]">
                  Social
                </dt>
                <dd className="mt-1">
                  <a
                    className="hover:text-[var(--sg-yellow)] hover:underline"
                    href="https://wa.me/919743652331"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.target as HTMLFormElement;
              const name = (f.elements.namedItem("name") as HTMLInputElement)?.value || "";
              const email = (f.elements.namedItem("email") as HTMLInputElement)?.value || "";
              const company = (f.elements.namedItem("company") as HTMLInputElement)?.value || "";
              const msg = (f.elements.namedItem("msg") as HTMLTextAreaElement)?.value || "";
              const subject = encodeURIComponent(`Project Brief from ${name}`);
              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nProject Brief:\n${msg}`
              );
              window.location.href = `mailto:stratgrove00@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="md:col-span-6 md:pt-4"
          >
            <div className="space-y-6 border border-[var(--sg-white)]/15 bg-[var(--sg-black)]/40 p-8 backdrop-blur">
              <Field label="Name" name="name" placeholder="Jane Doe" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@company.com"
              />
              <Field label="Company" name="company" placeholder="Company Inc." />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sg-green)]">
                  Interested in
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Brand", "Digital", "Web", "SEO", "AI SaaS", "Design"].map(
                    (t) => (
                      <Chip key={t} label={t} />
                    )
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="msg"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sg-green)]"
                >
                  Project brief
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={4}
                  placeholder="What are you trying to grow?"
                  className="mt-2 block w-full border-b border-[var(--sg-white)]/30 bg-transparent py-2 text-base text-[var(--sg-white)] placeholder:text-[var(--sg-white)]/40 focus:border-[var(--sg-green)] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-between border border-[var(--sg-green)] bg-[var(--sg-green)] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--sg-black)] transition-colors hover:bg-[var(--sg-yellow)] hover:border-[var(--sg-yellow)]"
              >
                Send brief
                <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sg-green)]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 block w-full border-b border-[var(--sg-white)]/30 bg-transparent py-2 text-base text-[var(--sg-white)] placeholder:text-[var(--sg-white)]/40 focus:border-[var(--sg-green)] focus:outline-none"
      />
    </div>
  );
}

function Chip({ label }: { label: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
        on
          ? "border-[var(--sg-green)] bg-[var(--sg-green)] text-[var(--sg-black)]"
          : "border-[var(--sg-white)]/25 text-[var(--sg-white)]/80 hover:border-[var(--sg-white)]"
      }`}
      aria-pressed={on}
    >
      {label}
    </button>
  );
}

function ContactPixels() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      if (!c || !ctx) return;
      const r = c.getBoundingClientRect();
      c.width = r.width * DPR;
      c.height = r.height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      draw();
    }
    function draw() {
      if (!c || !ctx) return;
      const w = c.width / DPR;
      const h = c.height / DPR;
      ctx.clearRect(0, 0, w, h);
      const cell = 18;
      for (let y = 0; y < h; y += cell) {
        for (let x = 0; x < w; x += cell) {
          const seed = (Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1;
          const s = Math.abs(seed);
          if (s > 0.94) {
            ctx.fillStyle = "#86efac";
            ctx.fillRect(x, y, cell - 2, cell - 2);
          } else if (s > 0.9) {
            ctx.strokeStyle = "rgba(134,239,172,0.55)";
            ctx.lineWidth = 1;
            ctx.strokeRect(x + 0.5, y + 0.5, cell - 2, cell - 2);
          }
        }
      }
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-background py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <PixelLogo />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
            © {new Date().getFullYear()} StratGrove — Strategies for Growth
          </span>
        </div>
        <div className="flex gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Careers</a>
        </div>
      </div>
    </footer>
  );
}

import { BOOK_CALL_HREF } from "@/scroll-scrub-scenes";

/* ------------------------------------------------------------------ */
/* Offerings: spec-sheet pricing rows, expandable slices               */
/* ------------------------------------------------------------------ */

const offerings = [
  {
    blurb: "Complete identity: logo, palette, type, and the rules that hold it together.",
    detail:
      "A logo family, color system, typography, and usage rules, delivered as files you own outright. Most kits wrap inside two weeks.",
    index: "01",
    name: "Brand Kit",
    open: true,
    price: "from $999",
  },
  {
    blurb: "Initial look and branding for your channels. Added to any Brand Kit.",
    detail:
      "Profile and cover art, post templates, and a first launch set styled to your new identity, sized for every channel you use.",
    index: "02",
    name: "Social Launch",
    open: false,
    price: "$749",
  },
  {
    blurb: "Designed and built end to end, with AI features available.",
    detail:
      "Design, copy structure, build, and launch. Fast, mobile ready, search friendly, and handed over live with everything documented.",
    index: "03",
    name: "Website",
    open: false,
    price: "from $2,999",
  },
  {
    blurb: "Assistants, automations, and product features built around your workflow.",
    detail:
      "Scoped around one workflow that matters, then shipped as a working tool your team actually uses, not a demo that gathers dust.",
    index: "04",
    name: "Custom AI Tools",
    open: false,
    price: "from $4,999",
  },
];

export function OfferingsSection() {
  return (
    <section className="bg-bi-bg px-5 py-24 md:px-8 md:py-32" id="offerings">
      <div className="mx-auto max-w-6xl">
        <p className="bi-rise font-bi-mono text-xs font-medium uppercase tracking-[0.18em] text-bi-muted">
          ( The offerings )
        </p>
        <h2 className="bi-rise mt-4 max-w-[16ch] font-bi-display text-5xl font-extrabold uppercase leading-none tracking-tighter text-bi-ink md:text-7xl">
          Clear scope, clear price.
        </h2>
        <p className="bi-rise-2 mt-5 max-w-[52ch] font-bi-body text-base leading-relaxed text-bi-muted">
          No retainers, no surprises. Every engagement starts with the same short
          call and ends with work you own.
        </p>

        <div className="bi-rise-3 mt-14 border-b-2 border-bi-ink">
          {offerings.map((offering) => (
            <details
              className="bi-row group border-t border-bi-hairline"
              key={offering.name}
              open={offering.open}
            >
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto_auto] items-center gap-4 py-7 md:grid-cols-[3.25rem_1fr_auto_auto] md:gap-6">
                <span className="hidden items-center font-bi-mono text-sm text-bi-muted md:flex">
                  {offering.index}
                </span>
                <span>
                  <span className="block font-bi-display text-2xl font-bold uppercase tracking-tight text-bi-ink md:text-3xl">
                    {offering.name}
                  </span>
                  <span className="mt-1 block max-w-[46ch] font-bi-body text-sm leading-relaxed text-bi-muted">
                    {offering.blurb}
                  </span>
                </span>
                <span className="font-bi-mono text-base font-medium text-bi-ink md:text-lg">
                  {offering.price}
                </span>
                <span aria-hidden className="bi-plus" />
              </summary>
              <div className="pb-8 pl-0 md:pl-[4.75rem]">
                <p className="max-w-[58ch] border-l-2 border-bi-amber pl-5 font-bi-body text-sm leading-relaxed text-bi-muted">
                  {offering.detail}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Studio: asymmetric split, spec table + monochrome portrait          */
/* ------------------------------------------------------------------ */

const specs = [
  { label: "SYSTEM", value: "BOYD-01" },
  { label: "CLASS", value: "ONE PERSON STUDIO" },
  { label: "BASE", value: "UPLAND, CALIFORNIA" },
  { label: "SCOPE", value: "BRAND / WEB / AI" },
  { label: "STATE", value: "ACTIVE" },
];

export function StudioSection() {
  return (
    <section className="bg-bi-bg-deep px-5 py-24 md:px-8 md:py-32" id="studio">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-20">
        <div>
          <h2 className="bi-rise max-w-[14ch] font-bi-display text-5xl font-extrabold uppercase leading-none tracking-tighter text-bi-ink md:text-7xl">
            The studio behind the name.
          </h2>
          <p className="bi-rise-2 mt-7 max-w-[60ch] font-bi-body text-base leading-relaxed text-bi-muted">
            Boyd Intelligence is a one person studio in Upland, California. Every
            commission, whether a brand, a website, or a custom tool, is designed,
            built, and delivered by the same set of hands. The work is tested on
            the bleeding edge of AI long before it reaches yours. What ships is
            only what holds up.
          </p>
          <dl className="bi-rise-3 mt-9 max-w-md border-t-2 border-bi-ink">
            {specs.map((spec) => (
              <div
                className="flex items-baseline justify-between gap-6 border-b border-bi-hairline py-2.5"
                key={spec.label}
              >
                <dt className="font-bi-mono text-xs text-bi-muted">{spec.label}</dt>
                <dd className="font-bi-mono text-xs font-medium text-bi-ink">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="bi-rise-2 relative mx-auto w-full max-w-md md:ml-auto">
          <img
            alt="The founder of Boyd Intelligence"
            className="aspect-[4/5] w-full border border-bi-ink object-cover grayscale contrast-105"
            src="/assets/studio/portrait.jpg"
          />
          <p className="mt-3 font-bi-mono text-[0.65rem] uppercase tracking-[0.08em] text-bi-muted">
            Operator / Boyd Intelligence / Upland CA
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process: staggered steps along a vertical rule                      */
/* ------------------------------------------------------------------ */

const steps = [
  {
    body: "A fifteen minute call to scope what you need and exactly what it costs.",
    name: "Inquiry",
    numeral: "01",
  },
  {
    body: "Design and engineering in short rounds you can see and steer.",
    name: "Build",
    numeral: "02",
  },
  {
    body: "Finished files, a live site, or a working tool. Yours outright.",
    name: "Handover",
    numeral: "03",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-bi-bg px-5 py-24 md:px-8 md:py-32" id="process">
      <div className="mx-auto max-w-6xl">
        <h2 className="bi-rise max-w-[16ch] font-bi-display text-5xl font-extrabold uppercase leading-none tracking-tighter text-bi-ink md:text-7xl">
          How an engagement runs.
        </h2>
        <ol className="bi-rhythm relative mt-16 space-y-16 md:space-y-20">
          {steps.map((step, index) => (
            <li
              className={
                index === 1
                  ? "md:ml-[22%]"
                  : index === 2
                    ? "md:ml-[44%]"
                    : undefined
              }
              key={step.name}
            >
              <div className="flex items-baseline gap-5 md:gap-7">
                <span aria-hidden className="bi-numeral font-bi-display text-7xl font-extrabold md:text-8xl">
                  {step.numeral}
                </span>
                <div>
                  <h3 className="font-bi-display text-2xl font-bold uppercase tracking-tight text-bi-ink md:text-3xl">
                    {step.name}
                  </h3>
                  <p className="mt-2 max-w-[38ch] font-bi-body text-base leading-relaxed text-bi-muted">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Ready: statement + orange block CTA + giant cropped wordmark        */
/* ------------------------------------------------------------------ */

export function ReadySection() {
  return (
    <section className="bg-bi-bg" id="contact">
      <div className="mx-auto max-w-6xl px-5 pt-24 md:px-8 md:pt-32">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <h2 className="bi-rise max-w-[13ch] font-bi-display text-6xl font-extrabold uppercase leading-none tracking-tighter text-bi-ink md:text-8xl">
            Ready when you are.
          </h2>
          <a className="bi-block-cta bi-rise-2 font-bi-body" href={BOOK_CALL_HREF}>
            Book a call
          </a>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t-2 border-bi-ink pt-5 md:flex-row md:items-center md:justify-between">
          <nav className="flex gap-6">
            <a
              className="bi-footer-link font-bi-mono text-xs uppercase tracking-[0.08em]"
              href="#offerings"
            >
              Offerings
            </a>
            <a
              className="bi-footer-link font-bi-mono text-xs uppercase tracking-[0.08em]"
              href="#studio"
            >
              Studio
            </a>
            <a
              className="bi-footer-link font-bi-mono text-xs uppercase tracking-[0.08em]"
              href="#process"
            >
              Process
            </a>
          </nav>
          <p className="font-bi-mono text-xs text-bi-muted">
            © 2026 Boyd Intelligence. All rights reserved.
          </p>
        </div>
      </div>
      <div aria-hidden className="bi-giant-wrap">
        <div className="bi-giant font-bi-display">BOYD</div>
      </div>
    </section>
  );
}

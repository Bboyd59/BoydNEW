import { BOOK_CALL_HREF } from "@/scroll-scrub-scenes";

const links = [
  { href: "#offerings", label: "Offerings" },
  { href: "#studio", label: "Studio" },
  { href: "#process", label: "Process" },
];

export function SiteNav() {
  return (
    <header className="bi-nav-veil fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a className="flex items-baseline gap-1" href="#open">
          <span className="font-bi-display text-base font-extrabold uppercase tracking-tight text-bi-ink">
            Boyd Intelligence
          </span>
          <span aria-hidden className="font-bi-mono text-[0.6rem] text-bi-muted">
            (R)
          </span>
        </a>
        <nav className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                className="bi-nav-link font-bi-mono text-xs uppercase tracking-[0.08em] text-bi-ink"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a className="bi-nav-chip font-bi-body" href={BOOK_CALL_HREF}>
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}

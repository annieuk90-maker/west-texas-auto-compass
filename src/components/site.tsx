import { Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";

export const PHONE = "+1 432-614-0812";
export const TEL = "tel:+14326140812";
export const GBP = "https://share.google/t8Y3Nw7I0kGzevHWp";
export const NAME = "West Texas Transportation Consultants";
export const SITE = "https://west-texas-auto-compass.lovable.app";

export const nav = [
  { label: "Home", to: "/" },
  { label: "Inventory", to: "/inventory" },
  { label: "Vehicles", to: "/vehicles" },
  { label: "About", to: "/about" },
  { label: "Buying Guide", to: "/buying/guide" },
  { label: "Financing", to: "/financing" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export function pageHead(path: string, title: string, description: string) {
  const full = `${title} | ${NAME}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE + path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE + path }],
  };
}

export function Btn({ href, to, children, ghost }: { href?: string; to?: string; children: ReactNode; ghost?: boolean }) {
  const cls = ghost
    ? "inline-flex items-center justify-center border border-foreground/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:border-primary hover:text-primary"
    : "bg-gold inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg transition hover:brightness-110";
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return (
    <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
      {children}
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{children}</h2>;
}

export function DemoBadge({ children = "Demo listing" }: { children?: ReactNode }) {
  return (
    <span className="inline-block border border-primary/60 bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  );
}

export function PageHero({ title, eyebrow, intro, image, crumbs }: { title: string; eyebrow: string; intro?: string; image: string; crumbs: { label: string; to?: string }[] }) {
  return (
    <section className="relative flex min-h-[52vh] items-end pt-24">
      <img src={image} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="reveal relative mx-auto w-full max-w-7xl px-5 pb-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs uppercase tracking-[0.2em] text-foreground/70">
          <Link to="/" className="hover:text-primary">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="mx-2 text-primary">/</span>
              {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span aria-current="page" className="text-foreground">{c.label}</span>}
            </span>
          ))}
        </nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-foreground/80 md:text-lg">{intro}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="border-y border-border bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center">
        <div>
          <p className="font-display text-3xl font-semibold md:text-4xl">Questions about a vehicle?</p>
          <p className="mt-2 text-muted-foreground">Call Monday–Friday, 10 AM – 5 PM.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Btn href={TEL}>Call {PHONE}</Btn>
          <Btn to="/contact" ghost>Send Inquiry</Btn>
        </div>
      </div>
    </section>
  );
}

function smsLink(lines: string[]) {
  return `sms:+14326140812?&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function InquiryForm({ type, vehicle }: { type: "trade" | "contact"; vehicle?: string }) {
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);
  const input = "w-full border border-input bg-ink/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim().slice(0, 500);
    if (!get("name") || !get("phone")) return setErr("Please enter your name and phone number.");
    setErr("");
    const lines =
      type === "trade"
        ? [`Trade-in/financing inquiry from ${get("name")} (${get("phone")})`, `Interest: ${get("interest")}`, `Trade-in vehicle: ${get("vehicle")}`, get("message")]
        : [`Inquiry from ${get("name")} (${get("phone")})`, vehicle ? `Vehicle: ${vehicle}` : "", get("message")];
    setSent(true);
    window.location.href = smsLink(lines.filter(Boolean));
  }
  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" aria-label="Full name" maxLength={100} placeholder="Full name *" className={input} />
        <input name="phone" aria-label="Phone" type="tel" maxLength={30} placeholder="Phone *" className={input} />
      </div>
      {type === "trade" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <select name="interest" aria-label="Inquiry type" className={input} defaultValue="Trade-in">
            <option>Trade-in</option>
            <option>Financing</option>
            <option>Both</option>
          </select>
          <input name="vehicle" aria-label="Your vehicle" maxLength={120} placeholder="Year / make / model / miles" className={input} />
        </div>
      )}
      <textarea name="message" aria-label="Message" rows={4} maxLength={1000} placeholder={vehicle ? `Question about ${vehicle}` : "How can we help?"} className={input} />
      {err && <p className="text-sm text-destructive">{err}</p>}
      {sent && <p className="text-sm text-primary">Opening your messages app — or call us directly at {PHONE}.</p>}
      <button type="submit" className="bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:brightness-110">
        Send via Text Message (SMS)
      </button>
      <p className="text-xs text-muted-foreground">
        This form does not email or save your details — it opens your phone's messaging app with a pre-filled text to {PHONE}. Prefer to talk?{" "}
        <a href={TEL} className="text-primary underline">Call us</a>.
      </p>
    </form>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const link = "text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/80 transition hover:text-primary";
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-bold text-gold">WTTC</span>
          <span className="ml-3 hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">Odessa · Texas</span>
        </Link>
        <nav className="hidden gap-5 xl:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={link} activeProps={{ className: "text-primary" }} activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={TEL} className="bg-gold hidden px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground sm:inline-block">{PHONE}</a>
          <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="p-2 xl:hidden">
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <nav className="grid max-h-[80vh] gap-1 overflow-y-auto border-t border-border bg-ink px-5 py-4 xl:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-sm font-semibold uppercase tracking-[0.18em]" activeProps={{ className: "text-primary" }} activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
          <a href={TEL} className="bg-gold mt-2 py-3 text-center text-sm font-bold text-primary-foreground">Call {PHONE}</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-14 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-bold text-gold">WTTC</p>
          <p className="mt-3 text-sm text-muted-foreground">{NAME}<br />Odessa, Texas, USA</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Explore</p>
          <ul className="grid gap-2 text-sm">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="text-foreground/75 hover:text-primary">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Hours</p>
          <ul className="grid gap-2 text-sm text-foreground/75"><li>Mon–Fri: 10 AM – 5 PM</li><li>Sat: Closed</li><li>Sun: Closed</li></ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Reach us</p>
          <ul className="grid gap-2 text-sm">
            <li><a href={TEL} className="text-foreground/75 hover:text-primary">{PHONE}</a></li>
            <li><a href={GBP} target="_blank" rel="noreferrer" className="text-foreground/75 hover:text-primary">Google Business Profile</a></li>
            <li><Link to="/contact" className="text-foreground/75 hover:text-primary">Contact page</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {NAME}. Vehicle photos are representative. Inventory shown on this site is demonstration data until verified.
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <a href={TEL} className="bg-gold fixed inset-x-0 bottom-0 z-40 py-4 text-center text-sm font-bold uppercase tracking-widest text-primary-foreground sm:hidden">
      Call {PHONE}
    </a>
  );
}

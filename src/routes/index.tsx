import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { photos, gallery } from "@/lib/photos";
const hero = photos.hero.src, suv = photos.suv.src, sedan = photos.sedan.src, truck = photos.truck.src;

const PHONE = "+1 432-614-0812";
const TEL = "tel:+14326140812";
const GBP = "https://share.google/t8Y3Nw7I0kGzevHWp";
const NAME = "West Texas Transportation Consultants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${NAME} | Vehicles in Odessa, Texas` },
      { name: "description", content: "Trucks, SUVs and sedans in Odessa, TX. Call +1 432-614-0812, Monday–Friday 10 AM–5 PM." },
      { property: "og:title", content: `${NAME} — Odessa, Texas` },
      { property: "og:description", content: "Explore vehicles, ask about trade-ins and financing, and visit us in Odessa, TX." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Vehicles", "#categories"],
  ["Gallery", "#gallery"],
  ["About", "#about"],
  ["Guide", "#guide"],
  ["Trade-In", "#trade"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const categories = [
  { img: truck, title: "Pickup Trucks", text: "Work-ready and road-ready trucks built for West Texas." },
  { img: suv, title: "SUVs", text: "Room for family, gear and long highway miles." },
  { img: sedan, title: "Sedans", text: "Comfortable, efficient everyday driving." },
];

const steps = [
  ["01", "Set your budget", "Decide on a comfortable monthly or total figure before you shop."],
  ["02", "Pick your fit", "Think about passengers, towing, commute and fuel needs."],
  ["03", "Call or visit", "Ask about current availability — inventory changes often."],
  ["04", "Inspect & drive", "See the vehicle in person and take it for a test drive."],
  ["05", "Finalize", "Review paperwork, trade-in and financing options carefully."],
];

const faqs = [
  ["What are your hours?", "We're open Monday through Friday, 10 AM to 5 PM. We're closed Saturday and Sunday."],
  ["How can I check current inventory?", `Inventory changes frequently, so the best way is to call us at ${PHONE} or view our Google Business Profile.`],
  ["Do you accept trade-ins?", "Ask us about your trade-in using the inquiry form below or by phone and we'll walk you through the options."],
  ["Can I ask about financing?", "Yes — send an inquiry or call and we'll discuss what options may be available to you."],
  ["Where are you located?", "We're in Odessa, Texas. See the map below or open our Google Business Profile for directions."],
];

function Btn({ href, children, ghost }: { href: string; children: React.ReactNode; ghost?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={
        ghost
          ? "inline-flex items-center justify-center border border-foreground/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:border-primary hover:text-primary"
          : "bg-gold inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg transition hover:brightness-110"
      }
    >
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">{children}</h2>;
}

function smsLink(lines: string[]) {
  return `sms:+14326140812?&body=${encodeURIComponent(lines.join("\n"))}`;
}

function InquiryForm({ type }: { type: "trade" | "contact" }) {
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
        : [`Inquiry from ${get("name")} (${get("phone")})`, get("message")];
    setSent(true);
    window.location.href = smsLink(lines.filter(Boolean));
  }
  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" maxLength={100} placeholder="Full name *" className={input} />
        <input name="phone" type="tel" maxLength={30} placeholder="Phone *" className={input} />
      </div>
      {type === "trade" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <select name="interest" className={input} defaultValue="Trade-in">
            <option>Trade-in</option>
            <option>Financing</option>
            <option>Both</option>
          </select>
          <input name="vehicle" maxLength={120} placeholder="Year / make / model / miles" className={input} />
        </div>
      )}
      <textarea name="message" rows={4} maxLength={1000} placeholder="How can we help?" className={input} />
      {err && <p className="text-sm text-destructive">{err}</p>}
      {sent && <p className="text-sm text-primary">Opening your messages app — or call us directly at {PHONE}.</p>}
      <button type="submit" className="bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:brightness-110">
        Send via Text Message (SMS)
      </button>
      <p className="text-xs text-muted-foreground">This form does not email or save your details — it opens your phone's messaging app with a pre-filled text to {PHONE}. Prefer to talk? <a href={TEL} className="text-primary underline">Call us</a>.</p>
    </form>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="leading-none">
            <span className="font-display text-2xl font-bold text-gold">WTTC</span>
            <span className="ml-3 hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">Odessa · Texas</span>
          </a>
          <nav className="hidden gap-7 lg:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80 transition hover:text-primary">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="bg-gold hidden px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground sm:inline-block">{PHONE}</a>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2 lg:hidden">
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
        {open && (
          <nav className="grid gap-1 border-t border-border bg-ink px-5 py-4 lg:hidden">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-sm font-semibold uppercase tracking-[0.18em]">{l}</a>
            ))}
            <a href={TEL} className="bg-gold mt-2 py-3 text-center text-sm font-bold text-primary-foreground">Call {PHONE}</a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100svh] items-end md:items-center">
        <img src={hero} alt="Black pickup truck on a West Texas highway at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="reveal relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32">
          <Eyebrow>Odessa, Texas</Eyebrow>
          <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-8xl">
            Drive West Texas <span className="text-gold italic">in style.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/80 md:text-lg">
            {NAME} — your local source for trucks, SUVs and sedans. Call or stop by to see what's on the lot.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Btn href={TEL}>Call {PHONE}</Btn>
            <Btn href="#gallery" ghost>View Vehicles</Btn>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">Mon–Fri · 10 AM – 5 PM</p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:py-32">
        <Eyebrow>Browse by type</Eyebrow>
        <H2>Find your next vehicle</H2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <a key={c.title} href="#contact" className="group relative block aspect-[4/5] overflow-hidden border border-border">
              <img src={c.img} alt={c.title} loading="lazy" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-3xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{c.text}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ask about availability →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="scroll-mt-20 bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Showcase</Eyebrow>
              <H2>The kind of vehicles we love</H2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Photos are representative. Our inventory changes often — call or check our Google profile for what's available today.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
            {gallery.map((g, i) => (
              <figure
                key={g.label}
                className={`group relative overflow-hidden border border-border ${i === 0 ? "col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto" : i === 3 ? "col-span-2 aspect-[16/9] md:aspect-auto" : "aspect-square md:aspect-auto"} md:min-h-64`}
              >
                <img src={g.src} alt={g.alt} loading="lazy" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                <div className="absolute inset-0 border border-primary/0 transition group-hover:border-primary/60" />
                <figcaption className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground">{g.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Btn href={GBP}>See Our Google Profile</Btn>
            <Btn href={TEL} ghost>Call For Inventory</Btn>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl scroll-mt-20 items-center gap-14 px-5 py-24 md:grid-cols-2 md:py-32">
        <div className="relative">
          <img src={truck} alt="Pickup truck in Texas" loading="lazy" width={1200} height={800} className="aspect-[4/5] w-full object-cover" />
          <div className="bg-gold absolute -bottom-6 -right-4 hidden px-8 py-6 text-primary-foreground md:block">
            <p className="font-display text-3xl font-bold">Odessa</p>
            <p className="text-xs uppercase tracking-[0.25em]">Texas</p>
          </div>
        </div>
        <div>
          <Eyebrow>Our dealership</Eyebrow>
          <H2>Local, straightforward, West Texas.</H2>
          <p className="mt-6 text-foreground/80">
            {NAME} serves drivers in Odessa and the surrounding Permian Basin. Whether you need a dependable work truck, a family SUV or a daily commuter, we're here to help you explore your options.
          </p>
          <p className="mt-4 text-foreground/80">Reach us by phone during business hours or send an inquiry anytime.</p>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</p><a href={TEL} className="font-display text-2xl text-primary">{PHONE}</a></div>
            <div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Hours</p><p className="font-display text-2xl">Mon–Fri, 10–5</p></div>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section id="guide" className="scroll-mt-20 border-y border-border bg-card py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <Eyebrow>Buying guide</Eyebrow>
          <H2>Five steps to a confident purchase</H2>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(([n, t, d]) => (
              <div key={n} className="bg-card p-8 transition hover:bg-secondary">
                <p className="font-display text-5xl text-gold">{n}</p>
                <h3 className="mt-6 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade-in */}
      <section id="trade" className="relative scroll-mt-20 py-24 md:py-32">
        <img src={suv} alt="" loading="lazy" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2">
          <div>
            <Eyebrow>Trade-in & financing</Eyebrow>
            <H2>Ask about your trade or financing</H2>
            <p className="mt-6 text-foreground/80">Tell us about the vehicle you have and what you're looking for. We'll follow up to talk through your options — no commitment.</p>
          </div>
          <div className="border border-border bg-card/80 p-6 backdrop-blur md:p-10"><InquiryForm type="trade" /></div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-24 md:py-32">
        <div className="text-center"><Eyebrow>FAQ</Eyebrow><H2>Common questions</H2></div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                <span className="text-lg font-semibold">{q}</span>
                <span className={`text-2xl text-primary transition ${faq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {faq === i && <p className="reveal pb-6 text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact + Location */}
      <section id="contact" className="scroll-mt-20 bg-ink py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <H2>Let's talk vehicles</H2>
            <div className="mt-10"><InquiryForm type="contact" /></div>
          </div>
          <div id="location" className="scroll-mt-20">
            <Eyebrow>Location</Eyebrow>
            <h3 className="font-display text-3xl font-semibold">Odessa, Texas</h3>
            <div className="mt-6 aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="Map of Odessa, Texas"
                className="h-full w-full grayscale"
                loading="lazy"
                src="https://maps.google.com/maps?q=Odessa%2C%20Texas&z=11&output=embed"
              />
            </div>
            <div className="mt-6 grid gap-2 text-sm">
              <a href={TEL} className="text-primary">{PHONE}</a>
              <p className="text-muted-foreground">Monday–Friday: 10 AM – 5 PM · Saturday–Sunday: Closed</p>
              <p className="text-xs text-muted-foreground">Map shows the general Odessa area, not our exact location.</p>
              <a href={GBP} target="_blank" rel="noreferrer" className="text-primary underline">Get exact directions on Google →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl font-bold text-gold">WTTC</p>
            <p className="mt-3 text-sm text-muted-foreground">{NAME}<br />Odessa, Texas</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Explore</p>
            <ul className="grid gap-2 text-sm">{nav.map(([l, h]) => <li key={h}><a href={h} className="text-foreground/75 hover:text-primary">{l}</a></li>)}</ul>
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
            </ul>
          </div>
        </div>
        <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {NAME}. Vehicle photos are representative.
        </div>
      </footer>

      {/* Mobile call bar */}
      <a href={TEL} className="bg-gold fixed inset-x-0 bottom-0 z-40 py-4 text-center text-sm font-bold uppercase tracking-widest text-primary-foreground sm:hidden">Call {PHONE}</a>
    </div>
  );
}

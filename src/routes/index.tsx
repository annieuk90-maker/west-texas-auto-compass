
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { photos, gallery } from "@/lib/photos";
import {
  Header,
  Footer,
  Btn,
  Eyebrow,
  H2,
  InquiryForm,
  MobileCallBar,
  CtaBand,
  pageHead,
  PHONE,
  TEL,
  GBP,
  NAME,
} from "@/components/site";

const hero = photos.hero.src;
const suv = photos.suv.src;
const sedan = photos.sedan.src;
const truck = photos.truck.src;

const categories = [
  {
    img: truck,
    title: "Pickup Trucks",
    text: "Explore trucks for work, daily driving and West Texas roads.",
  },
  {
    img: suv,
    title: "SUVs",
    text: "Discover versatile vehicles for families, travel and everyday life.",
  },
  {
    img: sedan,
    title: "Sedans",
    text: "Explore comfortable options for your daily commute.",
  },
];

const steps = [
  ["01", "Set your budget", "Decide on a comfortable total budget before you shop."],
  ["02", "Choose your vehicle", "Consider passengers, towing, commute and fuel needs."],
  ["03", "Ask questions", "Contact us to ask about current availability and options."],
  ["04", "Inspect and test drive", "Inspect the vehicle and arrange a test drive before buying."],
  ["05", "Review the details", "Carefully review paperwork, trade-in details and any financing terms."],
];

const faqs = [
  {
    q: "What are your business hours?",
    a: "We are open Monday through Friday, 10 AM to 5 PM. We are closed Saturday and Sunday.",
  },
  {
    q: "How can I check current inventory?",
    a: "Vehicle availability can change. Please call us or contact the dealership to ask about current inventory.",
  },
  {
    q: "Do you accept trade-ins?",
    a: "Contact us with your vehicle's year, make, model and mileage to discuss possible trade-in options.",
  },
  {
    q: "Can I ask about financing?",
    a: "Yes. Contact us to discuss your circumstances and ask what options may be available. Terms and approval are not guaranteed.",
  },
  {
    q: "Where are you located?",
    a: "We serve customers in Odessa, Texas. Use our Google Business Profile for location details and directions.",
  },
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "/",
      "Vehicles in Odessa, Texas",
      "Explore vehicle categories, learn about the buying process, and contact West Texas Transportation Consultants in Odessa, Texas."
    ),
  component: Index,
});

function Index() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[92svh] items-end md:min-h-[100svh] md:items-center">
        <img
          src={hero}
          alt="Representative pickup truck on a West Texas highway"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="reveal-left relative mx-auto w-full max-w-7xl px-5 pb-24 pt-36 md:py-32">
          <Eyebrow>Odessa, Texas</Eyebrow>
          <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl md:text-8xl">
            Drive West Texas{" "}
            <span className="text-gold italic">in style.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/80 md:text-lg">
            Welcome to {NAME}. Explore vehicle categories, learn about the
            buying process, and contact our team to discuss your needs.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Btn href={TEL}>Call {PHONE}</Btn>
            <Btn to="/inventory" ghost>
              Explore Inventory
            </Btn>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Monday–Friday · 10 AM–5 PM
          </p>
        </div>
      </section>

      {/* Quick information */}
      <section className="border-y border-border bg-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-3">
          <div className="reveal-left">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Location</p>
            <p className="mt-2 font-display text-2xl font-semibold">Odessa, Texas</p>
          </div>
          <div className="reveal-up">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Business hours</p>
            <p className="mt-2 font-display text-2xl font-semibold">Mon–Fri, 10–5</p>
          </div>
          <div className="reveal-right">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
            <a href={TEL} className="mt-2 inline-block font-display text-2xl font-semibold text-gold hover:underline">
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="reveal-left flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Explore your options</Eyebrow>
            <H2>Find your next vehicle</H2>
          </div>
          <p className="max-w-lg text-sm text-muted-foreground">
            Browse the vehicle categories below. Contact us to confirm current
            availability before making a trip.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to="/inventory"
              className={`reveal-up group relative block aspect-[4/5] overflow-hidden border border-border ${index === 1 ? "md:[transition-delay:120ms]" : index === 2 ? "md:[transition-delay:240ms]" : ""}`}
            >
              <img
                src={category.img}
                alt={`Representative ${category.title.toLowerCase()} photo`}
                loading="lazy"
                width={1200}
                height={1500}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-3xl font-semibold">{category.title}</h3>
                <p className="mt-3 text-sm text-foreground/75">{category.text}</p>
                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Explore inventory →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal-up mt-10 flex flex-col gap-4 sm:flex-row">
          <Btn to="/vehicles">Explore Vehicle Types</Btn>
          <Btn to="/inventory" ghost>View Inventory Page</Btn>
        </div>
      </section>

      {/* Gallery */}
      <section className="scroll-mt-24 bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal-left flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Vehicle showcase</Eyebrow>
              <H2>A closer look at vehicle styles</H2>
            </div>
            <p className="max-w-lg text-sm text-muted-foreground">
              These photographs are representative examples, not confirmation
              of actual dealership stock. Contact us to check availability.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
            {gallery.map((item, index) => (
              <figure
                key={item.label}
                className={`reveal-right group relative overflow-hidden border border-border ${
                  index === 0
                    ? "col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto"
                    : index === 3
                      ? "col-span-2 aspect-[16/9] md:aspect-auto"
                      : "aspect-square md:aspect-auto"
                } md:min-h-64`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em]">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="reveal-up mt-10 flex flex-col gap-4 sm:flex-row">
            <Btn href={GBP}>Google Business Profile</Btn>
            <Btn href={TEL} ghost>Call For Availability</Btn>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:py-32">
        <div className="reveal-right relative">
          <img
            src={truck}
            alt="Representative pickup truck photograph"
            loading="lazy"
            width={1200}
            height={1000}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="bg-gold absolute -bottom-5 -right-3 hidden px-8 py-6 text-primary-foreground md:block">
            <p className="font-display text-3xl font-bold">West Texas</p>
            <p className="text-xs uppercase tracking-[0.2em]">Odessa, TX</p>
          </div>
        </div>

        <div className="reveal-left">
          <Eyebrow>About the dealership</Eyebrow>
          <H2>Local to Odessa. Focused on your next drive.</H2>
          <p className="mt-6 leading-relaxed text-foreground/80">
            {NAME} helps customers explore vehicle categories and ask questions
            about the purchasing process. Whether you are considering a pickup
            truck, SUV or sedan, start by discussing your needs with our team.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            We encourage customers to confirm availability, inspect vehicles
            and review all terms before making a purchase decision.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Btn to="/about">About Us</Btn>
            <Btn to="/contact" ghost>Contact Us</Btn>
          </div>
        </div>
      </section>

      {/* Buying guide */}
      <section className="border-y border-border bg-card py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal-left">
            <Eyebrow>Buying guide</Eyebrow>
            <H2>Five steps to a confident purchase</H2>
          </div>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(([number, title, description], index) => (
              <div
                key={number}
                className={`reveal-up bg-card p-7 transition hover:bg-secondary md:p-8 ${index > 0 ? "md:[transition-delay:100ms]" : ""}`}
              >
                <p className="font-display text-5xl text-gold">{number}</p>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
          <div className="reveal-up mt-10">
            <Btn to="/buying-guide">Read the Complete Buying Guide</Btn>
          </div>
        </div>
      </section>

      {/* Trade-in and financing */}
      <section className="relative py-24 md:py-32">
        <img
          src={suv}
          alt=""
          loading="lazy"
          width={1200}
          height={800}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2">
          <div className="reveal-left">
            <Eyebrow>Trade-in and financing</Eyebrow>
            <H2>Let's discuss your options</H2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Have a vehicle you may want to trade in, or questions about
              financing? Send an inquiry or call us during business hours.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Availability, financing terms and approval depend on individual
              circumstances and must be confirmed directly.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Btn to="/financing">Financing Information</Btn>
              <Btn to="/contact" ghost>Contact Us</Btn>
            </div>
          </div>

          <div className="reveal-right border border-border bg-card/90 p-6 backdrop-blur md:p-10">
            <h3 className="font-display text-2xl font-semibold">Send an inquiry</h3>
            <p className="mb-6 mt-2 text-sm text-muted-foreground">
              Enter your contact details and message. Your phone's messaging
              app will open with a prepared text.
            </p>
            <InquiryForm type="trade" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:py-32">
        <div className="reveal-up text-center">
          <Eyebrow>Frequently asked questions</Eyebrow>
          <H2>Good questions deserve clear answers</H2>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((item, index) => (
            <div key={item.q} className="reveal-left">
              <button
                type="button"
                aria-expanded={faqOpen === index}
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-base font-semibold md:text-lg">{item.q}</span>
                <span className={`text-2xl text-primary transition ${faqOpen === index ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {faqOpen === index && (
                <p className="pb-6 leading-relaxed text-muted-foreground">{item.a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="reveal-up mt-8 text-center">
          <Btn to="/faq" ghost>View All FAQs</Btn>
        </div>
      </section>

      {/* Contact and location */}
      <section className="scroll-mt-24 bg-ink py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">
          <div className="reveal-left">
            <Eyebrow>Contact</Eyebrow>
            <H2>Let's talk vehicles</H2>
            <p className="mt-5 max-w-lg text-foreground/75">
              Call us during business hours or send an inquiry using the form.
              Please confirm current availability before visiting.
            </p>
            <div className="mt-8">
              <InquiryForm type="contact" />
            </div>
          </div>

          <div className="reveal-right">
            <Eyebrow>Find us</Eyebrow>
            <h3 className="font-display text-3xl font-semibold">Odessa, Texas</h3>
            <div className="mt-6 aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="General map of Odessa, Texas"
                className="h-full w-full grayscale"
                loading="lazy"
                src="https://maps.google.com/maps?q=Odessa%2C%20Texas&z=11&output=embed"
              />
            </div>
            <div className="mt-6 grid gap-3 text-sm">
              <a href={TEL} className="text-primary hover:underline">{PHONE}</a>
              <p className="text-muted-foreground">
                Monday–Friday: 10 AM–5 PM
                <br />
                Saturday–Sunday: Closed
              </p>
              <p className="text-xs text-muted-foreground">
                The map shows the general Odessa area, not a verified street address.
              </p>
              <a href={GBP} target="_blank" rel="noreferrer" className="text-primary underline">
                Open Google Business Profile for directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <CtaBand />

      <Footer />
      <MobileCallBar />
    </div>
  );
            }

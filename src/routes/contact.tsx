import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
PageHero,
CtaBand,
Header,
Footer,
pageHead,
} from "@/components/site";
import { photos } from "@/lib/photos";

const PHONE = "+1 432-614-0812";
const TEL = "tel:+14326140812";
const GBP = "https://share.google/t8Y3Nw7I0kGzevHWp";
const HOURS = "Monday–Friday, 10 AM–5 PM";

export const Route = createFileRoute("/contact")({
head: () =>
pageHead(
"/contact",
"Contact Us",
"Contact West Texas Transportation Consultants in Odessa, Texas. Call +1 432-614-0812, Monday through Friday, 10 AM to 5 PM."
),
component: Page,
});

function Page() {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [interest, setInterest] = useState("Pickup truck");
const [message, setMessage] = useState("");

function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();

const lines = [
  "Vehicle enquiry for West Texas Transportation Consultants",
  "",
  `Name: ${name.trim()}`,
  `Phone: ${phone.trim() || "Not provided"}`,
  `Vehicle interest: ${interest}`,
  `Message: ${message.trim() || "Please contact me about availability."}`,
];

const smsBody = encodeURIComponent(lines.join("\n"));
window.location.href = `${TEL.replace("tel:", "sms:")}?&body=${smsBody}`;

}

return (
<div className="overflow-x-hidden">
<Header />

  <PageHero
    title="Let's Start a Conversation"
    eyebrow="Contact West Texas Transportation Consultants"
    intro="Have a question about a vehicle or want to discuss your requirements? Contact our team in Odessa, Texas."
    image={photos.hero.src}
    crumbs={[{ label: "Contact" }]}
  />

  <section className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Get in Touch
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          We’re Here to Help
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Call us to ask about vehicle availability, pricing or the next
          steps for your enquiry.
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Call Our Team
            </p>
            <a
              href={TEL}
              className="mt-3 inline-block text-xl font-semibold text-foreground transition hover:text-primary sm:text-2xl"
            >
              {PHONE}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Tap the number to call from your phone.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Business Hours
            </p>
            <p className="mt-3 text-lg font-semibold text-foreground">
              {HOURS}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Please contact us to confirm availability before visiting.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Location
            </p>
            <p className="mt-3 text-lg font-semibold text-foreground">
              Odessa, Texas
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Contact us for the exact street address and directions.
            </p>
            <a
              href={GBP}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              View Business Profile ↗
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Vehicle Enquiry
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
          Tell Us What You’re Looking For
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Complete the details below. Submitting opens your device’s
          messaging app with your enquiry prepared for you to review
          and send.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Your Name *
            </label>
            <input
              id="contact-name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              autoComplete="name"
              placeholder="Enter your name"
              className="min-h-12 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Phone Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              autoComplete="tel"
              placeholder="Enter your phone number"
              className="min-h-12 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="contact-interest"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Vehicle Interest
            </label>
            <select
              id="contact-interest"
              name="interest"
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
              className="min-h-12 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option>Pickup truck</option>
              <option>SUV</option>
              <option>Sedan</option>
              <option>Work vehicle</option>
              <option>Other / Not sure yet</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              How Can We Help?
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={4}
              placeholder="Tell us what you need..."
              className="w-full resize-y rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Prepare Enquiry Message →
          </button>

          <p className="text-xs leading-5 text-muted-foreground">
            This form does not send or store information on the website.
            It opens your messaging app; you must review and send the
            message yourself. If it does not open, call us directly.
          </p>
        </form>
      </div>
    </div>
  </section>

  <section className="border-y border-border bg-card px-4 py-14 sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">
          Still Exploring Your Options?
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Browse vehicle categories and prepare questions before calling.
        </p>
      </div>
      <Link
        to="/inventory"
        className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
      >
        Explore Inventory →
      </Link>
    </div>
  </section>

  <CtaBand />
  <Footer />
</div>

);
            }

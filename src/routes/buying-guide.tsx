import { createFileRoute, Link } from "@tanstack/react-router";
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

const steps = [
{
number: "01",
title: "Define Your Needs",
description:
"Think about your daily driving, passengers, cargo, road conditions and how you expect to use the vehicle.",
points: [
"Daily commute or long-distance travel",
"Passenger and cargo space",
"Personal or business use",
],
},
{
number: "02",
title: "Set Your Budget",
description:
"Decide what you can comfortably afford before discussing specific vehicles or financing options.",
points: [
"Purchase budget",
"Insurance and ongoing costs",
"Potential down payment and monthly budget",
],
},
{
number: "03",
title: "Ask About Availability",
description:
"Contact our team to confirm whether a vehicle is available and request details about its condition and specifications.",
points: [
"Current availability",
"Vehicle history and condition, where applicable",
"Price and included features",
],
},
{
number: "04",
title: "Review Before You Commit",
description:
"Take time to review the vehicle details, paperwork and terms before making a purchase decision.",
points: [
"Review the vehicle and its documentation",
"Ask about an independent inspection",
"Understand all fees and purchase terms",
],
},
];

export const Route = createFileRoute("/buying-guide")({
head: () =>
pageHead(
"/buying-guide",
"Vehicle Buying Guide",
"A practical guide to choosing a vehicle, planning your budget and asking the right questions at West Texas Transportation Consultants in Odessa, Texas."
),
component: Page,
});

function Page() {
return (
<div className="overflow-x-hidden">
<Header />

  <PageHero
    title="A Smarter Way to Shop for Your Next Vehicle"
    eyebrow="The Vehicle Buying Guide"
    intro="A little preparation can make your vehicle search easier. Use this practical checklist to clarify your needs, plan your budget and prepare useful questions."
    image={photos.hero.src}
    crumbs={[{ label: "Buying Guide" }]}
  />

  <section className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Four Steps to Get Started
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Shop With More Confidence
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Use these steps to prepare for a more informed vehicle-buying
          conversation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step) => (
          <article
            key={step.number}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 text-sm font-semibold text-primary">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3 border-t border-border pt-5">
              {step.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-foreground"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="border-y border-border bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Before You Call
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Questions Worth Asking
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Having a few questions ready helps you gather the information
          you need before deciding on a vehicle.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
        <ul className="space-y-4">
          {[
            "Is the vehicle currently available?",
            "What is the asking price and are there additional fees?",
            "Can I review the vehicle history and condition?",
            "Can I arrange a viewing or test drive?",
            "What paperwork is required to complete the purchase?",
            "Are financing options available, and what are their terms?",
          ].map((question) => (
            <li
              key={question}
              className="flex items-start gap-3 text-sm leading-6 text-foreground"
            >
              <span
                className="mt-0.5 text-primary"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>{question}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>

  <section className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="mx-auto flex max-w-5xl flex-col items-center rounded-xl border border-border bg-card px-6 py-10 text-center sm:px-10 sm:py-14">
      <img
        src={photos.suv.src}
        alt={photos.suv.alt}
        loading="lazy"
        className="mb-7 aspect-[16/7] w-full max-w-2xl rounded-lg object-cover"
      />
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        Ready to Start?
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Let's Talk About Your Next Vehicle
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
        Contact West Texas Transportation Consultants in Odessa, Texas,
        to ask about current inventory, vehicle details and your next
        steps.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a
          href={TEL}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Call {PHONE}
        </a>
        <Link
          to="/inventory"
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
        >
          Browse Inventory
        </Link>
      </div>
    </div>
  </section>

  <CtaBand />
  <Footer />
</div>

);
  }

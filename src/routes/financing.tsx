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

const considerations = [
{
number: "01",
title: "Know Your Budget",
description:
"Consider your overall budget, regular expenses and the amount you can comfortably put toward a vehicle.",
},
{
number: "02",
title: "Understand the Terms",
description:
"Ask about the interest rate, loan duration, monthly payment, fees and total amount payable before agreeing to financing.",
},
{
number: "03",
title: "Prepare Your Information",
description:
"A lender may request identification, proof of income, residence details and other documents. Requirements vary by lender.",
},
{
number: "04",
title: "Compare Your Options",
description:
"Review available offers carefully and compare their full costs. Approval and terms depend on the lender and your circumstances.",
},
];

export const Route = createFileRoute("/financing")({
head: () =>
pageHead(
"/financing",
"Vehicle Financing Information",
"Learn what to consider when exploring vehicle financing with West Texas Transportation Consultants in Odessa, Texas."
),
component: Page,
});

function Page() {
return (
<div className="overflow-x-hidden">
<Header />

  <PageHero
    title="Plan Your Vehicle Purchase With Confidence"
    eyebrow="Vehicle Financing Information"
    intro="Understanding your budget and financing terms can help you make a more informed vehicle purchase. Start with the basics and ask questions before committing."
    image={photos.interior.src}
    crumbs={[{ label: "Financing" }]}
  />

  <section className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Get Prepared
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Four Things to Consider
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Before exploring financing, take time to understand what fits
          your financial situation.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {considerations.map((item) => (
          <article
            key={item.number}
            className="rounded-xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/60"
          >
            <span className="text-sm font-semibold tracking-widest text-primary">
              {item.number}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="border-y border-border bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Before You Sign
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Understand the Full Cost
        </h2>
        <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
          A monthly payment is only one part of a vehicle financing
          decision. Review the complete agreement and make sure you
          understand every charge and obligation.
        </p>

        <ul className="mt-6 space-y-4">
          {[
            "The total purchase price and any down payment",
            "Annual percentage rate (APR), if applicable",
            "Loan term and total payments over the term",
            "Taxes, registration and additional fees",
            "Insurance, maintenance and running costs",
            "Late-payment terms and any prepayment conditions",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-foreground"
            >
              <span className="mt-0.5 text-primary" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-xl border border-border">
        <img
          src={photos.suv.src}
          alt={photos.suv.alt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="bg-background p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-foreground">
            Questions to Ask
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Ask who provides the financing, which eligibility
            requirements apply, whether a credit check is required and
            what happens if your application is not approved.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="mx-auto max-w-5xl rounded-xl border border-border bg-card px-6 py-10 text-center sm:px-10 sm:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        Have Questions?
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Discuss Your Vehicle Requirements
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
        Contact West Texas Transportation Consultants to discuss the
        vehicle you are looking for. Ask the team whether financing
        information or options are available for your situation.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a
          href={TEL}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Call {PHONE}
        </a>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
        >
          Contact Us
        </Link>
        <Link
          to="/inventory"
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
        >
          Browse Inventory
        </Link>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-xs leading-6 text-muted-foreground">
        Financing is not guaranteed. Rates, eligibility, approval and
        terms depend on the lender and individual circumstances. This
        page provides general information, not a financing offer.
      </p>
    </div>
  </section>

  <CtaBand />
  <Footer />
</div>

);
          }

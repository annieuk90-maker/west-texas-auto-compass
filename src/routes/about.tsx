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

const vehicleTypes = [
{
number: "01",
title: "Pickup Trucks",
tagline: "Built for West Texas",
description:
"Explore pickup options for everyday driving, ranch work and demanding jobs. Contact our team to ask about current availability.",
image: photos.truck,
imagePosition: "object-center",
},
{
number: "02",
title: "SUVs",
tagline: "Space meets comfort",
description:
"Discover SUV options for family travel, road trips and everyday comfort. Ask us about the models currently available.",
image: photos.suv,
imagePosition: "object-center",
},
{
number: "03",
title: "Sedans",
tagline: "Everyday practicality",
description:
"Looking for a practical daily driver? Contact us to discuss sedan options, pricing and availability.",
image: photos.sedan,
imagePosition: "object-center",
},
{
number: "04",
title: "Work Vehicles",
tagline: "Ready for the workday",
description:
"Tell us about your business transportation needs and ask about work vans and other suitable vehicle options.",
image: photos.work,
imagePosition: "object-center",
},
];

export const Route = createFileRoute("/vehicles")({
head: () =>
pageHead(
"/vehicles",
"Vehicle Categories",
"Explore pickup trucks, SUVs, sedans and work vehicle categories at West Texas Transportation Consultants in Odessa, Texas."
),
component: Page,
});

function Page() {
return (
<div className="overflow-x-hidden">
<Header />

  <PageHero
    title="Find Your Kind of Drive"
    eyebrow="West Texas Transportation Consultants"
    intro="From pickup trucks to everyday sedans, explore vehicle categories and speak with our team about finding the right fit in Odessa, Texas."
    image={photos.suv.src}
    crumbs={[{ label: "Vehicle Categories" }]}
  />

  <section className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Explore Your Options
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Vehicles for Different Roads
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Every driver has different needs. Browse our categories, then
            contact us to discuss current stock, pricing and availability.
          </p>
        </div>

        <Link
          to="/inventory"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
        >
          Browse Inventory <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {vehicleTypes.map((vehicle) => (
          <article
            key={vehicle.number}
            className="group grid overflow-hidden rounded-xl border border-border bg-card transition duration-300 hover:border-primary/60 md:grid-cols-[1fr_1fr]"
          >
            <div className="relative min-h-64 overflow-hidden bg-muted sm:min-h-72">
              <img
                src={vehicle.image.src}
                alt={vehicle.image.alt}
                loading="lazy"
                className={`h-full min-h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-72 ${vehicle.imagePosition}`}
              />
              <span className="absolute left-4 top-4 rounded-md border border-white/20 bg-black/65 px-3 py-1.5 text-xs font-semibold tracking-widest text-white">
                {vehicle.number}
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {vehicle.tagline}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                {vehicle.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {vehicle.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/inventory"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Explore Inventory
                </Link>
                <a
                  href={TEL}
                  aria-label={`Call ${PHONE} about ${vehicle.title}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  Call Us
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="border-y border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          A More Personal Approach
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Not Sure Which Vehicle Is Right for You?
        </h2>
      </div>

      <div>
        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          Tell us how you plan to use your vehicle and what matters most
          to you. Our team can discuss your requirements and help you
          check what is currently available.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Contact Our Team
          </Link>
          <a
            href={TEL}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </div>
  </section>

  <CtaBand />
  <Footer />
</div>

);
}

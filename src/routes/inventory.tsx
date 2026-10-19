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

const categories = [
{
title: "Pickup Trucks",
description:
"Ask about available pickups for daily driving, ranch work and demanding Texas roads.",
image: photos.truck,
link: "/vehicles",
},
{
title: "SUVs",
description:
"Explore options for families, road trips and everyday comfort.",
image: photos.suv,
link: "/vehicles",
},
{
title: "Sedans",
description:
"Ask about comfortable, practical vehicles for your daily commute.",
image: photos.sedan,
link: "/vehicles",
},
{
title: "Work Vehicles",
description:
"Discuss cargo vans and other work-vehicle options for your business needs.",
image: photos.work,
link: "/vehicles",
},
];

export const Route = createFileRoute("/inventory")({
head: () =>
pageHead(
"/inventory",
"Vehicle Inventory",
"Explore vehicle categories at West Texas Transportation Consultants in Odessa, Texas. Call for current availability."
),
component: Page,
});

function Page() {
return (
<div className="overflow-x-hidden">
<Header />

  <PageHero
    title="Explore Our Inventory"
    eyebrow="West Texas Transportation Consultants"
    intro="Looking for your next vehicle in Odessa, Texas? Explore our vehicle categories and contact our team to ask about current availability."
    image={photos.hero.src}
    crumbs={[{ label: "Inventory" }]}
  />

  <section className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Find Your Next Vehicle
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Browse by Vehicle Type
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Tell us what you need, and contact us directly for information
          about current stock, pricing and availability.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <article
            key={category.title}
            className="group overflow-hidden rounded-xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/60"
          >
            <Link
              to={category.link}
              className="block"
              aria-label={`Explore ${category.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={category.image.src}
                  alt={category.image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore category <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Need Help Finding a Vehicle?
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">
            Let's discuss what you're looking for.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            These images represent vehicle categories, not confirmed
            vehicles currently for sale. Contact us to verify available
            stock, pricing and vehicle details.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
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
        </div>
      </div>
    </div>
  </section>

  <CtaBand />
  <Footer />
</div>

);
}

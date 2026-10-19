import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

const faqs = [
{
category: "Inventory",
question: "What types of vehicles can I ask about?",
answer:
"You can contact our team about pickup trucks, SUVs, sedans and work vehicles. Contact us directly to confirm which vehicles are currently available.",
},
{
category: "Inventory",
question: "Are the vehicles shown on this website currently for sale?",
answer:
"The website images illustrate vehicle categories and are not a confirmed inventory list. Please call us to verify current stock, specifications and availability.",
},
{
category: "Inventory",
question: "How can I find out a vehicle's price?",
answer:
"Call our team and ask about the specific vehicle you are interested in. Confirm its asking price and any additional charges before making a decision.",
},
{
category: "Vehicle Information",
question: "Can I ask about a vehicle's condition and history?",
answer:
"Yes, you can ask the team for available vehicle details and documentation. Review the information carefully and consider an independent inspection before purchasing.",
},
{
category: "Vehicle Information",
question: "Can I arrange a viewing or test drive?",
answer:
"Contact the dealership to ask whether a viewing or test drive can be arranged for a specific vehicle. Availability and arrangements must be confirmed directly.",
},
{
category: "Financing",
question: "Do you offer vehicle financing?",
answer:
"Contact our team to ask whether financing information or options are available. Any financing eligibility, approval, rates and terms would need to be confirmed with the relevant provider.",
},
{
category: "Financing",
question: "What should I know before financing a vehicle?",
answer:
"Review the APR, loan term, monthly payment, total repayment amount, fees and any conditions. Make sure you understand the agreement before signing.",
},
{
category: "Purchasing",
question: "What documents do I need to buy a vehicle?",
answer:
"Requirements can vary depending on the transaction and your circumstances. Ask the dealership which documents are required before arranging your purchase.",
},
{
category: "Contact",
question: "How do I contact West Texas Transportation Consultants?",
answer:
"Call +1 432-614-0812 during the listed business hours, Monday through Friday, 10 AM to 5 PM.",
},
{
category: "Contact",
question: "Where are you located?",
answer:
"West Texas Transportation Consultants serves customers in Odessa, Texas. Contact the team to confirm the exact address and directions before visiting.",
},
];

const categories = [
"All Questions",
"Inventory",
"Vehicle Information",
"Financing",
"Purchasing",
"Contact",
];

export const Route = createFileRoute("/faq")({
head: () =>
pageHead(
"/faq",
"Frequently Asked Questions",
"Answers to common questions about vehicle availability, pricing, inspections, financing and contacting West Texas Transportation Consultants in Odessa, Texas."
),
component: Page,
});

function Page() {
const [activeCategory, setActiveCategory] = useState("All Questions");
const [openQuestion, setOpenQuestion] = useState<number | null>(0);

const filteredFaqs =
activeCategory === "All Questions"
? faqs
: faqs.filter((faq) => faq.category === activeCategory);

return (
<div className="overflow-x-hidden">
<Header />

  <PageHero
    title="Questions, Answered"
    eyebrow="Frequently Asked Questions"
    intro="Find helpful information about vehicle categories, current availability, pricing, financing and contacting our team."
    image={photos.interior.src}
    crumbs={[{ label: "FAQ" }]}
  />

  <section className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          How Can We Help?
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Choose a topic below to find the information you need.
          For vehicle-specific details, contact our team directly.
        </p>
      </div>

      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        aria-label="Filter questions by category"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setOpenQuestion(null);
              }}
              aria-pressed={isActive}
              className={`rounded-md border px-4 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/60"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openQuestion === index;

          return (
            <article
              key={faq.question}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => setOpenQuestion(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="text-sm font-semibold leading-6 text-foreground sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-lg text-primary transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-border px-5 py-5 sm:px-6">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-14 overflow-hidden rounded-xl border border-border bg-card md:grid md:grid-cols-2">
        <div className="min-h-56 overflow-hidden">
          <img
            src={photos.truck.src}
            alt={photos.truck.alt}
            loading="lazy"
            className="h-full min-h-56 w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Still Have Questions?
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">
            Let's Talk Directly
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Our team can help you ask about current vehicle availability
            and the next steps for your enquiry.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={TEL}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Call {PHONE}
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CtaBand />
  <Footer />
</div>

);
}

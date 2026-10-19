import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Header, Footer, pageHead } from "@/components/site";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("/contact", "Contact", "Call +1 432-614-0812, Monday–Friday 10 AM–5 PM, Odessa, Texas."),
  component: Page,
});

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PageHero title="Contact" eyebrow="West Texas Transportation Consultants" intro="Call +1 432-614-0812, Monday–Friday 10 AM–5 PM, Odessa, Texas." image={photos.hero.src} crumbs={[{ label: "Contact" }]} />
      <CtaBand />
      <Footer />
    </div>
  );
}

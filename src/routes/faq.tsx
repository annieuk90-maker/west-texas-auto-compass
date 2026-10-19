import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Header, Footer, pageHead } from "@/components/site";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/faq")({
  head: () => pageHead("/faq", "FAQ", "Answers about availability, inspections, paperwork, hours and contacting us."),
  component: Page,
});

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PageHero title="FAQ" eyebrow="West Texas Transportation Consultants" intro="Answers about availability, inspections, paperwork, hours and contacting us." image={photos.work.src} crumbs={[{ label: "FAQ" }]} />
      <CtaBand />
      <Footer />
    </div>
  );
}

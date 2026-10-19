import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Header, Footer, pageHead } from "@/components/site";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/vehicles")({
  head: () => pageHead("/vehicles", "Vehicle Categories", "Cars, SUVs, pickup trucks and work vehicles — ask us what is currently available."),
  component: Page,
});

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PageHero title="Vehicle Categories" eyebrow="West Texas Transportation Consultants" intro="Cars, SUVs, pickup trucks and work vehicles — ask us what is currently available." image={photos.suv.src} crumbs={[{ label: "Vehicle Categories" }]} />
      <CtaBand />
      <Footer />
    </div>
  );
}

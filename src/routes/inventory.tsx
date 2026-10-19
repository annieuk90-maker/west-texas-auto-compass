import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Header, Footer, pageHead } from "@/components/site";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/inventory")({
  head: () => pageHead("/inventory", "Inventory", "Demonstration listings until verified inventory is supplied. Call for current availability."),
  component: Page,
});

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PageHero title="Inventory" eyebrow="West Texas Transportation Consultants" intro="Demonstration listings until verified inventory is supplied. Call for current availability." image={photos.hero.src} crumbs={[{ label: "Inventory" }]} />
      <CtaBand />
      <Footer />
    </div>
  );
}

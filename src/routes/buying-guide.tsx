import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Header, Footer, pageHead } from "@/components/site";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/buying-guide")({
  head: () => pageHead("/buying-guide", "Buying Guide", "Practical advice for inspecting, comparing and buying a vehicle."),
  component: Page,
});

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PageHero title="Buying Guide" eyebrow="West Texas Transportation Consultants" intro="Practical advice for inspecting, comparing and buying a vehicle." image={photos.interior.src} crumbs={[{ label: "Buying Guide" }]} />
      <CtaBand />
      <Footer />
    </div>
  );
}

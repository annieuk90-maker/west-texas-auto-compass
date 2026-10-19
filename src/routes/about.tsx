import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Header, Footer, pageHead } from "@/components/site";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/about")({
  head: () => pageHead("/about", "About Us", "A vehicle business based in Odessa, Texas."),
  component: Page,
});

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PageHero title="About Us" eyebrow="West Texas Transportation Consultants" intro="A vehicle business based in Odessa, Texas." image={photos.truck.src} crumbs={[{ label: "About Us" }]} />
      <CtaBand />
      <Footer />
    </div>
  );
}

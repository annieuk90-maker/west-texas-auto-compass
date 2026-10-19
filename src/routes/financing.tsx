import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Header, Footer, pageHead } from "@/components/site";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/financing")({
  head: () => pageHead("/financing", "Financing & Trade-Ins", "General financing and trade-in considerations. Ask us what options are available."),
  component: Page,
});

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PageHero title="Financing & Trade-Ins" eyebrow="West Texas Transportation Consultants" intro="General financing and trade-in considerations. Ask us what options are available." image={photos.sedan.src} crumbs={[{ label: "Financing & Trade-Ins" }]} />
      <CtaBand />
      <Footer />
    </div>
  );
}

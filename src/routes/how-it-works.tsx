import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HowItWorksPage } from "@/pages/HowItWorks";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksRoute,
});

function HowItWorksRoute() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HowItWorksPage />
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TermsOfService } from "@/pages/TermsOfService";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <div className="min-h-screen" style={{ background: "#0D0B1E" }}>
      <Navbar />
      <TermsOfService />
      <Footer />
    </div>
  );
}

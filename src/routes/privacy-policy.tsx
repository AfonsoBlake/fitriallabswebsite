import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0D0B1E" }}>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}

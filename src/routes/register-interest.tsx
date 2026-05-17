import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { RegisterInterest } from "@/pages/RegisterInterest";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/register-interest")({
  head: () => ({
    meta: [
      { title: "Free 21-Day Trial — Fluario" },
      {
        name: "description",
        content:
          "Claim your free 21-day full inclusive AI DM integration with Fluario. No limits, no cost — limited spots available.",
      },
      { property: "og:title", content: "Free 21-Day Trial — Fluario" },
      {
        property: "og:description",
        content:
          "Claim your free 21-day full inclusive AI DM integration with Fluario. No limits, no cost — limited spots available.",
      },
    ],
    links: [{ rel: "icon", href: "/fluario-icon.png" }],
  }),
  component: RegisterInterestPage,
});

function RegisterInterestPage() {
  return (
    <div className="min-h-screen">
      <Toaster position="bottom-right" theme="dark" richColors />
      <Navbar />
      <RegisterInterest />
      <Footer />
    </div>
  );
}

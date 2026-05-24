import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { FreeResourcesPage } from "@/pages/FreeResources";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/free-resources")({
  component: FreeResourcesRoute,
});

function FreeResourcesRoute() {
  return (
    <div className="min-h-screen">
      <Toaster position="bottom-right" theme="dark" />
      <Navbar />
      <FreeResourcesPage />
      <Footer />
    </div>
  );
}

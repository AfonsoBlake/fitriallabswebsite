import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { RegisterInterest } from "@/pages/RegisterInterest";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/register-interest")({
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

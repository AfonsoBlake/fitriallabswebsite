import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { BookACall } from "@/pages/BookACall";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/book-a-call")({
  component: BookACallPage,
});

function BookACallPage() {
  return (
    <div className="min-h-screen">
      <Toaster position="bottom-right" theme="dark" richColors />
      <Navbar />
      <BookACall />
      <Footer />
    </div>
  );
}

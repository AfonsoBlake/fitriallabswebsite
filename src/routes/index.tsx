import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Infrastructure } from "@/components/Infrastructure";
import { StatsBar } from "@/components/StatsBar";
import { LiveDemo } from "@/components/LiveDemo";
import { Etymology } from "@/components/Etymology";
import { Founders } from "@/components/Founders";
import { CaseStudy } from "@/components/CaseStudy";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Infrastructure />
      <StatsBar />
      <LiveDemo />
      <Etymology />
      <div id="founders"><Founders /></div>
      <div id="case-study"><CaseStudy /></div>
      <HowItWorks />
      <Services />
      <Pricing />
      <Booking />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

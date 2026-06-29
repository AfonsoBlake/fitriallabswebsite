import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const PRIMARY = "#6366F1";
const ACCENT = "#6B6FD4";
const LAVENDER = "#C4B8F0";
const BG = "#0A0A1A";

const features = [
  "AI agent across Instagram, TikTok, and Facebook Messenger",
  "Natural conversation handling FAQs and your full sales pipeline",
  "Business dashboard with AI configurator",
  "Escalation system with staff inbox",
  "Conversation memory and lead scoring",
  "Suggest reply for staff takeovers",
];

export function Pricing() {
  return (
    <section id="pricing" className="section-pad" style={{ background: BG }}>
      <div className="mx-auto max-w-[1400px] text-center">
        <Reveal>
          <p className="font-mono-caps mb-4" style={{ color: PRIMARY }}>Pricing</p>
          <h2 className="text-4xl md:text-5xl">One plan. Fully managed. Built around your business.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: LAVENDER }}>
            Everything you need to turn your DMs into a sales pipeline, set up and running in days.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mx-auto mt-14"
            style={{
              background: "rgba(30,27,75,0.35)",
              border: "1px solid rgba(107,111,212,0.35)",
              borderRadius: "1.25rem",
              boxShadow: "0 0 60px rgba(99,102,241,0.15)",
              padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 6vw, 3.5rem)",
              maxWidth: "640px",
            }}
          >
            <ul className="flex flex-col gap-4" style={{ textAlign: "left" }}>
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={18} style={{ color: ACCENT, marginTop: 4, flexShrink: 0 }} />
                  <span className="text-white" style={{ lineHeight: 1.6 }}>{f}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm" style={{ color: "rgba(196,184,240,0.6)" }}>
              Pricing is based on your platform and DM volume. Book a call and we will build you a quote in 24 hours.
            </p>

            <Link
              to="/book-a-call"
              className="btn-primary mt-6"
              style={{ display: "inline-flex", justifyContent: "center", cursor: "pointer" }}
            >
              Book a Call
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

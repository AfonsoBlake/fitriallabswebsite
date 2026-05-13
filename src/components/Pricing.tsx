import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Starter",
    price: "$497",
    cadence: "/mo",
    desc: "One platform. One AI agent. Built to start converting your DMs into booked trials immediately.",
    features: [
      "1 platform",
      "Up to 500 DMs/month",
      "Lead qualification AI",
      "Seamless trial booking integration to fill your calendar",
      "Direct email support with 24hr response guarantee",
      "Monthly performance report",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$997",
    cadence: "/mo",
    desc: "All three platforms. Built for gyms ready to scale DM volume without scaling headcount.",
    features: [
      "All 3 platforms",
      "Unlimited DMs",
      "Advanced lead scoring",
      "Full calendar + CRM sync so every lead is tracked and followed up",
      "Follow-up sequences",
      "Weekly analytics dashboard",
      "Priority support",
    ],
    cta: "Most Popular — Start Now",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    desc: "Fully bespoke automation for multi-location operators and high-volume fitness brands.",
    features: [
      "Everything in Growth",
      "Custom AI training",
      "Dedicated account manager",
      "API access",
      "White-label option",
      "SLA guarantee",
      "Onboarding & strategy session",
    ],
    cta: "Book a Strategy Call",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-pad" style={{ background: "#1E1B4B" }}>
      <div className="mx-auto max-w-[1400px] text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">Transparent. Flat rate.<br /><span className="glow">No surprises.</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: "#C4B8F0" }}>No revenue shares. No per-booking fees. One monthly rate that covers everything.</p>
        </Reveal>
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className="card-fluario h-full text-left flex flex-col"
                style={t.featured ? { background: "#3B3A8A", transform: "scale(1.03)", boxShadow: "0 0 50px rgba(107,111,212,0.35)" } : {}}
              >
                <div className="font-mono-caps" style={{ color: "#C4B8F0" }}>{t.name}</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>{t.price}</span>
                  <span className="text-lg" style={{ color: "#C4B8F0" }}>{t.cadence}</span>
                </div>
                <p className="mt-4" style={{ color: "#C4B8F0" }}>{t.desc}</p>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white">
                      <Check size={18} style={{ color: "#6B6FD4", marginTop: 4, flexShrink: 0 }} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#booking" className={`mt-8 ${t.featured ? "btn-primary" : "btn-secondary"} justify-center`}>{t.cta.toUpperCase()}</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const ACCENT = "#6B6FD4";
const PRIMARY = "#6366F1";
const LAVENDER = "#C4B8F0";
const BG = "#0A0A1A";

const phases = [
  {
    n: "01",
    phase: "Phase 1",
    timeframe: "Live Now",
    title: "The Foundation",
    active: true,
    items: [
      "Psych-backed AI agent across Instagram, TikTok, and Facebook Messenger",
      "Natural multi-turn conversation handling FAQs and sales pipelines automatically",
      "Business dashboard with AI configurator",
      "Escalation system with staff inbox",
      "Conversation memory and lead scoring",
      "Suggest reply for staff takeovers",
    ],
  },
  {
    n: "02",
    phase: "Phase 2",
    timeframe: "Q3 2026",
    title: "Smarter and Reportable",
    active: false,
    items: [
      "Conversation summaries in plain English",
      "Weekly performance reports (conversations, leads, bookings, response times)",
      "Follow-up sequences to re-engage cold leads automatically",
      "Objection handling library, configurable per business",
      "Multi-channel unified inbox",
    ],
  },
  {
    n: "03",
    phase: "Phase 3",
    timeframe: "Late 2026",
    title: "Channel Expansion",
    active: false,
    items: [
      "WhatsApp Business",
      "Multilingual AI (Arabic, Spanish, French)",
      "AI voice note listening and transcription",
      "AI-sent personalised voice messages inside DMs",
      "Post-service check-ins and QR code to DM for physical businesses",
    ],
  },
  {
    n: "04",
    phase: "Phase 4",
    timeframe: "2027 and Beyond",
    title: "The Full Platform",
    active: false,
    items: [
      "Shopify integration (abandoned carts, new orders, product enquiries)",
      "CRM sync with GoHighLevel, HubSpot, and Salesforce",
      "Renewal reminders via automated DM",
      "Call recording with AI feedback on conversations",
      "Agency white-label so agencies run Fluario under their own brand",
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="section-pad" style={{ background: BG }}>
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-mono-caps mb-4" style={{ color: PRIMARY }}>
            The Vision
          </p>
          <h2 className="text-4xl md:text-5xl">
            <span style={{ color: PRIMARY, textShadow: `0 0 20px ${PRIMARY}, 0 0 40px rgba(99,102,241,0.5)` }}>
              Roadmap.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg" style={{ color: LAVENDER }}>
            We started with conversation. We are not stopping there.
          </p>
        </Reveal>

        <div className="mt-16 mx-auto max-w-[820px]">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div
                    style={
                      p.active
                        ? {
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: PRIMARY,
                            boxShadow: `0 0 0 4px rgba(99,102,241,0.2), 0 0 24px ${PRIMARY}, 0 0 48px rgba(99,102,241,0.5)`,
                            flexShrink: 0,
                          }
                        : {
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: BG,
                            border: "2px solid rgba(196,184,240,0.35)",
                            flexShrink: 0,
                          }
                    }
                  />
                  {i < phases.length - 1 && (
                    <div
                      style={{
                        width: 2,
                        flex: 1,
                        minHeight: "2rem",
                        marginTop: "0.5rem",
                        background: p.active
                          ? `linear-gradient(to bottom, ${PRIMARY}, rgba(196,184,240,0.25))`
                          : "rgba(196,184,240,0.25)",
                      }}
                    />
                  )}
                </div>

                <div style={{ flex: 1, paddingBottom: i < phases.length - 1 ? "3rem" : 0 }}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="font-mono-caps"
                      style={{
                        color: p.active ? PRIMARY : ACCENT,
                        border: `1px solid ${p.active ? PRIMARY : "rgba(107,111,212,0.35)"}`,
                        borderRadius: 999,
                        padding: "0.3rem 0.8rem",
                      }}
                    >
                      {p.phase}
                    </span>
                    <span className="font-mono-caps" style={{ color: LAVENDER }}>
                      {p.timeframe}
                    </span>
                    {p.active && (
                      <span
                        className="font-mono-caps"
                        style={{
                          color: BG,
                          background: PRIMARY,
                          borderRadius: 999,
                          padding: "0.3rem 0.8rem",
                          boxShadow: `0 0 16px rgba(99,102,241,0.6)`,
                        }}
                      >
                        Live
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl text-white">{p.title}</h3>

                  <ul className="mt-5 flex flex-col gap-3">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={16}
                          style={{ color: p.active ? PRIMARY : ACCENT, marginTop: 4, flexShrink: 0 }}
                        />
                        <span style={{ color: LAVENDER, lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

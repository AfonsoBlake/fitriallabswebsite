import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const ACCENT = "#6B6FD4";
const LAVENDER = "#C4B8F0";

const steps = [
  {
    n: "01",
    t: "ONBOARDING CALL",
    d: "We get on a 10-minute call to learn your business: your brand tone, offer, platforms, and how you want leads handled. Everything we collect builds a personalised framework, not a generic template. Engineered to scale, backed by 5 months of research and real-world testing to make every interaction as psychologically optimised for conversion as possible.",
  },
  {
    n: "02",
    t: "WE BUILD AND YOU TEST",
    d: "We build your custom AI agent and deploy it on Flaurio's own accounts first so you can test the full experience before it goes live on yours. Zero risk, full visibility. Then we get Meta Business Manager access and go live across Instagram, TikTok, Facebook, WhatsApp, and Telegram.",
  },
  {
    n: "03",
    t: "IT RUNS. YOU SCALE.",
    d: "Your AI handles every DM - qualifying leads, answering questions, booking calls, and escalating to your team when humans are needed. All bookings, conversations, and analytics live in your dedicated client dashboard.",
  },
];

const features = [
  "Custom AI persona trained on your brand",
  "Live across Instagram, TikTok, Facebook, Telegram",
  "Human escalation when needed",
  "Full client dashboard with bookings and analytics",
  "Onboarding support from day one",
  "Tested on our accounts before yours",
];

const timeline = [
  { label: "Day 1", desc: "Onboarding call" },
  { label: "Days 1–6", desc: "We build and configure your AI" },
  { label: "Day 7", desc: "You test it on our accounts" },
  { label: "Day 7+", desc: "Goes live on yours" },
];

const faqs = [
  { q: "How long does setup take?", a: "7 days from your onboarding call to going live." },
  { q: "What access do you need from us?", a: "Just Meta Business Manager access. We handle everything else." },
  { q: "What platforms do you support?", a: "Instagram, TikTok, Facebook, and Telegram. WhatsApp coming soon." },
  { q: "Can I pause or stop at any time?", a: "Yes. You can revoke access at any time with no questions asked." },
  { q: "Is the 21-day trial really free?", a: "Completely. No credit card, no commitment. We set everything up at our own cost." },
  { q: "What happens after the 21 days?", a: "We'll discuss options based on your results. Pricing details are coming soon." },
  { q: "Why are you offering this for free?", a: "Honestly? We're early. We know Fluario works but we need real businesses to prove it at scale. By offering the 21 days at no cost, we get to work with brands we believe in, collect genuine feedback, and build the kind of testimonials that can't be faked. The better our results for you, the stronger our reputation becomes. It's a fair trade - you get a fully built AI system for free, we get the proof we need to grow. Everyone wins." },
];

export function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: "#000000", padding: "8rem 1.5rem 7rem" }}>
        <div className="mx-auto max-w-[1400px] text-center">
          <Reveal>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(3rem, 8vw, 7rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              THREE STEPS.
              <br />
              <span className="glow">INFINITE SCALE.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              style={{
                marginTop: "1.75rem",
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                color: LAVENDER,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              From first contact to fully live — in 7 days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── The Three Steps ── */}
      <section className="section-pad" style={{ background: "#1E1B4B" }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-mono-caps mb-4" style={{ color: ACCENT }}>THE PROCESS</p>
            <h2 className="text-4xl md:text-5xl">
              How it <span className="glow">works.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <div className="card-fluario h-full">
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "3.5rem",
                      color: ACCENT,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-2xl text-white">{s.t}</h3>
                  <p className="mt-3" style={{ color: LAVENDER, lineHeight: 1.7 }}>
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="section-pad" style={{ background: "#0D0B2B" }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="text-4xl md:text-5xl text-center">
              EVERYTHING.{" "}
              <span className="glow">DONE FOR YOU.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="card-fluario flex items-start gap-4"
                  style={{ padding: "1.5rem" }}
                >
                  <span
                    style={{
                      color: ACCENT,
                      fontSize: "1.1rem",
                      lineHeight: 1,
                      marginTop: "0.15rem",
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: LAVENDER, lineHeight: 1.6 }}>{feat}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-pad" style={{ background: "#1E1B4B" }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="text-4xl md:text-5xl text-center">
              FROM CALL TO LIVE{" "}
              <span className="glow">IN 7 DAYS.</span>
            </h2>
          </Reveal>

          {/* Desktop */}
          <div className="mt-16 hidden md:block">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: 11,
                  left: "12.5%",
                  right: "12.5%",
                  height: 2,
                  background: "rgba(107,111,212,0.3)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {timeline.map((node, i) => (
                  <Reveal key={i} delay={i * 0.15}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: ACCENT,
                          border: "3px solid #1E1B4B",
                          boxShadow: `0 0 16px ${ACCENT}80`,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: ACCENT,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          textAlign: "center",
                        }}
                      >
                        {node.label}
                      </span>
                      <span
                        style={{
                          color: LAVENDER,
                          textAlign: "center",
                          fontSize: "0.95rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {node.desc}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="mt-12 md:hidden flex flex-col gap-0">
            {timeline.map((node, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: ACCENT,
                        boxShadow: `0 0 12px ${ACCENT}80`,
                      }}
                    />
                    {i < timeline.length - 1 && (
                      <div
                        style={{
                          width: 2,
                          height: 48,
                          background: "rgba(107,111,212,0.3)",
                          marginTop: 4,
                        }}
                      />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < timeline.length - 1 ? "1rem" : 0, paddingTop: "0.1rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: ACCENT,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        display: "block",
                      }}
                    >
                      {node.label}
                    </span>
                    <p style={{ color: LAVENDER, marginTop: "0.3rem", fontSize: "0.95rem" }}>
                      {node.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad" style={{ background: "#000000" }}>
        <div className="mx-auto max-w-[800px]">
          <Reveal>
            <h2 className="text-4xl md:text-5xl text-center">
              COMMON <span className="glow">QUESTIONS.</span>
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  style={{
                    border: "1px solid rgba(107,111,212,0.3)",
                    borderRadius: 12,
                    background: "rgba(30,27,75,0.3)",
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1.25rem 1.5rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                        fontSize: "1rem",
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      style={{
                        color: ACCENT,
                        flexShrink: 0,
                        transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          style={{
                            padding: "0 1.5rem 1.25rem",
                            color: LAVENDER,
                            lineHeight: 1.75,
                            fontSize: "0.95rem",
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad" style={{ background: "#1E1B4B" }}>
        <div className="mx-auto max-w-[1400px] text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">
              READY TO <span className="glow">GET STARTED?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                data-cal-link="fluario-jejc7g/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="btn-secondary"
                style={{ cursor: "pointer" }}
              >
                BOOK A CALL
              </a>
              <Link to="/register-interest" className="btn-primary">
                CLAIM YOUR FREE 21 DAYS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

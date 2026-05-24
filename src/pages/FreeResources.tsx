import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#6B6FD4";
const LAVENDER = "#C4B8F0";

const resources = [
  {
    category: "GUIDE",
    title: "The Instant Reply Playbook",
    description:
      "Why speed kills or wins the sale — and the exact response structure we use to convert cold DMs into booked calls.",
    button: "Read Guide",
  },
  {
    category: "CHECKLIST",
    title: "DM Audit Checklist",
    description:
      "10 questions to identify exactly where your business is losing leads in the DMs right now.",
    button: "Download",
  },
  {
    category: "BREAKDOWN",
    title: "Why Most Businesses Lose 60% of Their DM Leads",
    description:
      "A data-backed breakdown of the most common DM mistakes and how to fix them without hiring more staff.",
    button: "Read Breakdown",
  },
  {
    category: "TEMPLATE",
    title: "High-Converting DM Opener Templates",
    description:
      "5 proven opening messages that start conversations rather than killing them — for any business type.",
    button: "Download",
  },
  {
    category: "GUIDE",
    title: "Instagram DM Automation: What Works in 2026",
    description:
      "A no-fluff guide to what AI DM automation can and cannot do — and how to set it up to actually convert.",
    button: "Read Guide",
  },
  {
    category: "FRAMEWORK",
    title: "The Trust-First Funnel",
    description:
      "The psychology-backed conversation framework Fluario uses to move prospects from cold DM to booked call without ever feeling pushy.",
    button: "Read Framework",
  },
];

function handleResourceClick() {
  toast("Coming soon — register your interest to get early access", {
    style: {
      background: "rgba(30,27,75,0.95)",
      border: "1px solid rgba(107,111,212,0.4)",
      color: "#C4B8F0",
    },
  });
}

export function FreeResourcesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const scrollAmount = track.scrollWidth - section.offsetWidth;

      gsap.to(track, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollAmount}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

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
              FREE <span className="glow">RESOURCES.</span>
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
                maxWidth: 680,
                margin: "1.75rem auto 0",
              }}
            >
              Everything we know about DM automation, lead conversion, and
              growing on social — no gatekeeping.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Resource Cards (pinned horizontal scroll) ── */}
      <section
        ref={sectionRef}
        style={{
          background: "#0D0B2B",
          overflow: "hidden",
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div style={{ paddingLeft: "clamp(1.5rem, 6vw, 6rem)", marginBottom: "3rem" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: ACCENT,
                marginBottom: "0.75rem",
              }}
            >
              The library
            </p>
            <h2 className="text-4xl md:text-5xl">
              Six resources.{" "}
              <span className="glow">No gatekeeping.</span>
            </h2>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "2rem",
            paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
            paddingRight: "clamp(1.5rem, 6vw, 6rem)",
            willChange: "transform",
          }}
        >
          {resources.map((res, i) => (
            <div
              key={i}
              className="card-fluario"
              style={{
                flexShrink: 0,
                width: 400,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  fontWeight: 600,
                }}
              >
                {res.category}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  marginTop: "0.75rem",
                  lineHeight: 1.25,
                }}
              >
                {res.title}
              </h3>
              <p
                style={{
                  color: LAVENDER,
                  lineHeight: 1.7,
                  fontSize: "0.9rem",
                  marginTop: "0.75rem",
                  flex: 1,
                }}
              >
                {res.description}
              </p>
              <button
                onClick={handleResourceClick}
                className="btn-secondary"
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.8rem",
                  padding: "0.65rem 1.5rem",
                  alignSelf: "flex-start",
                }}
              >
                {res.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad" style={{ background: "#1E1B4B" }}>
        <div className="mx-auto max-w-[1400px] text-center">
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Want us to{" "}
              <span className="glow">build this for you?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              style={{
                marginTop: "1.25rem",
                color: LAVENDER,
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              We handle the entire setup — so you can focus on closing.
            </p>
            <div style={{ marginTop: "2.5rem" }}>
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

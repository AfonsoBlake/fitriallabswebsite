import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { NotifyModal } from "@/components/NotifyModal";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#6B6FD4";
const LAVENDER = "#C4B8F0";

const resources: { title: string; description: string[]; button: string; href: string }[] = [
  {
    title: "The Instant Reply Playbook",
    description: [
      "Ever stuck knowing what to reply?",
      "Fluario's research team found the top 3 replies most likely to get a response back.",
      "Covering the 16 most frequently asked questions businesses get in their DMs.",
    ],
    button: "Read Playbook",
    href: "https://drive.google.com/file/d/1qsk-eJxWtZXNCR_lOJgvC4zvmas6yCJQ/view?usp=sharing",
  },
  {
    title: "Instagram DM Automation: What Works in 2026",
    description: [
      "DM automation has been around for years. Most businesses are still doing it wrong. This report covers where it started, where it is now, and where it's going. It breaks down why keyword flows fail, why email is losing the attention war, and what the data actually says when you stack DM automation against every other channel. Real research. No fluff. Built for businesses serious about their DMs.",
    ],
    button: "Read Report",
    href: "https://drive.google.com/file/d/1KEoG1uc_JG9lKYpAdnzL2JKPvTy7BlO1/view?usp=sharing",
  },
];


export function FreeResourcesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const scrollAmount = track.scrollWidth - section.offsetWidth;
      if (scrollAmount <= 0) return;

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
              Two resources.{" "}
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
                width: "clamp(320px, 60vw, 800px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                {res.title}
              </h3>
              <div style={{ flex: 1, marginTop: "0.75rem" }}>
                {res.description.map((line, j) => (
                  <p
                    key={j}
                    style={{
                      color: LAVENDER,
                      lineHeight: 1.7,
                      fontSize: "0.9rem",
                      marginTop: j > 0 ? "0.75rem" : 0,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
              <a
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.8rem",
                  padding: "0.65rem 1.5rem",
                  alignSelf: "flex-start",
                  display: "inline-block",
                }}
              >
                {res.button}
              </a>
            </div>
          ))}

          {/* ── Coming soon card ── */}
          <div
            className="card-fluario"
            style={{
              flexShrink: 0,
              width: "clamp(320px, 60vw, 800px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Pulsing dots graphic */}
            <div style={{ position: "relative", height: 96, marginBottom: "1.75rem" }}>
              {[
                { size: 10, left: "50%", top: "50%", delay: 0 },
                { size: 6,  left: "34%", top: "42%", delay: 0.5 },
                { size: 8,  left: "66%", top: "55%", delay: 0.9 },
                { size: 4,  left: "22%", top: "60%", delay: 1.3 },
                { size: 5,  left: "78%", top: "35%", delay: 0.7 },
                { size: 3,  left: "58%", top: "25%", delay: 1.6 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.25, 0.8, 0.25], scale: [0.85, 1.25, 0.85] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    left: dot.left,
                    top: dot.top,
                    transform: "translate(-50%, -50%)",
                    width: dot.size,
                    height: dot.size,
                    borderRadius: "50%",
                    background: ACCENT,
                    boxShadow: `0 0 ${dot.size * 3}px ${ACCENT}99`,
                  }}
                />
              ))}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "1.2rem",
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
              }}
            >
              More resources on the way.
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
              Playbooks, templates, and reports dropping soon.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-secondary"
              style={{
                marginTop: "1.5rem",
                fontSize: "0.8rem",
                padding: "0.65rem 1.5rem",
                alignSelf: "flex-start",
              }}
            >
              Notify me for future resources
            </button>
          </div>
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
      <NotifyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

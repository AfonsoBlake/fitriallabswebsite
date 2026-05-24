import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";
gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#6B6FD4";
const LAVENDER = "#C4B8F0";

const steps = [
  { n: "01", t: "ONBOARDING CALL", d: "We get on a 10-minute call to learn your business: your brand tone, offer, platforms, and how you want leads handled. Everything we collect builds a personalised framework, not a generic template. Engineered to scale, backed by 5 months of research and real-world testing to make every interaction as psychologically optimised for conversion as possible." },
  { n: "02", t: "WE BUILD & YOU TEST", d: "We build your custom AI agent and deploy it on Flaurio's own accounts first so you can test the full experience before it goes live on yours. Zero risk, full visibility. Then we get Meta Business Manager access and go live across Instagram, TikTok, Facebook, WhatsApp, and Telegram." },
  { n: "03", t: "IT RUNS. YOU SCALE.", d: "Your AI handles every DM; qualifying leads, answering questions, booking calls, and escalating to your team when humans are needed. All bookings, conversations, and analytics live in your dedicated client dashboard." },
];

export function HowItWorks() {
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
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{
        background: "#1E1B4B",
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
          <h2 className="text-4xl md:text-5xl">
            Three steps.{" "}
            <span className="glow">Infinite scale.</span>
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
        {steps.map((s) => (
          <div
            key={s.n}
            className="card-fluario"
            style={{
              flexShrink: 0,
              width: "clamp(300px, 45vw, 580px)",
            }}
          >
            <div
              className="text-6xl font-bold"
              style={{ color: ACCENT, fontFamily: "var(--font-display)" }}
            >
              {s.n}
            </div>
            <h3 className="mt-4 text-2xl text-white">{s.t}</h3>
            <p className="mt-3" style={{ color: LAVENDER, lineHeight: 1.7 }}>
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

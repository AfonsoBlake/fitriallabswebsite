import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

/* ── ticker words ── */
const WORDS = ["HIGH TICKET", "BRANDS", "AMBITION", "FOCUS", "CONVERT", "ELEVATE", "FLOW", "PRIORITISE"];
const ACCENT = "#6B6FD4";

function TickerRow({ direction }: { direction: "left" | "right" }) {
  // repeat enough times to fill wide screens seamlessly
  const repeated = Array(8).fill(WORDS).flat();
  const animClass = direction === "left" ? "ticker-ltr" : "ticker-rtl";

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div className={animClass} style={{ display: "flex", gap: "2.5rem", width: "max-content", willChange: "transform" }}>
        {repeated.map((word, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: i % 2 === 0 ? "#FFFFFF" : ACCENT,
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
          >
            {word}&nbsp;<span style={{ color: ACCENT, opacity: 0.7 }}>·</span>&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="section-pad" style={{ background: "#1E1B4B" }}>
      <div className="mx-auto max-w-[1400px] text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">Transparent. Flat rate.<br /><span className="glow">No surprises.</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: "#C4B8F0" }}>No revenue shares. No per-booking fees. One monthly rate that covers everything.</p>
        </Reveal>

        {/* ── Brand story card ── */}
        <Reveal>
          <div
            style={{
              background: "#0D0B2B",
              border: "1px solid rgba(107,111,212,0.25)",
              borderRadius: "1.25rem",
              boxShadow: "0 0 60px rgba(107,111,212,0.12)",
              padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 6vw, 4rem)",
              maxWidth: "820px",
              margin: "3.5rem auto 0",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                lineHeight: 1.75,
                color: "#C4B8F0",
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              Flaurio was built out of frustration. Two founders, one mission — stop letting businesses lose leads in their DMs. What started as a gym automation tool in Abu Dhabi became a full-scale AI infrastructure for any brand with real traffic and real ambition. We don't sell software. We install growth.
            </p>
            <Link
              to="/register-interest"
              className="btn-primary"
              style={{ display: "inline-flex", marginTop: "2rem", justifyContent: "center" }}
            >
              Claim My Free 21 Days (No-Cost) — On Us
            </Link>
          </div>
        </Reveal>

        {/* ── Infinite ticker ── */}
        <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1.25rem", overflow: "hidden" }}>
          <TickerRow direction="left" />
          <TickerRow direction="right" />
        </div>
      </div>

      {/* ── commented-out original pricing cards ──
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
      ── end commented-out pricing cards ── */}
    </section>
  );
}

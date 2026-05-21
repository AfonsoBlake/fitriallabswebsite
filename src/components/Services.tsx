import { Reveal } from "./Reveal";

const items = [
  { n: "01", t: "DM Automation", d: "AI responds to every inbound message instantly. No delays, no missed leads, no human required." },
  { n: "02", t: "Trust-First Conversations", d: "Our AI doesn't pitch, it connects. Every reply is personalised to make the prospect feel heard, understood, and confident in your brand." },
  { n: "03", t: "Funneling Prospects", d: "Once trust is built, our AI gently guides prospects toward your main CTA. No hard selling, no pressure. Just a natural flow that converts." },
  { n: "04", t: "Multi-Platform Coverage", d: "One AI agent. Three platforms. Instagram, TikTok, and Facebook DMs covered simultaneously." },
  { n: "05", t: "Campaign Sequences", d: "Automated follow-up sequences that re-engage cold leads and turn silence into sales conversations." },
  { n: "06", t: "Analytics & Reporting", d: "Real-time dashboards showing message volume, qualification rates, bookings, and revenue attribution." },
];

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">Everything you need to <span className="glow">automate.</span></h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={(i % 3) * 0.08}>
              <div className="card-fluario h-full">
                <div className="font-mono-caps" style={{ color: "#6B6FD4" }}>{it.n}</div>
                <h3 className="mt-3 text-2xl text-white">{it.t}</h3>
                <p className="mt-3" style={{ color: "#C4B8F0" }}>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

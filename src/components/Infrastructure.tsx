import { Clock, ArrowUpRight, Infinity as InfinityIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Clock, value: "<60s", label: "Average response time" },
  { icon: ArrowUpRight, value: "+31%", label: "Booked call increase" },
  { icon: InfinityIcon, value: "24/7", label: "Lead qualification" },
];

export function Infrastructure() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2">
        <Reveal>
          <span className="font-mono-caps">DM Automation Infrastructure</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Respond to leads in under 60 seconds — without hiring more staff.</h2>
          <p className="mt-6 text-lg" style={{ color: "#C4B8F0" }}>
            Built to qualify, nurture, and book customers automatically through Instagram DMs.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            className="rounded-2xl p-8 backdrop-blur-md"
            style={{
              background: "rgba(107,111,212,0.1)",
              border: "1px solid rgba(107,111,212,0.3)",
              boxShadow: "0 0 60px rgba(107,111,212,0.25)",
            }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className={`flex items-center justify-between py-6 ${i < stats.length - 1 ? "border-b border-[rgba(107,111,212,0.2)]" : ""}`}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold" style={{ color: "#6B6FD4", fontFamily: "var(--font-display)" }}>{s.value}</div>
                  <div className="mt-1 text-sm" style={{ color: "#C4B8F0" }}>{s.label}</div>
                </div>
                <s.icon size={32} style={{ color: "#6B6FD4" }} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

const stats = [
  { value: "127", label: "DMs Handled" },
  { value: "23", label: "Trials Booked" },
  { value: "<60s", label: "Average Response Time" },
];

export function CaseStudy() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl text-center">Proof of concept. <span className="glow">Cobra Fitness.</span></h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="p-8 text-center" style={{ border: "1px solid rgba(107,111,212,0.3)", borderRadius: 12, background: "rgba(30,27,75,0.3)" }}>
                <div style={{ color: "#6B6FD4", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "4rem", lineHeight: 1 }}>{s.value}</div>
                <div className="mt-4 font-mono-caps" style={{ color: "#C4B8F0" }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-8 text-center text-base" style={{ color: "#C4B8F0" }}>
            Cobra Fitness UAE — proof of concept deployment. Full case study in progress.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

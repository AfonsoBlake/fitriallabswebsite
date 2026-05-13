import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Connect your account", d: "Link your Instagram, TikTok, or Facebook business account in under 5 minutes. No technical setup required. We handle the integration." },
  { n: "02", t: "Configure your AI", d: "Tell us about your business, your offer, and how you want to qualify leads. We build a custom AI agent trained on your exact playbook." },
  { n: "03", t: "Watch leads convert", d: "Your AI goes live and starts responding to every DM instantly — qualifying leads, answering questions, and booking calls while you focus on delivery." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad" style={{ background: "#1E1B4B" }}>
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">Three steps. <span className="glow">Infinite scale.</span></h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="card-fluario h-full">
                <div className="text-6xl font-bold" style={{ color: "#6B6FD4", fontFamily: "var(--font-display)" }}>{s.n}</div>
                <h3 className="mt-4 text-2xl text-white">{s.t}</h3>
                <p className="mt-3" style={{ color: "#C4B8F0" }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

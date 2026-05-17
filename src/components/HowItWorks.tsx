import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "ONBOARDING CALL", d: "We get on a 10-minute call to learn your business: your brand tone, offer, platforms, and how you want leads handled. Everything we collect builds a personalised framework, not a generic template. Engineered to scale, backed by 5 months of research and real-world testing to make every interaction as psychologically optimised for conversion as possible." },
  { n: "02", t: "WE BUILD & YOU TEST", d: "We build your custom AI agent and deploy it on Flaurio's own accounts first so you can test the full experience before it goes live on yours. Zero risk, full visibility. Then we get Meta Business Manager access and go live across Instagram, TikTok, Facebook, WhatsApp, and Telegram." },
  { n: "03", t: "IT RUNS. YOU SCALE.", d: "Your AI handles every DM; qualifying leads, answering questions, booking calls, and escalating to your team when humans are needed. All bookings, conversations, and analytics live in your dedicated client dashboard." },
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

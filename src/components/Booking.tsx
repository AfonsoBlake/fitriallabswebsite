import { Reveal } from "./Reveal";

const bullets = [
  "We learn your brand tone, offer and target customer",
  "We collect everything needed to build your personalised AI framework",
  "Live demo examples of the AI in action",
  "You go live within 7 days, fully built, tested and deployed",
];

export function Booking() {
  return (
    <section id="booking" className="section-pad">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">Let's build your AI. <span className="glow">Start here.</span></h2>
          <p className="mt-6 text-lg" style={{ color: "#C4B8F0" }}>A 10-minute onboarding call where we learn your business. Brand tone, offer, platforms, and how you want leads handled. Everything we collect builds a personalised framework engineered to convert.</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-white">
                <span className="h-2 w-2 rounded-full" style={{ background: "#6B6FD4", boxShadow: "0 0 10px #6B6FD4" }} /> {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center justify-center w-full rounded-2xl" style={{ minHeight: 320, border: "1px solid rgba(107,111,212,0.3)", background: "rgba(107,111,212,0.05)" }}>
            <a
              href="https://calendly.com/fittriallabs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-caps text-white text-lg"
              style={{
                background: "#6B6FD4",
                borderRadius: 50,
                padding: "1rem 2.5rem",
                boxShadow: "0 0 30px rgba(107,111,212,0.6), 0 10px 25px rgba(0,0,0,0.35)",
                display: "inline-block",
              }}
            >
              BOOK YOUR FREE CALL
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

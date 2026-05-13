import { Reveal } from "./Reveal";

const founders = [
  { name: "Afonso", initial: "A", bio: "Co-founder focused on sales, strategy, and client growth. Obsessed with turning conversations into conversions." },
  { name: "Kareem", initial: "K", bio: "Co-founder and technical architect. Designed and built the entire Fluario AI system from scratch." },
];

export function Founders() {
  return (
    <section className="section-pad" style={{ background: "#1E1B4B" }}>
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">The people behind the machine.</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="card-fluario">
                <div className="aspect-[3/4] w-full rounded-xl flex items-center justify-center" style={{ border: "1px solid rgba(107,111,212,0.3)", background: "linear-gradient(135deg, rgba(107,111,212,0.15), rgba(30,27,75,0.5))" }}>
                  <div
                    className="flex items-center justify-center rounded-full text-white"
                    style={{
                      width: 160,
                      height: 160,
                      background: "#6B6FD4",
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: 72,
                      boxShadow: "0 0 40px rgba(107,111,212,0.4)",
                    }}
                  >
                    {f.initial}
                  </div>
                </div>
                <div className="mt-6 font-mono-caps">Co-Founder</div>
                <h3 className="mt-2 text-3xl text-white">{f.name}</h3>
                <p className="mt-3" style={{ color: "#C4B8F0" }}>{f.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

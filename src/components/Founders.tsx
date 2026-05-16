import { Reveal } from "./Reveal";

const founders = [
  {
    name: "Afonso",
    photo: "/afonso.jpg",
    bio: "Focused on sales, strategy, and solidifying the next moves to execute. Technical architect and alongside Kareem, turning ideas into reality.",
  },
  {
    name: "Kareem",
    photo: "/kareem.jpg",
    bio: "Kareem is Flaurio's main technical co-founder. Turning ideas into architectural builds and AI pipelines.",
  },
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
                <div style={{ height: 380, width: "100%", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(107,111,212,0.3)", background: "rgba(30,27,75,0.3)" }}>
                  <img
                    src={f.photo}
                    alt={f.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center center",
                      display: "block",
                    }}
                  />
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

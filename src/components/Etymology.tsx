import { Reveal } from "./Reveal";

export function Etymology() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto rounded-2xl bg-white p-10 md:p-16" style={{ maxWidth: 700 }}>
            <h3 className="text-5xl md:text-6xl text-black" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, textTransform: "none", letterSpacing: "-0.02em" }}>Fluario</h3>
            <div className="mt-2 text-lg" style={{ color: "#888888" }}>/fluːˈɑːrioʊ/</div>
            <div className="my-6 h-px" style={{ background: "#E5E5E5" }} />
            <p className="text-black text-lg font-medium">Fluario (noun)</p>
            <p className="mt-3 text-black text-base">Latin for flow (just like customers flowing in when using Fluario).</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

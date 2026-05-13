import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "./Reveal";

function Counter({ to, suffix = "", prefix = "", duration = 1.5 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

const items = [
  { node: <><Counter to={60} prefix="<" suffix="s" /></>, label: "Average Response Time" },
  { node: <><Counter to={31} prefix="+" suffix="%" /></>, label: "Booked Call Increase" },
  { node: <span>24/7</span>, label: "Always On", dot: true },
];

export function StatsBar() {
  return (
    <section className="section-pad" style={{ background: "#1E1B4B" }}>
      <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.1}>
            <div className={`text-center md:text-left ${i > 0 ? "md:border-l md:border-[rgba(107,111,212,0.2)] md:pl-12" : ""}`}>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <motion.div className="text-5xl md:text-6xl text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                  {it.node}
                </motion.div>
                {it.dot && <span className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" /><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" /></span>}
              </div>
              <div className="mt-3 font-mono-caps">{it.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

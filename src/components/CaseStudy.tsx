import { useState } from "react";
import { Reveal } from "./Reveal";
import { Slider } from "@/components/ui/slider";

export function CaseStudy() {
  const [dms, setDms] = useState(500);

  const hoursSaved = Math.round((dms * 4) / 60);
  const moreCustomers = Math.round(dms * 0.08 * 3.91);
  const staffCostSaved = hoursSaved * 35;

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl text-center">Proof of concept.</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 mx-auto max-w-2xl">
            <p className="font-mono-caps text-center mb-8">
              How many DMs does your business get per month?
            </p>
            <Slider
              min={50}
              max={5000}
              step={10}
              value={[dms]}
              onValueChange={([val]) => setDms(val)}
            />
            <div className="flex justify-between mt-2">
              <span className="font-mono-caps" style={{ color: "#C4B8F0" }}>50</span>
              <span className="font-mono-caps" style={{ color: "#C4B8F0" }}>5,000</span>
            </div>
            <div className="text-center mt-6">
              <span
                style={{
                  color: "#6B6FD4",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "3rem",
                  lineHeight: 1,
                }}
              >
                {dms.toLocaleString()}
              </span>
              <span className="font-mono-caps ml-3">DMs / month</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal delay={0.1} className="h-full">
            <div
              className="p-8 flex flex-col h-full"
              style={{
                border: "1px solid rgba(107,111,212,0.3)",
                borderRadius: 12,
                background: "rgba(30,27,75,0.3)",
              }}
            >
              <div className="font-mono-caps mb-6" style={{ color: "#C4B8F0" }}>
                Time Saved
              </div>
              <div
                style={{
                  color: "#6B6FD4",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "4rem",
                  lineHeight: 1,
                }}
              >
                {hoursSaved}
              </div>
              <div className="font-mono-caps mt-3">Hours Saved Per Month</div>
              <p className="mt-4 text-sm" style={{ color: "#C4B8F0", lineHeight: 1.6 }}>
                Time your team gets back to focus on high-value work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="h-full">
            <div
              className="p-8 flex flex-col h-full"
              style={{
                border: "1px solid rgba(107,111,212,0.3)",
                borderRadius: 12,
                background: "rgba(30,27,75,0.3)",
              }}
            >
              <div className="font-mono-caps mb-6" style={{ color: "#C4B8F0" }}>
                Conversion Rate Lift
              </div>
              <div
                style={{
                  color: "#6B6FD4",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "4rem",
                  lineHeight: 1,
                }}
              >
                391%
              </div>
              <div className="font-mono-caps mt-3">Higher Conversion Rate</div>
              <p className="mt-4 text-sm" style={{ color: "#C4B8F0", lineHeight: 1.6 }}>
                Across your{" "}
                <strong style={{ color: "#fff" }}>{dms.toLocaleString()}</strong> monthly DMs,
                that's approximately{" "}
                <strong style={{ color: "#6B6FD4" }}>{moreCustomers}</strong> more customers per
                month.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="h-full">
            <div
              className="p-8 flex flex-col h-full"
              style={{
                border: "1px solid rgba(107,111,212,0.3)",
                borderRadius: 12,
                background: "rgba(30,27,75,0.3)",
              }}
            >
              <div className="font-mono-caps mb-6" style={{ color: "#C4B8F0" }}>
                Monthly Value Unlocked
              </div>
              <div
                style={{
                  color: "#6B6FD4",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "4rem",
                  lineHeight: 1,
                }}
              >
                ${staffCostSaved.toLocaleString()}
              </div>
              <div className="font-mono-caps mt-3">Saved In Staff Time</div>
              <p className="mt-4 text-sm" style={{ color: "#C4B8F0", lineHeight: 1.6 }}>
                Direct staff time to profitable tasks, not prioritising DMs. (You're not??) Yeah, that's why your DMs slack.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <p className="mt-8 text-center text-xs" style={{ color: "rgba(196,184,240,0.45)" }}>
            Estimates based on Harvard Business Review response-time studies and industry DM
            benchmarks.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

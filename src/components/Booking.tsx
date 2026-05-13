import { useEffect } from "react";
import { Reveal } from "./Reveal";

const bullets = [
  "No sales pressure",
  "Live demo of your AI agent",
  "Custom automation roadmap",
  "Instant follow-up + next steps",
];

export function Booking() {
  useEffect(() => {
    if (document.querySelector('script[data-calendly]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendly = "true";
    document.body.appendChild(script);
  }, []);

  return (
    <section id="booking" className="section-pad">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">Let's build your AI. <span className="glow">Book now.</span></h2>
          <p className="mt-6 text-lg" style={{ color: "#C4B8F0" }}>30-minute strategy call. We'll audit your current DM workflow, identify your biggest leaks, and show you exactly what Fluario would look like inside your business.</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-white">
                <span className="h-2 w-2 rounded-full" style={{ background: "#6B6FD4", boxShadow: "0 0 10px #6B6FD4" }} /> {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
            data-url="https://calendly.com/fluario/strategy-call?hide_event_type_details=0&hide_gdpr_banner=1&background_color=1E1B4B&text_color=ffffff&primary_color=6B6FD4"
            style={{ minWidth: 320, height: 700, border: "1px solid rgba(107,111,212,0.3)" }}
          />
        </Reveal>
      </div>
    </section>
  );
}

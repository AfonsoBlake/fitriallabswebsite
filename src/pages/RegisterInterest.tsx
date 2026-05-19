import { useState } from "react";

const inputClass =
  "w-full bg-[rgba(30,27,75,0.3)] border border-[rgba(107,111,212,0.3)] rounded-lg px-4 py-3 text-white placeholder-[rgba(196,184,240,0.35)] focus:outline-none focus:border-[#6B6FD4] transition-colors text-sm";

const labelClass = "font-mono-caps block mb-2";

const monoAccentLabel = {
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.15em",
  fontSize: "0.68rem",
  color: "#6B6FD4",
};

const selectArrow = {
  appearance: "none" as const,
  cursor: "pointer",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C4B8F0' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 14px center",
};

export function RegisterInterest() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [primaryPlatform, setPrimaryPlatform] = useState("");
  const [monthlyDmVolume, setMonthlyDmVolume] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [phone, setPhone] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setBusinessName("");
    setPrimaryPlatform("");
    setMonthlyDmVolume("");
    setMainGoal("");
    setPhone("");
    setSubmitted(false);
  };

  const handleSubmit = async () => {
    console.log('submitting form...');
    const formData = new FormData();
    formData.append('submittedAt', new Date().toISOString());
    formData.append('name', name);
    formData.append('email', email);
    formData.append('businessName', businessName);
    formData.append('primaryPlatform', primaryPlatform);
    formData.append('monthlyDmVolume', monthlyDmVolume);
    formData.append('mainGoal', mainGoal);
    formData.append('phone', phone || '');

    console.log('posting to google sheets...');

    setIsSubmitting(true);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzNYwij8rD-a8YLcrjAPYlgHhAkF1d1ETjU_BN8evDu9kqw8x9bY9DEcCmH8QnEsDFmwg/exec', {
        method: 'POST',
        body: formData,
      });
      console.log('submitted successfully');
      setSubmitted(true);
      setTimeout(() => resetForm(), 5000);
    } catch (err) {
      console.error('submission error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black py-12 px-6 md:px-12" style={{ minHeight: "calc(100vh - 73px)" }}>
      <div className="mx-auto max-w-[1240px]">

        {/* Outer card */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(107,111,212,0.3)", background: "rgba(30,27,75,0.12)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── LEFT COLUMN ── */}
            <div
              className="flex flex-col gap-5 p-6 md:p-8 border-b lg:border-b-0"
              style={{ borderColor: "rgba(107,111,212,0.3)", borderRightWidth: "1px", borderRightStyle: "solid" }}
            >
              {/* Top accent label — nowrap */}
              <p style={{ ...monoAccentLabel, whiteSpace: "nowrap", overflow: "hidden" }}>
                GET A COMPLETE FREE 21 DAY DEMO, NO LIMITS
              </p>

              {/* Headline — 2rem / 32px */}
              <h2
                className="text-white"
                style={{ fontSize: "2rem", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 900 }}
              >
                Claim a no-cost{" "}
                <span className="glow">21 day</span>{" "}
                full inclusive integration, on us
              </h2>

              {/* Mono subtext — smaller, compact */}
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#C4B8F0", lineHeight: 1.65 }}>
                Planted and sprouted in Abu Dhabi and growing rapidly globally.
                Rolling access in small waves, something worth grabbing before
                it&apos;s too late!
              </p>

              {/* Stat boxes */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="rounded-lg p-4"
                  style={{ border: "1px solid rgba(107,111,212,0.35)", background: "rgba(30,27,75,0.45)" }}
                >
                  <p
                    className="font-mono-caps mb-2"
                    style={{ fontSize: "0.58rem", whiteSpace: "nowrap" }}
                  >
                    SPOTS REMAINING
                  </p>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.9rem", color: "#6B6FD4", lineHeight: 1 }}>
                    12
                  </p>
                </div>
                <div
                  className="rounded-lg p-4"
                  style={{ border: "1px solid rgba(107,111,212,0.35)", background: "rgba(30,27,75,0.45)" }}
                >
                  <p
                    className="font-mono-caps mb-2"
                    style={{ fontSize: "0.58rem", whiteSpace: "nowrap" }}
                  >
                    ONBOARDING RATE
                  </p>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.9rem", color: "#FFFFFF", lineHeight: 1 }}>
                    ~3/wk
                  </p>
                </div>
              </div>

              {/* Rollout progress bar */}
              <div>
                <p
                  className="font-mono-caps mb-3"
                  style={{ fontSize: "0.58rem", whiteSpace: "nowrap" }}
                >
                  ROLLOUT
                </p>
                <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid rgba(107,111,212,0.3)" }}>
                  <div
                    className="flex-1 min-w-0 px-2 py-2 text-center overflow-hidden"
                    style={{ background: "rgba(30,27,75,0.5)", borderRight: "1px solid rgba(107,111,212,0.3)" }}
                  >
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontSize: "0.48rem",
                      color: "rgba(196,184,240,0.5)",
                      display: "block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                      AI ARCHITECTURE DEVELOPING &amp; BUILDING
                    </span>
                  </div>
                  <div
                    className="flex-1 min-w-0 px-2 py-2 text-center"
                    style={{ background: "#6B6FD4", borderRight: "1px solid rgba(107,111,212,0.5)" }}
                  >
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontSize: "0.48rem",
                      color: "#FFFFFF",
                      display: "block",
                      whiteSpace: "nowrap",
                      fontWeight: 700,
                    }}>
                      EARLY ACCESS
                    </span>
                  </div>
                  <div
                    className="flex-1 min-w-0 px-2 py-2 text-center overflow-hidden"
                    style={{ background: "rgba(30,27,75,0.5)" }}
                  >
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontSize: "0.48rem",
                      color: "rgba(196,184,240,0.35)",
                      display: "block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                      PUBLIC BETA
                    </span>
                  </div>
                </div>
              </div>

              {/* Terminal block */}
              <div
                className="rounded-lg p-4 md:p-5"
                style={{
                  background: "#080808",
                  border: "1px solid rgba(107,111,212,0.3)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  lineHeight: 1.85,
                }}
              >
                <p style={{ color: "#C4B8F0", whiteSpace: "nowrap" }}>$ sys: early_access_v1</p>
                <p style={{ color: "#C4B8F0", whiteSpace: "nowrap" }}>$ mode: application_only</p>
                <p style={{ color: "#C4B8F0", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "4px" }}>
                  $ status: accepting&nbsp;
                  <span
                    className="cursor-blink"
                    style={{ display: "inline-block", width: "8px", height: "13px", background: "#6B6FD4", verticalAlign: "middle", flexShrink: 0 }}
                  />
                </p>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="p-6 md:p-8">
              {submitted ? (
                /* ── SUCCESS STATE ── */
                <div className="flex flex-col items-start justify-center h-full gap-6 py-8">
                  <div
                    className="rounded-lg px-3 py-1"
                    style={{ background: "rgba(107,111,212,0.15)", border: "1px solid rgba(107,111,212,0.4)" }}
                  >
                    <span style={{ ...monoAccentLabel, color: "#6B6FD4" }}>APPLICATION RECEIVED</span>
                  </div>
                  <h3
                    className="text-white"
                    style={{ fontSize: "1.6rem", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em" }}
                  >
                    You&apos;re in.
                  </h3>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#C4B8F0", lineHeight: 1.7 }}>
                    We&apos;ll be in touch within 48 hours.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(196,184,240,0.6)" }}>
                    Our team reviews every application personally. If you&apos;re a
                    good fit we&apos;ll reach out to schedule your onboarding call and
                    get your AI system running — at zero cost for 21 days.
                  </p>
                  <button
                    onClick={resetForm}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(196,184,240,0.45)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    ← Submit another
                  </button>
                </div>
              ) : (
                /* ── FORM STATE ── */
                <>
                  <div className="mb-6">
                    <p style={monoAccentLabel} className="mb-2">APPLY</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#C4B8F0" }}>
                      We review every application personally — and set up your entire AI system at no cost for 21 days.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">

                    {/* NAME + EMAIL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>NAME *</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Your name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>EMAIL *</label>
                        <input
                          type="email"
                          className={inputClass}
                          placeholder="you@business.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* BUSINESS NAME + PRIMARY PLATFORM */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>BUSINESS NAME *</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Your business"
                          value={businessName}
                          onChange={e => setBusinessName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>PRIMARY PLATFORM *</label>
                        <select
                          className={inputClass}
                          style={selectArrow}
                          value={primaryPlatform}
                          onChange={e => setPrimaryPlatform(e.target.value)}
                        >
                          <option value="" style={{ background: "#1E1B4B" }}>Select platform</option>
                          <option value="Instagram" style={{ background: "#1E1B4B" }}>Instagram</option>
                          <option value="TikTok" style={{ background: "#1E1B4B" }}>TikTok</option>
                          <option value="Facebook" style={{ background: "#1E1B4B" }}>Facebook</option>
                          <option value="WhatsApp" style={{ background: "#1E1B4B" }}>WhatsApp</option>
                          <option value="Telegram" style={{ background: "#1E1B4B" }}>Telegram</option>
                          <option value="Multiple" style={{ background: "#1E1B4B" }}>Multiple</option>
                        </select>
                      </div>
                    </div>

                    {/* MONTHLY DM VOLUME */}
                    <div>
                      <label className={labelClass}>MONTHLY DM VOLUME *</label>
                      <select
                        className={inputClass}
                        style={selectArrow}
                        value={monthlyDmVolume}
                        onChange={e => setMonthlyDmVolume(e.target.value)}
                      >
                        <option value="" style={{ background: "#1E1B4B" }}>Select volume</option>
                        <option value="Under 100" style={{ background: "#1E1B4B" }}>Under 100</option>
                        <option value="100–500" style={{ background: "#1E1B4B" }}>100–500</option>
                        <option value="500–2,000" style={{ background: "#1E1B4B" }}>500–2,000</option>
                        <option value="2,000+" style={{ background: "#1E1B4B" }}>2,000+</option>
                      </select>
                    </div>

                    {/* MAIN GOAL */}
                    <div>
                      <label className={labelClass}>WHAT&apos;S YOUR MAIN GOAL? *</label>
                      <textarea
                        className={inputClass}
                        style={{ resize: "vertical", minHeight: "88px" }}
                        placeholder="e.g. convert more DMs, stop missing leads, scale without hiring..."
                        value={mainGoal}
                        onChange={e => setMainGoal(e.target.value)}
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className={labelClass}>
                        PHONE{" "}
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "rgba(196,184,240,0.45)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          (optional)
                        </span>
                      </label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="+971 50 000 0000"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center mt-1"
                      style={{
                        fontSize: "0.88rem",
                        letterSpacing: "0.06em",
                        opacity: isSubmitting ? 0.6 : 1,
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                      }}
                    >
                      {isSubmitting ? "Submitting…" : "Claim My Free 21 Days"}
                    </button>
                  </div>
                </>
              )}

              {/* Any questions? */}
              <div
                className="mt-6 pt-5 flex items-center gap-4 flex-wrap"
                style={{ borderTop: "1px solid rgba(107,111,212,0.15)" }}
              >
                <span className="text-sm" style={{ color: "rgba(196,184,240,0.45)" }}>
                  Any questions?
                </span>
                <a
                  href="/#live-demo"
                  className="btn-primary"
                  style={{ fontSize: "0.78rem", padding: "0.55rem 1.1rem" }}
                >
                  Get Your Answers
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

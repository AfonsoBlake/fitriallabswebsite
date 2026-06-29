import { useRef, useState } from "react";

const inputClass = (hasError: boolean) =>
  `w-full bg-[rgba(30,27,75,0.3)] border ${
    hasError ? "border-red-400" : "border-[rgba(107,111,212,0.3)]"
  } rounded-lg px-4 py-3 text-white placeholder-[rgba(196,184,240,0.35)] focus:outline-none ${
    hasError ? "focus:border-red-400" : "focus:border-[#6B6FD4]"
  } transition-colors text-sm`;

const errorTextClass = "mt-1.5 text-xs text-red-400";

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

const CAL_LINK = "fluario-jejc7g/30min";
const CAL_NAMESPACE = "30min";
const CAL_CONFIG = { layout: "month_view", useSlotsViewOnSmallScreen: "true" };

const openCalModal = () => {
  window.Cal?.ns[CAL_NAMESPACE]("modal", {
    calLink: CAL_LINK,
    config: CAL_CONFIG,
  });
};

type RequiredField =
  | "name"
  | "email"
  | "businessName"
  | "primaryPlatform"
  | "monthlyDmVolume"
  | "mainGoal";

type FieldErrors = Partial<Record<RequiredField, string>>;

const REQUIRED_FIELD_ORDER: RequiredField[] = [
  "name",
  "email",
  "businessName",
  "primaryPlatform",
  "monthlyDmVolume",
  "mainGoal",
];

export function BookACall() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [primaryPlatform, setPrimaryPlatform] = useState("");
  const [monthlyDmVolume, setMonthlyDmVolume] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [phone, setPhone] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const businessNameRef = useRef<HTMLInputElement>(null);
  const primaryPlatformRef = useRef<HTMLSelectElement>(null);
  const monthlyDmVolumeRef = useRef<HTMLSelectElement>(null);
  const mainGoalRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefs: Record<RequiredField, React.RefObject<HTMLElement | null>> = {
    name: nameRef,
    email: emailRef,
    businessName: businessNameRef,
    primaryPlatform: primaryPlatformRef,
    monthlyDmVolume: monthlyDmVolumeRef,
    mainGoal: mainGoalRef,
  };

  const clearError = (field: RequiredField) => {
    setErrors(prev => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setBusinessName("");
    setPrimaryPlatform("");
    setMonthlyDmVolume("");
    setMainGoal("");
    setPhone("");
    setSubmitted(false);
    setErrors({});
  };

  const handleSubmit = async () => {
    const newErrors: FieldErrors = {};
    if (!name.trim()) newErrors.name = "This field is required";
    if (!email.trim()) newErrors.email = "This field is required";
    if (!businessName.trim()) newErrors.businessName = "This field is required";
    if (!primaryPlatform) newErrors.primaryPlatform = "This field is required";
    if (!monthlyDmVolume) newErrors.monthlyDmVolume = "This field is required";
    if (!mainGoal.trim()) newErrors.mainGoal = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstInvalidField = REQUIRED_FIELD_ORDER.find(field => newErrors[field]);
      const el = firstInvalidField ? fieldRefs[firstInvalidField].current : null;
      if (el) {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (!isInView) el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
      return;
    }

    const formData = new FormData();
    formData.append('submittedAt', new Date().toISOString());
    formData.append('name', name);
    formData.append('email', email);
    formData.append('businessName', businessName);
    formData.append('primaryPlatform', primaryPlatform);
    formData.append('monthlyDmVolume', monthlyDmVolume);
    formData.append('mainGoal', mainGoal);
    formData.append('phone', phone || '');
    formData.append('source', 'book-a-call-page');

    setIsSubmitting(true);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzNYwij8rD-a8YLcrjAPYlgHhAkF1d1ETjU_BN8evDu9kqw8x9bY9DEcCmH8QnEsDFmwg/exec', {
        method: 'POST',
        body: formData,
      });
      setSubmitted(true);
      openCalModal();
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
                BOOK A STRATEGY CALL
              </p>

              {/* Headline — 2rem / 32px */}
              <h2
                className="text-white"
                style={{ fontSize: "2rem", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 900 }}
              >
                LET&apos;S TALK ABOUT <span className="glow">YOUR BUSINESS</span>
              </h2>

              {/* Mono subtext — smaller, compact */}
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#C4B8F0", lineHeight: 1.65 }}>
                Tell us a bit about yourself before we meet — it means we can
                skip the basics and get straight to what matters for your
                business.
              </p>

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
                <p style={{ color: "#C4B8F0", whiteSpace: "nowrap" }}>$ step_1: we review your answers</p>
                <p style={{ color: "#C4B8F0", whiteSpace: "nowrap" }}>$ step_2: call is confirmed</p>
                <p style={{ color: "#C4B8F0", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "4px" }}>
                  $ step_3: we build your AI system live&nbsp;
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
                    <span style={{ ...monoAccentLabel, color: "#6B6FD4" }}>DETAILS RECEIVED</span>
                  </div>
                  <h3
                    className="text-white"
                    style={{ fontSize: "1.6rem", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em" }}
                  >
                    Let&apos;s pick a time.
                  </h3>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#C4B8F0", lineHeight: 1.7 }}>
                    Your calendar should be opening now.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(196,184,240,0.6)" }}>
                    If it didn&apos;t open automatically, click below to choose a
                    time that works for you.
                  </p>
                  <button
                    type="button"
                    onClick={openCalModal}
                    className="btn-primary"
                    style={{ fontSize: "0.78rem", padding: "0.55rem 1.1rem" }}
                  >
                    Open Calendar
                  </button>
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
                    <p style={monoAccentLabel} className="mb-2">YOUR DETAILS</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#C4B8F0" }}>
                      Takes 60 seconds. We review every application before confirming your call.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">

                    {/* NAME + EMAIL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>NAME *</label>
                        <input
                          ref={nameRef}
                          type="text"
                          className={inputClass(!!errors.name)}
                          placeholder="Your name"
                          value={name}
                          onChange={e => { setName(e.target.value); clearError("name"); }}
                        />
                        {errors.name && <p className={errorTextClass}>{errors.name}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>EMAIL *</label>
                        <input
                          ref={emailRef}
                          type="email"
                          className={inputClass(!!errors.email)}
                          placeholder="you@business.com"
                          value={email}
                          onChange={e => { setEmail(e.target.value); clearError("email"); }}
                        />
                        {errors.email && <p className={errorTextClass}>{errors.email}</p>}
                      </div>
                    </div>

                    {/* BUSINESS NAME + PRIMARY PLATFORM */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>BUSINESS NAME *</label>
                        <input
                          ref={businessNameRef}
                          type="text"
                          className={inputClass(!!errors.businessName)}
                          placeholder="Your business"
                          value={businessName}
                          onChange={e => { setBusinessName(e.target.value); clearError("businessName"); }}
                        />
                        {errors.businessName && <p className={errorTextClass}>{errors.businessName}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>PRIMARY PLATFORM *</label>
                        <select
                          ref={primaryPlatformRef}
                          className={inputClass(!!errors.primaryPlatform)}
                          style={selectArrow}
                          value={primaryPlatform}
                          onChange={e => { setPrimaryPlatform(e.target.value); clearError("primaryPlatform"); }}
                        >
                          <option value="" style={{ background: "#1E1B4B" }}>Select platform</option>
                          <option value="Instagram" style={{ background: "#1E1B4B" }}>Instagram</option>
                          <option value="TikTok" style={{ background: "#1E1B4B" }}>TikTok</option>
                          <option value="Facebook" style={{ background: "#1E1B4B" }}>Facebook</option>
                          <option value="WhatsApp" style={{ background: "#1E1B4B" }}>WhatsApp</option>
                          <option value="Telegram" style={{ background: "#1E1B4B" }}>Telegram</option>
                          <option value="Multiple" style={{ background: "#1E1B4B" }}>Multiple</option>
                        </select>
                        {errors.primaryPlatform && <p className={errorTextClass}>{errors.primaryPlatform}</p>}
                      </div>
                    </div>

                    {/* MONTHLY DM VOLUME */}
                    <div>
                      <label className={labelClass}>MONTHLY DM VOLUME *</label>
                      <select
                        ref={monthlyDmVolumeRef}
                        className={inputClass(!!errors.monthlyDmVolume)}
                        style={selectArrow}
                        value={monthlyDmVolume}
                        onChange={e => { setMonthlyDmVolume(e.target.value); clearError("monthlyDmVolume"); }}
                      >
                        <option value="" style={{ background: "#1E1B4B" }}>Select volume</option>
                        <option value="Under 100" style={{ background: "#1E1B4B" }}>Under 100</option>
                        <option value="100–500" style={{ background: "#1E1B4B" }}>100–500</option>
                        <option value="500–2,000" style={{ background: "#1E1B4B" }}>500–2,000</option>
                        <option value="2,000+" style={{ background: "#1E1B4B" }}>2,000+</option>
                      </select>
                      {errors.monthlyDmVolume && <p className={errorTextClass}>{errors.monthlyDmVolume}</p>}
                    </div>

                    {/* MAIN GOAL */}
                    <div>
                      <label className={labelClass}>WHAT&apos;S YOUR MAIN GOAL? *</label>
                      <textarea
                        ref={mainGoalRef}
                        className={inputClass(!!errors.mainGoal)}
                        style={{ resize: "vertical", minHeight: "88px" }}
                        placeholder="e.g. convert more DMs, stop missing leads, scale without hiring..."
                        value={mainGoal}
                        onChange={e => { setMainGoal(e.target.value); clearError("mainGoal"); }}
                      />
                      {errors.mainGoal && <p className={errorTextClass}>{errors.mainGoal}</p>}
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
                        className={inputClass(false)}
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
                      {isSubmitting ? "Submitting…" : "Schedule My Call →"}
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

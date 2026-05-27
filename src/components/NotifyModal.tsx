import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Instagram } from "lucide-react";
import { getSupabase } from "@/lib/supabase";

const ACCENT = "#6B6FD4";
const LAVENDER = "#C4B8F0";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(30,27,75,0.3)",
  border: "1px solid rgba(107,111,212,0.3)",
  borderRadius: 8,
  padding: "0.75rem 1rem",
  color: "#FFFFFF",
  fontSize: "0.9rem",
  outline: "none",
  fontFamily: "var(--font-sans)",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export function NotifyModal({ open, onClose }: Props) {
  const [emailSelected, setEmailSelected] = useState(false);
  const [instagramSelected, setInstagramSelected] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setEmailSelected(false);
      setInstagramSelected(false);
      setEmail("");
      setLoading(false);
      setSuccess(false);
      setError("");
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  async function handleSubmit() {
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    const sb = getSupabase();
    if (!sb) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }
    const { error: dbErr } = await sb
      .from("notify_list")
      .insert({ email: email.trim(), instagram: instagramSelected });
    setLoading(false);
    if (dbErr) {
      setError("Something went wrong. Please try again.");
    } else {
      setSuccess(true);
    }
  }

  const channelCard = (
    selected: boolean,
    onToggle: () => void,
    Icon: React.ElementType,
    label: string,
    description: string
  ) => (
    <button
      onClick={onToggle}
      style={{
        flex: 1,
        background: selected ? "rgba(107,111,212,0.15)" : "rgba(30,27,75,0.5)",
        border: `1px solid ${selected ? ACCENT : "rgba(107,111,212,0.25)"}`,
        borderRadius: 12,
        padding: "1.25rem",
        cursor: "pointer",
        textAlign: "left",
        transition: "border-color 0.2s, background 0.2s",
      }}
    >
      <Icon size={22} color={selected ? ACCENT : LAVENDER} />
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "0.95rem",
          color: "#FFFFFF",
          textTransform: "uppercase",
          marginTop: "0.75rem",
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: "0.78rem", color: LAVENDER, marginTop: "0.35rem", lineHeight: 1.5 }}>
        {description}
      </div>
    </button>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "1.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              background: "#0D0B2B",
              border: "1px solid rgba(107,111,212,0.35)",
              borderRadius: 16,
              padding: "2.5rem",
              width: "100%",
              maxWidth: 500,
              position: "relative",
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: LAVENDER,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.25rem",
                borderRadius: 6,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = LAVENDER)}
            >
              <X size={20} />
            </button>

            {success ? (
              <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(107,111,212,0.2)",
                    border: `1px solid ${ACCENT}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    fontSize: "1.3rem",
                    color: ACCENT,
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "1.4rem",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  You're on the list.
                </h3>
                <p style={{ color: LAVENDER, marginTop: "0.75rem", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  We'll notify you when new resources drop.
                </p>
                <button onClick={onClose} className="btn-primary" style={{ marginTop: "1.75rem" }}>
                  Done
                </button>
              </div>
            ) : (
              <>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "1.4rem",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    paddingRight: "2rem",
                  }}
                >
                  How do you want to be notified?
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: LAVENDER,
                    marginTop: "0.5rem",
                  }}
                >
                  Pick one or both.
                </p>

                <div style={{ display: "flex", gap: "1rem", marginTop: "1.75rem" }}>
                  {channelCard(
                    emailSelected,
                    () => setEmailSelected((v) => !v),
                    Mail,
                    "Email",
                    "Get notified straight to your inbox."
                  )}
                  {channelCard(
                    instagramSelected,
                    () => setInstagramSelected((v) => !v),
                    Instagram,
                    "Instagram",
                    "Get a DM when new resources drop."
                  )}
                </div>

                {(emailSelected || instagramSelected) && (
                  <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {emailSelected && (
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(""); }}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(107,111,212,0.3)")}
                      />
                    )}
                    {instagramSelected && (
                      <a
                        href="https://www.instagram.com/fluario.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => { if (!emailSelected) onClose(); }}
                        className="btn-secondary"
                        style={{ fontSize: "0.82rem", textAlign: "center", display: "block" }}
                      >
                        DM us on Instagram
                      </a>
                    )}
                  </div>
                )}

                {error && (
                  <p style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: "0.75rem" }}>{error}</p>
                )}

                {emailSelected && (
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn-primary"
                    style={{ marginTop: "1.5rem", width: "100%", opacity: loading ? 0.7 : 1, justifyContent: "center" }}
                  >
                    {loading ? "Saving…" : "Notify me"}
                  </button>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

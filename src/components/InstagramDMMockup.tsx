import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Phone, Video, Camera, Mic, Image as ImageIcon, Smile, Heart } from "lucide-react";

const SENT_GRADIENT = "linear-gradient(135deg, #4F5BD5 0%, #962FBF 55%, #D62976 100%)";

type Step =
  | "u1" | "t1" | "a1"
  | "u2" | "t2" | "a2"
  | "u3" | "t3" | "a3"
  | "u4" | "t4" | "a4"
  | "u5" | "t5" | "a5"
  | "badge";

// Each message appears 3000ms after the previous one.
// Typing indicator shows 700ms before each AI reply then exits when the reply appears.
const SCHEDULE: { at: number; visible: Step[] }[] = [
  { at: 300,   visible: ["u1"] },
  { at: 1000,  visible: ["u1", "t1"] },
  { at: 3300,  visible: ["u1", "a1"] },
  { at: 6300,  visible: ["u1", "a1", "u2"] },
  { at: 7000,  visible: ["u1", "a1", "u2", "t2"] },
  { at: 9300,  visible: ["u1", "a1", "u2", "a2"] },
  { at: 12300, visible: ["u1", "a1", "u2", "a2", "u3"] },
  { at: 13000, visible: ["u1", "a1", "u2", "a2", "u3", "t3"] },
  { at: 15300, visible: ["u1", "a1", "u2", "a2", "u3", "a3"] },
  { at: 18300, visible: ["u1", "a1", "u2", "a2", "u3", "a3", "u4"] },
  { at: 19000, visible: ["u1", "a1", "u2", "a2", "u3", "a3", "u4", "t4"] },
  { at: 21300, visible: ["u1", "a1", "u2", "a2", "u3", "a3", "u4", "a4"] },
  { at: 24300, visible: ["u1", "a1", "u2", "a2", "u3", "a3", "u4", "a4", "u5"] },
  { at: 25000, visible: ["u1", "a1", "u2", "a2", "u3", "a3", "u4", "a4", "u5", "t5"] },
  { at: 27300, visible: ["u1", "a1", "u2", "a2", "u3", "a3", "u4", "a4", "u5", "a5"] },
  { at: 28300, visible: ["u1", "a1", "u2", "a2", "u3", "a3", "u4", "a4", "u5", "a5", "badge"] },
];
const LOOP_MS = 30300;

function CFAvatar({ size }: { size: number; fontSize?: number }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
      <img src="/images/watch-logo.jpg" alt="Swiss watches.co" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

function VerifiedBadge() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#0095F6" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div style={{ background: "#262626", padding: "11px 13px", borderRadius: "20px 20px 20px 5px", display: "flex", gap: 4, alignItems: "center" }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          style={{ width: 6, height: 6, background: "#9a9a9a", borderRadius: "50%" }}
          animate={{ y: [0, -2, 0], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

const userBubble: React.CSSProperties = {
  background: SENT_GRADIENT,
  maxWidth: "75%",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: "20px 20px 5px 20px",
  fontSize: 13,
  lineHeight: 1.35,
};

const aiBubble: React.CSSProperties = {
  maxWidth: "78%",
  background: "#262626",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: "20px 20px 20px 5px",
  fontSize: 13,
  lineHeight: 1.4,
};

export function InstagramDMMockup() {
  const [phase, setPhase] = useState<Step[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const startRef = useRef(Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      const elapsed = (Date.now() - startRef.current) % LOOP_MS;
      let vis: Step[] = [];
      for (const s of SCHEDULE) if (elapsed >= s.at) vis = s.visible;
      setPhase(vis);
    }, 50);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Wait one frame for the new bubble to be painted, then scroll smoothly.
    const id = requestAnimationFrame(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase.join(",")]);

  const has = (s: Step) => phase.includes(s);

  return (
    <>
      <style>{`.dm-scroll::-webkit-scrollbar { display: none; }`}</style>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
        <div style={{ width: 282, borderRadius: 46, padding: 6, background: "linear-gradient(145deg,#1f1f1f,#0a0a0a)", boxShadow: "inset 0 0 0 1px #2a2a2a, 0 30px 60px -15px rgba(0,0,0,0.75)" }}>
          <div style={{ background: "#000", borderRadius: 40, overflow: "hidden", position: "relative" }}>

            {/* Status bar */}
            <div style={{ height: 34, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
              <span style={{ color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: "-0.2px" }}>9:41</span>
              <div style={{ display: "flex", gap: 5, alignItems: "center", color: "#fff", fontSize: 11 }}>
                <span>4G</span><span>•</span><span>100%</span>
              </div>
            </div>

            {/* DM header */}
            <div style={{ background: "#000", borderBottom: "0.5px solid #1a1a1a", padding: "8px 12px", display: "flex", alignItems: "center", gap: 10 }}>
              <ChevronLeft size={24} color="#fff" />
              <div style={{ position: "relative", flexShrink: 0 }}>
                <CFAvatar size={32} />
                <div style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, background: "#4ade80", borderRadius: "50%", border: "2px solid #000" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.2 }}>Swiss watches.co</p>
                  <VerifiedBadge />
                </div>
                <p style={{ color: "#a8a8a8", fontSize: 10.5, margin: 0, lineHeight: 1.3 }}>Active now</p>
              </div>
              <Phone size={19} color="#fff" />
              <Video size={21} color="#fff" />
            </div>

            {/* Chat body */}
            <div style={{ background: "#000", height: 418, display: "flex", flexDirection: "column", overflow: "hidden" }}>

              {/* Profile info block */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "18px 0 12px", flexShrink: 0 }}>
                <CFAvatar size={54} />
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0, marginTop: 2 }}>Swiss watches.co</p>
                <p style={{ color: "#a8a8a8", fontSize: 10.5, margin: 0 }}>Instagram · 14.2K followers</p>
                <div style={{ background: "#1c1c1c", color: "#fff", fontSize: 11, fontWeight: 600, padding: "5px 14px", borderRadius: 8, marginTop: 6 }}>View profile</div>
              </div>

              {/* Scrollable messages */}
              <div
                ref={scrollRef}
                className="dm-scroll"
                style={{ flex: 1, padding: "0 10px 8px", display: "flex", flexDirection: "column", gap: 5, overflowY: "auto", scrollbarWidth: "none" } as React.CSSProperties}
              >
                <AnimatePresence>

                  {has("u1") && (
                    <motion.div key="u1" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={userBubble}>What watches do you offer?</div>
                    </motion.div>
                  )}

                  {has("t1") && (
                    <motion.div key="t1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} /><TypingDots />
                    </motion.div>
                  )}

                  {has("a1") && (
                    <motion.div key="a1" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} />
                      <div style={aiBubble}>Hey, James here! We offer swiss born luxury watches tailored to your style, what are you looking for?</div>
                    </motion.div>
                  )}

                  {has("u2") && (
                    <motion.div key="u2" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={userBubble}>Honestly, I like all the watches... Can you help me find a watch for my style?</div>
                    </motion.div>
                  )}

                  {has("t2") && (
                    <motion.div key="t2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} /><TypingDots />
                    </motion.div>
                  )}

                  {has("a2") && (
                    <motion.div key="a2" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} />
                      <div style={aiBubble}>Sure! Firstly, when will you be wearing your watch?</div>
                    </motion.div>
                  )}

                  {has("u3") && (
                    <motion.div key="u3" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={userBubble}>Work and formal occasions</div>
                    </motion.div>
                  )}

                  {has("t3") && (
                    <motion.div key="t3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} /><TypingDots />
                    </motion.div>
                  )}

                  {has("a3") && (
                    <motion.div key="a3" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} />
                      <div style={aiBubble}>Got it, final question. What details do you appreciate (i.e chronograph, oyster band, etc...)?</div>
                    </motion.div>
                  )}

                  {has("u4") && (
                    <motion.div key="u4" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={userBubble}>I like president bands and non-chronograph</div>
                    </motion.div>
                  )}

                  {has("t4") && (
                    <motion.div key="t4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} /><TypingDots />
                    </motion.div>
                  )}

                  {has("a4") && (
                    <motion.div key="a4" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} />
                      <div style={aiBubble}>
                        Fantastic, I feel you may like our Day-Date 40, customizable bezels and sleek platinum infrastructure, check it out:{" "}
                        <a href="https://link" target="_blank" rel="noopener noreferrer" style={{ color: "#58a6ff", textDecoration: "underline" }}>https://link</a>
                        {" "}— In the meantime, anything else I can help with?
                      </div>
                    </motion.div>
                  )}

                  {has("u5") && (
                    <motion.div key="u5" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={userBubble}>Thank you!</div>
                    </motion.div>
                  )}

                  {has("t5") && (
                    <motion.div key="t5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} /><TypingDots />
                    </motion.div>
                  )}

                  {has("a5") && (
                    <motion.div key="a5" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <CFAvatar size={22} />
                      <div style={aiBubble}>No worries, have a good rest of your day.</div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>

            {/* Bottom input bar */}
            <div style={{ background: "#000", borderTop: "0.5px solid #1a1a1a", padding: "8px 10px 12px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#0095F6,#0064D0)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Camera size={15} color="#fff" />
              </div>
              <div style={{ flex: 1, border: "1px solid #2a2a2a", borderRadius: 20, padding: "6px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                <p style={{ color: "#777", fontSize: 12, margin: 0, flex: 1 }}>Message...</p>
                <Mic size={15} color="#fff" />
                <ImageIcon size={15} color="#fff" />
                <Smile size={15} color="#fff" />
              </div>
              <Heart size={22} color="#fff" />
            </div>

          </div>
        </div>

        {/* Lead badge */}
        <AnimatePresence>
          {has("badge") && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ background: "rgba(13,13,13,0.9)", border: "1px solid rgba(74,222,128,0.4)", borderRadius: 20, padding: "7px 14px", display: "flex", alignItems: "center", gap: 7, backdropFilter: "blur(10px)" }}
            >
              <div style={{ width: 7, height: 7, background: "#4ade80", borderRadius: "50%", boxShadow: "0 0 8px rgba(74,222,128,0.6)" }} />
              <span style={{ color: "#4ade80", fontSize: 12, fontWeight: 500, letterSpacing: "0.1px" }}>Lead converted · 11s response</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

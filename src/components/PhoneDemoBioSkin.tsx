import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Phone, Video, Camera, Mic, Image as ImageIcon, Smile, Heart } from "lucide-react";

const SENT_GRADIENT = "linear-gradient(135deg, #4F5BD5 0%, #962FBF 55%, #D62976 100%)";

type Step =
  | "m0" | "t1" | "m1" | "t1b" | "m1b"
  | "m2" | "t2" | "m3" | "c1"
  | "m4" | "t3" | "m5"
  | "m6" | "t4" | "m7"
  | "badge";

// m1 → 500ms → t1b (typing) → 2000ms → m1b (second bubble)
const SCHEDULE: { at: number; visible: Step[] }[] = [
  { at: 300,   visible: ["m0"] },
  { at: 5300,  visible: ["m0", "t1"] },
  { at: 10300, visible: ["m0", "m1"] },
  { at: 10800, visible: ["m0", "m1", "t1b"] },
  { at: 12800, visible: ["m0", "m1", "m1b"] },
  { at: 15300, visible: ["m0", "m1", "m1b", "m2"] },
  { at: 20300, visible: ["m0", "m1", "m1b", "m2", "t2"] },
  { at: 25300, visible: ["m0", "m1", "m1b", "m2", "m3"] },
  { at: 30300, visible: ["m0", "m1", "m1b", "m2", "m3", "c1"] },
  { at: 35300, visible: ["m0", "m1", "m1b", "m2", "m3", "c1", "m4"] },
  { at: 40300, visible: ["m0", "m1", "m1b", "m2", "m3", "c1", "m4", "t3"] },
  { at: 45300, visible: ["m0", "m1", "m1b", "m2", "m3", "c1", "m4", "m5"] },
  { at: 50300, visible: ["m0", "m1", "m1b", "m2", "m3", "c1", "m4", "m5", "m6"] },
  { at: 55300, visible: ["m0", "m1", "m1b", "m2", "m3", "c1", "m4", "m5", "m6", "t4"] },
  { at: 60300, visible: ["m0", "m1", "m1b", "m2", "m3", "c1", "m4", "m5", "m6", "m7"] },
  { at: 61100, visible: ["m0", "m1", "m1b", "m2", "m3", "c1", "m4", "m5", "m6", "m7", "badge"] },
];
const LOOP_MS = 63300;

function BSAvatar({ size }: { size: number }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
      <img src="/images/bioskin-logo.jpg" alt="Bio:skin" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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

export function PhoneDemoBioSkin() {
  const [phase, setPhase] = useState<Step[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  // 1-second offset: startRef is 1s in the future so animation begins 1s after mount
  const startRef = useRef(Date.now() + 1000);

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
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  }, [phase.length]);

  const has = (s: Step) => phase.includes(s);

  return (
    <>
      <style>{`.bs-scroll::-webkit-scrollbar { display: none; }`}</style>
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
                <BSAvatar size={32} />
                <div style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, background: "#4ade80", borderRadius: "50%", border: "2px solid #000" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.2 }}>Bio:skin</p>
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
                <BSAvatar size={54} />
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0, marginTop: 2 }}>Bio:skin</p>
                <p style={{ color: "#a8a8a8", fontSize: 10.5, margin: 0 }}>Instagram · 28.4K followers</p>
                <div style={{ background: "#1c1c1c", color: "#fff", fontSize: 11, fontWeight: 600, padding: "5px 14px", borderRadius: 8, marginTop: 6 }}>View profile</div>
              </div>

              {/* Scrollable messages */}
              <div
                ref={scrollRef}
                className="bs-scroll"
                style={{
                  flex: 1,
                  padding: "0 10px 8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  overflowY: "auto",
                  scrollbarWidth: "none",
                } as React.CSSProperties}
              >
                <AnimatePresence>

                  {/* USER: organic question */}
                  {has("m0") && (
                    <motion.div key="m0" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={{ background: SENT_GRADIENT, maxWidth: "75%", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 5px 20px", fontSize: 13, lineHeight: 1.35 }}>
                        Is your ingredients organic??
                      </div>
                    </motion.div>
                  )}

                  {/* Typing 1 */}
                  {has("t1") && (
                    <motion.div key="t1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <TypingDots />
                    </motion.div>
                  )}

                  {/* AI: Amy intro — bubble 1 */}
                  {has("m1") && (
                    <motion.div key="m1" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <div style={{ maxWidth: "78%", background: "#262626", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 20px 5px", fontSize: 13, lineHeight: 1.5 }}>
                        Hey wonderful, it's Amy here! Yes we offer organic ingredients straight from Argentina, no parabens, synthetic fragrance or any nasty stuff!
                      </div>
                    </motion.div>
                  )}

                  {/* Typing between bubble 1 and 2 */}
                  {has("t1b") && (
                    <motion.div key="t1b" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <TypingDots />
                    </motion.div>
                  )}

                  {/* AI: Amy intro — bubble 2 */}
                  {has("m1b") && (
                    <motion.div key="m1b" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <div style={{ maxWidth: "78%", background: "#262626", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 20px 5px", fontSize: 13, lineHeight: 1.5 }}>
                        Your skin is our priority 💝
                      </div>
                    </motion.div>
                  )}

                  {/* USER: price question */}
                  {has("m2") && (
                    <motion.div key="m2" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={{ background: SENT_GRADIENT, maxWidth: "75%", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 5px 20px", fontSize: 13, lineHeight: 1.35 }}>
                        That's awesome, thank you so much! What are your prices?
                      </div>
                    </motion.div>
                  )}

                  {/* Typing 2 */}
                  {has("t2") && (
                    <motion.div key="t2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <TypingDots />
                    </motion.div>
                  )}

                  {/* AI: product range + URL + teaser */}
                  {has("m3") && (
                    <motion.div key="m3" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <div style={{ maxWidth: "78%", background: "#262626", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 20px 5px", fontSize: 13, lineHeight: 1.55 }}>
                        My pleasure 😄<br /><br />
                        We offer a wide range of skin care products to make your face glow and shine!<br /><br />
                        May I ask what skin care product you're looking for?<br />
                        If you are unsure here is our website to help you:{" "}
                        <a href="https://site.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#58a6ff", textDecoration: "underline" }}>
                          https://site.com/
                        </a><br /><br />
                        Perhaps you are interested in our Anti Aging Face Oil, it's on offer at the moment!
                      </div>
                    </motion.div>
                  )}

                  {/* Product card */}
                  {has("c1") && (
                    <motion.div key="c1" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <div style={{ width: 22, flexShrink: 0 }} />
                      <div style={{ width: "72%", background: "#262626", borderRadius: 14, overflow: "hidden" }}>
                        <img src="/images/bioskin-product.jpg" alt="RENEW — Anti Aging Face Oil" style={{ width: "100%", height: 120, objectFit: "cover", display: "block" }} />
                        <p style={{ color: "#fff", fontSize: 12, fontWeight: 700, margin: 0, padding: "7px 10px 8px", letterSpacing: "0.4px" }}>RENEW — Anti Aging Face Oil</p>
                      </div>
                    </motion.div>
                  )}

                  {/* USER: wants to order */}
                  {has("m4") && (
                    <motion.div key="m4" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={{ background: SENT_GRADIENT, maxWidth: "75%", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 5px 20px", fontSize: 13, lineHeight: 1.35 }}>
                        I like the anti aging face oil, I saw on your website it's $30 haha, how can I order it?!
                      </div>
                    </motion.div>
                  )}

                  {/* Typing 3 */}
                  {has("t3") && (
                    <motion.div key="t3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <TypingDots />
                    </motion.div>
                  )}

                  {/* AI: order + discount code */}
                  {has("m5") && (
                    <motion.div key="m5" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <div style={{ maxWidth: "78%", background: "#262626", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 20px 5px", fontSize: 13, lineHeight: 1.55 }}>
                        Absolutely that's a great choice! You can order it by clicking the 'purchase' button on our website. I don't usually give these out but here is a small gift...<br /><br />
                        Use code:{" "}
                        <span style={{ background: "rgba(255,255,255,0.15)", padding: "1px 6px", borderRadius: 4, fontFamily: "monospace", fontWeight: 700 }}>
                          biocare2026
                        </span>
                        {" "}and you'll get an extra one for free as a complementary gift for our first beautiful customers 💝
                      </div>
                    </motion.div>
                  )}

                  {/* USER: thank you */}
                  {has("m6") && (
                    <motion.div key="m6" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={{ background: SENT_GRADIENT, maxWidth: "75%", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 5px 20px", fontSize: 13, lineHeight: 1.35 }}>
                        Thank you!!! 💞🙏
                      </div>
                    </motion.div>
                  )}

                  {/* Typing 4 */}
                  {has("t4") && (
                    <motion.div key="t4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <TypingDots />
                    </motion.div>
                  )}

                  {/* AI: farewell */}
                  {has("m7") && (
                    <motion.div key="m7" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                      <BSAvatar size={22} />
                      <div style={{ maxWidth: "78%", background: "#262626", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 20px 5px", fontSize: 13, lineHeight: 1.5 }}>
                        No worries, if you have any more questions or need face glowing support I am here for you 😄
                      </div>
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
              <span style={{ color: "#4ade80", fontSize: 12, fontWeight: 500, letterSpacing: "0.1px" }}>Lead converted · 9s response</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

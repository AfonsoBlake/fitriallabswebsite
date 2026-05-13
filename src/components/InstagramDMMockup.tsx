import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Phone, Video, Camera, Mic, Image as ImageIcon, Smile, Heart } from "lucide-react";

const SENT_GRADIENT = "linear-gradient(135deg, #4F5BD5 0%, #962FBF 55%, #D62976 100%)";
const CF_GRADIENT = "linear-gradient(135deg, #FC9A02 0%, #ff6b00 100%)";

type Step = "m0" | "t1" | "m1" | "m2" | "t2" | "m3" | "badge";

// 8s loop
const SCHEDULE: { at: number; visible: Step[] }[] = [
  { at: 300, visible: ["m0"] },
  { at: 1000, visible: ["m0", "t1"] },
  { at: 2300, visible: ["m0", "m1"] },
  { at: 3500, visible: ["m0", "m1", "m2"] },
  { at: 4200, visible: ["m0", "m1", "m2", "t2"] },
  { at: 5500, visible: ["m0", "m1", "m2", "m3"] },
  { at: 6200, visible: ["m0", "m1", "m2", "m3", "badge"] },
];
const LOOP_MS = 8000;

function CFAvatar({ size, fontSize }: { size: number; fontSize: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: CF_GRADIENT,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "-0.3px",
        flexShrink: 0,
      }}
    >
      CF
    </div>
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

export function InstagramDMMockup() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 50);
    return () => clearInterval(id);
  }, []);

  const elapsed = (tick * 50) % LOOP_MS;
  let visible: Step[] = [];
  for (const s of SCHEDULE) if (elapsed >= s.at) visible = s.visible;
  const has = (s: Step) => visible.includes(s);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
      <div style={{ width: 282, borderRadius: 46, padding: 6, background: "linear-gradient(145deg,#1f1f1f,#0a0a0a)", boxShadow: "inset 0 0 0 1px #2a2a2a, 0 30px 60px -15px rgba(0,0,0,0.75)" }}>
        <div style={{ background: "#000", borderRadius: 40, overflow: "hidden", position: "relative" }}>
          <div style={{ height: 34, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
            <span style={{ color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: "-0.2px" }}>9:41</span>
            <div style={{ display: "flex", gap: 5, alignItems: "center", color: "#fff", fontSize: 11 }}>
              <span>4G</span>
              <span>•</span>
              <span>100%</span>
            </div>
          </div>

          <div style={{ background: "#000", borderBottom: "0.5px solid #1a1a1a", padding: "8px 12px", display: "flex", alignItems: "center", gap: 10 }}>
            <ChevronLeft size={24} color="#fff" />
            <div style={{ position: "relative", flexShrink: 0 }}>
              <CFAvatar size={32} fontSize={10} />
              <div style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, background: "#4ade80", borderRadius: "50%", border: "2px solid #000" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.2 }}>cobra.fitness</p>
              <p style={{ color: "#a8a8a8", fontSize: 10.5, margin: 0, lineHeight: 1.3 }}>Active now</p>
            </div>
            <Phone size={19} color="#fff" />
            <Video size={21} color="#fff" />
          </div>

          <div style={{ background: "#000", height: 418, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "18px 0 12px" }}>
              <CFAvatar size={54} fontSize={15} />
              <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0, marginTop: 2 }}>cobra.fitness</p>
              <p style={{ color: "#a8a8a8", fontSize: 10.5, margin: 0 }}>Instagram · 14.2K followers</p>
              <div style={{ background: "#1c1c1c", color: "#fff", fontSize: 11, fontWeight: 600, padding: "5px 14px", borderRadius: 8, marginTop: 6 }}>View profile</div>
            </div>

            <div style={{ flex: 1, padding: "0 10px 8px", display: "flex", flexDirection: "column", gap: 3, justifyContent: "flex-end" }}>
              <AnimatePresence>
                {has("m0") && (
                  <motion.div key="m0" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ background: SENT_GRADIENT, maxWidth: "75%", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 5px 20px", fontSize: 13, lineHeight: 1.35 }}>
                      Hey how much is membership?
                    </div>
                  </motion.div>
                )}
                {has("t1") && (
                  <motion.div key="t1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                    <CFAvatar size={22} fontSize={7} />
                    <TypingDots />
                  </motion.div>
                )}
                {has("m1") && (
                  <motion.div key="m1" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                    <CFAvatar size={22} fontSize={7} />
                    <div style={{ maxWidth: "78%", background: "#262626", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 20px 5px", fontSize: 13, lineHeight: 1.4 }}>
                      Hi! I'm Sam from Cobra Fitness 👋 Memberships start at AED 299/mo — all classes included. Want a free trial class?
                    </div>
                  </motion.div>
                )}
                {has("m2") && (
                  <motion.div key="m2" {...fade} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ background: SENT_GRADIENT, maxWidth: "75%", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 5px 20px", fontSize: 13, lineHeight: 1.35 }}>
                      Yes! Tomorrow morning?
                    </div>
                  </motion.div>
                )}
                {has("t2") && (
                  <motion.div key="t2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                    <CFAvatar size={22} fontSize={7} />
                    <TypingDots />
                  </motion.div>
                )}
                {has("m3") && (
                  <motion.div key="m3" {...fade} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 5 }}>
                    <CFAvatar size={22} fontSize={7} />
                    <div style={{ maxWidth: "78%", background: "#262626", color: "#fff", padding: "8px 12px", borderRadius: "20px 20px 20px 5px", fontSize: 13, lineHeight: 1.4 }}>
                      Done! ✅ Trial booked for tomorrow 7AM. See you there!
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

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
  );
}

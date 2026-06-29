import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

const MotionLink = motion.create(Link);

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <MotionLink
          to="/book-a-call"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 font-mono-caps text-white"
          style={{
            background: "#6B6FD4",
            borderRadius: 50,
            padding: "0.75rem 1.5rem",
            boxShadow: "0 0 30px rgba(107,111,212,0.6), 0 10px 25px rgba(0,0,0,0.35)",
            cursor: "pointer",
          }}
        >
          BOOK YOUR FREE CALL
        </MotionLink>
      )}
    </AnimatePresence>
  );
}

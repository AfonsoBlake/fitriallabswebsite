import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { InstagramDMMockup } from "./InstagramDMMockup";

export function Hero() {
  return (
    <section id="top" className="section-pad">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl"
          >
            Automate your DMs.{" "}
            <span className="glow">Close</span> more deals.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg"
            style={{ color: "#C4B8F0" }}
          >
            Fluario turns your Instagram, TikTok, and Facebook DMs into a 24/7 sales machine — no staff needed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#booking"
              className="btn-primary"
              data-cal-link="fluario-jejc7g/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              BOOK A FREE DEMO <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary">SEE HOW IT WORKS</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <InstagramDMMockup />
        </motion.div>
      </div>
    </section>
  );
}

'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center px-4 bg-brand-darkest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Your Instagram DMs,{' '}
          <span className="text-brand-indigo">Fully Automated</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-brand-lavender mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Turn leads into booked trials 24/7
        </motion.p>
        <motion.button 
          className="bg-brand-indigo hover:bg-brand-deepIndigo transition-colors px-8 py-4 rounded-lg font-semibold text-white shadow-lg shadow-brand-indigo/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(107, 111, 212, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Demo
        </motion.button>
      </div>
    </motion.section>
  )
}
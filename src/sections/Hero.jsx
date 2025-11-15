import { motion } from "framer-motion";
import { ArrowRight, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle glow accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-neon/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Build the Mindset of a{" "}
          <span className="text-neon drop-shadow">Consistent Trader</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Your strategy isn’t the problem — your psychology is.
          Tradestein helps you journal, analyze, and master the mindset that
          turns traders into professionals. And it’s completely free.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://app.tradestein.world"
            className="btn-primary no-underline flex items-center"
          >
            Launch App — Free Forever
            <ArrowRight className="ml-2" size={18} />
          </a>

          <a
            href="https://buymeacoffee.com/tradesteinjournal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost no-underline flex items-center"
          >
            Buy Us a Coffee
            <Coffee className="ml-2" size={18} />
          </a>
        </motion.div>

        {/* Social proof / statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-sm text-gray-500 max-w-md mx-auto"
        >
          Built by traders who understand the journey.  
          No paywalls. No subscriptions. Just real tools for real growth.
        </motion.p>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import React Router Link

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle glow accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-neon/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Master Your Trading Psychology,{" "}
          <br className="hidden sm:block" />
          <span className="text-neon drop-shadow">
            One Journal Entry at a Time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Tradestein is a data-driven trading journal designed to help you track,
          analyze, and improve your Psychology — built by traders, for traders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="https://app.tradestein.world"
            className="btn-primary no-underline"
          >
            Launch App <ArrowRight className="ml-2" size={18} />
          </a>

          {/* ✅ FIXED: use React Router Link for internal page navigation */}
          <Link to="/pricing" className="btn-ghost no-underline">
            View Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

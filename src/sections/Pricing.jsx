import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        The Tradestein <span className="text-neon">Philosophy</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
      >
        We believe trading success is 80% mindset, 20% strategy.
        Tradestein exists to help traders build the habits, discipline, and psychological strength
        needed to win long-term.
      </motion.p>

      {/* Main Philosophy Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto border border-neon/20 rounded-2xl p-10 backdrop-blur-xl bg-white/5 dark:bg-black/20 hover:shadow-neon transition"
      >
        <h3 className="text-2xl font-semibold mb-4 text-neon">
          Why Tradestein is Free
        </h3>

        <p className="text-gray-300 text-base leading-relaxed mb-8">
          Most traders fail not because they lack a strategy, but because they struggle
          with discipline, patience, emotional control, and reflection.
          <br /><br />
          Our mission is simple:
          <span className="text-neon font-semibold"> make powerful trading psychology tools
          accessible to every trader — without paywalls.</span>
          <br /><br />
          You deserve a journal that helps you grow, stay accountable, and understand
          your behavior… without worrying about subscriptions.
        </p>

        {/* Future Vision */}
        <div className="text-left space-y-4 bg-black/20 dark:bg-white/5 rounded-xl p-6 border border-neon/10">
          <h4 className="text-xl font-semibold text-neon">What's Coming Next</h4>

          <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
            <li>AI Assistant to analyze your psychology and trading behavior</li>
            <li>Monthly Trading Statement emailed automatically</li>
            <li>Advanced emotional pattern recognition</li>
            <li>Personal trading habit score & discipline tracking</li>
            <li>More deep-psychology dashboards to help you master yourself</li>
          </ul>

          <p className="text-gray-400 text-sm mt-4">
            These features take time, energy, and resources — but we believe every trader should grow with them.
          </p>
        </div>

        {/* Support Button */}
        <div className="mt-10">
          <a
            href="https://buymeacoffee.com/tradesteinjournal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center no-underline"
          >
            ☕ Support the Mission — Buy Tradestein a Coffee
          </a>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            100% optional. Your support helps us keep Tradestein free and continue improving the tools.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

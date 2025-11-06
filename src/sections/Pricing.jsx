import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Simple <span className="text-neon">Pricing</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
      >
        One plan. Full access. Cancel anytime.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto border border-neon/20 rounded-2xl p-8 hover:shadow-neon transition"
      >
        <h3 className="text-2xl font-semibold mb-2">Tradestein Subscription</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
          Gain full access to your trading journal, analytics, calendar, and goals
          — designed to help you master your psychology and trading discipline.
        </p>

        <div className="text-5xl font-bold mb-1">
          $4.99 <span className="text-base font-medium">/month</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Billed monthly via Paddle. No free trial.
        </p>

        <a
          href="https://app.tradestein.world"
          className="btn-primary no-underline inline-flex items-center justify-center"
        >
          Subscribe Now
        </a>
      </motion.div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-10">
        All payments are processed securely through{" "}
        <span className="text-neon font-medium">Paddle</span>.
      </p>
    </section>
  );
}

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        About <span className="text-neon">Tradestein</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
      >
        Tradestein is a data-driven trading journal and analytics platform built
        by traders who understand the importance of discipline and
        self-reflection. Our mission is simple — help traders master their
        psychology, refine their edge, and grow consistently through detailed
        journaling and performance analysis.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-10 grid gap-8 sm:grid-cols-3 text-left"
      >
        <div className="p-6 rounded-2xl border border-neon/20 hover:shadow-neon transition">
          <h3 className="font-semibold text-lg mb-2 text-neon">Our Mission</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Empower traders with insights that promote consistency and
            accountability — because real growth starts with data and discipline.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-neon/20 hover:shadow-neon transition">
          <h3 className="font-semibold text-lg mb-2 text-neon">Our Vision</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            To redefine journaling in the trading world — making it effortless,
            intelligent, and built around your personal trading goals.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-neon/20 hover:shadow-neon transition">
          <h3 className="font-semibold text-lg mb-2 text-neon">Our Commitment</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            We continuously improve Tradestein with user feedback and cutting-edge
            analytics — helping traders stay organized, focused, and profitable.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

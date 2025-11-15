import { motion } from "framer-motion";

export default function About() {
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
        About <span className="text-neon">Tradestein</span>
      </motion.h2>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
      >
        Trading success starts in the mind — not the charts. Tradestein was
        created to help traders master discipline, emotional control, and
        performance awareness through powerful journaling and psychology-focused insights.
      </motion.p>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 grid gap-8 sm:grid-cols-3 text-left"
      >
        {/* Mission */}
        <div className="p-6 rounded-2xl border border-neon/20 hover:shadow-neon transition">
          <h3 className="font-semibold text-lg mb-2 text-neon">Our Mission</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            To help traders build real consistency by mastering their behavior,
            emotions, and trade-by-trade discipline — without paywalls.
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 rounded-2xl border border-neon/20 hover:shadow-neon transition">
          <h3 className="font-semibold text-lg mb-2 text-neon">Our Vision</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            To become the most psychology-focused trading platform in the world,
            combining journaling, analysis, and AI insights that help traders
            understand themselves deeper every day.
          </p>
        </div>

        {/* Commitment */}
        <div className="p-6 rounded-2xl border border-neon/20 hover:shadow-neon transition">
          <h3 className="font-semibold text-lg mb-2 text-neon">Our Commitment</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            We’re committed to transparency, data ownership, and long-term
            improvement — building tools that grow with you, not limit you.
          </p>
        </div>
      </motion.div>

      {/* Extra philosophy block */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-14 max-w-3xl mx-auto p-8 rounded-2xl border border-neon/10 bg-black/20 dark:bg-white/5 backdrop-blur-xl"
      >
        <h3 className="text-xl font-semibold mb-3 text-neon">Why It Matters</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Anyone can follow a strategy. But not everyone can manage fear, greed,
          hesitation, revenge trading, or overconfidence.  
          <br /><br />
          Tradestein helps traders understand the real enemy — their own psychology —
          and build a mindset capable of long-term success.
        </p>
      </motion.div>
    </section>
  );
}

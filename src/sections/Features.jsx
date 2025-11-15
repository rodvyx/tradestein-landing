import { motion } from "framer-motion";

const features = [
  {
    title: "Journal 2.0",
    desc: "Document every trade with notes, charts, emotions, and R:R — creating a clear blueprint of your trading behavior.",
  },
  {
    title: "Psychology Tracking",
    desc: "Identify emotional patterns, strengths, and weaknesses. Improve discipline by understanding the mindset behind every trade.",
  },
  {
    title: "Analytics Dashboard",
    desc: "Win rate, expectancy, cumulative balance, performance by session — all visualized to show exactly where you're improving.",
  },
  {
    title: "Monthly Trading Statement",
    desc: "Automatically receive a personalized monthly report summarizing your strengths, weaknesses, psychology trends, and overall growth.",
  },
  {
    title: "Trading Calendar",
    desc: "Spot patterns in performance across days, sessions, and conditions. Build consistency through visual habit awareness.",
  },
  {
    title: "AI Trading Assistant (Coming Soon)",
    desc: "We're building an AI coach that analyzes your journal and gives feedback on psychology, discipline, and strategy execution.",
  },
  {
    title: "Cloud Backup",
    desc: "Your journal is always safe, synced, and accessible from anywhere — even if you switch devices.",
  },
  {
    title: "100% Free",
    desc: "No paywalls. No subscriptions. Just a powerful trading journal built to help you grow with honesty, discipline, and reflection.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Tools built to{" "}
        <span className="text-neon">transform your mindset</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
      >
        Tradestein gives you everything you need to understand your behavior,
        sharpen your discipline, and become the trader you’re meant to be.
        No subscriptions — just growth.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-neon/20 p-6 hover:shadow-neon transition bg-white/5 dark:bg-black/20 backdrop-blur-xl"
          >
            <h3 className="font-semibold text-lg text-neon mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

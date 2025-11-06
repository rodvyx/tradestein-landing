import { motion } from "framer-motion";

const features = [
  {
    title: "Journal 2.0",
    desc: "Log your trades effortlessly with screenshots, notes, and risk metrics — everything you need to stay accountable and consistent.",
  },
  {
    title: "Analytics",
    desc: "Turn your trading data into insights. Track win rate, expectancy, performance by session, and more — so you can trade smarter, not harder.",
  },
  {
    title: "Calendar",
    desc: "Visualize your performance over time. Identify your strongest and weakest trading days and stay in sync with your progress.",
  },
  {
    title: "Goals",
    desc: "Set, track, and achieve your trading goals. Build consistency by creating targets and measuring your growth every month.",
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
        Everything you need to{" "}
        <span className="text-neon">trade better</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
      >
        Tradestein gives you the structure and clarity to stay disciplined,
        evaluate performance, and grow as a trader.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-neon/20 p-6 hover:shadow-neon transition"
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

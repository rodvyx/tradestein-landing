export default function Mindset() {
  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Trading Is 80% Psychology — 20% Strategy
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          Most traders don’t fail because of their strategy — they fail because 
          of discipline, emotional decisions, revenge trading, and inconsistency.
          Tradestein helps you build the mindset of a top-tier trader.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0d0f10] to-[#090b0c] border border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Emotion Tracking</h3>
            <p className="text-gray-300">
              Record fear, greed, hesitation, confidence — and discover which 
              emotions influence your results the most.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0d0f10] to-[#090b0c] border border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Consistency Builder</h3>
            <p className="text-gray-300">
              Journaling builds discipline. Identify patterns behind your winning
              streaks and your losing spirals so you can correct them.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0d0f10] to-[#090b0c] border border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Monthly Trading Statement</h3>
            <p className="text-gray-300">
              See your evolution every month — summaries of performance, mindset,
              improvements, weaknesses, and strengths.
            </p>
          </div>

        </div>

        <button
          onClick={() => window.location.href = "https://app.tradestein.world"}
          className="mt-12 bg-emerald-500 hover:bg-emerald-400 text-black px-10 py-4 rounded-full text-lg font-semibold transition shadow-[0_0_20px_rgba(16,185,129,0.4)]"
        >
          Launch App — Free Forever
        </button>
      </div>
    </section>
  );
}

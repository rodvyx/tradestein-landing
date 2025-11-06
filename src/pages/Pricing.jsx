export default function Pricing() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your Plan
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Tradestein keeps your trading journal simple, fast, and insightful.
          Pay monthly — cancel anytime.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 mt-10">
        {/* Basic Info Card */}
        <div className="rounded-2xl border border-neon/20 p-8 shadow-neon/10 hover:shadow-neon transition">
          <h2 className="text-2xl font-semibold mb-2">Tradestein Subscription</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            Get full access to all features — journal your trades, analyze your
            performance, and refine your strategy with every session.
          </p>

          <p className="text-5xl font-bold mb-1">
            $4.99 <span className="text-base font-medium">/month</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Billed monthly, cancel anytime.
          </p>

          <a
            href="https://app.tradestein.world"
            className="btn-primary no-underline"
          >
            Subscribe Now
          </a>
        </div>

        {/* What's Included */}
        <div className="rounded-2xl border border-neon/20 p-8">
          <h3 className="text-xl font-semibold mb-4">Included Features</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li>✓ Unlimited trade journaling with screenshots</li>
            <li>✓ Real-time analytics and performance metrics</li>
            <li>✓ Calendar and replay view</li>
            <li>✓ Fast and secure cloud storage</li>
            <li>✓ Regular feature updates and support</li>
          </ul>

          <h4 className="text-lg font-semibold mt-8 mb-2">No Free Trial</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Tradestein offers full access through a monthly subscription.
            Cancel any time directly from your account dashboard.
          </p>
        </div>
      </div>

      <div className="text-center mt-16 text-sm text-gray-500 dark:text-gray-400">
        <p>
          All payments are processed securely through{" "}
          <span className="text-neon font-medium">Paddle</span>.
        </p>
        <p>
          For questions, contact{" "}
          <a
            href="mailto:rodrickrob11@gmail.com"
            className="hover:text-neon transition"
          >
            tradesteinjournal@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

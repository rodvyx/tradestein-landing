import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-neon/20">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-6 w-6 rounded-lg bg-neon shadow-neon" />
            <span className="font-semibold">Tradestein</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The modern trading journal built for consistency, discipline,
            and performance improvement.
          </p>
        </div>

        {/* Product Section */}
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="https://app.tradestein.world"
                className="hover:text-neon transition"
              >
                Launch App
              </a>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-neon transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-neon transition">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/terms" className="hover:text-neon transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-neon transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-neon transition">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="mailto:tradesteinjournal@gmail.com"
                className="hover:text-neon transition"
              >
                tradesteinjournal@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://app.tradestein.world"
                className="hover:text-neon transition"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neon/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} Tradesteinjournal. All rights reserved.
          </span>
          <span> • Empowering Traders Worldwide 🌍</span>
        </div>
      </div>
    </footer>
  );
}

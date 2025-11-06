import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md transition ${
        isActive ? "text-neon" : "hover:text-neon"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-dark/70 border-b border-neon/20">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="h-6 w-6 rounded-lg bg-neon shadow-neon" />
          <span className="text-lg font-bold tracking-wide">Tradestein</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/pricing">Pricing</NavItem>
          <NavItem to="/privacy">Privacy</NavItem>
          <NavItem to="/terms">Terms</NavItem>
          <NavItem to="/refund">Refund</NavItem>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://app.tradestein.world"
            className="btn-ghost no-underline hidden sm:inline-flex"
          >
            Launch App
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

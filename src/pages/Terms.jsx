import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-gray-100 transition-colors duration-300 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold text-emerald-500 mb-4">
          Terms of Service
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last Updated: November 2025
        </p>

        <p>
          These Terms of Service (“Terms”) govern your use of 
          <strong> Tradestein</strong> — a free psychology-focused trading 
          journal available at 
          <a
            href="https://tradestein.world"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:underline"
          >
            {" "}tradestein.world{" "}
          </a>
          and 
          <a
            href="https://app.tradestein.world"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:underline"
          >
            {" "}app.tradestein.world
          </a>.
          By using Tradestein, you agree to these Terms and our Privacy Policy.
        </p>

        {/* 1. Use of Service */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            1. Use of the Service
          </h2>
          <p>
            Tradestein provides digital tools that help traders journal their trades,
            analyze performance, track psychology, and stay disciplined.  
            The app is completely free and does not require any payment.
          </p>
        </section>

        {/* 2. Eligibility */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            2. Account Requirements
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>You must be at least 18 years old.</li>
            <li>You must provide a valid email address.</li>
            <li>You are responsible for keeping your login credentials secure.</li>
          </ul>
        </section>

        {/* 3. User Content */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            3. User Content & Trade Data
          </h2>
          <p>
            You retain full ownership of the content you upload, including:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Trade notes & journal entries</li>
            <li>Performance data</li>
            <li>Psychology notes & emotions</li>
            <li>Screenshots & images</li>
          </ul>
          <p className="mt-2">
            By using the app, you grant Tradestein permission to store this data
            securely so it can be displayed to you inside the platform.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            We do not sell or share your data with third parties.
          </p>
        </section>

        {/* 4. Free Service + Donations */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            4. Free Service & Voluntary Support
          </h2>
          <p>
            Tradestein is 100% free.  
            Users may optionally support development through Buy Me a Coffee.
            Donations are voluntary and do not provide special access.
          </p>
        </section>

        {/* 5. Acceptable Use */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            5. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Share your account with others.</li>
            <li>Upload harmful, illegal, or abusive content.</li>
            <li>Attempt to reverse-engineer or exploit the platform.</li>
          </ul>
          <p className="mt-2">
            Violations may result in account suspension.
          </p>
        </section>

        {/* 6. AI Features */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            6. Future AI Features
          </h2>
          <p>
            Tradestein may introduce optional AI-powered insights or mindset tools.
            AI features will analyze your trade data only to provide journal
            improvements, emotional awareness, or discipline feedback.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            AI features will never be used to sell your data or create user profiles
            outside the Tradestein ecosystem.
          </p>
        </section>

        {/* 7. No Financial Advice */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            7. No Financial Advice
          </h2>
          <p>
            Tradestein does not provide trading signals, financial advice,
            or investment recommendations.  
            Your trading decisions are your responsibility.
          </p>
        </section>

        {/* 8. Service Availability */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            8. Service Availability
          </h2>
          <p>
            We aim to keep Tradestein stable and reliable, but occasional downtime
            may occur due to maintenance, updates, or technical issues.
          </p>
        </section>

        {/* 9. Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            9. Limitation of Liability
          </h2>
          <p>
            Tradestein is provided “as is.”  
            We are not responsible for financial losses, lost trades, or outcomes
            related to your personal trading decisions.
          </p>
        </section>

        {/* 10. Changes */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            10. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time.  
            Continued use of Tradestein means you agree to the updated version.
          </p>
        </section>

        {/* 11. Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            11. Contact Us
          </h2>
          <p>For questions or concerns:</p>
          <p className="mt-2">
            📧{" "}
            <a
              href="mailto:tradesteinjournal@gmail.com"
              className="text-emerald-500 hover:underline"
            >
              tradesteinjournal@gmail.com
            </a>
          </p>
        </section>

        <footer className="pt-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          © 2025 Tradestein. All rights reserved.
        </footer>

      </div>
    </div>
  );
}

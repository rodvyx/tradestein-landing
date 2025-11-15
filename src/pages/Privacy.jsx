import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-gray-100 transition-colors duration-300 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <h1 className="text-4xl font-bold text-emerald-500 mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last Updated: November 2025
        </p>

        <p>
          Welcome to <strong>Tradestein</strong>. This Privacy Policy explains
          how we collect, use, and protect your information when you use our
          website (
          <a
            href="https://tradestein.world"
            className="text-emerald-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            tradestein.world
          </a>
          ) and our web app (
          <a
            href="https://app.tradestein.world"
            className="text-emerald-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            app.tradestein.world
          </a>
          ).  
          <br />
          Tradestein is a free psychology-focused trading journal, and we are
          committed to keeping your personal data safe and secure.
        </p>

        {/* 1. Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            1. Information We Collect
          </h2>

          <p>We collect only the minimum data needed to operate the app:</p>

          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>
              <strong>Account Information:</strong> Your email address and a
              password (stored securely using Supabase authentication).
            </li>
            <li>
              <strong>Trade Journal Data:</strong> Dates, notes, screenshots, performance data, and psychological inputs you manually add.
            </li>
            <li>
              <strong>Device & Usage Data:</strong> Anonymous analytics to diagnose issues and improve the app’s performance.
            </li>
          </ul>
        </section>

        {/* 2. How We Use Your Data */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            2. How We Use Your Information
          </h2>

          <p>Your data is used strictly to operate and enhance Tradestein:</p>

          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Allow you to log in and access your trading journal.</li>
            <li>Store your trades, screenshots, and notes securely.</li>
            <li>Provide analytics and insights inside the app.</li>
            <li>Improve the overall user experience.</li>
            <li>Future optional features (AI insights, monthly reports, mindset coaching).</li>
          </ul>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            We do <strong>not</strong> sell or share your data with third parties.
          </p>
        </section>

        {/* 3. Payments (Updated) */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            3. Payments & Donations
          </h2>

          <p>
            Tradestein is completely free.  
            However, users may voluntarily support development through our
            <strong> Buy Me a Coffee </strong> page.  
            This is optional, and no financial information is ever stored by us.
          </p>
        </section>

        {/* 4. Cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            4. Cookies & Local Storage
          </h2>
          <p>We may use:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Local storage for settings (theme, preferences).</li>
            <li>Session storage for performance and sync optimization.</li>
            <li>
              Minimal cookies for authentication (supabase-managed & secure).
            </li>
          </ul>
        </section>

        {/* 5. Data Retention */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            5. Data Retention & Deletion
          </h2>

          <p>
            We retain your data only while your account is active.  
            You may request full deletion at any time by emailing:
          </p>

          <p className="mt-2">
            <a
              href="mailto:tradesteinjournal@gmail.com"
              className="text-emerald-500 hover:underline"
            >
              tradesteinjournal@gmail.com
            </a>
          </p>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Once deleted, your trade data and screenshots cannot be recovered.
          </p>
        </section>

        {/* 6. Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            6. Your Rights
          </h2>

          <p>You may request at any time to:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Export all your stored journal data.</li>
            <li>Update or correct account information.</li>
            <li>Delete your account and all data.</li>
          </ul>
        </section>

        {/* 7. Data Transfers */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            7. International Data Transfers
          </h2>
          <p>
            Tradestein is powered by Supabase, which may store encrypted data in
            data centers inside or outside your region.  
            By using the app, you consent to these secure transfers.
          </p>
        </section>

        {/* 8. Policy Updates */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            8. Updates to This Policy
          </h2>
          <p>
            We may update this policy when we add new features.  
            The updated version will always be posted here.
          </p>
        </section>

        {/* 9. Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            9. Contact Us
          </h2>
          <p>If you have questions about this Privacy Policy:</p>
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

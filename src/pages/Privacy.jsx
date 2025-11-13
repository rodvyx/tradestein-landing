import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-gray-100 transition-colors duration-300 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-emerald-500 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Effective Date: November 2025
        </p>

        <p>
          This Privacy Policy describes how <strong>Tradestein</strong> (“we”,
          “us”, or “our”) collects, uses, and protects your information when you
          use our website (
          <a
            href="https://tradestein.world"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:underline"
          >
            tradestein.world
          </a>
          ) and app (
          <a
            href="https://app.tradestein.world"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:underline"
          >
            app.tradestein.world
          </a>
          ). We value your privacy and are committed to protecting your personal
          data.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            1. Information We Collect
          </h2>
          <p>
            We collect minimal personal data necessary to operate and improve
            our service. This includes:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>
              <strong>Account Information:</strong> Your email and password
              required to create and access your account.
            </li>
            <li>
              <strong>Usage Data:</strong> Anonymous analytics on how you use
              Tradestein to help us improve user experience.
            </li>
            <li>
              <strong>Payment Information:</strong> Processed securely by{" "}
              <strong>Paddle.com, Lemonsqueezy.com</strong>. We never store your credit card or
              payment details.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            2. How We Use Your Information
          </h2>
          <p>We use your data to:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Provide and maintain your Tradestein account.</li>
            <li>
              Improve functionality, security, and performance of our platform.
            </li>
            <li>Send occasional service updates and feature announcements.</li>
            <li>Comply with billing, tax, and legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            3. Payments and Security
          </h2>
          <p>
            All payments are securely processed through{" "}
            <strong>Paddle.com Market Ltd, Lemonsqueezy.com Market Ltd</strong>, which acts as our merchant
            of record. Paddle handles all credit card information and complies
            with international PCI-DSS standards. Tradestein never directly
            stores your financial information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            4. Cookies and Analytics
          </h2>
          <p>
            We may use cookies or local storage to remember your preferences,
            such as theme settings or login sessions. Anonymous analytics may be
            collected to measure engagement and improve product experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            5. Data Retention
          </h2>
          <p>
            We retain your account data as long as your subscription is active.
            Upon cancellation or request, we delete your account and associated
            trade data within 30 days, unless legally required to retain it
            longer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            6. Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Access and export your stored data.</li>
            <li>Request correction or deletion of inaccurate data.</li>
            <li>Withdraw consent and close your account at any time.</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please email us at{" "}
            <a
              href="mailto:tradesteinjournal@gmail.com"
              className="text-emerald-500 hover:underline"
            >
              tradesteinjournal@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            7. International Data Transfers
          </h2>
          <p>
            Our servers may operate in various regions, including those outside
            your home country. By using Tradestein, you consent to transferring
            your data to these regions where data protection laws may differ.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            8. Updates to This Policy
          </h2>
          <p>
            We may update this Privacy Policy to reflect new features or legal
            requirements. Updates will be posted on this page with a new “Last
            Updated” date. Continued use of Tradestein means you accept the
            revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            9. Contact Us
          </h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us:
          </p>
          <p className="mt-2">
            📧{" "}
            <a
              href="mailto:rodrickrob11@gmail.com"
              className="text-emerald-500 hover:underline"
            >
              tradesteinjournal@gmail.com
            </a>
          </p>
          <p>🌍 Tradesteinjournal</p>
        </section>

        <footer className="pt-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          © 2025 Tradesteinjournal. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

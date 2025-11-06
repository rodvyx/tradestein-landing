import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-gray-100 transition-colors duration-300 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-emerald-500 mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Effective Date: November 2025
        </p>
        <p>
          Welcome to <strong>Tradestein</strong> — a subscription-based trading
          journal platform designed to help traders track performance, analyze
          psychology, and build discipline. By using our website (
          <a
            href="https://tradestein.world"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:underline"
          >
            tradestein.world
          </a>
          ) or the Tradestein app (
          <a
            href="https://app.tradestein.world"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:underline"
          >
            app.tradestein.world
          </a>
          ), you agree to these Terms of Service.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Tradestein, you agree to these Terms and our
            Privacy Policy. If you do not agree, please discontinue use of our
            services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            2. Service Description
          </h2>
          <p>
            Tradestein provides digital journaling and analytics tools for
            traders. The service is available through a monthly subscription at{" "}
            <strong>$4.99 USD per month</strong>, billed via{" "}
            <strong>Paddle</strong>, our authorized reseller and payment
            processor. There is no free trial — all features require an active
            subscription.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            3. Account Registration
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Be at least 18 years old.</li>
            <li>Provide accurate and current information during sign-up.</li>
            <li>Keep your login credentials confidential.</li>
          </ul>
          <p>
            Tradestein is not responsible for losses resulting from unauthorized
            access to your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            4. Payments & Billing
          </h2>
          <p>
            All payments are securely processed by{" "}
            <strong>Paddle.com Market Ltd</strong>, which acts as the Merchant of
            Record. By subscribing, you authorize Paddle to charge your payment
            method monthly until cancellation.
          </p>
          <p>
            You can manage or cancel your subscription anytime through your
            Tradestein account or via Paddle’s customer portal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            5. Cancellations
          </h2>
          <p>
            You can cancel anytime. Your subscription remains active until the
            end of the billing cycle. Cancellations take effect at the end of
            the current paid month — no prorated refunds are offered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            6. Refunds
          </h2>
          <p>
            Refunds are handled according to our{" "}
            <a
              href="https://tradestein.world/refund"
              className="text-emerald-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Refund Policy
            </a>
            . Refunds are only granted for duplicate payments or technical
            issues that prevent access to the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            7. Acceptable Use
          </h2>
          <p>You agree not to misuse Tradestein. Specifically, you may not:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Share accounts or login credentials.</li>
            <li>Reverse-engineer, copy, or resell the platform.</li>
            <li>Use the app for illegal, abusive, or misleading purposes.</li>
          </ul>
          <p>
            Violations may result in suspension or termination of your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            8. Service Availability
          </h2>
          <p>
            While we aim for reliability, Tradestein may experience downtime due
            to maintenance or updates. We’re not liable for interruptions caused
            by third-party providers or unforeseen issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            9. Disclaimer
          </h2>
          <p>
            Tradestein is provided “as is.” We do not guarantee financial
            improvement or any specific results. Users are solely responsible
            for their own trading actions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            10. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Tradestein and its
            developers shall not be liable for any indirect or consequential
            damages arising from the use of this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            11. Changes to Terms
          </h2>
          <p>
            We may update these Terms periodically. Updates will be reflected on
            this page with a revised “Last Updated” date. Continued use of
            Tradestein after updates means you accept the changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            12. Contact Information
          </h2>
          <p>
            For any questions regarding these Terms or your subscription,
            contact us at:
          </p>
          <p className="mt-2">
            📧{" "}
            <a
              href="mailto:tradesteinjournal@gmail.com"
              className="text-emerald-500 hover:underline"
            >
              tradesteinjournal@gmail.com
            </a>
          </p>
          <p>🌍 Tradestein, Ukraine</p>
        </section>

        <footer className="pt-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          © 2025 Tradesteinjournal. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

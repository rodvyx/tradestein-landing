import React from "react";

export default function Refund() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-gray-100 transition-colors duration-300 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-emerald-500 mb-4">
          Refund Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Effective Date: November 2025
        </p>

        <p>
          At <strong>Tradestein</strong>, we want you to have a positive
          experience using our trading journal platform. This Refund Policy
          explains how we handle refunds for subscriptions purchased through our
          website (
          <a
            href="https://tradestein.world"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:underline"
          >
            tradestein.world
          </a>
          ) or app (
          <a
            href="https://app.tradestein.world"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:underline"
          >
            app.tradestein.world
          </a>
          ).
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            1. Monthly Subscriptions
          </h2>
          <p>
            Tradestein operates on a monthly subscription model at{" "}
            <strong>$4.99 USD per month</strong>, billed securely via{" "}
            <strong>Paddle.com Market Ltd, Lemonsqueezy.com Market Ltd</strong> — our authorized payment
            processor and Merchant of Record.
          </p>
          <p className="mt-2">
            Because Tradestein provides instant access to its full suite of
            features after purchase, we generally do not offer refunds once a
            payment has been processed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            2. Eligible Refunds
          </h2>
          <p>
            Refunds may be issued under limited circumstances, including:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Duplicate or accidental payments.</li>
            <li>
              Technical issues preventing access to your Tradestein account.
            </li>
            <li>
              Mistaken billing after an account has already been cancelled.
            </li>
          </ul>
          <p className="mt-2">
            Each refund request is reviewed on a case-by-case basis to ensure
            fairness and compliance with our payment partner’s policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            3. How to Request a Refund
          </h2>
          <p>
            To request a refund, contact us within 7 days of your transaction by
            emailing{" "}
            <a
              href="mailto:tradesteinjournal@gmail.com"
              className="text-emerald-500 hover:underline"
            >
              tradesteinjournal@gmail.com
            </a>
            . Please include your payment reference or receipt from Paddle or Lemonsqueezy to
            help us locate your order quickly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            4. Paddle’s / Lemonsqueezy Role
          </h2>
          <p>
            All transactions are processed by{" "}
            <strong>Paddle.com Market Ltd, Lemonsqueezy Market Ltd</strong>, which acts as the Merchant
            of Record for Tradestein. Paddle handles tax compliance, invoicing,
            and refund issuance on our behalf. If approved, refunds are
            processed directly through Paddle and returned to your original
            payment method.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            5. Cancellations
          </h2>
          <p>
            You can cancel your subscription anytime from your Tradestein
            account or via Lemonsqueezy or Paddle’s customer portal. Your subscription will
            remain active until the end of your current billing period. You will
            not be charged again unless you reactivate your plan.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            6. Contact Information
          </h2>
          <p>
            If you have questions about this Refund Policy or your payment,
            please contact us:
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
          <p>🌍 Tradesteinjournal</p>
        </section>

        <footer className="pt-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          © 2025 Tradesteinjournal. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

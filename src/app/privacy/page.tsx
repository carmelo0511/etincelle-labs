import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Etincelle",
  description: "Privacy policy for Etincelle Labs, Inc.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-text-muted transition-colors hover:text-text-primary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 4l-4 4 4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to home
        </Link>

        <h1 className="mt-10 text-[2rem] font-medium leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[2.5rem]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-[13px] text-text-muted">
          Last updated: March 1, 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-lg font-medium text-text-primary">
              1. Information We Collect
            </h2>
            <p className="mt-3">
              When you use our website or contact us, we may collect the
              following information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-text-primary">Contact information</strong>{" "}
                &mdash; name, email address, and any details you provide via our
                contact form.
              </li>
              <li>
                <strong className="text-text-primary">Usage data</strong>{" "}
                &mdash; anonymous analytics data such as pages visited, time on
                site, and referring source. We do not use cookies for tracking.
              </li>
              <li>
                <strong className="text-text-primary">Project information</strong>{" "}
                &mdash; business details shared during consultations to scope and
                deliver our services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              2. How We Use Your Information
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to your inquiries and provide our services</li>
              <li>Communicate project updates and deliverables</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              3. Data Storage &amp; Security
            </h2>
            <p className="mt-3">
              Your data is stored securely using industry-standard encryption and
              access controls. We retain your information only for as long as
              necessary to fulfill the purposes outlined in this policy, or as
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              4. Third-Party Services
            </h2>
            <p className="mt-3">
              Our website may use third-party services for analytics and hosting
              (such as Vercel). These services have their own privacy policies
              governing how they process data. We do not control and are not
              responsible for the privacy practices of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              5. Your Rights
            </h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for data processing at any time</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:hello@etincelle.ca"
                className="text-text-primary underline underline-offset-2 transition-colors hover:text-text-secondary"
              >
                hello@etincelle.ca
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              6. Cookies
            </h2>
            <p className="mt-3">
              Our website does not use cookies for advertising or tracking. We
              may use essential cookies strictly necessary for the website to
              function (such as session management). No third-party advertising
              cookies are used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              7. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              8. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated revision date. We encourage
              you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              9. Contact
            </h2>
            <p className="mt-3">
              If you have questions or concerns about this privacy policy,
              contact us at{" "}
              <a
                href="mailto:hello@etincelle.ca"
                className="text-text-primary underline underline-offset-2 transition-colors hover:text-text-secondary"
              >
                hello@etincelle.ca
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

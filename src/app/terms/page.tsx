import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Etincelle",
  description: "Terms of service for Etincelle Labs, Inc.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-3 text-[13px] text-text-muted">
          Last updated: March 1, 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-lg font-medium text-text-primary">
              1. Agreement to Terms
            </h2>
            <p className="mt-3">
              By accessing or using the services provided by Etincelle Labs, Inc.
              (&quot;Etincelle&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              2. Services
            </h2>
            <p className="mt-3">
              Etincelle provides AI operations consulting, custom dashboard
              development, workflow automation, and related digital services for
              businesses. All projects are scoped, priced, and delivered on a
              fixed-fee basis unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              3. Project Deliverables &amp; Ownership
            </h2>
            <p className="mt-3">
              Upon full payment, you receive complete ownership of all
              deliverables produced during the project, including source code,
              designs, and documentation. We retain no proprietary rights to
              your custom work. We may retain the right to showcase the project
              in our portfolio unless you request otherwise in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              4. Payment Terms
            </h2>
            <p className="mt-3">
              All project fees are due as outlined in the project agreement.
              Support plans are billed monthly and may be cancelled at any time
              with no penalties. Late payments may result in suspension of
              services until the balance is resolved.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              5. Client Responsibilities
            </h2>
            <p className="mt-3">
              You agree to provide timely access to the tools, accounts, and
              information necessary for us to complete the project. Delays
              caused by unavailable resources may extend the delivery timeline.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              6. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law, Etincelle shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from or related to your use of our
              services. Our total liability shall not exceed the amount paid by
              you for the specific project giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              7. Termination
            </h2>
            <p className="mt-3">
              Either party may terminate a project agreement with written notice.
              If you terminate before completion, you are responsible for
              payment of work completed up to the termination date. We will
              provide all deliverables produced up to that point.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              8. Governing Law
            </h2>
            <p className="mt-3">
              These terms are governed by and construed in accordance with the
              laws of the Province of Ontario, Canada, without regard to
              conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              9. Changes to Terms
            </h2>
            <p className="mt-3">
              We reserve the right to update these terms at any time. Changes
              will be posted on this page with an updated revision date.
              Continued use of our services after changes constitutes acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text-primary">
              10. Contact
            </h2>
            <p className="mt-3">
              Questions about these terms? Reach us at{" "}
              <a
                href="mailto:hello@etincellelabs.com"
                className="text-text-primary underline underline-offset-2 transition-colors hover:text-text-secondary"
              >
                hello@etincellelabs.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

"use client";

import AppLogo from "@/components/Global/AppLogo";
import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center bg-white overflow-hidden">
      <section className="w-full max-w-5xl flex flex-col px-4 sm:px-6 md:px-10 py-6">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6 gap-4 border-b border-gray-100 mb-8">
          <AppLogo />
        </header>

        {/* CONTENT */}
        <main className="flex flex-col gap-8 text-grayShade3 font-satoshi pb-20">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Terms of Use
            </h1>
            <p className="text-sm text-grayShade6">
              For Memow Private Limited | Last Updated: 01.12.2025
            </p>
          </div>

          {/* 1. Introduction */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">1. Introduction</h2>
            <p>
              This website and platform are operated by Memow Private Limited, a
              company incorporated under the laws of India with its registered
              office at Kalyanpur Road, Baruipur, South 24 Parganas, West Bengal
              – 700144 (“Memow”, “we”, “us”, or “our”).
            </p>
            <p>
              The use of our website https://www.myhaveit.io (“Website”) and our
              platform-as-a-service marketplace model (collectively, the
              “Platform”) is governed by these Terms of Use (the “Terms”).
            </p>
            <p>
              By accessing or using the Platform, you (“User”, “you”) agree to
              comply with and be bound by these Terms and our Privacy Policy. If
              you do not agree, you are not authorized to use the Platform or
              avail any service through it.
            </p>
            <p>
              These Terms apply to all users of the Platform, including
              customers, visitors, partners/service providers, vendors, and
              contributors of content.
            </p>
          </section>

          {/* 2. Use of Our Platform */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              2. Use of Our Platform
            </h2>
            <p>
              You agree to use the Platform solely for lawful and legitimate
              purposes, and not for any illegal or unauthorized activity,
              including violations of intellectual property, privacy, or other
              applicable laws.
            </p>
            <p>
              By using the Platform, you represent that you are at least 18
              years of age and legally competent to enter into a binding
              contract.
            </p>
            <p>
              You must not interfere with the Platform’s security features,
              access unauthorized areas, misuse data, or engage in fraudulent
              activity. You must provide accurate information when creating an
              account and keep such information updated.
            </p>
          </section>

          {/* 3. General Conditions */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              3. General Conditions
            </h2>
            <p>
              We reserve the right to refuse service, suspend accounts, restrict
              features, or discontinue the Platform at any time without prior
              notice.
            </p>
            <p>
              Your continued use after updates to the Terms will constitute
              acceptance of the revised Terms. We will not be liable for any
              modification, suspension, or discontinuation of the Platform or
              any part thereof.
            </p>
          </section>

          {/* 4. Platform Description */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              4. Platform Description – Marketplace & PaaS Model
            </h2>
            <p>
              Memow operates as a Platform-as-a-Service (PaaS) marketplace that
              enables Users to discover, compare, book, and pay for
              event-related services provided by independent third-party service
              providers (“Partners”).
            </p>

            <h3 className="text-lg font-semibold text-black mt-2">
              4.1 Services Available
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Makeup artists</li>
              <li>Photographers, videographers, visual studios</li>
              <li>Travel vehicles</li>
              <li>Caterers</li>
              <li>Decorators & theme designers</li>
              <li>Venue providers</li>
              <li>Event managers & support teams</li>
              <li>Any future event-based service category</li>
              <li>
                In-house services: photo editing, video editing, graphic design,
                creative packages
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-black mt-2">
              4.2 Memow’s Role
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Facilitates discovery, booking, communication, and payment.
              </li>
              <li>Provides verification and quality-check mechanisms.</li>
              <li>
                Provides dispute support but is not obligated to provide
                resolution services.
              </li>
              <li>Charges a platform/convenience fee and commissions.</li>
              <li>
                Does NOT provide or guarantee partner services (except internal
                creative services).
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-black mt-2">
              4.3 Partner Responsibility
            </h3>
            <p>
              Partners are solely responsible for service performance, quality,
              punctuality, safety, customer handling, and compliance with
              applicable laws. Memow is not liable for any deficiency in Partner
              services.
            </p>
          </section>

          {/* 5. Products and Services */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              5. Products and Services
            </h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                A. Partner-Provided Services
              </h3>
              <p>
                Partners list, price, and deliver their own services. Memow is
                not the provider or executor of these services.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                B. Memow In-House Services
              </h3>
              <p>Memow may directly offer:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Photo editing</li>
                <li>Video editing</li>
                <li>Graphic design</li>
                <li>Creative digital deliverables</li>
              </ul>
              <p>
                These are governed by internal service timelines and standards.
              </p>
            </div>
          </section>

          {/* 6. Payments */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">6. Payments</h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">For Users</h3>
              <p>Users may pay full or partial booking amounts through:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Razorpay (India)</li>
                <li>Stripe (International)</li>
                <li>UPI, cards, and digital wallets</li>
              </ul>
              <p>
                Platform fee + applicable GST is added. Memow may hold the
                amount in escrow until event completion.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">For Partners</h3>
              <p>Partners receive payouts minus Memow commission, after:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Completion of the service, or</li>
                <li>As per settlement schedule</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">Refunds</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Platform fee is non-refundable.</li>
                <li>
                  Refund of service fees depends on the Partner’s cancellation
                  policy and service commencement status.
                </li>
                <li>Refunds may also depend on dispute nature.</li>
              </ul>
            </div>
          </section>

          {/* 7. Booking & Order Workflow */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              7. Booking & Order Workflow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black">User Flow</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Browse partners</li>
                  <li>Select service & date/time</li>
                  <li>Pay booking/advance</li>
                  <li>Partner receives confirmation</li>
                  <li>Partner performs service</li>
                  <li>User marks completion</li>
                  <li>Settlement released to Partner</li>
                  <li>User may rate/review</li>
                </ol>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black">
                  Partner Flow
                </h3>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Create profile</li>
                  <li>Upload portfolio & pricing</li>
                  <li>Verification by Memow</li>
                  <li>Receive and accept bookings</li>
                  <li>Deliver service</li>
                  <li>Receive settlement</li>
                </ol>
              </div>
            </div>
          </section>

          {/* 8. User Accounts */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">8. User Accounts</h2>
            <p>Users must:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Be 18+</li>
              <li>Provide accurate identity & event details</li>
              <li>Not engage in fraud or illegal events</li>
            </ul>
            <p>
              Accounts may be suspended for misconduct or false information.
            </p>
          </section>

          {/* 9. Partner Accounts */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              9. Partner Accounts
            </h2>
            <p>Partners must provide:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Valid government ID</li>
              <li>GST details (if applicable)</li>
              <li>Business documentation</li>
              <li>Portfolio of original work</li>
            </ul>
            <p>Partners can be suspended for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fraud</li>
              <li>Non-delivery</li>
              <li>Misconduct</li>
              <li>Extremely poor ratings</li>
              <li>Bypassing the platform</li>
            </ul>
          </section>

          {/* 10. Content Rules */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">10. Content Rules</h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">Users</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Must upload only lawful content</li>
                <li>Cannot misuse or republish Partner content</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">Partners</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Must upload original work</li>
                <li>Cannot use copyrighted material without rights</li>
              </ul>
            </div>
          </section>

          {/* 11. Intellectual Property */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              11. Intellectual Property
            </h2>
            <p>Memow owns:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Software, algorithms, platform code</li>
              <li>UI/UX, templates</li>
              <li>Trademark, brand name, logos</li>
            </ul>
            <p>
              Partners retain ownership of their portfolio content. Users retain
              ownership of their uploaded personal content.
            </p>
          </section>

          {/* 12. Pricing, Offers, and Amendments */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              12. Pricing, Offers, and Amendments
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prices are determined primarily by Partners.</li>
              <li>Memow may run platform-wide offers.</li>
              <li>Memow may modify pricing structure or fees with notice.</li>
              <li>Notifications may be issued via email or platform alerts.</li>
            </ul>
          </section>

          {/* 13. Platform Availability & Downtime */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              13. Platform Availability & Downtime
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Expected uptime: 99%</li>
              <li>Maintenance may be scheduled with prior notice</li>
              <li>Memow is not liable for Partner unavailability</li>
              <li>No compensation is provided for platform outages</li>
            </ul>
          </section>

          {/* 14. Disclaimer & Limitation of Liability */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              14. Disclaimer & Limitation of Liability
            </h2>
            <p>
              The Platform is provided “as is”, without warranties of any kind.
            </p>
            <p>Memow is not liable for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Quality, execution, or outcome of Partner services</li>
              <li>Damages or losses at the event location</li>
              <li>Delays caused by traffic, weather, third-party issues</li>
              <li>Partner misconduct</li>
              <li>
                Errors in pricing, availability, or listings posted by Partners
              </li>
            </ul>
            <p>
              Memow’s maximum liability is limited to the Platform fee paid, if
              any.
            </p>
          </section>

          {/* 15. Indemnification */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              15. Indemnification
            </h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                Users agree to indemnify Memow for:
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Illegal uploads</li>
                <li>Fraudulent payments</li>
                <li>Misuse of Partner services</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                Partners agree to indemnify Memow for:
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Service-related disputes</li>
                <li>Damages or injuries caused during service</li>
                <li>Legal violations</li>
                <li>Misrepresentation</li>
              </ul>
            </div>
          </section>

          {/* 16. User Conduct */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">16. User Conduct</h2>
            <p>Users must not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Abuse or harass Partners</li>
              <li>Book services for illegal events</li>
              <li>Provide false addresses</li>
              <li>Attempt to bypass Memow to deal privately with Partners</li>
            </ul>
          </section>

          {/* 17. Partner Conduct */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              17. Partner Conduct
            </h2>
            <p>Partners must:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Deliver services professionally</li>
              <li>Maintain punctuality, quality & safety</li>
              <li>Not solicit users outside the Platform</li>
              <li>Not charge unauthorized amounts</li>
            </ul>
          </section>

          {/* 18. Account Suspension & Deletion */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              18. Account Suspension & Deletion
            </h2>
            <p>
              Users or Partners may request account deletion. Data may be
              retained as required by law. Memow may suspend or terminate
              accounts for violations.
            </p>
          </section>

          {/* 19. Refund, Cancellation & Replacement */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              19. Refund, Cancellation & Replacement
            </h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                User Cancellations
              </h3>
              <p>
                Refund depends on Partner’s cancellation policy. Platform fee is
                always non-refundable.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                Partner Cancellations
              </h3>
              <p>
                User receives full refund. Partner may face
                penalties/suspension.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">Replacement</h3>
              <p>
                Memow may attempt to arrange a replacement service provider but
                does not guarantee availability.
              </p>
            </div>
          </section>

          {/* 20. Complaints & Grievance Officer */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              20. Complaints & Grievance Officer
            </h2>
            <p>For any concerns, please contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="font-semibold">Ms. Sayani Mondal</p>
              <p>Grievance Officer</p>
              <p>Email: sayani@memowries.com</p>
              <p>Phone: +91-8240469932</p>
            </div>
          </section>

          {/* 21-28. Miscellaneous */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              21. Errors & Omissions
            </h2>
            <p>
              The Platform may contain inaccuracies or outdated information.
              Memow reserves the right to correct errors at any time.
            </p>

            <h2 className="text-xl font-bold text-black mt-4">
              22. Entire Agreement
            </h2>
            <p>
              These Terms constitute the complete agreement between you and
              Memow and supersede any prior discussions or arrangements.
            </p>

            <h2 className="text-xl font-bold text-black mt-4">23. Waiver</h2>
            <p>
              Failure to enforce any provision does not constitute a waiver of
              rights.
            </p>

            <h2 className="text-xl font-bold text-black mt-4">24. Headings</h2>
            <p>
              Headings are for convenience only and do not affect
              interpretation.
            </p>

            <h2 className="text-xl font-bold text-black mt-4">
              25. Severability
            </h2>
            <p>
              If any provision is found invalid or unenforceable, the remaining
              Terms shall continue in force.
            </p>

            <h2 className="text-xl font-bold text-black mt-4">
              26. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms are governed by Indian law. Any disputes shall be
              subject to the exclusive jurisdiction of the courts in Kolkata,
              West Bengal. If required, disputes may be referred to arbitration,
              seated in Kolkata, conducted in English, in accordance with the
              Arbitration and Conciliation Act, 1996.
            </p>

            <h2 className="text-xl font-bold text-black mt-4">
              27. Updates to these Terms
            </h2>
            <p>
              Memow may modify these Terms at any time. Major changes will be
              notified via email; minor changes may be posted on the Website.
            </p>

            <h2 className="text-xl font-bold text-black mt-4">28. Contact</h2>
            <p>For queries or feedback, write to us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p>Email: connect@memowry.com</p>
              <p>Phone: +91-8777729704</p>
            </div>
          </section>
        </main>
      </section>
    </section>
  );
};

export default TermsAndConditions;

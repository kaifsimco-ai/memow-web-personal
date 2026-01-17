"use client";

import AppLogo from "@/components/Global/AppLogo";
import React from "react";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-grayShade6">
              Effective date: 30 November 2025 | Last updated: 30 November 2025
            </p>
            <p className="text-sm text-grayShade6">
              Operated by: Memow Pvt Ltd (“Haveit”, “we”, “us”, “our”)
            </p>
            <p className="text-sm text-grayShade6">
              Kalyanpur Road, Baruipur, South 24 Parganas, West Bengal — 700144,
              India
            </p>
            <p className="text-sm text-grayShade6">
              Email: memow@memowry.com • Data Protection / Grievance:
              connect@memowry.com
            </p>
          </div>

          {/* 1. Purpose & scope */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">1. Purpose & scope</h2>
            <p>
              This Policy explains how Haveit collects, uses, discloses, stores
              and protects digital personal data in India, and the rights
              available to data principals (individuals) under Indian law. This
              Policy applies to processing of digital personal data carried out
              by Haveit in India and to data principals who are resident in
              India. It does not include or rely upon GDPR, CCPA or any
              non-India data protection regimes.
            </p>
            <p>
              References in this document to “DPDP Act” or “the Act” mean the
              Digital Personal Data Protection Act, 2023 and the associated
              Rules as applicable.
            </p>
          </section>

          {/* 2. Key definitions */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">2. Key definitions</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-semibold">Data Principal</span> — the
                individual to whom the personal data relates.
              </li>
              <li>
                <span className="font-semibold">Data Fiduciary</span> — Haveit
                (decides the purpose and means of processing).
              </li>
              <li>
                <span className="font-semibold">Data Processor</span> — a third
                party that processes personal data on Haveit’s instructions.
              </li>
              <li>
                <span className="font-semibold">Personal Data</span> — digital
                data that directly or indirectly identifies an individual.
              </li>
            </ul>
            <p>Full definitions follow those in the DPDP Act.</p>
          </section>

          {/* 3. Data we collect */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">3. Data we collect</h2>
            <p>
              We collect only the personal data necessary to provide our
              services, enforce SLAs, comply with legal obligations, prevent
              fraud, and improve platform safety. Examples:
            </p>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                Identity & verification
              </h3>
              <p>
                Name, date of birth (where required), government identity
                documents (Aadhaar/PAN or verification tokens), photograph/face
                verification — for KYC and fraud prevention. (We minimise
                storage of raw Aadhaar; verification tokens / hashes used where
                possible and retained only as required by law and our retention
                schedule.)
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">Contact</h3>
              <p>
                Mobile number, email address, postal address — for booking,
                notifications and communications.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                Business / service details
              </h3>
              <p>
                Vendor service descriptions, portfolio/media, certifications and
                pricing — to list and match services.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                Financial & payments
              </h3>
              <p>
                Bank account / UPI details required to process payouts; payment
                instrument metadata processed by payment service providers.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                Transaction & booking data
              </h3>
              <p>
                Booking records, event details, quotes, invoices, SLA records,
                dispute records.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                Communications & media
              </h3>
              <p>
                Messages, call logs (metadata), uploaded photographs/videos
                needed for service delivery and dispute resolution.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-black">
                Device & analytics
              </h3>
              <p>
                IP address, device identifier, browser/OS, crash logs, usage
                logs for security, fraud detection and product improvement.
              </p>
            </div>
            <p>We do not “sell” personal data.</p>
          </section>

          {/* 4. Lawful basis for processing */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              4. Lawful basis for processing
            </h2>
            <p>
              We process personal data only on a lawful basis permitted under
              the DPDP Act, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-semibold">
                  Contractual / necessary processing
                </span>{" "}
                — to perform the agreement with you (booking, payment, delivery,
                payouts).
              </li>
              <li>
                <span className="font-semibold">Consent</span> — where required
                (e.g., specific marketing or optional identity checks beyond
                statutory KYC).
              </li>
              <li>
                <span className="font-semibold">
                  Compliance / legal obligation
                </span>{" "}
                — for taxation, KYC, statutory reporting (IT Act, GST, RBI
                obligations).
              </li>
              <li>
                <span className="font-semibold">Legitimate purposes</span> —
                fraud prevention, security, platform integrity, and delivery of
                our services.
              </li>
            </ul>
            <p>
              We will notify data principals in advance where processing
              requires specific consent and provide a clear consent notice
              consistent with the DPDP Rules.
            </p>
          </section>

          {/* 5. How we use your personal data */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              5. How we use your personal data
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Onboarding, verification and KYC for Vendors and Users.</li>
              <li>
                Matching Vendors to event requirements and enabling quotes,
                bookings and communications.
              </li>
              <li>
                Processing payments and payouts via RBI/PCI-DSS-compliant
                payment processors.
              </li>
              <li>
                Dispute resolution, SLA enforcement, quality control and review
                moderation.
              </li>
              <li>
                Fraud detection, security monitoring and abuse prevention.
              </li>
              <li>
                Regulatory obligations: tax, audit and legal requests (courts,
                law enforcement).
              </li>
            </ul>
          </section>

          {/* 6. Sharing & disclosures */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              6. Sharing & disclosures
            </h2>
            <p>
              We share personal data only where necessary and under appropriate
              safeguards:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Service providers / processors (payment gateways, cloud hosting,
                KYC providers, analytics) under written Data Processing
                Agreements (DPAs) requiring security, deletion and return
                obligations.
              </li>
              <li>
                Law enforcement / courts / regulators when required by law or
                valid legal process.
              </li>
              <li>
                Within the Haveit group and to partners involved in fulfilment
                (e.g., nominated PCRs or partner planners) strictly on a
                need-to-know basis.
              </li>
              <li>
                For merger / sale scenarios — may be disclosed to a buyer as
                part of an asset sale, with notice to principals where required
                by law.
              </li>
            </ul>
            <p>We do not sell personal data.</p>
          </section>

          {/* 7. Cross-border transfers */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              7. Cross-border transfers
            </h2>
            <p>
              The DPDP Act permits cross-border transfers subject to any
              government notifications or negative lists. We will transfer data
              outside India only where needed, subject to contractual
              safeguards, and while complying with any applicable DPDP Rules
              relating to transfer. If any category of data is required by the
              Government to remain within India, we will follow that mandate.
            </p>
          </section>

          {/* 8. Data retention */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">8. Data retention</h2>
            <p>
              We retain personal data only as long as necessary for the purpose
              for which it was collected, for legal compliance, or to resolve
              disputes. Typical retention periods (subject to statutory
              requirements and operational needs):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-semibold">KYC / identity documents:</span>{" "}
                retained for the period required by law and for fraud/audit
                purposes (recommended: up to 6 years where needed for tax /
                regulatory obligations; minimize raw Aadhaar retention).
              </li>
              <li>
                <span className="font-semibold">
                  Transaction & booking records, invoices:
                </span>{" "}
                retained for at least 6 years (GST / tax compliance).
              </li>
              <li>
                <span className="font-semibold">
                  Support & dispute records:
                </span>{" "}
                retained while a dispute is active, and then for a period
                required for audit/defence (commonly 2–6 years).
              </li>
              <li>
                <span className="font-semibold">Logs & analytics:</span>{" "}
                aggregated or pseudonymised where possible; raw logs kept for
                operational/security needs (commonly 12–24 months) and then
                deleted or anonymised.
              </li>
            </ul>
            <p>
              We will publish a retention schedule in the App’s Legal menu and
              delete or anonymise data once retention requirements expire.
            </p>
          </section>

          {/* 9. Security of personal data */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              9. Security of personal data
            </h2>
            <p>
              We implement reasonable technical and organisational measures
              including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Encryption in transit (TLS) and encryption at rest where
                appropriate.
              </li>
              <li>
                Role-based access control, least privilege and multi-factor
                authentication for administrative access.
              </li>
              <li>
                Contractual controls, due diligence and security requirements
                for processors (DPAs).
              </li>
              <li>
                Regular vulnerability assessments, patch management, and
                incident response practice.
              </li>
            </ul>
            <p>
              Despite these measures, no system is perfectly secure. If a
              personal data breach occurs, we will follow notification and
              mitigation obligations under the DPDP Rules (including notifying
              the Data Protection Board and affected principals where required).
              Recent DPDP Rules set clear timelines and require prompt
              notification; breaches generally must be notified to the Board and
              affected individuals in the timeframes prescribed by the Rules.
            </p>
          </section>

          {/* 10. Your rights */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">10. Your rights</h2>
            <p>Under the DPDP Act, data principals have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Confirm & access whether we process their personal data and
                obtain a copy.
              </li>
              <li>
                Correction / rectification of inaccurate or incomplete data.
              </li>
              <li>
                Erasure / deletion where processing is no longer necessary and
                no legal requirement prevents deletion.
              </li>
              <li>Data portability where technically feasible.</li>
              <li>
                Withdraw consent to any consent-based processing (processing
                that relies solely on consent).
              </li>
              <li>
                Lodge grievances with Haveit; if unresolved, approach the Data
                Protection Board.
              </li>
            </ul>
            <p>
              To exercise a right, contact: legal@memowry.com or write to the
              Grievance Officer (postal address below). We will verify identity
              and respond within the timelines required by the DPDP Rules.
            </p>
          </section>

          {/* 11. Grievance redress & contact */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              11. Grievance redress & contact
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="font-semibold">
                Grievance Officer / Data Protection Contact
              </p>
              <p>Name: Sayani Mondal</p>
              <p>Email: sayani@memowries.com</p>
              <p>
                Postal address: Memow Pvt Ltd, Kalyanpur Road, Baruipur, South
                24 Parganas, West Bengal — 700144, India
              </p>
              <p>Phone: 8240469932</p>
            </div>
            <p>
              If you are not satisfied with our response, you may approach the
              Data Protection Board of India under the DPDP Act. The Data
              Protection Board became operational as part of the Rules notified
              by the Government of India.
            </p>
          </section>

          {/* 12. Children & minors */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              12. Children & minors
            </h2>
            <p>
              Our services are intended for individuals 18 years and older. We
              do not knowingly collect personal data of minors. If we learn we
              have collected a minor’s personal data without verifiable parental
              consent, we will delete it in accordance with our policies and
              applicable laws.
            </p>
          </section>

          {/* 13. Cookies, tracking & marketing */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              13. Cookies, tracking & marketing
            </h2>
            <p>
              We use cookies and similar technologies to operate and secure our
              service, remember preferences, and analyze usage. We will obtain
              consent where necessary and provide users with clear choices for
              marketing communications. You can manage cookie preferences
              through the app settings.
            </p>
          </section>

          {/* 14. Changes to this Policy */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              14. Changes to this Policy
            </h2>
            <p>
              We may update this Policy to reflect changes in law, guidance, or
              our processing practices. Material changes will be published in
              the App/Website with a “Last updated” date. For any material
              change affecting your rights we will provide a clear notice.
            </p>
          </section>

          {/* 15. Jurisdiction & governing law */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              15. Jurisdiction & governing law
            </h2>
            <p>
              This Policy and any disputes about data processing are governed by
              the laws of India. Courts in West Bengal, India will have
              jurisdiction, unless otherwise required by a written agreement.
            </p>
          </section>

          {/* 16. Practical controls for Vendors & Partners */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              16. Practical controls for Vendors & Partners
            </h2>
            <p className="text-sm text-grayShade6">
              (These operational requirements are part of Vendor Terms and Data
              Processing Agreements.)
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Vendors must process user personal data only as instructed and
                strictly for service fulfilment. They must not copy or export
                customer personal data outside Haveit’s approved processors and
                channels.
              </li>
              <li>
                Vendors must retain KYC and transaction records only as required
                by law and the platform retention schedule.
              </li>
              <li>
                Off-app negotiations and off-platform payments (cash / direct
                UPI / WhatsApp negotiation) are prohibited and may result in
                penalties, withheld payouts or termination.
              </li>
            </ul>
          </section>

          {/* 17. Data breach notification */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              17. Data breach notification
            </h2>
            <p>
              If a personal data breach occurs that poses a risk to affected
              individuals, we will:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Contain and mitigate the breach.</li>
              <li>Assess scope and impact.</li>
              <li>
                Notify the Data Protection Board and affected individuals in
                accordance with DPDP Rules and their timelines (the Rules set
                timeframes for breach notification).
              </li>
              <li>
                Provide remedial steps and support to affected principals where
                appropriate.
              </li>
            </ol>
          </section>

          {/* 18. How to contact us */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              18. How to contact us
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p>
                For privacy-related questions or to exercise your rights —
                legal@memowry.com
              </p>
              <p>For general support — connect@memowry.com</p>
              <p>
                Postal: Memow Pvt Ltd, Kalyanpur Road, Baruipur, South 24
                Parganas, West Bengal — 700144, India.
              </p>
            </div>
          </section>
        </main>
      </section>
    </section>
  );
};

export default PrivacyPolicy;

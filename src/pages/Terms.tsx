import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";

const toc = [
  "Our Services",
  "Intellectual Property Rights",
  "User Representations",
  "User Registration",
  "Purchases and Payment",
  "Software",
  "Prohibited Activities",
  "User Generated Contributions",
  "Contribution License",
  "Guidelines for Reviews",
  "Mobile Application License",
  "Services Management",
  "Privacy Policy",
  "Term and Termination",
  "Modifications and Interruptions",
  "Governing Law",
  "Dispute Resolution",
  "Corrections",
  "Disclaimer",
  "Limitations of Liability",
  "Indemnification",
  "User Data",
  "Electronic Communications, Transactions, and Signatures",
  "SMS Text Messaging",
  "Miscellaneous",
  "Contact Us",
];

const Terms: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Seo
        title="Terms & Conditions | Otoddy"
        description="Read Otoddy’s Terms & Conditions to understand our policies, user responsibilities, payments, privacy, and dispute resolution."
        url="https://www.otoddy.com/terms"
        image="/terms-preview.jpg"
        keywords="otoddy terms, terms and conditions, driver on demand, booking terms"
      />

      {/* Header */}
      <header className="sticky top-16 z-30 bg-gray-50/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
          <span className="text-sm text-gray-600">
            Last updated <time dateTime="2025-08-08">August 08, 2025</time>
          </span>
        </div>
      </header>

      <main className="py-10">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[260px_minmax(0,1fr)] gap-8">
          {/* TOC (desktop) */}
          <aside className="hidden lg:block">
            <nav className="sticky top-32 bg-white rounded-xl shadow p-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Table of Contents
              </p>
              <ol className="space-y-2 text-sm">
                {toc.map((t, i) => (
                  <li key={t}>
                    <a
                      className="text-emerald-700 hover:text-emerald-900 underline underline-offset-4"
                      href={`#sec-${i + 1}`}
                    >
                      {i + 1}. {t}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Content */}
          <article className="bg-white rounded-2xl shadow p-6 md:p-10 prose prose-gray max-w-none">
            <p>
              We are <strong>Otoddy Private Limited</strong> ("Company", "we",
              "us", or "our"), a company registered in India at:
            </p>
            <p>
              S 12 Pandav Nagar East Delhi,
              <br />
              New Delhi, Delhi 110092
            </p>

            <p>
              We operate the website{" "}
              <a
                href="https://www.otoddy.com"
                className="text-emerald-700 underline"
              >
                https://www.otoddy.com
              </a>{" "}
              (the "Site"), the mobile application "Otoddy" (the "App"), and any
              other related products and services that refer or link to these
              legal terms (collectively, the "Services").
            </p>

            <p>
              By accessing or using our Services, you agree to these Terms and
              Conditions ("Legal Terms"). If you do not agree to these terms,
              please do not use our Services.
            </p>

            <p>
              The Services are intended for users who are at least 18 years old.
              Persons under 18 are not permitted to use or register for the
              Services.
            </p>

            <p>We recommend printing a copy of these Legal Terms for your records.</p>

            {/* 1 */}
            <h2 id="sec-1">1. Our Services</h2>
            <p>
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those who access the Services from other locations do
              so on their own initiative and are solely responsible for
              compliance with local laws.
            </p>

            {/* 2 */}
            <h2 id="sec-2">2. Intellectual Property Rights</h2>
            <p>
              We own or license all intellectual property rights in the
              Services, including software code, content, trademarks, and logos
              ("Content" and "Marks"). These are protected by applicable laws
              and provided "AS IS" for your personal, non-commercial use.
            </p>
            <p>
              You may access and download portions of the Content for personal
              use. Any other use, including reproduction, transmission, or
              commercial exploitation, without our express written permission is
              prohibited and may result in termination of your right to access
              the Services.
            </p>
            <p>
              If you wish to make any other use, please contact us at{" "}
              <a href="mailto:info@otoddy.com" className="text-emerald-700">
                info@otoddy.com
              </a>
              .
            </p>

            {/* 3 */}
            <h2 id="sec-3">3. User Representations</h2>
            <p>By using the Services, you represent and warrant that:</p>
            <ul>
              <li>
                You provide true, accurate, current, and complete information
                during registration.
              </li>
              <li>You will maintain and promptly update your information.</li>
              <li>You have legal capacity and agree to comply with these Legal Terms.</li>
              <li>You are not a minor where you reside.</li>
              <li>You will not use the Services for illegal or unauthorized purposes.</li>
              <li>You will not violate applicable laws or regulations.</li>
            </ul>
            <p>
              If you provide false information, we may suspend or terminate your
              account.
            </p>

            {/* 4 */}
            <h2 id="sec-4">4. User Registration</h2>
            <p>
              You may be required to register to use the Services. You agree to
              keep your password confidential and are responsible for all
              activity under your account. We reserve the right to remove or
              change usernames we deem inappropriate or offensive.
            </p>

            {/* 5 */}
            <h2 id="sec-5">5. Purchases and Payment</h2>
            <p>
              We accept payment methods including Visa, Mastercard, Razorpay,
              UPI, and Internet Banking. All transactions are conducted in INR.
            </p>
            <p>
              You agree to provide accurate account and payment information.
              Prices and availability may change without notice. We reserve the
              right to refuse or cancel orders due to pricing errors or
              suspicious activity.
            </p>

            {/* 6 */}
            <h2 id="sec-6">6. Software</h2>
            <p>
              Software provided with the Services is licensed, not sold to you,
              and may be subject to a separate EULA. Software is provided "AS
              IS" without warranty. You may not copy, modify, reverse engineer,
              or distribute software except as permitted by law or license.
            </p>

            {/* 7 */}
            <h2 id="sec-7">7. Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use automated systems to scrape or collect content.</li>
              <li>Defraud or mislead other users.</li>
              <li>Interfere with security features.</li>
              <li>Use the Services unlawfully or to harass others.</li>
              <li>Upload viruses or spam.</li>
              <li>Impersonate others.</li>
              <li>Use the Services for unauthorized commercial purposes.</li>
              <li>Remove copyright or proprietary notices.</li>
            </ul>

            {/* 8 */}
            <h2 id="sec-8">8. User Generated Contributions</h2>
            <p>
              The Services do not offer submission or posting of content by users.
            </p>

            {/* 9 */}
            <h2 id="sec-9">9. Contribution License</h2>
            <p>
              You grant us the right to use any suggestions or feedback you
              provide regarding the Services, without compensation and with full
              rights.
            </p>

            {/* 10 */}
            <h2 id="sec-10">10. Guidelines for Reviews</h2>
            <p>When leaving reviews, ensure:</p>
            <ul>
              <li>You have firsthand experience.</li>
              <li>
                Reviews are not offensive, discriminatory, or illegal.
              </li>
              <li>Reviews represent honest opinions.</li>
            </ul>
            <p>We reserve the right to remove any review at our discretion.</p>

            {/* 11 */}
            <h2 id="sec-11">11. Mobile Application License</h2>
            <p>
              Use of the App is licensed, not sold. Restrictions include no
              reverse engineering, unauthorized commercial use, or removal of
              proprietary notices. Compliance with app store terms is required.
            </p>

            {/* 12 */}
            <h2 id="sec-12">12. Services Management</h2>
            <p>
              We may monitor the Services for violations, limit access for
              violations, remove excessive content, or take legal action as
              necessary to protect our rights and maintain functionality.
            </p>

            {/* 13 */}
            <h2 id="sec-13">13. Privacy Policy</h2>
            <p>
              Our Privacy Policy (
              <a
                href="http://www.otoddy.com/privacy"
                className="text-emerald-700 underline"
              >
                http://www.otoddy.com/privacypolicy
              </a>
              ) governs the handling of your personal data. By using the
              Services, you consent to data transfer and processing in India.
            </p>

            {/* 14 */}
            <h2 id="sec-14">14. Term and Termination</h2>
            <p>
              We may terminate or suspend your access for any reason, including
              violations of these Terms or applicable law, without prior notice.
              Termination does not limit our legal rights.
            </p>

            {/* 15 */}
            <h2 id="sec-15">15. Modifications and Interruptions</h2>
            <p>
              We may modify or discontinue the Services at any time without
              notice. We are not liable for any damages due to service
              interruptions or changes.
            </p>

            {/* 16 */}
            <h2 id="sec-16">16. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. You agree to the
              exclusive jurisdiction of courts in India for disputes.
            </p>

            {/* 17 */}
            <h2 id="sec-17">17. Dispute Resolution</h2>
            <p>
              Disputes are subject to informal negotiation first, then binding
              arbitration under the International Commercial Arbitration Court,
              Brussels. Arbitration is individual and excludes class actions.
              Exceptions (such as IP rights claims) may be resolved in courts.
            </p>

            {/* 18 */}
            <h2 id="sec-18">18. Corrections</h2>
            <p>
              We reserve the right to correct errors and update information
              without notice.
            </p>

            {/* 19 */}
            <h2 id="sec-19">19. Disclaimer</h2>
            <p>
              Services are provided "AS IS" without warranty. We disclaim all
              warranties including merchantability, fitness, or non-infringement.
              We are not liable for damages arising from use of the Services
              including unauthorized access, viruses, or content errors.
            </p>

            {/* 20 */}
            <h2 id="sec-20">20. Limitations of Liability</h2>
            <p>
              Our liability is limited to the amount paid by you to us. We are
              not liable for indirect, punitive, or consequential damages, even
              if advised of the possibility.
            </p>

            {/* 21 */}
            <h2 id="sec-21">21. Indemnification</h2>
            <p>
              You agree to indemnify us and our affiliates from claims arising
              from your use of the Services, breach of these Terms, or violation
              of third-party rights.
            </p>

            {/* 22 */}
            <h2 id="sec-22">22. User Data</h2>
            <p>
              We maintain data you transmit to manage Services performance. You
              are responsible for backups; we are not liable for data loss.
            </p>

            {/* 23 */}
            <h2 id="sec-23">
              23. Electronic Communications, Transactions, and Signatures
            </h2>
            <p>
              Electronic communications, including emails and online forms,
              satisfy legal requirements for writing and signatures. You agree
              to electronic delivery of notices and contracts.
            </p>

            {/* 24 */}
            <h2 id="sec-24">24. SMS Text Messaging</h2>
            <p>
              By opting into SMS programs, you consent to receive messages that
              may include account alerts. To opt out, reply "STOP". Message and
              data rates may apply.
            </p>
            <p>
              For assistance:{" "}
              <a href="mailto:info@otoddy.com" className="text-emerald-700">
                info@otoddy.com
              </a>{" "}
              or phone <a href="tel:9799722138">9799722138</a>.
            </p>

            {/* 25 */}
            <h2 id="sec-25">25. Miscellaneous</h2>
            <p>
              These Terms, together with any posted policies, constitute the
              entire agreement. Waiver of rights requires written consent. If
              parts are unenforceable, others remain in effect. We may assign
              rights and are not liable for events beyond our control.
            </p>

            {/* 26 */}
            <h2 id="sec-26">26. Contact Us</h2>
            <p>For complaints or more info, contact:</p>
            <p>
              <strong>Otoddy Private Limited</strong>
              <br />
              Pandav nagar
              <br />
              Delhi-110092
              <br />
              India
              <br />
              Phone: <a href="tel:9799722138">9799722138,7838366262</a>
              <br />
              Email:{" "}
              <a href="mailto:info@otoddy.com" className="text-emerald-700">
                info@otoddy.com
              </a>
            </p>
          </article>
        </div>
      </main>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3"
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default Terms;

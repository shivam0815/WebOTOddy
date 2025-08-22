import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";

const toc = [
  "Introduction",
  "Summary of Key Points",
  "1. What Information Do We Collect?",
  "2. How Do We Process Your Information?",
  "3. When and With Whom Do We Share Your Personal Information?",
  "4. Do We Use Cookies and Other Tracking Technologies?",
  "5. How Long Do We Keep Your Information?",
  "6. How Do We Keep Your Information Safe?",
  "7. Do We Collect Information From Minors?",
  "8. What Are Your Privacy Rights?",
  "9. Controls for Do-Not-Track Features",
  "10. Do We Make Updates to This Notice?",
  "11. How Can You Contact Us About This Notice?",
  "12. How Can You Review, Update, or Delete the Data We Collect From You?",
];

const Privacy: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Seo
        title="Privacy Policy | Otoddy"
        description="Learn how Otoddy collects, uses, shares, and protects your personal information across our app and services."
        url="https://www.otoddy.com/privacy"
        image="/privacy-preview.jpg"
        keywords="otoddy privacy policy, data protection, personal data, cookies"
      />

      {/* Sticky header */}
      <header className="sticky top-16 z-30 bg-gray-50/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <span className="text-sm text-gray-600">
            Last updated <time dateTime="2025-08-08">August 08, 2025</time>
          </span>
        </div>
      </header>

      <main className="py-10">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[260px_minmax(0,1fr)] gap-8">
          {/* Sidebar TOC */}
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
                      href={`#sec-${i}`}
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Content */}
          <article className="bg-white rounded-2xl shadow p-6 md:p-10 prose prose-gray max-w-none">
            <h2 id="sec-0">Introduction</h2>
            <p>
              This Privacy Notice for <strong>OTOddy Private Limited</strong>
              {" "}(&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              describes how and why we might access, collect, store, use, and/or
              share (&ldquo;process&rdquo;) your personal information when you use
              our services (&ldquo;Services&rdquo;), including when you:
            </p>
            <ul>
              <li>
                Download and use our mobile application (&ldquo;<strong>Otoddy</strong>&rdquo;) or any other application linked to this Privacy Notice
              </li>
              <li>Use OTOddy services</li>
              <li>
                Engage with us in other related ways, including sales, marketing, or events
              </li>
            </ul>
            <p>
              Questions or concerns? Reading this Privacy Notice will help you understand your
              privacy rights and choices. We are responsible for making decisions about how your
              personal information is processed. If you do not agree with our policies and
              practices, please do not use our Services. If you still have any questions or
              concerns, contact us at{" "}
              <a href="mailto:info@otoddy.com" className="text-emerald-700">
                info@otoddy.com
              </a>.
            </p>

            <h2 id="sec-1">Summary of Key Points</h2>
            <p>
              This summary provides key points from our Privacy Notice. You can find more details
              about any of these topics by using the headings below.
            </p>
            <ul>
              <li>
                <strong>What personal information do we process?</strong> We may process personal
                information depending on how you interact with us and the Services, your choices,
                and the products/features you use.
              </li>
              <li>
                <strong>Do we process any sensitive personal information?</strong> We do not process
                sensitive personal information such as racial or ethnic origins, sexual orientation,
                or religious beliefs.
              </li>
              <li>
                <strong>Do we collect information from third parties?</strong> We may collect data
                from public databases, marketing partners, social media, and other outside sources.
              </li>
              <li>
                <strong>How do we process your information?</strong> To provide, improve, and
                administer our Services, communicate with you, protect against fraud, comply with
                law, and with your consent.
              </li>
              <li>
                <strong>When and with whom do we share personal information?</strong> We may share
                with trusted partners, service providers, or in legal contexts.
              </li>
              <li>
                <strong>How do we keep your information safe?</strong> We have organizational and
                technical safeguards but cannot guarantee 100% security.
              </li>
              <li>
                <strong>Your rights:</strong> Access, update, delete your data; control marketing
                preferences; withdraw consent.
              </li>
              <li>
                <strong>How to exercise your rights:</strong> Submit a data subject access request or
                contact us.
              </li>
            </ul>

            <h2 id="sec-2">1. What Information Do We Collect?</h2>
            <h3>Personal information you disclose to us</h3>
            <p><em>In Short: We collect personal information that you provide to us.</em></p>
            <p>
              We collect personal information that you voluntarily provide when you register on the
              Services, express interest in our products, participate in activities, or otherwise
              contact us.
            </p>
            <p><strong>Personal Information Provided by You:</strong> Depending on your interaction, this may include:</p>
            <ul>
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
              <li>Mailing addresses</li>
              <li>Usernames and passwords</li>
              <li>Contact preferences</li>
              <li>Contact or authentication data</li>
              <li>Billing addresses</li>
              <li>Debit/credit card numbers</li>
            </ul>
            <p><strong>Sensitive Information:</strong> We do not process sensitive information.</p>
            <p>
              <strong>Payment Data:</strong> We collect data necessary to process purchases (payment
              instrument number and security code), all handled securely by Razorpay.
            </p>

            <h4>Application Data</h4>
            <p>
              If you use our applications, we may collect information with your permission such as:
            </p>
            <ul>
              <li>
                <strong>Geolocation Information:</strong> Tracking device location continuously or
                while using the app to provide location-based services. You may change permissions in
                your device settings.
              </li>
              <li>
                <strong>Mobile Device Access:</strong> Access certain device features; permissions
                can be changed anytime.
              </li>
              <li>
                <strong>Push Notifications:</strong> Send notifications about your account or app
                features. Can be disabled in device settings.
              </li>
            </ul>
            <p>
              This data helps maintain app security, troubleshooting, analytics, and reporting.
              <br />
              <strong>Accuracy:</strong> All personal information provided must be true, complete,
              and accurate, and you should notify us of any changes.
            </p>

            <h3>Information Automatically Collected</h3>
            <p><em>In Short: Some information such as IP address, browser, and device characteristics is collected automatically.</em></p>
            <p>We automatically collect information when you visit or use our Services, including:</p>
            <ul>
              <li>
                <strong>Log and Usage Data:</strong> IP address, device info, browser type, activity
                timestamps, pages viewed, searches, features used.
              </li>
              <li>
                <strong>Device Data:</strong> Computer, tablet, phone details like IP, identifiers,
                location, browser, OS, hardware model, ISP or mobile carrier.
              </li>
              <li>
                <strong>Location Data:</strong> Precise or imprecise device location determined via
                GPS or IP. Opt-out possible via device settings, but some Services may be limited.
              </li>
            </ul>
            <p>
              We also collect data through cookies and similar technologies (see our Cookie Notice).
            </p>

            <h3>Information Collected from Other Sources</h3>
            <p><em>In Short: We may collect limited information from public databases, marketing partners, and other outside sources.</em></p>
            <p>
              This includes mailing addresses, job titles, email addresses, phone numbers,
              intent/user behavior data, IP addresses, social media profiles, and custom profiles for
              marketing and event promotion.
            </p>

            <h2 id="sec-3">2. How Do We Process Your Information?</h2>
            <p><em>
              In Short: We process your information to provide, improve, administer our Services,
              communicate with you, prevent fraud, comply with law, and with your consent.
            </em></p>
            <p>Depending on your interaction, we process data to:</p>
            <ul>
              <li>Facilitate account creation, authentication, and management.</li>
              <li>Deliver requested services.</li>
              <li>Send administrative communications about products, policies, or changes.</li>
              <li>Enable user-to-user communications.</li>
              <li>Request feedback about our Services.</li>
              <li>Deliver personalized advertising relevant to your interests and location.</li>
              <li>Protect Services via fraud monitoring and prevention.</li>
              <li>Evaluate and improve Services, products, marketing, and experience.</li>
              <li>Comply with legal obligations, respond to legal requests, and enforce legal rights.</li>
            </ul>

            <h2 id="sec-4">3. When and With Whom Do We Share Your Personal Information?</h2>
            <p><em>
              In Short: We may share information in specific situations and with third parties
              described below.
            </em></p>
            <p>Examples of sharing circumstances include:</p>
            <ul>
              <li>
                <strong>Business Transfers:</strong> During negotiations or completion of mergers,
                sales, financing, or acquisitions.
              </li>
              <li>
                <strong>Other Users:</strong> When you share personal info in public areas or
                communicate on the Services, it may be visible to others indefinitely.
              </li>
            </ul>
            <p><strong>We never sell your personal information.</strong></p>

            <h2 id="sec-5">4. Do We Use Cookies and Other Tracking Technologies?</h2>
            <p><em>
              In Short: Yes, we use cookies and similar technologies to collect and store information.
            </em></p>
            <p>
              These technologies help maintain Service security, prevent crashes, fix bugs, save
              preferences, and provide basic site functions. Third parties may use cookies on our
              Services for analytics and advertising targeted to your interests. Details and refusal
              options are in our Cookie Notice.
            </p>
            <h3>Google Analytics</h3>
            <p>
              We share information with Google Analytics to track and analyze Services' use. We may
              use features including Demographics and Interests reporting.
            </p>
            <p><strong>Opt-Out Options:</strong></p>
            <ul>
              <li>Opt out of Google Analytics tracking</li>
              <li>Ads Settings and Mobile App Ad Settings on Google</li>
              <li>Network Advertising Opt-Out</li>
              <li>Mobile Advertising Opt-Out</li>
            </ul>
            <p>
              More on Google's privacy practices: Google Privacy &amp; Terms.
            </p>

            <h2 id="sec-6">5. How Long Do We Keep Your Information?</h2>
            <p><em>
              In Short: We keep your information only as long as necessary to fulfill purposes and comply with laws.
            </em></p>
            <p>
              Specifically, data is retained while you have an active account; after, it may be deleted
              or anonymized unless otherwise required (e.g., for tax or legal compliance).
              Data in backups may be securely isolated until deletion is possible.
            </p>

            <h2 id="sec-7">6. How Do We Keep Your Information Safe?</h2>
            <p><em>
              In Short: We aim to protect your data with organizational and technical security measures.
            </em></p>
            <p>
              While we strive for security, no online system is 100% secure. Transmission of
              information is at your own risk. Use the Services only in secure environments.
            </p>

            <h2 id="sec-8">7. Do We Collect Information From Minors?</h2>
            <p><em>In Short: No, we do not knowingly collect or market to children under 18.</em></p>
            <p>
              By using our Services you confirm you are at least 18 or the guardian of a minor using
              the Services. If we discover we have collected data from minors under 18, we will delete
              it promptly. Please report any such data concerns to{" "}
              <a href="mailto:info@otoddy.com" className="text-emerald-700">
                info@otoddy.com
              </a>.
            </p>

            <h2 id="sec-9">8. What Are Your Privacy Rights?</h2>
            <p>
              You may review, update, or terminate your account at any time based on applicable law.
            </p>
            <h3>Withdrawing Your Consent</h3>
            <p>
              If processing relies on your consent, you may withdraw it anytime by contacting us.
              Withdrawal doesn't affect prior lawful processing.
            </p>
            <h3>Opting Out of Marketing</h3>
            <p>
              You can unsubscribe from marketing messages by replying &quot;STOP&quot; or
              &quot;UNSUBSCRIBE&quot; to SMS, or by contacting us. Service-related communications
              may continue as necessary.
            </p>
            <h3>Account Information</h3>
            <p>
              You may update your user account or request account termination anytime. Upon request,
              we deactivate or delete your account, though some info may be retained for fraud
              prevention, investigations, or legal compliance.
            </p>
            <h3>Cookies</h3>
            <p>
              Most browsers accept cookies by default; you can remove or reject cookies but this may
              affect Service functionality.
            </p>
            <p>
              For privacy rights questions, contact us at{" "}
              <a href="mailto:info@otoddy.com" className="text-emerald-700">
                info@otoddy.com
              </a>.
            </p>

            <h2 id="sec-10">9. Controls for Do-Not-Track Features</h2>
            <p>
              Many browsers and apps offer Do-Not-Track (&ldquo;DNT&rdquo;) features, but no
              standard is finalized. Currently, we do not respond to DNT signals or similar
              mechanisms but will update this policy if required in future.
            </p>

            <h2 id="sec-11">10. Do We Make Updates to This Notice?</h2>
            <p>
              Yes, we update this Privacy Notice as necessary. Updated versions will have a new
              &ldquo;Revised&rdquo; date. If significant changes occur, we may notify you by
              prominent posting or direct communication. We encourage you to check this Notice
              regularly to stay informed.
            </p>

            <h2 id="sec-12">11. How Can You Contact Us About This Notice?</h2>
            <p>
              If you have questions or comments, you can email us at{" "}
              <a href="mailto:info@otoddy.com" className="text-emerald-700">
                info@otoddy.com
              </a>{" "}
              or write to:
            </p>
            <p>
              <strong>OTOddy Private Limited</strong>
              <br />
              Pandav Nagar
              <br />
              Delhi - 110092, India
            </p>

            <h2 id="sec-13">
              12. How Can You Review, Update, or Delete the Data We Collect From You?
            </h2>
            <p>
              Depending on local laws, you may request access, correction, or deletion of your
              personal data. You may also withdraw consent. Requests may be made by submitting a data
              subject access request or contacting us at{" "}
              <a href="mailto:info@otoddy.com" className="text-emerald-700">
                info@otoddy.com
              </a>.
            </p>
            <p>
              Your privacy matters deeply to us because trust is the foundation of every interaction
              with OTOddy — every ride, every connection, every moment.
            </p>
          </article>
        </div>
      </main>

      {/* Back-to-top */}
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

export default Privacy;

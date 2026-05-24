import React from "react";

const h2Style: React.CSSProperties = {
  color: "#ffffff",
  fontWeight: 700,
  fontSize: "1.05rem",
  marginTop: "2.5rem",
  marginBottom: "0.6rem",
  letterSpacing: "-0.01em",
};

const bodyStyle: React.CSSProperties = {
  color: "#C4B8F0",
  fontSize: "0.9rem",
  lineHeight: 1.85,
};

const listStyle: React.CSSProperties = {
  color: "#C4B8F0",
  fontSize: "0.9rem",
  lineHeight: 1.85,
  paddingLeft: "1.4rem",
  listStyleType: "disc",
};

const dividerStyle: React.CSSProperties = {
  borderColor: "rgba(107,111,212,0.2)",
  margin: "2rem 0 0",
};

export function TermsOfService() {
  return (
    <div style={{ background: "#0D0B1E", minHeight: "calc(100vh - 73px)" }} className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[760px]">

        {/* Header */}
        <div className="mb-10">
          <p
            className="font-mono-caps mb-4"
            style={{ color: "#6B6FD4", fontSize: "0.68rem", letterSpacing: "0.15em" }}
          >
            LEGAL
          </p>
          <h1
            className="text-white"
            style={{ fontSize: "2.4rem", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1 }}
          >
            Terms of Service
          </h1>
          <p className="mt-3" style={{ ...bodyStyle, color: "rgba(196,184,240,0.55)" }}>
            Last updated: May 2026
          </p>
        </div>

        {/* Intro */}
        <p style={bodyStyle}>
          These Terms of Service govern your use of fluario.tech and any services provided by Fluario.
          By accessing our website or submitting an interest form, you agree to these terms.
        </p>

        <hr style={dividerStyle} />

        {/* Section 1 */}
        <h2 style={h2Style}>1. About Fluario</h2>
        <p style={bodyStyle}>
          Fluario is an AI-powered DM automation service operated by its founders, based in Abu Dhabi, UAE.
          We are currently in early access and are not yet a formally registered business entity.
        </p>

        <hr style={dividerStyle} />

        {/* Section 2 */}
        <h2 style={h2Style}>2. The Service</h2>
        <p style={bodyStyle}>
          Fluario provides AI-powered direct message automation for social media platforms including
          Instagram, TikTok, Facebook, and Telegram.
        </p>
        <p style={bodyStyle} className="mt-3">
          Our current offering includes a free 21-day trial integration at no cost to the client. This
          trial is provided at our discretion and does not constitute a formal contract or guarantee of
          ongoing service.
        </p>

        <hr style={dividerStyle} />

        {/* Section 3 */}
        <h2 style={h2Style}>3. Eligibility</h2>
        <p style={bodyStyle}>By using this website or submitting a form, you confirm that:</p>
        <ul style={listStyle} className="mt-3 space-y-1">
          <li>You are at least 18 years old</li>
          <li>You are a business owner or authorised representative of a business</li>
          <li>You have the authority to grant access to social media accounts on behalf of your business</li>
        </ul>

        <hr style={dividerStyle} />

        {/* Section 4 */}
        <h2 style={h2Style}>4. No Guarantee of Service</h2>
        <p style={bodyStyle}>
          Submitting a registration form does not guarantee acceptance into the trial programme. We review
          all applications personally and reserve the right to decline any application without explanation.
        </p>

        <hr style={dividerStyle} />

        {/* Section 5 */}
        <h2 style={h2Style}>5. Access Requirements</h2>
        <p style={bodyStyle}>
          To participate in the trial, clients are required to grant Fluario Business Manager access to
          their Meta accounts. This access will be used solely for the purpose of setting up and managing
          the AI DM system. You may revoke this access at any time.
        </p>

        <hr style={dividerStyle} />

        {/* Section 6 */}
        <h2 style={h2Style}>6. Intellectual Property</h2>
        <p style={bodyStyle}>
          All content on fluario.tech including text, design, and code is the property of Fluario and its
          founders. You may not reproduce, copy, or distribute any content without written permission.
        </p>

        <hr style={dividerStyle} />

        {/* Section 7 */}
        <h2 style={h2Style}>7. Limitation of Liability</h2>
        <p style={bodyStyle}>
          Fluario is provided on an "as is" basis during early access. We make no guarantees regarding
          uptime, performance, or specific results. To the fullest extent permitted by law, Fluario and
          its founders shall not be liable for any indirect, incidental, or consequential damages arising
          from use of the service.
        </p>

        <hr style={dividerStyle} />

        {/* Section 8 */}
        <h2 style={h2Style}>8. Third-Party Platforms</h2>
        <p style={bodyStyle}>
          Our service integrates with third-party platforms including Instagram, TikTok, Facebook,
          Telegram, and others. We are not responsible for changes to these platforms' APIs, policies,
          or terms that may affect the service.
        </p>

        <hr style={dividerStyle} />

        {/* Section 9 */}
        <h2 style={h2Style}>9. Termination</h2>
        <p style={bodyStyle}>
          Either party may end participation in the trial at any time. Upon termination, we will remove
          our access to your accounts promptly upon request.
        </p>

        <hr style={dividerStyle} />

        {/* Section 10 */}
        <h2 style={h2Style}>10. Changes to These Terms</h2>
        <p style={bodyStyle}>
          We may update these terms as our business develops. Continued use of the website after changes
          are posted constitutes acceptance of the updated terms.
        </p>

        <hr style={dividerStyle} />

        {/* Section 11 */}
        <h2 style={h2Style}>11. Governing Law</h2>
        <p style={bodyStyle}>
          These terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved
          in good faith between the parties.
        </p>

        <hr style={dividerStyle} />

        {/* Section 12 */}
        <h2 style={h2Style}>12. Contact</h2>
        <p style={bodyStyle}>For any questions regarding these terms:</p>
        <p style={bodyStyle} className="mt-2">
          Email:{" "}
          <a href="mailto:fluario.tech@gmail.com" style={{ color: "#6B6FD4" }}>
            fluario.tech@gmail.com
          </a>
        </p>

        <div style={{ height: "4rem" }} />
      </div>
    </div>
  );
}

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

export function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-3" style={{ ...bodyStyle, color: "rgba(196,184,240,0.55)" }}>
            Last updated: May 2026
          </p>
        </div>

        {/* Intro */}
        <p style={bodyStyle}>
          Fluario ("we", "us", "our") is an AI-powered DM automation service operated by its founders.
          This Privacy Policy explains how we collect, use, and protect your information when you visit
          fluario.tech or submit an interest form.
        </p>

        <hr style={dividerStyle} />

        {/* Section 1 */}
        <h2 style={h2Style}>1. Who We Are</h2>
        <p style={bodyStyle}>
          Fluario is an early-stage business based in Abu Dhabi, UAE. We are not yet a registered legal
          entity. By using this website, you acknowledge that you are engaging with a pre-launch service.
        </p>

        <hr style={dividerStyle} />

        {/* Section 2 */}
        <h2 style={h2Style}>2. What Information We Collect</h2>
        <p style={bodyStyle}>When you submit the "Register Interest" form, we collect:</p>
        <ul style={listStyle} className="mt-3 space-y-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Business name</li>
          <li>Primary social media platform</li>
          <li>Monthly DM volume (approximate)</li>
          <li>Main business goal</li>
          <li>Phone number (optional)</li>
        </ul>
        <p style={bodyStyle} className="mt-4">
          We do not collect payment information. We do not use tracking cookies beyond basic analytics.
        </p>

        <hr style={dividerStyle} />

        {/* Section 3 */}
        <h2 style={h2Style}>3. How We Use Your Information</h2>
        <p style={bodyStyle}>We use the information you provide solely to:</p>
        <ul style={listStyle} className="mt-3 space-y-1">
          <li>Review your application for our free 21-day trial</li>
          <li>Contact you regarding your application</li>
          <li>Improve our service offering based on aggregated feedback</li>
        </ul>
        <p style={bodyStyle} className="mt-4">
          We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>

        <hr style={dividerStyle} />

        {/* Section 4 */}
        <h2 style={h2Style}>4. Where Your Data Is Stored</h2>
        <p style={bodyStyle}>
          Form submissions are stored in a Google Sheet accessible only to Fluario's founding team.
          Your data is not shared with any external parties.
        </p>

        <hr style={dividerStyle} />

        {/* Section 5 */}
        <h2 style={h2Style}>5. How Long We Keep Your Data</h2>
        <p style={bodyStyle}>
          We retain your information for as long as necessary to process your application and communicate
          with you. You may request deletion of your data at any time by contacting us.
        </p>

        <hr style={dividerStyle} />

        {/* Section 6 */}
        <h2 style={h2Style}>6. Your Rights</h2>
        <p style={bodyStyle}>Depending on your location, you may have the right to:</p>
        <ul style={listStyle} className="mt-3 space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p style={bodyStyle} className="mt-4">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:fluario.tech@gmail.com" style={{ color: "#6B6FD4" }}>
            fluario.tech@gmail.com
          </a>
        </p>

        <hr style={dividerStyle} />

        {/* Section 7 */}
        <h2 style={h2Style}>7. Third-Party Services</h2>
        <p style={bodyStyle}>We use the following third-party services:</p>
        <ul style={listStyle} className="mt-3 space-y-1">
          <li><span style={{ color: "#fff", fontWeight: 600 }}>Google Sheets</span> — for storing form submissions</li>
          <li><span style={{ color: "#fff", fontWeight: 600 }}>Vercel</span> — for website hosting</li>
          <li><span style={{ color: "#fff", fontWeight: 600 }}>Supabase</span> — for backend infrastructure</li>
          <li><span style={{ color: "#fff", fontWeight: 600 }}>Cal.com</span> — for booking calls (subject to Cal.com's own privacy policy)</li>
          <li><span style={{ color: "#fff", fontWeight: 600 }}>Groq</span> — for AI chat functionality</li>
        </ul>

        <hr style={dividerStyle} />

        {/* Section 8 */}
        <h2 style={h2Style}>8. Children's Privacy</h2>
        <p style={bodyStyle}>
          This service is intended for business owners and is not directed at anyone under the age of 18.
          We do not knowingly collect data from minors.
        </p>

        <hr style={dividerStyle} />

        {/* Section 9 */}
        <h2 style={h2Style}>9. Changes to This Policy</h2>
        <p style={bodyStyle}>
          We may update this policy as our business grows and formalises. Any changes will be posted on
          this page with an updated date.
        </p>

        <hr style={dividerStyle} />

        {/* Section 10 */}
        <h2 style={h2Style}>10. Contact</h2>
        <p style={bodyStyle}>For any privacy-related questions or requests:</p>
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

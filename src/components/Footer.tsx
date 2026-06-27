export function Footer() {
  const linkCls = "block text-white transition-colors hover:text-[#6B6FD4]";
  return (
    <footer style={{ background: "#1E1B4B" }}>
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img src="/fluario-logo.png" alt="Fluario" style={{ height: 56 }} />
            <p className="mt-4 text-sm" style={{ color: "#C4B8F0" }}>AI-powered DM automation for businesses on Instagram, TikTok, and Facebook. Work, made to flow.</p>
            <div className="mt-5 flex flex-wrap gap-4 font-mono-caps">
              <a href="https://www.instagram.com/fluario.tech/" className={linkCls} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" className={linkCls} target="_blank" rel="noopener noreferrer">TikTok</a>
              <a href="https://www.linkedin.com/in/afonsoblake" className={linkCls} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div>
            <div className="font-mono-caps mb-4">Navigation</div>
            <div className="space-y-2">
              <a href="#how-it-works" className={linkCls}>How It Works</a>
              <a href="#services" className={linkCls}>Services</a>
              <a href="#pricing" className={linkCls}>Pricing</a>
              <a href="#case-study" className={linkCls}>Case Study</a>
            </div>
          </div>
          <div>
            <div className="font-mono-caps mb-4">Contact</div>
            <div className="space-y-2">
              <a href="https://calendly.com/fittriallabs/30min" className={linkCls}>Book a Call</a>
              <a href="mailto:fluario.tech@gmail.com" className={linkCls} style={{ color: "#C4B8F0" }}>fluario.tech@gmail.com</a>
            </div>
          </div>
          <div>
            <div className="font-mono-caps mb-4">Follow the Flow</div>
            <p className="text-sm" style={{ color: "#C4B8F0" }}>Built in the UAE. Serving operators worldwide.</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(107,111,212,0.2)] pt-6 text-xs md:flex-row md:items-center md:justify-between font-mono-caps">
          <span>© 2026 Fluario. All Rights Reserved.</span>
          <span><a href="/privacy-policy" className={linkCls + " inline"}>Privacy Policy</a> | <a href="/terms-of-service" className={linkCls + " inline"}>Terms of Service</a></span>
        </div>
      </div>
    </footer>
  );
}

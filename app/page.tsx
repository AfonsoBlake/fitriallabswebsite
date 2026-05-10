export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <MotionGraphic />
      <StatsBar />
      <LiveDemo />
      <Founders />
      <CaseStudy />
      <HowItWorks />
      <Services />
      <Pricing />
      <BookCall />
      <Footer />
    </main>
  );
}

/* ─── NAV ─────────────────────────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-black tracking-tight uppercase text-white">
          FLUARIO
        </span>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Pricing", "Founders", "Case Study"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#book"
          className="bg-[#6366F1] text-white text-sm font-black uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition-colors"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-16 border-b border-white/10">
      {/* Video placeholder */}
      <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
        <div className="w-full h-full border border-white/5 flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 border-2 border-[#6366F1] flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <polygon points="8,4 28,16 8,28" fill="#6366F1" />
            </svg>
          </div>
          <span className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em]">
            VIDEO — PLACEHOLDER
          </span>
        </div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] mb-6">
          SEC-00 / HERO
        </p>
        <h1 className="text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-none tracking-tight text-white mb-8 max-w-5xl">
          YOUR DMS.
          <br />
          ON
          <span className="text-[#6366F1]"> AUTO</span>
          PILOT.
        </h1>
        <p className="text-lg md:text-2xl font-bold text-white/70 max-w-xl mb-10 leading-tight">
          AI-powered DM automation for Instagram, TikTok, and Facebook.
          Convert conversations into customers — automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#book"
            className="bg-[#6366F1] text-white font-black uppercase tracking-widest px-10 py-5 text-sm hover:bg-white hover:text-black transition-colors inline-block text-center"
          >
            Book a Free Call →
          </a>
          <a
            href="#demo"
            className="border border-white text-white font-black uppercase tracking-widest px-10 py-5 text-sm hover:bg-white hover:text-black transition-colors inline-block text-center"
          >
            See the Demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── MOTION GRAPHIC ──────────────────────────────────────────────────────── */

function MotionGraphic() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] mb-1">
          MG-00
        </p>
      </div>
      <div className="w-full h-[60vh] border-t border-b border-white/10 flex flex-col items-center justify-center gap-6 bg-black relative overflow-hidden">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="w-24 h-24 border-2 border-[#6366F1] flex items-center justify-center">
            <span className="text-[#6366F1] font-black text-3xl">▶</span>
          </div>
          <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.4em]">
            MOTION GRAPHIC — PLACEHOLDER
          </p>
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            60s brand reel goes here
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS BAR ───────────────────────────────────────────────────────────── */

function StatsBar() {
  const stats = [
    { value: "3M+", label: "DMs Automated" },
    { value: "47%", label: "Avg. Conversion Lift" },
    { value: "24/7", label: "Always On" },
  ];

  return (
    <section className="border-b border-white/10 bg-black" id="stats">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em]">
          SEC-01 / IMPACT
        </p>
      </div>
      <div className="border-t border-white/10 grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className={`px-8 py-14 flex flex-col gap-3 ${
              i < stats.length - 1 ? "md:border-r border-b md:border-b-0 border-white/10" : ""
            }`}
          >
            <span className="text-[clamp(3.5rem,7vw,6rem)] font-black text-white leading-none">
              {stat.value}
            </span>
            <span className="text-white/50 text-sm font-black uppercase tracking-[0.25em]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── LIVE AI DEMO ────────────────────────────────────────────────────────── */

function LiveDemo() {
  return (
    <section id="demo" className="border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] mb-6">
          SEC-02 / LIVE DEMO
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-none text-white mb-6">
              WATCH IT
              <br />
              <span className="text-[#6366F1]">WORK.</span>
            </h2>
            <p className="text-white/60 font-bold text-lg leading-relaxed max-w-md">
              Our AI handles the entire DM conversation — qualifying leads,
              answering questions, booking calls, and closing sales while
              you sleep.
            </p>
          </div>

          {/* Chatbot embed placeholder */}
          <div className="border border-white/20 bg-black relative overflow-hidden">
            <div className="border-b border-white/10 px-5 py-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-[#6366F1]" />
              <span className="text-xs font-black uppercase tracking-widest text-white/50">
                Fluario AI — Live Preview
              </span>
            </div>
            <div className="p-5 flex flex-col gap-4 min-h-80">
              <ChatBubble role="ai" text="Hey! 👋 Interested in learning more about our fitness program?" />
              <ChatBubble role="user" text="Yes, how much does it cost?" />
              <ChatBubble role="ai" text="Great question! We have 3 tiers starting at $97/mo. Want me to send you the full breakdown?" />
              <ChatBubble role="user" text="Sure!" />
              <ChatBubble role="ai" text="Perfect — dropping the link now. Also, would you like to book a free consult with our team? 📅" />
              <div className="mt-auto text-center py-6">
                <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em]">
                  CHATBOT EMBED — PLACEHOLDER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ role, text }: { role: "ai" | "user"; text: string }) {
  const isAI = role === "ai";
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[75%] px-4 py-3 text-sm font-bold leading-snug ${
          isAI
            ? "bg-white/10 text-white"
            : "bg-[#6366F1] text-white"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

/* ─── FOUNDERS ────────────────────────────────────────────────────────────── */

function Founders() {
  const founders = [
    {
      name: "Afonso Blake",
      role: "Co-Founder & CEO",
      bio: "Growth strategist and automation architect. Built systems that scaled DM pipelines to 7 figures.",
    },
    {
      name: "Kareem",
      role: "Co-Founder & CTO",
      bio: "AI engineer with a background in conversational systems. Obsessed with the science of selling.",
    },
  ];

  return (
    <section id="founders" className="border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] mb-6">
          SEC-03 / FOUNDERS
        </p>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-none text-white mb-16">
          BUILT BY
          <br />
          <span className="text-[#6366F1]">OPERATORS.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-black p-10 flex flex-col gap-8">
              {/* Photo placeholder */}
              <div className="w-full aspect-square max-w-64 border border-white/20 flex flex-col items-center justify-center gap-3 bg-white/5">
                <div className="w-16 h-16 border border-[#6366F1] flex items-center justify-center">
                  <span className="text-[#6366F1] text-2xl font-black">
                    {founder.name[0]}
                  </span>
                </div>
                <span className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em]">
                  PHOTO — PLACEHOLDER
                </span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-[#6366F1] text-xs font-black uppercase tracking-widest mb-4">
                  {founder.role}
                </p>
                <p className="text-white/60 font-bold leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CASE STUDY ──────────────────────────────────────────────────────────── */

function CaseStudy() {
  return (
    <section id="case-study" className="border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] mb-6">
          SEC-04 / CASE STUDY
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-4">
              Client — Cobra Fitness
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-none text-white mb-6">
              $0 TO
              <br />
              <span className="text-[#6366F1]">$42K/MO</span>
              <br />
              IN 90 DAYS.
            </h2>
            <p className="text-white/60 font-bold text-lg leading-relaxed mb-8 max-w-md">
              Cobra Fitness was manually answering DMs 6 hours a day.
              We deployed Fluario AI — within 90 days, they hit $42K/month
              in revenue from Instagram alone, with zero additional headcount.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                { v: "312%", l: "Revenue Growth" },
                { v: "6hrs", l: "Saved Daily" },
                { v: "89%", l: "Lead Response Rate" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl md:text-3xl font-black text-[#6366F1]">{s.v}</p>
                  <p className="text-white/40 text-xs font-black uppercase tracking-wider mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="border border-white/20 aspect-[4/3] flex flex-col items-center justify-center gap-4 bg-white/5">
            <div className="text-[#6366F1] text-4xl font-black">🐍</div>
            <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em]">
              COBRA FITNESS — IMAGE PLACEHOLDER
            </p>
            <p className="text-white/30 text-xs uppercase tracking-widest">
              Client photo / results screenshot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ────────────────────────────────────────────────────────── */

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "WE AUDIT YOUR DMS",
      body: "We analyze your current conversation flow, identify drop-off points, and map the exact journey from DM to dollar.",
    },
    {
      num: "02",
      title: "WE BUILD YOUR AI",
      body: "Our team trains a custom AI on your brand voice, offers, and objections. It sounds like you — but faster, smarter, and always available.",
    },
    {
      num: "03",
      title: "WE FLIP THE SWITCH",
      body: "Go live in 7 days. Watch leads qualify themselves, book calls, and buy — while you focus on what actually moves the needle.",
    },
  ];

  return (
    <section className="border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] mb-6">
          SEC-05 / HOW IT WORKS
        </p>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-none text-white mb-16">
          SIMPLE.
          <br />
          <span className="text-[#6366F1]">RUTHLESS.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {steps.map((step) => (
            <div key={step.num} className="bg-black p-10 flex flex-col gap-6">
              <span className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em]">
                STEP {step.num}
              </span>
              <h3 className="text-2xl font-black uppercase text-white leading-tight">
                {step.title}
              </h3>
              <p className="text-white/50 font-bold leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ────────────────────────────────────────────────────────────── */

function Services() {
  const services = [
    {
      title: "DM AUTOMATION",
      body: "24/7 AI that responds, qualifies, and converts every inbound DM on Instagram, TikTok, and Facebook.",
    },
    {
      title: "LEAD QUALIFICATION",
      body: "Stop wasting time on dead leads. Our AI filters, scores, and routes only the hottest prospects to your team.",
    },
    {
      title: "APPOINTMENT SETTING",
      body: "From DM to calendar in minutes. The AI books calls directly into your calendar with zero human effort.",
    },
    {
      title: "SALES SCRIPTING",
      body: "Custom conversation flows built around your offer, objections, and closing style — trained to convert.",
    },
    {
      title: "ANALYTICS & REPORTING",
      body: "Real-time dashboards showing response rates, conversion funnels, and revenue attributed to AI activity.",
    },
    {
      title: "ONGOING OPTIMIZATION",
      body: "We continuously refine your AI's performance based on conversation data — getting sharper every week.",
    },
  ];

  return (
    <section id="services" className="border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] mb-6">
          SEC-06 / SERVICES
        </p>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-none text-white mb-16">
          WHAT WE
          <br />
          <span className="text-[#6366F1]">DELIVER.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-black p-8 flex flex-col gap-4 hover:bg-[#6366F1]/5 transition-colors"
            >
              <div className="w-8 h-1 bg-[#6366F1]" />
              <h3 className="text-lg font-black uppercase text-white leading-tight">
                {s.title}
              </h3>
              <p className="text-white/50 font-bold leading-relaxed text-sm">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─────────────────────────────────────────────────────────────── */

function Pricing() {
  const tiers = [
    {
      name: "STARTER",
      price: "$997",
      period: "/mo",
      tag: "For creators & coaches",
      features: [
        "1 platform (IG, TT, or FB)",
        "Up to 500 DMs/month",
        "Basic lead qualification",
        "Appointment booking",
        "Monthly report",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "GROWTH",
      price: "$2,497",
      period: "/mo",
      tag: "Most popular",
      features: [
        "3 platforms included",
        "Unlimited DMs",
        "Advanced qualification",
        "Custom sales scripts",
        "Weekly optimization",
        "Dedicated account manager",
      ],
      cta: "Book a Call",
      highlight: true,
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: "",
      tag: "For scaling businesses",
      features: [
        "All platforms + integrations",
        "White-glove onboarding",
        "Custom AI training",
        "Real-time analytics",
        "Priority support",
        "SLA guarantee",
      ],
      cta: "Contact Us",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] mb-6">
          SEC-07 / PRICING
        </p>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-none text-white mb-16">
          STRAIGHT.
          <br />
          <span className="text-[#6366F1]">NO FLUFF.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col p-10 gap-8 ${
                tier.highlight ? "bg-[#6366F1]" : "bg-black"
              }`}
            >
              <div>
                <p
                  className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${
                    tier.highlight ? "text-white/70" : "text-[#6366F1]"
                  }`}
                >
                  {tier.tag}
                </p>
                <h3 className="text-xl font-black uppercase mb-1 text-white">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-none text-white">
                    {tier.price}
                  </span>
                  <span
                    className={`font-black text-lg ${
                      tier.highlight ? "text-white/70" : "text-white/40"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 text-xs ${
                        tier.highlight ? "text-white" : "text-[#6366F1]"
                      }`}
                    >
                      ▪
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        tier.highlight ? "text-white" : "text-white/70"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`block text-center font-black uppercase tracking-widest text-sm px-6 py-4 transition-colors ${
                  tier.highlight
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-[#6366F1] text-white hover:bg-white hover:text-black"
                }`}
              >
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BOOK A CALL ─────────────────────────────────────────────────────────── */

function BookCall() {
  return (
    <section id="book" className="border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] mb-6">
          SEC-08 / BOOK A CALL
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-none text-white mb-6">
              LET&apos;S
              <br />
              <span className="text-[#6366F1]">TALK.</span>
            </h2>
            <p className="text-white/60 font-bold text-lg leading-relaxed max-w-md mb-8">
              30 minutes. No pitch deck. We audit your DM setup live
              and tell you exactly what&apos;s costing you money.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Free 30-minute audit call",
                "No obligation, no pressure",
                "Live review of your current setup",
                "Custom roadmap delivered same day",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#6366F1] font-black">▪</span>
                  <span className="text-white/70 font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Calendar embed placeholder */}
          <div className="border border-white/20 min-h-96 flex flex-col items-center justify-center gap-4 bg-white/5 p-10">
            <div className="w-16 h-16 border border-[#6366F1] flex items-center justify-center text-3xl">
              📅
            </div>
            <p className="text-[#6366F1] text-xs font-black uppercase tracking-[0.3em] text-center">
              CALENDAR EMBED — PLACEHOLDER
            </p>
            <p className="text-white/30 text-xs uppercase tracking-widest text-center">
              Calendly / Cal.com embed goes here
            </p>
            <a
              href="mailto:fittriallabs@gmail.com"
              className="mt-4 bg-[#6366F1] text-white font-black uppercase tracking-widest px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors"
            >
              Book via Email →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ──────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <p className="text-3xl font-black uppercase text-white tracking-tight mb-2">
              FLUARIO
            </p>
            <p className="text-white/40 font-bold text-sm">Work, made to flow.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {[
              { heading: "Product", links: ["Services", "Pricing", "Demo"] },
              { heading: "Company", links: ["Founders", "Case Study", "Contact"] },
              {
                heading: "Platforms",
                links: ["Instagram", "TikTok", "Facebook"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-[#6366F1] font-black uppercase tracking-widest text-xs mb-4">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-white/40 font-bold hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            © 2025 Fluario. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "TikTok", "Facebook"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-white/30 text-xs font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

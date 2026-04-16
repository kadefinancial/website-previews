// Layout: Custom | Industry: Web Design | City: N/A
import { useState, useEffect, useRef } from "react";

const FONTS = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap";

// ─── Icons ───
const BoltIcon = ({ s = 24 }) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M13 2L4.5 12.5H11.5L10.5 22L19.5 11.5H12.5L13 2Z" fill="url(#blt)" /><defs><linearGradient id="blt" x1="4.5" y1="2" x2="19.5" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA" /><stop offset=".5" stopColor="#EC4899" /><stop offset="1" stopColor="#3B82F6" /></linearGradient></defs></svg>);
const Chk = ({ c = "#A78BFA" }) => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>);
const ChevronIcon = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>);

// ─── Fade ───
const A = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.05 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (<div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(16px)", transition: `opacity 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>{children}</div>);
};

// ─── Lead Form ───
const LeadForm = ({ compact = false }) => {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  const input = (placeholder, key) => (
    <input
      style={{
        fontFamily: "var(--f)", fontSize: "0.85rem", fontWeight: 400, color: "#F8FAFC",
        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "12px", padding: compact ? "14px 18px" : "16px 20px", width: "100%",
        outline: "none", transition: "border-color 0.35s ease, background 0.35s ease", boxSizing: "border-box",
      }}
      placeholder={placeholder}
      value={form[key]}
      onChange={e => setForm({ ...form, [key]: e.target.value })}
      onFocus={e => { e.target.style.borderColor = "rgba(167,139,250,0.35)"; e.target.style.background = "rgba(255,255,255,0.07)"; }}
      onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.10)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
    />
  );

  if (sent) return (
    <div style={{ padding: "32px 0", textAlign: compact ? "left" : "center" }}>
      <div style={{ fontFamily: "var(--f)", fontSize: "1.3rem", fontWeight: 800, color: "#F8FAFC", marginBottom: "10px", letterSpacing: "-0.02em" }}>We're on it.</div>
      <div style={{ fontFamily: "var(--f)", fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>Check your inbox within 48 hours for a preview link to your custom site.</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: compact ? "100%" : "380px" }}>
      {input("Your name", "name")}
      {input("Business name", "business")}
      {input("Phone number", "phone")}
      {input("Email", "email")}
      <button onClick={() => { if (form.name && form.business && form.phone && form.email) setSent(true); }} style={{
        fontFamily: "var(--f)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "-0.01em",
        color: "#F8FAFC", background: "linear-gradient(135deg, #A78BFA, #EC4899, #3B82F6)",
        backgroundSize: "200% 200%", padding: "16px 32px", borderRadius: "12px",
        border: "none", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease",
        width: "100%", marginTop: "4px",
      }}
      onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(167,139,250,0.15)"; }}
      onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
      >Get My Free Preview</button>
      <div style={{ fontFamily: "var(--f)", fontSize: "0.72rem", fontWeight: 400, color: "rgba(255,255,255,0.65)", textAlign: "center", marginTop: "2px" }}>No payment required. Preview sent to your email within 48 hours.</div>
    </div>
  );
};

// ─── FAQ ───
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.03)", cursor: "pointer", userSelect: "none" }} onClick={() => setOpen(!open)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 0" }}>
        <span style={{ fontFamily: "var(--f)", fontSize: "0.92rem", fontWeight: 600, color: "#F8FAFC", letterSpacing: "-0.01em", paddingRight: "20px" }}>{q}</span>
        <span style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)", color: "rgba(255,255,255,0.65)", flexShrink: 0 }}><ChevronIcon /></span>
      </div>
      <div style={{ maxHeight: open ? "200px" : "0", overflow: "hidden", transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
        <div style={{ fontFamily: "var(--f)", fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, paddingBottom: "28px", maxWidth: "480px" }}>{a}</div>
      </div>
    </div>
  );
};

export default function SiteVolt() {
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const link = document.createElement("link");
    link.href = FONTS; link.rel = "stylesheet"; document.head.appendChild(link);
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  const grad = { background: "linear-gradient(135deg, #A78BFA 0%, #EC4899 50%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" };
  const w = { maxWidth: "1040px", margin: "0 auto", padding: "0 40px" };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: "#050508", color: "#F8FAFC", minHeight: "100vh", overflowX: "hidden", fontFamily: "var(--f)" }}>
      <style>{`
        :root { --f: 'Plus Jakarta Sans', -apple-system, sans-serif; }
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(167,139,250,0.2); color: #F8FAFC; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        input::placeholder { color: rgba(255,255,255,0.65); }
        @media(max-width:768px) { .hm{display:none!important} .hero-grid{grid-template-columns:1fr!important;gap:60px!important} .gr2{grid-template-columns:1fr!important} .gr3{grid-template-columns:1fr!important} .cta-grid{grid-template-columns:1fr!important;gap:60px!important} }
      `}</style>

      {/* ── Ambient layers ── */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.006) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.006) 1px, transparent 1px)", backgroundSize: "90px 90px", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, background: `radial-gradient(450px at ${mouse.x}px ${mouse.y}px, rgba(167,139,250,0.015), transparent 50%)` }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "16px 0" : "32px 0",
        background: scrolled ? "rgba(5,5,8,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(40px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.03)" : "none",
        transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div style={{ ...w, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <BoltIcon s={20} />
            <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Site<span style={grad}>Volt</span></span>
          </div>
          <button onClick={() => scrollTo("start")} style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.01em",
            color: "#F8FAFC", background: "linear-gradient(135deg, #A78BFA, #EC4899, #3B82F6)",
            padding: "10px 24px", borderRadius: "8px", border: "none", cursor: "pointer",
            transition: "transform 0.25s ease, box-shadow 0.25s ease", fontFamily: "var(--f)",
          }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 4px 20px rgba(167,139,250,0.2)"; }}
          onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
          >Get Started</button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: "-400px", right: "-300px", width: "1000px", height: "1000px", borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.04), rgba(59,130,246,0.02), transparent 50%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-200px", left: "-250px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.03), transparent 50%)", pointerEvents: "none" }} />

        <header style={{ ...w, padding: "220px 40px 0", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "100px", alignItems: "start" }} className="hero-grid">
            <div>
              <A>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#EC4899", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "36px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#EC4899", animation: "pulse 2.5s ease infinite" }} />
                  Prices are going up due to demand. Lock in now.
                </div>
              </A>
              <A delay={0.12}>
                <h1 style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.8rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: "32px" }}>
                  They're searching{" "}
                  <br className="hm" />
                  for you right now.
                  <br />
                  <span style={grad}>They're calling someone else.</span>
                </h1>
              </A>
              <A delay={0.24}>
                <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: "420px" }}>
                  We build custom websites for service businesses that turn searchers into callers. No setup fee. No effort. Already done.
                </p>
              </A>
            </div>

            <A delay={0.3}>
              <div style={{ background: "rgba(255,255,255,0.025)", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "6px" }}>See your site before you pay.</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: "28px", lineHeight: 1.6 }}>Quick form. We'll handle the rest.</div>
                <LeadForm compact />
              </div>
            </A>
          </div>
        </header>
      </div>

      {/* TRUST STRIP */}
      <div style={{ ...w, padding: "140px 40px 0", position: "relative", zIndex: 1 }}>
        <A>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="gr2">
            {[
              { v: "$0", l: "Setup fee" },
              { v: "48hr", l: "Build time" },
              { v: "Zero", l: "Effort from you" },
              { v: "No", l: "Contracts" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "28px 0" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, ...grad, lineHeight: 1.3, letterSpacing: "-0.02em" }}>{s.v}</div>
                <div style={{ fontSize: "0.72rem", fontWeight: 400, color: "rgba(255,255,255,0.65)", marginTop: "8px", letterSpacing: "0.05em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </A>
      </div>

      {/* PROBLEM */}
      <section style={{ ...w, padding: "240px 40px 0", position: "relative", zIndex: 1 }}>
        <A>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#EC4899", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: "28px" }}>The problem</div>
        </A>
        <A delay={0.08}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "36px", maxWidth: "680px" }}>
            Customers are choosing your competitors. <span style={grad}>Not because they're better.</span>
          </h2>
        </A>
        <A delay={0.16}>
          <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, maxWidth: "460px", marginBottom: "80px" }}>
            Because when a customer had to make a choice in 10 seconds, someone else made it easier to trust them and take action.
          </p>
        </A>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="gr3">
          {[
            { n: "87%", t: "of customers search online before calling a service business" },
            { n: "10s", t: "is all it takes to decide who gets the call" },
            { n: "73%", t: "judge credibility by online presence before anything else" },
          ].map((stat, i) => (
            <A key={i} delay={0.08 * (i + 1)}>
              <div style={{ padding: "44px 36px", background: "rgba(255,255,255,0.012)", borderRadius: "16px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, ...grad, lineHeight: 1, marginBottom: "16px", letterSpacing: "-0.02em" }}>{stat.n}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>{stat.t}</div>
              </div>
            </A>
          ))}
        </div>
        <A delay={0.35}>
          <div style={{ marginTop: "60px", textAlign: "center" }}>
            <button onClick={() => scrollTo("start")} style={{
              fontSize: "0.85rem", fontWeight: 700, fontFamily: "var(--f)",
              color: "#F8FAFC", background: "linear-gradient(135deg, #A78BFA, #EC4899, #3B82F6)",
              backgroundSize: "200% 200%", padding: "16px 40px", borderRadius: "12px",
              border: "none", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(167,139,250,0.15)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
            >Fix This Now</button>
          </div>
        </A>
      </section>

      {/* SOLUTION */}
      <section style={{ ...w, padding: "240px 40px 0", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="gr2">
          <div>
            <A>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#A78BFA", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: "28px" }}>The solution</div>
            </A>
            <A delay={0.08}>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                We build the thing that makes them call you instead.
              </h2>
            </A>
          </div>
          <div style={{ paddingTop: "60px" }}>
            {[
              { t: "Engineered to make them call.", d: "Every headline, every section, every button exists for one reason — to turn a stranger who found you on Google into a customer who picks up the phone. This isn't a brochure. It's a conversion tool." },
              { t: "You don't send us anything.", d: "No photos. No content. No forms. We pull everything from what's already public." },
              { t: "You just answer the phone.", d: "Customers find you, see why you're the right call, and pick up the phone. That's the whole thing." },
            ].map((item, i) => (
              <A key={i} delay={0.1 * (i + 1)}>
                <div style={{ padding: "32px 0", borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.025)" }}>
                  <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#F8FAFC", marginBottom: "8px", letterSpacing: "-0.01em" }}>{item.t}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: "380px" }}>{item.d}</div>
                </div>
              </A>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GET */}
      <section style={{ ...w, padding: "240px 40px 0", position: "relative", zIndex: 1 }}>
        <A>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: "28px" }}>What you'll get</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "36px", maxWidth: "680px" }}>
            Here's what your customers see when they find you.
          </h2>
          <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, maxWidth: "480px", marginBottom: "80px" }}>
            When someone Googles what you do, they land on your site and ask one question in 10 seconds: should I call this business or keep looking? Every section of your site answers that question before they finish asking it.
          </p>
        </A>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }} className="gr2">
          {[
            { n: "01", t: "They see why you're the one to call.", d: "Your reviews, your experience, your track record — front and center. Not buried on page three. The first thing they see is proof you're the real deal." },
            { n: "02", t: "They see exactly what you do and where.", d: "No guessing. No clicking around. Your services, your service area, laid out so clearly that a customer knows in 5 seconds whether you can help them." },
            { n: "03", t: "They see one thing to do next: call you.", d: "Your phone number isn't a tiny link at the bottom of a page. It's impossible to miss. One tap and they're on the phone with you." },
            { n: "04", t: "They never see a reason to leave.", d: "No clutter. No confusion. No dead ends. Every section moves them closer to picking up the phone instead of hitting the back button." },
          ].map((item, i) => (
            <A key={i} delay={0.08 * (i + 1)}>
              <div style={{ padding: "44px 36px", background: "rgba(255,255,255,0.012)", borderRadius: "16px" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, ...grad, lineHeight: 1, marginBottom: "20px", letterSpacing: "-0.02em" }}>{item.n}</div>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#F8FAFC", marginBottom: "10px", letterSpacing: "-0.01em" }}>{item.t}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>{item.d}</div>
              </div>
            </A>
          ))}
        </div>

        <A delay={0.4}>
          <div style={{ marginTop: "60px", textAlign: "center" }}>
            <button onClick={() => scrollTo("start")} style={{
              fontSize: "0.85rem", fontWeight: 700, fontFamily: "var(--f)",
              color: "#F8FAFC", background: "linear-gradient(135deg, #A78BFA, #EC4899, #3B82F6)",
              backgroundSize: "200% 200%", padding: "16px 40px", borderRadius: "12px",
              border: "none", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(167,139,250,0.15)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
            >See What Yours Looks Like</button>
            <div style={{ fontSize: "0.72rem", fontWeight: 400, color: "rgba(255,255,255,0.65)", marginTop: "14px" }}>Free preview. No payment required.</div>
          </div>
        </A>
      </section>

      {/* PROCESS */}
      <section style={{ ...w, padding: "240px 40px 0", position: "relative", zIndex: 1 }}>
        <A>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#EC4899", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: "28px" }}>How it works</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: "500px", margin: "0 auto" }}>
              You do nothing.<br />We handle everything.
            </h2>
          </div>
        </A>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }} className="gr2">
          {[
            { n: "01", t: "We research", d: "Reviews, services, area, competition. All from public info." },
            { n: "02", t: "We build", d: "Custom design around your business. Not a template." },
            { n: "03", t: "You preview", d: "We send a link. Love it or leave it. Your call." },
            { n: "04", t: "Phone rings", d: "That's it. That's the whole thing." },
          ].map((step, i) => (
            <A key={i} delay={0.1 * (i + 1)}>
              <div style={{ padding: "40px 28px", background: "rgba(255,255,255,0.012)", borderRadius: "16px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, ...grad, lineHeight: 1, marginBottom: "20px", letterSpacing: "-0.02em" }}>{step.n}</div>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#F8FAFC", marginBottom: "8px", letterSpacing: "-0.01em" }}>{step.t}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>{step.d}</div>
              </div>
            </A>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ ...w, padding: "240px 40px 0", position: "relative", zIndex: 1 }}>
        <A>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#A78BFA", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: "28px" }}>Results</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "80px" }}>
            What happens when the phone starts ringing.
          </h2>
        </A>
        {[
          { q: "We went live on a Monday. By Wednesday, I had two calls from customers who found us online. That's never happened before.", who: "Sam B. — Real estate, Iowa" },
          { q: "I was paying $400 a month for a site that looked like a template. This costs half that and I've gotten more calls in the first month than I did all last year.", who: "Seth B. — Construction, Arkansas" },
        ].map((t, i) => (
          <A key={i} delay={0.15 * (i + 1)}>
            <div style={{ padding: "52px 0", borderTop: "1px solid rgba(255,255,255,0.025)" }}>
              <div style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, fontStyle: "italic", maxWidth: "620px", marginBottom: "24px", letterSpacing: "-0.01em" }}>"{t.q}"</div>
              <div style={{ fontSize: "0.72rem", fontWeight: 500, color: "rgba(255,255,255,0.65)", letterSpacing: "0.04em" }}>{t.who}</div>
            </div>
          </A>
        ))}
        <A delay={0.35}>
          <div style={{ marginTop: "40px" }}>
            <button onClick={() => scrollTo("start")} style={{
              fontSize: "0.85rem", fontWeight: 700, fontFamily: "var(--f)",
              color: "#F8FAFC", background: "linear-gradient(135deg, #A78BFA, #EC4899, #3B82F6)",
              backgroundSize: "200% 200%", padding: "16px 40px", borderRadius: "12px",
              border: "none", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(167,139,250,0.15)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
            >Get My Free Preview</button>
          </div>
        </A>
      </section>

      {/* PRICING */}
      <section style={{ ...w, padding: "240px 40px 0", position: "relative", zIndex: 1 }}>
        <A><div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#EC4899", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: "28px" }}>Pricing</div></A>
        <A delay={0.08}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "80px" }}>
            What this costs everywhere else.
          </h2>
        </A>

        <A delay={0.12}>
          <div style={{ maxWidth: "520px", marginBottom: "120px" }}>
            {[
              ["Custom website design", "$2,500"],
              ["Mobile optimization", "$500"],
              ["Contact forms & click-to-call", "$300"],
              ["Review integration", "$250"],
              ["Hosting & security", "$300/yr"],
              ["Ongoing maintenance", "$1,800/yr"],
              ["Professional copywriting", "$500"],
            ].map(([item, val], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,0.02)" }}>
                <span style={{ fontSize: "0.96rem", fontWeight: 300, color: "rgba(255,255,255,0.65)" }}>{item}</span>
                <span style={{ fontSize: "0.96rem", fontWeight: 700, color: "rgba(255,255,255,0.65)", textDecoration: "line-through" }}>{val}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "28px 0 0" }}>
              <span style={{ fontSize: "1.04rem", fontWeight: 700, color: "#F8FAFC" }}>Typical total</span>
              <span style={{ fontSize: "1.24rem", fontWeight: 800, color: "#F8FAFC", textDecoration: "line-through" }}>$4,500+</span>
            </div>
          </div>
        </A>

        <A delay={0.16}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "20px" }}>
            <span style={grad}>What you actually pay.</span>
          </h2>
          <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: "400px", marginBottom: "16px" }}>
            No setup fee. No build fee. First payment starts the day your site goes live.
          </p>
          <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "#EC4899", lineHeight: 1.85, maxWidth: "400px", marginBottom: "80px" }}>
            Prices are going up as demand grows — lock in now and your rate never changes.
          </p>
        </A>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="gr3">
          {[
            { tier: "Foundation", price: "97", tag: "Start getting calls", col: "#A78BFA", pop: false,
              feats: ["Custom one-page design", "Mobile optimized", "Click-to-call & quote form", "Reviews featured", "Hosting & security", "Ongoing maintenance"] },
            { tier: "Full Picture", price: "197", tag: "Complete presence that converts", col: "#EC4899", pop: true,
              feats: ["Everything in Foundation", "5 custom pages", "About, Services, Reviews, Contact", "Your domain connected", "Real photos integrated", "Priority support"] },
            { tier: "Growth Plan", price: "397", tag: "Dominate your market", col: "#3B82F6", pop: false,
              feats: ["Everything in Full Picture", "22–30 optimized pages", "SEO service & city pages", "Google Business optimization", "Schema & citations", "Monthly reports"] },
          ].map((t, i) => (
            <A key={i} delay={0.08 * (i + 1)}>
              <div style={{
                background: t.pop ? "rgba(167,139,250,0.025)" : "rgba(255,255,255,0.012)",
                borderRadius: "16px", padding: "44px 32px", position: "relative",
                transition: "background 0.4s ease",
              }}
              onMouseEnter={e => { if (!t.pop) e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
              onMouseLeave={e => { if (!t.pop) e.currentTarget.style.background = "rgba(255,255,255,0.012)"; }}
              >
                {t.pop && <div style={{ position: "absolute", top: "18px", right: "18px", fontSize: "0.72rem", fontWeight: 700, color: "#050508", background: "linear-gradient(135deg, #A78BFA, #EC4899)", padding: "5px 14px", borderRadius: "20px", letterSpacing: "0.02em" }}>Most Popular</div>}
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: t.col, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "20px" }}>{t.tier}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "2px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: "-0.03em" }}>${t.price}</span>
                  <span style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.65)" }}>/mo</span>
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: "36px" }}>{t.tag}</div>
                {t.feats.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <Chk c={t.col} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "rgba(255,255,255,0.65)" }}>{f}</span>
                  </div>
                ))}
              </div>
            </A>
          ))}
        </div>
        <A delay={0.35}>
          <div style={{ marginTop: "60px", textAlign: "center" }}>
            <button onClick={() => scrollTo("start")} style={{
              fontSize: "0.92rem", fontWeight: 700, fontFamily: "var(--f)",
              color: "#F8FAFC", background: "linear-gradient(135deg, #A78BFA, #EC4899, #3B82F6)",
              backgroundSize: "200% 200%", padding: "18px 48px", borderRadius: "12px",
              border: "none", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(167,139,250,0.2)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
            >Lock In My Rate</button>
            <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "#EC4899", marginTop: "14px" }}>Prices are going up. Current clients keep their rate forever.</div>
          </div>
        </A>
      </section>

      {/* FAQ */}
      <section style={{ ...w, padding: "240px 40px 0", position: "relative", zIndex: 1 }}>
        <A>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "60px" }}>Questions.</h2>
        </A>
        <div style={{ maxWidth: "560px" }}>
          <FaqItem q="How much does it cost?" a="Plans start at $97/month. No setup fee. No build fee. First payment starts the day your site goes live. Cancel anytime." />
          <FaqItem q="What if I already have a website?" a="We build yours separately. Compare them side by side. If ours is better, we switch you over. If not, no hard feelings." />
          <FaqItem q="How long does it take?" a="Most sites are built within 48 hours. You'll receive a preview link before anything goes live." />
          <FaqItem q="What if I don't like it?" a="You don't pay. We show you the site first. If you love it, your first month starts. If not, nothing happens." />
          <FaqItem q="Do I have to send you anything?" a="No. We pull reviews, services, and info from what's already public. You don't lift a finger." />
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ ...w, padding: "240px 40px 200px", position: "relative", zIndex: 1 }} id="start">
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.03), rgba(236,72,153,0.02), transparent 55%)", pointerEvents: "none" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "100px", alignItems: "start" }} className="cta-grid">
          <A>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#A78BFA", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: "28px" }}>Get started</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "28px" }}>
                Your competitors already have a site that works. <span style={grad}>Do you?</span>
              </h2>
              <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: "24px", maxWidth: "420px" }}>
                Fill in your info. We'll research your business, build your site, and send you a preview within 48 hours.
              </p>
              <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "#EC4899" }}>
                Lock in today's pricing before it goes up.
              </p>
            </div>
          </A>
          <A delay={0.2}>
            <div style={{ background: "rgba(255,255,255,0.025)", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(255,255,255,0.07)" }}>
              <LeadForm compact />
            </div>
          </A>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ ...w, padding: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.02)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <BoltIcon s={15} />
          <span style={{ fontSize: "0.92rem", fontWeight: 800, letterSpacing: "-0.01em" }}>Site<span style={grad}>Volt</span></span>
        </div>
        <div style={{ fontSize: "0.62rem", fontWeight: 400, color: "rgba(255,255,255,0.26)" }}>© 2026 SiteVolt</div>
      </footer>
    </div>
  );
}

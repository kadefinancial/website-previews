// Layout: A | Industry: Plumber | City: Farmington
import { useState, useEffect } from "react";

const PHONE = "(479) 267-3734";
const TEL = "tel:+14792673734";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  home: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  flame: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 00-16 0c0 4.5 4 8 8 12z"/><path d="M12 22c-1.5-2-3-3.5-3-6a3 3 0 016 0c0 2.5-1.5 4-3 6z"/></svg>,
  droplet: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
  pipe: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h4v12H4z"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M16 6h4v12h-4z"/><path d="M4 6h4"/><path d="M16 6h4"/><path d="M4 18h4"/><path d="M16 18h4"/></svg>,
  fixture: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M8 8h8"/><path d="M10 8v3a2 2 0 01-2 2H7"/><path d="M14 8v3a2 2 0 002 2h1"/><path d="M12 14v2"/><path d="M8 20h8"/><path d="M12 16v4"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C8934F" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  award: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  clock: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  chevLeft: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>,
  chevRight: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
};

const Stars = () => <span style={{ display: "inline-flex", gap: 2 }}>{[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Plumbing Repair & Installation", desc: "From leaky faucets to full system installations, we handle every plumbing job with the care and precision that comes from over 40 years of experience. Honest work, fair pricing.", icon: Icons.wrench },
  { name: "Residential Plumbing", desc: "Complete plumbing services for your home. We keep the water flowing and the drains clear, treating your house like our own. Farmington families have trusted us since 1982.", icon: Icons.home },
  { name: "Heating Service", desc: "Keep your family warm through Arkansas winters with reliable heating service. We install, repair, and maintain heating systems with the expertise decades of experience provide.", icon: Icons.flame },
  { name: "General Plumbing", desc: "No job too small, no problem too tough. From routine maintenance to complex diagnostics, our general plumbing services cover everything your home or business needs.", icon: Icons.droplet },
  { name: "Pipe Repair", desc: "Burst pipes, corroded lines, and slow leaks fixed right the first time. We go where other plumbers won't and get the job done with lasting results you can count on.", icon: Icons.pipe },
  { name: "Fixture Installation", desc: "Upgrade your kitchen and bathroom with professional fixture installation. Faucets, sinks, toilets, and more — installed correctly so they work perfectly for years to come.", icon: Icons.fixture },
];

const allServiceNames = [
  "Plumbing Repair & Installation",
  "Residential Plumbing",
  "Heating Service",
  "General Plumbing",
  "Pipe Repair",
  "Fixture Installation",
];

const areas = ["Farmington", "Fayetteville", "West Fork", "Prairie Grove", "Northwest Arkansas"];

const reviews = [
  { text: "They do what they say and we're the only ones who would come out to my location.", name: "Anthony Rota", src: "Google" },
];

const navLinks = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Areas", id: "areas" },
];

export default function JamersonPlumbing() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("jamerson-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "roof") { sessionStorage.setItem("jamerson-auth", "1"); setAuthed(true); }
    else { setPwBad(true); setPw(""); }
  };

  useEffect(() => {
    if (!authed) return;
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [authed]);

  useEffect(() => {
    if (!authed) return;
    document.title = "Plumber Farmington AR | Jamerson Plumbing";
    const els = [];
    const add = (tag, attrs) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); });
      document.head.appendChild(el); els.push(el);
    };
    add("meta", { name: "description", content: "Farmington plumber since 1982. 4.8 stars on Google. Residential plumbing, repairs, heating. Call (479) 267-3734 for a free quote." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Farmington" });
    add("script", {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Plumber",
        name: "Jamerson Plumbing",
        telephone: "+14792673734",
        address: { "@type": "PostalAddress", streetAddress: "82 E Wilson St", addressLocality: "Farmington", addressRegion: "AR", postalCode: "72730", addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: 36.042, longitude: -94.247 },
        openingHoursSpecification: [],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "4", bestRating: "5" },
        foundingDate: "1982",
        description: "Jamerson Plumbing has served Farmington and Northwest Arkansas since 1982. Over 40 years of trusted plumbing repair, installation, and heating services.",
        areaServed: areas.map(a => ({ "@type": "City", name: a })),
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Plumbing Services", itemListElement: allServiceNames.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
        memberOf: [],
        sameAs: [],
      }),
    });
    return () => els.forEach(el => { try { document.head.removeChild(el); } catch (e) {} });
  }, [authed]);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const yr = new Date().getFullYear();

  if (!authed) {
    return (
      <>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}`}</style>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1C2B41" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "56px 44px", textAlign: "center", maxWidth: 420, width: "92%", boxShadow: "0 32px 80px rgba(0,0,0,.35)" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, marginBottom: 8, fontWeight: 600, letterSpacing: -0.5 }}>
              <span style={{ color: "#1C2B41" }}>Jamerson</span>{" "}
              <span style={{ color: "#C8934F" }}>Plumbing</span>
            </div>
            <p style={{ fontSize: 13, color: "#8A8A9A", letterSpacing: 1, marginBottom: 28, textTransform: "uppercase" }}>Website Preview</p>
            <form onSubmit={submitPw}>
              <input type="password" value={pw} onChange={e => { setPw(e.target.value); setPwBad(false); }} placeholder="&&&&" autoFocus style={{ width: "100%", padding: 16, fontSize: 20, border: `2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius: 8, textAlign: "center", letterSpacing: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", color: "#1C2B41" }} />
              {pwBad && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 8, fontWeight: 500 }}>Incorrect password</p>}
              <button type="submit" style={{ width: "100%", padding: 16, marginTop: 20, fontSize: 15, fontWeight: 700, background: "#1C2B41", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>View Site</button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
        :root{--primary:#1C2B41;--accent:#C8934F;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--cream);-webkit-font-smoothing:antialiased}
        h1,h2,h3,.serif{font-family:'Playfair Display',serif;font-weight:500}
        a{text-decoration:none;color:inherit}
        .gold-line{width:48px;height:2px;background:var(--accent)}
        @media(max-width:900px){
          .desktop-only{display:none!important}
          .mobile-only{display:flex!important}
          .hero-grid{grid-template-columns:1fr!important}
          .trust-row{grid-template-columns:1fr 1fr!important}
          .svc-grid{grid-template-columns:1fr!important}
          .why-grid{grid-template-columns:1fr!important}
          .badge-grid{grid-template-columns:1fr 1fr!important}
          .footer-grid{grid-template-columns:1fr!important;text-align:center}
          .footer-btm{flex-direction:column;gap:8px;text-align:center}
          .mobile-pad{padding-bottom:80px!important}
        }
        @media(min-width:901px){.mobile-only{display:none!important}}
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "14px clamp(24px,5vw,64px)" : "20px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(28,43,65,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease" }}>
        <div className="serif" style={{ fontSize: 22, color: scrolled ? "#fff" : "var(--primary)", fontWeight: 600, letterSpacing: -0.5 }}>
          <span>Jamerson</span>{" "}
          <span style={{ color: "var(--accent)" }}>Plumbing</span>
        </div>
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => go(l.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: scrolled ? "rgba(255,255,255,0.8)" : "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{l.label}</button>
          ))}
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
        </div>
        <button className="mobile-only" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "#fff" : "var(--primary)", display: "flex" }} aria-label="Open menu">{Icons.menu}</button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "var(--primary)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }} aria-label="Close menu">{Icons.x}</button>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => go(l.id)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>{l.label}</button>
          ))}
          <a href={TEL} style={{ background: "var(--accent)", color: "#fff", padding: "18px 48px", borderRadius: 8, fontSize: 18, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>Call {PHONE}</a>
        </div>
      )}

      {/* HERO -- Layout A: Split 55/45, cream bg, form right */}
      <section style={{ minHeight: "100vh", padding: "140px clamp(24px,5vw,64px) 100px", background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hero-grid" style={{ maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,147,79,0.1)", padding: "8px 16px", borderRadius: 40, marginBottom: 24 }}>
              <Stars />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>4.8 Stars on Google</span>
            </div>
            <h1 style={{ fontSize: "clamp(40px,5vw,68px)", lineHeight: 1.05, color: "var(--primary)", letterSpacing: -1.5, marginBottom: 20 }}>
              Farmington's<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Trusted Plumber</span><br />Since 1982
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 480, marginBottom: 28 }}>
              Over 40 years serving Farmington and Northwest Arkansas. An incorporated local business that goes where other plumbers won't. Honest work, reliable service.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
              <Stars />
              <span style={{ fontSize: 14, color: "var(--text-light)", fontStyle: "italic", marginLeft: 4 }}>"They do what they say and we're the only ones who would come out to my location." — Anthony Rota</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, boxShadow: "0 4px 20px rgba(200,147,79,0.3)", fontFamily: "'DM Sans',sans-serif", transition: "transform 0.3s ease" }}>{Icons.phone} Call Now — {PHONE}</a>
              <button onClick={() => go("services")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1.5px solid var(--border)", color: "var(--primary)", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Our Services</button>
            </div>
          </div>
          <div>
            <div style={{ background: "#fff", borderRadius: 12, padding: "36px 30px", boxShadow: "0 4px 40px rgba(0,0,0,0.08)", border: "1px solid var(--border)" }}>
              {!formDone ? (
                <form onSubmit={e => { e.preventDefault(); setFormDone(true); }}>
                  <h3 style={{ fontSize: 22, color: "var(--primary)", marginBottom: 6, fontFamily: "'Playfair Display',serif" }}>Get a Free Quote</h3>
                  <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 24 }}>We respond within the hour.</p>
                  <input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 12, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                  <input type="tel" placeholder="Phone number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 12, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                  <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 16, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)", color: formData.service ? "var(--text)" : "#999", appearance: "none" }}>
                    <option value="">What service do you need?</option>
                    {allServiceNames.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <button type="submit" style={{ width: "100%", padding: 16, background: "var(--primary)", color: "#fff", border: "none", borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Get My Free Quote</button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(200,147,79,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: "var(--accent)" }}>{Icons.check}</div>
                  <h3 style={{ fontSize: 20, color: "var(--primary)", marginBottom: 8, fontFamily: "'Playfair Display',serif" }}>We Got It!</h3>
                  <p style={{ fontSize: 13, color: "var(--text-mid)" }}>We'll call you back shortly.<br />Call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a> for emergencies.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR -- white, horizontal 4-stat row */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "48px clamp(24px,5vw,64px)" }}>
        <div className="trust-row" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }}>
          {[
            { num: "4.8", label: "Google Rating", desc: "Rated by real customers" },
            { num: "1982", label: "Est. Founded", desc: "40+ years of service" },
            { num: "Farmington", label: "Local Experts", desc: "Northwest Arkansas based" },
            { num: "Inc.", label: "Incorporated", desc: "Licensed & established" },
          ].map((s, i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize: i === 2 ? "clamp(22px,3vw,32px)" : "clamp(32px,4vw,44px)", color: "var(--primary)", lineHeight: 1, marginBottom: 6, letterSpacing: -1 }}>{s.num}</div>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--text)", marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "var(--text-light)" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES -- cream, 3-col grid */}
      <section id="services" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>What We Do</div>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>Plumbing Services in Farmington</h2>
          </div>
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease", cursor: "default", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; e.currentTarget.querySelector(".card-accent").style.width = "100%"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.querySelector(".card-accent").style.width = "0"; }}>
                <div className="card-accent" style={{ position: "absolute", top: 0, left: 0, height: 2, width: 0, background: "var(--accent)", transition: "width 0.3s ease" }} />
                <div style={{ color: "var(--accent)", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "clamp(18px,2vw,22px)", fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.name}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 40, fontSize: 15, color: "var(--text-mid)" }}>
            Questions? Call us directly at <a href={TEL} style={{ color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US -- primary (dark section), 2-col: text+credentials left / 2x2 badges right */}
      <section id="about" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Why Jamerson</div>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "#fff", letterSpacing: -0.5 }}>A Farmington Institution Since 1982</h2>
          </div>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: 20 }}>
                Jamerson Plumbing has been a cornerstone of the Farmington community for over four decades. Founded in 1982, the business was built on a simple principle: show up, do the work right, and charge a fair price. That reputation has endured through generations.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: 32 }}>
                As an incorporated business serving Northwest Arkansas, Jamerson Plumbing goes where other plumbers won't. Whether it's a rural property outside Farmington or a tough job in Prairie Grove, the commitment is the same — reliable plumbing service from people who know this area like the back of their hand.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Serving Farmington since 1982 — over 40 years",
                  "Incorporated and established business",
                  "Goes where other plumbers won't",
                  "Residential and commercial plumbing",
                  "Heating service and installation",
                  "Call for availability — always responsive",
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>{Icons.check}</span>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.78)" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="badge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { icon: Icons.award, title: "Since 1982", desc: "Over 40 years of trusted plumbing service in Northwest Arkansas" },
                { icon: Icons.shield, title: "Incorporated", desc: "A licensed, established business you can count on" },
                { icon: Icons.users, title: "Local Experts", desc: "Based in Farmington, serving the communities we call home" },
                { icon: Icons.clock, title: "Call Anytime", desc: "Call for availability — we're always responsive to your needs" },
              ].map((b, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "30px 24px", textAlign: "center" }}>
                  <div style={{ color: "var(--accent)", marginBottom: 14, display: "flex", justifyContent: "center" }}>{b.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", marginBottom: 8, fontFamily: "'DM Sans',sans-serif" }}>{b.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS -- white, centered single-card display (only 1 review) */}
      <section id="reviews" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Reviews</div>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>4.8 Stars on Google</h2>
          </div>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "48px 40px", textAlign: "center" }}>
              <div style={{ marginBottom: 20 }}><Stars /></div>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: "var(--text)", fontStyle: "italic", marginBottom: 24, maxWidth: 600, margin: "0 auto 24px" }}>
                "{reviews[0].text}"
              </p>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--primary)" }}>{reviews[0].name}</div>
              <div style={{ fontSize: 13, color: "var(--text-light)", marginTop: 4 }}>{reviews[0].src}</div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 40, fontSize: 15, color: "var(--text-mid)" }}>
            Ready to experience the difference? Call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS -- cream, centered flex-wrap pills */}
      <section id="areas" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Service Areas</div>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>Serving Northwest Arkansas</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {areas.map((a, i) => (
              <span key={i} title={`Plumbing Services in ${a}, AR`} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--white)", border: "1px solid var(--border)", borderRadius: 40, padding: "12px 22px", fontSize: 14, fontWeight: 600, color: "var(--text)", cursor: "default", transition: "all 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--primary)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--white)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}>
                <span style={{ display: "flex", alignItems: "center" }}>{Icons.mapPin}</span>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA -- white with top border */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5, lineHeight: 1.15, marginBottom: 20 }}>
            Got a plumbing problem?<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Call Jamerson.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36, maxWidth: 520, margin: "0 auto 36px" }}>
            Honest pricing. Over 40 years of experience. Serving Farmington and Northwest Arkansas since 1982.
          </p>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "20px 44px", borderRadius: 6, fontSize: 18, fontWeight: 700, boxShadow: "0 4px 20px rgba(200,147,79,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
        </div>
      </section>

      {/* FOOTER -- primary, 3-column */}
      <footer style={{ background: "var(--primary)", padding: "80px clamp(24px,5vw,64px) 40px" }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, marginBottom: 16 }}>
              <span style={{ color: "#fff" }}>Jamerson</span>{" "}
              <span style={{ color: "var(--accent)" }}>Plumbing</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 16, maxWidth: 320 }}>
              Farmington's trusted plumber since 1982. Over 40 years serving Northwest Arkansas with reliable plumbing and heating services.
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>82 E Wilson St, Farmington, AR 72730</p>
            <a href={TEL} style={{ fontSize: 14, color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>Call for Availability</p>
          </div>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.4)", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Services</h4>
            {allServiceNames.map((s, i) => (
              <p key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 10, lineHeight: 1.4 }}>{s}</p>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.4)", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Areas</h4>
            {areas.map((a, i) => (
              <p key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>{a}</p>
            ))}
          </div>
        </div>
        <div className="footer-btm" style={{ maxWidth: 1200, margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>&copy; {yr} Jamerson Plumbing. All rights reserved.</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Incorporated Business</p>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, display: "none" }}>
        <a href={TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "16px 20px", fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", textDecoration: "none" }}>
          {Icons.phone} Call Jamerson — {PHONE}
        </a>
      </div>

      {/* Bottom padding for mobile CTA */}
      <div className="mobile-only" style={{ height: 60, display: "none" }} />
    </>
  );
}

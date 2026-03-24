// Layout: A | Industry: HVAC | City: North Little Rock
import { useState, useEffect } from "react";

const PHONE = "(501) 515-7497";
const TEL = "tel:+15015157497";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  airSeal: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 14c0-1.66 1.34-3 3-3s3 1.34 3 3"/><path d="M7 16c0-2.76 2.24-5 5-5s5 2.24 5 5"/></svg>,
  ductSeal: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="4" rx="1"/><rect x="2" y="14" width="20" height="4" rx="1"/><path d="M6 10v4"/><path d="M12 10v4"/><path d="M18 10v4"/></svg>,
  insulation: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M8 13h8"/><path d="M8 16h8"/><path d="M8 10h8"/></svg>,
  thermostat: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="3"/><circle cx="12" cy="13" r="4"/><path d="M12 9v4l2 2"/><path d="M9 6h6"/></svg>,
  acTune: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
  audit: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C8934F" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  award: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  home: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  tv: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>,
  leaf: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  zap: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  chevLeft: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>,
  chevRight: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
};

const Stars = () => <span style={{ display: "inline-flex", gap: 2 }}>{[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Air Sealing", desc: "We seal gaps and cracks throughout your home to stop energy loss and improve comfort. Fully covered through your utility program at no cost to you.", icon: Icons.airSeal },
  { name: "Duct Sealing", desc: "Leaky ducts waste up to 30% of your conditioned air. Our certified technicians seal your ductwork to maximize efficiency and airflow.", icon: Icons.ductSeal },
  { name: "Insulation", desc: "Proper insulation keeps your home cooler in summer and warmer in winter. We upgrade attic and wall insulation at no charge through Entergy and Summit Gas.", icon: Icons.insulation },
  { name: "Smart Thermostat Installation", desc: "Upgrade to a smart thermostat that learns your schedule and reduces energy waste. Installed free as part of your home energy upgrade.", icon: Icons.thermostat },
  { name: "AC Tune-Ups", desc: "Keep your cooling system running at peak performance with a professional tune-up. Included in our no-cost energy efficiency program for qualified homeowners.", icon: Icons.acTune },
  { name: "Home Energy Audits", desc: "A comprehensive assessment of your home's energy usage to identify savings opportunities. Our certified experts pinpoint exactly where your home is losing energy.", icon: Icons.audit },
];

const allServiceNames = [
  "Air Sealing",
  "Duct Sealing",
  "Insulation",
  "Smart Thermostat Installation",
  "AC Tune-Ups",
  "Direct Installs",
  "Home Energy Audits",
];

const areas = ["North Little Rock", "Little Rock", "Sherwood", "Maumelle", "Benton", "Bryant", "Bee Branch", "Central Arkansas"];

const reviews = [
  { text: "I am thoroughly impressed with the professionalism of the heating and cooling systems team. They promptly diagnosed the problem and resolved it the very next day.", name: "Laila Pascua", src: "Google" },
];

const navLinks = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Areas", id: "areas" },
];

export default function HomeEnergyXperts() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("hex-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("hex-auth", "1"); setAuthed(true); }
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
    document.title = "Home Energy Upgrades North Little Rock AR | Home Energy Xperts";
    const els = [];
    const add = (tag, attrs) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); });
      document.head.appendChild(el); els.push(el);
    };
    add("meta", { name: "description", content: "Free home energy upgrades in North Little Rock, AR. 5.0 stars, 58 reviews. Entergy & Summit Gas partner. Call (501) 515-7497." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "North Little Rock" });
    add("script", {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        name: "Home Energy Xperts",
        telephone: "+15015157497",
        address: { "@type": "PostalAddress", streetAddress: "6100 Getty Dr", addressLocality: "North Little Rock", addressRegion: "AR", postalCode: "72117", addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: 34.7695, longitude: -92.2371 },
        openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" }],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "58", bestRating: "5" },
        description: "Home Energy Xperts provides free home energy upgrades including air sealing, duct sealing, insulation, and smart thermostat installation in North Little Rock, AR and Central Arkansas through Entergy and Summit Gas utility programs.",
        areaServed: areas.map(a => ({ "@type": "City", name: a })),
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Energy Services", itemListElement: allServiceNames.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
        memberOf: [{ "@type": "Organization", name: "Entergy Arkansas" }, { "@type": "Organization", name: "Summit Gas" }],
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
              <span style={{ color: "#1C2B41" }}>Home Energy</span>{" "}
              <span style={{ color: "#C8934F" }}>Xperts</span>
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
          <span>Home Energy</span>{" "}
          <span style={{ color: "var(--accent)" }}>Xperts</span>
        </div>
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => go(l.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: scrolled ? "rgba(255,255,255,0.8)" : "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{l.label}</button>
          ))}
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
        </div>
        <button className="mobile-only" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "#fff" : "var(--primary)", display: "flex" }}>{Icons.menu}</button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "var(--primary)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>{Icons.x}</button>
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
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>5.0 Perfect Rating</span>
            </div>
            <h1 style={{ fontSize: "clamp(40px,5vw,68px)", lineHeight: 1.05, color: "var(--primary)", letterSpacing: -1.5, marginBottom: 20 }}>
              North Little Rock's<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Free Energy Upgrades</span><br />for Homeowners
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 480, marginBottom: 28 }}>
              All services at no cost through Entergy Electric and Summit Gas utility programs. Certified energy experts. Thousands of homes upgraded across Central Arkansas.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
              <Stars />
              <span style={{ fontSize: 14, color: "var(--text-light)", fontStyle: "italic", marginLeft: 4 }}>"Thoroughly impressed with the professionalism of the team." — Laila Pascua</span>
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
                  <h3 style={{ fontSize: 22, color: "var(--primary)", marginBottom: 6, fontFamily: "'Playfair Display',serif" }}>Get Your Free Upgrade</h3>
                  <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 24 }}>We respond within the hour.</p>
                  <input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 12, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                  <input type="tel" placeholder="Phone number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 12, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                  <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 16, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)", color: formData.service ? "var(--text)" : "#999", appearance: "none" }}>
                    <option value="">What service are you interested in?</option>
                    {allServiceNames.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <button type="submit" style={{ width: "100%", padding: 16, background: "var(--primary)", color: "#fff", border: "none", borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Get My Free Upgrade</button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(200,147,79,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: "var(--accent)" }}>{Icons.check}</div>
                  <h3 style={{ fontSize: 20, color: "var(--primary)", marginBottom: 8, fontFamily: "'Playfair Display',serif" }}>We Got It!</h3>
                  <p style={{ fontSize: 13, color: "var(--text-mid)" }}>We'll call you back shortly.<br />Call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a> for immediate assistance.</p>
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
            { num: "5.0", label: "Google Rating", desc: "58+ reviews" },
            { num: "58+", label: "Reviews", desc: "Perfect five-star" },
            { num: "FREE", label: "To Homeowners", desc: "Through utility programs" },
            { num: "Entergy", label: "Partner", desc: "Official utility program" },
          ].map((s, i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize: "clamp(32px,4vw,44px)", color: "var(--primary)", lineHeight: 1, marginBottom: 6, letterSpacing: -1 }}>{s.num}</div>
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
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>Energy Services in North Little Rock</h2>
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
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Why Home Energy Xperts</div>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "#fff", letterSpacing: -0.5 }}>5.0 Stars on Google. 58 Reviews.</h2>
          </div>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: 20 }}>
                Home Energy Xperts partners directly with Entergy Electric and Summit Gas to deliver energy upgrades to homeowners across Central Arkansas at absolutely no cost. Every service we provide — from air sealing and insulation to smart thermostat installation — is fully covered through your utility program.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: 32 }}>
                Our team of certified energy experts has upgraded thousands of homes throughout North Little Rock, Little Rock, and the surrounding communities. We were featured by Entergy on KATV Channel 7 for our commitment to making homes more energy efficient. We are active in community groups across Central Arkansas and dedicated to sustainability.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "All services at NO COST through utility programs",
                  "Official Entergy Electric partner",
                  "Summit Gas program provider",
                  "Featured on KATV Channel 7",
                  "Certified energy efficiency experts",
                  "Thousands of homes upgraded across Central AR",
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
                { icon: Icons.zap, title: "Entergy Partner", desc: "Official utility program provider for Entergy Electric" },
                { icon: Icons.tv, title: "KATV Channel 7", desc: "Featured by Entergy on local television news" },
                { icon: Icons.leaf, title: "Sustainability", desc: "Committed to energy efficiency and reducing waste" },
                { icon: Icons.users, title: "Community", desc: "Active in community groups across Central Arkansas" },
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

      {/* REVIEWS -- white, centered single-card carousel with dots */}
      <section id="reviews" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Reviews</div>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>5.0 Stars on Google</h2>
          </div>
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "48px 40px", textAlign: "center", minHeight: 220 }}>
              <div style={{ marginBottom: 20 }}><Stars /></div>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: "var(--text)", fontStyle: "italic", marginBottom: 24, maxWidth: 600, margin: "0 auto 24px" }}>
                "{reviews[reviewIdx].text}"
              </p>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--primary)" }}>{reviews[reviewIdx].name}</div>
              <div style={{ fontSize: 13, color: "var(--text-light)", marginTop: 4 }}>{reviews[reviewIdx].src}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 28 }}>
              <div style={{ display: "flex", gap: 8 }}>
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setReviewIdx(i)} aria-label={`Go to review ${i + 1}`} style={{ width: i === reviewIdx ? 24 : 8, height: 8, borderRadius: 4, background: i === reviewIdx ? "var(--accent)" : "var(--border)", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
                ))}
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 40, fontSize: 15, color: "var(--text-mid)" }}>
            Ready to upgrade your home for free? Call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS -- cream, centered flex-wrap pills */}
      <section id="areas" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Service Areas</div>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>Serving Central Arkansas</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {areas.map((a, i) => (
              <span key={i} title={`Home Energy Upgrades in ${a}, AR`} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--white)", border: "1px solid var(--border)", borderRadius: 40, padding: "12px 22px", fontSize: 14, fontWeight: 600, color: "var(--text)", cursor: "default", transition: "all 0.3s ease" }}
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
            Free energy upgrades?<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Call Home Energy Xperts.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36, maxWidth: 520, margin: "0 auto 36px" }}>
            All services covered through Entergy and Summit Gas utility programs. No cost to you. No catch.
          </p>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "20px 44px", borderRadius: 6, fontSize: 18, fontWeight: 700, boxShadow: "0 4px 20px rgba(200,147,79,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
        </div>
      </section>

      {/* FOOTER -- primary, 3-column */}
      <footer style={{ background: "var(--primary)", padding: "80px clamp(24px,5vw,64px) 40px" }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, marginBottom: 16 }}>
              <span style={{ color: "#fff" }}>Home Energy</span>{" "}
              <span style={{ color: "var(--accent)" }}>Xperts</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 16, maxWidth: 320 }}>
              Free home energy upgrades through Entergy Electric and Summit Gas utility programs. Serving North Little Rock and Central Arkansas.
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>6100 Getty Dr, North Little Rock, AR 72117</p>
            <a href={TEL} style={{ fontSize: 14, color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>Mon-Fri 9AM-5PM</p>
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
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>&copy; {yr} Home Energy Xperts. All rights reserved.</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Entergy Electric &bull; Summit Gas Partner</p>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, display: "none" }}>
        <a href={TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "16px 20px", fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", textDecoration: "none" }}>
          {Icons.phone} Call Home Energy Xperts — {PHONE}
        </a>
      </div>

      {/* Bottom padding for mobile CTA */}
      <div className="mobile-only" style={{ height: 60, display: "none" }} />
    </>
  );
}

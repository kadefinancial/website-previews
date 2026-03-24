// Layout: A | Industry: HVAC | City: Little Rock
import { useState, useEffect } from "react";

const PHONE = "(501) 992-0185";
const TEL = "tel:+15019920185";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  flame: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
  wind: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
  thermometer: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  clipboard: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>,
  duct: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 6v12"/><path d="M10 6v12"/><path d="M14 6v12"/><path d="M18 6v12"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C8934F" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  award: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  heart: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  dollar: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  chevLeft: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>,
  chevRight: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
};

const Stars = () => <span style={{ display: "inline-flex", gap: 2 }}>{[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "HVAC Repair", desc: "Fast, reliable repair for all makes and models. Our technicians diagnose and fix the problem right the first time so your home stays comfortable.", icon: Icons.wrench },
  { name: "HVAC Installation", desc: "Complete system installation sized and designed for your home. Energy-efficient units from trusted brands with professional setup.", icon: Icons.wind },
  { name: "HVAC Maintenance", desc: "Preventative tune-ups that extend the life of your system, lower energy bills, and catch small issues before they become expensive repairs.", icon: Icons.clipboard },
  { name: "Heat Pump Service", desc: "Expert heat pump repair, replacement, and seasonal maintenance. Year-round comfort with one efficient system.", icon: Icons.thermometer },
  { name: "Ductwork", desc: "Duct inspection, repair, sealing, and new installation. Properly sealed ducts improve airflow, efficiency, and indoor air quality.", icon: Icons.duct },
  { name: "Free Estimates", desc: "Honest, no-obligation estimates on any job. We walk you through every option so you can make the best decision for your home and budget.", icon: Icons.dollar },
];

const allServiceNames = [
  "HVAC Repair",
  "HVAC Installation",
  "HVAC Maintenance",
  "Heat Pump Replacement",
  "Ductwork",
  "Products & Equipment",
  "Free Estimates",
];

const areas = ["Little Rock", "Benton", "Bryant", "Conway", "Greenbrier", "Hot Springs Village", "Jacksonville", "Maumelle", "Sherwood", "Vilonia"];

const reviews = [
  { text: "Ray, TJ, and team did an outstanding job replacing my 20 year old HVAC system.", name: "Jerry Ravlin", src: "Google" },
  { text: "If I could give these guys more than five stars, I would! Very knowledgeable, efficient and amazing!", name: "Colleen Stone", src: "Google" },
  { text: "We would like to commend this company on the very efficient, professional work they did.", name: "Valerie Walker", src: "Google" },
  { text: "Excellent work. Techs were knowledgeable, friendly & respectful of my home.", name: "Danalee Lofton", src: "Google" },
  { text: "1Call seems to be extremely honest and knowledgeable. TJ was very professional.", name: "Judy Park", src: "Google" },
];

const navLinks = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Areas", id: "areas" },
];

export default function OneCallHeatAndAir() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("1call-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("1call-auth", "1"); setAuthed(true); }
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
    document.title = "HVAC Service Little Rock AR | 1 Call Heat & Air";
    const els = [];
    const add = (tag, attrs) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); });
      document.head.appendChild(el); els.push(el);
    };
    add("meta", { name: "description", content: "HVAC repair & installation in Little Rock, AR. 4.9 stars, 149+ reviews. Licensed #2502090. Call (501) 992-0185." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Little Rock" });
    add("script", {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        name: "1 Call Heat & Air",
        telephone: "+15019920185",
        email: "1callheatandair@gmail.com",
        address: { "@type": "PostalAddress", streetAddress: "24300 Chenal Pkwy #30", addressLocality: "Little Rock", addressRegion: "AR", postalCode: "72223", addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: 34.7465, longitude: -92.3890 },
        openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "17:00" }],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "149", bestRating: "5" },
        description: "Family-owned HVAC repair, installation, and maintenance in Little Rock, AR. Licensed #2502090. 10% military and first responder discount.",
        areaServed: areas.map(a => ({ "@type": "City", name: a })),
        hasOfferCatalog: { "@type": "OfferCatalog", name: "HVAC Services", itemListElement: allServiceNames.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
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
              <span style={{ color: "#1C2B41" }}>1 Call</span>{" "}
              <span style={{ color: "#C8934F" }}>Heat & Air</span>
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
          <span>1 Call</span>{" "}
          <span style={{ color: "var(--accent)" }}>Heat & Air</span>
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
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>4.9 Stars - 149 Reviews</span>
            </div>
            <h1 style={{ fontSize: "clamp(40px,5vw,68px)", lineHeight: 1.05, color: "var(--primary)", letterSpacing: -1.5, marginBottom: 20 }}>
              Little Rock's<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Most Trusted</span><br />HVAC Team
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 480, marginBottom: 28 }}>
              Family-owned. Licensed and insured. 10% military and first responder discount on every job. Free estimates, always.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
              <Stars />
              <span style={{ fontSize: 14, color: "var(--text-light)", fontStyle: "italic", marginLeft: 4 }}>"If I could give more than five stars, I would!" — Colleen Stone</span>
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
                    <option value="">What do you need help with?</option>
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
            { num: "4.9", label: "Google Rating", desc: "149+ reviews" },
            { num: "149+", label: "Reviews", desc: "On Google" },
            { num: "#2502090", label: "Licensed", desc: "HVAC License" },
            { num: "10%", label: "Military Discount", desc: "First responders too" },
          ].map((s, i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "var(--primary)", lineHeight: 1, marginBottom: 6, letterSpacing: -1 }}>{s.num}</div>
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
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>HVAC Services in Little Rock</h2>
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
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Why 1 Call Heat & Air</div>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "#fff", letterSpacing: -0.5 }}>4.9 Stars on Google. 149 Reviews.</h2>
          </div>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: 20 }}>
                1 Call Heat & Air is a family-owned HVAC company serving Little Rock and the surrounding communities. With technicians like Ray and TJ leading the way, every job is handled with care, honesty, and respect for your home.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: 32 }}>
                We believe in doing the job right the first time and treating every customer like family. That commitment has earned us a 4.9-star rating across 149 Google reviews. We are licensed, insured, and bonded — and we proudly offer a 10% discount to all military members, veterans, and first responders.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Family-owned and operated",
                  "Licensed, insured, and bonded — HVAC License #2502090",
                  "100% satisfaction guaranteed",
                  "10% military, veteran, and first responder discount",
                  "Free estimates and second opinions",
                  "Mon-Fri 7AM-5PM service hours",
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
                { icon: Icons.users, title: "Family Owned", desc: "Locally owned and operated in Little Rock, AR" },
                { icon: Icons.shield, title: "Licensed #2502090", desc: "Licensed, insured, and bonded for your protection" },
                { icon: Icons.award, title: "4.9 Stars", desc: "149 five-star reviews on Google" },
                { icon: Icons.heart, title: "10% Discount", desc: "Military, veteran, and first responder savings" },
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
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>4.9 Stars on Google</h2>
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
              <button onClick={() => setReviewIdx(reviewIdx === 0 ? reviews.length - 1 : reviewIdx - 1)} aria-label="Previous review" style={{ background: "none", border: "1.5px solid var(--border)", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--primary)", transition: "all 0.3s ease" }}>{Icons.chevLeft}</button>
              <div style={{ display: "flex", gap: 8 }}>
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setReviewIdx(i)} aria-label={`Go to review ${i + 1}`} style={{ width: i === reviewIdx ? 24 : 8, height: 8, borderRadius: 4, background: i === reviewIdx ? "var(--accent)" : "var(--border)", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
                ))}
              </div>
              <button onClick={() => setReviewIdx(reviewIdx === reviews.length - 1 ? 0 : reviewIdx + 1)} aria-label="Next review" style={{ background: "none", border: "1.5px solid var(--border)", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--primary)", transition: "all 0.3s ease" }}>{Icons.chevRight}</button>
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
            <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>Serving Central Arkansas</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {areas.map((a, i) => (
              <span key={i} title={`HVAC Service in ${a}, AR`} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--white)", border: "1px solid var(--border)", borderRadius: 40, padding: "12px 22px", fontSize: 14, fontWeight: 600, color: "var(--text)", cursor: "default", transition: "all 0.3s ease" }}
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
            AC not working?<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Call 1 Call Heat & Air.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36, maxWidth: 520, margin: "0 auto 36px" }}>
            Honest pricing. Licensed and insured. Free estimates on every job. 10% military and first responder discount.
          </p>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "20px 44px", borderRadius: 6, fontSize: 18, fontWeight: 700, boxShadow: "0 4px 20px rgba(200,147,79,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
        </div>
      </section>

      {/* FOOTER -- primary, 3-column */}
      <footer style={{ background: "var(--primary)", padding: "80px clamp(24px,5vw,64px) 40px" }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, marginBottom: 16 }}>
              <span style={{ color: "#fff" }}>1 Call</span>{" "}
              <span style={{ color: "var(--accent)" }}>Heat & Air</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 16, maxWidth: 320 }}>
              Family-owned HVAC repair, installation, and maintenance in Little Rock, AR and Central Arkansas. Licensed #2502090.
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>24300 Chenal Pkwy #30, Little Rock, AR 72223</p>
            <a href={TEL} style={{ fontSize: 14, color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a>
            <br />
            <a href="mailto:1callheatandair@gmail.com" style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4, display: "inline-block" }}>1callheatandair@gmail.com</a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 10 }}>Mon-Fri 7AM-5PM</p>
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
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>&copy; {yr} 1 Call Heat & Air. All rights reserved.</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>HVAC License #2502090</p>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, display: "none" }}>
        <a href={TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "16px 20px", fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", textDecoration: "none" }}>
          {Icons.phone} Call 1 Call Heat & Air — {PHONE}
        </a>
      </div>

      {/* Bottom padding for mobile CTA */}
      <div className="mobile-only" style={{ height: 60, display: "none" }} />
    </>
  );
}
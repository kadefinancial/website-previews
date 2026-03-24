// Layout: B | Industry: HVAC | City: Little Rock
import { useState, useEffect } from "react";

const PHONE = "(501) 228-9770";
const TEL = "tel:+15012289770";
const BIZ = "Bert Black AC Heating Plumbing Electric";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  wind: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
  droplets: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z"/></svg>,
  zap: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  generator: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M12 7V3"/><path d="M8 7V5"/><path d="M16 7V5"/><circle cx="12" cy="14" r="3"/><path d="M12 11v1"/><path d="M12 17v-1"/><path d="M9.17 12.17l.71.71"/><path d="M14.12 15.12l.71.71"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  clock: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C8934F" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrowRight: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  pipe: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 14h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M10 17h4a3 3 0 003-3V7"/></svg>,
};

const Stars = () => <span style={{ display: "inline-flex", gap: 2 }}>{[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "HVAC Installation & Repair", desc: "Complete heating and cooling solutions from installation to emergency repair. Trusted by Little Rock homeowners for over 45 years to keep every season comfortable.", icon: Icons.wind },
  { name: "Plumbing & Water Heaters", desc: "Full-service plumbing from leak repair to water heater replacement. Tank and tankless options with upfront pricing and professional installation.", icon: Icons.droplets },
  { name: "Electrical Service", desc: "Licensed electrical work for homes and businesses. Panel upgrades, wiring, outlets, lighting, and code-compliant repairs done right the first time.", icon: Icons.zap },
  { name: "Generators & Battery Backup", desc: "Whole-home generators and battery backup systems to keep your family safe during outages. Professional sizing, installation, and ongoing maintenance.", icon: Icons.generator },
  { name: "Service Plans", desc: "Home Team Advantage membership plans that keep your HVAC, plumbing, and electrical systems running smoothly year-round with priority scheduling and savings.", icon: Icons.shield },
  { name: "Emergency 24/7 Service", desc: "When your system fails at midnight or on a holiday, Bert Black answers the call. Around-the-clock emergency service across all three locations.", icon: Icons.clock },
];

const allServiceNames = [
  "HVAC Installation & Repair", "Plumbing", "Water Heaters", "Tankless Water Heaters",
  "Drain Cleaning", "Electrical", "Ceiling Fans", "Generators",
  "Battery Backup", "Service Plans"
];

const areas = ["Little Rock", "Hot Springs", "Pine Bluff", "North Little Rock", "Hot Springs Village", "White Hall", "Benton", "Bryant", "Bauxite", "Sherwood", "Jacksonville"];

const reviews = [
  { text: "Had Bert Black install an all new HVAC system and ductwork. Semi-annual service keeps everything running perfectly. Couldn't be happier with the entire experience.", name: "Carter Malone", src: "Google" },
  { text: "Harvey arrived early to scheduled appointment. Introduced himself, professional service. Thorough and explained everything clearly. Highly recommend Bert Black to anyone.", name: "Valerie Kearney", src: "Google" },
];

const navLinks = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Areas", id: "areas" },
];

export default function BertBlackACHeatingPlumbingElectric() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("bb-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("bb-auth", "1"); setAuthed(true); }
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
    document.title = "HVAC Plumbing Electrical Little Rock AR | Bert Black";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "HVAC, plumbing & electrical in Little Rock, AR. 4.8 stars, 1,156+ reviews, 45+ years. Call (501) 228-9770." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Little Rock" });
    add("script", {
      type: "application/ld+json", textContent: JSON.stringify({
        "@context": "https://schema.org", "@type": "HVACBusiness",
        name: "Bert Black AC Heating Plumbing Electric", telephone: "+15012289770",
        address: { "@type": "PostalAddress", streetAddress: "1400 Westpark Drive", addressLocality: "Little Rock", addressRegion: "AR", postalCode: "72204", addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: 34.7206, longitude: -92.3571 },
        openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" }],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1156", bestRating: "5" },
        description: "Multi-trade home service company serving Central Arkansas for over 45 years. HVAC, plumbing, electrical, and generator services across 3 locations.",
        areaServed: areas.map(a => ({ "@type": "City", name: a })),
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Services", itemListElement: allServiceNames.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
        memberOf: [],
        sameAs: [],
      })
    });
    return () => els.forEach(el => { try { document.head.removeChild(el) } catch (e) { } });
  }, [authed]);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const yr = new Date().getFullYear();

  // --- PASSWORD GATE ---
  if (!authed) {
    return (<>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}
      `}</style>
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1C2B41" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: "56px 44px", textAlign: "center", maxWidth: 420, width: "92%", boxShadow: "0 32px 80px rgba(0,0,0,.35)" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, marginBottom: 8 }}>
            <span style={{ fontWeight: 700, color: "#1C2B41" }}>Bert Black</span> <span style={{ color: "#C8934F" }}>Service</span>
          </div>
          <p style={{ fontSize: 13, color: "#8A8A9A", letterSpacing: 1, marginBottom: 28, textTransform: "uppercase" }}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e => { setPw(e.target.value); setPwBad(false) }} placeholder="••••" autoFocus style={{ width: "100%", padding: 16, fontSize: 20, border: `2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius: 8, textAlign: "center", letterSpacing: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", color: "#1e293b" }} />
            {pwBad && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 8, fontWeight: 500 }}>Incorrect password</p>}
            <button type="submit" style={{ width: "100%", padding: 16, marginTop: 20, fontSize: 15, fontWeight: 700, letterSpacing: 0.3, background: "#1C2B41", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  // --- MAIN SITE (Layout B: Centered Hero) ---
  return (<>
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
        .hero-text{max-width:100%!important;padding:0 0 40px!important}
        .form-section-inner{flex-direction:column!important}
        .svc-grid{grid-template-columns:1fr!important}
        .why-creds-row{flex-direction:column!important;gap:12px!important}
        .rev-grid{grid-template-columns:1fr!important}
        .footer-grid{grid-template-columns:1fr!important}
        .trust-row{grid-template-columns:1fr 1fr!important}
      }
      @media(min-width:901px){.mobile-only{display:none!important}}
    `}</style>

    {/* NAV */}
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "14px clamp(24px,5vw,64px)" : "20px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(28,43,65,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease", boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none" }}>
      <div className="serif" style={{ fontSize: 22, color: scrolled ? "#fff" : "var(--primary)", fontWeight: 600, letterSpacing: -0.5 }}>
        <span>Bert Black</span> <span style={{ color: "var(--accent)" }}>Service</span>
      </div>
      <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {navLinks.map(l => <button key={l.id} onClick={() => go(l.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: scrolled ? "rgba(255,255,255,0.8)" : "var(--text-mid)", letterSpacing: 0.5, fontFamily: "'DM Sans',sans-serif" }}>{l.label}</button>)}
        <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
      </div>
      <button className="mobile-only" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "#fff" : "var(--primary)", display: "flex" }}>{Icons.menu}</button>
    </nav>

    {/* MOBILE MENU */}
    {menuOpen && (
      <div style={{ position: "fixed", inset: 0, background: "var(--primary)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
        <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>{Icons.x}</button>
        {navLinks.map(l => <button key={l.id} onClick={() => go(l.id)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>{l.label}</button>)}
        <a href={TEL} style={{ background: "var(--accent)", color: "#fff", padding: "18px 48px", borderRadius: 8, fontSize: 18, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>Call {PHONE}</a>
      </div>
    )}

    {/* HERO — Layout B: Full-width centered, no form */}
    <section style={{ padding: "180px clamp(24px,5vw,64px) 100px", background: "var(--cream)", textAlign: "center" }}>
      <div className="hero-text" style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,147,79,0.1)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase" }}>45+ Years &middot; 3 Locations &middot; 24/7</span>
        </div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 1.05, color: "var(--primary)", marginBottom: 24, letterSpacing: -2 }}>
          HVAC, Plumbing & Electrical<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Little Rock Trusts</span>
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 32, maxWidth: 600, margin: "0 auto 32px" }}>
          Bert Black has served Central Arkansas for over 45 years. Three locations, four trades, and 1,156+ five-star reviews from homeowners who count on honest, reliable service.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 36 }}>
          <Stars />
          <span style={{ fontSize: 14, color: "var(--text-light)", fontStyle: "italic", marginLeft: 4 }}>"All new HVAC system and ductwork. Semi-annual service." — Carter Malone</span>
        </div>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, boxShadow: "0 4px 20px rgba(200,147,79,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} Call Bert Black Now</a>
          <button onClick={() => go("services")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--primary)", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid var(--border)", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>View Services {Icons.arrowRight}</button>
        </div>
      </div>
    </section>

    {/* FORM + TRUST — Layout B: Centered form, trust stats below in same section */}
    <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Centered Form */}
        <div style={{ maxWidth: 480, margin: "0 auto 56px" }}>
          <div style={{ background: "var(--white)", borderRadius: 12, padding: "44px 36px", boxShadow: "0 4px 40px rgba(0,0,0,0.08)", border: "1px solid var(--border)" }}>
            {!formDone ? (
              <form onSubmit={e => { e.preventDefault(); setFormDone(true) }}>
                <h3 style={{ fontSize: 26, color: "var(--primary)", marginBottom: 6, fontFamily: "'Playfair Display',serif" }}>Get a Free Quote</h3>
                <p style={{ fontSize: 14, color: "var(--text-light)", marginBottom: 28 }}>We respond within the hour.</p>
                <input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required style={{ width: "100%", padding: "16px 18px", fontSize: 15, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 14, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                <input type="tel" placeholder="Phone number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required style={{ width: "100%", padding: "16px 18px", fontSize: 15, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 14, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} required style={{ width: "100%", padding: "16px 18px", fontSize: 15, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 20, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)", color: formData.service ? "var(--text)" : "#999", appearance: "none" }}>
                  <option value="">What do you need help with?</option>
                  {allServiceNames.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <button type="submit" style={{ width: "100%", padding: 18, background: "var(--primary)", color: "#fff", border: "none", borderRadius: 6, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Get My Free Quote</button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(200,147,79,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "var(--accent)" }}>{Icons.check}</div>
                <h3 style={{ fontSize: 22, color: "var(--primary)", marginBottom: 8, fontFamily: "'Playfair Display',serif" }}>We Got It!</h3>
                <p style={{ fontSize: 14, color: "var(--text-mid)" }}>We'll call you back shortly. For emergencies,<br />call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a></p>
              </div>
            )}
          </div>
        </div>
        {/* Trust Stats Row */}
        <div className="trust-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, maxWidth: 900, margin: "0 auto" }}>
          {[
            { num: "4.8", label: "Google Rating", desc: "Near-perfect score" },
            { num: "1,156+", label: "Reviews", desc: "Verified customers" },
            { num: "45+", label: "Years", desc: "Serving Arkansas" },
            { num: "3", label: "Locations", desc: "LR, Hot Springs, Pine Bluff" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div className="serif" style={{ fontSize: "clamp(36px,4vw,52px)", color: "var(--primary)", lineHeight: 1, marginBottom: 6, letterSpacing: -1 }}>{s.num}</div>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--text)", marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "var(--text-light)" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SERVICES — Layout B: 2-column grid, larger cards */}
    <section id="services" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>What We Do</div>
          <h2 style={{ fontSize: "clamp(30px,3.5vw,44px)", color: "var(--primary)", letterSpacing: -0.5 }}>Full-Service Home Solutions in Little Rock</h2>
        </div>
        <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "44px 36px", border: "1px solid var(--border)", transition: "all 0.3s ease", cursor: "default", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; e.currentTarget.querySelector('.cb').style.width = "100%" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.querySelector('.cb').style.width = "0" }}>
              <div className="cb" style={{ position: "absolute", top: 0, left: 0, width: 0, height: 2, background: "var(--accent)", transition: "width 0.35s ease" }} />
              <div style={{ color: "var(--accent)", marginBottom: 18 }}>{s.icon}</div>
              <h3 style={{ fontSize: 19, color: "var(--primary)", marginBottom: 10, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.name}</h3>
              <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 40, fontSize: 15, color: "var(--text-light)" }}>
          Questions? Call Bert Black directly at <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* WHY US — Layout B: Single column centered */}
    <section id="about" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)", color: "#fff" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div className="gold-line" style={{ margin: "0 auto 20px" }} />
        <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14, opacity: 0.7 }}>About Bert Black</div>
        <h2 style={{ fontSize: "clamp(30px,3.5vw,42px)", lineHeight: 1.15, marginBottom: 28, color: "#fff" }}>Four Trades, Three Locations,<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>One Trusted Name</span></h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 24, textAlign: "left" }}>
          For over 45 years, Bert Black has been the name Central Arkansas calls when something breaks. What started as a single HVAC company has grown into a full-service operation covering heating, cooling, plumbing, electrical, and generator installation — all under one roof, with three locations in Little Rock, Hot Springs, and Pine Bluff.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 36, textAlign: "left" }}>
          That kind of longevity doesn't happen by accident. It comes from showing up on time, pricing honestly, and standing behind the work. With over 1,156 reviews and a 4.8-star rating, Bert Black has earned the trust of thousands of Arkansas families. ServiceTitan-powered booking, financing options, and the Home Team Advantage membership program mean getting help has never been easier.
        </p>
        <div className="why-creds-row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, marginTop: 8 }}>
          {["HVAC, Plumbing, Electrical & Generators", "3 Locations Across Arkansas", "45+ Years of Service", "24/7 Emergency Availability", "ServiceTitan Booking", "Financing Available", "Home Team Advantage Membership"].map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ color: "var(--accent)", flexShrink: 0 }}>{Icons.check}</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap" }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS — Layout B: Cards side by side */}
    <section id="reviews" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Reviews</div>
          <h2 style={{ fontSize: "clamp(30px,3.5vw,42px)", color: "var(--primary)", letterSpacing: -0.5 }}>4.8 Stars From 1,156+ Reviews</h2>
        </div>
        <div className="rev-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 860, margin: "0 auto" }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: "var(--cream)", borderRadius: 12, padding: "36px 30px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", transition: "all 0.3s" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 48, color: "var(--accent)", opacity: 0.2, lineHeight: 1, marginBottom: 8 }}>"</div>
              <div style={{ marginBottom: 16 }}><Stars /></div>
              <p style={{ fontSize: 15, fontStyle: "italic", color: "var(--text)", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>"{r.text}"</p>
              <div style={{ fontWeight: 700, fontSize: 15, color: "var(--primary)" }}>{r.name}</div>
              <div style={{ fontSize: 13, color: "var(--text-light)", marginTop: 2 }}>{r.src} Review</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 40, fontSize: 15, color: "var(--text-light)" }}>
          Ready to experience the difference? Call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* SERVICE AREAS */}
    <section id="areas" style={{ padding: "100px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div className="gold-line" style={{ margin: "0 auto 20px" }} />
        <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Service Areas</div>
        <h2 style={{ fontSize: "clamp(28px,3vw,38px)", color: "var(--primary)", marginBottom: 48, letterSpacing: -0.5 }}>Serving Central Arkansas From 3 Locations</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {areas.map((a, i) => (
            <span key={i} title={`HVAC plumbing electrical service in ${a}, AR`} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff", border: "1px solid var(--border)", padding: "12px 24px", borderRadius: 30, fontSize: 15, fontWeight: 500, color: "var(--text)", cursor: "default", transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--primary)" }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)" }}>
              <span style={{ opacity: 0.5 }}>{Icons.mapPin}</span> {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: "100px clamp(24px,5vw,64px)", background: "#FFFFFF", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 className="serif" style={{ fontSize: "clamp(32px,4vw,50px)", color: "#2A2A3C", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>
          Need service?<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Call Bert Black.</span>
        </h2>
        <p style={{ fontSize: 17, color: "#5A5A6E", marginBottom: 36, lineHeight: 1.6 }}>
          Four trades, three locations, 45+ years of honest service. Financing available and 24/7 emergency response.
        </p>
        <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "22px 52px", borderRadius: 8, fontSize: 20, fontWeight: 700, boxShadow: "0 6px 28px rgba(200,147,79,0.35)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{ background: "var(--primary)", color: "rgba(255,255,255,0.7)", padding: "64px clamp(24px,5vw,64px) 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="footer-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, paddingBottom: 40 }}>
        <div>
          <div className="serif" style={{ fontSize: 22, color: "#fff", marginBottom: 16 }}><span>Bert Black</span> <span style={{ color: "var(--accent)" }}>Service</span></div>
          <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.7, marginBottom: 16 }}>Multi-trade home service company serving Central Arkansas for over 45 years. HVAC, plumbing, electrical, and generators.</p>
          <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.6 }}>
            1400 Westpark Drive<br />Little Rock, AR 72204<br />
            <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a><br />
            <a href="mailto:dispatch@bertblack.com" style={{ color: "var(--accent)", fontWeight: 600 }}>dispatch@bertblack.com</a>
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 2, marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Services</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {allServiceNames.map(s => <li key={s} style={{ fontSize: 14, opacity: 0.6 }}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 2, marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Areas</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {areas.map(a => <li key={a} style={{ fontSize: 14, opacity: 0.6 }}>{a}</li>)}
          </ul>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 0", maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: 13, opacity: 0.4, flexWrap: "wrap", gap: 8 }}>
        <span>&copy; {yr} Bert Black AC Heating Plumbing Electric. All rights reserved.</span>
        <span>Open 24 Hours &middot; 7 Days a Week</span>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, display: "flex" }}>
      <a href={TEL} style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px", fontSize: 17, fontWeight: 700, boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} Call Bert Black</a>
    </div>
    <div className="mobile-only" style={{ height: 60, display: "block" }} />
  </>);
}

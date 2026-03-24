// Layout: A | Industry: Roofing | City: Little Rock
import { useState, useEffect } from "react";

const PHONE = "(501) 519-9169";
const TEL = "tel:+15015199169";
const EMAIL = "office@heroroofingar.com";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  roof: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V10l7-7 7 7v11"/><path d="M9 21v-6h6v6"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  storm: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>,
  clipboard: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>,
  search: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  award: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  flag: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4C5A9" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrowRight: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" opacity="0.15"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
};

const Stars = () => <span style={{ display: "inline-flex", gap: 2 }}>{[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Residential Roofing", desc: "Complete roofing solutions for Little Rock homeowners. From new installations to full replacements, Hero Roofing delivers quality craftsmanship backed by veteran-level discipline and attention to detail.", icon: Icons.roof },
  { name: "Roof Repair", desc: "Leaks, missing shingles, damaged flashing -- no repair is too small for the Hero team. Paul and his crew diagnose the real problem and fix it right the first time.", icon: Icons.wrench },
  { name: "Storm Damage Restoration", desc: "Arkansas weather hits hard. Hero Roofing responds fast with thorough damage assessments, complete documentation, and expert restoration to get your home protected again.", icon: Icons.storm },
  { name: "Insurance Claims Assistance", desc: "Navigating insurance after storm damage is stressful. Hero Roofing handles the paperwork, meets with adjusters, and fights to make sure your claim is fully covered.", icon: Icons.clipboard },
  { name: "Free Roof Inspections", desc: "Not sure about your roof's condition? Hero Roofing provides honest, no-obligation inspections. If it doesn't need work, they'll tell you straight.", icon: Icons.search },
];

const allServiceNames = ["Residential Roofing", "Roof Repair", "Storm Damage Restoration", "Insurance Claims Assistance", "Free Roof Inspections"];

const areas = ["Little Rock", "North Little Rock", "Sherwood", "Jacksonville", "Benton", "Bryant", "Maumelle", "Conway"];

const reviews = [
  { text: "We used Paul and his crew for a small roofing project that had come up on our housing inspection.", name: "Maddie Ivy", src: "Google" },
  { text: "I had a wonderful experience with Paul at Hero Roofing! Paul was incredibly friendly and went above and beyond.", name: "Jeannie Noel", src: "Google" },
  { text: "Karsyn & Paul were total champions. They made everything about this process simple for us.", name: "Carissa Casey", src: "Google" },
];

const navLinks = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Areas", id: "areas" },
];

export default function HeroRoofingArkansas() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("hero-roofing-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("hero-roofing-auth", "1"); setAuthed(true); }
    else { setPwBad(true); setPw(""); }
  };

  useEffect(() => {
    if (!authed) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [authed]);

  useEffect(() => {
    if (!authed) return;
    const iv = setInterval(() => setReviewIdx(i => (i + 1) % reviews.length), 6000);
    return () => clearInterval(iv);
  }, [authed]);

  useEffect(() => {
    if (!authed) return;
    document.title = "Roofing Little Rock AR | Hero Roofing Arkansas";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Veteran-owned roofing in Little Rock, AR. 5.0 stars, all 14 reviews are 5-star. Licensed & insured. Call (501) 519-9169." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Little Rock" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "RoofingContractor",
      name: "Hero Roofing Arkansas", telephone: "+15015199169",
      email: "office@heroroofingar.com",
      address: { "@type": "PostalAddress", streetAddress: "3520 W 69th St Suite 302", addressLocality: "Little Rock", addressRegion: "AR", postalCode: "72209", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.6994, longitude: -92.3809 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "14", bestRating: "5" },
      description: "Hero Roofing Arkansas is a veteran-owned roofing contractor in Little Rock, AR. Residential roofing, roof repair, storm damage restoration, insurance claims assistance, and free inspections. 5.0 stars with all 14 reviews at 5 stars. Licensed, bonded, insured.",
      areaServed: areas.map(a => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Roofing Services", itemListElement: allServiceNames.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
      memberOf: [],
      sameAs: [],
    }) });
    return () => els.forEach(el => { try { document.head.removeChild(el); } catch (e) {} });
  }, [authed]);

  const handleForm = (e) => { e.preventDefault(); setFormSubmitted(true); };
  const scrollTo = (id) => { setMobileMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const yr = new Date().getFullYear();

  // --- PASSWORD GATE ---
  if (!authed) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
          *{margin:0;padding:0;box-sizing:border-box}
          body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}
        `}</style>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1E1E1E" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "56px 44px", textAlign: "center", maxWidth: 420, width: "92%", boxShadow: "0 32px 80px rgba(0,0,0,.35)" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, marginBottom: 8, fontWeight: 600, letterSpacing: -0.5 }}>
              <span style={{ color: "#1E1E1E" }}>Hero</span> <span style={{ color: "#D4C5A9" }}>Roofing</span>
            </div>
            <p style={{ fontSize: 13, color: "#8A8A9A", letterSpacing: 1, marginBottom: 28, textTransform: "uppercase" }}>Website Preview</p>
            <form onSubmit={submitPw}>
              <input type="password" value={pw} onChange={e => { setPw(e.target.value); setPwBad(false); }} placeholder="••••" autoFocus style={{ width: "100%", padding: 16, fontSize: 20, border: `2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius: 8, textAlign: "center", letterSpacing: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", color: "#1E1E1E" }} />
              {pwBad && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 8, fontWeight: 500 }}>Incorrect password</p>}
              <button type="submit" style={{ width: "100%", padding: 16, marginTop: 20, fontSize: 15, fontWeight: 700, background: "#1E1E1E", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>View Site</button>
            </form>
          </div>
        </div>
      </>
    );
  }

  // --- MAIN SITE ---
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
        :root {
          --primary: #1E1E1E;
          --accent: #D4C5A9;
          --cream: #FAF9F6;
          --white: #FFFFFF;
          --text: #2A2A3C;
          --text-mid: #5A5A6E;
          --text-light: #8A8A9A;
          --border: rgba(0,0,0,0.06);
        }
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { font-family:'DM Sans', sans-serif; color:var(--text); background:var(--cream); -webkit-font-smoothing:antialiased; }
        h1,h2,h3,.serif { font-family:'Playfair Display', serif; font-weight:500; }
        a { text-decoration:none; color:inherit; }
        .gold-line { width:48px; height:2px; background:var(--accent); }
        @media(max-width:900px) {
          .desktop-only { display:none !important; }
          .mobile-only { display:flex !important; }
          .hero-grid { grid-template-columns:1fr !important; }
          .trust-grid { grid-template-columns:1fr 1fr !important; }
          .svc-grid { grid-template-columns:1fr !important; }
          .why-grid { grid-template-columns:1fr !important; }
          .badge-grid { grid-template-columns:1fr 1fr !important; }
          .footer-grid { grid-template-columns:1fr !important; }
          .footer-btm-inner { flex-direction:column; gap:8px; text-align:center; }
          .hero-section { padding-top:140px !important; padding-bottom:64px !important; }
          .section-pad { padding-top:64px !important; padding-bottom:64px !important; }
        }
        @media(min-width:901px) {
          .mobile-only { display:none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "14px clamp(24px,5vw,64px)" : "20px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(30,30,30,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease", boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none" }}>
        <div className="serif" style={{ fontSize: 22, color: scrolled ? "#fff" : "var(--primary)", fontWeight: 600, letterSpacing: -0.5 }}>
          <span>Hero</span> <span style={{ color: "var(--accent)" }}>Roofing</span>
        </div>
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: scrolled ? "rgba(255,255,255,0.8)" : "var(--text-mid)", letterSpacing: 0.5, fontFamily: "'DM Sans',sans-serif", transition: "color 0.2s" }}>{l.label}</button>
          ))}
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, letterSpacing: 0.3, fontFamily: "'DM Sans',sans-serif" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
        <button className="mobile-only" onClick={() => setMobileMenu(true)} style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "#fff" : "var(--primary)", display: "flex" }}>{Icons.menu}</button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div style={{ position: "fixed", inset: 0, background: "var(--primary)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
          <button onClick={() => setMobileMenu(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>{Icons.x}</button>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>{l.label}</button>
          ))}
          <a href={TEL} style={{ background: "var(--accent)", color: "#fff", padding: "18px 48px", borderRadius: 8, fontSize: 18, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>Call {PHONE}</a>
        </div>
      )}

      {/* HERO -- Layout A: Split 55/45, cream bg, form right */}
      <section className="hero-section" style={{ minHeight: "100vh", padding: "160px clamp(24px,5vw,64px) 100px", background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hero-grid" style={{ maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 64, alignItems: "center" }}>
          <div style={{ maxWidth: 560 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,197,169,0.15)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase" }}>5.0 Stars -- All 14 Reviews Are 5-Star</span>
            </div>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, color: "var(--primary)", marginBottom: 24, letterSpacing: -1.5 }}>
              Little Rock's<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Veteran-Owned</span><br />Roofing Team
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 32, maxWidth: 440 }}>
              Hero Roofing delivers honest assessments, expert storm damage restoration, and insurance guidance you can trust. Licensed, bonded, and insured -- with a perfect 5-star record.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
              <Stars />
              <span style={{ fontSize: 14, color: "var(--text-light)", fontStyle: "italic", marginLeft: 4 }}>"Karsyn & Paul were total champions." -- Carissa Casey</span>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, boxShadow: "0 4px 20px rgba(212,197,169,0.3)", fontFamily: "'DM Sans',sans-serif" }}>
                {Icons.phone} Call Hero Roofing
              </a>
              <button onClick={() => scrollTo("services")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--primary)", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid var(--border)", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                View Services {Icons.arrowRight}
              </button>
            </div>
          </div>
          <div>
            <div style={{ background: "#fff", borderRadius: 12, padding: "44px 36px", boxShadow: "0 4px 40px rgba(0,0,0,0.08)", border: "1px solid var(--border)" }}>
              {!formSubmitted ? (
                <form onSubmit={handleForm}>
                  <h3 style={{ fontSize: 26, color: "var(--primary)", marginBottom: 6, fontFamily: "'Playfair Display',serif" }}>Get a Free Quote</h3>
                  <p style={{ fontSize: 14, color: "var(--text-light)", marginBottom: 28 }}>We respond within the hour.</p>
                  <input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required style={{ width: "100%", padding: "16px 18px", fontSize: 15, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 14, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "#FAFAF8" }} />
                  <input type="tel" placeholder="Phone number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required style={{ width: "100%", padding: "16px 18px", fontSize: 15, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 14, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "#FAFAF8" }} />
                  <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} required style={{ width: "100%", padding: "16px 18px", fontSize: 15, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 20, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "#FAFAF8", color: formData.service ? "var(--text)" : "#999", appearance: "none" }}>
                    <option value="">Select a service</option>
                    {allServiceNames.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <button type="submit" style={{ width: "100%", padding: 18, background: "var(--primary)", color: "#fff", border: "none", borderRadius: 6, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", letterSpacing: 0.3 }}>Get My Free Quote</button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(212,197,169,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "var(--accent)" }}>{Icons.check}</div>
                  <h3 style={{ fontSize: 22, color: "var(--primary)", marginBottom: 8, fontFamily: "'Playfair Display',serif" }}>We Got It!</h3>
                  <p style={{ fontSize: 14, color: "var(--text-mid)" }}>We'll call you back shortly. For emergencies,<br />call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 700 }}>{PHONE}</a></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR -- white, horizontal 4-stat row, top/bottom borders */}
      <section style={{ padding: "72px clamp(24px,5vw,64px)", background: "#fff", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="trust-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }}>
          {[
            { num: "5.0", label: "Google Rating", sub: "Perfect score" },
            { num: "14+", label: "Reviews", sub: "All 14 are 5-star" },
            { num: "Veteran", label: "Owned", sub: "Proudly serving" },
            { num: "Licensed", label: "& Insured", sub: "Bonded & covered" },
          ].map((s, i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "var(--primary)", lineHeight: 1, marginBottom: 6, letterSpacing: -1 }}>{s.num}</div>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--text)", marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "var(--text-light)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES -- cream, 3-column card grid */}
      <section id="services" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>What We Do</div>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: -0.5 }}>Roofing Services in Little Rock</h2>
          </div>
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "36px 30px", border: "1px solid var(--border)", transition: "all 0.3s ease", cursor: "default", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; e.currentTarget.querySelector('.card-bar').style.width = "100%"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.querySelector('.card-bar').style.width = "0"; }}>
                <div className="card-bar" style={{ position: "absolute", top: 0, left: 0, width: 0, height: 2, background: "var(--accent)", transition: "width 0.35s ease" }} />
                <div style={{ color: "var(--accent)", marginBottom: 18 }}>{s.icon}</div>
                <h3 style={{ fontSize: 19, color: "var(--primary)", marginBottom: 10, fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>{s.name}</h3>
                <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 40, fontSize: 15, color: "var(--text-light)" }}>
            Questions? Call Paul directly at <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US -- --primary (THE dark section), 2-col: text+credentials left / 2x2 badge grid right */}
      <section id="about" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(135deg, rgba(212,197,169,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="why-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "start", position: "relative" }}>
          <div>
            <div className="gold-line" style={{ marginBottom: 20 }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14, opacity: 0.7 }}>About Hero Roofing</div>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 42px)", lineHeight: 1.15, marginBottom: 28, color: "#fff" }}>Why Little Rock Trusts<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Hero Roofing</span></h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
              Hero Roofing is veteran-owned and operated, bringing military discipline and integrity to every roofing project in Central Arkansas. Paul runs day-to-day operations and is praised by name in every single review -- for his friendliness, his honesty, and his commitment to going above and beyond for homeowners.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 36 }}>
              Whether it's a small repair flagged on a home inspection or a full storm damage restoration with insurance, the Hero team makes the process simple. They specialize in navigating insurance claims and keeping homeowners informed every step of the way. Every response to a review is signed with "HERO SERVICE" -- because that's the standard they hold themselves to.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {["Veteran-Owned & Operated", "Perfect 5.0 Google Rating -- All 14 Reviews 5-Star", "Licensed, Bonded & Insured", "Insurance Claims Specialists", "Paul Praised by Name in Every Review"].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ color: "var(--accent)", flexShrink: 0 }}>{Icons.check}</div>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="badge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, paddingTop: 20 }}>
            {[
              { icon: Icons.flag, title: "Veteran Owned", desc: "Military discipline" },
              { icon: Icons.shield, title: "Licensed & Insured", desc: "Bonded & covered" },
              { icon: Icons.clipboard, title: "Insurance Experts", desc: "Claims guidance" },
              { icon: Icons.award, title: "Perfect 5.0 Stars", desc: "Every review is 5-star" },
            ].map((b, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "28px 22px", textAlign: "center" }}>
                <div style={{ color: "var(--accent)", marginBottom: 12, display: "flex", justifyContent: "center" }}>{b.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: "#fff" }}>{b.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS -- white, centered single-card carousel with dots */}
      <section id="reviews" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Reviews</div>
          <h2 style={{ fontSize: "clamp(30px, 3.5vw, 42px)", color: "var(--primary)", marginBottom: 56, letterSpacing: -0.5 }}>5.0 Stars on Google</h2>
          <div style={{ background: "var(--cream)", borderRadius: 12, padding: "52px 48px", border: "1px solid var(--border)", position: "relative", minHeight: 240 }}>
            <div className="serif" style={{ position: "absolute", top: 20, left: 32, fontSize: 72, color: "var(--accent)", opacity: 0.15, lineHeight: 1 }}>"</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ marginBottom: 20 }}><Stars /></div>
              <p style={{ fontSize: 18, fontStyle: "italic", color: "var(--text)", lineHeight: 1.75, marginBottom: 24, minHeight: 80 }}>
                "{reviews[reviewIdx].text}"
              </p>
              <div style={{ fontWeight: 700, fontSize: 15, color: "var(--primary)" }}>{reviews[reviewIdx].name}</div>
              <div style={{ fontSize: 13, color: "var(--text-light)", marginTop: 2 }}>{reviews[reviewIdx].src} Review</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 28 }}>
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setReviewIdx(i)} style={{ width: 10, height: 10, borderRadius: "50%", background: i === reviewIdx ? "var(--accent)" : "#ddd", border: "none", cursor: "pointer", padding: 0, transition: "background 0.2s" }} />
            ))}
          </div>
          <p style={{ marginTop: 36, fontSize: 15, color: "var(--text-light)" }}>
            Ready to experience the difference? Call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS -- cream, centered flex-wrap pills */}
      <section id="areas" className="section-pad" style={{ padding: "100px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14 }}>Service Areas</div>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 38px)", color: "var(--primary)", marginBottom: 48, letterSpacing: -0.5 }}>Serving Little Rock & Central Arkansas</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {areas.map((a, i) => (
              <span key={i} title={`Roofing in ${a}, AR`} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff", border: "1px solid var(--border)", padding: "12px 24px", borderRadius: 30, fontSize: 15, fontWeight: 500, color: "var(--text)", cursor: "default", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--primary)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}>
                <span style={{ opacity: 0.5 }}>{Icons.mapPin}</span> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA -- white with top border */}
      <section style={{ padding: "100px clamp(24px,5vw,64px)", background: "#fff", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 className="serif" style={{ fontSize: "clamp(32px, 4vw, 50px)", color: "var(--primary)", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>
            Need a new roof?<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Call Hero Roofing.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-mid)", marginBottom: 36, lineHeight: 1.6 }}>
            Veteran-owned. Perfect 5-star record. Licensed, bonded, and insured. Free inspections for every homeowner.
          </p>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "22px 52px", borderRadius: 8, fontSize: 20, fontWeight: 700, boxShadow: "0 6px 28px rgba(212,197,169,0.35)", fontFamily: "'DM Sans',sans-serif" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
      </section>

      {/* FOOTER -- --primary, 3-column */}
      <footer style={{ background: "var(--primary)", color: "rgba(255,255,255,0.7)", padding: "64px clamp(24px,5vw,64px) 0" }}>
        <div className="footer-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, paddingBottom: 40 }}>
          <div>
            <div className="serif" style={{ fontSize: 22, color: "#fff", marginBottom: 16 }}>Hero <span style={{ color: "var(--accent)" }}>Roofing</span></div>
            <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.7, marginBottom: 16 }}>Veteran-owned roofing contractor serving Little Rock and Central Arkansas. Residential roofing, storm damage restoration, insurance claims assistance, and free inspections.</p>
            <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.6 }}>
              3520 W 69th St Suite 302<br />Little Rock, AR 72209<br />
              <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a><br />
              <a href={`mailto:${EMAIL}`} style={{ color: "var(--accent)", fontWeight: 600 }}>{EMAIL}</a>
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
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 0", maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-btm-inner" style={{ display: "flex", justifyContent: "space-between", fontSize: 13, opacity: 0.4 }}>
            <span>&copy; {yr} Hero Roofing Arkansas. All rights reserved.</span>
            <span>Veteran Owned &middot; Licensed &middot; Bonded &middot; Insured</span>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, display: "flex" }}>
        <a href={TEL} style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px", fontSize: 17, fontWeight: 700, boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", fontFamily: "'DM Sans',sans-serif" }}>
          {Icons.phone} Call Hero Roofing
        </a>
      </div>
      <div className="mobile-only" style={{ height: 60, display: "block" }} />
    </>
  );
}

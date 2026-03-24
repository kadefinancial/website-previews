// Layout: A | Industry: Landscaping | City: North Little Rock
import { useState, useEffect } from "react";

const PHONE = "(501) 349-5266";
const TEL = "tel:+15013495266";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  leaf: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 17 3.5s2 2.5 2 7.5a7 7 0 01-7 9z"/><path d="M11 20V10"/><path d="M15 12l-4 2"/></svg>,
  mower: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="12" width="14" height="6" rx="1"/><circle cx="5" cy="18" r="2"/><circle cx="13" cy="18" r="2"/><path d="M16 15h4l2 3"/><path d="M6 12V8l4-4"/><path d="M2 8h10"/></svg>,
  leafFall: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v12"/><path d="M18 3a6 6 0 01-12 5"/><path d="M6 8a6 6 0 0012 5"/><path d="M11 19a4 4 0 01-8 0c0-4 4-4 4-8"/><path d="M17 21a4 4 0 01-4-4c0-4 4-4 4-8"/></svg>,
  snowflake: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/><path d="M12 2l2 4-2 2-2-2z"/><path d="M12 22l-2-4 2-2 2 2z"/><path d="M2 12l4 2 2-2-2-2z"/><path d="M22 12l-4-2-2 2 2 2z"/></svg>,
  landscape: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22L7 8l5 8 4-6 6 12"/><circle cx="16" cy="6" r="3"/></svg>,
  scissors: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>,
  flower: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7.5a4.5 4.5 0 11-4.5 4.5M12 7.5a4.5 4.5 0 104.5 4.5M12 7.5V4"/><path d="M9.5 9.4L7.2 7.8"/><path d="M14.5 9.4l2.3-1.6"/><path d="M7.5 12H4"/><path d="M16.5 12H20"/><path d="M12 16v6"/><path d="M9 20l3-4 3 4"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  award: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  calendar: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  camera: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#B8694A" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrowRight: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" opacity="0.15"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
};

const Stars = () => <span style={{ display: "inline-flex", gap: 2 }}>{[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Lawn Mowing & Maintenance", desc: "Consistent, clean cuts that keep your yard looking sharp all season. Uriah brings the same attention to detail on every visit, every property.", icon: Icons.mower },
  { name: "Leaf Removal", desc: "Thorough leaf cleanup that leaves your yard spotless. Fall or spring, UnderDog gets it done on time and on schedule.", icon: Icons.leafFall },
  { name: "Snow & Ice Removal", desc: "Driveways and walkways cleared fast when winter hits. Four-season reliability means you have one company to call year-round.", icon: Icons.snowflake },
  { name: "Landscaping", desc: "Custom landscaping that transforms your outdoor space. From design to installation, Uriah handles every detail with care.", icon: Icons.landscape },
  { name: "Bush & Hedge Trimming", desc: "Precise shaping and trimming that gives your property clean, defined lines. Regular maintenance keeps hedges healthy and looking their best.", icon: Icons.scissors },
  { name: "Flower Bed Maintenance", desc: "Weeding, mulching, and seasonal planting to keep your flower beds vibrant. A well-kept bed changes the entire look of a home.", icon: Icons.flower },
];

const allServiceNames = ["Lawn Mowing & Maintenance", "Leaf Removal", "Snow & Ice Removal", "Landscaping", "Bush & Hedge Trimming", "Flower Bed Maintenance"];

const areas = ["North Little Rock", "Little Rock", "Sherwood", "Jacksonville"];

const reviews = [
  { text: "I recently hired Underdog Landscaping & Lawn Care LLC, and I couldn't be more impressed with the results.", name: "Miguel Rosado", src: "Google" },
  { text: "Hands down great service with leaf removal in our yard. Showed up when he said he would.", name: "Stephanie Pate", src: "Google" },
  { text: "We found Uriah's company online and called to get an estimate on removing snow and ice from our driveway.", name: "Tom Wood", src: "Google" },
];

const navLinks = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Areas", id: "areas" },
];

export default function UnderdogLandscapingAndLawncareLlc() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("udlc-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("udlc-auth", "1"); setAuthed(true); }
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
    document.title = "Landscaping North Little Rock AR | UnderDog";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Lawn care and landscaping in North Little Rock, AR. Mowing, leaf removal, snow removal, trimming. Call (501) 349-5266." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "North Little Rock" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "LandscapingService",
      name: "UnderDog Landscaping & Lawncare LLC", telephone: "+15013495266",
      address: { "@type": "PostalAddress", streetAddress: "6913 Village Dr #67", addressLocality: "North Little Rock", addressRegion: "AR", postalCode: "72117", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.7695, longitude: -92.2371 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "06:00", closes: "18:00" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "23", bestRating: "5" },
      founder: { "@type": "Person", name: "Uriah" },
      description: "UnderDog Landscaping & Lawncare LLC is a full-service lawn care and landscaping company in North Little Rock, AR. Mowing, leaf removal, snow removal, landscaping, trimming, and flower bed maintenance.",
      areaServed: areas.map(a => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Landscaping Services", itemListElement: allServiceNames.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
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
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1E3A2F" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "56px 44px", textAlign: "center", maxWidth: 420, width: "92%", boxShadow: "0 32px 80px rgba(0,0,0,.35)" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, marginBottom: 8, fontWeight: 600, letterSpacing: -0.5 }}>
              <span style={{ color: "#1E3A2F" }}>UnderDog</span> <span style={{ color: "#B8694A" }}>Landscaping</span>
            </div>
            <p style={{ fontSize: 13, color: "#8A8A9A", letterSpacing: 1, marginBottom: 28, textTransform: "uppercase" }}>Website Preview</p>
            <form onSubmit={submitPw}>
              <input type="password" value={pw} onChange={e => { setPw(e.target.value); setPwBad(false); }} placeholder="••••" autoFocus style={{ width: "100%", padding: 16, fontSize: 20, border: `2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius: 8, textAlign: "center", letterSpacing: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", color: "#1E3A2F" }} />
              {pwBad && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 8, fontWeight: 500 }}>Incorrect password</p>}
              <button type="submit" style={{ width: "100%", padding: 16, marginTop: 20, fontSize: 15, fontWeight: 700, background: "#1E3A2F", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>View Site</button>
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
          --primary: #1E3A2F;
          --accent: #B8694A;
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
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "14px clamp(24px,5vw,64px)" : "20px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(30,58,47,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease", boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none" }}>
        <div className="serif" style={{ fontSize: 22, color: scrolled ? "#fff" : "var(--primary)", fontWeight: 600, letterSpacing: -0.5 }}>
          <span>UnderDog</span> <span style={{ color: "var(--accent)" }}>Landscaping</span>
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(184,105,74,0.1)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase" }}>Four-Season Lawn Care</span>
            </div>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, color: "var(--primary)", marginBottom: 24, letterSpacing: -1.5 }}>
              North Little Rock's<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Most Reliable</span><br />Lawn Care
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 32, maxWidth: 440 }}>
              Owner-operated by Uriah. Mowing, landscaping, leaf removal, and snow service. Six days a week, four seasons a year. Zero negative reviews.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
              <Stars />
              <span style={{ fontSize: 14, color: "var(--text-light)", fontStyle: "italic", marginLeft: 4 }}>"Hands down great service. Showed up when he said he would." — Stephanie Pate</span>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, boxShadow: "0 4px 20px rgba(184,105,74,0.3)", fontFamily: "'DM Sans',sans-serif" }}>
                {Icons.phone} Call UnderDog
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
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(184,105,74,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "var(--accent)" }}>{Icons.check}</div>
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
            { num: "4.9", label: "Google Rating", sub: "Consistently excellent" },
            { num: "23+", label: "Reviews", sub: "Zero negative" },
            { num: "6", label: "Days a Week", sub: "Mon-Sat, 6AM-6PM" },
            { num: "4", label: "Season Service", sub: "Lawn, leaf, snow & more" },
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
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 44px)", color: "var(--primary)", letterSpacing: -0.5 }}>Lawn Care Services in North Little Rock</h2>
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
            Questions? Call Uriah directly at <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US -- --primary (THE dark section), 2-col: text+credentials left / 2x2 badge grid right */}
      <section id="about" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(135deg, rgba(184,105,74,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="why-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "start", position: "relative" }}>
          <div>
            <div className="gold-line" style={{ marginBottom: 20 }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 14, opacity: 0.7 }}>About UnderDog</div>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 42px)", lineHeight: 1.15, marginBottom: 28, color: "#fff" }}>Why North Little Rock Trusts<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>UnderDog Landscaping</span></h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
              Uriah runs UnderDog the way you want every contractor to operate: he shows up when he says he will, does the work right, and follows through. As a solo operator covering North Little Rock, Little Rock, Sherwood, and Jacksonville, every job gets his direct attention. No crews you have never met. No middlemen.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: 36 }}>
              What sets Uriah apart is his digital engagement. He responds to every single Google review, posts regular business updates, and uploads photos of his work. That level of care in how he presents himself online reflects how he treats your property. Customers describe him as hardworking and quality-first. Four-season service means one call covers lawn care, leaf cleanup, landscaping, and snow removal year-round.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {["4.9 Stars with Zero Negative Reviews", "Responds to Every Google Review", "Owner-Operated by Uriah", "Four-Season Service: Lawn to Snow", "Mon-Sat, 6AM-6PM Availability", "Regular Google Updates & Photos"].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ color: "var(--accent)", flexShrink: 0 }}>{Icons.check}</div>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="badge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, paddingTop: 20 }}>
            {[
              { icon: Icons.award, title: "4.9 Stars", desc: "23 reviews, zero negative" },
              { icon: Icons.calendar, title: "Four Seasons", desc: "Lawn, leaf, snow & more" },
              { icon: Icons.shield, title: "Quality First", desc: "Hardworking, takes pride" },
              { icon: Icons.camera, title: "Digitally Active", desc: "Updates, photos, replies" },
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
          <h2 style={{ fontSize: "clamp(30px, 3.5vw, 42px)", color: "var(--primary)", marginBottom: 56, letterSpacing: -0.5 }}>4.9 Stars on Google</h2>
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
          <h2 style={{ fontSize: "clamp(28px, 3vw, 38px)", color: "var(--primary)", marginBottom: 48, letterSpacing: -0.5 }}>Serving North Little Rock & Central Arkansas</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {areas.map((a, i) => (
              <span key={i} title={`Landscaping in ${a}, AR`} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff", border: "1px solid var(--border)", padding: "12px 24px", borderRadius: 30, fontSize: 15, fontWeight: 500, color: "var(--text)", cursor: "default", transition: "all 0.25s" }}
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
            Need lawn care?<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Call UnderDog.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-mid)", marginBottom: 36, lineHeight: 1.6 }}>
            Owner-operated by Uriah. 4.9 stars with zero negative reviews. Lawn mowing, landscaping, leaf removal, and snow service — all four seasons.
          </p>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "20px 44px", borderRadius: 6, fontSize: 18, fontWeight: 700, boxShadow: "0 4px 20px rgba(184,105,74,0.3)", fontFamily: "'DM Sans',sans-serif" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
      </section>

      {/* FOOTER -- --primary, 3-column */}
      <footer style={{ background: "var(--primary)", color: "#fff", padding: "80px clamp(24px,5vw,64px) 40px" }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 0.85fr 0.85fr", gap: 60, marginBottom: 60 }}>
          <div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, marginBottom: 16 }}>
              <span style={{ color: "#fff" }}>UnderDog</span> <span style={{ color: "var(--accent)" }}>Landscaping</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: 20, maxWidth: 320 }}>
              Full-service lawn care and landscaping in North Little Rock, AR. Owner-operated by Uriah. Four-season service for residential and commercial properties.
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
              6913 Village Dr #67<br />North Little Rock, AR 72117
            </p>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--accent)", fontWeight: 600, fontSize: 15, marginTop: 12 }}>
              {Icons.phone} {PHONE}
            </a>
          </div>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 20, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>Services</h4>
            {allServiceNames.map((s, i) => (
              <p key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 10, lineHeight: 1.5 }}>{s}</p>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 20, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>Areas</h4>
            {areas.map((a, i) => (
              <p key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 10, lineHeight: 1.5 }}>{a}</p>
            ))}
            <div style={{ marginTop: 20 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>Hours</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>Mon - Sat: 6AM - 6PM</p>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28 }}>
          <div className="footer-btm-inner" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>&copy; {yr} UnderDog Landscaping & Lawncare LLC. All rights reserved.</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>North Little Rock, AR</p>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, display: "none" }}>
        <a href={TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 24px", fontSize: 17, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", textDecoration: "none" }}>
          {Icons.phone} Call UnderDog — {PHONE}
        </a>
      </div>

      {/* Extra bottom padding on mobile for floating CTA */}
      <div className="mobile-only" style={{ height: 60, display: "none" }} />
    </>
  );
}

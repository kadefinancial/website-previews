// Layout: C | Industry: Plumber | City: Fort Smith
import { useState, useEffect } from "react";

// --- SVG Icon Components (stroke-based, no emojis) ---
const Icons = {
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  wrench: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
  ),
  flame: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>
  ),
  home: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  building: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
  ),
  droplet: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>
  ),
  tool: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/><path d="M15 2v5h5"/></svg>
  ),
  check: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  star: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#C8934F" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  mapPin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  menu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  ),
  x: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
  ),
  award: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  globe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  ),
};

const Stars = () => (
  <span style={{ display: "inline-flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}
  </span>
);

// --- Data ---
const PHONE = "(479) 785-4704";
const PHONE_TEL = "tel:+14797854704";
const BIZ = "Tri-State Plumbing & Heating";

const services = [
  { name: "Plumbing Repair & Installation", desc: "From burst pipes and stubborn leaks to complete fixture installations, our team handles every plumbing repair with precision. We diagnose the problem, explain your options, and get it fixed right the first time.", icon: Icons.wrench },
  { name: "Heating System Service", desc: "Furnace repairs, boiler maintenance, and heating system installations to keep your home warm through every Arkansas winter. Our dual-trade expertise means one call handles both your plumbing and heating needs.", icon: Icons.flame },
  { name: "Residential Plumbing", desc: "Complete plumbing service for homeowners across the Tri-State area. Whether it's a running toilet, a water heater replacement, or a full re-pipe, we treat your home like our own.", icon: Icons.home },
  { name: "Commercial Plumbing", desc: "Reliable plumbing service for businesses, offices, and commercial properties throughout Fort Smith and the River Valley. Minimal disruption, professional results, and work you can count on.", icon: Icons.building },
  { name: "Faucet & Sink Installation", desc: "Upgrading your kitchen or bathroom? We install faucets, sinks, and fixtures with clean, leak-free connections. Every installation is tested and guaranteed before we leave.", icon: Icons.droplet },
  { name: "Fixture Repair", desc: "Dripping faucets, loose handles, and worn-out valves repaired quickly and affordably. Small fixes done right prevent bigger problems down the road — and save you money.", icon: Icons.tool },
];

const allServices = [
  "Plumbing Repair & Installation", "Heating System Service", "Residential Plumbing",
  "Commercial Plumbing", "Faucet & Sink Installation", "Fixture Repair",
];

const reviews = [
  { text: "Great great job", name: "Bo Fleming", src: "Google" },
  { text: "Loved it", name: "Lori Potter", src: "Google" },
];

const areas = ["Fort Smith", "Van Buren", "Alma", "Greenwood", "Barling", "River Valley", "Western Arkansas", "Eastern Oklahoma"];

// --- Main Component ---
export default function TriStatePlumbingAndHeating() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("tri-state-ph-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "roof") { sessionStorage.setItem("tri-state-ph-auth", "1"); setAuthed(true); }
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
    document.title = "Plumber Fort Smith AR | Tri-State Plumbing & Heating";
    const els = [];
    const add = (tag, attrs) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "textContent") el.textContent = v;
        else el.setAttribute(k, v);
      });
      document.head.appendChild(el);
      els.push(el);
    };
    add("meta", { name: "description", content: "Tri-State Plumbing & Heating — 5.0 stars on Google. Plumbing & heating service in Fort Smith, AR. Call (479) 785-4704." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Fort Smith" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      name: "Tri-State Plumbing & Heating",
      telephone: "+14797854704",
      address: { "@type": "PostalAddress", streetAddress: "4514 Victoria Dr", addressLocality: "Fort Smith", addressRegion: "AR", postalCode: "72904", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 35.3859, longitude: -94.3985 },
      openingHoursSpecification: [],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "4", bestRating: "5" },
      description: "Tri-State Plumbing & Heating provides professional plumbing and heating services in Fort Smith, AR and the River Valley. 5.0 stars on Google.",
      areaServed: areas.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Plumbing & Heating Services", itemListElement: allServices.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
      memberOf: [],
      sameAs: [],
    })});
    return () => els.forEach((el) => { try { document.head.removeChild(el); } catch(e) {} });
  }, [authed]);

  const handleForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollTo = (id) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Reviews", id: "reviews" },
    { label: "Areas", id: "areas" },
  ];

  // --- PASSWORD GATE ---
  if (!authed) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
          *{margin:0;padding:0;box-sizing:border-box}
          body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}
        `}</style>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1C2B41" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "56px 44px", textAlign: "center", maxWidth: 420, width: "92%", boxShadow: "0 32px 80px rgba(0,0,0,.35)" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 600, letterSpacing: -0.5, marginBottom: 4 }}>
              <span style={{ color: "#1C2B41" }}>Tri-State</span> <span style={{ color: "#C8934F" }}>Plumbing</span>
            </div>
            <p style={{ fontSize: 13, color: "#8A8A9A", letterSpacing: 1, marginBottom: 28, lineHeight: 1.5, textTransform: "uppercase" }}>Website Preview</p>
            <form onSubmit={submitPw}>
              <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setPwBad(false); }} placeholder="••••" autoFocus style={{ width: "100%", padding: 16, fontSize: 20, border: `2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius: 8, textAlign: "center", letterSpacing: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", color: "#1e293b", transition: "border .2s" }} />
              {pwBad && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 8, fontWeight: 500 }}>Incorrect password</p>}
              <button type="submit" style={{ width: "100%", padding: 16, marginTop: 20, fontSize: 15, fontWeight: 700, letterSpacing: .3, background: "#1C2B41", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>View Site</button>
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
          --primary: #1C2B41;
          --accent: #C8934F;
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
        .gold-line { width:48px; height:2px; background:var(--accent); margin:0 auto 20px; }
        @media(max-width:900px) {
          .desktop-only { display:none !important; }
          .mobile-only { display:flex !important; }
          .hero-grid { grid-template-columns:1fr !important; }
          .trust-grid { grid-template-columns:1fr 1fr !important; }
          .zigzag-row { flex-direction:column !important; text-align:center; }
          .zigzag-row > div { max-width:100% !important; }
          .why-grid { grid-template-columns:1fr !important; }
          .badge-grid { grid-template-columns:1fr 1fr !important; }
          .footer-grid { grid-template-columns:1fr !important; text-align:center; }
          .footer-btm-inner { flex-direction:column; gap:8px; text-align:center; }
          .section-pad { padding-top:64px !important; padding-bottom:64px !important; }
          .hero-pad { padding-top:120px !important; padding-bottom:64px !important; }
        }
        @media(min-width:901px) {
          .mobile-only { display:none !important; }
        }
      `}</style>

      {/* NAV — starts transparent with WHITE text on dark hero */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "14px clamp(24px,5vw,64px)" : "20px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(28,43,65,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease", boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none" }}>
        <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, color: "#fff" }}>
          <span>Tri-State</span><span style={{ color: "var(--accent)", marginLeft: 6 }}>Plumbing</span>
        </div>
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: scrolled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.85)", letterSpacing: 0.5, fontFamily: "'DM Sans',sans-serif", transition: "color 0.2s" }}>{l.label}</button>
          ))}
          <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, letterSpacing: 0.3, fontFamily: "'DM Sans',sans-serif" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
        <button className="mobile-only" onClick={() => setMobileMenu(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", display: "flex" }}>{Icons.menu}</button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div style={{ position: "fixed", inset: 0, background: "var(--primary)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
          <button onClick={() => setMobileMenu(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>{Icons.x}</button>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>{l.label}</button>
          ))}
          <a href={PHONE_TEL} style={{ background: "var(--accent)", color: "#fff", padding: "18px 48px", borderRadius: 8, fontSize: 18, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>Call {PHONE}</a>
        </div>
      )}

      {/* HERO — Layout C: DARK (--primary bg), white text, form on right */}
      <section className="hero-pad" style={{ minHeight: "100vh", padding: "160px clamp(24px,5vw,64px) 110px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hero-grid" style={{ maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Left — text */}
          <div style={{ maxWidth: 560 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)" }}>Plumbing & Heating Experts</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px,5vw,68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "#fff", marginBottom: 24 }}>
              Fort Smith's{" "}<br/>
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Trusted Plumber</em><br/>
              Three States Strong
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 32, maxWidth: 480 }}>
              Tri-State Plumbing & Heating covers plumbing and heating across the River Valley — Fort Smith through western Arkansas and into eastern Oklahoma. One team, two trades, three states of coverage.
            </p>
            {/* Star row with hero quote */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
              <Stars />
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>"Great great job"</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>- Bo Fleming</span>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, letterSpacing: 0.3, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(200,147,79,0.3)", transition: "transform 0.2s" }}>
                {Icons.phone} Call Now
              </a>
              <button onClick={() => scrollTo("services")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 700, letterSpacing: 0.3, fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>
                Our Services
              </button>
            </div>
          </div>
          {/* Right — form card (Layout C: extra shadow) */}
          <div style={{ background: "#fff", borderRadius: 12, padding: "40px 32px", boxShadow: "0 8px 48px rgba(0,0,0,0.3)", border: "1px solid var(--border)" }}>
            {!formSubmitted ? (
              <>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Get a Free Quote</h3>
                <p style={{ fontSize: 14, color: "var(--text-light)", marginBottom: 24 }}>We respond within the hour.</p>
                <form onSubmit={handleForm}>
                  <input type="text" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: "100%", padding: "14px 16px", marginBottom: 14, background: "var(--cream)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 16, fontFamily: "'DM Sans',sans-serif", outline: "none" }} />
                  <input type="tel" placeholder="Phone number" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width: "100%", padding: "14px 16px", marginBottom: 14, background: "var(--cream)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 16, fontFamily: "'DM Sans',sans-serif", outline: "none" }} />
                  <select required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} style={{ width: "100%", padding: "14px 16px", marginBottom: 20, background: "var(--cream)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 16, fontFamily: "'DM Sans',sans-serif", outline: "none", color: formData.service ? "var(--text)" : "var(--text-light)" }}>
                    <option value="" disabled>Select a service</option>
                    {allServices.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <button type="submit" style={{ width: "100%", padding: "16px", background: "var(--primary)", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, letterSpacing: 0.3, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Get My Free Quote</button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>We Got It!</h3>
                <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.6 }}>We'll be in touch shortly.<br/>For emergencies, call <a href={PHONE_TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a></p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRUST BAR — Layout C: white, no borders needed (dark-to-white transition) */}
      <section style={{ background: "var(--white)", padding: "48px clamp(24px,5vw,64px)" }}>
        <div className="trust-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }}>
          {[
            { num: "5.0", label: "Google Rating", desc: "Perfect score" },
            { num: "Tri-State", label: "AR/OK Coverage", desc: "Multi-state service" },
            { num: "Dual", label: "Plumbing + Heating", desc: "Two trades, one call" },
            { num: "Established", label: "Local Business", desc: "Fort Smith based" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "16px 0" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: i === 0 ? "clamp(28px,3vw,40px)" : "clamp(22px,2.5vw,32px)", fontWeight: 600, color: "var(--primary)", letterSpacing: -0.5, marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--text)", marginBottom: 4, fontFamily: "'DM Sans',sans-serif" }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "var(--text-light)" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — Layout C: cream bg, zigzag alternating rows */}
      <section id="services" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>What We Do</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)" }}>Plumbing & Heating in Fort Smith</h2>
          </div>
          {services.map((svc, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={i}>
                <div className="zigzag-row" style={{ display: "flex", flexDirection: isEven ? "row-reverse" : "row", alignItems: "center", gap: "clamp(32px,5vw,80px)", padding: "40px 0" }}>
                  <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", gap: 16, maxWidth: 280 }}>
                    <div style={{ color: "var(--accent)", flexShrink: 0 }}>{svc.icon}</div>
                    <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(18px,2vw,22px)", fontWeight: 600, lineHeight: 1.3, color: "var(--primary)" }}>{svc.name}</h3>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 520 }}>{svc.desc}</p>
                  </div>
                </div>
                {i < services.length - 1 && (
                  <div style={{ height: 1, background: "var(--border)" }} />
                )}
              </div>
            );
          })}
          <p style={{ textAlign: "center", marginTop: 48, fontSize: 15, color: "var(--text-mid)" }}>
            Questions? Call our team directly at <a href={PHONE_TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US — Layout C: Light cream bg with pull quote, 2-col with badge grid */}
      <section id="about" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>Why Tri-State</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)" }}>Two Trades, One Team, Three States</h2>
          </div>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            {/* Left — story + credentials */}
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 20 }}>
                Tri-State Plumbing & Heating is a Fort Smith-based team that handles both plumbing and heating under one roof. Based on Victoria Drive, our crew serves the entire River Valley — from Greenwood to Van Buren and across the state line into eastern Oklahoma. When you call Tri-State, you get experienced professionals who know both trades inside and out.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 32 }}>
                With a perfect 5.0-star Google rating and a reputation built on quality work, our team delivers the kind of reliable, honest service that Fort Smith homeowners and businesses deserve. No subcontractors, no runaround — just skilled tradespeople who show up, do the job right, and stand behind their work.
              </p>
              {/* Pull quote */}
              <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 24, marginBottom: 36 }}>
                <p style={{ fontSize: 18, fontStyle: "italic", lineHeight: 1.7, color: "var(--primary)", fontFamily: "'Playfair Display',serif" }}>
                  "Loved it"
                </p>
                <p style={{ fontSize: 14, color: "var(--text-light)", marginTop: 8, fontFamily: "'DM Sans',sans-serif" }}>- Lori Potter, Google Review</p>
              </div>
              {/* Credentials */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Perfect 5.0-Star Google Rating",
                  "Serving Arkansas, Oklahoma & Beyond",
                  "Dual-Trade: Plumbing & Heating",
                  "Residential & Commercial Service",
                  "Locally Owned in Fort Smith",
                  "Call for Availability — Prompt Response",
                ].map((cred, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>{Icons.check}</span>
                    <span style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — badge grid */}
            <div className="badge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { icon: Icons.shield, title: "Perfect Rating", desc: "A flawless 5.0-star Google rating from every customer. Our team earns trust on every job with quality work and honest service." },
                { icon: Icons.globe, title: "Tri-State Coverage", desc: "Serving Fort Smith, the River Valley, western Arkansas, and eastern Oklahoma. One call covers the entire region — no matter which side of the state line you're on." },
                { icon: Icons.award, title: "Dual-Trade Experts", desc: "Plumbing and heating handled by the same skilled team. One company, two essential trades — saving you time and the hassle of coordinating multiple contractors." },
                { icon: Icons.users, title: "Local Team", desc: "Based right here on Victoria Drive in Fort Smith. Our crew knows the River Valley and takes pride in serving the community we call home." },
              ].map((b, i) => (
                <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease" }}>
                  <div style={{ color: "var(--accent)", marginBottom: 16 }}>{b.icon}</div>
                  <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, fontWeight: 600, color: "var(--primary)", marginBottom: 8, lineHeight: 1.3 }}>{b.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-mid)" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS — Layout C: white bg, single LARGE testimonial */}
      <section id="reviews" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div className="gold-line" />
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>Customer Reviews</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 56 }}>5.0 Stars on Google</h2>
          {/* Large featured review — Bo Fleming */}
          <div style={{ position: "relative", padding: "48px 40px", background: "var(--white)", borderRadius: 12 }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="var(--accent)" stroke="none" style={{ opacity: 0.15 }} aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 5v3z"/></svg>
            </div>
            <div style={{ marginBottom: 20, marginTop: 24 }}>
              <Stars />
            </div>
            <p style={{ fontSize: 20, lineHeight: 1.8, color: "var(--text)", fontStyle: "italic", fontFamily: "'Playfair Display',serif", marginBottom: 28 }}>
              "Great great job"
            </p>
            <p style={{ fontSize: 17, fontWeight: 700, color: "var(--primary)" }}>Bo Fleming</p>
            <p style={{ fontSize: 13, color: "var(--text-light)", marginTop: 4 }}>Google Review</p>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-light)", marginTop: 32, marginBottom: 40 }}>One of 4 five-star reviews on Google</p>

          {/* Secondary review — Lori Potter */}
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <div style={{ padding: "32px 36px", background: "var(--cream)", borderRadius: 12, border: "1px solid var(--border)", textAlign: "left" }}>
              <div style={{ marginBottom: 12 }}>
                <Stars />
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)", fontStyle: "italic", marginBottom: 16 }}>
                "{reviews[1].text}"
              </p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "var(--primary)" }}>{reviews[1].name}</p>
              <p style={{ fontSize: 13, color: "var(--text-light)", marginTop: 2 }}>{reviews[1].src} Review</p>
            </div>
          </div>

          <p style={{ fontSize: 15, color: "var(--text-mid)", marginTop: 32 }}>
            Ready to experience the difference? Call <a href={PHONE_TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS — cream bg, centered flex-wrap pills */}
      <section id="areas" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div className="gold-line" />
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>Service Areas</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 56 }}>Serving Fort Smith & the River Valley</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {areas.map((area, i) => (
              <span key={i} title={`Plumbing in ${area}${area === "Eastern Oklahoma" || area === "Western Arkansas" || area === "River Valley" ? "" : ", AR"}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: 100, fontSize: 14, fontWeight: 500, color: "var(--text)", cursor: "default", transition: "all 0.2s ease", fontFamily: "'DM Sans',sans-serif" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--white)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}
              >
                <span style={{ color: "var(--accent)", display: "inline-flex" }}>{Icons.mapPin}</span>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Layout C: white with top border, centered, accent button */}
      <section className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 20 }}>
            Got a plumbing or heating problem?<br/><em style={{ color: "var(--accent)", fontStyle: "italic" }}>Call Tri-State.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
            Professional plumbing and heating service, honest pricing, and a team that shows up ready to work. Tri-State Plumbing & Heating serves the entire River Valley.
          </p>
          <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 48px", borderRadius: 6, fontSize: 18, fontWeight: 700, letterSpacing: 0.3, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(200,147,79,0.3)", transition: "transform 0.2s" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
      </section>

      {/* FOOTER — --primary bg, 3-column */}
      <footer style={{ background: "var(--primary)", padding: "80px clamp(24px,5vw,64px) 40px", color: "rgba(255,255,255,0.75)" }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Col 1: wordmark + info */}
          <div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, marginBottom: 16, color: "#fff" }}>
              <span>Tri-State</span><span style={{ color: "var(--accent)", marginLeft: 6 }}>Plumbing</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 20, maxWidth: 300 }}>
              Professional plumbing and heating service for Fort Smith, the River Valley, western Arkansas, and eastern Oklahoma.
            </p>
            <p style={{ fontSize: 14, marginBottom: 8 }}>4514 Victoria Dr, Fort Smith, AR 72904</p>
            <a href={PHONE_TEL} style={{ fontSize: 14, color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
          </div>
          {/* Col 2: Services */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#fff", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map((s, i) => (
                <span key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{s.name}</span>
              ))}
            </div>
          </div>
          {/* Col 3: Areas */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#fff", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Areas</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {areas.map((a, i) => (
                <span key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{a}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24 }}>
          <div className="footer-btm-inner" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{new Date().getFullYear()} Tri-State Plumbing & Heating. All rights reserved.</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Fort Smith, AR</p>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA — mobile only, fixed bottom */}
      <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, display: "none" }}>
        <a href={PHONE_TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 24px", fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", textAlign: "center" }}>
          {Icons.phone} Call Now - {PHONE}
        </a>
      </div>

      {/* Extra bottom padding on mobile for floating CTA */}
      <div className="mobile-only" style={{ height: 60, display: "none" }} />
    </>
  );
}

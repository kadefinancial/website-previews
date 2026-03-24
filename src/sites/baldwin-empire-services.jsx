// Layout: C | Industry: HVAC | City: North Little Rock
import { useState, useEffect } from "react";

// --- SVG Icon Components (no emojis) ---
const Icons = {
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  wind: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1111 8H2"/><path d="M12.6 19.4A2 2 0 1014 16H2"/></svg>
  ),
  building: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
  ),
  droplets: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 14.1c1.44 0 2.6-1.19 2.6-2.64 0-.75-.37-1.47-1.11-2.08S12.73 7.89 12.56 7c-.19.94-.74 1.85-1.49 2.45S10 10.72 10 11.46c0 1.45 1.17 2.64 2.56 2.64z"/><path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z"/></svg>
  ),
  airQuality: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2h8l4 10H4L8 2z"/><path d="M12 12v6"/><path d="M8 22h8"/><path d="M7 12l-2 4"/><path d="M17 12l2 4"/><circle cx="12" cy="7" r="2"/></svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
  ),
  clipboard: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>
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
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  ),
  award: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  ),
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
  ),
};

const Stars = () => (
  <span style={{ display: "inline-flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}
  </span>
);

// --- Data ---
const PHONE = "(501) 508-6152";
const PHONE_TEL = "tel:+15015086152";
const EMAIL = "bobby@baldwinempireservices.com";

const services = [
  { name: "Residential HVAC", desc: "Complete heating and cooling solutions for your home. From installations to repairs, Bobby and his team keep North Little Rock families comfortable year-round.", icon: Icons.wind },
  { name: "Commercial HVAC", desc: "Reliable commercial heating and cooling service sized for your business. Prompt response times and expert diagnostics to minimize downtime.", icon: Icons.building },
  { name: "Irrigation & Sprinkler Systems", desc: "Professional sprinkler installation, repair, and seasonal maintenance. Keep your lawn and landscape thriving with a system designed for Arkansas conditions.", icon: Icons.droplets },
  { name: "Indoor Air Quality", desc: "Breathe easier with air purification, filtration upgrades, and humidity control solutions tailored to your home or business.", icon: Icons.airQuality },
  { name: "Maintenance Plans", desc: "Preventive care that extends system life and catches small issues before they become expensive problems. Scheduled tune-ups for total peace of mind.", icon: Icons.clipboard },
  { name: "Commercial Service Agreements", desc: "Customized maintenance agreements for commercial properties. Priority scheduling, discounted rates, and consistent care for your building systems.", icon: Icons.shield },
];

const reviews = [
  { text: "Bobby Baldwin leads an impeccable team. Their attention to detail and commitment to quality is unmatched. From start to finish, the experience was seamless and professional.", name: "Allison Greenwood", src: "Google" },
  { text: "Great experience from start to finish. Preston was our technician and he was knowledgeable, professional, and took the time to explain everything. Highly recommend Baldwin Empire for anyone needing HVAC work done right.", name: "Tanner Kilburn", src: "Google" },
  { text: "Professional and reliable HVAC service. Baldwin Empire Services delivered exactly what they promised, on time and at a fair price. We'll be calling them for all our future needs.", name: "CTK Construction LLC", src: "Google" },
];

const areas = ["North Little Rock", "Sherwood", "Little Rock", "Jacksonville", "Cabot", "Maumelle", "Conway", "Benton"];

// --- Main Component ---
export default function BaldwinEmpireServices() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("baldwin-empire-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("baldwin-empire-auth", "1"); setAuthed(true); }
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
    document.title = "HVAC & Irrigation North Little Rock AR | Baldwin Empire Services";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Family-owned HVAC & irrigation in North Little Rock, AR. 5.0 stars, 100+ reviews. Call (501) 508-6152 for a free quote." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "North Little Rock" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "HVACBusiness",
      name: "Baldwin Empire Services", telephone: "+15015086152",
      address: { "@type": "PostalAddress", streetAddress: "1906 AR-161", addressLocality: "North Little Rock", addressRegion: "AR", postalCode: "72117", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.802, longitude: -92.217 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:30", closes: "17:30" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "100", bestRating: "5" },
      founder: { "@type": "Person", name: "Bobby Baldwin" },
      description: "Baldwin Empire Services is a family-owned HVAC and irrigation company in North Little Rock, AR, serving central Arkansas with residential and commercial solutions.",
      areaServed: areas.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "HVAC & Irrigation Services", itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })) },
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
        <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#1C2B41" }}>
          <div style={{ background:"#fff", borderRadius:16, padding:"56px 44px", textAlign:"center", maxWidth:420, width:"92%", boxShadow:"0 32px 80px rgba(0,0,0,.35)" }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:600, letterSpacing:-0.5, marginBottom:4 }}>
              <span style={{ color:"#1C2B41" }}>Baldwin Empire</span> <span style={{ color:"#C8934F" }}>Services</span>
            </div>
            <p style={{ fontSize:13, color:"#8A8A9A", letterSpacing:1, marginBottom:28, lineHeight:1.5, textTransform:"uppercase" }}>Website Preview</p>
            <form onSubmit={submitPw}>
              <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setPwBad(false); }} placeholder="••••" autoFocus style={{ width:"100%", padding:16, fontSize:20, border:`2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius:8, textAlign:"center", letterSpacing:6, outline:"none", fontFamily:"'DM Sans',sans-serif", color:"#1e293b", transition:"border .2s" }} />
              {pwBad && <p style={{ color:"#ef4444", fontSize:12, marginTop:8, fontWeight:500 }}>Incorrect password</p>}
              <button type="submit" style={{ width:"100%", padding:16, marginTop:20, fontSize:15, fontWeight:700, letterSpacing:.3, background:"#1C2B41", color:"#fff", border:"none", borderRadius:8, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>View Site</button>
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

      {/* NAV -- starts transparent with WHITE text on dark hero */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, padding: scrolled ? "14px clamp(24px,5vw,64px)" : "20px clamp(24px,5vw,64px)", display:"flex", alignItems:"center", justifyContent:"space-between", background: scrolled ? "rgba(28,43,65,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition:"all 0.4s ease", boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none" }}>
        <div className="serif" style={{ fontSize:22, fontWeight:600, letterSpacing:-0.5, color:"#fff" }}>
          <span>Baldwin Empire</span><span style={{ color:"var(--accent)", marginLeft:6 }}>Services</span>
        </div>
        <div className="desktop-only" style={{ display:"flex", alignItems:"center", gap:36 }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:14, fontWeight:600, color: scrolled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.85)", letterSpacing:0.5, fontFamily:"'DM Sans',sans-serif", transition:"color 0.2s" }}>{l.label}</button>
          ))}
          <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--accent)", color:"#fff", padding:"10px 24px", borderRadius:6, fontSize:14, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
        <button className="mobile-only" onClick={() => setMobileMenu(true)} style={{ background:"none", border:"none", cursor:"pointer", color:"#fff", display:"flex" }}>{Icons.menu}</button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div style={{ position:"fixed", inset:0, background:"var(--primary)", zIndex:9999, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:28 }}>
          <button onClick={() => setMobileMenu(false)} style={{ position:"absolute", top:20, right:24, background:"none", border:"none", color:"#fff", cursor:"pointer" }}>{Icons.x}</button>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background:"none", border:"none", color:"#fff", fontSize:22, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>{l.label}</button>
          ))}
          <a href={PHONE_TEL} style={{ background:"var(--accent)", color:"#fff", padding:"18px 48px", borderRadius:8, fontSize:18, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>Call {PHONE}</a>
        </div>
      )}

      {/* HERO -- Layout C: DARK (--primary bg), white text, form on right */}
      <section className="hero-pad" style={{ minHeight:"100vh", padding:"160px clamp(24px,5vw,64px) 110px", background:"var(--primary)", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div className="hero-grid" style={{ maxWidth:1200, width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          {/* Left -- text */}
          <div style={{ maxWidth:560 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.1)", padding:"8px 18px", borderRadius:4, marginBottom:28 }}>
              <div style={{ width:6, height:6, borderRadius:"50%", background:"var(--accent)" }} />
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--accent)" }}>Family Owned</span>
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(40px,5vw,68px)", lineHeight:1.05, letterSpacing:-1.5, color:"#fff", marginBottom:24 }}>
              North Little Rock's{" "}<br/>
              <em style={{ color:"var(--accent)", fontStyle:"italic" }}>HVAC & Irrigation</em><br/>
              Experts
            </h1>
            <p style={{ fontSize:18, lineHeight:1.7, color:"rgba(255,255,255,0.75)", marginBottom:32, maxWidth:480 }}>
              Bobby Baldwin and his family deliver honest HVAC and sprinkler service backed by generations of technical experience. Licensed, bonded, insured -- and just added vehicle #4.
            </p>
            {/* Star row with hero quote */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32, flexWrap:"wrap" }}>
              <Stars />
              <span style={{ fontSize:14, color:"rgba(255,255,255,0.7)", fontStyle:"italic" }}>"Bobby Baldwin leads an impeccable team."</span>
              <span style={{ fontSize:13, color:"rgba(255,255,255,0.5)" }}>- Allison Greenwood</span>
            </div>
            <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
              <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"18px 36px", borderRadius:6, fontSize:16, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 4px 20px rgba(200,147,79,0.3)", transition:"transform 0.2s" }}>
                {Icons.phone} Call Bobby Now
              </a>
              <button onClick={() => scrollTo("services")} style={{ display:"inline-flex", alignItems:"center", gap:8, background:"transparent", border:"1.5px solid rgba(255,255,255,0.3)", color:"#fff", padding:"18px 32px", borderRadius:6, fontSize:16, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif", cursor:"pointer" }}>
                Our Services
              </button>
            </div>
          </div>
          {/* Right -- form card (extra shadow for Layout C) */}
          <div style={{ background:"#fff", borderRadius:12, padding:"40px 32px", boxShadow:"0 8px 48px rgba(0,0,0,0.3)", border:"1px solid var(--border)" }}>
            {!formSubmitted ? (
              <>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:24, fontWeight:600, color:"var(--text)", marginBottom:6 }}>Get a Free Quote</h3>
                <p style={{ fontSize:14, color:"var(--text-light)", marginBottom:24 }}>We respond within the hour.</p>
                <form onSubmit={handleForm}>
                  <input type="text" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width:"100%", padding:"14px 16px", marginBottom:14, background:"var(--cream)", border:"1px solid var(--border)", borderRadius:8, fontSize:16, fontFamily:"'DM Sans',sans-serif", outline:"none" }} />
                  <input type="tel" placeholder="Phone number" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width:"100%", padding:"14px 16px", marginBottom:14, background:"var(--cream)", border:"1px solid var(--border)", borderRadius:8, fontSize:16, fontFamily:"'DM Sans',sans-serif", outline:"none" }} />
                  <select required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} style={{ width:"100%", padding:"14px 16px", marginBottom:20, background:"var(--cream)", border:"1px solid var(--border)", borderRadius:8, fontSize:16, fontFamily:"'DM Sans',sans-serif", outline:"none", color: formData.service ? "var(--text)" : "var(--text-light)" }}>
                    <option value="" disabled>Select a service</option>
                    <option value="Residential HVAC">Residential HVAC</option>
                    <option value="Commercial HVAC">Commercial HVAC</option>
                    <option value="Irrigation & Sprinkler Systems">Irrigation & Sprinkler Systems</option>
                    <option value="Indoor Air Quality">Indoor Air Quality</option>
                    <option value="Maintenance Plans">Maintenance Plans</option>
                    <option value="Commercial Service Agreements">Commercial Service Agreements</option>
                  </select>
                  <button type="submit" style={{ width:"100%", padding:"16px", background:"var(--primary)", color:"#fff", border:"none", borderRadius:8, fontSize:16, fontWeight:700, letterSpacing:0.3, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>Get My Free Quote</button>
                </form>
              </>
            ) : (
              <div style={{ textAlign:"center", padding:"24px 0" }}>
                <div style={{ width:56, height:56, borderRadius:"50%", background:"var(--accent)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:24, fontWeight:600, color:"var(--text)", marginBottom:8 }}>We Got It!</h3>
                <p style={{ fontSize:15, color:"var(--text-mid)", lineHeight:1.6 }}>We'll be in touch shortly.<br/>For emergencies, call <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a></p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRUST BAR -- Layout C: white, no borders needed */}
      <section style={{ background:"var(--white)", padding:"48px clamp(24px,5vw,64px)" }}>
        <div className="trust-grid" style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:32, textAlign:"center" }}>
          {[
            { num: "5.0", label: "Google Rating", desc: "Perfect score" },
            { num: "100+", label: "Reviews", desc: "Happy customers" },
            { num: "Multi", label: "Service", desc: "HVAC + Irrigation" },
            { num: "Family", label: "Owned", desc: "Built different" },
          ].map((s, i) => (
            <div key={i} style={{ padding:"16px 0" }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,3vw,40px)", fontWeight:600, color:"var(--primary)", letterSpacing:-0.5, marginBottom:6 }}>{s.num}</div>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"var(--text)", marginBottom:4, fontFamily:"'DM Sans',sans-serif" }}>{s.label}</div>
              <div style={{ fontSize:13, color:"var(--text-light)" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES -- Layout C: cream bg, zigzag alternating rows */}
      <section id="services" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div className="gold-line" />
            <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>What We Do</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)" }}>HVAC & Irrigation Services in North Little Rock</h2>
          </div>
          {services.map((svc, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={i}>
                <div className="zigzag-row" style={{ display:"flex", flexDirection: isEven ? "row-reverse" : "row", alignItems:"center", gap:"clamp(32px,5vw,80px)", padding:"40px 0" }}>
                  <div style={{ flex:"0 0 auto", display:"flex", alignItems:"center", gap:16, maxWidth:280 }}>
                    <div style={{ color:"var(--accent)", flexShrink:0 }}>{svc.icon}</div>
                    <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"clamp(18px,2vw,22px)", fontWeight:600, lineHeight:1.3, color:"var(--primary)" }}>{svc.name}</h3>
                  </div>
                  <div style={{ flex:1 }}>
                    <p style={{ fontSize:16, lineHeight:1.7, color:"var(--text-mid)", maxWidth:520 }}>{svc.desc}</p>
                  </div>
                </div>
                {i < services.length - 1 && (
                  <div style={{ height:1, background:"var(--border)" }} />
                )}
              </div>
            );
          })}
          <p style={{ textAlign:"center", marginTop:48, fontSize:15, color:"var(--text-mid)" }}>
            Questions? Call Bobby directly at <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US -- Layout C: cream bg with pull quote, 2-col with badge grid */}
      <section id="about" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div className="gold-line" />
            <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Why Baldwin Empire</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)" }}>A Family That Shows Up and Gets It Done</h2>
          </div>
          <div className="why-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>
            {/* Left -- story + credentials */}
            <div>
              <p style={{ fontSize:17, lineHeight:1.8, color:"var(--text-mid)", marginBottom:20 }}>
                Bobby Baldwin started Baldwin Empire Services with a straightforward philosophy: do the job right, charge a fair price, and treat every customer like family. With his wife co-owning the business, this is a true family operation built on generations of technical experience in HVAC and irrigation.
              </p>
              <p style={{ fontSize:17, lineHeight:1.8, color:"var(--text-mid)", marginBottom:32 }}>
                What sets Baldwin Empire apart is their range. Need your AC fixed and your sprinkler system winterized? One call handles both. Licensed, bonded, and insured with a growing fleet -- they just added vehicle #4 -- Bobby and his team are scaling to meet demand without cutting corners.
              </p>
              {/* Pull quote */}
              <div style={{ borderLeft:"3px solid var(--accent)", paddingLeft:24, marginBottom:36 }}>
                <p style={{ fontSize:18, fontStyle:"italic", lineHeight:1.7, color:"var(--primary)", fontFamily:"'Playfair Display',serif" }}>
                  "Bobby Baldwin leads an impeccable team. Their attention to detail and commitment to quality is unmatched."
                </p>
                <p style={{ fontSize:14, color:"var(--text-light)", marginTop:8, fontFamily:"'DM Sans',sans-serif" }}>- Allison Greenwood, Google Review</p>
              </div>
              {/* Credentials */}
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[
                  "Licensed, Bonded & Insured",
                  "Family Owned & Operated",
                  "HVAC + Irrigation Under One Roof",
                  "Generations of Technical Experience",
                  "Growing Fleet -- Vehicle #4 Just Added",
                  "Mon-Fri 8:30 AM - 5:30 PM",
                ].map((cred, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <span style={{ color:"var(--accent)", flexShrink:0 }}>{Icons.check}</span>
                    <span style={{ fontSize:15, color:"var(--text)", fontWeight:500 }}>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right -- badge grid */}
            <div className="badge-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {[
                { icon: Icons.users, title: "Family Operation", desc: "Bobby and his wife co-own the business. When you call Baldwin Empire, you're talking to the family that stands behind the work." },
                { icon: Icons.award, title: "Perfect 5.0 Rating", desc: "100+ Google reviews and a flawless score. That kind of consistency only comes from doing things right every single time." },
                { icon: Icons.truck, title: "Growing Fleet", desc: "Just added vehicle #4 to keep up with demand. More trucks means faster response times across central Arkansas." },
                { icon: Icons.heart, title: "Multi-Service Experts", desc: "HVAC and irrigation under one roof. Fewer contractors to manage, one team you can trust for your home and property." },
              ].map((b, i) => (
                <div key={i} style={{ background:"var(--white)", border:"1px solid var(--border)", borderRadius:12, padding:"36px 30px", transition:"all 0.3s ease" }}>
                  <div style={{ color:"var(--accent)", marginBottom:16 }}>{b.icon}</div>
                  <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, fontWeight:600, color:"var(--primary)", marginBottom:8, lineHeight:1.3 }}>{b.title}</h3>
                  <p style={{ fontSize:14, lineHeight:1.6, color:"var(--text-mid)" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS -- Layout C: white bg, single LARGE testimonial */}
      <section id="reviews" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--white)" }}>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <div className="gold-line" />
          <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Customer Reviews</p>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:56 }}>5.0 Stars on Google</h2>
          {/* Large featured review -- Tanner Kilburn */}
          <div style={{ position:"relative", padding:"48px 40px", background:"var(--white)", borderRadius:12 }}>
            <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="var(--accent)" stroke="none" style={{ opacity:0.15 }} aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 5v3z"/></svg>
            </div>
            <div style={{ marginBottom:20, marginTop:24 }}>
              <Stars />
            </div>
            <p style={{ fontSize:20, lineHeight:1.8, color:"var(--text)", fontStyle:"italic", fontFamily:"'Playfair Display',serif", marginBottom:28 }}>
              "Great experience from start to finish. Preston was our technician and he was knowledgeable, professional, and took the time to explain everything. Highly recommend Baldwin Empire for anyone needing HVAC work done right."
            </p>
            <p style={{ fontSize:17, fontWeight:700, color:"var(--primary)" }}>Tanner Kilburn</p>
            <p style={{ fontSize:13, color:"var(--text-light)", marginTop:4 }}>Google Review</p>
          </div>
          <p style={{ fontSize:14, color:"var(--text-light)", marginTop:32 }}>One of 100+ five-star reviews on Google</p>
          <p style={{ fontSize:15, color:"var(--text-mid)", marginTop:24 }}>
            Ready to experience the difference? Call <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS -- cream bg, pill tags */}
      <section id="areas" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
          <div className="gold-line" />
          <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Service Areas</p>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:56 }}>Serving Central Arkansas</h2>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:12 }}>
            {areas.map((area, i) => (
              <span key={i} title={`HVAC & Irrigation Service in ${area}, AR`} style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"12px 22px", background:"var(--white)", border:"1px solid var(--border)", borderRadius:50, fontSize:14, fontWeight:500, color:"var(--text)", cursor:"default", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--white)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                <span style={{ color:"var(--accent)", display:"inline-flex" }}>{Icons.mapPin}</span>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA -- white bg with top border */}
      <section className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--white)", borderTop:"1px solid var(--border)" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:20 }}>
            Need HVAC or irrigation?<br/><em style={{ color:"var(--accent)", fontStyle:"italic" }}>Call Baldwin Empire.</em>
          </h2>
          <p style={{ fontSize:17, lineHeight:1.7, color:"var(--text-mid)", marginBottom:36, maxWidth:520, margin:"0 auto 36px" }}>
            Family-owned. Licensed, bonded, and insured. Generations of experience and a perfect 5.0 rating from 100+ customers who trust us with their homes and businesses.
          </p>
          <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"20px 44px", borderRadius:6, fontSize:18, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 4px 20px rgba(200,147,79,0.3)", transition:"transform 0.2s" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
      </section>

      {/* FOOTER -- --primary bg */}
      <footer style={{ background:"var(--primary)", padding:"80px clamp(24px,5vw,64px) 40px", color:"rgba(255,255,255,0.7)" }}>
        <div className="footer-grid" style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1.5fr 1fr 1fr", gap:48, marginBottom:48 }}>
          {/* Col 1 -- About */}
          <div>
            <div className="serif" style={{ fontSize:22, fontWeight:600, letterSpacing:-0.5, marginBottom:20, color:"#fff" }}>
              <span>Baldwin Empire</span><span style={{ color:"var(--accent)", marginLeft:6 }}>Services</span>
            </div>
            <p style={{ fontSize:14, lineHeight:1.7, marginBottom:20, maxWidth:300 }}>
              Family-owned HVAC and irrigation service in North Little Rock. Licensed, bonded, insured, and trusted by 100+ families across central Arkansas.
            </p>
            <p style={{ fontSize:14, lineHeight:1.8 }}>
              1906 AR-161<br/>
              North Little Rock, AR 72117
            </p>
            <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:8, color:"var(--accent)", fontSize:15, fontWeight:600, marginTop:12 }}>
              {Icons.phone} {PHONE}
            </a>
          </div>
          {/* Col 2 -- Services */}
          <div>
            <h4 style={{ fontSize:14, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:"#fff", marginBottom:20, fontFamily:"'DM Sans',sans-serif" }}>Services</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {["Residential HVAC","Commercial HVAC","Irrigation & Sprinkler","Indoor Air Quality","Maintenance Plans","Commercial Agreements"].map((s, i) => (
                <li key={i} style={{ fontSize:14 }}>{s}</li>
              ))}
            </ul>
          </div>
          {/* Col 3 -- Areas */}
          <div>
            <h4 style={{ fontSize:14, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:"#fff", marginBottom:20, fontFamily:"'DM Sans',sans-serif" }}>Service Areas</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {areas.map((a, i) => (
                <li key={i} style={{ fontSize:14 }}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:24 }}>
          <div className="footer-btm-inner" style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:13, color:"rgba(255,255,255,0.45)" }}>
            <span>&copy; {new Date().getFullYear()} Baldwin Empire Services. All rights reserved.</span>
            <span>Licensed, Bonded & Insured</span>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:998, display:"none" }}>
        <a href={PHONE_TEL} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"18px 24px", fontSize:16, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 -4px 20px rgba(0,0,0,0.15)", textDecoration:"none" }}>
          {Icons.phone} Call Baldwin Empire Services
        </a>
      </div>

      {/* Extra bottom padding for mobile floating CTA */}
      <div className="mobile-only" style={{ height:60, display:"none" }} />
    </>
  );
}

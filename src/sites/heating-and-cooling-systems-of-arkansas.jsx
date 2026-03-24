// Layout: C | Industry: HVAC | City: Jacksonville
import { useState, useEffect } from "react";

// --- SVG Icon Components (no emojis) ---
const Icons = {
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  wrench: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
  ),
  wind: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1111 8H2"/><path d="M12.6 19.4A2 2 0 1014 16H2"/></svg>
  ),
  thermometer: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>
  ),
  clipboard: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>
  ),
  pipe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2v6a6 6 0 0012 0V2"/><path d="M6 8H4a2 2 0 00-2 2v2a2 2 0 002 2h2"/><path d="M18 8h2a2 2 0 012 2v2a2 2 0 01-2 2h-2"/><line x1="12" y1="14" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
  ),
  home: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
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
  award: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  ),
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
  ),
  flag: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
  ),
};

const Stars = () => (
  <span style={{ display: "inline-flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}
  </span>
);

// --- Data ---
const PHONE = "(501) 533-5266";
const PHONE_TEL = "tel:+15015335266";

const services = [
  { name: "HVAC Repair", desc: "When your heating or cooling system breaks down, Russell and the team respond fast with honest diagnostics and reliable repairs. No upselling -- just straightforward fixes to get your home comfortable again.", icon: Icons.wrench },
  { name: "HVAC Installation", desc: "Complete heating and cooling system installations for new construction and full replacements. Every unit is properly sized for your space and installed to code by experienced technicians.", icon: Icons.wind },
  { name: "System Maintenance", desc: "Preventive maintenance that extends equipment life and catches small problems before they become expensive emergencies. Seasonal tune-ups for both heating and cooling systems.", icon: Icons.clipboard },
  { name: "System Replacement", desc: "When your HVAC equipment reaches the end of its life, we provide honest recommendations on energy-efficient replacements that fit your home and your budget. Fair pricing, always.", icon: Icons.thermometer },
  { name: "Plumbing Services", desc: "Full plumbing services handled by Keith -- from leak repairs and drain cleaning to water heater work and fixture installations. Multi-trade expertise under one roof.", icon: Icons.pipe },
  { name: "Residential & Commercial", desc: "Whether it's a single-family home or a commercial property in Jacksonville, we bring the same veteran-level discipline and attention to detail to every job.", icon: Icons.home },
];

const allServices = [
  "HVAC Repair", "HVAC Service & Maintenance", "HVAC Installation", "System Replacement",
  "Plumbing Services", "Residential Service", "Commercial Service"
];

const areas = ["Jacksonville", "Cabot", "Searcy", "Lonoke", "Little Rock", "North Little Rock", "Sherwood"];

// --- Main Component ---
export default function HeatingAndCoolingSystemsOfArkansas() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("hcsa-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("hcsa-auth", "1"); setAuthed(true); }
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
    document.title = "HVAC & Plumbing Jacksonville AR | Heating & Cooling Systems";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Veteran-owned HVAC and plumbing in Jacksonville, AR. 4.9 stars, 40+ reviews. Call (501) 533-5266 for a free quote." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Jacksonville" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "HVACBusiness",
      name: "Heating and Cooling Systems of Arkansas LLC", telephone: "+15015335266",
      address: { "@type": "PostalAddress", streetAddress: "2916 Military Rd", addressLocality: "Jacksonville", addressRegion: "AR", postalCode: "72076", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.8661, longitude: -92.1101 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "17:00" }
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "40", bestRating: "5" },
      founder: { "@type": "Person", name: "Russell Teague" },
      description: "Veteran-owned HVAC and plumbing company in Jacksonville, AR, serving central Arkansas with heating, cooling, and plumbing services. Owned by retired U.S. Army veteran Russell Teague.",
      areaServed: areas.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "HVAC & Plumbing Services", itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })) },
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
              <span style={{ color:"#1C2B41" }}>Heating & Cooling</span>{" "}<span style={{ color:"#C8934F" }}>Systems</span>
            </div>
            <p style={{ fontSize:13, color:"#8A8A9A", letterSpacing:1, marginBottom:28, lineHeight:1.5, textTransform:"uppercase" }}>Website Preview</p>
            <form onSubmit={submitPw}>
              <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setPwBad(false); }} placeholder="----" autoFocus style={{ width:"100%", padding:16, fontSize:20, border:`2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius:8, textAlign:"center", letterSpacing:6, outline:"none", fontFamily:"'DM Sans',sans-serif", color:"#1e293b", transition:"border .2s" }} />
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
          <span>Heating & Cooling</span>{" "}<span style={{ color:"var(--accent)" }}>Systems</span>
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
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--accent)" }}>Veteran-Owned HVAC + Plumbing</span>
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(40px,5vw,68px)", lineHeight:1.05, letterSpacing:-1.5, color:"#fff", marginBottom:24 }}>
              Jacksonville's{" "}<br/>
              <em style={{ color:"var(--accent)", fontStyle:"italic" }}>Most Trusted</em><br/>
              HVAC Team
            </h1>
            <p style={{ fontSize:18, lineHeight:1.7, color:"rgba(255,255,255,0.75)", marginBottom:32, maxWidth:480 }}>
              Retired U.S. Army veteran Russell Teague and his team deliver honest HVAC and plumbing service from Military Rd in Jacksonville. Fair pricing. No shortcuts. Veteran discipline on every job.
            </p>
            {/* Star row with hero quote */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32, flexWrap:"wrap" }}>
              <Stars />
              <span style={{ fontSize:14, color:"rgba(255,255,255,0.7)", fontStyle:"italic" }}>"Thoroughly impressed with the professionalism." -- Laila Pascua</span>
            </div>
            <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
              <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"18px 36px", borderRadius:6, fontSize:16, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 4px 20px rgba(200,147,79,0.3)", transition:"transform 0.2s" }}>
                {Icons.phone} Call Now
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
                    {allServices.map(s => <option key={s} value={s}>{s}</option>)}
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

      {/* TRUST BAR -- Layout C: white, no borders needed (dark-to-white transition) */}
      <section style={{ background:"var(--white)", padding:"48px clamp(24px,5vw,64px)" }}>
        <div className="trust-grid" style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:32, textAlign:"center" }}>
          {[
            { num: "4.9", label: "Google Rating", desc: "Trusted by customers" },
            { num: "40+", label: "Reviews", desc: "Five-star feedback" },
            { num: "Veteran", label: "Owned", desc: "U.S. Army retired" },
            { num: "HVAC+", label: "Plumbing", desc: "Multi-trade experts" },
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
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)" }}>HVAC & Plumbing Services in Jacksonville</h2>
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
            Questions? Call Russell directly at <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US -- Layout C: cream bg with pull quote, 2-col with badge grid */}
      <section id="about" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div className="gold-line" />
            <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Why Choose Us</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)" }}>Veteran-Owned HVAC Service in Jacksonville</h2>
          </div>
          <div className="why-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>
            {/* Left -- story + credentials */}
            <div>
              <p style={{ fontSize:17, lineHeight:1.8, color:"var(--text-mid)", marginBottom:20 }}>
                Heating and Cooling Systems of Arkansas is owned and operated by Russell Teague, a retired U.S. Army veteran based right on Military Rd near Little Rock Air Force Base. Russell brought the same discipline and integrity from his military service into every HVAC and plumbing job his team handles across central Arkansas.
              </p>
              <p style={{ fontSize:17, lineHeight:1.8, color:"var(--text-mid)", marginBottom:32 }}>
                What makes this company different is the multi-trade expertise and genuine community investment. Keith handles plumbing with the same precision Russell brings to HVAC -- customers consistently rate him 10 out of 10. Fair pricing is not a slogan here; it's praised in nearly every review. And Russell gives back through his involvement with Invade Transitional Home & Ministries, serving the Jacksonville community beyond just heating and cooling.
              </p>
              {/* Pull quote */}
              <div style={{ borderLeft:"3px solid var(--accent)", paddingLeft:24, marginBottom:36 }}>
                <p style={{ fontSize:18, fontStyle:"italic", lineHeight:1.7, color:"var(--primary)", fontFamily:"'Playfair Display',serif" }}>
                  "I am thoroughly impressed with the professionalism of the heating and cooling systems team. They promptly diagnosed the problem and resolved it the very next day."
                </p>
                <p style={{ fontSize:14, color:"var(--text-light)", marginTop:8, fontFamily:"'DM Sans',sans-serif" }}>-- Laila Pascua</p>
              </div>
              {/* Credentials */}
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[
                  "Veteran-Owned (U.S. Army Retired)",
                  "HVAC + Plumbing Under One Roof",
                  "Fair, Honest Pricing on Every Job",
                  "Located on Military Rd, Jacksonville",
                  "Community Involvement with Invade Transitional Home & Ministries",
                  "Serving Jacksonville, Cabot, Little Rock & Beyond",
                ].map((cred, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <span style={{ color:"var(--accent)", flexShrink:0 }}>{Icons.check}</span>
                    <span style={{ fontSize:15, color:"var(--text)", fontWeight:500 }}>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right -- 2x2 badge grid */}
            <div className="badge-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {[
                { icon: Icons.flag, title: "Veteran-Owned", desc: "Russell Teague served in the U.S. Army. That discipline and integrity carries into every job." },
                { icon: Icons.shield, title: "4.9-Star Rated", desc: "40+ Google reviews with consistently praised fair pricing and professionalism." },
                { icon: Icons.users, title: "Multi-Trade Team", desc: "HVAC and plumbing expertise under one roof. Keith handles plumbing -- rated 10/10." },
                { icon: Icons.heart, title: "Community Focused", desc: "Active involvement with Invade Transitional Home & Ministries. 310+ Facebook followers." },
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
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:56 }}>4.9 Stars on Google</h2>
          {/* Large featured review */}
          <div style={{ position:"relative", maxWidth:700, margin:"0 auto" }}>
            <div style={{ color:"var(--accent)", opacity:0.15, marginBottom:16 }}>
              <svg width="72" height="72" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
            </div>
            <div style={{ marginBottom:20 }}>
              <Stars />
            </div>
            <p style={{ fontSize:"clamp(18px,2.5vw,22px)", lineHeight:1.7, color:"var(--text)", fontStyle:"italic", fontFamily:"'Playfair Display',serif", marginBottom:28, maxWidth:600, margin:"0 auto 28px" }}>
              "I am thoroughly impressed with the professionalism of the heating and cooling systems team. They promptly diagnosed the problem and resolved it the very next day."
            </p>
            <p style={{ fontSize:17, fontWeight:700, color:"var(--primary)", marginBottom:4 }}>Laila Pascua</p>
            <p style={{ fontSize:14, color:"var(--text-light)" }}>Google Review</p>
          </div>
          <p style={{ fontSize:14, color:"var(--text-light)", marginTop:40 }}>One of 40+ five-star reviews on Google</p>
          <p style={{ fontSize:15, color:"var(--text-mid)", marginTop:24 }}>
            Ready to experience the difference? Call <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS -- cream bg, flex-wrap pills */}
      <section id="areas" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
          <div className="gold-line" />
          <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Where We Work</p>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:56 }}>HVAC & Plumbing Service Areas in Central Arkansas</h2>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
            {areas.map((area, i) => (
              <span key={i} title={`HVAC Service in ${area}, AR`} style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"12px 22px", borderRadius:50, background:"var(--white)", border:"1px solid var(--border)", fontSize:15, fontWeight:500, color:"var(--text)", cursor:"default", transition:"all 0.2s ease" }}>
                <span style={{ color:"var(--text-light)" }}>{Icons.mapPin}</span>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA -- white with top border */}
      <section className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--white)", borderTop:"1px solid var(--border)" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:20 }}>
            Need HVAC service?{" "}<br/>
            <em style={{ color:"var(--accent)", fontStyle:"italic" }}>Call Russell.</em>
          </h2>
          <p style={{ fontSize:17, lineHeight:1.7, color:"var(--text-mid)", marginBottom:36, maxWidth:520, margin:"0 auto 36px" }}>
            Veteran-owned. Fair pricing. HVAC and plumbing under one roof. Serving Jacksonville and central Arkansas.
          </p>
          <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"18px 42px", borderRadius:6, fontSize:18, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 4px 20px rgba(200,147,79,0.3)", transition:"transform 0.2s" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
      </section>

      {/* FOOTER -- --primary bg */}
      <footer style={{ background:"var(--primary)", padding:"80px clamp(24px,5vw,64px) 40px", color:"rgba(255,255,255,0.75)" }}>
        <div className="footer-grid" style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr", gap:48, marginBottom:56 }}>
          {/* Col 1 -- Wordmark + info */}
          <div>
            <div className="serif" style={{ fontSize:22, fontWeight:600, letterSpacing:-0.5, marginBottom:16 }}>
              <span style={{ color:"#fff" }}>Heating & Cooling</span>{" "}<span style={{ color:"var(--accent)" }}>Systems</span>
            </div>
            <p style={{ fontSize:15, lineHeight:1.7, marginBottom:20, maxWidth:300 }}>
              Veteran-owned HVAC and plumbing service for Jacksonville and central Arkansas. Retired U.S. Army veteran Russell Teague and team.
            </p>
            <p style={{ fontSize:14, lineHeight:1.8, marginBottom:8 }}>2916 Military Rd, Jacksonville, AR 72076</p>
            <a href={PHONE_TEL} style={{ fontSize:14, color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </div>
          {/* Col 2 -- Services */}
          <div>
            <h4 style={{ fontSize:14, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:"#fff", marginBottom:20, fontFamily:"'DM Sans',sans-serif" }}>Services</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {services.map((s, i) => (
                <li key={i} style={{ fontSize:14, color:"rgba(255,255,255,0.65)" }}>{s.name}</li>
              ))}
            </ul>
          </div>
          {/* Col 3 -- Areas */}
          <div>
            <h4 style={{ fontSize:14, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:"#fff", marginBottom:20, fontFamily:"'DM Sans',sans-serif" }}>Service Areas</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {areas.map((a, i) => (
                <li key={i} style={{ fontSize:14, color:"rgba(255,255,255,0.65)" }}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:28 }}>
          <div className="footer-btm-inner" style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:13, color:"rgba(255,255,255,0.45)" }}>
            <span>Heating and Cooling Systems of Arkansas LLC. All rights reserved.</span>
            <span>Mon-Fri 9 AM - 5 PM</span>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:998, display:"none" }}>
        <a href={PHONE_TEL} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"18px 24px", fontSize:16, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 -4px 20px rgba(0,0,0,0.15)", textDecoration:"none" }}>
          {Icons.phone} Call {PHONE}
        </a>
      </div>

      {/* Extra bottom padding on mobile for floating CTA */}
      <div className="mobile-only" style={{ height:60, display:"none" }} />
    </>
  );
}

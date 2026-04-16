// Layout: A | Industry: Plumber | City: Little Rock
import { useState, useEffect } from "react";

// --- SVG Icon Components (no emojis) ---
const Icons = {
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  droplets: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 14.1c1.44 0 2.6-1.19 2.6-2.64 0-.76-.37-1.47-1.11-2.08S12.73 7.95 12.56 7c-.19.95-.74 1.85-1.49 2.45s-1.11 1.28-1.11 2.04c0 1.45 1.17 2.64 2.6 2.64z"/><path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z"/></svg>
  ),
  pipette: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22l1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="M14.5 7.5l2.914-2.914a2.062 2.062 0 112.914 2.914L17.414 10.414"/><path d="M14.5 7.5l3 3"/></svg>
  ),
  wrench: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
  ),
  flame: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>
  ),
  faucet: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M6 8h12"/><path d="M6 8c-1.1 0-2 .9-2 2v1c0 2.2 1.8 4 4 4h2"/><path d="M18 8c1.1 0 2 .9 2 2v1c0 2.2-1.8 4-4 4h-2"/><path d="M12 15v4"/><path d="M8 19h8"/></svg>
  ),
  zap: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
  ),
  home: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
  ),
  check: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  star: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#C4705A" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
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
  arrowRight: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  ),
  clock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
};

const Stars = () => (
  <span style={{ display: "inline-flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}
  </span>
);

// --- Data ---
const PHONE = "(800) 849-6277";
const PHONE_TEL = "tel:+18008496277";

const services = [
  { name: "Drain & Pipe Cleaning", desc: "Professional clearing of clogged drains, slow pipes, and stubborn blockages using advanced equipment.", icon: Icons.droplets },
  { name: "Sewer Repair & Installation", desc: "Complete sewer line repair, replacement, and new installation for residential and commercial properties.", icon: Icons.pipette },
  { name: "Plumbing Repair", desc: "Expert diagnosis and repair of leaks, burst pipes, running toilets, and all general plumbing issues.", icon: Icons.wrench },
  { name: "Water Heater Installation", desc: "Professional installation and replacement of tank and tankless water heaters for reliable hot water.", icon: Icons.flame },
  { name: "Faucet & Fixture Installation", desc: "Precision installation of faucets, sinks, toilets, garbage disposals, and bathroom fixtures.", icon: Icons.faucet },
  { name: "24/7 Emergency Service", desc: "Around-the-clock emergency plumbing response for burst pipes, major leaks, and urgent drain issues.", icon: Icons.zap },
];

const reviews = [
  { text: "Very prompt. Willing to listen as I explained the problem and what I'd done so far to fix it. Took all that in to determine what he'd do to fix my slow drain. He's patient, kind, and very courteous. Was very determined to solve my plumbing issue.", name: "Anthony Ladd", src: "Google" },
];

const areas = ["Little Rock", "North Little Rock", "Sherwood", "Jacksonville", "Maumelle", "Cabot", "Conway", "Bryant", "Benton", "Central Arkansas"];

// --- Main Component ---
export default function MakeAMoveDrainCleaning() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("mamd-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "roof") { sessionStorage.setItem("mamd-auth", "1"); setAuthed(true); }
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
    document.title = "Drain Cleaning Little Rock AR | Make A Move";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Professional drain cleaning in Little Rock, AR. 5.0 stars, 15+ years experience. Call (800) 849-6277 for a free quote." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Little Rock" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "Plumber",
      name: "Make A Move Drain Cleaning", telephone: "+18008496277",
      address: { "@type": "PostalAddress", streetAddress: "400 W Capitol Ave", addressLocality: "Little Rock", addressRegion: "AR", postalCode: "72201", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.7465, longitude: -92.2896 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "18:00" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "3", bestRating: "5" },
      founder: { "@type": "Person", name: "Mike B." },
      description: "Make A Move Drain Cleaning provides professional drain cleaning and plumbing services in Little Rock, AR with 15+ years of experience.",
      areaServed: areas.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Plumbing Services", itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })) },
      memberOf: [{ "@type": "Organization", name: "Better Business Bureau" }],
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
        <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#1A3A3F" }}>
          <div style={{ background:"#fff", borderRadius:16, padding:"56px 44px", textAlign:"center", maxWidth:420, width:"92%", boxShadow:"0 32px 80px rgba(0,0,0,.35)" }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, color:"#1A3A3F", marginBottom:32 }}>
              <span style={{ fontWeight:700 }}>Make A Move</span> <span style={{ color:"#C4705A" }}>Drain Cleaning</span>
            </div>
            <p style={{ fontSize:13, color:"#8A8A9A", letterSpacing:1, marginBottom:6, textTransform:"uppercase", fontWeight:600 }}>Website Preview</p>
            <p style={{ fontSize:13, color:"#8A8A9A", letterSpacing:.5, marginBottom:28, lineHeight:1.5 }}>Enter password to view your website preview</p>
            <form onSubmit={submitPw}>
              <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setPwBad(false); }} placeholder="••••" autoFocus style={{ width:"100%", padding:16, fontSize:20, border:`2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius:10, textAlign:"center", letterSpacing:8, outline:"none", fontFamily:"'DM Sans',sans-serif", color:"#1e293b", transition:"border .2s" }} />
              {pwBad && <p style={{ color:"#ef4444", fontSize:12, marginTop:8, fontWeight:500 }}>Incorrect password</p>}
              <button type="submit" style={{ width:"100%", padding:16, marginTop:20, fontSize:15, fontWeight:600, letterSpacing:.3, background:"#1A3A3F", color:"#fff", border:"none", borderRadius:10, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>View Website</button>
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
          --primary: #1A3A3F;
          --accent: #C4705A;
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
        }
        @media(min-width:901px) {
          .mobile-only { display:none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, padding:scrolled ? "14px clamp(24px,5vw,64px)" : "20px clamp(24px,5vw,64px)", display:"flex", alignItems:"center", justifyContent:"space-between", background: scrolled ? "rgba(26,58,63,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition:"all 0.4s ease", boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none" }}>
        <div className="serif" style={{ fontSize:22, color: scrolled ? "#fff" : "var(--primary)", fontWeight:600, letterSpacing:-0.5 }}>
          <span>Make A Move</span><span style={{ color:"var(--accent)", marginLeft:6 }}>Drain Cleaning</span>
        </div>
        <div className="desktop-only" style={{ display:"flex", alignItems:"center", gap:36 }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:14, fontWeight:600, color: scrolled ? "rgba(255,255,255,0.8)" : "var(--text-mid)", letterSpacing:0.5, fontFamily:"'DM Sans',sans-serif", transition:"color 0.2s" }}>{l.label}</button>
          ))}
          <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--accent)", color:"#fff", padding:"10px 24px", borderRadius:6, fontSize:14, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
        <button className="mobile-only" onClick={() => setMobileMenu(true)} style={{ background:"none", border:"none", cursor:"pointer", color: scrolled ? "#fff" : "var(--primary)", display:"flex" }}>{Icons.menu}</button>
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

      {/* HERO */}
      <section style={{ minHeight:"100vh", padding:"160px clamp(24px,5vw,64px) 100px", background:"var(--cream)", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div className="hero-grid" style={{ maxWidth:1200, width:"100%", display:"grid", gridTemplateColumns:"1.2fr 0.8fr", gap:64, alignItems:"center" }}>
          <div style={{ maxWidth:560 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(196,112,90,0.1)", padding:"8px 18px", borderRadius:4, marginBottom:28 }}>
              <div style={{ width:6, height:6, borderRadius:"50%", background:"var(--accent)" }} />
              <span style={{ fontSize:12, fontWeight:700, color:"var(--accent)", letterSpacing:2, textTransform:"uppercase" }}>15+ Years Experience</span>
            </div>
            <h1 style={{ fontSize:"clamp(40px, 5vw, 68px)", lineHeight:1.05, color:"var(--primary)", marginBottom:24, letterSpacing:-1.5 }}>
              Little Rock's<br /><span style={{ fontStyle:"italic", color:"var(--accent)" }}>Drain Cleaning</span><br />Experts
            </h1>
            <p style={{ fontSize:18, lineHeight:1.7, color:"var(--text-mid)", marginBottom:32, maxWidth:440 }}>
              Led by Mike B., Make A Move Drain Cleaning delivers honest, expert plumbing and drain service to Central Arkansas. Perfect 5.0-star rating on Google.
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:36 }}>
              <Stars />
              <span style={{ fontSize:14, color:"var(--text-light)", fontStyle:"italic", marginLeft:4 }}>"Patient, kind, and very courteous" — Anthony Ladd</span>
            </div>
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"18px 36px", borderRadius:6, fontSize:16, fontWeight:700, boxShadow:"0 4px 20px rgba(196,112,90,0.3)", fontFamily:"'DM Sans',sans-serif" }}>
                {Icons.phone} Call Mike Now
              </a>
              <button onClick={() => scrollTo("services")} style={{ display:"inline-flex", alignItems:"center", gap:8, background:"transparent", color:"var(--primary)", padding:"18px 32px", borderRadius:6, fontSize:16, fontWeight:600, border:"1.5px solid var(--border)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>
                View Services {Icons.arrowRight}
              </button>
            </div>
          </div>
          <div>
            <div style={{ background:"#fff", borderRadius:12, padding:"44px 36px", boxShadow:"0 4px 40px rgba(26,58,63,0.08)", border:"1px solid var(--border)" }}>
              {!formSubmitted ? (
                <form onSubmit={handleForm}>
                  <h3 style={{ fontSize:26, color:"var(--primary)", marginBottom:6, fontFamily:"'Playfair Display',serif" }}>Get a Free Quote</h3>
                  <p style={{ fontSize:14, color:"var(--text-light)", marginBottom:28 }}>We respond within the hour.</p>
                  <input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({...formData, name:e.target.value})} required style={{ width:"100%", padding:"16px 18px", fontSize:15, border:"1.5px solid #e8e8ec", borderRadius:6, marginBottom:14, outline:"none", fontFamily:"'DM Sans',sans-serif", background:"#FAFAF8" }} />
                  <input type="tel" placeholder="Phone number" value={formData.phone} onChange={e => setFormData({...formData, phone:e.target.value})} required style={{ width:"100%", padding:"16px 18px", fontSize:15, border:"1.5px solid #e8e8ec", borderRadius:6, marginBottom:14, outline:"none", fontFamily:"'DM Sans',sans-serif", background:"#FAFAF8" }} />
                  <select value={formData.service} onChange={e => setFormData({...formData, service:e.target.value})} required style={{ width:"100%", padding:"16px 18px", fontSize:15, border:"1.5px solid #e8e8ec", borderRadius:6, marginBottom:20, outline:"none", fontFamily:"'DM Sans',sans-serif", background:"#FAFAF8", color: formData.service ? "var(--text)" : "#999", appearance:"none" }}>
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                  <button type="submit" style={{ width:"100%", padding:18, background:"var(--primary)", color:"#fff", border:"none", borderRadius:6, fontSize:16, fontWeight:700, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", letterSpacing:0.3 }}>Get My Free Quote</button>
                </form>
              ) : (
                <div style={{ textAlign:"center", padding:"24px 0" }}>
                  <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(196,112,90,0.12)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", color:"var(--accent)" }}>{Icons.check}</div>
                  <h3 style={{ fontSize:22, color:"var(--primary)", marginBottom:8, fontFamily:"'Playfair Display',serif" }}>We Got It!</h3>
                  <p style={{ fontSize:14, color:"var(--text-mid)" }}>We'll call you back shortly. For emergencies,<br/>call <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:700 }}>{PHONE}</a></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ padding:"72px clamp(24px,5vw,64px)", background:"#fff", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
        <div className="trust-grid" style={{ maxWidth:1000, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:32, textAlign:"center" }}>
          {[
            { num: "5.0", label: "Google Rating", sub: "Perfect score" },
            { num: "15+", label: "Years Experience", sub: "Trusted expertise" },
            { num: "BBB", label: "Accredited", sub: "Since 2019" },
            { num: "Military", label: "& Senior", sub: "Discounts available" },
          ].map((s, i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize:"clamp(36px, 4vw, 52px)", color:"var(--primary)", lineHeight:1, marginBottom:6, letterSpacing:-1 }}>{s.num}</div>
              <div style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:2, color:"var(--text)", marginBottom:2 }}>{s.label}</div>
              <div style={{ fontSize:13, color:"var(--text-light)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div className="gold-line" style={{ margin:"0 auto 20px" }} />
            <div style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:3, color:"var(--accent)", marginBottom:14 }}>What We Do</div>
            <h2 style={{ fontSize:"clamp(30px, 3.5vw, 44px)", color:"var(--primary)", letterSpacing:-0.5 }}>Drain Cleaning & Plumbing Services in Little Rock</h2>
          </div>
          <div className="svc-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20 }}>
            {services.map((s, i) => (
              <div key={i} style={{ background:"#fff", borderRadius:10, padding:"36px 30px", border:"1px solid var(--border)", transition:"all 0.3s ease", cursor:"default", position:"relative", overflow:"hidden" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 40px rgba(26,58,63,0.1)"; e.currentTarget.querySelector('.card-bar').style.width="100%"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; e.currentTarget.querySelector('.card-bar').style.width="0"; }}>
                <div className="card-bar" style={{ position:"absolute", top:0, left:0, width:0, height:2, background:"var(--accent)", transition:"width 0.35s ease" }} />
                <div style={{ color:"var(--accent)", marginBottom:18 }}>{s.icon}</div>
                <h3 style={{ fontSize:19, color:"var(--primary)", marginBottom:10, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>{s.name}</h3>
                <p style={{ fontSize:15, color:"var(--text-mid)", lineHeight:1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign:"center", marginTop:40, fontSize:15, color:"var(--text-light)" }}>
            Questions? Call Mike directly at <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section id="about" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--primary)", color:"#fff", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:0, width:"40%", height:"100%", background:"linear-gradient(135deg, rgba(196,112,90,0.04) 0%, transparent 60%)", pointerEvents:"none" }} />
        <div className="why-grid" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:80, alignItems:"start", position:"relative" }}>
          <div>
            <div className="gold-line" style={{ marginBottom:20 }} />
            <div style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:3, color:"var(--accent)", marginBottom:14, opacity:0.7 }}>About Make A Move</div>
            <h2 style={{ fontSize:"clamp(30px, 3.5vw, 42px)", lineHeight:1.15, marginBottom:28, color:"#fff" }}>Why Little Rock Trusts<br/><span style={{ fontStyle:"italic", color:"var(--accent)" }}>Mike B.</span></h2>
            <p style={{ fontSize:16, lineHeight:1.8, color:"rgba(255,255,255,0.65)", marginBottom:24 }}>
              With over 15 years of hands-on experience, Mike B. built Make A Move Drain Cleaning on a simple promise: show up on time, listen to the problem, and fix it right the first time. Whether it's a stubborn clog at midnight or a full sewer line replacement, Mike treats every home like his own.
            </p>
            <p style={{ fontSize:16, lineHeight:1.8, color:"rgba(255,255,255,0.65)", marginBottom:36 }}>
              BBB accredited since 2019, Make A Move offers military and senior discounts because Mike believes quality plumbing service should be accessible to everyone. With a perfect 5.0-star Google rating, the results speak for themselves.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {["15+ Years of Experience", "BBB Accredited Since 2019", "Military & Senior Discounts", "24/7 Emergency Service Available", "Licensed & Insured"].map((c, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ color:"var(--accent)", flexShrink:0 }}>{Icons.check}</div>
                  <span style={{ fontSize:15, fontWeight:500, color:"rgba(255,255,255,0.85)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="badge-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, paddingTop:20 }}>
            {[
              { icon: Icons.shield, title: "BBB Accredited", desc: "Since 2019" },
              { icon: Icons.clock, title: "24/7 Emergency", desc: "Always available" },
              { icon: Icons.home, title: "Residential", desc: "Complete drain & plumbing" },
              { icon: Icons.wrench, title: "15+ Years", desc: "Proven expertise" },
            ].map((b, i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:10, padding:"28px 22px", textAlign:"center" }}>
                <div style={{ color:"var(--accent)", marginBottom:12, display:"flex", justifyContent:"center" }}>{b.icon}</div>
                <div style={{ fontWeight:700, fontSize:15, marginBottom:4, color:"#fff" }}>{b.title}</div>
                <div style={{ fontSize:13, color:"rgba(255,255,255,0.5)" }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding:"110px clamp(24px,5vw,64px)", background:"#fff" }}>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <div className="gold-line" style={{ margin:"0 auto 20px" }} />
          <div style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:3, color:"var(--accent)", marginBottom:14 }}>Reviews</div>
          <h2 style={{ fontSize:"clamp(30px, 3.5vw, 42px)", color:"var(--primary)", marginBottom:56, letterSpacing:-0.5 }}>5.0 Stars on Google</h2>
          <div style={{ background:"var(--cream)", borderRadius:12, padding:"52px 48px", border:"1px solid var(--border)", position:"relative", minHeight:240 }}>
            <div className="serif" style={{ position:"absolute", top:20, left:32, fontSize:72, color:"var(--accent)", opacity:0.15, lineHeight:1 }}>"</div>
            <div style={{ position:"relative", zIndex:1 }}>
              <div style={{ marginBottom:20 }}><Stars /></div>
              <p style={{ fontSize:18, fontStyle:"italic", color:"var(--text)", lineHeight:1.75, marginBottom:24 }}>
                "{reviews[0].text}"
              </p>
              <div style={{ fontWeight:700, fontSize:15, color:"var(--primary)" }}>{reviews[0].name}</div>
              <div style={{ fontSize:13, color:"var(--text-light)", marginTop:2 }}>{reviews[0].src} Review</div>
            </div>
          </div>
          <p style={{ marginTop:36, fontSize:15, color:"var(--text-light)" }}>
            Ready to experience the difference? Call <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" style={{ padding:"100px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:900, margin:"0 auto", textAlign:"center" }}>
          <div className="gold-line" style={{ margin:"0 auto 20px" }} />
          <div style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:3, color:"var(--accent)", marginBottom:14 }}>Service Areas</div>
          <h2 style={{ fontSize:"clamp(28px, 3vw, 38px)", color:"var(--primary)", marginBottom:48, letterSpacing:-0.5 }}>Serving Little Rock & Central Arkansas</h2>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:12 }}>
            {areas.map((a, i) => (
              <span key={i} title={`Drain Cleaning in ${a}, AR`} style={{ display:"inline-flex", alignItems:"center", gap:6, background:"#fff", border:"1px solid var(--border)", padding:"12px 24px", borderRadius:30, fontSize:15, fontWeight:500, color:"var(--text)", cursor:"default", transition:"all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.background="var(--primary)"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="var(--primary)"; }}
                onMouseLeave={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.color="var(--text)"; e.currentTarget.style.borderColor="rgba(0,0,0,0.06)"; }}>
                <span style={{ opacity:0.5 }}>{Icons.mapPin}</span> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"100px clamp(24px,5vw,64px)", background:"#fff", textAlign:"center", borderTop:"1px solid var(--border)" }}>
        <div style={{ maxWidth:600, margin:"0 auto" }}>
          <h2 className="serif" style={{ fontSize:"clamp(32px, 4vw, 50px)", color:"var(--primary)", lineHeight:1.1, marginBottom:20, letterSpacing:-1 }}>
            Got a drain problem?<br/><span style={{ fontStyle:"italic", color:"var(--accent)" }}>Call Mike.</span>
          </h2>
          <p style={{ fontSize:17, color:"var(--text-mid)", marginBottom:36, lineHeight:1.6 }}>
            Honest pricing. 15+ years of expertise. Military and senior discounts.
          </p>
          <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"22px 52px", borderRadius:8, fontSize:20, fontWeight:700, boxShadow:"0 6px 28px rgba(196,112,90,0.35)", fontFamily:"'DM Sans',sans-serif" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"var(--primary)", color:"rgba(255,255,255,0.7)", padding:"64px clamp(24px,5vw,64px) 0" }}>
        <div className="footer-grid" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1.5fr 1fr 1fr", gap:48, paddingBottom:40 }}>
          <div>
            <div className="serif" style={{ fontSize:22, color:"#fff", marginBottom:16 }}>Make A Move <span style={{ color:"var(--accent)" }}>Drain Cleaning</span></div>
            <p style={{ fontSize:14, lineHeight:1.7, opacity:0.7, marginBottom:16 }}>Professional drain cleaning and plumbing services serving Central Arkansas with 15+ years of experience.</p>
            <p style={{ fontSize:14, lineHeight:1.8, opacity:0.6 }}>
              400 W Capitol Ave<br/>Little Rock, AR 72201<br/>
              <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a><br/>
              <a href="mailto:mikeb@makeamovear.com" style={{ color:"var(--accent)", fontWeight:600 }}>mikeb@makeamovear.com</a>
            </p>
          </div>
          <div>
            <h4 style={{ fontSize:14, fontWeight:700, color:"#fff", textTransform:"uppercase", letterSpacing:2, marginBottom:20, fontFamily:"'DM Sans',sans-serif" }}>Services</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {services.map(s => <li key={s.name} style={{ fontSize:14, opacity:0.6 }}>{s.name}</li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize:14, fontWeight:700, color:"#fff", textTransform:"uppercase", letterSpacing:2, marginBottom:20, fontFamily:"'DM Sans',sans-serif" }}>Areas</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {areas.map(a => <li key={a} style={{ fontSize:14, opacity:0.6 }}>{a}</li>)}
            </ul>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding:"20px 0", maxWidth:1100, margin:"0 auto" }}>
          <div className="footer-btm-inner" style={{ display:"flex", justifyContent:"space-between", fontSize:13, opacity:0.4 }}>
            <span>&copy; {new Date().getFullYear()} Make A Move Drain Cleaning. All rights reserved.</span>
            <span>BBB Accredited &middot; Mon–Sat (Closes 6 PM)</span>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:998, display:"flex" }}>
        <a href={PHONE_TEL} style={{ display:"flex", width:"100%", alignItems:"center", justifyContent:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"18px", fontSize:17, fontWeight:700, boxShadow:"0 -4px 20px rgba(0,0,0,0.15)", fontFamily:"'DM Sans',sans-serif" }}>
          {Icons.phone} Call Make A Move
        </a>
      </div>
      <div className="mobile-only" style={{ height:60, display:"block" }} />
    </>
  );
}

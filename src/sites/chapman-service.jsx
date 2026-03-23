// Layout: C | Industry: HVAC | City: North Little Rock
import { useState, useEffect } from "react";

// --- SVG Icon Components (no emojis) ---
const Icons = {
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  wrench: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
  ),
  flame: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>
  ),
  wind: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1111 8H2"/><path d="M12.6 19.4A2 2 0 1014 16H2"/></svg>
  ),
  thermometer: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
  ),
  zap: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  snowflake: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/><line x1="12" y1="2" x2="14" y2="5"/><line x1="12" y1="2" x2="10" y2="5"/><line x1="12" y1="22" x2="14" y2="19"/><line x1="12" y1="22" x2="10" y2="19"/><line x1="2" y1="12" x2="5" y2="14"/><line x1="2" y1="12" x2="5" y2="10"/><line x1="22" y1="12" x2="19" y2="14"/><line x1="22" y1="12" x2="19" y2="10"/></svg>
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
  quote: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.15 }}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 5v3z"/></svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  ),
  award: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
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
const PHONE = "(501) 501-6279";
const PHONE_TEL = "tel:+15015016279";
const EMERGENCY_PHONE = "(501) 298-4519";
const EMERGENCY_TEL = "tel:+15012984519";

const services = [
  { name: "HVAC Repair", desc: "Fast, reliable diagnosis and repair for all heating and cooling systems. We get your comfort restored the same day whenever possible.", icon: Icons.wrench },
  { name: "HVAC Installation", desc: "Complete system installation with options explained upfront and fair pricing. We size every unit to your home for maximum efficiency.", icon: Icons.wind },
  { name: "HVAC Maintenance", desc: "Preventive tune-ups that catch small issues before they become expensive emergencies. Keep your system running at peak performance year-round.", icon: Icons.shield },
  { name: "Heating System Service", desc: "Furnace repair, heat pump service, and full heating system diagnostics. Stay warm through every Arkansas winter.", icon: Icons.flame },
  { name: "Air Conditioning Service", desc: "AC repair, refrigerant recharge, compressor service, and complete cooling system care for North Little Rock summers.", icon: Icons.snowflake },
  { name: "Electrical Services", desc: "Licensed electrical work from our team, including panel upgrades, wiring, and troubleshooting for residential and commercial properties.", icon: Icons.zap },
];

const reviews = [
  { text: "We have used Chapman services several times this past year on several different A/C units and they were quick to respond and got us up and going quickly. They were on time and professional. Each time they explained the problem and gave options with fair pricing.", name: "Jan Murphy", src: "Google" },
  { text: "This company has been the best so far we have needed. Heat condensation drain to outside freezing year after year resulting in no heat during coldest time of year. Previous company made a short lived bypass as needed for 5 years. Gave up and called Chapman's. Not only did they fix this problem reasonably, but fixed the drain pipe that had been leaking quickly. Yearly maintenance now to the company that cares! Thank you Dan and everyone. Veteran to the rescue again! Lifetime customer!!", name: "Peggy Bryant", src: "Google" },
  { text: "Wow I just had an amazing experience with Chapman Service. I talked with Dan this morning about the situation with my home and getting the air conditioning unit ready for the summer. Dan was extremely knowledgeable and answered all of my questions to the T! He was able to immediately have Jeremy come by to do maintenance on the unit.", name: "David Vrudny", src: "Google" },
  { text: "Dan and his crew replaced two a/c units in two days at the hottest time of the year. They worked late to make sure every feature was correct and fully explained them to us.", name: "Ed Fuller", src: "Google" },
  { text: "I called Chapman Service and spoke with Dan Chapman who took the time to explain the unit options available, and the pros and cons of each one. He was very knowledgeable, patient, and willing to answer any question I may have had.", name: "Rod Thomas", src: "Google" },
];

const areas = ["North Little Rock", "Little Rock", "Sherwood", "Jacksonville", "Cabot", "Maumelle", "Conway", "Benton", "Bryant"];

// --- Main Component ---
export default function ChapmanService() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("chapman-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("chapman-auth", "1"); setAuthed(true); }
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
    document.title = "HVAC North Little Rock AR | Chapman Service";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Family-owned HVAC in North Little Rock, AR. 4.6 stars, 127+ reviews. Call (501) 501-6279 for a free quote." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "North Little Rock" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "HVACBusiness",
      name: "Chapman Service", telephone: "+15015016279",
      address: { "@type": "PostalAddress", streetAddress: "717 Cypress St", addressLocality: "North Little Rock", addressRegion: "AR", postalCode: "72114", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.769, longitude: -92.267 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "19:00" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "127", bestRating: "5" },
      founder: { "@type": "Person", name: "Dan Chapman" }, foundingDate: "1980",
      description: "Chapman Service is a family-owned HVAC company in North Little Rock, AR, serving central Arkansas since 1980.",
      areaServed: areas.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "HVAC Services", itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })) },
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
              <span style={{ color:"#1C2B41" }}>Chapman</span> <span style={{ color:"#C8934F" }}>Service</span>
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

      {/* NAV — starts transparent with WHITE text on dark hero */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, padding: scrolled ? "14px clamp(24px,5vw,64px)" : "20px clamp(24px,5vw,64px)", display:"flex", alignItems:"center", justifyContent:"space-between", background: scrolled ? "rgba(28,43,65,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition:"all 0.4s ease", boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none" }}>
        <div className="serif" style={{ fontSize:22, fontWeight:600, letterSpacing:-0.5, color:"#fff" }}>
          <span>Chapman</span><span style={{ color:"var(--accent)", marginLeft:6 }}>Service</span>
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

      {/* HERO — Layout C: DARK (--primary bg), white text, form on right */}
      <section className="hero-pad" style={{ minHeight:"100vh", padding:"160px clamp(24px,5vw,64px) 110px", background:"var(--primary)", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div className="hero-grid" style={{ maxWidth:1200, width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          {/* Left — text */}
          <div style={{ maxWidth:560 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.1)", padding:"8px 18px", borderRadius:4, marginBottom:28 }}>
              <div style={{ width:6, height:6, borderRadius:"50%", background:"var(--accent)" }} />
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--accent)" }}>Established 1980</span>
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(40px,5vw,68px)", lineHeight:1.05, letterSpacing:-1.5, color:"#fff", marginBottom:24 }}>
              North Little Rock's{" "}<br/>
              <em style={{ color:"var(--accent)", fontStyle:"italic" }}>Trusted HVAC</em><br/>
              Experts
            </h1>
            <p style={{ fontSize:18, lineHeight:1.7, color:"rgba(255,255,255,0.75)", marginBottom:32, maxWidth:480 }}>
              Family-owned heating and cooling service since 1980. Dan Chapman and his son Dakota deliver honest work, fair pricing, and the kind of care only a veteran-run family business can.
            </p>
            {/* Star row with hero quote */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32, flexWrap:"wrap" }}>
              <Stars />
              <span style={{ fontSize:14, color:"rgba(255,255,255,0.7)", fontStyle:"italic" }}>"Veteran to the rescue again! Lifetime customer!!"</span>
              <span style={{ fontSize:13, color:"rgba(255,255,255,0.5)" }}>- Peggy Bryant</span>
            </div>
            <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
              <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"18px 36px", borderRadius:6, fontSize:16, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 4px 20px rgba(200,147,79,0.3)", transition:"transform 0.2s" }}>
                {Icons.phone} Call Dan Now
              </a>
              <button onClick={() => scrollTo("services")} style={{ display:"inline-flex", alignItems:"center", gap:8, background:"transparent", border:"1.5px solid rgba(255,255,255,0.3)", color:"#fff", padding:"18px 32px", borderRadius:6, fontSize:16, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif", cursor:"pointer" }}>
                Our Services
              </button>
            </div>
          </div>
          {/* Right — form card (extra shadow for Layout C) */}
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
                    <option value="HVAC Repair">HVAC Repair</option>
                    <option value="HVAC Installation">HVAC Installation</option>
                    <option value="HVAC Maintenance">HVAC Maintenance</option>
                    <option value="Heating System Service">Heating System Service</option>
                    <option value="Air Conditioning Service">Air Conditioning Service</option>
                    <option value="Electrical Services">Electrical Services</option>
                    <option value="Emergency HVAC Service">Emergency HVAC Service</option>
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

      {/* TRUST BAR — Layout C: white, no borders (dark-to-white transition is strong) */}
      <section style={{ background:"var(--white)", padding:"48px clamp(24px,5vw,64px)" }}>
        <div className="trust-grid" style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:32, textAlign:"center" }}>
          {[
            { num: "4.6", label: "Google Rating", desc: "Verified reviews" },
            { num: "127+", label: "Reviews", desc: "Happy customers" },
            { num: "46", label: "Years", desc: "Serving since 1980" },
            { num: "#0100517", label: "Licensed", desc: "HVAC License" },
          ].map((s, i) => (
            <div key={i} style={{ padding:"16px 0" }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,3vw,40px)", fontWeight:600, color:"var(--primary)", letterSpacing:-0.5, marginBottom:6 }}>{s.num}</div>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"var(--text)", marginBottom:4, fontFamily:"'DM Sans',sans-serif" }}>{s.label}</div>
              <div style={{ fontSize:13, color:"var(--text-light)" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — Layout C: cream bg, zigzag alternating rows */}
      <section id="services" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div className="gold-line" />
            <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>What We Do</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)" }}>HVAC Services in North Little Rock</h2>
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
            Questions? Call Dan directly at <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US — Layout C: Light cream bg with pull quote, 2-col with badge grid */}
      <section id="about" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div className="gold-line" />
            <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Why Chapman</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)" }}>A Family That Stands Behind Their Work</h2>
          </div>
          <div className="why-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>
            {/* Left — story + credentials */}
            <div>
              <p style={{ fontSize:17, lineHeight:1.8, color:"var(--text-mid)", marginBottom:20 }}>
                Dan Chapman founded Chapman Service in 1980 with a simple promise: treat every home like his own. A veteran who brought military discipline and integrity to every job, Dan built a reputation that speaks for itself across central Arkansas.
              </p>
              <p style={{ fontSize:17, lineHeight:1.8, color:"var(--text-mid)", marginBottom:32 }}>
                Today, Dan's son Dakota serves as Vice President, carrying forward the family tradition with a journeyman electrical license and the same commitment to honest, quality work. When you call Chapman Service, you get a father-son team with 46 years of combined experience and a name they're proud to put on every job.
              </p>
              {/* Pull quote */}
              <div style={{ borderLeft:`3px solid var(--accent)`, paddingLeft:24, marginBottom:36 }}>
                <p style={{ fontSize:18, fontStyle:"italic", lineHeight:1.7, color:"var(--primary)", fontFamily:"'Playfair Display',serif" }}>
                  "Yearly maintenance now to the company that cares! Veteran to the rescue again! Lifetime customer!!"
                </p>
                <p style={{ fontSize:14, color:"var(--text-light)", marginTop:8, fontFamily:"'DM Sans',sans-serif" }}>- Peggy Bryant, Google Review</p>
              </div>
              {/* Credentials */}
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[
                  "HVAC License #0100517",
                  "Family Owned Since 1980",
                  "Veteran-Owned Business",
                  "Journeyman Electrical License (Dakota)",
                  "Emergency Service Available",
                  "Mon-Fri Service, Closes 7 PM",
                ].map((cred, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <span style={{ color:"var(--accent)", flexShrink:0 }}>{Icons.check}</span>
                    <span style={{ fontSize:15, color:"var(--text)", fontWeight:500 }}>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — badge grid */}
            <div className="badge-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {[
                { icon: Icons.users, title: "Father & Son Team", desc: "Dan and Dakota Chapman work side by side, bringing a personal touch to every service call." },
                { icon: Icons.award, title: "Veteran Owned", desc: "Dan brought military discipline and integrity to every aspect of Chapman Service since day one." },
                { icon: Icons.shield, title: "Fully Licensed", desc: "HVAC License #0100517 and journeyman electrical certification. Every job done right and to code." },
                { icon: Icons.clock, title: "46 Years Strong", desc: "Since 1980, central Arkansas families have trusted Chapman Service for reliable heating and cooling." },
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

      {/* REVIEWS — Layout C: white bg, single LARGE testimonial */}
      <section id="reviews" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--white)" }}>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <div className="gold-line" />
          <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Customer Reviews</p>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:56 }}>4.6 Stars on Google</h2>
          {/* Large featured review — David Vrudny */}
          <div style={{ position:"relative", padding:"48px 40px", background:"var(--white)", borderRadius:12 }}>
            <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="var(--accent)" stroke="none" style={{ opacity:0.15 }} aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 5v3z"/></svg>
            </div>
            <div style={{ marginBottom:20, marginTop:24 }}>
              <Stars />
            </div>
            <p style={{ fontSize:20, lineHeight:1.8, color:"var(--text)", fontStyle:"italic", fontFamily:"'Playfair Display',serif", marginBottom:28 }}>
              "Wow I just had an amazing experience with Chapman Service. I talked with Dan this morning about the situation with my home and getting the air conditioning unit ready for the summer. Dan was extremely knowledgeable and answered all of my questions to the T! He was able to immediately have Jeremy come by to do maintenance on the unit."
            </p>
            <p style={{ fontSize:17, fontWeight:700, color:"var(--primary)" }}>David Vrudny</p>
            <p style={{ fontSize:13, color:"var(--text-light)", marginTop:4 }}>Google Review</p>
          </div>
          <p style={{ fontSize:14, color:"var(--text-light)", marginTop:32 }}>One of 127+ five-star reviews on Google</p>
          <p style={{ fontSize:15, color:"var(--text-mid)", marginTop:24 }}>
            Ready to experience the difference? Call <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS — cream bg, pill tags */}
      <section id="areas" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
          <div className="gold-line" />
          <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Service Areas</p>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:56 }}>Serving Central Arkansas Since 1980</h2>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:12 }}>
            {areas.map((area, i) => (
              <span key={i} title={`HVAC Service in ${area}, AR`} style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"12px 22px", background:"var(--white)", border:"1px solid var(--border)", borderRadius:50, fontSize:14, fontWeight:500, color:"var(--text)", cursor:"default", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}
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

      {/* CTA — white bg with top border */}
      <section className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--white)", borderTop:"1px solid var(--border)" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:20 }}>
            AC not working?<br/><em style={{ color:"var(--accent)", fontStyle:"italic" }}>Call Dan.</em>
          </h2>
          <p style={{ fontSize:17, lineHeight:1.7, color:"var(--text-mid)", marginBottom:36, maxWidth:520, margin:"0 auto 36px" }}>
            Honest pricing. No upselling. Just a veteran-owned family business that's been keeping North Little Rock comfortable since 1980.
          </p>
          <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"20px 44px", borderRadius:6, fontSize:18, fontWeight:700, letterSpacing:0.3, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 4px 20px rgba(200,147,79,0.3)", transition:"transform 0.2s" }}>
            {Icons.phone} {PHONE}
          </a>
          <p style={{ fontSize:14, color:"var(--text-light)", marginTop:20 }}>Emergency line: <a href={EMERGENCY_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{EMERGENCY_PHONE}</a></p>
        </div>
      </section>

      {/* FOOTER — --primary bg */}
      <footer style={{ background:"var(--primary)", padding:"80px clamp(24px,5vw,64px) 40px", color:"rgba(255,255,255,0.7)" }}>
        <div className="footer-grid" style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1.5fr 1fr 1fr", gap:48, marginBottom:48 }}>
          {/* Col 1 — About */}
          <div>
            <div className="serif" style={{ fontSize:22, fontWeight:600, letterSpacing:-0.5, marginBottom:20, color:"#fff" }}>
              <span>Chapman</span><span style={{ color:"var(--accent)", marginLeft:6 }}>Service</span>
            </div>
            <p style={{ fontSize:14, lineHeight:1.7, marginBottom:20, maxWidth:300 }}>
              Family-owned HVAC service in North Little Rock since 1980. Licensed, veteran-owned, and trusted by 127+ families across central Arkansas.
            </p>
            <p style={{ fontSize:14, lineHeight:1.8 }}>
              717 Cypress St<br/>
              North Little Rock, AR 72114
            </p>
            <a href={PHONE_TEL} style={{ display:"inline-flex", alignItems:"center", gap:8, color:"var(--accent)", fontSize:15, fontWeight:600, marginTop:12 }}>
              {Icons.phone} {PHONE}
            </a>
          </div>
          {/* Col 2 — Services */}
          <div>
            <h4 style={{ fontSize:14, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:"#fff", marginBottom:20, fontFamily:"'DM Sans',sans-serif" }}>Services</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {["HVAC Repair","HVAC Installation","HVAC Maintenance","Heating Service","AC Service","Electrical Services"].map((s, i) => (
                <li key={i} style={{ fontSize:14 }}>{s}</li>
              ))}
            </ul>
          </div>
          {/* Col 3 — Areas */}
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
            <span>&copy; {new Date().getFullYear()} Chapman Service. All rights reserved.</span>
            <span>HVAC License #0100517</span>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:998, display:"none" }}>
        <a href={PHONE_TEL} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, background:"var(--accent)", color:"#fff", padding:"18px 24px", fontSize:16, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 -4px 20px rgba(0,0,0,0.15)", textDecoration:"none" }}>
          {Icons.phone} Call Chapman Service
        </a>
      </div>

      {/* Extra bottom padding for mobile floating CTA */}
      <div className="mobile-only" style={{ height:60, display:"none" }} />
    </>
  );
}

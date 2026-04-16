// Layout: C | Industry: HVAC | City: Benton
import { useState, useEffect } from "react";

// --- SVG Icon Components (no emojis) ---
const Icons = {
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  wind: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1111 8H2"/><path d="M12.6 19.4A2 2 0 1014 16H2"/></svg>
  ),
  flame: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>
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
  clipboard: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>
  ),
  globe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
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
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
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
const PHONE = "(501) 778-3324";
const PHONE_TEL = "tel:+15017783324";

const services = [
  { name: "A/C Installation & Repair", desc: "From complete system installations to emergency repairs, the Jones team keeps your home cool through every Arkansas summer. Properly sized units, expert installation, and fast diagnostics when something goes wrong.", icon: Icons.wind },
  { name: "Heating & Furnace Service", desc: "Furnace installations, heat pump repairs, and full heating system replacements handled by technicians with decades of experience. Keeping Central Arkansas families warm since 1984.", icon: Icons.flame },
  { name: "Air Quality Services", desc: "Breathe easier with professional indoor air quality solutions. From filtration systems to humidity control, we improve the air your family breathes every day.", icon: Icons.thermometer },
  { name: "Geothermal Services", desc: "Specialized geothermal heating and cooling installations that harness the earth's natural temperature. Energy-efficient comfort that pays for itself over time.", icon: Icons.globe },
  { name: "24/7 Emergency Repair", desc: "When your system fails at the worst possible time, Jones Heating and Air answers the call. Day or night, weekday or weekend, our emergency team responds fast.", icon: Icons.zap },
  { name: "Free Estimates on New Units", desc: "Considering a new heating or cooling system? We provide honest, no-obligation estimates so you can make the best decision for your home and budget.", icon: Icons.clipboard },
];

const allServices = [
  "A/C Installation & Repair", "Heating & Furnace Service", "Air Quality Services",
  "Geothermal Services", "24/7 Emergency Repair", "Free Estimates on New Units"
];

const areas = ["Benton", "Bryant", "Central Arkansas"];

// --- Main Component ---
export default function JonesHeatingAndAir() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("jones-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "roof") { sessionStorage.setItem("jones-auth", "1"); setAuthed(true); }
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
    document.title = "HVAC Service Benton AR | Jones Heating and Air";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Jones Heating and Air in Benton, AR. 40+ years, family-owned HVAC. 24/7 emergency service. Call (501) 778-3324." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Benton" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "HVACBusiness",
      name: "Jones Heating and Air", telephone: "+15017783324",
      email: "david.jones@jonesheatingandair.com",
      address: { "@type": "PostalAddress", streetAddress: "19133 I-30 Frontage Rd", addressLocality: "Benton", addressRegion: "AR", postalCode: "72015", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.5645, longitude: -92.5868 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "16:30" }
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", reviewCount: "68", bestRating: "5" },
      founder: { "@type": "Person", name: "David Jones" },
      foundingDate: "1984",
      description: "Family-owned HVAC company serving Benton, Bryant, and Central Arkansas for over 40 years. Heating, cooling, geothermal, and 24/7 emergency service.",
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
              <span style={{ color:"#1C2B41" }}>Jones</span>{" "}<span style={{ color:"#C8934F" }}>Heating and Air</span>
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
          <span>Jones</span>{" "}<span style={{ color:"var(--accent)" }}>Heating and Air</span>
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
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--accent)" }}>Family-Owned Since 1984</span>
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(40px,5vw,68px)", lineHeight:1.05, letterSpacing:-1.5, color:"#fff", marginBottom:24 }}>
              Benton's{" "}<br/>
              <em style={{ color:"var(--accent)", fontStyle:"italic" }}>Trusted HVAC Experts</em><br/>
              for 40+ Years
            </h1>
            <p style={{ fontSize:18, lineHeight:1.7, color:"rgba(255,255,255,0.75)", marginBottom:32, maxWidth:480 }}>
              Jones Heating and Air has kept Central Arkansas comfortable since 1984. The Red Truck Guys deliver honest service, same-day repairs, and free estimates on every new unit. Family-owned by David Jones.
            </p>
            {/* Star row with hero quote -- showing 5 stars for this specific 5-star review */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32, flexWrap:"wrap" }}>
              <Stars />
              <span style={{ fontSize:14, color:"rgba(255,255,255,0.7)", fontStyle:"italic" }}>"Called the best in the industry & got the best." -- Richard Maddox</span>
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
            { num: "68+", label: "Customer Reviews", desc: "Trusted by homeowners" },
            { num: "40+", label: "Years in Business", desc: "Serving since 1984" },
            { num: "24/7", label: "Emergency Service", desc: "Day or night" },
            { num: "Free", label: "Estimates", desc: "On new units" },
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
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)" }}>HVAC Services in Benton, Arkansas</h2>
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
            Questions? Call David directly at <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US -- Layout C: cream bg (NOT dark), pull quote, 2-col with badge grid */}
      <section id="about" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div className="gold-line" />
            <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Why Choose Us</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)" }}>Family-Owned HVAC in Benton Since 1984</h2>
          </div>
          <div className="why-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>
            {/* Left -- story + credentials */}
            <div>
              <p style={{ fontSize:17, lineHeight:1.8, color:"var(--text-mid)", marginBottom:20 }}>
                Jones Heating and Air has been a cornerstone of the Benton, Arkansas community for over four decades. Founded by David Jones, this family-owned company has built its reputation one job at a time -- delivering honest HVAC service from their shop on I-30 Frontage Road. Known locally as "The Red Truck Guys," the Jones team has earned the trust of homeowners across Central Arkansas.
              </p>
              <p style={{ fontSize:17, lineHeight:1.8, color:"var(--text-mid)", marginBottom:32 }}>
                What sets Jones apart is their combination of deep experience and genuine care. With 40+ years in the business, they've seen every problem and know every solution. They offer specialized geothermal services that most competitors can't match, provide 24/7 emergency repairs when you need them most, and always give free estimates on new units so you never feel pressured. Same-day repairs and replacements are the standard, not the exception.
              </p>
              {/* Pull quote -- decorative large accent quote mark */}
              <div style={{ position:"relative", borderLeft:"3px solid var(--accent)", paddingLeft:24, marginBottom:36 }}>
                <div style={{ position:"absolute", top:-20, left:8, color:"var(--accent)", opacity:0.2 }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                </div>
                <p style={{ fontSize:18, fontStyle:"italic", lineHeight:1.7, color:"var(--primary)", fontFamily:"'Playfair Display',serif" }}>
                  "My AC crashed at 5 PM on a Friday afternoon, of course! We called Jones AC Monday morning and they were here within an hour of opening!"
                </p>
                <p style={{ fontSize:14, color:"var(--text-light)", marginTop:8, fontFamily:"'DM Sans',sans-serif" }}>-- Lisa Schwaesdall</p>
              </div>
              {/* Credentials */}
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[
                  "40+ Years Serving Central Arkansas",
                  "Family-Owned by David Jones",
                  "24/7 Emergency Repair Service",
                  "Specialized Geothermal Installations",
                  "Free Estimates on All New Units",
                  "Same-Day Repairs & Replacements",
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
                { icon: Icons.award, title: "40+ Years", desc: "Serving Benton and Central Arkansas since 1984. Four decades of trusted HVAC expertise." },
                { icon: Icons.users, title: "Family-Owned", desc: "David Jones and his team treat every customer like a neighbor. Local roots, personal service." },
                { icon: Icons.clock, title: "24/7 Emergency", desc: "Your system doesn't wait for business hours to break down. Neither do we." },
                { icon: Icons.globe, title: "Geothermal Experts", desc: "Specialized geothermal heating and cooling installations most HVAC companies can't offer." },
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
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:56 }}>What Our Customers Say</h2>
          {/* Large featured review */}
          <div style={{ position:"relative", maxWidth:700, margin:"0 auto" }}>
            <div style={{ color:"var(--accent)", opacity:0.15, marginBottom:16 }}>
              <svg width="72" height="72" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
            </div>
            <div style={{ marginBottom:20 }}>
              <Stars />
            </div>
            <p style={{ fontSize:"clamp(18px,2.5vw,22px)", lineHeight:1.7, color:"var(--text)", fontStyle:"italic", fontFamily:"'Playfair Display',serif", marginBottom:28, maxWidth:600, margin:"0 auto 28px" }}>
              "Called the best in the industry & got the best. Thanks to Matt & Adam showed their professionalism for my needs. Office staff were on top of helping answer all questions & they sent out experienced technicians. Will use Jones Htg & Air again."
            </p>
            <p style={{ fontSize:17, fontWeight:700, color:"var(--primary)", marginBottom:4 }}>Richard Maddox</p>
            <p style={{ fontSize:14, color:"var(--text-light)" }}>Google Review</p>
          </div>
          <p style={{ fontSize:14, color:"var(--text-light)", marginTop:40 }}>One of 68+ five-star reviews on Google</p>

          {/* Second review -- smaller display */}
          <div style={{ maxWidth:600, margin:"48px auto 0", padding:"36px 30px", background:"var(--cream)", borderRadius:12, border:"1px solid var(--border)" }}>
            <div style={{ marginBottom:12 }}>
              <Stars />
            </div>
            <p style={{ fontSize:16, lineHeight:1.7, color:"var(--text)", fontStyle:"italic", marginBottom:16 }}>
              "My AC crashed at 5 PM on a Friday afternoon, of course! We called Jones AC Monday morning and they were here within an hour of opening! Tim, who is the hero of this story, diagnosed the problem quickly."
            </p>
            <p style={{ fontSize:15, fontWeight:700, color:"var(--primary)", marginBottom:2 }}>Lisa Schwaesdall</p>
            <p style={{ fontSize:13, color:"var(--text-light)" }}>Google Review</p>
          </div>

          <p style={{ fontSize:15, color:"var(--text-mid)", marginTop:32 }}>
            Ready to experience the difference? Call <a href={PHONE_TEL} style={{ color:"var(--accent)", fontWeight:600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS -- cream bg, flex-wrap pills */}
      <section id="areas" className="section-pad" style={{ padding:"110px clamp(24px,5vw,64px)", background:"var(--cream)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
          <div className="gold-line" />
          <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"var(--text-light)", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>Where We Work</p>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,3.5vw,44px)", lineHeight:1.15, letterSpacing:-0.5, color:"var(--primary)", marginBottom:56 }}>HVAC Service Areas in Central Arkansas</h2>
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
            <em style={{ color:"var(--accent)", fontStyle:"italic" }}>Call David.</em>
          </h2>
          <p style={{ fontSize:17, lineHeight:1.7, color:"var(--text-mid)", marginBottom:36, maxWidth:520, margin:"0 auto 36px" }}>
            Over 40 years of honest, family-owned heating and cooling service. Free estimates on new units. 24/7 emergency repairs. Benton, Bryant, and all of Central Arkansas.
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
              <span style={{ color:"#fff" }}>Jones</span>{" "}<span style={{ color:"var(--accent)" }}>Heating and Air</span>
            </div>
            <p style={{ fontSize:15, lineHeight:1.7, marginBottom:20, maxWidth:300 }}>
              Family-owned HVAC service for Benton, Bryant, and Central Arkansas. Keeping homes comfortable since 1984.
            </p>
            <p style={{ fontSize:14, lineHeight:1.8, marginBottom:8 }}>19133 I-30 Frontage Rd, Benton, AR 72015</p>
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
            <span>Jones Heating and Air. All rights reserved.</span>
            <span>Mon-Fri 7 AM - 4:30 PM</span>
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

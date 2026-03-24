// Layout: C | Industry: Landscaping | City: Little Rock
import { useState, useEffect } from "react";

// --- SVG Icon Components (no emojis, stroke-based) ---
const Icons = {
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  leaf: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 17 3.5s4 2 4 9-5.5 8-5.5 8"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
  ),
  droplets: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M16.7 19.3c3 0 5.3-2.37 5.3-5.18 0-1.65-.8-3.22-2.42-4.54C18.06 8.26 17 6.5 16.7 4.7c-.3 1.8-1.36 3.56-2.88 4.88C12.2 10.9 11.4 12.47 11.4 14.12c0 2.81 2.3 5.18 5.3 5.18z"/></svg>
  ),
  spray: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 22V10a4 4 0 014-4h0a4 4 0 014 4v12"/><path d="M8 22h8"/><path d="M12 2v4"/><path d="M7 6l1.5 1.5"/><path d="M17 6l-1.5 1.5"/><path d="M5 14h14"/><path d="M5 18h14"/></svg>
  ),
  trees: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 10v.2A3 3 0 018.9 16H5a3 3 0 01-1-5.83V10a3 3 0 016 0z"/><path d="M7 16v6"/><path d="M13 19.2V10a4 4 0 018 0v.2A3 3 0 0119.1 16H15a3 3 0 01-2-5.24"/><path d="M17 16v6"/></svg>
  ),
  wall: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="4"/><rect x="1" y="8" width="11" height="4"/><rect x="12" y="8" width="11" height="4"/><rect x="1" y="12" width="7" height="4"/><rect x="8" y="12" width="8" height="4"/><rect x="16" y="12" width="7" height="4"/><rect x="1" y="16" width="11" height="4"/><rect x="12" y="16" width="11" height="4"/></svg>
  ),
  drain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2v6"/><path d="M6 6l2 4"/><path d="M18 6l-2 4"/><path d="M4 12h16"/><path d="M8 12v4c0 2 1.5 4 4 4s4-2 4-4v-4"/></svg>
  ),
  check: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  star: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#B8694A" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
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
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
  ),
  award: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  ),
  home: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
};

const Stars = () => (
  <span style={{ display: "inline-flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}
  </span>
);

// --- Data ---
const PHONE = "(501) 407-2727";
const PHONE_TEL = "tel:+15014072727";
const EMAIL = "dan@horticare.net";

const services = [
  { name: "Landscape Design & Installation", desc: "Custom landscape designs tailored to Arkansas soil and climate. Horticare transforms your vision into reality with native plantings, hardscape elements, and professional installation that enhances your property's beauty and value.", icon: Icons.leaf },
  { name: "Irrigation Systems", desc: "Efficient irrigation design and installation that keeps your landscape thriving through Arkansas summers. Horticare engineers smart watering systems that conserve water while delivering consistent coverage to every zone.", icon: Icons.droplets },
  { name: "Lawn & Shrub Chemical Program", desc: "Targeted fertilization, weed control, and pest management programs that keep your turf thick and your shrubs healthy year-round. Science-based applications scheduled for optimal results in central Arkansas conditions.", icon: Icons.spray },
  { name: "Landscape Management", desc: "Ongoing maintenance programs for commercial and residential properties. From mowing and pruning to seasonal cleanup, Horticare keeps your landscape looking its best every week of the year.", icon: Icons.trees },
  { name: "Retaining Walls", desc: "Engineered retaining walls that solve drainage issues and create usable space on sloped properties. Built with quality materials and proper drainage, Horticare's walls are designed to last decades.", icon: Icons.wall },
  { name: "Drainage Systems", desc: "Professional drainage solutions that protect your foundation and landscape from water damage. Horticare diagnoses problem areas and installs French drains, catch basins, and grading corrections that move water where it belongs.", icon: Icons.drain },
];

const allServices = [
  "Landscape Design & Installation",
  "Irrigation Installation & Design",
  "Lawn & Shrub Chemical Program",
  "Landscape Management",
  "Retaining Walls",
  "Drainage System Installation",
  "Outdoor Living Spaces",
];

const reviews = [
  { text: "We have used Horticare several times. Each time we have been terrifically satisfied and pleased.", name: "James Calloway", src: "Google" },
  { text: "Horticare just finished a fairly large project for my wife and I \u2014 a retaining wall on a very sloped area.", name: "Jason Weeks", src: "Google" },
  { text: "I needed a 40' trench dug in some tough soil for a drainage system installation. Steve with HLC came out.", name: "William Harrison", src: "Google" },
];

const areas = ["Little Rock", "North Little Rock", "Sherwood", "Jacksonville", "Benton", "Bryant", "Maumelle", "Conway"];

// --- Main Component ---
export default function HorticareLandscapeCompanies() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("horticare-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("horticare-auth", "1"); setAuthed(true); }
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
    document.title = "Landscaping Little Rock AR | Horticare";
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
    add("meta", { name: "description", content: "Horticare Landscape Companies \u2014 34+ reviews. Landscape design, irrigation, drainage. Call (501) 407-2727 in Little Rock, AR." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Little Rock" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LandscapingService",
      name: "Horticare Landscape Companies",
      telephone: "+15014072727",
      email: EMAIL,
      address: { "@type": "PostalAddress", streetAddress: "10200 Colonel Glenn Rd", addressLocality: "Little Rock", addressRegion: "AR", postalCode: "72204", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.7465, longitude: -92.2896 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "17:00" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", reviewCount: "34", bestRating: "5" },
      founder: { "@type": "Person", name: "Daniel Hill" },
      description: "Horticare Landscape Companies provides professional landscape design, irrigation systems, lawn care programs, retaining walls, and drainage solutions in Little Rock and central Arkansas.",
      areaServed: areas.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Landscaping Services", itemListElement: allServices.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
      memberOf: [{ "@type": "Organization", name: "Ronald McDonald House Charities of Arkansas" }],
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
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1E3A2F" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "56px 44px", textAlign: "center", maxWidth: 420, width: "92%", boxShadow: "0 32px 80px rgba(0,0,0,.35)" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 600, letterSpacing: -0.5, marginBottom: 4 }}>
              <span style={{ color: "#1E3A2F" }}>Horticare</span> <span style={{ color: "#B8694A" }}>Landscape</span>
            </div>
            <p style={{ fontSize: 13, color: "#8A8A9A", letterSpacing: 1, marginBottom: 28, lineHeight: 1.5, textTransform: "uppercase" }}>Website Preview</p>
            <form onSubmit={submitPw}>
              <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setPwBad(false); }} placeholder="••••" autoFocus style={{ width: "100%", padding: 16, fontSize: 20, border: `2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius: 8, textAlign: "center", letterSpacing: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", color: "#1e293b", transition: "border .2s" }} />
              {pwBad && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 8, fontWeight: 500 }}>Incorrect password</p>}
              <button type="submit" style={{ width: "100%", padding: 16, marginTop: 20, fontSize: 15, fontWeight: 700, letterSpacing: .3, background: "#1E3A2F", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>View Site</button>
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
          .mobile-bottom-pad { padding-bottom:60px !important; }
        }
        @media(min-width:901px) {
          .mobile-only { display:none !important; }
        }
      `}</style>

      {/* NAV — starts transparent with WHITE text on dark hero */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "14px clamp(24px,5vw,64px)" : "20px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(30,58,47,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease", boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none" }}>
        <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, color: "#fff" }}>
          <span>Horticare</span><span style={{ color: "var(--accent)", marginLeft: 6 }}>Landscape</span>
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
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)" }}>Commercial & Residential</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px,5vw,68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "#fff", marginBottom: 24 }}>
              Little Rock's{" "}<br/>
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Trusted Landscaper</em><br/>
              For Every Season
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 32, maxWidth: 480 }}>
              Horticare Landscape Companies has been designing, building, and maintaining landscapes across central Arkansas. Led by Daniel Hill, our team delivers results that last.
            </p>
            {/* Star row with hero quote */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
              <Stars />
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>"Each time we have been terrifically satisfied."</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>- James Calloway</span>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, letterSpacing: 0.3, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(184,105,74,0.3)", transition: "transform 0.2s" }}>
                {Icons.phone} Call Daniel Now
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

      {/* TRUST BAR — Layout C: white, no borders needed */}
      <section style={{ background: "var(--white)", padding: "48px clamp(24px,5vw,64px)" }}>
        <div className="trust-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }}>
          {[
            { num: "34+", label: "Reviews", desc: "Happy customers" },
            { num: "Both", label: "Commercial & Residential", desc: "Full service" },
            { num: "RMHCA", label: "Supporter", desc: "Giving back" },
            { num: "Est.", label: "Established", desc: "Proven track record" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "16px 0" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 600, color: "var(--primary)", letterSpacing: -0.5, marginBottom: 6 }}>{s.num}</div>
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
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)" }}>Landscaping Services in Little Rock</h2>
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
            Questions? Call Daniel directly at <a href={PHONE_TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* WHY US — Layout C: cream bg with pull quote, 2-col with badge grid */}
      <section id="about" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="gold-line" />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>Why Horticare</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)" }}>Professional Landscaping in Little Rock</h2>
          </div>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            {/* Left — story + credentials */}
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 20 }}>
                Daniel Hill founded Horticare Landscape Companies with a straightforward mission: deliver landscape work that looks as good five years from now as it does on day one. As President, Daniel leads a team that includes Crystal and Steve, each bringing specialized expertise to every project across central Arkansas.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 32 }}>
                Horticare serves both commercial properties and homeowners, handling everything from complete landscape design and irrigation system installation to ongoing maintenance programs and complex drainage solutions. The team is also proud to support Ronald McDonald House Charities of Arkansas, giving back to the community they serve every day.
              </p>
              {/* Pull quote */}
              <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 24, marginBottom: 36 }}>
                <p style={{ fontSize: 18, fontStyle: "italic", lineHeight: 1.7, color: "var(--primary)", fontFamily: "'Playfair Display',serif" }}>
                  "Horticare just finished a fairly large project for my wife and I \u2014 a retaining wall on a very sloped area."
                </p>
                <p style={{ fontSize: 14, color: "var(--text-light)", marginTop: 8, fontFamily: "'DM Sans',sans-serif" }}>- Jason Weeks</p>
              </div>
              {/* Credentials */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Commercial & Residential Landscaping",
                  "Full-Service Irrigation Design & Installation",
                  "Custom Lawn & Shrub Chemical Programs",
                  "Engineered Retaining Wall Systems",
                  "Professional Drainage Solutions",
                  "Ronald McDonald House Charities Supporter",
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
                { icon: Icons.leaf, title: "Full-Service Design", desc: "From concept to completion, Horticare designs and installs landscapes tailored to Arkansas climate and your property's unique needs. Every project starts with a custom plan." },
                { icon: Icons.shield, title: "Built to Last", desc: "Retaining walls, drainage systems, and irrigation built with quality materials and proper engineering. Horticare's work is designed to perform for decades, not just seasons." },
                { icon: Icons.users, title: "Expert Team", desc: "Daniel, Crystal, and Steve bring specialized knowledge to every project. From design consultations to hands-on installation, the Horticare team delivers professional results." },
                { icon: Icons.heart, title: "Community First", desc: "Horticare proudly supports Ronald McDonald House Charities of Arkansas. The team believes in building more than landscapes \u2014 they build community." },
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
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 56 }}>What Our Customers Say</h2>
          {/* Large featured review — Jason Weeks (retaining wall project) */}
          <div style={{ position: "relative", padding: "48px 40px", background: "var(--white)", borderRadius: 12 }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="var(--accent)" stroke="none" style={{ opacity: 0.15 }} aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 5v3z"/></svg>
            </div>
            <div style={{ marginBottom: 20, marginTop: 24 }}>
              <Stars />
            </div>
            <p style={{ fontSize: 20, lineHeight: 1.8, color: "var(--text)", fontStyle: "italic", fontFamily: "'Playfair Display',serif", marginBottom: 28 }}>
              "Horticare just finished a fairly large project for my wife and I \u2014 a retaining wall on a very sloped area."
            </p>
            <p style={{ fontSize: 17, fontWeight: 700, color: "var(--primary)" }}>Jason Weeks</p>
            <p style={{ fontSize: 13, color: "var(--text-light)", marginTop: 4 }}>Google Review</p>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-light)", marginTop: 32 }}>One of 34+ five-star reviews on Google</p>
          <p style={{ fontSize: 15, color: "var(--text-mid)", marginTop: 24 }}>
            Ready to experience the difference? Call <a href={PHONE_TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* SERVICE AREAS — cream bg, centered flex-wrap pills */}
      <section id="areas" className="section-pad" style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div className="gold-line" />
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>Service Areas</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,3.5vw,44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 56 }}>Serving Central Arkansas</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {areas.map((area, i) => (
              <span key={i} title={`Landscaping in ${area}, AR`} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: 100, fontSize: 14, fontWeight: 500, color: "var(--text)", cursor: "default", transition: "all 0.2s ease", fontFamily: "'DM Sans',sans-serif" }}
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
            Need landscaping?<br/><em style={{ color: "var(--accent)", fontStyle: "italic" }}>Call Horticare.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
            From landscape design and irrigation to retaining walls and drainage systems, Horticare Landscape Companies delivers professional results across central Arkansas. Call Daniel and his team today.
          </p>
          <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 48px", borderRadius: 6, fontSize: 18, fontWeight: 700, letterSpacing: 0.3, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(184,105,74,0.3)", transition: "transform 0.2s" }}>
            {Icons.phone} {PHONE}
          </a>
        </div>
      </section>

      {/* FOOTER — --primary bg, 3-column */}
      <footer className="mobile-bottom-pad" style={{ background: "var(--primary)", padding: "80px clamp(24px,5vw,64px) 40px", color: "rgba(255,255,255,0.75)" }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Col 1: wordmark + info */}
          <div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, marginBottom: 16 }}>
              <span style={{ color: "#fff" }}>Horticare</span><span style={{ color: "var(--accent)", marginLeft: 6 }}>Landscape</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 20, color: "rgba(255,255,255,0.6)" }}>
              Professional landscape design, installation, and management serving Little Rock and central Arkansas.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>
              10200 Colonel Glenn Rd<br/>
              Little Rock, AR 72204
            </p>
            <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 12, fontSize: 15, fontWeight: 600, color: "var(--accent)" }}>
              {Icons.phone} {PHONE}
            </a>
            <br/>
            <a href={`mailto:${EMAIL}`} style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 6, display: "inline-block" }}>{EMAIL}</a>
          </div>
          {/* Col 2: services */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {allServices.map((s, i) => (
                <span key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{s}</span>
              ))}
            </div>
          </div>
          {/* Col 3: areas */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Areas</h4>
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
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
              &copy; {new Date().getFullYear()} Horticare Landscape Companies. All rights reserved.
            </span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
              RMHCA Supporter
            </span>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, display: "none" }}>
        <a href={PHONE_TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "16px 24px", fontSize: 16, fontWeight: 700, letterSpacing: 0.3, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", textDecoration: "none" }}>
          {Icons.phone} Call Horticare Now
        </a>
      </div>
    </>
  );
}

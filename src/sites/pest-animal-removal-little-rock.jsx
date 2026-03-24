// Layout: A | Industry: Pest Control | City: Little Rock
import { useState, useEffect } from "react";

// --- SVG Icon Components (no emojis) ---
const Icons = {
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  snake: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17c2-2 4-1 6-3s1-4 3-5 4 0 6-2 3-4 4-4"/><circle cx="21" cy="3" r="1.5" fill="none"/><path d="M3 17c0 1.5 1 3 2.5 3s2.5-1 2.5-2.5"/></svg>
  ),
  paw: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="16" rx="4" ry="3.5"/><ellipse cx="7" cy="10" rx="2" ry="2.5"/><ellipse cx="17" cy="10" rx="2" ry="2.5"/><ellipse cx="5" cy="14" rx="1.5" ry="2"/><ellipse cx="19" cy="14" rx="1.5" ry="2"/></svg>
  ),
  bat: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v2"/><path d="M12 6c-3 0-5 2-6 4-1.5-1-3-1-4 0 1 1 2.5 3 5 4 .5 1.5 1.5 3 2 4h6c.5-1 1.5-2.5 2-4 2.5-1 4-3 5-4-1-1-2.5-1-4 0-1-2-3-4-6-4z"/><circle cx="10" cy="10" r="0.5" fill="currentColor"/><circle cx="14" cy="10" r="0.5" fill="currentColor"/></svg>
  ),
  skull: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="7"/><path d="M9 22v-4"/><path d="M15 22v-4"/><path d="M12 22v-4"/><path d="M5 17h14"/><circle cx="9.5" cy="10" r="1.5"/><circle cx="14.5" cy="10" r="1.5"/><path d="M10 14h4"/></svg>
  ),
  broom: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10"/><path d="M6 12c0 0 1 10 6 10s6-10 6-10"/><path d="M8 16h8"/><path d="M9 20h6"/></svg>
  ),
  trap: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="1"/><path d="M3 8l9-5 9 5"/><line x1="7" y1="8" x2="7" y2="20"/><line x1="12" y1="8" x2="12" y2="20"/><line x1="17" y1="8" x2="17" y2="20"/></svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
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
  clock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
  ),
  search: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  checkCircle: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" stroke="#B8694A" fill="rgba(184,105,74,0.1)"/><polyline points="9 12 11 14 15 10" stroke="#B8694A" fill="none" strokeWidth="2"/></svg>
  ),
};

const Stars = () => (
  <span style={{ display: "inline-flex", gap: 2 }}>
    {[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}
  </span>
);

// --- Data ---
const PHONE = "(501) 436-4995";
const PHONE_TEL = "tel:+15014364995";
const BIZ = "Pest Animal Removal";
const CITY = "Little Rock";
const STATE = "AR";
const PRIMARY = "#1E3A2F";
const ACCENT = "#B8694A";
const CREAM = "#FAF9F6";
const WHITE = "#FFFFFF";
const TEXT = "#2A2A3C";
const TEXT_MID = "#5A5A6E";
const TEXT_LIGHT = "#8A8A9A";
const BORDER = "rgba(0,0,0,0.06)";

const services = [
  { name: "Snake Removal & ID", desc: "Rapid snake identification via photo and safe removal. Send a picture and David will identify the species within minutes.", icon: Icons.snake },
  { name: "Wildlife Removal", desc: "Humane capture and relocation of raccoons, opossums, skunks, armadillos, and other nuisance wildlife from your property.", icon: Icons.paw },
  { name: "Bat Removal", desc: "Safe, humane bat exclusion from attics and structures. Complete sealing to prevent re-entry while protecting bat populations.", icon: Icons.bat },
  { name: "Dead Animal Removal", desc: "Professional removal of deceased animals from walls, crawlspaces, attics, and yards with full odor elimination.", icon: Icons.skull },
  { name: "Attic Cleanup & Sanitation", desc: "Thorough cleanup of animal waste, contaminated insulation, and sanitization to restore your attic to safe condition.", icon: Icons.broom },
  { name: "Humane Trapping & Exclusion", desc: "Live trapping with relocation 10-15+ miles away. Complete exclusion work to seal entry points and prevent return.", icon: Icons.trap },
];

const allServices = [
  "Snake Removal & Identification", "Wildlife Removal", "Bat Removal", "Squirrel Removal",
  "Dead Animal Removal", "Bird Control", "Attic Cleanup & Sanitation", "Humane Trapping & Exclusion",
  "32-Point Property Inspection", "Animal Relocation", "Repair & Sealing",
];

const reviews = [
  { text: "David was awesome and very prompt of helping us identify a snake shed at our house!!", name: "Tim Garlow", src: "Google" },
  { text: "Sent a pic of a snake skin and David promptly identified the snake and put me at ease!", name: "Toni Burns", src: "Google" },
  { text: "We emailed David after finding his information online. He helped identify a snake skin we found in our yard.", name: "Crys Bruce", src: "Google" },
  { text: "Very pleased with the service! I sent an email and had a response within 20 minutes! We had found a snake skin.", name: "Justin Via", src: "Google" },
  { text: "Sent David some photos of a snake skin that I found in my backyard. Within a few hours he had identified it.", name: "Linda Bollingham", src: "Google" },
];

const areas = ["Little Rock", "Conway", "North Little Rock", "Benton", "Bryant", "Cabot", "Jacksonville", "Maumelle", "Sherwood", "Hot Springs Village"];

// --- Main Component ---
export default function PestAnimalRemovalLittleRock() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("par-lr-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("par-lr-auth", "1"); setAuthed(true); }
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

  // SEO
  useEffect(() => {
    if (!authed) return;
    document.title = "Wildlife Removal Little Rock AR | Pest Animal Removal";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Wildlife removal & snake identification in Little Rock, AR. 24/7 humane methods. Call (501) 436-4995." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Little Rock" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "PestControlService",
      name: "Pest Animal Removal", telephone: "+15014364995",
      address: { "@type": "PostalAddress", streetAddress: "112 E 11th St #3", addressLocality: "Little Rock", addressRegion: "AR", postalCode: "72202", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.7465, longitude: -92.2896 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "29", bestRating: "5" },
      founder: { "@type": "Person", givenName: "David" },
      description: "Pest Animal Removal is a wildlife removal and snake identification service in Little Rock, AR. Owner-operated by David. 24/7/365, humane methods.",
      areaServed: areas.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Wildlife Removal Services", itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })) },
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
    { label: "About", id: "why-us" },
    { label: "Reviews", id: "reviews" },
    { label: "Areas", id: "areas" },
  ];

  // ============================================================
  // PASSWORD GATE
  // ============================================================
  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: PRIMARY, fontFamily: "'DM Sans', sans-serif", padding: 20 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
        <form onSubmit={submitPw} style={{ background: WHITE, borderRadius: 16, padding: "56px 44px", boxShadow: "0 24px 80px rgba(0,0,0,0.3)", textAlign: "center", maxWidth: 400, width: "100%" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, letterSpacing: "-0.5px", marginBottom: 8 }}>
            <span style={{ color: PRIMARY }}>Pest Animal</span>{" "}
            <span style={{ color: ACCENT }}>Removal</span>
          </div>
          <div style={{ fontSize: 13, color: TEXT_LIGHT, letterSpacing: 1, marginBottom: 32 }}>WEBSITE PREVIEW</div>
          <input
            type="password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setPwBad(false); }}
            placeholder="Password"
            style={{ width: "100%", padding: "14px 16px", fontSize: 18, textAlign: "center", letterSpacing: 6, border: `2px solid ${pwBad ? "#c00" : BORDER}`, borderRadius: 8, outline: "none", boxSizing: "border-box", fontFamily: "'DM Sans', sans-serif" }}
          />
          {pwBad && <div style={{ color: "#c00", fontSize: 13, marginTop: 8 }}>Incorrect password</div>}
          <button type="submit" style={{ marginTop: 20, width: "100%", padding: "14px 0", background: PRIMARY, color: WHITE, border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>View Site</button>
        </form>
      </div>
    );
  }

  // ============================================================
  // MAIN SITE
  // ============================================================
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: TEXT, overflowX: "hidden" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { margin: 0; -webkit-font-smoothing: antialiased; }
        @media(max-width:899px){
          .hero-grid { flex-direction: column !important; }
          .hero-left, .hero-right { width: 100% !important; max-width: 100% !important; }
          .hero-right { margin-top: 40px !important; }
          .trust-row { flex-wrap: wrap !important; }
          .trust-stat { width: 50% !important; padding: 20px 16px !important; }
          .svc-grid { grid-template-columns: 1fr !important; }
          .why-grid { flex-direction: column !important; }
          .why-left, .why-right { width: 100% !important; }
          .badge-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns a, .hero-btns button { width: 100% !important; text-align: center !important; justify-content: center !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cta-heading { font-size: clamp(28px, 4vw, 44px) !important; }
        }
        @media(min-width:900px){
          .mobile-menu-btn { display: none !important; }
          .floating-mobile-cta { display: none !important; }
        }
      `}</style>

      {/* ===== NAV ===== */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, padding: "0 40px", transition: "all 0.4s ease", background: scrolled ? PRIMARY : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid rgba(255,255,255,0.08)` : "none" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, letterSpacing: "-0.5px", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span style={{ color: scrolled ? WHITE : PRIMARY }}>Pest Animal</span>{" "}
            <span style={{ color: ACCENT }}>Removal</span>
          </div>
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background: "none", border: "none", color: scrolled ? "rgba(255,255,255,0.85)" : TEXT_MID, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "color 0.3s" }}>
                {l.label}
              </button>
            ))}
          </div>
          <a className="nav-cta-desktop" href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ACCENT, color: WHITE, padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ display: "flex" }}>{Icons.phone}</span> Call Now
          </a>
          <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)} style={{ background: "none", border: "none", color: scrolled ? WHITE : TEXT, cursor: "pointer", display: "none", alignItems: "center" }}>
            {mobileMenu ? Icons.x : Icons.menu}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div style={{ position: "fixed", inset: 0, zIndex: 998, background: PRIMARY, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background: "none", border: "none", color: WHITE, fontSize: 24, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              {l.label}
            </button>
          ))}
          <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: ACCENT, color: WHITE, padding: "16px 36px", borderRadius: 6, fontSize: 18, fontWeight: 700, textDecoration: "none", marginTop: 16, fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ display: "flex" }}>{Icons.phone}</span> {PHONE}
          </a>
        </div>
      )}

      {/* ===== HERO (Cream, Split 55/45) ===== */}
      <section style={{ background: CREAM, padding: "140px 40px 110px", minHeight: "80vh", display: "flex", alignItems: "center" }}>
        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 48, alignItems: "center", width: "100%" }}>
          {/* Left 55% */}
          <div className="hero-left" style={{ width: "55%", flexShrink: 0 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(30,58,47,0.08)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ color: ACCENT, display: "flex" }}>{Icons.shield}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: PRIMARY, letterSpacing: 0.5 }}>Licensed & Insured Wildlife Control</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: "-1.5px", color: TEXT, margin: "0 0 20px" }}>
              Little Rock's{" "}
              <em style={{ color: ACCENT, fontStyle: "italic" }}>Humane Wildlife</em>{" "}
              Removal Expert
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: TEXT_MID, maxWidth: 520, marginBottom: 24 }}>
              Owner-operated by David. Snake identification via photo, 24/7 wildlife removal, and humane relocation throughout Central Arkansas.
            </p>
            {/* Star row + mini review */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
              <Stars />
              <span style={{ fontSize: 14, color: TEXT_MID, fontStyle: "italic" }}>"I sent an email and had a response within 20 minutes!"</span>
              <span style={{ fontSize: 13, color: TEXT_LIGHT }}>- Justin Via</span>
            </div>
            {/* Buttons */}
            <div className="hero-btns" style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: ACCENT, color: WHITE, padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(184,105,74,0.3)", transition: "transform 0.2s", fontFamily: "'DM Sans', sans-serif" }}>
                <span style={{ display: "flex" }}>{Icons.phone}</span> Call David Now
              </a>
              <button onClick={() => scrollTo("services")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: `1.5px solid ${BORDER}`, color: PRIMARY, padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                View Services
              </button>
            </div>
          </div>
          {/* Right 45% — Form */}
          <div className="hero-right" style={{ width: "45%", flexShrink: 0 }}>
            <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "40px 32px", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
              {!formSubmitted ? (
                <form onSubmit={handleForm}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600, marginBottom: 6, color: TEXT }}>Get a Free Quote</h3>
                  <p style={{ fontSize: 14, color: TEXT_LIGHT, marginBottom: 24 }}>We respond within the hour.</p>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "14px 16px", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 16, marginBottom: 14, background: CREAM, outline: "none", fontFamily: "'DM Sans', sans-serif" }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: "100%", padding: "14px 16px", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 16, marginBottom: 14, background: CREAM, outline: "none", fontFamily: "'DM Sans', sans-serif" }}
                  />
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ width: "100%", padding: "14px 16px", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 16, marginBottom: 20, background: CREAM, outline: "none", color: formData.service ? TEXT : TEXT_LIGHT, fontFamily: "'DM Sans', sans-serif", appearance: "none" }}
                  >
                    <option value="" disabled>Select a service</option>
                    {allServices.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <button type="submit" style={{ width: "100%", padding: "16px 0", background: PRIMARY, color: WHITE, border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                    Get My Free Quote
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ marginBottom: 16 }}>{Icons.checkCircle}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600, marginBottom: 8, color: TEXT }}>We Got It!</h3>
                  <p style={{ fontSize: 14, color: TEXT_MID, lineHeight: 1.6 }}>David will be in touch shortly.<br />For emergencies, call{" "}
                    <a href={PHONE_TEL} style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>{PHONE}</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR (White, borders) ===== */}
      <section style={{ background: WHITE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="trust-row" style={{ maxWidth: 1200, margin: "0 auto", display: "flex" }}>
          {[
            { num: "5.0", label: "Google Rating", desc: "Perfect score" },
            { num: "29+", label: "Reviews", desc: "All 5-star" },
            { num: "24/7", label: "Availability", desc: "365 days a year" },
            { num: "100%", label: "Humane Methods", desc: "Relocate, never harm" },
          ].map((s, i) => (
            <div className="trust-stat" key={i} style={{ flex: 1, padding: "32px 24px", textAlign: "center", borderRight: i < 3 ? `1px solid ${BORDER}` : "none" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 600, color: PRIMARY, letterSpacing: "-0.5px" }}>{s.num}</div>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: TEXT, marginTop: 4 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: TEXT_LIGHT, marginTop: 2 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES (Cream, 3-col grid) ===== */}
      <section id="services" style={{ background: CREAM, padding: "110px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ width: 48, height: 2, background: ACCENT, margin: "0 auto 20px" }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: TEXT_LIGHT, marginBottom: 14 }}>What We Do</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.5px", color: TEXT }}>Wildlife Removal Services</h2>
          </div>
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {services.map((svc, i) => (
              <div key={i} style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease", cursor: "default", position: "relative", overflow: "hidden" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; e.currentTarget.querySelector(".card-accent").style.width = "100%"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.querySelector(".card-accent").style.width = "0%"; }}
              >
                <div className="card-accent" style={{ position: "absolute", top: 0, left: 0, height: 2, width: "0%", background: ACCENT, transition: "width 0.3s ease" }} />
                <div style={{ color: ACCENT, marginBottom: 16 }}>{svc.icon}</div>
                <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, lineHeight: 1.3, marginBottom: 10, color: TEXT, fontFamily: "'DM Sans', sans-serif" }}>{svc.name}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: TEXT_MID }}>{svc.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 48, fontSize: 15, color: TEXT_MID }}>
            Questions? Call David directly at{" "}
            <a href={PHONE_TEL} style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* ===== WHY US (Primary dark, 2-col) ===== */}
      <section id="why-us" style={{ background: PRIMARY, padding: "110px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ width: 48, height: 2, background: ACCENT, margin: "0 auto 20px" }} />
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>Why Choose Us</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.5px", color: WHITE }}>One Man. Perfect Rating.</h2>
          </div>
          <div className="why-grid" style={{ display: "flex", gap: 56, alignItems: "flex-start" }}>
            {/* Left: text + credentials */}
            <div className="why-left" style={{ width: "50%" }}>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
                David runs Pest Animal Removal as a one-man operation with a perfect 5.0 Google rating across 29 reviews. That kind of track record doesn't happen by accident.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 32 }}>
                His standout service? Rapid snake identification via email. Customers send a photo of a snake or shed skin and David identifies the species within minutes. He drives 10-15+ miles to relocate every animal he captures rather than euthanize. Every job includes a 32-point property inspection.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {["Perfect 5.0 rating across all reviews", "Licensed & insured wildlife control", "Humane relocation, never euthanization", "24/7/365 emergency availability", "32-point property inspection included", "Rapid snake ID via photo"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: ACCENT, display: "flex", flexShrink: 0 }}>{Icons.check}</span>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.85)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: 2x2 badges */}
            <div className="why-right" style={{ width: "50%" }}>
              <div className="badge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { icon: Icons.shield, title: "Licensed & Insured", desc: "Full coverage for every job. Peace of mind for your property." },
                  { icon: Icons.clock, title: "24/7 Availability", desc: "Wildlife emergencies don't wait. Neither does David." },
                  { icon: Icons.heart, title: "Humane Methods", desc: "Every animal captured alive is relocated miles away safely." },
                  { icon: Icons.search, title: "Snake ID via Photo", desc: "Send a pic, get the species. Usually within minutes." },
                ].map((b, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "30px 24px" }}>
                    <div style={{ color: ACCENT, marginBottom: 14 }}>{b.icon}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: WHITE, marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>{b.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS (White, carousel with dots) ===== */}
      <section id="reviews" style={{ background: WHITE, padding: "110px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 48, height: 2, background: ACCENT, margin: "0 auto 20px" }} />
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: TEXT_LIGHT, marginBottom: 14 }}>Testimonials</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.5px", color: TEXT, marginBottom: 56 }}>5.0 Stars on Google</h2>
          {/* Carousel Card */}
          <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "48px 40px", minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Stars />
            <p style={{ fontSize: 19, lineHeight: 1.7, color: TEXT, fontStyle: "italic", margin: "20px 0 24px", maxWidth: 600 }}>
              "{reviews[reviewIdx].text}"
            </p>
            <div style={{ fontSize: 15, fontWeight: 700, color: PRIMARY }}>{reviews[reviewIdx].name}</div>
            <div style={{ fontSize: 13, color: TEXT_LIGHT, marginTop: 2 }}>{reviews[reviewIdx].src}</div>
          </div>
          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 28 }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewIdx(i)}
                aria-label={`Review ${i + 1}`}
                style={{ width: i === reviewIdx ? 28 : 10, height: 10, borderRadius: 5, background: i === reviewIdx ? ACCENT : BORDER, border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
              />
            ))}
          </div>
          <p style={{ marginTop: 40, fontSize: 15, color: TEXT_MID }}>
            Ready to experience the difference? Call{" "}
            <a href={PHONE_TEL} style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>{PHONE}</a>
          </p>
        </div>
      </section>

      {/* ===== SERVICE AREAS (Cream, pills) ===== */}
      <section id="areas" style={{ background: CREAM, padding: "110px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 48, height: 2, background: ACCENT, margin: "0 auto 20px" }} />
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: TEXT_LIGHT, marginBottom: 14 }}>Service Areas</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.5px", color: TEXT, marginBottom: 56 }}>Serving Central Arkansas</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {areas.map((area) => (
              <span
                key={area}
                title={`Wildlife Removal in ${area}, AR`}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 100, fontSize: 14, fontWeight: 500, color: TEXT, cursor: "default", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = PRIMARY; e.currentTarget.style.color = WHITE; e.currentTarget.style.borderColor = PRIMARY; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = WHITE; e.currentTarget.style.color = TEXT; e.currentTarget.style.borderColor = BORDER; }}
              >
                <span style={{ display: "flex", flexShrink: 0 }}>{Icons.mapPin}</span>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA (White, top border) ===== */}
      <section style={{ background: WHITE, borderTop: `1px solid ${BORDER}`, padding: "110px 40px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 className="cta-heading" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.5px", color: TEXT, marginBottom: 16 }}>
            Wildlife problem?{" "}<br />
            <em style={{ color: ACCENT, fontStyle: "italic" }}>Call David.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: TEXT_MID, marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
            Honest pricing, humane methods, and a perfect 5.0 rating. Available 24/7, 365 days a year.
          </p>
          <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: ACCENT, color: WHITE, padding: "20px 44px", borderRadius: 6, fontSize: 18, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(184,105,74,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ display: "flex" }}>{Icons.phone}</span> {PHONE}
          </a>
        </div>
      </section>

      {/* ===== FOOTER (Primary) ===== */}
      <footer style={{ background: PRIMARY, padding: "80px 40px 0" }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 56, paddingBottom: 56 }}>
          {/* Col 1 */}
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, letterSpacing: "-0.5px", marginBottom: 16 }}>
              <span style={{ color: WHITE }}>Pest Animal</span>{" "}
              <span style={{ color: ACCENT }}>Removal</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 300 }}>
              Professional wildlife removal and snake identification serving Little Rock and Central Arkansas. Owner-operated by David. Available 24/7/365.
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
              112 E 11th St #3<br />Little Rock, AR 72202
            </p>
            <a href={PHONE_TEL} style={{ fontSize: 14, color: ACCENT, textDecoration: "none", fontWeight: 600, display: "block", marginTop: 8 }}>{PHONE}</a>
          </div>
          {/* Col 2: Services */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Services</div>
            {["Snake Removal & ID", "Wildlife Removal", "Bat Removal", "Dead Animal Removal", "Attic Cleanup", "Humane Trapping"].map((s) => (
              <div key={s} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>{s}</div>
            ))}
          </div>
          {/* Col 3: Areas */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Areas</div>
            {areas.map((a) => (
              <div key={a} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>{a}</div>
            ))}
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "24px 0", maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            &copy; {new Date().getFullYear()} Pest Animal Removal. All rights reserved.
          </span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Licensed & Insured</span>
        </div>
      </footer>

      {/* ===== FLOATING MOBILE CTA ===== */}
      <div className="floating-mobile-cta" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 998, background: ACCENT, boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", padding: 0 }}>
        <a href={PHONE_TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 0", color: WHITE, fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
          <span style={{ display: "flex" }}>{Icons.phone}</span> Call David - {PHONE}
        </a>
      </div>

      {/* Bottom padding for mobile floating CTA */}
      <div className="floating-mobile-cta" style={{ height: 60 }} />
    </div>
  );
}

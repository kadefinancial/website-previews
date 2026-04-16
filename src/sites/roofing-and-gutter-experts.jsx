// Layout: Custom | Industry: Roofing | City: Springdale
import { useState, useEffect } from "react";

const PHONE = "(479) 435-3837";
const TEL = "tel:+14794353837";
const EMAIL = "roofingand@guttersxpert.com";
const ADDRESS = "707 S 48th St, Springdale, AR 72762";
const BIZ = "Roofing & Gutter Experts LLC";
const OWNER = "Emmanuel Torres";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  mail: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  mapPinLg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C41E3A" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  roof: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>,
  gutter: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>,
  siding: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>,
  soffit: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M4 20V8l8-5 8 5v12"/><line x1="4" y1="12" x2="20" y2="12"/></svg>,
  fence: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="4" x2="4" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="20" y1="4" x2="20" y2="20"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="2" y1="15" x2="22" y2="15"/><path d="M3 4l1-2 1 2"/><path d="M11 4l1-2 1 2"/><path d="M19 4l1-2 1 2"/></svg>,
  clock: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
  award: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  heart: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  clipboard: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>,
  emergency: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
};

const Stars = () => <span style={{ display: "inline-flex", gap: 2 }}>{[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}</span>;

const navPages = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "reviews", label: "Reviews" },
  { key: "contact", label: "Contact" },
];

const serviceCards = [
  { title: "Roofing", desc: "Full roof replacement, storm damage repair, and new construction roofing. GAF-certified installations backed by industry-leading warranties that protect your home for decades.", icon: Icons.roof },
  { title: "Gutters", desc: "Seamless gutter installation, gutter guard systems, and downspout solutions that channel water away from your foundation and protect your home's exterior.", icon: Icons.gutter },
  { title: "Siding", desc: "Vinyl, fiber cement, and engineered wood siding installed with precision. Transform your home's curb appeal while adding an extra layer of weather protection.", icon: Icons.siding },
  { title: "Soffit & Fascia", desc: "Repair and replacement of soffit and fascia to seal your roofline, improve ventilation, and keep pests and moisture out of your attic space.", icon: Icons.soffit },
  { title: "Fencing", desc: "Wood, vinyl, and metal fencing built for Arkansas weather. Privacy fences, decorative options, and storm-damaged fence repair and replacement.", icon: Icons.fence },
];

const homeReviews = [
  { name: "Tina Kendall", text: "From the first phone call to the final cleanup, Roofing & Gutter Experts were professional and thorough. They replaced our entire roof after a hailstorm — handled the insurance process, kept us informed, and finished on time. The crew was respectful of our property, and the new roof looks incredible. Highly recommend!", source: "Google" },
  { name: "Gerald James", text: "Emmanuel and his crew went above and beyond. We had a leak that two other companies couldn't fix. These guys found the root cause in an hour, gave us an honest estimate, and had it repaired by end of day. Five stars isn't enough. If you need roofing work in Springdale, don't waste time — call them first.", source: "Google" },
  { name: "Wayne Patton", text: "I was nervous about a full roof replacement, but John and Braxton walked me through every step. The work was done in two days, the crew cleaned up like they were never there, and the price was exactly what was quoted. No surprises, no hidden fees. This is how contracting should be done.", source: "Google" },
];

const serviceAreas = [
  "Springdale", "Fayetteville", "Rogers", "Bentonville", "Lowell",
  "Bethel Heights", "Elm Springs", "Tontitown", "Johnson", "Goshen",
  "Farmington", "Prairie Grove", "Lincoln", "West Fork", "Greenland",
  "Siloam Springs", "Centerton", "Bella Vista", "Cave Springs", "Highfill",
];

export default function RoofingAndGutterExperts() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("rge-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroFormDone, setHeroFormDone] = useState(false);
  const [contactFormDone, setContactFormDone] = useState(false);

  const submitPw = (e) => { e.preventDefault(); if (pw === "roof") { sessionStorage.setItem("rge-auth", "1"); setAuthed(true); } else { setPwBad(true); setPw(""); } };
  const navigate = (page) => { setCurrentPage(page); setMenuOpen(false); };

  useEffect(() => { if (!authed) return; const fn = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, [authed]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [currentPage]);

  // SEO
  useEffect(() => {
    if (!authed) return;
    const pageTitles = {
      home: "Roofing & Gutter Experts | GAF Certified Roofer Springdale AR | (479) 435-3837",
      about: "About Roofing & Gutter Experts | Emmanuel Torres | Springdale AR",
      contact: "Contact Roofing & Gutter Experts | Free Roof Inspection Springdale AR",
      services: "Roofing Services in Springdale, AR | Roof Repair, Gutters, Siding & More",
      reviews: "Reviews | Roofing & Gutter Experts | 5.0 Stars, 107+ Google Reviews",
    };
    const pageMeta = {
      home: "GAF-certified roofing, gutters, siding & exteriors in Springdale AR. 5.0 stars, 107+ Google reviews, BBB A+ rated. Call (479) 435-3837 for a free estimate.",
      about: "Meet Emmanuel Torres and the Roofing & Gutter Experts team. Founded in 2021, GAF certified, BBB A+ accredited. Serving all of Northwest Arkansas.",
      contact: "Get your free roof inspection from Roofing & Gutter Experts in Springdale AR. Available 24/7. Call (479) 435-3837 or request online.",
      services: "Full-service roofing, gutter, siding, soffit & fascia, and fencing contractor in Springdale AR. GAF certified, insurance claim specialists. One crew, one call. Free estimates — (479) 435-3837.",
      reviews: "Read 107+ five-star reviews from real homeowners. See why Springdale and NWA trust Roofing & Gutter Experts for roofing, gutters, siding, and more.",
    };
    document.title = pageTitles[currentPage] || pageTitles.home;
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: pageMeta[currentPage] || pageMeta.home });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Springdale" });
    add("script", {
      type: "application/ld+json", textContent: JSON.stringify({
        "@context": "https://schema.org", "@type": "RoofingContractor",
        name: BIZ, telephone: "+14794353837", email: EMAIL,
        address: { "@type": "PostalAddress", streetAddress: "707 S 48th St", addressLocality: "Springdale", addressRegion: "AR", postalCode: "72762", addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: 36.1722, longitude: -94.1288 },
        openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" }],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "107", bestRating: "5" },
        founder: { "@type": "Person", name: OWNER }, foundingDate: "2021-10",
        description: "Roofing & Gutter Experts LLC provides GAF-certified roofing, gutter, siding, and exterior services in Springdale and all of Northwest Arkansas. 5.0 stars with 107+ Google reviews. BBB A+ accredited.",
        areaServed: serviceAreas.map(a => ({ "@type": "City", name: a })),
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Services", itemListElement: ["Roofing", "Gutters", "Siding", "Soffit & Fascia", "Fencing"].map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
        memberOf: [{ "@type": "Organization", name: "Better Business Bureau" }, { "@type": "Organization", name: "GAF" }],
      })
    });
    return () => els.forEach(el => { try { document.head.removeChild(el); } catch (e) { } });
  }, [authed, currentPage]);

  const yr = new Date().getFullYear();

  // =========== PASSWORD GATE ===========
  if (!authed) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1B1B1B", fontFamily: "'Open Sans',sans-serif" }}>
      <form onSubmit={submitPw} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "48px 40px", textAlign: "center", maxWidth: 380, width: "100%" }}>
        <div style={{ fontFamily: "'Oswald',sans-serif", fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          <span style={{ color: "#fff" }}>Roofing & Gutter </span><span style={{ color: "#C41E3A" }}>Experts</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 32 }}>Enter password to preview</p>
        <input type="password" value={pw} onChange={e => { setPw(e.target.value); setPwBad(false); }} placeholder="Password" style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: pwBad ? "2px solid #C41E3A" : "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: 15, marginBottom: 16, boxSizing: "border-box", fontFamily: "'Open Sans',sans-serif" }} />
        {pwBad && <p style={{ color: "#C41E3A", fontSize: 13, marginBottom: 12 }}>Incorrect password</p>}
        <button type="submit" style={{ width: "100%", padding: "14px", borderRadius: 8, background: "#C41E3A", color: "#fff", border: "none", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5 }}>View Site Preview</button>
      </form>
    </div>
  );

  // =========== WORDMARK ===========
  const Wordmark = ({ light, size = 22 }) => (
    <div style={{ fontFamily: "'Oswald',sans-serif", fontSize: size, fontWeight: 700, letterSpacing: -0.5, cursor: "pointer", lineHeight: 1.2 }} onClick={() => navigate("home")}>
      <span style={{ color: light ? "#fff" : "#1B1B1B" }}>Roofing & Gutter </span>
      <span style={{ color: "#C41E3A" }}>Experts</span>
    </div>
  );

  // =========== RED LINE ===========
  const RedLine = ({ center = true }) => (
    <div style={{ width: 48, height: 3, background: "#C41E3A", margin: center ? "0 auto 20px" : "0 0 20px 0", borderRadius: 2 }} />
  );

  // =========== SECTION HEAD ===========
  // onBlue: true = on sky blue background (white text), false = on white background (black text)
  const SectionHead = ({ eyebrow, heading, sub, onBlue, center = true }) => (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 56 }}>
      <RedLine center={center} />
      {eyebrow && <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: onBlue ? "rgba(255,255,255,0.7)" : "#4A4A4A", marginBottom: 14, fontFamily: "'Open Sans',sans-serif" }}>{eyebrow}</p>}
      <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.5, color: onBlue ? "#FFFFFF" : "#1B1B1B", marginBottom: sub ? 16 : 0 }}>{heading}</h2>
      {sub && <p style={{ fontSize: 17, lineHeight: 1.7, color: onBlue ? "rgba(255,255,255,0.85)" : "#4A4A4A", maxWidth: 600, margin: center ? "0 auto" : undefined, fontFamily: "'Open Sans',sans-serif" }}>{sub}</p>}
    </div>
  );

  // =========== NAVIGATION ===========
  const Navigation = () => (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        @media(max-width:768px){
          .desktop-only{display:none!important}
          .mobile-only{display:flex!important}
          .hero-split{grid-template-columns:1fr!important}
          .footer-grid{grid-template-columns:1fr!important}
          .services-grid{grid-template-columns:1fr!important}
          .reviews-grid{grid-template-columns:1fr!important}
          .about-cards{grid-template-columns:1fr!important}
          .contact-split{grid-template-columns:1fr!important}
          .trust-strip{flex-wrap:wrap!important;gap:20px!important}
          .trust-strip>div{min-width:140px!important}
          .city-pills{justify-content:center!important}
        }
        @media(min-width:769px){
          .mobile-only{display:none!important}
        }
      `}</style>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "12px clamp(24px,5vw,64px)" : "18px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "#FFFFFF" : "transparent", borderBottom: scrolled ? "1px solid #e0e0e0" : "none", transition: "all 0.4s ease" }}>
        <Wordmark />
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {navPages.map(p => (
            <button key={p.key} onClick={() => navigate(p.key)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: currentPage === p.key ? "#C41E3A" : "#1B1B1B", fontFamily: "'Open Sans',sans-serif", padding: "4px 0", borderBottom: currentPage === p.key ? "2px solid #C41E3A" : "2px solid transparent", transition: "all 0.2s" }}>{p.label}</button>
          ))}
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#1B1B1B", fontSize: 14, fontWeight: 600, fontFamily: "'Open Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
          <button onClick={() => navigate("contact")} style={{ background: "#C41E3A", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 600, fontFamily: "'Oswald',sans-serif", border: "none", cursor: "pointer", letterSpacing: 0.5 }}>Free Estimate</button>
        </div>
        <button className="mobile-only" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "#1B1B1B", display: "flex" }}>{Icons.menu}</button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "#1B1B1B", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, overflowY: "auto", padding: "80px 24px 40px" }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>{Icons.x}</button>
          {navPages.map(p => (
            <button key={p.key} onClick={() => navigate(p.key)} style={{ background: "none", border: "none", color: currentPage === p.key ? "#C41E3A" : "#fff", fontSize: 22, fontWeight: 600, cursor: "pointer", fontFamily: "'Oswald',sans-serif" }}>{p.label}</button>
          ))}
          <a href={TEL} style={{ background: "#C41E3A", color: "#fff", padding: "18px 48px", borderRadius: 8, fontSize: 18, fontWeight: 600, fontFamily: "'Oswald',sans-serif", marginTop: 12 }}>Call {PHONE}</a>
        </div>
      )}
    </>
  );

  // =========== FOOTER ===========
  const Footer = () => (
    <footer style={{ background: "#FFFFFF", borderTop: "1px solid #e0e0e0", padding: "80px clamp(24px,5vw,64px) 40px", fontFamily: "'Open Sans',sans-serif" }}>
      <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1.2fr", gap: 48 }}>
        <div>
          <Wordmark size={22} />
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4A4A", marginTop: 16, marginBottom: 20 }}>Northwest Arkansas's trusted roofing and exterior contractor. GAF certified, BBB A+ accredited, and proudly serving Springdale and surrounding communities since 2021.</p>
          <p style={{ fontSize: 13, color: "#4A4A4A", lineHeight: 1.6 }}>707 S 48th St<br />Springdale, AR 72762</p>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "#999", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'Oswald',sans-serif" }}>Services</h4>
          {["Roofing", "Gutters", "Siding", "Soffit & Fascia", "Fencing"].map(s => (
            <button key={s} onClick={() => navigate("services")} style={{ display: "block", background: "none", border: "none", color: "#4A4A4A", fontSize: 14, cursor: "pointer", fontFamily: "'Open Sans',sans-serif", padding: "4px 0", marginBottom: 6 }}>{s}</button>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "#999", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'Oswald',sans-serif" }}>Contact</h4>
          <a href={TEL} style={{ display: "flex", alignItems: "center", gap: 8, color: "#C41E3A", fontSize: 14, fontFamily: "'Open Sans',sans-serif", marginBottom: 10, fontWeight: 600 }}><span style={{ color: "#C41E3A" }}>{Icons.phone}</span> {PHONE}</a>
          <a href={`mailto:${EMAIL}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "#4A4A4A", fontSize: 14, fontFamily: "'Open Sans',sans-serif", marginBottom: 10 }}><span style={{ color: "#C41E3A" }}>{Icons.mail}</span> {EMAIL}</a>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#4A4A4A", fontSize: 14, fontFamily: "'Open Sans',sans-serif", marginBottom: 10 }}><span style={{ color: "#C41E3A" }}>{Icons.clock}</span> 24/7 Available</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#4A4A4A", fontSize: 14, fontFamily: "'Open Sans',sans-serif" }}><span style={{ color: "#C41E3A" }}>{Icons.mapPinLg}</span> Springdale, AR</div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid #e0e0e0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 13, color: "#999", fontFamily: "'Open Sans',sans-serif" }}>&copy; {yr} {BIZ}. All rights reserved.</p>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "#999", fontFamily: "'Open Sans',sans-serif" }}>GAF Certified</span>
          <span style={{ fontSize: 12, color: "#999", fontFamily: "'Open Sans',sans-serif" }}>BBB A+</span>
        </div>
      </div>
    </footer>
  );

  // =========== FLOATING MOBILE CTA ===========
  const MobileCTA = () => (
    <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%", zIndex: 998, display: "none" }}>
      <a href={TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#C41E3A", color: "#fff", padding: "16px 24px", fontSize: 16, fontWeight: 600, fontFamily: "'Oswald',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", width: "100%", textAlign: "center" }}>
        {Icons.phone} Call (479) 435-3837
      </a>
    </div>
  );

  // =========== CITY PILLS ===========
  const CityPills = () => (
    <div className="city-pills" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
      {serviceAreas.map(c => (
        <span key={c} style={{ padding: "8px 20px", borderRadius: 50, background: "#fff", border: "1px solid #e0e0e0", fontSize: 14, fontWeight: 500, color: "#1B1B1B", fontFamily: "'Open Sans',sans-serif" }}>{c}</span>
      ))}
    </div>
  );

  // =========== TRUST STRIP ===========
  const TrustStrip = () => (
    <div className="trust-strip" style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", padding: "32px clamp(24px,5vw,64px)", background: "#FFFFFF", borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}>
      {[
        { label: "5.0 Google Rating", icon: Icons.star },
        { label: "107+ Reviews", icon: Icons.quote },
        { label: "GAF Certified", icon: Icons.shield },
        { label: "A+ BBB", icon: Icons.award },
        { label: "24/7 Available", icon: Icons.clock },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 150 }}>
          <span style={{ color: "#C41E3A" }}>{item.icon}</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1B1B1B", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.3 }}>{item.label}</span>
        </div>
      ))}
    </div>
  );

  // =========== PAGE: HOME ===========
  const HomePage = () => (
    <>
      {/* Hero */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 100px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto 0", marginBottom: 0 }}>
          <div style={{ background: "#E8E8E8", borderRadius: 12, height: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, marginBottom: 48 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            <span style={{ fontSize: 13, color: "#999", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>Project Photo — Completed Roof</span>
          </div>
        </div>
        <div className="hero-split" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "55% 45%", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(196,30,58,0.08)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C41E3A" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#C41E3A", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Open Sans',sans-serif" }}>GAF Certified &bull; Springdale, AR</span>
            </div>
            <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: -1, color: "#1B1B1B", marginBottom: 20 }}>
              Your Roof. Our Reputation.{" "}<span style={{ fontStyle: "italic", color: "#C41E3A" }}>Zero Compromise.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#4A4A4A", marginBottom: 24, maxWidth: 500, fontFamily: "'Open Sans',sans-serif" }}>
              GAF-certified roofing, gutters, siding, and exteriors — built to outlast every Arkansas storm.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
              <Stars />
              <span style={{ fontSize: 14, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>5.0 stars — 107+ Google reviews</span>
            </div>
            <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#C41E3A", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: "none", boxShadow: "0 4px 20px rgba(196,30,58,0.3)", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.3 }}>{Icons.phone} Call {PHONE}</a>
              <button onClick={() => navigate("services")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#1B1B1B", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid #d0d0d0", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.3 }}>Our Services {Icons.arrow}</button>
            </div>
          </div>
          {/* Lead Form */}
          <div style={{ background: "#fff", borderRadius: 12, padding: "40px 32px", border: "1px solid #e0e0e0", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
            {!heroFormDone ? (<>
              <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 24, fontWeight: 700, color: "#1B1B1B", marginBottom: 6, textAlign: "center" }}>Get Your Free Estimate</h3>
              <p style={{ fontSize: 14, color: "#4A4A4A", marginBottom: 24, textAlign: "center", fontFamily: "'Open Sans',sans-serif" }}>We respond within the hour.</p>
              <form onSubmit={e => { e.preventDefault(); setHeroFormDone(true); }}>
                <input type="text" placeholder="Your name" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 12, background: "#F8F9FA", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="tel" placeholder="Phone number" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 12, background: "#F8F9FA", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="text" placeholder="Property address" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 20, background: "#F8F9FA", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <button type="submit" style={{ width: "100%", padding: "16px", borderRadius: 8, background: "#C41E3A", color: "#fff", border: "none", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 16px rgba(196,30,58,0.25)" }}>Get My Free Estimate</button>
              </form>
            </>) : (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(196,30,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}><span style={{ color: "#C41E3A" }}>{Icons.check}</span></div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 22, fontWeight: 700, color: "#1B1B1B", marginBottom: 8 }}>Request Received!</h3>
                <p style={{ fontSize: 14, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>We'll be in touch shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Intro Paragraph */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#68D0F0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <RedLine />
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 24, lineHeight: 1.15 }}>Northwest Arkansas's Trusted Roofing Team</h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontFamily: "'Open Sans',sans-serif" }}>
            When a storm rolls through Northwest Arkansas, Roofing & Gutter Experts is one of the first calls homeowners make — and for good reason. With a perfect 5.0-star Google rating, over 107 five-star reviews, GAF certification, and BBB A+ accreditation, this locally owned company has quickly become one of the most trusted names in NWA roofing. Founded in October 2021 by Emmanuel Torres, the company has built its reputation on honest estimates, clean job sites, and the kind of customer service that earns reviews like "Don't waste time — call them first."
          </p>
        </div>
      </section>

      {/* Services Snapshot */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="What We Do" heading="Our Services" sub="From roofs to gutters to full exterior transformations — we handle it all." />
          <div style={{ background: "#E8E8E8", borderRadius: 12, height: 300, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, marginBottom: 24 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            <span style={{ fontSize: 13, color: "#999", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>Our Work</span>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24, marginBottom: 48 }}>
            {serviceCards.map((s, i) => (
              <div key={i} style={{ background: "#F8F9FA", borderRadius: 12, padding: "32px 24px", textAlign: "center", border: "1px solid #e8e8e8", transition: "box-shadow 0.3s" }}>
                <div style={{ color: "#C41E3A", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 18, fontWeight: 600, color: "#1B1B1B", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={() => navigate("services")} style={{ background: "#C41E3A", color: "#fff", padding: "16px 40px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5 }}>View All Services {Icons.arrow}</button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#68D0F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Testimonials" heading="Don't Take Our Word For It" sub="Hear from homeowners across Northwest Arkansas." onBlue />
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, height: 150, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, marginBottom: 24 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>Team on Job Site</span>
          </div>
          <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {homeReviews.map((r, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, padding: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <Stars />
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", marginTop: 16, marginBottom: 20, fontFamily: "'Open Sans',sans-serif" }}>"{r.text}"</p>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 16 }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#1B1B1B", fontFamily: "'Oswald',sans-serif" }}>{r.name}</p>
                  <p style={{ fontSize: 12, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{r.source} Review</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button onClick={() => navigate("reviews")} style={{ background: "#C41E3A", color: "#fff", border: "none", cursor: "pointer", fontSize: 16, fontWeight: 600, fontFamily: "'Oswald',sans-serif", display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 40px", borderRadius: 6, letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(196,30,58,0.3)" }}>Read More Reviews {Icons.arrow}</button>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <SectionHead eyebrow="Service Area" heading="Proudly Serving All of Northwest Arkansas" />
          <CityPills />
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#68D0F0", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 20, lineHeight: 1.15 }}>Storm Damage? Aging Roof? We've Got You Covered.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>
            Whether you're dealing with storm damage, planning a full roof replacement, or need gutters, siding, or exterior repairs — Roofing & Gutter Experts delivers honest estimates, expert craftsmanship, and 5-star service every time.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => navigate("contact")} style={{ background: "#C41E3A", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(196,30,58,0.3)" }}>Get Your Free Estimate</button>
            <a href={TEL} style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: ABOUT ===========
  const AboutPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#68D0F0", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, marginBottom: 16 }}>
            Built on Integrity. Backed by{" "}<span style={{ fontStyle: "italic", color: "#C41E3A" }}>100+ Five-Star Reviews.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", fontFamily: "'Open Sans',sans-serif" }}>The story behind Springdale's most trusted roofing team.</p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div className="hero-split" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: 48, alignItems: "start" }}>
          <div>
            <SectionHead eyebrow="Our Story" heading="From the Ground Up" center={false} />
            <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 16, lineHeight: 1.8, color: "#4A4A4A" }}>
              <p style={{ marginBottom: 24 }}>
                Emmanuel Torres didn't start Roofing & Gutter Experts with a marketing budget or a corporate playbook. He started it in October 2021 with a truck, a crew he trusted, and a simple philosophy: do honest work at a fair price, and the reputation will follow. That bet paid off. In just a few years, the company has earned a perfect 5.0-star rating on Google with over 107 reviews — a milestone most contractors never reach in a decade.
              </p>
              <p style={{ marginBottom: 24 }}>
                Based in Springdale, Arkansas, Roofing & Gutter Experts serves homeowners across all of Northwest Arkansas — from Fayetteville and Rogers to Bentonville, Siloam Springs, and everywhere in between. The team specializes in full roof replacements, storm damage repair, seamless gutter installations, siding, soffit and fascia, and fencing. Every project is backed by GAF certification, BBB A+ accreditation, and the kind of hands-on attention that comes from a company where the owner still answers the phone.
              </p>
              <p>
                What sets Emmanuel and his team apart isn't just the credentials — it's the consistency. Review after review, customers highlight the same things: clear communication, honest pricing, crews that show up on time and leave the property cleaner than they found it, and a genuine commitment to getting the job done right the first time. That kind of track record doesn't happen by accident. It happens when every person on the team — from the office to the roof — treats every home like it's their own.
              </p>
            </div>
          </div>
          <div>
            <div style={{ background: "#E8E8E8", borderRadius: 12, height: 250, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              <span style={{ fontSize: 13, color: "#999", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>Emmanuel Torres — Owner</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#68D0F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Why Choose Us" heading="What Sets Us Apart" onBlue />
          <div className="about-cards" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              { icon: Icons.shield, title: "GAF Certified", desc: "As a GAF-certified contractor, we offer industry-leading warranties and access to the highest-quality roofing materials. This certification is earned — not bought — and means our installations meet the manufacturer's strictest standards." },
              { icon: Icons.award, title: "A+ BBB Accredited", desc: "We've maintained an A+ rating with the Better Business Bureau since 2023. That means zero unresolved complaints, transparent business practices, and a proven commitment to customer satisfaction." },
              { icon: Icons.clipboard, title: "Insurance Claim Experts", desc: "Storm damage is stressful enough without navigating the insurance process alone. We work directly with your insurance company, document every detail, and make sure you get the coverage you're entitled to — no surprises, no shortfalls." },
              { icon: Icons.heart, title: "Locally Owned & Operated", desc: "We live and work in Northwest Arkansas. Emmanuel Torres and the team aren't a franchise or a storm chaser outfit — we're your neighbors. When we put our name on a job, our reputation in this community is on the line." },
            ].map((card, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 12, padding: "36px 28px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", textAlign: "center" }}>
                <div style={{ color: "#C41E3A", marginBottom: 16 }}>{card.icon}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 20, fontWeight: 600, color: "#1B1B1B", marginBottom: 12 }}>{card.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Values */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <RedLine />
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: "#1B1B1B", marginBottom: 24, lineHeight: 1.15 }}>A Team Customers Trust by Name</h2>
          <div style={{ background: "#E8E8E8", borderRadius: 12, height: 250, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, marginBottom: 24 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            <span style={{ fontSize: 13, color: "#999", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>Crew Photo on Job Site</span>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>
            Our crew — including team members customers praise by name like John, Braxton, and Dave — shows up on time, respects your property, and doesn't cut corners. It's the reason our reviews don't just mention the company — they mention the people. When you hire Roofing & Gutter Experts, you're not getting a faceless crew. You're getting a team that takes personal pride in every shingle laid, every gutter hung, and every nail driven.
          </p>
        </div>
      </section>

      {/* About CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#68D0F0", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 20 }}>Ready to Work With a Roofer You Can Trust?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", marginBottom: 32, fontFamily: "'Open Sans',sans-serif" }}>Get your free roof inspection and see the Roofing & Gutter Experts difference for yourself.</p>
          <button onClick={() => navigate("contact")} style={{ background: "#C41E3A", color: "#fff", padding: "18px 44px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(196,30,58,0.25)" }}>Request Your Free Inspection</button>
        </div>
      </section>
    </>
  );

  // =========== PAGE: CONTACT ===========
  const ContactPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#68D0F0", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, marginBottom: 16 }}>
            Get Your Free Roof Inspection{" "}<span style={{ fontStyle: "italic", color: "#C41E3A" }}>Today</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", fontFamily: "'Open Sans',sans-serif" }}>We're available 24/7 — call, email, or fill out the form below.</p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "60px clamp(24px,5vw,64px)", background: "#FFFFFF", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>
            Whether you need a full roof replacement, storm damage assessment, gutter installation, or just want a professional opinion on your home's exterior — we're here to help. Every inspection is free, every estimate is honest, and we never pressure you into work you don't need. Fill out the form or give us a call and we'll get back to you fast.
          </p>
        </div>
      </section>

      {/* Contact Split */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
        <div className="contact-split" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "start" }}>
          {/* Form */}
          <div style={{ background: "#F8F9FA", borderRadius: 12, padding: "40px 36px", border: "1px solid #e0e0e0" }}>
            {!contactFormDone ? (<>
              <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 26, fontWeight: 700, color: "#1B1B1B", marginBottom: 6 }}>Request Your Free Inspection</h3>
              <p style={{ fontSize: 14, color: "#4A4A4A", marginBottom: 28, fontFamily: "'Open Sans',sans-serif" }}>We typically respond within the hour.</p>
              <form onSubmit={e => { e.preventDefault(); setContactFormDone(true); }}>
                <input type="text" placeholder="Your name" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="tel" placeholder="Phone number" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="text" placeholder="Property address" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 24, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <button type="submit" style={{ width: "100%", padding: "16px", borderRadius: 8, background: "#C41E3A", color: "#fff", border: "none", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 16px rgba(196,30,58,0.25)" }}>Request My Free Inspection</button>
              </form>
            </>) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(196,30,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}><span style={{ color: "#C41E3A" }}>{Icons.check}</span></div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 22, fontWeight: 700, color: "#1B1B1B", marginBottom: 8 }}>Request Received!</h3>
                <p style={{ fontSize: 14, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>We'll be in touch shortly to schedule your inspection.</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 24, fontWeight: 700, color: "#1B1B1B", marginBottom: 32 }}>Contact Information</h3>
            <div style={{ background: "#E8E8E8", borderRadius: 12, height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              <span style={{ fontSize: 13, color: "#999", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>Office / Team Photo</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(196,30,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#C41E3A" }}>{Icons.phone}</span></div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4A4A4A", marginBottom: 4, fontFamily: "'Open Sans',sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>Phone</p>
                  <a href={TEL} style={{ fontSize: 18, fontWeight: 600, color: "#1B1B1B", fontFamily: "'Oswald',sans-serif" }}>{PHONE}</a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(196,30,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#C41E3A" }}>{Icons.mail}</span></div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4A4A4A", marginBottom: 4, fontFamily: "'Open Sans',sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>Email</p>
                  <a href={`mailto:${EMAIL}`} style={{ fontSize: 16, fontWeight: 500, color: "#1B1B1B", fontFamily: "'Open Sans',sans-serif" }}>{EMAIL}</a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(196,30,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#C41E3A" }}>{Icons.mapPinLg}</span></div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4A4A4A", marginBottom: 4, fontFamily: "'Open Sans',sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>Address</p>
                  <p style={{ fontSize: 16, color: "#1B1B1B", fontFamily: "'Open Sans',sans-serif" }}>{ADDRESS}</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(196,30,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#C41E3A" }}>{Icons.clock}</span></div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4A4A4A", marginBottom: 4, fontFamily: "'Open Sans',sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>Hours</p>
                  <p style={{ fontSize: 16, color: "#1B1B1B", fontFamily: "'Open Sans',sans-serif" }}>24/7 — Always Available</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(196,30,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#C41E3A" }}>{Icons.emergency}</span></div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4A4A4A", marginBottom: 4, fontFamily: "'Open Sans',sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>Emergency Service</p>
                  <p style={{ fontSize: 16, color: "#1B1B1B", fontFamily: "'Open Sans',sans-serif" }}>Available — call anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section style={{ padding: "0 clamp(24px,5vw,64px)", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingBottom: 60 }}>
          <iframe
            title="Roofing & Gutter Experts Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d-94.1288!3d36.1722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s707+S+48th+St%2C+Springdale%2C+AR+72762!5e0!3m2!1sen!2sus!4v1"
            width="100%" height="400" style={{ border: 0, borderRadius: 12 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Service Area */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#68D0F0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <SectionHead eyebrow="Service Area" heading="Serving All of Northwest Arkansas" onBlue />
          <div className="city-pills" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {serviceAreas.map(c => (
              <span key={c} style={{ padding: "8px 20px", borderRadius: 50, background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", fontSize: 14, fontWeight: 500, color: "#1B1B1B", fontFamily: "'Open Sans',sans-serif" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustStrip />
    </>
  );

  // =========== PAGE: SERVICES ===========
  const servicesData = [
    {
      title: "Roof Replacement & Installation",
      sub: "Built to Outlast Every Arkansas Storm",
      photo: "Roof Installation",
      desc: "When it's time for a new roof, we don't cut corners. Every Roofing & Gutter Experts installation starts with a full tear-off down to the decking — no layering over old shingles. We inspect the deck for damage, replace any compromised wood, and install a complete GAF roofing system from the ice and water shield up. Our crews are trained to GAF's specifications, which means your roof qualifies for enhanced warranties that most contractors can't offer. Whether it's storm damage, age, or you're building new, we deliver a roof that's built to perform in Arkansas weather for decades.",
      cta: "Schedule Your Free Roof Inspection",
      ctaAction: () => navigate("contact"),
    },
    {
      title: "Roof Repair",
      sub: "Fast Fixes That Actually Last",
      photo: "Roof Repair",
      desc: "A small leak doesn't stay small for long. Whether it's missing shingles from last night's storm, damaged flashing around a chimney, or a persistent leak that nobody else has been able to track down — we find the root cause and fix it right. We don't upsell you into a full replacement when a targeted repair will do the job. Our repair crew carries the materials to handle most issues same-day, and every repair is backed by our workmanship guarantee. If it's an emergency, call us — we're available 24/7.",
      cta: "Call (479) 435-3837 for Emergency Repairs",
      ctaAction: null,
      ctaHref: TEL,
    },
    {
      title: "Gutter Installation & Repair",
      sub: "The System That Protects Everything Below Your Roof",
      photo: "Gutter Installation",
      desc: "Your gutters are the first line of defense against water damage to your foundation, siding, and landscaping. We install seamless aluminum gutters that are custom-measured and cut on-site for a perfect fit — no seams means no leaks. We also offer gutter guard systems that keep leaves and debris out so you're not climbing a ladder every season. If your existing gutters are sagging, leaking, or pulling away from the fascia, our crew can repair or replace them quickly and affordably.",
      cta: "Get a Free Gutter Estimate",
      ctaAction: () => navigate("contact"),
    },
    {
      title: "Siding",
      sub: "Protection and Curb Appeal in One",
      photo: "Siding Project",
      desc: "New siding transforms the look of your home while adding a critical layer of weather protection. We install vinyl, fiber cement, and engineered wood siding — each option chosen to match your budget, style, and the demands of Arkansas weather. Our installers pay close attention to color matching, trim details, and sealing every joint properly so your home looks great and stays protected. Whether you're replacing storm-damaged panels or upgrading your entire exterior, we handle it from start to finish.",
      cta: "See What New Siding Can Do",
      ctaAction: () => navigate("contact"),
    },
    {
      title: "Soffit & Fascia",
      sub: "The Details That Seal Your Roofline",
      photo: "Soffit & Fascia",
      desc: "Soffit and fascia might not be the first things you notice on a house, but they're some of the most important. They seal the gap between your roofline and your walls, keeping moisture, insects, and animals out of your attic. Damaged or rotting soffit and fascia can lead to serious problems — from mold growth to pest infestations. We replace worn-out materials with durable, weather-resistant options that protect your home and give your roofline a clean, finished look.",
      cta: "Get Your Roofline Inspected",
      ctaAction: () => navigate("contact"),
    },
    {
      title: "Fencing",
      sub: "Privacy, Security, and Property Value",
      photo: "Fence Installation",
      desc: "A quality fence adds privacy, security, and real value to your property. We build and install wood, vinyl, chain-link, and ornamental metal fences — designed for Arkansas weather and built to last. Whether you need a privacy fence for your backyard, a decorative fence for curb appeal, or a durable boundary for pets and kids, our crew handles the layout, permitting guidance, and installation so you don't have to juggle multiple contractors.",
      cta: "Get a Free Fence Estimate",
      ctaAction: () => navigate("contact"),
    },
  ];

  const ServicesPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#68D0F0", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, marginBottom: 16 }}>
            Complete Exterior Services — One Call, One Crew,{" "}<span style={{ fontStyle: "italic", color: "#C41E3A" }}>Done Right</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "60px clamp(24px,5vw,64px)", background: "#FFFFFF", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>
            Your home's exterior is a system — the roof, gutters, siding, soffit, fascia, and trim all work together to keep water out and your family safe. At Roofing & Gutter Experts, we handle every piece of that system so you're not juggling three different contractors and hoping their work lines up. One crew. One point of contact. One company standing behind all of it.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {servicesData.map((s, i) => {
        const isBlue = i % 2 === 1;
        return (
        <section key={i} style={{ padding: "80px clamp(24px,5vw,64px)", background: isBlue ? "#68D0F0" : "#FFFFFF" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <RedLine center={false} />
            <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: isBlue ? "#FFFFFF" : "#1B1B1B", marginBottom: 8, lineHeight: 1.15 }}>{s.title}</h2>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#C41E3A", marginBottom: 24, fontFamily: "'Open Sans',sans-serif" }}>{s.sub}</p>
            <div style={{ background: isBlue ? "rgba(255,255,255,0.15)" : "#E8E8E8", borderRadius: 12, height: 220, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={isBlue ? "rgba(255,255,255,0.5)" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              <span style={{ fontSize: 13, color: isBlue ? "rgba(255,255,255,0.5)" : "#999", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>{s.photo}</span>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: isBlue ? "rgba(255,255,255,0.85)" : "#4A4A4A", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>{s.desc}</p>
            {s.ctaHref ? (
              <a href={s.ctaHref} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#C41E3A", color: "#fff", padding: "16px 36px", borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: "none", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.3, boxShadow: "0 4px 16px rgba(196,30,58,0.25)" }}>{Icons.phone} {s.cta}</a>
            ) : (
              <button onClick={s.ctaAction} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C41E3A", color: "#fff", padding: "16px 36px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.3, boxShadow: "0 4px 16px rgba(196,30,58,0.25)" }}>{s.cta} {Icons.arrow}</button>
            )}
          </div>
        </section>
        );
      })}

      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#68D0F0", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 20, lineHeight: 1.15 }}>Not Sure What You Need? We'll Come Take a Look.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>
            Most homeowners aren't sure exactly what they need — and that's perfectly fine. We'll send someone out to inspect your roof, gutters, siding, and exterior at no cost. You'll get an honest assessment, a clear explanation of your options, and a written estimate with no pressure and no obligation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => navigate("contact")} style={{ background: "#C41E3A", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(196,30,58,0.3)" }}>Schedule Your Free Inspection</button>
            <a href={TEL} style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: REVIEWS ===========
  const allReviews = [
    { name: "Tina Kendall", source: "Google", text: "The crew showed up right on time, every single day. They were professional from start to finish — kept the job site clean, communicated every step, and left our property looking better than they found it. You can tell this team takes pride in their work." },
    { name: "Yash Patel", source: "Google", text: "Excellent quality work at a price that was genuinely fair. Emmanuel was responsive to every question I had, and the crew delivered exactly what was promised. No surprises, no runaround. I'd recommend Roofing & Gutter Experts to anyone." },
    { name: "Gerald James", source: "Google", text: "Outstanding communication from the first phone call to the final walkthrough. The pricing was fair and transparent — no hidden fees. They showed up when they said they would and finished ahead of schedule. This is how every contractor should operate." },
    { name: "Wayne Patton", source: "Google", text: "I was dreading dealing with insurance after the hailstorm, but Emmanuel walked me through the entire claim process and made it completely painless. The new roof looks incredible, and I didn't have to stress about a single detail. Truly grateful." },
    { name: "Deb Pierce", source: "Google", text: "Great experience all around. They were honest about what actually needed to be done — didn't try to upsell me on work I didn't need. That kind of integrity is rare, and it's why I'll be calling them for any future exterior work." },
    { name: "Kimberly H", source: "Google", text: "I called on a Monday morning and they were at my house by Tuesday afternoon. The crew was professional, efficient, and the cleanup afterward was excellent. You'd never know they'd been there except for the brand-new gutters." },
    { name: "James Hale", source: "Google", text: "Reliable, skilled, and clearly experienced. The team knew exactly what they were doing up on that roof. The quality of workmanship is obvious — straight lines, clean edges, everything done right. I wouldn't call anyone else." },
    { name: "Phillip Gleason", source: "Google", text: "Top-notch service from a respectful, hard-working crew. They were efficient without cutting corners and treated our home like it was their own. Emmanuel runs a tight operation and it shows in every detail." },
    { name: "Mandy Epley", source: "Google", text: "The insurance process was seamless — they handled all the documentation and coordination so I didn't have to. And the finished product is beautiful. New roof, new gutters, everything matches perfectly. Couldn't be happier." },
    { name: "Liz Mora", source: "Google", text: "Professional from start to finish. The work ethic of this crew is something else — they showed up early, worked hard all day, and didn't leave until everything was perfect. I've already recommended them to two of my neighbors." },
    { name: "Karin Linenbrink", source: "Google", text: "Dependable crew with excellent results. They handled our insurance paperwork smoothly and kept us informed throughout the entire process. The roof looks fantastic and was done faster than expected. Highly recommend." },
    { name: "Jack Krupka", source: "Google", text: "Honest, thorough, and professional. They gave me a straight answer about what my roof needed — no pressure, no scare tactics. The repair was done quickly and has held up perfectly through two storms since. Trust these guys." },
    { name: "Kristin Winters", source: "Google", text: "Exceptional service from start to finish. I would use Roofing & Gutter Experts again without hesitation. The communication was clear, the work was flawless, and the price was exactly what was quoted. They've earned a customer for life." },
    { name: "Sherry S", source: "BBB", text: "Great workmanship and true professionalism. You can see the difference quality installation makes. They took their time to do it right and the results speak for themselves. Very satisfied with every aspect of the job." },
    { name: "Dale W", source: "BBB", text: "Reliable from day one. The quality of work exceeded my expectations, and they stood behind every commitment they made. When a small issue came up weeks later, they were back out the next morning to address it. That's integrity." },
    { name: "Elizabeth B", source: "BBB", text: "Thorough, professional, and honest — an A+ experience in every way. They explained everything clearly, kept the project on schedule, and the final result was exactly what they promised. I wish every contractor operated like this." },
    { name: "Jemima C", source: "BBB", text: "Excellent communication and follow-through on every detail. They kept me updated at every stage of the project and delivered exactly what was discussed. No miscommunication, no forgotten details. A refreshingly smooth experience." },
    { name: "Lori H", source: "BBB", text: "Fair pricing, quality work, and a respectful crew. They were careful with our landscaping, cleaned up thoroughly every day, and the finished roof looks amazing. It's clear they care about their reputation — and they've earned it." },
    { name: "TERRY O", source: "BBB", text: "Professional, timely, and high-quality work. They kept the project moving efficiently and the craftsmanship is evident everywhere you look. Emmanuel and his team clearly know what they're doing. Would hire again in a heartbeat." },
  ];

  const ReviewsPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#68D0F0", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, marginBottom: 16 }}>
            100+ Homeowners Trust Us With Their Roof.{" "}<span style={{ fontStyle: "italic", color: "#C41E3A" }}>Here's Why.</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "60px clamp(24px,5vw,64px)", background: "#FFFFFF", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 0 }}>
            We don't buy reviews. We don't beg for them. We earn them — by showing up on time, doing what we said we'd do, and leaving your property better than we found it.
          </p>
          <div style={{ background: "#E8E8E8", borderRadius: 12, height: 250, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, marginTop: 32 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            <span style={{ fontSize: 13, color: "#999", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>Completed Project — Drone Shot</span>
          </div>
        </div>
      </section>

      {/* Rating Callout */}
      <section style={{ padding: "60px clamp(24px,5vw,64px)", background: "#68D0F0", textAlign: "center" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div style={{ fontSize: "clamp(64px,8vw,96px)", fontWeight: 700, fontFamily: "'Oswald',sans-serif", color: "#FFFFFF", lineHeight: 1 }}>5.0</div>
          <p style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.85)", marginTop: 8, marginBottom: 12, fontFamily: "'Open Sans',sans-serif" }}>out of 5 stars on Google</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 12 }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#C41E3A" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ))}
          </div>
          <p style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5 }}>107+ verified reviews</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {allReviews.map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "32px 28px", border: "1px solid #e8e8e8" }}>
                <Stars />
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", marginTop: 16, marginBottom: 20, fontFamily: "'Open Sans',sans-serif" }}>"{r.text}"</p>
                <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 16 }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#1B1B1B", fontFamily: "'Oswald',sans-serif" }}>{r.name}</p>
                  <p style={{ fontSize: 12, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{r.source} Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#68D0F0", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 20, lineHeight: 1.15 }}>See For Yourself Why 100+ Homeowners Choose Us</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>
            Ready to experience the kind of service that earns five-star reviews? Get your free estimate today.
          </p>
          <button onClick={() => navigate("contact")} style={{ background: "#C41E3A", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(196,30,58,0.3)" }}>Get Your Free Estimate</button>
        </div>
      </section>
    </>
  );

  // =========== RENDER ===========
  const pages = { home: HomePage, about: AboutPage, contact: ContactPage, services: ServicesPage, reviews: ReviewsPage };
  const CurrentPageComponent = pages[currentPage] || HomePage;

  return (
    <div style={{ fontFamily: "'Open Sans',sans-serif", color: "#1B1B1B", background: "#fff" }}>
      <Navigation />
      <CurrentPageComponent />
      <Footer />
      <MobileCTA />
    </div>
  );
}
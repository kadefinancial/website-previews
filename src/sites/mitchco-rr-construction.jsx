// Layout: Custom | Industry: Roofing | City: Oklahoma City
import { useState, useEffect } from "react";

const PHONE = "(405) 768-5179";
const TEL = "tel:+14057685179";
const ADDRESS = "8001 South I-35 Service Road, Oklahoma City, OK 73149";
const BIZ = "MitchCo RR Construction Inc";
const DISPLAY = "MitchCo Roofing & Remodeling";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  mail: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  mapPinLg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#cd292d" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  roof: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>,
  kitchen: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="12" y1="4" x2="12" y2="10"/><circle cx="7" cy="14" r="1"/><circle cx="17" cy="14" r="1"/></svg>,
  bathroom: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z"/><path d="M6 12V5a2 2 0 012-2h1"/><line x1="1" y1="20" x2="7" y2="20"/><line x1="17" y1="20" x2="23" y2="20"/></svg>,
  porch: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><line x1="9" y1="21" x2="9" y2="14"/><line x1="15" y1="21" x2="15" y2="14"/><line x1="5" y1="14" x2="19" y2="14"/></svg>,
  door: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>,
  storm: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
  checkCircle: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cd292d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11.5 14.5 15.5 9.5"/></svg>,
  clock: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  facebook: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  award: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  bbb: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  certified: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  google: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>,
  tv: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  heart: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  tool: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  gallery: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
  clipboard: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>,
  message: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  blog: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
};

const Stars = () => <span style={{display:"inline-flex",gap:2}}>{[...Array(5)].map((_,i)=><span key={i}>{Icons.star}</span>)}</span>;

const navPages = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "gallery", label: "Gallery" },
  { key: "projects", label: "Projects" },
  { key: "reviews", label: "Reviews" },
  { key: "blog", label: "Blog" },
  { key: "contact", label: "Contact" },
];

const serviceCards = [
  { key: "services", title: "Roofing", desc: "Complete residential and commercial roof replacement, repair, and storm damage restoration. GAF and Malarkey certified with 50-year non-pro-rated warranties.", icon: Icons.roof },
  { key: "services", title: "Remodeling", desc: "Full kitchen and bathroom transformations from cabinets and countertops to tile work and fixtures. Bob works directly with you on every detail.", icon: Icons.kitchen },
  { key: "services", title: "Custom Porches & Outdoor", desc: "Porch construction, carports, pergolas, and outdoor living spaces designed to extend your home and stand up to Oklahoma weather.", icon: Icons.porch },
];

const reviews = [
  { name: "Rita Griffin", text: "Bob Mitchell did an outstanding job on our roof. His crew was professional, courteous, and finished ahead of schedule. The quality of work is top-notch. Highly recommend MitchCo to anyone needing roofing work.", source: "Google" },
  { name: "Gwendolyn Brown", text: "MitchCo did a beautiful job on our home. Bob was involved every step of the way. He treated our home like it was his own. You won't find a more honest contractor in Oklahoma City.", source: "Google" },
  { name: "Teresa Simpson", text: "We had our roof replaced after storm damage and the experience was seamless. Bob handled the insurance process and made everything easy. The new roof looks amazing and the warranty gives us great peace of mind.", source: "Google" },
  { name: "Lou Butenschoen", text: "Bob remodeled our kitchen and both bathrooms. The attention to detail was incredible. He was there every day making sure everything was done right. After 45 years in the business, you can tell he takes pride in his craft.", source: "Google" },
  { name: "Mark Henderson", text: "Called Bob for a roof inspection after the last hail storm. He was honest and fair — didn't try to sell me what I didn't need. Ended up doing the full replacement and the crew was professional start to finish.", source: "Google" },
];

export default function MitchCoRRConstruction() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("mitchco-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroFormDone, setHeroFormDone] = useState(false);
  const [contactFormDone, setContactFormDone] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const submitPw = (e) => { e.preventDefault(); if (pw === "roof") { sessionStorage.setItem("mitchco-auth", "1"); setAuthed(true); } else { setPwBad(true); setPw(""); } };

  const navigate = (page) => { setCurrentPage(page); setMenuOpen(false); };

  useEffect(() => { if (!authed) return; const fn = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, [authed]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [currentPage]);

  // SEO
  useEffect(() => {
    if (!authed) return;
    document.title = "Roofing Oklahoma City OK | MitchCo Roofing & Remodeling";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Oklahoma City roofing & remodeling since 1978. GAF & Malarkey certified, BBB A+ rated. Call Bob at (405) 768-5179." });
    add("meta", { name: "geo.region", content: "US-OK" });
    add("meta", { name: "geo.placename", content: "Oklahoma City" });
    add("script", {
      type: "application/ld+json", textContent: JSON.stringify({
        "@context": "https://schema.org", "@type": "RoofingContractor",
        name: BIZ, telephone: "+14057685179",
        address: { "@type": "PostalAddress", streetAddress: "8001 South I-35 Service Road", addressLocality: "Oklahoma City", addressRegion: "OK", postalCode: "73149", addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: 35.3733, longitude: -97.4971 },
        openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" }],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "125", bestRating: "5" },
        founder: { "@type": "Person", name: "Bob Mitchell" }, foundingDate: "1978",
        description: "MitchCo Roofing & Remodeling provides premier roofing, kitchen remodeling, bathroom remodeling, and storm damage services in Oklahoma City. GAF & Malarkey certified, BBB A+ rated since 1978.",
        areaServed: ["Oklahoma City", "Moore", "Norman", "Edmond", "Midwest City", "Del City"].map(a => ({ "@type": "City", name: a })),
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Services", itemListElement: ["Roofing", "Remodeling", "Custom Porches & Outdoor"].map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
        memberOf: [{ "@type": "Organization", name: "Better Business Bureau" }, { "@type": "Organization", name: "GAF" }], sameAs: ["https://www.facebook.com/BuiltToLastOK"],
      })
    });
    return () => els.forEach(el => { try { document.head.removeChild(el); } catch (e) { } });
  }, [authed]);

  const yr = new Date().getFullYear();

  // Wordmark
  const Wordmark = ({ light, size = 22 }) => (
    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: size, fontWeight: 600, letterSpacing: -0.5, cursor: "pointer" }} onClick={() => navigate("home")}>
      <span style={{ color: light ? "#fff" : "var(--accent)" }}>MitchCo</span>{" "}
      <span style={{ color: "var(--primary)" }}>Roof & Remodeling</span>
    </div>
  );

  // Red line (replaces gold line)
  const RedLine = ({ center = true }) => (
    <div style={{ width: 48, height: 2, background: "var(--primary)", margin: center ? "0 auto 20px" : "0 0 20px 0" }} />
  );

  // Section heading
  const SectionHead = ({ eyebrow, heading, sub, light, center = true }) => (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 56 }}>
      <RedLine center={center} />
      {eyebrow && <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: light ? "rgba(255,255,255,0.5)" : "var(--text-light)", marginBottom: 14 }}>{eyebrow}</p>}
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: light ? "#fff" : "var(--accent)", marginBottom: sub ? 16 : 0 }}>{heading}</h2>
      {sub && <p style={{ fontSize: 17, lineHeight: 1.7, color: light ? "rgba(255,255,255,0.7)" : "var(--text-mid)", maxWidth: 600, margin: center ? "0 auto" : undefined }}>{sub}</p>}
    </div>
  );

  // =========== NAVIGATION ===========
  const Navigation = () => (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "12px clamp(24px,5vw,64px)" : "18px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(40,40,37,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease" }}>
        <Wordmark light={scrolled} />
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {navPages.map(p => (
            <button key={p.key} onClick={() => navigate(p.key)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: currentPage === p.key ? "var(--primary)" : scrolled ? "rgba(255,255,255,0.8)" : "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", padding: "4px 0", borderBottom: currentPage === p.key ? "2px solid var(--primary)" : "2px solid transparent", transition: "all 0.2s" }}>{p.label}</button>
          ))}
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--primary)", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", whiteSpace: "nowrap" }}>{Icons.phone} {PHONE}</a>
        </div>
        <button className="mobile-only" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "#fff" : "var(--accent)", display: "flex" }}>{Icons.menu}</button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "var(--accent)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, overflowY: "auto", padding: "80px 24px 40px" }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>{Icons.x}</button>
          {navPages.map(p => (
            <button key={p.key} onClick={() => navigate(p.key)} style={{ background: "none", border: "none", color: currentPage === p.key ? "var(--primary)" : "#fff", fontSize: 20, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>{p.label}</button>
          ))}
          <a href={TEL} style={{ background: "var(--primary)", color: "#fff", padding: "18px 48px", borderRadius: 8, fontSize: 18, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", marginTop: 12 }}>Call {PHONE}</a>
        </div>
      )}
    </>
  );

  // =========== FOOTER ===========
  const Footer = () => (
    <footer style={{ background: "var(--accent)", padding: "80px clamp(24px,5vw,64px) 40px" }}>
      <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr", gap: 48 }}>
        <div>
          <Wordmark light size={22} />
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginTop: 16, marginBottom: 20 }}>Oklahoma City's trusted roofing and remodeling contractor since 1978. BBB A+ rated, GAF and Malarkey certified.</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>8001 South I-35 Service Road<br />Oklahoma City, OK 73149</p>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Services</h4>
          {["Roofing", "Remodeling", "Custom Porches & Outdoor"].map(s => (
            <button key={s} onClick={() => navigate("services")} style={{ display: "block", background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", padding: "4px 0", marginBottom: 6 }}>{s}</button>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Quick Links</h4>
          {[{ key: "about", label: "About" }, { key: "reviews", label: "Reviews" }, { key: "gallery", label: "Gallery" }, { key: "blog", label: "Blog" }, { key: "contact", label: "Contact" }].map(s => (
            <button key={s.key} onClick={() => navigate(s.key)} style={{ display: "block", background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", padding: "4px 0", marginBottom: 6 }}>{s.label}</button>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Contact</h4>
          <a href={TEL} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--primary)", fontSize: 14, fontFamily: "'DM Sans',sans-serif", marginBottom: 10, fontWeight: 600 }}><span style={{ color: "var(--primary)" }}>{Icons.phone}</span> {PHONE}</a>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "'DM Sans',sans-serif", marginBottom: 10 }}><span style={{ color: "var(--primary)" }}>{Icons.clock}</span> Mon-Fri 8 AM - 5 PM</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "'DM Sans',sans-serif", marginBottom: 10 }}><span style={{ color: "var(--primary)" }}>{Icons.mapPinLg}</span> Oklahoma City, OK</div>
          <a href="https://www.facebook.com/BuiltToLastOK" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "'DM Sans',sans-serif", marginTop: 12 }}><span style={{ color: "var(--primary)" }}>{Icons.facebook}</span> BuiltToLastOK</a>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>&copy; {yr} {BIZ}. All rights reserved.</p>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>BBB A+ Rated</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>GAF Certified</span>
        </div>
      </div>
    </footer>
  );

  // =========== FLOATING MOBILE CTA ===========
  const MobileCTA = () => (
    <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%", zIndex: 998, display: "none" }}>
      <a href={TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "16px 24px", fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", width: "100%", textAlign: "center" }}>
        {Icons.phone} Call Bob — {PHONE}
      </a>
    </div>
  );

  // =========== PAGE: HOME ===========
  const HomePage = () => (
    <>
      {/* Hero — Split Layout */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 100px", background: "var(--cream)" }}>
        <div className="hero-split" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "55% 45%", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(205,41,45,0.1)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Oklahoma City's Trusted Contractor Since 1978</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--accent)", marginBottom: 20 }}>
              Roofing & Remodeling{" "}<span style={{ fontStyle: "italic", color: "var(--primary)" }}>Built to Last</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 28, maxWidth: 500 }}>
              For over 45 years, Bob Mitchell has been delivering honest, quality craftsmanship to Oklahoma City homeowners. One roof at a time.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
              <Stars />
              <span style={{ fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", fontStyle: "italic" }}>"Bob Mitchell did an outstanding job" — Rita Griffin</span>
            </div>
            <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(205,41,45,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} Call Bob — {PHONE}</a>
              <button onClick={() => navigate("services")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--accent)", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid var(--border)", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Our Services {Icons.arrow}</button>
            </div>
          </div>
          {/* Lead Capture Form */}
          <div style={{ background: "#fff", borderRadius: 12, padding: "40px 32px", border: "1px solid var(--border)", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
            {!heroFormDone ? (<>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: "var(--accent)", marginBottom: 6, textAlign: "center" }}>Get a Free Estimate</h3>
              <p style={{ fontSize: 14, color: "var(--text-light)", marginBottom: 24, textAlign: "center", fontFamily: "'DM Sans',sans-serif" }}>We respond within the hour.</p>
              <form onSubmit={e => { e.preventDefault(); setHeroFormDone(true); }}>
                <input type="text" placeholder="Your name" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, marginBottom: 12, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="tel" placeholder="Phone number" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, marginBottom: 12, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box" }} />
                <select required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, marginBottom: 20, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box", color: "var(--text-mid)" }}>
                  <option value="">Service needed</option>
                  <option>Roofing</option>
                  <option>Kitchen Remodel</option>
                  <option>Bathroom Remodel</option>
                  <option>Room Addition</option>
                  <option>Siding</option>
                  <option>Storm Damage</option>
                  <option>Other</option>
                </select>
                <button type="submit" style={{ width: "100%", padding: "16px", background: "var(--primary)", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Get My Free Estimate</button>
              </form>
            </>) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(205,41,45,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: "var(--accent)", marginBottom: 8 }}>We Got It!</h3>
                <p style={{ fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>We'll be in touch shortly. For emergencies, call <a href={TEL} style={{ color: "var(--primary)", fontWeight: 600 }}>{PHONE}</a></p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "28px clamp(24px,5vw,64px)" }}>
        <div className="cred-row" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { icon: Icons.certified, label: "GAF Certified" },
            { icon: Icons.shield, label: "Malarkey Certified" },
            { icon: Icons.bbb, label: "BBB A+ Rated" },
            { icon: Icons.award, label: "Angie's List Award" },
            { icon: Icons.google, label: "Google Certified" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "var(--primary)" }}>{c.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Our Services" heading="What We Do Best" sub="From roofing to remodeling, Bob and his team deliver quality craftsmanship on every project." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {serviceCards.map((s, i) => (
              <div key={i} onClick={() => navigate(s.key)} style={{ background: "#fff", borderRadius: 12, padding: "36px 30px", border: "1px solid var(--border)", cursor: "pointer", transition: "all 0.3s ease", position: "relative", overflow: "hidden" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <span style={{ color: "var(--primary)" }}>{s.icon}</span>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--accent)", marginTop: 16, marginBottom: 10, fontFamily: "'DM Sans',sans-serif" }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 16 }}>{s.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--primary)", fontFamily: "'DM Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 6 }}>Learn More {Icons.arrow}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 15, color: "var(--text-mid)", marginTop: 40, fontFamily: "'DM Sans',sans-serif" }}>Questions? Call Bob directly at <a href={TEL} style={{ color: "var(--primary)", fontWeight: 600 }}>{PHONE}</a></p>
        </div>
      </section>

      {/* Why MitchCo — Dark Section */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--accent)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ width: 48, height: 2, background: "var(--primary)", marginBottom: 20 }} />
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>Why MitchCo</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#fff", marginBottom: 24 }}>One Roof at a Time</h2>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>
                For over 45 years, Bob Mitchell has built his reputation the old-fashioned way — by showing up, doing quality work, and treating every customer like a neighbor. No sales teams. No middlemen. When you hire MitchCo, you deal directly with Bob.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 32 }}>
                That hands-on approach is why Oklahoma City homeowners have trusted Bob since 1978. He doesn't cut corners, doesn't oversell, and stands behind every project with manufacturer-backed warranties.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["45+ years of continuous service", "BBB A+ rating", "GAF & Malarkey certified installer", "Angie's List Super Service Award — multiple years", "Featured on KFOR TV", "50-year non-pro-rated warranties available"].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "var(--primary)", flexShrink: 0 }}>{Icons.check}</span>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans',sans-serif" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="badge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { icon: Icons.shield, title: "45+ Years", desc: "Serving Oklahoma City since 1978" },
                { icon: Icons.bbb, title: "BBB A+ Rated", desc: "Highest rating from the Better Business Bureau" },
                { icon: Icons.certified, title: "GAF Certified", desc: "Factory-certified roofing installer" },
                { icon: Icons.award, title: "Award Winning", desc: "Angie's List Super Service Award" },
              ].map((b, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "28px 20px", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
                  <span style={{ color: "var(--primary)" }}>{b.icon}</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginTop: 12, marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>{b.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, fontFamily: "'DM Sans',sans-serif" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Reviews" heading="4.8 Stars on Google" sub={"Trusted by 125+ homeowners across Oklahoma City."} />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[reviews[0], reviews[1], reviews[2]].map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "36px 30px", border: "1px solid var(--border)" }}>
                <span style={{ color: "var(--primary)", opacity: 0.2 }}>{Icons.quote}</span>
                <div style={{ margin: "12px 0 16px" }}><Stars /></div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontStyle: "italic", marginBottom: 20 }}>"{r.text}"</p>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "var(--accent)", fontFamily: "'DM Sans',sans-serif" }}>{r.name}</p>
                  <p style={{ fontSize: 13, color: "var(--text-light)", fontFamily: "'DM Sans',sans-serif" }}>{r.source}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 15, color: "var(--text-mid)", marginTop: 40, fontFamily: "'DM Sans',sans-serif" }}>Ready to experience the difference? Call <a href={TEL} style={{ color: "var(--primary)", fontWeight: 600 }}>{PHONE}</a></p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 16 }}>Ready to Start Your Project?{"\n"}<span style={{ fontStyle: "italic", color: "var(--primary)" }}>Call Bob.</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36 }}>Honest pricing. Quality craftsmanship. Manufacturer-backed warranties. Bob handles every project personally.</p>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 48px", borderRadius: 6, fontSize: 18, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(205,41,45,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
        </div>
      </section>
    </>
  );

  // =========== PAGE: ABOUT ===========
  const AboutPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14 }}>About Us</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--accent)", marginBottom: 20 }}>
            Meet <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Bob Mitchell</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto" }}>Over 45 years of honest craftsmanship and a handshake you can count on.</p>
        </div>
      </section>

      {/* Bob's Story */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div className="hero-split" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ width: 48, height: 2, background: "var(--primary)", marginBottom: 20 }} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14 }}>Our Story</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 24 }}>Building Trust Since 1978</h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 20 }}>
              Bob Mitchell started MitchCo in 1978 with a simple philosophy: do quality work, be honest with people, and stand behind everything you build. Over 45 years later, that same philosophy drives every project.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 20 }}>
              Unlike larger contractors where you never meet the person in charge, Bob deals directly with every customer. He's on-site, he's accessible, and he takes personal pride in the outcome. When you call MitchCo, you talk to Bob.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text-mid)" }}>
              From roofing to complete kitchen and bathroom remodels, Bob and his team bring decades of experience and an attention to detail that larger companies simply can't match. It's the "one roof at a time" approach that has earned MitchCo its reputation across Oklahoma City.
            </p>
          </div>
          {/* Bob Mitchell Photo */}
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
            <img src="/mitchco-contact.avif" alt="Bob Mitchell" style={{ width: "100%", height: "auto", display: "block" }} />
            <div style={{ padding: "16px 20px", background: "var(--cream)", textAlign: "center" }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: "var(--accent)", fontFamily: "'DM Sans',sans-serif" }}>Bob Mitchell</p>
              <p style={{ fontSize: 13, color: "var(--text-light)", fontFamily: "'DM Sans',sans-serif" }}>Owner, Since 1978</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Credentials */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Credentials" heading="Awards & Certifications" sub="Recognized by the industry's top organizations for quality and integrity." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: Icons.certified, title: "GAF Certified", desc: "Factory-certified installer for GAF roofing systems with access to the best warranties in the industry." },
              { icon: Icons.shield, title: "Malarkey Certified", desc: "Certified installer for Malarkey Roofing Products, known for sustainable and durable roofing solutions." },
              { icon: Icons.bbb, title: "BBB A+ Rated", desc: "Highest rating from the Better Business Bureau, reflecting decades of trust and customer satisfaction." },
              { icon: Icons.award, title: "Angie's List Award", desc: "Angie's List Super Service Award winner multiple years running for outstanding customer service." },
              { icon: Icons.google, title: "Google Certified", desc: "Google-certified business with a 4.8-star rating backed by 125+ verified customer reviews." },
              { icon: Icons.tv, title: "KFOR TV Featured", desc: "Featured on KFOR TV as a trusted Oklahoma City contractor known for quality work and community service." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "36px 30px", border: "1px solid var(--border)", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <span style={{ color: "var(--primary)" }}>{c.icon}</span>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--accent)", marginTop: 16, marginBottom: 10, fontFamily: "'DM Sans',sans-serif" }}>{c.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to Last Philosophy — Dark Section */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--accent)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>Our Philosophy</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#fff", marginBottom: 24 }}>Built to Last</h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>
            Bob Mitchell doesn't believe in cutting corners. Every project is completed with quality materials, proven techniques, and the kind of care that comes from 45 years of personal experience. He'd rather turn down a job than do it halfway.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>
            That commitment to quality is backed by manufacturer warranties that stand the test of time — including 50-year non-pro-rated roofing warranties and unlimited wind coverage. When Bob says "built to last," he means it.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 40 }}>
            Bob is personally involved in every project from estimate to final walkthrough. He answers his own phone, shows up to your home, and makes sure the work meets his standards — the same standards he's upheld since 1978.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {["Quality Over Volume", "50-Year Warranties", "Owner On Every Job", "Unlimited Wind Coverage"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "var(--primary)" }}>{Icons.check}</span>
                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial — Lou Butenschoen */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--primary)", opacity: 0.2 }}>{Icons.quote}</span>
          <div style={{ margin: "16px 0 24px" }}><Stars /></div>
          <p style={{ fontSize: 20, lineHeight: 1.7, color: "var(--text-mid)", fontStyle: "italic", marginBottom: 24, fontFamily: "'Playfair Display',serif" }}>
            "{reviews[3].text}"
          </p>
          <p style={{ fontSize: 16, fontWeight: 700, color: "var(--accent)", fontFamily: "'DM Sans',sans-serif" }}>{reviews[3].name}</p>
          <p style={{ fontSize: 13, color: "var(--text-light)", fontFamily: "'DM Sans',sans-serif" }}>{reviews[3].source}</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 16 }}>Want to Work with Bob?{"\n"}<span style={{ fontStyle: "italic", color: "var(--primary)" }}>Give Him a Call.</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36 }}>No salespeople. No runaround. Just Bob, doing what he's done best for over 45 years.</p>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 48px", borderRadius: 6, fontSize: 18, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(205,41,45,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
        </div>
      </section>
    </>
  );

  // =========== PAGE: CONTACT ===========
  const ContactPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14 }}>Get In Touch</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--accent)", marginBottom: 20 }}>
            Start Your <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Project</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto" }}>Get in touch with Bob for a free estimate or to discuss your next project.</p>
        </div>
      </section>

      {/* Contact Split */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div className="contact-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.15, color: "var(--accent)", marginBottom: 8 }}>Send Us a Message</h2>
            <p style={{ fontSize: 15, color: "var(--text-light)", marginBottom: 32, fontFamily: "'DM Sans',sans-serif" }}>We typically respond within a few hours.</p>
            {!contactFormDone ? (
              <form onSubmit={e => { e.preventDefault(); setContactFormDone(true); }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>Name</label>
                  <input type="text" placeholder="Your name" required value={contactForm.name} onChange={e => setContactForm({ ...contactForm, name: e.target.value })} style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>Email</label>
                  <input type="email" placeholder="Your email" required value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })} style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>Phone</label>
                  <input type="tel" placeholder="Phone number" required value={contactForm.phone} onChange={e => setContactForm({ ...contactForm, phone: e.target.value })} style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>Service</label>
                  <select required value={contactForm.service} onChange={e => setContactForm({ ...contactForm, service: e.target.value })} style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box", color: "var(--text-mid)" }}>
                    <option value="">Select a service</option>
                    <option>Roofing</option>
                    <option>Kitchen Remodel</option>
                    <option>Bathroom Remodel</option>
                    <option>Room Addition</option>
                    <option>Siding</option>
                    <option>Storm Damage</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>Message</label>
                  <textarea placeholder="Tell us about your project..." rows={5} value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })} style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box", resize: "vertical" }} />
                </div>
                <button type="submit" style={{ width: "100%", padding: "16px", background: "var(--primary)", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Send Message</button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(205,41,45,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: "var(--accent)", marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>Bob will be in touch shortly. For urgent matters, call <a href={TEL} style={{ color: "var(--primary)", fontWeight: 600 }}>{PHONE}</a></p>
              </div>
            )}
          </div>

          {/* Office Info */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.15, color: "var(--accent)", marginBottom: 32 }}>Office Information</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(205,41,45,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "var(--primary)" }}>{Icons.mapPinLg}</span>
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4, fontFamily: "'DM Sans',sans-serif" }}>Address</p>
                  <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif" }}>8001 South I-35 Service Road<br />Oklahoma City, OK 73149</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(205,41,45,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "var(--primary)" }}>{Icons.phone}</span>
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4, fontFamily: "'DM Sans',sans-serif" }}>Phone</p>
                  <a href={TEL} style={{ fontSize: 15, color: "var(--primary)", fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>{PHONE}</a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(205,41,45,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "var(--primary)" }}>{Icons.clock}</span>
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4, fontFamily: "'DM Sans',sans-serif" }}>Hours</p>
                  <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif" }}>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Photo */}
            <div style={{ marginBottom: 40 }}>
              <img src="/mitchco-contact.avif" alt="MitchCo Office" style={{ width: "100%", height: "auto", borderRadius: 10 }} />
            </div>

            {/* Social */}
            <div>
              <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>Follow Us</p>
              <a href="https://www.facebook.com/BuiltToLastOK" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--primary)", fontSize: 15, fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>
                {Icons.facebook} BuiltToLastOK on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Service Areas" heading="Where We Work" sub="Proudly serving the Oklahoma City metro and surrounding communities." />
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {["Oklahoma City", "Moore", "Norman", "Edmond", "Midwest City", "Del City", "Yukon", "Mustang", "Bethany", "Warr Acres", "The Village", "Nichols Hills"].map((area, i) => (
              <span key={i} title={`Roofing in ${area}, OK`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", borderRadius: 50, border: "1px solid var(--border)", background: "#fff", fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", cursor: "default", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--accent)"; }} onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "var(--text-mid)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
                {Icons.mapPin} {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 16 }}>Ready to Get Started?{"\n"}<span style={{ fontStyle: "italic", color: "var(--primary)" }}>Call Bob Today.</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36 }}>Free estimates. Honest advice. No pressure. That's how Bob has done business for 45 years.</p>
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 48px", borderRadius: 6, fontSize: 18, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(205,41,45,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
        </div>
      </section>
    </>
  );

  // =========== PLACEHOLDER PAGES ===========
  const PlaceholderPage = ({ title, icon }) => (
    <>
      <section style={{ padding: "200px clamp(24px,5vw,64px) 160px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "var(--primary)", opacity: 0.3, display: "block", marginBottom: 24 }}>{icon}</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.15, color: "var(--accent)", marginBottom: 16 }}>{title}</h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36 }}>This page is coming soon. In the meantime, reach out to Bob directly to discuss your project.</p>
          <button onClick={() => navigate("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(205,41,45,0.3)" }}>Contact Bob {Icons.arrow}</button>
        </div>
      </section>
    </>
  );

  // =========== PAGE: SERVICES ===========
  const ServicesPage = () => {
    const services = [
      { icon: Icons.roof, title: "Roofing", desc: "MitchCo is a GAF and Malarkey certified roofing contractor with over 45 years of experience protecting Oklahoma City homes. We offer 50-year material and non-pro-rated warranties, unlimited wind warranties, and Bob personally oversees every roof installation.", bullets: ["New roof installation", "Roof replacement", "Roof repair", "Storm and hail damage restoration", "GAF & Malarkey certified installer", "50-year non-pro-rated warranty", "Unlimited wind warranty"] },
      { icon: Icons.kitchen, title: "Remodeling", desc: "From dream kitchens to spa-like bathrooms and everything in between, MitchCo delivers complete remodeling services with meticulous attention to detail. Bob works directly with you on every decision — from layout redesign to the finishing touches.", bullets: ["Full kitchen renovations", "Complete bathroom remodels", "Custom cabinetry", "Countertop installation", "Tile work", "Flooring replacement", "Fixture and hardware upgrades", "Layout redesign"] },
      { icon: Icons.porch, title: "Custom Porches & Outdoor Structures", desc: "Extend your living space with custom-built porches, carports, pergolas, and outdoor living areas. Bob designs and builds outdoor structures that complement your home and stand up to Oklahoma weather.", bullets: ["Covered porches", "Carports", "Pergolas", "Outdoor living spaces", "Custom designs", "Weather-resistant materials", "Seamless integration with your home"] },
    ];

    const serviceImages = [
      { src: "/mitchco-svc-roofing.avif", alt: "MitchCo Roofing" },
      { src: "/mitchco-gallery-remodel.avif", alt: "MitchCo Remodeling" },
      { src: "/mitchco-svc-porches.avif", alt: "Custom Porches" },
    ];

    const SvcPhoto = ({ i, title }) => {
      const img = serviceImages[i];
      return img ? (
        <img src={img.src} alt={img.alt} style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 10 }} />
      ) : (
        <div style={{ background: "#e5e7eb", borderRadius: 12, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: "#9ca3af", fontFamily: "'DM Sans',sans-serif" }}>{title} Photo</p>
        </div>
      );
    };

    return (
      <>
        {/* Hero Banner */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14 }}>What We Do</p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--accent)", marginBottom: 20 }}>
              Our <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Services</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto" }}>Comprehensive roofing and remodeling services backed by 45+ years of experience and manufacturer-certified warranties.</p>
          </div>
        </section>

        {/* Service Sections */}
        {services.map((svc, i) => (
          <section key={i} style={{ padding: "90px clamp(24px,5vw,64px)", background: i % 2 === 0 ? "var(--white)" : "var(--cream)" }}>
            <div className="hero-split" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              {i % 2 === 0 ? (
                <>
                  <div>
                    <span style={{ color: "var(--primary)", display: "block", marginBottom: 16 }}>{svc.icon}</span>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 16 }}>{svc.title}</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 24 }}>{svc.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {svc.bullets.map((b, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ color: "var(--primary)", flexShrink: 0 }}>{Icons.check}</span>
                          <span style={{ fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <SvcPhoto i={i} title={svc.title} />
                </>
              ) : (
                <>
                  <SvcPhoto i={i} title={svc.title} />
                  <div>
                    <span style={{ color: "var(--primary)", display: "block", marginBottom: 16 }}>{svc.icon}</span>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 16 }}>{svc.title}</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 24 }}>{svc.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {svc.bullets.map((b, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ color: "var(--primary)", flexShrink: 0 }}>{Icons.check}</span>
                          <span style={{ fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        ))}

        {/* Why Choose MitchCo — Dark Section */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--accent)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>Why Choose MitchCo</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#fff", marginBottom: 24 }}>One Roof at a Time</h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 40 }}>
              When you choose MitchCo, you're choosing 45+ years of proven craftsmanship, GAF and Malarkey certified installation, 50-year non-pro-rated warranties, and a contractor who believes in doing one job right before moving on to the next. Bob is personally on every job site because your home deserves that level of care.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
              {["45+ Years Experience", "GAF & Malarkey Certified", "50-Year Warranty", "Owner On Every Job", "One Roof at a Time"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--primary)" }}>{Icons.check}</span>
                  <span style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 16 }}>Need a Free Estimate?{"\n"}<span style={{ fontStyle: "italic", color: "var(--primary)" }}>Call Bob.</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36 }}>Bob provides honest, no-pressure estimates on every service we offer. Call today to discuss your project.</p>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 48px", borderRadius: 6, fontSize: 18, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(205,41,45,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
          </div>
        </section>
      </>
    );
  };

  // =========== PAGE: GALLERY ===========
  const GalleryPage = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Roofing", "Remodel", "Custom Porches", "Doors & Windows"];
    const galleryItems = [
      { label: "Roof Replacement", category: "Roofing", height: 260, image: "/mitchco-roof-1.avif" },
      { label: "Roof Replacement", category: "Roofing", height: 240, image: "/mitchco-roof-2.avif" },
      { label: "Roof Replacement", category: "Roofing", height: 270, image: "/mitchco-roof-3.avif" },
      { label: "Roofing", category: "Roofing", height: 250, image: "/mitchco-roof-4.avif" },
      { label: "Roofing", category: "Roofing", height: 280, image: "/mitchco-roof-5.avif" },
      { label: "Roofing", category: "Roofing", height: 240, image: "/mitchco-roof-6.avif" },
      { label: "Roofing", category: "Roofing", height: 260, image: "/mitchco-roof-7.avif" },
      { label: "Skylight Replacement", category: "Remodel", height: 260, image: "/mitchco-remodel-1.avif" },
      { label: "Kitchen Remodel", category: "Remodel", height: 240, image: "/mitchco-remodel-2.avif" },
      { label: "Room Addition", category: "Remodel", height: 270, image: "/mitchco-remodel-3.avif" },
      { label: "New Doors", category: "Remodel", height: 250, image: "/mitchco-remodel-4.avif" },
      { label: "Shower Remodel", category: "Remodel", height: 280, image: "/mitchco-remodel-5.avif" },
      { label: "Bathroom Remodel", category: "Remodel", height: 240, image: "/mitchco-remodel-6.avif" },
      { label: "Bathroom Remodel", category: "Remodel", height: 260, image: "/mitchco-remodel-7.avif" },
      { label: "Shower Remodel", category: "Remodel", height: 250, image: "/mitchco-remodel-8.avif" },
      { label: "Kitchen Remodel", category: "Remodel", height: 270, image: "/mitchco-remodel-9.avif" },
      { label: "Garage Conversion", category: "Remodel", height: 240, image: "/mitchco-remodel-10.avif" },
      { label: "Room Addition", category: "Remodel", height: 260, image: "/mitchco-remodel-11.avif" },
      { label: "Bathroom Remodel", category: "Remodel", height: 250, image: "/mitchco-remodel-12.avif" },
      { label: "Enclosed Porch", category: "Custom Porches", height: 260, image: "/mitchco-porch-1.avif" },
      { label: "Custom Porch & Windows", category: "Custom Porches", height: 240, image: "/mitchco-porch-2.avif" },
      { label: "Porch Beams", category: "Custom Porches", height: 270, image: "/mitchco-porch-3.avif" },
      { label: "Custom Porch", category: "Custom Porches", height: 250, image: "/mitchco-porch-4.avif" },
      { label: "Porch Framing", category: "Custom Porches", height: 280, image: "/mitchco-porch-5.avif" },
      { label: "Custom Porch", category: "Custom Porches", height: 240, image: "/mitchco-porch-6.avif" },
      { label: "Custom Pergola & Fireplace", category: "Custom Porches", height: 260, image: "/mitchco-porch-7.avif" },
      { label: "Door Replacement", category: "Doors & Windows", height: 260, image: "/mitchco-dw-1.avif" },
      { label: "Doors & Windows", category: "Doors & Windows", height: 240, image: "/mitchco-dw-2.avif" },
      { label: "New Skylight", category: "Doors & Windows", height: 270, image: "/mitchco-dw-3.avif" },
      { label: "New Windows", category: "Doors & Windows", height: 250, image: "/mitchco-dw-4.avif" },
      { label: "Before & After — Doors", category: "Doors & Windows", height: 280, image: "/mitchco-dw-5.avif" },
      { label: "Replacement Door & Windows", category: "Doors & Windows", height: 240, image: "/mitchco-dw-6.avif" },
      { label: "Window Replacement", category: "Doors & Windows", height: 260, image: "/mitchco-dw-7.avif" },
      { label: "Door Replacement", category: "Doors & Windows", height: 250, image: "/mitchco-dw-8.avif" },
    ];

    return (
      <>
        {/* Hero Banner */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14 }}>Portfolio</p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--accent)", marginBottom: 20 }}>
              Our <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Work</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto" }}>Browse our portfolio of completed roofing, remodeling, and restoration projects across Oklahoma City.</p>
          </div>
        </section>

        {/* Filter Tabs + Gallery Grid */}
        <section style={{ padding: "80px clamp(24px,5vw,64px) 110px", background: "var(--white)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Filter Tabs */}
            <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
              {filters.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} style={{ padding: "10px 24px", borderRadius: 50, border: activeFilter === f ? "none" : "1.5px solid var(--border)", background: activeFilter === f ? "var(--primary)" : "#fff", color: activeFilter === f ? "#fff" : "var(--text-mid)", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s" }}>{f}</button>
              ))}
            </div>

            {/* Masonry Grid */}
            <div style={{ columns: "3 300px", columnGap: 20 }}>
              {galleryItems.filter(item => activeFilter === "All" || item.category === activeFilter).map((item, i) => (
                <div key={i} style={{ ...(item.image ? { backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" } : { background: "#e5e7eb" }), borderRadius: 12, height: item.height, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, breakInside: "avoid", cursor: "pointer", transition: "all 0.3s ease", position: "relative", overflow: "hidden" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
                  {!item.image && <p style={{ fontSize: 15, fontWeight: 600, color: "#9ca3af", fontFamily: "'DM Sans',sans-serif" }}>{item.label}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 16 }}>Want to See Your Home <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Transformed?</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36 }}>Get a free estimate from Bob and start your project today. No pressure, just honest advice and quality craftsmanship.</p>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 48px", borderRadius: 6, fontSize: 18, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(205,41,45,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
          </div>
        </section>
      </>
    );
  };

  // =========== PAGE: PROJECTS ===========
  const ProjectsPage = () => {
    const projects = [
      {
        title: "Complete Roof Replacement",
        desc: "Full roof replacement using the GAF shingle system with a 50-year non-pro-rated warranty. Bob and his crew completed this project in just 2 days, minimizing disruption to the homeowner while delivering a roof built to last.",
        bullets: ["GAF Timberline HDZ shingle system", "50-year non-pro-rated warranty", "Unlimited wind warranty", "Completed in 2 days", "Full attic ventilation upgrade"],
        image: { src: "/mitchco-gallery-roof.avif", alt: "Roof Replacement" },
      },
      {
        title: "Dream Kitchen Remodel",
        desc: "A complete gut renovation that transformed an outdated kitchen into a modern, functional space. Bob worked directly with the homeowner on every design decision, from cabinet layout to countertop selection.",
        bullets: ["Full gut renovation", "Custom cabinetry", "Quartz countertops", "New flooring throughout", "Updated lighting and electrical", "Stainless steel appliances"],
        image: { src: "/mitchco-gallery-remodel.avif", alt: "Kitchen Remodel" },
      },
      {
        title: "Master Bathroom Transformation",
        desc: "This master bathroom was completely reimagined with a spacious walk-in shower, double vanity, and heated floors. Every detail was chosen to create a comfortable, spa-like retreat.",
        bullets: ["Walk-in shower with frameless glass", "Double vanity installation", "Heated tile floors", "Custom tile work", "New fixtures and hardware", "Improved ventilation"],
        image: { src: "/mitchco-svc-remodel.avif", alt: "Bathroom Remodel" },
      },
      {
        title: "Room Addition",
        desc: "Bob and his crew seamlessly added new living space to this home, handling everything from foundation to finish. The addition was designed to blend perfectly with the existing structure — you'd never know it wasn't part of the original build.",
        bullets: ["Custom room addition", "Foundation to finish construction", "Seamless integration with existing home", "Framing, electrical, and plumbing", "Interior finishing and trim", "Matched exterior to original home"],
        image: { src: "/mitchco-project-addition.avif", alt: "Room Addition" },
      },
    ];

    return (
      <>
        {/* Hero Banner */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14 }}>Case Studies</p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--accent)", marginBottom: 20 }}>
              Featured <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Projects</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto" }}>A closer look at some of our recent work across the Oklahoma City metro area.</p>
          </div>
        </section>

        {/* Project Cards */}
        <section style={{ padding: "80px clamp(24px,5vw,64px) 110px", background: "var(--white)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
            {projects.map((proj, i) => (
              <div key={i} className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", background: i % 2 === 0 ? "var(--cream)" : "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}>
                {i % 2 === 0 ? (
                  <>
                    <div style={{ minHeight: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={proj.image.src} alt={proj.image.alt} style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: "10px 10px 0 0" }} />
                    </div>
                    <div style={{ padding: "40px 40px 40px 0" }}>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px, 2.5vw, 32px)", lineHeight: 1.2, color: "var(--accent)", marginBottom: 16 }}>{proj.title}</h3>
                      <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 20 }}>{proj.desc}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {proj.bullets.map((b, j) => (
                          <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ color: "var(--primary)", flexShrink: 0 }}>{Icons.check}</span>
                            <span style={{ fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ padding: "40px 0 40px 40px" }}>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px, 2.5vw, 32px)", lineHeight: 1.2, color: "var(--accent)", marginBottom: 16 }}>{proj.title}</h3>
                      <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 20 }}>{proj.desc}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {proj.bullets.map((b, j) => (
                          <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ color: "var(--primary)", flexShrink: 0 }}>{Icons.check}</span>
                            <span style={{ fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ minHeight: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={proj.image.src} alt={proj.image.alt} style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: "10px 10px 0 0" }} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 16 }}>Your Project Could Be Next.{"\n"}<span style={{ fontStyle: "italic", color: "var(--primary)" }}>Call Bob.</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36 }}>Every great project starts with a conversation. Get your free estimate and let Bob show you what 45 years of experience looks like.</p>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 48px", borderRadius: 6, fontSize: 18, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(205,41,45,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
          </div>
        </section>
      </>
    );
  };
  const ReviewsPage = () => {
    const fullReviews = [
      { name: "Rita Griffin", text: "Bob Mitchell, Owner, knows his business at a glance and knew just what needed to be done. He coordinated with our insurance company and told them places they missed. Bob kept in touch every day practically to ensure everything was getting done correctly. Excellent service, easy to work with, very understanding and personable." },
      { name: "Gwendolyn Brown", text: "Very reserved after a total botched up job from another contractor to try again on my dream bathroom but after meeting Bob we gave it the go ahead, and without a doubt we are the happiest ever. Absolutely beautiful, we are ecstatic." },
      { name: "Teresa Simpson", text: "The men that work for MitchCo are amazing. They showed up early, installed exactly as I needed, and completely cleaned up their mess. I cannot thank them enough!" },
      { name: "Ellen Wilcox", text: "We are soooo happy with Mitchco from the beginning of the project through the end! Will definitely hire again. Thanks to Bob and his crew for the professionalism and respect." },
      { name: "Lou Butenschoen", text: "Mitchco has performed two projects for us. First a kitchen remodel, and then a bathroom remodel. My wife and I are very pleased with their work, and we would highly recommend them." },
    ];
    return (
      <>
        {/* Hero Banner */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14 }}>Testimonials</p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--accent)", marginBottom: 20 }}>
              What Our <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Customers</span> Say
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto" }}>4.8 stars on Google — see why Oklahoma City homeowners trust Bob Mitchell and his crew.</p>
          </div>
        </section>

        {/* Rating Callout */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "var(--white)" }}>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(64px, 8vw, 96px)", fontWeight: 700, color: "var(--accent)", lineHeight: 1, marginBottom: 8 }}>4.8</p>
            <p style={{ fontSize: 18, color: "var(--text-mid)", marginBottom: 12 }}>out of 5 stars on Google</p>
            <p style={{ fontSize: 15, color: "var(--text-light)", marginBottom: 20 }}>125+ verified reviews</p>
            <div style={{ display: "inline-flex", gap: 6 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#cd292d" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
          </div>
        </section>

        {/* Review Cards */}
        <section style={{ padding: "80px clamp(24px,5vw,64px) 110px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              {fullReviews.map((r, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "36px 30px", border: "1px solid var(--border)", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ marginBottom: 16 }}><Stars /></div>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-mid)", fontStyle: "italic", fontFamily: "'Playfair Display',serif", marginBottom: 20 }}>"{r.text}"</p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "var(--accent)", fontFamily: "'DM Sans',sans-serif" }}>{r.name}</p>
                  <p style={{ fontSize: 13, color: "var(--text-light)", marginTop: 4 }}>Google Review</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark CTA Section */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--accent)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>Join Our Customers</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#fff", marginBottom: 24 }}>Join 125+ Happy Customers</h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 40 }}>Ready for the same quality service? Get a free estimate from Bob — no pressure, no obligation.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              <button onClick={() => navigate("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(205,41,45,0.3)" }}>Contact Bob {Icons.arrow}</button>
              <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, textDecoration: "none", border: "2px solid rgba(255,255,255,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
            </div>
          </div>
        </section>

        {/* Angie's List Award Callout */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "var(--white)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <span style={{ color: "var(--primary)" }}>{Icons.award}</span>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px, 2.5vw, 32px)", lineHeight: 1.15, color: "var(--accent)", margin: "16px 0 12px" }}>Angie's List Super Service Award</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 520, margin: "0 auto" }}>MitchCo has been recognized with the Angie's List Super Service Award multiple years running for outstanding customer service and quality craftsmanship.</p>
          </div>
        </section>
      </>
    );
  };

  const BlogPage = () => {
    const posts = [
      { title: "5 Signs You Need a New Roof", date: "March 2025", excerpt: "Missing shingles, ceiling stains, and rising energy bills could mean it's time for a roof replacement. Here's what to look for before small problems become big expenses." },
      { title: "Kitchen Remodel Trends for 2025", date: "February 2025", excerpt: "From two-tone cabinetry to smart appliances, discover the top kitchen remodeling trends that Oklahoma City homeowners are loving this year." },
      { title: "How to Handle Storm Damage Insurance Claims", date: "January 2025", excerpt: "Navigating insurance claims after a storm can be stressful. Bob shares his decades of experience working with adjusters to get you fair coverage." },
      { title: "Choosing the Right Siding for Your Oklahoma Home", date: "December 2024", excerpt: "With Oklahoma's extreme weather, choosing durable siding is critical. We compare vinyl, fiber cement, and engineered wood options for local homeowners." },
      { title: "Bathroom Remodeling: Where to Splurge and Save", date: "November 2024", excerpt: "Not every upgrade needs to break the bank. Learn where to invest for maximum impact and where smart savings won't sacrifice quality." },
      { title: "Why GAF Certification Matters for Your Roof", date: "October 2024", excerpt: "Not all roofers are created equal. Find out why GAF certification means better materials, better installation, and better warranties for your home." },
    ];
    return (
      <>
        {/* Hero Banner */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 48, height: 2, background: "var(--primary)", margin: "0 auto 20px" }} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14 }}>Blog</p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--accent)", marginBottom: 20 }}>
              News & <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Updates</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto" }}>Tips, trends, and project insights from Bob Mitchell and the MitchCo team.</p>
          </div>
        </section>

        {/* Blog Post Cards */}
        <section style={{ padding: "80px clamp(24px,5vw,64px) 110px", background: "var(--white)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              {posts.map((post, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--border)", overflow: "hidden", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  {/* Placeholder Image */}
                  <div style={{ height: 200, background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--text-light)", opacity: 0.4 }}>{Icons.blog}</span>
                  </div>
                  <div style={{ padding: "28px 30px" }}>
                    <span style={{ display: "inline-block", background: "var(--cream)", color: "var(--text-light)", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 20, marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>{post.date}</span>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--accent)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{post.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 18, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.excerpt}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: "var(--primary)", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Read More {Icons.arrow}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--accent)", marginBottom: 16 }}>Have a Question About{"\n"}<span style={{ fontStyle: "italic", color: "var(--primary)" }}>Your Home?</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36 }}>Bob is happy to answer any questions about roofing, remodeling, or storm damage. Reach out anytime.</p>
            <button onClick={() => navigate("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--primary)", color: "#fff", padding: "18px 48px", borderRadius: 6, fontSize: 18, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(205,41,45,0.3)" }}>Contact Bob {Icons.arrow}</button>
          </div>
        </section>
      </>
    );
  };

  // =========== PAGE ROUTER ===========
  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage />;
      case "about": return <AboutPage />;
      case "contact": return <ContactPage />;
      case "services": return <ServicesPage />;
      case "gallery": return <GalleryPage />;
      case "projects": return <ProjectsPage />;
      case "reviews": return <ReviewsPage />;
      case "blog": return <BlogPage />;
      default: return <HomePage />;
    }
  };

  // =========== PASSWORD GATE ===========
  if (!authed) {
    return (<>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}`}</style>
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#282825" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: "56px 44px", textAlign: "center", maxWidth: 420, width: "92%", boxShadow: "0 32px 80px rgba(0,0,0,.35)" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, marginBottom: 8, fontWeight: 600, letterSpacing: -0.5 }}>
            <span style={{ color: "#282825" }}>MitchCo</span>{" "}
            <span style={{ color: "#cd292d" }}>Roof & Remodeling</span>
          </div>
          <p style={{ fontSize: 13, color: "#8A8A9A", letterSpacing: 1, marginBottom: 28, textTransform: "uppercase" }}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e => { setPw(e.target.value); setPwBad(false); }} placeholder="••••" autoFocus style={{ width: "100%", padding: 16, fontSize: 20, border: `2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius: 8, textAlign: "center", letterSpacing: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", color: "#282825" }} />
            {pwBad && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 8, fontWeight: 500 }}>Incorrect password</p>}
            <button type="submit" style={{ width: "100%", padding: 16, marginTop: 20, fontSize: 15, fontWeight: 700, background: "#282825", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  // =========== MAIN RENDER ===========
  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
      :root{--primary:#cd292d;--accent:#282825;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
      *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
      body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--cream);-webkit-font-smoothing:antialiased}
      h1,h2,h3,.serif{font-family:'Playfair Display',serif;font-weight:500}
      a{text-decoration:none;color:inherit}
      @media(max-width:900px){
        .desktop-only{display:none!important}
        .mobile-only{display:flex!important}
        .hero-split{grid-template-columns:1fr!important;gap:32px!important;text-align:center}
        .svc-grid{grid-template-columns:1fr!important}
        .why-grid{grid-template-columns:1fr!important}
        .badge-grid{grid-template-columns:1fr 1fr!important}
        .contact-grid{grid-template-columns:1fr!important}
        .footer-grid{grid-template-columns:1fr!important}
        .cred-row{gap:20px!important}
        .hero-btns{flex-direction:column;align-items:center}
        .mob-pad{padding-bottom:80px!important}
      }
      @media(min-width:901px){.mobile-only{display:none!important}}
    `}</style>

    <Navigation />
    <div className="mob-pad">
      {renderPage()}
      <Footer />
    </div>
    <MobileCTA />
  </>);
}

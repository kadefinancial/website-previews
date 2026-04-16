// Layout: Custom | Industry: Roofing | City: Tulsa
import { useState, useEffect } from "react";

const PHONE = "(918) 890-1935";
const TEL = "tel:+19188901935";
const BIZ = "A&H Roofing & Contracting, LLC";
const OWNER = "Chris Archer";
const ADDRESS_TULSA = "6703 E 81st St A, Tulsa, OK 74133";
const ADDRESS_EDMOND = "3209 S Broadway Ste 231, Edmond, OK 73013";
const LICENSE = "OK License #80005784";

const ROUTES = {
  '/': 'home',
  '/about': 'about',
  '/roofing-services': 'roofing',
  '/roof-repair': 'repair',
  '/storm-damage': 'storm',
  '/gutters': 'gutters',
  '/painting': 'painting',
  '/esquire-services': 'esquire',
  '/projects': 'projects',
  '/service-areas': 'areas',
  '/tulsa': 'tulsa',
  '/broken-arrow': 'broken-arrow',
  '/referral-program': 'referral',
  '/blog': 'blog',
  '/contact': 'contact',
};

const ROUTE_KEYS = Object.fromEntries(Object.entries(ROUTES).map(([path, key]) => [key, path]));

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  mail: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  mapPinLg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#D81820" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  roof: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>,
  gutter: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>,
  paint: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 3H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/><path d="M12 11v6"/><path d="M8 17h8a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1a2 2 0 012-2z"/></svg>,
  storm: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  clock: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
  award: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  heart: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  dollar: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  emergency: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  chevDown: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  clipboard: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
};

const Stars = () => <span style={{ display: "inline-flex", gap: 2 }}>{[...Array(5)].map((_, i) => <span key={i}>{Icons.star}</span>)}</span>;

const serviceAreas = [
  "Tulsa", "Broken Arrow", "Owasso", "Bixby", "Jenks",
  "Sand Springs", "Sapulpa", "Glenpool", "Coweta", "Claremore",
  "Catoosa", "Edmond", "Oklahoma City", "Norman",
  "Piedmont", "Moore", "Yukon", "El Reno", "Choctaw", "Guthrie",
];

const homeReviews = [
  { name: "Chance Hair", text: "Chris and his team at A&H Roofing were outstanding from start to finish. They handled our insurance claim with professionalism and got our roof replaced quickly after storm damage. The crew was respectful of our property, cleaned up everything, and the final result looks incredible. Highly recommend A&H to anyone in the Tulsa area.", source: "Google" },
  { name: "Sara Grant", text: "We had A&H come out for a roof inspection after a hailstorm and they were honest, thorough, and didn't try to upsell us on anything we didn't need. Chris walked us through the whole process, explained our options, and the new roof was installed within the week. Five stars isn't enough for these guys.", source: "Google" },
  { name: "Mindi Gaut", text: "A&H Roofing replaced our entire roof and gutters. The crew showed up on time every day, worked hard, and left our yard spotless. Chris kept us informed at every step and the quality of work is obvious. We've already referred them to our neighbors. If you need a roofer in Tulsa, call A&H first.", source: "Google" },
];

export default function AHRoofingContracting() {
  const [authed] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [heroFormDone, setHeroFormDone] = useState(false);
  const [contactFormDone, setContactFormDone] = useState(false);
  const [referralFormDone, setReferralFormDone] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    setDropdownOpen(false);
    const path = ROUTE_KEYS[page] || '/';
    const base = window.location.pathname.split('/').filter(Boolean)[0] || '';
    window.history.pushState({}, '', `/${base}${path === '/' ? '' : path}`);
  };

  // Handle browser back/forward
  useEffect(() => {
    if (!authed) return;
    const handlePop = () => {
      const path = window.location.pathname;
      const base = '/' + (path.split('/').filter(Boolean)[0] || '');
      const subPath = path.replace(base, '') || '/';
      setCurrentPage(ROUTES[subPath] || 'home');
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [authed]);

  useEffect(() => { if (!authed) return; const fn = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, [authed]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [currentPage]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!dropdownOpen) return;
    const close = () => setDropdownOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [dropdownOpen]);

  // SEO
  useEffect(() => {
    if (!authed) return;
    const pageTitles = {
      home: `A&H Roofing & Contracting | Tulsa Roofing Contractor | ${PHONE}`,
      about: "About A&H Roofing & Contracting | Chris Archer | Tulsa OK",
      roofing: "Roofing Services Tulsa OK | A&H Roofing & Contracting",
      repair: "Roof Repair Tulsa OK | A&H Roofing & Contracting",
      storm: "Storm Damage & Insurance Claims Tulsa OK | A&H Roofing & Contracting",
      gutters: "Gutter Installation Tulsa OK | A&H Roofing & Contracting",
      painting: "Painting Services Tulsa OK | A&H Roofing & Contracting",
      esquire: "Esquire Services | A&H Roofing & Contracting",
      projects: "Our Projects | A&H Roofing & Contracting",
      areas: "Service Areas | A&H Roofing & Contracting | Tulsa & OKC Metro",
      tulsa: "Tulsa Roofing Contractor | A&H Roofing & Contracting",
      'broken-arrow': "Broken Arrow Roofing | A&H Roofing & Contracting",
      referral: "Referral Program | A&H Roofing & Contracting",
      blog: "Blog | A&H Roofing & Contracting",
      contact: `Contact A&H Roofing & Contracting | Free Roof Inspection | ${PHONE}`,
    };
    const pageMeta = {
      home: `GAF Certified & Owens Corning Preferred roofing contractor in Tulsa, OK. 5.0 stars, 68 Google reviews, BBB A+ rated. Call ${PHONE} for a free estimate.`,
      about: `A&H Roofing & Contracting is a family-owned, 100% local roofing contractor in Tulsa, OK. 26+ combined years of expertise. GAF Certified, BBB A+ rated. Call ${PHONE}.`,
      roofing: `Full roof replacement and installation in Tulsa OK. GAF Certified, Owens Corning Preferred. Manufacturer-backed warranties. Call ${PHONE}.`,
      repair: `Fast, reliable roof repair in Tulsa OK. Storm damage, leaks, missing shingles. Call ${PHONE}.`,
      storm: `Storm damage and hail damage roof repair in Tulsa OK. We guide you through the insurance claim process. Call ${PHONE}.`,
      gutters: `Seamless gutter installation and repair in Tulsa OK. Protect your foundation. Free estimates. Call ${PHONE}.`,
      painting: `Interior and exterior painting in Tulsa OK. Professional crews, quality materials. Free estimates. Call ${PHONE}.`,
      esquire: `The Esquire Package — our top-tier roofing upgrade for maximum protection, curb appeal, and long-term value. Call ${PHONE}.`,
      projects: "Browse completed roofing, gutter, and painting projects from A&H Roofing & Contracting in Tulsa, OK.",
      areas: "A&H Roofing & Contracting serves Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Edmond, OKC, and surrounding areas.",
      tulsa: `Tulsa's most trusted roofing contractor. GAF Certified, 5.0 stars, 68 reviews. Call ${PHONE}.`,
      'broken-arrow': `Broken Arrow roofing contractor. GAF Certified, Owens Corning Preferred. Call ${PHONE}.`,
      referral: "Earn rewards when you refer friends and family to A&H Roofing & Contracting.",
      blog: "Roofing tips, storm damage guides, and home improvement insights from A&H Roofing & Contracting.",
      contact: `Get your free roof inspection from A&H Roofing & Contracting. Mon-Sat 8AM-8PM. Call ${PHONE}.`,
    };
    document.title = pageTitles[currentPage] || pageTitles.home;
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: pageMeta[currentPage] || pageMeta.home });
    add("meta", { name: "geo.region", content: "US-OK" });
    add("meta", { name: "geo.placename", content: "Tulsa" });
    add("script", {
      type: "application/ld+json", textContent: JSON.stringify({
        "@context": "https://schema.org", "@type": "RoofingContractor",
        name: BIZ, telephone: "+19188901935",
        address: [
          { "@type": "PostalAddress", streetAddress: "6703 E 81st St A", addressLocality: "Tulsa", addressRegion: "OK", postalCode: "74133", addressCountry: "US" },
          { "@type": "PostalAddress", streetAddress: "3209 S Broadway Ste 231", addressLocality: "Edmond", addressRegion: "OK", postalCode: "73013", addressCountry: "US" },
        ],
        geo: { "@type": "GeoCoordinates", latitude: 36.0544, longitude: -95.8608 },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "20:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "00:00", closes: "00:00", description: "Closed" },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "68", bestRating: "5" },
        founder: { "@type": "Person", name: OWNER },
        description: "A&H Roofing & Contracting, LLC is a family-owned, 100% local roofing contractor providing GAF Certified and Owens Corning Preferred roofing, gutter, and painting services in Tulsa and the Oklahoma City metro. Over 26 combined years of experience. 5.0 stars with 68 Google reviews. BBB A+ rated.",
        areaServed: serviceAreas.map(a => ({ "@type": "City", name: a })),
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Services", itemListElement: ["Roof Replacement", "Roof Repair", "Gutters", "Painting", "Storm Damage & Insurance"].map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
        memberOf: [{ "@type": "Organization", name: "Better Business Bureau" }, { "@type": "Organization", name: "GAF" }, { "@type": "Organization", name: "Owens Corning" }],
      })
    });
    return () => els.forEach(el => { try { document.head.removeChild(el); } catch (e) { } });
  }, [authed, currentPage]);

  const yr = new Date().getFullYear();



  // =========== WORDMARK ===========
  const Wordmark = ({ light, size = 22 }) => (
    <div style={{ fontFamily: "'Oswald',sans-serif", fontSize: size, fontWeight: 700, letterSpacing: -0.5, cursor: "pointer", lineHeight: 1.2 }} onClick={() => navigate("home")}>
      <span style={{ color: "#D81820" }}>A&H </span>
      <span style={{ color: "#3490FC" }}>Roofing & Contracting</span>
    </div>
  );

  // =========== RED LINE ===========
  const RedLine = ({ center = true }) => (
    <div style={{ width: 48, height: 3, background: "#D81820", margin: center ? "0 auto 20px" : "0 0 20px 0", borderRadius: 2 }} />
  );

  // =========== SECTION HEAD ===========
  const SectionHead = ({ eyebrow, heading, sub, dark, center = true }) => (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 56 }}>
      <RedLine center={center} />
      {eyebrow && <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#D81820", marginBottom: 14, fontFamily: "'Open Sans',sans-serif" }}>{eyebrow}</p>}
      <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.5, color: dark ? "#3490FC" : "#3490FC", marginBottom: sub ? 16 : 0 }}>{heading}</h2>
      {sub && <p style={{ fontSize: 17, lineHeight: 1.7, color: dark ? "#FFFFFF" : "#000000", maxWidth: 600, margin: center ? "0 auto" : undefined, fontFamily: "'Open Sans',sans-serif" }}>{sub}</p>}
    </div>
  );

  // =========== PHOTO PLACEHOLDER ===========
  const PhotoPlaceholder = ({ label, height = 300, dark }) => (
    <div style={{ background: dark ? "rgba(255,255,255,0.1)" : "#E8E8E8", borderRadius: 12, height, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={dark ? "rgba(255,255,255,0.4)" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      <span style={{ fontSize: 13, color: dark ? "rgba(255,255,255,0.4)" : "#999", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>{label}</span>
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
          .footer-grid{grid-template-columns:1fr!important;text-align:center}
          .services-grid{grid-template-columns:1fr!important}
          .reviews-grid{grid-template-columns:1fr!important}
          .contact-split{grid-template-columns:1fr!important}
          .trust-strip{flex-wrap:wrap!important;gap:20px!important;justify-content:center!important}
          .trust-strip>div{min-width:140px!important}
          .city-pills{justify-content:center!important}
          .process-grid{grid-template-columns:1fr!important}
          .brands-grid{grid-template-columns:repeat(2,1fr)!important}
          .blog-grid{grid-template-columns:1fr!important}
          .referral-steps{grid-template-columns:1fr!important}
          .services-hero-img{transform:scale(1.6)!important;object-position:center 33%!important}
          .masonry-grid{columns:1!important}
          .tier-row{flex-direction:column!important;gap:8px!important;text-align:center}
          .tier-row>div:first-child{justify-content:center}
          .tier-row>div:last-child{justify-content:center}
        }
        @media(min-width:769px){
          .mobile-only{display:none!important}
        }
      `}</style>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "10px clamp(24px,5vw,64px)" : "16px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "#FFFFFF" : "transparent", borderBottom: scrolled ? "1px solid #e0e0e0" : "none", transition: "all 0.4s ease" }}>
        <Wordmark light={!scrolled} />
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <button onClick={() => navigate("home")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: currentPage === "home" ? "#D81820" : (scrolled ? "#000" : "#fff"), fontFamily: "'Open Sans',sans-serif", padding: "4px 0", borderBottom: currentPage === "home" ? "2px solid #D81820" : "2px solid transparent", transition: "all 0.2s" }}>Home</button>
          {/* Services Dropdown */}
          <div style={{ position: "relative" }}>
            <button onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen); }} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: scrolled ? "#000" : "#fff", fontFamily: "'Open Sans',sans-serif", padding: "4px 0", display: "flex", alignItems: "center", gap: 4 }}>
              Services {Icons.chevDown}
            </button>
            {dropdownOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, marginTop: 8, background: "#fff", borderRadius: 8, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid #e0e0e0", minWidth: 180, overflow: "hidden", zIndex: 100 }}>
                {[
                  { key: "roofing", label: "Roofing" },
                  { key: "repair", label: "Roof Repair" },
                  { key: "storm", label: "Storm Damage" },
                  { key: "gutters", label: "Gutters" },
                  { key: "painting", label: "Painting" },
                  { key: "esquire", label: "Esquire Services" },
                ].map(item => (
                  <button key={item.key} onClick={() => navigate(item.key)} style={{ display: "block", width: "100%", background: "none", border: "none", padding: "12px 20px", fontSize: 14, fontWeight: 500, color: "#000", cursor: "pointer", fontFamily: "'Open Sans',sans-serif", textAlign: "left", borderBottom: "1px solid #f0f0f0" }}>{item.label}</button>
                ))}
              </div>
            )}
          </div>
          {[
            { key: "about", label: "About" },
            { key: "projects", label: "Projects" },
            { key: "areas", label: "Areas" },
            { key: "referral", label: "Referrals" },
            { key: "blog", label: "Blog" },
            { key: "contact", label: "Contact" },
          ].map(p => (
            <button key={p.key} onClick={() => navigate(p.key)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: currentPage === p.key ? "#D81820" : (scrolled ? "#000" : "#fff"), fontFamily: "'Open Sans',sans-serif", padding: "4px 0", borderBottom: currentPage === p.key ? "2px solid #D81820" : "2px solid transparent", transition: "all 0.2s" }}>{p.label}</button>
          ))}
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#3490FC", fontSize: 14, fontWeight: 600, fontFamily: "'Open Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
          <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 600, fontFamily: "'Oswald',sans-serif", border: "none", cursor: "pointer", letterSpacing: 0.5 }}>Free Roof Inspection</button>
        </div>
        <button className="mobile-only" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "#000" : "#fff", display: "flex" }}>{Icons.menu}</button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "#111111", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, overflowY: "auto", padding: "80px 24px 40px" }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>{Icons.x}</button>
          {[
            { key: "home", label: "Home" },
            { key: "about", label: "About Us" },
            { key: "roofing", label: "Roofing Services" },
            { key: "repair", label: "Roof Repair" },
            { key: "storm", label: "Storm Damage" },
            { key: "gutters", label: "Gutters" },
            { key: "painting", label: "Painting" },
            { key: "esquire", label: "Esquire Services" },
            { key: "projects", label: "Projects" },
            { key: "areas", label: "Service Areas" },
            { key: "referral", label: "Referrals" },
            { key: "blog", label: "Blog" },
            { key: "contact", label: "Contact" },
          ].map(p => (
            <button key={p.key} onClick={() => navigate(p.key)} style={{ background: "none", border: "none", color: currentPage === p.key ? "#D81820" : "#fff", fontSize: 20, fontWeight: 600, cursor: "pointer", fontFamily: "'Oswald',sans-serif" }}>{p.label}</button>
          ))}
          <a href={TEL} style={{ background: "#D81820", color: "#fff", padding: "18px 48px", borderRadius: 8, fontSize: 18, fontWeight: 600, fontFamily: "'Oswald',sans-serif", marginTop: 12 }}>Call {PHONE}</a>
        </div>
      )}
    </>
  );

  // =========== FOOTER ===========
  const Footer = () => (
    <footer style={{ background: "#000000", padding: "80px clamp(24px,5vw,64px) 40px", fontFamily: "'Open Sans',sans-serif" }}>
      <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr", gap: 48 }}>
        <div>
          <Wordmark light size={22} />
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#FFFFFF", marginTop: 16, marginBottom: 20 }}>Family-owned, 100% local roofing contractor serving Tulsa and OKC. GAF Certified, Owens Corning Preferred, BBB A+ accredited. Over 26 combined years of expertise.</p>
          <p style={{ fontSize: 13, color: "#FFFFFF", lineHeight: 1.6, marginBottom: 8 }}>{Icons.mapPin} {ADDRESS_TULSA}</p>
          <p style={{ fontSize: 13, color: "#FFFFFF", lineHeight: 1.6 }}>{Icons.mapPin} {ADDRESS_EDMOND}</p>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'Oswald',sans-serif" }}>Services</h4>
          {[
            { key: "roofing", label: "Roofing" },
            { key: "repair", label: "Roof Repair" },
            { key: "storm", label: "Storm Damage" },
            { key: "gutters", label: "Gutters" },
            { key: "painting", label: "Painting" },
            { key: "esquire", label: "Esquire Services" },
          ].map(s => (
            <button key={s.key} onClick={() => navigate(s.key)} style={{ display: "block", background: "none", border: "none", color: "#FFFFFF", fontSize: 14, cursor: "pointer", fontFamily: "'Open Sans',sans-serif", padding: "4px 0", marginBottom: 6 }}>{s.label}</button>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'Oswald',sans-serif" }}>Quick Links</h4>
          {[
            { key: "about", label: "About Us" },
            { key: "projects", label: "Projects" },
            { key: "areas", label: "Service Areas" },
            { key: "referral", label: "Referral Program" },
            { key: "blog", label: "Blog" },
            { key: "contact", label: "Contact" },
          ].map(s => (
            <button key={s.key} onClick={() => navigate(s.key)} style={{ display: "block", background: "none", border: "none", color: "#FFFFFF", fontSize: 14, cursor: "pointer", fontFamily: "'Open Sans',sans-serif", padding: "4px 0", marginBottom: 6 }}>{s.label}</button>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'Oswald',sans-serif" }}>Contact</h4>
          <a href={TEL} style={{ display: "flex", alignItems: "center", gap: 8, color: "#D81820", fontSize: 14, fontFamily: "'Open Sans',sans-serif", marginBottom: 12, fontWeight: 600 }}><span style={{ color: "#D81820" }}>{Icons.phone}</span> {PHONE}</a>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#FFFFFF", fontSize: 14, fontFamily: "'Open Sans',sans-serif", marginBottom: 12 }}><span style={{ color: "#D81820" }}>{Icons.clock}</span> Mon-Sat 8AM-8PM</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#FFFFFF", fontSize: 14, fontFamily: "'Open Sans',sans-serif", marginBottom: 12 }}><span style={{ color: "#D81820" }}>{Icons.mapPinLg}</span> Tulsa & Edmond, OK</div>
          <p style={{ fontSize: 13, color: "#FFFFFF", marginTop: 20, fontFamily: "'Open Sans',sans-serif" }}>{LICENSE}</p>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'Open Sans',sans-serif" }}>&copy; {yr} {BIZ}. All rights reserved.</p>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'Open Sans',sans-serif" }}>GAF Certified</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'Open Sans',sans-serif" }}>Owens Corning Preferred</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'Open Sans',sans-serif" }}>BBB A+</span>
        </div>
      </div>
    </footer>
  );

  // =========== FLOATING MOBILE CTA ===========
  const MobileCTA = () => (
    <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%", zIndex: 998, display: "none" }}>
      <a href={TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#D81820", color: "#fff", padding: "16px 24px", fontSize: 16, fontWeight: 600, fontFamily: "'Oswald',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", width: "100%", textAlign: "center" }}>
        {Icons.phone} Call {PHONE}
      </a>
    </div>
  );

  // =========== TRUST STRIP ===========
  const TrustStrip = () => (
    <div className="trust-strip" style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", padding: "32px clamp(24px,5vw,64px)", background: "#FFFFFF", borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}>
      {[
        { label: "Family Business", icon: Icons.heart },
        { label: "100% Local", icon: Icons.users },
        { label: "16+ Years Experience", icon: Icons.clock },
        { label: "5.0 Google Rating", icon: Icons.star },
        { label: "GAF Certified", icon: Icons.shield },
        { label: "A+ BBB", icon: Icons.award },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 140 }}>
          <span style={{ color: "#3490FC" }}>{item.icon}</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#000", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.3 }}>{item.label}</span>
        </div>
      ))}
    </div>
  );

  // =========== CITY PILLS ===========
  const CityPills = () => (
    <div className="city-pills" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
      {serviceAreas.map(c => (
        <span key={c} style={{ padding: "8px 20px", borderRadius: 50, background: "#fff", border: "1px solid #e0e0e0", fontSize: 14, fontWeight: 500, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>{c}</span>
      ))}
    </div>
  );

  // =========== PAGE: HOME ===========
  const HomePage = () => (
    <>
      {/* Hero */}
      <section style={{ padding: "110px clamp(24px,5vw,64px) 60px", background: "#111111", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(17,17,17,0.55) 0%, rgba(17,17,17,0.7) 100%)", zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/ah-hero-bg.webp" alt="A&H Roofing — Completed Roof" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 48, alignItems: "start" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(216,24,32,0.15)", padding: "8px 18px", borderRadius: 4, marginBottom: 24 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D81820" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#D81820", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Open Sans',sans-serif" }}>GAF Certified &bull; Owens Corning Preferred &bull; Tulsa, OK</span>
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#3490FC", marginBottom: 10, fontFamily: "'Open Sans',sans-serif", letterSpacing: 0.5 }}>Family-Owned &bull; 100% Local &bull; 16+ Years Experience &bull; 68 Five-Star Reviews</p>
              <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5, color: "#FFFFFF", marginBottom: 16 }}>
                Your Roof. Our Word.<br />That's <span style={{ fontStyle: "italic", color: "#D81820" }}>All You Need.</span>
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 28, fontFamily: "'Open Sans',sans-serif" }}>
                With over 26 combined years of expertise, A&H Roofing & Contracting specializes in top-quality roofing solutions for residential and commercial properties. From storm damage repairs to full roof replacements, we deliver honest estimates, expert craftsmanship, and manufacturer-backed warranties.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
                <Stars />
                <span style={{ fontSize: 14, color: "#3490FC", fontFamily: "'Open Sans',sans-serif" }}>5.0 stars — 68 Google reviews</span>
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button onClick={() => navigate("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#D81820", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(216,24,32,0.3)", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.3 }}>Get My Free Roof Inspection {Icons.arrow}</button>
                <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#3490FC", color: "#fff", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: "none", border: "none", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.3 }}>{Icons.phone} {PHONE}</a>
              </div>
            </div>
            {/* Lead Form */}
            <div style={{ background: "#fff", borderRadius: 12, padding: "36px 28px", boxShadow: "0 4px 40px rgba(0,0,0,0.2)" }}>
              {!heroFormDone ? (<>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 22, fontWeight: 700, color: "#3490FC", marginBottom: 6, textAlign: "center" }}>Get My Free Roof Inspection</h3>
                <p style={{ fontSize: 14, color: "#4A4A4A", marginBottom: 20, textAlign: "center", fontFamily: "'Open Sans',sans-serif" }}>Just takes 30 seconds.</p>
                <form onSubmit={e => { e.preventDefault(); setHeroFormDone(true); }}>
                  <input type="text" placeholder="Name" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 12, background: "#F8F9FA", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                  <input type="tel" placeholder="Phone Number" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 12, background: "#F8F9FA", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                  <input type="text" placeholder="Property Address" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#F8F9FA", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 16, cursor: "pointer" }}>
                    <input type="checkbox" required style={{ marginTop: 3, accentColor: "#D81820" }} />
                    <span style={{ fontSize: 11, lineHeight: 1.5, color: "#666", fontFamily: "'Open Sans',sans-serif" }}>By submitting this form, I consent to receive calls and texts (including automated) from A&H Roofing & Contracting at the number provided. Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to opt out.</span>
                  </label>
                  <button type="submit" style={{ width: "100%", padding: "16px", borderRadius: 8, background: "#D81820", color: "#fff", border: "none", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 16px rgba(216,24,32,0.25)" }}>Get My Free Roof Inspection</button>
                </form>
              </>) : (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(216,24,32,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}><span style={{ color: "#D81820" }}>{Icons.check}</span></div>
                  <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 22, fontWeight: 700, color: "#000", marginBottom: 8 }}>Request Received!</h3>
                  <p style={{ fontSize: 14, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>We'll be in touch shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Intro Paragraph */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <RedLine />
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: "#000", marginBottom: 24, lineHeight: 1.15 }}>Family-Owned. 100% Local. Tulsa's Trusted Roofer.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 36 }}>
            A&H Roofing & Contracting, LLC is a family-owned, 100% local roofing contractor that Tulsa and OKC homeowners trust. With over 26 combined years of expertise, we specialize in top-quality roofing solutions for residential and commercial properties. GAF Certified, Owens Corning Preferred, BBB A+ accredited, and backed by 68 five-star Google reviews — we take pride in improving the homes and spaces our clients cherish.
          </p>
          <div style={{ position: "relative", width: "100%", maxWidth: 700, margin: "0 auto", paddingBottom: "56.25%", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }}>
            <iframe src="https://www.youtube.com/embed/8aRFR5DaX88" title="A&H Roofing & Contracting" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="What We Do" heading="Our Services" sub="We handle a full range of roofing needs for residential and commercial properties." />
          <div style={{ width: "100%", overflow: "hidden", borderRadius: 12, marginBottom: 48 }}>
            <img src="/ah-roofing-hero.webp" alt="A&H Roofing & Contracting — Completed roof project" className="services-hero-img" style={{ width: "100%", height: "clamp(250px, 30vw, 420px)", objectFit: "cover", objectPosition: "center 50%", display: "block", transform: "scale(1)" }} />
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 48 }}>
            {[
              { title: "Roofing", desc: "Expert roofing services including installation, repair, and maintenance for all types of roofs. Durable, weather-resistant, and perfectly fitted to your home's style.", icon: Icons.roof, key: "roofing" },
              { title: "Roof Repairs", desc: "Quick, reliable, and affordable solutions for leaks, storm damage, hail damage, and wear — ensuring your roof is strong and secure.", icon: Icons.wrench, key: "repair" },
              { title: "Gutters", desc: "Comprehensive gutter services from installation to cleaning and repair, preventing leaks and foundation issues. Protect your home from water damage.", icon: Icons.gutter, key: "gutters" },
              { title: "Painting", desc: "Professional interior and exterior painting using high-quality paints for lasting beauty. A clean, efficient, and precise painting experience.", icon: Icons.paint, key: "painting" },
              { title: "Storm Damage", desc: "Hail, wind, and storm damage repair. We guide you through the insurance claim process with documentation and clear explanations.", icon: Icons.storm, key: "storm" },
              { title: "Esquire Services", desc: "Our top-tier upgrade — one crew, one timeline, one company standing behind a complete roofing and exterior upgrade.", icon: Icons.clipboard, key: "esquire" },
            ].map((s, i) => (
              <div key={i} onClick={() => navigate(s.key)} style={{ background: "#F8F9FA", borderRadius: 12, padding: "32px 24px", textAlign: "center", border: "1px solid #e8e8e8", cursor: "pointer", transition: "box-shadow 0.3s" }}>
                <div style={{ color: "#3490FC", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 18, fontWeight: 600, color: "#000", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={() => navigate("roofing")} style={{ background: "#D81820", color: "#fff", padding: "16px 40px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, display: "inline-flex", alignItems: "center", gap: 8 }}>View All Services {Icons.arrow}</button>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHead eyebrow="How It Works" heading="Our Process" sub="Our process is simple and only contains a few straightforward steps." />
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
            {[
              { step: "01", title: "Free Inspection", desc: "It starts with a detailed inspection to assess your roofing needs, whether the goal is to repair existing damage or replace an aging system.", icon: Icons.clipboard },
              { step: "02", title: "Review & Estimate", desc: "We review the condition of the roof, discuss materials and shingles, and explain the scope of the project, timeline, and cost upfront.", icon: Icons.dollar },
              { step: "03", title: "Professional Installation", desc: "Our crew shows up on schedule and works efficiently to complete the job correctly. Many projects can be completed in one day, depending on size and complexity.", icon: Icons.wrench },
              { step: "04", title: "Final Walkthrough", desc: "After the work is completed, we conduct a final inspection to confirm everything was done properly and matches what was agreed upon.", icon: Icons.shield },
              { step: "05", title: "Payment", desc: "We accept cash and credit card. Need flexibility? We also offer financing through Hearth with monthly payment options to fit your budget.", icon: Icons.dollar },
            ].map((s, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid #e0e0e0", borderRadius: 12, padding: "36px 24px", textAlign: "center", position: "relative", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(216,24,32,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <span style={{ color: "#D81820" }}>{s.icon}</span>
                </div>
                <div style={{ fontFamily: "'Oswald',sans-serif", fontSize: 13, fontWeight: 700, color: "#D81820", letterSpacing: 2, marginBottom: 10 }}>STEP {s.step}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{s.desc}</p>
                {i < 4 && <div className="desktop-only" style={{ position: "absolute", top: "50%", right: -14, transform: "translateY(-50%)", color: "#d0d0d0", display: "flex" }}>{Icons.arrow}</div>}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "16px 40px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection {Icons.arrow}</button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Testimonials" heading="Don't Take Our Word For It" sub="Hear from homeowners across the Tulsa metro." dark />
          <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {homeReviews.map((r, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 12, padding: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <Stars />
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", marginTop: 16, marginBottom: 20, fontFamily: "'Open Sans',sans-serif" }}>"{r.text}"</p>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 16 }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#000", fontFamily: "'Oswald',sans-serif" }}>{r.name}</p>
                  <p style={{ fontSize: 12, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{r.source} Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing / Get My Rates */}
      <section id="financing-section" style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <RedLine center={false} />
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#D81820", marginBottom: 14, fontFamily: "'Open Sans',sans-serif" }}>Monthly Payment Options</p>
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, color: "#3490FC", marginBottom: 20, lineHeight: 1.15 }}>Get My Rates</h2>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 28 }}>
                A new roof is one of the most important investments you'll make in your home — and it shouldn't be out of reach. A&H Roofing partners with Hearth to offer monthly payment options through a network of 18 lenders, so you can protect your home now and pay over time.
              </p>
              <div className="contact-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                {[
                  "No impact on credit score to check rates",
                  "18 lenders, one application",
                  "Rates as low as 7.99% APR",
                  "Loans from $1K to $250K",
                  "Terms from 2 to 12 years",
                  "Funded in as little as 24 hours",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#3490FC" }}>{Icons.check}</span>
                    <span style={{ fontSize: 14, color: "#000", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="https://app.gethearth.com/financing/51431/90580/prequalify?utm_campaign=51431&utm_content=red&utm_medium=contractor-website&utm_source=contractor&utm_term=90580" target="_blank" rel="noopener noreferrer" style={{ background: "#D81820", color: "#fff", padding: "16px 36px", borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: "none", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, display: "inline-flex", alignItems: "center", gap: 8 }}>Get Pre-Approved {Icons.arrow}</a>
            </div>
            <div style={{ background: "#F0F6FF", borderRadius: 16, padding: 40, textAlign: "center" }}>
              <div style={{ color: "#3490FC", marginBottom: 20, display: "flex", justifyContent: "center" }}>{Icons.dollar}</div>
              <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 28, fontWeight: 700, color: "#000", marginBottom: 12 }}>Powered by Hearth</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 28 }}>Check your rates with no impact on your credit score and see your estimated monthly payment options instantly.</p>
              <div style={{ background: "#fff", borderRadius: 12, padding: "24px 20px", border: "1px solid #e0e0e0", marginBottom: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                {["FICO scores as low as 550", "18 lending partners", "Funded in as little as 24 hours"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                    <span style={{ color: "#3490FC" }}>{Icons.check}</span>
                    <span style={{ fontSize: 15, color: "#000", fontFamily: "'Open Sans',sans-serif", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="https://app.gethearth.com/financing/51431/90580/prequalify?utm_campaign=51431&utm_content=red&utm_medium=contractor-website&utm_source=contractor&utm_term=90580" target="_blank" rel="noopener noreferrer" style={{ background: "#D81820", color: "#fff", padding: "14px 32px", borderRadius: 6, fontSize: 15, fontWeight: 600, textDecoration: "none", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, display: "inline-block" }}>Get Pre-Approved</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SectionHead eyebrow="Common Questions" heading="Frequently Asked Questions" sub="Everything you need to know before your next roofing project." />
          <FaqAccordion />
        </div>
      </section>

      {/* Service Area */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <SectionHead eyebrow="Service Area" heading="Proudly Serving Tulsa, OKC & Surrounding Communities" />
          <CityPills />
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 20, lineHeight: 1.15 }}><span style={{ color: "#D81820" }}>Storm Season Is Here.</span> <span style={{ color: "#3490FC" }}>Is Your Roof Ready?</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>
            Oklahoma storm season doesn't wait — and neither should you. Whether you're dealing with hail damage, wind damage, or an aging roof that's past its prime, A&H Roofing & Contracting delivers fast inspections, honest assessments, and expert repairs backed by manufacturer warranties. Don't wait for a leak to find you. Get ahead of the storm.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
            <a href={TEL} style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: CONTACT ===========
  const ContactPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>
            Get Your Free Roof Inspection <span style={{ fontStyle: "italic", color: "#D81820" }}>Today</span>
          </h1>
          <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Mon-Sat 8AM-8PM</p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "60px clamp(24px,5vw,64px)", background: "#F0F6FF", textAlign: "center" }}>
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
              <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 26, fontWeight: 700, color: "#000", marginBottom: 6 }}>Request Your Free Inspection</h3>
              <p style={{ fontSize: 14, color: "#4A4A4A", marginBottom: 28, fontFamily: "'Open Sans',sans-serif" }}>We typically respond within the hour.</p>
              <form onSubmit={e => { e.preventDefault(); setContactFormDone(true); }}>
                <input type="text" placeholder="Name" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="tel" placeholder="Phone Number" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="text" placeholder="Property Address" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <label style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 16, cursor: "pointer" }}>
                  <input type="checkbox" required style={{ marginTop: 3, accentColor: "#D81820" }} />
                  <span style={{ fontSize: 11, lineHeight: 1.5, color: "#666", fontFamily: "'Open Sans',sans-serif" }}>By submitting this form, I consent to receive calls and texts (including automated) from A&H Roofing & Contracting at the number provided. Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to opt out.</span>
                </label>
                <button type="submit" style={{ width: "100%", padding: "16px", borderRadius: 8, background: "#D81820", color: "#fff", border: "none", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 16px rgba(216,24,32,0.25)" }}>Request My Free Inspection</button>
              </form>
            </>) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(216,24,32,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}><span style={{ color: "#D81820" }}>{Icons.check}</span></div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 22, fontWeight: 700, color: "#000", marginBottom: 8 }}>Request Received!</h3>
                <p style={{ fontSize: 14, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>We'll be in touch shortly to schedule your inspection.</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 24, fontWeight: 700, color: "#000", marginBottom: 32 }}>Contact Information</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,24,32,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#D81820" }}>{Icons.phone}</span></div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4A4A4A", marginBottom: 4, fontFamily: "'Open Sans',sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>Phone</p>
                  <a href={TEL} style={{ fontSize: 18, fontWeight: 600, color: "#000", fontFamily: "'Oswald',sans-serif" }}>{PHONE}</a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,24,32,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#D81820" }}>{Icons.mapPinLg}</span></div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4A4A4A", marginBottom: 4, fontFamily: "'Open Sans',sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>Tulsa Office</p>
                  <p style={{ fontSize: 16, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>{ADDRESS_TULSA}</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,24,32,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#D81820" }}>{Icons.mapPinLg}</span></div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4A4A4A", marginBottom: 4, fontFamily: "'Open Sans',sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>Edmond HQ</p>
                  <p style={{ fontSize: 16, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>{ADDRESS_EDMOND}</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,24,32,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><span style={{ color: "#D81820" }}>{Icons.clock}</span></div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4A4A4A", marginBottom: 4, fontFamily: "'Open Sans',sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>Hours</p>
                  <p style={{ fontSize: 16, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>Mon-Sat: 8AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: "0", background: "#fff" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.8!2d-95.9133!3d36.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6eb9f5f3fffff%3A0x0!2s6703+E+81st+St+A%2C+Tulsa%2C+OK+74133!5e0!3m2!1sen!2sus!4v1" width="100%" height="400" style={{ border: "none", display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="A&H Roofing & Contracting — Tulsa Office" />
      </section>

      {/* Trust Badges */}
      <TrustStrip />
    </>
  );

  // =========== PAGE: ROOFING SERVICES ===========
  const RoofingPage = () => (
    <>
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>Roofing Services in <span style={{ fontStyle: "italic", color: "#D81820" }}>Tulsa & OKC</span></h1>
          <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Over 26 combined years of experience. GAF Certified. Owens Corning Preferred.</p>
        </div>
      </section>
      <TrustStrip />
      {/* Intro Split */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <RedLine center={false} />
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>Residential & Commercial Roofing</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16 }}>A&H Roofing and Contracting has been serving homeowners across the Tulsa and Oklahoma City metro areas with over 26 combined years of experience. Whether you need a full roof replacement, a new roof installation, or ongoing maintenance, our team handles residential and commercial roofing projects of all sizes.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Oklahoma weather is hard on roofs. Between unpredictable spring hailstorms, scorching summers, and sudden wind events, your roofing system needs more than a quick patch job every few years. It needs proper attention from a contractor who knows what they are doing.</p>
            </div>
            <img src="/projects/3.webp" alt="Roof Installation" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </div>
      </section>
      {/* Honest Assessment */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <img src="/projects/5.webp" alt="Completed Roof" style={{ width: "100%", height: 380, objectFit: "cover", borderRadius: 12 }} />
            <div>
              <RedLine center={false} />
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>Honest Assessments, Not Upsells</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16 }}>The right approach depends entirely on your specific situation. Sometimes a few damaged shingles can be replaced without much hassle. Other times, years of wear have compromised the entire system to the point where patching things up would just be throwing money at a temporary fix. We will give you an honest assessment rather than pushing you toward the most expensive option.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Shingles now come in a wider range of colors and styles than they did even a decade ago, so protecting your home does not mean sacrificing curb appeal. Whether you are going for a traditional look or something more modern, there are options that balance durability with design for Oklahoma's climate.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHead eyebrow="Certified Quality" heading="Backed by Manufacturer Standards" />
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {[
              { icon: Icons.shield, title: "GAF Certified Contractor", desc: "Our installations are backed by GAF manufacturer standards and warranty options that reflect that level of certification." },
              { icon: Icons.award, title: "Owens Corning Preferred", desc: "As an Owens Corning Preferred Contractor, we meet rigorous standards for professionalism, training, and customer satisfaction." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#F0F6FF", borderRadius: 12, padding: "32px 28px", display: "flex", gap: 20, alignItems: "flex-start", border: "1px solid #e0e0e0" }}>
                <div style={{ color: "#3490FC", flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Getting Started */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <RedLine />
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>Getting Started Is Simple</h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 32 }}>We begin with a free inspection so you know exactly what you are dealing with before making any decisions. From there, we discuss options, review the estimate, and select a path forward that fits your needs and your budget.</p>
          <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
        </div>
      </section>
      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Ready for a Roof That <span style={{ color: "#3490FC" }}>Lasts?</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>No pressure, no obligation. Just an honest assessment from a team you can trust.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
            <a href={TEL} style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: ROOF REPAIR ===========
  const RepairPage = () => (
    <>
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>Roof Repair in <span style={{ fontStyle: "italic", color: "#D81820" }}>Tulsa & OKC</span></h1>
          <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Over 26 combined years of honest, reliable roof repair across Oklahoma.</p>
        </div>
      </section>
      <TrustStrip />
      {/* Intro Split */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <RedLine center={false} />
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>When Something Goes Wrong, You Notice</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16 }}>Your roof takes a beating. Between Oklahoma's unpredictable spring storms, summer heat waves, and the occasional hailstorm that rolls through the Tulsa area, it is a wonder most roofs last as long as they do.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>When something goes wrong, you notice it quickly. Maybe a water stain is spreading across your ceiling. Maybe you found a few shingles in the yard after last week's windstorm. Or maybe your energy bills have started climbing for no clear reason.</p>
            </div>
            <img src="/projects/8.webp" alt="Roof Repair" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </div>
      </section>
      {/* Repair vs Replace */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHead eyebrow="Honest Assessment" heading="Repair or Replace?" />
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: "32px 28px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 22, fontWeight: 600, color: "#000", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}><span style={{ color: "#3490FC" }}>{Icons.wrench}</span> When Repair Makes Sense</h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Not every roof issue needs a full replacement. If your roof is relatively young and the damage is isolated, repair work usually makes more sense. Fixing a section of damaged shingles or addressing a single leak is far more affordable than tearing everything off and starting fresh.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, padding: "32px 28px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 22, fontWeight: 600, color: "#000", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}><span style={{ color: "#D81820" }}>{Icons.roof}</span> When Replacement Is Smarter</h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>But if your roof has been patched multiple times, if the damage is widespread, or if the roofing material has simply reached the end of its lifespan, replacement might be the smarter long-term investment.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Promise */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#D81820", marginBottom: 20, display: "flex", justifyContent: "center" }}>{Icons.quote}</div>
          <p style={{ fontSize: 20, lineHeight: 1.7, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif", fontStyle: "italic", marginBottom: 24 }}>"During an inspection, we will give you an honest assessment. We are not going to push you toward a new roof if repairs will genuinely solve the problem. But we are also not going to let you dump money into a roof that is past saving. That is not how we do business."</p>
          <p style={{ fontSize: 15, color: "#3490FC", fontFamily: "'Oswald',sans-serif", fontWeight: 600 }}>— The A&H Promise</p>
        </div>
      </section>
      {/* Extend Life */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <RedLine />
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Extend Your Roof's <span style={{ color: "#3490FC" }}>Life</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 32 }}>A quality repair job can extend the life of your roof by years when done right. Contact us for a free inspection and we will tell you exactly what you are dealing with.</p>
          <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
        </div>
      </section>
    </>
  );

  // =========== PAGE: STORM DAMAGE ===========
  const StormPage = () => (
    <>
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>Storm Damage & <span style={{ fontStyle: "italic", color: "#D81820" }}>Insurance Support</span></h1>
          <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Northwest Oklahoma is one of the most active storm and hail regions in the country.</p>
        </div>
      </section>
      <TrustStrip />
      {/* Intro Split */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <RedLine center={false} />
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>Hail, Wind & Storm Damage</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16 }}>When damage hits, A&H Roofing and Contracting helps guide you through the insurance claim process when damage may be covered, explaining your options clearly so you can make informed decisions.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Whether you are dealing with hail damage, wind damage, or storm damage, our team provides reliable roofing services designed to last. From matching shingles to selecting durable materials, every job is handled professionally with protection, performance, and long-term value in mind.</p>
            </div>
            <img src="/projects/10.jpg" alt="Storm Damage Inspection" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </div>
      </section>
      {/* What We Handle */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionHead eyebrow="Insurance Support" heading="We Handle the Hard Part" />
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { icon: Icons.clipboard, label: "Thorough damage documentation" },
              { icon: Icons.dollar, label: "Detailed estimates for insurance" },
              { icon: Icons.users, label: "Direct communication with adjusters" },
              { icon: Icons.shield, label: "Clear explanations for decisions" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "28px 20px", textAlign: "center", border: "1px solid #e0e0e0" }}>
                <div style={{ color: "#3490FC", marginBottom: 12 }}>{item.icon}</div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#000", fontFamily: "'Open Sans',sans-serif", lineHeight: 1.5 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Reviews */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHead eyebrow="What Our Customers Say" heading="This Is What We're Known For" sub="Insurance support is not something we added as an afterthought. It is what our customers praise us for most." dark />
          <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { name: "Chance Hair", text: "The ONLY Roofing company I will ever deal with again. A&H Roofing worked extremely hard getting my roof paid for by insurance." },
              { name: "Sara Grant", text: "Chris made getting a new roof simple and extremely stress-free. He walked me through everything step by step." },
              { name: "Kelsi Owen", text: "Chris Archer had been doing some work for a friend of his, who happened to be our neighbor. We saw their work and reached out." },
            ].map((r, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 12, padding: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <Stars />
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", marginTop: 16, marginBottom: 20, fontFamily: "'Open Sans',sans-serif" }}>"{r.text}"</p>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 16 }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#000", fontFamily: "'Oswald',sans-serif" }}>{r.name}</p>
                  <p style={{ fontSize: 12, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}><span style={{ color: "#D81820" }}>Storm Season Doesn't Wait</span> — <span style={{ color: "#3490FC" }}>Neither Should You</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4A4A4A", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>If your roof was recently impacted by severe weather, our crew can inspect the roof and determine what may be covered by insurance.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
            <a href={TEL} style={{ color: "#000", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: GUTTERS ===========
  const GuttersPage = () => (
    <>
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>Gutter Services in <span style={{ fontStyle: "italic", color: "#D81820" }}>Tulsa & OKC</span></h1>
          <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Installation, cleaning, and repair to protect your home from water damage.</p>
        </div>
      </section>
      <TrustStrip />
      {/* Intro Split */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <RedLine center={false} />
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>Protect Your Foundation</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16 }}>Gutters are an integral part of your home's exterior, designed to collect and divert rainwater away from the foundation and structure of the house. Properly installed and maintained gutters play a critical role in protecting the structural integrity of your home by preventing water damage, soil erosion around the foundation, and reducing the risk of basement flooding.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>A&H Roofing and Contracting provides comprehensive gutter services for homeowners across the Tulsa and Oklahoma City metro areas.</p>
            </div>
            <img src="/projects/9.webp" alt="Gutter Installation" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </div>
      </section>
      {/* When Gutters Fail */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHead eyebrow="Why It Matters" heading="When Gutters Fail, Damage Adds Up Fast" />
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: Icons.gutter, title: "Foundation Pooling", desc: "Water that is not properly channeled pools around your foundation, leading to cracks and structural damage over time." },
              { icon: Icons.storm, title: "Siding Damage", desc: "Overflowing gutters send water running down your siding, causing stains, rot, and paint deterioration." },
              { icon: Icons.dollar, title: "Expensive Repairs", desc: "Problems from failed gutters cost far more to fix than the gutter work would have in the first place." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "32px 24px", textAlign: "center", border: "1px solid #e0e0e0" }}>
                <div style={{ color: "#3490FC", marginBottom: 16 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 18, fontWeight: 600, color: "#000", marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Full Service */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <RedLine />
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Complete Gutter <span style={{ color: "#3490FC" }}>Solutions</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 32 }}>Whether you need a new gutter system installed, existing gutters repaired, or routine cleaning to keep everything flowing, we handle it with the same level of attention we bring to every roofing project.</p>
          <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
        </div>
      </section>
    </>
  );

  // =========== PAGE: PAINTING ===========
  const PaintingPage = () => (
    <>
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>Painting Services in <span style={{ fontStyle: "italic", color: "#D81820" }}>Tulsa</span></h1>
          <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Interior and exterior painting with high-quality paints for a lasting finish.</p>
        </div>
      </section>
      <TrustStrip />
      {/* Intro Split */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <RedLine center={false} />
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>More Than Just Color on a Wall</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16 }}>A&H Roofing and Contracting provides professional painting services for homeowners across the Tulsa area. Whether it is refreshing a single room or revamping your entire home, our team delivers a clean, efficient, and precise painting experience using high-quality paints for a lasting finish.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Professional painting is more than just applying color to a wall. It is a process that starts with proper surface preparation — cleaning, sanding, and priming — to ensure the paint adheres correctly and lasts.</p>
            </div>
            <img src="/projects/6.webp" alt="Exterior Project" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </div>
      </section>
      {/* Interior & Exterior */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHead eyebrow="What We Offer" heading="Interior & Exterior Painting" />
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: Icons.paint, title: "Surface Preparation", desc: "Cleaning, sanding, and priming to ensure the paint adheres correctly and provides lasting protection." },
              { icon: Icons.shield, title: "Protective Finish", desc: "A quality paint job provides a protective layer that shields surfaces from wear, weather, and damage over time." },
              { icon: Icons.heart, title: "Flawless Results", desc: "From vibrant colors to elegant neutrals, our team ensures a flawless finish that transforms your space." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "32px 24px", textAlign: "center", border: "1px solid #e0e0e0" }}>
                <div style={{ color: "#3490FC", marginBottom: 16 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 18, fontWeight: 600, color: "#000", marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Transform Your <span style={{ color: "#3490FC" }}>Space</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>We handle both interior and exterior painting projects with the same attention to detail we bring to every roofing project.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
            <a href={TEL} style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: ESQUIRE SERVICES ===========
  const EsquirePage = () => (
    <>
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>The <span style={{ fontStyle: "italic", color: "#D81820" }}>Esquire Package</span></h1>
          <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Our top-tier upgrade for maximum protection, enhanced curb appeal, and a roof built to last.</p>
        </div>
      </section>
      <TrustStrip />
      {/* Intro Split */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <RedLine center={false} />
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>Maximum Protection. Enhanced Curb Appeal.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16 }}>The Esquire Package is our top-tier upgrade for homeowners who want maximum protection, enhanced curb appeal, and a roof that is built to last. Whether you have experienced storm damage or you are ready for a smarter long-term investment, this package delivers strength, style, and peace of mind.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Finding a trustworthy roofing solution can be a stressful and time-consuming process. The Esquire Package was built to take that stress off your plate by combining everything into one comprehensive service.</p>
            </div>
            <img src="/projects/4.webp" alt="Esquire Package Roof" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </div>
      </section>
      {/* Why Esquire */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHead eyebrow="The Esquire Advantage" heading="One Crew. One Timeline. One Company." />
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: Icons.users, title: "Single Point of Contact", desc: "One company standing behind the finished product. No coordinating multiple contractors." },
              { icon: Icons.clipboard, title: "Comprehensive Service", desc: "Everything from replacing shingles to ensuring proper gutter installation — all handled under one roof." },
              { icon: Icons.shield, title: "Complete Exterior Upgrade", desc: "Instead of worrying about whether the work lines up, you get one crew, one timeline, and one result." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "32px 24px", textAlign: "center", border: "1px solid #e0e0e0" }}>
                <div style={{ color: "#3490FC", marginBottom: 16 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 18, fontWeight: 600, color: "#000", marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Ready for the <span style={{ color: "#3490FC" }}>Esquire Package?</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>One crew. One timeline. One company standing behind the finished product. Get started with a free inspection.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
            <a href={TEL} style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: PROJECTS GALLERY ===========
  const ProjectsPage = () => {
    const projectPhotos = [
      "/projects/1.webp", "/projects/2.webp", "/projects/3.webp", "/projects/4.webp",
      "/projects/5.webp", "/projects/6.webp", "/projects/7.webp", "/projects/8.webp",
      "/projects/9.webp", "/projects/10.jpg",
    ];
    const unused1 = null; // placeholder
    return (
      <>
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>Our Work <span style={{ fontStyle: "italic", color: "#D81820" }}>Speaks for Itself</span></h1>
            <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Real projects. Real homes. Real results across the Tulsa and OKC metro.</p>
          </div>
        </section>

        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead eyebrow="Our Projects" heading="Recent Work" sub="Every photo is real work done by our crew — no stock photos, no borrowed images." />
            <div className="masonry-grid" style={{ columns: "3 320px", columnGap: 16 }}>
              {projectPhotos.map((src, i) => (
                <div key={i} style={{ breakInside: "avoid", marginBottom: 16 }}>
                  <img src={src} alt={`A&H Roofing project ${i + 1}`} style={{ width: "100%", borderRadius: 10, display: "block" }} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 20, lineHeight: 1.15 }}>Ready to See <span style={{ color: "#3490FC" }}>Your Home</span> Here?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>Get your free roof inspection and let us show you what A&H quality looks like.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
              <a href={TEL} style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
            </div>
          </div>
        </section>
      </>
    );
  };

  // =========== PAGE: SERVICE AREAS ===========
  const AreasPage = () => {
    const tulsaMetro = [
      { name: "Tulsa", page: "tulsa" },
      { name: "Broken Arrow", page: "broken-arrow" },
      { name: "Owasso", page: null },
      { name: "Jenks", page: null },
      { name: "Bixby", page: null },
    ];
    const okcMetro = [
      { name: "Oklahoma City", page: null },
      { name: "Edmond", page: null },
      { name: "Piedmont", page: null },
      { name: "Moore", page: null },
      { name: "Yukon", page: null },
      { name: "El Reno", page: null },
      { name: "Okarche", page: null },
      { name: "Choctaw", page: null },
      { name: "Guthrie", page: null },
    ];

    const CityCard = ({ city }) => (
      <div
        onClick={() => city.page ? navigate(city.page) : navigate("contact")}
        style={{ background: "#F8F9FA", borderRadius: 12, padding: "28px 24px", border: "1px solid #e0e0e0", cursor: "pointer", transition: "box-shadow 0.3s, border-color 0.3s", textAlign: "center" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#D81820"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(216,24,32,0.1)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }}
      >
        <div style={{ color: "#3490FC", marginBottom: 12, display: "flex", justifyContent: "center" }}>{Icons.mapPinLg}</div>
        <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 6 }}>{city.name}</h3>
        <p style={{ fontSize: 13, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Roofing & Contracting Services</p>
        {city.page && <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600, color: "#D81820", marginTop: 12, fontFamily: "'Open Sans',sans-serif" }}>View City Page {Icons.arrow}</span>}
      </div>
    );

    return (
      <>
        {/* Hero */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>
              Serving All of Tulsa, OKC, and <span style={{ fontStyle: "italic", color: "#D81820" }}>Central Oklahoma</span>
            </h1>
            <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Two offices. Two metros. One standard of quality.</p>
          </div>
        </section>

        {/* Intro */}
        <section style={{ padding: "60px clamp(24px,5vw,64px)", background: "#F0F6FF", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>
              A&H Roofing & Contracting operates out of two locations — our Tulsa office at 6703 E 81st St and our Edmond headquarters at 3209 S Broadway — giving us full coverage across both the Tulsa metro and the Oklahoma City metro. Whether you're in Broken Arrow or Piedmont, Owasso or Moore, our crews are local, our estimates are free, and our work is backed by manufacturer warranties from GAF and Owens Corning.
            </p>
          </div>
        </section>

        {/* Tulsa Metro Grid */}
        <section style={{ padding: "80px clamp(24px,5vw,64px) 40px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHead eyebrow="Tulsa Metro" heading="Tulsa & Surrounding Cities" sub="Based in Tulsa, serving homeowners across the entire metro." />
            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
              {tulsaMetro.map((city, i) => <CityCard key={i} city={city} />)}
            </div>
          </div>
        </section>

        {/* OKC Metro Grid */}
        <section style={{ padding: "40px clamp(24px,5vw,64px) 80px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHead eyebrow="OKC Metro" heading="Oklahoma City & Surrounding Cities" sub="Headquartered in Edmond, serving the entire OKC metro." />
            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
              {okcMetro.map((city, i) => <CityCard key={i} city={city} />)}
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section style={{ padding: "0 clamp(24px,5vw,64px) 80px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <img src="/ah-areas.webp" alt="A&H Roofing Service Area" style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: 12 }} />
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Don't See Your City? <span style={{ color: "#3490FC" }}>We Probably Cover It.</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>
              A&H Roofing & Contracting serves communities across central Oklahoma. Give us a call and we'll let you know if we can help.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
              <a href={TEL} style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
            </div>
          </div>
        </section>
      </>
    );
  };

  // =========== PAGE: TULSA ===========
  const TulsaPage = () => {
    const neighborhoods = [
      "Midtown", "Brookside", "South Tulsa", "Maple Ridge", "Riverside",
      "Florence Park", "Kendall-Whittier", "Gilcrease Hills", "Jenks (South Tulsa)",
      "Broken Arrow (East Tulsa)", "Turley", "Owen Park", "Cherry Street", "Utica Square"
    ];

    return (
      <>
        {/* Hero */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>
              Trusted by Tulsa Homeowners — <span style={{ fontStyle: "italic", color: "#D81820" }}>68 Five-Star Reviews and Counting</span>
            </h1>
            <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>GAF Certified. Owens Corning Preferred. Tulsa's highest-rated roofing contractor.</p>
          </div>
        </section>

        {/* Storm Damage Experts */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-split">
            <div>
              <RedLine center={false} />
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#D81820", marginBottom: 14, fontFamily: "'Open Sans',sans-serif" }}>Storm Damage Experts</p>
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>Tulsa's Go-To Team After Every Storm</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 24 }}>
                Tulsa sits squarely in Tornado Alley, and every spring brings hail, high winds, and the kind of storms that can destroy a roof overnight. A&H Roofing & Contracting has helped hundreds of Tulsa homeowners navigate the aftermath — from initial inspections to full insurance-funded replacements. We document the damage, file the claim, and get your roof replaced fast so you can get back to normal.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Free storm damage inspections", "Direct insurance claim assistance — we handle the paperwork", "Hail, wind, and fallen debris repairs", "Full roof replacements backed by manufacturer warranties"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#D81820" }}>{Icons.check}</span>
                    <span style={{ fontSize: 15, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <img src="/projects/10.jpg" alt="Storm Damage — Tulsa" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </section>

        {/* Local Crew */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-split">
            <img src="/ah-team.png" alt="A&H Crew on the job" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
            <div>
              <RedLine center={false} />
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#D81820", marginBottom: 14, fontFamily: "'Open Sans',sans-serif" }}>Local Crew</p>
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>A Tulsa Team That Shows Up</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 20 }}>
                A&H isn't a national franchise or a storm-chaser outfit that blows through town and disappears. We're a locally owned, Tulsa-based roofing company with a permanent office and a crew that lives right here. When you call us, you talk to people who know your neighborhood, understand your HOA requirements, and stand behind their work long after the job is done.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 20px", background: "#F0F6FF", borderRadius: 8, border: "1px solid #e0e0e0" }}>
                <span style={{ color: "#3490FC" }}>{Icons.mapPinLg}</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>{ADDRESS_TULSA}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Manufacturer Certified */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <SectionHead eyebrow="Certifications" heading="Dual Manufacturer Certified" sub="Only a small fraction of roofing contractors in Oklahoma hold both GAF and Owens Corning certifications." />
            <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
              <div style={{ background: "#fff", borderRadius: 12, padding: "36px 28px", border: "1px solid #e0e0e0", textAlign: "center" }}>
                <div style={{ color: "#3490FC", marginBottom: 16, display: "flex", justifyContent: "center" }}>{Icons.shield}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 10 }}>GAF Certified Contractor</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Only 3% of roofers in North America earn this designation. GAF certification means our installations qualify for enhanced manufacturer warranties — including the Golden Pledge, the strongest warranty in roofing.</p>
              </div>
              <div style={{ background: "#fff", borderRadius: 12, padding: "36px 28px", border: "1px solid #e0e0e0", textAlign: "center" }}>
                <div style={{ color: "#3490FC", marginBottom: 16, display: "flex", justifyContent: "center" }}>{Icons.award}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 10 }}>Owens Corning Preferred</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Owens Corning Preferred Contractors meet rigorous standards for professionalism, customer satisfaction, and installation quality. This status unlocks extended warranties and premium product access for your project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Review Callout */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div style={{ color: "#D81820", marginBottom: 20, display: "flex", justifyContent: "center" }}>{Icons.quote}</div>
            <Stars />
            <p style={{ fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.9)", marginTop: 20, marginBottom: 24, fontFamily: "'Open Sans',sans-serif", fontStyle: "italic" }}>
              "We had significant hail damage and A&H made the entire process painless. Chris walked us through the insurance claim step by step, the crew was professional and fast, and our new roof looks better than the original. Can't say enough good things about this company."
            </p>
            <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", fontFamily: "'Oswald',sans-serif" }}>Brandy Byfield</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'Open Sans',sans-serif" }}>Google Review — Tulsa Homeowner</p>
          </div>
        </section>

        {/* Neighborhoods */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <SectionHead eyebrow="Neighborhoods" heading="Tulsa Neighborhoods We Serve" sub="From Midtown to South Tulsa, we've roofed homes in every corner of the city." />
            <div className="city-pills" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {neighborhoods.map(n => (
                <span key={n} style={{ padding: "10px 22px", borderRadius: 50, background: "#F0F6FF", border: "1px solid #d0e4ff", fontSize: 14, fontWeight: 500, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>{n}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Get Your Free <span style={{ color: "#3490FC" }}>Tulsa Roof Inspection</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>
              Whether you need storm damage repair, a full replacement, or just a second opinion — A&H is Tulsa's most trusted call.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Schedule My Free Inspection</button>
              <a href={TEL} style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
            </div>
          </div>
        </section>
      </>
    );
  };

  // =========== PAGE: BROKEN ARROW ===========
  const BrokenArrowPage = () => {
    const neighborhoods = [
      "New Tulsa", "Lynn Lane", "The Villages at Broken Arrow", "Aspen Creek",
      "Forest Ridge", "Timber Ridge", "Kenosha Hills", "Country Meadows",
      "Creek Turnpike Corridor", "South Broken Arrow"
    ];

    const services = [
      { icon: Icons.roof, title: "Roof Replacement", desc: "Full tear-off and installation with GAF or Owens Corning shingle systems. Manufacturer-backed warranties included." },
      { icon: Icons.wrench, title: "Roof Repair", desc: "Storm damage, leaks, missing shingles, and flashing repair. Fast response, honest assessments." },
      { icon: Icons.gutter, title: "Gutters", desc: "Seamless aluminum gutter installation, gutter guards, and downspout solutions." },
      { icon: Icons.paint, title: "Painting", desc: "Interior and exterior painting with professional prep work and premium materials." },
      { icon: Icons.storm, title: "Storm Damage & Insurance", desc: "We document the damage, file the claim, and manage the process so you don't have to." },
    ];

    return (
      <>
        {/* Hero */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>
              Broken Arrow's <span style={{ fontStyle: "italic", color: "#D81820" }}>Trusted Roofing Team</span>
            </h1>
            <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>GAF Certified. Owens Corning Preferred. Serving BA homeowners with honest work and real warranties.</p>
          </div>
        </section>

        {/* Intro */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-split">
            <div>
              <RedLine center={false} />
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#D81820", marginBottom: 14, fontFamily: "'Open Sans',sans-serif" }}>Broken Arrow Roofing</p>
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: "#000", marginBottom: 20, lineHeight: 1.15 }}>Roofing for One of Oklahoma's Fastest-Growing Cities</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>
                Broken Arrow is one of the fastest-growing cities in Oklahoma — a mix of brand-new construction and aging neighborhoods that both need quality roofing care. Whether your home was built last year or thirty years ago, A&H Roofing & Contracting delivers the same standard: honest inspections, expert installation, and manufacturer-backed warranties that protect your investment for decades.
              </p>
            </div>
            <img src="/projects/2.webp" alt="Roof Replacement — Broken Arrow" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHead eyebrow="Services" heading="What We Do in Broken Arrow" sub="Full-service roofing and contracting for BA homeowners." />
            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
              {services.map((s, i) => (
                <div key={i} style={{ background: "#F8F9FA", borderRadius: 12, padding: "32px 20px", textAlign: "center", border: "1px solid #e8e8e8" }}>
                  <div style={{ color: "#3490FC", marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 17, fontWeight: 600, color: "#000", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Row */}
        <section style={{ padding: "0 clamp(24px,5vw,64px)", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, paddingBottom: 80 }} className="reviews-grid">
            <img src="/projects/1.webp" alt="Before" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 12 }} />
            <img src="/projects/8.webp" alt="During" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 12 }} />
            <img src="/projects/3.webp" alt="After" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </section>

        {/* Neighborhoods */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <SectionHead eyebrow="Neighborhoods" heading="Broken Arrow Neighborhoods We Serve" sub="From New Tulsa to South BA, we've got Broken Arrow covered." />
            <div className="city-pills" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {neighborhoods.map(n => (
                <span key={n} style={{ padding: "10px 22px", borderRadius: 50, background: "#fff", border: "1px solid #d0e4ff", fontSize: 14, fontWeight: 500, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>{n}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Get My Free Roof Inspection in <span style={{ color: "#3490FC" }}>Broken Arrow</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>
              Whether it's storm damage, an aging roof, or a brand-new gutter system — A&H has Broken Arrow covered. Free inspections, honest estimates, and work you can trust.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
              <a href={TEL} style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
            </div>
          </div>
        </section>
      </>
    );
  };

  // =========== PAGE: REFERRAL PROGRAM ===========
  const ReferralPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>
            Refer & Earn Up to <span style={{ fontStyle: "italic", color: "#D81820" }}>$1,000</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>with A&H Roofing & Contracting</p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "60px clamp(24px,5vw,64px)", background: "#F0F6FF", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>
            Love your roof? Tell a friend and get rewarded! At A&H Roofing & Contracting, we appreciate when our customers share their experience. That's why we created our Referral Program — so you can earn up to $1,000 and achieve A&H Elite Partner status when your referrals book a full reroof.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginTop: 16 }}>
            Whether you're in Edmond, Tulsa, or nearby Oklahoma communities, it's easy to participate. Submit a referral, let us do the work, and get rewarded once the project is complete.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHead eyebrow="How It Works" heading="Three Simple Steps" />
          <div className="referral-steps" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { step: "01", title: "Submit Your Referral", desc: "Fill out the form with your information and your friend's details." },
              { step: "02", title: "We Take It From There", desc: "Our team contacts them, provides an estimate, and completes the reroof if they move forward." },
              { step: "03", title: "Get Paid", desc: "Once the project is done and paid in full, you'll receive your reward — usually within two weeks." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#F8F9FA", borderRadius: 12, padding: "36px 28px", textAlign: "center", border: "1px solid #e8e8e8" }}>
                <div style={{ fontFamily: "'Oswald',sans-serif", fontSize: 36, fontWeight: 700, color: "#D81820", marginBottom: 12 }}>{item.step}</div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Tiers */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SectionHead eyebrow="Rewards" heading="Earn Up to $1,000" sub="Rewards are capped at $1,000. After Level 5, you keep your Elite Partner status." dark />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { level: "1st Referral", amount: "$100" },
              { level: "2nd Referral", amount: "$200" },
              { level: "3rd Referral", amount: "$300" },
              { level: "4th Referral", amount: "$400" },
              { level: "5th Referral", amount: "$1,000", elite: true },
            ].map((tier, i) => (
              <div key={i} className="tier-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: tier.elite ? "rgba(216,24,32,0.15)" : "rgba(255,255,255,0.05)", border: tier.elite ? "1.5px solid #D81820" : "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "20px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "'Oswald',sans-serif", fontSize: 14, fontWeight: 700, color: "#D81820", letterSpacing: 1 }}>LEVEL {i + 1}</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>{tier.level}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "'Oswald',sans-serif", fontSize: 24, fontWeight: 700, color: tier.elite ? "#D81820" : "#FFFFFF" }}>{tier.amount}</span>
                  {tier.elite && <span style={{ fontSize: 12, fontWeight: 700, color: "#D81820", letterSpacing: 1, fontFamily: "'Oswald',sans-serif", background: "rgba(216,24,32,0.1)", padding: "4px 12px", borderRadius: 4 }}>+ ELITE PARTNER</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Payout */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <RedLine center={false} />
              <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 24, fontWeight: 700, color: "#000", marginBottom: 20 }}>What's Eligible</h3>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16 }}>
                <span style={{ color: "#2E7D32", flexShrink: 0, marginTop: 2 }}>{Icons.check}</span>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}><strong style={{ color: "#000" }}>Qualifies:</strong> Full reroof projects for new or returning A&H Roofing customers in Oklahoma.</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D81820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}><strong style={{ color: "#000" }}>Does not qualify:</strong> Repairs and gutter services.</p>
              </div>
            </div>
            <div>
              <RedLine center={false} />
              <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 24, fontWeight: 700, color: "#000", marginBottom: 20 }}>Payout Options</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16 }}>Choose the option that works best for you (no cash):</p>
              {["Gift card", "Check", "Account credit"].map((opt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ color: "#3490FC" }}>{Icons.check}</span>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>{opt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: "40px 36px", border: "1px solid #e0e0e0" }}>
            {!referralFormDone ? (<>
              <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 26, fontWeight: 700, color: "#000", marginBottom: 6, textAlign: "center" }}>Submit a Referral</h3>
              <p style={{ fontSize: 14, color: "#4A4A4A", marginBottom: 28, fontFamily: "'Open Sans',sans-serif", textAlign: "center" }}>Fill out the form with your information and your friend's details.</p>
              <form onSubmit={e => { e.preventDefault(); setReferralFormDone(true); }}>
                <input type="text" placeholder="Name" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="tel" placeholder="Phone Number" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="text" placeholder="Friend's Name" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="tel" placeholder="Friend's Phone Number" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="text" placeholder="Friend's Address" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #e0e0e0", fontSize: 15, marginBottom: 14, background: "#fff", fontFamily: "'Open Sans',sans-serif", boxSizing: "border-box" }} />
                <label style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 16, cursor: "pointer" }}>
                  <input type="checkbox" required style={{ marginTop: 3, accentColor: "#D81820" }} />
                  <span style={{ fontSize: 11, lineHeight: 1.5, color: "#666", fontFamily: "'Open Sans',sans-serif" }}>By submitting this form, I consent to receive calls and texts (including automated) from A&H Roofing & Contracting at the number provided. Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to opt out.</span>
                </label>
                <button type="submit" style={{ width: "100%", padding: "16px", borderRadius: 8, background: "#D81820", color: "#fff", border: "none", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 16px rgba(216,24,32,0.25)" }}>Submit Referral</button>
              </form>
            </>) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(216,24,32,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}><span style={{ color: "#D81820" }}>{Icons.check}</span></div>
                <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 22, fontWeight: 700, color: "#000", marginBottom: 8 }}>Referral Submitted!</h3>
                <p style={{ fontSize: 14, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>Thanks for spreading the word. We'll reach out to your friend soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Start Earning <span style={{ color: "#3490FC" }}>Rewards Today</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>
            Submit a referral, let us do the work, and get rewarded once the project is complete. It's that simple.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <a href={TEL} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: BLOG ===========
  const BlogPage = () => {
    const categoryColors = {
      "Storm Prep": "#D81820",
      "Insurance Tips": "#3490FC",
      "Roofing 101": "#2E7D32",
      "Project Updates": "#E65100",
      "Maintenance": "#6A1B9A",
    };

    const blogPosts = [
      { title: "What to Do After Hail Hits Your Roof in Tulsa", category: "Storm Prep", excerpt: "Learn the critical first steps every Tulsa homeowner should take after a hailstorm...", date: "April 2026" },
      { title: "How to File a Roof Insurance Claim in Oklahoma", category: "Insurance Tips", excerpt: "A step-by-step guide to navigating the insurance claim process...", date: "March 2026" },
      { title: "GAF vs. Owens Corning: Which Shingle Brand?", category: "Roofing 101", excerpt: "We install both. Here's how to choose the right one for your home...", date: "February 2026" },
      { title: "How Long Does a Roof Last in Oklahoma?", category: "Maintenance", excerpt: "Climate, materials, and installation quality all factor in...", date: "January 2026" },
      { title: "5 Signs You Need a Roof Replacement", category: "Roofing 101", excerpt: "Not every problem needs a new roof. But these five signs mean it's time...", date: "December 2025" },
      { title: "Storm Season Prep: Protecting Your Roof Before It Hits", category: "Storm Prep", excerpt: "What to do now so you're not scrambling after the damage...", date: "November 2025" },
    ];

    return (
      <>
        {/* Hero Banner */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>
              Roofing Tips, Storm Guides & <span style={{ fontStyle: "italic", color: "#D81820" }}>Project Updates</span>
            </h1>
          </div>
        </section>

        {/* Blog Grid */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
              {blogPosts.map((post, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e0e0e0", overflow: "hidden", transition: "box-shadow 0.2s ease" }}>
                  {/* Placeholder Image */}
                  <div style={{ background: "#E8E8E8", height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                  </div>
                  <div style={{ padding: "24px 24px 28px" }}>
                    <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600, color: "#fff", background: categoryColors[post.category] || "#4A4A4A", fontFamily: "'Open Sans',sans-serif", letterSpacing: 0.5, marginBottom: 14 }}>{post.category}</span>
                    <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 20, fontWeight: 600, color: "#000", lineHeight: 1.3, marginBottom: 10 }}>{post.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 12, color: "#999", fontFamily: "'Open Sans',sans-serif" }}>{post.date}</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#D81820", fontFamily: "'Open Sans',sans-serif", cursor: "pointer" }}>Read More →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Have a Roofing <span style={{ color: "#3490FC" }}>Question?</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>
              Whether it's storm damage, insurance questions, or just time for a new roof — we're always happy to talk. Give us a call and get answers from a real person.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <a href={TEL} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} Call {PHONE}</a>
            </div>
          </div>
        </section>
      </>
    );
  };

  // =========== FAQ ACCORDION ===========
  const FaqAccordion = () => {
    const [openIdx, setOpenIdx] = useState(null);
    const faqs = [
      { q: "How do I know if I need a roof replacement or just a repair?", a: "If your roof is over 15 years old, has widespread storm damage, or you're seeing multiple leaks, a full replacement is usually the smarter investment. For isolated issues like a few missing shingles or a small leak, a repair may be all you need. We provide free inspections and give you an honest recommendation — we'll never push a replacement if a repair will do the job." },
      { q: "Do you work with insurance companies on storm damage claims?", a: "Absolutely. We handle storm damage claims every week across the Tulsa and OKC metro. We'll document all damage with photos and measurements, meet with your adjuster on-site, and make sure nothing gets missed. Our team walks you through the entire process so you get the coverage you're entitled to — at no extra cost to you." },
      { q: "What roofing brands do you install?", a: "We're both GAF Certified and Owens Corning Preferred, which means we install two of the most trusted shingle brands in the industry. Both offer manufacturer-backed warranties that go beyond the standard coverage — and because we're certified installers, your warranty protection is stronger than what most contractors can offer." },
      { q: "How long does a roof replacement take?", a: "Most residential roof replacements are completed in one to two days, depending on the size of the home and the scope of work. We prep the area, remove the old roof, install the new system, and do a full cleanup — all in a tight timeline so you're not dealing with an open roof overnight." },
      { q: "Do you offer financing?", a: "Yes. We've partnered with Hearth, which connects you to 18 lending partners through a single application. Checking your rates won't affect your credit score, and you'll see your estimated monthly payment options right away. Loan amounts range from $1K to $250K with terms from 2 to 12 years and rates as low as 7.99% APR. If approved, funding can arrive in as little as 24 hours." },
      { q: "What areas do you serve?", a: "We serve the greater Tulsa metro — including Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Sapulpa, Glenpool, Coweta, Claremore, and Catoosa — as well as the OKC metro including Edmond, Norman, and Oklahoma City. If you're in Oklahoma, chances are we can help." },
      { q: "Are you licensed and insured?", a: "Yes. A&H Roofing & Contracting is fully licensed (OK License #80005784), bonded, and insured. We're also BBB A+ accredited, GAF Certified, and Owens Corning Preferred — credentials that require ongoing training, quality standards, and verified customer satisfaction." },
      { q: "What kind of warranty do I get?", a: "Our manufacturer-backed warranties cover materials and workmanship. As GAF and Owens Corning certified installers, we can offer enhanced warranty packages that most contractors can't — including options that cover the full roofing system for up to 50 years. We'll walk you through your options during the estimate." },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e0e0e0", overflow: "hidden" }}>
            <button onClick={() => setOpenIdx(openIdx === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "18px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
              <span style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, fontWeight: 600, color: "#000", lineHeight: 1.4 }}>{faq.q}</span>
              <span style={{ transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", flexShrink: 0, color: "#D81820" }}>{Icons.chevDown}</span>
            </button>
            {openIdx === i && (
              <div style={{ padding: "0 24px 20px", fontSize: 15, lineHeight: 1.75, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // =========== PAGE: ABOUT ===========
  const AboutPage = () => (
    <>
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>About <span style={{ fontStyle: "italic", color: "#D81820" }}>A&H Roofing & Contracting</span></h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>Locally Owned. Professionally Certified. Built on Trust.</p>
        </div>
      </section>
      <TrustStrip />
      {/* Intro Split */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <RedLine center={false} />
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#3490FC", marginBottom: 20, lineHeight: 1.15 }}>Family-Owned. Oklahoma-Rooted.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 16 }}>A&H Roofing and Contracting LLC is a family-owned roofing contractor serving homeowners across the Tulsa and OKC metro areas. With over 16 years of hands-on experience and 26 combined years of expertise, owner Chris Archer and the A&H team have built a reputation for reliable, high-quality work that protects and improves the homes and spaces they serve.</p>
            </div>
            <img src="/ah-team.png" alt="A&H Roofing & Contracting team on a roof" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 12 }} />
          </div>
        </div>
      </section>
      {/* Certifications */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHead eyebrow="Industry Certified" heading="Certified by the Best in the Industry" />
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <img src="/ah-office.webp" alt="A&H Roofing & Contracting office and vehicle" style={{ width: "100%", height: 350, objectFit: "cover", borderRadius: 12 }} />
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif", marginBottom: 24 }}>A&H holds dual manufacturer certifications — GAF Certified Contractor and Owens Corning Preferred Contractor — meaning your roof isn't just installed right, it's backed by the manufacturers who make the materials. The company is also BBB A+ Accredited and fully licensed in the state of Oklahoma.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {["GAF Certified", "Owens Corning Preferred", "BBB A+ Accredited", LICENSE].map((c, i) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 6, background: "#fff", border: "1px solid #e0e0e0", fontSize: 13, fontWeight: 600, color: "#000", fontFamily: "'Open Sans',sans-serif" }}>
                    <span style={{ color: "#3490FC" }}>{Icons.check}</span> {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* On-Site */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <RedLine center={false} />
              <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, color: "#3490FC", marginBottom: 20, lineHeight: 1.15 }}>100% Local. Personally On-Site.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>This isn't a company that sends a crew and disappears. Chris Archer is personally on-site throughout your project, keeping you informed every step of the way. That hands-on approach is why A&H carries a 5.0 rating across 68 Google reviews — with customers consistently calling out the communication, the clean jobsites, and the stress-free experience.</p>
            </div>
            <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: 12, overflow: "hidden" }}>
              <iframe src="https://www.youtube.com/embed/8aRFR5DaX88" title="A&H Roofing & Contracting" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Strip */}
      <section style={{ padding: "60px clamp(24px,5vw,64px)", background: "#111111" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }} className="services-grid">
          {[
            { stat: "16+", label: "Years Experience" },
            { stat: "26+", label: "Combined Years" },
            { stat: "5.0", label: "Google Rating" },
            { stat: "68+", label: "5-Star Reviews" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Oswald',sans-serif", fontSize: 44, fontWeight: 700, color: "#D81820", lineHeight: 1 }}>{s.stat}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#FFFFFF", marginTop: 8, fontFamily: "'Open Sans',sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Insurance & Financing */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHead eyebrow="We Make It Easy" heading="We Help You Navigate the Hard Part" />
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {[
              { icon: Icons.storm, title: "Insurance Claims Support", desc: "Whether it's storm damage or a roof that's reached the end of its life, A&H works directly with your insurance company to make the claims process simple." },
              { icon: Icons.dollar, title: "Financing Through Hearth", desc: "Financing is available through Hearth, so the cost of a new roof doesn't have to come all at once. Check your rate with no impact on your credit score." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "32px 28px", display: "flex", gap: 20, alignItems: "flex-start", border: "1px solid #e0e0e0" }}>
                <div style={{ color: "#3490FC", flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A4A4A", fontFamily: "'Open Sans',sans-serif" }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Area */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <SectionHead eyebrow="Where We Work" heading="Serving Tulsa & Beyond" sub="With offices in Tulsa and Edmond, A&H serves homeowners across the entire metro — from Broken Arrow to Oklahoma City. Veteran and first responder discounts are available." />
          <CityPills />
        </div>
      </section>
      {/* Bottom CTA */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, color: "#D81820", marginBottom: 20, lineHeight: 1.15 }}>Ready to Work With a Team You Can <span style={{ color: "#3490FC" }}>Trust?</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#FFFFFF", marginBottom: 36, fontFamily: "'Open Sans',sans-serif" }}>No pressure, no obligation. Just an honest assessment from a locally owned team that stands behind every project.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "18px 40px", borderRadius: 6, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5, boxShadow: "0 4px 20px rgba(216,24,32,0.3)" }}>Get My Free Roof Inspection</button>
            <a href={TEL} style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 600, fontFamily: "'Open Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PLACEHOLDER PAGE ===========
  const PlaceholderPage = ({ title }) => (
    <>
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "#111111", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 700, color: "#3490FC", lineHeight: 1.1, marginBottom: 16 }}>{title}</h1>
          <p style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "'Open Sans',sans-serif" }}>This page is coming soon.</p>
        </div>
      </section>
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "#F0F6FF", textAlign: "center" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 28, fontWeight: 700, color: "#000", marginBottom: 16 }}>Need Help Now?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", marginBottom: 32, fontFamily: "'Open Sans',sans-serif" }}>Contact us today for a free estimate or to schedule your roof inspection.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("contact")} style={{ background: "#D81820", color: "#fff", padding: "16px 36px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "'Oswald',sans-serif", letterSpacing: 0.5 }}>Get My Free Roof Inspection</button>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#000", padding: "16px 24px", borderRadius: 6, fontSize: 16, fontWeight: 600, fontFamily: "'Oswald',sans-serif", border: "1.5px solid #d0d0d0" }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE MAP ===========
  const pages = {
    home: HomePage,
    about: AboutPage,
    roofing: RoofingPage,
    repair: RepairPage,
    storm: StormPage,
    gutters: GuttersPage,
    painting: PaintingPage,
    esquire: EsquirePage,
    projects: ProjectsPage,
    areas: AreasPage,
    tulsa: TulsaPage,
    'broken-arrow': BrokenArrowPage,
    referral: ReferralPage,
    blog: BlogPage,
    contact: ContactPage,
  };

  const CurrentPageComponent = pages[currentPage] || HomePage;

  return (
    <div style={{ fontFamily: "'Open Sans',sans-serif", color: "#000", background: "#fff", paddingBottom: 56 }}>
      <Navigation />
      <CurrentPageComponent />
      <Footer />
      <MobileCTA />
    </div>
  );
}

// Layout: Custom | Industry: Roofing | City: Maumelle
import { useState, useEffect } from "react";

const PHONE = "(501) 725-9134";
const TEL = "tel:+15017259134";
const EMAIL = "info@paragonexteriorsar.com";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  mail: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#2E7D52" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  roof: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>,
  siding: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>,
  gutter: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/><path d="M12 22v-6"/><path d="M8 16l4 6 4-6"/></svg>,
  paint: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><path d="M6 10v4a2 2 0 002 2h2v6"/><path d="M18 10v4a2 2 0 01-2 2h-2"/></svg>,
  building: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><path d="M9 22v-4h6v4"/></svg>,
  window: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>,
  license: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 8h10"/><path d="M7 12h6"/></svg>,
  insured: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  bonded: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>,
  bbb: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  financing: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
  checkCircle: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2E7D52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11.5 14.5 15.5 9.5"/></svg>,
  heart: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  book: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  scale: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M5 6l7-3 7 3"/><path d="M2 15l3-9 3 9a5 5 0 01-6 0z"/><path d="M16 15l3-9 3 9a5 5 0 01-6 0z"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  sun: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  target: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  lightbulb: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/></svg>,
  facebook: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  instagram: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  clock: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  briefcase: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  paw: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="4" cy="8" r="2"/><path d="M12 22c-4 0-7-3-7-7 0-2 2-5 7-5s7 3 7 5c0 4-3 7-7 7z"/></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
};

const Stars = () => <span style={{display:"inline-flex",gap:2}}>{[...Array(5)].map((_,i)=><span key={i}>{Icons.star}</span>)}</span>;

const navPages = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "roofing", label: "Roofing" },
  { key: "siding", label: "Siding" },
  { key: "gutters", label: "Gutters" },
  { key: "services", label: "More Services" },
  { key: "commercial", label: "Commercial" },
  { key: "contact", label: "Contact" },
  { key: "careers", label: "Careers" },
];

const serviceCards = [
  { key: "roofing", title: "Roofing", desc: "Complete roof replacement, repair, and inspection services for residential properties across Central Arkansas.", icon: Icons.roof },
  { key: "siding", title: "Siding", desc: "Premium siding installation and replacement to protect and beautify your home's exterior.", icon: Icons.siding },
  { key: "gutters", title: "Gutters", desc: "Seamless gutter installation, repair, and gutter guard systems to protect your foundation.", icon: Icons.gutter },
  { key: "services", title: "Painting & More", desc: "Exterior painting, pressure washing, and additional services to keep your home looking its best.", icon: Icons.paint },
  { key: "commercial", title: "Commercial", desc: "Full-service commercial roofing and exterior solutions for businesses and property managers.", icon: Icons.building },
  { key: "siding", title: "Windows", desc: "Energy-efficient window installation and replacement to improve comfort and curb appeal.", icon: Icons.window },
];

const teamMembers = [
  { name: "Amy Crolley", role: "President", initials: "AC", photo: "/amy.webp", bio: "With over a decade of experience in the roofing industry and a background in commercial real estate, Amy leads Paragon with a focus on integrity, quality, and customer-first service.", phone: "(501) 580-6664", phoneTel: "tel:+15015806664", email: "amy@paragonexteriorsar.com" },
  { name: "Barakah Bennett", role: "VP of Operations", initials: "BB", photo: "/barakah.webp", bio: "Barakah joined Paragon in 2019 and brings a unique perspective with a BS in Psychology and BA in French. She ensures every project runs smoothly from start to finish.", phone: "(501) 553-3727", phoneTel: "tel:+15015533727", email: "barakah@paragonexteriorsar.com" },
  { name: "Whitney Bruce", role: "Accounting", initials: "WB", photo: null, bio: "A Houston native who joined the team in 2023, Whitney keeps the financial side of Paragon running with precision and care.", phone: "(501) 541-9723", phoneTel: "tel:+15015419723", email: "whitney@paragonexteriorsar.com" },
  { name: "Jeff Hogue", role: "Sales / Estimator", initials: "JH", photo: null, bio: "Jeff works directly with homeowners and property managers to provide accurate, honest estimates and guide them through every step of the process.", phone: "(501) 765-6795", phoneTel: "tel:+15017656795", email: "jeff@paragonexteriorsar.com" },
  { name: "Scrappy Bennett", role: "Office Mascot", initials: "SB", photo: "/scrappy.webp", bio: "A rescue puppy found in a dumpster in December 2022, Scrappy brings joy and energy to the office every single day. The team's unofficial morale officer.", phone: null, phoneTel: null, email: null },
];

const coreValues = [
  { title: "People Over Profit", desc: "We prioritize relationships and doing the right thing, even when it costs us. Your trust matters more than any bottom line.", icon: Icons.heart },
  { title: "Education & Enrichment", desc: "Continuous learning and professional development keep our team sharp and our solutions innovative.", icon: Icons.book },
  { title: "Unwavering Integrity", desc: "We do what we say, stand behind our work, and never cut corners. Honesty is the foundation of everything we do.", icon: Icons.scale },
  { title: "Collaboration & Innovation", desc: "We work together and embrace new ideas to deliver better outcomes for every project.", icon: Icons.users },
  { title: "Balance", desc: "We believe in hard work and a fulfilling life outside of it. Happy teams build better roofs.", icon: Icons.sun },
  { title: "Future Focus", desc: "From sustainable materials to forward-thinking practices, we build with tomorrow in mind.", icon: Icons.target },
];

export default function ParagonExteriors() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("paragon-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [contactFormDone, setContactFormDone] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const submitPw = (e) => { e.preventDefault(); if (pw === "roof") { sessionStorage.setItem("paragon-auth", "1"); setAuthed(true); } else { setPwBad(true); setPw(""); } };

  const navigate = (page) => { setCurrentPage(page); setMenuOpen(false); };

  useEffect(() => { if (!authed) return; const fn = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, [authed]);

  // Scroll to top on page change
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [currentPage]);

  // SEO
  useEffect(() => {
    if (!authed) return;
    document.title = "Roofing Maumelle AR | Paragon Exteriors & Roofing";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "Premier roofing & exterior contractor in Maumelle, AR. Licensed, insured, BBB accredited. Call (501) 725-9134." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Maumelle" });
    add("script", {
      type: "application/ld+json", textContent: JSON.stringify({
        "@context": "https://schema.org", "@type": "RoofingContractor",
        name: "Paragon Exteriors & Roofing", telephone: "+15017259134",
        address: { "@type": "PostalAddress", streetAddress: "8422 Counts Massie Rd", addressLocality: "Maumelle", addressRegion: "AR", postalCode: "72113", addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: 34.8517, longitude: -92.3718 },
        openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" }],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "1", bestRating: "5" },
        founder: { "@type": "Person", name: "Amy Crolley" }, foundingDate: "2019",
        description: "Paragon Exteriors & Roofing provides premium roofing, siding, gutters, and exterior services in Maumelle and Central Arkansas. Licensed, insured, bonded, and BBB accredited.",
        areaServed: ["Maumelle", "Little Rock", "North Little Rock", "Central Arkansas"].map(a => ({ "@type": "City", name: a })),
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Services", itemListElement: ["Roofing", "Siding", "Gutters", "Commercial Roofing", "Windows", "Painting"].map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
        memberOf: [{ "@type": "Organization", name: "Better Business Bureau" }], sameAs: [],
      })
    });
    return () => els.forEach(el => { try { document.head.removeChild(el); } catch (e) { } });
  }, [authed]);

  const yr = new Date().getFullYear();

  // Wordmark component
  const Wordmark = ({ light, size = 22 }) => (
    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: size, fontWeight: 600, letterSpacing: -0.5, cursor: "pointer" }} onClick={() => navigate("home")}>
      <span style={{ color: light ? "#fff" : "var(--primary)" }}>Paragon</span>{" "}
      <span style={{ color: "var(--accent)" }}>Exteriors</span>
    </div>
  );

  // Gold line
  const GoldLine = ({ center = true }) => (
    <div style={{ width: 48, height: 2, background: "var(--accent)", margin: center ? "0 auto 20px" : "0 0 20px 0" }} />
  );

  // Section heading with eyebrow
  const SectionHead = ({ eyebrow, heading, sub, light, center = true }) => (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 56 }}>
      <GoldLine center={center} />
      {eyebrow && <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: light ? "rgba(255,255,255,0.5)" : "var(--text-light)", marginBottom: 14 }}>{eyebrow}</p>}
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: light ? "#fff" : "var(--primary)", marginBottom: sub ? 16 : 0 }}>{heading}</h2>
      {sub && <p style={{ fontSize: 17, lineHeight: 1.7, color: light ? "rgba(255,255,255,0.7)" : "var(--text-mid)", maxWidth: 600, margin: center ? "0 auto" : undefined }}>{sub}</p>}
    </div>
  );

  // =========== NAVIGATION ===========
  const Navigation = () => (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "12px clamp(24px,5vw,64px)" : "18px clamp(24px,5vw,64px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(42,67,101,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease" }}>
        <Wordmark light={scrolled} />
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {navPages.map(p => (
            <button key={p.key} onClick={() => navigate(p.key)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, color: currentPage === p.key ? "var(--accent)" : scrolled ? "rgba(255,255,255,0.8)" : "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", padding: "4px 0", borderBottom: currentPage === p.key ? "2px solid var(--accent)" : "2px solid transparent", transition: "all 0.2s" }}>{p.label}</button>
          ))}
          <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", whiteSpace: "nowrap" }}>{Icons.phone} {PHONE}</a>
        </div>
        <button className="mobile-only" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "#fff" : "var(--primary)", display: "flex" }}>{Icons.menu}</button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "var(--primary)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, overflowY: "auto", padding: "80px 24px 40px" }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}>{Icons.x}</button>
          {navPages.map(p => (
            <button key={p.key} onClick={() => navigate(p.key)} style={{ background: "none", border: "none", color: currentPage === p.key ? "var(--accent)" : "#fff", fontSize: 20, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>{p.label}</button>
          ))}
          <a href={TEL} style={{ background: "var(--accent)", color: "#fff", padding: "18px 48px", borderRadius: 8, fontSize: 18, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", marginTop: 12 }}>Call {PHONE}</a>
        </div>
      )}
    </>
  );

  // =========== FOOTER ===========
  const Footer = () => (
    <footer style={{ background: "var(--primary)", padding: "80px clamp(24px,5vw,64px) 40px" }}>
      <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr", gap: 48 }}>
        <div>
          <Wordmark light size={22} />
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginTop: 16, marginBottom: 20 }}>Central Arkansas' premier roofing and exteriors contractor. Licensed, insured, bonded, and BBB accredited since 2019.</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>8422 Counts Massie Rd<br />Maumelle, AR 72113</p>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Services</h4>
          {[{ key: "roofing", label: "Roofing" }, { key: "siding", label: "Siding" }, { key: "gutters", label: "Gutters" }, { key: "services", label: "Painting & More" }, { key: "commercial", label: "Commercial" }].map(s => (
            <button key={s.key} onClick={() => navigate(s.key)} style={{ display: "block", background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", padding: "4px 0", marginBottom: 6 }}>{s.label}</button>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Quick Links</h4>
          {[{ key: "about", label: "About" }, { key: "contact", label: "Contact" }, { key: "careers", label: "Careers" }].map(s => (
            <button key={s.key} onClick={() => navigate(s.key)} style={{ display: "block", background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", padding: "4px 0", marginBottom: 6 }}>{s.label}</button>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans',sans-serif" }}>Contact</h4>
          <a href={TEL} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--accent)", fontSize: 14, fontFamily: "'DM Sans',sans-serif", marginBottom: 10, fontWeight: 600 }}><span style={{ color: "var(--accent)" }}>{Icons.phone}</span> {PHONE}</a>
          <a href={`mailto:${EMAIL}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "'DM Sans',sans-serif", marginBottom: 10 }}><span style={{ color: "var(--accent)" }}>{Icons.mail}</span> {EMAIL}</a>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "'DM Sans',sans-serif" }}><span style={{ color: "var(--accent)" }}>{Icons.clock}</span> Mon-Fri 8 AM - 5 PM</div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>&copy; {yr} Paragon Exteriors & Roofing. All rights reserved.</p>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>BBB Accredited</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif" }}>Licensed & Insured</span>
        </div>
      </div>
    </footer>
  );

  // =========== FLOATING MOBILE CTA ===========
  const MobileCTA = () => (
    <div className="mobile-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%", zIndex: 998, display: "none" }}>
      <a href={TEL} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "16px 24px", fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)", width: "100%", textAlign: "center" }}>
        {Icons.phone} Call (501) 725-9134
      </a>
    </div>
  );

  // =========== PAGE: HOME ===========
  const [heroFormDone, setHeroFormDone] = useState(false);
  const HomePage = () => (
    <>
      {/* Hero — Split Layout with Form */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 100px", background: "var(--cream)" }}>
        <div className="hero-split" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,82,0.12)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Maumelle, Arkansas</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--primary)", marginBottom: 20 }}>
              Central Arkansas' <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Premier</span> Roofing & Exteriors
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 28, maxWidth: 500 }}>
              A new generation of roofing built on a strong foundation, years of success, and an unwavering commitment to doing right by every homeowner we serve.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
              <Stars />
              <span style={{ fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", fontStyle: "italic" }}>"Absolutely phenomenal company" — Seth Brown</span>
            </div>
            <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(46,125,82,0.3)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} Call {PHONE}</a>
              <button onClick={() => navigate("roofing")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--primary)", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid var(--border)", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Our Services {Icons.arrow}</button>
            </div>
          </div>
          {/* Lead Capture Form */}
          <div style={{ background: "#fff", borderRadius: 12, padding: "40px 32px", border: "1px solid var(--border)", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
            {!heroFormDone ? (<>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: "var(--primary)", marginBottom: 6, textAlign: "center" }}>Get a Free Estimate</h3>
              <p style={{ fontSize: 14, color: "var(--text-light)", marginBottom: 24, textAlign: "center", fontFamily: "'DM Sans',sans-serif" }}>We respond within the hour.</p>
              <form onSubmit={e => { e.preventDefault(); setHeroFormDone(true); }}>
                <input type="text" placeholder="Your name" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, marginBottom: 12, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box" }} />
                <input type="tel" placeholder="Phone number" required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, marginBottom: 12, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box" }} />
                <select required style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--border)", fontSize: 15, marginBottom: 20, background: "var(--cream)", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box", color: "var(--text-mid)" }}>
                  <option value="">Service needed</option>
                  <option>Residential Roofing</option>
                  <option>Siding</option>
                  <option>Gutters</option>
                  <option>Painting</option>
                  <option>Windows</option>
                  <option>Commercial Roofing</option>
                  <option>Other</option>
                </select>
                <button type="submit" style={{ width: "100%", padding: "16px", background: "var(--primary)", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Get My Free Estimate</button>
              </form>
            </>) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(46,125,82,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: "var(--primary)", marginBottom: 8 }}>We Got It!</h3>
                <p style={{ fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>We'll be in touch shortly. For emergencies, call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a></p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "28px clamp(24px,5vw,64px)" }}>
        <div className="cred-row" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { icon: Icons.license, label: "Licensed" },
            { icon: Icons.insured, label: "Insured" },
            { icon: Icons.bonded, label: "Bonded" },
            { icon: Icons.bbb, label: "BBB Accredited" },
            { icon: Icons.financing, label: "Financing Available" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--accent)", display: "flex" }}>{c.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Blurb */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <GoldLine />
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>Who We Are</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 20 }}>A New Generation of an <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Established Company</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 32, fontFamily: "'DM Sans',sans-serif" }}>
            Built on a strong foundation and years of success, Paragon Exteriors & Roofing combines decades of industry experience with a fresh, people-first approach. Led by Amy Crolley, our team is committed to integrity, education, and delivering results that exceed expectations for every home and business we touch.
          </p>
          <button onClick={() => navigate("about")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--primary)", padding: "14px 28px", borderRadius: 6, fontSize: 15, fontWeight: 600, border: "1.5px solid var(--border)", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Meet the Team {Icons.arrow}</button>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="What We Do" heading="Our Services" sub="From roofing to siding to gutters and beyond, Paragon delivers premium exterior solutions for homes and businesses across Central Arkansas." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {serviceCards.map((s, i) => (
              <div key={i} onClick={() => navigate(s.key)} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", cursor: "pointer", transition: "all 0.3s ease", position: "relative", overflow: "hidden" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: "var(--accent)", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 16, fontFamily: "'DM Sans',sans-serif" }}>{s.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--accent)", fontFamily: "'DM Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 6 }}>Learn More {Icons.arrow}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 40, fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>Questions? Call Amy directly at <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a></p>
        </div>
      </section>

      {/* Why Paragon (dark section) */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Why Choose Us" heading={<>Why <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Paragon</span></>} sub="We do things differently. Our values aren't just words on a wall — they're how we operate every single day." light />
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {["People Over Profit — relationships matter more than revenue", "Unwavering Integrity — no shortcuts, no hidden fees", "10+ Years of Industry Experience", "Euroshield Exclusive Regional Installer", "BBB Accredited Since 2019", "Licensed, Insured & Bonded"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>{Icons.check}</span>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { icon: Icons.shield, title: "BBB Accredited", desc: "A+ rating since 2019" },
                { icon: Icons.roof, title: "Euroshield Installer", desc: "Exclusive regional partner" },
                { icon: Icons.heart, title: "People First", desc: "Relationships over revenue" },
                { icon: Icons.scale, title: "Full Transparency", desc: "Honest pricing, always" },
              ].map((b, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "28px 20px", textAlign: "center" }}>
                  <div style={{ color: "var(--accent)", marginBottom: 12, display: "flex", justifyContent: "center" }}>{b.icon}</div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>{b.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <SectionHead eyebrow="Testimonials" heading="5.0 Stars on Google" />
          <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "48px 40px", maxWidth: 700, margin: "0 auto" }}>
            <div style={{ color: "var(--accent)", marginBottom: 20, display: "flex", justifyContent: "center" }}>{Icons.quote}</div>
            <Stars />
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "var(--text)", fontFamily: "'DM Sans',sans-serif", fontStyle: "italic", margin: "20px 0" }}>
              "Absolutely phenomenal company. They truly care about their customers and go above and beyond to make sure the job is done right. I highly recommend Paragon Exteriors for any roofing or exterior needs. They are the real deal."
            </p>
            <p style={{ fontSize: 16, fontWeight: 700, color: "var(--primary)", fontFamily: "'DM Sans',sans-serif" }}>Seth Brown</p>
            <p style={{ fontSize: 13, color: "var(--text-light)", fontFamily: "'DM Sans',sans-serif" }}>Google Review</p>
          </div>
          <p style={{ marginTop: 32, fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>Ready to experience the difference? Call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a></p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 16 }}>Ready to Transform Your<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Home's Exterior?</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36, fontFamily: "'DM Sans',sans-serif" }}>
            Get a free, no-obligation estimate from Central Arkansas' most trusted exteriors team. We respond within the hour.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(46,125,82,0.3)", fontFamily: "'DM Sans',sans-serif" }}>Get Free Estimate</button>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: "var(--primary)", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid var(--border)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>

      {/* Financing Callout */}
      <section style={{ padding: "64px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "var(--accent)" }}>{Icons.financing}</span>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--primary)", fontFamily: "'DM Sans',sans-serif" }}>Financing Available</h3>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>
            We believe everyone deserves a quality roof and beautiful home exterior. Ask about our flexible financing options to make your project affordable.
          </p>
        </div>
      </section>
    </>
  );

  // =========== PAGE: ABOUT ===========
  const AboutPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,82,0.12)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Our Story</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--primary)", marginBottom: 20 }}>
            Meet the <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Paragon</span> Team
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
            We are a team of dedicated professionals who believe in doing things the right way — for our customers, our community, and each other.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Our People" heading="The Team Behind Paragon" sub="Every member of our team brings unique skills and a shared commitment to excellence." />
          <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {teamMembers.slice(0, 3).map((m, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                {m.photo ? (
                  <img src={m.photo} alt={m.name} style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", margin: "0 auto 20px", display: "block", border: "3px solid var(--border)" }} />
                ) : (
                  <div style={{ width: 100, height: 100, borderRadius: "50%", background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: "3px solid var(--border)" }}>
                    <span style={{ fontSize: 28, fontWeight: 600, color: "var(--accent)", fontFamily: "'Playfair Display',serif" }}>{m.initials}</span>
                  </div>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--primary)", marginBottom: 4, fontFamily: "'DM Sans',sans-serif" }}>{m.name}</h3>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>{m.role}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{m.bio}</p>
              </div>
            ))}
          </div>
          <div className="team-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24, maxWidth: 816, marginLeft: "auto", marginRight: "auto" }}>
            {teamMembers.slice(3).map((m, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                {m.photo ? (
                  <img src={m.photo} alt={m.name} style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", margin: "0 auto 20px", display: "block", border: "3px solid var(--border)" }} />
                ) : (
                  <div style={{ width: 100, height: 100, borderRadius: "50%", background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: "3px solid var(--border)" }}>
                    <span style={{ fontSize: 28, fontWeight: 600, color: "var(--accent)", fontFamily: "'Playfair Display',serif" }}>{m.initials}</span>
                  </div>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--primary)", marginBottom: 4, fontFamily: "'DM Sans',sans-serif" }}>{m.name}</h3>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>{m.role}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Our Values" heading="What We Stand For" sub="These six core values guide every decision we make and every project we take on." />
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {coreValues.map((v, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: "var(--accent)", marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{v.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <SectionHead eyebrow="Testimonials" heading="What Our Customers Say" />
          <div style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: 12, padding: "48px 40px", maxWidth: 700, margin: "0 auto" }}>
            <div style={{ color: "var(--accent)", marginBottom: 20, display: "flex", justifyContent: "center" }}>{Icons.quote}</div>
            <Stars />
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "var(--text)", fontFamily: "'DM Sans',sans-serif", fontStyle: "italic", margin: "20px 0" }}>
              "Absolutely phenomenal company. They truly care about their customers and go above and beyond to make sure the job is done right. I highly recommend Paragon Exteriors for any roofing or exterior needs. They are the real deal."
            </p>
            <p style={{ fontSize: 16, fontWeight: 700, color: "var(--primary)", fontFamily: "'DM Sans',sans-serif" }}>Seth Brown</p>
            <p style={{ fontSize: 13, color: "var(--text-light)", fontFamily: "'DM Sans',sans-serif" }}>Google Review</p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "BBB Accredited Since 2019", icon: Icons.bbb },
              { label: "Licensed & Insured", icon: Icons.shield },
              { label: "Bonded", icon: Icons.bonded },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "var(--accent)" }}>{c.icon}</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: CONTACT ===========
  const ContactPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,82,0.12)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Reach Out</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--primary)", marginBottom: 20 }}>
            Get In <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Touch</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
            Whether you need a new roof, siding, gutters, or just have a question, our team is ready to help. Reach out and we will respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div className="contact-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "start" }}>
          {/* Form */}
          <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "48px 40px", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
            {!contactFormDone ? (
              <form onSubmit={e => { e.preventDefault(); setContactFormDone(true); }}>
                <h3 style={{ fontSize: 24, color: "var(--primary)", marginBottom: 6, fontFamily: "'Playfair Display',serif", textAlign: "center" }}>Send Us a Message</h3>
                <p style={{ fontSize: 14, color: "var(--text-light)", marginBottom: 28, textAlign: "center", fontFamily: "'DM Sans',sans-serif" }}>We respond within the hour.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <input type="text" placeholder="Your name" value={contactForm.name} onChange={e => setContactForm({ ...contactForm, name: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                  <input type="email" placeholder="Email address" value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                </div>
                <input type="tel" placeholder="Phone number" value={contactForm.phone} onChange={e => setContactForm({ ...contactForm, phone: e.target.value })} style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 12, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                <select value={contactForm.service} onChange={e => setContactForm({ ...contactForm, service: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 12, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)", color: contactForm.service ? "var(--text)" : "var(--text-light)" }}>
                  <option value="" disabled>Select a service</option>
                  <option>Residential Roofing</option>
                  <option>Siding</option>
                  <option>Gutters</option>
                  <option>Other Residential</option>
                  <option>Commercial</option>
                  <option>General Inquiry</option>
                </select>
                <textarea placeholder="Tell us about your project..." value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })} rows={4} style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 20, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)", resize: "vertical" }} />
                <button type="submit" style={{ width: "100%", padding: "16px", fontSize: 16, fontWeight: 700, background: "var(--accent)", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(46,125,82,0.3)" }}>Send Message</button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{Icons.checkCircle}</div>
                <h3 style={{ fontSize: 24, color: "var(--primary)", marginBottom: 8, fontFamily: "'Playfair Display',serif" }}>We Got It!</h3>
                <p style={{ fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.7 }}>Our team will be in touch shortly.<br />For urgent needs, call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a></p>
              </div>
            )}
          </div>

          {/* Info Side */}
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--primary)", marginBottom: 24, fontFamily: "'DM Sans',sans-serif" }}>Contact Our Team Directly</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {teamMembers.filter(m => m.phone).map((m, i) => (
                <div key={i} style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: 10, padding: "20px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--border)" }} />
                    ) : (
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--accent)", fontFamily: "'Playfair Display',serif" }}>{m.initials}</span>
                      </div>
                    )}
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "var(--primary)", fontFamily: "'DM Sans',sans-serif" }}>{m.name}</p>
                      <p style={{ fontSize: 12, color: "var(--text-light)", fontFamily: "'DM Sans',sans-serif" }}>{m.role}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <a href={m.phoneTel} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--accent)", fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}><span style={{ color: "var(--accent)", display: "flex" }}>{Icons.phone}</span> {m.phone}</a>
                    <a href={`mailto:${m.email}`} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}><span style={{ color: "var(--accent)", display: "flex" }}>{Icons.mail}</span> {m.email}</a>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Info */}
            <div style={{ marginTop: 32, padding: "24px", background: "var(--cream)", borderRadius: 10, border: "1px solid var(--border)" }}>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--primary)", marginBottom: 16, fontFamily: "'DM Sans',sans-serif" }}>Office</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "var(--accent)", display: "flex", flexShrink: 0 }}>{Icons.mapPin}</span>
                  <span style={{ fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>8422 Counts Massie Rd, Maumelle, AR 72113</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "var(--accent)", display: "flex", flexShrink: 0 }}>{Icons.clock}</span>
                  <span style={{ fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>Monday - Friday, 8 AM - 5 PM</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
              <a href="#" aria-label="Facebook" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 8, background: "var(--cream)", border: "1px solid var(--border)", color: "var(--text-mid)" }}>{Icons.facebook}</a>
              <a href="#" aria-label="Instagram" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 8, background: "var(--cream)", border: "1px solid var(--border)", color: "var(--text-mid)" }}>{Icons.instagram}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <GoldLine />
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-light)", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>Service Area</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 20 }}>Proudly Serving Central Arkansas</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 28, fontFamily: "'DM Sans',sans-serif" }}>
            Proudly serving Little Rock, Maumelle, North Little Rock, and all of Central Arkansas with premium roofing and exterior services.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {["Little Rock", "Maumelle", "North Little Rock", "Central Arkansas"].map((a, i) => (
              <span key={i} title={`Roofing in ${a}, AR`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", borderRadius: 50, background: "var(--white)", border: "1px solid var(--border)", fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", cursor: "default", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={e => { e.currentTarget.style.background = "var(--white)"; e.currentTarget.style.color = "var(--text-mid)"; }}>
                <span style={{ display: "flex" }}>{Icons.mapPin}</span> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ padding: "0 clamp(24px,5vw,64px) 80px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: "#e5e7eb", borderRadius: 12, height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 18, color: "var(--text-light)", fontFamily: "'DM Sans',sans-serif" }}>Map</span>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: ROOFING ===========
  const RoofingPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,82,0.12)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Roofing Services</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--primary)", marginBottom: 20 }}>
            Roofing <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Excellence</span><br />For Every Home
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
            From new installations to emergency repairs, Paragon delivers comprehensive roofing services backed by top-tier materials, expert craftsmanship, and an unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Core Roofing Services */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="What We Do" heading="Roofing Services" sub="Whether you need a brand new roof or a quick repair, our team has you covered with solutions tailored to your home and budget." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>, title: "Roof Installation", desc: "Building a new home or need a complete re-roof? We install premium roofing systems from the ground up, ensuring your home is protected from day one with expert workmanship and top-tier materials." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/></svg>, title: "Roof Replacement", desc: "Old shingles removed, deck inspected, and a brand new roofing system installed. We handle the full tear-off and replacement process with a thorough inspection to identify any underlying issues." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, title: "Roof Repair & Storm Damage", desc: "Leaks, missing shingles, damaged flashing, or storm damage — we diagnose the problem fast and deliver lasting repairs. Our team works with all types of roofing materials to restore your roof's integrity." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>, title: "Emergency Roofing & Tarping", desc: "When disaster strikes, we are here around the clock. Our 24-hour emergency tarping service prevents further water damage to your home while we plan the permanent repair or replacement." },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: "var(--accent)", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Roofing (dark section) */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Specialty Systems" heading={<>Specialty <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Roofing</span></>} sub="Beyond traditional shingles, we offer advanced roofing systems for unique needs and demanding applications." light />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="3" x2="9" y2="21"/></svg>, title: "Standing Seam Metal Roofing", desc: "Durable, modern, and energy efficient. Metal roofing offers exceptional longevity and a sleek contemporary look that stands up to the toughest weather conditions." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="6" x2="12" y2="18"/></svg>, title: "Modified Bitumen Roofing", desc: "The go-to solution for commercial and flat roof applications. Modified bitumen delivers proven waterproofing performance and long-term reliability for low-slope structures." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>, title: "Euroshield Rubber Roofing", desc: "As an exclusive regional installer, we offer Euroshield's revolutionary rubber roofing made from recycled tires. Hail-proof, eco-friendly, and backed by a lifetime warranty — the ultimate in sustainable protection." },
            ].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.2)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: "var(--accent)", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "#fff", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans',sans-serif" }}>{s.desc}</p>
                {i === 2 && <span style={{ display: "inline-block", marginTop: 14, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", background: "rgba(46,125,82,0.12)", padding: "6px 14px", borderRadius: 4, fontFamily: "'DM Sans',sans-serif" }}>Exclusive Regional Installer</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Brands */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Our Partners" heading="Trusted Product Brands" sub="We work with the industry's most respected manufacturers to deliver roofing systems that last." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {[
              { name: "Atlas", desc: "High-performance shingles engineered for durability and curb appeal with Scotchgard protector." },
              { name: "CertainTeed", desc: "A trusted name in roofing for over a century, offering a wide range of premium shingle options." },
              { name: "Malarkey", desc: "Sustainable roofing products featuring rubberized asphalt technology for superior flexibility." },
              { name: "IKO", desc: "Innovative roofing solutions known for quality manufacturing and consistent performance." },
              { name: "Owens Corning", desc: "Industry-leading shingles backed by extensive warranties and advanced color technology." },
            ].map((b, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px 28px", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif" }}>{b.name}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Claim Assistance */}
      <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "var(--accent)" }}>{Icons.shield}</span>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--primary)", fontFamily: "'DM Sans',sans-serif" }}>Insurance Claim Assistance</h3>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", maxWidth: 600, margin: "0 auto" }}>
            We guide you through the entire insurance claim process from start to finish. Our team handles the documentation, meets with adjusters, and ensures you get the coverage you deserve.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 16 }}>Need a New Roof? Get Your<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Free Estimate Today.</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36, fontFamily: "'DM Sans',sans-serif" }}>
            Our team will assess your roof, explain your options, and provide an honest, no-obligation estimate. We respond within the hour.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(46,125,82,0.3)", fontFamily: "'DM Sans',sans-serif" }}>Get Free Estimate</button>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: "var(--primary)", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid var(--border)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: SIDING ===========
  const SidingPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,82,0.12)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Siding Services</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--primary)", marginBottom: 20 }}>
            Transform Your Home's<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Exterior</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
            From vinyl to fiber cement, we install, repair, and replace siding with precision craftsmanship and materials that protect your home for decades.
          </p>
        </div>
      </section>

      {/* Siding Services */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="What We Do" heading="Siding Services" sub="Whether you are building new, repairing damage, or replacing aging siding, our team delivers flawless results every time." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>, title: "Siding Installation", desc: "New construction or renovation — we install premium siding systems that protect your home and elevate its curb appeal from the first day." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, title: "Siding Repair", desc: "Patch damaged sections, replace individual boards, and fix gaps before they become bigger problems. We match existing materials for a seamless finish." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/></svg>, title: "Siding Replacement", desc: "Full strip and re-side with your choice of materials. We remove old siding, inspect the sheathing, and install a complete new system built to last." },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: "var(--accent)", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Materials" heading="Siding Material Options" sub="Every home is different. We help you choose the right material based on your style, budget, and performance needs." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {[
              { title: "Vinyl", desc: "Affordable, low maintenance, and available in a wide range of colors and styles. The most popular siding choice for homeowners." },
              { title: "Wood", desc: "Natural beauty and a classic, timeless look. Wood siding adds warmth and character to any home exterior." },
              { title: "Aluminum", desc: "Lightweight and rust-resistant. Aluminum siding offers solid protection with minimal upkeep required." },
              { title: "Steel", desc: "Maximum durability and impact resistance. Steel siding stands up to the harshest weather and environmental conditions." },
              { title: "Engineered Wood", desc: "LP SmartSide delivers the look of real wood without the risk of rot, termites, or splitting. Built to last." },
              { title: "Fiber Cement", desc: "Hardie Board is the premium choice — fire resistant, incredibly long-lasting, and available in beautiful finishes." },
              { title: "Insulated Siding", desc: "Energy efficient and noise reducing. Insulated siding wraps your home in an extra layer of comfort and protection." },
            ].map((m, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px 28px", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{m.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Styles (dark section) */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Design Options" heading={<>Profile <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Styles</span></>} sub="Choose the profile that complements your home's architecture and personal style." light />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="6" x2="22" y2="6"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="18" x2="22" y2="18"/></svg>, title: "Lap (Horizontal)", desc: "The classic, most popular siding profile. Horizontal planks create clean, traditional lines that suit virtually any home style." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="2" x2="4" y2="22"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="20" y1="2" x2="20" y2="22"/><rect x="10" y="8" width="4" height="8" rx="0.5"/></svg>, title: "Board & Batten", desc: "Wide boards with narrow battens over the seams create a striking, modern farmhouse aesthetic with bold vertical dimension." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="2" x2="6" y2="22"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="18" y1="2" x2="18" y2="22"/></svg>, title: "Vertical", desc: "Clean vertical lines provide a contemporary look. Perfect for accent walls, gable ends, or a full modern exterior." },
            ].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "36px 30px", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.2)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: "var(--accent)", marginBottom: 16, display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "#fff", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans',sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 16 }}>Ready to Transform Your<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Home's Exterior?</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36, fontFamily: "'DM Sans',sans-serif" }}>
            Get a free consultation and see how new siding can boost your curb appeal, increase your home value, and lower your energy bills.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(46,125,82,0.3)", fontFamily: "'DM Sans',sans-serif" }}>Get Free Estimate</button>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: "var(--primary)", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid var(--border)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: GUTTERS ===========
  const GuttersPage = () => (
    <>
      {/* Hero Banner */}
      <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,82,0.12)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Gutter Services</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--primary)", marginBottom: 20 }}>
            Protect Your Home with<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Premium</span> Gutters
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
            Seamless gutter installation, repair, and maintenance to keep water away from your foundation and your home protected year-round.
          </p>
        </div>
      </section>

      {/* Gutter Services */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="What We Do" heading="Gutter Services" sub="From new installations to routine maintenance, we keep your gutter system performing at its best." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/><path d="M12 22v-6"/><path d="M8 16l4 6 4-6"/></svg>, title: "Gutter Installation", desc: "We install 5-inch and 6-inch seamless aluminum gutters custom-formed on site for a perfect fit. No seams means no leaks — just reliable water management." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, title: "Gutter Repair", desc: "Leaking joints, sagging sections, or storm damage — we diagnose and fix gutter issues quickly to restore proper drainage and prevent water damage." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: "Gutter Maintenance", desc: "Regular cleaning, inspection, and tune-ups keep your gutters flowing freely. We clear debris, check for damage, and ensure everything is properly aligned." },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: "var(--accent)", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Why Gutters Matter" heading="Benefits of Proper Gutters" sub="Your gutter system is your home's first line of defense against water damage." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20 }}>
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "Prevent Water Damage", desc: "Direct water away from walls, windows, and siding to prevent costly moisture damage." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="3" y1="9" x2="21" y2="9"/></svg>, title: "Protect Foundation", desc: "Keep water from pooling around your foundation to avoid cracks, settling, and structural issues." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>, title: "Prevent Erosion", desc: "Control runoff to protect your landscaping, garden beds, and yard from soil erosion." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, title: "Increase Home Value", desc: "Well-maintained gutters signal a cared-for home and contribute to overall property value." },
            ].map((b, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px 24px", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: "var(--accent)", marginBottom: 14, display: "flex", justifyContent: "center" }}>{b.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--primary)", marginBottom: 8, fontFamily: "'DM Sans',sans-serif" }}>{b.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gutter Guard Products (dark section) */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Gutter Protection" heading={<>Gutter Guard <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Products</span></>} sub="Keep leaves, debris, and pests out of your gutters with our premium gutter guard systems." light />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { title: "Bulldog Gutter Guard", desc: "Available in Regular and Step-Up options to fit any gutter profile. Durable aluminum construction keeps debris out while letting water flow freely. Backed by a 25-year warranty.", badge: "25-Year Warranty" },
              { title: "LeafBlaster Pro", desc: "Frame-reinforced, stainless steel micro-mesh on an all-aluminum body. The premium choice for maximum debris protection and water flow capacity. Backed by an industry-leading 40-year warranty.", badge: "40-Year Warranty" },
              { title: "Basic Gutter Screen", desc: "Affordable protection that keeps out large debris like leaves and twigs. A cost-effective first line of defense for homeowners on a budget.", badge: "Budget Friendly" },
            ].map((g, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.2)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "#fff", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{g.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans',sans-serif", marginBottom: 14 }}>{g.desc}</p>
                <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", background: "rgba(46,125,82,0.12)", padding: "6px 14px", borderRadius: 4, fontFamily: "'DM Sans',sans-serif" }}>{g.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Options */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead eyebrow="Sizing" heading="Gutter Size Options" sub="We help you choose the right gutter size based on your roof area, pitch, and local rainfall conditions." />
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 800, margin: "0 auto" }}>
            {[
              { title: "5-Inch Gutters", desc: "The standard for most residential homes. Handles typical rainfall volumes and fits the majority of roof lines and fascia boards.", tag: "Standard Residential" },
              { title: "6-Inch Gutters", desc: "Recommended for heavy rainfall areas, large roof surfaces, or steep pitches. Handles significantly more water volume to prevent overflow.", tag: "Heavy Rainfall / Large Roofs" },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif" }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", marginBottom: 14 }}>{s.desc}</p>
                <span style={{ display: "inline-block", fontSize: 12, fontWeight: 600, color: "var(--accent)", background: "rgba(46,125,82,0.12)", padding: "6px 16px", borderRadius: 50, fontFamily: "'DM Sans',sans-serif" }}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 16 }}>Protect Your Home with<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Quality Gutters</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 36, fontFamily: "'DM Sans',sans-serif" }}>
            Schedule a free gutter inspection and estimate. We will recommend the right system for your home and budget.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(46,125,82,0.3)", fontFamily: "'DM Sans',sans-serif" }}>Get Free Estimate</button>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: "var(--primary)", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid var(--border)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );

  // =========== PAGE: MORE SERVICES ===========
  const MoreServicesPage = () => {
    const services = [
      { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><path d="M6 10v4a2 2 0 002 2h2v6"/><path d="M18 10v4a2 2 0 01-2 2h-2"/></svg>, title: "Interior Painting", desc: "Transform the inside of your home with professional painting services. Our team delivers clean lines, smooth finishes, and meticulous attention to detail on every interior project.", items: ["Walls & ceilings", "Sheetrock repair & patching", "Trim & baseboards", "Cabinet painting & refinishing", "Interior staining", "Color consultation"] },
      { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><path d="M6 10v4a2 2 0 002 2h2v6"/><path d="M18 10v4a2 2 0 01-2 2h-2"/></svg>, title: "Exterior Painting", desc: "Protect and beautify your home's exterior with long-lasting paint and stain applications. We prep, prime, and paint every surface with precision to withstand Arkansas weather.", items: ["Exterior walls & siding", "Doors & shutters", "Decks & porches", "Fences & gates", "Exterior staining", "Pressure washing prep"] },
      { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>, title: "Window Replacement & Installation", desc: "Upgrade your home's comfort and energy efficiency with new windows. We install premium, energy-efficient windows in custom sizes to fit any opening and match your home's style.", items: ["Energy-efficient glass options", "Custom sizing & fitting", "Double & triple pane options", "Vinyl, wood & composite frames", "Full-frame & insert installations", "Warranty-backed products"] },
      { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>, title: "Window Screen Services", desc: "Keep bugs out and fresh air flowing with our window screen repair and replacement services. We handle everything from patching small tears to building brand new custom screens.", items: ["Screen repair & re-screening", "Full screen replacement", "Custom-built screens", "Pet-resistant screen options", "Sliding door screens", "Porch & patio screens"] },
      { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>, title: "Professional Holiday Lighting", desc: "Make your home or business shine during the holidays with professional lighting installation. We handle the design, installation, and removal so you can enjoy the season stress-free.", items: ["Residential & commercial installations", "Custom lighting designs", "Roofline, trees & landscaping", "Professional installation & takedown", "LED & energy-efficient options", "Season-long maintenance"] },
      { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="2" x2="4" y2="22"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="20" y1="2" x2="20" y2="22"/><rect x="10" y="8" width="4" height="8" rx="0.5"/></svg>, title: "Wood Privacy Fencing", desc: "Add beauty, security, and property value with a custom wood privacy fence. We build durable fences from quality materials tailored to your property and style preferences.", items: ["Cedar fencing", "Pine fencing", "Custom designs & heights", "Gate installation", "Staining & sealing", "Post replacement & repair"] },
      { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="2" x2="6" y2="22"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="18" y1="2" x2="18" y2="22"/></svg>, title: "Iron Fencing", desc: "Elegant and built to last, ornamental iron fencing provides security without sacrificing style. Low maintenance and highly durable, iron fencing is ideal for both residential and commercial properties.", items: ["Ornamental iron designs", "Durable powder-coat finishes", "Low maintenance materials", "Custom gate fabrication", "Pool & property enclosures", "Commercial applications"] },
      { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>, title: "Wood Deck Services", desc: "From brand new deck builds to restoring an aging one, our team delivers quality craftsmanship that extends your living space outdoors. We build, stain, seal, and repair decks of all sizes.", items: ["New deck construction", "Deck restoration & refinishing", "Staining & sealing", "Board replacement & repair", "Railing installation", "Custom designs & layouts"] },
    ];
    return (
      <>
        {/* Hero Banner */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,82,0.12)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Additional Services</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--primary)", marginBottom: 20 }}>
              Complete <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Exterior</span><br />Solutions
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
              Beyond roofing, siding, and gutters, Paragon offers a full range of exterior and interior services to keep your home looking its best and functioning at its peak.
            </p>
          </div>
        </section>

        {/* Service Sections */}
        {services.map((s, i) => (
          <section key={i} style={{ padding: "80px clamp(24px,5vw,64px)", background: i % 2 === 0 ? "var(--white)" : "var(--cream)" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start" }}>
              <div style={{ color: "var(--accent)", marginTop: 4 }}>{s.icon}</div>
              <div>
                <h3 style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 600, color: "var(--primary)", marginBottom: 12, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", marginBottom: 16 }}>{s.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>{Icons.check}</span>
                      <span style={{ fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#fff", marginBottom: 16 }}>Need Help With a <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Project?</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: 36, fontFamily: "'DM Sans',sans-serif" }}>
              Whether it is painting, windows, fencing, decks, or holiday lighting, our team is ready to help. Call us today for a free estimate.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => navigate("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(46,125,82,0.3)", fontFamily: "'DM Sans',sans-serif" }}>Get Free Estimate</button>
              <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: "#fff", padding: "18px 32px", borderRadius: 6, fontSize: 16, fontWeight: 600, border: "1.5px solid rgba(255,255,255,0.2)", fontFamily: "'DM Sans',sans-serif" }}>{Icons.phone} {PHONE}</a>
            </div>
          </div>
        </section>
      </>
    );
  };

  // =========== PAGE: COMMERCIAL ===========
  const CommercialPage = () => {
    const [commFormDone, setCommFormDone] = useState(false);
    const [commForm, setCommForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
    return (
      <>
        {/* Hero Banner */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,82,0.12)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Commercial Division</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--primary)", marginBottom: 20 }}>
              Commercial <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Roofing</span><br />Solutions
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
              Protecting Arkansas businesses from the top down. Full-service commercial roofing for flat roofs, low-slope systems, and large-scale projects across Central Arkansas.
            </p>
          </div>
        </section>

        {/* Commercial Services */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead eyebrow="What We Do" heading="Commercial Services" sub="From TPO installations to ongoing property management, Paragon delivers reliable commercial roofing solutions built for performance and longevity." />
            <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="6" x2="12" y2="18"/></svg>, title: "TPO Roofing", desc: "Thermoplastic Polyolefin (TPO) is the gold standard for commercial flat and low-slope roofs. This single-ply membrane system is energy efficient, highly reflective, and built to withstand the demands of commercial applications. TPO reduces cooling costs and provides superior weather resistance.", items: ["Single-ply membrane system", "Energy-efficient & UV reflective", "Ideal for flat & low-slope roofs", "Weld-seam technology for leak prevention", "Long-lasting commercial warranty options"] },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, title: "Commercial Roof Repair & Replacement", desc: "Whether your building has a minor leak or needs a full roof replacement, our commercial team delivers efficient, lasting solutions that minimize downtime for your business. We work with all commercial roofing systems and materials.", items: ["Full tear-off & replacement", "Leak detection & targeted repair", "Storm & hail damage restoration", "Insurance claim assistance", "Minimal business disruption"] },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><path d="M9 22v-4h6v4"/></svg>, title: "New Construction Roofing", desc: "Building a new commercial property? We partner with general contractors and developers to deliver roofing systems engineered for your building's specific needs. From design consultation to final inspection, we are with you every step.", items: ["GC & developer partnerships", "Design-build consultation", "Code-compliant installations", "Multiple system options", "Project timeline coordination"] },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>, title: "Property Management Services", desc: "We provide ongoing roof maintenance and management for property managers and HOAs. Regular inspections, preventative maintenance, and priority service keep your properties protected and your tenants happy.", items: ["Scheduled roof inspections", "Preventative maintenance programs", "Priority emergency response", "Multi-property management", "HOA & apartment community service"] },
              ].map((s, i) => (
                <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ color: "var(--accent)", marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", marginBottom: 16 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {s.items.map((item, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>{Icons.check}</span>
                        <span style={{ fontSize: 14, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Paragon for Commercial (dark section) */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead eyebrow="Why Paragon" heading={<>Why Choose Paragon for <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Commercial</span></>} sub="We bring the same integrity, transparency, and quality to commercial projects that has earned us the trust of Central Arkansas homeowners." light />
            <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {["BBB Accredited — A+ rating since 2019", "Licensed, Bonded & Fully Insured", "Insurance Claim Assistance — we handle the paperwork", "Proven Project References — including Barrington Hills Apartments", "Dedicated Commercial Project Management", "Transparent Pricing & Detailed Proposals"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>{Icons.check}</span>
                      <span style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: Icons.bbb, title: "BBB Accredited", desc: "A+ rating since 2019" },
                  { icon: Icons.shield, title: "Licensed & Bonded", desc: "Full commercial coverage" },
                  { icon: Icons.insured, title: "Insurance Assistance", desc: "Claims handled for you" },
                  { icon: Icons.building, title: "Proven Track Record", desc: "Barrington Hills & more" },
                ].map((b, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "28px 20px", textAlign: "center" }}>
                    <div style={{ color: "var(--accent)", marginBottom: 12, display: "flex", justifyContent: "center" }}>{b.icon}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>{b.title}</h4>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif" }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Consultation Form */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <GoldLine />
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 16 }}>Request a Commercial <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Consultation</span></h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>Tell us about your commercial project and our team will follow up with a tailored proposal. We work with businesses, property managers, HOAs, and general contractors.</p>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "48px 40px", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
              {!commFormDone ? (
                <form onSubmit={e => { e.preventDefault(); setCommFormDone(true); }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                    <input type="text" placeholder="Your name" value={commForm.name} onChange={e => setCommForm({ ...commForm, name: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                    <input type="text" placeholder="Company / Organization" value={commForm.company} onChange={e => setCommForm({ ...commForm, company: e.target.value })} style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                    <input type="email" placeholder="Email address" value={commForm.email} onChange={e => setCommForm({ ...commForm, email: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                    <input type="tel" placeholder="Phone number" value={commForm.phone} onChange={e => setCommForm({ ...commForm, phone: e.target.value })} style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                  </div>
                  <textarea placeholder="Tell us about your commercial project — building type, scope of work, timeline, etc." value={commForm.message} onChange={e => setCommForm({ ...commForm, message: e.target.value })} rows={5} style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 20, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)", resize: "vertical" }} />
                  <button type="submit" style={{ width: "100%", padding: "16px", fontSize: 16, fontWeight: 700, background: "var(--accent)", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(46,125,82,0.3)" }}>Request Consultation</button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{Icons.checkCircle}</div>
                  <h3 style={{ fontSize: 24, color: "var(--primary)", marginBottom: 8, fontFamily: "'Playfair Display',serif" }}>Request Received</h3>
                  <p style={{ fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.7 }}>Our commercial team will review your project and follow up promptly.<br />For immediate assistance, call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a></p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 16 }}>Prefer to Talk? <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Call Us Directly.</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 28, fontFamily: "'DM Sans',sans-serif" }}>
              Our commercial team is available Monday through Friday, 8 AM to 5 PM.
            </p>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "18px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(46,125,82,0.3)" }}>{Icons.phone} {PHONE}</a>
          </div>
        </section>
      </>
    );
  };

  // =========== PAGE: CAREERS ===========
  const CareersPage = () => {
    const [careerFormDone, setCareerFormDone] = useState(false);
    const [careerForm, setCareerForm] = useState({ name: "", email: "", phone: "", position: "", message: "" });
    return (
      <>
        {/* Hero Banner */}
        <section style={{ padding: "160px clamp(24px,5vw,64px) 80px", background: "var(--cream)", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,82,0.12)", padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>Join Our Team</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: -1.5, color: "var(--primary)", marginBottom: 20 }}>
              Join the <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Paragon</span> Team
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", maxWidth: 600, margin: "0 auto", fontFamily: "'DM Sans',sans-serif" }}>
              We are always looking for talented, hardworking people who share our values. If you take pride in your craft and want to be part of a team that puts people first, we want to hear from you.
            </p>
          </div>
        </section>

        {/* Culture / Core Values */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead eyebrow="Our Culture" heading="What We Stand For" sub="At Paragon, our values are not just words on a wall. They guide every decision, every project, and every interaction." />
            <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
              {[
                { icon: Icons.heart, title: "People Over Profit", desc: "We prioritize relationships and doing the right thing. Your trust and our team's wellbeing matter more than any bottom line." },
                { icon: Icons.book, title: "Education & Enrichment", desc: "Continuous learning keeps our team sharp. We invest in training, certifications, and professional development for every team member." },
                { icon: Icons.sun, title: "Balance", desc: "We believe in hard work and a fulfilling life outside of it. Happy, well-rested teams build better roofs and deliver better results." },
              ].map((v, i) => (
                <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 30px", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ color: "var(--accent)", marginBottom: 16, display: "flex", justifyContent: "center" }}>{v.icon}</div>
                  <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "var(--primary)", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{v.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work at Paragon */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead eyebrow="Benefits" heading="Why Work at Paragon" sub="We take care of our team because great people are the foundation of great work." />
            <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20 }}>
              {[
                { icon: Icons.financing, title: "Competitive Pay", desc: "Fair, competitive compensation that reflects your skills and contributions to the team." },
                { icon: Icons.target, title: "Growth Opportunities", desc: "Clear paths for advancement and ongoing training to help you build a long-term career." },
                { icon: Icons.users, title: "Team Environment", desc: "A supportive, collaborative workplace where every voice is heard and respected." },
                { icon: Icons.sun, title: "Work-Life Balance", desc: "We value your time outside of work. Consistent schedules and respect for your personal life." },
              ].map((b, i) => (
                <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px 24px", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ color: "var(--accent)", marginBottom: 14, display: "flex", justifyContent: "center" }}>{b.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--primary)", marginBottom: 8, fontFamily: "'DM Sans',sans-serif" }}>{b.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories (dark section) */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--primary)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead eyebrow="Open Roles" heading={<>Job <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Categories</span></>} sub="We are always accepting applications from skilled, motivated individuals. Here is where you might fit in." light />
            <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
              {[
                { icon: Icons.roof, title: "Roofing Crew", desc: "Experienced roofers and laborers who take pride in quality workmanship. From tear-offs to installations, our crews are the backbone of Paragon. Prior roofing experience preferred but we are willing to train the right candidate." },
                { icon: Icons.lightbulb, title: "Sales", desc: "Estimators and sales professionals who can build relationships, assess project needs, and guide homeowners and businesses through the process with honesty and expertise. Strong communication skills are a must." },
                { icon: Icons.briefcase, title: "Office & Admin", desc: "Office support and coordination roles that keep Paragon running smoothly behind the scenes. From scheduling to customer communication to accounting support, our office team is essential to our success." },
              ].map((j, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "36px 30px", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.2)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ color: "var(--accent)", marginBottom: 16, display: "flex", justifyContent: "center" }}>{j.icon}</div>
                  <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: "#fff", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.3 }}>{j.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans',sans-serif" }}>{j.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", marginTop: 40, fontSize: 16, color: "var(--accent)", fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>
              ¿Hablas español? We welcome bilingual applicants.
            </p>
          </div>
        </section>

        {/* Application Form */}
        <section style={{ padding: "110px clamp(24px,5vw,64px)", background: "var(--white)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <GoldLine />
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: -0.5, color: "var(--primary)", marginBottom: 16 }}>Apply <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Today</span></h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>Interested in joining the Paragon team? Fill out the form below and tell us a little about yourself. We will be in touch.</p>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, padding: "48px 40px", boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}>
              {!careerFormDone ? (
                <form onSubmit={e => { e.preventDefault(); setCareerFormDone(true); }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                    <input type="text" placeholder="Your name" value={careerForm.name} onChange={e => setCareerForm({ ...careerForm, name: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                    <input type="email" placeholder="Email address" value={careerForm.email} onChange={e => setCareerForm({ ...careerForm, email: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                  </div>
                  <input type="tel" placeholder="Phone number" value={careerForm.phone} onChange={e => setCareerForm({ ...careerForm, phone: e.target.value })} style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 12, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)" }} />
                  <select value={careerForm.position} onChange={e => setCareerForm({ ...careerForm, position: e.target.value })} required style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 12, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)", color: careerForm.position ? "var(--text)" : "var(--text-light)" }}>
                    <option value="" disabled>Position interest</option>
                    <option>Roofing Crew</option>
                    <option>Sales</option>
                    <option>Office & Admin</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Tell us about your experience, skills, and why you are interested in Paragon..." value={careerForm.message} onChange={e => setCareerForm({ ...careerForm, message: e.target.value })} rows={5} style={{ width: "100%", padding: "14px 16px", fontSize: 14, border: "1.5px solid #e8e8ec", borderRadius: 6, marginBottom: 20, outline: "none", fontFamily: "'DM Sans',sans-serif", background: "var(--cream)", resize: "vertical" }} />
                  <button type="submit" style={{ width: "100%", padding: "16px", fontSize: 16, fontWeight: 700, background: "var(--accent)", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 20px rgba(46,125,82,0.3)" }}>Submit Application</button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{Icons.checkCircle}</div>
                  <h3 style={{ fontSize: 24, color: "var(--primary)", marginBottom: 8, fontFamily: "'Playfair Display',serif" }}>Application Received!</h3>
                  <p style={{ fontSize: 15, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.7 }}>Thanks for your interest in Paragon. Our team will review your application and reach out soon.<br />Questions? Call <a href={TEL} style={{ color: "var(--accent)", fontWeight: 600 }}>{PHONE}</a></p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Scrappy Mascot Note */}
        <section style={{ padding: "64px clamp(24px,5vw,64px)", background: "var(--cream)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ color: "var(--accent)" }}>{Icons.paw}</span>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--primary)", fontFamily: "'DM Sans',sans-serif" }}>A Note About Our Office Mascot</h3>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", fontFamily: "'DM Sans',sans-serif" }}>
              Fair warning — our office mascot Scrappy will greet you at the door. He is a rescue pup with a big personality. Consider yourself warned (and welcomed).
            </p>
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
      case "roofing": return <RoofingPage />;
      case "siding": return <SidingPage />;
      case "gutters": return <GuttersPage />;
      case "services": return <MoreServicesPage />;
      case "commercial": return <CommercialPage />;
      case "careers": return <CareersPage />;
      default: return <HomePage />;
    }
  };

  // =========== PASSWORD GATE ===========
  if (!authed) {
    return (<>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}`}</style>
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#2A4365" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: "56px 44px", textAlign: "center", maxWidth: 420, width: "92%", boxShadow: "0 32px 80px rgba(0,0,0,.35)" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, marginBottom: 8, fontWeight: 600, letterSpacing: -0.5 }}>
            <span style={{ color: "#2A4365" }}>Paragon</span>{" "}
            <span style={{ color: "#2E7D52" }}>Exteriors</span>
          </div>
          <p style={{ fontSize: 13, color: "#8A8A9A", letterSpacing: 1, marginBottom: 28, textTransform: "uppercase" }}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e => { setPw(e.target.value); setPwBad(false); }} placeholder="••••" autoFocus style={{ width: "100%", padding: 16, fontSize: 20, border: `2px solid ${pwBad ? "#ef4444" : "#e2e8f0"}`, borderRadius: 8, textAlign: "center", letterSpacing: 6, outline: "none", fontFamily: "'DM Sans',sans-serif", color: "#2A4365" }} />
            {pwBad && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 8, fontWeight: 500 }}>Incorrect password</p>}
            <button type="submit" style={{ width: "100%", padding: 16, marginTop: 20, fontSize: 15, fontWeight: 700, background: "#2A4365", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  // =========== MAIN RENDER ===========
  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
      :root{--primary:#2A4365;--accent:#2E7D52;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
      *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
      body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--cream);-webkit-font-smoothing:antialiased}
      h1,h2,h3,.serif{font-family:'Playfair Display',serif;font-weight:500}
      a{text-decoration:none;color:inherit}
      .gold-line{width:48px;height:2px;background:var(--accent)}
      @media(max-width:900px){
        .desktop-only{display:none!important}
        .mobile-only{display:flex!important}
        .hero-split{grid-template-columns:1fr!important;gap:32px!important;text-align:center}
        .svc-grid{grid-template-columns:1fr!important}
        .team-grid{grid-template-columns:1fr!important}
        .team-grid-2{grid-template-columns:1fr!important}
        .values-grid{grid-template-columns:1fr!important}
        .why-grid{grid-template-columns:1fr!important}
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

import { useState, useEffect, useRef } from "react";

/* ============================================
   AMG PLUMBING — Little Rock, AR
   Primary: #0021D0 (used sparingly as accent)
   Neutral foundation: white, near-white, near-black
   ============================================ */

const BIZ = {
  name: "AMG Plumbing",
  industry: "Plumber",
  city: "Little Rock",
  state: "AR",
  phone: "(501) 707-5140",
  tel: "tel:+15017075140",
  address: "11415 Huron Ln #25711, Little Rock, AR 72221",
  owner: "Seth Grandbois",
  established: 2023,
  rating: 5.0,
  reviewCount: 195,
  hours: "Mon–Fri 8AM–5PM",
  logo: "https://static.wixstatic.com/media/59aborc_3a1d35cd1cbf4d9db7ab0d35c9727864~mv2.png",
};

const SERVICES_CARDS = [
  { name: "Water Heater Installation & Repair", emoji: "🔥", desc: "Expert installation and repair of tank and tankless water heaters to keep your hot water flowing reliably year-round." },
  { name: "Drain Cleaning & Rooter Service", emoji: "🚿", desc: "Professional drain cleaning and rooter service to eliminate clogs, slow drains, and backups throughout your home." },
  { name: "Sewer Line Repair & Replacement", emoji: "🏗️", desc: "Complete sewer line diagnostics, repair, and replacement using modern techniques that minimize disruption to your property." },
  { name: "Gas Line Repair & Installation", emoji: "⚡", desc: "Licensed gas line services ensuring safe, code-compliant connections for your appliances and home systems." },
  { name: "Water Line Repair & Replacement", emoji: "💧", desc: "Reliable water line repair and replacement to restore proper pressure and flow to your entire home." },
  { name: "Emergency Plumbing Service", emoji: "🚨", desc: "When plumbing emergencies strike, AMG responds fast with same-day service to protect your home from water damage." },
];

const ALL_SERVICES = [
  "Residential Plumbing Repair", "Water Heater Installation & Repair", "Drain Cleaning & Rooter Service",
  "Sewer Line Repair & Replacement", "Toilet Repair & Installation", "Faucet & Fixture Installation",
  "Garbage Disposal Repair", "Gas Line Repair & Installation", "Water Line Repair & Replacement",
  "Pipe Repair & Repiping", "Emergency Plumbing Service", "Commercial Plumbing",
];

const AREAS = ["Little Rock", "North Little Rock", "Maumelle", "Sherwood", "Jacksonville", "Cabot", "Benton", "Bryant", "Conway"];

const REVIEWS = [
  { text: "Seth and his team are second to none. They are all so incredibly knowledgeable and fair about the work that they perform. They not only got over to help us out immediately in our time of need, they also took the time to explain the repair/replacement process and let us know how the major parts of our plumbing system work with each other and what to look out for.", name: "Barbara DuPriest", source: "Google" },
  { text: "Lewis & his colleague did a superb job. They were on time and very professional. Both times we have had AMG to the house, they assessed and took care of the issues quickly. I appreciate the way they are constantly training their colleagues and teaching as they do the work.", name: "Verified Customer", source: "Google" },
  { text: "My kitchen sink stopped draining the other night after using the garbage disposal, and AMG was there the very next day and fixed it right up. Jonathan had to climb on the roof to clear the vent, and didn't hesitate to do so. He also triple checked to make sure the problem was fully resolved before leaving.", name: "Verified Customer", source: "Google" },
  { text: "Grayson and his boss were very friendly, efficient and professional. They came on time and answered all my questions regarding washer and dryer installation. I highly recommend AMG Plumbing.", name: "Verified Customer", source: "Google" },
  { text: "I was very pleased with the service I received from AMG plumbing. They were great about informing me about what time they would be arriving and were even able to show up a little early which was great. The service guys listened to all my issues with all 3 toilets and worked on each one to make sure they worked perfectly before they left.", name: "Verified Customer", source: "Google" },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap');

:root {
  --primary: #0021D0;
  --bg-white: #FFFFFF;
  --bg-light: #F8F9FA;
  --bg-dark: #111827;
  --text-heading: #111827;
  --text-body: #4A5568;
  --text-subtle: #718096;
  --text-on-dark: #FFFFFF;
  --text-on-dark-muted: rgba(255,255,255,0.7);
  --border: rgba(0,0,0,0.06);
  --shadow: rgba(0,0,0,0.08);
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: 'DM Sans', sans-serif;
  color: var(--text-body);
  background: var(--bg-white);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, .hf { font-family: 'DM Serif Display', serif; font-weight: 400; color: var(--text-heading); }
a { text-decoration: none; color: inherit; }
img { max-width: 100%; }

/* GATE */
.gate {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: var(--bg-dark);
}
.gate-card {
  background: var(--bg-white); border-radius: 12px; padding: 48px 40px;
  text-align: center; max-width: 400px; width: 90%;
  box-shadow: 0 24px 64px rgba(0,0,0,0.3);
}
.gate-logo { height: 48px; margin-bottom: 24px; }
.gate-text { font-size: 14px; color: var(--text-subtle); margin-bottom: 24px; }
.gate-input {
  width: 100%; padding: 14px; font-size: 18px; border: 1.5px solid var(--border);
  border-radius: 8px; text-align: center; letter-spacing: 6px; outline: none;
  font-family: 'DM Sans', sans-serif; transition: border-color 0.2s;
}
.gate-input:focus { border-color: var(--primary); }
.gate-input.err { border-color: #dc3545; }
.gate-err { color: #dc3545; font-size: 13px; margin-top: 8px; }
.gate-btn {
  width: 100%; padding: 14px; margin-top: 16px; font-size: 16px; font-weight: 600;
  letter-spacing: 0.5px; background: var(--primary); color: #fff; border: none;
  border-radius: 8px; cursor: pointer; font-family: 'DM Sans', sans-serif;
  transition: filter 0.2s;
}
.gate-btn:hover { filter: brightness(1.15); }

/* NAV */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 18px max(5vw, 24px);
  display: flex; align-items: center; justify-content: space-between;
  transition: background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
}
.nav.scrolled { background: var(--bg-dark); box-shadow: 0 2px 20px rgba(0,0,0,0.15); padding-top: 12px; padding-bottom: 12px; }
.nav-logo { height: 40px; }
.nav.scrolled .nav-logo { filter: brightness(10); }
.nav-right { display: flex; align-items: center; gap: 32px; }
.nav-link {
  font-size: 15px; font-weight: 600; transition: color 0.2s, opacity 0.2s;
  color: var(--text-heading); opacity: 0.7;
}
.nav-link:hover { opacity: 1; }
.nav.scrolled .nav-link { color: var(--text-on-dark); opacity: 0.85; }
.nav.scrolled .nav-link:hover { opacity: 1; }
.nav-cta {
  background: var(--primary); color: #fff; padding: 12px 24px; border-radius: 8px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.5px;
  box-shadow: 0 4px 16px rgba(0,33,208,0.25); transition: filter 0.2s, transform 0.2s;
}
.nav-cta:hover { filter: brightness(1.15); transform: translateY(-1px); }
.hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; flex-direction: column; gap: 5px; }
.hamburger span { display: block; width: 24px; height: 2px; background: var(--text-heading); border-radius: 2px; }
.nav.scrolled .hamburger span { background: var(--text-on-dark); }
.mob-overlay {
  position: fixed; inset: 0; background: var(--bg-dark); z-index: 999;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 28px;
}
.mob-overlay a { color: var(--text-on-dark); font-size: 20px; font-weight: 600; }
.mob-overlay-cta {
  background: var(--primary); color: #fff; padding: 16px 40px; border-radius: 8px;
  font-size: 18px; font-weight: 600; margin-top: 8px;
}
.mob-close { position: absolute; top: 20px; right: 24px; background: none; border: none; color: var(--text-on-dark); font-size: 32px; cursor: pointer; }

/* HERO */
.hero {
  min-height: 100vh; padding: 120px max(5vw, 24px) 100px;
  background: var(--bg-light);
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: center;
  max-width: 100vw;
}
.hero-content { max-width: 620px; }
.hero-badge {
  display: inline-block; background: rgba(0,33,208,0.08); color: var(--primary);
  padding: 8px 18px; border-radius: 30px; font-size: 13px; font-weight: 600;
  letter-spacing: 1px; text-transform: uppercase; margin-bottom: 24px;
}
.hero h1 { color: var(--text-heading); font-size: clamp(36px, 4.5vw, 64px); line-height: 1.1; margin-bottom: 20px; }
.hero-sub { color: var(--text-body); font-size: 18px; line-height: 1.7; margin-bottom: 24px; max-width: 540px; }
.hero-quote { margin-bottom: 32px; max-width: 500px; }
.hero-stars { color: #FFD700; font-size: 18px; letter-spacing: 2px; }
.hero-qt { color: var(--text-body); font-size: 15px; font-style: italic; line-height: 1.6; margin-top: 6px; }
.hero-qn { font-style: normal; font-weight: 700; color: var(--primary); }
.hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--primary); color: #fff; padding: 16px 32px; border-radius: 8px;
  font-size: 16px; font-weight: 600; letter-spacing: 0.5px; border: none; cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  box-shadow: 0 4px 16px rgba(0,33,208,0.25); transition: filter 0.2s, transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover { filter: brightness(1.15); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,33,208,0.3); }
.btn-outline {
  display: inline-flex; align-items: center;
  background: transparent; color: var(--primary); padding: 14px 28px; border-radius: 8px;
  font-size: 16px; font-weight: 600; letter-spacing: 0.5px;
  border: 2px solid var(--primary); cursor: pointer;
  font-family: 'DM Sans', sans-serif; transition: background 0.2s;
}
.btn-outline:hover { background: rgba(0,33,208,0.05); }
.btn-outline-light {
  display: inline-flex; align-items: center;
  background: transparent; color: var(--text-on-dark); padding: 14px 28px; border-radius: 8px;
  font-size: 16px; font-weight: 600; letter-spacing: 0.5px;
  border: 2px solid rgba(255,255,255,0.3); cursor: pointer;
  font-family: 'DM Sans', sans-serif; transition: background 0.2s, border-color 0.2s;
}
.btn-outline-light:hover { border-color: #fff; background: rgba(255,255,255,0.06); }

/* FORM */
.form-card {
  background: var(--bg-white); border-radius: 12px; padding: 36px 32px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.1); border: 1px solid var(--border);
}
.form-title { font-size: 26px; margin-bottom: 6px; }
.form-sub { font-size: 14px; color: var(--text-subtle); margin-bottom: 24px; }
.form-field {
  width: 100%; padding: 14px 16px; font-size: 15px; border: 1.5px solid rgba(0,0,0,0.1);
  border-radius: 8px; margin-bottom: 14px; outline: none; transition: border-color 0.2s;
  font-family: 'DM Sans', sans-serif; color: var(--text-heading); background: var(--bg-white);
}
.form-field:focus { border-color: var(--primary); }
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23718096' d='M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px;
}
.form-submit {
  width: 100%; padding: 16px; background: var(--primary); color: #fff;
  border: none; border-radius: 8px; font-size: 16px; font-weight: 600; letter-spacing: 0.5px;
  cursor: pointer; font-family: 'DM Sans', sans-serif; transition: filter 0.2s;
}
.form-submit:hover { filter: brightness(1.15); }
.form-done { text-align: center; padding: 24px 0; }
.form-done-icon { font-size: 48px; margin-bottom: 12px; }
.form-done h3 { font-size: 24px; margin-bottom: 8px; }
.form-done p { font-size: 14px; color: var(--text-subtle); line-height: 1.6; }
.form-done a { color: var(--primary); font-weight: 600; }

/* TRUST */
.trust { padding: 80px max(5vw, 24px); background: var(--bg-white); }
.trust-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; text-align: center; }
.trust-num { font-size: clamp(36px, 4vw, 52px); line-height: 1.1; margin-bottom: 6px; color: var(--text-heading); }
.trust-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; color: var(--text-body); margin-bottom: 4px; }
.trust-desc { font-size: 14px; color: var(--text-subtle); }

/* SECTIONS */
.section { padding: 100px max(5vw, 24px); }
.section-inner { max-width: 1200px; margin: 0 auto; }
.section-hdr { text-align: center; margin-bottom: 48px; }
.eyebrow { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 2.5px; color: var(--primary); margin-bottom: 12px; }
.section-hdr h2 { font-size: clamp(28px, 3.5vw, 44px); line-height: 1.15; margin-bottom: 16px; }
.section-hdr p { font-size: 17px; color: var(--text-body); max-width: 600px; margin: 0 auto; line-height: 1.7; }

/* SERVICES */
.services { background: var(--bg-light); }
.srv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.srv {
  background: var(--bg-white); border: 1px solid var(--border); border-radius: 12px;
  padding: 32px; box-shadow: 0 2px 12px var(--shadow);
  transition: all 0.25s ease; position: relative; overflow: hidden;
}
.srv::before { content: ''; position: absolute; top: 0; left: 0; width: 0; height: 3px; background: var(--primary); transition: width 0.3s ease; }
.srv:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
.srv:hover::before { width: 100%; }
.srv-ico { font-size: 40px; margin-bottom: 16px; display: block; }
.srv h3 { font-size: clamp(20px, 2vw, 26px); line-height: 1.3; margin-bottom: 10px; }
.srv p { font-size: 15px; line-height: 1.7; }
.scta { text-align: center; margin-top: 48px; font-size: 15px; color: var(--text-subtle); }
.scta a { color: var(--primary); font-weight: 600; }

/* WHY US */
.why { padding: 100px max(5vw, 24px); background: var(--bg-dark); }
.why-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.4fr 1fr; gap: 60px; align-items: start; }
.why .eyebrow { color: rgba(255,255,255,0.5); }
.why h2 { color: var(--text-on-dark); font-size: clamp(28px, 3.5vw, 40px); margin-bottom: 24px; }
.why-p { font-size: 16px; line-height: 1.8; color: var(--text-on-dark-muted); margin-bottom: 20px; }
.why-creds { list-style: none; margin-top: 12px; }
.why-creds li { padding: 10px 0; font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 14px; color: var(--text-on-dark); }
.why-creds li span { color: var(--primary); font-size: 18px; }

/* REVIEWS */
.reviews { padding: 100px max(5vw, 24px); background: var(--bg-white); }
.rev-inner { max-width: 1200px; margin: 0 auto; }
.rev-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.rev {
  background: var(--bg-white); border: 1px solid var(--border); border-radius: 12px;
  padding: 32px; box-shadow: 0 2px 12px var(--shadow); display: flex; flex-direction: column;
  transition: all 0.25s ease;
}
.rev:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
.rev-stars { color: #FFD700; font-size: 18px; letter-spacing: 2px; margin-bottom: 16px; }
.rev-text { font-size: 15px; font-style: italic; line-height: 1.7; margin-bottom: 20px; flex: 1; }
.rev-name { font-weight: 700; font-size: 15px; color: var(--text-heading); margin-bottom: 4px; }
.rev-src { display: inline-block; font-size: 12px; font-weight: 600; color: var(--text-subtle); background: var(--bg-light); padding: 4px 10px; border-radius: 20px; }
.rev-dots { display: flex; justify-content: center; gap: 10px; margin-top: 32px; }
.rev-dot { width: 10px; height: 10px; border-radius: 50%; border: none; cursor: pointer; padding: 0; transition: background 0.2s; }
.rev-dot.on { background: var(--primary); }
.rev-dot.off { background: rgba(0,0,0,0.12); }

/* AREAS */
.areas { padding: 100px max(5vw, 24px); background: var(--bg-light); }
.areas-inner { max-width: 1200px; margin: 0 auto; }
.area-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; max-width: 900px; margin: 0 auto; }
.atag {
  background: var(--bg-white); border: 1px solid var(--border); padding: 10px 20px;
  border-radius: 30px; font-size: 15px; font-weight: 600; color: var(--text-body);
  transition: all 0.25s ease; cursor: default;
}
.atag:hover { background: var(--bg-dark); color: var(--text-on-dark); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); }

/* CTA */
.cta-sec { padding: 100px max(5vw, 24px); background: var(--bg-white); text-align: center; }
.cta-sec h2 { font-size: clamp(28px, 3.5vw, 44px); margin-bottom: 16px; }
.cta-sec-sub { color: var(--text-body); font-size: 18px; margin-bottom: 36px; line-height: 1.6; }
.cta-sec-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* FOOTER */
.footer { background: var(--bg-dark); color: var(--text-on-dark-muted); padding: 80px max(5vw, 24px) 0; }
.footer-inner { max-width: 1200px; margin: 0 auto; }
.footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 48px; padding-bottom: 48px; }
.footer-logo { height: 36px; filter: brightness(10); margin-bottom: 16px; }
.footer-desc { font-size: 15px; line-height: 1.7; margin-bottom: 16px; }
.footer-phone a { color: var(--primary); font-weight: 600; }
.footer h4 { font-family: 'DM Serif Display', serif; font-weight: 400; font-size: 18px; color: var(--text-on-dark); margin-bottom: 16px; }
.footer-list { list-style: none; }
.footer-list li { padding: 4px 0; font-size: 14px; }
.footer-list a { color: rgba(255,255,255,0.6); transition: color 0.2s; }
.footer-list a:hover { color: var(--primary); }
.footer-btm {
  border-top: 1px solid rgba(255,255,255,0.08); padding: 20px 0;
  text-align: center; font-size: 13px; color: rgba(255,255,255,0.35);
}

/* MOBILE CTA */
.mob-cta {
  display: none; position: fixed; bottom: 0; left: 0; right: 0; z-index: 998;
  background: var(--primary); color: #fff; text-align: center;
  padding: 18px 16px; font-size: 17px; font-weight: 700;
  box-shadow: 0 -4px 16px rgba(0,0,0,0.15);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .nav { padding: 14px 20px; }
  .nav.scrolled { padding: 10px 20px; }
  .nav-right > .nav-link, .nav-right > .nav-cta { display: none; }
  .hamburger { display: flex; }
  .hero { grid-template-columns: 1fr; padding: 100px 20px 80px; min-height: auto; }
  .hero-content { max-width: 100%; }
  .trust { padding: 64px 20px; }
  .trust-grid { grid-template-columns: 1fr 1fr; }
  .section { padding: 64px 20px; }
  .srv-grid { grid-template-columns: 1fr; }
  .why { padding: 64px 20px; }
  .why-inner { grid-template-columns: 1fr; gap: 32px; }
  .reviews { padding: 64px 20px; }
  .rev-grid { grid-template-columns: 1fr; }
  .rev-grid .rev.hide-mob { display: none; }
  .areas { padding: 64px 20px; }
  .cta-sec { padding: 64px 20px; }
  .footer { padding: 48px 20px 0; }
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-btm { padding-bottom: 72px; }
  .mob-cta { display: block; }
}
`;

export default function AMGPlumbing() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("amg-plumbing-auth") === "true");
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [revIdx, setRevIdx] = useState(0);
  const revTimer = useRef(null);

  const handlePw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("amg-plumbing-auth", "true"); setAuthed(true); }
    else { setPwErr(true); setPw(""); }
  };

  useEffect(() => {
    if (!authed) return;
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [authed]);

  useEffect(() => {
    if (!authed) return;
    revTimer.current = setInterval(() => setRevIdx((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(revTimer.current);
  }, [authed]);

  const resetRev = () => { clearInterval(revTimer.current); revTimer.current = setInterval(() => setRevIdx((i) => (i + 1) % REVIEWS.length), 5000); };

  useEffect(() => {
    if (!authed) return;
    document.title = "Plumber Little Rock AR | AMG Plumbing";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "5-star plumber in Little Rock, AR. Drain cleaning, water heaters, emergency service & more. Call (501) 707-5140." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Little Rock" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "Plumber",
      name: "AMG Plumbing", image: BIZ.logo, telephone: "+15017075140",
      address: { "@type": "PostalAddress", streetAddress: "11415 Huron Ln #25711", addressLocality: "Little Rock", addressRegion: "AR", postalCode: "72221", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.7465, longitude: -92.2896 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "195", bestRating: "5" },
      founder: { "@type": "Person", name: "Seth Grandbois" }, foundingDate: "2023",
      description: "AMG Plumbing is a family-owned plumbing company in Little Rock, AR. Drain cleaning, water heaters, emergency plumbing, and full residential and commercial services.",
      areaServed: AREAS.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Plumbing Services", itemListElement: ALL_SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
      memberOf: [{ "@type": "Organization", name: "Better Business Bureau" }, { "@type": "Organization", name: "Little Rock Regional Chamber of Commerce" }],
      sameAs: [],
    })});
    return () => els.forEach((el) => { try { document.head.removeChild(el); } catch(e) {} });
  }, [authed]);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const yr = new Date().getFullYear();
  const yrs = yr - BIZ.established;

  if (!authed) {
    return (<>
      <style>{CSS}</style>
      <div className="gate">
        <div className="gate-card">
          <img src={BIZ.logo} alt="AMG Plumbing" className="gate-logo" />
          <p className="gate-text">Enter password to view your website preview</p>
          <form onSubmit={handlePw}>
            <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setPwErr(false); }} placeholder="••••" autoFocus className={`gate-input${pwErr ? " err" : ""}`} />
            {pwErr && <p className="gate-err">Incorrect password</p>}
            <button type="submit" className="gate-btn">View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  return (<>
    <style>{CSS}</style>

    {/* NAV */}
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <img src={BIZ.logo} alt="AMG Plumbing" className="nav-logo" />
      <div className="nav-right">
        <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); go("services"); }}>Services</a>
        <a href="#why" className="nav-link" onClick={(e) => { e.preventDefault(); go("why"); }}>Why Us</a>
        <a href="#reviews" className="nav-link" onClick={(e) => { e.preventDefault(); go("reviews"); }}>Reviews</a>
        <a href="#areas" className="nav-link" onClick={(e) => { e.preventDefault(); go("areas"); }}>Areas</a>
        <a href={BIZ.tel} className="nav-cta">Call {BIZ.phone}</a>
        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Menu"><span /><span /><span /></button>
      </div>
    </nav>

    {menuOpen && (
      <div className="mob-overlay">
        <button className="mob-close" onClick={() => setMenuOpen(false)} aria-label="Close">×</button>
        <a href="#services" onClick={(e) => { e.preventDefault(); go("services"); }}>Services</a>
        <a href="#why" onClick={(e) => { e.preventDefault(); go("why"); }}>Why Us</a>
        <a href="#reviews" onClick={(e) => { e.preventDefault(); go("reviews"); }}>Reviews</a>
        <a href="#areas" onClick={(e) => { e.preventDefault(); go("areas"); }}>Areas</a>
        <a href={BIZ.tel} className="mob-overlay-cta">📞 Call {BIZ.phone}</a>
      </div>
    )}

    {/* HERO */}
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Family Owned Since 2023</span>
        <h1>Little Rock's Trusted Plumbing Experts</h1>
        <p className="hero-sub">
          Led by Seth Grandbois, AMG Plumbing has earned a perfect 5.0-star rating with {BIZ.reviewCount}+ Google reviews.
          Honest pricing, expert service, and a one-year guarantee on every job.
        </p>
        <div className="hero-quote">
          <div className="hero-stars">★★★★★</div>
          <p className="hero-qt">
            "They truly do care about your specific case and do all they can to get you back and better than ever."
            <br />— <span className="hero-qn">Barbara DuPriest</span>
          </p>
        </div>
        <div className="hero-btns">
          <a href={BIZ.tel} className="btn-primary">📞 Call {BIZ.phone}</a>
          <button className="btn-outline" onClick={() => go("services")}>Our Services</button>
        </div>
      </div>
      <div className="form-card">
        {!formDone ? (<>
          <h3 className="form-title hf">Get a Free Quote</h3>
          <p className="form-sub">We'll call you back within the hour</p>
          <form onSubmit={(e) => { e.preventDefault(); setFormDone(true); }}>
            <input type="text" placeholder="John Smith" className="form-field" required />
            <input type="tel" placeholder="(501) 555-0123" className="form-field" required />
            <select className="form-field form-select" required defaultValue="">
              <option value="" disabled>Select a service...</option>
              {ALL_SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <button type="submit" className="form-submit">Get My Free Quote →</button>
          </form>
        </>) : (
          <div className="form-done">
            <div className="form-done-icon">✅</div>
            <h3 className="hf">We Got It!</h3>
            <p>We'll be in touch shortly.<br />Call us at <a href={BIZ.tel}>{BIZ.phone}</a> for emergencies.</p>
          </div>
        )}
      </div>
    </section>

    {/* TRUST */}
    <section className="trust">
      <div className="trust-grid">
        <div>
          <div className="trust-num hf">{yrs}+</div>
          <div className="trust-label">Years in Business</div>
          <div className="trust-desc">Serving Arkansas since {BIZ.established}</div>
        </div>
        <div>
          <div className="trust-num hf">5.0 ★</div>
          <div className="trust-label">Google Rating</div>
          <div className="trust-desc">Perfect five-star rating</div>
        </div>
        <div>
          <div className="trust-num hf">195+</div>
          <div className="trust-label">Google Reviews</div>
          <div className="trust-desc">From real customers</div>
        </div>
        <div>
          <div className="trust-num hf">1 Yr</div>
          <div className="trust-label">Guarantee</div>
          <div className="trust-desc">Parts and labor, every job</div>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="section services" id="services">
      <div className="section-inner">
        <div className="section-hdr">
          <div className="eyebrow">What We Do</div>
          <h2>Plumbing Services in Little Rock, AR</h2>
          <p>From minor repairs to major replacements, AMG Plumbing handles it all with precision and care.</p>
        </div>
        <div className="srv-grid">
          {SERVICES_CARDS.map((s) => (
            <div key={s.name} className="srv">
              <span className="srv-ico" role="img" aria-label={s.name}>{s.emoji}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="scta">Questions about our services? Call Seth at <a href={BIZ.tel}>{BIZ.phone}</a></div>
      </div>
    </section>

    {/* WHY US */}
    <section className="why" id="why">
      <div className="why-inner">
        <div>
          <div className="eyebrow">Why Little Rock Trusts Us</div>
          <h2>Why Little Rock Trusts Seth Grandbois</h2>
          <p className="why-p">
            When Seth Grandbois and Angel started AMG Plumbing in 2023, they had one goal: build a plumbing
            company that treats every customer like family. In just {yrs} years, that commitment has earned
            them a perfect 5.0-star rating from 195+ customers.
          </p>
          <p className="why-p">
            Customers consistently praise their communication, punctuality, and honesty. Every technician —
            Jonathan, Lewis, and Grayson — is trained to explain the problem, walk you through the options,
            and make sure you're comfortable before any work begins. No surprises, no upselling — just skilled
            tradesmen who care about doing the job right.
          </p>
          <p className="why-p">
            As a BBB Accredited business and member of the Little Rock Regional Chamber of Commerce, AMG
            Plumbing is building a reputation that speaks for itself.
          </p>
        </div>
        <div>
          <ul className="why-creds">
            <li><span>✓</span> Family Owned & Operated</li>
            <li><span>✓</span> BBB Accredited (Since 2023)</li>
            <li><span>✓</span> Chamber of Commerce Member</li>
            <li><span>✓</span> Licensed & Insured</li>
            <li><span>✓</span> 1-Year Parts & Labor Guarantee</li>
          </ul>
        </div>
      </div>
    </section>

    {/* REVIEWS */}
    <section className="reviews" id="reviews">
      <div className="rev-inner">
        <div className="section-hdr">
          <div className="eyebrow">What Our Customers Say</div>
          <h2>Real Reviews from Real Customers</h2>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className={`rev${i >= 3 ? " hide-mob" : ""}`}
              style={i >= 3 ? {} : {}}>
              <div className="rev-stars">★★★★★</div>
              <p className="rev-text">"{r.text}"</p>
              <div className="rev-name">— {r.name}</div>
              <span className="rev-src">{r.source}</span>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) {
            .rev-grid .rev { display: none; }
            .rev-grid .rev:nth-child(${revIdx + 1}) { display: flex; }
          }
        `}</style>
        <div className="rev-dots">
          {REVIEWS.map((_, i) => (
            <button key={i} className={`rev-dot ${i === revIdx ? "on" : "off"}`}
              onClick={() => { setRevIdx(i); resetRev(); }} aria-label={`Review ${i + 1}`} />
          ))}
        </div>
        <div className="scta" style={{ marginTop: 32 }}>
          Ready to see why 195+ customers trust AMG Plumbing? Call <a href={BIZ.tel}>{BIZ.phone}</a>
        </div>
      </div>
    </section>

    {/* AREAS */}
    <section className="section areas" id="areas">
      <div className="section-inner">
        <div className="section-hdr">
          <div className="eyebrow">Where We Serve</div>
          <h2>Serving Little Rock and Surrounding Areas</h2>
        </div>
        <div className="area-tags">
          {AREAS.map((a) => (
            <span key={a} className="atag" title={`Plumber in ${a}, AR`}>📍 {a}</span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-sec">
      <h2>Got a Plumbing Problem? Call Seth.</h2>
      <p className="cta-sec-sub">Same-day service, honest pricing, and a team that answers the phone.</p>
      <div className="cta-sec-btns">
        <a href={BIZ.tel} className="btn-primary" style={{ fontSize: 18, padding: "18px 40px" }}>📞 Call Now: {BIZ.phone}</a>
        <button className="btn-outline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Get a Free Quote</button>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <img src={BIZ.logo} alt="AMG Plumbing" className="footer-logo" />
            <p className="footer-desc">
              Family-owned plumbing company serving Little Rock and Central Arkansas. Founded by Seth Grandbois,
              backed by a perfect 5.0 rating and a one-year guarantee on every job.
            </p>
            <div className="footer-phone"><a href={BIZ.tel}>{BIZ.phone}</a></div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-list">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); go("services"); }}>Services</a></li>
              <li><a href="#why" onClick={(e) => { e.preventDefault(); go("why"); }}>Why Us</a></li>
              <li><a href="#reviews" onClick={(e) => { e.preventDefault(); go("reviews"); }}>Reviews</a></li>
              <li><a href="#areas" onClick={(e) => { e.preventDefault(); go("areas"); }}>Areas</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Get a Quote</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footer-list">
              <li>11415 Huron Ln #25711</li>
              <li>Little Rock, AR 72221</li>
              <li><a href={BIZ.tel} style={{ color: "var(--primary)" }}>{BIZ.phone}</a></li>
              <li>Mon–Fri 8AM–5PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-btm">© {yr} AMG Plumbing. All rights reserved.</div>
      </div>
    </footer>

    {/* MOBILE CTA */}
    <a href={BIZ.tel} className="mob-cta">📞 Call AMG Plumbing Now</a>
  </>);
}

import { useState, useEffect, useRef } from "react";

// ============================================
// AMG PLUMBING — Little Rock, AR
// ============================================

const BIZ = {
  name: "AMG Plumbing",
  industry: "Plumber",
  city: "Little Rock",
  state: "AR",
  phone: "(501) 707-5140",
  phoneTel: "tel:+15017075140",
  address: "11415 Huron Ln #25711, Little Rock, AR 72221",
  owner: "Seth Grandbois",
  established: 2023,
  rating: 5.0,
  reviewCount: 195,
  hours: "Mon-Fri 8AM-5PM",
  logo: "https://static.wixstatic.com/media/7d69d5_b79d2e75c0984a139450a30f47fac990~mv2.png",
};

const COLORS = {
  primary: "#0021D0",
  accent: "#BBC5F0",
  dark: "#001590",
  bg: "#F9FBFA",
  text: "#333333",
  textLight: "#666666",
  white: "#FFFFFF",
};

const SERVICES = [
  { name: "Leak Detection & Repair", emoji: "🔍", desc: "Pinpoint and fix leaks fast using advanced detection technology — before they cause costly water damage to your home." },
  { name: "Water Heater Installation & Repair", emoji: "🔥", desc: "Expert installation and repair of tank and tankless water heaters to keep your hot water flowing reliably." },
  { name: "Drain Cleaning", emoji: "🚿", desc: "Professional drain cleaning to eliminate clogs, slow drains, and backups throughout your home's plumbing system." },
  { name: "Sewer Line Repair & Replacement", emoji: "🏗️", desc: "Complete sewer line diagnostics, repair, and replacement using modern techniques that minimize disruption to your property." },
  { name: "Gas Line Repair & Replacement", emoji: "⚡", desc: "Licensed gas line services to ensure safe, code-compliant connections for your appliances and home systems." },
  { name: "Water Line Repair & Replacement", emoji: "💧", desc: "Reliable water line repair and replacement to restore proper pressure and flow to your entire home." },
];

const ALL_SERVICES = [
  "Leak Detection & Repair", "Faucet & Fixture Repair and Installation", "Tub, Shower & Toilet Repair",
  "Gas Line Repair & Replacement", "Water Line Repair & Replacement", "Sewer Line Repair & Replacement",
  "Rooter Services", "Drain Cleaning", "Garbage Disposal Installation & Maintenance",
  "Water Filtration System Installation & Maintenance", "Camera Inspection for Sewer Lines",
  "Water Line Locate Services", "Hydro-Jetting", "Backflow Prevention",
  "Water Heater Installation & Repair", "Water Softener Installation", "Bathroom & Kitchen Plumbing",
];

const AREAS = [
  "Little Rock", "North Little Rock", "Benton", "Conway", "Jacksonville",
  "Bryant", "Maumelle", "Sherwood", "Alexander",
];

const REVIEWS = [
  { text: "Seth and his team are second to none. They are all so incredibly knowledgeable and fair about the work that they perform. They not only got over to help us out immediately in our time of need, they also took the time to explain the repair/replacement process and let us know how the major parts of our plumbing system work with each other and what to look out for. We got an incredible repair job, a newfound knowledge of our plumbing system and exceptional service all in one call to these guys.", name: "Steven Garrett", source: "Google" },
  { text: "I was very pleased with the service I received from AMG plumbing. They were great about informing me about what time they would be arriving and were even able to show up a little early which was great. The service guys listened to all my issues with all 3 toilets and worked on each one to make sure they worked perfectly before they left and had all the parts needed with them.", name: "Barbara DuPriest", source: "Google" },
  { text: "My kitchen sink stopped draining the other night after using the garbage disposal, and AMG was there the very next day and fixed it right up. Jonathan had to climb on the roof to clear the vent, and didn't hesitate to do so. He also triple checked to make sure the problem was fully resolved before leaving. Their staff is always knowledgeable, friendly, and quick to diagnose things and get the job done.", name: "Christie Ison", source: "Google" },
  { text: "Lewis & his colleague did a superb job. They were on time and very professional. Both times we have had AMG to the house, they assessed and took care of the issues quickly. I appreciate the way they are constantly training their colleagues and teaching as they do the work. I highly recommend AMG and they are now my 'go to' plumber.", name: "A Blair", source: "Google" },
  { text: "Grayson and his boss were very friendly, efficient and professional. They came on time and answered all my questions regarding washer and dryer installation. I highly recommend AMG Plumbing.", name: "Doug Menz", source: "Google" },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nunito+Sans:wght@400;600;700&display=swap');

  :root {
    --primary: ${COLORS.primary};
    --accent: ${COLORS.accent};
    --dark: ${COLORS.dark};
    --bg: ${COLORS.bg};
    --text: ${COLORS.text};
    --text-light: ${COLORS.textLight};
    --white: ${COLORS.white};
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Nunito Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
    overflow-x: hidden;
  }

  h1, h2, h3, .heading-font {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
  }

  a { text-decoration: none; color: inherit; }

  /* PASSWORD GATE */
  .gate-overlay {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
    font-family: 'Nunito Sans', sans-serif;
  }
  .gate-card {
    background: var(--white);
    border-radius: 16px;
    padding: 48px 40px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 12px 48px rgba(0,0,0,0.25);
  }
  .gate-logo { height: 50px; margin-bottom: 24px; }
  .gate-subtitle { font-size: 14px; color: var(--text-light); margin-bottom: 28px; }
  .gate-input {
    width: 100%;
    padding: 14px 16px;
    font-size: 18px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    text-align: center;
    letter-spacing: 6px;
    outline: none;
    transition: border-color 0.2s;
    font-family: 'Nunito Sans', sans-serif;
  }
  .gate-input:focus { border-color: var(--primary); }
  .gate-input.error { border-color: #e53e3e; }
  .gate-error { color: #e53e3e; font-size: 13px; margin-top: 8px; }
  .gate-btn {
    width: 100%;
    padding: 14px;
    margin-top: 16px;
    font-size: 16px;
    font-weight: 700;
    color: var(--dark);
    background: var(--accent);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: 'Nunito Sans', sans-serif;
  }
  .gate-btn:hover { opacity: 0.85; }

  /* NAV */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 16px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.35s ease, box-shadow 0.35s ease;
  }
  .nav.scrolled {
    background: var(--primary);
    box-shadow: 0 2px 20px rgba(0,0,0,0.15);
    padding: 12px 40px;
  }
  .nav-logo { height: 40px; filter: brightness(10); }
  .nav-links { display: flex; align-items: center; gap: 32px; }
  .nav-link {
    color: var(--white);
    font-size: 15px;
    font-weight: 600;
    opacity: 0.9;
    transition: opacity 0.2s;
  }
  .nav-link:hover { opacity: 1; }
  .nav-cta {
    background: var(--accent);
    color: var(--dark);
    padding: 10px 22px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }
  .hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--white);
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;
  }
  .mobile-menu {
    position: fixed;
    inset: 0;
    background: var(--dark);
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
  .mobile-menu a {
    color: var(--white);
    font-size: 22px;
    font-weight: 700;
  }
  .mobile-menu-cta {
    background: var(--accent);
    color: var(--dark);
    padding: 16px 40px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 18px;
  }
  .mobile-close {
    position: absolute;
    top: 20px;
    right: 24px;
    background: none;
    border: none;
    color: var(--white);
    font-size: 32px;
    cursor: pointer;
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    padding: 120px 40px 80px;
    background: linear-gradient(135deg, var(--primary) 0%, #0018A0 50%, var(--dark) 100%);
    position: relative;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 48px;
    align-items: center;
    max-width: 100vw;
  }
  .hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to bottom, transparent, var(--bg));
    pointer-events: none;
  }
  .hero-badge {
    display: inline-block;
    background: rgba(187, 197, 240, 0.2);
    color: var(--accent);
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .hero h1 {
    color: var(--white);
    font-size: clamp(32px, 4vw, 62px);
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .hero-sub {
    color: rgba(255,255,255,0.85);
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 24px;
    max-width: 520px;
  }
  .hero-review {
    color: var(--accent);
    font-size: 15px;
    font-style: italic;
    margin-bottom: 32px;
    max-width: 480px;
    line-height: 1.6;
  }
  .hero-stars { color: #FFD700; letter-spacing: 2px; margin-right: 8px; }
  .hero-reviewer { font-style: normal; font-weight: 700; color: var(--white); }
  .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
  .btn-primary {
    background: var(--accent);
    color: var(--dark);
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(187, 197, 240, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Nunito Sans', sans-serif;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(187, 197, 240, 0.4); }
  .btn-secondary {
    background: transparent;
    color: var(--white);
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 700;
    border: 2px solid rgba(255,255,255,0.4);
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    font-family: 'Nunito Sans', sans-serif;
  }
  .btn-secondary:hover { border-color: var(--white); background: rgba(255,255,255,0.08); }

  /* FORM */
  .form-card {
    background: var(--white);
    border-radius: 16px;
    padding: 36px 32px;
    box-shadow: 0 12px 48px rgba(0, 21, 144, 0.2);
    position: relative;
    z-index: 2;
  }
  .form-title {
    font-size: 26px;
    color: var(--text);
    margin-bottom: 6px;
  }
  .form-subtitle {
    font-size: 14px;
    color: var(--text-light);
    margin-bottom: 24px;
  }
  .form-field {
    width: 100%;
    padding: 14px 16px;
    font-size: 15px;
    border: 1.5px solid #e0e4e8;
    border-radius: 8px;
    margin-bottom: 14px;
    outline: none;
    transition: border-color 0.2s;
    font-family: 'Nunito Sans', sans-serif;
    background: var(--white);
    color: var(--text);
  }
  .form-field:focus { border-color: var(--primary); }
  .form-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23666' d='M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; }
  .form-btn {
    width: 100%;
    padding: 16px;
    background: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    font-family: 'Nunito Sans', sans-serif;
  }
  .form-btn:hover { background: var(--dark); }
  .form-confirm {
    text-align: center;
    padding: 20px 0;
  }
  .form-confirm-icon { font-size: 48px; margin-bottom: 12px; }
  .form-confirm h3 { font-size: 24px; color: var(--text); margin-bottom: 8px; }
  .form-confirm p { font-size: 14px; color: var(--text-light); }
  .form-confirm a { color: var(--primary); font-weight: 700; }

  /* TRUST BAR */
  .trust {
    padding: 60px 40px;
    background: var(--white);
  }
  .trust-grid {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    text-align: center;
  }
  .trust-num {
    font-size: clamp(36px, 4vw, 52px);
    color: var(--primary);
    line-height: 1.1;
    margin-bottom: 4px;
  }
  .trust-label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text);
    margin-bottom: 4px;
  }
  .trust-desc {
    font-size: 13px;
    color: var(--text-light);
  }

  /* SECTIONS COMMON */
  .section { padding: 80px 40px; }
  .section-eyebrow {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary);
    margin-bottom: 12px;
    text-align: center;
  }
  .section-title {
    font-size: clamp(28px, 3.5vw, 44px);
    line-height: 1.15;
    text-align: center;
    margin-bottom: 12px;
    color: var(--text);
  }
  .section-subtitle {
    text-align: center;
    font-size: 17px;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto 48px;
    line-height: 1.6;
  }

  /* SERVICES */
  .services-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .service-card {
    background: var(--white);
    border: 1px solid rgba(0, 33, 208, 0.08);
    border-radius: 12px;
    padding: 32px 28px;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    position: relative;
    overflow: hidden;
  }
  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--primary);
    transition: width 0.3s ease;
  }
  .service-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0, 33, 208, 0.1); }
  .service-card:hover::before { width: 100%; }
  .service-emoji { font-size: 32px; margin-bottom: 16px; display: block; }
  .service-card h3 { font-size: 20px; margin-bottom: 10px; color: var(--text); }
  .service-card p { font-size: 15px; color: var(--text-light); line-height: 1.6; }
  .subtle-cta {
    text-align: center;
    padding: 32px 20px 0;
    font-size: 15px;
    color: var(--text-light);
  }
  .subtle-cta a { color: var(--primary); font-weight: 700; }

  /* WHY US */
  .why-us {
    padding: 80px 40px;
    background: var(--primary);
    color: var(--white);
  }
  .why-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }
  .why-us h2 { font-size: clamp(28px, 3.5vw, 40px); margin-bottom: 20px; color: var(--white); }
  .why-text { font-size: 16px; line-height: 1.7; opacity: 0.9; margin-bottom: 28px; }
  .why-list { list-style: none; }
  .why-list li {
    padding: 8px 0;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .why-check { color: var(--accent); font-size: 18px; }
  .badge-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .badge-card {
    background: rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 24px 20px;
    text-align: center;
    transition: background 0.2s;
  }
  .badge-card:hover { background: rgba(255,255,255,0.15); }
  .badge-emoji { font-size: 28px; margin-bottom: 10px; display: block; }
  .badge-title { font-weight: 700; font-size: 15px; margin-bottom: 4px; }
  .badge-desc { font-size: 13px; opacity: 0.8; }

  /* REVIEWS */
  .reviews { padding: 80px 40px; background: var(--bg); }
  .review-card {
    max-width: 700px;
    margin: 0 auto;
    background: var(--white);
    border-radius: 16px;
    padding: 48px 40px;
    box-shadow: 0 4px 24px rgba(0, 33, 208, 0.08);
    text-align: center;
    position: relative;
  }
  .review-quote-mark {
    font-family: 'DM Serif Display', serif;
    font-size: 80px;
    color: var(--accent);
    line-height: 1;
    position: absolute;
    top: 16px;
    left: 32px;
    opacity: 0.6;
  }
  .review-stars { font-size: 22px; color: #FFD700; letter-spacing: 3px; margin-bottom: 20px; }
  .review-text {
    font-size: 17px;
    font-style: italic;
    color: var(--text);
    line-height: 1.7;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }
  .review-name {
    font-weight: 700;
    font-size: 15px;
    color: var(--primary);
  }
  .review-source { font-size: 13px; color: var(--text-light); }
  .review-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 28px;
  }
  .review-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ddd;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    padding: 0;
  }
  .review-dot.active { background: var(--primary); }

  /* AREAS */
  .areas { padding: 80px 40px; background: var(--white); }
  .area-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    max-width: 800px;
    margin: 0 auto;
  }
  .area-tag {
    background: var(--bg);
    border: 1px solid rgba(0, 33, 208, 0.1);
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    transition: all 0.25s ease;
    cursor: default;
  }
  .area-tag:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 33, 208, 0.2);
  }

  /* CTA */
  .cta-section {
    padding: 80px 40px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
    text-align: center;
  }
  .cta-section h2 {
    font-size: clamp(28px, 3.5vw, 44px);
    color: var(--white);
    margin-bottom: 16px;
  }
  .cta-sub {
    font-size: 18px;
    color: rgba(255,255,255,0.85);
    margin-bottom: 32px;
  }
  .cta-btn {
    display: inline-block;
    background: var(--accent);
    color: var(--dark);
    padding: 20px 48px;
    border-radius: 8px;
    font-size: 22px;
    font-weight: 700;
    box-shadow: 0 4px 24px rgba(187, 197, 240, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 36px rgba(187, 197, 240, 0.4); }

  /* FOOTER */
  .footer {
    background: var(--dark);
    color: rgba(255,255,255,0.85);
    padding: 60px 40px 0;
  }
  .footer-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 48px;
    padding-bottom: 40px;
  }
  .footer-logo { height: 36px; filter: brightness(10); margin-bottom: 16px; }
  .footer-desc { font-size: 14px; line-height: 1.7; opacity: 0.8; margin-bottom: 16px; }
  .footer-address { font-size: 14px; line-height: 1.7; opacity: 0.7; }
  .footer-address a { color: var(--accent); font-weight: 600; }
  .footer h4 {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    margin-bottom: 16px;
    color: var(--white);
  }
  .footer-list { list-style: none; }
  .footer-list li { padding: 4px 0; font-size: 14px; opacity: 0.7; }
  .footer-list a:hover { opacity: 1; color: var(--accent); }
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 20px 0;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 13px;
    opacity: 0.6;
  }

  /* FLOATING MOBILE CTA */
  .mobile-cta {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--accent);
    color: var(--dark);
    text-align: center;
    padding: 16px;
    font-size: 17px;
    font-weight: 700;
    z-index: 998;
    box-shadow: 0 -2px 20px rgba(0,0,0,0.15);
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .nav { padding: 14px 20px; }
    .nav.scrolled { padding: 10px 20px; }
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .hero {
      grid-template-columns: 1fr;
      padding: 100px 20px 60px;
      min-height: auto;
    }
    .hero h1 { font-size: clamp(28px, 6vw, 42px); }
    .hero-sub { font-size: 16px; }
    .form-card { padding: 28px 24px; }
    .trust-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
    .section { padding: 60px 20px; }
    .services-grid { grid-template-columns: 1fr; gap: 16px; }
    .why-us { padding: 60px 20px; }
    .why-grid { grid-template-columns: 1fr; gap: 32px; }
    .reviews { padding: 60px 20px; }
    .review-card { padding: 36px 24px; }
    .review-quote-mark { font-size: 60px; top: 8px; left: 20px; }
    .areas { padding: 60px 20px; }
    .cta-section { padding: 60px 20px; }
    .footer { padding: 48px 20px 0; }
    .footer-grid { grid-template-columns: 1fr; gap: 32px; }
    .footer-bottom { justify-content: center; text-align: center; }
    .mobile-cta { display: block; }
    body { padding-bottom: 56px; }
  }
`;

export default function AMGPlumbing() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("amg-plumbing-auth") === "true");
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const reviewTimer = useRef(null);

  // Password gate
  const handlePw = (e) => {
    e.preventDefault();
    if (pw === "2026") {
      sessionStorage.setItem("amg-plumbing-auth", "true");
      setAuthed(true);
    } else {
      setPwError(true);
      setPw("");
    }
  };

  // Scroll listener
  useEffect(() => {
    if (!authed) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [authed]);

  // Review auto-rotate
  useEffect(() => {
    if (!authed) return;
    reviewTimer.current = setInterval(() => {
      setReviewIdx((i) => (i + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(reviewTimer.current);
  }, [authed]);

  // SEO injection
  useEffect(() => {
    if (!authed) return;
    document.title = "Plumber Little Rock AR | AMG Plumbing";

    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = "5-star rated plumber in Little Rock, AR. Leak repair, drain cleaning, water heaters & more. Call (501) 707-5140 for a free quote.";
    document.head.appendChild(metaDesc);

    const geoRegion = document.createElement("meta");
    geoRegion.name = "geo.region";
    geoRegion.content = "US-AR";
    document.head.appendChild(geoRegion);

    const geoPlace = document.createElement("meta");
    geoPlace.name = "geo.placename";
    geoPlace.content = "Little Rock";
    document.head.appendChild(geoPlace);

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      name: "AMG Plumbing",
      image: BIZ.logo,
      telephone: "+15017075140",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11415 Huron Ln #25711",
        addressLocality: "Little Rock",
        addressRegion: "AR",
        postalCode: "72221",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 34.7465, longitude: -92.2896 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "195", bestRating: "5" },
      founder: { "@type": "Person", name: "Seth Grandbois" },
      foundingDate: "2023",
      description: "AMG Plumbing is a family-owned plumbing company in Little Rock, AR, offering leak detection, drain cleaning, water heater installation, and full residential and commercial plumbing services. 5.0 stars with 195+ Google reviews.",
      areaServed: AREAS.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plumbing Services",
        itemListElement: ALL_SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
      },
      memberOf: [
        { "@type": "Organization", name: "Better Business Bureau" },
        { "@type": "Organization", name: "Little Rock Regional Chamber of Commerce" },
      ],
      sameAs: [],
    });
    document.head.appendChild(schema);

    return () => {
      document.head.removeChild(metaDesc);
      document.head.removeChild(geoRegion);
      document.head.removeChild(geoPlace);
      document.head.removeChild(schema);
    };
  }, [authed]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollTo = (id) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Password Gate
  if (!authed) {
    return (
      <>
        <style>{CSS}</style>
        <div className="gate-overlay">
          <div className="gate-card">
            <img src={BIZ.logo} alt="AMG Plumbing" className="gate-logo" />
            <p className="gate-subtitle">Enter password to view your website preview</p>
            <form onSubmit={handlePw}>
              <input
                type="password"
                value={pw}
                onChange={(e) => { setPw(e.target.value); setPwError(false); }}
                placeholder="••••"
                autoFocus
                className={`gate-input ${pwError ? "error" : ""}`}
              />
              {pwError && <p className="gate-error">Incorrect password</p>}
              <button type="submit" className="gate-btn">View Site</button>
            </form>
          </div>
        </div>
      </>
    );
  }

  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - BIZ.established;

  return (
    <>
      <style>{CSS}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <img src={BIZ.logo} alt="AMG Plumbing" className="nav-logo" />
        <div className="nav-links">
          <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>Services</a>
          <a href="#why-us" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo("why-us"); }}>Why Us</a>
          <a href="#reviews" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo("reviews"); }}>Reviews</a>
          <a href="#areas" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo("areas"); }}>Areas</a>
          <a href={BIZ.phoneTel} className="nav-cta">Call {BIZ.phone}</a>
        </div>
        <button className="hamburger" onClick={() => setMobileMenu(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMobileMenu(false)} aria-label="Close menu">×</button>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>Services</a>
          <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollTo("why-us"); }}>Why Us</a>
          <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollTo("reviews"); }}>Reviews</a>
          <a href="#areas" onClick={(e) => { e.preventDefault(); scrollTo("areas"); }}>Areas</a>
          <a href={BIZ.phoneTel} className="mobile-menu-cta">📞 Call {BIZ.phone}</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div>
          <span className="hero-badge">Family Owned Since 2023</span>
          <h1>Little Rock's Trusted Plumbing Experts</h1>
          <p className="hero-sub">
            Led by Seth Grandbois, AMG Plumbing has earned a perfect 5.0-star rating
            with {BIZ.reviewCount}+ reviews in just {yearsInBusiness} years. Honest pricing,
            expert service, and a one-year guarantee on every job.
          </p>
          <div className="hero-review">
            <span className="hero-stars">★★★★★</span>
            "They truly do care about your specific case and do all they can to get you
            back and better than ever as quickly as possible."
            <br />— <span className="hero-reviewer">Steven Garrett</span>
          </div>
          <div className="hero-btns">
            <a href={BIZ.phoneTel} className="btn-primary">📞 Call {BIZ.phone}</a>
            <button className="btn-secondary" onClick={() => scrollTo("services")}>Our Services</button>
          </div>
        </div>

        <div className="form-card">
          {!formSubmitted ? (
            <>
              <h3 className="form-title heading-font">Get a Free Quote</h3>
              <p className="form-subtitle">We'll call you back within the hour</p>
              <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="John Smith" className="form-field" required />
                <input type="tel" placeholder="(501) 555-0123" className="form-field" required />
                <select className="form-field form-select" required defaultValue="">
                  <option value="" disabled>Select a service...</option>
                  {ALL_SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <button type="submit" className="form-btn">Get My Free Quote →</button>
              </form>
            </>
          ) : (
            <div className="form-confirm">
              <div className="form-confirm-icon">✅</div>
              <h3 className="heading-font">We Got It!</h3>
              <p>We'll be in touch shortly.<br />For emergencies, call us directly at <a href={BIZ.phoneTel}>{BIZ.phone}</a></p>
            </div>
          )}
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust">
        <div className="trust-grid">
          <div>
            <div className="trust-num heading-font">{yearsInBusiness}+</div>
            <div className="trust-label">Years in Business</div>
            <div className="trust-desc">Serving Arkansas since {BIZ.established}</div>
          </div>
          <div>
            <div className="trust-num heading-font">5.0</div>
            <div className="trust-label">Google Rating</div>
            <div className="trust-desc">Perfect five-star rating</div>
          </div>
          <div>
            <div className="trust-num heading-font">195+</div>
            <div className="trust-label">Google Reviews</div>
            <div className="trust-desc">From real customers</div>
          </div>
          <div>
            <div className="trust-num heading-font">1 Yr</div>
            <div className="trust-label">Parts & Labor Guarantee</div>
            <div className="trust-desc">Every job, guaranteed</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-eyebrow">What We Do</div>
        <h2 className="section-title">Plumbing Services in Little Rock, AR</h2>
        <p className="section-subtitle">From minor repairs to major replacements, AMG Plumbing handles it all with precision and care.</p>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.name} className="service-card">
              <span className="service-emoji" role="img" aria-label={s.name}>{s.emoji}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="subtle-cta">
          Questions about our services? Call Seth at <a href={BIZ.phoneTel}>{BIZ.phone}</a>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us" id="why-us">
        <div className="why-grid">
          <div>
            <h2>Why Little Rock Trusts Seth Grandbois</h2>
            <p className="why-text">
              When Seth and Jonathan started AMG Plumbing in 2023, they had one goal: build a plumbing
              company that treats every customer like family. That commitment shows — a perfect 5.0 rating
              from 195+ customers who consistently praise their communication, honesty, and quality of work.
              Every technician on the team is trained to explain the problem, walk you through the options,
              and make sure you're comfortable before any work begins. No surprises, no upselling, just
              skilled tradesmen who care about doing the job right.
            </p>
            <ul className="why-list">
              <li><span className="why-check">✓</span> Family Owned & Operated</li>
              <li><span className="why-check">✓</span> BBB Accredited (Since 2025)</li>
              <li><span className="why-check">✓</span> Little Rock Regional Chamber of Commerce Member</li>
              <li><span className="why-check">✓</span> Licensed & Insured</li>
              <li><span className="why-check">✓</span> One-Year Guarantee on Parts & Labor</li>
              <li><span className="why-check">✓</span> Residential & Commercial</li>
            </ul>
          </div>
          <div className="badge-grid">
            <div className="badge-card">
              <span className="badge-emoji" role="img" aria-label="Family owned">👨‍👩‍👦</span>
              <div className="badge-title">Family Owned</div>
              <div className="badge-desc">Built on trust, run with integrity</div>
            </div>
            <div className="badge-card">
              <span className="badge-emoji" role="img" aria-label="Licensed">📋</span>
              <div className="badge-title">Licensed & Insured</div>
              <div className="badge-desc">Fully certified Arkansas plumbers</div>
            </div>
            <div className="badge-card">
              <span className="badge-emoji" role="img" aria-label="Guarantee">🛡️</span>
              <div className="badge-title">1-Year Guarantee</div>
              <div className="badge-desc">Every job backed by our promise</div>
            </div>
            <div className="badge-card">
              <span className="badge-emoji" role="img" aria-label="Residential and commercial">🏠</span>
              <div className="badge-title">Residential & Commercial</div>
              <div className="badge-desc">Homes and businesses across Central AR</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="section-eyebrow">Customer Reviews</div>
        <h2 className="section-title">5.0 Stars on Google</h2>
        <p className="section-subtitle">Don't take our word for it — hear from the families and businesses we serve.</p>
        <div className="review-card">
          <div className="review-quote-mark">"</div>
          <div className="review-stars">★★★★★</div>
          <p className="review-text">"{REVIEWS[reviewIdx].text}"</p>
          <div className="review-name">— {REVIEWS[reviewIdx].name}</div>
          <div className="review-source">{REVIEWS[reviewIdx].source}</div>
          <div className="review-dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                className={`review-dot ${i === reviewIdx ? "active" : ""}`}
                onClick={() => { setReviewIdx(i); clearInterval(reviewTimer.current); reviewTimer.current = setInterval(() => setReviewIdx((j) => (j + 1) % REVIEWS.length), 5000); }}
                aria-label={`View review ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="subtle-cta" style={{ marginTop: 32 }}>
          Ready to see what everyone's talking about? Give us a call at <a href={BIZ.phoneTel}>{BIZ.phone}</a>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="areas" id="areas">
        <div className="section-eyebrow">Where We Serve</div>
        <h2 className="section-title">Plumbing Service Areas in Central Arkansas</h2>
        <p className="section-subtitle">Proudly serving the greater Little Rock metro area and surrounding communities.</p>
        <div className="area-tags">
          {AREAS.map((a) => (
            <span key={a} className="area-tag" title={`Plumber in ${a}, AR`}>📍 {a}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Got a Plumbing Problem? Call Seth.</h2>
        <p className="cta-sub">Free quotes, honest pricing, and a one-year guarantee on every job.</p>
        <a href={BIZ.phoneTel} className="cta-btn">📞 {BIZ.phone}</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <img src={BIZ.logo} alt="AMG Plumbing" className="footer-logo" />
            <p className="footer-desc">
              AMG Plumbing is a family-owned plumbing company serving Little Rock and Central Arkansas.
              Founded by Seth Grandbois, we deliver honest, reliable plumbing services backed by a
              perfect 5.0 Google rating and a one-year guarantee on every job.
            </p>
            <div className="footer-address">
              11415 Huron Ln #25711<br />
              Little Rock, AR 72221<br />
              <a href={BIZ.phoneTel}>{BIZ.phone}</a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="footer-list">
              {ALL_SERVICES.map((s) => (
                <li key={s}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Service Areas</h4>
            <ul className="footer-list">
              {AREAS.map((a) => (
                <li key={a}><a href="#areas" onClick={(e) => { e.preventDefault(); scrollTo("areas"); }}>{a}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} AMG Plumbing. All rights reserved.</span>
          <span>Member: BBB | Little Rock Regional Chamber of Commerce</span>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <a href={BIZ.phoneTel} className="mobile-cta">
        📞 Call Now — {BIZ.phone}
      </a>
    </>
  );
}

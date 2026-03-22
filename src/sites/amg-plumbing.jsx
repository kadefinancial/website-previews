import { useState, useEffect, useRef } from "react";

const B = {
  name: "AMG Plumbing",
  phone: "(501) 707-5140",
  tel: "tel:+15017075140",
  address: "11415 Huron Ln #25711, Little Rock, AR 72221",
  owner: "Seth Grandbois",
  est: 2023,
  rating: 5.0,
  reviews: 195,
  hours: "Mon – Fri  8 AM – 5 PM",
  logo: "https://static.wixstatic.com/media/59aborc_3a1d35cd1cbf4d9db7ab0d35c9727864~mv2.png",
};

const SERVICES = [
  { title: "Water Heater Installation & Repair", desc: "Tank and tankless systems installed, repaired, and maintained by licensed technicians who get it right the first time." },
  { title: "Drain Cleaning & Rooter Service", desc: "Stubborn clogs, slow drains, and full backups cleared with professional-grade equipment and zero guesswork." },
  { title: "Sewer Line Repair & Replacement", desc: "Camera inspections, trenchless repairs, and full replacements — done with precision and minimal disruption to your yard." },
  { title: "Gas Line Repair & Installation", desc: "Safe, code-compliant gas line work for appliances, new construction, and emergency repairs." },
  { title: "Emergency Plumbing Service", desc: "Burst pipes, major leaks, and sewage backups handled fast. We respond same-day to protect your home." },
  { title: "Residential Plumbing Repair", desc: "Toilets, faucets, fixtures, garbage disposals, water lines — every repair handled with care and a one-year guarantee." },
];

const ALL_SERVICES = [
  "Residential Plumbing Repair", "Water Heater Installation & Repair", "Drain Cleaning & Rooter Service",
  "Sewer Line Repair & Replacement", "Toilet Repair & Installation", "Faucet & Fixture Installation",
  "Garbage Disposal Repair", "Gas Line Repair & Installation", "Water Line Repair & Replacement",
  "Pipe Repair & Repiping", "Emergency Plumbing Service", "Commercial Plumbing",
];

const AREAS = ["Little Rock", "North Little Rock", "Maumelle", "Sherwood", "Jacksonville", "Cabot", "Benton", "Bryant", "Conway"];

const REVIEWS = [
  { text: "Seth and his team are second to none. They are all so incredibly knowledgeable and fair about the work that they perform. They not only got over to help us out immediately in our time of need, they also took the time to explain the repair/replacement process and let us know how the major parts of our plumbing system work with each other and what to look out for.", author: "Barbara DuPriest" },
  { text: "Lewis and his colleague did a superb job. They were on time and very professional. Both times we have had AMG to the house, they assessed and took care of the issues quickly. I appreciate the way they are constantly training their colleagues and teaching as they do the work.", author: "Verified Customer" },
  { text: "My kitchen sink stopped draining the other night after using the garbage disposal, and AMG was there the very next day and fixed it right up. Jonathan had to climb on the roof to clear the vent, and didn't hesitate to do so. He also triple checked to make sure the problem was fully resolved before leaving.", author: "Verified Customer" },
  { text: "Grayson and his boss were very friendly, efficient and professional. They came on time and answered all my questions regarding washer and dryer installation. I highly recommend AMG Plumbing.", author: "Verified Customer" },
  { text: "I was very pleased with the service I received from AMG plumbing. They were great about informing me about what time they would be arriving and were even able to show up a little early which was great. The service guys listened to all my issues with all 3 toilets and worked on each one to make sure they worked perfectly before they left.", author: "Verified Customer" },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;font-size:16px}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;color:#334155;background:#fff;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
h1,h2,h3,.serif{font-family:'Playfair Display',Georgia,serif}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}
::selection{background:#1e3a5f;color:#fff}

/* ---- GATE ---- */
.g-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0c1825}
.g-card{background:#fff;border-radius:16px;padding:56px 44px;text-align:center;max-width:420px;width:92%;box-shadow:0 32px 80px rgba(0,0,0,.35)}
.g-logo{font-size:28px;color:#1e293b;margin-bottom:32px}
.wm-a{font-weight:700}
.wm-p{font-weight:400;color:#94a3b8}
.g-label{font-size:13px;color:#94a3b8;letter-spacing:.5px;margin-bottom:28px;line-height:1.5}
.g-input{width:100%;padding:16px;font-size:20px;border:2px solid #e2e8f0;border-radius:10px;text-align:center;letter-spacing:8px;outline:none;transition:border .2s;font-family:'Inter',sans-serif;color:#1e293b}
.g-input:focus{border-color:#1e3a5f}
.g-input.bad{border-color:#ef4444}
.g-err{color:#ef4444;font-size:12px;margin-top:8px;font-weight:500}
.g-btn{width:100%;padding:16px;margin-top:20px;font-size:15px;font-weight:600;letter-spacing:.3px;background:#1e3a5f;color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:'Inter',sans-serif;transition:background .2s}
.g-btn:hover{background:#162d4a}

/* ---- NAV ---- */
.n{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:20px clamp(24px,5vw,64px);transition:all .4s cubic-bezier(.4,0,.2,1)}
.n.solid{background:rgba(255,255,255,.97);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 1px 0 rgba(0,0,0,.06);padding-top:14px;padding-bottom:14px}
.n-logo{font-size:22px;color:#fff;white-space:nowrap;transition:color .3s}
.n.solid .n-logo{color:#1e293b}
.n.solid .n-logo .wm-p{color:#94a3b8}
.n-right{display:flex;align-items:center;gap:36px}
.n-link{font-size:14px;font-weight:500;color:#fff;opacity:.85;transition:opacity .2s;letter-spacing:.2px}
.n-link:hover{opacity:1}
.n.solid .n-link{color:#334155}
.n-cta{font-size:14px;font-weight:600;color:#fff;background:#1e3a5f;padding:11px 24px;border-radius:8px;letter-spacing:.2px;transition:all .2s}
.n-cta:hover{background:#162d4a;transform:translateY(-1px);box-shadow:0 4px 12px rgba(30,58,95,.3)}
.n.solid .n-cta{background:#1e3a5f;color:#fff}
.n-ham{display:none;background:none;border:none;cursor:pointer;padding:8px;flex-direction:column;gap:5px}
.n-ham i{display:block;width:22px;height:1.5px;background:#fff;border-radius:1px;transition:background .3s}
.n.solid .n-ham i{background:#1e293b}
.m-ov{position:fixed;inset:0;background:#0c1825;z-index:101;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px}
.m-ov a{color:#fff;font-size:18px;font-weight:500;letter-spacing:.3px}
.m-ov-cta{background:#1e3a5f;color:#fff;padding:16px 44px;border-radius:10px;font-weight:600;font-size:16px;margin-top:12px;letter-spacing:.3px}
.m-x{position:absolute;top:20px;right:24px;background:none;border:none;color:rgba(255,255,255,.7);font-size:28px;cursor:pointer}

/* ---- HERO ---- */
.hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;background:#0c1825;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-40%;right:-20%;width:80%;height:120%;background:radial-gradient(ellipse at center,rgba(30,58,95,.4) 0%,transparent 70%);pointer-events:none}
.hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)}
.h-left{display:flex;flex-direction:column;justify-content:center;padding:140px clamp(32px,6vw,80px) 100px clamp(32px,6vw,80px);position:relative;z-index:1}
.h-tag{display:inline-flex;align-items:center;gap:12px;margin-bottom:28px}
.h-tag-line{width:32px;height:1px;background:rgba(255,255,255,.3);flex-shrink:0}
.h-tag-text{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.55)}
.h-h1{font-size:clamp(38px,4.8vw,68px);line-height:1.05;color:#fff;font-weight:400;margin-bottom:24px}
.h-h1 em{font-style:italic;color:rgba(255,255,255,.5)}
.h-sub{font-size:17px;line-height:1.75;color:rgba(255,255,255,.6);max-width:480px;margin-bottom:36px;font-weight:300}
.h-quote{border-left:2px solid rgba(255,255,255,.12);padding-left:20px;margin-bottom:40px;max-width:460px}
.h-stars{color:#d4a03c;font-size:13px;letter-spacing:1px;margin-bottom:6px}
.h-qt{font-size:14px;line-height:1.7;color:rgba(255,255,255,.5);font-style:italic}
.h-qn{font-style:normal;font-weight:600;color:rgba(255,255,255,.7)}
.h-btns{display:flex;gap:14px;flex-wrap:wrap}
.h-btn1{display:inline-flex;align-items:center;gap:8px;background:#fff;color:#0c1825;padding:16px 32px;border-radius:8px;font-size:15px;font-weight:600;letter-spacing:.2px;transition:all .25s;border:none;cursor:pointer;font-family:'Inter',sans-serif}
.h-btn1:hover{background:#f1f5f9;transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.2)}
.h-btn2{display:inline-flex;align-items:center;background:transparent;color:rgba(255,255,255,.7);padding:16px 28px;border-radius:8px;font-size:15px;font-weight:500;letter-spacing:.2px;border:1px solid rgba(255,255,255,.15);cursor:pointer;transition:all .25s;font-family:'Inter',sans-serif}
.h-btn2:hover{color:#fff;border-color:rgba(255,255,255,.35);background:rgba(255,255,255,.04)}
.h-right{display:flex;align-items:center;justify-content:center;padding:140px 40px 100px;position:relative;z-index:1}
.f-card{background:#fff;border-radius:16px;padding:40px 36px;width:100%;max-width:420px;box-shadow:0 24px 64px rgba(0,0,0,.3)}
.f-title{font-size:24px;margin-bottom:6px;color:#1e293b;font-weight:500}
.f-sub{font-size:13px;color:#94a3b8;margin-bottom:28px}
.f-field{width:100%;padding:14px 16px;font-size:14px;border:1.5px solid #e2e8f0;border-radius:8px;margin-bottom:12px;outline:none;transition:border .2s;font-family:'Inter',sans-serif;color:#1e293b;background:#fff}
.f-field:focus{border-color:#1e3a5f}
.f-sel{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath fill='%2394a3b8' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center;padding-right:36px}
.f-btn{width:100%;padding:16px;background:#1e3a5f;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;transition:background .2s;letter-spacing:.2px;margin-top:4px}
.f-btn:hover{background:#162d4a}
.f-done{text-align:center;padding:28px 0}
.f-done-check{width:48px;height:48px;border-radius:50%;background:#ecfdf5;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:22px}
.f-done h3{font-size:22px;color:#1e293b;margin-bottom:8px;font-weight:500}
.f-done p{font-size:14px;color:#94a3b8;line-height:1.6}
.f-done a{color:#1e3a5f;font-weight:600}

/* ---- TRUST ---- */
.trust{padding:72px clamp(24px,5vw,64px);background:#fff;border-bottom:1px solid #f1f5f9}
.trust-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:40px;text-align:center}
.t-num{font-family:'Playfair Display',serif;font-size:clamp(32px,3.5vw,48px);color:#1e293b;line-height:1.1;margin-bottom:6px}
.t-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:#94a3b8;margin-bottom:4px}
.t-desc{font-size:13px;color:#cbd5e1}

/* ---- SECTIONS ---- */
.sec{padding:100px clamp(24px,5vw,64px)}
.sec-inner{max-width:1200px;margin:0 auto}
.sec-hdr{margin-bottom:56px}
.sec-hdr.center{text-align:center}
.sec-tag{font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#94a3b8;margin-bottom:14px}
.sec-hdr h2{font-size:clamp(28px,3.5vw,44px);line-height:1.15;color:#1e293b;margin-bottom:14px;font-weight:400}
.sec-hdr p{font-size:16px;color:#64748b;max-width:560px;line-height:1.7}
.sec-hdr.center p{margin:0 auto}

/* ---- SERVICES ---- */
.svc-sec{background:#fafbfc}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.svc{background:#fff;border:1px solid #f1f5f9;border-radius:12px;padding:36px 32px;transition:all .3s cubic-bezier(.4,0,.2,1);position:relative}
.svc::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:#1e3a5f;transform:scaleX(0);transform-origin:left;transition:transform .3s ease}
.svc:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(0,0,0,.06)}
.svc:hover::after{transform:scaleX(1)}
.svc-num{font-size:12px;font-weight:600;color:#cbd5e1;letter-spacing:1px;margin-bottom:20px;display:block}
.svc h3{font-size:19px;color:#1e293b;margin-bottom:10px;font-weight:600;font-family:'Inter',sans-serif;line-height:1.3}
.svc p{font-size:14px;line-height:1.7;color:#64748b}
.s-note{text-align:center;margin-top:48px;font-size:14px;color:#94a3b8}
.s-note a{color:#1e3a5f;font-weight:600;border-bottom:1px solid #cbd5e1;padding-bottom:1px;transition:border-color .2s}
.s-note a:hover{border-color:#1e3a5f}

/* ---- WHY ---- */
.why-sec{background:#0c1825;color:#fff}
.why-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
.why-sec .sec-tag{color:rgba(255,255,255,.35)}
.why-sec h2{color:#fff}
.why-p{font-size:15px;line-height:1.85;color:rgba(255,255,255,.55);margin-bottom:20px;font-weight:300}
.why-list{list-style:none;margin-top:32px;display:flex;flex-direction:column;gap:0}
.why-li{padding:18px 0;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:16px;font-size:15px;font-weight:500;color:rgba(255,255,255,.8)}
.why-li:last-child{border-bottom:none}
.why-li-dot{width:6px;height:6px;border-radius:50%;background:#d4a03c;flex-shrink:0}
.why-right{padding-top:20px}
.why-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:32px;margin-bottom:16px}
.why-card-num{font-family:'Playfair Display',serif;font-size:36px;color:#d4a03c;margin-bottom:8px}
.why-card-label{font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:4px}
.why-card-desc{font-size:13px;color:rgba(255,255,255,.45);line-height:1.5}

/* ---- REVIEWS ---- */
.rev-sec{background:#fff}
.rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1200px;margin:0 auto}
.rv{background:#fafbfc;border:1px solid #f1f5f9;border-radius:12px;padding:36px 32px;display:flex;flex-direction:column;transition:all .3s}
.rv:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(0,0,0,.06)}
.rv.mhide{display:none}
.rv-stars{color:#d4a03c;font-size:12px;letter-spacing:2px;margin-bottom:16px}
.rv-text{font-size:14px;line-height:1.8;color:#475569;flex:1;margin-bottom:20px}
.rv-author{font-size:13px;font-weight:600;color:#1e293b}
.rv-src{font-size:11px;color:#94a3b8;margin-top:2px}
.rv-dots{display:none;justify-content:center;gap:8px;margin-top:32px}
.rv-dot{width:8px;height:8px;border-radius:50%;border:none;cursor:pointer;padding:0;transition:all .2s}
.rv-dot.on{background:#1e3a5f;transform:scale(1.2)}
.rv-dot.off{background:#e2e8f0}
.rv-note{text-align:center;margin-top:40px;font-size:14px;color:#94a3b8}
.rv-note a{color:#1e3a5f;font-weight:600;border-bottom:1px solid #cbd5e1;padding-bottom:1px}

/* ---- AREAS ---- */
.area-sec{background:#fafbfc}
.area-wrap{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;max-width:800px;margin:0 auto}
.area-pill{background:#fff;border:1px solid #f1f5f9;padding:10px 22px;border-radius:100px;font-size:14px;font-weight:500;color:#475569;transition:all .25s;cursor:default}
.area-pill:hover{background:#0c1825;color:#fff;transform:translateY(-2px);box-shadow:0 4px 16px rgba(12,24,37,.15)}

/* ---- CTA ---- */
.cta-sec{background:#0c1825;text-align:center;position:relative;overflow:hidden}
.cta-sec::before{content:'';position:absolute;top:50%;left:50%;width:600px;height:600px;background:radial-gradient(circle,rgba(30,58,95,.3),transparent 70%);transform:translate(-50%,-50%);pointer-events:none}
.cta-inner{position:relative;z-index:1}
.cta-sec h2{color:#fff;font-size:clamp(28px,3.5vw,44px);margin-bottom:14px}
.cta-sub{color:rgba(255,255,255,.5);font-size:16px;margin-bottom:40px;font-weight:300}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.cta-btn1{display:inline-flex;align-items:center;gap:8px;background:#fff;color:#0c1825;padding:18px 40px;border-radius:8px;font-size:16px;font-weight:600;transition:all .25s;letter-spacing:.2px}
.cta-btn1:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.2)}
.cta-btn2{display:inline-flex;align-items:center;background:transparent;color:rgba(255,255,255,.6);padding:18px 32px;border-radius:8px;font-size:16px;font-weight:500;border:1px solid rgba(255,255,255,.12);transition:all .25s;cursor:pointer;font-family:'Inter',sans-serif}
.cta-btn2:hover{color:#fff;border-color:rgba(255,255,255,.3)}

/* ---- FOOTER ---- */
.ft{background:#080f18;color:rgba(255,255,255,.5);padding:72px clamp(24px,5vw,64px) 0}
.ft-inner{max-width:1200px;margin:0 auto}
.ft-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:48px;padding-bottom:48px}
.ft-logo{font-size:22px;color:#fff;margin-bottom:18px}
.ft-logo .wm-p{color:rgba(255,255,255,.4)}
.ft-desc{font-size:14px;line-height:1.7;margin-bottom:18px}
.ft-phone a{color:#d4a03c;font-weight:500}
.ft h4{font-family:'Playfair Display',serif;font-size:16px;color:rgba(255,255,255,.85);margin-bottom:16px;font-weight:400}
.ft-list{list-style:none}
.ft-list li{padding:3px 0}
.ft-list a{font-size:13px;color:rgba(255,255,255,.4);transition:color .2s}
.ft-list a:hover{color:rgba(255,255,255,.8)}
.ft-btm{border-top:1px solid rgba(255,255,255,.06);padding:20px 0;text-align:center;font-size:12px;color:rgba(255,255,255,.25)}

/* ---- MOBILE CTA ---- */
.mob-bar{display:none;position:fixed;bottom:0;left:0;right:0;z-index:98;background:#1e3a5f;color:#fff;text-align:center;padding:16px;font-size:15px;font-weight:600;letter-spacing:.3px;box-shadow:0 -4px 20px rgba(0,0,0,.2)}

/* ---- RESPONSIVE ---- */
@media(max-width:900px){
  .n{padding:14px 20px}.n.solid{padding:10px 20px}
  .n-right>.n-link,.n-right>.n-cta{display:none}
  .n-ham{display:flex}
  .hero{grid-template-columns:1fr;min-height:auto}
  .h-left{padding:110px 24px 48px}
  .h-right{padding:0 24px 64px}
  .f-card{max-width:100%}
  .trust{padding:56px 20px}
  .trust-inner{grid-template-columns:1fr 1fr;gap:28px}
  .sec{padding:64px 20px}
  .svc-grid{grid-template-columns:1fr}
  .why-inner{grid-template-columns:1fr;gap:40px}
  .rev-grid{grid-template-columns:1fr}
  .rev-grid .rv.mhide{display:none}
  .rv-dots{display:flex}
  .ft{padding:48px 20px 0}
  .ft-grid{grid-template-columns:1fr;gap:32px}
  .ft-btm{padding-bottom:68px}
  .mob-bar{display:block}
}
`;

export default function AMGPlumbing() {
  const [auth, setAuth] = useState(() => sessionStorage.getItem("amg-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [ri, setRi] = useState(0);
  const rt = useRef(null);

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "2026") { sessionStorage.setItem("amg-auth", "1"); setAuth(true); }
    else { setPwBad(true); setPw(""); }
  };

  useEffect(() => {
    if (!auth) return;
    const fn = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [auth]);

  useEffect(() => {
    if (!auth) return;
    rt.current = setInterval(() => setRi((i) => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(rt.current);
  }, [auth]);

  const resetR = () => { clearInterval(rt.current); rt.current = setInterval(() => setRi((i) => (i + 1) % REVIEWS.length), 6000); };

  useEffect(() => {
    if (!auth) return;
    document.title = "Plumber Little Rock AR | AMG Plumbing";
    const els = [];
    const add = (tag, a) => { const el = document.createElement(tag); Object.entries(a).forEach(([k, v]) => { if (k === "textContent") el.textContent = v; else el.setAttribute(k, v); }); document.head.appendChild(el); els.push(el); };
    add("meta", { name: "description", content: "5-star plumber in Little Rock, AR. Drain cleaning, water heaters, emergency service & more. Call (501) 707-5140." });
    add("meta", { name: "geo.region", content: "US-AR" });
    add("meta", { name: "geo.placename", content: "Little Rock" });
    add("script", { type: "application/ld+json", textContent: JSON.stringify({
      "@context": "https://schema.org", "@type": "Plumber",
      name: "AMG Plumbing", image: B.logo, telephone: "+15017075140",
      address: { "@type": "PostalAddress", streetAddress: "11415 Huron Ln #25711", addressLocality: "Little Rock", addressRegion: "AR", postalCode: "72221", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.7465, longitude: -92.2896 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "195", bestRating: "5" },
      founder: { "@type": "Person", name: "Seth Grandbois" }, foundingDate: "2023",
      description: "AMG Plumbing is a family-owned plumbing company in Little Rock, AR.",
      areaServed: AREAS.map((a) => ({ "@type": "City", name: a })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Plumbing Services", itemListElement: ALL_SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })) },
      memberOf: [{ "@type": "Organization", name: "Better Business Bureau" }, { "@type": "Organization", name: "Little Rock Regional Chamber of Commerce" }],
      sameAs: [],
    })});
    return () => els.forEach((el) => { try { document.head.removeChild(el); } catch(e) {} });
  }, [auth]);

  const go = (id) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const yr = new Date().getFullYear();
  const yrs = yr - B.est;

  if (!auth) {
    return (<>
      <style>{CSS}</style>
      <div className="g-wrap">
        <div className="g-card">
          <div className="g-logo serif"><span className="wm-a">AMG</span> <span className="wm-p">Plumbing</span></div>
          <p className="g-label">Enter password to view your website preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setPwBad(false); }} placeholder="••••" autoFocus className={`g-input${pwBad ? " bad" : ""}`} />
            {pwBad && <p className="g-err">Incorrect password</p>}
            <button type="submit" className="g-btn">View Website</button>
          </form>
        </div>
      </div>
    </>);
  }

  return (<>
    <style>{CSS}</style>

    {/* NAV */}
    <nav className={`n${solid ? " solid" : ""}`}>
      <div className="n-logo serif"><span className="wm-a">AMG</span> <span className="wm-p">Plumbing</span></div>
      <div className="n-right">
        <a href="#services" className="n-link" onClick={(e) => { e.preventDefault(); go("services"); }}>Services</a>
        <a href="#about" className="n-link" onClick={(e) => { e.preventDefault(); go("about"); }}>About</a>
        <a href="#reviews" className="n-link" onClick={(e) => { e.preventDefault(); go("reviews"); }}>Reviews</a>
        <a href="#areas" className="n-link" onClick={(e) => { e.preventDefault(); go("areas"); }}>Areas</a>
        <a href={B.tel} className="n-cta">{B.phone}</a>
        <button className="n-ham" onClick={() => setMenu(true)} aria-label="Menu"><i /><i /><i /></button>
      </div>
    </nav>

    {menu && (
      <div className="m-ov">
        <button className="m-x" onClick={() => setMenu(false)} aria-label="Close">&times;</button>
        <a href="#services" onClick={(e) => { e.preventDefault(); go("services"); }}>Services</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); go("about"); }}>About</a>
        <a href="#reviews" onClick={(e) => { e.preventDefault(); go("reviews"); }}>Reviews</a>
        <a href="#areas" onClick={(e) => { e.preventDefault(); go("areas"); }}>Areas</a>
        <a href={B.tel} className="m-ov-cta">Call {B.phone}</a>
      </div>
    )}

    {/* HERO */}
    <section className="hero">
      <div className="h-left">
        <div className="h-tag">
          <span className="h-tag-line" /><span className="h-tag-text">Family Owned &middot; Est. 2023</span>
        </div>
        <h1 className="h-h1">Trusted Plumbing<br />in Little Rock, <em>AR</em></h1>
        <p className="h-sub">
          {B.reviews}+ five-star reviews. A one-year guarantee on every job.
          Seth Grandbois and his team deliver plumbing you can count on.
        </p>
        <div className="h-quote">
          <div className="h-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
          <p className="h-qt">
            "They truly do care about your specific case and do all they can to get you back and better than ever."
            <br />— <span className="h-qn">Barbara DuPriest</span>
          </p>
        </div>
        <div className="h-btns">
          <a href={B.tel} className="h-btn1">Call {B.phone}</a>
          <button className="h-btn2" onClick={() => go("services")}>View Services</button>
        </div>
      </div>
      <div className="h-right">
        <div className="f-card">
          {!sent ? (<>
            <h3 className="f-title serif">Request a Quote</h3>
            <p className="f-sub">We respond within one business hour.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input type="text" placeholder="Full name" className="f-field" required />
              <input type="tel" placeholder="Phone number" className="f-field" required />
              <select className="f-field f-sel" required defaultValue="">
                <option value="" disabled>What do you need help with?</option>
                {ALL_SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <button type="submit" className="f-btn">Submit Request</button>
            </form>
          </>) : (
            <div className="f-done">
              <div className="f-done-check">&#10003;</div>
              <h3 className="serif">Request Received</h3>
              <p>We'll be in touch shortly.<br />Need immediate help? Call <a href={B.tel}>{B.phone}</a></p>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* TRUST */}
    <section className="trust">
      <div className="trust-inner">
        <div>
          <div className="t-num">{yrs}+</div>
          <div className="t-label">Years in Business</div>
          <div className="t-desc">Serving Central Arkansas</div>
        </div>
        <div>
          <div className="t-num">5.0</div>
          <div className="t-label">Google Rating</div>
          <div className="t-desc">Perfect five stars</div>
        </div>
        <div>
          <div className="t-num">195+</div>
          <div className="t-label">Reviews</div>
          <div className="t-desc">Verified customers</div>
        </div>
        <div>
          <div className="t-num">1 Yr</div>
          <div className="t-label">Guarantee</div>
          <div className="t-desc">Parts and labor</div>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="sec svc-sec" id="services">
      <div className="sec-inner">
        <div className="sec-hdr">
          <div className="sec-tag">Services</div>
          <h2>What We Do</h2>
          <p>Full-service residential and commercial plumbing for Little Rock and surrounding areas.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="svc">
              <span className="svc-num">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="s-note">
          Have a question? Call Seth directly at <a href={B.tel}>{B.phone}</a>
        </div>
      </div>
    </section>

    {/* WHY US */}
    <section className="sec why-sec" id="about">
      <div className="sec-inner">
        <div className="why-inner">
          <div>
            <div className="sec-tag">About AMG</div>
            <h2>Why Little Rock Trusts Seth Grandbois</h2>
            <p className="why-p">
              When Seth and Angel started AMG Plumbing in 2023, the plan was simple: show up on time,
              do honest work, and treat every home like their own. That approach earned them a perfect
              5.0-star rating from 195 customers in under three years.
            </p>
            <p className="why-p">
              Every technician on the team — Jonathan, Lewis, Grayson — is trained to explain the
              problem, present the options, and let you decide. No pressure, no upselling, no surprises
              on the invoice. Just skilled, licensed plumbers who stand behind their work with a
              one-year guarantee.
            </p>
            <ul className="why-list">
              <li className="why-li"><span className="why-li-dot" /> Family Owned and Operated</li>
              <li className="why-li"><span className="why-li-dot" /> BBB Accredited Since 2023</li>
              <li className="why-li"><span className="why-li-dot" /> Little Rock Chamber of Commerce Member</li>
              <li className="why-li"><span className="why-li-dot" /> Licensed, Bonded, and Insured</li>
              <li className="why-li"><span className="why-li-dot" /> One-Year Parts and Labor Guarantee</li>
            </ul>
          </div>
          <div className="why-right">
            <div className="why-card">
              <div className="why-card-num">5.0</div>
              <div className="why-card-label">Google Rating</div>
              <div className="why-card-desc">Perfect score across 195+ verified reviews</div>
            </div>
            <div className="why-card">
              <div className="why-card-num">2023</div>
              <div className="why-card-label">Founded</div>
              <div className="why-card-desc">Built from the ground up in Little Rock</div>
            </div>
            <div className="why-card">
              <div className="why-card-num">100%</div>
              <div className="why-card-label">Satisfaction</div>
              <div className="why-card-desc">Backed by a one-year guarantee on every job</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* REVIEWS */}
    <section className="sec rev-sec" id="reviews">
      <div className="sec-inner">
        <div className="sec-hdr center">
          <div className="sec-tag">Reviews</div>
          <h2>What Our Customers Say</h2>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className={`rv${i >= 3 ? " mhide" : ""}`}>
              <div className="rv-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
              <p className="rv-text">{r.text}</p>
              <div className="rv-author">{r.author}</div>
              <div className="rv-src">Google Review</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:900px){.rev-grid .rv{display:none}.rev-grid .rv:nth-child(${ri + 1}){display:flex}}`}</style>
        <div className="rv-dots">
          {REVIEWS.map((_, i) => (
            <button key={i} className={`rv-dot ${i === ri ? "on" : "off"}`}
              onClick={() => { setRi(i); resetR(); }} aria-label={`Review ${i + 1}`} />
          ))}
        </div>
        <div className="rv-note">
          Join 195+ happy customers. Call <a href={B.tel}>{B.phone}</a>
        </div>
      </div>
    </section>

    {/* AREAS */}
    <section className="sec area-sec" id="areas">
      <div className="sec-inner">
        <div className="sec-hdr center">
          <div className="sec-tag">Service Areas</div>
          <h2>Serving Little Rock and Beyond</h2>
        </div>
        <div className="area-wrap">
          {AREAS.map((a) => (
            <span key={a} className="area-pill" title={`Plumber in ${a}, AR`}>{a}</span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="sec cta-sec">
      <div className="sec-inner cta-inner">
        <h2>Ready to get it fixed?</h2>
        <p className="cta-sub">Same-day service. Honest pricing. A team that picks up the phone.</p>
        <div className="cta-btns">
          <a href={B.tel} className="cta-btn1">Call {B.phone}</a>
          <button className="cta-btn2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Request a Quote</button>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-grid">
          <div>
            <div className="ft-logo serif"><span className="wm-a">AMG</span> <span className="wm-p">Plumbing</span></div>
            <p className="ft-desc">
              Family-owned plumbing company serving Little Rock and Central Arkansas.
              Honest work, fair pricing, and a one-year guarantee on every job.
            </p>
            <div className="ft-phone"><a href={B.tel}>{B.phone}</a></div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="ft-list">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); go("services"); }}>Services</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); go("about"); }}>About</a></li>
              <li><a href="#reviews" onClick={(e) => { e.preventDefault(); go("reviews"); }}>Reviews</a></li>
              <li><a href="#areas" onClick={(e) => { e.preventDefault(); go("areas"); }}>Areas</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Get a Quote</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="ft-list">
              <li>11415 Huron Ln #25711</li>
              <li>Little Rock, AR 72221</li>
              <li><a href={B.tel} style={{ color: "#d4a03c" }}>{B.phone}</a></li>
              <li>Mon – Fri, 8AM – 5PM</li>
            </ul>
          </div>
        </div>
        <div className="ft-btm">&copy; {yr} AMG Plumbing. All rights reserved.</div>
      </div>
    </footer>

    <a href={B.tel} className="mob-bar">Call AMG Plumbing &mdash; {B.phone}</a>
  </>);
}

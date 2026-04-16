// Layout: B | Industry: Plumber | City: North Little Rock
import { useState, useEffect } from "react";

const PHONE = "(501) 392-6261";
const TEL = "tel:+15013926261";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  droplets: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
  pipe: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M7 14V10a3 3 0 013-3h4"/><path d="M17 10v4a3 3 0 01-3 3h-4"/></svg>,
  home: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  zap: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  replace: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0115-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 01-15 6.7L3 16"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#2E7D52" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrowRight: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" opacity="0.12"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>,
};

const Stars = () => <span style={{ display:"inline-flex", gap:2 }}>{[...Array(5)].map((_,i) => <span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Residential Plumbing Repair", desc: "From leaky faucets to running toilets, Oliver diagnoses the real problem and fixes it right the first time. No upselling, no surprises — just honest, reliable repair work at a fair price.", icon: Icons.wrench },
  { name: "Drain Cleaning", desc: "Slow drains and stubborn clogs cleared quickly and completely. Oliver uses professional-grade equipment to restore full flow and keep your plumbing running smoothly.", icon: Icons.droplets },
  { name: "Sewer Cleaning & Line Replacement", desc: "Complete sewer line services from cleaning to full replacement. Oliver handles crawl spaces, underground lines, and everything in between — competitively priced and done right.", icon: Icons.pipe },
  { name: "Pipe Replacement", desc: "Old, corroded, or damaged pipes replaced with quality materials and expert craftsmanship. Oliver gets under your house and takes care of the work other plumbers avoid.", icon: Icons.replace },
  { name: "Emergency Plumbing Service", desc: "When a plumbing emergency strikes, Oliver responds fast. Clogged drains, burst pipes, or unexpected leaks — call and he'll be there to get it under control.", icon: Icons.zap },
  { name: "Plumbing Replacements", desc: "Full fixture and system replacements for aging plumbing throughout your home. Oliver handles the entire job from start to finish with the same care and honest pricing on every call.", icon: Icons.home },
];

const allServiceNames = ["Residential Plumbing Repair","Drain Cleaning","Sewer Cleaning & Line Replacement","Pipe Replacement","Emergency Plumbing Service","Plumbing Replacements"];

const areas = ["North Little Rock","Sherwood","Little Rock","Jacksonville","Cabot","Maumelle","Conway","Bryant","Benton","Central Arkansas"];

const navLinks = [
  { label:"Services", id:"services" },
  { label:"About", id:"about" },
  { label:"Reviews", id:"reviews" },
  { label:"Areas", id:"areas" },
];

const reviews = [
  { name:"Johnathan Binyon", text:"I got tired of paying the huge companies to send a 21 year old out who could barely open the gate. So I did some searching and found Oliver's. He showed up on time, fixed the issue and charged a very, very reasonable price. I'm already working on a list of a few other things I want him to come back for." },
  { name:"Kevin Paletskih", text:"Oliver was prompt in responses, on time, able to tackle several small projects around the house and with the fair price. He told me what actually needed to be fixed and what was okay. He is honest and hardworking guy." },
  { name:"Keri Steven Russell", text:"Oliver has worked on a couple of jobs for me from replacing sewer lines in a crawl space to the emergency call on a clogged drain. He is reliable, competitively priced and most important he cares about the work." },
  { name:"Brent Combs", text:"Oliver replaced some old drain pipes under my house he is very very good nice honest only plumber I want to use you will be glad you called him, thank you Oliver." },
];

export default function OliversHomePlumbing() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("ohp-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({ name:"", phone:"", service:"" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "roof") { sessionStorage.setItem("ohp-auth","1"); setAuthed(true); }
    else { setPwBad(true); setPw(""); }
  };

  useEffect(() => {
    if (!authed) return;
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [authed]);

  useEffect(() => {
    if (!authed) return;
    document.title = "Plumber North Little Rock AR | Oliver's Home Plumbing";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k,v]) => { if (k==="textContent") el.textContent=v; else el.setAttribute(k,v); }); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"Trusted plumber in North Little Rock, AR. Perfect 5.0 Google rating. Honest pricing, on-time service. Call (501) 392-6261."});
    add("meta",{name:"geo.region",content:"US-AR"});
    add("meta",{name:"geo.placename",content:"North Little Rock"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"Plumber",
      name:"Oliver's Home Plumbing",telephone:"+15013926261",
      email:"oliverramirez501@yahoo.com",
      address:{"@type":"PostalAddress",streetAddress:"1400 Parkway Dr",addressLocality:"North Little Rock",addressRegion:"AR",postalCode:"72118",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:34.7695,longitude:-92.2671},
      openingHoursSpecification:[
        {"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"08:00",closes:"17:00"},
      ],
      aggregateRating:{"@type":"AggregateRating",ratingValue:"5.0",reviewCount:"4",bestRating:"5"},
      founder:{"@type":"Person",name:"Oliver Ramirez"},
      description:"Residential plumbing repair, drain cleaning, sewer line replacement, and emergency plumbing service in North Little Rock and Central Arkansas. Perfect 5.0 Google rating.",
      areaServed:areas.map(a=>({"@type":"City",name:a})),
      hasOfferCatalog:{"@type":"OfferCatalog",name:"Plumbing Services",itemListElement:allServiceNames.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:s}}))},
      memberOf:[],
      sameAs:[],
    })});
    return () => els.forEach(el => { try{document.head.removeChild(el)}catch(e){} });
  }, [authed]);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); };
  const yr = new Date().getFullYear();

  // --- PASSWORD GATE ---
  if (!authed) {
    return (<>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}
      `}</style>
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#1C2B41"}}>
        <div style={{background:"#fff",borderRadius:16,padding:"56px 44px",textAlign:"center",maxWidth:420,width:"92%",boxShadow:"0 32px 80px rgba(0,0,0,.35)"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,marginBottom:8}}>
            <span style={{fontWeight:700,color:"#1C2B41"}}>Oliver's Home</span> <span style={{color:"#2E7D52"}}>Plumbing</span>
          </div>
          <p style={{fontSize:13,color:"#8A8A9A",letterSpacing:1,marginBottom:28,textTransform:"uppercase"}}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e=>{setPw(e.target.value);setPwBad(false)}} placeholder="••••" autoFocus style={{width:"100%",padding:16,fontSize:20,border:`2px solid ${pwBad?"#ef4444":"#e2e8f0"}`,borderRadius:8,textAlign:"center",letterSpacing:6,outline:"none",fontFamily:"'DM Sans',sans-serif",color:"#1e293b"}} />
            {pwBad && <p style={{color:"#ef4444",fontSize:12,marginTop:8,fontWeight:500}}>Incorrect password</p>}
            <button type="submit" style={{width:"100%",padding:16,marginTop:20,fontSize:15,fontWeight:700,letterSpacing:.3,background:"#1C2B41",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  // --- MAIN SITE (Layout B: Centered Hero) ---
  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
      :root{--primary:#1C2B41;--accent:#2E7D52;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
      *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
      body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--cream);-webkit-font-smoothing:antialiased}
      h1,h2,h3,.serif{font-family:'Playfair Display',serif;font-weight:500}
      a{text-decoration:none;color:inherit}
      .gold-line{width:48px;height:2px;background:var(--accent)}
      @media(max-width:900px){
        .desktop-only{display:none!important}
        .mobile-only{display:flex!important}
        .hero-text{max-width:100%!important;padding:0 0 40px!important}
        .form-card-wrap{max-width:100%!important}
        .svc-grid{grid-template-columns:1fr!important}
        .why-creds-row{flex-direction:column!important;gap:12px!important}
        .rev-grid{grid-template-columns:1fr!important}
        .footer-grid{grid-template-columns:1fr!important}
        .trust-row{grid-template-columns:1fr 1fr!important}
      }
      @media(min-width:901px){.mobile-only{display:none!important}}
    `}</style>

    {/* NAV */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:scrolled?"14px clamp(24px,5vw,64px)":"20px clamp(24px,5vw,64px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(28,43,65,0.97)":"transparent",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.4s ease",boxShadow:scrolled?"0 1px 0 rgba(255,255,255,0.06)":"none"}}>
      <div className="serif" style={{fontSize:22,color:scrolled?"#fff":"var(--primary)",fontWeight:600,letterSpacing:-0.5}}>
        <span>Oliver's Home</span> <span style={{color:"var(--accent)"}}>Plumbing</span>
      </div>
      <div className="desktop-only" style={{display:"flex",alignItems:"center",gap:36}}>
        {navLinks.map(l=><button key={l.id} onClick={()=>go(l.id)} style={{background:"none",border:"none",cursor:"pointer",fontSize:14,fontWeight:600,color:scrolled?"rgba(255,255,255,0.8)":"var(--text-mid)",letterSpacing:0.5,fontFamily:"'DM Sans',sans-serif"}}>{l.label}</button>)}
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:8,background:"var(--accent)",color:"#fff",padding:"10px 24px",borderRadius:6,fontSize:14,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
      <button className="mobile-only" onClick={()=>setMenuOpen(true)} style={{background:"none",border:"none",cursor:"pointer",color:scrolled?"#fff":"var(--primary)",display:"flex"}}>{Icons.menu}</button>
    </nav>

    {/* MOBILE MENU */}
    {menuOpen && (
      <div style={{position:"fixed",inset:0,background:"var(--primary)",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:28}}>
        <button onClick={()=>setMenuOpen(false)} style={{position:"absolute",top:20,right:24,background:"none",border:"none",color:"#fff",cursor:"pointer"}}>{Icons.x}</button>
        {navLinks.map(l=><button key={l.id} onClick={()=>go(l.id)} style={{background:"none",border:"none",color:"#fff",fontSize:22,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{l.label}</button>)}
        <a href={TEL} style={{background:"var(--accent)",color:"#fff",padding:"18px 48px",borderRadius:8,fontSize:18,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>Call {PHONE}</a>
      </div>
    )}

    {/* HERO — Layout B: Full-width centered, no form */}
    <section style={{padding:"180px clamp(24px,5vw,64px) 100px",background:"var(--cream)",textAlign:"center"}}>
      <div className="hero-text" style={{maxWidth:780,margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(46,125,82,0.1)",padding:"8px 18px",borderRadius:4,marginBottom:28}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:"var(--accent)"}} />
          <span style={{fontSize:12,fontWeight:700,color:"var(--accent)",letterSpacing:2,textTransform:"uppercase"}}>Perfect 5.0 Google Rating</span>
        </div>
        <h1 style={{fontSize:"clamp(44px, 6vw, 80px)",lineHeight:1.05,color:"var(--primary)",marginBottom:24,letterSpacing:-2}}>
          North Little Rock's<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Most Honest</span> Plumber
        </h1>
        <p style={{fontSize:18,lineHeight:1.7,color:"var(--text-mid)",marginBottom:32,maxWidth:580,margin:"0 auto 32px"}}>
          Oliver Ramirez shows up on time, tells you what actually needs fixing, and charges a fair price. That's why every single customer gives him 5 stars.
        </p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:12,flexWrap:"wrap"}}>
          <Stars />
          <span style={{fontSize:14,color:"var(--text-light)",fontWeight:600,marginLeft:4}}>5.0 stars on Google</span>
        </div>
        <p style={{fontSize:15,color:"var(--text-mid)",fontStyle:"italic",maxWidth:520,margin:"0 auto 36px",lineHeight:1.6}}>
          "Oliver replaced some old drain pipes under my house he is very very good nice honest only plumber I want to use you will be glad you called him." — <strong style={{color:"var(--primary)",fontStyle:"normal"}}>Brent Combs</strong>
        </p>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,boxShadow:"0 4px 20px rgba(46,125,82,0.3)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Oliver Now</a>
          <button onClick={()=>go("services")} style={{display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"var(--primary)",padding:"18px 32px",borderRadius:6,fontSize:16,fontWeight:600,border:"1.5px solid var(--border)",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Services {Icons.arrowRight}</button>
        </div>
      </div>
    </section>

    {/* FORM + TRUST — Layout B: Combined section, centered form with trust stats below */}
    <section style={{padding:"80px clamp(24px,5vw,64px)",background:"var(--white)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:480,margin:"0 auto"}}>
        <div className="form-card-wrap" style={{background:"var(--white)",borderRadius:12,padding:"44px 36px",boxShadow:"0 4px 40px rgba(0,0,0,0.08)",border:"1px solid var(--border)",marginBottom:56}}>
          {!formDone ? (
            <form onSubmit={e=>{e.preventDefault();setFormDone(true)}}>
              <h3 style={{fontSize:26,color:"var(--primary)",marginBottom:6,fontFamily:"'Playfair Display',serif"}}>Get a Free Quote</h3>
              <p style={{fontSize:14,color:"var(--text-light)",marginBottom:28}}>We respond within the hour.</p>
              <input type="text" placeholder="Your name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} required style={{width:"100%",padding:"16px 18px",fontSize:15,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:14,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"var(--cream)"}} />
              <input type="tel" placeholder="Phone number" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} required style={{width:"100%",padding:"16px 18px",fontSize:15,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:14,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"var(--cream)"}} />
              <select value={formData.service} onChange={e=>setFormData({...formData,service:e.target.value})} required style={{width:"100%",padding:"16px 18px",fontSize:15,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:20,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"var(--cream)",color:formData.service?"var(--text)":"#999",appearance:"none"}}>
                <option value="">What do you need help with?</option>
                {allServiceNames.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
              <button type="submit" style={{width:"100%",padding:18,background:"var(--primary)",color:"#fff",border:"none",borderRadius:6,fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Get My Free Quote</button>
            </form>
          ) : (
            <div style={{textAlign:"center",padding:"24px 0"}}>
              <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(46,125,82,0.12)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",color:"var(--accent)"}}>{Icons.check}</div>
              <h3 style={{fontSize:22,color:"var(--primary)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>We Got It!</h3>
              <p style={{fontSize:14,color:"var(--text-mid)"}}>We'll call you back shortly. For emergencies,<br/>call <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a></p>
            </div>
          )}
        </div>
      </div>
      <div className="trust-row" style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:32,maxWidth:900,margin:"0 auto",textAlign:"center"}}>
        {[
          {num:"5.0",label:"Google Rating",desc:"Perfect score"},
          {num:"Honest",label:"Fair Pricing Always",desc:"No surprises"},
          {num:"On Time",label:"Every Job",desc:"Reliable service"},
          {num:"Oliver",label:"On Every Call",desc:"Owner-operated"},
        ].map((s,i)=>(
          <div key={i}>
            <div className="serif" style={{fontSize:"clamp(28px,3.5vw,44px)",color:"var(--primary)",lineHeight:1,marginBottom:6,letterSpacing:-1}}>{s.num}</div>
            <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--text)",marginBottom:2}}>{s.label}</div>
            <div style={{fontSize:13,color:"var(--text-light)"}}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>

    {/* SERVICES — Layout B: 2-column grid, larger cards */}
    <section id="services" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>What We Do</div>
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",color:"var(--primary)",letterSpacing:-0.5}}>Plumbing Services in North Little Rock</h2>
        </div>
        <div className="svc-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
          {services.map((s,i)=>(
            <div key={i} style={{background:"#fff",borderRadius:10,padding:"44px 36px",border:"1px solid var(--border)",transition:"all 0.3s ease",cursor:"default",position:"relative",overflow:"hidden"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.1)";e.currentTarget.querySelector('.cb').style.width="100%"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";e.currentTarget.querySelector('.cb').style.width="0"}}>
              <div className="cb" style={{position:"absolute",top:0,left:0,width:0,height:2,background:"var(--accent)",transition:"width 0.35s ease"}} />
              <div style={{color:"var(--accent)",marginBottom:18}}>{s.icon}</div>
              <h3 style={{fontSize:19,color:"var(--primary)",marginBottom:10,fontWeight:600,fontFamily:"'DM Sans',sans-serif",lineHeight:1.3}}>{s.name}</h3>
              <p style={{fontSize:15,color:"var(--text-mid)",lineHeight:1.7}}>{s.desc}</p>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",marginTop:40,fontSize:15,color:"var(--text-light)"}}>
          Questions? Call Oliver directly at <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* WHY US — Layout B: Single column centered, dark section */}
    <section id="about" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--primary)",color:"#fff"}}>
      <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14,opacity:0.7}}>About Oliver's Home Plumbing</div>
        <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",lineHeight:1.15,marginBottom:28,color:"#fff"}}>Not a Big Company.<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>A Better One.</span></h2>
        <p style={{fontSize:16,lineHeight:1.8,color:"rgba(255,255,255,0.65)",marginBottom:24,textAlign:"left"}}>
          Oliver Ramirez started Oliver's Home Plumbing because he believed homeowners deserved better than what the big plumbing companies were offering — overpriced service calls, inexperienced technicians, and repair bills padded with work that didn't need doing. His customers agree. As one put it: "I got tired of paying the huge companies to send a 21 year old out who could barely open the gate."
        </p>
        <p style={{fontSize:16,lineHeight:1.8,color:"rgba(255,255,255,0.65)",marginBottom:36,textAlign:"left"}}>
          When you call Oliver's, Oliver himself shows up. He's the owner, the plumber, and the person who stands behind every job. He'll tell you what actually needs to be fixed — and what's okay. That honesty is why every single one of his Google reviews is a perfect 5 stars, and why customers call him "the only plumber I want to use." From drain cleaning to full sewer line replacement, Oliver handles it all with the care and fair pricing that built his reputation across North Little Rock and Central Arkansas.
        </p>
        <div className="why-creds-row" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:24,marginTop:8}}>
          {["Owner on Every Job","Honest About What Needs Fixing","Fair, Competitive Pricing","Perfect 5.0 Google Rating","Residential Plumbing Specialist"].map((c,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{color:"var(--accent)",flexShrink:0}}>{Icons.check}</div>
              <span style={{fontSize:14,fontWeight:600,color:"rgba(255,255,255,0.85)",whiteSpace:"nowrap"}}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS — Layout B: 3 cards side by side, no carousel */}
    <section id="reviews" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--white)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>Reviews</div>
          <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",color:"var(--primary)",letterSpacing:-0.5}}>5.0 Stars on Google</h2>
        </div>
        <div className="rev-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20}}>
          {[reviews[0], reviews[1], reviews[2]].map((r,i)=>(
            <div key={i} style={{background:"var(--cream)",borderRadius:12,padding:"36px 30px",border:"1px solid var(--border)"}}>
              <div style={{color:"var(--accent)",marginBottom:16,opacity:0.15}}>{Icons.quote}</div>
              <div style={{marginBottom:16}}><Stars /></div>
              <p style={{fontSize:15,color:"var(--text-mid)",lineHeight:1.7,fontStyle:"italic",marginBottom:20}}>"{r.text}"</p>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:"var(--primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>{r.name.charAt(0)}</div>
                <div>
                  <div style={{fontSize:14,fontWeight:700,color:"var(--primary)"}}>{r.name}</div>
                  <div style={{fontSize:12,color:"var(--text-light)"}}>Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",marginTop:40,fontSize:15,color:"var(--text-light)"}}>
          Ready to experience the difference? Call <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* SERVICE AREAS */}
    <section id="areas" style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>Service Areas</div>
        <h2 style={{fontSize:"clamp(28px,3vw,38px)",color:"var(--primary)",marginBottom:48,letterSpacing:-0.5}}>Serving North Little Rock & Central Arkansas</h2>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12}}>
          {areas.map((a,i)=>(
            <span key={i} title={`Plumber in ${a}, AR`} style={{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid var(--border)",padding:"12px 24px",borderRadius:30,fontSize:15,fontWeight:500,color:"var(--text)",cursor:"default",transition:"all 0.25s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="var(--primary)";e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="var(--primary)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="var(--text)";e.currentTarget.style.borderColor="rgba(0,0,0,0.06)"}}>
              <span style={{opacity:0.5}}>{Icons.mapPin}</span> {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{padding:"100px clamp(24px,5vw,64px)",background:"#FFFFFF",textAlign:"center",borderTop:"1px solid rgba(0,0,0,0.06)"}}>
      <div style={{maxWidth:600,margin:"0 auto"}}>
        <h2 className="serif" style={{fontSize:"clamp(32px,4vw,50px)",color:"#2A2A3C",lineHeight:1.1,marginBottom:20,letterSpacing:-1}}>
          Got a plumbing problem?<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Call Oliver.</span>
        </h2>
        <p style={{fontSize:17,color:"#5A5A6E",marginBottom:36,lineHeight:1.6}}>
          Honest about what needs fixing, fair on every price, and on time to every job. The plumber North Little Rock trusts.
        </p>
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"22px 52px",borderRadius:8,fontSize:20,fontWeight:700,boxShadow:"0 6px 28px rgba(46,125,82,0.35)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{background:"var(--primary)",color:"rgba(255,255,255,0.7)",padding:"64px clamp(24px,5vw,64px) 0",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
      <div className="footer-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr",gap:48,paddingBottom:40}}>
        <div>
          <div className="serif" style={{fontSize:22,color:"#fff",marginBottom:16}}><span>Oliver's Home</span> <span style={{color:"var(--accent)"}}>Plumbing</span></div>
          <p style={{fontSize:14,lineHeight:1.7,opacity:0.7,marginBottom:16}}>Residential plumbing repair, drain cleaning, sewer line replacement, and emergency service in North Little Rock and Central Arkansas. Owner-operated with a perfect 5.0 Google rating.</p>
          <p style={{fontSize:14,lineHeight:1.8,opacity:0.6}}>
            1400 Parkway Dr<br/>North Little Rock, AR 72118<br/>
            <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a><br/>
            <a href="mailto:oliverramirez501@yahoo.com" style={{color:"rgba(255,255,255,0.6)"}}>oliverramirez501@yahoo.com</a>
          </p>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Services</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
            {allServiceNames.map(s=><li key={s} style={{fontSize:14,opacity:0.6}}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Areas</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
            {areas.map(a=><li key={a} style={{fontSize:14,opacity:0.6}}>{a}</li>)}
          </ul>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginTop:28,marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>Hours</h4>
          <p style={{fontSize:14,opacity:0.6,lineHeight:1.7}}>Mon–Fri: 8 AM – 5 PM<br/>Sat–Sun: Closed</p>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"20px 0",maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-between",fontSize:13,opacity:0.4,flexWrap:"wrap",gap:8}}>
        <span>&copy; {yr} Oliver's Home Plumbing. All rights reserved.</span>
        <span>Owner-Operated by Oliver Ramirez</span>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px",fontSize:17,fontWeight:700,boxShadow:"0 -4px 20px rgba(0,0,0,0.15)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Oliver Now</a>
    </div>
    <div className="mobile-only" style={{height:60,display:"block"}} />
  </>);
}
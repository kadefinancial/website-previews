// Layout: B | Industry: HVAC | City: Little Rock
import { useState, useEffect } from "react";

const PHONE = "(501) 515-0737";
const TEL = "tel:+15015150737";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  flame: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
  wind: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
  droplets: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
  pipe: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M7 14V10a3 3 0 013-3h4"/><path d="M17 10v4a3 3 0 01-3 3h-4"/></svg>,
  home: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C8934F" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrowRight: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  thermometer: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>,
};

const Stars = () => <span style={{ display:"inline-flex", gap:2 }}>{[...Array(5)].map((_,i) => <span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Heating & Air Conditioning Repair", desc: "Fast, reliable diagnosis and repair for all heating and cooling systems. John gets your comfort restored quickly with honest assessments and fair pricing.", icon: Icons.wrench },
  { name: "HVAC Installation", desc: "Complete system installation for homes throughout Little Rock. Quality equipment, professional setup, and a licensed technician who stands behind every job.", icon: Icons.wind },
  { name: "HVAC Maintenance", desc: "Preventive maintenance that extends your system's life and keeps energy bills low. Regular tune-ups from a licensed pro who knows what to look for.", icon: Icons.thermometer },
  { name: "Water Services", desc: "Water line repair and installation handled by a multi-trade professional. One call covers your HVAC and water service needs under the same trusted roof.", icon: Icons.droplets },
  { name: "Sewer & Gas Services", desc: "Licensed sewer and gas line work you can trust. John handles these critical systems with the care and expertise they demand — safely and up to code.", icon: Icons.pipe },
  { name: "Residential HVAC", desc: "Dedicated residential heating and cooling service for Little Rock homeowners. From repairs to full replacements, John treats every home like his own.", icon: Icons.home },
];

const allServiceNames = ["Heating & Air Conditioning Repair","HVAC Installation","HVAC Maintenance","Water Services","Sewer & Gas Services","Residential HVAC"];

const areas = ["Little Rock","North Little Rock","Central Arkansas"];

const navLinks = [
  { label:"Services", id:"services" },
  { label:"About", id:"about" },
  { label:"Reviews", id:"reviews" },
  { label:"Areas", id:"areas" },
];

export default function RockCityAirSystems() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("rcas-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({ name:"", phone:"", service:"" });

  const submitPw = (e) => {
    e.preventDefault();
    if (pw === "roof") { sessionStorage.setItem("rcas-auth","1"); setAuthed(true); }
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
    document.title = "HVAC Repair Little Rock AR | Rock City Air Systems";
    const els = [];
    const add = (tag, attrs) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k,v]) => { if (k==="textContent") el.textContent=v; else el.setAttribute(k,v); }); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"Licensed HVAC repair, installation & maintenance in Little Rock, AR. Perfect 5.0 Google rating. Call (501) 515-0737."});
    add("meta",{name:"geo.region",content:"US-AR"});
    add("meta",{name:"geo.placename",content:"Little Rock"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"HVACBusiness",
      name:"Rock City Air Systems",telephone:"+15015150737",
      email:"rockcityairsystems@gmail.com",
      address:{"@type":"PostalAddress",streetAddress:"14014 Crystal Valley Rd",addressLocality:"Little Rock",addressRegion:"AR",postalCode:"72210",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:34.7465,longitude:-92.2896},
      openingHoursSpecification:[
        {"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"09:00",closes:"17:00"},
      ],
      aggregateRating:{"@type":"AggregateRating",ratingValue:"5.0",reviewCount:"6",bestRating:"5"},
      founder:{"@type":"Person",name:"John Dickerson"},
      description:"Licensed, bonded, and insured HVAC company serving Little Rock and Central Arkansas. Heating, cooling, water, sewer, and gas services.",
      areaServed:["Little Rock","North Little Rock","Central Arkansas"].map(a=>({"@type":"City",name:a})),
      hasOfferCatalog:{"@type":"OfferCatalog",name:"HVAC & Multi-Trade Services",itemListElement:allServiceNames.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:s}}))},
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
            <span style={{fontWeight:700,color:"#1C2B41"}}>Rock City</span> <span style={{color:"#C8934F"}}>Air Systems</span>
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
      :root{--primary:#1C2B41;--accent:#C8934F;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
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
        <span>Rock City</span> <span style={{color:"var(--accent)"}}>Air Systems</span>
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
        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(200,147,79,0.1)",padding:"8px 18px",borderRadius:4,marginBottom:28}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:"var(--accent)"}} />
          <span style={{fontSize:12,fontWeight:700,color:"var(--accent)",letterSpacing:2,textTransform:"uppercase"}}>Licensed, Bonded & Insured</span>
        </div>
        <h1 style={{fontSize:"clamp(44px, 6vw, 80px)",lineHeight:1.05,color:"var(--primary)",marginBottom:24,letterSpacing:-2}}>
          Little Rock HVAC<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>You Can Count On</span>
        </h1>
        <p style={{fontSize:18,lineHeight:1.7,color:"var(--text-mid)",marginBottom:32,maxWidth:560,margin:"0 auto 32px"}}>
          John Dickerson and the Rock City Air Systems team deliver expert heating, cooling, water, and gas services across Little Rock and Central Arkansas. Licensed LLC with a perfect Google rating.
        </p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:36,flexWrap:"wrap"}}>
          <Stars />
          <span style={{fontSize:14,color:"var(--text-light)",fontWeight:600,marginLeft:4}}>Perfect 5.0 rating on Google</span>
        </div>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,boxShadow:"0 4px 20px rgba(200,147,79,0.3)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call John Now</a>
          <button onClick={()=>go("services")} style={{display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"var(--primary)",padding:"18px 32px",borderRadius:6,fontSize:16,fontWeight:600,border:"1.5px solid var(--border)",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Services {Icons.arrowRight}</button>
        </div>
      </div>
    </section>

    {/* FORM + TRUST — Layout B: Combined section, centered form with trust stats below */}
    <section style={{padding:"80px clamp(24px,5vw,64px)",background:"var(--white)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:480,margin:"0 auto"}}>
        {/* Form */}
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
              <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(200,147,79,0.12)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",color:"var(--accent)"}}>{Icons.check}</div>
              <h3 style={{fontSize:22,color:"var(--primary)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>We Got It!</h3>
              <p style={{fontSize:14,color:"var(--text-mid)"}}>We'll call you back shortly. For emergencies,<br/>call <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a></p>
            </div>
          )}
        </div>
        {/* Trust Stats — horizontal row below form */}
      </div>
      <div className="trust-row" style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:32,maxWidth:900,margin:"0 auto",textAlign:"center"}}>
        {[
          {num:"5.0",label:"Google Rating",desc:"Perfect score"},
          {num:"Licensed",label:"Bonded & Insured",desc:"Full coverage"},
          {num:"LLC",label:"Registered Business",desc:"Legally established"},
          {num:"Multi-Trade",label:"HVAC + Plumbing",desc:"One call does it all"},
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
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",color:"var(--primary)",letterSpacing:-0.5}}>HVAC & Multi-Trade Services in Little Rock</h2>
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
          Questions? Call John directly at <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* WHY US — Layout B: Single column centered, dark section */}
    <section id="about" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--primary)",color:"#fff"}}>
      <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14,opacity:0.7}}>About Rock City Air Systems</div>
        <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",lineHeight:1.15,marginBottom:28,color:"#fff"}}>A Family Business<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Built on Trust</span></h2>
        <p style={{fontSize:16,lineHeight:1.8,color:"rgba(255,255,255,0.65)",marginBottom:24,textAlign:"left"}}>
          Rock City Air Systems is a husband-and-wife operation built the right way. John Dickerson is the licensed owner and technician — he's the one who shows up at your door, diagnoses the problem, and fixes it. Angela Speck manages customer contacts and scheduling, making sure every call is answered and every appointment runs smoothly. When you call Rock City, you're talking to the people who own the business.
        </p>
        <p style={{fontSize:16,lineHeight:1.8,color:"rgba(255,255,255,0.65)",marginBottom:36,textAlign:"left"}}>
          What sets Rock City apart is range. This isn't a one-trick operation. John is trained across multiple trades — heating and air conditioning, water services, sewer and gas lines. That means one licensed, bonded, and insured LLC handles what would normally take two or three separate contractors. The result is a perfect 5.0-star Google rating from customers who appreciate honest work, fair pricing, and a technician who actually knows what he's doing across every system in your home.
        </p>
        <div className="why-creds-row" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:24,marginTop:8}}>
          {["Licensed, Bonded & Insured","Multi-Trade: HVAC + Water + Gas","Registered LLC Entity","John on Every Service Call","Angela Handles Scheduling"].map((c,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{color:"var(--accent)",flexShrink:0}}>{Icons.check}</div>
              <span style={{fontSize:14,fontWeight:600,color:"rgba(255,255,255,0.85)",whiteSpace:"nowrap"}}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS — Layout B: No real reviews available, highlight 5.0 rating honestly */}
    <section id="reviews" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--white)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>Reviews</div>
          <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",color:"var(--primary)",letterSpacing:-0.5}}>5.0 Stars on Google</h2>
        </div>
        <div style={{maxWidth:640,margin:"0 auto",textAlign:"center"}}>
          <div style={{background:"var(--cream)",borderRadius:12,padding:"56px 40px",border:"1px solid var(--border)"}}>
            <div style={{display:"flex",justifyContent:"center",marginBottom:20}}>
              <Stars />
            </div>
            <div className="serif" style={{fontSize:"clamp(56px,8vw,96px)",color:"var(--primary)",lineHeight:1,marginBottom:8,letterSpacing:-2}}>5.0</div>
            <p style={{fontSize:14,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--text)",marginBottom:20}}>Perfect Google Rating</p>
            <div style={{width:48,height:2,background:"var(--accent)",margin:"0 auto 24px"}} />
            <p style={{fontSize:17,color:"var(--text-mid)",lineHeight:1.7,marginBottom:8}}>
              Join our growing list of satisfied customers. Every review is a perfect five stars.
            </p>
            <p style={{fontSize:15,color:"var(--text-light)",lineHeight:1.7}}>
              See what homeowners are saying about Rock City Air Systems on Google.
            </p>
          </div>
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
        <h2 style={{fontSize:"clamp(28px,3vw,38px)",color:"var(--primary)",marginBottom:48,letterSpacing:-0.5}}>Serving Little Rock & Central Arkansas</h2>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12}}>
          {areas.map((a,i)=>(
            <span key={i} title={`HVAC service in ${a}, AR`} style={{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid var(--border)",padding:"12px 24px",borderRadius:30,fontSize:15,fontWeight:500,color:"var(--text)",cursor:"default",transition:"all 0.25s"}}
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
          HVAC trouble?<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Call John.</span>
        </h2>
        <p style={{fontSize:17,color:"#5A5A6E",marginBottom:36,lineHeight:1.6}}>
          Licensed, bonded, and insured. Multi-trade expertise across HVAC, water, sewer, and gas. Honest pricing from a family-owned LLC.
        </p>
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"22px 52px",borderRadius:8,fontSize:20,fontWeight:700,boxShadow:"0 6px 28px rgba(200,147,79,0.35)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{background:"var(--primary)",color:"rgba(255,255,255,0.7)",padding:"64px clamp(24px,5vw,64px) 0",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
      <div className="footer-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr",gap:48,paddingBottom:40}}>
        <div>
          <div className="serif" style={{fontSize:22,color:"#fff",marginBottom:16}}><span>Rock City</span> <span style={{color:"var(--accent)"}}>Air Systems</span></div>
          <p style={{fontSize:14,lineHeight:1.7,opacity:0.7,marginBottom:16}}>Licensed, bonded, and insured HVAC company serving Little Rock and Central Arkansas. Heating, cooling, water, sewer, and gas services from a registered LLC.</p>
          <p style={{fontSize:14,lineHeight:1.8,opacity:0.6}}>
            14014 Crystal Valley Rd<br/>Little Rock, AR 72210<br/>
            <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a><br/>
            <a href="mailto:rockcityairsystems@gmail.com" style={{color:"rgba(255,255,255,0.6)"}}>rockcityairsystems@gmail.com</a>
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
          <p style={{fontSize:14,opacity:0.6,lineHeight:1.7}}>Mon–Fri: 9 AM – 5 PM<br/>Sat–Sun: Closed</p>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"20px 0",maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-between",fontSize:13,opacity:0.4,flexWrap:"wrap",gap:8}}>
        <span>&copy; {yr} Rock City Air Systems LLC. All rights reserved.</span>
        <span>Licensed, Bonded & Insured</span>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px",fontSize:17,fontWeight:700,boxShadow:"0 -4px 20px rgba(0,0,0,0.15)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Rock City Air Systems</a>
    </div>
    <div className="mobile-only" style={{height:60,display:"block"}} />
  </>);
}
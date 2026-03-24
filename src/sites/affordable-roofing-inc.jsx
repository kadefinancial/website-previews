// Layout: B | Industry: Roofing | City: North Little Rock
import { useState, useEffect } from "react";

const PHONE = "(501) 945-0799";
const TEL = "tel:+15019450799";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  roof: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V10l7-7 7 7v11"/><path d="M9 21v-6h6v6"/></svg>,
  replace: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V10l7-7 7 7v11"/><path d="M14 3l4 4"/><path d="M10 7l4 4"/></svg>,
  repair: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  storm: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>,
  estimate: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  saturday: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M12 14l-2 2 2 2"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  checkLg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4C5A9" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrow: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" opacity="0.15"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
};

const Stars = () => <span style={{display:"inline-flex",gap:2}}>{[...Array(5)].map((_,i)=><span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Residential Roofing", desc: "Complete roofing solutions for homes across North Little Rock. From new construction to full system upgrades, affordable pricing on quality materials and experienced installation.", icon: Icons.roof },
  { name: "Roof Replacement", desc: "Full tear-off and replacement when repairs are no longer enough. Thorough removal, deck inspection, and a new roof installed fast -- because your home can't wait.", icon: Icons.replace },
  { name: "Roof Repair", desc: "Leaks, missing shingles, flashing issues, and wear from Arkansas weather. Fast, thorough repairs that stand behind the work and keep your home protected.", icon: Icons.repair },
  { name: "Storm Damage", desc: "Hail, wind, and severe weather take a toll on Arkansas roofs. Damage assessment, documentation, and full restoration to get your home back to normal.", icon: Icons.storm },
  { name: "Free Estimates", desc: "No pressure, no obligation. Get an honest assessment and transparent pricing before any work begins. Affordable means knowing the cost upfront.", icon: Icons.estimate },
  { name: "Saturday Service", desc: "Open Saturdays when most roofers aren't. Can't take time off work? Schedule your estimate or get work done on your day off -- we'll be there.", icon: Icons.saturday },
];

const allServiceNames = ["Residential Roofing","Roof Replacement","Roof Repair","Storm Damage Restoration","Free Estimates"];

const areas = ["North Little Rock","Little Rock","Sherwood","Jacksonville","Maumelle","Cabot","Benton","Bryant"];

const reviews = [
  { text: "Not only are they affordable, they are fast, thorough, informative and stand behind their work.", name: "Mike Hubbard", src: "Google" },
  { text: "Excellent. The best roofers around and genuinely the most friendly people. Been doing business with them multiple times.", name: "TJ Gibson", src: "Google" },
  { text: "They are always prompt and great service. Will continue to use and recommend to others!", name: "Tammy Phillips", src: "Google" },
];

const navLinks = [{label:"Services",id:"services"},{label:"About",id:"about"},{label:"Reviews",id:"reviews"},{label:"Areas",id:"areas"}];

export default function AffordableRoofingInc() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("affordable-roofing-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({name:"",phone:"",service:""});

  const submitPw = (e) => { e.preventDefault(); if(pw==="2026"){sessionStorage.setItem("affordable-roofing-auth","1");setAuthed(true)}else{setPwBad(true);setPw("")} };
  useEffect(() => { if(!authed) return; const fn=()=>setScrolled(window.scrollY>60); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn); }, [authed]);

  useEffect(() => {
    if(!authed) return;
    document.title = "Roofing Contractor North Little Rock AR | Affordable Roofing";
    const els = [];
    const add = (tag,attrs) => { const el=document.createElement(tag); Object.entries(attrs).forEach(([k,v])=>{if(k==="textContent")el.textContent=v;else el.setAttribute(k,v)}); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"Affordable roofing in North Little Rock, AR. 4.5-star rated, open Saturdays. Roof repair, replacement & storm damage. Call (501) 945-0799."});
    add("meta",{name:"geo.region",content:"US-AR"});
    add("meta",{name:"geo.placename",content:"North Little Rock"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"RoofingContractor",
      name:"Affordable Roofing Inc",telephone:"+15019450799",
      address:{"@type":"PostalAddress",streetAddress:"3416 E Broadway St",addressLocality:"North Little Rock",addressRegion:"AR",postalCode:"72114",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:34.7695,longitude:-92.2371},
      openingHoursSpecification:[
        {"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"08:30",closes:"17:30"},
        {"@type":"OpeningHoursSpecification",dayOfWeek:["Saturday"],opens:"09:30",closes:"17:30"}
      ],
      aggregateRating:{"@type":"AggregateRating",ratingValue:"4.5",reviewCount:"10",bestRating:"5"},
      description:"Affordable Roofing Inc is a roofing contractor in North Little Rock, AR. Residential roofing, roof replacement, repair, and storm damage restoration. Open Saturdays.",
      areaServed:areas.map(a=>({"@type":"City",name:a})),
      hasOfferCatalog:{"@type":"OfferCatalog",name:"Roofing Services",itemListElement:allServiceNames.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:s}}))},
      memberOf:[],
      sameAs:[],
    })});
    return()=>els.forEach(el=>{try{document.head.removeChild(el)}catch(e){}});
  }, [authed]);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); };
  const yr = new Date().getFullYear();

  if (!authed) {
    return (<>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}`}</style>
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#1E1E1E"}}>
        <div style={{background:"#fff",borderRadius:16,padding:"56px 44px",textAlign:"center",maxWidth:420,width:"92%",boxShadow:"0 32px 80px rgba(0,0,0,.35)"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,marginBottom:8,fontWeight:600,letterSpacing:-0.5}}><span style={{color:"#1E1E1E"}}>Affordable</span> <span style={{color:"#D4C5A9"}}>Roofing</span></div>
          <p style={{fontSize:13,color:"#8A8A9A",letterSpacing:1,marginBottom:28,textTransform:"uppercase"}}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e=>{setPw(e.target.value);setPwBad(false)}} placeholder="••••" autoFocus style={{width:"100%",padding:16,fontSize:20,border:`2px solid ${pwBad?"#ef4444":"#e2e8f0"}`,borderRadius:8,textAlign:"center",letterSpacing:6,outline:"none",fontFamily:"'DM Sans',sans-serif",color:"#1E1E1E"}} />
            {pwBad && <p style={{color:"#ef4444",fontSize:12,marginTop:8,fontWeight:500}}>Incorrect password</p>}
            <button type="submit" style={{width:"100%",padding:16,marginTop:20,fontSize:15,fontWeight:700,background:"#1E1E1E",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
      :root{--primary:#1E1E1E;--accent:#D4C5A9;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
      *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
      body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--cream);-webkit-font-smoothing:antialiased}
      h1,h2,h3,.serif{font-family:'Playfair Display',serif;font-weight:500}
      a{text-decoration:none;color:inherit}
      .gold-line{width:48px;height:2px;background:var(--accent)}
      @media(max-width:900px){.desktop-only{display:none!important}.mobile-only{display:flex!important}.svc-grid{grid-template-columns:1fr!important}.why-creds-row{flex-direction:column!important;gap:12px!important}.rev-grid{grid-template-columns:1fr!important}.footer-grid{grid-template-columns:1fr!important}.footer-btm-inner{flex-direction:column;gap:8px;text-align:center}.trust-row{grid-template-columns:1fr 1fr!important}.hero-pad{padding-top:140px!important;padding-bottom:64px!important}.section-pad{padding-top:64px!important;padding-bottom:64px!important}}
      @media(min-width:901px){.mobile-only{display:none!important}}
    `}</style>

    {/* NAV */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:scrolled?"14px clamp(24px,5vw,64px)":"20px clamp(24px,5vw,64px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(30,30,30,0.97)":"transparent",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.4s ease"}}>
      <div className="serif" style={{fontSize:22,color:scrolled?"#fff":"var(--primary)",fontWeight:600,letterSpacing:-0.5}}><span>Affordable</span> <span style={{color:"var(--accent)"}}>Roofing</span></div>
      <div className="desktop-only" style={{display:"flex",alignItems:"center",gap:36}}>
        {navLinks.map(l=><button key={l.id} onClick={()=>go(l.id)} style={{background:"none",border:"none",cursor:"pointer",fontSize:14,fontWeight:600,color:scrolled?"rgba(255,255,255,0.8)":"var(--text-mid)",fontFamily:"'DM Sans',sans-serif"}}>{l.label}</button>)}
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:8,background:"var(--accent)",color:"#fff",padding:"10px 24px",borderRadius:6,fontSize:14,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
      <button className="mobile-only" onClick={()=>setMenuOpen(true)} style={{background:"none",border:"none",cursor:"pointer",color:scrolled?"#fff":"var(--primary)",display:"flex"}}>{Icons.menu}</button>
    </nav>

    {menuOpen && (
      <div style={{position:"fixed",inset:0,background:"var(--primary)",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:28}}>
        <button onClick={()=>setMenuOpen(false)} style={{position:"absolute",top:20,right:24,background:"none",border:"none",color:"#fff",cursor:"pointer"}}>{Icons.x}</button>
        {navLinks.map(l=><button key={l.id} onClick={()=>go(l.id)} style={{background:"none",border:"none",color:"#fff",fontSize:22,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{l.label}</button>)}
        <a href={TEL} style={{background:"var(--accent)",color:"#fff",padding:"18px 48px",borderRadius:8,fontSize:18,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>Call {PHONE}</a>
      </div>
    )}

    {/* HERO -- Layout B: Centered, no form */}
    <section className="hero-pad" style={{padding:"180px clamp(24px,5vw,64px) 100px",background:"var(--cream)",textAlign:"center"}}>
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(212,197,169,0.15)",padding:"8px 18px",borderRadius:4,marginBottom:28}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:"var(--accent)"}} />
          <span style={{fontSize:12,fontWeight:700,color:"var(--accent)",letterSpacing:2,textTransform:"uppercase"}}>4.5 Stars -- Open Saturdays</span>
        </div>
        <h1 style={{fontSize:"clamp(44px, 6vw, 80px)",lineHeight:1.05,color:"var(--primary)",marginBottom:24,letterSpacing:-2}}>
          Affordable Roofing<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>North Little Rock Trusts</span>
        </h1>
        <p style={{fontSize:18,lineHeight:1.7,color:"var(--text-mid)",marginBottom:32,maxWidth:620,margin:"0 auto 32px"}}>
          A word-of-mouth roofing company with loyal repeat customers and honest pricing. Residential roofing, repairs, replacements, and storm damage restoration -- with Saturday hours when you need them.
        </p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:36,flexWrap:"wrap"}}>
          <Stars />
          <span style={{fontSize:14,color:"var(--text-light)",fontStyle:"italic",marginLeft:4}}>"The best roofers around and genuinely the most friendly people." -- TJ Gibson</span>
        </div>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,boxShadow:"0 4px 20px rgba(212,197,169,0.3)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Now</a>
          <button onClick={()=>go("services")} style={{display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"var(--primary)",padding:"18px 32px",borderRadius:6,fontSize:16,fontWeight:600,border:"1.5px solid var(--border)",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Services {Icons.arrow}</button>
        </div>
      </div>
    </section>

    {/* FORM + TRUST -- Layout B: Combined section */}
    <section className="section-pad" style={{padding:"80px clamp(24px,5vw,64px)",background:"var(--white)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:480,margin:"0 auto"}}>
        <div style={{background:"var(--white)",borderRadius:12,padding:"44px 36px",boxShadow:"0 4px 40px rgba(0,0,0,0.08)",border:"1px solid var(--border)",marginBottom:56}}>
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
              <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(212,197,169,0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",color:"var(--accent)"}}>{Icons.checkLg}</div>
              <h3 style={{fontSize:22,color:"var(--primary)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>We Got It!</h3>
              <p style={{fontSize:14,color:"var(--text-mid)"}}>We'll call you back shortly.<br/>Call <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a> for emergencies.</p>
            </div>
          )}
        </div>
        {/* Trust Stats */}
        <div className="trust-row" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:24,textAlign:"center"}}>
          {[
            {num:"4.5",label:"Rating",desc:"Google reviews"},
            {num:"10+",label:"Reviews",desc:"Real customers"},
            {num:"Sat",label:"Open Saturdays",desc:"Rare for roofers"},
            {num:"Loyal",label:"Repeat Customers",desc:"Word of mouth"},
          ].map((s,i)=>(
            <div key={i}>
              <div className="serif" style={{fontSize:"clamp(28px,3vw,42px)",color:"var(--primary)",lineHeight:1,marginBottom:6,letterSpacing:-1}}>{s.num}</div>
              <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--text)",marginBottom:2}}>{s.label}</div>
              <div style={{fontSize:13,color:"var(--text-light)"}}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SERVICES -- Layout B: 2-column grid */}
    <section id="services" className="section-pad" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:60}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--text-light)",marginBottom:14}}>What We Do</p>
          <h2 style={{fontSize:"clamp(30px, 3.5vw, 44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5}}>Roofing Services in North Little Rock</h2>
        </div>
        <div className="svc-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
          {services.map((s,i)=>(
            <div key={i} style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:12,padding:"44px 36px",transition:"all 0.3s ease",cursor:"default",position:"relative",overflow:"hidden"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.1)";e.currentTarget.querySelector('.hover-bar').style.width="100%"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";e.currentTarget.querySelector('.hover-bar').style.width="0"}}>
              <div className="hover-bar" style={{position:"absolute",top:0,left:0,height:2,width:0,background:"var(--accent)",transition:"width 0.3s ease"}} />
              <div style={{color:"var(--accent)",marginBottom:16}}>{s.icon}</div>
              <h3 style={{fontSize:"clamp(18px, 2vw, 22px)",lineHeight:1.3,fontWeight:600,fontFamily:"'DM Sans',sans-serif",color:"var(--primary)",marginBottom:10}}>{s.name}</h3>
              <p style={{fontSize:16,lineHeight:1.7,color:"var(--text-mid)"}}>{s.desc}</p>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",marginTop:40,fontSize:15,color:"var(--text-mid)"}}>Questions? Call us directly at <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a></p>
      </div>
    </section>

    {/* WHY US -- Layout B: Single column centered, dark */}
    <section id="about" className="section-pad" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--primary)"}}>
      <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"rgba(255,255,255,0.5)",marginBottom:14}}>Why Affordable Roofing</p>
        <h2 style={{fontSize:"clamp(30px, 3.5vw, 44px)",lineHeight:1.15,color:"#fff",letterSpacing:-0.5,marginBottom:40}}>Built on <span style={{fontStyle:"italic",color:"var(--accent)"}}>Word of Mouth</span></h2>
        <p style={{fontSize:17,lineHeight:1.8,color:"rgba(255,255,255,0.75)",marginBottom:24}}>
          Affordable Roofing has built its reputation the old-fashioned way -- one roof at a time, one satisfied customer at a time. In a world of flashy ads and online marketing, this is a company that grows through referrals and repeat business. When TJ Gibson says he's done business with them "multiple times," that tells you everything about the quality of work.
        </p>
        <p style={{fontSize:17,lineHeight:1.8,color:"rgba(255,255,255,0.75)",marginBottom:48}}>
          Affordable pricing isn't just in the name -- it's backed by every review. They're fast, thorough, and informative. And unlike most roofers, they're open on Saturdays, making it easy for working families to get estimates and have work done without missing a day of work. That kind of flexibility is rare in this industry.
        </p>
        <div className="why-creds-row" style={{display:"flex",justifyContent:"center",gap:28,flexWrap:"wrap"}}>
          {["Affordable Pricing","Open Saturdays","Repeat Customers","Free Estimates","Storm Damage Experts","Prompt Service"].map((c,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{color:"var(--accent)"}}>{Icons.check}</span>
              <span style={{fontSize:15,color:"rgba(255,255,255,0.85)",fontWeight:600}}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS -- Layout B: 3 cards side by side */}
    <section id="reviews" className="section-pad" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--white)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:60}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--text-light)",marginBottom:14}}>Customer Reviews</p>
          <h2 style={{fontSize:"clamp(30px, 3.5vw, 44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5}}>4.5 Stars on Google</h2>
        </div>
        <div className="rev-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20}}>
          {reviews.map((r,i)=>(
            <div key={i} style={{background:"var(--cream)",border:"1px solid var(--border)",borderRadius:12,padding:"36px 30px"}}>
              <div style={{color:"var(--accent)",marginBottom:16}}>{Icons.quote}</div>
              <Stars />
              <p style={{fontSize:16,lineHeight:1.7,color:"var(--text-mid)",fontStyle:"italic",margin:"16px 0 20px"}}>"{r.text}"</p>
              <div>
                <div style={{fontSize:15,fontWeight:700,color:"var(--primary)"}}>{r.name}</div>
                <div style={{fontSize:13,color:"var(--text-light)"}}>{r.src}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",marginTop:40,fontSize:15,color:"var(--text-mid)"}}>Ready to experience the difference? Call <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a></p>
      </div>
    </section>

    {/* SERVICE AREAS */}
    <section id="areas" className="section-pad" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--text-light)",marginBottom:14}}>Service Areas</p>
        <h2 style={{fontSize:"clamp(30px, 3.5vw, 44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5,marginBottom:48}}>Serving Central Arkansas</h2>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12}}>
          {areas.map((a,i)=>(
            <span key={i} title={`Roofing in ${a}, AR`} style={{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 22px",borderRadius:50,border:"1px solid var(--border)",background:"var(--white)",fontSize:14,fontWeight:600,color:"var(--text)",cursor:"default",transition:"all 0.3s ease"}}
              onMouseEnter={e=>{e.currentTarget.style.background="var(--primary)";e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="var(--primary)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="var(--white)";e.currentTarget.style.color="var(--text)";e.currentTarget.style.borderColor="rgba(0,0,0,0.06)"}}>
              <span style={{color:"var(--accent)"}}>{Icons.mapPin}</span> {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA -- White bg to contrast footer */}
    <section className="section-pad" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--white)",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <h2 style={{fontSize:"clamp(30px, 3.5vw, 44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5,marginBottom:20,fontFamily:"'Playfair Display',serif"}}>
          Need an affordable roof?<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Call today.</span>
        </h2>
        <p style={{fontSize:17,lineHeight:1.7,color:"var(--text-mid)",marginBottom:36}}>Free estimates, honest pricing, and Saturday hours. The roofing company North Little Rock keeps coming back to.</p>
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,boxShadow:"0 4px 20px rgba(212,197,169,0.3)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{padding:"80px clamp(24px,5vw,64px) 40px",background:"var(--primary)"}}>
      <div className="footer-grid" style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr",gap:48,marginBottom:48}}>
        <div>
          <div className="serif" style={{fontSize:22,fontWeight:600,letterSpacing:-0.5,marginBottom:16}}><span style={{color:"#fff"}}>Affordable</span> <span style={{color:"var(--accent)"}}>Roofing</span></div>
          <p style={{fontSize:14,lineHeight:1.7,color:"rgba(255,255,255,0.6)",marginBottom:16}}>Trusted roofing contractor serving North Little Rock and Central Arkansas. Affordable pricing, quality work, and Saturday hours.</p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.5)"}}>3416 E Broadway St<br/>North Little Rock, AR 72114</p>
          <a href={TEL} style={{display:"inline-block",marginTop:12,fontSize:15,fontWeight:700,color:"var(--accent)"}}>{PHONE}</a>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.4)",marginTop:12}}>Mon-Fri 8:30AM-5:30PM<br/>Sat 9:30AM-5:30PM</p>
        </div>
        <div>
          <h4 style={{fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"rgba(255,255,255,0.4)",marginBottom:20}}>Services</h4>
          {allServiceNames.map((s,i)=><p key={i} style={{fontSize:14,color:"rgba(255,255,255,0.6)",marginBottom:8}}>{s}</p>)}
        </div>
        <div>
          <h4 style={{fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"rgba(255,255,255,0.4)",marginBottom:20}}>Areas</h4>
          {areas.map((a,i)=><p key={i} style={{fontSize:14,color:"rgba(255,255,255,0.6)",marginBottom:8}}>{a}</p>)}
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:24}}>
        <div className="footer-btm-inner" style={{maxWidth:1200,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)"}}>&#169; {yr} Affordable Roofing Inc. All rights reserved.</p>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)"}}>BBB Listed: Affordable Residential Roofing Inc</p>
        </div>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,width:"100%",padding:"18px 24px",background:"var(--accent)",color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",boxShadow:"0 -4px 20px rgba(0,0,0,0.15)"}}>{Icons.phone} Call Affordable Roofing</a>
    </div>
    <div className="mobile-only" style={{height:60,display:"block"}} />
  </>);
}

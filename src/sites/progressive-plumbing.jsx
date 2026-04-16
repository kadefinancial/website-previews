// Layout: B | Industry: Plumber | City: Fort Smith
import { useState, useEffect } from "react";

const PHONE = "(479) 646-0884";
const TEL = "tel:+14796460884";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  home: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  building: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01"/></svg>,
  pipe: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M10 17h4a4 4 0 004-4V10"/></svg>,
  droplets: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
  hardHat: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z"/><path d="M10 15V7a2 2 0 012-2v0a2 2 0 012 2v8"/><path d="M6 15v-3a6 6 0 0112 0v3"/></svg>,
  faucet: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M6 6h12"/><path d="M6 6v2a6 6 0 006 6v0"/><path d="M18 6v2a6 6 0 01-6 6v0"/><path d="M12 14v4"/><path d="M8 18h8"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C8934F" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
  clock: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  checkCircle: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C8934F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11.5 14.5 15.5 9.5"/></svg>,
};

const Stars = () => <span style={{display:"inline-flex",gap:2}}>{[...Array(5)].map((_,i)=><span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Residential Plumbing", desc: "Complete home plumbing solutions from routine maintenance to full system overhauls. The James family has kept Fort Smith homes running right for over 32 years.", icon: Icons.home },
  { name: "Commercial Plumbing", desc: "Dependable plumbing services for businesses, offices, and commercial properties throughout the River Valley. Licensed, insured, and built for scale.", icon: Icons.building },
  { name: "Plumbing Repair & Installation", desc: "From leaky faucets to complete repiping, our team diagnoses the real problem and fixes it right the first time. No guesswork, no shortcuts.", icon: Icons.wrench },
  { name: "New Construction Plumbing", desc: "Ground-up plumbing design and installation for new builds. We work with builders and contractors to deliver code-compliant systems on schedule.", icon: Icons.hardHat },
  { name: "Pipe Repair", desc: "Fast, precise pipe repair for burst lines, corroded pipes, and hidden leaks. We locate the issue and restore flow with minimal disruption to your property.", icon: Icons.pipe },
  { name: "Fixture Installation", desc: "Professional installation of sinks, toilets, showers, water heaters, and more. Quality fixtures installed correctly so they last for years to come.", icon: Icons.faucet },
];

const allServiceNames = ["Residential Plumbing","Commercial Plumbing","Plumbing Repair & Installation","New Construction Plumbing","Pipe Repair","Fixture Installation"];

const areas = ["Fort Smith","Van Buren","Alma","Greenwood","Barling","River Valley","Western Arkansas"];

const reviews = [
  { text: "Top of the line plumbers!!! High quality craftsmanship.", name: "Charity Sanders", src: "Google" },
];

const navLinks = [{label:"Services",id:"services"},{label:"About",id:"about"},{label:"Reviews",id:"reviews"},{label:"Areas",id:"areas"}];

export default function ProgressivePlumbing() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("pp-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({name:"",phone:"",service:""});

  const submitPw = (e) => { e.preventDefault(); if(pw==="roof"){sessionStorage.setItem("pp-auth","1");setAuthed(true)}else{setPwBad(true);setPw("")} };
  useEffect(() => { if(!authed) return; const fn=()=>setScrolled(window.scrollY>60); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn); }, [authed]);

  useEffect(() => {
    if(!authed) return;
    document.title = "Plumber Fort Smith AR | Progressive Plumbing";
    const els = [];
    const add = (tag,attrs) => { const el=document.createElement(tag); Object.entries(attrs).forEach(([k,v])=>{if(k==="textContent")el.textContent=v;else el.setAttribute(k,v)}); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"Residential & commercial plumber in Fort Smith, AR. Family-owned since 1993. 32+ years of trusted service. Call (479) 646-0884."});
    add("meta",{name:"geo.region",content:"US-AR"});
    add("meta",{name:"geo.placename",content:"Fort Smith"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"Plumber",
      name:"Progressive Plumbing Inc",telephone:"+14796460884",
      address:{"@type":"PostalAddress",streetAddress:"607 Brownwood Estates",addressLocality:"Fort Smith",addressRegion:"AR",postalCode:"72916",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:35.3442,longitude:-94.3984},
      openingHoursSpecification:[
        {"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],description:"Call for Availability"}
      ],
      aggregateRating:{"@type":"AggregateRating",ratingValue:"4.0",reviewCount:"8",bestRating:"5"},
      founder:[{"@type":"Person",name:"Leonard James"},{"@type":"Person",name:"Benjamin James"}],
      foundingDate:"1993",
      description:"Progressive Plumbing Inc provides residential and commercial plumbing services in Fort Smith and the River Valley. Family-owned and operated since 1993 by the James family.",
      areaServed:areas.map(a=>({"@type":"City",name:a})),
      hasOfferCatalog:{"@type":"OfferCatalog",name:"Services",itemListElement:allServiceNames.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:s}}))},
      memberOf:[{"@type":"Organization",name:"Better Business Bureau"}],sameAs:[],
    })});
    return()=>els.forEach(el=>{try{document.head.removeChild(el)}catch(e){}});
  }, [authed]);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); };
  const yr = new Date().getFullYear();

  if (!authed) {
    return (<>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}`}</style>
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#1C2B41"}}>
        <div style={{background:"#fff",borderRadius:16,padding:"56px 44px",textAlign:"center",maxWidth:420,width:"92%",boxShadow:"0 32px 80px rgba(0,0,0,.35)"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,marginBottom:8,fontWeight:600,letterSpacing:-0.5}}><span style={{color:"#1C2B41"}}>Progressive</span> <span style={{color:"#C8934F"}}>Plumbing</span></div>
          <p style={{fontSize:13,color:"#8A8A9A",letterSpacing:1,marginBottom:28,textTransform:"uppercase"}}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e=>{setPw(e.target.value);setPwBad(false)}} placeholder="••••" autoFocus style={{width:"100%",padding:16,fontSize:20,border:`2px solid ${pwBad?"#ef4444":"#e2e8f0"}`,borderRadius:8,textAlign:"center",letterSpacing:6,outline:"none",fontFamily:"'DM Sans',sans-serif",color:"#1C2B41"}} />
            {pwBad && <p style={{color:"#ef4444",fontSize:12,marginTop:8,fontWeight:500}}>Incorrect password</p>}
            <button type="submit" style={{width:"100%",padding:16,marginTop:20,fontSize:15,fontWeight:700,background:"#1C2B41",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
      :root{--primary:#1C2B41;--accent:#C8934F;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
      *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
      body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--cream);-webkit-font-smoothing:antialiased}
      h1,h2,h3,.serif{font-family:'Playfair Display',serif;font-weight:500}
      a{text-decoration:none;color:inherit}
      .gold-line{width:48px;height:2px;background:var(--accent)}
      @media(max-width:900px){.desktop-only{display:none!important}.mobile-only{display:flex!important}.svc-grid{grid-template-columns:1fr!important}.why-creds-row{flex-direction:column!important;gap:12px!important}.rev-grid{grid-template-columns:1fr!important}.footer-grid{grid-template-columns:1fr!important}.footer-btm-inner{flex-direction:column;gap:8px;text-align:center}.trust-row{grid-template-columns:1fr 1fr!important}.hero-btns{flex-direction:column;align-items:center}.mob-pad{padding-bottom:80px!important}}
      @media(min-width:901px){.mobile-only{display:none!important}}
    `}</style>

    {/* NAV */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:scrolled?"14px clamp(24px,5vw,64px)":"20px clamp(24px,5vw,64px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(28,43,65,0.97)":"transparent",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.4s ease"}}>
      <div className="serif" style={{fontSize:22,color:scrolled?"#fff":"var(--primary)",fontWeight:600,letterSpacing:-0.5,cursor:"pointer"}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}><span>Progressive</span> <span style={{color:"var(--accent)"}}>Plumbing</span></div>
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
    <section style={{padding:"180px clamp(24px,5vw,64px) 100px",background:"var(--cream)",textAlign:"center"}}>
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(200,147,79,0.1)",padding:"8px 18px",borderRadius:4,marginBottom:28}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:"var(--accent)"}} />
          <span style={{fontSize:12,fontWeight:700,color:"var(--accent)",letterSpacing:2,textTransform:"uppercase"}}>Family-Owned Since 1993</span>
        </div>
        <h1 style={{fontSize:"clamp(44px, 6vw, 80px)",lineHeight:1.05,color:"var(--primary)",marginBottom:24,letterSpacing:-2}}>
          Professional Plumbing<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Fort Smith Trusts</span>
        </h1>
        <p style={{fontSize:18,lineHeight:1.7,color:"var(--text-mid)",marginBottom:32,maxWidth:600,margin:"0 auto 32px"}}>
          Leonard, Benjamin, and Kathy James have kept Fort Smith's plumbing running right for over 32 years. Residential and commercial. Done right the first time.
        </p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:36}}>
          <Stars />
          <span style={{fontSize:14,color:"var(--text-light)",fontStyle:"italic",marginLeft:4}}>"Top of the line plumbers!!!" -- Charity Sanders</span>
        </div>
        <div className="hero-btns" style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",boxShadow:"0 4px 20px rgba(200,147,79,0.3)",transition:"transform 0.2s"}}>{Icons.phone} Call Now</a>
          <button onClick={()=>go("form")} style={{display:"inline-flex",alignItems:"center",gap:10,background:"transparent",color:"var(--primary)",padding:"18px 32px",borderRadius:6,fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",border:"1.5px solid var(--border)",cursor:"pointer",transition:"all 0.2s"}}>Get a Free Quote</button>
        </div>
      </div>
    </section>

    {/* FORM + TRUST -- Layout B: Combined section */}
    <section id="form" style={{padding:"80px clamp(24px,5vw,64px)",background:"var(--white)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center"}}>
        {/* Form Card */}
        <div style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:12,padding:"44px 36px",maxWidth:480,width:"100%",boxShadow:"0 4px 40px rgba(0,0,0,0.08)"}}>
          {!formDone ? (<>
            <h2 style={{fontSize:"clamp(24px,3vw,32px)",color:"var(--primary)",textAlign:"center",marginBottom:6}}>Get a Free Quote</h2>
            <p style={{fontSize:14,color:"var(--text-light)",textAlign:"center",marginBottom:28}}>We respond within the hour.</p>
            <form onSubmit={e=>{e.preventDefault();setFormDone(true)}} style={{display:"flex",flexDirection:"column",gap:14}}>
              <input type="text" required placeholder="Your name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} style={{padding:"14px 16px",borderRadius:8,border:"1px solid var(--border)",background:"var(--cream)",fontSize:15,fontFamily:"'DM Sans',sans-serif",outline:"none"}} />
              <input type="tel" required placeholder="Phone number" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} style={{padding:"14px 16px",borderRadius:8,border:"1px solid var(--border)",background:"var(--cream)",fontSize:15,fontFamily:"'DM Sans',sans-serif",outline:"none"}} />
              <select required value={formData.service} onChange={e=>setFormData({...formData,service:e.target.value})} style={{padding:"14px 16px",borderRadius:8,border:"1px solid var(--border)",background:"var(--cream)",fontSize:15,fontFamily:"'DM Sans',sans-serif",outline:"none",color:formData.service?"var(--text)":"var(--text-light)"}}>
                <option value="" disabled>Select a service</option>
                {allServiceNames.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
              <button type="submit" style={{padding:"16px",borderRadius:8,background:"var(--primary)",color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",border:"none",cursor:"pointer",marginTop:4}}>Get My Free Quote</button>
            </form>
          </>) : (
            <div style={{textAlign:"center",padding:"20px 0"}}>
              <div style={{margin:"0 auto 16px",width:48,height:48}}>{Icons.checkCircle}</div>
              <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:"var(--primary)",marginBottom:8}}>We Got It!</h3>
              <p style={{fontSize:14,color:"var(--text-mid)",lineHeight:1.6}}>We'll be in touch shortly. For emergencies, call <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a></p>
            </div>
          )}
        </div>

        {/* Trust Stats Row -- 4.0 rating: hide rating, lead with strengths */}
        <div className="trust-row" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:32,marginTop:56,maxWidth:800,width:"100%",textAlign:"center"}}>
          {[
            {num:"1993",label:"Est. Founded",desc:"32+ years of service"},
            {num:"BBB",label:"Listed Business",desc:"Better Business Bureau"},
            {num:"Family",label:"James Family Owned",desc:"Leonard, Benjamin & Kathy"},
            {num:"Inc.",label:"Incorporated",desc:"Licensed & insured"},
          ].map((s,i)=>(
            <div key={i}>
              <div className="serif" style={{fontSize:"clamp(24px,3vw,40px)",color:"var(--primary)",fontWeight:600,lineHeight:1}}>{s.num}</div>
              <div style={{fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"var(--text-mid)",marginTop:8}}>{s.label}</div>
              <div style={{fontSize:13,color:"var(--text-light)",marginTop:4}}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SERVICES -- Layout B: 2-column grid */}
    <section id="services" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:14}}>What We Do</p>
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5}}>Our Services</h2>
        </div>
        <div className="svc-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
          {services.map((s,i)=>(
            <div key={i} style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:12,padding:"44px 36px",transition:"all 0.3s ease",cursor:"default",position:"relative",overflow:"hidden"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.1)";e.currentTarget.querySelector(".card-top-border").style.width="100%"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";e.currentTarget.querySelector(".card-top-border").style.width="0"}}>
              <div className="card-top-border" style={{position:"absolute",top:0,left:0,height:2,width:0,background:"var(--accent)",transition:"width 0.3s ease"}} />
              <div style={{color:"var(--accent)",marginBottom:16}} aria-hidden="true">{s.icon}</div>
              <h3 style={{fontFamily:"'DM Sans',sans-serif",fontSize:"clamp(18px,2vw,22px)",fontWeight:600,lineHeight:1.3,color:"var(--text)",marginBottom:10}}>{s.name}</h3>
              <p style={{fontSize:16,lineHeight:1.7,color:"var(--text-mid)"}}>{s.desc}</p>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",marginTop:48,fontSize:15,color:"var(--text-mid)"}}>
          Questions? Call Leonard directly at <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* WHY US -- Layout B: Single column centered, dark section */}
    <section id="about" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--primary)"}}>
      <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:14}}>Why Progressive Plumbing</p>
        <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",lineHeight:1.15,color:"#fff",letterSpacing:-0.5,marginBottom:40}}>Three Generations. One Standard.</h2>
        <p style={{fontSize:17,lineHeight:1.8,color:"rgba(255,255,255,0.75)",marginBottom:24}}>
          Leonard James incorporated Progressive Plumbing in 1993 with a simple philosophy: do the job right, charge a fair price, and treat every home like your own. Over three decades later, that philosophy has not changed. His son Benjamin now works alongside him, and Kathy James manages the office -- making Progressive Plumbing a true family operation from the first phone call to the finished job.
        </p>
        <p style={{fontSize:17,lineHeight:1.8,color:"rgba(255,255,255,0.75)",marginBottom:48}}>
          From residential repairs to new construction plumbing across the River Valley, the James family has built their reputation one job at a time. No subcontractors, no runaround. When you call Progressive Plumbing, you get the family that has been serving Fort Smith since before most national chains existed. That is 32+ years of hands-on experience you can trust.
        </p>
        <div className="why-creds-row" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:24}}>
          {["Family-Owned Since 1993","Incorporated Business","BBB Listed","Residential & Commercial","Licensed & Insured","Fort Smith's Trusted Plumber"].map((c,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{color:"var(--accent)",flexShrink:0}}>{Icons.check}</span>
              <span style={{fontSize:15,color:"rgba(255,255,255,0.85)",fontWeight:500}}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS -- Layout B: Single review (only 1 available) */}
    <section id="reviews" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--white)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:14}}>Testimonials</p>
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5}}>What Our Customers Say</h2>
        </div>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          {reviews.map((r,i)=>(
            <div key={i} style={{background:"var(--cream)",border:"1px solid var(--border)",borderRadius:12,padding:"44px 36px",textAlign:"center"}}>
              <div style={{color:"var(--accent)",marginBottom:16,opacity:0.4,display:"flex",justifyContent:"center"}} aria-hidden="true">{Icons.quote}</div>
              <div style={{marginBottom:16,display:"flex",justifyContent:"center"}}><Stars /></div>
              <p style={{fontSize:18,lineHeight:1.7,color:"var(--text-mid)",fontStyle:"italic",marginBottom:24}}>"{r.text}"</p>
              <div>
                <span style={{fontWeight:700,color:"var(--primary)"}}>{r.name}</span>
                <span style={{fontSize:13,color:"var(--text-light)",marginLeft:8}}>{r.src}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",marginTop:48,fontSize:15,color:"var(--text-mid)"}}>
          Ready to experience the difference? Call <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* SERVICE AREAS */}
    <section id="areas" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:14}}>Service Areas</p>
        <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5,marginBottom:56}}>Where We Work</h2>
        <div style={{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center"}}>
          {areas.map((a,i)=>(
            <span key={i} title={`Plumber in ${a}, AR`} style={{display:"inline-flex",alignItems:"center",gap:6,padding:"10px 20px",borderRadius:100,border:"1px solid var(--border)",background:"var(--white)",fontSize:14,fontWeight:500,color:"var(--text-mid)",cursor:"default",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="var(--primary)";e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="var(--primary)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="var(--white)";e.currentTarget.style.color="var(--text-mid)";e.currentTarget.style.borderColor="var(--border)"}}>
              <span style={{color:"var(--accent)",display:"inline-flex"}}>{Icons.mapPin}</span> {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA -- white background, contrasts against --primary footer */}
    <section style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--white)",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5,marginBottom:20}}>
          Got a plumbing problem?<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Call the James family.</span>
        </h2>
        <p style={{fontSize:17,lineHeight:1.7,color:"var(--text-mid)",marginBottom:36}}>
          Honest pricing, quality craftsmanship, and 32+ years of family-owned service in Fort Smith and the River Valley.
        </p>
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 40px",borderRadius:6,fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",boxShadow:"0 4px 20px rgba(200,147,79,0.3)"}}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="mob-pad" style={{padding:"80px clamp(24px,5vw,64px) 40px",background:"var(--primary)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div className="footer-grid" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:48,marginBottom:48}}>
          <div>
            <div className="serif" style={{fontSize:22,fontWeight:600,letterSpacing:-0.5,marginBottom:16}}><span style={{color:"#fff"}}>Progressive</span> <span style={{color:"var(--accent)"}}>Plumbing</span></div>
            <p style={{fontSize:14,lineHeight:1.7,color:"rgba(255,255,255,0.6)",marginBottom:16,maxWidth:320}}>Residential and commercial plumbing in Fort Smith and the River Valley. Family-owned and operated by the James family since 1993.</p>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.6)",marginBottom:6}}>607 Brownwood Estates, Fort Smith, AR 72916</p>
            <a href={TEL} style={{fontSize:14,color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.4)",marginTop:8,display:"flex",alignItems:"center",gap:6}}><span style={{color:"var(--accent)",display:"inline-flex"}}>{Icons.clock}</span> Call for Availability</p>
          </div>
          <div>
            <h4 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:16,textTransform:"uppercase",letterSpacing:1}}>Services</h4>
            {allServiceNames.map((s,i)=><p key={i} style={{fontSize:13,color:"rgba(255,255,255,0.55)",marginBottom:8,lineHeight:1.5}}>{s}</p>)}
          </div>
          <div>
            <h4 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:16,textTransform:"uppercase",letterSpacing:1}}>Areas</h4>
            {areas.map((a,i)=><p key={i} style={{fontSize:13,color:"rgba(255,255,255,0.55)",marginBottom:8}}>{a}</p>)}
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:24}}>
          <div className="footer-btm-inner" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.35)"}}>{"\u00A9"} {yr} Progressive Plumbing Inc. All rights reserved.</p>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.35)"}}>BBB Listed | Family-Owned Since 1993</p>
          </div>
        </div>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,width:"100%",padding:"16px",background:"var(--accent)",color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",boxShadow:"0 -4px 20px rgba(0,0,0,0.15)"}}>{Icons.phone} Call Progressive Plumbing Now</a>
    </div>
  </>);
}

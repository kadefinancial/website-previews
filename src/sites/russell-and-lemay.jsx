// Layout: C | Industry: Plumber | City: Little Rock
import { useState, useEffect } from "react";

const PHONE = "(501) 225-3200";
const TEL = "tel:+15012253200";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  flame: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
  droplets: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z"/></svg>,
  wind: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
  zap: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  home: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C8934F" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrow: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
};

const Stars = () => <span style={{display:"inline-flex",gap:2}}>{[...Array(5)].map((_,i)=><span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Residential Plumbing", desc: "Complete home plumbing service, repair, and installation from a family that's been doing this in Little Rock since 1949.", icon: Icons.home },
  { name: "Commercial Plumbing", desc: "Licensed commercial plumbing for offices, retail, and industrial properties across Central Arkansas.", icon: Icons.wrench },
  { name: "Water Heater Service", desc: "Tank and tankless water heater installation and repair. Fast turnaround from technicians with decades of experience.", icon: Icons.flame },
  { name: "Heating & Air", desc: "HVAC installation, repair, and maintenance agreements to keep your home or business comfortable year-round.", icon: Icons.wind },
  { name: "Gas Line Service", desc: "Licensed gas line installation and repair for residential and commercial properties. Safety-first approach.", icon: Icons.zap },
  { name: "Leak Detection & Repair", desc: "Find and fix hidden leaks before they cause costly water damage. Thorough diagnostics, minimal disruption.", icon: Icons.droplets },
];

const allServiceNames = ["Residential Plumbing","Commercial Plumbing","Leak Repair","Faucet Installation & Repair","Gas Line Installation & Repair","Water Heater Installation & Repair","Tankless Water Heater Installation","Heating System Installation & Repair","Air Conditioning Installation & Repair","HVAC Maintenance & Service Agreements","Plumbing Inspection","Bathtub Installation & Replacement","Hot Water Recirculation Pump Service"];

const areas = ["Little Rock","North Little Rock","Sherwood","Jacksonville","Cabot","Benton","Bryant","Maumelle","Conway","West Little Rock"];

const reviews = [
  { text: "The employees and staff at Russell & LeMay are top-notch! Their customer service is impeccable and they go above and beyond to make their customers happy.", name: "Sean Morrison", src: "Google" },
  { text: "I had a great experience with this company! The repairman that came out was very knowledgeable and fixed our issue quickly.", name: "Allison Porterfield", src: "Google" },
  { text: "We had a new hot water heater put in this last week. The guys at Russell and LeMay were great.", name: "Mandy Lawhon", src: "Google" },
  { text: "Whenever there is a problem, you can rely on this company. Top notch!", name: "Barbara S Wood", src: "Google" },
  { text: "Call them if you need a plumber, they will do you right.", name: "Jonathan Piker", src: "Google" },
];

const navLinks = [{label:"Services",id:"services"},{label:"About",id:"about"},{label:"Reviews",id:"reviews"},{label:"Areas",id:"areas"}];

export default function RussellAndLemay() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("rl-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({name:"",phone:"",service:""});

  const submitPw = (e) => { e.preventDefault(); if(pw==="2026"){sessionStorage.setItem("rl-auth","1");setAuthed(true)}else{setPwBad(true);setPw("")} };
  useEffect(() => { if(!authed) return; const fn=()=>setScrolled(window.scrollY>60); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn); }, [authed]);

  useEffect(() => {
    if(!authed) return;
    document.title = "Plumber Little Rock AR | Russell & LeMay";
    const els = [];
    const add = (tag,attrs) => { const el=document.createElement(tag); Object.entries(attrs).forEach(([k,v])=>{if(k==="textContent")el.textContent=v;else el.setAttribute(k,v)}); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"Family-owned plumber & HVAC in Little Rock since 1949. 77 years of trusted service. Call (501) 225-3200."});
    add("meta",{name:"geo.region",content:"US-AR"});
    add("meta",{name:"geo.placename",content:"Little Rock"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"Plumber",
      name:"Russell & LeMay Plumbing & Heating Inc.",telephone:"+15012253200",
      address:{"@type":"PostalAddress",streetAddress:"8600 Cunningham Lake Rd",addressLocality:"Little Rock",addressRegion:"AR",postalCode:"72205",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:34.7465,longitude:-92.2896},
      openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"07:30",closes:"17:00"}],
      founder:{"@type":"Person",name:"Hayes LeMay"},foundingDate:"1949",
      description:"Russell & LeMay Plumbing & Heating has served Little Rock, AR since 1949. Residential and commercial plumbing, HVAC, and gas line services.",
      areaServed:areas.map(a=>({"@type":"City",name:a})),
      hasOfferCatalog:{"@type":"OfferCatalog",name:"Plumbing & HVAC Services",itemListElement:allServiceNames.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:s}}))},
      memberOf:[],sameAs:[],
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
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,marginBottom:8}}><span style={{fontWeight:700,color:"#1C2B41"}}>Russell & LeMay</span> <span style={{color:"#C8934F"}}>Plumbing</span></div>
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
      @media(max-width:900px){.desktop-only{display:none!important}.mobile-only{display:flex!important}.hero-grid{grid-template-columns:1fr!important}.trust-grid{grid-template-columns:1fr 1fr!important}.zigzag-row{flex-direction:column!important}.zigzag-row.reverse{flex-direction:column!important}.why-grid{grid-template-columns:1fr!important}.badge-grid{grid-template-columns:1fr 1fr!important}.footer-grid{grid-template-columns:1fr!important}.footer-btm-inner{flex-direction:column;gap:8px;text-align:center}}
      @media(min-width:901px){.mobile-only{display:none!important}}
    `}</style>

    {/* NAV — Layout C: starts on dark hero, white text */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:scrolled?"14px clamp(24px,5vw,64px)":"20px clamp(24px,5vw,64px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(28,43,65,0.97)":"transparent",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.4s ease"}}>
      <div className="serif" style={{fontSize:22,color:"#fff",fontWeight:600,letterSpacing:-0.5}}><span>Russell & LeMay</span> <span style={{color:"var(--accent)"}}>Plumbing</span></div>
      <div className="desktop-only" style={{display:"flex",alignItems:"center",gap:36}}>
        {navLinks.map(l=><button key={l.id} onClick={()=>go(l.id)} style={{background:"none",border:"none",cursor:"pointer",fontSize:14,fontWeight:600,color:"rgba(255,255,255,0.8)",fontFamily:"'DM Sans',sans-serif"}}>{l.label}</button>)}
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:8,background:"var(--accent)",color:"#fff",padding:"10px 24px",borderRadius:6,fontSize:14,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
      <button className="mobile-only" onClick={()=>setMenuOpen(true)} style={{background:"none",border:"none",cursor:"pointer",color:"#fff",display:"flex"}}>{Icons.menu}</button>
    </nav>

    {menuOpen && (
      <div style={{position:"fixed",inset:0,background:"var(--primary)",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:28}}>
        <button onClick={()=>setMenuOpen(false)} style={{position:"absolute",top:20,right:24,background:"none",border:"none",color:"#fff",cursor:"pointer"}}>{Icons.x}</button>
        {navLinks.map(l=><button key={l.id} onClick={()=>go(l.id)} style={{background:"none",border:"none",color:"#fff",fontSize:22,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{l.label}</button>)}
        <a href={TEL} style={{background:"var(--accent)",color:"#fff",padding:"18px 48px",borderRadius:8,fontSize:18,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>Call {PHONE}</a>
      </div>
    )}

    {/* HERO — Layout C: DARK hero */}
    <section style={{minHeight:"100vh",padding:"140px clamp(24px,5vw,64px) 100px",background:"var(--primary)",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-30%",right:"-10%",width:"60%",height:"100%",background:"radial-gradient(ellipse at center,rgba(200,147,79,0.06) 0%,transparent 70%)",pointerEvents:"none"}} />
      <div className="hero-grid" style={{maxWidth:1200,width:"100%",display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:48,alignItems:"center",position:"relative",zIndex:1}}>
        <div style={{maxWidth:580}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.08)",padding:"8px 18px",borderRadius:4,marginBottom:28}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:"var(--accent)"}} />
            <span style={{fontSize:12,fontWeight:700,color:"var(--accent)",letterSpacing:2,textTransform:"uppercase"}}>Serving Little Rock Since 1949</span>
          </div>
          <h1 style={{fontSize:"clamp(40px, 5vw, 68px)",lineHeight:1.05,color:"#fff",marginBottom:24,letterSpacing:-1.5}}>
            Little Rock's<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Original</span><br/>Plumbing Company
          </h1>
          <p style={{fontSize:18,lineHeight:1.7,color:"rgba(255,255,255,0.6)",marginBottom:28,maxWidth:460}}>
            Hayes LeMay and the Russell & LeMay team have been keeping Little Rock's plumbing and HVAC systems running for 77 years. Three generations of trust.
          </p>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:32}}>
            <Stars />
            <span style={{fontSize:14,color:"rgba(255,255,255,0.5)",fontStyle:"italic",marginLeft:4}}>"Top-notch! They go above and beyond." — Sean Morrison</span>
          </div>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,boxShadow:"0 4px 20px rgba(200,147,79,0.3)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Now</a>
            <button onClick={()=>go("services")} style={{display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"#fff",padding:"18px 32px",borderRadius:6,fontSize:16,fontWeight:600,border:"1.5px solid rgba(255,255,255,0.2)",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Our Services {Icons.arrow}</button>
          </div>
        </div>
        <div>
          <div style={{background:"#fff",borderRadius:12,padding:"44px 36px",boxShadow:"0 8px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"}}>
            {!formDone ? (
              <form onSubmit={e=>{e.preventDefault();setFormDone(true)}}>
                <h3 style={{fontSize:26,color:"var(--primary)",marginBottom:6,fontFamily:"'Playfair Display',serif"}}>Get a Free Estimate</h3>
                <p style={{fontSize:14,color:"var(--text-light)",marginBottom:28}}>We respond within the hour.</p>
                <input type="text" placeholder="Your name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} required style={{width:"100%",padding:"16px 18px",fontSize:15,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:14,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"var(--cream)"}} />
                <input type="tel" placeholder="Phone number" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} required style={{width:"100%",padding:"16px 18px",fontSize:15,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:14,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"var(--cream)"}} />
                <select value={formData.service} onChange={e=>setFormData({...formData,service:e.target.value})} required style={{width:"100%",padding:"16px 18px",fontSize:15,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:20,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"var(--cream)",color:formData.service?"var(--text)":"#999",appearance:"none"}}>
                  <option value="">What do you need help with?</option>
                  {allServiceNames.map(s=><option key={s} value={s}>{s}</option>)}
                </select>
                <button type="submit" style={{width:"100%",padding:18,background:"var(--primary)",color:"#fff",border:"none",borderRadius:6,fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Get My Free Estimate</button>
              </form>
            ) : (
              <div style={{textAlign:"center",padding:"24px 0"}}>
                <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(200,147,79,0.12)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",color:"var(--accent)"}}>{Icons.check}</div>
                <h3 style={{fontSize:22,color:"var(--primary)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>We Got It!</h3>
                <p style={{fontSize:14,color:"var(--text-mid)"}}>We'll call you back shortly.<br/>Call <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a> for emergencies.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

    {/* TRUST BAR — No rating shown (below 4.0), lead with years and credentials */}
    <section style={{padding:"72px clamp(24px,5vw,64px)",background:"var(--white)"}}>
      <div className="trust-grid" style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:32,textAlign:"center"}}>
        {[{num:"77",label:"Years",desc:"Serving since 1949"},{num:"3",label:"Generations",desc:"LeMay family"},{num:"Free",label:"Estimates",desc:"No obligation"},{num:"Licensed",label:"& Insured",desc:"Full coverage"}].map((s,i)=>(
          <div key={i}>
            <div className="serif" style={{fontSize:"clamp(36px,4vw,52px)",color:"var(--primary)",lineHeight:1,marginBottom:6,letterSpacing:-1}}>{s.num}</div>
            <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--text)",marginBottom:2}}>{s.label}</div>
            <div style={{fontSize:13,color:"var(--text-light)"}}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>

    {/* SERVICES — Layout C: Zigzag alternating rows */}
    <section id="services" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1000,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>What We Do</div>
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",color:"var(--primary)",letterSpacing:-0.5}}>Plumbing & HVAC in Little Rock, AR</h2>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
          {services.map((s,i)=>(
            <div key={i} className={`zigzag-row${i%2===1?" reverse":""}`} style={{display:"flex",flexDirection:i%2===1?"row-reverse":"row",alignItems:"center",gap:48,padding:"36px 0",borderBottom:i<services.length-1?"1px solid var(--border)":"none"}}>
              <div style={{display:"flex",alignItems:"center",gap:16,flex:"0 0 auto",minWidth:240}}>
                <div style={{color:"var(--accent)"}}>{s.icon}</div>
                <h3 style={{fontSize:19,color:"var(--primary)",fontWeight:600,fontFamily:"'DM Sans',sans-serif",lineHeight:1.3}}>{s.name}</h3>
              </div>
              <p style={{fontSize:15,color:"var(--text-mid)",lineHeight:1.7,flex:1}}>{s.desc}</p>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",marginTop:48,fontSize:15,color:"var(--text-light)"}}>Questions? Call us directly at <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a></p>
      </div>
    </section>

    {/* WHY US — Layout C: Light bg (cream) with pull quote */}
    <section id="about" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div className="why-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1.2fr 0.8fr",gap:80,alignItems:"start"}}>
        <div>
          <div className="gold-line" style={{marginBottom:20}} />
          <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>About Russell & LeMay</div>
          <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",lineHeight:1.15,marginBottom:28,color:"var(--primary)"}}>77 Years of<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Trusted Service</span></h2>
          <p style={{fontSize:16,lineHeight:1.8,color:"var(--text-mid)",marginBottom:24}}>
            Russell & LeMay has been a fixture in Little Rock since 1949. Founded nearly eight decades ago, the company is now led by Hayes LeMay, who brings over 51 years of personal experience in the trade. This is a family business in every sense — built on relationships, not transactions.
          </p>
          <p style={{fontSize:16,lineHeight:1.8,color:"var(--text-mid)",marginBottom:24}}>
            From residential plumbing repairs to commercial HVAC installations, the team handles it all with the kind of care and expertise that only comes from decades of doing the work. Wendy Roberts keeps the office running smoothly, and their service agreement program means you never have to worry about maintenance falling through the cracks.
          </p>
          {/* Pull quote — Layout C feature */}
          <div style={{borderLeft:"3px solid var(--accent)",paddingLeft:24,margin:"32px 0"}}>
            <p style={{fontSize:17,fontStyle:"italic",color:"var(--primary)",lineHeight:1.7}}>"Their customer service is impeccable and they go above and beyond to make their customers happy."</p>
            <p style={{fontSize:14,fontWeight:700,color:"var(--accent)",marginTop:8}}>— Sean Morrison</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:14,marginTop:24}}>
            {["Family Owned Since 1949","51+ Years Personal Experience (Hayes LeMay)","Readers' Choice Awards Finalist","Free Estimates","Licensed & Insured"].map((c,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:14}}>
                <div style={{color:"var(--accent)",flexShrink:0}}>{Icons.check}</div>
                <span style={{fontSize:15,fontWeight:500,color:"var(--text)"}}>{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="badge-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,paddingTop:20}}>
          {[
            {icon:Icons.home,title:"Residential",desc:"Complete home service"},
            {icon:Icons.wrench,title:"Commercial",desc:"Licensed for business"},
            {icon:Icons.wind,title:"HVAC",desc:"Heating & cooling"},
            {icon:Icons.shield,title:"77 Years",desc:"Since 1949"},
          ].map((b,i)=>(
            <div key={i} style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:10,padding:"28px 22px",textAlign:"center"}}>
              <div style={{color:"var(--accent)",marginBottom:12,display:"flex",justifyContent:"center"}}>{b.icon}</div>
              <div style={{fontWeight:700,fontSize:15,color:"var(--primary)",marginBottom:4}}>{b.title}</div>
              <div style={{fontSize:13,color:"var(--text-light)"}}>{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS — Layout C: Single large featured review, no rating in heading */}
    <section id="reviews" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--white)"}}>
      <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>Reviews</div>
        <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",color:"var(--primary)",marginBottom:56,letterSpacing:-0.5}}>What Our Customers Say</h2>
        <div style={{background:"var(--cream)",borderRadius:12,padding:"56px 48px",border:"1px solid var(--border)",position:"relative"}}>
          <div className="serif" style={{position:"absolute",top:20,left:36,fontSize:80,color:"var(--accent)",opacity:0.15,lineHeight:1}}>"</div>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{marginBottom:20}}><Stars /></div>
            <p style={{fontSize:20,fontStyle:"italic",color:"var(--text)",lineHeight:1.75,marginBottom:28}}>
              "{reviews[0].text}"
            </p>
            <div style={{fontWeight:700,fontSize:16,color:"var(--primary)"}}>{reviews[0].name}</div>
            <div style={{fontSize:13,color:"var(--text-light)",marginTop:4}}>{reviews[0].src} Review</div>
          </div>
        </div>
        <p style={{marginTop:20,fontSize:14,color:"var(--text-light)"}}>One of many satisfied customers since 1949</p>
        <p style={{marginTop:32,fontSize:15,color:"var(--text-light)"}}>Ready to experience the difference? Call <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a></p>
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
    <section style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--white)",textAlign:"center",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:600,margin:"0 auto"}}>
        <h2 className="serif" style={{fontSize:"clamp(32px,4vw,50px)",color:"var(--primary)",lineHeight:1.1,marginBottom:20,letterSpacing:-1}}>Need a plumber?<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Call Russell & LeMay.</span></h2>
        <p style={{fontSize:17,color:"var(--text-mid)",marginBottom:36,lineHeight:1.6}}>77 years of trusted service. Free estimates. Family owned since 1949.</p>
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"22px 52px",borderRadius:8,fontSize:20,fontWeight:700,boxShadow:"0 6px 28px rgba(200,147,79,0.35)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{background:"var(--primary)",color:"rgba(255,255,255,0.7)",padding:"64px clamp(24px,5vw,64px) 0"}}>
      <div className="footer-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr",gap:48,paddingBottom:40}}>
        <div>
          <div className="serif" style={{fontSize:22,color:"#fff",marginBottom:16}}><span>Russell & LeMay</span> <span style={{color:"var(--accent)"}}>Plumbing</span></div>
          <p style={{fontSize:14,lineHeight:1.7,opacity:0.7,marginBottom:16}}>Family-owned plumbing and HVAC company serving Little Rock and Central Arkansas since 1949. 77 years of trusted service.</p>
          <p style={{fontSize:14,lineHeight:1.8,opacity:0.6}}>8600 Cunningham Lake Rd<br/>Little Rock, AR 72205<br/><a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a></p>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Services</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>{allServiceNames.slice(0,8).map(s=><li key={s} style={{fontSize:14,opacity:0.6}}>{s}</li>)}</ul>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Areas</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>{areas.map(a=><li key={a} style={{fontSize:14,opacity:0.6}}>{a}</li>)}</ul>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"20px 0",maxWidth:1100,margin:"0 auto"}}>
        <div className="footer-btm-inner" style={{display:"flex",justifyContent:"space-between",fontSize:13,opacity:0.4,flexWrap:"wrap",gap:8}}>
          <span>&copy; {yr} Russell & LeMay Plumbing & Heating Inc. All rights reserved.</span>
          <span>Serving Little Rock Since 1949</span>
        </div>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px",fontSize:17,fontWeight:700,boxShadow:"0 -4px 20px rgba(0,0,0,0.15)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Russell & LeMay</a>
    </div>
    <div className="mobile-only" style={{height:60,display:"block"}} />
  </>);
}

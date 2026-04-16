// Layout: D | Industry: Plumber | City: Fort Smith
import { useState, useEffect, useRef } from "react";

const PHONE = "(479) 782-8940";
const TEL = "tel:+14797828940";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  wind: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2"/><path d="M12.59 19.41A2 2 0 1014 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1119.5 12H2"/></svg>,
  droplets: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z"/></svg>,
  pipe: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h4v12H4z"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M16 6h4v12h-4z"/><path d="M8 6h8v2H8z"/><path d="M8 16h8v2H8z"/></svg>,
  flame: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4.97 0 8-3.03 8-8 0-4.97-4-8-6-12-2 4-6 7.03-6 12 0 4.97 3.03 8 4 8z"/><path d="M12 22c-1.66 0-3-1.34-3-3 0-1.66 1-3 2-5 1 2 2 3.34 2 5 0 1.66-1.34 3-1 3z"/></svg>,
  zap: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C17F5E" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
};

const Stars = () => <span style={{display:"inline-flex",gap:2}}>{[...Array(5)].map((_,i)=><span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Plumbing Repair & Installation", desc: "From leaky faucets to full re-pipes, our team handles every residential and commercial plumbing job with precision and lasting results.", icon: Icons.wrench },
  { name: "HVAC Service & Installation", desc: "Complete heating and cooling solutions — system installs, seasonal tune-ups, and emergency repairs to keep your home comfortable year-round.", icon: Icons.wind },
  { name: "Drain Cleaning & Clog Removal", desc: "Stubborn clogs and slow drains cleared fast. Our experienced technicians restore full flow to kitchens, bathrooms, and main sewer lines.", icon: Icons.droplets },
  { name: "Gas Line Service", desc: "Safe, code-compliant gas line installation, repair, and leak detection for residential and commercial properties throughout the River Valley.", icon: Icons.pipe },
  { name: "Water Heater Service", desc: "Tank and tankless water heater installation, repair, and replacement. We help you choose the right system for your home and budget.", icon: Icons.flame },
  { name: "Emergency Plumbing", desc: "Plumbing emergencies don't wait for business hours. Call us when you need fast, reliable help — our team responds quickly to protect your home.", icon: Icons.zap },
];

const serviceNames = ["Plumbing Repair & Installation","HVAC Service & Installation","Drain Cleaning & Clog Removal","Gas Line Service","Water Heater Service","Emergency Plumbing"];

const areas = ["Fort Smith","Van Buren","Alma","Greenwood","Barling","Hackett","Lavaca","River Valley","Western Arkansas"];

const reviews = [
  { text: "Sending a huge thank you to Jeff and Ya Ya. They fixed an issue with my plumbing that should have been done by someone else when remodeling my bathroom recently. They were honest up front, explained everything clearly and professional.", name: "Paula Treadaway", src: "Google" },
  { text: "They're consistently quick to respond, and every interaction is marked by kindness, professionalism, and genuine helpfulness. Service is smooth and reliable — highly recommend!", name: "Kelsey Roe", src: "Google" },
  { text: "Great team of people. They were on time and even showed up on Christmas Eve at no extra charge to help us with our clogged drains. Raymond did a great job.", name: "Jeniffer Sears", src: "Google" },
];

const navLinks = [{label:"Services",id:"services"},{label:"About",id:"about"},{label:"Reviews",id:"reviews"},{label:"Areas",id:"areas"}];

export default function BlaylockHvacAndPlumbing() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("blaylock-hvac-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({name:"",phone:"",service:""});
  const revRef = useRef(null);

  const submitPw = (e) => { e.preventDefault(); if(pw==="roof"){sessionStorage.setItem("blaylock-hvac-auth","1");setAuthed(true)}else{setPwBad(true);setPw("")} };

  useEffect(() => { if(!authed) return; const fn=()=>setScrolled(window.scrollY>60); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn); }, [authed]);

  useEffect(() => {
    if(!authed) return;
    document.title = "Plumber & HVAC Fort Smith AR | Blaylock HVAC & Plumbing";
    const els = [];
    const add = (tag,attrs) => { const el=document.createElement(tag); Object.entries(attrs).forEach(([k,v])=>{if(k==="textContent")el.textContent=v;else el.setAttribute(k,v)}); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"Blaylock HVAC & Plumbing — 40+ years serving Fort Smith AR. 130+ reviews. Plumbing, HVAC, drains. Call (479) 782-8940."});
    add("meta",{name:"geo.region",content:"US-AR"});
    add("meta",{name:"geo.placename",content:"Fort Smith"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"Plumber",
      name:"Blaylock HVAC & Plumbing",telephone:"+14797828940",
      address:{"@type":"PostalAddress",streetAddress:"1900 N O St",addressLocality:"Fort Smith",addressRegion:"AR",postalCode:"72901",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:35.3942,longitude:-94.4244},
      openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"08:00",closes:"17:30"}],
      aggregateRating:{"@type":"AggregateRating",ratingValue:"4.2",reviewCount:"130",bestRating:"5"},
      founder:[{"@type":"Person",name:"Mike Blaylock",jobTitle:"Founder"},{"@type":"Person",name:"Matt Blaylock",jobTitle:"President"},{"@type":"Person",name:"Janet Blaylock",jobTitle:"Co-owner"}],
      description:"Blaylock HVAC & Plumbing is a family-owned plumbing and HVAC company serving Fort Smith, AR and the River Valley for over 40 years.",
      areaServed:areas.map(a=>({"@type":"City",name:a})),
      hasOfferCatalog:{"@type":"OfferCatalog",name:"Plumbing & HVAC Services",itemListElement:serviceNames.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:s}}))},
      memberOf:[],
      sameAs:[],
    })});
    return()=>els.forEach(el=>{try{document.head.removeChild(el)}catch(e){}});
  }, [authed]);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); };
  const yr = new Date().getFullYear();

  if (!authed) {
    return (<>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}
      `}</style>
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#4A1A2E"}}>
        <div style={{background:"#fff",borderRadius:16,padding:"56px 44px",textAlign:"center",maxWidth:420,width:"92%",boxShadow:"0 32px 80px rgba(0,0,0,.35)"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,marginBottom:8}}>
            <span style={{fontWeight:700,color:"#4A1A2E"}}>Blaylock</span> <span style={{color:"#C17F5E"}}>HVAC & Plumbing</span>
          </div>
          <p style={{fontSize:13,color:"#8A8A9A",letterSpacing:1,marginBottom:28,textTransform:"uppercase"}}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e=>{setPw(e.target.value);setPwBad(false)}} placeholder="••••" autoFocus style={{width:"100%",padding:16,fontSize:20,border:`2px solid ${pwBad?"#ef4444":"#e2e8f0"}`,borderRadius:8,textAlign:"center",letterSpacing:6,outline:"none",fontFamily:"'DM Sans',sans-serif",color:"#4A1A2E"}} />
            {pwBad && <p style={{color:"#ef4444",fontSize:12,marginTop:8,fontWeight:500}}>Incorrect password</p>}
            <button type="submit" style={{width:"100%",padding:16,marginTop:20,fontSize:15,fontWeight:700,letterSpacing:.3,background:"#4A1A2E",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
      :root{--primary:#4A1A2E;--accent:#C17F5E;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
      *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
      body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--cream);-webkit-font-smoothing:antialiased}
      h1,h2,h3,.serif{font-family:'Playfair Display',serif;font-weight:500}
      a{text-decoration:none;color:inherit}
      .gold-line{width:48px;height:2px;background:var(--accent)}
      .scroll-strip{overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}
      .scroll-strip::-webkit-scrollbar{display:none}
      @media(max-width:900px){
        .desktop-only{display:none!important}
        .mobile-only{display:flex!important}
        .hero-grid{grid-template-columns:1fr!important}
        .trust-sidebar{display:none!important}
        .trust-mobile{display:grid!important}
        .svc-masonry{grid-template-columns:1fr!important}
        .footer-grid{grid-template-columns:1fr!important}
        .footer-btm-inner{flex-direction:column;gap:8px;text-align:center}
      }
      @media(min-width:901px){.mobile-only{display:none!important}.trust-mobile{display:none!important}}
    `}</style>

    {/* NAV */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:scrolled?"14px clamp(24px,5vw,64px)":"20px clamp(24px,5vw,64px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(74,26,46,0.97)":"transparent",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.4s ease",boxShadow:scrolled?"0 1px 0 rgba(255,255,255,0.06)":"none"}}>
      <div className="serif" style={{fontSize:22,color:scrolled?"#fff":"var(--primary)",fontWeight:600,letterSpacing:-0.5}}>
        <span>Blaylock</span> <span style={{color:"var(--accent)"}}>HVAC & Plumbing</span>
      </div>
      <div className="desktop-only" style={{display:"flex",alignItems:"center",gap:36}}>
        {navLinks.map(l=><button key={l.id} onClick={()=>go(l.id)} style={{background:"none",border:"none",cursor:"pointer",fontSize:14,fontWeight:600,color:scrolled?"rgba(255,255,255,0.8)":"var(--text-mid)",letterSpacing:0.5,fontFamily:"'DM Sans',sans-serif"}}>{l.label}</button>)}
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

    {/* HERO — Layout D: Asymmetric 65/35, minimal, big type, no badge */}
    <section style={{minHeight:"100vh",padding:"140px clamp(24px,5vw,64px) 100px",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div className="hero-grid" style={{maxWidth:1200,width:"100%",display:"grid",gridTemplateColumns:"1.8fr 1fr",gap:48,alignItems:"center"}}>
        <div>
          <h1 style={{fontSize:"clamp(48px, 6vw, 84px)",lineHeight:1.0,color:"var(--primary)",letterSpacing:-2,marginBottom:24}}>
            Fort Smith's<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Trusted</span> Plumber<br/>& HVAC Team
          </h1>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:32}}>
            <Stars />
            <span style={{fontSize:14,color:"var(--text-light)",fontStyle:"italic",marginLeft:4}}>"Honest up front, explained everything clearly" — Paula Treadaway</span>
          </div>
          <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,boxShadow:"0 4px 20px rgba(193,127,94,0.3)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Matt — {PHONE}</a>
        </div>
        <div>
          <div style={{background:"#fff",borderRadius:12,padding:"32px 28px",boxShadow:"0 4px 40px rgba(0,0,0,0.08)",border:"1px solid var(--border)"}}>
            {!formDone ? (
              <form onSubmit={e=>{e.preventDefault();setFormDone(true)}}>
                <h3 style={{fontSize:22,color:"var(--primary)",marginBottom:6,fontFamily:"'Playfair Display',serif"}}>Get a Free Quote</h3>
                <p style={{fontSize:13,color:"var(--text-light)",marginBottom:24}}>We respond within the hour.</p>
                <input type="text" placeholder="Your name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:12,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"var(--cream)"}} />
                <input type="tel" placeholder="Phone number" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:12,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"var(--cream)"}} />
                <select value={formData.service} onChange={e=>setFormData({...formData,service:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:16,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"var(--cream)",color:formData.service?"var(--text)":"#999",appearance:"none"}}>
                  <option value="">What do you need help with?</option>
                  {serviceNames.map(s=><option key={s} value={s}>{s}</option>)}
                </select>
                <button type="submit" style={{width:"100%",padding:16,background:"var(--primary)",color:"#fff",border:"none",borderRadius:6,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Get My Free Quote</button>
              </form>
            ) : (
              <div style={{textAlign:"center",padding:"20px 0"}}>
                <div style={{width:48,height:48,borderRadius:"50%",background:"rgba(193,127,94,0.12)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",color:"var(--accent)"}}>{Icons.check}</div>
                <h3 style={{fontSize:20,color:"var(--primary)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>We Got It!</h3>
                <p style={{fontSize:13,color:"var(--text-mid)"}}>We'll call you back shortly.<br/>Call <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a> for emergencies.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES + TRUST — Layout D: Trust sidebar left, masonry services right */}
    <section id="services" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>What We Do</div>
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",color:"var(--primary)",letterSpacing:-0.5}}>Plumbing & HVAC Services in Fort Smith</h2>
        </div>

        {/* Mobile trust stats */}
        <div className="trust-mobile" style={{display:"none",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:48,textAlign:"center"}}>
          {[
            {num:"130+",label:"Customer Reviews",desc:"Trusted by Fort Smith"},
            {num:"40+",label:"Years in Business",desc:"Since the 1980s"},
            {num:"Dual",label:"HVAC + Plumbing",desc:"Two trades, one call"},
            {num:"Family",label:"Owned & Operated",desc:"Three generations"},
          ].map((s,i)=>(
            <div key={i}>
              <div className="serif" style={{fontSize:"clamp(32px,4vw,44px)",color:"var(--primary)",lineHeight:1,marginBottom:6,letterSpacing:-1}}>{s.num}</div>
              <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--text)",marginBottom:2}}>{s.label}</div>
              <div style={{fontSize:13,color:"var(--text-light)"}}>{s.desc}</div>
            </div>
          ))}
        </div>

        <div style={{display:"grid",gridTemplateColumns:"200px 1fr",gap:48}}>
          {/* Trust sidebar */}
          <div className="trust-sidebar" style={{display:"flex",flexDirection:"column",gap:32,paddingTop:8}}>
            {[
              {num:"130+",label:"Customer Reviews",desc:"Trusted by Fort Smith"},
              {num:"40+",label:"Years in Business",desc:"Since the 1980s"},
              {num:"Dual",label:"HVAC + Plumbing",desc:"Two trades, one call"},
              {num:"Family",label:"Owned & Operated",desc:"Three generations"},
            ].map((s,i)=>(
              <div key={i} style={{borderLeft:"4px solid var(--accent)",paddingLeft:20}}>
                <div className="serif" style={{fontSize:36,color:"var(--primary)",lineHeight:1,marginBottom:4,letterSpacing:-1}}>{s.num}</div>
                <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--text)",marginBottom:2}}>{s.label}</div>
                <div style={{fontSize:13,color:"var(--text-light)"}}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Masonry cards */}
          <div className="svc-masonry" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
            {services.map((s,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:10,padding:i%3===0?"44px 36px":"36px 30px",border:"1px solid var(--border)",transition:"all 0.3s ease",cursor:"default",position:"relative",overflow:"hidden"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.1)";e.currentTarget.querySelector('.cb').style.width="100%"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";e.currentTarget.querySelector('.cb').style.width="0"}}>
                <div className="cb" style={{position:"absolute",top:0,left:0,width:0,height:2,background:"var(--accent)",transition:"width 0.35s ease"}} />
                <div style={{color:"var(--accent)",marginBottom:18}}>{s.icon}</div>
                <h3 style={{fontSize:18,color:"var(--primary)",marginBottom:10,fontWeight:600,fontFamily:"'DM Sans',sans-serif",lineHeight:1.3}}>{s.name}</h3>
                <p style={{fontSize:14,color:"var(--text-mid)",lineHeight:1.7}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <p style={{textAlign:"center",marginTop:48,fontSize:15,color:"var(--text-light)"}}>
          Questions? Call Matt directly at <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* WHY US — Layout D: Giant number bg, single column centered */}
    <section id="about" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--primary)",position:"relative",overflow:"hidden"}}>
      <div className="serif" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:"clamp(120px,20vw,280px)",color:"var(--accent)",opacity:0.08,lineHeight:1,whiteSpace:"nowrap",pointerEvents:"none"}}>40+</div>
      <div style={{maxWidth:800,margin:"0 auto",position:"relative",zIndex:1}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14,textAlign:"center",opacity:0.7}}>About Blaylock</div>
        <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",lineHeight:1.15,marginBottom:28,color:"#fff",textAlign:"center"}}>A Family Legacy<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>40+ Years Strong</span></h2>
        <p style={{fontSize:16,lineHeight:1.8,color:"rgba(255,255,255,0.6)",marginBottom:24,textAlign:"center"}}>
          Blaylock HVAC & Plumbing was founded by Mike Blaylock with a simple promise: show up on time, do the work right, and treat every customer like a neighbor. More than four decades later, that promise still holds. Today, Matt Blaylock serves as President and Janet Blaylock as co-owner — carrying the family name forward with the same integrity Mike built it on. You might recognize them by the red trucks.
        </p>
        <p style={{fontSize:16,lineHeight:1.8,color:"rgba(255,255,255,0.6)",marginBottom:36,textAlign:"center"}}>
          With 130+ customer reviews and a team that people ask for by name — Raymond, Jeff, Ya Ya, Luis — Blaylock isn't just a company. It's a Fort Smith institution. They're the crew that showed up on Christmas Eve at no extra charge to clear clogged drains, because that's what family-run businesses do. Whether it's plumbing or HVAC, one call handles both.
        </p>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:20}}>
          {["40+ Years of Service","130+ Customer Reviews","Family Owned & Operated","HVAC + Plumbing — Dual Trade","Christmas Eve Emergency Calls","Serving the Entire River Valley"].map((c,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{color:"var(--accent)",flexShrink:0}}>{Icons.check}</div>
              <span style={{fontSize:14,fontWeight:600,color:"rgba(255,255,255,0.85)",whiteSpace:"nowrap"}}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS — Layout D: Horizontal scrolling strip */}
    <section id="reviews" style={{padding:"110px 0",background:"var(--white)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",paddingLeft:"clamp(24px,5vw,64px)",paddingRight:"clamp(24px,5vw,64px)"}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>Reviews</div>
          <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",color:"var(--primary)",letterSpacing:-0.5}}>What Our Customers Say</h2>
        </div>
      </div>
      <div style={{position:"relative"}}>
        <div ref={revRef} className="scroll-strip" style={{display:"flex",gap:20,paddingLeft:"clamp(24px,5vw,64px)",paddingRight:"clamp(24px,5vw,64px)",paddingBottom:8}}>
          {reviews.map((r,i)=>(
            <div key={i} style={{flex:"0 0 320px",scrollSnapAlign:"start",background:"var(--cream)",borderRadius:12,padding:"36px 30px",border:"1px solid var(--border)",display:"flex",flexDirection:"column"}}>
              <div style={{marginBottom:16}}><Stars /></div>
              <p style={{fontSize:15,fontStyle:"italic",color:"var(--text)",lineHeight:1.75,marginBottom:20,flex:1}}>"{r.text}"</p>
              <div style={{fontWeight:700,fontSize:15,color:"var(--primary)"}}>{r.name}</div>
              <div style={{fontSize:13,color:"var(--text-light)",marginTop:2}}>{r.src} Review</div>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div style={{position:"absolute",top:0,left:0,bottom:8,width:60,background:"linear-gradient(to right,var(--white),transparent)",pointerEvents:"none"}} />
        <div style={{position:"absolute",top:0,right:0,bottom:8,width:60,background:"linear-gradient(to left,var(--white),transparent)",pointerEvents:"none"}} />
      </div>
      <p style={{textAlign:"center",marginTop:32,fontSize:15,color:"var(--text-light)",padding:"0 clamp(24px,5vw,64px)"}}>
        Ready to experience the difference? Call <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
      </p>
    </section>

    {/* SERVICE AREAS */}
    <section id="areas" style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>Service Areas</div>
        <h2 style={{fontSize:"clamp(28px,3vw,38px)",color:"var(--primary)",marginBottom:48,letterSpacing:-0.5}}>Serving Fort Smith & the River Valley</h2>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12}}>
          {areas.map((a,i)=>(
            <span key={i} title={`Plumber in ${a}${a==="River Valley"||a==="Western Arkansas"?"":", AR"}`} style={{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid var(--border)",padding:"12px 24px",borderRadius:30,fontSize:15,fontWeight:500,color:"var(--text)",cursor:"default",transition:"all 0.25s"}}
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
        <h2 className="serif" style={{fontSize:"clamp(32px,4vw,50px)",color:"var(--primary)",lineHeight:1.1,marginBottom:20,letterSpacing:-1}}>
          Got a plumbing or HVAC problem?<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Call Matt.</span>
        </h2>
        <p style={{fontSize:17,color:"var(--text-mid)",marginBottom:36,lineHeight:1.6}}>
          40+ years of honest, family-owned service. 130+ five-star reviews. One call for both plumbing and HVAC.
        </p>
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"22px 52px",borderRadius:8,fontSize:20,fontWeight:700,boxShadow:"0 6px 28px rgba(193,127,94,0.35)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{background:"var(--primary)",color:"rgba(255,255,255,0.7)",padding:"64px clamp(24px,5vw,64px) 0"}}>
      <div className="footer-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr",gap:48,paddingBottom:40}}>
        <div>
          <div className="serif" style={{fontSize:22,color:"#fff",marginBottom:16}}><span>Blaylock</span> <span style={{color:"var(--accent)"}}>HVAC & Plumbing</span></div>
          <p style={{fontSize:14,lineHeight:1.7,opacity:0.7,marginBottom:16}}>Family-owned plumbing and HVAC service for Fort Smith and the River Valley. Founded by Mike Blaylock. Now led by Matt and Janet Blaylock. 40+ years strong.</p>
          <p style={{fontSize:14,lineHeight:1.8,opacity:0.6}}>1900 N O St<br/>Fort Smith, AR 72901<br/><a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a></p>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Services</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
            {serviceNames.map(s=><li key={s} style={{fontSize:14,opacity:0.6}}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Areas</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
            {areas.map(a=><li key={a} style={{fontSize:14,opacity:0.6}}>{a}</li>)}
          </ul>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"20px 0",maxWidth:1100,margin:"0 auto"}}>
        <div className="footer-btm-inner" style={{display:"flex",justifyContent:"space-between",fontSize:13,opacity:0.4,flexWrap:"wrap",gap:8}}>
          <span>&copy; {yr} Blaylock HVAC & Plumbing. All rights reserved.</span>
          <span>Serving Fort Smith for 40+ years</span>
        </div>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px",fontSize:17,fontWeight:700,boxShadow:"0 -4px 20px rgba(0,0,0,0.15)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Blaylock</a>
    </div>
    <div className="mobile-only" style={{height:60,display:"block"}} />
  </>);
}

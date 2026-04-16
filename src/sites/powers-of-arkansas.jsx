// Layout: B | Industry: HVAC | City: North Little Rock
import { useState, useEffect } from "react";

const PHONE = "(877) 274-7127";
const TEL = "tel:+18772747127";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  wind: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>,
  wrench: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  thermometer: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>,
  cpu: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
  sliders: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>,
  leaf: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 17 3.5s-.3 3.5.7 8.5c1 5-2.7 8-6.7 8z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  building: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#C17F5E" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
  clock: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  checkCircle: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C17F5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11.5 14.5 15.5 9.5"/></svg>,
};

const Stars = () => <span style={{display:"inline-flex",gap:2}}>{[...Array(5)].map((_,i)=><span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Commercial HVAC Installation & Service", desc: "Full-scale heating and cooling installation, diagnostics, and repair for commercial and institutional facilities. Engineered for reliability in mission-critical environments.", icon: Icons.wind },
  { name: "Siemens Building Automation Systems", desc: "Authorized Siemens controls distributor providing complete building automation solutions. Integrated systems for energy management, comfort, and operational efficiency.", icon: Icons.cpu },
  { name: "Building Controls & Integration", desc: "Advanced controls programming, integration, and commissioning for complex building systems. Seamless coordination across HVAC, lighting, and facility operations.", icon: Icons.sliders },
  { name: "HVAC System Planning & Design", desc: "Engineering-driven system design for new construction and major renovations. Right-sized solutions tailored to institutional requirements and long-term performance.", icon: Icons.thermometer },
  { name: "Green Building Design", desc: "Sustainable building strategies that reduce energy consumption and operating costs. LEED-aligned approaches for institutions committed to environmental responsibility.", icon: Icons.leaf },
  { name: "Commercial HVAC Maintenance", desc: "Preventive maintenance programs designed for hospitals, universities, and large facilities. Proactive service that extends equipment life and prevents costly downtime.", icon: Icons.shield },
];

const serviceNames = ["Commercial HVAC Installation & Service","Siemens Building Automation","Building Controls & Integration","HVAC System Planning & Design","Green Building Design","Commercial HVAC Maintenance"];

const areas = ["Little Rock","Siloam Springs","Batesville","Arkadelphia","Conway","North Little Rock"];

const reviews = [
  { text: "Great local company that does service, planning, design and installation of building automation systems. Siemens distributor. Green building designs. Respected firm with many years of experience in large building systems in Arkansas.", name: "Steve Gray", src: "Google" },
  { text: "Best of the best! David and his team are always right there when we need them no matter what. They are trustworthy, professional and fair.", name: "Miranda Sharpe", src: "Google" },
];

const navLinks = [{label:"Services",id:"services"},{label:"About",id:"about"},{label:"Reviews",id:"reviews"},{label:"Areas",id:"areas"}];

export default function PowersOfArkansas() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("poa-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({name:"",phone:"",service:""});

  const submitPw = (e) => { e.preventDefault(); if(pw==="roof"){sessionStorage.setItem("poa-auth","1");setAuthed(true)}else{setPwBad(true);setPw("")} };
  useEffect(() => { if(!authed) return; const fn=()=>setScrolled(window.scrollY>60); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn); }, [authed]);

  useEffect(() => {
    if(!authed) return;
    document.title = "Commercial HVAC North Little Rock AR | Powers of Arkansas";
    const els = [];
    const add = (tag,attrs) => { const el=document.createElement(tag); Object.entries(attrs).forEach(([k,v])=>{if(k==="textContent")el.textContent=v;else el.setAttribute(k,v)}); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"Commercial HVAC and Siemens building automation in North Little Rock, AR. Serving hospitals, universities, and institutions statewide. Call (877) 274-7127."});
    add("meta",{name:"geo.region",content:"US-AR"});
    add("meta",{name:"geo.placename",content:"North Little Rock"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"HVACBusiness",
      name:"Powers of Arkansas",telephone:"+18772747127",email:"accounting@powers-hvac.com",
      address:{"@type":"PostalAddress",streetAddress:"5440 Northshore Dr",addressLocality:"North Little Rock",addressRegion:"AR",postalCode:"72118",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:34.8029,longitude:-92.2812},
      openingHoursSpecification:[
        {"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"08:00",closes:"17:00"}
      ],
      aggregateRating:{"@type":"AggregateRating",ratingValue:"4.4",reviewCount:"20",bestRating:"5"},
      description:"Powers of Arkansas is a commercial HVAC and Siemens building automation company serving hospitals, universities, and institutions throughout Arkansas. Authorized Siemens controls distributor with on-site parts department.",
      areaServed:areas.map(a=>({"@type":"City",name:a})),
      hasOfferCatalog:{"@type":"OfferCatalog",name:"Services",itemListElement:serviceNames.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:s}}))},
      memberOf:[{"@type":"Organization",name:"Siemens Authorized Distributor"}],sameAs:[],
    })});
    return()=>els.forEach(el=>{try{document.head.removeChild(el)}catch(e){}});
  }, [authed]);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); };
  const yr = new Date().getFullYear();

  if (!authed) {
    return (<>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}`}</style>
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#4A1A2E"}}>
        <div style={{background:"#fff",borderRadius:16,padding:"56px 44px",textAlign:"center",maxWidth:420,width:"92%",boxShadow:"0 32px 80px rgba(0,0,0,.35)"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,marginBottom:8,fontWeight:600,letterSpacing:-0.5}}><span style={{color:"#4A1A2E"}}>Powers of</span> <span style={{color:"#C17F5E"}}>Arkansas</span></div>
          <p style={{fontSize:13,color:"#8A8A9A",letterSpacing:1,marginBottom:28,textTransform:"uppercase"}}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e=>{setPw(e.target.value);setPwBad(false)}} placeholder="••••" autoFocus style={{width:"100%",padding:16,fontSize:20,border:`2px solid ${pwBad?"#ef4444":"#e2e8f0"}`,borderRadius:8,textAlign:"center",letterSpacing:6,outline:"none",fontFamily:"'DM Sans',sans-serif",color:"#4A1A2E"}} />
            {pwBad && <p style={{color:"#ef4444",fontSize:12,marginTop:8,fontWeight:500}}>Incorrect password</p>}
            <button type="submit" style={{width:"100%",padding:16,marginTop:20,fontSize:15,fontWeight:700,background:"#4A1A2E",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Site</button>
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
      @media(max-width:900px){.desktop-only{display:none!important}.mobile-only{display:flex!important}.svc-grid{grid-template-columns:1fr!important}.why-creds-row{flex-direction:column!important;gap:12px!important}.rev-grid{grid-template-columns:1fr!important}.footer-grid{grid-template-columns:1fr!important}.footer-btm-inner{flex-direction:column;gap:8px;text-align:center}.trust-row{grid-template-columns:1fr 1fr!important}.hero-btns{flex-direction:column;align-items:center}.mob-pad{padding-bottom:80px!important}}
      @media(min-width:901px){.mobile-only{display:none!important}}
    `}</style>

    {/* NAV */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:scrolled?"14px clamp(24px,5vw,64px)":"20px clamp(24px,5vw,64px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(74,26,46,0.97)":"transparent",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.4s ease"}}>
      <div className="serif" style={{fontSize:22,color:scrolled?"#fff":"var(--primary)",fontWeight:600,letterSpacing:-0.5,cursor:"pointer"}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}><span>Powers of</span> <span style={{color:"var(--accent)"}}>Arkansas</span></div>
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
        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(193,127,94,0.1)",padding:"8px 18px",borderRadius:4,marginBottom:28}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:"var(--accent)"}} />
          <span style={{fontSize:12,fontWeight:700,color:"var(--accent)",letterSpacing:2,textTransform:"uppercase"}}>Siemens Authorized Distributor</span>
        </div>
        <h1 style={{fontSize:"clamp(44px, 6vw, 80px)",lineHeight:1.05,color:"var(--primary)",marginBottom:24,letterSpacing:-2}}>
          Commercial HVAC<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Arkansas Trusts</span>
        </h1>
        <p style={{fontSize:18,lineHeight:1.7,color:"var(--text-mid)",marginBottom:32,maxWidth:600,margin:"0 auto 32px"}}>
          Building automation, controls integration, and commercial HVAC for hospitals, universities, and institutions throughout Arkansas. Siemens partnership. Statewide service.
        </p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:36}}>
          <Stars />
          <span style={{fontSize:14,color:"var(--text-light)",fontStyle:"italic",marginLeft:4}}>"Trustworthy, professional and fair. Always right there when we need them." -- Miranda Sharpe</span>
        </div>
        <div className="hero-btns" style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",boxShadow:"0 4px 20px rgba(193,127,94,0.3)",transition:"transform 0.2s"}}>{Icons.phone} Call Now</a>
          <button onClick={()=>go("form")} style={{display:"inline-flex",alignItems:"center",gap:10,background:"transparent",color:"var(--primary)",padding:"18px 32px",borderRadius:6,fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",border:"1.5px solid var(--border)",cursor:"pointer",transition:"all 0.2s"}}>Request a Consultation</button>
        </div>
      </div>
    </section>

    {/* FORM + TRUST -- Layout B: Combined section */}
    <section id="form" style={{padding:"80px clamp(24px,5vw,64px)",background:"var(--white)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center"}}>
        {/* Form Card */}
        <div style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:12,padding:"44px 36px",maxWidth:480,width:"100%",boxShadow:"0 4px 40px rgba(0,0,0,0.08)"}}>
          {!formDone ? (<>
            <h2 style={{fontSize:"clamp(24px,3vw,32px)",color:"var(--primary)",textAlign:"center",marginBottom:6}}>Request a Consultation</h2>
            <p style={{fontSize:14,color:"var(--text-light)",textAlign:"center",marginBottom:28}}>We respond within one business day.</p>
            <form onSubmit={e=>{e.preventDefault();setFormDone(true)}} style={{display:"flex",flexDirection:"column",gap:14}}>
              <input type="text" required placeholder="Your name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} style={{padding:"14px 16px",borderRadius:8,border:"1px solid var(--border)",background:"var(--cream)",fontSize:15,fontFamily:"'DM Sans',sans-serif",outline:"none"}} />
              <input type="tel" required placeholder="Phone number" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} style={{padding:"14px 16px",borderRadius:8,border:"1px solid var(--border)",background:"var(--cream)",fontSize:15,fontFamily:"'DM Sans',sans-serif",outline:"none"}} />
              <select required value={formData.service} onChange={e=>setFormData({...formData,service:e.target.value})} style={{padding:"14px 16px",borderRadius:8,border:"1px solid var(--border)",background:"var(--cream)",fontSize:15,fontFamily:"'DM Sans',sans-serif",outline:"none",color:formData.service?"var(--text)":"var(--text-light)"}}>
                <option value="" disabled>Service needed</option>
                {serviceNames.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
              <button type="submit" style={{padding:"16px",borderRadius:8,background:"var(--primary)",color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",border:"none",cursor:"pointer",marginTop:4}}>Request Consultation</button>
            </form>
          </>) : (
            <div style={{textAlign:"center",padding:"20px 0"}}>
              <div style={{margin:"0 auto 16px",width:48,height:48}}>{Icons.checkCircle}</div>
              <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:"var(--primary)",marginBottom:8}}>We Got It!</h3>
              <p style={{fontSize:14,color:"var(--text-mid)",lineHeight:1.6}}>Our team will be in touch shortly. For urgent needs, call <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a></p>
            </div>
          )}
        </div>

        {/* Trust Stats Row */}
        <div className="trust-row" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:32,marginTop:56,maxWidth:800,width:"100%",textAlign:"center"}}>
          {[
            {num:"20+",label:"Client Reviews",desc:"Verified on Google"},
            {num:"Siemens",label:"Authorized Distributor",desc:"Controls & automation"},
            {num:"Statewide",label:"Arkansas Coverage",desc:"Toll-free service line"},
            {num:"877",label:"Toll-Free Service",desc:"One call, statewide reach"},
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
          Questions about your facility? Call our team directly at <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* WHY US -- Layout B: Single column centered, dark section */}
    <section id="about" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--primary)"}}>
      <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:14}}>Why Powers</p>
        <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",lineHeight:1.15,color:"#fff",letterSpacing:-0.5,marginBottom:40}}>The Siemens Partner Arkansas Relies On</h2>
        <p style={{fontSize:17,lineHeight:1.8,color:"rgba(255,255,255,0.75)",marginBottom:24}}>
          Powers of Arkansas is not a typical HVAC contractor. As an authorized Siemens controls distributor, the company specializes in building automation systems for the institutions that keep Arkansas running -- hospitals like UAMS and Baptist Health, VA Healthcare facilities, universities, and major commercial properties. From system planning and design through installation and ongoing maintenance, Powers handles the full lifecycle of complex building systems.
        </p>
        <p style={{fontSize:17,lineHeight:1.8,color:"rgba(255,255,255,0.75)",marginBottom:48}}>
          With an on-site parts department, a toll-free service line, and a team led by David that clients describe as "trustworthy, professional, and fair," Powers delivers the kind of responsive, expert service that large facilities demand. Their green building design capabilities and statewide coverage -- from Little Rock to Siloam Springs -- make them the go-to partner for institutions that cannot afford downtime.
        </p>
        <div className="why-creds-row" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:24}}>
          {["Authorized Siemens Distributor","Building Automation Systems","Statewide Arkansas Coverage","On-Site Parts Department","Green Building Design","Institutional & Healthcare Clients"].map((c,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{color:"var(--accent)",flexShrink:0}}>{Icons.check}</span>
              <span style={{fontSize:15,color:"rgba(255,255,255,0.85)",fontWeight:500}}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS -- Layout B: 2 review cards side by side */}
    <section id="reviews" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--white)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:14}}>Testimonials</p>
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5}}>What Our Clients Say</h2>
        </div>
        <div className="rev-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20,maxWidth:900,margin:"0 auto"}}>
          {reviews.map((r,i)=>(
            <div key={i} style={{background:"var(--cream)",border:"1px solid var(--border)",borderRadius:12,padding:"36px 30px"}}>
              <div style={{color:"var(--accent)",marginBottom:16,opacity:0.4}} aria-hidden="true">{Icons.quote}</div>
              <div style={{marginBottom:16}}><Stars /></div>
              <p style={{fontSize:16,lineHeight:1.7,color:"var(--text-mid)",fontStyle:"italic",marginBottom:20}}>"{r.text}"</p>
              <div>
                <span style={{fontWeight:700,color:"var(--primary)"}}>{r.name}</span>
                <span style={{fontSize:13,color:"var(--text-light)",marginLeft:8}}>{r.src}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",marginTop:48,fontSize:15,color:"var(--text-mid)"}}>
          Ready to discuss your building systems? Call <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
        </p>
      </div>
    </section>

    {/* SERVICE AREAS */}
    <section id="areas" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:14}}>Service Areas</p>
        <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5,marginBottom:56}}>Statewide Arkansas Coverage</h2>
        <div style={{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center"}}>
          {areas.map((a,i)=>(
            <span key={i} title={`Commercial HVAC in ${a}, AR`} style={{display:"inline-flex",alignItems:"center",gap:6,padding:"10px 20px",borderRadius:100,border:"1px solid var(--border)",background:"var(--white)",fontSize:14,fontWeight:500,color:"var(--text-mid)",cursor:"default",transition:"all 0.2s"}}
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
          Need building systems expertise?<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Call our team.</span>
        </h2>
        <p style={{fontSize:17,lineHeight:1.7,color:"var(--text-mid)",marginBottom:36}}>
          From Siemens building automation to full-scale commercial HVAC, Powers of Arkansas delivers the engineering-driven solutions institutions depend on. Toll-free, statewide service.
        </p>
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 40px",borderRadius:6,fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",boxShadow:"0 4px 20px rgba(193,127,94,0.3)"}}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="mob-pad" style={{padding:"80px clamp(24px,5vw,64px) 40px",background:"var(--primary)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div className="footer-grid" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:48,marginBottom:48}}>
          <div>
            <div className="serif" style={{fontSize:22,fontWeight:600,letterSpacing:-0.5,marginBottom:16}}><span style={{color:"#fff"}}>Powers of</span> <span style={{color:"var(--accent)"}}>Arkansas</span></div>
            <p style={{fontSize:14,lineHeight:1.7,color:"rgba(255,255,255,0.6)",marginBottom:16,maxWidth:320}}>Commercial HVAC and Siemens building automation for hospitals, universities, and institutions throughout Arkansas. Authorized distributor with on-site parts department.</p>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.6)",marginBottom:6}}>5440 Northshore Dr, North Little Rock, AR 72118</p>
            <a href={TEL} style={{fontSize:14,color:"var(--accent)",fontWeight:600}}>{PHONE}</a>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.5)",marginTop:6}}>accounting@powers-hvac.com</p>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.4)",marginTop:8,display:"flex",alignItems:"center",gap:6}}><span style={{color:"var(--accent)",display:"inline-flex"}}>{Icons.clock}</span> Mon-Fri 8AM-5PM</p>
          </div>
          <div>
            <h4 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:16,textTransform:"uppercase",letterSpacing:1}}>Services</h4>
            {serviceNames.map((s,i)=><p key={i} style={{fontSize:13,color:"rgba(255,255,255,0.55)",marginBottom:8,lineHeight:1.5}}>{s}</p>)}
          </div>
          <div>
            <h4 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:16,textTransform:"uppercase",letterSpacing:1}}>Areas</h4>
            {areas.map((a,i)=><p key={i} style={{fontSize:13,color:"rgba(255,255,255,0.55)",marginBottom:8}}>{a}</p>)}
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:24}}>
          <div className="footer-btm-inner" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.35)"}}>{"\u00A9"} {yr} Powers of Arkansas. All rights reserved.</p>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.35)"}}>Authorized Siemens Controls Distributor</p>
          </div>
        </div>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,width:"100%",padding:"16px",background:"var(--accent)",color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",boxShadow:"0 -4px 20px rgba(0,0,0,0.15)"}}>{Icons.phone} Call Powers of Arkansas</a>
    </div>
  </>);
}

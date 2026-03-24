// Layout: D | Industry: Electrician | City: Little Rock
import { useState, useEffect, useRef } from "react";

const PHONE = "(501) 372-3720";
const TEL = "tel:+15013723720";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  zap: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  home: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  building: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
  generator: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2"/><line x1="12" y1="11" x2="12" y2="13"/><circle cx="12" cy="12" r="3"/><line x1="6" y1="17" x2="6" y2="20"/><line x1="18" y1="17" x2="18" y2="20"/></svg>,
  bulb: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z"/></svg>,
  wifi: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>,
  hardhat: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18h20v2H2z"/><path d="M4 18v-4a8 8 0 0116 0v4"/><path d="M12 2v4"/><path d="M8 6l1 4"/><path d="M16 6l-1 4"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4A03C" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
};

const Stars = () => <span style={{display:"inline-flex",gap:2}}>{[...Array(5)].map((_,i)=><span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Commercial Electrical", desc: "Full-service electrical solutions for businesses across Central Arkansas. Office wiring, tenant improvements, and code-compliant installations.", icon: Icons.building },
  { name: "Residential Electrical", desc: "Complete home electrical services from troubleshooting and repairs to whole-house rewiring. Keeping Little Rock homes safe and powered.", icon: Icons.home },
  { name: "Generator Sales & Installation", desc: "Standby and portable generator systems professionally installed. Never lose power during Arkansas storm season again.", icon: Icons.generator },
  { name: "Lighting Retrofits", desc: "Energy-efficient lighting upgrades for commercial and residential properties. LED conversions that reduce costs and improve visibility.", icon: Icons.bulb },
  { name: "Network & Telephone", desc: "Structured cabling, data network installation, and telephone system wiring for offices and commercial spaces.", icon: Icons.wifi },
  { name: "New Construction", desc: "Electrical rough-in and finish work for new residential and commercial builds. On schedule, to code, every time.", icon: Icons.hardhat },
];

const allServiceNames = [
  "Commercial Electrical",
  "Residential Electrical",
  "Generator Sales & Installation",
  "Lighting Retrofits",
  "Wiring Repair & Upgrades",
  "Meter & Panel Service",
  "Network & Telephone Installations",
  "New Construction",
  "Renovations & Tenant Improvements",
  "Service Upgrades",
];

const areas = ["Little Rock", "North Little Rock", "Hot Springs", "Sherwood", "Jacksonville", "Maumelle", "Bryant", "Benton"];

const reviews = [
  { text: "Great people!!!", name: "Gregg Herron", src: "Google" },
  { text: "Best in the city.", name: "James Doolittle", src: "Google" },
  { text: "Best of the best!", name: "Reggie Heidelberg", src: "Google" },
  { text: "Great group of electricians.", name: "Melissa Stickford", src: "Google" },
];

const navLinks = [{label:"Services",id:"services"},{label:"About",id:"about"},{label:"Reviews",id:"reviews"},{label:"Areas",id:"areas"}];

export default function ArkansasElectricServiceAndContracting() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("arkelectric-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({name:"",phone:"",service:""});
  const revRef = useRef(null);

  const submitPw = (e) => { e.preventDefault(); if(pw==="2026"){sessionStorage.setItem("arkelectric-auth","1");setAuthed(true)}else{setPwBad(true);setPw("")} };
  useEffect(() => { if(!authed) return; const fn=()=>setScrolled(window.scrollY>60); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn); }, [authed]);

  useEffect(() => {
    if(!authed) return;
    document.title = "Electrician Little Rock AR | Arkansas Electric Service";
    const els = [];
    const add = (tag,attrs) => { const el=document.createElement(tag); Object.entries(attrs).forEach(([k,v])=>{if(k==="textContent")el.textContent=v;else el.setAttribute(k,v)}); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"Licensed electrician in Little Rock, AR. Commercial & residential. Est 2011. Call (501) 372-3720."});
    add("meta",{name:"geo.region",content:"US-AR"});
    add("meta",{name:"geo.placename",content:"Little Rock"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"Electrician",
      name:"Arkansas Electric Service & Contracting",telephone:"+15013723720",
      email:"arkansaselectricsales@gmail.com",
      address:{"@type":"PostalAddress",streetAddress:"1115 Bond Ave",addressLocality:"Little Rock",addressRegion:"AR",postalCode:"72202",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:34.7465,longitude:-92.2896},
      openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"07:00",closes:"16:00"}],
      aggregateRating:{"@type":"AggregateRating",ratingValue:"4.5",reviewCount:"11",bestRating:"5"},
      founder:[{"@type":"Person",name:"Arley Wheatley",jobTitle:"Partner"},{"@type":"Person",name:"Barry Henderson",jobTitle:"Partner"}],
      foundingDate:"2011",
      description:"Arkansas Electric Service & Contracting provides commercial and residential electrical services in Little Rock, AR and Central Arkansas. Est 2011, BBB listed.",
      areaServed:areas.map(a=>({"@type":"City",name:a})),
      hasOfferCatalog:{"@type":"OfferCatalog",name:"Electrical Services",itemListElement:allServiceNames.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:s}}))},
      memberOf:[{"@type":"Organization",name:"Better Business Bureau"}],sameAs:[],
    })});
    return()=>els.forEach(el=>{try{document.head.removeChild(el)}catch(e){}});
  }, [authed]);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); };
  const yr = new Date().getFullYear();

  if (!authed) {
    return (<>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}`}</style>
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#2D2D2D"}}>
        <div style={{background:"#fff",borderRadius:16,padding:"56px 44px",textAlign:"center",maxWidth:420,width:"92%",boxShadow:"0 32px 80px rgba(0,0,0,.35)"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,marginBottom:8}}><span style={{fontWeight:700,color:"#2D2D2D"}}>Arkansas Electric</span> <span style={{color:"#D4A03C"}}>Service</span></div>
          <p style={{fontSize:13,color:"#8A8A9A",letterSpacing:1,marginBottom:28,textTransform:"uppercase"}}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e=>{setPw(e.target.value);setPwBad(false)}} placeholder="••••" autoFocus style={{width:"100%",padding:16,fontSize:20,border:`2px solid ${pwBad?"#ef4444":"#e2e8f0"}`,borderRadius:8,textAlign:"center",letterSpacing:6,outline:"none",fontFamily:"'DM Sans',sans-serif",color:"#2D2D2D"}} />
            {pwBad && <p style={{color:"#ef4444",fontSize:12,marginTop:8,fontWeight:500}}>Incorrect password</p>}
            <button type="submit" style={{width:"100%",padding:16,marginTop:20,fontSize:15,fontWeight:700,background:"#2D2D2D",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
      :root{--primary:#2D2D2D;--accent:#D4A03C;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
      *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
      body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--cream);-webkit-font-smoothing:antialiased}
      h1,h2,h3,.serif{font-family:'Playfair Display',serif;font-weight:500}
      a{text-decoration:none;color:inherit}
      .gold-line{width:48px;height:2px;background:var(--accent)}
      .scroll-strip{overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}
      .scroll-strip::-webkit-scrollbar{display:none}
      @media(max-width:900px){.desktop-only{display:none!important}.mobile-only{display:flex!important}.hero-grid{grid-template-columns:1fr!important}.trust-sidebar{display:none!important}.trust-mobile{display:grid!important}.svc-masonry{grid-template-columns:1fr!important}.footer-grid{grid-template-columns:1fr!important}.footer-btm-inner{flex-direction:column;gap:8px;text-align:center}}
      @media(min-width:901px){.mobile-only{display:none!important}.trust-mobile{display:none!important}}
    `}</style>

    {/* NAV */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:scrolled?"14px clamp(24px,5vw,64px)":"20px clamp(24px,5vw,64px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(45,45,45,0.97)":"transparent",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.4s ease"}}>
      <div className="serif" style={{fontSize:22,color:scrolled?"#fff":"var(--primary)",fontWeight:600,letterSpacing:-0.5}}><span>Arkansas Electric</span> <span style={{color:"var(--accent)"}}>Service</span></div>
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

    {/* HERO — Layout D: Asymmetric 65/35, extra-large H1, compact form, no badge, no subtitle, no secondary button */}
    <section style={{minHeight:"100vh",padding:"140px clamp(24px,5vw,64px) 100px",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div className="hero-grid" style={{maxWidth:1200,width:"100%",display:"grid",gridTemplateColumns:"1.8fr 1fr",gap:48,alignItems:"center"}}>
        <div>
          <h1 style={{fontSize:"clamp(48px, 6vw, 84px)",lineHeight:1.0,color:"var(--primary)",letterSpacing:-2,marginBottom:24}}>
            Little Rock's<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Go-To</span><br/>Electrician
          </h1>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:32}}>
            <Stars />
            <span style={{fontSize:14,color:"var(--text-light)",fontStyle:"italic",marginLeft:4}}>"Best in the city." — James Doolittle</span>
          </div>
          <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,boxShadow:"0 4px 20px rgba(212,160,60,0.3)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Now — {PHONE}</a>
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
                  {allServiceNames.map(s=><option key={s} value={s}>{s}</option>)}
                </select>
                <button type="submit" style={{width:"100%",padding:16,background:"var(--primary)",color:"#fff",border:"none",borderRadius:6,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Get My Free Quote</button>
              </form>
            ) : (
              <div style={{textAlign:"center",padding:"20px 0"}}>
                <div style={{width:48,height:48,borderRadius:"50%",background:"rgba(212,160,60,0.12)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",color:"var(--accent)"}}>{Icons.check}</div>
                <h3 style={{fontSize:20,color:"var(--primary)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>We Got It!</h3>
                <p style={{fontSize:13,color:"var(--text-mid)"}}>We'll call you back shortly.<br/>Call <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a> for emergencies.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES + TRUST — Layout D: Trust sidebar + masonry */}
    <section id="services" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="gold-line" style={{margin:"0 auto 20px"}} />
          <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>What We Do</div>
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",color:"var(--primary)",letterSpacing:-0.5}}>Electrical Services in Little Rock</h2>
        </div>
        {/* Mobile trust */}
        <div className="trust-mobile" style={{display:"none",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:48,textAlign:"center"}}>
          {[{num:"4.5",label:"Google Rating",desc:"Trusted by customers"},{num:"11+",label:"Reviews",desc:"Verified on Google"},{num:"15",label:"Years",desc:"Serving Central Arkansas"},{num:"BBB",label:"Listed",desc:"Better Business Bureau"}].map((s,i)=>(
            <div key={i}>
              <div className="serif" style={{fontSize:"clamp(32px,4vw,44px)",color:"var(--primary)",lineHeight:1,marginBottom:6,letterSpacing:-1}}>{s.num}</div>
              <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--text)",marginBottom:2}}>{s.label}</div>
              <div style={{fontSize:13,color:"var(--text-light)"}}>{s.desc}</div>
            </div>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"200px 1fr",gap:48}}>
          <div className="trust-sidebar" style={{display:"flex",flexDirection:"column",gap:32,paddingTop:8}}>
            {[{num:"4.5",label:"Google Rating",desc:"Trusted by customers"},{num:"11+",label:"Reviews",desc:"Verified on Google"},{num:"15",label:"Years",desc:"Serving Central Arkansas"},{num:"BBB",label:"Listed",desc:"Better Business Bureau"}].map((s,i)=>(
              <div key={i} style={{borderLeft:"4px solid var(--accent)",paddingLeft:20}}>
                <div className="serif" style={{fontSize:36,color:"var(--primary)",lineHeight:1,marginBottom:4,letterSpacing:-1}}>{s.num}</div>
                <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--text)",marginBottom:2}}>{s.label}</div>
                <div style={{fontSize:13,color:"var(--text-light)"}}>{s.desc}</div>
              </div>
            ))}
          </div>
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
        <p style={{textAlign:"center",marginTop:48,fontSize:15,color:"var(--text-light)"}}>Questions? Call Arley directly at <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a></p>
      </div>
    </section>

    {/* WHY US — Layout D: Giant number bg, single column */}
    <section id="about" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--primary)",position:"relative",overflow:"hidden"}}>
      <div className="serif" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:"clamp(120px,20vw,280px)",color:"var(--accent)",opacity:0.08,lineHeight:1,whiteSpace:"nowrap",pointerEvents:"none"}}>15</div>
      <div style={{maxWidth:800,margin:"0 auto",position:"relative",zIndex:1}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14,textAlign:"center",opacity:0.7}}>About Arkansas Electric</div>
        <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",lineHeight:1.15,marginBottom:28,color:"#fff",textAlign:"center"}}>15 Years Serving<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Central Arkansas</span></h2>
        <p style={{fontSize:16,lineHeight:1.8,color:"rgba(255,255,255,0.6)",marginBottom:24,textAlign:"center"}}>
          Arkansas Electric Service & Contracting has been powering Little Rock and Central Arkansas since 2011. Founded by partners Arley Wheatley and Barry Henderson, the company was built on straightforward values: quality workmanship, honest estimates, and reliable service. With Beth Wheatley managing the office, every call is answered and every job is scheduled with care.
        </p>
        <p style={{fontSize:16,lineHeight:1.8,color:"rgba(255,255,255,0.6)",marginBottom:36,textAlign:"center"}}>
          From commercial electrical and generator installations to residential repairs and new construction, the team handles every project with the same attention to detail that earned their reputation. Fifteen years of experience, a BBB listing, and a growing list of loyal customers speak to the kind of company Arkansas Electric is.
        </p>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:20}}>
          {["BBB Listed Business","15 Years of Experience","Commercial & Residential","Licensed & Insured","Generator Specialists","Honest, Upfront Pricing"].map((c,i)=>(
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
          <h2 style={{fontSize:"clamp(30px,3.5vw,42px)",color:"var(--primary)",letterSpacing:-0.5}}>4.5 Stars on Google</h2>
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
        <div style={{position:"absolute",top:0,left:0,bottom:8,width:60,background:"linear-gradient(to right,var(--white),transparent)",pointerEvents:"none"}} />
        <div style={{position:"absolute",top:0,right:0,bottom:8,width:60,background:"linear-gradient(to left,var(--white),transparent)",pointerEvents:"none"}} />
      </div>
      <p style={{textAlign:"center",marginTop:32,fontSize:15,color:"var(--text-light)",padding:"0 clamp(24px,5vw,64px)"}}>Ready to experience the difference? Call <a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a></p>
    </section>

    {/* SERVICE AREAS */}
    <section id="areas" style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:3,color:"var(--accent)",marginBottom:14}}>Service Areas</div>
        <h2 style={{fontSize:"clamp(28px,3vw,38px)",color:"var(--primary)",marginBottom:48,letterSpacing:-0.5}}>Serving Little Rock & Central Arkansas</h2>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12}}>
          {areas.map((a,i)=>(
            <span key={i} title={`Electrician in ${a}, AR`} style={{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid var(--border)",padding:"12px 24px",borderRadius:30,fontSize:15,fontWeight:500,color:"var(--text)",cursor:"default",transition:"all 0.25s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="var(--primary)";e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="var(--primary)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="var(--text)";e.currentTarget.style.borderColor="rgba(0,0,0,0.06)"}}>
              <span style={{opacity:0.5}}>{Icons.mapPin}</span> {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA — White background */}
    <section style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--white)",textAlign:"center",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:600,margin:"0 auto"}}>
        <h2 className="serif" style={{fontSize:"clamp(32px,4vw,50px)",color:"var(--primary)",lineHeight:1.1,marginBottom:20,letterSpacing:-1}}>Need an electrician?<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Call Arkansas Electric.</span></h2>
        <p style={{fontSize:17,color:"var(--text-mid)",marginBottom:36,lineHeight:1.6}}>15 years of honest work. BBB listed. Fair pricing on every job.</p>
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"22px 52px",borderRadius:8,fontSize:20,fontWeight:700,boxShadow:"0 6px 28px rgba(212,160,60,0.35)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{background:"var(--primary)",color:"rgba(255,255,255,0.7)",padding:"64px clamp(24px,5vw,64px) 0"}}>
      <div className="footer-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr",gap:48,paddingBottom:40}}>
        <div>
          <div className="serif" style={{fontSize:22,color:"#fff",marginBottom:16}}><span>Arkansas Electric</span> <span style={{color:"var(--accent)"}}>Service</span></div>
          <p style={{fontSize:14,lineHeight:1.7,opacity:0.7,marginBottom:16}}>Commercial and residential electrical services in Little Rock and Central Arkansas. Proudly serving the community since 2011.</p>
          <p style={{fontSize:14,lineHeight:1.8,opacity:0.6}}>1115 Bond Ave<br/>Little Rock, AR 72202<br/><a href={TEL} style={{color:"var(--accent)",fontWeight:600}}>{PHONE}</a><br/><a href="mailto:arkansaselectricsales@gmail.com" style={{color:"rgba(255,255,255,0.5)"}}>arkansaselectricsales@gmail.com</a></p>
          <p style={{fontSize:13,opacity:0.5,marginTop:12}}>Mon-Fri 7AM-4PM</p>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Services</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>{allServiceNames.map(s=><li key={s} style={{fontSize:14,opacity:0.6}}>{s}</li>)}</ul>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Areas</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>{areas.map(a=><li key={a} style={{fontSize:14,opacity:0.6}}>{a}</li>)}</ul>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"20px 0",maxWidth:1100,margin:"0 auto"}}>
        <div className="footer-btm-inner" style={{display:"flex",justifyContent:"space-between",fontSize:13,opacity:0.4,flexWrap:"wrap",gap:8}}>
          <span>&copy; {yr} Arkansas Electric Service & Contracting. All rights reserved.</span>
          <span>BBB Listed</span>
        </div>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px",fontSize:17,fontWeight:700,boxShadow:"0 -4px 20px rgba(0,0,0,0.15)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Arkansas Electric</a>
    </div>
    <div className="mobile-only" style={{height:60,display:"block"}} />
  </>);
}

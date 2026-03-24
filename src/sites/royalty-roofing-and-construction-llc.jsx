// Layout: B | Industry: Roofing | City: Greenbrier
import { useState, useEffect } from "react";

const PHONE = "(501) 499-6756";
const TEL = "tel:+15014996756";
const EMAIL = "info@royaltyroofingandconstruction.com";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  roof: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>,
  storm: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>,
  clipboard: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>,
  gutter: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2L2 8v2h20V8L12 2z"/><path d="M2 10v4l3 6"/><path d="M22 10v4l-3 6"/><path d="M5 14h14"/></svg>,
  siding: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/></svg>,
  search: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M8 11h6"/><path d="M11 8v6"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4C5A9" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrow: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  quote: <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" opacity="0.15"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
  award: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  castle: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 22V8l2-2V3h2v3h2V3h2v3h2V3h2v3h2V3h2v3l2 2v14"/><path d="M3 22h18"/><path d="M9 22v-5a3 3 0 016 0v5"/><path d="M7 10v2"/><path d="M12 10v2"/><path d="M17 10v2"/></svg>,
};

const Stars = () => <span style={{display:"inline-flex",gap:2}}>{[...Array(5)].map((_,i)=><span key={i}>{Icons.star}</span>)}</span>;

const services = [
  { name: "Roof Replacement", desc: "Complete tear-off and installation with quality materials built to handle Arkansas weather. Nathan and his crew manage every detail from permits to final walkthrough, leaving your home protected for decades.", icon: Icons.roof },
  { name: "Storm Damage", desc: "Rapid response after severe weather across Central Arkansas. Royalty Roofing assesses the full scope of damage, documents everything, and restores your roof to pre-storm condition quickly and thoroughly.", icon: Icons.storm },
  { name: "Insurance Claims", desc: "Navigating insurance claims is stressful. Royalty Roofing handles the paperwork, meets with adjusters, and fights to get your claim fully covered so you can focus on your family.", icon: Icons.clipboard },
  { name: "Gutter Installation", desc: "Proper drainage protects your roof, fascia, and foundation. Professionally installed gutter systems custom-fit to your roofline and sized for Arkansas rain.", icon: Icons.gutter },
  { name: "Siding", desc: "Damaged or aging siding leaves your home exposed to moisture and energy loss. Royalty Roofing restores your exterior with materials matched to your home and built to last.", icon: Icons.siding },
  { name: "Free Inspections", desc: "Not sure about your roof's condition? Tyler and Dylan provide honest, no-obligation inspections across a wide service area. If it doesn't need work, they'll tell you.", icon: Icons.search },
];

const allServiceNames = ["Roof Replacement","Roof Repair","Storm Damage Restoration","Insurance Claims Assistance","Gutter Installation","Siding","Residential Roofing","Free Roof Inspections"];

const areas = ["Greenbrier","Conway","Little Rock","Heber Springs","Hardy","Vilonia","North Little Rock","Sherwood"];

const reviews = [
  { text: "We are in Heber Springs and we called Royalty Roofing to get an estimate on replacing our roof. Tyler was great.", name: "Lori Goff", src: "Google" },
  { text: "Called RR for gutters on our new construction. They were nothing short of awesome!", name: "Jessica Huntsman", src: "Google" },
  { text: "Strong winter winds in Hardy lifted several shingles. Dylan with Royalty Roofing inspected and handled the insurance process.", name: "Danny Kelly", src: "Google" },
];

const navLinks = [{label:"Services",id:"services"},{label:"About",id:"about"},{label:"Reviews",id:"reviews"},{label:"Areas",id:"areas"}];

export default function RoyaltyRoofingAndConstructionLLC() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("royalty-roofing-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({name:"",phone:"",service:""});

  const submitPw = (e) => { e.preventDefault(); if(pw==="2026"){sessionStorage.setItem("royalty-roofing-auth","1");setAuthed(true)}else{setPwBad(true);setPw("")} };
  useEffect(() => { if(!authed) return; const fn=()=>setScrolled(window.scrollY>60); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn); }, [authed]);

  useEffect(() => {
    if(!authed) return;
    document.title = "Roofing Greenbrier AR | Royalty Roofing";
    const els = [];
    const add = (tag,attrs) => { const el=document.createElement(tag); Object.entries(attrs).forEach(([k,v])=>{if(k==="textContent")el.textContent=v;else el.setAttribute(k,v)}); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"Royalty Roofing & Construction -- 4.9 stars, 50 reviews, licensed & bonded. Greenbrier, AR. Call (501) 499-6756."});
    add("meta",{name:"geo.region",content:"US-AR"});
    add("meta",{name:"geo.placename",content:"Greenbrier"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"RoofingContractor",
      name:"Royalty Roofing & Construction LLC",telephone:"+15014996756",
      email:EMAIL,
      address:{"@type":"PostalAddress",streetAddress:"62 W Hills Rd",addressLocality:"Greenbrier",addressRegion:"AR",postalCode:"72058",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:35.2337,longitude:-92.3874},
      openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"07:00",closes:"18:00"}],
      aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"50",bestRating:"5"},
      founder:{"@type":"Person",name:"Nathan Hanks"},
      foundingDate:"2024",
      description:"Royalty Roofing & Construction LLC is a licensed, insured, and bonded roofing contractor in Greenbrier, AR. 4.9-star rating with 50 reviews. Serving Central Arkansas since January 2024.",
      areaServed:areas.map(a=>({"@type":"City",name:a})),
      hasOfferCatalog:{"@type":"OfferCatalog",name:"Roofing Services",itemListElement:allServiceNames.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:s}}))},
      memberOf:[{"@type":"Organization",name:"Better Business Bureau"}],
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
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,marginBottom:8,fontWeight:600,letterSpacing:-0.5}}><span style={{color:"#1E1E1E"}}>Royalty</span> <span style={{color:"#D4C5A9"}}>Roofing</span></div>
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
      <div className="serif" style={{fontSize:22,color:scrolled?"#fff":"var(--primary)",fontWeight:600,letterSpacing:-0.5}}><span>Royalty</span> <span style={{color:"var(--accent)"}}>Roofing</span></div>
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
          <span style={{fontSize:12,fontWeight:700,color:"var(--accent)",letterSpacing:2,textTransform:"uppercase"}}>4.9 Stars -- 48 of 50 Reviews Are 5-Star</span>
        </div>
        <h1 style={{fontSize:"clamp(44px, 6vw, 80px)",lineHeight:1.05,color:"var(--primary)",marginBottom:24,letterSpacing:-2}}>
          Greenbrier Roofing<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Protecting Your Castle</span>
        </h1>
        <p style={{fontSize:18,lineHeight:1.7,color:"var(--text-mid)",marginBottom:32,maxWidth:620,margin:"0 auto 32px"}}>
          Nathan Hanks launched Royalty Roofing in January 2024 and earned 50 five-star-caliber reviews in just over a year. Licensed, insured, and bonded -- serving Greenbrier and Central Arkansas.
        </p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:36,flexWrap:"wrap"}}>
          <Stars />
          <span style={{fontSize:14,color:"var(--text-light)",fontStyle:"italic",marginLeft:4}}>"Nothing short of awesome!" -- Jessica Huntsman</span>
        </div>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,boxShadow:"0 4px 20px rgba(212,197,169,0.3)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Royalty Roofing</a>
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
              <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(212,197,169,0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",color:"var(--accent)"}}>{Icons.check}</div>
              <h3 style={{fontSize:22,color:"var(--primary)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>We Got It!</h3>
              <p style={{fontSize:14,color:"var(--text-mid)"}}>We'll call you back shortly.<br/>Call <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a> for emergencies.</p>
            </div>
          )}
        </div>
        {/* Trust Stats */}
        <div className="trust-row" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:24,textAlign:"center"}}>
          {[
            {num:"4.9",label:"Google Rating",desc:"Near-perfect score"},
            {num:"50+",label:"Reviews",desc:"48 of 50 are 5-star"},
            {num:"Full",label:"Licensed & Bonded",desc:"Insured, BBB listed"},
            {num:"Year 1",label:"Growth",desc:"0 to 50 reviews"},
          ].map((s,i)=>(
            <div key={i}>
              <div className="serif" style={{fontSize:"clamp(32px,3.5vw,46px)",color:"var(--primary)",lineHeight:1,marginBottom:6,letterSpacing:-1}}>{s.num}</div>
              <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--text)",marginBottom:2}}>{s.label}</div>
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
          <h2 style={{fontSize:"clamp(30px, 3.5vw, 44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5}}>Roofing Services in Greenbrier</h2>
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
        <p style={{textAlign:"center",marginTop:40,fontSize:15,color:"var(--text-mid)"}}>Questions? Call Nathan directly at <a href={TEL} style={{color:"var(--accent)",fontWeight:700}}>{PHONE}</a></p>
      </div>
    </section>

    {/* WHY US -- Layout B: Single column centered, dark --primary bg */}
    <section id="about" className="section-pad" style={{padding:"110px clamp(24px,5vw,64px)",background:"var(--primary)"}}>
      <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <div className="gold-line" style={{margin:"0 auto 20px"}} />
        <p style={{fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"rgba(255,255,255,0.5)",marginBottom:14}}>Why Royalty Roofing</p>
        <h2 style={{fontSize:"clamp(30px, 3.5vw, 44px)",lineHeight:1.15,color:"#fff",letterSpacing:-0.5,marginBottom:40}}>From Zero to 4.9 Stars in <span style={{fontStyle:"italic",color:"var(--accent)"}}>One Year</span></h2>
        <p style={{fontSize:17,lineHeight:1.8,color:"rgba(255,255,255,0.75)",marginBottom:24}}>
          Nathan Hanks launched Royalty Roofing & Construction in January 2024 with a simple promise: treat every home like a castle. In just over a year, that philosophy earned 50 Google reviews at a 4.9 rating -- 48 of them perfect five stars. That kind of growth doesn't happen by accident.
        </p>
        <p style={{fontSize:17,lineHeight:1.8,color:"rgba(255,255,255,0.75)",marginBottom:48}}>
          Tyler and Dylan handle inspections and estimates across a wide area, from Greenbrier and Conway to Heber Springs and Hardy. Licensed, insured, bonded, and BBB listed. The "Protecting Your Castle" brand isn't just a tagline -- it's how Nathan built a reputation in year one that most contractors take a decade to earn.
        </p>
        <div className="why-creds-row" style={{display:"flex",justifyContent:"center",gap:28,flexWrap:"wrap"}}>
          {["Licensed & Insured","Bonded","BBB Listed","4.9 Google Rating","Wide Service Area"].map((c,i)=>(
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
          <h2 style={{fontSize:"clamp(30px, 3.5vw, 44px)",lineHeight:1.15,color:"var(--primary)",letterSpacing:-0.5}}>4.9 Stars on Google</h2>
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
          Need a new roof?<br/><span style={{fontStyle:"italic",color:"var(--accent)"}}>Call Royalty Roofing.</span>
        </h2>
        <p style={{fontSize:17,lineHeight:1.7,color:"var(--text-mid)",marginBottom:36}}>Licensed, insured, and bonded. 4.9 stars across 50 reviews -- 48 of them perfect fives. Protecting your castle since day one.</p>
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--accent)",color:"#fff",padding:"18px 36px",borderRadius:6,fontSize:16,fontWeight:700,boxShadow:"0 4px 20px rgba(212,197,169,0.3)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{padding:"80px clamp(24px,5vw,64px) 40px",background:"var(--primary)"}}>
      <div className="footer-grid" style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr",gap:48,marginBottom:48}}>
        <div>
          <div className="serif" style={{fontSize:22,fontWeight:600,letterSpacing:-0.5,marginBottom:16}}><span style={{color:"#fff"}}>Royalty</span> <span style={{color:"var(--accent)"}}>Roofing</span></div>
          <p style={{fontSize:14,lineHeight:1.7,color:"rgba(255,255,255,0.6)",marginBottom:16}}>Licensed, insured, and bonded roofing contractor serving Greenbrier and Central Arkansas. 4.9 stars, BBB listed.</p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.5)"}}>62 W Hills Rd<br/>Greenbrier, AR 72058</p>
          <a href={TEL} style={{display:"inline-block",marginTop:12,fontSize:15,fontWeight:700,color:"var(--accent)"}}>{PHONE}</a>
          <br/>
          <a href={`mailto:${EMAIL}`} style={{display:"inline-block",marginTop:4,fontSize:14,color:"rgba(255,255,255,0.5)"}}>{EMAIL}</a>
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
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)"}}>&#169; {yr} Royalty Roofing & Construction LLC. All rights reserved.</p>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)"}}>Licensed | Insured | Bonded | BBB Listed</p>
        </div>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,width:"100%",padding:"18px 24px",background:"var(--accent)",color:"#fff",fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif",boxShadow:"0 -4px 20px rgba(0,0,0,0.15)"}}>{Icons.phone} Call Royalty Roofing Now</a>
    </div>
    <div className="mobile-only" style={{height:60,display:"block"}} />
  </>);
}

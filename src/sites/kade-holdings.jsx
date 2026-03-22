// Custom Build | Kade Holdings | Des Moines, IA | Owner's personal business
import { useState, useEffect, useRef } from "react";

const PHONE = "(515) 800-7406";
const TEL = "tel:+15158007406";

const Icons = {
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  check: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  menu: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrow: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  home: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  send: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  dollarSign: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  calendar: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  play: <svg width="48" height="48" viewBox="0 0 24 24" fill="#fff" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
};

const areas = ["Des Moines","West Des Moines","Ames","Ankeny","Urbandale","Johnston","Waukee","Clive","Altoona"];
const serviceNames = ["Sell My Home Fast","Pre-Foreclosure Help","Inherited Property","Fixer-Upper","Relocating","Other"];

const testimonials = [
  { text: "Kade Holdings made selling my inherited home so easy. Sam's team was professional, and we closed in just 10 days with cash in hand!", name: "Laura T." },
  { text: "Facing foreclosure, I was stressed, but Kade Holdings offered a fair price and handled everything. Truly a lifesaver.", name: "Michael R." },
  { text: "I needed to sell my fixer-upper fast. Kade Holdings gave me a no-hassle offer, and I was free to move on in a week.", name: "Emily S." },
  { text: "Sam and his team were fantastic. They guided me through every step, and I got a great cash deal without any repairs.", name: "James P." },
];

const navLinks = [{label:"Home",id:"top"},{label:"About",id:"about"},{label:"Contact Us",id:"contact"}];

export default function KadeHoldings() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("kade-auth") === "1");
  const [pw, setPw] = useState("");
  const [pwBad, setPwBad] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({address:"",city:"",zip:"",name:"",phone:"",email:""});
  const [ctaFormDone, setCtaFormDone] = useState(false);
  const [ctaForm, setCtaForm] = useState({address:"",name:"",phone:"",email:""});
  const [testIdx, setTestIdx] = useState(0);
  const testTimer = useRef(null);

  const submitPw = (e) => { e.preventDefault(); if(pw==="2026"){sessionStorage.setItem("kade-auth","1");setAuthed(true)}else{setPwBad(true);setPw("")} };

  useEffect(() => { if(!authed) return; const fn=()=>setScrolled(window.scrollY>60); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn); }, [authed]);

  useEffect(() => {
    if(!authed) return;
    testTimer.current = setInterval(()=>setTestIdx(i=>(i+1)%testimonials.length), 5000);
    return ()=>clearInterval(testTimer.current);
  }, [authed]);

  useEffect(() => {
    if(!authed) return;
    document.title = "We Buy Houses Des Moines IA | Kade Holdings";
    const els = [];
    const add = (tag,attrs) => { const el=document.createElement(tag); Object.entries(attrs).forEach(([k,v])=>{if(k==="textContent")el.textContent=v;else el.setAttribute(k,v)}); document.head.appendChild(el); els.push(el); };
    add("meta",{name:"description",content:"We buy houses in Des Moines, IA. Any condition, cash offer, close in 7 days. No fees, no repairs. Call (515) 800-7406."});
    add("meta",{name:"geo.region",content:"US-IA"});
    add("meta",{name:"geo.placename",content:"Des Moines"});
    add("script",{type:"application/ld+json",textContent:JSON.stringify({
      "@context":"https://schema.org","@type":"LocalBusiness",
      name:"Kade Holdings",telephone:"+15158007406",
      address:{"@type":"PostalAddress",addressLocality:"Des Moines",addressRegion:"IA",addressCountry:"US"},
      geo:{"@type":"GeoCoordinates",latitude:41.5868,longitude:-93.6250},
      founder:{"@type":"Person",name:"Sam Brant"},foundingDate:"2025",
      description:"Kade Holdings buys houses in any condition across Des Moines and Central Iowa.",
      areaServed:areas.map(a=>({"@type":"City",name:a})),
      sameAs:[],
    })});
    return()=>els.forEach(el=>{try{document.head.removeChild(el)}catch(e){}});
  }, [authed]);

  const go = (id) => { setMenuOpen(false); if(id==="top") window.scrollTo({top:0,behavior:"smooth"}); else document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); };
  const yr = new Date().getFullYear();

  // PASSWORD GATE
  if (!authed) {
    return (<>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}
      `}</style>
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#1a1a1a"}}>
        <div style={{background:"#fff",borderRadius:16,padding:"56px 44px",textAlign:"center",maxWidth:420,width:"92%",boxShadow:"0 32px 80px rgba(0,0,0,.35)"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,marginBottom:8}}>
            <span style={{fontWeight:700,color:"#1a1a1a"}}>Kade</span> <span style={{color:"#C9A227"}}>Holdings</span>
          </div>
          <p style={{fontSize:13,color:"#8A8A9A",letterSpacing:1,marginBottom:28,textTransform:"uppercase"}}>Website Preview</p>
          <form onSubmit={submitPw}>
            <input type="password" value={pw} onChange={e=>{setPw(e.target.value);setPwBad(false)}} placeholder="••••" autoFocus style={{width:"100%",padding:16,fontSize:20,border:`2px solid ${pwBad?"#ef4444":"#e2e8f0"}`,borderRadius:8,textAlign:"center",letterSpacing:6,outline:"none",fontFamily:"'DM Sans',sans-serif",color:"#1a1a1a"}} />
            {pwBad && <p style={{color:"#ef4444",fontSize:12,marginTop:8,fontWeight:500}}>Incorrect password</p>}
            <button type="submit" style={{width:"100%",padding:16,marginTop:20,fontSize:15,fontWeight:700,letterSpacing:.3,background:"#C9A227",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>View Site</button>
          </form>
        </div>
      </div>
    </>);
  }

  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
      :root{--dark:#1a1a1a;--gold:#C9A227;--gold-light:#D4B84A;--cream:#FAF9F6;--white:#FFFFFF;--text:#2A2A3C;--text-mid:#5A5A6E;--text-light:#8A8A9A;--border:rgba(0,0,0,0.06)}
      *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
      body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--white);-webkit-font-smoothing:antialiased}
      h1,h2,h3,.serif{font-family:'Playfair Display',serif;font-weight:500}
      a{text-decoration:none;color:inherit}
      @media(max-width:900px){
        .desktop-only{display:none!important}
        .mobile-only{display:flex!important}
        .hero-grid{grid-template-columns:1fr!important;text-align:center}
        .hero-grid .hero-form{margin:0 auto}
        .story-grid{grid-template-columns:1fr!important}
        .steps-grid{grid-template-columns:1fr 1fr!important}
        .compare-grid{grid-template-columns:1fr!important}
        .sam-grid{grid-template-columns:1fr!important;text-align:center}
        .sam-img{margin:0 auto 32px}
        .test-grid{grid-template-columns:1fr!important}
        .footer-grid{grid-template-columns:1fr!important}
        .footer-btm{flex-direction:column;gap:8px;text-align:center}
      }
      @media(min-width:901px){.mobile-only{display:none!important}}
    `}</style>

    {/* NAV */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:scrolled?"12px clamp(24px,5vw,64px)":"18px clamp(24px,5vw,64px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(26,26,26,0.97)":"transparent",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.4s ease"}}>
      <div className="serif" style={{fontSize:22,color:"#fff",fontWeight:600,letterSpacing:-0.5}}>
        <span>Kade</span> <span style={{color:"var(--gold)"}}>Holdings</span>
      </div>
      <div className="desktop-only" style={{display:"flex",alignItems:"center",gap:32}}>
        {navLinks.map(l=><button key={l.id} onClick={()=>go(l.id)} style={{background:"none",border:"none",cursor:"pointer",fontSize:14,fontWeight:600,color:"rgba(255,255,255,0.8)",fontFamily:"'DM Sans',sans-serif"}}>{l.label}</button>)}
        <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:8,color:"var(--gold)",fontSize:14,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} {PHONE}</a>
      </div>
      <button className="mobile-only" onClick={()=>setMenuOpen(true)} style={{background:"none",border:"none",cursor:"pointer",color:"#fff",display:"flex"}}>{Icons.menu}</button>
    </nav>

    {menuOpen && (
      <div style={{position:"fixed",inset:0,background:"var(--dark)",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:28}}>
        <button onClick={()=>setMenuOpen(false)} style={{position:"absolute",top:20,right:24,background:"none",border:"none",color:"#fff",cursor:"pointer"}}>{Icons.x}</button>
        {navLinks.map(l=><button key={l.id} onClick={()=>go(l.id)} style={{background:"none",border:"none",color:"#fff",fontSize:22,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{l.label}</button>)}
        <a href={TEL} style={{background:"var(--gold)",color:"#fff",padding:"18px 48px",borderRadius:8,fontSize:18,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>Call {PHONE}</a>
      </div>
    )}

    {/* HERO — Dark bg with form */}
    <section style={{minHeight:"100vh",padding:"140px clamp(24px,5vw,64px) 80px",background:"linear-gradient(160deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-20%",right:"-10%",width:"50%",height:"80%",background:"radial-gradient(ellipse at center,rgba(201,162,39,0.06),transparent 70%)",pointerEvents:"none"}} />
      <div className="hero-grid" style={{maxWidth:1200,width:"100%",display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:56,alignItems:"center",position:"relative",zIndex:1}}>
        <div>
          <h1 style={{fontSize:"clamp(36px, 4.5vw, 60px)",lineHeight:1.08,color:"#fff",letterSpacing:-1.5,marginBottom:20}}>
            Unlock Cash for Your Home with <span style={{color:"var(--gold)"}}>Kade Holdings</span>, Regardless of Its Condition
          </h1>
          <p style={{fontSize:18,lineHeight:1.7,color:"rgba(255,255,255,0.6)",marginBottom:32,maxWidth:500}}>
            No Repairs, No Fees. Secure Cash and a New Beginning in as Few as 7 Days.
          </p>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            <a href={TEL} style={{display:"inline-flex",alignItems:"center",gap:10,background:"var(--gold)",color:"#fff",padding:"16px 32px",borderRadius:6,fontSize:16,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Sam</a>
            <button onClick={()=>go("about")} style={{display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"rgba(255,255,255,0.7)",padding:"16px 28px",borderRadius:6,fontSize:16,fontWeight:600,border:"1.5px solid rgba(255,255,255,0.15)",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Learn More</button>
          </div>
        </div>
        <div className="hero-form">
          <div style={{background:"#fff",borderRadius:12,padding:"36px 32px",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",maxWidth:440}}>
            {!formDone ? (
              <form onSubmit={e=>{e.preventDefault();setFormDone(true)}}>
                <p style={{fontSize:14,fontWeight:700,color:"var(--text)",textTransform:"uppercase",letterSpacing:1,marginBottom:24,textAlign:"center"}}>Get Your Fair Cash Offer</p>
                <input type="text" placeholder="Property address" value={formData.address} onChange={e=>setFormData({...formData,address:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:10,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
                  <input type="text" placeholder="City" value={formData.city} onChange={e=>setFormData({...formData,city:e.target.value})} style={{padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
                  <input type="text" placeholder="Zip code" value={formData.zip} onChange={e=>setFormData({...formData,zip:e.target.value})} style={{padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
                </div>
                <input type="text" placeholder="Full name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:10,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
                <input type="tel" placeholder="Phone number" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:10,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
                <input type="email" placeholder="Email" value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:16,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
                <button type="submit" style={{width:"100%",padding:16,background:"var(--gold)",color:"#fff",border:"none",borderRadius:6,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",letterSpacing:.3}}>Click Here For A FAIR Cash Offer</button>
                <p style={{fontSize:11,color:"var(--text-light)",textAlign:"center",marginTop:10,lineHeight:1.4}}>By clicking you agree to Kade Holdings Terms of Service and Privacy Policy.</p>
              </form>
            ) : (
              <div style={{textAlign:"center",padding:"20px 0"}}>
                <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(201,162,39,0.12)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",color:"var(--gold)"}}>{Icons.check}</div>
                <h3 style={{fontSize:22,color:"var(--text)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>Offer Request Received</h3>
                <p style={{fontSize:14,color:"var(--text-mid)"}}>Sam will reach out within 24 hours.<br/>Need to talk now? Call <a href={TEL} style={{color:"var(--gold)",fontWeight:700}}>{PHONE}</a></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

    {/* STORY SECTION — "When Speed is Your Goal" */}
    <section style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",color:"var(--dark)",letterSpacing:-0.5}}>When Speed is Your <span style={{fontStyle:"italic",color:"var(--gold)"}}>Home-Selling Goal</span></h2>
        </div>
        <div className="story-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
          <div>
            <p style={{fontSize:17,lineHeight:1.8,color:"var(--text-mid)",marginBottom:24}}>
              Facing a challenging situation? We understand. Life can bring unexpected hurdles — be it pre-foreclosure, an inherited property you can't maintain, or a home needing extensive repairs.
            </p>
            <p style={{fontSize:17,lineHeight:1.8,color:"var(--text-mid)",marginBottom:24}}>
              Traditional home sales can be time-consuming and complicated when you need quick relief. That's where Kade Holdings shines. We offer swift, cash-based solutions for properties like yours.
            </p>
            <p style={{fontSize:17,lineHeight:1.8,color:"var(--text-mid)"}}>
              Skip the hassle of renovations, open houses, or commissions — we purchase your home as-is, helping you move forward faster. Imagine the relief of leaving stress behind with cash ready to kickstart your next chapter.
            </p>
          </div>
          <div>
            <h3 style={{fontSize:"clamp(24px,2.5vw,32px)",color:"var(--dark)",marginBottom:20,lineHeight:1.2}}>Why Choose Kade Holdings for Your Home Sale</h3>
            <div style={{marginBottom:24}}>
              <h4 style={{fontSize:16,fontWeight:700,color:"var(--dark)",marginBottom:8,fontFamily:"'DM Sans',sans-serif"}}>Effortless Selling Experience</h4>
              <p style={{fontSize:15,lineHeight:1.7,color:"var(--text-mid)"}}>
                Say goodbye to months of waiting and the inconvenience of buyer walkthroughs. From your first call, we prioritize a seamless experience — potentially delivering a cash offer within 24 hours and closing in just one week.
              </p>
            </div>
            <div>
              <h4 style={{fontSize:16,fontWeight:700,color:"var(--dark)",marginBottom:8,fontFamily:"'DM Sans',sans-serif"}}>Guided Support Throughout</h4>
              <p style={{fontSize:15,lineHeight:1.7,color:"var(--text-mid)"}}>
                Selling a home in tough times can feel overwhelming. Our dedicated team is here to support you every step of the way. We're more than a home buyer — we're your trusted real estate ally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* HOW IT WORKS — 4 Steps */}
    <section style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--white)"}}>
      <div style={{maxWidth:1000,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <h2 style={{fontSize:"clamp(30px,3.5vw,44px)",color:"var(--dark)",letterSpacing:-0.5}}>How <span style={{color:"var(--gold)"}}>Kade Holdings</span> Delivers</h2>
        </div>
        <div className="steps-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
          {[
            {icon:Icons.send,step:"01",title:"Submit",desc:"your property address"},
            {icon:Icons.dollarSign,step:"02",title:"Receive",desc:"an offer in 24 hours"},
            {icon:Icons.home,step:"03",title:"We Visit",desc:"your property"},
            {icon:Icons.calendar,step:"04",title:"You Choose",desc:"a closing date"},
          ].map((s,i)=>(
            <div key={i} style={{textAlign:"center",padding:"32px 20px"}}>
              <div style={{color:"var(--gold)",display:"flex",justifyContent:"center",marginBottom:16}}>{s.icon}</div>
              <div style={{fontSize:11,fontWeight:700,color:"var(--gold)",letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>{s.step}</div>
              <h3 style={{fontSize:20,color:"var(--dark)",marginBottom:6,fontFamily:"'Playfair Display',serif"}}>{s.title}</h3>
              <p style={{fontSize:14,color:"var(--text-mid)"}}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{maxWidth:700,margin:"48px auto 0",textAlign:"center"}}>
          <p style={{fontSize:16,lineHeight:1.8,color:"var(--text-mid)"}}>
            <strong style={{color:"var(--dark)"}}>Fair and Fast Offers:</strong> With Kade Holdings, you get more than speed — you get a fair deal. Our cash offers are rooted in deep local market knowledge, ensuring a competitive price for your home. Plus, our no-obligation approach means you can explore our offer risk-free.
          </p>
        </div>
      </div>
    </section>

    {/* COMPARISON TABLE */}
    <section style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--dark)"}}>
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <p style={{fontSize:12,fontWeight:700,color:"var(--gold)",letterSpacing:3,textTransform:"uppercase",marginBottom:14}}>How We Compare</p>
          <h2 style={{fontSize:"clamp(28px,3vw,40px)",color:"#fff",letterSpacing:-0.5}}>Traditional Sale vs. <span style={{fontStyle:"italic",color:"var(--gold)"}}>Kade Holdings</span></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",borderRadius:12,overflow:"hidden",border:"1px solid rgba(255,255,255,0.08)"}}>
          {/* Header */}
          <div style={{padding:"20px 24px",background:"rgba(255,255,255,0.04)",borderBottom:"1px solid rgba(255,255,255,0.06)"}} />
          <div style={{padding:"20px 24px",textAlign:"center",background:"rgba(255,255,255,0.04)",borderBottom:"1px solid rgba(255,255,255,0.06)",borderLeft:"1px solid rgba(255,255,255,0.06)"}}><span style={{fontSize:13,fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:1.5}}>Traditional</span></div>
          <div style={{padding:"20px 24px",textAlign:"center",background:"rgba(201,162,39,0.1)",borderBottom:"1px solid rgba(255,255,255,0.06)",borderLeft:"1px solid rgba(255,255,255,0.06)"}}><span style={{fontSize:13,fontWeight:700,color:"var(--gold)",textTransform:"uppercase",letterSpacing:1.5}}>Kade</span></div>
          {/* Rows */}
          {[
            {label:"Commissions",trad:"6%",kade:"0%"},
            {label:"Repair Costs",trad:"Varies",kade:"$0"},
            {label:"Closing Costs",trad:"2%",kade:"$0"},
            {label:"Avg. Days to Close",trad:"30+",kade:"7"},
            {label:"Showings",trad:"Varies",kade:"0"},
            {label:"Certainty",trad:"None",kade:"Cash Offer"},
          ].map((r,i)=>(
            <div key={i} style={{display:"contents"}}>
              <div style={{padding:"16px 24px",fontSize:14,fontWeight:600,color:"rgba(255,255,255,0.7)",borderBottom:i<5?"1px solid rgba(255,255,255,0.04)":"none"}}>{r.label}</div>
              <div style={{padding:"16px 24px",textAlign:"center",fontSize:15,color:"rgba(255,255,255,0.45)",borderBottom:i<5?"1px solid rgba(255,255,255,0.04)":"none",borderLeft:"1px solid rgba(255,255,255,0.06)"}}>{r.trad}</div>
              <div style={{padding:"16px 24px",textAlign:"center",fontSize:15,fontWeight:700,color:"var(--gold)",background:"rgba(201,162,39,0.05)",borderBottom:i<5?"1px solid rgba(255,255,255,0.04)":"none",borderLeft:"1px solid rgba(255,255,255,0.06)"}}>{r.kade}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SAM BRANT — About */}
    <section id="about" style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:1000,margin:"0 auto"}}>
        <div className="sam-grid" style={{display:"grid",gridTemplateColumns:"300px 1fr",gap:56,alignItems:"start"}}>
          <div>
            <img src="/sam-headshot.jpg" alt="Sam Brant, founder of Kade Holdings" className="sam-img" style={{width:280,height:280,objectFit:"cover",borderRadius:12,boxShadow:"0 8px 32px rgba(0,0,0,0.1)"}} />
          </div>
          <div>
            <p style={{fontSize:12,fontWeight:700,color:"var(--gold)",letterSpacing:3,textTransform:"uppercase",marginBottom:14}}>Meet Sam</p>
            <h2 style={{fontSize:"clamp(28px,3vw,38px)",color:"var(--dark)",letterSpacing:-0.5,marginBottom:24}}>Sam Brant</h2>
            <p style={{fontSize:16,lineHeight:1.8,color:"var(--text-mid)",marginBottom:20}}>
              Sam Brant, a proud Iowa native, graduated from the University of Iowa and has been a real estate powerhouse since age 19. With over a decade of experience, Sam has navigated hundreds of investment properties and sales, previously excelling as a licensed realtor. His deep market expertise and client-first approach have earned him a reputation for trust and results.
            </p>
            <p style={{fontSize:16,lineHeight:1.8,color:"var(--text-mid)"}}>
              As the leader of Kade Holdings, Sam combines his extensive industry knowledge with a passion for helping homeowners find fast, fair solutions. A recognized figure in Iowa's real estate community, he's committed to transparency, integrity, and empowering clients to achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* VIDEO PLACEHOLDER */}
    <section style={{padding:"80px clamp(24px,5vw,64px)",background:"var(--white)"}}>
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <div style={{position:"relative",background:"var(--dark)",borderRadius:12,overflow:"hidden",aspectRatio:"16/9",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 8px 32px rgba(0,0,0,0.12)"}}>
          <img src="https://static.wixstatic.com/media/51ab10_934a2f60861143b1ba466b3cd6cc7e9df000.jpg/v1/fill/w_1016,h_592,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/51ab10_934a2f60861143b1ba466b3cd6cc7e9df000.jpg" alt="Kade Holdings video" style={{width:"100%",height:"100%",objectFit:"cover",opacity:0.7}} />
          <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:72,height:72,borderRadius:"50%",background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.3)"}}>{Icons.play}</div>
          </div>
          <p style={{position:"absolute",bottom:20,left:0,right:0,textAlign:"center",fontSize:13,color:"rgba(255,255,255,0.6)",fontWeight:600,letterSpacing:1}}>VIDEO COMING SOON</p>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:12,fontWeight:700,color:"var(--gold)",letterSpacing:3,textTransform:"uppercase",marginBottom:14}}>Testimonials</p>
        <h2 style={{fontSize:"clamp(28px,3vw,38px)",color:"var(--dark)",letterSpacing:-0.5,marginBottom:48}}>What Homeowners Are Saying</h2>
        <div style={{background:"#fff",borderRadius:12,padding:"48px 40px",border:"1px solid var(--border)",position:"relative",minHeight:200}}>
          <div className="serif" style={{position:"absolute",top:16,left:32,fontSize:72,color:"var(--gold)",opacity:0.15,lineHeight:1}}>"</div>
          <div style={{position:"relative",zIndex:1}}>
            <p style={{fontSize:18,fontStyle:"italic",color:"var(--text)",lineHeight:1.75,marginBottom:24}}>
              "{testimonials[testIdx].text}"
            </p>
            <div style={{fontWeight:700,fontSize:15,color:"var(--dark)"}}>{testimonials[testIdx].name}</div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:24}}>
          {testimonials.map((_,i)=>(
            <button key={i} onClick={()=>{setTestIdx(i);clearInterval(testTimer.current);testTimer.current=setInterval(()=>setTestIdx(j=>(j+1)%testimonials.length),5000)}} style={{width:10,height:10,borderRadius:"50%",background:i===testIdx?"var(--gold)":"#ddd",border:"none",cursor:"pointer",padding:0,transition:"background 0.2s"}} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA — Contact Form */}
    <section id="contact" style={{padding:"100px clamp(24px,5vw,64px)",background:"var(--dark)",textAlign:"center"}}>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        <h2 className="serif" style={{fontSize:"clamp(32px,4vw,48px)",color:"#fff",lineHeight:1.1,marginBottom:16,letterSpacing:-1}}>
          Get Your Free <span style={{fontStyle:"italic",color:"var(--gold)"}}>Cash Offer</span> Now
        </h2>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.55)",marginBottom:36,lineHeight:1.6}}>No obligation. No pressure. Just a fair offer for your home.</p>
        <div style={{background:"#fff",borderRadius:12,padding:"36px 32px",textAlign:"left"}}>
          {!ctaFormDone ? (
            <form onSubmit={e=>{e.preventDefault();setCtaFormDone(true)}}>
              <input type="text" placeholder="Property address" value={ctaForm.address} onChange={e=>setCtaForm({...ctaForm,address:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:10,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
              <input type="text" placeholder="Full name" value={ctaForm.name} onChange={e=>setCtaForm({...ctaForm,name:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:10,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
              <input type="tel" placeholder="Phone number" value={ctaForm.phone} onChange={e=>setCtaForm({...ctaForm,phone:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:10,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
              <input type="email" placeholder="Email" value={ctaForm.email} onChange={e=>setCtaForm({...ctaForm,email:e.target.value})} required style={{width:"100%",padding:"14px 16px",fontSize:14,border:"1.5px solid #e8e8ec",borderRadius:6,marginBottom:16,outline:"none",fontFamily:"'DM Sans',sans-serif",background:"#fafafa"}} />
              <button type="submit" style={{width:"100%",padding:16,background:"var(--gold)",color:"#fff",border:"none",borderRadius:6,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Get My Cash Offer</button>
            </form>
          ) : (
            <div style={{textAlign:"center",padding:"20px 0"}}>
              <div style={{width:48,height:48,borderRadius:"50%",background:"rgba(201,162,39,0.12)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",color:"var(--gold)"}}>{Icons.check}</div>
              <h3 style={{fontSize:20,color:"var(--dark)",marginBottom:8,fontFamily:"'Playfair Display',serif"}}>Request Received</h3>
              <p style={{fontSize:13,color:"var(--text-mid)"}}>Sam will call you within 24 hours.<br/>Call now: <a href={TEL} style={{color:"var(--gold)",fontWeight:700}}>{PHONE}</a></p>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* SERVICE AREAS */}
    <section style={{padding:"80px clamp(24px,5vw,64px)",background:"var(--cream)"}}>
      <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:12,fontWeight:700,color:"var(--gold)",letterSpacing:3,textTransform:"uppercase",marginBottom:14}}>Service Areas</p>
        <h2 style={{fontSize:"clamp(24px,2.5vw,32px)",color:"var(--dark)",marginBottom:36,letterSpacing:-0.5}}>We Buy Houses Across Central Iowa</h2>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:10}}>
          {areas.map((a,i)=>(
            <span key={i} title={`We buy houses in ${a}, IA`} style={{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid var(--border)",padding:"10px 22px",borderRadius:30,fontSize:14,fontWeight:500,color:"var(--text)",cursor:"default",transition:"all 0.25s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="var(--dark)";e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="var(--dark)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="var(--text)";e.currentTarget.style.borderColor="rgba(0,0,0,0.06)"}}>
              <span style={{opacity:0.5}}>{Icons.mapPin}</span> {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{background:"var(--dark)",color:"rgba(255,255,255,0.7)",padding:"56px clamp(24px,5vw,64px) 0"}}>
      <div className="footer-grid" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr",gap:48,paddingBottom:40}}>
        <div>
          <div className="serif" style={{fontSize:22,color:"#fff",marginBottom:16}}><span>Kade</span> <span style={{color:"var(--gold)"}}>Holdings</span></div>
          <p style={{fontSize:14,lineHeight:1.7,opacity:0.6,marginBottom:16}}>We buy houses in any condition across Des Moines and Central Iowa. Cash offers, fast closings, zero fees or commissions.</p>
          <a href={TEL} style={{color:"var(--gold)",fontWeight:600,fontSize:14}}>{PHONE}</a>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Quick Links</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
            {navLinks.map(l=><li key={l.id}><a href={`#${l.id}`} onClick={e=>{e.preventDefault();go(l.id)}} style={{fontSize:14,opacity:0.5,transition:"opacity 0.2s"}}>{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 style={{fontSize:14,fontWeight:700,color:"#fff",textTransform:"uppercase",letterSpacing:2,marginBottom:20,fontFamily:"'DM Sans',sans-serif"}}>Areas</h4>
          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
            {areas.slice(0,6).map(a=><li key={a} style={{fontSize:14,opacity:0.5}}>{a}</li>)}
          </ul>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"20px 0",maxWidth:1100,margin:"0 auto"}}>
        <div className="footer-btm" style={{display:"flex",justifyContent:"space-between",fontSize:13,opacity:0.35,flexWrap:"wrap",gap:8}}>
          <span>&copy; {yr} Kade Holdings. All rights reserved.</span>
          <span>Iowa Registered LLC</span>
        </div>
      </div>
    </footer>

    {/* FLOATING MOBILE CTA */}
    <div className="mobile-only" style={{position:"fixed",bottom:0,left:0,right:0,zIndex:998,display:"flex"}}>
      <a href={TEL} style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",gap:10,background:"var(--gold)",color:"#fff",padding:"18px",fontSize:17,fontWeight:700,boxShadow:"0 -4px 20px rgba(0,0,0,0.15)",fontFamily:"'DM Sans',sans-serif"}}>{Icons.phone} Call Kade Holdings</a>
    </div>
    <div className="mobile-only" style={{height:60,display:"block"}} />
  </>);
}

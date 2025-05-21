import Logo from "./assets/logo.png";

/* --------------------------------------------------------------------
   DATA                                                                 󰚩
-------------------------------------------------------------------- */
const FEATURES = [
  "⚡ 4K Face‑Swap • AnonEngine™ zero‑log pipeline",
  "🛡️ GuardianAI™ • Real‑time ethical filter (GDPR + DMCA)",
  "🚀 MercurySwap™ • 4× faster GPU rendering",
  "💳 GhostPay™ • Volet, Stripe & Crypto fallback",
  "🤖 AgentHub™ • GPT‑powered sales & SEO assistant",
  "📊 Live Analytics • Real‑time dashboards & insights",
  "🤝 AI Workflow Automation • DMCA bots & content checks",
  "🔒 Privacy‑First • No media stored, EXIF scrubbed",
  "📈 Creator Revenue Share • Earn 70 % on referrals"
];

const PLANS = [
  { emoji:"🌱", tier:"Starter", price:"$29",  detail:"25 HD swaps / mo" },
  { emoji:"🚀", tier:"Pro",     price:"$99",  detail:"100 4K swaps + API" },
  { emoji:"🏢", tier:"Studio",  price:"$399", detail:"1 000 4K swaps + white‑label" }
];

const CONTACT = {
  email:   "contact@triangle.com",
  phone:   "+1‑555‑123‑9876",
  address: "228 Park Ave S, PMB 29965, New York, NY 10003‑1502, USA"
};

/* --------------------------------------------------------------------
   LAYOUT SECTIONS                                                      󰚩
-------------------------------------------------------------------- */
function Nav() {
  const NAV_HEIGHT   = 112; // px – taller bar to fit the bigger logo
  const LOGO_HEIGHT  = 96;  // px – even bigger logo per latest request

  return (
    <nav style={{background:"#0f172a",boxShadow:"0 2px 6px rgba(0,0,0,.35)",position:"sticky",top:0,zIndex:20,height:NAV_HEIGHT}}>
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%"}}>
        {/* Logo – bigger & with a subtle glow so it "sits" in the bar */}
        <img
          src={Logo}
          alt="triAIngle logo"
          style={{height:LOGO_HEIGHT,objectFit:"contain",filter:"drop-shadow(0 0 6px rgba(0,0,0,.5))"}}
        />

        <ul style={{display:"flex",gap:40,listStyle:"none",margin:0,fontWeight:600,color:"#f1f5f9"}}>
          {[{href:"#features",label:"Features"},{href:"#pricing",label:"Pricing"},{href:"#contact",label:"Contact"}].map(l=> (
            <li key={l.href}>
              <a href={l.href} style={{color:"inherit",textDecoration:"none"}}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );}

function Hero() {
  return (
    <header style={{background:"#fff"}}>
      <div className="container" style={{textAlign:"center",padding:"160px 20px 120px"}}>
        <h1 style={{fontSize:"3.6rem",fontWeight:800,lineHeight:1.15,maxWidth:900,margin:"0 auto"}}>
          AI‑Powered Media Automation Toolkit
        </h1>
        <p style={{maxWidth:780,margin:"32px auto",fontSize:"1.25rem",lineHeight:1.5}}>
          Create <b>hyper‑realistic</b> videos & images, clone voices in 40+ languages, and monetise them globally — all <i>privacy‑first</i> & compliant.
        </p>
        <a href="#pricing" className="btn" style={{fontSize:"1.15rem",padding:"16px 42px"}}>
          🚀 Get Early Access
        </a>
      </div>
    </header>
  );}

function Features() {
  return (
    <section id="features" style={{background:"var(--bg-light)",scrollMarginTop:120}}>
      <div className="container" style={{paddingTop:100,paddingBottom:100}}>
        <h2 style={{textAlign:"center",fontSize:"2rem",marginBottom:60}}>Why Creators Love Us ❤️</h2>
        <ul className="card-grid" style={{listStyle:"none",padding:0,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:32}}>
          {FEATURES.map(f => (
            <li key={f} className="card" style={{fontSize:"1.05rem",padding:"28px 32px"}}>{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );}

function Privacy() {
  return (
    <section style={{background:"#0f172a",color:"#e2e8f0",scrollMarginTop:120}}>
      <div className="container" style={{textAlign:"center",padding:"90px 20px"}}>
        <h2 style={{fontSize:"2rem",color:"#fff",marginBottom:24}}>🔒 Privacy & Compliance</h2>
        <p style={{fontSize:"1.15rem",maxWidth:820,margin:"0 auto",lineHeight:1.55}}>
          We operate a <b>zero‑log policy</b>. Media is processed in RAM, auto‑purged within seconds & never stored. GuardianAI™ blocks CSAM, revenge content and illegal requests <i>before</i> render. Fully aligned with GDPR, DMCA & 2257.
        </p>
      </div>
    </section>
  );}

function Pricing() {
  return (
    <section id="pricing" style={{background:"var(--bg-light)",scrollMarginTop:120}}>
      <div className="container" style={{paddingTop:100,paddingBottom:100}}>
        <h2 style={{textAlign:"center",fontSize:"2rem",marginBottom:60}}>Pricing</h2>
        <div className="card-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:32}}>
          {PLANS.map(p => (
            <div key={p.tier} className="card" style={{textAlign:"center",padding:"40px 36px"}}>
              <h3 style={{fontSize:"1.6rem",marginBottom:12}}>{p.emoji} {p.tier}</h3>
              <p style={{fontSize:"2.6rem",fontWeight:700,margin:"6px 0 12px"}}>{p.price}</p>
              <p style={{opacity:.85,marginBottom:24}}>{p.detail}</p>
              <button className="btn" style={{background:"var(--secondary)",padding:"14px 30px"}}>
                Choose {p.tier}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );}

function Contact() {
  return (
    <section id="contact" style={{background:"#fff",scrollMarginTop:120}}>
      <div className="container" style={{textAlign:"center",maxWidth:640,padding:"80px 20px"}}>
        <h2 style={{fontSize:"2rem",marginBottom:16}}>Contact</h2>
        <p style={{marginBottom:24,fontSize:"1.05rem"}}>Have questions or need a custom plan? Reach out anytime.</p>
        <p><b>Email:</b> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
        <p><b>Phone:</b> {CONTACT.phone}</p>
        <p><b>Address:</b> {CONTACT.address}</p>
      </div>
    </section>
  );}

function Footer() {
  return (
    <footer style={{background:"#0f172a",color:"#cbd5e1",padding:"30px 0",textAlign:"center",fontSize:"0.9rem"}}>
      © {new Date().getFullYear()} triAIngle Studio · Trademarks pending.
    </footer>
  );}

/* --------------------------------------------------------------------
   APP                                                                 󰚩
-------------------------------------------------------------------- */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Privacy />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );}

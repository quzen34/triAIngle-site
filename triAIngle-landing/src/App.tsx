import Logo from "./assets/logo.png";

/* --------------------------------------------------------------------
   DATA                                                                   
-------------------------------------------------------------------- */
const FEATURES = [
  "⚡ 4K Face‑Swap • AnonEngine™ zero‑log pipeline",
  "🛡️ GuardianAI™ • Real‑time ethical filter (GDPR + DMCA)",
  "🚀 MercurySwap™ • 4× faster GPU rendering",
  "💳 GhostPay™ • Volet, Stripe & Crypto fallback",
  "🤖 AgentHub™ • GPT‑4o sales & SEO assistant",
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
   LAYOUT SECTIONS                                                       
-------------------------------------------------------------------- */
function Nav() {
  return (
    <nav style={{background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.06)"}}>
      <div className="container" style={{display:"flex",alignItems:"center",height:72}}>
        <img src={Logo} alt="TriAIngle" style={{height:40}} />
        <ul style={{marginLeft:"auto",display:"flex",gap:32,listStyle:"none"}}>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header style={{background:"#fff"}}>
      <div className="container" style={{textAlign:"center",padding:"120px 20px"}}>
        <h1 style={{fontSize:"3.2rem",fontWeight:800,lineHeight:1.15}}>
          AI‑Powered Media Automation Toolkit
        </h1>
        <p style={{maxWidth:720,margin:"24px auto",fontSize:"1.15rem"}}>
          Create <b>hyper‑realistic</b> videos & images, clone voices in 40+ languages,
          and monetise them globally — all <i>privacy‑first</i> & compliant.
        </p>
        <a href="#pricing" className="btn" style={{fontSize:"1.1rem"}}>
          🚀 Get Early Access
        </a>
      </div>
    </header>
  );
}

function Features() {
  return (
    <section id="features" style={{background:"var(--bg-light)"}}>
      <div className="container">
        <h2 style={{textAlign:"center"}}>Why Creators Love Us ❤️</h2>
        <ul className="card-grid" style={{listStyle:"none",padding:0}}>
          {FEATURES.map(f => (
            <li key={f} className="card" style={{fontSize:"1rem"}}>{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section style={{background:"#0f172a",color:"#e2e8f0"}}>
      <div className="container card" style={{background:"#0f172a",boxShadow:"none"}}>
        <h2 style={{textAlign:"center",color:"#fff"}}>🔒 Privacy & Compliance</h2>
        <p style={{fontSize:"1rem",maxWidth:760,margin:"0 auto"}}>
          We operate a <b>zero‑log policy</b>. Media is processed in RAM, auto‑purged in seconds, and never shared.
          GuardianAI™ blocks CSAM, revenge content & illegal requests <i>before</i> render. Fully aligned with GDPR, DMCA & 2257.
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" style={{background:"var(--bg-light)"}}>
      <div className="container">
        <h2 style={{textAlign:"center"}}>Pricing</h2>
        <div className="card-grid">
          {PLANS.map(p => (
            <div key={p.tier} className="card" style={{textAlign:"center"}}>
              <h3 style={{fontSize:"1.4rem",marginBottom:8}}>{p.emoji} {p.tier}</h3>
              <p style={{fontSize:"2.4rem",fontWeight:700,margin:"4px 0"}}>{p.price}</p>
              <p style={{opacity:.8}}>{p.detail}</p>
              <button className="btn" style={{background:"var(--secondary)",marginTop:20}}>
                Choose {p.tier}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{background:"#fff"}}>
      <div className="container" style={{textAlign:"center",maxWidth:600}}>
        <h2>Contact</h2>
        <p>Have questions or need a custom plan? Reach out anytime.</p>
        <p><b>Email:</b> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
        <p><b>Phone:</b> {CONTACT.phone}</p>
        <p><b>Address:</b> {CONTACT.address}</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>© 2025 triAIngle Studio · Trademarks pending.</div>
    </footer>
  );
}

/* --------------------------------------------------------------------
   APP                                                                   
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
  );
}

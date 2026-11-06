import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Sun, Moon,
  Code2, Database, Server, Braces, MapPin, BriefcaseBusiness, GraduationCap,
  Terminal, Layers3, Check, Phone, ShieldCheck, Activity, Zap, ExternalLink
} from 'lucide-react';
import './style.css';

const profile = {
  name: 'Tejendrapal Singh Nathawat',
  role: 'Java Backend Developer',
  location: 'Badnawar, M.P',
  phone: '+91-8839666627',
  email: 'tejendrapalsingh404@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tejendrapal-singh',
  github: 'https://github.com/tejendraSingh4550'
};

const projects = [
  {
    id: 'fintrace', no: '01', title: 'FinTrace.IO', category: 'Backend & Streaming',
    label: 'ANTI-MONEY LAUNDERING (AML) RISK ENGINE',
    summary: 'A financial transaction screening system designed to process simulated streaming datasets, identify transaction anomalies and automate risk logging.',
    stack: ['Java', 'Spring Boot', 'Angular', 'Apache Kafka', 'Redis', 'MySQL'],
    highlights: [
      'Built transaction screening services using Spring Boot and MySQL.',
      'Integrated Kafka message handlers for asynchronous transaction processing.',
      'Added Redis caching for frequently accessed screening entities.',
      'Created an Angular tracking dashboard using RxJS and WebSockets.'
    ],
    metrics: [{value:'40%',label:'throughput improvement stated in project notes'}, {value:'<5ms',label:'hot-list cache lookup latency stated in project notes'}],
    github: profile.github, featured: true
  },
  {
    id: 'jobportal', no: '02', title: 'Job Portal Web Application', category: 'Full Stack',
    label: 'EMPLOYER & CANDIDATE PORTAL',
    summary: 'A full-stack job portal with role-specific experiences, custom data filters and separate dashboards for employers and candidates.',
    stack: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL', 'Docker Compose'],
    highlights: [
      'Created separate interactive dashboards for employers and candidates.',
      'Implemented custom data filters for portal workflows.',
      'Secured role-based endpoints with Spring Security.',
      'Containerized the core application using Docker Compose.'
    ],
    metrics: [],
    github: profile.github, featured: false
  }
];

const skillGroups = [
  { title: 'Languages', icon: Code2, desc: 'Programming and data querying', skills: ['Java', 'SQL'] },
  { title: 'Backend & Frameworks', icon: Server, desc: 'Application development', skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'MVC'] },
  { title: 'Web Technologies', icon: Braces, desc: 'Frontend and service integration', skills: ['Angular', 'RESTful Web Services', 'Java Servlets', 'JSP', 'RxJS', 'WebSockets'] },
  { title: 'Data & Middleware', icon: Database, desc: 'Persistence, caching and streaming', skills: ['MySQL', 'Redis', 'Apache Kafka'] },
  { title: 'Tools & Platforms', icon: Terminal, desc: 'Build, versioning and deployment', skills: ['Maven', 'Git', 'Docker Compose', 'Apache Tomcat', 'Postman'] },
  { title: 'Testing', icon: ShieldCheck, desc: 'Service validation and API testing', skills: ['JUnit', 'Mockito', 'Postman API Testing'] }
];

function SectionTitle({ kicker, title, accent, description }) {
  return <motion.div className="section-heading" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
    <span className="kicker">{kicker}</span>
    <h2>{title} <span className="gradient">{accent}</span></h2>
    {description && <p>{description}</p>}
  </motion.div>;
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [menu, setMenu] = useState(false);
  const [expanded, setExpanded] = useState('fintrace');
  const [copied, setCopied] = useState(false);
  const nav = ['About','Experience','Skills','Projects','Education','Contact'];

  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(()=>setCopied(false),1600); }
    catch { window.location.href = `mailto:${profile.email}`; }
  }

  return <main className={`app ${theme}`}>
    <div className="ambient ambient-a"/><div className="ambient ambient-b"/>
    <header className="nav-wrap">
      <a className="brand" href="#home" onClick={()=>setMenu(false)}><span className="brand-icon">T</span> tejendra<span className="brand-dot">.</span></a>
      <nav className={menu?'nav open':'nav'}>{nav.map((n,i)=><a key={n} href={'#'+n.toLowerCase()} onClick={()=>setMenu(false)}><small>0{i+1}</small>{n}</a>)}</nav>
      <div className="nav-actions">
        <button className="icon-button" aria-label="Toggle theme" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?<Sun size={17}/>:<Moon size={17}/>}</button>
        <a className="nav-cta" href={`mailto:${profile.email}`}>Let's connect <ArrowUpRight size={15}/></a>
        <button className="icon-button mobile-menu" aria-label="Toggle menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      </div>
    </header>

    <section className="hero wrap" id="home">
      <div className="hero-text">
        <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
          <div className="availability"><span/> JAVA BACKEND DEVELOPER <i/></div>
          <p className="hello">Hello, I'm</p>
          <h1>Tejendrapal<br/><span>Singh Nathawat</span><b>.</b></h1>
          <h2>Building with <span className="gradient">Java & Spring Boot</span></h2>
          <p className="intro">Java backend developer with hands-on experience building RESTful APIs, enterprise web applications and relational database solutions. Interested in secure backend systems, event-driven processing and clean API integrations.</p>
          <div className="hero-buttons">
            <a className="button primary" href="#projects">Explore projects <ArrowUpRight size={16}/></a>
            <a className="button secondary" href={`mailto:${profile.email}`}><Mail size={16}/> Contact me</a>
          </div>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a>
            <span><MapPin size={15}/> {profile.location}</span>
          </div>
        </motion.div>
      </div>
      <motion.div className="hero-visual" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.1}}>
        <div className="orbit orbit1"/><div className="orbit orbit2"/>
        <div className="portrait-card">
          <img src="/tejendra-profile.jpg" alt="Tejendrapal Singh Nathawat" />
          <div className="portrait-caption"><span className="portrait-status"/><div><b>Tejendrapal Singh Nathawat</b><small>Java Backend Developer</small></div></div>
        </div>        <div className="float-card kafka"><span className="float-icon orange">↗</span><div><b>Apache Kafka</b><small>Event streaming</small></div></div>
        <div className="float-card redis"><span className="float-icon green">◈</span><div><b>Redis</b><small>Fast caching</small></div></div>
        <div className="monogram">TSN</div>
      </motion.div>
      <a className="scroll" href="#about"><span/> SCROLL TO EXPLORE <ArrowDown size={13}/></a>
    </section>

    <section className="section wrap" id="about">
      <SectionTitle kicker="01 / PROFILE" title="Engineering with" accent="purpose." description="A little about my development focus."/>
      <div className="about-grid">
        <div className="about-copy">
          <h3>Backend first.<br/><span>Product minded.</span></h3>
          <p>My work and training have focused on Java development, Spring-based backend services, REST API design and relational databases. I have also worked on integrating Angular interfaces with backend services and exploring asynchronous, event-driven workflows.</p>
          <p>I enjoy understanding a feature end to end: from data and business logic to API behaviour, frontend integration and testing. I aim to keep learning and contribute to reliable software built for real users.</p>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={14}/></a>
        </div>
        <div className="profile-cards">
          <article><BriefcaseBusiness/><b>Java Developer (Intern)</b><span>Eureka Media and Technology</span><small>Jan 2025 – Present</small></article>
          <article><GraduationCap/><b>Java Development Course</b><span>Mindscript Tech, Pune</span><small>Feb 2024 – Dec 2024</small></article>
          <article><Layers3/><b>B.Tech — Information Technology</b><span>Mahakal Institute of Technology, Ujjain</span><small>2019 – 2023 · CGPA 7.27/10</small></article>
          <article><MapPin/><b>Based in Badnawar, M.P</b><span>Open to relevant software opportunities</span><small>Contact for availability</small></article>
        </div>
      </div>
    </section>

    <section className="section wrap" id="experience">
      <SectionTitle kicker="02 / EXPERIENCE" title="Where I've" accent="contributed." description="Professional experience and development training, presented separately."/>
      <div className="experience-list">
        <article className="experience-card">
          <div className="exp-top"><div><span className="exp-label">PROFESSIONAL EXPERIENCE</span><h3>Java Developer (Intern)</h3><h4>Eureka Media and Technology · Pune</h4></div><span className="date">1.6 months</span></div>
          <ul>
            <li>Developed and maintained backend modules using Java and Spring Boot, building REST APIs and endpoints for corporate web applications.</li>
            <li>Worked on FinTrace.IO, an internal financial screening system using Java and MySQL to detect transaction anomalies and automate risk logs.</li>
            <li>Integrated Apache Kafka for asynchronous transaction streams and Redis caching for blacklist lookups.</li>
            <li>Connected Angular components with backend services using RxJS and WebSockets for asynchronous data flow.</li>
            <li>Implemented JWT-based authentication, exception handling and API testing with Postman.</li>
          </ul>
        </article>
        <article className="experience-card training">
          <div className="exp-top"><div><span className="exp-label">TRAINING</span><h3>Java Development Course</h3><h4>Mindscript Tech · Pune</h4></div><span className="date">Feb 2024 – Dec 2024</span></div>
          <ul>
            <li>Worked on server-side business logic and CRUD components using Java, Spring MVC and Hibernate under senior guidance.</li>
            <li>Practised relational data operations with MySQL, Hibernate and JDBC.</li>
            <li>Worked with JUnit and Mockito for unit testing and validated workflow endpoints using Postman.</li>
          </ul>
        </article>
      </div>
    </section>

    <section className="section wrap" id="skills">
      <SectionTitle kicker="03 / TECHNICAL SKILLS" title="My engineering" accent="toolkit." description="Skills and technologies listed in my resume."/>
      <div className="skills-grid">
        {skillGroups.map((g,i)=>{const Icon=g.icon;return <motion.article className="skill-card" key={g.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><div className="skill-head"><span><Icon size={20}/></span><small>0{i+1}</small></div><h3>{g.title}</h3><p>{g.desc}</p><div className="tags">{g.skills.map(s=><span key={s}>{s}</span>)}</div></motion.article>})}
      </div>
    </section>

    <section className="section wrap" id="projects">
      <SectionTitle kicker="04 / SELECTED PROJECTS" title="Work worth" accent="exploring." description="Project summaries and technologies based on the supplied resume."/>
      <div className="project-list">
        {projects.map(p=><article className="project" key={p.id}>
          <button className="project-toggle" onClick={()=>setExpanded(expanded===p.id?'':p.id)}>
            <span className="project-no">{p.no}</span><span className="project-title"><small>{p.label}</small><b>{p.title}</b><em>{p.summary}</em></span><span className="project-arrow">{expanded===p.id?<X size={18}/>:<ArrowUpRight size={20}/>}</span>
          </button>
          <AnimatePresence>{expanded===p.id&&<motion.div className="project-expanded" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>
            <div><h5>Highlights</h5><ul>{p.highlights.map(h=><li key={h}><Check size={14}/>{h}</li>)}</ul></div>
            <div><h5>Technology stack</h5><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
              {p.metrics.length>0&&<div className="metrics">{p.metrics.map(m=><div key={m.value}><b>{m.value}</b><small>{m.label}</small></div>)}</div>}
            </div>
            <a className="repo" href={p.github} target="_blank" rel="noreferrer"><Github size={15}/> View GitHub profile / repositories <ArrowUpRight size={13}/></a>
          </motion.div>}</AnimatePresence>
        </article>)}
      </div>
      <p className="project-footnote">For source code, see the GitHub profile. Individual repository URLs and live demo links can be added once confirmed.</p>
      <a className="outline-button" href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> Visit GitHub <ArrowUpRight size={14}/></a>
    </section>

    <section className="section wrap" id="education">
      <SectionTitle kicker="05 / EDUCATION" title="Learning that shaped" accent="my path."/>
      <div className="education-card">
        <span className="edu-icon"><GraduationCap size={23}/></span>
        <div><small>2019 — 2023</small><h3>Bachelor of Technology — Information Technology</h3><p>Mahakal Institute of Technology, Ujjain, India</p><b>CGPA: 7.27 / 10</b></div>
      </div>
    </section>

    <section className="contact-section wrap" id="contact">
      <div className="contact-box">
        <div className="contact-main"><span className="kicker">06 / CONTACT</span><h2>Let's build<br/>something <span className="gradient">meaningful.</span></h2><p>Interested in Java backend development, enterprise applications and full-stack collaboration? Let's connect.</p><a className="button primary" href={`mailto:${profile.email}?subject=Professional%20Opportunity`}>Email me <ArrowUpRight size={16}/></a></div>
        <div className="contact-info">
          <div className="contact-row"><span><Mail size={16}/> Email</span><button onClick={copyEmail}>{copied?'Copied!':profile.email}<ArrowUpRight size={13}/></button></div>
          <a className="contact-row" href={`tel:${profile.phone.replaceAll(' ','')}`}><span><Phone size={16}/> Phone</span><b>{profile.phone}<ArrowUpRight size={13}/></b></a>
          <a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={16}/> LinkedIn</span><b>View profile <ArrowUpRight size={13}/></b></a>
          <a className="contact-row" href={profile.github} target="_blank" rel="noreferrer"><span><Github size={16}/> GitHub</span><b>View repositories <ArrowUpRight size={13}/></b></a>
          <div className="location"><MapPin size={15}/> {profile.location}</div>
        </div>
      </div>
    </section>

    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-icon">T</span> tejendra<span className="brand-dot">.</span></a><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top ↑</a></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);

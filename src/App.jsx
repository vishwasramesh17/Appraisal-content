import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Target, BarChart, HeartHandshake, 
  Rocket, Briefcase, BrainCircuit, ShieldAlert, Award, 
  CheckCircle, Database, Settings, Compass, Zap, TrendingUp
} from 'lucide-react';
import './App.css';
import './index.css';

// --- SVGs & Brand Elements ---

const Waves = () => (
  <div className="wave-container">
    {[...Array(20)].map((_, i) => (
      <div 
        key={i} 
        className="wave-circle" 
        style={{
          width: `${30 + i * 8}%`, 
          height: `${30 + i * 8}%`, 
          top: `-${15 + i * 4}%`, 
          right: `-${15 + i * 4}%`,
          opacity: 1 - (i * 0.04)
        }} 
      />
    ))}
  </div>
);

const SteamLogo = ({ dark }) => (
  <div className={`steam-logo ${dark ? 'dark-logo' : ''}`}>
    <div className="powered-by">Powered by</div>
    <div className="steam-text">steam<span className="steam-a">a</span></div>
  </div>
);

// --- Layout Templates ---

const IntroSlideTemplate = ({ currentSlide }) => (
  <div className="slide intro-layout">
    <Waves />
    <SteamLogo />
    <div className="intro-top">
      <div className="intro-text-container">
        <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x:0}}>
          <svg className="iris-logo-svg" viewBox="0 0 125 72" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="irisGrad" x1="0" y1="0" x2="125" y2="72" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#009999" />
                <stop offset="100%" stopColor="#40CFCF" />
              </linearGradient>
            </defs>
            <g fill="url(#irisGrad)" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="700" fontSize="68">
              <text x="0" y="62">l</text>
              <g transform="translate(0, 62) scale(1, 1.43) translate(0, -62)">
                <text x="20" y="62">r</text>
              </g>
              <text x="48" y="62">l</text>
              <text x="66" y="62">S</text>
            </g>
          </svg>
        </motion.div>
        <motion.p 
          initial={{opacity: 0, x: -20}} animate={{opacity: 1, x:0}} transition={{delay: 0.2}}
          className="iris-subtitle"
        >
          Making EV charging reliable with our AI enabled <br/><span style={{color: '#00B0B0'}}>digital twin</span>
        </motion.p>
      </div>
    </div>
    <div className="intro-bottom">
      <motion.div 
        initial={{opacity: 0, y: 20}} animate={{opacity: 1, y:0}} transition={{delay: 0.4}}
        className="intro-title-wrapper"
      >
        <h2 className="intro-main-title">
          Performance Review – Vishwas R
        </h2>
      </motion.div>
    </div>
    <div className="footer dark-footer">
      <span>28-Apr-26</span>
      <span>www.iris.steam-a.com</span>
      <span>{currentSlide + 1}</span>
    </div>
  </div>
);

const OutroSlideTemplate = ({ currentSlide }) => (
  <div className="slide outro-layout">
    <Waves />
    <SteamLogo />
    <div className="outro-content">
      <motion.h1 
        initial={{opacity: 0, x: -20}} animate={{opacity: 1, x:0}}
        className="thank-you"
      >
        Thank you
      </motion.h1>
    </div>
    <div className="footer dark-footer">
      <span>28-Apr-26</span>
      <span>www.iris.steam-a.com</span>
      <span>{currentSlide + 1}</span>
    </div>
  </div>
);

const ContentSlideTemplate = ({ title, children, currentSlide }) => (
  <div className="slide content-layout">
    <SteamLogo dark />
    <div className="content-header">
      <div className="cyan-block"></div>
      <h2 className="slide-title">{title}</h2>
    </div>
    <div className="content-body">
      {children}
    </div>
    <div className="footer cyan-footer">
      <span>28-Apr-26</span>
      <span>www.iris.steam-a.com</span>
      <span>{currentSlide + 1}</span>
    </div>
  </div>
);

// --- New Visual Storytelling Components ---

const Slide1Learning = () => (
  <div className="gantt-slide">
    <h3 className="gantt-header">Aug 2025 → Apr 2026</h3>
    {/* Timeline bar */}
    <div className="gantt-timeline">
      <div className="gantt-markers">
        <span>Aug 1<br/>2025</span>
        <span>Nov<br/>2025</span>
        <span>Mid Feb<br/>2026</span>
        <span>Apr 28<br/>2026</span>
      </div>
      <div className="gantt-track">
        <div className="gantt-dots"><span/><span/><span/><span/></div>
        <div className="gantt-bars">
          <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:0.8, delay:0.2}} style={{originX:0}} className="gantt-bar gantt-phase1" >
            <strong>PHASE 1 — QA TESTING</strong><br/>Zwiz Network
          </motion.div>
          <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:0.8, delay:0.5}} style={{originX:0}} className="gantt-bar gantt-phase2">
            <strong>PHASE 2 — TIVOLT TESTING + BA</strong><br/>Tivolt Testing & BA Transition
          </motion.div>
          <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:0.8, delay:0.8}} style={{originX:0}} className="gantt-bar gantt-phase3">
            <strong>PHASE 3 — FULL BA ROLE</strong><br/>Iris Network CMS
          </motion.div>
        </div>
      </div>
    </div>
    {/* Activities */}
    <div className="gantt-activities">
      <span className="gantt-act-label">Activities</span>
      <div className="gantt-act-tags">
        {['Sprint Planning','Daily Scrums','Req. Gathering','Stakeholder Discussions','Jira Stories + AC','Feature Analysis'].map((t,i) => (
          <motion.span key={i} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1*i+1}} className="gantt-act-tag">{t}</motion.span>
        ))}
      </div>
    </div>
    {/* Stats */}
    <div className="gantt-stats">
      <div><span className="gantt-stat-num">5 mo</span><span className="gantt-stat-lbl">as Business Analyst</span></div>
      <div><span className="gantt-stat-num">4 mo</span><span className="gantt-stat-lbl">as QA Engineer</span></div>
    </div>
  </div>
);

const Slide1Outcomes = () => (
  <div className="outcomes-wrap">
    <div className="outcomes-card">
      <h3><Rocket size={32}/> Key Outcomes Delivered</h3>
      <ul className="outcomes-list">
        <motion.li initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.1}}>
          <span className="outcomes-icon"><CheckCircle size={24} color="#a7f3d0"/></span>
          <span>Been a BA in Network for <strong>9 sprints</strong> (owned)</span>
        </motion.li>
        <motion.li initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.2}}>
          <span className="outcomes-icon"><CheckCircle size={24} color="#a7f3d0"/></span>
          <span><strong>Worked on 40+</strong> Stories &nbsp;|&nbsp; <strong>Created 30+</strong> Stories</span>
        </motion.li>
        <motion.li initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.3}}>
          <span className="outcomes-icon"><CheckCircle size={24} color="#a7f3d0"/></span>
          <span><strong>25+ Stories</strong> moved to production and working fine</span>
        </motion.li>
        <motion.li initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.4}}>
          <span className="outcomes-icon"><CheckCircle size={24} color="#a7f3d0"/></span>
          <span>Reported <strong>35+ bugs</strong> in Network</span>
        </motion.li>
      </ul>
    </div>
  </div>
);

const Slide2Contributions = () => (
  <div className="contrib-wrap">
    <div className="contrib-grid">
      <div className="contrib-card contrib-card-blue">
        <div className="contrib-icon contrib-icon-blue"><Database size={22}/></div>
        <h4 className="contrib-title">Product</h4>
        <ul className="contrib-list">
          <li>Smart Charging Profile</li>
          <li>Dynamic Tariff</li>
          <li>Auto Closure of Sessions</li>
          <li>AI Failure Session Analytics</li>
        </ul>
      </div>
      <div className="contrib-card contrib-card-purple">
        <div className="contrib-icon contrib-icon-purple"><Settings size={22}/></div>
        <h4 className="contrib-title">Process & System</h4>
        <ul className="contrib-list">
          <li>BPMN for Tivolt Payment</li>
          <li>Session Flow & OCPP Flow Diagrams</li>
          <li>SOPs & structured workflows</li>
          <li>Commercial Models (OCPP & OCPI)</li>
        </ul>
      </div>
      <div className="contrib-card contrib-card-teal">
        <div className="contrib-icon contrib-icon-teal"><HeartHandshake size={22}/></div>
        <h4 className="contrib-title">Client & Execution</h4>
        <ul className="contrib-list">
          <li>Owned Network backlog + service support</li>
          <li>Acted as Scrum Master (daily tracking)</li>
          <li>Handled 7+ clients | Functioning Service Support for 4+ Clients</li>
          <li>Delivered Network Demo for Flex Energy</li>
          <li>OEM integrations (ACS Energy, Cubenz)</li>
        </ul>
      </div>
    </div>
    <div className="contrib-impact">
      <h3><TrendingUp size={20}/> Direct Impact Delivered</h3>
      <div className="contrib-impact-grid">
        <div className="contrib-impact-item">→ Improved operational efficiency & clarity</div>
        <div className="contrib-impact-item">→ Strengthened client trust and engagement</div>
        <div className="contrib-impact-item">→ Enabled scalable product workflows</div>
      </div>
    </div>
  </div>
);

const Slide6Synthesis = () => (
  <div className="synth-layout">
    <div className="synth-stats">
      <div className="synth-stat"><span className="synth-stat-num">100%</span><span className="synth-stat-lbl2">Effort Reduction</span></div>
      <div className="synth-stat"><span className="synth-stat-num">25+</span><span className="synth-stat-lbl2">Prod Stories</span></div>
      <div className="synth-stat"><span className="synth-stat-num">9</span><span className="synth-stat-lbl2">Sprints Owned</span></div>
      <div className="synth-stat"><span className="synth-stat-num">75%</span><span className="synth-stat-lbl2">Less Manual Work</span></div>
    </div>
    <div className="synth-cards">
      <div className="synth-card">
        <div className="synth-card-header">
          <div className="synth-card-icon" style={{background:'#eff6ff',color:'#3b82f6'}}><Briefcase size={22}/></div>
          <h3>What I Did</h3>
        </div>
        <ul>
          <li>Owned Network module</li>
          <li>Delivered features</li>
          <li>Built workflows</li>
          <li>Managed clients</li>
        </ul>
      </div>
      <div className="synth-card">
        <div className="synth-card-header">
          <div className="synth-card-icon" style={{background:'#f5f3ff',color:'#8b5cf6'}}><BrainCircuit size={22}/></div>
          <h3>How I Did It</h3>
        </div>
        <ul>
          <li>Product thinking</li>
          <li>Data-driven decisions</li>
          <li>Strong stakeholder alignment</li>
        </ul>
      </div>
      <div className="synth-card synth-card-accent">
        <div className="synth-card-header">
          <div className="synth-card-icon" style={{background:'#00B0B0',color:'white'}}><Target size={22}/></div>
          <h3>Impact</h3>
        </div>
        <ul className="synth-check-list">
          <li className="synth-check-item"><CheckCircle size={18} color="#00B0B0"/> Reduced effort (75%–100%)</li>
          <li className="synth-check-item"><CheckCircle size={18} color="#00B0B0"/> Improved predictability</li>
          <li className="synth-check-item"><CheckCircle size={18} color="#00B0B0"/> Strengthened reliability</li>
          <li className="synth-check-item"><CheckCircle size={18} color="#00B0B0"/> Better business decisions</li>
        </ul>
      </div>
    </div>
  </div>
);

const LayoutSplit = ({ skills, content, applied, impact, strategicAlignment }) => (
  <div className="layout-split">
    <div className="impact-left">
      <div className="skill-tags">
        {skills.map((s, i) => <motion.span key={i} initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{delay:0.1*i}} className="skill-tag">{s}</motion.span>)}
      </div>
      <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="content-box">
        <div className="text-lg leading-relaxed">{content}</div>
      </motion.div>
    </div>
    <div className="impact-right">
      <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="applied-box">
        <div className="box-title"><Zap size={20} /> How I Applied It</div>
        <ul className="box-list">{applied.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </motion.div>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.5}} className="impact-box">
        <div className="box-title"><Target size={20} /> Impact</div>
        <ul className="box-list">{impact.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </motion.div>
      {strategicAlignment && (
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6}} className="why-box">
          <div className="box-title"><Compass size={20} /> Strategic Alignment</div>
          <ul className="box-list">{strategicAlignment.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </motion.div>
      )}
    </div>
  </div>
);

const LayoutHorizontal = ({ skills, content, applied, impact, strategicAlignment }) => (
  <div className="layout-horizontal">
    <div className="layout-horizontal-top">
      <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="content-box">
        <div className="text-lg leading-relaxed">{content}</div>
      </motion.div>
      <div className="skill-tags">
        {skills.map((s, i) => <motion.span key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1*i}} className="skill-tag">{s}</motion.span>)}
      </div>
    </div>
    <div className="layout-horizontal-bottom">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="applied-box">
        <div className="box-title"><Zap size={20} /> How I Applied It</div>
        <ul className="box-list">{applied.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </motion.div>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="impact-box">
        <div className="box-title"><Target size={20} /> Impact</div>
        <ul className="box-list">{impact.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </motion.div>
      {strategicAlignment && (
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="why-box">
          <div className="box-title"><Compass size={20} /> Strategic Alignment</div>
          <ul className="box-list">{strategicAlignment.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </motion.div>
      )}
    </div>
  </div>
);

const LayoutCards = ({ skills, content, applied, impact, strategicAlignment }) => (
  <div className="layout-cards">
    <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.1}} className="layout-cards-top content-box">
      <div className="skill-tags">
        {skills.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
      </div>
      <div className="text-xl leading-relaxed max-w-4xl">{content}</div>
    </motion.div>
    <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="applied-box">
      <div className="box-title"><Zap size={20} /> How I Applied It</div>
      <ul className="box-list">{applied.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
    </motion.div>
    <div className="flex flex-col gap-6">
      <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="impact-box flex-1">
        <div className="box-title"><Target size={20} /> Impact</div>
        <ul className="box-list">{impact.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </motion.div>
      {strategicAlignment && (
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="why-box">
          <div className="box-title"><Compass size={20} /> Strategic Alignment</div>
          <ul className="box-list">{strategicAlignment.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </motion.div>
      )}
    </div>
  </div>
);

const LayoutTimeline = ({ skills, content, applied, impact, strategicAlignment }) => (
  <div className="layout-timeline">
    <div className="timeline-left">
      <div className="skill-tags">
        {skills.map((s, i) => <motion.span key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1*i}} className="skill-tag">{s}</motion.span>)}
      </div>
      <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="content-box timeline-step">
        <div className="text-lg leading-relaxed">{content}</div>
      </motion.div>
      <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="applied-box timeline-step">
        <div className="box-title"><Zap size={20} /> How I Applied It</div>
        <ul className="box-list">{applied.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </motion.div>
    </div>
    <div className="timeline-right">
      <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.4}} className="impact-box impact-box-highlight">
        <div className="box-title"><Target size={20} /> Impact</div>
        <ul className="box-list">{impact.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </motion.div>
      {strategicAlignment && (
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.5}} className="why-box">
          <div className="box-title"><Compass size={20} /> Strategic Alignment</div>
          <ul className="box-list">{strategicAlignment.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </motion.div>
      )}
    </div>
  </div>
);

// Evaluation Sub-Components
const ScoreBar = ({ label, score, max, text, delay }) => {
  const percentage = (score / max) * 100;
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.4 }} className="score-bar">
      <div className="score-labels">
        <span className="score-label">{label}</span>
        <span className="score-value">{score}<span className="score-max">/{max}</span></span>
      </div>
      <div className="score-track">
        <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }} className="score-fill"/>
      </div>
      {text && <div className="score-subtext">{text}</div>}
    </motion.div>
  );
};

const Badge = ({ text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="badge"
  >
    {text}
  </motion.div>
);

// --- Slides Content Array ---

const slides = [
  { id: "intro" },

  // Q1: What have you learnt? Outcomes delivered?
  {
    id: "learning",
    title: "1. Learning Journey & Transition",
    content: <Slide1Learning />
  },
  {
    id: "outcomes",
    title: "1.1 Outcomes Delivered",
    content: <Slide1Outcomes />
  },

  // Q2: Professional highpoints / accomplishments?
  {
    id: "key-contributions",
    title: "2. Key Contributions",
    content: <Slide2Contributions />
  },
  {
    id: "req-analysis",
    title: "2.1 Requirement Analysis",
    content: (
      <LayoutTimeline 
        skills={["Product Thinking", "Analytical Problem Solving", "Technical Depth"]}
        content={<p>Applied product-first thinking by analyzing requirements from both <strong>end-user and CPO operational perspectives</strong>, ensuring real-world usability and scalability.</p>}
        applied={[
          "Drove Bulk Closure of Interrupted Sessions → reduced manual effort by ~75%",
          "Enabled Automatic Session Closure via Boot Notification → eliminated manual intervention (~100% effort reduction)",
          "Built Live SoC visibility & Google-based reviews → improved transparency and feedback loops",
          "Implemented Smart Charging Profiles → optimized power usage and prevented EB penalties"
        ]}
        impact={[
          "Reduced operational overhead and repetitive workflows",
          "Improved decision-making for users and operators",
          "Increased system efficiency and reliability"
        ]}
        strategicAlignment={[
          "Strengthens platform scalability for growing CPO networks",
          "Improves customer experience while reducing operational cost"
        ]}
      />
    )
  },

  {
    id: "ownership",
    title: "2.2 Ownership & Leadership",
    content: (
      <LayoutTimeline 
        skills={["Ownership & Leadership", "Stakeholder Management", "Scrum Master"]}
        content={<p>Took complete ownership of the Network module, feature backlog, and client-facing network service support.</p>}
        applied={[
          "Started acting as Scrum Master for execution tracking and alignment",
          "Delivered Network Demo for Flex Energy to external stakeholders",
          "Prepared scenario-wise PPTs to explain Tivolt payment flows directly to Tivolt",
          "Conducted KT sessions for Dev & QA teams, resolving ambiguities in real-time"
        ]}
        impact={[
          "Reduced dependency on repeated clarifications and improved onboarding speed",
          "Enabled smoother collaboration and reduced execution friction",
          "Strengthened product understanding internally and externally"
        ]}
        strategicAlignment={[
          "Improves team efficiency and reduces communication gaps as teams scale",
          "Builds stronger product positioning with external stakeholders"
        ]}
      />
    )
  },

  {
    id: "req-clarity",
    title: "2.3 Requirement Quality",
    content: (
      <LayoutCards 
        skills={["Analytical Problem Solving", "Ownership"]}
        content={<p>Ensured requirements were structured, complete, and unambiguous <strong>before development</strong>.</p>}
        applied={[
          "Defined edge cases, expected behaviors, and failure scenarios within story tickets",
          "Aligned teams early to eliminate interpretation gaps"
        ]}
        impact={[
          "Noticeable reduction in requirement-related bugs and rework",
          "Smoother QA cycles with fewer iterations",
          "Enabled consistent monthly production releases"
        ]}
        strategicAlignment={[
          "Improves delivery predictability and release confidence",
          "Reduces engineering effort spent on rework"
        ]}
      />
    )
  },

  {
    id: "resolving-complexity",
    title: "2.4 Handling Clients & Complexity",
    content: (
      <LayoutHorizontal 
        skills={["Stakeholder Management", "Analytical Problem Solving", "Technical Depth"]}
        content={<p>Actively handling 7+ clients and resolving day-to-day operational issues for 4+ clients directly.</p>}
        applied={[
          "Managed OCPP compatibility and integrations with OEMs like ACS Energy and Cubenz",
          "Resolved Tivolt reconciliation issues by consolidating multiple financial data sources",
          "Identified root cause in MAK Controls issue via deep OCPP log analysis + joint testing",
          "Collaborated with OEMs and clients for real-world validation"
        ]}
        impact={[
          "Reduced back-and-forth cycles and ambiguity across teams",
          "Prevented misaligned decisions and unnecessary escalations",
          "Improved clarity in financial and operational workflows"
        ]}
        strategicAlignment={[
          "Builds trust with clients and partners",
          "Ensures faster and more accurate issue resolution in production environments"
        ]}
      />
    )
  },

  {
    id: "workflows",
    title: "2.5 Process & Workflow",
    content: (
      <LayoutHorizontal 
        skills={["Product Thinking", "Systems Thinking", "Ownership"]}
        content={<p>Introduced structured workflows, flowcharts, and documentation to improve consistency and alignment.</p>}
        applied={[
          "Created Business Process Model Notation (BPMN) for Tivolt Payment",
          "Built Flow charts for Tivolt session flow and OCPP message flow",
          "Drafted SOPs for interrupted & suspicious sessions",
          "Built OCPP operational documentation & failure analysis guide",
          "Applied RICE prioritization for backlog"
        ]}
        impact={[
          "Reduced ambiguity in operations and edge-case handling",
          "Improved cross-team alignment and faster decision-making",
          "Enabled clearer client onboarding and communication"
        ]}
        strategicAlignment={[
          "Supports scaling operations without increasing complexity",
          "Improves internal efficiency and external clarity"
        ]}
      />
    )
  },

  {
    id: "data-truth",
    title: "2.6 Data-Driven Decisions",
    content: (
      <LayoutCards 
        skills={["Analytical Problem Solving", "Technical Depth"]}
        content={<p>Used data not just for insights, but as a validation layer for system correctness.</p>}
        applied={[
          "Validated AI-based failure analysis against OCPP logs (source of truth)",
          "Identified mismatches in failure reasons, timestamps, and formats",
          "Worked with teams to correct issues before production"
        ]}
        impact={[
          "Prevented incorrect insights from reaching clients",
          "Improved reliability of AI-driven features",
          "Reduced potential confusion and escalations"
        ]}
        strategicAlignment={[
          "Protects product credibility, especially in new AI capabilities",
          "Ensures decisions made by CPOs are based on accurate data"
        ]}
      />
    )
  },

  {
    id: "business-impact",
    title: "2.7 Business Impact",
    content: (
      <LayoutHorizontal 
        skills={["Product Thinking", "Analytical Modelling", "Ownership"]}
        content={<p>Connected product decisions with commercial viability and resource planning.</p>}
        applied={[
          "Built commercial models for both OCPP and OCPI clients",
          "Projected connector growth, revenue, and break-even timelines",
          "Estimated resource and lifecycle costs"
        ]}
        impact={[
          "Enabled informed client onboarding decisions",
          "Improved visibility into revenue vs cost trade-offs",
          "Supported focus on high-potential clients"
        ]}
        strategicAlignment={[
          "Strengthens business decision-making",
          "Aligns product growth with financial sustainability"
        ]}
      />
    )
  },

  {
    id: "evaluation",
    title: "3. The 6 Qualities of a Steam-A Professional",
    content: (
      <div className="eval-container">
        <div className="eval-header">
          <span className="eval-header-label">Self Evaluation</span>
          <div className="overall-score">8.7<span>/ 10 Overall Score</span></div>
        </div>
        <div className="score-grid">
          <ScoreBar label="Courage to Promise" score={9} max={10} delay={0.1} text={<>Realistic estimation backed by <span className="highlight-text">cross-team alignment</span>.</>} />
          <ScoreBar label="Commitment to Deliver" score={9} max={10} delay={0.2} text={<>Continuous tracking and proactive blocker resolution.</>} />
          <ScoreBar label="Attention to Detail" score={9.5} max={10} delay={0.3} text={<>Caught edge cases pre-prod. Validated AI against <span className="highlight-text">raw logs</span>.</>} />
          <ScoreBar label="Smart Storytelling" score={8} max={10} delay={0.4} text={<>Translated complex OCPP flows into <span className="highlight-text">clear narratives</span>.</>} />
          <ScoreBar label="Positive Attitude" score={8.5} max={10} delay={0.5} text={<>Calm under pressure, prioritizing <span className="highlight-text">solutions over problems</span>.</>} />
          <ScoreBar label="Life Outside Work" score={7.5} max={10} delay={0.6} text={<>Maintaining energy through <span className="highlight-text">dancing and travel</span>.</>} />
        </div>
      </div>
    )
  },

  {
    id: "support",
    title: "4. Support Required to Reach 10/10",
    content: (
      <div className="support-container">
        <Badge text="Ownership of end-to-end features" delay={0.1} />
        <Badge text="Mentorship on product thinking" delay={0.2} />
        <Badge text="Feedback on decision-making" delay={0.3} />
      </div>
    )
  },

  {
    id: "direction",
    title: "5. Professional Aspirations",
    content: (
      <LayoutTimeline 
        skills={["Product Thinking", "Ownership", "Stakeholder Influence"]}
        content={<p>Moving towards a Senior BA / Product-oriented role, expanding from execution to <strong>outcome ownership</strong>.</p>}
        applied={[
          "Strengthen understanding of user behavior, business impact, and product metrics",
          "Contribute to problem discovery, solution definition, and outcome measurement",
          "Identify high-impact features and differentiators (MVPs / wow factors)",
          "Improve storytelling and client influence"
        ]}
        impact={[
          "Drive decisions based on user value and business outcomes, not just requirements",
          "Transform execution into measurable business success"
        ]}
        strategicAlignment={[
          "Enables stronger product direction and innovation",
          "Bridges gap between execution and strategy"
        ]}
      />
    )
  },

  {
    id: "synthesis",
    title: "6. Synthesis: Overall Contribution",
    content: <Slide6Synthesis />
  },

  {
    id: "my-brand-1a",
    title: "My Brand – Manager Appreciation",
    content: (
      <div className="brand-layout">
        <motion.div className="brand-email-zoom" initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{delay:0.1,duration:0.5}}>
          <img src={`${import.meta.env.BASE_URL}brand-8.png`} alt="Manager appreciation email from Ramya Baskaran" />
        </motion.div>
      </div>
    )
  },

  {
    id: "my-brand-1b",
    title: "My Brand – Manager Recognition",
    content: (
      <div className="brand-layout">
        <div className="brand-grid">
          <motion.div className="brand-item" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>
            <img src={`${import.meta.env.BASE_URL}brand-2.png`} alt="Ramya - Good one Vishwas" />
          </motion.div>
          <motion.div className="brand-item" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
            <img src={`${import.meta.env.BASE_URL}brand-3.png`} alt="Ramya - Have reviewed it" />
          </motion.div>
          <motion.div className="brand-item brand-item-wide" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}}>
            <img src={`${import.meta.env.BASE_URL}brand-4.png`} alt="Ramya - Zeon Site Visit Good insights" />
          </motion.div>
          <motion.div className="brand-item brand-item-wide" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
            <img src={`${import.meta.env.BASE_URL}brand-5.png`} alt="Ramya - Nice analysis, nice to see you being noticed" />
          </motion.div>
        </div>
      </div>
    )
  },

  {
    id: "my-brand-2",
    title: "My Brand – Peer Recognition",
    content: (
      <div className="brand-layout">
        <div className="brand-grid">
          <motion.div className="brand-item brand-item-wide" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>
            <img src={`${import.meta.env.BASE_URL}brand-1.png`} alt="Vishwanath - Clear analysis with MAK Controls" />
          </motion.div>
          <motion.div className="brand-item" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
            <img src={`${import.meta.env.BASE_URL}brand-6.png`} alt="Pratheep - I shared it to Pon, very useful" />
          </motion.div>
          <motion.div className="brand-item" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}}>
            <img src={`${import.meta.env.BASE_URL}brand-7.png`} alt="Pratheep - Looks good da, this helps" />
          </motion.div>
        </div>
      </div>
    )
  },

  {
    id: "my-brand-3",
    title: "My Brand – Blog & Community",
    content: (
      <div className="brand-layout">
        <div className="brand-grid brand-grid-compact">
          <motion.div className="brand-item brand-compact" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>
            <img src={`${import.meta.env.BASE_URL}brand-9.png`} alt="Blog post - Testing EV Charging Sessions" />
          </motion.div>
          <motion.div className="brand-item brand-compact" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
            <img src={`${import.meta.env.BASE_URL}brand-10.jpg`} alt="DevFest Coimbatore" />
          </motion.div>
          <motion.div className="brand-item brand-compact" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}}>
            <img src={`${import.meta.env.BASE_URL}brand-11.jpg`} alt="Community event" />
          </motion.div>
        </div>
      </div>
    )
  },

  { id: "outro" }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="slide-container-full"
        >
          {slide.id === 'intro' ? (
            <IntroSlideTemplate currentSlide={currentSlide} />
          ) : slide.id === 'outro' ? (
            <OutroSlideTemplate currentSlide={currentSlide} />
          ) : (
            <ContentSlideTemplate title={slide.title} currentSlide={currentSlide}>
              {slide.content}
            </ContentSlideTemplate>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="nav-controls">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="nav-btn prev"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="nav-btn next"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;

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
        <motion.h1 
          initial={{opacity: 0, x: -20}} animate={{opacity: 1, x:0}}
          className="iris-title"
        >
          iris
        </motion.h1>
        <motion.p 
          initial={{opacity: 0, x: -20}} animate={{opacity: 1, x:0}} transition={{delay: 0.2}}
          className="iris-subtitle"
        >
          Making EV charging reliable with our AI enabled <br/><span style={{color: '#00B0B0'}}>digital twin</span>
        </motion.p>
      </div>
    </div>
    <div className="intro-bottom">
      <motion.h2 
        initial={{opacity: 0, y: 20}} animate={{opacity: 1, y:0}} transition={{delay: 0.4}}
        className="intro-main-title"
      >
        Performance Review – Vishwas R
      </motion.h2>
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

// --- Visual Storytelling Components ---

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
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay, duration: 0.4 }} className="badge">
    {text}
  </motion.div>
);

// --- Slides Content Array ---

const slides = [
  { id: "intro" },
  
  {
    id: "req-analysis",
    title: "1. Requirement Analysis",
    content: (
      <LayoutSplit 
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
    title: "2. Ownership Beyond Role",
    content: (
      <LayoutTimeline 
        skills={["Ownership & Leadership", "Stakeholder Management"]}
        content={<p>Took ownership beyond BA scope by ensuring alignment, clarity, and continuity across teams.</p>}
        applied={[
          "Conducted KT sessions for Dev & QA teams, covering use cases, edge cases, and system behavior",
          "Stayed actively involved during execution to resolve ambiguities in real-time",
          "Represented product in external forums and discussions"
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
    title: "3. Requirement Quality",
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
    title: "4. Handling Complex Stakeholder Scenarios",
    content: (
      <LayoutSplit 
        skills={["Stakeholder Management", "Analytical Problem Solving", "Technical Depth"]}
        content={<p>Managed conflicting stakeholder scenarios using data-backed analysis and structured communication.</p>}
        applied={[
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
    title: "5. Process & Workflow Improvements",
    content: (
      <LayoutHorizontal 
        skills={["Product Thinking", "Systems Thinking", "Ownership"]}
        content={<p>Introduced structured workflows to reduce reliance on ad-hoc explanations and improve consistency.</p>}
        applied={[
          "Created Business Process Models for session flows",
          "Designed payment flow diagrams for client communication",
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
    title: "6. Data-Driven Decision Making",
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
    title: "7. Business Impact",
    content: (
      <LayoutHorizontal 
        skills={["Product Thinking", "Analytical Modelling", "Ownership"]}
        content={<p>Connected product decisions with commercial viability and resource planning.</p>}
        applied={[
          "Built commercial models for OCPP & OCPI clients",
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
    title: "8. The 6 Qualities of a Steam-A Professional",
    content: (
      <div className="eval-container">
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
    title: "9. Support Required to Reach 10/10",
    content: (
      <div className="support-container">
        <Badge text="End-to-End Ownership Opportunities" delay={0.1} />
        <Badge text="Deeper Product-Level Exposure" delay={0.2} />
        <Badge text="Mentorship focused heavily on Strategic Product Thinking" delay={0.3} />
        <Badge text="Faster feedback loops on deliverables" delay={0.4} />
        <Badge text="Support for Advanced Skill Development (SQL, Analytics)" delay={0.5} />
      </div>
    )
  },

  {
    id: "direction",
    title: "10. Professional Direction",
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
    title: "11. Synthesis: Overall Contribution",
    content: (
      <div className="synthesis-grid">
        <div className="synthesis-col">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="synthesis-card"
          >
            <h3 className="text-xl font-bold text-[#008b8b] mb-3 flex items-center gap-2"><Settings size={20}/> Integrated Capability</h3>
            <p className="leading-relaxed mb-3">Progressed from requirement execution to <strong>product-oriented thinking</strong>.</p>
            <p className="leading-relaxed">Consistently applied product, analytical, and stakeholder skills across problem spaces to enable improvements across efficiency, reliability, and business decision-making.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="synthesis-highlight"
          >
            <h3><Briefcase size={24}/> Strategic Positioning</h3>
            <p className="highlight-main">Operating with a mindset that connects product decisions to business outcomes.</p>
            <p className="highlight-sub">Ready to take on broader product ownership and strategic responsibility.</p>
            <div className="mt-4 pt-4 border-t border-[#00B0B0] border-opacity-20">
              <p className="text-gray-500 italic font-light">"Translating Product Thinking into Scalable Outcomes."</p>
            </div>
          </motion.div>
        </div>
        
        <div className="synthesis-col">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="synthesis-card h-full"
          >
            <h3 className="text-xl font-bold text-[#008b8b] mb-4 flex items-center gap-2"><Target size={20}/> Key Outcomes</h3>
            <ul className="box-list">
              <li><strong>Reduced operational effort</strong> through automation and workflow design.</li>
              <li><strong>Improved delivery predictability</strong> and system reliability.</li>
              <li><strong>Strengthened stakeholder trust</strong> through data-driven clarity.</li>
              <li><strong>Contributed to revenue awareness</strong> and scalable product design.</li>
            </ul>
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

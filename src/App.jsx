import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Target, BarChart, HeartHandshake, 
  Rocket, Lightbulb, Zap, TrendingUp, Presentation, Briefcase, 
  BrainCircuit, ShieldAlert, Award, Compass, MessagesSquare, Users, 
  LineChart, CheckCircle, Database, Activity, Globe, Car, Settings
} from 'lucide-react';
import './App.css';
import './index.css';

// Helper Components
const Card = ({ title, icon, children, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="card"
  >
    {icon && <div className="card-icon">{icon}</div>}
    <h3>{title}</h3>
    <div>{children}</div>
  </motion.div>
);

const ImpactSlide = ({ skills, content, applied, impact }) => (
  <div className="impact-grid">
    <div className="impact-left">
      <div className="skill-tags">
        {skills.map((skill, idx) => (
          <motion.span 
            key={idx} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * idx, duration: 0.3 }}
            className="skill-tag"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="content-box text-lg text-gray-300 leading-relaxed"
      >
        {content}
      </motion.div>
    </div>
    
    <div className="impact-right">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="applied-box"
      >
        <div className="box-title"><Zap size={20} /> Applied Through</div>
        <ul className="box-list">
          {applied.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="impact-box"
      >
        <div className="box-title"><Target size={20} /> Impact</div>
        <ul className="box-list">
          {impact.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </motion.div>
    </div>
  </div>
);

const OutcomeRow = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="outcome-row"
  >
    <div className="outcome-icon">
      {icon}
    </div>
    <div className="outcome-text">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </motion.div>
);

const ScoreBar = ({ label, score, max, text, delay }) => {
  const percentage = (score / max) * 100;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="score-bar"
    >
      <div className="score-labels">
        <span className="score-label">{label}</span>
        <span className="score-value">{score}<span className="score-max">/{max}</span></span>
      </div>
      <div className="score-track">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          className="score-fill"
        />
      </div>
      {text && <div className="score-subtext">{text}</div>}
    </motion.div>
  );
};

const Badge = ({ text, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    className="badge"
  >
    {text}
  </motion.div>
);

const slides = [
  // Intro Slide
  {
    id: "intro",
    title: "",
    subtitle: "",
    content: (
      <div className="intro-slide">
        <h1 className="intro-title text-gradient">Vishwas R</h1>
        <p className="intro-subtitle">Graduate Analyst (Business) • Steam-A • 2025–2026</p>
        <div className="intro-divider"></div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-xl text-gray-400 italic max-w-2xl font-light"
        >
          "Bridging Business Analysis and Quality Assurance to deliver data-driven, highly reliable EV charging experiences."
        </motion.p>
      </div>
    )
  },

  // --- SECTION 1: WHAT I HAVE LEARNT & OUTCOMES DELIVERED ---

  {
    id: "req-analysis",
    title: "1. What I've Learnt: Requirement Analysis",
    subtitle: "Driving Meaningful Product Outcomes",
    icon: <Target size={40} color="#00f2fe" />,
    content: (
      <ImpactSlide 
        skills={["Product Thinking", "Systems Thinking", "Technical Depth (EV/OCPP)"]}
        content={<p>Approached requirement analysis from both <strong>end-user and CPO operational perspectives</strong>, ensuring practical usability and scalability from day one. Identified edge cases early, reducing downstream ambiguity and rework.</p>}
        applied={[
          "Introduced Bulk Closure of Interrupted Sessions → reduced manual effort by ~75%",
          "Contributed to Automatic Session Closure via Boot Notification → eliminated manual intervention (~100% effort reduction)",
          "Enabled Google-based station reviews → improved feedback loop for service quality",
          "Worked on Smart Charging Profiles → optimized power usage, prevented EB penalties",
          "Built Live SoC visibility → improved user decision-making & station transparency"
        ]}
        impact={[
          "Reduced operational load for CPO teams",
          "Improved charger utilization and user trust",
          "Strengthened product’s ability to handle real-world scenarios at scale"
        ]}
      />
    )
  },

  {
    id: "workflows",
    title: "Structuring Workflows",
    subtitle: "Reducing Ambiguity at Scale",
    icon: <Settings size={40} color="#4facfe" />,
    content: (
      <ImpactSlide 
        skills={["Systems Thinking", "Process Design", "Product Thinking"]}
        content={<p>Focused on building <strong>structured workflows</strong> to reduce dependency on verbal explanations and eliminate confusion in edge-case handling.</p>}
        applied={[
          "Created Business Process Models (BPMs) for session flows",
          "Designed payment flow diagrams for client clarity",
          "Drafted SOPs for interrupted & suspicious sessions",
          "Built OCPP operational documentation",
          "Introduced session failure analysis guide",
          "Performed RICE prioritization for Suite backlog"
        ]}
        impact={[
          "Improved cross-team alignment and faster decision-making",
          "Reduced confusion in edge-case handling",
          "Enabled more structured client communication and onboarding"
        ]}
      />
    )
  },

  {
    id: "req-clarity",
    title: "Requirement Clarity",
    subtitle: "Predictable & Faster Delivery",
    icon: <CheckCircle size={40} color="#00f2fe" />,
    content: (
      <ImpactSlide 
        skills={["Analytical Problem Solving", "Execution Discipline"]}
        content={<p>Focused on creating structured, complete, and unambiguous requirements <strong>before development kickoff</strong> to guarantee seamless execution.</p>}
        applied={[
          "Defined edge cases, expected behaviors, and scenarios within story tickets",
          "Ensured complete alignment between Business and Technical teams before development kickoff"
        ]}
        impact={[
          "Reduced requirement-related gaps and avoidable bugs",
          "Enabled smoother QA testing cycles",
          "Supported consistent monthly production releases with minimal rework"
        ]}
      />
    )
  },

  {
    id: "data-truth",
    title: "Using Data as Ground Truth",
    subtitle: "Ensuring Product Reliability",
    icon: <Database size={40} color="#4facfe" />,
    content: (
      <ImpactSlide 
        skills={["Data-Driven Thinking", "Technical Validation (QA/BA)"]}
        content={<p>Used raw data as a definitive validation layer, not just for post-analysis but for <strong>ensuring technical correctness</strong> before features hit production.</p>}
        applied={[
          "Validated AI-based session failure analysis outputs against raw OCPP logs (source of truth)",
          "Identified mismatches in AI failure reasons, timestamps, and formats",
          "Collaborated hands-on with teams to correct logic issues pre-production"
        ]}
        impact={[
          "Prevented inaccurate insights from reaching CPOs and clients",
          "Protected the credibility of our very first AI-driven feature",
          "Ensured critical operational decisions made by CPOs are based on reliable data"
        ]}
      />
    )
  },

  // --- SECTION 2: PROFESSIONAL HIGHPOINTS ---

  {
    id: "business-impact",
    title: "2. Professional Highpoints: Better Business Decisions",
    subtitle: "Revenue & Cost Awareness",
    icon: <TrendingUp size={40} color="#00f2fe" />,
    content: (
      <ImpactSlide 
        skills={["Product Thinking", "Business Acumen", "Analytical Modelling"]}
        content={<p>Contributed deeply to commercial decision-making frameworks, <strong>linking technical product capabilities directly to revenue outcomes</strong>.</p>}
        applied={[
          "Built comprehensive commercial models for OCPP & OCPI clients",
          "Projected connector growth and revenue across extended timelines",
          "Estimated break-even points and long-term resource requirements"
        ]}
        impact={[
          "Enabled highly informed, data-backed client onboarding decisions",
          "Improved management visibility into cost vs revenue trade-offs",
          "Supported strategic focus on high-potential clients for sustainable growth"
        ]}
      />
    )
  },

  {
    id: "resolving-complexity",
    title: "Resolving Complexity",
    subtitle: "Data-Driven Stakeholder Alignment",
    icon: <ShieldAlert size={40} color="#4facfe" />,
    content: (
      <ImpactSlide 
        skills={["Stakeholder Management", "Analytical Problem Solving"]}
        content={<p>Successfully navigated highly conflicting stakeholder scenarios through <strong>data-backed reasoning and structured communication</strong>.</p>}
        applied={[
          "Resolved Tivolt reconciliation issues by consolidating multiple data sources (CTR, Razorpay, settlements)",
          "Identified root cause in MAK Controls escalation via deep OCPP log analysis + joint hands-on testing",
          "Collaborated directly with OEMs and clients for real-world validation"
        ]}
        impact={[
          "Reduced ambiguity in critical financial and operational tracking",
          "Prevented misdirected escalations and unnecessary system changes",
          "Significantly strengthened trust across both internal and external stakeholders"
        ]}
      />
    )
  },

  {
    id: "ownership",
    title: "Ownership Beyond Role",
    subtitle: "Enabling Team & Product Clarity",
    icon: <Award size={40} color="#00f2fe" />,
    content: (
      <ImpactSlide 
        skills={["Ownership & Leadership", "Stakeholder Enablement"]}
        content={<p>Stepped beyond the traditional Graduate Analyst scope by taking extreme ownership of <strong>team alignment, mentorship, and external knowledge flow</strong>.</p>}
        applied={[
          "Conducted extensive KT sessions for Dev & QA teams → improved initial understanding of use cases & edge conditions",
          "Actively supported technical teams during execution → eliminated dependency bottlenecks",
          "Represented the product passionately in external events & discussions → strengthened product communication"
        ]}
        impact={[
          "Faster onboarding and drastically reduced repetitive clarifications",
          "Smoother, friction-free collaboration between business and technical teams",
          "Improved external visibility, personal branding, and stakeholder confidence"
        ]}
      />
    )
  },

  // --- SECTION 3: 6 QUALITIES ---
  {
    id: "evaluation",
    title: "3. The 6 Qualities of a Steam-A Professional",
    subtitle: "Self Evaluation: 8.7/10 Overall",
    icon: <BarChart size={40} color="#4facfe" />,
    content: (
      <div className="eval-container">
        <div className="score-grid">
          <ScoreBar 
            label="Courage to Promise" score={9} max={10} delay={0.1} 
            text={<>Realistic estimation backed by <span className="highlight-text">cross-team alignment</span>.</>}
          />
          <ScoreBar 
            label="Commitment to Deliver" score={9} max={10} delay={0.2} 
            text={<>Continuous tracking and proactive blocker resolution.</>}
          />
          <ScoreBar 
            label="Attention to Detail" score={9.5} max={10} delay={0.3} 
            text={<>Caught edge cases pre-prod. Validated AI against <span className="highlight-text">raw logs</span>.</>}
          />
          <ScoreBar 
            label="Smart Storytelling" score={8} max={10} delay={0.4} 
            text={<>Translated complex OCPP flows into <span className="highlight-text">clear narratives</span>.</>}
          />
          <ScoreBar 
            label="Positive Attitude" score={8.5} max={10} delay={0.5} 
            text={<>Calm under pressure, prioritizing <span className="highlight-text">solutions over problems</span>.</>}
          />
          <ScoreBar 
            label="Life Outside Work" score={7.5} max={10} delay={0.6} 
            text={<>Maintaining energy through <span className="highlight-text">dancing and travel</span>.</>}
          />
        </div>
      </div>
    )
  },

  // --- SECTION 4: SUPPORT REQUIRED ---
  {
    id: "support",
    title: "4. Support Required to Reach 10/10",
    subtitle: "Empowerment & Skill Growth",
    icon: <HeartHandshake size={40} color="#00f2fe" />,
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

  // --- SECTION 5: ASPIRATIONS ---
  {
    id: "aspirations",
    title: "5. Professional Aspirations for 2026",
    subtitle: "The Next Horizon",
    icon: <Rocket size={40} color="#4facfe" />,
    content: (
      <div className="grid-2 h-full items-center">
        <Card title="Role Evolution: Senior BA / PM" icon={<Briefcase size={24} />} delay={0.1}>
          <p>Transition from a strong execution-oriented Graduate Analyst role to a strategic, <span className="highlight-text">Product-driven role</span>.</p>
          <p>Dive deep into problem discovery, solution definition, and precise outcome measurement.</p>
        </Card>
        <Card title="Building the 'Wow' Factor" icon={<Lightbulb size={24} />} delay={0.2}>
          <p>Actively identify, propose, and own <span className="highlight-text">high-impact differentiator features</span> (MVPs).</p>
          <p>Focus obsessively on solving real user problems and creating immediate, measurable value.</p>
        </Card>
        <Card title="Mastering the Narrative" icon={<Presentation size={24} />} delay={0.3}>
          <p>Elevate storytelling and client management to ensure seamless <span className="highlight-text">stakeholder alignment</span>.</p>
        </Card>
        <Card title="The Promise Wall (Personal)" icon={<Car size={24} />} delay={0.4}>
          <p>Having successfully purchased my own vehicle this year through consistent hard work, I aim to set and smash even <span className="highlight-text">bigger financial and professional milestones</span> next year.</p>
        </Card>
      </div>
    )
  }
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
      {/* Decorative Background Elements */}
      <div className="bg-decor-1"></div>
      <div className="bg-decor-2"></div>

      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-mark">V</div>
          <div className="logo-text">
            <h2>VISHWAS.R</h2>
            <p>Self Appraisal</p>
          </div>
        </div>
        <div className="slide-dots">
          {slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`dot ${idx === currentSlide ? 'active' : 'inactive'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="slide-container"
          >
            {slide.title && slide.id !== "intro" && (
              <div className="slide-header">
                {slide.icon && <div>{slide.icon}</div>}
                <div className="slide-title">
                  <h2>{slide.title}</h2>
                  {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
                </div>
              </div>
            )}
            <div className="slide-body">
               {slide.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
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
      
      {/* Footer / Slide Info */}
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}

export default App;

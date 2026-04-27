import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Target, BarChart, HeartHandshake, 
  Rocket, Lightbulb, Zap, TrendingUp, Presentation, Briefcase, 
  BrainCircuit, ShieldAlert, Award, Compass, MessagesSquare, Users, 
  LineChart, CheckCircle, Database, Activity, Globe, Car, Settings, Star
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

const ImpactSlide = ({ skills, content, applied, impact, whyItMatters }) => (
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
      
      {whyItMatters && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="why-box"
        >
          <div className="box-title"><Star size={20} /> Why it Matters to Steam-A</div>
          <ul className="box-list">
            {whyItMatters.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </motion.div>
      )}
    </div>
    
    <div className="impact-right">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="applied-box"
      >
        <div className="box-title"><Zap size={20} /> How I Applied It</div>
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
        <h1 className="intro-title text-gradient">Performance Appraisal</h1>
        <p className="intro-subtitle">Vishwas R • Graduate Analyst (Business) • Steam-A • 2025–2026</p>
        <div className="intro-divider"></div>
      </div>
    )
  },

  // Slide 1
  {
    id: "req-analysis",
    title: "1. Requirement Analysis",
    subtitle: "Translating Product Thinking into Scalable Outcomes",
    icon: <Target size={40} color="#00f2fe" />,
    content: (
      <ImpactSlide 
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
        whyItMatters={[
          "Strengthens platform scalability for growing CPO networks",
          "Improves customer experience while reducing operational cost"
        ]}
      />
    )
  },

  // Slide 2
  {
    id: "ownership",
    title: "2. Ownership Beyond Role",
    subtitle: "Enabling Clarity Across Teams",
    icon: <Award size={40} color="#00f2fe" />,
    content: (
      <ImpactSlide 
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
        whyItMatters={[
          "Improves team efficiency and reduces communication gaps as teams scale",
          "Builds stronger product positioning with external stakeholders"
        ]}
      />
    )
  },

  // Slide 3
  {
    id: "req-clarity",
    title: "3. Requirement Quality",
    subtitle: "Driving Predictable Delivery",
    icon: <CheckCircle size={40} color="#00f2fe" />,
    content: (
      <ImpactSlide 
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
        whyItMatters={[
          "Improves delivery predictability and release confidence",
          "Reduces engineering effort spent on rework"
        ]}
      />
    )
  },

  // Slide 4
  {
    id: "resolving-complexity",
    title: "4. Handling Complex Stakeholder Scenarios",
    subtitle: "Resolving Complexity with Data",
    icon: <ShieldAlert size={40} color="#4facfe" />,
    content: (
      <ImpactSlide 
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
        whyItMatters={[
          "Builds trust with clients and partners",
          "Ensures faster and more accurate issue resolution in production environments"
        ]}
      />
    )
  },

  // Slide 5
  {
    id: "workflows",
    title: "5. Process & Workflow Improvements",
    subtitle: "Structuring Workflows for Scale",
    icon: <Settings size={40} color="#4facfe" />,
    content: (
      <ImpactSlide 
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
        whyItMatters={[
          "Supports scaling operations without increasing complexity",
          "Improves internal efficiency and external clarity"
        ]}
      />
    )
  },

  // Slide 6
  {
    id: "data-truth",
    title: "6. Data-Driven Decision Making",
    subtitle: "Data as Ground Truth → Ensuring Product Reliability",
    icon: <Database size={40} color="#4facfe" />,
    content: (
      <ImpactSlide 
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
        whyItMatters={[
          "Protects product credibility, especially in new AI capabilities",
          "Ensures decisions made by CPOs are based on accurate data"
        ]}
      />
    )
  },

  // Slide 7
  {
    id: "business-impact",
    title: "7. Business Impact",
    subtitle: "Linking Product to Business Outcomes",
    icon: <TrendingUp size={40} color="#00f2fe" />,
    content: (
      <ImpactSlide 
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
        whyItMatters={[
          "Strengthens business decision-making",
          "Aligns product growth with financial sustainability"
        ]}
      />
    )
  },

  // Slide 8 - The 6 Qualities
  {
    id: "evaluation",
    title: "8. The 6 Qualities of a Steam-A Professional",
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

  // Slide 9 - Support Required
  {
    id: "support",
    title: "9. Support Required to Reach 10/10",
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

  // Slide 10 - Professional Direction
  {
    id: "direction",
    title: "10. Professional Direction",
    subtitle: "Transitioning Towards Product Ownership",
    icon: <Rocket size={40} color="#4facfe" />,
    content: (
      <ImpactSlide 
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
        whyItMatters={[
          "Enables stronger product direction and innovation",
          "Bridges gap between execution and strategy"
        ]}
      />
    )
  },

  // Slide 11 - Synthesis
  {
    id: "synthesis",
    title: "11. Synthesis: Overall Contribution",
    subtitle: "From Execution to Product Impact",
    icon: <BrainCircuit size={40} color="#00f2fe" />,
    content: (
      <div className="synthesis-grid">
        <div className="synthesis-col">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="synthesis-card"
          >
            <h3 className="text-xl font-bold text-[#4facfe] mb-3 flex items-center gap-2"><Settings size={20}/> Integrated Capability</h3>
            <p className="text-gray-300 leading-relaxed mb-3">Progressed from requirement execution to <strong>product-oriented thinking</strong>.</p>
            <p className="text-gray-300 leading-relaxed">Consistently applied product, analytical, and stakeholder skills across problem spaces to enable improvements across efficiency, reliability, and business decision-making.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="synthesis-highlight"
          >
            <h3><Briefcase size={24}/> Strategic Positioning</h3>
            <p className="text-lg text-white font-medium leading-relaxed">Operating with a mindset that connects product decisions to business outcomes.</p>
            <p className="text-[#00f2fe] mt-3 font-semibold tracking-wide">Ready to take on broader product ownership and strategic responsibility.</p>
            <div className="mt-4 pt-4 border-t border-[rgba(0,242,254,0.2)]">
              <p className="text-gray-400 italic font-light">"Translating Product Thinking into Scalable Outcomes."</p>
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
            <h3 className="text-xl font-bold text-[#4facfe] mb-4 flex items-center gap-2"><Target size={20}/> Key Outcomes</h3>
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
            <h2>Vishwas R</h2>
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

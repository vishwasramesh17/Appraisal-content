import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Target, BarChart, HeartHandshake, 
  Rocket, Lightbulb, Zap, TrendingUp, Presentation, Briefcase, 
  BrainCircuit, ShieldAlert, Award, Compass, MessagesSquare, Users, 
  LineChart, CheckCircle, Database, Activity, Globe, Car
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

// Content structure mapping directly to the 5 requested sections
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

  // Q1a: Learnings
  {
    id: "learnings",
    title: "1. What I've Learnt This Year",
    subtitle: "The Dual Perspective: Business Analysis & QA Testing",
    icon: <BrainCircuit size={40} color="#00f2fe" />,
    content: (
      <div className="grid-2">
        <Card title="Proactive QA & Edge Case Detection" icon={<ShieldAlert size={24} />} delay={0.1}>
          <p>Learnt to validate critical flows against <span className="highlight-text">raw OCPP logs</span> (e.g., AI failure analytics validation).</p>
          <p>Caught structural data gaps during app-less charging testing and ensured OCPP compatibility with OEMs like ACS Energy and Cubenz before prod.</p>
        </Card>
        <Card title="Translating Complexity (BA)" icon={<Presentation size={24} />} delay={0.2}>
          <p>Learnt to create unified sources of truth. Designed <span className="highlight-text">BPMs and flowcharts</span> for Tivolt session & payment flows to eliminate ambiguity.</p>
          <p>Refined user stories into highly detailed tickets with clear edge cases, enabling smoother delivery and zero guesswork.</p>
        </Card>
        <Card title="Commercial & Revenue Modeling" icon={<TrendingUp size={24} />} delay={0.3}>
          <p>Learnt to project connector growth and break-even timelines by drafting <span className="highlight-text">OCPP/OCPI commercial models</span>.</p>
          <p>This supported rapid, data-backed client qualification for the business.</p>
        </Card>
        <Card title="The Power of Proactive Monitoring" icon={<Activity size={24} />} delay={0.4}>
          <p>A key learning came from a delayed detection of Tivolt dealer routing issues.</p>
          <p>I learned the vital importance of <span className="highlight-text">early detection</span> and rigorous validation of high-impact financial and settlement flows.</p>
        </Card>
      </div>
    )
  },

  // Q1b: Outcomes Delivered
  {
    id: "outcomes",
    title: "Outcomes Delivered to Steam-A",
    subtitle: "Focusing on Operational Efficiency & Revenue Enablement",
    icon: <Target size={40} color="#4facfe" />,
    content: (
      <div className="outcomes-list">
        <OutcomeRow 
          icon={<HeartHandshake size={28} />} title="Eliminated Manual Overhead" 
          desc="Initiated and delivered automatic & bulk closure of interrupted sessions, massively reducing manual CPO effort and improving data accuracy." delay={0.1} 
        />
        <OutcomeRow 
          icon={<Zap size={28} />} title="Protected CPO Margins" 
          desc="Delivered Smart Charging Profiles to optimize power distribution and prevent EB penalties, driving operational cost control." delay={0.2} 
        />
        <OutcomeRow 
          icon={<TrendingUp size={28} />} title="Revenue Flexibility" 
          desc="Implemented Dynamic Tariffs, empowering CPOs to adapt to demand patterns and maximize profitability." delay={0.3} 
        />
        <OutcomeRow 
          icon={<BrainCircuit size={28} />} title="Secured Product Trust" 
          desc="Validated the new AI Session Analytics feature against source logs, preventing 'AI hallucinations' from misguiding CPOs." delay={0.4} 
        />
      </div>
    )
  },

  // Q2: Highpoints
  {
    id: "highpoints",
    title: "2. Professional Highpoints & Accomplishments",
    subtitle: "Taking Ownership & Driving Value",
    icon: <Award size={40} color="#00f2fe" />,
    content: (
      <div className="grid-2">
        <Card title="Predictable Delivery Pipeline" icon={<CheckCircle size={24} />} delay={0.1}>
          <p>Led daily Scrum execution and rigorous QA sign-offs, ensuring <span className="highlight-text">consistent monthly production releases</span> for network clients without fail.</p>
        </Card>
        <Card title="Conflict Resolution via Data" icon={<Database size={24} />} delay={0.2}>
          <p>Defused the MAK Controls escalation. Used <span className="highlight-text">raw OCPP log analysis</span> and hands-on testing to definitively prove the root cause was charger-side, protecting CMS credibility.</p>
        </Card>
        <Card title="Cross-Team Mentorship & KT" icon={<Users size={24} />} delay={0.3}>
          <p>Stepped beyond BA limits to own internal KT sessions. Bridged the technical-business gap for Dev & QA teams, resulting in <span className="highlight-text">predictable execution</span> and drastically fewer rework cycles.</p>
        </Card>
        <Card title="Personal Brand & Industry Footprint" icon={<Globe size={24} />} delay={0.4}>
          <p>Represented Steam-A at Smart Mobility Summit. Published a highly-received blog on <span className="highlight-text">EV Testing Reality</span> and shared Zeon Charging data on LinkedIn.</p>
        </Card>
      </div>
    )
  },

  // Q3: 6 Qualities
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

  // Q4: Support Required
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

  // Q5: Aspirations
  {
    id: "aspirations",
    title: "5. Professional Aspirations for 2026",
    subtitle: "The Next Horizon",
    icon: <Rocket size={40} color="#4facfe" />,
    content: (
      <div className="grid-2">
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

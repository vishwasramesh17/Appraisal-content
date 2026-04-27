import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Target, Award, BarChart, HeartHandshake, Rocket, Lightbulb, Zap, TrendingUp, Presentation, Briefcase, BrainCircuit } from 'lucide-react';
import './App.css';
import './index.css';

// Helper Components
const Card = ({ title, children, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-panel card"
  >
    <h3>{title}</h3>
    <div>{children}</div>
  </motion.div>
);

const OutcomeRow = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-panel outcome-row"
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

const HighlightBox = ({ number, text, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-panel highlight-box group"
  >
    <div className="highlight-number">
      {number}
    </div>
    <div className="highlight-text">
      {text}
    </div>
  </motion.div>
);

const ScoreBar = ({ label, score, max, delay }) => {
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
    </motion.div>
  );
};

const Badge = ({ text, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    className="glass-panel badge"
  >
    {text}
  </motion.div>
);

const AspirationCard = ({ title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-panel aspiration-card"
  >
    <h4>{title}</h4>
    <p>{desc}</p>
  </motion.div>
);

// Content structure based on vishwas.md
const slides = [
  {
    id: "intro",
    title: "Self Appraisal",
    subtitle: "Steam-A | 2025–2026",
    content: (
      <div className="intro-slide">
        <h1 className="intro-title text-gradient">Vishwas R</h1>
        <p className="intro-subtitle">Steam-A | 2025–2026</p>
        <div className="intro-divider"></div>
      </div>
    )
  },
  {
    id: "learnings",
    title: "1. Key Learnings",
    icon: <BrainCircuit size={40} color="#4facfe" />,
    content: (
      <div className="grid-2" style={{ overflowY: 'auto' }}>
        <Card title="Deep EV Charging & Product Understanding" delay={0.1}>
          <ul>
            <li>Strong grasp of session lifecycle, tariffs, charging states</li>
            <li>Understanding of OCPP & OCPI integrations</li>
            <li>Awareness of impact on CPO operations, revenue, and user experience</li>
          </ul>
        </Card>
        <Card title="Advanced Business Analysis & Requirement Quality" delay={0.2}>
          <ul>
            <li>Structured requirements with edge cases and clear acceptance criteria</li>
            <li>Reduced ambiguity and improved delivery efficiency</li>
          </ul>
        </Card>
        <Card title="Product Thinking & Problem Solving" delay={0.3}>
          <ul>
            <li>Shift from execution to problem-first thinking</li>
            <li>Identified gaps and proposed scalable solutions</li>
          </ul>
        </Card>
        <Card title="Data-Driven Validation & Process Design" delay={0.4}>
          <ul>
            <li>Used OCPP logs as source of truth to validate AI analytics</li>
            <li>Created SOPs, flowcharts, and process models</li>
            <li>Improved cross-team alignment</li>
          </ul>
        </Card>
      </div>
    )
  },
  {
    id: "outcomes",
    title: "Outcomes Delivered",
    icon: <Target size={40} color="#00f2fe" />,
    content: (
      <div className="outcomes-list">
        <OutcomeRow icon={<Zap />} title="Smart Charging Profile" desc="Optimized power usage" delay={0.1} />
        <OutcomeRow icon={<TrendingUp />} title="Dynamic Tariff" desc="Flexible pricing and revenue improvement" delay={0.2} />
        <OutcomeRow icon={<Presentation />} title="EMSP Integration" desc="Expanded business capabilities" delay={0.3} />
        <OutcomeRow icon={<HeartHandshake />} title="Automatic Closure of Interrupted Sessions" desc="Reduced manual effort" delay={0.4} />
        <OutcomeRow icon={<Lightbulb />} title="AI Failure Analytics" desc="Improved troubleshooting" delay={0.5} />
      </div>
    )
  },
  {
    id: "highpoints",
    title: "2. Professional High Points",
    icon: <Award size={40} color="#4facfe" />,
    content: (
      <div className="highpoints-container">
        <div className="highpoints-grid">
          <HighlightBox number="01" text="Delivered consistent monthly production releases" delay={0.1} />
          <HighlightBox number="02" text="Ensured on-time QA sign-offs" delay={0.2} />
          <HighlightBox number="03" text="Solved complex stakeholder issues using data" delay={0.3} />
          <HighlightBox number="04" text="Conducted KT sessions and improved team clarity" delay={0.4} />
          <HighlightBox number="05" text="Represented company in demos and external events" delay={0.5} />
        </div>
      </div>
    )
  },
  {
    id: "evaluation",
    title: "3. Self Evaluation",
    subtitle: "Overall Rating: 8.7/10",
    icon: <BarChart size={40} color="#00f2fe" />,
    content: (
      <div className="eval-container">
        <div className="eval-header">
          <h3 className="text-gradient">Overall Rating: 8.7/10</h3>
        </div>
        <div className="score-grid">
          <ScoreBar label="Courage to Promise" score={9} max={10} delay={0.1} />
          <ScoreBar label="Commitment to Deliver" score={9} max={10} delay={0.2} />
          <ScoreBar label="Attention to Detail" score={9.5} max={10} delay={0.3} />
          <ScoreBar label="Smart Storytelling" score={8} max={10} delay={0.4} />
          <ScoreBar label="Positive Attitude" score={8.5} max={10} delay={0.5} />
          <ScoreBar label="Life Outside Work" score={7.5} max={10} delay={0.6} />
        </div>
      </div>
    )
  },
  {
    id: "support",
    title: "4. Support Required",
    icon: <HeartHandshake size={40} color="#4facfe" />,
    content: (
      <div className="support-container">
        <Badge text="Product-level exposure" delay={0.1} />
        <Badge text="End-to-end ownership opportunities" delay={0.2} />
        <Badge text="Mentorship on product thinking" delay={0.3} />
        <Badge text="Faster feedback loops" delay={0.4} />
        <Badge text="Advanced skill development (SQL, analytics)" delay={0.5} />
      </div>
    )
  },
  {
    id: "aspirations",
    title: "5. Aspirations",
    icon: <Rocket size={40} color="#00f2fe" />,
    content: (
      <div className="aspirations-grid">
        <AspirationCard title="Role Transition" desc="Transition to Senior BA / Product role" delay={0.1} />
        <AspirationCard title="Strategic Thinking" desc="Improve product ownership and strategy thinking" delay={0.2} />
        <AspirationCard title="High Impact" desc="Build high-impact features" delay={0.3} />
        <AspirationCard title="Communication" desc="Strengthen stakeholder communication" delay={0.4} />
      </div>
    )
  },
  {
    id: "closing",
    title: "Closing Note",
    icon: <Briefcase size={40} color="#4facfe" />,
    content: (
      <div className="closing-container">
        <div className="glass-panel closing-box group">
          <div className="closing-border"></div>
          <p className="closing-text">
            "This year focused on strong execution and meaningful product contributions. Going forward, the goal is to move towards ownership and deliver higher business impact."
          </p>
          <div className="closing-icon">
            <Target size={150} />
          </div>
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

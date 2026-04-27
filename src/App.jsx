import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Target, BarChart, HeartHandshake, 
  Rocket, Lightbulb, Zap, TrendingUp, Presentation, Briefcase, 
  BrainCircuit, ShieldAlert, Award, Compass, MessagesSquare, Users, LineChart
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

const AlertBox = ({ title, text, pivotTitle, pivotText, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="alert-box"
  >
    <ShieldAlert size={150} className="alert-icon" />
    <div className="alert-content">
      <div className="alert-title">
        <Zap size={24} /> {title}
      </div>
      <p className="alert-text">{text}</p>
      
      <div className="pivot-box">
        <div className="pivot-title">{pivotTitle}</div>
        <p className="pivot-text">{pivotText}</p>
      </div>
    </div>
  </motion.div>
);

// Content structure based on detailed assessment
const slides = [
  {
    id: "intro",
    title: "",
    subtitle: "",
    content: (
      <div className="intro-slide">
        <h1 className="intro-title text-gradient">Vishwas R</h1>
        <p className="intro-subtitle">Self Appraisal • Steam-A • 2025–2026</p>
        <div className="intro-divider"></div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-xl text-gray-400 italic max-w-2xl font-light"
        >
          "Evolving from structured execution to strategic product discovery, driving revenue, reliability, and unparalleled user experiences."
        </motion.p>
      </div>
    )
  },
  {
    id: "evaluation",
    title: "1. The DNA of Delivery",
    subtitle: "Self Evaluation: 8.7/10 Overall",
    icon: <BarChart size={40} color="#00f2fe" />,
    content: (
      <div className="eval-container">
        <div className="score-grid">
          <ScoreBar 
            label="Courage to Promise" score={9} max={10} delay={0.1} 
            text={<>Realistic estimation backed by <span className="highlight-text">cross-team alignment</span> to ensure predictable monthly releases.</>}
          />
          <ScoreBar 
            label="Commitment to Deliver" score={9} max={10} delay={0.2} 
            text={<>Continuous tracking and proactive blocker resolution for <span className="highlight-text">reliable execution</span>.</>}
          />
          <ScoreBar 
            label="Attention to Detail" score={9.5} max={10} delay={0.3} 
            text={<>Caught edge cases pre-prod. Validated AI analytics against <span className="highlight-text">raw OCPP logs</span>.</>}
          />
          <ScoreBar 
            label="Smart Storytelling" score={8} max={10} delay={0.4} 
            text={<>Translated complex OCPP flows into <span className="highlight-text">clear, structural narratives</span> for Flex Energy & others.</>}
          />
          <ScoreBar 
            label="Positive Attitude" score={8.5} max={10} delay={0.5} 
            text={<>Staying calm under pressure, prioritizing <span className="highlight-text">solutions over problems</span>.</>}
          />
          <ScoreBar 
            label="Life Outside Work" score={7.5} max={10} delay={0.6} 
            text={<>Maintaining energy through <span className="highlight-text">dancing and weekend trips</span> to return with a clear mindset.</>}
          />
        </div>
      </div>
    )
  },
  {
    id: "deliverables",
    title: "2. Architecting Impact",
    subtitle: "Top Deliverables of the Year",
    icon: <Target size={40} color="#00f2fe" />,
    content: (
      <div className="outcomes-list">
        <OutcomeRow 
          icon={<Zap size={28} />} title="Smart Charging Profile" 
          desc="Optimized power distribution, helping CPOs avoid EB penalties while driving operational cost control." delay={0.1} 
        />
        <OutcomeRow 
          icon={<TrendingUp size={28} />} title="Dynamic Tariff" 
          desc="Enabled pricing flexibility, empowering CPOs to adapt to demand and maximize revenue potential." delay={0.2} 
        />
        <OutcomeRow 
          icon={<HeartHandshake size={28} />} title="Automatic Closure of Interrupted Sessions" 
          desc="Eliminated manual intervention workflows, massively boosting CPO operational efficiency." delay={0.3} 
        />
        <OutcomeRow 
          icon={<BrainCircuit size={28} />} title="AI Session Failure Analytics" 
          desc="Transformed raw failure data into actionable troubleshooting insights for faster issue resolution." delay={0.4} 
        />
        <OutcomeRow 
          icon={<Presentation size={28} />} title="EMSP Integrations" 
          desc="Expanded business capabilities, supporting strategic partnerships and network reach." delay={0.5} 
        />
      </div>
    )
  },
  {
    id: "strategy",
    title: "3. Data as the North Star",
    subtitle: "Revenue Enablement & Conflict Resolution",
    icon: <LineChart size={40} color="#4facfe" />,
    content: (
      <div className="grid-2">
        <Card title="Commercial Modeling" icon={<TrendingUp size={24} />} delay={0.1}>
          <p>Drafted comprehensive <span className="highlight-text">OCPP/OCPI commercial models</span> projecting connector growth.</p>
          <p>Mapped future expansion against revenue to estimate break-even timelines, enabling rapid, data-backed client qualification.</p>
        </Card>
        <Card title="Resolving Escalations" icon={<ShieldAlert size={24} />} delay={0.2}>
          <p>Defused the MAK Controls escalation where sessions flagged as suspicious raised CMS concerns.</p>
          <p>Used <span className="highlight-text">raw OCPP logs & hands-on testing</span> to prove the issue originated from the charger, preserving trust and avoiding unnecessary work.</p>
        </Card>
        <Card title="Curing AI Hallucinations" icon={<BrainCircuit size={24} />} delay={0.3}>
          <p>Prevented incorrect AI analytics from reaching clients by verifying outputs against raw log data.</p>
          <p>Protected the product’s credibility on its <span className="highlight-text">first AI-driven feature</span>.</p>
        </Card>
        <Card title="Financial Clarity" icon={<Target size={24} />} delay={0.4}>
          <p>Unified Razorpay transfer reports, settlement reports, and Charging Transactions.</p>
          <p>Resolved Tivolt dealer routing ambiguity by translating complex financial data into a <span className="highlight-text">single source of truth</span>.</p>
        </Card>
      </div>
    )
  },
  {
    id: "process",
    title: "4. Process Over Chaos",
    subtitle: "Workflow Improvements & Beyond BA",
    icon: <Briefcase size={40} color="#00f2fe" />,
    content: (
      <div className="grid-3">
        <Card title="Visual Clarity" icon={<Presentation size={24} />} delay={0.1}>
          <p>Designed <span className="highlight-text">Business Process Models (BPMs)</span> and flowcharts for Tivolt’s session and payment flows.</p>
          <p>Replaced repetitive verbal explanations with instantly understandable structural maps.</p>
        </Card>
        <Card title="Knowledge Transfer" icon={<Users size={24} />} delay={0.2}>
          <p>Owned internal KT sessions for both Dev & QA teams.</p>
          <p>Bridged the technical-business gap, resulting in <span className="highlight-text">predictable delivery</span> and drastically fewer rework cycles.</p>
        </Card>
        <Card title="Structured Prioritization" icon={<BarChart size={24} />} delay={0.3}>
          <p>Introduced <span className="highlight-text">RICE analysis</span> for the Suite backlog.</p>
          <p>Shifted the team toward objective prioritization, ensuring high-impact features always received the right focus.</p>
        </Card>
      </div>
    )
  },
  {
    id: "brand",
    title: "5. Building the Brand",
    subtitle: "Public Presence & Personal Wins",
    icon: <Award size={40} color="#4facfe" />,
    content: (
      <div className="grid-2">
        <Card title="Ecosystem Engagement" icon={<Compass size={24} />} delay={0.1}>
          <p>Engaged at <span className="highlight-text">DevFest & Startup TN</span>, absorbing evolving SDLC practices and AI product trends.</p>
          <p>Represented Steam-A at the Smart Mobility Summit (KCT), educating emerging talent on our vision.</p>
        </Card>
        <Card title="Thought Leadership" icon={<MessagesSquare size={24} />} delay={0.2}>
          <p>Published a deep-dive blog on <span className="highlight-text">"Testing EV Sessions: Simulator vs Reality"</span>.</p>
          <p>Shared Zeon Charging user behavior insights via LinkedIn, connecting raw user trust and payment data back to Steam-A’s product thinking.</p>
        </Card>
        <Card title="The Promise Wall" icon={<Target size={24} />} delay={0.3}>
          <p className="text-xl mt-4">
            Achieved a major personal milestone: <span className="highlight-text">Purchasing my own vehicle</span> using my own earnings.
          </p>
          <p className="mt-4 italic">"A reflection of financial independence and a powerful driver for future goals."</p>
        </Card>
      </div>
    )
  },
  {
    id: "learnings",
    title: "6. The Setup & The Pivot",
    subtitle: "Mistakes as Stepping Stones",
    icon: <ShieldAlert size={40} color="#ff9a9e" />,
    content: (
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-4xl">
          <AlertBox 
            title="The Mistake" 
            text="Delayed detection that routing to dealers had stopped in a settlement flow in Tivolt. This exposed a critical gap in our proactive monitoring."
            pivotTitle="The Pivot & Learning"
            pivotText="Shifted heavily toward proactive monitoring and rigorous validation. Now, high-impact payment and settlement flows are cross-checked meticulously against expected outcomes, cementing a culture of early detection."
            delay={0.2}
          />
        </div>
      </div>
    )
  },
  {
    id: "aspirations",
    title: "7. The Next Horizon",
    subtitle: "Aspirations & Targets for 2026",
    icon: <Rocket size={40} color="#00f2fe" />,
    content: (
      <div className="grid-3">
        <Card title="Role Evolution" icon={<Briefcase size={24} />} delay={0.1}>
          <p>Transitioning toward a <span className="highlight-text">Senior BA / Product Manager</span> role.</p>
          <p>Moving beyond requirement gathering into deep problem discovery, solution definition, and outcome measurement.</p>
        </Card>
        <Card title="The 'Wow' Factor" icon={<Lightbulb size={24} />} delay={0.2}>
          <p>Identifying and proposing <span className="highlight-text">high-impact differentiator features</span>.</p>
          <p>Focusing on MVPs that solve genuine user problems and create immediate, measurable business value.</p>
        </Card>
        <Card title="Mastering the Narrative" icon={<Presentation size={24} />} delay={0.3}>
          <p>Elevating storytelling and client management skills.</p>
          <p>Presenting ideas so effectively that <span className="highlight-text">stakeholder alignment</span> becomes seamless and solutions practically sell themselves.</p>
        </Card>
      </div>
    )
  },
  {
    id: "closing",
    title: "",
    subtitle: "",
    content: (
      <div className="closing-container">
        <div className="closing-box group">
          <div className="closing-border"></div>
          <p className="closing-text">
            "My work this year helped drive reduced operational effort, improved revenue visibility, increased system reliability, and a better user experience."
          </p>
          <p className="text-xl text-[#00f2fe] font-medium tracking-wide">
            Next step: Total Ownership & Strategic Impact.
          </p>
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

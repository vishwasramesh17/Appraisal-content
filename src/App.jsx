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
          style={{ fontFamily: '"Varela Round", sans-serif', letterSpacing: '-0.02em', fontSize: '7.5rem' }}
        >
          <span style={{color: '#00F5D4'}}>ırI</span><span style={{color: '#00BFFF'}}>S</span>
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
  <div className="flex flex-col gap-6 h-full">
    <div className="flex gap-4 mb-2">
      <span className="skill-tag">Product Thinking</span>
      <span className="skill-tag">Technical Depth</span>
      <span className="skill-tag">Ownership</span>
    </div>
    
    {/* Timeline Arc */}
    <div className="flex justify-between items-center relative py-4">
      <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 -z-10"></div>
      {['Aug 1 2025', 'Nov 2025', 'Mid Feb 2026', 'Apr 28 2026'].map((date, i) => (
        <div key={i} className="flex flex-col items-center bg-white px-4">
          <div className="w-4 h-4 rounded-full bg-[#00B0B0] mb-2 border-2 border-white shadow-sm"></div>
          <span className="font-bold text-gray-600 text-sm">{date}</span>
        </div>
      ))}
    </div>
    
    <div className="grid grid-cols-3 gap-6">
      <div className="content-box border-t-4 border-t-[#00B0B0]">
        <h4 className="font-bold text-[#00B0B0] mb-3 text-lg">Phase 1: Zwiz Testing<br/><span className="text-xs text-gray-400 font-normal">(Aug 1 2025 – Nov 2025)</span></h4>
        <p className="text-sm text-gray-600">Built strong foundation in testing, edge case thinking, and system validation</p>
      </div>
      <div className="content-box border-t-4 border-t-[#00B0B0]">
        <h4 className="font-bold text-[#00B0B0] mb-3 text-lg">Phase 2: Tivolt Testing + BA<br/><span className="text-xs text-gray-400 font-normal">(Nov 2025 – Mid Feb 2026)</span></h4>
        <p className="text-sm text-gray-600">Started contributing to requirement understanding, workflows, and client discussions</p>
      </div>
      <div className="content-box border-t-4 border-t-[#00B0B0]">
        <h4 className="font-bold text-[#00B0B0] mb-3 text-lg">Phase 3: Full-Fledged BA Work<br/><span className="text-xs text-gray-400 font-normal">(Mid Feb 2026 – Apr 2026)</span></h4>
        <p className="text-sm text-gray-600">Took complete ownership of Network module, backlog, and client-facing responsibilities</p>
      </div>
    </div>

    <div className="flex gap-8 mt-4 flex-1">
      <div className="flex-1 content-box bg-gray-50 flex flex-col justify-center border-l-4 border-[#00B0B0]">
        <h3 className="box-title mb-6 text-xl"><BarChart size={24}/> Journey Gantt Chart</h3>
        <div className="flex flex-col gap-6">
          <div className="flex items-center text-sm">
            <span className="w-1/3 font-semibold text-gray-600">Zwiz Testing</span>
            <div className="w-2/3 bg-gray-200 h-6 rounded-full overflow-hidden">
              <div className="bg-gray-400 h-full w-[40%]"></div>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <span className="w-1/3 font-semibold text-gray-600">Tivolt Testing + BA</span>
            <div className="w-2/3 bg-gray-200 h-6 rounded-full overflow-hidden flex">
              <div className="w-[30%]"></div>
              <div className="bg-[#00B0B0] opacity-50 h-full w-[40%] rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <span className="w-1/3 font-semibold text-gray-600">Full BA Role</span>
            <div className="w-2/3 bg-gray-200 h-6 rounded-full overflow-hidden flex">
              <div className="w-[60%]"></div>
              <div className="bg-[#00B0B0] h-full w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide1Outcomes = () => (
  <div className="flex flex-col justify-center h-full max-w-4xl mx-auto gap-6 mt-8">
    <div className="impact-box-highlight rounded-xl p-10 flex flex-col justify-center shadow-lg">
      <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Rocket size={36}/> Outcomes Delivered</h3>
      <ul className="box-list text-white space-y-6 text-xl">
        <li className="text-white before:text-white font-medium flex items-center gap-4"><CheckCircle size={28} className="shrink-0 text-cyan-200"/> Been a BA in Network for <strong>9 sprints</strong> (owned)</li>
        <li className="text-white before:text-white font-medium flex items-center gap-4"><CheckCircle size={28} className="shrink-0 text-cyan-200"/> <strong>Worked on 40+</strong> Stories | <strong>Created 30+</strong> Stories</li>
        <li className="text-white before:text-white font-medium flex items-center gap-4"><CheckCircle size={28} className="shrink-0 text-cyan-200"/> <strong>25+ Stories</strong> have been moved to production and are working fine currently</li>
        <li className="text-white before:text-white font-medium flex items-center gap-4"><CheckCircle size={28} className="shrink-0 text-cyan-200"/> Reported <strong>35+ bugs</strong> in Network</li>
      </ul>
    </div>
  </div>
);

const Slide2Contributions = () => (
  <div className="flex flex-col gap-6 h-full">
    <div className="flex gap-4 mb-2">
      <span className="skill-tag">Ownership</span>
      <span className="skill-tag">Product Thinking</span>
      <span className="skill-tag">Stakeholder Management</span>
    </div>
    
    <div className="grid grid-cols-3 gap-6 flex-1">
      <div className="content-box flex flex-col gap-4 border-t-4 border-t-blue-400">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
          <Database size={24}/>
        </div>
        <h3 className="font-bold text-xl text-gray-800">Product Contributions</h3>
        <ul className="box-list text-sm space-y-2 mt-2">
          <li>Smart Charging Profile</li>
          <li>Dynamic Tariff</li>
          <li>Auto Closure of Sessions</li>
          <li>AI Failure Session Analytics</li>
        </ul>
      </div>
      <div className="content-box flex flex-col gap-4 border-t-4 border-t-purple-400">
        <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
          <Settings size={24}/>
        </div>
        <h3 className="font-bold text-xl text-gray-800">Process & System</h3>
        <ul className="box-list text-sm space-y-2 mt-2">
          <li>BPMN for Tivolt Payment</li>
          <li>Session Flow & OCPP Flow Diagrams</li>
          <li>SOPs & structured workflows</li>
          <li>Commercial Models (OCPP & OCPI)</li>
        </ul>
      </div>
      <div className="content-box flex flex-col gap-4 border-t-4 border-t-[#00B0B0]">
        <div className="w-12 h-12 rounded-full bg-[#00B0B0] bg-opacity-10 flex items-center justify-center text-[#00B0B0]">
          <HeartHandshake size={24}/>
        </div>
        <h3 className="font-bold text-xl text-gray-800">Client & Execution</h3>
        <ul className="box-list text-sm space-y-2 mt-2">
          <li>Owned Network backlog + service support</li>
          <li>Acted as Scrum Master (daily tracking)</li>
          <li>Handled 7+ clients | resolved 4+ daily</li>
          <li>Delivered Network Demo for Flex Energy</li>
          <li>OEM integrations (ACS Energy, Cubenz)</li>
        </ul>
      </div>
    </div>
    
    <div className="impact-box bg-gray-50 border-l-4 border-[#00B0B0] mt-2">
      <h3 className="font-bold text-[#00B0B0] mb-4 flex items-center gap-2 text-lg"><TrendingUp size={24}/> Direct Impact Delivered</h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="font-medium text-gray-700 bg-white p-3 rounded shadow-sm">→ Improved operational efficiency & clarity</div>
        <div className="font-medium text-gray-700 bg-white p-3 rounded shadow-sm">→ Strengthened client trust and engagement</div>
        <div className="font-medium text-gray-700 bg-white p-3 rounded shadow-sm">→ Enabled scalable product workflows</div>
      </div>
    </div>
  </div>
);

const Slide6Synthesis = () => (
  <div className="flex flex-col gap-6 h-full">
    <div className="grid grid-cols-3 gap-6 flex-1">
      <div className="content-box text-center flex flex-col items-center justify-center gap-4 hover:border-blue-300">
        <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-2"><Briefcase size={40}/></div>
        <h3 className="font-bold text-2xl text-gray-800">What I Did</h3>
        <ul className="text-gray-600 space-y-3 text-base text-left list-disc list-inside mt-4">
          <li>Owned Network module</li>
          <li>Delivered features</li>
          <li>Built workflows</li>
          <li>Managed clients</li>
        </ul>
      </div>
      <div className="content-box text-center flex flex-col items-center justify-center gap-4 hover:border-purple-300">
        <div className="w-20 h-20 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-2"><BrainCircuit size={40}/></div>
        <h3 className="font-bold text-2xl text-gray-800">How I Did It</h3>
        <ul className="text-gray-600 space-y-3 text-base text-left list-disc list-inside mt-4">
          <li>Product thinking</li>
          <li>Data-driven decisions</li>
          <li>Strong stakeholder alignment</li>
        </ul>
      </div>
      <div className="content-box border-2 border-[#00B0B0] text-center flex flex-col items-center justify-center gap-4 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B0B0] opacity-10 rounded-bl-full"></div>
        <div className="w-20 h-20 rounded-full bg-[#00B0B0] text-white flex items-center justify-center mb-2 z-10"><Target size={40}/></div>
        <h3 className="font-bold text-2xl text-[#00B0B0] z-10">Impact</h3>
        <ul className="text-gray-800 space-y-3 text-base text-left font-medium mt-4 z-10">
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-[#00B0B0] mt-0.5 shrink-0"/> Reduced effort (75%–100%)</li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-[#00B0B0] mt-0.5 shrink-0"/> Improved predictability</li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-[#00B0B0] mt-0.5 shrink-0"/> Strengthened reliability</li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-[#00B0B0] mt-0.5 shrink-0"/> Better business decisions</li>
        </ul>
      </div>
    </div>
    
    <div className="flex gap-6 mt-4">
      <div className="flex-1 bg-gradient-to-r from-[#00B0B0] to-[#008b8b] rounded-xl p-6 flex items-center justify-between text-white shadow-lg">
        <div className="text-center px-6 border-r border-white border-opacity-30">
          <div className="text-4xl font-bold mb-1">100%</div>
          <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Effort Reduction</div>
        </div>
        <div className="text-center px-6 border-r border-white border-opacity-30">
          <div className="text-4xl font-bold mb-1">25+</div>
          <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Prod Stories</div>
        </div>
        <div className="text-center px-6 border-r border-white border-opacity-30">
          <div className="text-4xl font-bold mb-1">9</div>
          <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Sprints Owned</div>
        </div>
        <div className="text-center px-6">
          <div className="text-4xl font-bold mb-1">75%</div>
          <div className="text-sm uppercase tracking-wider opacity-90 font-medium">Less Manual Work</div>
        </div>
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
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay, duration: 0.4 }} className="badge">
    {text}
  </motion.div>
);

// --- Slides Content Array ---

const slides = [
  { id: "intro" },
  
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

  {
    id: "key-contributions",
    title: "2. Key Contributions",
    content: <Slide2Contributions />
  },

  {
    id: "req-analysis",
    title: "2.1 Requirement Analysis",
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
      <LayoutSplit 
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
        <div className="flex justify-between items-center mb-2 pb-4 border-b border-gray-100">
           <div className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Evaluation</div>
           <div className="text-4xl font-bold text-[#00B0B0]">8.7<span className="text-xl text-gray-400 font-normal"> / 10 OVERALL SCORE</span></div>
        </div>
        <div className="score-grid mt-4">
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

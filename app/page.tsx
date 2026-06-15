"use client";

import { useState, useEffect, useRef } from "react";
import { GitHubCalendar } from 'react-github-calendar';
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Open Source",
    description: "Exploring the intersection of code and design through curated repositories and modular UI experiments.",
    image: "/landing.png"
  },
  {
    id: 2,
    title: "Digital Systems",
    description: "Architecting scalable design foundations for high-growth startups and creative enterprises.",
    image: "/b1.png"
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "Crafting timeless visual narratives that define and elevate boutique brands in the digital age.",
    image: "/b2.png"
  }
];

const experiences = [
  {
    id: 1,
    org: "WORLDQUANT",
    position: "Quant Research Consultant",
    timeline: "AUG 2025 – PRESENT",
    content: "Engineered 150+ alpha signals with a 1.85 average Sharpe ratio. Processed 2TB of tick data via Brain engine, boosting out-of-sample IC by 22%."
  },
  {
    id: 2,
    org: "IIIT NAGPUR",
    position: "Research Intern",
    timeline: "JUNE 2024 – OCT 2025",
    content: "Built a React/Redux research dashboard as sole engineer. Restructured Linux server HTTP API patterns to reduce response latency by 18%."
  },
  {
    id: 3,
    org: "E-CELL, IIIT NAGPUR",
    position: "Chapter Lead",
    timeline: "AUG 2024 – DEC 2025",
    content: "Led a 150+ member team to execute a 3-day E-Summit, boosting attendance by 35% and expanding operational budget by 40%."
  },
  {
    id: 4,
    org: "GDSC, IIIT NAGPUR",
    position: "Lead",
    timeline: "SEPT 2024 – SEPT 2025",
    content: "Scaled membership by 60%. Launched a developer podcast series that tripled member retention and ranked the organization #1 on campus."
  }
];

const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    school: "Indian Institute of Information Technology (IIIT) Nagpur",
    timeline: "2023 — 2027"
  },
  {
    id: 2,
    degree: "Higher Secondary (Science)",
    school: "Kendriya Vidyalaya Dimapur",
    timeline: "Class of 2022"
  },
  {
    id: 3,
    degree: "High School",
    school: "Kendriya Vidyalaya Dimapur",
    timeline: "Class of 2020"
  }
];

const techStacks = [
  {
    id: 1,
    category: "Languages",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" className="text-[#1A1A1A] opacity-30">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    logos: [
      { name: "Python", slug: "python" },
      { name: "JavaScript", slug: "javascript" },
      { name: "C++", slug: "cplusplus" }
    ]
  },
  {
    id: 2,
    category: "Web Development",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" className="text-[#1A1A1A] opacity-30">
        <rect x="3" y="5" width="18" height="14" />
        <path d="M7 12l2 2 2-2M13 12l2 2 2-2" />
      </svg>
    ),
    logos: [
      { name: "TypeScript", slug: "typescript" },
      { name: "React", slug: "react" },
      { name: "Express", slug: "express" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "FastAPI", slug: "fastapi" }
    ]
  },
  {
    id: 3,
    category: "Machine Learning",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" className="text-[#1A1A1A] opacity-30">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
    logos: [
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Scikit-learn", slug: "scikitlearn" },
      { name: "OpenCV", slug: "opencv" },
      { name: "LangChain", slug: "langchain" },
      { name: "LangGraph", slug: "langgraph" }
    ]
  },
  {
    id: 4,
    category: "Infrastructure",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" className="text-[#1A1A1A] opacity-30">
        <path d="M4 14l8-4 8 4-8 4-8-4Z" />
        <path d="M4 10l8-4 8 4-8 4-8-4Z" />
        <path d="M4 6l8-4 8 4-8 4-8-4Z" />
      </svg>
    ),
    logos: [
      { name: "GitHub", slug: "github" },
      { name: "Docker", slug: "docker" },
      { name: "Redis", slug: "redis" },
      { name: "Linux", slug: "linux" }
    ]
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(0);
  const [activeExp, setActiveExp] = useState(0);
  const [activeAbout, setActiveAbout] = useState(0);
  const [activeTech, setActiveTech] = useState(0);
  const [githubData, setGithubData] = useState<any>(null);
  
  // Custom Cursor States
  const mousePos = useRef({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    // Initial loading timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Mouse movement tracking
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX, y: e.clientY });
    };

    // Hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.group') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Smooth follower interpolation
    let frameId: number;
    const followMouse = () => {
      setFollowerPos(prev => ({
        x: prev.x + (mousePos.current.x - prev.x) * 0.15,
        y: prev.y + (mousePos.current.y - prev.y) * 0.15
      }));
      frameId = requestAnimationFrame(followMouse);
    };
    frameId = requestAnimationFrame(followMouse);

    const fetchGithub = async () => {
      try {
        const [userRes, eventsRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/NextMutant"),
          fetch("https://api.github.com/users/NextMutant/events/public?per_page=3"),
          fetch("https://api.github.com/users/NextMutant/repos?per_page=100&sort=updated")
        ]);
        const user = await userRes.json();
        const events = await eventsRes.json();
        const repos = await reposRes.json();

        // Aggregate languages
        const langMap: { [key: string]: number } = {};
        let totalRepos = 0;
        if (Array.isArray(repos)) {
          repos.forEach((repo: any) => {
            if (repo.language) {
              langMap[repo.language] = (langMap[repo.language] || 0) + 1;
              totalRepos++;
            }
          });
        }
        const topLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 2)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalRepos) * 100)
          }));

        setGithubData({ 
          user, 
          events: Array.isArray(events) ? events.slice(0, 3) : [], 
          topLangs 
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    fetchGithub();
    
    const projectTimer = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    
    const expTimer = setInterval(() => {
      setActiveExp((prev) => (prev + 1) % experiences.length);
    }, 5000);

    const aboutTimer = setInterval(() => {
      setActiveAbout((prev) => (prev + 1) % 2);
    }, 6000);

    const techTimer = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % techStacks.length);
    }, 4500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
      clearInterval(projectTimer);
      clearInterval(expTimer);
      clearInterval(aboutTimer);
      clearInterval(techTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-[#1A1A1A] font-sans selection:bg-accent selection:text-white flex flex-col items-center">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[10000] bg-background flex items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut" 
              }}
              className="text-4xl font-serif font-black tracking-tight text-[#1A1A1A]"
            >
              U.BOSE
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      {mounted && (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
          {/* Drafting Crosshair */}
          <div 
            className="fixed flex items-center justify-center transition-transform duration-200 ease-out"
            style={{ 
              left: `${dotPos.x}px`, 
              top: `${dotPos.y}px`,
              transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
            }}
          >
            <div className="absolute h-4 w-[1px] bg-accent"></div>
            <div className="absolute w-4 h-[1px] bg-accent"></div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={!loading ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 w-full z-50 py-8 flex justify-center bg-background/80 backdrop-blur-sm border-b border-[#1A1A1A]/5"
      >
        <div className="w-full max-w-[1400px] px-12 md:px-32 flex justify-between items-center">
          <div className="text-2xl font-serif font-black tracking-tight cursor-pointer text-[#1A1A1A]">
            U.BOSE
          </div>
          
          <div className="hidden md:flex gap-12 text-[13px] font-semibold tracking-[0.25em] uppercase text-[#262626]">
            <a href="#projects" className="hover:text-[#1A1A1A] transition-colors">Projects</a>
            <a href="#about" className="hover:text-[#1A1A1A] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#1A1A1A] transition-colors">Experience</a>
            <a href="#socials" className="hover:text-[#1A1A1A] transition-colors">Contact</a>
          </div>

          <a href="#contact" className="px-5 py-2 bg-[#1A1A1A] hover:bg-accent text-white rounded-full text-[13px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300">
            Start a Project
          </a>
        </div>
      </motion.nav>

      <main className="relative w-full max-w-[1400px] mx-auto px-12 md:px-32 flex flex-col justify-center min-h-[85vh] pt-32 pb-16">
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={!loading ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10"
        >
          <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-[#263c31]">
            FULL-STACK · MACHINE LEARNING · QUANT RESEARCH
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Headline (Left 65%) */}
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif font-light leading-[0.9] tracking-[-0.04em] text-[#1A1A1A]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Code Meets <br />
                <span className="italic text-accent">Cognition.</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                Systems Meet <span className="italic text-accent">Scale.</span>
              </motion.div>
            </h1>
          </div>

          {/* Body Text (Right 35% - constrained) */}
          <div className="lg:col-span-4 lg:pl-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="max-w-[320px] ml-auto lg:ml-0"
            >
              <p className="text-base md:text-lg font-normal leading-relaxed text-[#52525B] tracking-tight translate-y-4">
                A portfolio of full-stack engineering, applied ML research, and quantitative finance — built with the same modular rigor as the systems behind it.
              </p>
              
              {/* Scroll Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={!loading ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="mt-12 flex items-center gap-6 group cursor-pointer"
              >
                <div className="h-[0.5px] w-16 bg-[#1A1A1A]/10 overflow-hidden">
                  <div className="h-full w-full bg-[#1A1A1A] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                </div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#71717A] group-hover:text-[#1A1A1A] transition-colors">
                  Scroll to Explore
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Bento Grid Section 1 (b1.png) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[1400px] mx-auto px-12 md:px-32 pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* 1. Main About & Education Card (Large Carousel) */}
          <div id="about" className="md:col-span-2 md:row-span-2 bg-accent rounded-xl relative overflow-hidden group">
            <div className="h-full w-full relative z-10">
              {/* Slide 1: About */}
              <div className={`absolute inset-0 p-10 md:p-14 transition-all duration-1000 ease-in-out flex flex-col justify-center ${
                activeAbout === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
              }`}>
                <div className="flex flex-col gap-6">
                  <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-white/50 block">About</span>
                  
                  <div className="max-w-[540px]">
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-[1.1] tracking-tight">
                      I&apos;m <span className="font-black italic text-white">Uttaran</span>, a Computer Science student at <span className="opacity-80">IIIT Nagpur</span> who loves building <span className="italic opacity-90">fast, interactive</span> web systems.
                    </h2>
                    
                    <p className="mt-8 text-white/60 text-sm md:text-base leading-relaxed font-normal max-w-[440px]">
                      Specializing in <span className="text-white/90">React and Node.js</span>, I&apos;ve spent significant time developing <span className="italic text-white font-semibold">AI-driven tools</span>. At my core, I simply enjoy the art of <span className="text-white/90">solving problems</span> through clean, efficient code.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slide 2: Education */}
              <div className={`absolute inset-0 p-10 md:p-14 transition-all duration-1000 ease-in-out flex flex-col ${
                activeAbout === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
              }`}>
                <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-white/50 mb-10 block">Education</span>

                <div className="flex flex-col gap-8">
                  {education.map((item, index) => (
                    <div key={item.id} className="relative group/edu">
                      <div className="flex items-start gap-6">
                        <span className="text-[10px] font-bold text-white/20 tracking-tighter mt-1.5">
                          0{index + 1}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-white text-xl md:text-2xl font-serif font-light leading-tight group-hover/edu:text-white/90 transition-colors">
                            {item.degree}
                          </h3>
                          <div className="mt-2 flex items-center gap-4">
                            <div className="h-[1px] w-4 bg-white/20"></div>
                            <span className="text-[11px] font-bold text-white/70 tracking-[0.15em] uppercase">
                              {item.school}
                            </span>
                          </div>
                          <div className="mt-1 pl-8">
                            <span className="text-[10px] font-medium text-white/40 tracking-[0.2em] uppercase">
                              {item.timeline}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Symbol */}
            <div 
              className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-20 transition-all duration-1000"
              style={{ transform: `rotate(${45 + (activeAbout * 45)}deg)` }}
            >
               <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                 <path d="M50 0L54.4903 45.5097L100 50L54.4903 54.4903L50 100L45.5097 54.4903L0 50L45.5097 45.5097L50 0Z" fill="currentColor"/>
               </svg>
            </div>
          </div>

          {/* 2. GitHub Card (Formerly Branding) */}
          <div id="projects" className="md:col-span-2 bg-[#1A1A1A] rounded-xl flex flex-col overflow-hidden group hover:bg-[#262626] transition-colors relative">
            {/* Top Image Section with Overlays */}
            <div className="h-[200px] relative overflow-hidden bg-[#262626] border-b border-white/5">
              {projects.map((project, index) => (
                <img 
                  key={project.id}
                  src={project.image} 
                  alt={project.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    index === activeProject ? "opacity-40 group-hover:opacity-100 scale-100 group-hover:scale-105" : "opacity-0 scale-110"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating Header on Image */}
              <div className="absolute top-0 w-full p-8 md:p-10 flex justify-between items-start z-10">
                <div className="text-[11px] font-bold text-white tracking-[0.3em] uppercase drop-shadow-sm">02 / PROJECTS</div>
                <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#52525B] transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
              </div>

              {/* Carousel Indicators (Overlay on image) */}
              <div className="absolute bottom-4 left-8 md:left-10 flex gap-2 z-10">
                {projects.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-[2px] w-6 transition-all duration-500 ${
                      index === activeProject ? "bg-white" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="px-8 md:px-10 py-8 flex-1 relative flex flex-col justify-end">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`transition-all duration-1000 ease-in-out flex flex-col justify-end h-full ${
                    index === activeProject ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none absolute inset-x-8 md:inset-x-10"
                  }`}
                >
                  <h3 className="text-2xl font-serif font-medium text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed max-w-[400px]">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Domain Card (Technical Focus) */}
          <div className="md:col-span-1 bg-white rounded-xl p-10 border border-[#1A1A1A]/5 flex flex-col justify-between group hover:border-accent/30 transition-all duration-500">
            <div className="text-[11px] font-bold text-accent tracking-[0.3em] uppercase mb-8">03 / DOMAIN</div>
            
            <div className="flex flex-col justify-between flex-1">
              {[
                { 
                  title: "Full-Stack", 
                  subtitle: "Development", 
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" className="text-accent opacity-40 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">
                      <rect x="3" y="5" width="18" height="14" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <path d="M9 13l-2 2 2 2" />
                      <path d="M15 13l2 2-2 2" />
                    </svg>
                  )
                },
                { 
                  title: "Machine", 
                  subtitle: "Learning", 
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" className="text-accent opacity-40 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">
                      <circle cx="6" cy="6" r="1.5" />
                      <circle cx="6" cy="12" r="1.5" />
                      <circle cx="6" cy="18" r="1.5" />
                      <circle cx="12" cy="9" r="1.5" />
                      <circle cx="12" cy="15" r="1.5" />
                      <circle cx="18" cy="12" r="1.5" />
                      <path d="M7.5 6L10.5 9M7.5 12L10.5 9M7.5 12L10.5 15M7.5 18L10.5 15" />
                      <path d="M13.5 9L16.5 12M13.5 15L16.5 12" />
                    </svg>
                  )
                },
                { 
                  title: "Cloud", 
                  subtitle: "DevOps", 
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" className="text-accent opacity-40 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">
                      <path d="M4 14l8-4 8 4-8 4-8-4Z" />
                      <path d="M4 10l8-4 8 4-8 4-8-4Z" />
                      <path d="M4 6l8-4 8 4-8 4-8-4Z" />
                    </svg>
                  )
                }
              ].map((domain, i) => (
                <div key={i} className="flex flex-col group/item cursor-default">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-serif font-medium text-[#1A1A1A] leading-tight group-hover/item:text-accent transition-colors">
                      {domain.title} <br />
                      <span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#71717A] group-hover/item:text-accent/60 transition-colors">
                        {domain.subtitle}
                      </span>
                    </h3>
                    {domain.icon}
                  </div>
                  <div className="mt-3 h-[1px] w-0 bg-accent/10 group-hover/item:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Tech Stack Card (Carousel) */}
          <div className="md:col-span-1 bg-[#E4D5B7] rounded-xl relative overflow-hidden group hover:brightness-95 transition-all">
            <div className="h-full w-full p-10 flex flex-col justify-between relative z-10">
              <div className="text-[11px] font-bold text-[#1A1A1A]/60 tracking-[0.3em] uppercase">04 / TECH STACK</div>
              
              <div className="flex-1 relative mt-6">
                {techStacks.map((stack, index) => (
                  <div 
                    key={stack.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center ${
                      index === activeTech ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <h3 className="text-2xl font-serif font-medium text-[#1A1A1A]">{stack.category}</h3>
                      <div className="mt-1">{stack.icon}</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-8 max-w-[200px] justify-center lg:justify-start">
                      {stack.logos.map((logo, i) => (
                        <div key={i} className="group/logo relative flex flex-col items-center">
                          <img 
                            src={`https://cdn.simpleicons.org/${logo.slug}/1A1A1A`}
                            alt={logo.name}
                            className="h-6 w-6 opacity-40 group-hover/logo:opacity-100 transition-all duration-300"
                          />
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold tracking-widest uppercase text-[#1A1A1A] opacity-0 group-hover/logo:opacity-40 transition-opacity whitespace-nowrap">
                            {logo.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-2">
                {techStacks.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                      index === activeTech 
                        ? "bg-[#1A1A1A] scale-110" 
                        : "bg-[#1A1A1A]/20"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Bento Grid Section 2 (b2.png) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[1400px] mx-auto px-12 md:px-32 pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* 5. GitHub Card (Live Dashboard) */}
          <div className="md:col-span-2 bg-white rounded-xl p-8 md:p-10 border border-[#1A1A1A]/5 flex flex-col group hover:border-accent/30 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="text-[11px] font-bold text-accent tracking-[0.3em] uppercase">05 / GITHUB</div>
              <a 
                href="https://github.com/NextMutant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A] hover:text-white transition-colors">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              {/* Left Side: Languages & Heatmap */}
              <div className="flex flex-col">
                {/* Language Bar Graph */}
                <div className="mb-3 w-full md:w-2/3">
                  <div className="text-[8px] font-bold text-accent tracking-[0.2em] uppercase mb-1">Tech Stack Distribution</div>
                  <div className="h-1 w-full flex rounded-full overflow-hidden bg-[#1A1A1A]/5">
                    {githubData?.topLangs?.map((lang: any, i: number) => {
                      const colors = ['#325041', '#6D7C46'];
                      return (
                        <div 
                          key={lang.name}
                          style={{ width: `${lang.percentage}%`, backgroundColor: colors[i % colors.length] }}
                          className="h-full border-r border-white/5 last:border-0"
                        />
                      );
                    })}
                  </div>
                  <div className="mt-2 flex items-center gap-x-4">
                    {githubData?.topLangs?.map((lang: any, i: number) => {
                      const colors = ['#325041', '#6D7C46'];
                      return (
                        <div key={lang.name} className="flex items-center gap-1.5 whitespace-nowrap">
                          <div className="h-1 w-1 rounded-full" style={{ backgroundColor: colors[i % colors.length] }} />
                          <span className="text-[9px] font-medium text-[#1A1A1A] uppercase tracking-tight">{lang.name}</span>
                          <span className="text-[9px] text-[#71717A]">{lang.percentage}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="github-calendar-wrapper w-full overflow-hidden flex justify-start pb-2 relative">
                  {mounted && (
                    <GitHubCalendar 
                      username="NextMutant" 
                      blockSize={5}
                      blockMargin={2}
                      fontSize={10}
                      theme={{
                        light: ['#EBEDF0', '#C6CEB1', '#99A873', '#6D7C46', '#325041'],
                        dark: ['#EBEDF0', '#C6CEB1', '#99A873', '#6D7C46', '#325041']
                      }}
                    />
                  )}
                </div>
                <div className="text-[8px] font-bold text-[#71717A] tracking-[0.2em] uppercase mt-3">Contribution Activity</div>
              </div>

              {/* Right Side: Recent Activity */}
              <div className="flex flex-col border-l border-[#1A1A1A]/5 pl-8">
                <div className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase mb-1">Recent Events</div>
                <div className="flex flex-col gap-4">
                  {githubData?.events?.map((event: any, i: number) => (
                    <div key={i} className="flex flex-col border-l-2 border-accent/10 pl-4 py-1">
                      <span className="text-[10px] font-serif font-medium text-[#1A1A1A] line-clamp-1">
                        {event.type.replace("Event", "")}: {event.repo.name.split("/")[1]}
                      </span>
                      <span className="text-[9px] text-[#71717A] mt-1">
                        {new Date(event.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                    </div>
                  )) || (
                    <div className="animate-pulse flex flex-col gap-4">
                      <div className="h-4 bg-[#1A1A1A]/5 w-full rounded"></div>
                      <div className="h-4 bg-[#1A1A1A]/5 w-3/4 rounded"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 6. Experience Card (Vertical Carousel) */}
          <div id="experience" className="md:col-span-1 bg-[#E4D5B7] rounded-xl p-10 flex flex-col justify-between group hover:brightness-95 transition-all overflow-hidden relative">
            <div className="text-[11px] font-bold text-[#1A1A1A]/60 tracking-[0.3em] uppercase z-10">06 / EXPERIENCE</div>
            
            <div className="flex-1 relative mt-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center ${
                    index === activeExp ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
                  }`}
                >
                  <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-1">{exp.org}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold text-[#1A1A1A] tracking-[0.1em] uppercase">{exp.position}</span>
                    <span className="text-[9px] font-medium text-[#1A1A1A]/60 tracking-wider">{exp.timeline}</span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed line-clamp-6">
                    {exp.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Vertical Indicator */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {experiences.map((_, index) => (
                <div 
                  key={index}
                  className={`w-[2px] transition-all duration-500 ${
                    index === activeExp ? "h-6 bg-[#1A1A1A]" : "h-2 bg-[#1A1A1A]/10"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 7. Socials Card (1x1) */}
          <div id="socials" className="md:col-span-1 bg-[#1A1A1A] rounded-xl p-10 flex flex-col justify-start group hover:bg-[#262626] transition-colors relative overflow-hidden">
            <div className="text-[11px] font-bold text-white/40 tracking-[0.3em] uppercase z-10 mb-12">07 / SOCIALS</div>
            
            <div className="flex flex-col gap-5 z-10">
              {[
                { 
                  name: "LinkedIn", 
                  url: "https://www.linkedin.com/in/uttaranbose/",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-30 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-white">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                },
                { 
                  name: "GitHub", 
                  slug: "github", 
                  url: "https://github.com/NextMutant" 
                },
                { 
                  name: "Instagram", 
                  slug: "instagram", 
                  url: "https://www.instagram.com/_shaan_100/" 
                },
                { 
                  name: "Twitter", 
                  slug: "x", 
                  url: "https://x.com/sanelyShaan" 
                }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group/link"
                >
                  <span className="text-sm font-bold tracking-wider text-white/60 group-hover/link:text-white transition-colors uppercase">
                    {social.name}
                  </span>
                  {social.icon ? (
                    social.icon
                  ) : (
                    <img 
                      src={`https://cdn.simpleicons.org/${social.slug}/FFFFFF`}
                      alt={social.name}
                      className="h-4 w-4 opacity-30 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Subtle background noise/pattern can be added here if needed, 
                keeping it minimal as per user request */}
          </div>
          </div>
          </motion.section>

          {/* New CTA Card Section (footercard.png) */}
          <motion.section 
          id="contact" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1400px] mx-auto px-12 md:px-32 pb-24"
          >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-9 border-[3px] border-[#1A1A1A] bg-background px-8 py-10 md:px-14 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center group relative overflow-hidden order-2 lg:order-1">
            {/* Background Accent Flaring */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-0 group-hover:opacity-[0.03] rounded-full blur-3xl transition-opacity duration-700"></div>
            
            {/* Left Column */}
            <div className="flex flex-col gap-4 relative z-10">
              <div className="font-serif italic text-2xl md:text-3xl text-accent">
                Let&apos;s build.
              </div>
              
              <div className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.85] tracking-tighter text-[#1A1A1A]">
                boseuttaran100@<br />gmail.com
              </div>

              <div className="mt-4 flex items-center gap-4">
                <div className="h-[2px] w-8 bg-accent/20"></div>
                <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#71717A]">
                  AVAILABLE FOR OPEN SOURCE & FREELANCE
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-end gap-8 mt-12 md:mt-0 relative z-10">
              {/* Paper Airplane Icon */}
              <div className="opacity-20 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </div>

              {/* Circular Button */}
              <a 
                href="mailto:boseuttaran100@gmail.com"
                className="h-16 w-16 rounded-full bg-[#1A1A1A] flex items-center justify-center group-hover:bg-accent transition-all duration-500 cursor-pointer shadow-lg group-hover:shadow-accent/20"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image (Visuals Card) */}
          <div className="hidden lg:block lg:col-span-3 order-1 lg:order-2 self-stretch">
            <div className="relative group h-full bg-[#D0C8B6] rounded-xl overflow-hidden border border-[#1A1A1A]/5 flex flex-col">
              {/* Header Label - Matching Bento Style */}
              <div className="p-6 md:p-8 flex justify-between items-center relative z-20">
                <div className="text-[10px] font-bold text-[#1A1A1A]/80 tracking-[0.3em] uppercase">08 / PORTRAIT</div>
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></div>
              </div>

              {/* Image Container */}
              <div className="flex-1 relative overflow-hidden mx-6 mb-6 md:mx-8 md:mb-8 rounded-lg">
                <img 
                  src="/profile (1).svg" 
                  alt="Uttaran Bose" 
                  className="absolute inset-0 w-full h-full object-cover contrast-[1.05] brightness-90 group-hover:brightness-95 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Subtle Overlay Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
              </div>

              {/* Bottom Metadata */}
              <div className="px-6 pb-6 md:px-8 md:pb-8 mt-auto relative z-20">
                <div className="h-[1px] w-8 bg-[#1A1A1A]/20 mb-3"></div>
                <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/70">
                  Uttaran Bose <br />
                  <span className="text-accent/90">Creative Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer (Absolute Literal) */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full bg-background py-16"
      >
        <div className="max-w-[1400px] mx-auto px-12 md:px-32">
          <div className="pt-12 border-t border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 text-[10px] font-bold tracking-[0.3em] uppercase">
            {/* Left Group: Copyright */}
            <div className="text-[#71717A]">
              © 2026 UTTARAN BOSE. ALL RIGHTS RESERVED.
            </div>

            {/* Center Group: Navigation Links */}
            <div className="flex gap-8 md:gap-12 text-[#71717A]">
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Colophon</a>
            </div>

            {/* Right Group: Metadata/Location */}
            <div className="flex items-center gap-1">
              <span className="text-[#71717A] font-medium">Location:</span>
              <span className="text-[#1A1A1A]">Guwahati, Ind / Remote</span>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

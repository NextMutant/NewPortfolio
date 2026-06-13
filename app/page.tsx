"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from 'react-github-calendar';

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
    org: "M.ARCHIVE STUDIO",
    position: "Creative Director",
    timeline: "2023 - PRESENT",
    content: "Leading the design direction for premium digital experiences and editorial brand systems."
  },
  {
    id: 2,
    org: "DESIGN HUB",
    position: "Senior Designer",
    timeline: "2021 - 2023",
    content: "Developed modular UI kits and high-fidelity prototypes for global tech enterprises."
  },
  {
    id: 3,
    org: "EDITORIAL LAB",
    position: "Jr. Strategist",
    timeline: "2019 - 2021",
    content: "Synthesizing market trends into actionable design strategies for culture-forward brands."
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeExp, setActiveExp] = useState(0);
  const [githubData, setGithubData] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
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

    return () => {
      clearInterval(projectTimer);
      clearInterval(expTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-[#1A1A1A] font-sans selection:bg-accent selection:text-white flex flex-col items-center">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-8 flex justify-center bg-background/80 backdrop-blur-sm border-b border-[#1A1A1A]/5">
        <div className="w-full max-w-[1400px] px-12 md:px-32 flex justify-between items-center">
          <div className="text-xl font-serif font-black tracking-tight cursor-pointer text-[#1A1A1A]">
            M.ARCHIVE
          </div>
          
          <div className="hidden md:flex gap-12 text-[13px] font-semibold tracking-[0.25em] uppercase text-[#262626]">
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Projects</a>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">About</a>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Writing</a>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Contact</a>
          </div>

          <button className="px-5 py-2 bg-[#1A1A1A] hover:bg-accent text-white rounded-full text-[13px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300">
            Start a Project
          </button>
        </div>
      </nav>

      <main className="relative w-full max-w-[1400px] mx-auto px-12 md:px-32 flex flex-col justify-center min-h-[85vh] pt-32 pb-16">
        {/* Top Label */}
        <div className="mb-10">
          <span className="text-[15px] font-bold tracking-[0.4em] uppercase text-accent">
            Design & Strategy 2024
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Headline (Left 65%) */}
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-[130px] font-serif font-light leading-[0.85] tracking-[-0.05em] text-[#1A1A1A]">
              Editorial <br />
              <span className="italic text-accent">Integrity</span> in <br />
              Digital Form.
            </h1>
          </div>

          {/* Body Text (Right 35% - constrained) */}
          <div className="lg:col-span-4 lg:pl-12">
            <div className="max-w-[280px] ml-auto lg:ml-0">
              <p className="text-base md:text-lg font-normal leading-relaxed text-[#52525B] tracking-tight translate-y-4">
                A boutique studio crafting elevated digital experiences for culture-forward brands through bento-inspired hierarchy and modular design.
              </p>
              
              {/* Scroll Indicator */}
              <div className="mt-12 flex items-center gap-6 group cursor-pointer">
                <div className="h-[0.5px] w-16 bg-[#1A1A1A]/10 overflow-hidden">
                  <div className="h-full w-full bg-[#1A1A1A] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                </div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#71717A] group-hover:text-[#1A1A1A] transition-colors">
                  Scroll to Explore
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bento Grid Section 1 (b1.png) */}
      <section className="relative w-full max-w-[1400px] mx-auto px-12 md:px-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* 1. Main Capabilities Card (Large) */}
          <div className="md:col-span-2 md:row-span-2 bg-accent rounded-xl p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="z-10">
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-white/50 mb-6 block">Capabilities</span>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] tracking-tight">
                Integrated <br />
                <span className="italic opacity-80">Studio</span> <br />
                Services.
              </h2>
            </div>
            
            <div className="z-10 flex items-center gap-4 text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">
              <div className="h-[1px] w-8 bg-white/20"></div>
              <span>Explore Our Approach</span>
            </div>

            {/* Background Symbol */}
            <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-20 transition-opacity duration-1000 group-hover:rotate-12 transition-transform">
               <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                 <path d="M50 0L54.4903 45.5097L100 50L54.4903 54.4903L50 100L45.5097 54.4903L0 50L45.5097 45.5097L50 0Z" fill="currentColor"/>
               </svg>
            </div>
          </div>

          {/* 2. GitHub Card (Formerly Branding) */}
          <div className="md:col-span-2 bg-[#1A1A1A] rounded-xl flex flex-col overflow-hidden group hover:bg-[#262626] transition-colors relative">
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

          {/* 3. Domain Card (Formerly Strategy) */}
          <div className="md:col-span-1 bg-white rounded-xl p-10 border border-[#1A1A1A]/5 flex flex-col justify-between group hover:border-accent/30 transition-colors">
            <div className="text-[11px] font-bold text-accent tracking-[0.3em] uppercase">03 / DOMAIN</div>
            <div>
              <h3 className="text-2xl font-serif font-medium mb-2">Market <br />Positioning</h3>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-4 text-accent">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          {/* 4. Tech Stack Card */}
          <div className="md:col-span-1 bg-[#E4D5B7] rounded-xl p-10 flex flex-col justify-between group hover:brightness-95 transition-all">
            <div className="text-[11px] font-bold text-[#1A1A1A]/60 tracking-[0.3em] uppercase">04 / TECH STACK</div>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-2">Experience <br />Design</h3>
              <div className="mt-4 flex gap-2">
                <div className="h-2 w-2 rounded-full bg-[#1A1A1A] animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-[#1A1A1A]/40"></div>
                <div className="h-2 w-2 rounded-full bg-[#1A1A1A]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section 2 (b2.png) */}
      <section className="relative w-full max-w-[1400px] mx-auto px-12 md:px-32 pb-12">
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
          <div className="md:col-span-1 bg-[#E4D5B7] rounded-xl p-10 flex flex-col justify-between group hover:brightness-95 transition-all overflow-hidden relative">
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
                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed line-clamp-3">
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

          {/* 7. Motion Design Card (1x1) */}
          <div className="md:col-span-1 bg-[#1A1A1A] rounded-xl p-10 flex flex-col justify-between group hover:bg-[#262626] transition-colors">
            <div className="text-[11px] font-bold text-white/40 tracking-[0.3em] uppercase">07 / SOCIALS</div>
            <div>
              <h3 className="text-2xl font-serif font-medium text-white mb-2">Dynamic <br />Interfaces</h3>
              <div className="mt-4 flex items-end gap-1 h-8">
                <div className="w-1 bg-accent h-4 animate-pulse"></div>
                <div className="w-1 bg-accent h-8 animate-pulse delay-75"></div>
                <div className="w-1 bg-accent h-6 animate-pulse delay-150"></div>
                <div className="w-1 bg-accent h-5 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* New CTA Card Section (footercard.png) */}
      <section className="relative w-full max-w-[1400px] mx-auto px-12 md:px-32 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-span-2 border-2 border-[#1A1A1A] bg-background px-8 py-6 md:px-10 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center group">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              <div className="font-serif italic text-lg md:text-xl text-[#1A1A1A]">
                Let&apos;s build.
              </div>
              
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] tracking-tighter text-[#1A1A1A]">
                HELLO@M-<br />
                ARCHIVE.STUDIO
              </div>

              <div className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#71717A] mt-1">
                Currently Accepting Q3/Q4 Bookings
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-end gap-4 mt-8 md:mt-0">
              {/* Paper Airplane Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>

              {/* Circular Button */}
              <div className="h-12 w-12 rounded-full bg-[#1A1A1A] flex items-center justify-center group-hover:bg-accent transition-colors duration-500 cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Absolute Literal) */}
      <footer className="w-full bg-background py-16">
        <div className="max-w-[1400px] mx-auto px-12 md:px-32">
          <div className="pt-12 border-t border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 text-[10px] font-bold tracking-[0.3em] uppercase">
            {/* Left Group: Copyright */}
            <div className="text-[#71717A]">
              © 2024 M. ARCHIVE STUDIO. ALL RIGHTS RESERVED.
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
              <span className="text-[#1A1A1A]">New York, NY / Remote</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

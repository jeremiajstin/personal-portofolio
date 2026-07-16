import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import Starfield from "./components/Starfield";
import { Terminal, Activity } from "lucide-react";
import Lenis from "lenis";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Override hash anchor scrolling for Lenis
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.hash && target.origin === window.location.origin) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: 0, duration: 1.5 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  // Monitor scrolling to change navbar style and active link highlight
  useEffect(() => {
    const handleScroll = () => {
      // Navbar styling
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section calculation
      const sections = ["hero", "intro", "tools", "projects"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      
      {/* Background canvas stars effect */}
      <Starfield />

      {/* Sticky Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Name */}
          <a href="#hero" className="flex items-center space-x-2 group">
            <span className="font-mono text-sm tracking-widest font-extrabold text-white group-hover:text-gray-300 duration-300">
              JUSTIN JEREMIA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          </a>

          {/* Navigation Links (Without slashes) */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#hero" 
              className={`text-xs uppercase tracking-widest font-mono duration-300 ${
                activeSection === "hero" ? "text-white border-b border-white pb-1" : "text-gray-400 hover:text-white"
              }`}
            >
              Home
            </a>
            <a 
              href="./resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-mono text-gray-400 hover:text-white duration-300"
            >
              Resume
            </a>
            <a 
              href="#intro" 
              className={`text-xs uppercase tracking-widest font-mono duration-300 ${
                activeSection === "intro" ? "text-white border-b border-white pb-1" : "text-gray-400 hover:text-white"
              }`}
            >
              About
            </a>
            <a 
              href="#tools" 
              className={`text-xs uppercase tracking-widest font-mono duration-300 ${
                activeSection === "tools" ? "text-white border-b border-white pb-1" : "text-gray-400 hover:text-white"
              }`}
            >
              Stack
            </a>
            <a 
              href="#projects" 
              className={`text-xs uppercase tracking-widest font-mono duration-300 ${
                activeSection === "projects" ? "text-white border-b border-white pb-1" : "text-gray-400 hover:text-white"
              }`}
            >
              Projects
            </a>
          </div>

          {/* Mobile indicator / menu helper */}
          <div className="md:hidden flex items-center text-white">
            <Activity size={18} className="animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase ml-1.5">DATA.ACTIVE</span>
          </div>
        </div>
      </nav>

      {/* Main Single Page Layout Sections with Overlapping Sticky layering */}
      <main className="relative z-10">
        <HeroSection />
        <IntroSection />
        <TechStackSection />
        <ProjectsSection />
      </main>

      {/* Tech Footer */}
      <footer className="w-full bg-black border-t border-white/5 py-12 px-6 md:px-12 relative overflow-hidden z-50">
        {/* Background ambient spotlight */}
        <div className="absolute bottom-[0%] right-[10%] w-[350px] h-[350px] ambient-spotlight opacity-50"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Left info */}
          <div className="flex items-center text-left">
            <div>
              <p className="text-white text-sm font-semibold tracking-wide font-mono">
                Justin Jeremia @ 2026
              </p>
            </div>
          </div>

          {/* Right Social Media Profile Links (Replacing CPU & Enclave status) */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-xs font-mono">
            <a 
              href="https://github.com/jeremiajstin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:underline underline-offset-4 transition-colors duration-300"
            >
              GITHUB
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:underline underline-offset-4 transition-colors duration-300"
            >
              LINKEDIN
            </a>
            <a 
              href="https://www.instagram.com/jstinjrm/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:underline underline-offset-4 transition-colors duration-300"
            >
              INSTAGRAM
            </a>
            <a 
              href="https://medium.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:underline underline-offset-4 transition-colors duration-300"
            >
              MEDIUM
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

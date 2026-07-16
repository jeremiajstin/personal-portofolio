import React, { useState, useEffect } from "react";
import GlobeComponent from "./GlobeComponent";
import ParticleNetwork from "./ParticleNetwork";

export default function HeroSection() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  
  useEffect(() => {
    const part1 = "I'm";
    const part2 = "Justin Jeremia";
    let idx1 = 0;
    let idx2 = 0;
    
    const interval = setInterval(() => {
      if (idx1 < part1.length) {
        setText1(part1.substring(0, idx1 + 1));
        idx1++;
      } else if (idx2 < part2.length) {
        setText2(part2.substring(0, idx2 + 1));
        idx2++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen lg:sticky lg:top-0 z-10 w-full flex items-center justify-center pt-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-black grid-overlay">
      {/* Interactive background particle network */}
      <ParticleNetwork />

      {/* Background ambient spotlight glows (mimicking the reference image) */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] ambient-spotlight opacity-70"></div>
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] ambient-spotlight opacity-40"></div>
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left: Typography & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
          <div className="space-y-3">
            <span className="text-white text-xs md:text-sm font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Welcome to My Space
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
              <span className="block text-white/90 min-h-[1.15em]">
                {text1}
                {text1.length < 3 && <span className="animate-pulse font-light text-white/70 ml-1">|</span>}
              </span>
              <span className="text-white neon-glow-text-intense block mt-2 min-h-[1.15em] whitespace-nowrap">
                {text2}
                {text1.length === 3 && <span className="animate-pulse font-light text-white ml-1">|</span>}
              </span>
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 border-l-2 border-white pl-4">
            Final Year Data Science Student | Telkom University
          </h2>
          
          <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed font-light">
            Specializing in predictive modeling, statistical analysis, and interactive dashboard systems. Transforming complex data into actionable visual insights.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-sm md:text-base"
            >
              Explore Projects
            </a>
            <a 
              href="#intro" 
              className="px-8 py-3 rounded-lg border border-white/15 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-sm md:text-base"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right: Interactive 3D Globe */}
        <div className="lg:col-span-5 flex justify-center items-center w-full min-h-[350px] md:min-h-[500px]">
          <GlobeComponent />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer z-10">
        <a href="#intro" className="text-gray-500 hover:text-white transition-colors duration-300 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest font-light mb-1">Scroll Down</span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}

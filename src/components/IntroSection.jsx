import React from "react";
import { FileText } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";

export default function IntroSection() {
  return (
    <section id="intro" className="relative min-h-screen lg:sticky lg:top-0 z-20 bg-black flex items-center justify-center py-24 px-6 md:px-12 lg:px-20 shadow-[0_-30px_50px_rgba(0,0,0,0.9)]">
      {/* Interactive background particle network */}
      <ParticleNetwork />

      {/* Background ambient spotlight glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] ambient-spotlight opacity-65"></div>
      <div className="absolute bottom-[10%] left-[-15%] w-[450px] h-[450px] ambient-spotlight opacity-50"></div>

      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 z-10">
        
        {/* Profile Picture Frame (Left/Center) */}
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative group">
          {/* Glowing outer shadow ring - white/gray scale */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white via-gray-300 to-white opacity-20 group-hover:opacity-85 blur-md transition duration-500"></div>
          
          {/* Main Frame (White Background) */}
          <div className="relative w-full h-full rounded-2xl bg-white border-2 border-white/30 group-hover:border-white/80 flex items-center justify-center overflow-hidden transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.45)]">
            
            {/* The profile picture rendered in grayscale styled for our tech theme */}
            <img 
              src="./profile.jpg" 
              alt="Justin Jeremia" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter grayscale" 
            />

            {/* Holographic grid scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 pointer-events-none z-10 opacity-20"></div>
            
            {/* Tech UI Corner accents inside the photo box (Stark black contrast on white background) */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-black/30"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-black/30"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-black/30"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-black/30"></div>
          </div>
        </div>

        {/* Text Biography Content (Right) */}
        <div className="flex-grow flex flex-col justify-center text-left space-y-6 md:space-y-8 max-w-2xl">
          <div className="space-y-2">
            <span className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-widest font-mono">
              [ 01 / Introduction ]
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Decoding Complexity
            </h2>
          </div>

          <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed font-light font-sans">
            <p className="border-l-4 border-white pl-4 py-1">
              Hi, my name is <strong className="text-white font-semibold">Justin Jeremia</strong>. I am a passionate Data Science student dedicated to uncovering hidden patterns within complex datasets.
            </p>
            <p className="pl-5">
              My focus lies in building robust predictive models and designing intuitive, interactive visualizations that empower strategic, data-driven decision-making across various domains.
            </p>
          </div>

          {/* Action Links including Resume */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/50 transition-all duration-300 text-sm font-semibold tracking-wide"
            >
              <FileText size={16} className="mr-2" />
              RESUME
            </a>
          </div>

          {/* Social Media Links */}
          <div className="pt-2">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-4">Connect with me</h3>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/jeremiajstin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all duration-300 group font-mono text-center"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/justin-jeremia-65882428b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/jstinjrm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all duration-300 group"
                aria-label="Instagram Profile"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://medium.com/@jeremiajstin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all duration-300 group"
                aria-label="Medium Profile"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM21 12c0 3.54-1.51 6.42-3.38 6.42S14.25 15.54 14.25 12s1.51-6.42 3.38-6.42S21 8.46 21 12zm3 0c0 3.25-.53 5.89-1.19 5.89s-1.19-2.64-1.19-5.89.53-5.89 1.19-5.89 1.19 2.64 1.19 5.89z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

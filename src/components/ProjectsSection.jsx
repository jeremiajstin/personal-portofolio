import React, { useState, useEffect } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight, Link2 } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("lenis-stopped");
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("lenis-stopped");
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("lenis-stopped");
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Research and Publication Dashboard",
      kpi: "Faculty & Study Program Performance, Funding, Publication Impact, Collaboration, Implementation",
      description: "Developed an interactive Business Intelligence dashboard to monitor the academic publication and research activities of lecturers at the Faculty of Informatics, Telkom University. Presents visualizations across 5 key performance indicator (KPI) focus areas.",
      tags: ["Business Intelligence", "Power BI", "ETL"],
      images: ["./projects/research-dashboard.png"],
      links: [
        { label: "View Power BI Dashboard", url: "https://app.powerbi.com/view?r=eyJrIjoiZTJkOWNkZjItNTRhMy00MTZjLWJkYWItNjY0NzgxYTdkZmRiIiwidCI6IjkwYWZmZTBmLWMyYTMtNDEwOC1iYjk4LTZjZWI0ZTk0ZWYxNSIsImMiOjEwfQ%3D%3D" }
      ],
      stat: "5 KPI Focus Areas",
      isPortrait: false
    },
    {
      id: 2,
      title: "Financial News Clustering Pipeline",
      kpi: "GCP BigQuery SQL Exploration, Python Clustering Models, Gradio UI & Looker Studio Dashboard",
      description: "Leverages Google's cloud ecosystem (GCP, Google Colab, Looker Studio) to perform Big Data Processing. Stores and queries datasets inside BigQuery via SQL, builds modeling pipelines in Colab/Python, deploys a Gradio UI app, and reports analytics via Looker Studio dashboards.",
      tags: ["Gradio", "BigQuery", "Google Colab", "LookerStudio"],
      images: ["./projects/financial-news-1.jpg", "./projects/financial-news-2.jpg"],
      links: [
        { label: "View Looker Studio Dashboard", url: "https://datastudio.google.com/reporting/bcba0ae7-0b9a-4798-8519-4c5fd80b312a/page/55H2F" },
        { label: "View GitHub Repository", url: "https://github.com/jeremiajstin/Financial-News-Sentiment-Analysis-Cloud-Computing-" }
      ],
      stat: "4 Integrated Platforms",
      isPortrait: false
    },
    {
      id: 3,
      title: "Digital Transformation in Blue Pacific",
      kpi: "Regional Connectivity Mapping, Proportional Access, 4G Coverage, Online Service Index",
      description: "Conducted deep data analysis on connectivity and digital governance in the Pacific region using the 'Blue Pacific 2050: Technology and Connectivity' dataset from the Pacific Dataviz Challenge. Mapped the regional distribution of digital access by visualizing proportion of internet users, 4G network coverage, and Online Service Index performance.",
      tags: ["Infographic", "Data Viz", "Geospatial Analysis"],
      images: ["./projects/blue-pacific.png"],
      links: [],
      stat: "Pacific Dataviz Challenger",
      isPortrait: true
    }
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section id="projects" className="relative min-h-screen lg:sticky lg:top-0 z-40 bg-black flex items-center justify-center py-24 px-6 md:px-12 lg:px-20 shadow-[0_-30px_50px_rgba(0,0,0,0.9)]">
      {/* Interactive background particle network */}
      <ParticleNetwork />

      {/* Background ambient spotlights */}
      <div className="absolute top-[10%] left-[-10%] w-[550px] h-[550px] ambient-spotlight opacity-60"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[550px] h-[550px] ambient-spotlight opacity-50"></div>

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center z-10 space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <span className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-widest font-mono">
            [ 03 // Showcase ]
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Advanced Data Projects
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mt-2 rounded"></div>
          <p className="text-gray-400 max-w-xl mx-auto pt-2 text-sm md:text-base font-light">
            Exploring, engineering, and visualizing complex datasets to resolve structural challenges and optimize operations.
          </p>
        </div>

        {/* Projects Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {projects.map((project) => {
            // Check if project has portrait template layout (e.g. Digital Transformation)
            if (project.isPortrait) {
              return (
                <div 
                  key={project.id} 
                  className="glass-panel group rounded-xl p-8 flex flex-col justify-between hover:scale-[1.01] duration-300 relative md:col-span-2 max-w-full"
                >
                  {/* Corner design brackets for UI feel */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-white/45"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-white/45"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-white/45"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-white/45"></div>

                  <div className="flex flex-col h-full justify-between">
                    
                    {/* Content: Detail (Left) and Gambar (Right) - Vertically Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                      
                      {/* Detail Column (Left side - vertically centered and styled) */}
                      <div className="md:col-span-3 flex flex-col justify-center text-left space-y-6 my-auto">
                        
                        {/* Title and stats grouped inside the detail column */}
                        <div className="border-b border-white/5 pb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-white duration-300">
                                {project.title}
                              </h3>
                              <p className="text-white/60 text-xs font-mono uppercase tracking-widest mt-0.5">
                                {project.stat}
                              </p>
                            </div>
                            <span className="text-gray-600 text-xs font-mono select-none">
                              // 0{project.id}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <p className="text-gray-200 text-sm md:text-base leading-relaxed font-sans font-light">
                            {project.description}
                          </p>
                          
                          {/* Merged KPI parameter list with clean typography */}
                          <div className="text-xs text-gray-400 font-sans leading-relaxed">
                            <span className="text-white font-medium block mb-1">System Parameters Analyzed:</span>
                            {project.kpi}
                          </div>
                        </div>

                        {/* Tech tags and CTA Button grouped tightly next to each other */}
                        <div className="flex flex-wrap gap-4 items-center">
                          <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag, tagIdx) => (
                              <span 
                                key={tagIdx} 
                                className="text-xs font-sans font-normal px-5 py-2 rounded-full border border-white/20 text-white hover:border-white/40 duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <button 
                            onClick={() => handleOpenModal(project)}
                            className="flex items-center text-xs font-semibold text-white uppercase tracking-wider hover:text-white hover:underline underline-offset-4 duration-300 ml-2"
                          >
                            View Detail
                            <ExternalLink size={14} className="ml-1.5" />
                          </button>
                        </div>
                      </div>

                      {/* Gambar Column (Right side) */}
                      <div className="md:col-span-2 flex items-center justify-center">
                        {project.images && project.images.length > 0 && (
                          <div 
                            onClick={() => handleOpenModal(project)}
                            className="relative w-full overflow-hidden rounded-lg bg-black/30 border border-white/5 cursor-pointer hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] duration-300"
                          >
                            <img 
                              src={project.images[0]} 
                              alt={`${project.title} Preview`}
                              className="w-full h-auto object-contain max-h-[480px] rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
                            />
                            <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 duration-300 flex items-center justify-center">
                              <span className="text-xs font-mono bg-black/80 px-3 py-1.5 rounded-full border border-white/15 text-white tracking-wider">
                                VIEW DETAIL
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            }

            // Default card layout (landscape/dashboard screenshots)
            return (
              <div 
                key={project.id} 
                className="glass-panel group rounded-xl p-8 flex flex-col justify-between hover:scale-[1.01] duration-300 relative"
              >
                {/* Corner design brackets for UI feel */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-white/45"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-white/45"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-white/45"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-white/45"></div>

                <div className="space-y-6">
                  
                  {/* Header info */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center text-left">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-white duration-300">
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-xs font-mono uppercase tracking-widest mt-0.5">
                          {project.stat}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-600 text-xs font-mono select-none">
                      // 0{project.id}
                    </span>
                  </div>

                  {/* Full Image Preview - Dynamic Size */}
                  {project.images && project.images.length > 0 && (
                    <div 
                      onClick={() => handleOpenModal(project)}
                      className="relative w-full overflow-hidden rounded-lg bg-black/30 border border-white/5 cursor-pointer hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] duration-300"
                    >
                      <img 
                        src={project.images[0]} 
                        alt={`${project.title} Preview`}
                        className="w-full h-auto object-contain max-h-[480px] rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 duration-300 flex items-center justify-center">
                        <span className="text-xs font-mono bg-black/80 px-3 py-1.5 rounded-full border border-white/15 text-white tracking-wider">
                          VIEW DETAIL
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Description & KPI merged */}
                  <div className="space-y-4 text-left">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light font-sans">
                      {project.description}
                    </p>
                    
                    <div className="text-xs text-gray-400 font-sans leading-relaxed">
                      <span className="text-white font-semibold block mb-1">System Parameters Analyzed:</span>
                      {project.kpi}
                    </div>
                  </div>

                  {/* Tech tags and CTA Button grouped tightly next to each other */}
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx} 
                          className="text-xs font-sans font-normal px-5 py-2 rounded-full border border-white/20 text-white hover:border-white/40 duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => handleOpenModal(project)}
                      className="flex items-center text-xs font-semibold text-white uppercase tracking-wider hover:text-white hover:underline underline-offset-4 duration-300 ml-2"
                    >
                      View Detail
                      <ExternalLink size={14} className="ml-1.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Dynamic Project Details Modal Overlay */}
      {selectedProject && (
        <div 
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          {/* Modal Container */}
          <div 
            data-lenis-prevent
            className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-8 max-h-[90vh]"
          >
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-zinc-950/95 backdrop-blur-sm z-10">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
                <p className="text-xs font-mono text-gray-500 uppercase mt-1 tracking-wider">{selectedProject.stat}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 md:p-8 space-y-8 overflow-y-auto">
              
              {/* Image Preview Container / Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative w-full rounded-xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center group p-4 min-h-[300px] md:min-h-[400px]">
                  <img 
                    src={selectedProject.images[activeImageIndex]} 
                    alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`} 
                    className="max-w-full max-h-[500px] object-contain rounded-lg shadow-md"
                  />
                  
                  {/* Carousel Controls if multiple images */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 p-2.5 rounded-full bg-black/70 text-white border border-white/10 hover:bg-white hover:text-black duration-200 shadow-md group-hover:scale-105"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 p-2.5 rounded-full bg-black/70 text-white border border-white/10 hover:bg-white hover:text-black duration-200 shadow-md group-hover:scale-105"
                      >
                        <ChevronRight size={22} />
                      </button>

                      {/* Carousel Indicator Dots */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/70 px-4 py-2 rounded-full border border-white/10">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full duration-200 ${
                              activeImageIndex === idx ? "bg-white scale-110" : "bg-white/30 hover:bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Detail Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                
                {/* Left Columns (Summary & Parameters - Slashes Removed) */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2.5 font-mono">Project Summary</h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light font-sans">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2.5 font-mono">Parameters Analyzed</h4>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      {selectedProject.kpi}
                    </p>
                  </div>
                </div>

                {/* Right Column (Tech stack & Redirect Links - Slashes Removed) */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 font-mono">Tools & Tech</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx} 
                          className="text-xs font-mono px-3 py-1.5 rounded bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.links && selectedProject.links.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 font-mono">Redirect Links</h4>
                      <div className="space-y-2.5">
                        {selectedProject.links.map((linkItem, idx) => (
                          <a
                            key={idx}
                            href={linkItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300 hover:text-white hover:border-white/35 hover:bg-white/10 duration-200 shadow-[0_0_15px_rgba(255,255,255,0.01)]"
                          >
                            <span className="flex items-center">
                              {linkItem.url.includes("github.com") ? (
                                <svg className="w-3.5 h-3.5 mr-2 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                              ) : (
                                <Link2 size={14} className="mr-2" />
                              )}
                              {linkItem.label}
                            </span>
                            <ExternalLink size={12} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

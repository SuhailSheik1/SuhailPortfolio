import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  ChevronRight, 
  Award,
  BookOpen,
  Briefcase,
  Terminal,
  ArrowUpRight,
  X
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILLS } from './constants';

const Nav = () => {
  return (
    <nav className="flex justify-between items-start mb-16 relative z-20">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-purple-500 mb-1">Portfolio v4.0</span>
        <span className="text-2xl font-bold tracking-tighter uppercase">{PERSONAL_INFO.name}</span>
      </div>
      <div className="flex space-x-12 items-center">
        <div className="hidden md:flex flex-col text-right">
          <span className="text-[10px] uppercase opacity-40">Current Status</span>
          <span className="text-xs font-bold uppercase">Available for hire</span>
        </div>
        <a 
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full hover:bg-purple-500 transition-colors cursor-pointer group"
        >
          <ArrowUpRight className="w-5 h-5 group-hover:block" />
        </a>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-5xl font-black uppercase tracking-tighter mb-2">{children}</h2>
    {subtitle && <p className="text-[10px] uppercase tracking-[0.4em] text-purple-500 font-bold">{subtitle}</p>}
  </div>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 overflow-x-hidden relative">
      <div className="accent-glow absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none" />
      
      <Nav />
      
      {/* Hero Section */}
      <section id="hero" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-center">
        <div className="md:col-span-5 relative">
          <div className="absolute -left-16 top-0 vertical-text text-[10px] uppercase tracking-[0.5em] opacity-20 hidden lg:block">
            {PERSONAL_INFO.education.degree.toUpperCase()}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              Suhail<br />
              <span className="mask-text">Sheik</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-sm mb-12 font-light italic">
              Chasing the frontiers of innovation
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.languages.slice(0, 5).map(lang => (
                <span key={lang} className="px-4 py-1.5 border border-white/20 text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-default">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              onClick={() => setSelectedProject(project)}
              whileHover={{ borderColor: '#a855f7', backgroundColor: 'rgba(168,85,247,0.05)' }}
              className="border border-white/10 bg-white/5 p-8 h-[240px] flex flex-col justify-between transition-all group cursor-pointer"
            >
              <div>
                <div className="text-[10px] text-purple-500 font-bold mb-3 uppercase tracking-widest">
                  0{i + 1} — {project.subtitle}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-purple-400">{project.title}</h3>
              </div>
              <p className="text-xs text-white/50 leading-relaxed line-clamp-3">
                {project.shortDescription}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                   {project.tags.slice(0, 2).map(t => <span key={t} className="text-[8px] font-mono border border-white/20 px-1 py-0.5 uppercase">{t}</span>)}
                </div>
                <span className="text-[10px] font-bold uppercase text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">Details ↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Expansion Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 pointer-events-auto"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <motion.div 
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-8 border-b border-white/10">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">{selectedProject.title}</h3>
                  <p className="text-xs text-purple-500 font-bold uppercase tracking-[0.3em] font-mono mt-1">{selectedProject.subtitle}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-full"
                >
                  <X />
                </button>
              </div>
              
              <div className="flex-grow p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-6">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Detailed Analysis</div>
                    {selectedProject.fullDescription.split('\n\n').map((para, i) => (
                      <p key={i} className="text-lg text-white/70 leading-relaxed font-light italic">
                        {para}
                      </p>
                    ))}
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-purple-500 font-bold mb-4">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(tech => (
                          <span key={tech} className="px-3 py-1 border border-white/10 text-[10px] font-mono text-white/50 hover:bg-white/5 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-4">Timeframe</div>
                      <p className="text-sm font-bold uppercase">{selectedProject.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Experience Section */}
      <section id="experience" className="mb-32">
        <SectionHeading subtitle="Professional Journey">Career Path</SectionHeading>
        <div className="space-y-1">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="group grid grid-cols-1 md:grid-cols-12 items-center py-10 border-t border-white/10 hover:bg-white/2 transition-colors px-4">
              <div className="md:col-span-2 text-[10px] uppercase tracking-widest opacity-40 font-mono mb-4 md:mb-0">
                {exp.period}
              </div>
              <div className="md:col-span-4 mb-4 md:mb-0">
                <h4 className="text-2xl font-bold uppercase tracking-tight ">{exp.company}</h4>
                <p className="text-[10px] uppercase tracking-widest text-purple-500 font-bold">{exp.role}</p>
              </div>
              <div className="md:col-span-6 text-sm text-white/50 leading-relaxed italic font-light">
                {exp.description[0]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & About */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 border-t border-white/10 pt-16">
        <div>
          <SectionHeading subtitle="Educational Base">Academics</SectionHeading>
          <div className="space-y-8">
            <div className="p-8 border border-white/10 bg-white/5 relative group">
              <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <BookOpen className="w-12 h-12 text-purple-500" />
              </div>
              <h4 className="text-xl font-bold mb-2 uppercase">{PERSONAL_INFO.education.school}</h4>
              <p className="text-purple-500 text-xs font-bold uppercase mb-4 tracking-widest">{PERSONAL_INFO.education.degree}</p>
              <div className="flex flex-col gap-1 text-sm text-white/60">
                <span>Specialization: {PERSONAL_INFO.education.specialization}</span>
                <span>GPA: {PERSONAL_INFO.education.gpa}</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {PERSONAL_INFO.education.awards.map(a => (
                  <div key={a} className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest bg-purple-500/10 text-purple-400 px-3 py-1.5 border border-purple-500/20">
                    <Award className="w-3 h-3 text-white" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
           <SectionHeading subtitle="Technical Depth">Skill Matrix</SectionHeading>
           <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-white/10">
                <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-purple-500 mb-6">Languages</h5>
                <ul className="space-y-2">
                  {SKILLS.languages.map(s => <li key={s} className="text-sm font-mono opacity-60 hover:opacity-100 transition-opacity">{s}</li>)}
                </ul>
              </div>
              <div className="p-6 border border-white/10">
                <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-purple-500 mb-6">Frameworks</h5>
                <ul className="space-y-2">
                  {SKILLS.frameworks.map(s => <li key={s} className="text-sm font-mono opacity-60 hover:opacity-100 transition-opacity">{s}</li>)}
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="mt-8 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12 pb-12 gap-8">
        <div className="flex items-center space-x-12">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase opacity-40 mb-2 tracking-[0.2em]">GitHub</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-sm font-mono hover:text-purple-500 transition-colors">@SuhailSheik1</a>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase opacity-40 mb-2 tracking-[0.2em]">Email</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-mono hover:text-purple-500 transition-colors">{PERSONAL_INFO.email}</a>
          </div>
          <div className="hidden lg:flex flex-col">
            <span className="text-[10px] uppercase opacity-40 mb-2 tracking-[0.2em]">LinkedIn</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-mono hover:text-purple-500 transition-colors">suhail-sheik</a>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-widest opacity-40 mb-4 tracking-[0.3em]">Navigation</div>
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
            <a href="#hero" className="hover:text-purple-500">Back to Top</a>
            <a href="#experience" className="hover:text-purple-500">Experience</a>
            <a href="#about" className="hover:text-purple-500">About</a>
            <button onClick={() => window.print()} className="hover:text-purple-500 cursor-pointer">Export PDF</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github, Mail, Phone, MapPin, Code2, Database,
  Wrench, Terminal, Cpu, GraduationCap, Briefcase, ChevronRight,
  MessageCircle, X, Instagram, Facebook, Linkedin, ExternalLink
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } }
};

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const buildItems = ["Websites.", "Mobile Apps.", "AI Automation Workflows."];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % buildItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030303] text-gray-200 font-sans selection:bg-emerald-500 selection:text-black">
      {/* 3D / Modern Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation / Header */}
        <header className="fixed top-0 w-full z-50 bg-[#030303]/50 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-mono text-xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Marcel</span>
              <span className="text-white"> Dev</span>
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 pt-40 pb-24 space-y-40">

          {/* Hero Section */}
          <motion.section
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="space-y-10 flex-1">
              <motion.div variants={fadeIn} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Available for work</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-300 tracking-tight">
                  Hi, I'm
                </h2>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white">
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Marcel
                  </span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-medium text-gray-400 tracking-tight max-w-3xl flex flex-wrap gap-2 items-center">
                  <span>I build</span>
                  <span className="text-emerald-400 inline-flex">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={textIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {buildItems[textIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h2>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 text-sm font-mono text-gray-300">
                <a href="https://github.com/Marcel-Dev-hash" target="_blank" rel="noreferrer" className="glass-card flex items-center gap-3 px-4 py-2.5 rounded-xl hover:text-emerald-400 cursor-pointer">
                  <Github size={16} className="text-emerald-400" />
                  Marcel-Dev-hash
                </a>
              </motion.div>
            </div>

            {/* 3D Floating Cube */}
            <motion.div
              variants={fadeIn}
              className="hidden lg:flex flex-1 justify-center items-center w-full max-w-[400px] aspect-square"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="w-64 h-64 relative"
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Inner glowing core */}
                <div className="absolute inset-0 m-auto w-32 h-32 bg-emerald-500/40 rounded-full blur-3xl animate-pulse" style={{ transform: 'translateZ(0)' }}></div>

                {/* Faces */}
                <div className="absolute inset-0 border-2 border-emerald-400/30 bg-emerald-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.2)]" style={{ transform: 'translateZ(128px)' }}>
                  <Code2 size={64} className="text-emerald-400/80" />
                </div>
                <div className="absolute inset-0 border-2 border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)]" style={{ transform: 'rotateY(180deg) translateZ(128px)' }}>
                  <Database size={64} className="text-cyan-400/80" />
                </div>
                <div className="absolute inset-0 border-2 border-purple-400/30 bg-purple-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(192,132,252,0.2)]" style={{ transform: 'rotateY(90deg) translateZ(128px)' }}>
                  <Terminal size={64} className="text-purple-400/80" />
                </div>
                <div className="absolute inset-0 border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(96,165,250,0.2)]" style={{ transform: 'rotateY(-90deg) translateZ(128px)' }}>
                  <Cpu size={64} className="text-blue-400/80" />
                </div>
                <div className="absolute inset-0 border-2 border-pink-400/30 bg-pink-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(244,114,182,0.2)]" style={{ transform: 'rotateX(90deg) translateZ(128px)' }}>
                  <Wrench size={64} className="text-pink-400/80" />
                </div>
                <div className="absolute inset-0 border-2 border-yellow-400/30 bg-yellow-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.2)]" style={{ transform: 'rotateX(-90deg) translateZ(128px)' }}>
                  <Github size={64} className="text-yellow-400/80" />
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* About / Summary */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-x-6 -inset-y-6 bg-gradient-to-r from-emerald-500/5 to-purple-500/5 blur-2xl rounded-[3rem] -z-10"></div>
            <div className="glass-card p-10 md:p-14 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-500/10 rounded-2xl">
                  <Terminal className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Professional Summary</h3>
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Hello, I'm Marcel, your developer. I'm currently studying computer science at a state university, and I'm also in my 4th year now. I have developed several projects, including websites and applications, using cross-platform technology. Additionally, I possess native programming skills, having started my journey before the advent of AI. However, I now leverage AI to expedite my project production. Most recently, I built VA Job Finder, a high-performance aggregator that automates skill-based job matching across 8+ platforms using FastAPI and specialized scrapers. My tech stack includes Python, JS, Node.JS, HTML, CSS, React, React Native, PHP, PostgreSQL, MySQL, and C++. I have also developed advanced project workflows using n8n for AI Automation, including a zero-touch scheduling ecosystem. I'm hungry to learn more and eager to tackle complex technical challenges. Thanks; hopefully this is helpful information! expertise.
              </p>
            </div>
          </motion.section>

          {/* Skills (Bento Grid) */}
          <motion.section
            id="skills"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold text-white tracking-tight">Technical Arsenal</h3>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-2xl">
                    <Code2 className="text-cyan-400" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Languages & Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'React Native', 'React', 'Python', 'HTML', 'CSS', 'FastAPI', 'BeautifulSoup4'].map(skill => (
                    <span key={skill} className="text-sm font-medium bg-white/5 px-4 py-2 rounded-xl text-gray-200 border border-white/10 shadow-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-2xl">
                    <Database className="text-purple-400" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Databases</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['PostgreSQL', 'MySQL', 'Supabase', 'Neon'].map(skill => (
                    <span key={skill} className="text-sm font-medium bg-white/5 px-4 py-2 rounded-xl text-gray-200 border border-white/10 shadow-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-500/10 rounded-2xl">
                    <Wrench className="text-emerald-400" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Tools</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Git', 'GitHub', 'VS Code', 'Local LLMs', 'n8n', 'Cloudscraper', 'PyPDF2'].map(skill => (
                    <span key={skill} className="text-sm font-medium bg-white/5 px-4 py-2 rounded-xl text-gray-200 border border-white/10 shadow-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-2xl">
                    <Briefcase className="text-orange-400" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Workflow & Practices</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Agile Methodologies', 'DevOps Practices', 'AI-Assisted Development', 'AI Automation'].map(skill => (
                    <span key={skill} className="text-sm font-medium bg-white/5 px-4 py-2 rounded-xl text-gray-200 border border-white/10 shadow-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold text-white tracking-tight">Featured Projects</h3>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1"></div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Project 0: VA Job Finder */}
              <motion.a
                href="https://va-job-finder.onrender.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.01, y: -5 }}
                className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group block cursor-pointer transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-indigo-500/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-10">
                  <div className="space-y-6 flex-1">
                    <div>
                      <span className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2 block">Creator & Lead Architect</span>
                      <div className="flex items-center justify-between">
                        <h4 className="text-4xl font-bold text-white">VA Job Finder</h4>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] md:text-xs font-mono text-indigo-300 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30 whitespace-nowrap shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                            Click me to direct to VA Job Finder
                          </span>
                          <ExternalLink className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      A specialized job-matching platform designed to bridge the gap between Virtual Assistants and global opportunities through automated parsing and real-time aggregation.
                    </p>

                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Built a scalable job aggregator that searches 8+ international platforms (Onlinejobs.ph, Hubstaff, Guru, etc.) simultaneously.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Implemented a custom skill-extraction engine reducing manual job search time by 90% via PDF/Portfolio parsing.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Optimized data freshness by engineering a date-normalization algorithm for disparate job board formats.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Ensured system stability by implementing advanced security middleware and anti-bot measures.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {['FastAPI', 'React', 'BeautifulSoup4', 'Cloudscraper', 'Modular Architecture', 'Security-First'].map(tech => (
                        <span key={tech} className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Project 1 */}
              <motion.div
                whileHover={{ scale: 1.01, y: -5 }} className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-emerald-500/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-10">
                  <div className="space-y-6 flex-1">
                    <div>
                      <span className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-2 block">Co-Creator & Frontend Dev</span>
                      <h4 className="text-4xl font-bold text-white">ED-IQ App</h4>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      A comprehensive educational platform featuring dedicated interfaces for both students and teachers to manage enrollments, lectures, assignments, and grading.
                    </p>

                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Engineered a responsive, cross-platform mobile frontend utilizing React Native and Expo.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Integrated a custom AI chatbot directly into the platform to assist users.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Collaborated to connect the frontend with a Python/FastAPI backend.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {['React Native', 'Expo', 'Python', 'FastAPI', 'AI Chatbot'].map(tech => (
                        <span key={tech} className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div whileHover={{ scale: 1.01, y: -5 }} className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-cyan-500/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-10">
                  <div className="space-y-6 flex-1">
                    <div>
                      <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase mb-2 block">Creator & Full-Stack Dev</span>
                      <h4 className="text-4xl font-bold text-white">Printify</h4>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      A full-stack printing service platform to streamline user document requests and automate print management.
                    </p>

                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Architected and developed a full-stack printing service platform.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Implemented real-time notification systems to keep users updated on their print status.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Built logic to compute and track the daily usage of bond paper for inventory purposes.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {['Full-Stack', 'Real-time Notifications', 'Inventory Logic', 'AI-Assisted'].map(tech => (
                        <span key={tech} className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div whileHover={{ scale: 1.01, y: -5 }} className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-purple-500/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-10">
                  <div className="space-y-6 flex-1">
                    <div>
                      <span className="text-sm font-mono text-purple-400 tracking-wider uppercase mb-2 block">AI Specialist & Automation Architect</span>
                      <h4 className="text-4xl font-bold text-white">AI Workflow Automation</h4>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      Advanced automation systems leveraging AI and low-code platforms to eliminate manual tasks and streamline business processes.
                    </p>

                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Designed a scheduling ecosystem integrating Telegram, Google Sheets, Gmail, and Google Calendar.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Implemented zero-touch meeting scheduling triggered by simple natural language messages.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Developed multi-step logic flows in n8n for data synchronization and automated notifications.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {['n8n', 'AI Integration', 'Automation', 'Telegram API', 'Google Workspace'].map(tech => (
                        <span key={tech} className="text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            id="education"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold text-white tracking-tight">Education</h3>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1"></div>
            </div>

            <motion.div whileHover={{ y: -5 }} className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Bachelor of Science in Computer Science</h4>
                    <p className="text-lg text-emerald-400 font-medium">President Ramon Magsaysay State University</p>
                  </div>
                </div>

                <p className="text-gray-400 font-mono">Currently 4th Year</p>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider font-mono">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-3">
                    {['Web Development', 'App Development', 'Database Management', 'Software Engineering'].map(course => (
                      <span key={course} className="text-sm font-medium bg-white/5 px-4 py-2 rounded-xl text-gray-200 border border-white/10">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-500 font-mono bg-[#030303]/80 backdrop-blur-lg">
          <p>Designed & Built by Marcel</p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </div>

      {/* Floating Contact Widget */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        <AnimatePresence>
          {isContactOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              <a href="mailto:johnmarcelaleman88@gmail.com" className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-white shadow-lg group relative">
                <span className="absolute right-14 bg-[#030303] border border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Email Me</span>
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/john-marcel-aleman-47ab08402/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-blue-500/20 hover:border-blue-500/50 transition-all text-white shadow-lg group relative">
                <span className="absolute right-14 bg-[#030303] border border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LinkedIn</span>
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com/marcel.sao.aleman" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-blue-600/20 hover:border-blue-600/50 transition-all text-white shadow-lg group relative">
                <span className="absolute right-14 bg-[#030303] border border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/marcel.dev.hash" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-pink-500/20 hover:border-pink-500/50 transition-all text-white shadow-lg group relative">
                <span className="absolute right-14 bg-[#030303] border border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/639560043330" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-green-500/20 hover:border-green-500/50 transition-all text-white shadow-lg group relative">
                <span className="absolute right-14 bg-[#030303] border border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">WhatsApp</span>
                <Phone size={20} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative group">
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all transform hover:scale-105 active:scale-95 relative z-10"
          >
            {isContactOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

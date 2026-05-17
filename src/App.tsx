import React from 'react';
import { motion } from 'motion/react';
import {
  Github, Code2, Database,
  Wrench, Terminal, Cpu, Briefcase, ChevronRight,
  MessageCircle, ExternalLink, Clock, Award, Zap, Share2, Calendar, Mail, Send,
  Linkedin, Facebook, Instagram, Phone
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const message = formData.get('message');
    const mailtoUrl = `mailto:johnmarcelaleman.techva@gmail.com?subject=Portfolio Contact Request&body=Sender Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-gray-200 font-sans selection:bg-emerald-500 selection:text-black">
      {/* 3D / Modern Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation / Header */}
        <header className="fixed top-0 w-full z-50 bg-[#030303]/50 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#home" className="font-mono text-xl font-bold tracking-tighter hover:opacity-90 transition-opacity">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Marcel</span>
              <span className="text-white"> Dev</span>
            </a>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
              <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#ai-projects" className="hover:text-emerald-400 transition-colors">Workflows</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Web/App Projects</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 pt-24 pb-24 space-y-40">

          {/* Hero Section */}
          <motion.section
            id="home"
            className="min-h-[calc(100vh-160px)] flex flex-col justify-between gap-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full flex-grow py-8 md:py-12">
              <div className="space-y-6 flex-1">
                <motion.div variants={fadeIn} className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Available for work</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.15] text-white">
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent block">
                      AI Automation Developer
                    </span>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent block">
                      & Web Developer
                    </span>
                  </h1>
                  <p className="text-lg text-gray-400 max-w-2xl leading-relaxed pt-1">
                    I engineer custom automation workflows and advanced web systems for businesses, eliminating hours of repetitive tasks, connecting business software, and building modern web applications.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="flex flex-wrap gap-4 text-sm font-medium">
                  <a href="#contact" className="relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-[#030303] font-bold tracking-wide shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                    <Mail size={16} className="text-[#030303]" />
                    Contact me
                  </a>
                </motion.div>
              </div>

              {/* 3D Floating Cube */}
              <motion.div
                variants={fadeIn}
                className="hidden lg:flex flex-1 justify-center items-center w-full max-w-[320px] aspect-square"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="w-48 h-48 relative"
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
                  <div className="absolute inset-0 m-auto w-24 h-24 bg-emerald-500/40 rounded-full blur-3xl animate-pulse" style={{ transform: 'translateZ(0)' }}></div>

                  {/* Faces */}
                  <div className="absolute inset-0 border-2 border-emerald-400/30 bg-emerald-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.2)]" style={{ transform: 'translateZ(96px)' }}>
                    <Code2 size={48} className="text-emerald-400/80" />
                  </div>
                  <div className="absolute inset-0 border-2 border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]" style={{ transform: 'rotateY(180deg) translateZ(96px)' }}>
                    <Database size={48} className="text-cyan-400/80" />
                  </div>
                  <div className="absolute inset-0 border-2 border-purple-400/30 bg-purple-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(192,132,252,0.2)]" style={{ transform: 'rotateY(90deg) translateZ(96px)' }}>
                    <Terminal size={48} className="text-purple-400/80" />
                  </div>
                  <div className="absolute inset-0 border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.2)]" style={{ transform: 'rotateY(-90deg) translateZ(96px)' }}>
                    <Cpu size={48} className="text-blue-400/80" />
                  </div>
                  <div className="absolute inset-0 border-2 border-pink-400/30 bg-pink-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(244,114,182,0.2)]" style={{ transform: 'rotateX(90deg) translateZ(96px)' }}>
                    <Wrench size={48} className="text-pink-400/80" />
                  </div>
                  <div className="absolute inset-0 border-2 border-yellow-400/30 bg-yellow-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.2)]" style={{ transform: 'rotateX(-90deg) translateZ(96px)' }}>
                    <Github size={48} className="text-yellow-400/80" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Section Bar */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8 border-t border-white/5"
            >
              {/* Stat 1: Experience */}
              <div className="glass-card p-5 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left group hover:border-emerald-500/20 transition-all duration-300">
                <div className="p-2.5 bg-emerald-500/10 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock size={18} className="text-emerald-400" />
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">1+ Year</span>
                <span className="text-xs font-semibold text-gray-300 mt-1">Dev Experience</span>
              </div>

              {/* Stat 2: Projects Completed */}
              <div className="glass-card p-5 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left group hover:border-cyan-500/20 transition-all duration-300">
                <div className="p-2.5 bg-cyan-500/10 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Code2 size={18} className="text-cyan-400" />
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">10 Projects</span>
                <span className="text-xs font-semibold text-gray-300 mt-1">Completed Projects</span>
              </div>

              {/* Stat 3: Availability */}
              <div className="glass-card p-5 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left group hover:border-indigo-500/20 transition-all duration-300">
                <div className="p-2.5 bg-indigo-500/10 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={18} className="text-indigo-400" />
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">20 Hrs/Wk</span>
                <span className="text-xs font-semibold text-gray-300 mt-1">Weekly Availability</span>
              </div>
            </motion.div>
          </motion.section>

          {/* About / Business Solutions */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[calc(100vh-160px)] flex flex-col justify-center"
          >
            <div className="absolute -inset-x-6 -inset-y-6 bg-gradient-to-r from-emerald-500/5 via-cyan-500/3 to-purple-500/5 blur-2xl rounded-[3rem] -z-10"></div>
            
            <div className="glass-card p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Column: Human Element & Social Proof (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Developing from the Philippines
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
                    Let's make your business run itself.
                  </h3>
                  
                  <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed font-normal">
                    <p>
                      Hey, I'm <strong>Marcel</strong>. While I'm finishing my Computer Science degree, my real obsession is building robust systems that eliminate manual operations for businesses worldwide.
                    </p>
                    <p>
                      I don't sell generic "AI buzzwords." I build highly optimized, secure, and concrete workflows—taking over your tedious scraping, support, and social tasks so you can focus on building your brand.
                    </p>
                  </div>
                </div>

                {/* Right Column: Custom Concrete Solutions - 2x2 Grid of Premium Card Boxes (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1: Lead Gen & Web Scraping */}
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-[#0c0c0e]/80 border border-white/5 p-6 rounded-3xl relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full group-hover:bg-cyan-500/10 transition-all duration-500"></div>
                      <div className="p-3 bg-cyan-500/10 rounded-2xl w-fit mb-4">
                        <Database className="text-cyan-400" size={22} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Web Scraping & Listing</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Bypass Cloudflare blockades to extract clean, structured leads and listings directly to your databases.
                      </p>
                    </motion.div>

                    {/* Card 2: AI Support Agent */}
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-[#0c0c0e]/80 border border-white/5 p-6 rounded-3xl relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full group-hover:bg-emerald-500/10 transition-all duration-500"></div>
                      <div className="p-3 bg-emerald-500/10 rounded-2xl w-fit mb-4">
                        <MessageCircle className="text-emerald-400" size={22} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">AI Customer Support</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Deploy semantic AI agents inside chat queues. Responds using custom business vector data to close leads in real-time.
                      </p>
                    </motion.div>

                    {/* Card 3: Social Autopilot */}
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-[#0c0c0e]/80 border border-white/5 p-6 rounded-3xl relative overflow-hidden group hover:border-purple-500/20 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full group-hover:bg-purple-500/10 transition-all duration-500"></div>
                      <div className="p-3 bg-purple-500/10 rounded-2xl w-fit mb-4">
                        <Share2 className="text-purple-400" size={22} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Social Media Autopilot</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Custom publishing pipelines that take sheet outlines, generate captions with AI, and auto-post to social media.
                      </p>
                    </motion.div>

                    {/* Card 4: Meeting Scheduler */}
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-[#0c0c0e]/80 border border-white/5 p-6 rounded-3xl relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full group-hover:bg-indigo-500/10 transition-all duration-500"></div>
                      <div className="p-3 bg-indigo-500/10 rounded-2xl w-fit mb-4">
                        <Calendar className="text-indigo-400" size={22} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Calendar & Workflows</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Intelligent meeting schedulers. Books clients, syncs timezone offsets, blocks slots, and sends instant confirmations.
                      </p>
                    </motion.div>
                  </div>
                </div>

              </div>
            </div>
          </motion.section>

          {/* Skills (Bento Grid) */}
          <motion.section
            id="skills"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="min-h-[calc(100vh-160px)] flex flex-col justify-center space-y-10"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold text-white tracking-tight">Technical Arsenal</h3>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Languages & Frameworks */}
              <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-2xl">
                    <Code2 className="text-cyan-400" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Languages & Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'React Native', 'React', 'Python'].map(skill => (
                    <span key={skill} className="text-sm font-medium bg-white/5 px-4 py-2 rounded-xl text-gray-200 border border-white/10 shadow-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>

              {/* Platforms */}
              <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-2xl">
                    <Briefcase className="text-purple-400" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Platforms</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Telegram', 'WhatsApp', 'Google Workspace', 'Slack', 'HubSpot', 'ClickUp', 'Typeform', 'Asana', 'Trello'].map(skill => (
                    <span key={skill} className="text-sm font-medium bg-white/5 px-4 py-2 rounded-xl text-gray-200 border border-white/10 shadow-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>

              {/* AI Tools */}
              <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-500/10 rounded-2xl">
                    <Cpu className="text-emerald-400" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">AI Tools</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Claude', 'ChatGPT', 'Gemini', 'Llama'].map(skill => (
                    <span key={skill} className="text-sm font-medium bg-white/5 px-4 py-2 rounded-xl text-gray-200 border border-white/10 shadow-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>

              {/* Automation Tools */}
              <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-2xl">
                    <Zap className="text-orange-400" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Automation Tools</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['n8n', 'Make', 'Zapier'].map(skill => (
                    <span key={skill} className="text-sm font-medium bg-white/5 px-4 py-2 rounded-xl text-gray-200 border border-white/10 shadow-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="ai-projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="min-h-[calc(100vh-160px)] flex flex-col justify-center space-y-10"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold text-white tracking-tight">AI Automation Workflows</h3>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1"></div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <motion.div whileHover={{ scale: 1.01, y: -5 }} className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-purple-500/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-10">
                  <div className="space-y-6 flex-1">
                    <div>
                      <h4 className="text-4xl font-bold text-white">Telegram Bot Auto-Scheduler</h4>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      A fully autonomous scheduling and booking engine integrated with Google Workspace and Telegram for zero-touch event management.
                    </p>

                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Triggers dynamically via Telegram Bot to capture client booking requests and custom user inputs.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Queries and checks Google Sheets databases in real-time to verify slots and client information.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Automatically registers, blocks, and schedules meetings in Google Calendar.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Dispatches personalized confirmation emails containing meeting invites and details via Gmail.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Loops back to Telegram to instantly notify the user with a detailed booking success confirmation.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {['n8n', 'Telegram Bot API', 'Google Sheets', 'Google Calendar', 'Gmail API', 'Workflow Automation'].map(tech => (
                        <span key={tech} className="text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project 1: Instagram Content Scraper Bot */}
              <motion.div whileHover={{ scale: 1.01, y: -5 }} className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-pink-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-pink-500/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-10">
                  <div className="space-y-6 flex-1">
                    <div>
                      <h4 className="text-4xl font-bold text-white">Instagram Content Scraper Bot</h4>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      An intelligent social media extraction system triggered directly from Telegram to parse Instagram posts, returning structured captions and hashtags within seconds.
                    </p>

                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Triggers instantly via a simple Telegram command (<code className="text-pink-300 bg-pink-500/10 px-1.5 py-0.5 rounded font-mono text-sm">/search &lt;query&gt;</code>) sent by the user.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Processes requests asynchronously through an optimized, automated n8n workflow engine.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Scrapes target Instagram profiles and hashtags to locate highly relevant media and caption content.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Extracts, isolates, and formats the post captions along with all embedded hashtags automatically.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Delivers the cleaned caption and organized hashtags directly back to the user in the Telegram chat interface.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {['n8n', 'Telegram Bot API', 'Instagram Scraper', 'Data Extraction', 'Social Media Automation'].map(tech => (
                        <span key={tech} className="text-xs font-mono text-pink-300 bg-pink-500/10 px-3 py-1.5 rounded-lg border border-pink-500/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project 2: Typeform HubSpot Lead Sync Engine */}
              <motion.div whileHover={{ scale: 1.01, y: -5 }} className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-orange-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-orange-500/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-10">
                  <div className="space-y-6 flex-1">
                    <div>
                      <h4 className="text-4xl font-bold text-white">Typeform HubSpot Lead Sync Engine</h4>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      An automated lead management scenario built on Make (formerly Integromat) that dynamically captures form submissions, synchronizes contacts to HubSpot CRM, and dispatches personalized email campaigns.
                    </p>

                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Triggers instantly upon any form submission completed on Typeform, capturing all user inputs.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Executes smart upsert logic inside HubSpot CRM to create a new contact or update details if the lead already exists.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Dispatches automated welcome emails with dynamic marketing resources and introductory content immediately to the new lead.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Built on Make (Integromat) featuring enterprise-level data mapping and real-time failure handling safeguards.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {['Make.com', 'Typeform API', 'HubSpot CRM', 'Lead Capture', 'Email Automation', 'Sales Operations'].map(tech => (
                        <span key={tech} className="text-xs font-mono text-orange-300 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project 3: Facebook Page AI Support Bot */}
              <motion.div whileHover={{ scale: 1.01, y: -5 }} className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-cyan-500/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-10">
                  <div className="space-y-6 flex-1">
                    <div>
                      <h4 className="text-4xl font-bold text-white">Facebook Page AI Support Bot</h4>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      An autonomous, AI-driven customer support assistant integrated directly with Facebook Business Pages to dynamically handle inquiries, pricing questions, and client support using custom knowledge base files.
                    </p>

                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Triggers dynamically upon receiving direct messages or client inquiries on the Facebook Business Page.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Queries a secure company knowledge base file in real-time, containing pricing schedules, FAQs, and business data.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Leverages advanced AI LLMs to draft accurate, natural, and highly contextualized answers tailored to customer queries.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-white/10 rounded-full mt-1"><ChevronRight size={12} className="text-white" /></div>
                        <span>Built on Zapier utilizing automated webhook structures, delivering 24/7 client response coverage with zero latency.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {['Zapier', 'Facebook Pages API', 'AI Assistant', 'Knowledge Base', 'Support Automation'].map(tech => (
                        <span key={tech} className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Web/App Projects */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="min-h-[calc(100vh-160px)] flex flex-col justify-center space-y-10"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold text-white tracking-tight">Web/App Projects</h3>
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
            </div>
          </motion.section>


        </main>

        {/* Footer & Contact Section */}
        <footer id="contact" className="relative border-t border-white/5 bg-[#060608] pt-24 pb-12 overflow-hidden">
          {/* Neon Background Glows */}
          <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-emerald-500/5 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
              {/* Left Column: Branding & Socials */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white tracking-tight">Let's Connect!</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                    Whether you have an automation project in mind, need a custom scraper built, or want to collaborate on web/app development, I'm always open to discussing new opportunities.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest text-gray-600">Direct Channels</h4>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.linkedin.com/in/john-marcel-aleman-47ab08402/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-500/30 transition-all text-gray-400 hover:text-blue-400 shadow-md group relative">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://facebook.com/marcel.sao.aleman" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-600/10 hover:border-blue-600/30 transition-all text-gray-400 hover:text-blue-500 shadow-md group relative">
                      <Facebook size={20} />
                    </a>
                    <a href="https://instagram.com/marcel.dev.hash" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-pink-500/10 hover:border-pink-500/30 transition-all text-gray-400 hover:text-pink-400 shadow-md group relative">
                      <Instagram size={20} />
                    </a>
                    <a href="https://wa.me/639560043330" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-green-500/10 hover:border-green-500/30 transition-all text-gray-400 hover:text-green-400 shadow-md group relative">
                      <Phone size={20} />
                    </a>
                    <a href="https://github.com/Marcel-Dev-hash" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all text-gray-400 hover:text-emerald-400 shadow-md group relative">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden bg-[#0c0c0e]/50 backdrop-blur-xl">
                  <h4 className="text-xl font-bold text-white mb-6">Send a Message</h4>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Your Email</label>
                      <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="client@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-4 pl-12 focus:border-emerald-500/50 outline-none text-white text-sm transition-all placeholder:text-gray-600 focus:bg-white/[0.08]"
                        />
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Your Message</label>
                      <div className="relative">
                        <textarea 
                          name="message"
                          required
                          placeholder="Describe your project, automation details, or business needs..."
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-4 pl-12 h-32 focus:border-emerald-500/50 outline-none text-white text-sm transition-all placeholder:text-gray-600 focus:bg-white/[0.08] resize-none"
                        />
                        <Send size={16} className="absolute left-4 top-4 text-gray-500" />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3.5 px-6 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_35px_rgba(16,185,129,0.35)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-sm"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Copyright Area */}
            <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500 font-mono">
              <p>© {new Date().getFullYear()} Marcel Dev. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>


    </div>
  );
}

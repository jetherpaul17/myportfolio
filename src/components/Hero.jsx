import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin, 
  Sparkles, 
  Check, 
  Copy, 
  FileText,
  Send,
  Globe,
  Bot
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';
import InteractiveMatrixVisualizer from './InteractiveMatrixVisualizer';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    { name: 'GitHub', icon: Github, url: PERSONAL_INFO.socials.github },
    { name: 'LinkedIn', icon: Linkedin, url: PERSONAL_INFO.socials.linkedin },
    { name: 'Instagram', icon: Instagram, url: PERSONAL_INFO.socials.instagram },
    { name: 'Facebook', icon: Facebook, url: PERSONAL_INFO.socials.facebook },
  ];

  return (
    <section id="home" className="relative pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Top HUD Status Ticker */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-5 sm:mb-6 p-2.5 sm:p-3 px-3.5 sm:px-5 rounded-2xl bg-[#0c1322]/85 border border-orange-500/20 backdrop-blur-md text-xs font-mono shadow-lg"
      >
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-orange-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">SYSTEM STATUS: ONLINE</span>
          <span className="text-gray-600 hidden sm:inline">&middot;</span>
          <span className="text-gray-300 hidden md:inline text-[11px] sm:text-xs">{PERSONAL_INFO.status}</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-gray-400 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span className="text-gray-300 hidden sm:inline">Cantilan, Surigao del Sur, PH</span>
            <span className="text-gray-300 sm:hidden">PH (GMT+8)</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-gray-400 font-mono text-[11px]">
            <Globe className="w-3.5 h-3.5 text-orange-400/80 shrink-0" />
            <span>PHT (UTC+8)</span>
          </div>
        </div>
      </motion.div>

      {/* Main Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Big Column (8 cols on desktop) */}
        <div className="lg:col-span-8 flex flex-col gap-5 justify-between">
          {/* Top Row: Greeting Card + Profile Image */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            {/* Box 1: Greeting & Dynamic Title (7 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="sm:col-span-7 bg-[#0b101d] rounded-3xl p-5 sm:p-7 md:p-8 border border-gray-800/80 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-orange-500/40 transition-all duration-300 corner-bracket"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[11px] sm:text-xs font-mono mb-3 sm:mb-4">
                  <Bot className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>VIRTUAL ASSISTANT &amp; FRONT END</span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                  Hi, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 neon-text-glow font-black">
                    Jether Paul
                  </span>
                </h1>

                {/* Animated Role Rotator */}
                <div className="mt-3 sm:mt-4 flex items-center gap-2 h-7 font-mono text-xs sm:text-sm md:text-base text-gray-300">
                  <span className="text-orange-400 font-bold">&gt;</span>
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="font-semibold text-orange-400 tracking-wide truncate"
                  >
                    {PERSONAL_INFO.roles[roleIndex]}
                  </motion.span>
                  <span className="w-2 h-4 bg-orange-500 animate-pulse shrink-0" />
                </div>
              </div>

              {/* Responsive Hero CTA Actions */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-800/80 flex flex-wrap items-center gap-2 sm:gap-2.5">
                <a
                  href="#contact"
                  onClick={() => soundFx.playClick()}
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)] flex items-center gap-1.5 group/btn cursor-pointer shrink-0"
                >
                  <span>Get in Touch</span>
                  <Send className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="#services"
                  onClick={() => soundFx.playClick()}
                  className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-gray-900 border border-orange-500/40 hover:border-orange-500 text-orange-300 hover:text-white text-xs sm:text-sm font-mono transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span>VA &amp; Skills</span>
                </a>

                <a
                  href="#resume"
                  onClick={() => soundFx.playClick()}
                  className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-gray-800/80 hover:bg-gray-800 border border-gray-700 text-gray-300 hover:text-white text-xs sm:text-sm font-mono transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <FileText className="w-3.5 h-3.5 text-orange-400" />
                  <span>Resume</span>
                </a>
              </div>
            </motion.div>

            {/* Box 2: Profile Picture in Signature Orange Container (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sm:col-span-5 bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-1 relative overflow-hidden shadow-2xl group min-h-[260px] sm:min-h-full flex flex-col justify-end"
            >
              {/* Internal card container */}
              <div className="w-full h-full relative rounded-[22px] overflow-hidden bg-gradient-to-b from-orange-500/30 to-[#0c1220] flex items-center justify-center min-h-[250px]">
                {!imageError ? (
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-orange-600/40 to-[#0c1322]">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-orange-500/20 border border-orange-400 flex items-center justify-center mb-3 text-xl sm:text-2xl font-extrabold text-orange-400">
                      JPQ
                    </div>
                    <span className="font-heading font-bold text-base sm:text-lg text-white">Jether Paul Quintana</span>
                    <span className="text-xs font-mono text-orange-300 mt-1">Virtual Assistant</span>
                  </div>
                )}

                {/* Cyber Scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Floating HUD badge */}
                <div className="absolute bottom-3 inset-x-3 bg-[#0a0f1d]/90 backdrop-blur-md border border-orange-500/30 rounded-xl p-2 sm:p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-gray-200 font-medium text-[11px] sm:text-xs">Virtual Assistant</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-orange-400">Front End Web Dev</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Roles & Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 rounded-3xl p-5 sm:p-7 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 relative overflow-hidden"
          >
            {/* Ambient pattern */}
            <div className="absolute inset-0 cyber-grid-orange opacity-20 pointer-events-none" />

            {/* Social Links Network */}
            <div className="flex items-center gap-2.5 sm:gap-3 relative z-10">
              {socials.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    onClick={() => soundFx.playClick()}
                    title={soc.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#090e1a]/90 border border-white/20 flex items-center justify-center text-gray-200 hover:text-orange-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer shrink-0"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>

            {/* Main Roles Typography */}
            <div className="text-center sm:text-right relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Virtual Assistant
              </h2>
              <p className="text-gray-950 font-bold text-base sm:text-lg md:text-xl flex items-center justify-center sm:justify-end gap-1.5">
                <span>&amp; Front End Web Developer</span>
              </p>
            </div>
          </motion.div>

          {/* Interactive Workspace Matrix & Holographic Pulse Visualizer */}
          <InteractiveMatrixVisualizer />
        </div>

        {/* Right Column (4 cols on desktop): Bio Card + Interactive Quick Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-4 bg-[#0c1220] rounded-3xl p-5 sm:p-7 md:p-8 border border-gray-800/80 shadow-2xl flex flex-col justify-between relative overflow-hidden hover:border-orange-500/40 transition-all duration-300 corner-bracket h-full"
        >
          {/* Subtle glow */}
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                ABOUT PROFILE
              </span>
              <span className="text-[11px] font-mono text-gray-400">ID: JETH-2026</span>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Skills Pills */}
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5">
              {['Virtual Assistant', 'Front End Web Dev', 'React.js', 'ClickUp', 'Canva', 'Photoshop', 'Moderation'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-[#141c2e] border border-gray-700/60 text-[10px] sm:text-[11px] font-mono text-orange-300/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Email Copy Card & Stats Grid */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-800">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#111827]/90 border border-orange-500/25 flex items-center justify-between gap-2.5 shadow-inner">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="p-2 rounded-xl bg-orange-600/20 text-orange-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Direct Email</span>
                  <span className="text-xs font-mono text-gray-200 truncate">{PERSONAL_INFO.email}</span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => soundFx.playHover()}
                title="Copy Email Address"
                className="p-2 rounded-xl bg-gray-800 hover:bg-orange-600 text-gray-300 hover:text-white transition-colors cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mt-3">
              {PERSONAL_INFO.stats.map((st, i) => (
                <div key={i} className="p-2.5 sm:p-3 rounded-2xl bg-[#111827]/60 border border-gray-800 text-center flex flex-col justify-center">
                  <div className="text-base sm:text-lg font-extrabold text-orange-400 font-heading leading-tight">{st.value}</div>
                  <div className="text-[10px] text-gray-400 font-mono truncate mt-0.5">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

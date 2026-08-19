import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Send, 
  Briefcase, 
  Layers, 
  User, 
  Sparkles, 
  Search, 
  ExternalLink, 
  FileText 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Navbar({ onOpenCommandPalette }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundEnabled, setSoundEnabled] = useState(soundFx.isEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['home', 'services', 'experiences', 'projects', 'resume', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 220) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFx.setEnabled(next);
  };

  const navItems = [
    { id: 'home', label: 'Overview', icon: User },
    { id: 'services', label: 'Services & Skills', icon: Layers },
    { id: 'experiences', label: 'Experiences', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Sparkles },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Get in Touch', icon: Send },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    soundFx.playClick();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'py-2.5 sm:py-3 bg-[#080c14]/95 backdrop-blur-xl border-orange-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
            : 'py-3 sm:py-3.5 bg-[#080c14]/80 backdrop-blur-md border-gray-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 xl:gap-6">
          {/* Left Brand Div */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 group cursor-pointer shrink-0"
            onMouseEnter={() => soundFx.playHover()}
          >
            <div className="relative shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 p-0.5 shadow-[0_0_15px_rgba(249,115,22,0.5)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <span className="font-heading font-extrabold text-orange-500 text-sm sm:text-base tracking-wider">JQ</span>
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-[#0d1322]"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base text-gray-100 group-hover:text-orange-400 transition-colors leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-orange-400/90 tracking-wider flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                <span>VA &middot; FRONT END WEB DEVELOPER</span>
              </span>
            </div>
          </a>

          {/* Middle Nav Items Div */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-[#0d1322]/90 border border-orange-500/20 rounded-full px-2 xl:px-3 py-1.5 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Utilities Div */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Quick Command Palette Trigger */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenCommandPalette();
              }}
              onMouseEnter={() => soundFx.playHover()}
              title="Command Palette (Ctrl + K / ⌘K)"
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#111928] border border-gray-800 text-gray-300 hover:text-orange-400 hover:border-orange-500/40 text-xs font-mono transition-all group cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-orange-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden xl:inline text-[11px] text-gray-400">Search</span>
              <kbd className="hidden sm:inline bg-gray-800 border border-gray-700 text-[10px] px-1.5 py-0.5 rounded text-gray-300">
                ⌘K
              </kbd>
            </button>

            {/* Audio Feedback Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute Interface Sounds' : 'Enable Interface Sounds'}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer ${
                soundEnabled
                  ? 'bg-orange-500/10 border-orange-500/40 text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.3)]'
                  : 'bg-[#111928] border-gray-800 text-gray-500 hover:text-gray-300'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Direct Hire / Connect CTA (Desktop & Tablet) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              onMouseEnter={() => soundFx.playHover()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Connect</span>
              <Send className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundFx.playSwitch();
                setIsOpen(!isOpen);
              }}
              className="p-1.5 sm:p-2 rounded-xl bg-[#111928] border border-gray-800 text-gray-300 hover:text-orange-400 lg:hidden focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile HUD Slide-Out Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] sm:top-[68px] z-40 p-3 sm:p-4 lg:hidden max-w-lg mx-auto"
          >
            <div className="bg-[#0c1220]/98 backdrop-blur-2xl border border-orange-500/25 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] neon-border-orange">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  <span className="text-xs font-mono text-orange-400 font-bold">NAVIGATION HUD</span>
                </div>
                <button
                  onClick={toggleSound}
                  className="flex items-center gap-1.5 text-xs text-gray-400 font-mono"
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-orange-400" /> : <VolumeX className="w-3.5 h-3.5" />}
                  <span>{soundEnabled ? 'FX ON' : 'FX OFF'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-orange-600/20 text-orange-400 border border-orange-500/40 font-semibold'
                          : 'text-gray-300 hover:bg-gray-800/60'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-gray-400'}`} />
                        {item.label}
                      </span>
                      {isActive && <span className="text-xs font-mono text-orange-400">ACTIVE</span>}
                    </a>
                  );
                })}
              </div>

              <div className="mt-3.5 pt-3 border-t border-gray-800/80 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-gray-800/70 border border-gray-700 text-gray-300 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5 text-orange-400" />
                  <span>Open HUD Command Palette</span>
                </button>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

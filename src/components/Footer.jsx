import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Facebook, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format to GMT+8 (PHT)
      const options = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070a11] border-t border-gray-800/80 pt-12 sm:pt-14 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6 sm:gap-8">
        {/* Top row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-gray-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 p-0.5 shadow-[0_0_12px_rgba(249,115,22,0.4)] shrink-0">
              <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center font-heading font-extrabold text-orange-500 text-base">
                JQ
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs font-mono text-orange-400/90">Virtual Assistant &amp; Front End Web Developer</p>
            </div>
          </div>

          {/* Real-time PHT Clock */}
          <div className="flex items-center gap-3 sm:gap-4 bg-[#0d1424] border border-gray-800 rounded-2xl px-3.5 sm:px-4 py-2 text-xs font-mono text-gray-300 shadow-inner">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-400">PHT (GMT+8):</span>
              <span className="text-orange-400 font-semibold">{time || '08:00:00 AM'}</span>
            </div>
          </div>

          {/* Social Network Links & Top Action */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 sm:p-2.5 rounded-xl bg-[#0f172a] border border-gray-800 text-gray-400 hover:text-white hover:border-orange-500/40 transition-colors cursor-pointer"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 sm:p-2.5 rounded-xl bg-[#0f172a] border border-gray-800 text-gray-400 hover:text-white hover:border-orange-500/40 transition-colors cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 sm:p-2.5 rounded-xl bg-[#0f172a] border border-gray-800 text-gray-400 hover:text-white hover:border-orange-500/40 transition-colors cursor-pointer"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 sm:p-2.5 rounded-xl bg-[#0f172a] border border-gray-800 text-gray-400 hover:text-white hover:border-orange-500/40 transition-colors cursor-pointer"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="#resume"
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 sm:p-2.5 rounded-xl bg-[#0f172a] border border-orange-500/30 text-orange-400 hover:text-white hover:bg-orange-600/30 transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 sm:p-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)] transition-all cursor-pointer ml-1"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-gray-500 text-center sm:text-left">
          <p>
            &copy; 2026 <span className="text-gray-300 font-semibold">{PERSONAL_INFO.name}</span>. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5">
            <span className="text-orange-500 font-semibold">Virtual Assistant &middot; Front End Web Developer</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="text-gray-400">Crafted with modern React &amp; Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

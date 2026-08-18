import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Cake, 
  Sparkles, 
  Copy, 
  Check, 
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function InteractiveMatrixVisualizer() {
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const telemetryLogs = [
    `📱 Direct Mobile: ${PERSONAL_INFO.formattedPhone || '+63 915 751 1119'}`,
    `🎂 Birthday: ${PERSONAL_INFO.birthday || 'September 11, 1999'}`,
    `⚡ Proficient Tools: Canva, HTML5, CSS3, JavaScript, React.js, HubSpot, ClickUp`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % telemetryLogs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [telemetryLogs.length]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setMousePos({ x, y });
  };

  const handleCopyPhone = (e) => {
    e.stopPropagation();
    soundFx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.phone || '+639157511119');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  // Main proficient tools requested by user (no percentages, clean and minimal)
  const mainTools = [
    { name: 'Canva', color: '#06b6d4' },
    { name: 'HTML5', color: '#f97316' },
    { name: 'CSS3', color: '#38bdf8' },
    { name: 'JavaScript', color: '#facc15' },
    { name: 'React.js', color: '#61dafb' },
    { name: 'HubSpot', color: '#ff7a59' },
    { name: 'ClickUp', color: '#a855f7' },
  ];

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        soundFx.playHover();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="bg-[#0b101e]/90 border border-gray-800/90 hover:border-orange-500/40 rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 shadow-xl relative overflow-hidden transition-all duration-300 corner-bracket"
    >
      {/* Subtle ambient lighting */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-amber-500/5 to-cyan-500/5 pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-3">
        {/* Top Mini HUD: Mobile + Birthday + Equalizer */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5">
          {/* Quick Contact & Birthday Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Mobile Pill */}
            <div
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#0e1526] border border-orange-500/30 hover:border-orange-500 text-[11px] font-mono text-gray-200 cursor-pointer group transition-all"
              title="Click to copy mobile number"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span className="font-semibold text-gray-100 group-hover:text-orange-400 transition-colors">
                {PERSONAL_INFO.formattedPhone || '+63 915 751 1119'}
              </span>
              <span className="p-0.5 rounded bg-gray-800/80 text-gray-400 group-hover:text-orange-400 transition-colors ml-0.5">
                {copiedPhone ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
              </span>
            </div>

            {/* Birthday Pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#0e1526] border border-gray-800 text-[11px] font-mono text-gray-300">
              <Cake className="w-3 h-3 text-amber-400" />
              <span>{PERSONAL_INFO.birthday || 'Sept 11, 1999'}</span>
            </div>
          </div>

          {/* Mini Live Frequency Equalizer */}
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-gray-400 bg-[#070b14] px-2.5 py-1 rounded-xl border border-gray-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-300">CORE HUD</span>
            <div className="flex items-end gap-0.5 h-3 pl-1.5 border-l border-gray-800">
              {[40, 75, 55, 90, 60, 80, 50].map((height, i) => (
                <motion.span
                  key={i}
                  animate={{
                    height: isHovered
                      ? [`${Math.max(20, height * 0.4)}%`, `${height}%`, `${Math.min(100, height * 1.2)}%`]
                      : [`${height * 0.5}%`, `${height}%`, `${height * 0.7}%`],
                  }}
                  transition={{
                    duration: 0.4 + (i % 3) * 0.15,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  className={`w-0.5 rounded-full ${
                    i % 2 === 0 ? 'bg-orange-500' : 'bg-cyan-400'
                  }`}
                  style={{ minHeight: '2px' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Main Tools Chips Row (No percentages, streamlined) */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-800/80">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-gray-400 shrink-0">
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span>MAIN TOOLS:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {mainTools.map((tool) => (
              <span
                key={tool.name}
                onMouseEnter={() => soundFx.playHover()}
                className="px-2 py-0.5 rounded-lg bg-[#0e1628] hover:bg-[#142038] border border-gray-800 hover:border-orange-500/40 text-[10px] sm:text-[11px] font-mono text-gray-200 flex items-center gap-1.5 transition-all shadow-xs cursor-default"
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full shrink-0" 
                  style={{ backgroundColor: tool.color }} 
                />
                <span className="font-medium">{tool.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

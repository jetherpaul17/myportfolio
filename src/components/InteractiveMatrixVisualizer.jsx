import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Activity, 
  Cpu, 
  Layers, 
  Sparkles, 
  Code2, 
  Bot, 
  Gauge, 
  ShieldCheck 
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function InteractiveMatrixVisualizer() {
  const [pulseCount, setPulseCount] = useState(0);
  const [activeMetricIndex, setActiveMetricIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const telemetryLogs = [
    'SYS.CORE: Virtual Assistant & Front End Engine Active',
    'RENDER.PIPELINE: React + Tailwind UI at 60 FPS',
    'WORKFLOW.AUTOMATION: Operations, Canva & Admin Sync',
    'METRICS.ANALYTICS: Task Precision & Delivery Rate 100%',
    'COMMUNICATION: Instant Telegram Dispatch Gateway Online',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetricIndex((prev) => (prev + 1) % telemetryLogs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [telemetryLogs.length]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleTriggerPulse = () => {
    soundFx.playSuccess();
    setPulseCount((prev) => prev + 1);
  };

  const nodes = [
    { label: 'Virtual Assistant', icon: Bot, color: '#f97316' },
    { label: 'Front End Dev', icon: Code2, color: '#38bdf8' },
    { label: 'Automation', icon: Zap, color: '#fbbf24' },
    { label: 'Quality Assurance', icon: ShieldCheck, color: '#34d399' },
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
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-[#0b101e]/80 border border-gray-800/90 hover:border-orange-500/40 rounded-2xl p-3 sm:p-4 shadow-lg relative overflow-hidden transition-all duration-300 corner-bracket"
    >
      {/* Background Subtle Gradient Mesh */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-amber-500/5 to-cyan-500/5 pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
        }}
      />
      <div className="absolute inset-0 cyber-grid-orange opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Left Side: Compact Mini Hologram Core */}
        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-between md:justify-start">
          <div className="flex items-center gap-3">
            {/* Small Orbital Radar Orb (20 x 20 = 80px) */}
            <div
              className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-orange-500/20 flex items-center justify-center shrink-0"
              style={{
                transform: `perspective(400px) rotateX(${mousePos.y * 0.8}deg) rotateY(${mousePos.x * 0.8}deg)`,
                transition: 'transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1)',
              }}
            >
              {/* Spinning Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-orange-500/30 animate-spin" style={{ animationDuration: '14s' }} />

              {/* Sweeping Radar Beam */}
              <div 
                className="absolute inset-0 rounded-full overflow-hidden pointer-events-none animate-spin"
                style={{ animationDuration: '5s' }}
              >
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-orange-500/30 to-transparent origin-bottom-right rounded-tl-full" />
              </div>

              {/* Mini Reactor Center */}
              <motion.div
                key={pulseCount}
                animate={{
                  scale: [1, 1.18, 1],
                  boxShadow: [
                    '0 0 8px rgba(249,115,22,0.3)',
                    '0 0 18px rgba(249,115,22,0.7)',
                    '0 0 8px rgba(249,115,22,0.3)',
                  ],
                }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform"
                onClick={handleTriggerPulse}
                title="Pulse Core"
              >
                <Cpu className="w-4 h-4 text-white animate-pulse" />
              </motion.div>
            </div>

            {/* Matrix Status Info */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-orange-400">
                <Activity className="w-3 h-3 text-orange-400 animate-pulse" />
                <span>WORKSPACE MATRIX</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 text-[10px] font-mono text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Virtual Assistant &amp; Front End</span>
              </div>
            </div>
          </div>

          {/* Pulse Button (Mobile & Desktop) */}
          <button
            onClick={handleTriggerPulse}
            className="px-2 py-1 rounded-lg bg-[#111728] hover:bg-orange-500/20 border border-gray-800 hover:border-orange-500/40 text-orange-300 text-[10px] font-mono flex items-center gap-1 transition-all cursor-pointer shrink-0"
            title="Click to pulse energy reactor"
          >
            <Sparkles className="w-2.5 h-2.5 text-orange-400" />
            <span>Pulse</span>
          </button>
        </div>

        {/* Center / Right: Live Signal Flow Waveform & Ticker */}
        <div className="flex-1 w-full flex flex-col justify-center gap-1.5 min-w-0">
          {/* Signal Stream bar */}
          <div className="px-3 py-1.5 rounded-xl bg-[#090d18] border border-gray-800/80 flex items-center justify-between gap-3">
            {/* Live Ticker */}
            <div className="flex items-center gap-1.5 min-w-0 flex-1 text-[10px] sm:text-[11px] font-mono text-gray-300">
              <span className="text-orange-400 font-bold">&gt;</span>
              <motion.span
                key={activeMetricIndex}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                className="truncate"
              >
                {telemetryLogs[activeMetricIndex]}
              </motion.span>
            </div>

            {/* Mini Equalizer Frequency Bars */}
            <div className="flex items-end gap-0.5 h-4 shrink-0 pl-2 border-l border-gray-800">
              {[35, 65, 45, 90, 55, 80, 40, 75, 50, 85].map((height, i) => (
                <motion.span
                  key={i}
                  animate={{
                    height: isHovered
                      ? [`${Math.max(15, height * 0.4)}%`, `${Math.min(100, height * 1.15)}%`, `${height}%`]
                      : [`${height * 0.5}%`, `${height}%`, `${height * 0.6}%`],
                  }}
                  transition={{
                    duration: 0.5 + (i % 3) * 0.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  className={`w-0.5 rounded-full ${
                    i % 3 === 0
                      ? 'bg-orange-500'
                      : i % 3 === 1
                      ? 'bg-amber-400'
                      : 'bg-cyan-400'
                  }`}
                  style={{ minHeight: '3px' }}
                />
              ))}
            </div>
          </div>

          {/* Quick Mini Nodes Row */}
          <div className="hidden sm:flex items-center justify-between gap-2 px-1 text-[9px] font-mono text-gray-400">
            <div className="flex items-center gap-3">
              {nodes.map((n) => {
                const Icon = n.icon;
                return (
                  <span key={n.label} className="flex items-center gap-1 text-gray-400">
                    <Icon className="w-2.5 h-2.5" style={{ color: n.color }} />
                    <span>{n.label}</span>
                  </span>
                );
              })}
            </div>

            <div className="flex items-center gap-1 text-emerald-400 font-semibold">
              <Gauge className="w-2.5 h-2.5" />
              <span>12ms</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

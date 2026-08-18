import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Building } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function ExperiencesSection() {
  const [expandedId, setExpandedId] = useState(EXPERIENCES[0]?.id || null);

  const toggleExpand = (id) => {
    soundFx.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experiences" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Professional <span className="text-orange-500 neon-text-glow">Experiences</span>
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
          A track record of high-output operational excellence, technical versatility, and reliable execution.
        </p>
      </div>

      {/* Futuristic Cybernetic Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central / Left glowing timeline line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 sm:-translate-x-1/2 bg-gradient-to-b from-orange-500 via-amber-500/50 to-orange-600/20 shadow-[0_0_12px_rgba(249,115,22,0.6)]" />

        <div className="space-y-8 sm:space-y-12">
          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center ${
                  isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'
                } flex-row pl-10 sm:pl-0 sm:justify-between`}
              >
                {/* Central Timeline Node */}
                <div
                  className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#080c14] border-2 border-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.8)] z-20 cursor-pointer"
                  onClick={() => toggleExpand(exp.id)}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
                </div>

                {/* Experience Card Content */}
                <div className="w-full sm:w-[45%] group">
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`cyber-card p-5 sm:p-6 rounded-2xl bg-[#0c1220]/95 border transition-all duration-300 cursor-pointer shadow-xl ${
                      isExpanded
                        ? 'border-orange-500/60 shadow-[0_0_25px_rgba(249,115,22,0.25)] ring-1 ring-orange-500/30'
                        : 'border-gray-800/80 hover:border-orange-500/40'
                    }`}
                  >
                    {/* Header: Date + Role */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/25 text-[11px] font-mono text-orange-400">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="text-[11px] font-mono text-gray-500">{exp.type}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors flex items-center justify-between">
                      <span>{exp.role}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-orange-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </h3>

                    {exp.company && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mt-1 mb-2">
                        <Building className="w-3 h-3 text-orange-500/70" />
                        <span>{exp.company}</span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2">
                      {exp.description}
                    </p>

                    {/* Expandable Key Highlights */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-800/80 space-y-2"
                      >
                        <h4 className="text-[11px] font-mono text-orange-400 uppercase tracking-wider">
                          Key Achievements &amp; Highlights
                        </h4>
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}

                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {exp.skills.map((s) => (
                            <span
                              key={s}
                              className="px-2 py-0.5 rounded-md bg-[#131b2e] border border-gray-700/60 text-[10px] font-mono text-gray-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Empty balancing box for desktop grid alignment */}
                <div className="hidden sm:block sm:w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Code2, 
  ShieldCheck, 
  Headphones, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  Layers, 
  Cpu
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('va');
  const [toolSearch, setToolSearch] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  const currentCategory = SERVICES_DATA.find((c) => c.id === activeTab) || SERVICES_DATA[0];

  // Extract unique subcategories from currentCategory tools
  const subCategories = ['All', ...Array.from(new Set(currentCategory.tools.map((t) => t.category)))];

  const filteredTools = currentCategory.tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(toolSearch.toLowerCase()) ||
                          tool.category.toLowerCase().includes(toolSearch.toLowerCase()) ||
                          (tool.description && tool.description.toLowerCase().includes(toolSearch.toLowerCase()));
    const matchesSubCategory = selectedSubCategory === 'All' || tool.category === selectedSubCategory;
    return matchesSearch && matchesSubCategory;
  });

  const tabIcons = {
    va: Bot,
    frontend: Code2,
    moderation: ShieldCheck,
    customer: Headphones,
  };

  const handleTabChange = (id) => {
    soundFx.playSwitch();
    setActiveTab(id);
    setToolSearch('');
    setSelectedSubCategory('All');
  };

  return (
    <section id="services" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>CAPABILITIES &amp; TOOLCHAIN</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Services &amp; <span className="text-orange-500 neon-text-glow">Expertise</span>
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
          Specialized in Virtual Assistance, Operational Workflows, Creative Media, and Modern Front End Web Development.
        </p>
      </div>

      {/* Futuristic Tab Switcher */}
      <div className="flex justify-center mb-8 sm:mb-10">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#0c1322]/90 border border-gray-800 shadow-2xl backdrop-blur-xl max-w-full overflow-x-auto no-scrollbar gap-1.5">
          {SERVICES_DATA.map((tab) => {
            const Icon = tabIcons[tab.id] || Layers;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.5)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-orange-400'}`} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Service Content Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="bg-[#0b101e] border border-gray-800/90 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden corner-bracket"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-gray-800 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-2 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentCategory.tagline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {currentCategory.label}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  {currentCategory.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 border-t border-gray-800/60 flex items-center gap-3 text-xs font-mono text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Capability &middot; Available for Hire</span>
              </div>
            </div>

            {/* Capability Checklist */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                CORE DELIVERABLES &amp; SPECIALTIES
              </h4>
              <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
                {currentCategory.bulletPoints.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-[#101728]/70 border border-gray-800/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-200">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies Explorer */}
          <div className="mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-orange-400" />
                  <span>Tools, Software &amp; Platforms</span>
                </h4>
                <p className="text-xs text-gray-400 font-mono mt-0.5">
                  SHOWING {filteredTools.length} OF {currentCategory.tools.length} ACTIVE TOOLS
                </p>
              </div>

              {/* Search input & category filter */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Search box */}
                <div className="relative min-w-[160px] sm:min-w-[180px] flex-1 sm:flex-initial">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={toolSearch}
                    onChange={(e) => setToolSearch(e.target.value)}
                    placeholder="Search tools..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#101728] border border-gray-800 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 font-mono"
                  />
                </div>

                {/* Subcategory filter pills */}
                {subCategories.length > 2 && (
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
                    {subCategories.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => {
                          soundFx.playClick();
                          setSelectedSubCategory(sub);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                          selectedSubCategory === sub
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40 font-semibold'
                            : 'bg-[#101728] text-gray-400 hover:text-gray-300 border border-gray-800'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
              {filteredTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.02 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="cyber-card p-3 sm:p-4 rounded-2xl bg-[#0e1526]/80 border border-gray-800/80 hover:border-orange-500/50 flex flex-col items-center justify-between text-center group cursor-pointer min-h-[130px] sm:min-h-[140px]"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-transform group-hover:scale-110 shadow-lg relative shrink-0"
                    style={{ backgroundColor: `${tool.color}15`, borderColor: `${tool.color}40` }}
                  >
                    <div
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full absolute -top-1 -right-1"
                      style={{ backgroundColor: tool.color, boxShadow: `0 0 8px ${tool.color}` }}
                    />
                    <span
                      className="text-sm sm:text-base font-extrabold font-mono"
                      style={{ color: tool.color }}
                    >
                      {tool.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>

                  <div className="w-full">
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors block truncate">
                      {tool.name}
                    </span>

                    <span className="text-[10px] font-mono text-gray-500 block mt-0.5">
                      {tool.category}
                    </span>
                  </div>

                  {tool.description && (
                    <p className="text-[10px] sm:text-[11px] text-gray-400 mt-1.5 sm:mt-2 line-clamp-2 leading-tight w-full">
                      {tool.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12 text-gray-500 font-mono text-xs">
                No tools found matching "{toolSearch}".
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

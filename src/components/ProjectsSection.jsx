import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Maximize2, 
  X 
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Graphic Design', 'Web Design', 'Others'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-orange-500 neon-text-glow">Projects</span>
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
          Frontend interfaces, graphic designs, and other creative works.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-8 sm:mb-10">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#0c1322]/90 border border-gray-800 backdrop-blur-md gap-1 max-w-full overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setActiveFilter(cat);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`relative px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === cat
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {activeFilter === cat && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-orange-600 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="cyber-card rounded-3xl bg-[#0c1220]/90 border border-gray-800/80 overflow-hidden flex flex-col justify-between group shadow-xl hover:border-orange-500/50 transition-all duration-300 h-full"
          >
            <div>
              {/* Media Preview Container (Video / Image) */}
              <div className="relative w-full aspect-[16/10] bg-[#080c14] overflow-hidden border-b border-gray-800">
                {project.videoSrc ? (
                  <video
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Cyber Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-lg bg-[#080c14]/85 backdrop-blur-md border border-orange-500/30 text-[11px] font-mono text-orange-400 font-medium">
                  {project.category}
                </div>

                {/* Quick inspect button */}
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedProject(project);
                  }}
                  title="Expand Details"
                  className="absolute top-3.5 right-3.5 p-2 rounded-lg bg-[#080c14]/85 backdrop-blur-md border border-gray-700 text-gray-300 hover:text-white hover:border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-md bg-orange-500/10 border border-orange-500/30 text-[10px] font-mono text-orange-400 shrink-0">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#111827] border border-gray-800 text-[10px] font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer / Action Links */}
            <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-2.5 sm:gap-3 border-t border-gray-800/60 mt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="flex-1 py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
              >
                <span>Open Project</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="
                mt-10
                bg-[#0b101e] border border-orange-500/40 rounded-3xl 
                w-full 
                max-h-[85vh] 
                overflow-y-auto 
                p-5 sm:p-8 shadow-2xl relative

                max-w-md      /* mobile */
                sm:max-w-lg   /* small screens */
                md:max-w-xl   /* tablets */
                lg:max-w-2xl  /* desktops */
                xl:max-w-3xl  /* large desktops */
              "
            >

              <button
                onClick={() => {
                  soundFx.playClick();
                  setSelectedProject(null); 
                }}
                className="absolute top-4 right-4 p-2 rounded-xl bg-gray-800 text-gray-400 hover:text-white border border-gray-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black mb-5 border border-gray-800">
                {selectedProject.videoSrc ? (
                  <video
                    src={selectedProject.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedProject.imageSrc}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-orange-500/10 border border-orange-500/30 text-xs font-mono text-orange-400">
                  {selectedProject.category}
                </span>
                {selectedProject.metrics && (
                  <span className="text-xs font-mono text-gray-400">
                    &middot; {selectedProject.metrics}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{selectedProject.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5 sm:mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#141c2e] border border-gray-700 text-xs font-mono text-orange-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.4)] cursor-pointer"
                >
                  <span>Open Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

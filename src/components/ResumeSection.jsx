import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  ExternalLink, 
  Copy, 
  Check, 
  Award, 
  Sparkles, 
  Eye, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import { RESUME_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function ResumeSection() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  const handleCopyLink = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(RESUME_DATA.driveUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="resume" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>CURRICULUM VITAE &amp; CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Official <span className="text-orange-500 neon-text-glow">Resume</span>
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
          Access my full professional resume, verified skill sets, and career credentials.
        </p>
      </div>

      {/* Control Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#0c1322]/90 border border-gray-800 p-3 sm:p-4 rounded-3xl shadow-xl backdrop-blur-md">
        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-[#080c14] p-1.5 rounded-2xl border border-gray-800 w-full sm:w-auto">
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('preview');
            }}
            className={`flex-1 sm:flex-initial px-3.5 sm:px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-orange-600 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Document Preview</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('breakdown');
            }}
            className={`flex-1 sm:flex-initial px-3.5 sm:px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
              activeTab === 'breakdown'
                ? 'bg-orange-600 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Credentials Overview</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full sm:w-auto justify-end">
          <button
            onClick={handleCopyLink}
            onMouseEnter={() => soundFx.playHover()}
            title="Copy Google Drive Resume Link"
            className="flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gray-900 border border-gray-700 hover:border-orange-500/50 text-gray-300 hover:text-white text-xs font-mono transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-orange-400" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <a
            href={RESUME_DATA.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="flex-1 sm:flex-initial px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-1.5 sm:gap-2 group/btn cursor-pointer"
          >
            <span>Open Google Drive</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main Resume Display Area */}
      <AnimatePresence mode="wait">
        {activeTab === 'preview' ? (
          <motion.div
            key="preview-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="cyber-card rounded-3xl bg-[#0b101e] border border-gray-800/90 shadow-2xl overflow-hidden corner-bracket"
          >
            {/* Document Header Bar */}
            <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-[#0e1526] border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-xl bg-orange-500/10 text-orange-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-gray-200">{RESUME_DATA.fileName}</h3>
                  <span className="text-[10px] font-mono text-gray-500">Google Drive Document Viewer &middot; PDF Format</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={RESUME_DATA.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-[11px] font-mono text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Drive Iframe Viewer with responsive height */}
            <div className="relative w-full h-[520px] sm:h-[680px] md:h-[800px] bg-[#070a12] flex items-center justify-center">
              <iframe
                src={RESUME_DATA.embedUrl}
                className="w-full h-full border-0"
                title="Jether Paul T. Quintana Resume Google Drive Preview"
                allow="autoplay"
              />

              {/* Verified badge */}
              <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-auto sm:right-4 z-10 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-2xl bg-[#0b101e]/95 border border-orange-500/30 backdrop-blur-md shadow-2xl flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-gray-300 font-medium text-[11px] sm:text-xs">Drive Link Verified</span>
                </div>
                <a
                  href={RESUME_DATA.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-3 py-1 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-[10px] sm:text-[11px] flex items-center gap-1 cursor-pointer"
                >
                  <span>Direct View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="breakdown-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch"
          >
            {/* Left Column: Summary & Certifications (6 cols) */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 flex flex-col justify-between">
              {/* Executive Summary Card */}
              <div className="cyber-card p-5 sm:p-7 md:p-8 rounded-3xl bg-[#0b101e] border border-gray-800/90 shadow-xl corner-bracket">
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-3 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EXECUTIVE SUMMARY</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  {RESUME_DATA.summary}
                </p>
                <div className="mt-5 sm:mt-6 pt-4 border-t border-gray-800/80 flex flex-wrap gap-2 text-xs font-mono text-gray-400">
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#111827] border border-gray-700/60 text-orange-300 text-[11px]">
                    Location: {PERSONAL_INFO.location}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#111827] border border-gray-700/60 text-orange-300 text-[11px]">
                    Contact: {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              {/* Certifications & Training */}
              <div className="cyber-card p-5 sm:p-7 md:p-8 rounded-3xl bg-[#0b101e] border border-gray-800/90 shadow-xl corner-bracket">
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-4 uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>CERTIFICATIONS &amp; TRAININGS</span>
                </div>

                <div className="space-y-2.5">
                  {RESUME_DATA.certificationsAndTraining.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#0f172a]/60 border border-gray-800/60">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Core Competencies Matrix (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              {/* Competencies Matrix */}
              <div className="cyber-card p-5 sm:p-7 md:p-8 rounded-3xl bg-[#0b101e] border border-gray-800/90 shadow-xl corner-bracket h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-4 uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>CORE COMPETENCIES</span>
                  </div>

                  <div className="space-y-3.5 sm:space-y-4">
                    {RESUME_DATA.coreCompetencies.map((comp, idx) => (
                      <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-[#0f172a]/60 border border-gray-800">
                        <h5 className="text-xs font-mono font-bold text-orange-400 uppercase mb-2">
                          {comp.title}
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {comp.items.map((item, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-[#141d30] border border-gray-700/60 text-[10px] sm:text-[11px] text-gray-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Verified Credentials</span>
                  <a
                    href={RESUME_DATA.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View full PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Layers, 
  Briefcase, 
  Sparkles, 
  Send, 
  Github, 
  Linkedin, 
  Mail, 
  X, 
  ArrowRight,
  ExternalLink,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, RESUME_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          soundFx.playClick();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const actions = [
    {
      id: 'home',
      title: 'Navigate to Overview',
      subtitle: 'Hero, introduction and summary statistics',
      icon: Sparkles,
      action: () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'services',
      title: 'View Services & Tech Stack',
      subtitle: 'Virtual assistance, operational tools, and front end capabilities',
      icon: Layers,
      action: () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'experiences',
      title: 'Browse Experiences',
      subtitle: 'Career milestones, moderation & customer support roles',
      icon: Briefcase,
      action: () => {
        document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'projects',
      title: 'Explore Projects',
      subtitle: 'Cinecast, Philbound.ph, and web portfolio applications',
      icon: Sparkles,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'resume',
      title: 'View Official Resume',
      subtitle: 'Curriculum vitae, educational history, & credentials',
      icon: FileText,
      action: () => {
        document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'resume-drive',
      title: 'Open Google Drive Resume',
      subtitle: 'Direct link to Google Drive document preview',
      icon: ExternalLink,
      action: () => {
        window.open(RESUME_DATA.driveUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'contact',
      title: 'Send Direct Message',
      subtitle: 'Live Telegram & Email dispatch gateway',
      icon: Send,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      subtitle: PERSONAL_INFO.socials.github,
      icon: Github,
      action: () => {
        window.open(PERSONAL_INFO.socials.github, '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: PERSONAL_INFO.socials.linkedin,
      icon: Linkedin,
      action: () => {
        window.open(PERSONAL_INFO.socials.linkedin, '_blank');
        onClose();
      },
    },
    {
      id: 'email',
      title: 'Copy Direct Email Address',
      subtitle: PERSONAL_INFO.email,
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        soundFx.playSuccess();
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-xl bg-[#0b101e] border border-orange-500/30 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-gray-800 flex items-center gap-3">
              <Search className="w-5 h-5 text-orange-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent border-none text-gray-100 placeholder-gray-500 focus:outline-none text-sm font-mono"
              />
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="p-2 max-h-80 overflow-y-auto space-y-1">
              {filtered.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundFx.playClick();
                      item.action();
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full p-3 rounded-2xl flex items-center justify-between text-left hover:bg-orange-500/10 hover:border-orange-500/30 border border-transparent transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#121a2d] border border-gray-800 text-orange-400 group-hover:border-orange-500/40 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-200 group-hover:text-orange-400">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-gray-500 font-mono">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                );
              })}

              {filtered.length === 0 && (
                <div className="p-8 text-center text-xs font-mono text-gray-500">
                  No commands found matching "{query}".
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-[#080c14] border-t border-gray-800 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span>Navigation HUD &middot; Jether Paul Quintana</span>
              <kbd className="bg-gray-800 px-2 py-0.5 rounded text-gray-400">ESC to close</kbd>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

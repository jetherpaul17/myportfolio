import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Copy,
  Check,
  Bot,
  Phone,
  Cake
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.phone || '+639157511119');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    soundFx.playClick();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please complete all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // 1. Dispatch real-time alert via Telegram Bot API
      const telegramMessage = `🚀 *NEW PORTFOLIO INQUIRY RECEIVED*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
✉️ *Email:* ${formData.email}
📌 *Subject:* ${formData.subject || 'General Inquiry'}
📝 *Message:*
${formData.message}
━━━━━━━━━━━━━━━━━━━━
⏰ *Time:* ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })} PHT`;

      const telegramUrl = `https://api.telegram.org/bot${PERSONAL_INFO.telegramBotToken}/sendMessage`;
      
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: PERSONAL_INFO.telegramChatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        soundFx.playSuccess();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F97316', '#FBBF24', '#38BDF8', '#34D399'],
        });

        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback email link trigger if Telegram API is rate-limited
        throw new Error('Direct Telegram gateway busy. Launching client mailer...');
      }
    } catch (err) {
      console.error(err);
      // Construct mailto link fallback
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;

      setStatus({
        submitting: false,
        success: true,
        error: 'Telegram dispatch routed to direct mail client.',
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
          <Send className="w-3.5 h-3.5" />
          <span>INITIALIZE CONTACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something <span className="text-orange-500 neon-text-glow">Extraordinary</span>
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
          Need a dedicated virtual assistant, front end web development, or operational support? Let's connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Side: Direct Contact Details & Availability (5 cols) */}
        <div className="lg:col-span-5 space-y-5 sm:space-y-6 flex flex-col justify-between">
          {/* Status & Availability Card */}
          <div className="cyber-card p-5 sm:p-7 md:p-8 rounded-3xl bg-[#0b101e] border border-gray-800/90 shadow-xl corner-bracket">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <h3 className="text-base font-bold text-white">Current Availability</h3>
                <p className="text-xs font-mono text-emerald-400">Open for Contracts &amp; Roles</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5 sm:mb-6">
              I'm actively taking on new virtual assistant partnerships, front end web development projects, and remote opportunities.
            </p>

            <div className="space-y-2.5 sm:space-y-3 border-t border-gray-800/80 pt-5 sm:pt-6 text-xs font-mono">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#101728] border border-gray-800 gap-2">
                <div className="flex items-center gap-2 text-gray-300 shrink-0">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Primary:</span>
                </div>
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-orange-300 font-semibold truncate text-[11px] sm:text-xs">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-gray-800 hover:bg-orange-600 text-gray-300 hover:text-white cursor-pointer shrink-0"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#101728] border border-gray-800 gap-2">
                <div className="flex items-center gap-2 text-gray-300 shrink-0">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Mobile:</span>
                </div>
                <div className="flex items-center gap-2 overflow-hidden">
                  <a 
                    href={`tel:${PERSONAL_INFO.phone || '+639157511119'}`}
                    className="text-orange-300 hover:text-white font-semibold truncate text-[11px] sm:text-xs transition-colors"
                  >
                    {PERSONAL_INFO.formattedPhone || '+63 915 751 1119'}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    title="Copy Phone"
                    className="p-1.5 rounded-lg bg-gray-800 hover:bg-orange-600 text-gray-300 hover:text-white cursor-pointer shrink-0"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#101728] border border-gray-800 gap-2">
                <div className="flex items-center gap-2 text-gray-300 shrink-0">
                  <Cake className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Birthday:</span>
                </div>
                <span className="text-gray-300 text-right text-[11px] sm:text-xs truncate">{PERSONAL_INFO.birthday || 'September 11, 1999'}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#101728] border border-gray-800 gap-2">
                <div className="flex items-center gap-2 text-gray-300 shrink-0">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Location:</span>
                </div>
                <span className="text-gray-300 text-right text-[11px] sm:text-xs truncate">Cantilan, Surigao del Sur, PH</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#101728] border border-gray-800 gap-2">
                <div className="flex items-center gap-2 text-gray-300 shrink-0">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Timezone:</span>
                </div>
                <span className="text-orange-400 font-semibold text-[11px] sm:text-xs">{PERSONAL_INFO.timezone}</span>
              </div>
            </div>
          </div>

          {/* Instant Telegram Bot Dispatch Banner */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-orange-950/40 via-[#0d1322] to-amber-950/30 border border-orange-500/30 flex items-start gap-3.5 shadow-lg">
            <div className="p-2.5 rounded-2xl bg-orange-600/20 text-orange-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Instant Telegram Dispatch</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Messages sent via this form trigger an encrypted notification directly to Jether's personal device for rapid response.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Dispatch Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="cyber-card p-5 sm:p-7 md:p-8 lg:p-10 rounded-3xl bg-[#0b101e] border border-gray-800/90 shadow-2xl relative corner-bracket h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-400" />
                <span>Send Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-5 sm:mb-6 font-mono">
                FILL IN DETAILS BELOW TO INITIATE COMMUNICATION
              </p>

              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-400 text-xs sm:text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Transmission Successful!</span>
                    <p className="mt-0.5 text-emerald-300/80">
                      Your message has been delivered to Jether's telegram gateway. Expect a response within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {status.error && !status.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-400 text-xs sm:text-sm"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{status.error}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                      Your Name <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#101728] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 text-xs sm:text-sm font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                      Your Email <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#101728] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 text-xs sm:text-sm font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project inquiry, VA partnership, or front end role"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#101728] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 text-xs sm:text-sm font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                    Message <span className="text-orange-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project scope, requirements, or questions..."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#101728] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 text-xs sm:text-sm font-mono transition-colors resize-none"
                  />
                </div>

                <div className="flex justify-end mt-25">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="py-3 px-6 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 
                              hover:from-orange-500 hover:to-amber-500 text-white font-semibold 
                              text-xs sm:text-sm shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all 
                              flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status.submitting ? (
                      <span>Encrypting &amp; Dispatching...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

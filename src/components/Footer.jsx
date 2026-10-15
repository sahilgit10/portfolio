import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Terminal, 
  Gamepad2, 
  Copy, 
  Check, 
  ArrowUp, 
  Sparkles, 
  Heart,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import MagneticButton from './MagneticButton';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "sahil.sable.engineering@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    
    // Delicious confetti burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FF9B9B', '#E8B4B8', '#88D8B0', '#F9D56E', '#FFFDF9'],
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: 'https://github.com',
      color: 'hover:text-macaron-pink',
      bgHover: 'group-hover:bg-macaron-pink/15',
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: 'https://linkedin.com',
      color: 'hover:text-macaron-mint',
      bgHover: 'group-hover:bg-macaron-mint/15',
    },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      href: 'https://twitter.com',
      color: 'hover:text-macaron-rose',
      bgHover: 'group-hover:bg-macaron-rose/15',
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${emailAddress}`,
      color: 'hover:text-macaron-strawberry',
      bgHover: 'group-hover:bg-macaron-strawberry/15',
    },
    {
      name: 'Gaming Hub',
      icon: Gamepad2,
      href: 'https://steamcommunity.com',
      color: 'hover:text-purple-400',
      bgHover: 'group-hover:bg-purple-100',
    },
  ];

  return (
    <footer id="contact" className="relative pt-28 pb-12 px-4 md:px-8 bg-vanilla-100 overflow-hidden border-t border-chocolate-800/10">
      {/* Background Soft Pastel Clouds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-b from-macaron-pink/15 via-macaron-rose/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Sweet Confection Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-chocolate-800/10 shadow-sm text-xs font-mono text-chocolate-800 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-macaron-strawberry" />
          <span>Table Reservation // Open for SWE Roles & Collaborations</span>
        </div>

        {/* Massive Bold Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-chocolate-900 tracking-tight leading-[1.05] max-w-4xl"
        >
          Let’s build something <span className="italic text-gradient-macaron">sweet.</span>
        </motion.h2>

        <p className="mt-6 text-base sm:text-lg text-chocolate-600 max-w-xl font-normal leading-relaxed">
          Whether you want to discuss high-throughput Kafka streaming, optimize Kubernetes topology,
          or trade theories on distributed systems over coffee—my inbox is always open.
        </p>

        {/* Action Capsule: Email & Magnetic Contact */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
          {/* Email Copy Capsule */}
          <button
            onClick={handleCopyEmail}
            data-cursor="hover"
            data-cursor-text={copied ? "Copied!" : "Copy"}
            className="flex-1 min-w-[260px] flex items-center justify-between gap-3 px-5 py-3.5 rounded-full bg-white/90 hover:bg-white border border-chocolate-800/15 shadow-dessert-sm hover:shadow-dessert-md transition-all duration-300 text-xs sm:text-sm font-mono text-chocolate-800"
          >
            <span className="truncate">{emailAddress}</span>
            <div className="p-1.5 rounded-full bg-chocolate-800/5 text-chocolate-600">
              {copied ? <Check className="w-4 h-4 text-macaron-mint" /> : <Copy className="w-4 h-4" />}
            </div>
          </button>

          {/* Magnetic Direct Mail CTA */}
          <MagneticButton
            as="a"
            href={`mailto:${emailAddress}?subject=Building%20Something%20Sweet`}
            cursorVariant="mint"
            cursorText="Send"
            className="px-7 py-3.5 rounded-full bg-chocolate-800 text-vanilla-100 font-semibold text-sm tracking-wide hover:bg-chocolate-900 shadow-md transition-all"
          >
            <span>Say Hello</span>
            <Send className="w-4 h-4 text-macaron-pink" />
          </MagneticButton>
        </div>

        {/* Toast Alert on Email Copied */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="mt-4 px-4 py-2 rounded-full bg-chocolate-900 text-vanilla-100 text-xs font-mono flex items-center gap-2 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-macaron-mint" />
              <span>Copied to clipboard! Fresh like warm brioche ✨</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Icons that POP UP and ROTATE with Framer Springs */}
        <div className="mt-16 flex items-center justify-center gap-4 sm:gap-6">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                data-cursor-text={item.name}
                whileHover={{
                  y: -10,
                  rotate: -8,
                  scale: 1.18,
                  transition: {
                    type: 'spring',
                    stiffness: 450,
                    damping: 14,
                    mass: 0.3,
                  },
                }}
                whileTap={{ scale: 0.9 }}
                className="group p-4 rounded-2xl bg-white/80 hover:bg-white border border-chocolate-800/10 shadow-dessert-sm hover:shadow-dessert-md text-chocolate-700 transition-colors"
                aria-label={item.name}
              >
                <Icon className={`w-5 h-5 transition-colors ${item.color}`} />
              </motion.a>
            );
          })}
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-20 pt-8 w-full border-t border-chocolate-800/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-chocolate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Sahil Sable.</span>
            <span>All recipes & systems reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-chocolate-600">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-macaron-strawberry fill-macaron-strawberry" />
            <span>& Framer Motion Syrup</span>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="hover"
            data-cursor-text="Top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-chocolate-800/10 hover:bg-white text-chocolate-700 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

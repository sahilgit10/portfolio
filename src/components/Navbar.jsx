import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Coffee, Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Confections (Stack)', href: '#stack' },
    { name: 'Projects (Menu)', href: '#projects' },
    { name: 'Journey', href: '#timeline' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-5 py-3 rounded-full transition-all duration-500 max-w-5xl w-full ${
            scrolled
              ? 'bg-vanilla-100/80 backdrop-blur-xl border border-chocolate-800/10 shadow-dessert-md'
              : 'bg-white/40 backdrop-blur-md border border-white/60 shadow-sm'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            data-cursor="hover"
            data-cursor-text="Home"
            className="group flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-macaron-pink to-macaron-rose flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm group-hover:rotate-12 transition-transform duration-300">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base tracking-tight text-chocolate-800 leading-tight">
                Sahil Sable
              </span>
              <span className="text-[10px] font-mono font-medium text-chocolate-400 tracking-wider uppercase">
                Backend Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-chocolate-800/[0.03] p-1 rounded-full border border-chocolate-800/[0.04]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-cursor="hover"
                data-cursor-text="Go"
                className="px-3.5 py-1.5 text-xs font-semibold text-chocolate-700 hover:text-chocolate-900 rounded-full hover:bg-white/80 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section: Status Pill & CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-macaron-mint/15 border border-macaron-mint/30 text-[11px] font-mono text-chocolate-700">
              <span className="w-2 h-2 rounded-full bg-macaron-mint animate-pulse" />
              <span>Available for Roles</span>
            </div>

            <MagneticButton
              as="a"
              href="#contact"
              cursorVariant="mint"
              cursorText="Order"
              className="px-4 py-2 rounded-full bg-chocolate-800 text-vanilla-100 text-xs font-semibold tracking-wide hover:bg-chocolate-900 transition-all shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-macaron-pink" />
            </MagneticButton>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-chocolate-800 hover:bg-chocolate-800/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-vanilla-100/95 backdrop-blur-2xl border border-chocolate-800/10 shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-semibold text-chocolate-800 hover:bg-macaron-pink/15 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-chocolate-800/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-chocolate-600">
                <span className="w-2 h-2 rounded-full bg-macaron-mint animate-pulse" />
                <span>SE IT Engineering Student</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-full bg-chocolate-800 text-vanilla-100 text-xs font-semibold"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

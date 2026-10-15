import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Cpu, Layers, GitBranch, ArrowRight } from 'lucide-react';
import SplinePastry from './SplinePastry';
import MagneticButton from './MagneticButton';

export default function Hero() {
  // Stagger container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Staggered letters for the name "Sahil Sable"
  const nameFirst = "Sahil".split("");
  const nameLast = "Sable".split("");

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Background Ambient Confectionery Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-macaron-pink/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-macaron-mint/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-vanilla-200/50 via-macaron-rose/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        {/* Top Chef/Engineer Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-chocolate-800/10 shadow-dessert-sm mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-macaron-pink animate-pulse" />
          <span className="text-xs font-mono font-medium text-chocolate-700 tracking-wide uppercase">
            High-Tech Pâtisserie // Backend Architect
          </span>
          <span className="text-chocolate-300">•</span>
          <span className="text-xs font-mono text-chocolate-600">SE IT Student</span>
        </motion.div>

        {/* Massive Staggered Name Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-chocolate-900 leading-[0.95] select-none">
            <span className="inline-flex overflow-hidden">
              {nameFirst.map((char, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="inline-block hover:text-macaron-strawberry transition-colors duration-300"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="inline-block mx-3 text-macaron-pink font-light italic">
              &
            </span>
            <span className="inline-flex overflow-hidden text-gradient-dessert">
              {nameLast.map((char, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="inline-block hover:text-macaron-mint transition-colors duration-300"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle / Recipe Statement */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-chocolate-600 font-normal leading-relaxed"
          >
            Engineering resilient, high-throughput distributed backends, Kafka pipelines,
            and cloud infrastructure with the calculated precision of haute confectionery.
          </motion.p>
        </motion.div>

        {/* Showstopper 3D Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full my-2 md:my-0"
        >
          <SplinePastry />
        </motion.div>

        {/* Magnetic CTAs & Floating Action Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 z-20"
        >
          {/* Primary CTA - View Stack */}
          <MagneticButton
            as="a"
            href="#stack"
            cursorVariant="mint"
            cursorText="Inspect"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-macaron-pink via-macaron-strawberry to-macaron-rose text-white font-semibold text-sm tracking-wide shadow-glow-pink hover:shadow-lg transition-all duration-300"
          >
            <span>View Confections (Stack)</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          {/* Secondary CTA - Projects */}
          <MagneticButton
            as="a"
            href="#projects"
            cursorVariant="hover"
            cursorText="Taste"
            className="px-7 py-3.5 rounded-full bg-white/80 hover:bg-white text-chocolate-800 font-semibold text-sm tracking-wide border border-chocolate-800/15 shadow-dessert-sm hover:shadow-dessert-md transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-macaron-strawberry" />
            <span>Tasting Menu (Projects)</span>
          </MagneticButton>

          {/* Contact CTA */}
          <MagneticButton
            as="a"
            href="#contact"
            cursorVariant="rose"
            cursorText="Say Hi"
            className="px-6 py-3.5 rounded-full bg-chocolate-800 text-vanilla-100 font-semibold text-sm tracking-wide hover:bg-chocolate-900 transition-all shadow-sm"
          >
            <span>Reserve Table (Contact)</span>
          </MagneticButton>
        </motion.div>

        {/* Mini Recipe Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl"
        >
          <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-chocolate-800/5 shadow-sm text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-chocolate-400 block">Core Dough</span>
            <span className="font-serif font-bold text-chocolate-800 text-base">GoLang & Java</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-chocolate-800/5 shadow-sm text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-chocolate-400 block">Throughput</span>
            <span className="font-serif font-bold text-macaron-strawberry text-base">120k eps Kafka</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-chocolate-800/5 shadow-sm text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-chocolate-400 block">Orchestration</span>
            <span className="font-serif font-bold text-chocolate-800 text-base">Kubernetes & AWS</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-chocolate-800/5 shadow-sm text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-chocolate-400 block">Latency Bar</span>
            <span className="font-serif font-bold text-macaron-mint text-base">sub-5ms p99</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-14 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-chocolate-600">Scroll to Taste</span>
          <ArrowDown className="w-4 h-4 text-chocolate-600" />
        </motion.div>
      </div>
    </section>
  );
}

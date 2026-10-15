import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Gamepad2, Sparkles, Terminal, Flame, Coffee, HeartHandshake } from 'lucide-react';

/**
 * AnimatedWord - reveals word by word on scroll with spring interpolation
 */
function AnimatedWord({ children, index, total }) {
  return (
    <motion.span
      initial={{ opacity: 0.15, y: 10, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, margin: '-10% 0px -20% 0px' }}
      transition={{
        duration: 0.5,
        delay: (index % 15) * 0.03,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="inline-block mr-[0.28em]"
    >
      {children}
    </motion.span>
  );
}

export default function About() {
  const containerRef = useRef(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax offsets for background elements
  const bgShape1Y = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const bgShape2Y = useTransform(scrollYProgress, [0, 1], [160, -160]);
  const bgShape3Y = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const rotatePastry = useTransform(scrollYProgress, [0, 1], [-25, 45]);

  const introParagraph = "I am Sahil Sable, an SE IT Engineering student and backend architect who treats distributed systems like haute patisserie. In high-concurrency environments, every microsecond is a calibrated ingredient. If the oven temperature drifts, the souffle collapses; if queue partitions desynchronize, transactions fail. That is why I design with architectural rigor, low-latency communication, and unshakeable resilience.";

  const words = introParagraph.split(" ");

  const philosophyPillars = [
    {
      icon: Terminal,
      title: "Distributed Engines",
      color: "from-macaron-pink to-macaron-strawberry",
      desc: "Crafting event-driven topologies with Apache Kafka and GoLang that process massive data streams with sub-5ms latency guarantees.",
    },
    {
      icon: Flame,
      title: "Cloud & DevOps Confection",
      color: "from-macaron-rose to-macaron-pink",
      desc: "Orchestrating Kubernetes clusters, automated CI/CD pipelines, and infrastructure as code for zero-downtime microservice deployments.",
    },
    {
      icon: Sparkles,
      title: "AI/ML Integration",
      color: "from-macaron-mint to-teal-400",
      desc: "Bridging foundational deep learning models with production backend APIs to deliver intelligent, context-aware user experiences.",
    },
    {
      icon: Gamepad2,
      title: "Playful Engineering",
      color: "from-macaron-lavender to-purple-400",
      desc: "When not optimizing thread pools, I build ridiculously fun and technically intricate experimental software, play immersive games, and devour tech literature.",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 px-4 md:px-8 overflow-hidden bg-vanilla-100"
    >
      {/* Parallax Floating Confectionery Elements */}
      <motion.div
        style={{ y: bgShape1Y, rotate: rotatePastry }}
        className="absolute top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-macaron-pink/20 to-macaron-rose/10 blur-2xl pointer-events-none -z-10"
      />
      <motion.div
        style={{ y: bgShape2Y }}
        className="absolute bottom-16 -right-16 w-80 h-80 rounded-full bg-gradient-to-tr from-macaron-mint/20 to-teal-100/30 blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        style={{ y: bgShape3Y }}
        className="absolute top-1/2 right-12 w-48 h-48 rounded-full border border-dashed border-macaron-pink/20 pointer-events-none -z-10"
      />

      {/* Floating Macaron Shell Visual Graphic */}
      <motion.div
        style={{ y: bgShape1Y, rotate: rotatePastry }}
        className="hidden lg:block absolute top-24 right-16 w-32 h-20 rounded-full bg-gradient-to-b from-macaron-pink/40 to-macaron-rose/60 border border-white/50 backdrop-blur-md shadow-dessert-md pointer-events-none"
      >
        <div className="absolute inset-x-2 top-2 h-3 rounded-full bg-white/40 blur-[1px]" />
        <div className="absolute inset-x-0 bottom-3 h-2 bg-chocolate-800/20" />
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-macaron-rose/15 border border-macaron-rose/30 text-xs font-mono text-chocolate-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-macaron-strawberry" />
            <span>The Confectioner's Codex</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-900 tracking-tight">
            Haute Architecture Meets Silicon Rigor
          </h2>
          <p className="mt-3 text-chocolate-600 text-sm md:text-base max-w-xl">
            A glimpse into the engineering philosophy of an SE IT student obsessed with low latency and clean abstractions.
          </p>
        </div>

        {/* Scroll-Triggered Parallax Text Reveal */}
        <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-white/70 backdrop-blur-xl border border-chocolate-800/10 shadow-dessert-lg mb-16">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono text-chocolate-400 uppercase tracking-widest">
            <Terminal className="w-4 h-4 text-macaron-strawberry" />
            <span>sys.manifesto.md</span>
          </div>

          <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed sm:leading-relaxed md:leading-relaxed text-chocolate-800 font-normal select-none">
            {words.map((word, idx) => (
              <AnimatedWord key={idx} index={idx} total={words.length}>
                {word}
              </AnimatedWord>
            ))}
          </p>

          <div className="mt-8 pt-6 border-t border-chocolate-800/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-vanilla-200 flex items-center justify-center text-chocolate-800 font-serif font-bold text-sm">
                SS
              </div>
              <div>
                <h4 className="font-semibold text-xs text-chocolate-900">Sahil Sable</h4>
                <p className="text-[11px] font-mono text-chocolate-500">Student & Distributed Systems Dev</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-chocolate-600">
              <BookOpen className="w-4 h-4 text-macaron-mint" />
              <span>Current Read: "Designing Data-Intensive Applications"</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Craftsmanship Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-7 rounded-3xl bg-white/60 hover:bg-white/90 backdrop-blur-md border border-chocolate-800/10 hover:border-macaron-pink/40 shadow-dessert-sm hover:shadow-dessert-md transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-5 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-chocolate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-chocolate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

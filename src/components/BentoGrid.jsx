import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Layers, 
  Flame, 
  Gamepad2, 
  Sparkles, 
  ArrowUpRight, 
  Activity, 
  Box, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon } from './Icons';

/**
 * BentoCard with 3D Tilt and Dynamic Glare Effect
 */
function BentoCard({ children, className = '', cursorText = 'View' }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate values normalized [-0.5 to 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Glare position in percent
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Organic spring physics for 3D tilt
  const springConfig = { damping: 20, stiffness: 200, mass: 0.1 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Set normalized coordinates
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);

    // Set glare percentages
    glareX.set((mouseX / width) * 100);
    glareY.set((mouseY / height) * 100);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="hover"
      data-cursor-text={cursorText}
      className={`group relative rounded-3xl bg-white/70 hover:bg-white/90 backdrop-blur-xl border border-chocolate-800/10 hover:border-macaron-pink/40 shadow-dessert-md hover:shadow-dessert-lg transition-all duration-300 overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Dynamic Specular Glare Gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle 280px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.95), transparent 70%)`
          ),
        }}
      />

      {/* Card Content with subtle 3D translation */}
      <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="projects" className="relative py-28 px-4 md:px-8 bg-vanilla-100 overflow-hidden">
      {/* Background Sweet Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-macaron-pink/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-macaron-mint/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-macaron-pink/20 border border-macaron-pink/40 text-xs font-mono text-chocolate-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-macaron-strawberry" />
            <span>Grand Tasting Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-900 tracking-tight">
            Curated Bento Showcase
          </h2>
          <p className="mt-3 text-chocolate-600 text-sm md:text-base max-w-xl">
            Asymmetrical architectures tempered with GoLang, Spring Boot, Kafka, and Kubernetes.
            Hover each frosted glass card to experience the dynamic glare and 3D tilt.
          </p>
        </div>

        {/* Asymmetrical Bento Box CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">

          {/* Card 1: HERO PROJECT (Spans 8 cols on large screens) */}
          <BentoCard
            cursorText="Inspect"
            className="lg:col-span-8 p-7 md:p-9 min-h-[440px]"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-macaron-pink to-macaron-strawberry flex items-center justify-center text-white shadow-sm">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-macaron-strawberry font-bold uppercase tracking-wider block">
                      Featured Distributed Engine
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-chocolate-900">
                      AetherQueue // Macaron-Bus
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    data-cursor-text="Code"
                    className="p-2.5 rounded-full bg-chocolate-800/5 hover:bg-chocolate-800/10 text-chocolate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    data-cursor="hover"
                    data-cursor-text="Demo"
                    className="p-2.5 rounded-full bg-chocolate-800 text-white hover:bg-chocolate-900 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 text-macaron-pink" />
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base text-chocolate-600 max-w-2xl leading-relaxed mb-6 font-normal">
                A high-throughput distributed event streaming broker written in GoLang with Apache Kafka protocol compatibility. Features ring-buffer batching, zero-copy socket transfers, and sub-5ms p99 latency under 120,000 events/sec concurrency.
              </p>

              {/* Interactive Telemetry Box */}
              <div className="p-4 rounded-2xl bg-vanilla-200/80 border border-chocolate-800/10 font-mono text-xs mb-6">
                <div className="flex items-center justify-between text-chocolate-500 mb-2">
                  <span>Kafka Topic: dessert.high-volume.orders</span>
                  <span className="text-macaron-strawberry font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-macaron-strawberry animate-ping" />
                    120k eps Active
                  </span>
                </div>
                <div className="w-full bg-chocolate-800/10 rounded-full h-2 overflow-hidden mb-2">
                  <div className="bg-gradient-to-r from-macaron-pink via-macaron-rose to-macaron-mint h-2 rounded-full w-[88%] animate-pulse" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px] text-chocolate-700">
                  <div>p50: <span className="font-bold text-chocolate-900">0.9ms</span></div>
                  <div>p99: <span className="font-bold text-chocolate-900">3.4ms</span></div>
                  <div>Fault Tolerance: <span className="font-bold text-macaron-mint">Zero Loss</span></div>
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-chocolate-800/10">
              {['GoLang', 'Apache Kafka', 'gRPC', 'Distributed Systems', 'Raft Consensus', 'Docker'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/90 border border-chocolate-800/10 text-chocolate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Card 2: KUBERNETES OPERATOR (Spans 4 cols) */}
          <BentoCard
            cursorText="Cloud"
            className="lg:col-span-4 p-7 min-h-[440px]"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-macaron-mint to-teal-400 flex items-center justify-center text-white mb-4 shadow-sm">
                <Box className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-teal-700 font-bold uppercase tracking-wider block mb-1">
                Cloud-Native DevOps
              </span>
              <h3 className="font-serif font-bold text-2xl text-chocolate-900 mb-3">
                KubePâtissier
              </h3>
              <p className="text-xs sm:text-sm text-chocolate-600 leading-relaxed mb-6">
                Custom Kubernetes Operator written in Go to predictively auto-scale microservice pods based on memory saturation velocity & burst queues before eviction alarms trigger.
              </p>

              <div className="p-3.5 rounded-xl bg-white/80 border border-chocolate-800/10 font-mono text-xs text-chocolate-700 space-y-1.5 mb-6">
                <div className="flex justify-between">
                  <span className="text-chocolate-400">CRD:</span>
                  <span className="font-bold">PatisserieAutoscaler/v1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-chocolate-400">OOM Prevention:</span>
                  <span className="font-bold text-macaron-mint">99.98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-chocolate-400">Scale Time:</span>
                  <span className="font-bold">sub-400ms</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-chocolate-800/10">
              {['Kubernetes', 'GoLang', 'CRD Operator', 'Prometheus', 'Helm'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/90 border border-chocolate-800/10 text-chocolate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Card 3: SPRING BOOT MICROSERVICES (Spans 4 cols) */}
          <BentoCard
            cursorText="Backend"
            className="lg:col-span-4 p-7 min-h-[380px]"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-macaron-rose to-macaron-pink flex items-center justify-center text-white mb-4 shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-macaron-strawberry font-bold uppercase tracking-wider block mb-1">
                Enterprise Confection
              </span>
              <h3 className="font-serif font-bold text-xl text-chocolate-900 mb-2">
                SpringConfect Engine
              </h3>
              <p className="text-xs sm:text-sm text-chocolate-600 leading-relaxed mb-6">
                Distributed transaction engine with Spring Boot 3, Redis distributed locks (Redlock), and Saga pattern orchestration for zero-fault e-commerce order consistency.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-chocolate-800/10">
              {['Java', 'Spring Boot 3', 'Redis', 'PostgreSQL', 'Saga Pattern'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/90 border border-chocolate-800/10 text-chocolate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Card 4: PLAYFUL CHAOS GAME (Spans 4 cols) */}
          <BentoCard
            cursorText="Play"
            className="lg:col-span-4 p-7 min-h-[380px]"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-macaron-lavender to-purple-400 flex items-center justify-center text-white mb-4 shadow-sm">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-purple-600 font-bold uppercase tracking-wider block mb-1">
                Delightfully Whimsical
              </span>
              <h3 className="font-serif font-bold text-xl text-chocolate-900 mb-2">
                LatteLatency Arcade
              </h3>
              <p className="text-xs sm:text-sm text-chocolate-600 leading-relaxed mb-6">
                A real-time multiplayer WebSocket arcade where backend devs catch memory leaks while keeping barista coffee cups balanced. "Useless, but incredibly fun software."
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-chocolate-800/10">
              {['WebSockets', 'Go Channels', 'Canvas API', 'Redis Pub/Sub'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/90 border border-chocolate-800/10 text-chocolate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Card 5: AI/ML PIPELINE (Spans 4 cols) */}
          <BentoCard
            cursorText="AI/ML"
            className="lg:col-span-4 p-7 min-h-[380px]"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-macaron-honey to-amber-500 flex items-center justify-center text-white mb-4 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-700 font-bold uppercase tracking-wider block mb-1">
                Intelligent Synthesis
              </span>
              <h3 className="font-serif font-bold text-xl text-chocolate-900 mb-2">
                ChromaBake AI
              </h3>
              <p className="text-xs sm:text-sm text-chocolate-600 leading-relaxed mb-6">
                Latency-optimized generative recipe optimizer using PyTorch vector embeddings and caching to synthesize culinary pairings with sub-second inference speed.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-chocolate-800/10">
              {['Python', 'PyTorch', 'Vector Search', 'FastAPI', 'Transformers'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/90 border border-chocolate-800/10 text-chocolate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}

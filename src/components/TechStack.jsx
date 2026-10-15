import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Cloud, 
  Database, 
  GitBranch, 
  Container, 
  Workflow, 
  ShieldCheck, 
  Sparkles,
  Server,
  Zap
} from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Confections' },
    { id: 'backend', label: 'Core Dough (Backend)' },
    { id: 'devops', label: 'Oven & Cloud (DevOps)' },
    { id: 'data', label: 'Fillings & State (Data)' },
    { id: 'aiml', label: 'Specialty Glazes (AI/ML)' },
  ];

  const stackItems = [
    {
      name: 'GoLang',
      category: 'backend',
      flavor: 'High-Concurrency Sorbet',
      description: 'Goroutines, channels, custom microservices & low-overhead Daemons',
      accent: 'border-macaron-mint/40 text-chocolate-800 hover:shadow-glow-mint',
      dotColor: 'bg-macaron-mint',
      floatDelay: 0,
      floatDuration: 5.5,
      level: 'Production Ready',
    },
    {
      name: 'Apache Kafka',
      category: 'backend',
      flavor: '120k eps Streaming Ganache',
      description: 'Distributed event log, topic partitioning, high-throughput consumer groups',
      accent: 'border-macaron-pink/40 text-chocolate-800 hover:shadow-glow-pink',
      dotColor: 'bg-macaron-pink',
      floatDelay: 0.8,
      floatDuration: 6.2,
      level: 'Advanced',
    },
    {
      name: 'Java (Spring Boot)',
      category: 'backend',
      flavor: 'Enterprise Mille-Feuille',
      description: 'Spring Boot 3, Spring Cloud, Hibernate, reactive WebFlux & security',
      accent: 'border-macaron-rose/40 text-chocolate-800 hover:shadow-glow-rose',
      dotColor: 'bg-macaron-rose',
      floatDelay: 1.5,
      floatDuration: 5.8,
      level: 'Core Stack',
    },
    {
      name: 'Kubernetes',
      category: 'devops',
      flavor: 'Multi-Pod Brioche Oven',
      description: 'Custom Operators, CRDs, Helm charts, horizontal pod auto-scalers',
      accent: 'border-macaron-mint/40 text-chocolate-800 hover:shadow-glow-mint',
      dotColor: 'bg-macaron-mint',
      floatDelay: 0.4,
      floatDuration: 6.5,
      level: 'Orchestration',
    },
    {
      name: 'Docker',
      category: 'devops',
      flavor: 'Layered Pastry Container',
      description: 'Multi-stage builds, rootless containers, micro-footprint Alpine images',
      accent: 'border-macaron-lavender/40 text-chocolate-800 hover:shadow-glass',
      dotColor: 'bg-macaron-lavender',
      floatDelay: 1.2,
      floatDuration: 5.2,
      level: 'Everyday Craft',
    },
    {
      name: 'AWS Cloud',
      category: 'devops',
      flavor: 'Scalable Cloud Custard',
      description: 'ECS, EKS, S3, RDS, Lambda, CloudWatch and resilient VPC architecture',
      accent: 'border-macaron-honey/40 text-chocolate-800 hover:shadow-glass',
      dotColor: 'bg-macaron-honey',
      floatDelay: 2.0,
      floatDuration: 6.0,
      level: 'Cloud Architecture',
    },
    {
      name: 'PostgreSQL',
      category: 'data',
      flavor: 'ACID Dark Chocolate Core',
      description: 'Relational schema design, index optimization, JSONB storage & sharding',
      accent: 'border-macaron-rose/40 text-chocolate-800 hover:shadow-glow-rose',
      dotColor: 'bg-macaron-rose',
      floatDelay: 0.6,
      floatDuration: 5.4,
      level: 'Primary RDBMS',
    },
    {
      name: 'Redis',
      category: 'data',
      flavor: 'Sub-ms Raspberry Coulis',
      description: 'In-memory caching, distributed locks (Redlock), pub/sub & rate limiters',
      accent: 'border-macaron-pink/40 text-chocolate-800 hover:shadow-glow-pink',
      dotColor: 'bg-macaron-pink',
      floatDelay: 1.8,
      floatDuration: 6.8,
      level: 'Ultra Low-Latency',
    },
    {
      name: 'Git & GitHub',
      category: 'devops',
      flavor: 'Trunk-Based Caramel Swirl',
      description: 'Branching discipline, automated GitHub Actions CI/CD workflows, releases',
      accent: 'border-macaron-mint/40 text-chocolate-800 hover:shadow-glow-mint',
      dotColor: 'bg-macaron-mint',
      floatDelay: 1.0,
      floatDuration: 5.0,
      level: 'Essential',
    },
    {
      name: 'AI/ML & Python',
      category: 'aiml',
      flavor: 'Neural Pistachio Cream',
      description: 'PyTorch, Transformers, embeddings search, agentic pipelines & LLM APIs',
      accent: 'border-macaron-mint/40 text-chocolate-800 hover:shadow-glow-mint',
      dotColor: 'bg-macaron-mint',
      floatDelay: 2.2,
      floatDuration: 6.4,
      level: 'Curious & Applied',
    },
    {
      name: 'Linux & Bash',
      category: 'devops',
      flavor: 'Kernel Sourdough Starter',
      description: 'Systemd, kernel tuning, process monitoring, IPC, shell automation',
      accent: 'border-chocolate-800/20 text-chocolate-800 hover:shadow-glass',
      dotColor: 'bg-chocolate-700',
      floatDelay: 0.3,
      floatDuration: 5.7,
      level: 'System Native',
    },
    {
      name: 'gRPC & Protobuf',
      category: 'backend',
      flavor: 'Binary Honey Crisp',
      description: 'Multiplexed HTTP/2 RPCs, strong typing contracts, streaming APIs',
      accent: 'border-macaron-rose/40 text-chocolate-800 hover:shadow-glow-rose',
      dotColor: 'bg-macaron-rose',
      floatDelay: 1.6,
      floatDuration: 6.1,
      level: 'Microservices',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? stackItems
    : stackItems.filter((item) => item.category === activeCategory);

  return (
    <section id="stack" className="relative py-28 px-4 md:px-8 bg-vanilla-100 overflow-hidden">
      {/* Ambient Dessert Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-macaron-pink/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-macaron-mint/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-macaron-mint/20 border border-macaron-mint/40 text-xs font-mono text-chocolate-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-macaron-mint" />
            <span>Artisanal Ingredients</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-900 tracking-tight">
            The Confectionery Stack
          </h2>
          <p className="mt-3 text-chocolate-600 text-sm md:text-base max-w-xl">
            Each technology is carefully tempered for high resilience, zero-fault concurrency,
            and flawless operational performance.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-white/70 backdrop-blur-md border border-chocolate-800/10 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor="hover"
                data-cursor-text="Filter"
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-chocolate-800 text-vanilla-100 shadow-sm'
                    : 'text-chocolate-600 hover:text-chocolate-900 hover:bg-chocolate-800/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Macaron Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-4"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{
                  layout: { duration: 0.4 },
                  y: {
                    duration: item.floatDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: item.floatDelay,
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                  },
                }}
                data-cursor="hover"
                data-cursor-text={item.name}
                className={`group relative p-5 rounded-2xl bg-white/75 hover:bg-white/95 backdrop-blur-xl border ${item.accent} shadow-dessert-sm hover:shadow-dessert-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.dotColor} shadow-sm group-hover:scale-125 transition-transform duration-300`} />
                      <h3 className="font-serif font-bold text-lg text-chocolate-900 group-hover:text-chocolate-950">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-chocolate-400 uppercase tracking-wider px-2 py-0.5 rounded-full bg-chocolate-800/5">
                      {item.level}
                    </span>
                  </div>

                  <p className="text-[11px] font-mono text-macaron-strawberry font-medium mb-2">
                    {item.flavor}
                  </p>

                  <p className="text-xs text-chocolate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="mt-4 pt-3 border-t border-chocolate-800/5 flex items-center justify-between text-[10px] font-mono text-chocolate-400">
                  <span>Batch // 2026</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-chocolate-800 font-semibold">
                    100% Tempered ✨
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, GitCommit, Server, Sparkles, Terminal } from 'lucide-react';

export default function Timeline() {
  const milestones = [
    {
      year: 'Present — Horizon',
      role: 'SE IT Engineering Student & Cloud Backend Explorer',
      institution: 'Systems Engineering & Cloud Computing',
      tag: 'Current Focus',
      tagColor: 'bg-macaron-mint/20 text-teal-800 border-macaron-mint/40',
      description: 'Engineering predictive Kubernetes operators, low-latency Kafka pipelines, and exploring hybrid AI microservices. Ready for high-scale backend internships and full-time roles.',
      icon: Sparkles,
      iconBg: 'bg-gradient-to-br from-macaron-mint to-teal-400',
    },
    {
      year: '2024 — 2025',
      role: 'Distributed Systems & GoLang Mastery',
      institution: 'Independent Research & Open-Source',
      tag: 'Deep Dive',
      tagColor: 'bg-macaron-pink/20 text-macaron-strawberry border-macaron-pink/40',
      description: 'Built high-throughput event brokers in GoLang with Apache Kafka protocols, implementing Raft consensus metadata and ring-buffer batching with sub-5ms p99 latency.',
      icon: Server,
      iconBg: 'bg-gradient-to-br from-macaron-pink to-macaron-strawberry',
    },
    {
      year: '2023 — 2024',
      role: 'Enterprise Backend & Spring Boot Architecture',
      institution: 'Information Technology Curriculum',
      tag: 'Core Dough',
      tagColor: 'bg-macaron-rose/20 text-rose-800 border-macaron-rose/40',
      description: 'Engineered multi-tenant REST and gRPC microservices using Java Spring Boot 3, Hibernate JPA, PostgreSQL relational schemas, and Redis distributed caching.',
      icon: Terminal,
      iconBg: 'bg-gradient-to-br from-macaron-rose to-pink-400',
    },
    {
      year: '2022 — 2023',
      role: 'Algorithmic Discipline & Software Foundations',
      institution: 'Bachelor of Engineering in IT',
      tag: 'Foundation',
      tagColor: 'bg-macaron-lavender/25 text-purple-800 border-macaron-lavender/40',
      description: 'Mastered core computer science foundations: data structures, OS internals, thread scheduling, networking protocols (TCP/UDP, HTTP), and Linux systems programming.',
      icon: GraduationCap,
      iconBg: 'bg-gradient-to-br from-macaron-lavender to-purple-400',
    },
  ];

  return (
    <section id="timeline" className="relative py-28 px-4 md:px-8 bg-vanilla-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-macaron-rose/15 border border-macaron-rose/30 text-xs font-mono text-chocolate-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-macaron-strawberry" />
            <span>Chronological Tasting</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-900 tracking-tight">
            The Confectioner’s Journey
          </h2>
          <p className="mt-3 text-chocolate-600 text-sm md:text-base max-w-lg">
            From algorithmic foundations to distributed event systems and cloud-native architecture.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 md:pl-10 border-l-2 border-dashed border-chocolate-800/15 space-y-12">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Node on the timeline */}
                <div className={`absolute -left-[35px] md:-left-[51px] top-1.5 w-10 h-10 rounded-2xl ${item.iconBg} text-white flex items-center justify-center shadow-dessert-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div className="p-6 md:p-8 rounded-3xl bg-white/70 hover:bg-white/95 backdrop-blur-xl border border-chocolate-800/10 shadow-dessert-sm hover:shadow-dessert-md transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-macaron-strawberry tracking-wide">
                      {item.year}
                    </span>
                    <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-chocolate-900 mb-1">
                    {item.role}
                  </h3>
                  <h4 className="text-xs font-mono text-chocolate-500 mb-4">
                    {item.institution}
                  </h4>

                  <p className="text-xs sm:text-sm text-chocolate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

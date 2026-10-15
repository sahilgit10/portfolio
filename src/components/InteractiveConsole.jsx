import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles, CornerDownLeft, Check, Coffee } from 'lucide-react';

export default function InteractiveConsole() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Sahil Sable Pâtisserie OS v2.6.0 (High-Concurrency Edition)' },
    { type: 'system', text: 'Type "help" or click a recipe chip below to inspect distributed systems.' },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    if (trimmed === 'help') {
      newHistory.push({
        type: 'response',
        text: 'Available Commands:\n  • status    - View Sahil’s live telemetry & runtime metrics\n  • bake      - Simulate baking a Kafka distributed event pipeline\n  • reading   - Check current technical book on the nightstand\n  • gaming    - What Sahil plays during zero-latency downtime\n  • clear     - Clear the confectioner terminal screen',
      });
    } else if (trimmed === 'status') {
      newHistory.push({
        type: 'response',
        text: JSON.stringify(
          {
            engineer: 'Sahil Sable',
            title: 'SE IT Engineering Student & Backend Confectioner',
            focus: ['Distributed Systems', 'Kafka', 'Kubernetes', 'AI/ML'],
            coffeeLevel: '88% Espresso Roasted',
            activeOven: 'GoLang Goroutines & Kafka Event Streamers',
            status: 'Ready for High-Scale Roles & Internships',
          },
          null,
          2
        ),
      });
    } else if (trimmed === 'bake') {
      newHistory.push({
        type: 'response',
        text: '🔥 Pre-heating Kubernetes pods...\n⚡ Provisioning Kafka broker partitions (dessert.orders)...\n🥞 Spawning 120,000 Goroutine event consumers...\n✨ Result: 0.8ms p50 latency reached! Fresh batch ready to serve.',
      });
    } else if (trimmed === 'reading') {
      newHistory.push({
        type: 'response',
        text: '📖 "Designing Data-Intensive Applications" by Martin Kleppmann & "The Pragmatic Programmer".',
      });
    } else if (trimmed === 'gaming') {
      newHistory.push({
        type: 'response',
        text: '🎮 Elden Ring, Factorio (automating assembly lines), and retro indie puzzle games.',
      });
    } else if (trimmed === 'clear') {
      setHistory([]);
      return;
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`,
      });
    }

    setHistory(newHistory);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <section className="relative py-20 px-4 md:px-8 bg-vanilla-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 sm:p-8 rounded-3xl bg-chocolate-900 text-vanilla-100 font-mono shadow-2xl border border-chocolate-800 relative overflow-hidden">
          {/* Macaron Color Window Controls */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-chocolate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-macaron-pink" />
              <span className="w-3 h-3 rounded-full bg-macaron-honey" />
              <span className="w-3 h-3 rounded-full bg-macaron-mint" />
              <span className="ml-2 text-xs text-chocolate-400">sahil@patisserie-node-01: ~</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-macaron-mint">
              <span className="w-2 h-2 rounded-full bg-macaron-mint animate-pulse" />
              <span>Kafka Cluster: ONLINE</span>
            </div>
          </div>

          {/* Terminal Output Stream */}
          <div className="min-h-[220px] max-h-[340px] overflow-y-auto space-y-2 text-xs sm:text-sm text-chocolate-200 pr-2">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={
                  item.type === 'user'
                    ? 'text-macaron-pink font-semibold'
                    : item.type === 'error'
                    ? 'text-rose-400'
                    : item.type === 'response'
                    ? 'text-macaron-mint whitespace-pre-wrap'
                    : 'text-chocolate-400'
                }
              >
                {item.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick Recipe Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-chocolate-800">
            <span className="text-[11px] text-chocolate-400">Quick tastes:</span>
            {['status', 'bake', 'reading', 'gaming', 'help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                data-cursor="hover"
                data-cursor-text={cmd}
                className="px-2.5 py-1 rounded-md bg-chocolate-800 hover:bg-chocolate-700 text-xs text-macaron-rose font-medium border border-chocolate-700 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Command Prompt Input */}
          <form onSubmit={onSubmit} className="mt-3 flex items-center gap-2">
            <span className="text-macaron-pink font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'bake' or 'status'..."
              className="flex-1 bg-transparent text-vanilla-100 placeholder-chocolate-500 text-sm focus:outline-none font-mono"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-chocolate-800 text-chocolate-300 hover:text-white transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

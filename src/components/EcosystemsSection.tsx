import { motion } from 'framer-motion';
import { SixtyProjectsEcosystem } from './SixtyProjectsEcosystem';
import { AIVibeEcosystem } from './AIVibeEcosystem';
import { AISdkEcosystem } from './AISdkEcosystem';
import { Layers, Sparkles, Cpu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

type EcosystemTab = 'all' | 'sixty' | 'vibe' | 'sdk';

export function EcosystemsSection() {
  const [activeTab, setActiveTab] = useState<EcosystemTab>('all');
  const [showAll, setShowAll] = useState(false);

  const tabs = [
    { id: 'all' as EcosystemTab, label: 'All Ecosystems', icon: Layers },
    { id: 'sixty' as EcosystemTab, label: '60 Projects', icon: Layers },
    { id: 'vibe' as EcosystemTab, label: 'AI-VIBE', icon: Sparkles },
    { id: 'sdk' as EcosystemTab, label: 'AI-SDK', icon: Cpu },
  ];

  return (
    <section className="py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-full mb-6">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium">Project Ecosystems</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Three Major Ecosystems</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my comprehensive project portfolios spanning 60+ diverse projects,
            10 AI-powered tools, and 10 SDK implementations.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Ecosystem Cards Summary */}
        {(activeTab === 'all' || activeTab === 'sixty') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            {activeTab === 'all' ? (
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <Layers className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">60 Projects Ecosystem</h3>
                      <p className="text-sm text-gray-400">Web Apps, Games, Tools, and Starters</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('sixty')}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Details
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-blue-400">60+</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-blue-400">4</div>
                    <div className="text-xs text-gray-500">Categories</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-blue-400">100%</div>
                    <div className="text-xs text-gray-500">Live</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-blue-400">25+</div>
                    <div className="text-xs text-gray-500">Technologies</div>
                  </div>
                </div>
              </div>
            ) : (
              <SixtyProjectsEcosystem />
            )}
          </motion.div>
        )}

        {(activeTab === 'all' || activeTab === 'vibe') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            {activeTab === 'all' ? (
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <Sparkles className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">AI-VIBE Ecosystem</h3>
                      <p className="text-sm text-gray-400">Autonomous agents and intelligent tools</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('vibe')}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Details
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-purple-400">10</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-purple-400">30+</div>
                    <div className="text-xs text-gray-500">LLMs</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-purple-400">4</div>
                    <div className="text-xs text-gray-500">Categories</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-purple-400">AI</div>
                    <div className="text-xs text-gray-500">Focus</div>
                  </div>
                </div>
              </div>
            ) : (
              <AIVibeEcosystem />
            )}
          </motion.div>
        )}

        {(activeTab === 'all' || activeTab === 'sdk') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            {activeTab === 'all' ? (
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-500/20 rounded-xl">
                      <Cpu className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">AI-SDK Ecosystem</h3>
                      <p className="text-sm text-gray-400">10 major AI/ML SDK implementations</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('sdk')}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Details
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-cyan-400">10</div>
                    <div className="text-xs text-gray-500">SDKs</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-cyan-400">25+</div>
                    <div className="text-xs text-gray-500">Providers</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-cyan-400">10</div>
                    <div className="text-xs text-gray-500">Stacks</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-xl font-bold text-cyan-400">Full</div>
                    <div className="text-xs text-gray-500">Coverage</div>
                  </div>
                </div>
              </div>
            ) : (
              <AISdkEcosystem />
            )}
          </motion.div>
        )}

        {/* View All Button */}
        {activeTab === 'all' && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-medium transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
              Expand All Ecosystems
            </button>
          </motion.div>
        )}

        {/* Full Content */}
        {showAll && activeTab === 'all' && (
          <>
            <SixtyProjectsEcosystem />
            <AIVibeEcosystem />
            <AISdkEcosystem />
          </>
        )}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  Cpu,
  ExternalLink,
  Github,
  Layers,
  Box,
  Sparkles,
  ChevronRight,
  Server,
  Code,
  Zap,
  Database,
} from "lucide-react";

const sdks = [
  {
    name: "AI-SDK-LANGCHAIN",
    description:
      "Production-ready LangChain SaaS with stateful multi-agent applications, cyclic graphs, and LangSmith integration",
    frontend: "Next.js 15",
    backend: "FastAPI",
    tech: ["Python", "TypeScript", "LangChain", "OpenAI"],
    features: [
      "Multi-Agent Systems",
      "Cyclic Workflows",
      "LangSmith Observability",
      "RAG Pipeline",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-LANGCHAIN",
    demo: "https://ai-sdk-langchain.vercel.app",
    color:
      "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400",
    icon: Layers,
  },
  {
    name: "AI-SDK-CREWAI",
    description:
      "Production CrewAI multi-agent SaaS with role-based AI teams, orchestration patterns, and RAG integration",
    frontend: "React 19",
    backend: "FastAPI",
    tech: ["Python", "TypeScript", "CrewAI", "Multi-Agent"],
    features: [
      "Role-Based Teams",
      "Orchestration Patterns",
      "RAG Integration",
      "Agent Swarms",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-CREWAI",
    demo: "https://ai-sdk-crewai.vercel.app",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400",
    icon: Box,
  },
  {
    name: "AI-SDK-AUTOGEN",
    description:
      "Distributed AutoGen multi-agent system with gRPC communication and multi-cloud deployment",
    frontend: "Vue 3",
    backend: ".NET 9",
    tech: ["C#", "Python", "Vue", "gRPC"],
    features: [
      "Distributed Agents",
      "gRPC Communication",
      "Multi-Cloud Deploy",
      "Azure Integration",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-AUTOGEN",
    demo: "https://ai-sdk-autogen.vercel.app",
    color:
      "from-purple-500/20 to-violet-500/20 border-purple-500/30 text-purple-400",
    icon: Cpu,
  },
  {
    name: "AI-SDK-OPENAI",
    description:
      "OpenAI Assistants API showcase with GPT-4o integration, function calling, and real-time streaming",
    frontend: "Angular 19",
    backend: "Go Fiber",
    tech: ["Go", "Angular", "Streaming", "Real-Time"],
    features: [
      "GPT-4o Integration",
      "Function Calling",
      "Streaming Responses",
      "Assistants API",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-OPENAI",
    demo: "https://ai-sdk-openai.vercel.app",
    color:
      "from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400",
    icon: Sparkles,
  },
  {
    name: "AI-SDK-VERCEL-AI",
    description:
      "Streaming generative UI demo with React Server Components, live chart rendering, and Next.js 15 RSC",
    frontend: "Next.js 15 RSC",
    backend: "Vercel AI SDK",
    tech: ["React", "TypeScript", "Streaming", "SaaS"],
    features: [
      "Generative UI",
      "RSC Architecture",
      "Live Charts",
      "OpenAI Integration",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-VERCEL-AI",
    demo: "https://ai-sdk-vercel-ai.vercel.app",
    color: "from-gray-500/20 to-slate-500/20 border-gray-500/30 text-gray-400",
    icon: Code,
  },
  {
    name: "AI-SDK-ANTHROPIC",
    description:
      "Anthropic Claude API showcase with extended thinking, message streaming, and Computer Use capabilities",
    frontend: "Remix",
    backend: "FastAPI",
    tech: ["Python", "Streaming", "TypeScript", "SaaS"],
    features: [
      "Extended Thinking",
      "Computer Use",
      "Message Streaming",
      "Claude API",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-ANTHROPIC",
    demo: "https://ai-sdk-anthropic.vercel.app",
    color:
      "from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-400",
    icon: Cpu,
  },
  {
    name: "AI-SDK-HAYSTACK",
    description:
      "Industrial document AI with Haystack 2.0 extractive QA, hybrid BM25+DPR retrieval, and Django backend",
    frontend: "Nuxt 3",
    backend: "Django",
    tech: ["Python", "Elasticsearch", "Retrieval", "Nuxt"],
    features: [
      "Extractive QA",
      "BM25 + DPR Hybrid",
      "Document Processing",
      "Industrial Scale",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-HAYSTACK",
    demo: "https://ai-sdk-haystack.vercel.app",
    color: "from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-teal-400",
    icon: Database,
  },
  {
    name: "AI-SDK-SEMANTIC-KERNEL",
    description:
      "Microsoft Semantic Kernel AI orchestration with skill-based plugins and enterprise connectors",
    frontend: "Astro 5",
    backend: "Flask",
    tech: ["Python", "Flask", "TypeScript", "AI Skills"],
    features: [
      "Skill-Based Plugins",
      "Enterprise Connectors",
      "Microsoft Integration",
      "Plugin System",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-SEMANTIC-KERNEL",
    demo: "https://ai-sdk-semantic-kernel.vercel.app",
    color:
      "from-indigo-500/20 to-blue-500/20 border-indigo-500/30 text-indigo-400",
    icon: Layers,
  },
  {
    name: "AI-SDK-LANGGRAPH",
    description:
      "Stateful LangGraph agent system with cyclic workflows, checkpointing, and real-time WebSocket streaming",
    frontend: "SvelteKit",
    backend: "Node.js",
    tech: ["TypeScript", "Node.js", "WebSockets", "Workflows"],
    features: [
      "Cyclic Workflows",
      "Checkpointing",
      "WebSocket Streaming",
      "State Management",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-LANGGRAPH",
    demo: "https://ai-sdk-langgraph.vercel.app",
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400",
    icon: Zap,
  },
  {
    name: "AI-SDK-LAMA-INDEX",
    description:
      "LlamaIndex data framework with 40+ vector stores, GraphRAG implementation, and T3 Stack + FastAPI",
    frontend: "T3 Stack",
    backend: "FastAPI",
    tech: ["Python", "TypeScript", "Next.js", "Pinecone"],
    features: [
      "40+ Vector Stores",
      "GraphRAG",
      "Data Framework",
      "RAG Pipeline",
    ],
    github: "https://github.com/mk-knight23/AI-SDK-LAMA-INDEX",
    demo: "https://ai-sdk-lama-index.vercel.app",
    color:
      "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400",
    icon: Server,
  },
];

const stats = [
  { value: "10", label: "SDKs", desc: "Major frameworks" },
  { value: "25+", label: "Providers", desc: "AI services" },
  { value: "10", label: "Stacks", desc: "Different tech" },
  { value: "Full", label: "Coverage", desc: "End-to-end" },
];

const architectureLayers = [
  {
    name: "Frontend",
    techs: [
      "Next.js 15",
      "React 19",
      "Vue 3",
      "Angular 19",
      "SvelteKit",
      "Nuxt 3",
      "Remix",
      "Astro 5",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Backend",
    techs: ["FastAPI", "Go Fiber", ".NET 9", "Django", "Flask", "Node.js"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "AI SDK",
    techs: [
      "LangChain",
      "CrewAI",
      "AutoGen",
      "OpenAI",
      "Vercel AI",
      "Anthropic",
      "Haystack",
      "Semantic Kernel",
      "LangGraph",
      "LlamaIndex",
    ],
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    name: "Infrastructure",
    techs: [
      "Vercel",
      "Azure",
      "Pinecone",
      "Elasticsearch",
      "WebSockets",
      "gRPC",
    ],
    color: "from-amber-500/20 to-orange-500/20",
  },
];

export function AISdkEcosystem() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">
              Ecosystem #3
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">AI-SDK Ecosystem</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-ready implementations of 10 major AI/ML SDK frameworks.
            Full-stack reference architectures for enterprise AI development.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-white/5 border border-white/10 rounded-xl text-center"
            >
              <div className="text-2xl font-bold text-cyan-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-600 mt-1">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold mb-6 text-center">
            Architecture Overview
          </h3>
          <div className="space-y-3">
            {architectureLayers.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-4 bg-gradient-to-r ${layer.color} border border-white/10 rounded-xl`}
              >
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm font-bold text-gray-300">
                    {layer.name}
                  </span>
                  <div className="flex-1 flex flex-wrap gap-2">
                    {layer.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SDK Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {sdks.map((sdk, i) => {
            const Icon = sdk.icon;
            return (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-6 bg-gradient-to-br ${sdk.color} border rounded-2xl group hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold truncate">{sdk.name}</h3>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                      <span className="px-2 py-0.5 bg-white/10 rounded">
                        {sdk.frontend}
                      </span>
                      <span>+</span>
                      <span className="px-2 py-0.5 bg-white/10 rounded">
                        {sdk.backend}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {sdk.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {sdk.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-1 mb-4">
                  {sdk.features.slice(0, 3).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs text-gray-400"
                    >
                      <ChevronRight className="w-3 h-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={sdk.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={sdk.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://mk-knight23.github.io/AI-SDK-ECOSYSTEM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Demo
          </a>
          <a
            href="https://github.com/mk-knight23/AI-SDK-ECOSYSTEM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

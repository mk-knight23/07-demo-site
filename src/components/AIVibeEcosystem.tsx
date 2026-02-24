import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  Globe,
  MessageSquare,
  Cpu,
  ExternalLink,
  Github,
  Sparkles,
  Bot,
  Workflow,
  Zap,
  Layers,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    name: "AI-VIBE-CLI-Python",
    category: "CLI Tools",
    description:
      "Enterprise-grade autonomous AI coding assistant CLI with 16+ tools, agent swarms, and MCP integration",
    tech: ["Python", "Kubernetes", "MCP", "Autonomous Agents"],
    features: [
      "16+ Developer Tools",
      "Agent Swarm Orchestration",
      "MCP Integration",
      "Kubernetes Deployment",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-CLI-Python",
    icon: Terminal,
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
  },
  {
    name: "AI-VIBE-CLI-TypeScript",
    category: "CLI Tools",
    description:
      "Opinionated AI development tool using 8-primitives architecture and MCP for context-aware coding",
    tech: ["Node.js", "TypeScript", "MCP", "CLI"],
    features: [
      "8-Primitives Architecture",
      "Context-Aware Assistance",
      "Vibe Coding Support",
      "Software Development",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-CLI-TypeScript",
    icon: Code2,
    color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400",
  },
  {
    name: "AI-VIBE-WEBSITE-BUILDER-V2",
    category: "Website Builders",
    description:
      "Advanced AI-powered mobile app design platform with draggable flow-based canvas and realistic device mockups",
    tech: ["Next.js", "Prisma", "XYFlow", "AI Design"],
    features: [
      "Draggable Flow Canvas",
      "Device Mockups",
      "Mobile Design Focus",
      "AI-Powered Generation",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-WEBSITE-BUILDER-V2",
    icon: Globe,
    color:
      "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
  },
  {
    name: "AI-VIBE-WEBSITE-BUILDER-V1",
    category: "Website Builders",
    description:
      "Real-time AI website builder with multi-provider streaming, Prisma ORM, and Clerk authentication",
    tech: ["Next.js", "Prisma", "Clerk", "Streaming"],
    features: [
      "Multi-Provider Streaming",
      "Prisma ORM",
      "Clerk Auth",
      "AI Generation",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-WEBSITE-BUILDER-V1",
    icon: Layers,
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400",
  },
  {
    name: "AI-VIBE-AUTOMATION-V2",
    category: "AI Automation",
    description:
      "Scalable, type-safe workflow automation engine inspired by n8n, built with Next.js 15, tRPC, and Prisma",
    tech: ["TypeScript", "Next.js 15", "tRPC", "Prisma"],
    features: [
      "Type-Safe Workflows",
      "Visual Orchestrator",
      "n8n-Inspired",
      "Background Jobs",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-AUTOMATION-V2",
    icon: Workflow,
    color:
      "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
  },
  {
    name: "AI-VIBE-AUTOMATION-V1",
    category: "AI Automation",
    description:
      "Modern AI workflow automation platform with drag-and-drop simplicity, background jobs, and multi-LLM support",
    tech: ["Next.js", "React Flow", "Inngest", "AI Agents"],
    features: [
      "Drag-and-Drop Builder",
      "Background Jobs",
      "Multi-LLM Support",
      "Workspace Management",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-AUTOMATION-V1",
    icon: Zap,
    color:
      "from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-400",
  },
  {
    name: "AI-VIBE-CHAT-V4",
    category: "Chat Interfaces",
    description:
      "AI API Provider showcase and benchmarking dashboard with interactive pricing calculators and performance metrics",
    tech: ["TypeScript", "Next.js", "Recharts", "Dashboard"],
    features: [
      "Provider Benchmarks",
      "Pricing Calculator",
      "Performance Metrics",
      "Analytics",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-CHAT-V4",
    icon: MessageSquare,
    color:
      "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
  },
  {
    name: "AI-VIBE-CHAT-V3",
    category: "Chat Interfaces",
    description:
      "Delightfully formal yet humorous AI agent interface built with Next.js 15, React 19, and multi-provider LLM routing",
    tech: ["React", "TypeScript", "Next.js", "Groq"],
    features: [
      "Multi-Provider LLM",
      "Humor Integration",
      "AI Agent Personality",
      "Modern Stack",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-CHAT-V3",
    icon: Bot,
    color: "from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-teal-400",
  },
  {
    name: "AI-VIBE-CHAT-V2",
    category: "Chat Interfaces",
    description:
      "High-performance AI chat interface inspired by ChatGPT, built with SvelteKit 5 and Tailwind CSS 4",
    tech: ["TypeScript", "Svelte", "TailwindCSS", "SvelteKit"],
    features: [
      "ChatGPT-Inspired UI",
      "SvelteKit 5",
      "Tailwind CSS 4",
      "High Performance",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-CHAT-V2",
    icon: MessageSquare,
    color:
      "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400",
  },
  {
    name: "AI-VIBE-CHAT-V1",
    category: "Chat Interfaces",
    description:
      "Feature-rich AI chat interface built with Nuxt 3 and Naive UI, featuring advanced encryption and glassmorphism design",
    tech: ["Vue", "Nuxt", "Naive UI", "Pinia"],
    features: [
      "Advanced Encryption",
      "Glassmorphism Design",
      "Naive UI",
      "Pinia State",
    ],
    github: "https://github.com/mk-knight23/AI-VIBE-CHAT-V1",
    icon: MessageSquare,
    color:
      "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400",
  },
];

const stats = [
  { value: "10", label: "Projects", desc: "AI-powered tools" },
  { value: "30+", label: "LLMs", desc: "Integrated models" },
  { value: "4", label: "Categories", desc: "CLI, Web, Chat, Auto" },
  { value: "AI", label: "Focus", desc: "Agentic systems" },
];

const categories = [
  "CLI Tools",
  "Website Builders",
  "AI Automation",
  "Chat Interfaces",
];

export function AIVibeEcosystem() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">
              Ecosystem #2
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">AI-VIBE Ecosystem</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Autonomous agents, modern chat interfaces, and intelligent
            automation tools. A comprehensive suite of AI-powered developer
            tools.
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
              <div className="text-2xl font-bold text-purple-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-600 mt-1">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, i) => (
            <span
              key={category}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-6 bg-gradient-to-br ${project.color} border rounded-2xl group hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold truncate">
                        {project.name}
                      </h3>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-1 mb-4">
                  {project.features.slice(0, 3).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs text-gray-400"
                    >
                      <ChevronRight className="w-3 h-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:underline"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
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
            href="https://mk-knight23.github.io/AI-VIBE-ECOSYSTEM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Demo
          </a>
          <a
            href="https://github.com/mk-knight23/AI-VIBE-ECOSYSTEM"
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

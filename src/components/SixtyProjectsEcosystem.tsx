import { motion } from "framer-motion";
import {
  FolderGit2,
  Gamepad2,
  Wrench,
  Rocket,
  ExternalLink,
  Github,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    name: "Web Projects",
    count: 16,
    description: "Modern web applications built with cutting-edge frameworks",
    tech: ["React 19", "Vue 3", "Angular", "Next.js"],
    icon: FolderGit2,
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400",
    highlights: [
      "Portfolio Sites",
      "Dashboard Apps",
      "E-commerce",
      "Social Apps",
    ],
  },
  {
    name: "Games",
    count: 10,
    description:
      "Interactive browser-based games demonstrating canvas and WebGL skills",
    tech: ["HTML5 Canvas", "JavaScript", "TypeScript", "Phaser"],
    icon: Gamepad2,
    color:
      "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
    highlights: [
      "Arcade Classics",
      "Puzzle Games",
      "Action Games",
      "Strategy Games",
    ],
  },
  {
    name: "Tools",
    count: 10,
    description: "Developer utilities and productivity applications",
    tech: ["Firebase", "React", "Node.js", "Chrome APIs"],
    icon: Wrench,
    color:
      "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
    highlights: [
      "Developer Tools",
      "Productivity Apps",
      "Converter Tools",
      "Chrome Extensions",
    ],
  },
  {
    name: "Starter Templates",
    count: 16,
    description: "Ready-to-use project scaffolds for rapid development",
    tech: ["Vite", "Next.js", "Vue CLI", "CRA"],
    icon: Rocket,
    color:
      "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    highlights: [
      "React Starters",
      "Vue Starters",
      "Fullstack Starters",
      "SaaS Starters",
    ],
  },
];

const stats = [
  { value: "60+", label: "Projects", desc: "Production-ready" },
  { value: "4", label: "Categories", desc: "Diverse domains" },
  { value: "100%", label: "Live", desc: "All deployed" },
  { value: "25+", label: "Technologies", desc: "Modern stack" },
];

export function SixtyProjectsEcosystem() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full mb-6">
            <FolderGit2 className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium">
              Ecosystem #1
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">60 Projects Ecosystem</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-ready portfolio covering Web Apps, Games, Tools, and
            Starter Templates. A comprehensive showcase of modern development
            capabilities.
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
              <div className="text-2xl font-bold text-indigo-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-600 mt-1">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 bg-gradient-to-br ${category.color} border rounded-2xl group hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs font-mono">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {category.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <ChevronRight className="w-3 h-3" />
                      <span>{highlight}</span>
                    </div>
                  ))}
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
            href="https://www.mkazi.live"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Demo
          </a>
          <a
            href="https://github.com/mk-knight23/60-Projects"
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

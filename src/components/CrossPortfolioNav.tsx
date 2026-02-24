import { motion } from "framer-motion";
import {
  ExternalLink,
  Code,
  Layers,
  Box,
  Cpu,
  Sparkles,
  Zap,
  Bot,
} from "lucide-react";

interface Portfolio {
  id: string;
  name: string;
  title: string;
  theme: string;
  stack: string;
  url: string;
}

const portfolios: Portfolio[] = [
  {
    id: "01",
    name: "portfolio-devtools",
    title: "DevTools",
    theme: "Dark + Neon",
    stack: "HTML/CSS",
    url: "https://portfolio-devtools.web.app",
  },
  {
    id: "02",
    name: "portfolio-fullstack",
    title: "Fullstack",
    theme: "Clean SaaS",
    stack: "TypeScript",
    url: "https://mk-knight-fullstack.web.app",
  },
  {
    id: "03",
    name: "portfolio-frontend",
    title: "Frontend",
    theme: "Modern",
    stack: "HTML/CSS/JS",
    url: "https://mk-knight-frontend.web.app",
  },
  {
    id: "04",
    name: "portfolio-backend",
    title: "Backend",
    theme: "Dark Technical",
    stack: "TypeScript",
    url: "https://mk-knight-backend.web.app",
  },
  {
    id: "05",
    name: "portfolio-frontend-ai",
    title: "Frontend AI",
    theme: "Modern + AI",
    stack: "TypeScript",
    url: "https://mk-knight-frontend-ai.web.app",
  },
  {
    id: "06",
    name: "portfolio-senior-frontend",
    title: "Senior FE",
    theme: "Vue/Elegant",
    stack: "Vue/Vite",
    url: "https://mk-knight-senior-frontend.web.app",
  },
  {
    id: "07",
    name: "portfolio-indie-saas",
    title: "Indie SaaS",
    theme: "Startup Style",
    stack: "TypeScript",
    url: "https://portfolio-indie-saas.web.app",
  },
  {
    id: "08",
    name: "portfolio-ai-automation",
    title: "AI Automation",
    theme: "React/Tech",
    stack: "React/TS",
    url: "https://portfolio-ai-automation.web.app",
  },
];

const getPortfolioIcon = (id: string) => {
  switch (id) {
    case "01":
      return Code;
    case "02":
      return Layers;
    case "03":
      return Box;
    case "04":
      return Cpu;
    case "05":
      return Sparkles;
    case "06":
      return Zap;
    case "07":
      return ExternalLink;
    case "08":
      return Bot;
    default:
      return ExternalLink;
  }
};

const getPortfolioColor = (id: string) => {
  switch (id) {
    case "01":
      return "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400";
    case "02":
      return "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400";
    case "03":
      return "from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-400";
    case "04":
      return "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400";
    case "05":
      return "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400";
    case "06":
      return "from-green-500/20 to-lime-500/20 border-green-500/30 text-green-400";
    case "07":
      return "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-400";
    case "08":
      return "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400";
    default:
      return "from-gray-500/20 to-slate-500/20 border-gray-500/30 text-gray-400";
  }
};

export function CrossPortfolioNav() {
  const currentId = "08";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-8 border-b border-white/10 bg-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
            Portfolio Ecosystem
          </h3>
          <span className="text-xs text-gray-600">8 Specialized Views</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {portfolios.map((portfolio, index) => {
            const Icon = getPortfolioIcon(portfolio.id);
            const isActive = portfolio.id === currentId;
            const colorClasses = getPortfolioColor(portfolio.id);

            return (
              <motion.a
                key={portfolio.id}
                href={portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`
                  flex-shrink-0 group relative p-4 rounded-xl border transition-all duration-300
                  ${
                    isActive
                      ? `bg-gradient-to-br ${colorClasses} ring-2 ring-indigo-500/50`
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`
                    p-2 rounded-lg
                    ${isActive ? "bg-white/10" : "bg-white/5 group-hover:bg-white/10"}
                  `}
                  >
                    <Icon
                      className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}
                    />
                  </div>
                  <div>
                    <div
                      className={`
                      text-sm font-semibold
                      ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}
                    `}
                    >
                      {portfolio.title}
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono">
                      {portfolio.stack}
                    </div>
                  </div>
                  {!isActive && (
                    <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-gray-400 transition-colors" />
                  )}
                </div>

                {isActive && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

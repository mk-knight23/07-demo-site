import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, ExternalLink, Code, Briefcase, GraduationCap, ChevronDown, User } from 'lucide-react';

const config = {
    firstName: "Kazi",
    lastName: "Musharraf",
    message: "Passionate about changing the world with technology.",
    about: "My name is KAZI MUSHARRAF. I’m a Project Engineer At WIPRO TECHNOLOGIES Working as FULL STACK DEVELOPER. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.",
    skills: {
        hard: [
            { name: "Java", value: 95 },
            { name: "Python", value: 90 },
            { name: "MYSQL", value: 75 },
            { name: "Spring Boot", value: 90 },
            { name: "JavaScript", value: 90 },
            { name: "Angular", value: 90 },
        ],
        soft: [
            { name: "Goal-Oriented", value: 80 },
            { name: "Leadership", value: 70 },
            { name: "Problem Solving", value: 75 },
            { name: "Time Management", value: 90 },
        ]
    },
    projects: ["WebsiteChatGpt", "MK-ALL-REPOS", "Clock-REACT", "mk12"],
    social: [
        { name: "Github", icon: <Github className="w-5 h-5" />, url: "https://github.com/mk-knight23" },
        { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/kazi_musharraf_01" },
        { name: "Linkedin", icon: <Linkedin className="w-5 h-5" />, url: "https://in.linkedin.com/in/kazi-musharraf-0674871a4" }
    ]
};

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="bg-slate-50 min-h-screen">
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100]" style={{ scaleX }} />

            {/* Hero */}
            <section className="h-screen relative flex items-center justify-center overflow-hidden gradient-bg text-white">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 rounded-full border-4 border-white/30 p-1 mx-auto overflow-hidden bg-white/10 backdrop-blur-md">
                            <div className="w-full h-full rounded-full bg-indigo-500 flex items-center justify-center">
                                <User size={64} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
                    >
                        {config.firstName} <span className="text-white/70">{config.lastName}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl font-medium text-white/80 max-w-2xl mx-auto mb-10"
                    >
                        {config.message}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4"
                    >
                        {config.social.map(s => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-md transition-all border border-white/20"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                    <ChevronDown className="w-8 h-8" />
                </div>
            </section>

            {/* About */}
            <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-black mb-8 flex items-center gap-4">
                        <span className="w-12 h-1.5 bg-indigo-500 rounded-full" />
                        About Me
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        {config.about}
                    </p>
                    <div className="flex gap-4">
                        <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center gap-3">
                            <Briefcase className="text-indigo-500" />
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Role</p>
                                <p className="font-bold text-slate-900">Project Engineer @ Wipro</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                >
                    {config.skills.hard.map((skill, idx) => (
                        <div key={skill.name} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-500/50 transition-all group">
                            <p className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">{skill.name}</p>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.value}%` }}
                                    className="h-full bg-indigo-500 rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Projects */}
            <section className="py-24 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-black mb-16 text-center">Featured Work</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {config.projects.map((p, idx) => (
                            <motion.div
                                key={p}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-slate-900 hover:text-white transition-all duration-500"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{p}</h3>
                                <p className="text-slate-500 group-hover:text-slate-400 mb-6 font-medium">
                                    A high-performance repository built with modern architectural patterns. Part of the Kazi open-source ecosystem.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-white/50 dark:bg-black/50 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 group-hover:border-white/20">TypeScript</span>
                                    <span className="px-3 py-1 bg-white/50 dark:bg-black/50 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 group-hover:border-white/20">Scalable</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center bg-slate-50">
                <div className="flex justify-center gap-8 mb-10">
                    {config.social.map(s => (
                        <a key={s.name} href={s.url} className="text-slate-400 hover:text-indigo-500 transition-colors">
                            {s.icon}
                        </a>
                    ))}
                </div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">© 2024 Kazi Musharraf • 30 Projects Rebuild</p>
            </footer>
        </div>
    );
}

export default App;

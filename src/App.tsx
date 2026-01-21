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

            {/* Premium Hero Section */}
            <section className="h-[90vh] relative flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-10"
                    >
                        <div className="w-40 h-40 rounded-[2.5rem] border border-white/10 p-2 mx-auto overflow-hidden bg-white/[0.03] backdrop-blur-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <User size={80} className="text-white shadow-2xl" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.8]"
                    >
                        {config.firstName} <br /><span className="bg-gradient-to-br from-indigo-400 via-white to-blue-400 bg-clip-text text-transparent">{config.lastName}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl font-medium text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        {config.message}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex items-center justify-center gap-6"
                    >
                        {config.social.map(s => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                className="p-5 bg-white/[0.03] hover:bg-white/[0.08] rounded-2xl backdrop-blur-xl transition-all border border-white/5 active:scale-95 group"
                            >
                                <div className="group-hover:scale-110 transition-transform">{s.icon}</div>
                            </a>
                        ))}
                    </motion.div>
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
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                                className="p-10 rounded-[3rem] bg-white border border-slate-100 group shadow-sm hover:shadow-[0_48px_96px_-16px_rgba(79,70,229,0.12)] transition-all duration-500"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        <Code className="w-8 h-8" />
                                    </div>
                                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                        <ExternalLink className="w-6 h-6 text-slate-400" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black mb-5 tracking-tight group-hover:text-indigo-600 transition-colors">{p}</h3>
                                <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                                    A high-performance repository built with modern architectural patterns. Part of the Kazi open-source ecosystem.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-5 py-2 bg-slate-50 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">TypeScript</span>
                                    <span className="px-5 py-2 bg-slate-50 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">Scalable</span>
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

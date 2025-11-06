import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import photo from '../assets/sakil.jpg';
import cover from '../assets/cover.jpg';
const projects = [
    {
        id: 1,
        title: "Smart Restaurant App",
        desc: "Real-time ordering and kitchen management — React, Node, Socket.io.",
        tech: ["React", "Node", "MongoDB"],
        live: "#",
        code: "#",
    },
    {
        id: 2,
        title: "E‑Commerce UI",
        desc: "Fast product listing, filters, and cart UX — Tailwind + Context API.",
        tech: ["React", "Tailwind", "Context"],
        live: "#",
        code: "#",
    },
    {
        id: 3,
        title: "Interactive Dashboard",
        desc: "Data visualizations, charts, and clean admin panels.",
        tech: ["React", "Recharts", "Express"],
        live: "#",
        code: "#",
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
    // Edit these constants to your own content
    const NAME = "Ashraful Rahman Sakil";
    const TAGLINE = "I build modern, fast, and stunning web experiences."; // <-- change to your own tagline
    const EMAIL = "ashrafulrahmansakil@gmail.com"; // <-- change

    const projectsData = [
        { id: 1, title: "Own Project 1", desc: "Short description of your project. Replace with your own.", tech: ["React", "Tailwind"], live: "#", code: "#" },
        { id: 2, title: "Own Project 2", desc: "Short description of your project. Replace with your own.", tech: ["Node", "MongoDB"], live: "#", code: "#" },
        { id: 3, title: "Own Project 3", desc: "Short description of your project. Replace with your own.", tech: ["Next.js", "Prisma"], live: "#", code: "#" },
    ];

    const [dark, setDark] = useState(false);

    return (
        <div className={dark ? "min-h-screen bg-gradient-to-b from-[#071024] via-[#0b1220] to-[#0b0f1b] text-slate-100" : "min-h-screen bg-white text-slate-900"}>
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* Header */}
                <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-6 dark:bg-[rgba(7,16,36,0.9)] backdrop-blur-md border-b border-slate-700/40">

                    <div className="flex items-center gap-4">
                        <div className="rounded-md px-2 py-1 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-sm font-semibold">ARS</div>
                        <div>
                            <div className="text-2xl font-bold tracking-tight">{NAME}</div>
                            <div className="text-sm dark:text-slate-400">Frontend & MERN Stack Developer</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <nav className="hidden md:flex gap-6 text-sm dark:text-slate-300">
                            <a href="#projects" className="hover:text-cyan-500">Projects</a>
                            <a href="#skills" className="hover:text-cyan-500">Skills</a>
                            <a href="#contact" className="hover:text-cyan-500">Contact</a>
                        </nav>

                        <button
                            onClick={() => setDark(!dark)}
                            className="p-2 rounded-md border border-transparent hover:border-slate-600 text-"
                            aria-label="Toggle theme"
                        >
                            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                    </div>
                </header>

                {/* Hero */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-2xl p-8 mt-20"
                    style={{
                        background: dark
                            ? "linear-gradient(135deg, rgba(11,20,40,0.6), rgba(124,58,237,0.06))"
                            : "linear-gradient(135deg, rgba(6,182,212,0.06), rgba(124,58,237,0.03))",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                Welcome — <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] via-[#7c3aed] to-[#fb7185]">{NAME.split(' ')[0]}</span>
                                <br />
                                {TAGLINE}
                            </h1>

                            <p className="mt-4 dark:text-slate-100 text-slate-800 max-w-xl">
                                Clean UI, thoughtful interactions, and performance-focused frontends — React + Tailwind specialist.
                            </p>

                            <div className="mt-6 flex gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg font-medium border border-transparent hover:scale-[1.02] transform transition"
                                    style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}
                                >
                                    🚀 Hire Me
                                </a>

                                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-sm hover:bg-slate-800 transition">
                                    👀 View Projects
                                </a>
                            </div>
                        </motion.div>

                        {/* Avatar Card */}
                        <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                            <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg,#071024, rgba(12,40,80,0.8))" }}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white/10 flex items-center justify-center text-xl font-semibold bg-gradient-to-br from-[#06b6d4]/30 to-[#7c3aed]/30">
                                        <img src={photo} alt="Ashraful Rahman Sakil" className="w-full h-full object-cover rounded-full" />

                                    </div>
                                </div>
                                <motion.div
                                    animate={{ rotate: [0, 6, 0], x: [-6, 6, -6] }}
                                    transition={{ repeat: Infinity, duration: 8 }}
                                    className="absolute -left-8 -top-6 w-20 h-20 rounded-lg opacity-30"
                                    style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* About */}
                <motion.section id="about" className="mt-10 p-6 rounded-xl" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
                    <motion.h2 variants={itemUp} className="text-2xl font-bold">About Me</motion.h2>
                    <motion.div variants={itemUp} className="mt-4 md:flex gap-6 items-start">
                        <div className="md:w-1/3">
                            <div className="w-52 h-60 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#06b6d4]/20 to-[#7c3aed]/10 flex items-center justify-center">
                                <div className="text-lg font-semibold"> <img src={cover} alt="Ashraful Rahman Sakil" className="object-cover" /></div>
                            </div>
                        </div>
                        <div className="md:flex-1 mt-4 md:mt-0">
                            <p className="text-slate-300">
                                I’m a front-end developer passionate about crafting pixel-perfect interfaces and smooth interactions. I love turning design ideas into fast, accessible, and delightful products.
                            </p>

                            <ul className="mt-4 grid grid-cols-2 gap-2">
                                <li className="text-sm">• React</li>
                                <li className="text-sm">• Tailwind CSS</li>
                                <li className="text-sm">• Framer Motion</li>
                                <li className="text-sm">• Node.js</li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Projects */}
                <motion.section id="projects" className="mt-10">
                    <motion.h2 className="text-2xl font-bold">Selected Projects</motion.h2>

                    <motion.div className="grid md:grid-cols-3 gap-6 mt-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        {projectsData.map((p, i) => (
                            <motion.article
                                key={p.id}
                                variants={itemUp}
                                className="rounded-2xl p-5 shadow-xl backdrop-blur-sm border border-white/5 hover:scale-105 transition-transform bg-gradient-to-b from-white/2 to-transparent"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-semibold text-lg">{p.title}</h3>
                                        <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                                            {p.tech.map((t) => (
                                                <span key={t} className="px-2 py-1 rounded-md border border-white/5">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm">
                                        <a href={p.live} className="px-3 py-1 rounded-md border">Live</a>
                                        <a href={p.code} className="px-3 py-1 rounded-md border">Code</a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Skills */}
                <motion.section id="skills" className="mt-10 p-6 rounded-xl" initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <motion.h2 variants={itemUp} className="text-2xl font-bold">Skills</motion.h2>
                    <motion.div variants={itemUp} className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <SkillCard name="React" level={90} />
                        <SkillCard name="Tailwind" level={85} />
                        <SkillCard name="Framer Motion" level={70} />
                    </motion.div>
                </motion.section>

                {/* Contact */}
                <motion.section id="contact" className="mt-10 p-6 rounded-xl" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <p className="mt-2 text-slate-300">Let’s create something amazing together — send a quick message.</p>

                    <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input className="p-3 rounded-md border border-white/5 bg-transparent" placeholder="Your name" />
                        <input className="p-3 rounded-md border border-white/5 bg-transparent" placeholder="Email" />
                        <textarea className="md:col-span-2 p-3 rounded-md border border-white/5 bg-transparent" rows={5} placeholder="Message" />

                        <div className="md:col-span-2 flex items-center gap-3">
                            <button type="submit" className="px-4 py-2 rounded-lg font-medium" style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}>
                                Send Message
                            </button>
                            <div className="ml-auto flex gap-3 text-xl">
                                <a href="#" aria-label="GitHub" title="GitHub"><FiGithub /></a>
                                <a href="#" aria-label="LinkedIn" title="LinkedIn"><FiLinkedin /></a>
                                <a href="#" aria-label="Email" title="Email"><FiMail /></a>
                            </div>
                        </div>
                    </form>
                    <p className="mt-4 text-sm text-slate-400">Or email me directly at <span className="font-medium">{EMAIL}</span></p>
                </motion.section>

                {/* Footer */}
                <footer className="mt-12 py-6 text-center text-sm text-slate-400">
                    Built with ❤️ by {NAME} — <a href="#" className="underline">Download CV</a>
                </footer>
            </div>

            {/* subtle scroll progress */}
            <ScrollProgressBar />
        </div>
    );
}

function SkillCard({ name, level = 60 }) {
    return (
        <div className="p-4 rounded-xl border border-white/5 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="font-medium">{name}</div>
                <div className="text-sm text-slate-400">{level}%</div>
            </div>
            <div className="mt-3 h-3 w-full bg-white/6 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${level}%`, background: 'linear-gradient(90deg,#06b6d4,#7c3aed)' }} />
            </div>
        </div>
    );
}

function ScrollProgressBar() {
    // simple scroll progress as a thin top bar
    const [progress, setProgress] = useState(0);
    React.useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(pct);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed left-0 right-0 h-1 z-50 top-[5rem] bg-transparent">

            <div style={{ width: `${progress}%`, height: 4, background: 'linear-gradient(90deg,#06b6d4,#7c3aed)' }} />
        </div>
    );
}

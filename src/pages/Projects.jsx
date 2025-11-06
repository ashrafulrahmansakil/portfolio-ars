
import { motion } from 'framer-motion';
import SkillCard from './../components/SkillCard/SkillCard';
export default function Projects() {
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


  const projectsData = [
    { id: 1, title: "Own Project 1", desc: "Short description of your project. Replace with your own.", tech: ["React", "Tailwind"], live: "#", code: "#" },
    { id: 2, title: "Own Project 2", desc: "Short description of your project. Replace with your own.", tech: ["Node", "MongoDB"], live: "#", code: "#" },
    { id: 3, title: "Own Project 3", desc: "Short description of your project. Replace with your own.", tech: ["Next.js", "Prisma"], live: "#", code: "#" },
  ];
  return (
    <div className="scroll-mt-10" id="projects">
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

    </div>
  )
}

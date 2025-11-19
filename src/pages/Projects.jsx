import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectsList } from '../data/data';
import { FaEye } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa';

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

  return (
    <>
      <motion.section className="scroll-mt-12 p-6" id="projects">
        <motion.h2 className="text-2xl font-bold">Projects</motion.h2>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 " variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {ProjectsList && ProjectsList.map((p) => (
            <motion.article
              key={p.id}
              variants={itemUp}
              className="rounded-2xl dark:border-slate-300 border-slate-300 p-5 shadow-xl backdrop-blur-sm border  hover:scale-95 transition-transform bg-gradient-to-b from-white/2 to-transparent"
            >
              <div className="">
                <img src={p.thumbnail} alt={p.title} className='w-fit h-50' />
                <div>
                  <h3 className="font-semibold text-lg capitalize pt-2">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm capitalize">
                    {p.tech?.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row gap-2 text-sm">
                  <Link to={p.link} target='_blank' className="px-3 py-1 rounded-md border hover:bg-slate-200"><FaEye /></Link>
                  <Link to={p.github} target='_blank' className="px-3 py-1 rounded-md border hover:bg-slate-200"><FaCode /></Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

    </>
  )
}

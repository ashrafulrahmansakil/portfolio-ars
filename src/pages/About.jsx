
import { motion } from 'framer-motion';
import cover from '../assets/cover.jpg';
import { about } from '../data/data';
export default function About() {
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
      <motion.section id="about" className="scroll-mt-12 p-6 rounded-xl" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
        <motion.h2 variants={itemUp} className="text-2xl font-bold">About Me</motion.h2>
        <motion.div variants={itemUp} className="mt-4 md:flex gap-6 items-start">
          <div className="md:w-1/3">
            <div className="w-52 h-60 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#06b6d4]/20 to-[#7c3aed]/10 flex items-center justify-center">
              <div className="text-lg font-semibold"> <img src={cover} alt="Ashraful Rahman Sakil" className="object-cover" /></div>
            </div>
          </div>
          <div className="md:flex-1 mt-4 md:mt-0">
            <p className="text-slate-800 dark:text-slate-50 text-justify text-xl">
              {about.myself.map((my) => (
                <span key={my.id}>{my.details}</span>
              ))}
            </p>
            <br />
            <p className="text-slate-800 dark:text-slate-50 text-justify text-xl">
              {about.programmingLanguage.map((my) => (
                <span key={my.id}>{my.details}</span>
              ))}
            </p>
            <ul className="pt-2 grid grid-cols-4 gap-2">
              <li className="text-sm">Nextjs</li>
              <li className="text-sm">Reactjs</li>
              <li className="text-sm">MongoDB</li>
              <li className="text-sm"></li>
            </ul>
          </div>
          <div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

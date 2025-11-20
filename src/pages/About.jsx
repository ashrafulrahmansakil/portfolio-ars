
import { motion } from 'framer-motion';
import cover from '../assets/cover.jpg';
import { about } from '../data/data';
import Button from './../components/Button/Button';
import { Link } from 'react-router-dom';
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
            <Link to={about.myself[0].selfResume} target="_blank" rel="noopener noreferrer">
              <Button className=" border p-2 rounded-xl uppercase w-32 text-white cursor-pointer hover:scale-[1.02] transform transition" name="resume / cv" style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}></Button>
            </Link>
          </div>
          <div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

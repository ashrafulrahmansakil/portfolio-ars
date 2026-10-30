import { motion } from "framer-motion";
import { jobExperience } from "../data/data";

export default function JobExperience() {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id='experience'
      className='scroll-mt-12 p-6 rounded-xl'
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      variants={container}>
      <h2 className='uppercase font-bold mb-8 text-2xl'>Job Experience</h2>

      <motion.div
        variants={itemUp}
        className='relative border-l-4 border-blue-500 ml-6'>
        {jobExperience.map((job) => (
          <motion.div
            key={job.id}
            className='mb-5 ml-6 relative'
            variants={itemUp}>
            {/* Circle marker */}
            <span className='absolute -left-9 top-0 w-5 h-5 bg-blue-700 rounded-full border-2 border-white'></span>
            <time className='mb-1 text-md font-semibold text-cyan-500 block'>
              {job.year}
            </time>
            <h3 className='text-md  font-semibold capitalize'>
              {job.position}
            </h3>
            <p className='font-bold text-slate-500 capitalize'>{job.company}</p>
            <p className='mt-2 text-slate-500 capitalize'>{job.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

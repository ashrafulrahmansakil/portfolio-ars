import { motion } from 'framer-motion';
import { skillsList } from '../data/data';

export default function Skills() {
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
        <motion.section id="skills" className="scroll-mt-12 p-6 rounded-xl" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
            <motion.h1 variants={itemUp} className="text-2xl font-bold uppercase">Skills</motion.h1>

            <motion.p variants={itemUp} className="font-semibold text-lg  uppercase bg-slate-200 dark:bg-cyan-950 w-32 text-center rounded">
                {skillsList.frontend.name}
            </motion.p>
            <motion.div
                variants={itemUp}
                className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
            >
                {skillsList.frontend.fskills.map((skill, _index) => (
                    <motion.p
                        key={_index}
                        variants={itemUp}

                        className="p-2 bg-slate-200 dark:bg-slate-800 rounded-lg shadow text-center"
                    >
                        {skill}
                    </motion.p>
                ))}
            </motion.div>
            <motion.p variants={itemUp} className="font-semibold text-lg mt-5 uppercase bg-slate-200 dark:bg-cyan-950 w-32 text-center rounded">
                {skillsList.backend.name}
            </motion.p>
            <motion.div
                variants={itemUp}
                className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
            >
                {skillsList.backend.bskills.map((skill, _index) => (
                    <motion.p
                        key={_index}
                        variants={itemUp}

                        className="p-2 bg-slate-200 dark:bg-slate-800 rounded-lg shadow text-center"
                    >
                        {skill}
                    </motion.p>
                ))}
            </motion.div>
        </motion.section>
    )
}

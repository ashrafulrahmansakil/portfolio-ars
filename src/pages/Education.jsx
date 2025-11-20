import React from 'react'
import { motion } from 'framer-motion';
import { educationData } from '../data/data';

export default function Education() {
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
        <motion.section id="education" className="scroll-mt-12 p-6 rounded-xl" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>

            <h2 className="uppercase font-bold mb-8 text-xl">Educational qualification</h2>

            <motion.div variants={itemUp} className="relative border-l-4 border-cyan-500 ml-6">
                {educationData.map((edu) => (
                    <motion.div key={edu.id} className="mb-5 ml-6 relative" variants={itemUp}>
                        {/* Circle marker */}
                        <span className="absolute -left-9 top-1.5 w-5 h-5 bg-cyan-700 rounded-full border-2 border-white"></span>
                        <time className="mb-1 text-md font-semibold text-cyan-500 block">{edu.year}</time>
                        <h3 className="text-md  font-semibold">{edu.degree}</h3>
                        <p className="font-bold text-slate-500">{edu.institution}</p>
                        <p className="mt-2 text-slate-500">{edu.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}




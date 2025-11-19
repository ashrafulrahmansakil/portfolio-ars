import React from 'react'
import { motion } from 'framer-motion';
import { experience } from "../data/data"

export default function Experience() {
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
        <motion.section id="experience" className="scroll-mt-12 p-6 rounded-xl" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} >


            <h1 className='text-2xl font-bold mb-4'>Experience</h1>
            <div className='relative border-l-4 border-cyan-500' variants={itemUp}>

                {experience.map((ex) => (
                    <div key={ex.id} className="mb-5 ml-6 relative capitalize">
                        {/* Circle marker */}
                        <span className="absolute -left-9 top-1.5 w-5 h-5 bg-cyan-700 rounded-full border-2 border-white"></span>
                        <time className="mb-1 text-md font-semibold text-cyan-500 block">{ex.year}</time>
                        <h3 className="text-md  font-semibold">{ex.degree}</h3>
                        <p className="font-bold ">{ex.institution}</p>
                        <p className="mt-2 ">{ex.description}</p>

                    </div>
                ))}
            </div>
        </motion.section>
    )
}
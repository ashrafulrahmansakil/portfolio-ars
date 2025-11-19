import { motion } from 'framer-motion';
import photo from "../assets/sakil.jpg";
import { HashLink } from 'react-router-hash-link';
import TypewriterFramer from './../components/TypeWritter/TypeWritter';

export default function Hero() {
  const TAGLINE = "I build beautiful web experiences.";
  return (
    <div id='home' className="mt-10 scroll-mt-96">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl p-8 "
        style={{
          background: ''
            ? "linear-gradient(135deg, rgba(11,20,40,0.6), rgba(124,58,237,0.06))"
            : "linear-gradient(135deg, rgba(6,182,212,0.06), rgba(124,58,237,0.03))",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="text-shadow-md text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
              Welcome i am <TypewriterFramer className='bg-gradient-to-r from-[#60a5fa] via-[#7c3aed] to-[#fb7185] bg-clip-text text-transparent' />
              {TAGLINE}
            </span>
            <p className="mt-4 text-slate-800 dark:text-slate-100 max-w-xl">
              Clean UI, thoughtful interactions, and performance-focused frontends Reactjs, Nextjs + Tailwind specialist.
            </p>

            <div className="mt-6 gap-3 grid sm:grid-cols-2 sm:flex">
              <HashLink to="#contact"
                className="inline-flex items-center gap-2 mb-2 px-4 py-2 rounded-lg shadow-lg font-medium border border-transparent hover:scale-[1.02] transform transition"
                style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}
              >
                🚀 Hire Me
              </HashLink>

              <HashLink to="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-sm hover:text-white hover:bg-slate-800 transition">
                👀 View Projects
              </HashLink>
            </div>
          </motion.div>

          {/* Avatar Card */}
          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="relative w-full h-60 md:h-72 rounded-xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg,#071024, rgba(12,40,80,0.8))" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 md:w-52 md:h-52 rounded-full border-4 border-white/10 flex items-center justify-center text-xl font-semibold bg-gradient-to-br from-[#06b6d4]/30 to-[#7c3aed]/30">
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
    </div>
  )
}

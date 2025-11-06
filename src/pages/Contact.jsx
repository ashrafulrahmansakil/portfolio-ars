import React from 'react'
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Contact() {
  const EMAIL = "ashrafulrahmansakil@gmail.com";
  return (
    <>
      {/* Contact */}
      <motion.section id="contact" className="scroll-mt-10 max-w-6xl mx-auto p-6 rounded-xl" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-300">Let’s create something amazing together — send a quick message.</p>

        <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
          <input className="p-3 rounded-md border border-sky/5 " placeholder="Your name" />
          <input className="p-3 rounded-md border border-sky/5 " placeholder="Email" />
          <textarea className="md:col-span-2 p-3 rounded-md border border-sky/5 " rows={5} placeholder="Message" />

          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="px-4 py-2 rounded-lg font-medium cursor-pointer" style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}>
              Send Message
            </button>
            <div className="ml-auto flex gap-3 text-xl">
              <a href="#" aria-label="GitHub" title="GitHub"><FiGithub /></a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn"><FiLinkedin /></a>
              <a href="#" aria-label="Email" title="Email"><FiMail /></a>
            </div>
          </div>
        </form>
        <Link to={`mailto:${EMAIL}`} className="mt-4 text-sm text-slate-200 ">Or email me directly at <span className="font-medium hover:underline cursor-pointer">{EMAIL}</span></Link>
      </motion.section>

    </>
  )
}

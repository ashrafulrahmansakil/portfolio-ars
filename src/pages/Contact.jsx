import { motion } from "framer-motion";
import { socialMediaLinks } from "../data/data";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Contact() {
  const EMAIL = "ashrafulrahmansakil@gmail.com";
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="scroll-mt-10 max-w-6xl mx-auto p-6 rounded-xl"
    >
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <p className="text-center text-slate-300 mb-6">
        Let’s create something amazing together — send a quick message.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          id="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 rounded-md border border-sky/5 "
        />
        <input
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 rounded-md border border-sky/5 "
        />
        <textarea
          id="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Your Message"
          className="md:col-span-2 p-3 rounded-md border border-sky/5  "
        />

        <div className="md:col-span-2 flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 rounded-lg font-semibold text-white shadow-md transition"
            style={{
              background: "linear-gradient(90deg, #06b6d4, #7c3aed)",
            }}
          >
            Send Message
          </motion.button>
        </div>
      </form>
      {/* Email */}
      <p className="text-sm text-slate-400 mt-5">
        Or email me directly at{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="font-medium hover:underline hover:text-sky-400"
        >
          {EMAIL}
        </a>
      </p>
      {/* Social Media Icons */}
      
      <motion.div
        className="flex gap-3 text-xl mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {socialMediaLinks && socialMediaLinks?.map((link) => (
          <Link
            key={link.id}
            to={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.platform}
          >
            {<link.icon />}
          </Link>
        ))}
      </motion.div>


    </motion.section>
  );
}

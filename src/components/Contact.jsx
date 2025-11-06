import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
  };

  return (
    <section id="contact" className="relative z-10 bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 p-2 text-white">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get in touch</h2>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300">Name</label>
              <input
                type="text"
                required
                className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                required
                className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="text-sm text-slate-300">Message</label>
              <textarea
                required
                rows="5"
                className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-400">I typically respond within 24 hours.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-2.5 font-semibold text-slate-900 transition hover:bg-white"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
          </div>
          {status && (
            <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-200">
              {status}
            </div>
          )}
        </motion.form>
      </div>

      {/* Subtle background gradient overlays that don't block the 3D scene */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Contact;

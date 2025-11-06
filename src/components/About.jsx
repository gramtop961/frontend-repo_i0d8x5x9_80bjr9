import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative z-10 bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 p-2 text-white">
            <User className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About Dhimas</h2>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base leading-relaxed text-slate-300 md:text-lg"
          >
            I’m a full‑stack developer focused on crafting performant, visually engaging digital
            products. I love combining expressive design with solid engineering to ship
            experiences that feel alive—smooth animations, clean architecture, and a
            keen attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Core', values: ['React', 'Next.js', 'Node.js'] },
              { label: 'Design', values: ['Figma', 'Framer Motion', 'Spline'] },
              { label: 'Styling', values: ['Tailwind', 'Radix', 'shadcn/ui'] },
              { label: 'Infra', values: ['Vercel', 'Docker', 'MongoDB'] },
            ].map((group) => (
              <div key={group.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {group.label}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.values.map((v) => (
                    <span key={v} className="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-200">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

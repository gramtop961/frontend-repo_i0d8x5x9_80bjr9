import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Brand Microsite',
    description:
      'Playful 3D hero, micro-interactions, and CMS-driven content with blazing performance.',
    tags: ['Next.js', 'Spline', 'CMS', 'Vercel'],
  },
  {
    title: 'SaaS Dashboard Experience',
    description:
      'Real-time analytics, clean information design, and accessible component system.',
    tags: ['React', 'Charts', 'Tailwind', 'ARIA'],
  },
  {
    title: 'Creative Studio Portfolio',
    description:
      'Story-driven case studies, parallax transitions, and pixel-perfect art direction.',
    tags: ['Framer Motion', 'Design Systems', 'Accessibility'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 p-2 text-white">
            <Layers className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Selected Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 hover:border-white/20"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                <Code2 className="h-5 w-5 text-slate-400" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/30"
          >
            <Globe className="h-4 w-4" />
            Explore full portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

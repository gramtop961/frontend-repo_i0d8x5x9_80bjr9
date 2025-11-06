import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-[36rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-fuchsia-300" />
          <span className="text-xs font-medium tracking-wide text-slate-200">
            Modern • Interactive • Artistic
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Dhimas — Full‑Stack Developer
          <span className="block bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Crafting playful, modern web experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
        >
          I blend elegant interfaces, robust architecture, and smooth interactions to
          build immersive products—powered by modern tech and thoughtful design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-3 font-semibold text-slate-900 transition hover:bg-white"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur-md transition hover:border-white/30"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

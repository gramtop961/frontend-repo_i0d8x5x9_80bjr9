import React from 'react';
import { Rocket, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white">Dhimas</span>
            <span className="-mt-1 text-[10px] uppercase tracking-widest text-slate-400">Full‑Stack</span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href="#contact" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/30">Hire Me</a>
        </div>
        <button className="md:hidden inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white">Menu</button>
      </div>
    </header>
  );
};

export default Navbar;

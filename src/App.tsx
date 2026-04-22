/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { I18nProvider } from './context/I18nContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <I18nProvider>
      <div className="flex min-h-screen bg-cyber-black relative border-8 border-cyber-black overflow-hidden">
        {/* Scroll Progress Bar */}
        <motion.div
           className="fixed top-0 left-0 right-0 h-1 bg-neon-green origin-left z-[70]"
           style={{ scaleX }}
        />

        {/* Sidebar Rail */}
        <aside className="w-24 border-r border-white/20 hidden lg:flex flex-col justify-between py-12 items-center fixed h-screen z-50 bg-cyber-black">
          <div className="text-neon-green font-bold text-2xl tracking-tighter">L/</div>
          <nav className="flex flex-col gap-16 py-20">
            <a href="#works" className="nav-link-vertical hover:text-neon-green">WORK</a>
            <a href="#about" className="nav-link-vertical text-white/40 hover:text-neon-green">ABOUT</a>
            <a href="#contact" className="nav-link-vertical text-white/40 hover:text-neon-green">CONTACT</a>
          </nav>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[1px] h-20 bg-neon-green/50"></div>
            <span className="nav-link-vertical text-white/30">Scroll</span>
          </div>
        </aside>

        <div className="flex-1 lg:ml-24 flex flex-col">
          <Navigation />
          
          <main className="flex-1">
            <Hero />
            <Works />
            <About />
            <Contact />
          </main>
          
          <footer className="h-20 border-t border-white/20 px-6 lg:px-12 flex items-center justify-between bg-cyber-black z-10">
            <div className="flex gap-8 items-center">
              <span className="text-[10px] text-white/30 uppercase font-mono">Socials:</span>
              <a href="#" className="text-xs font-mono hover:text-neon-green uppercase transition-colors">Github/</a>
              <a href="#" className="text-xs font-mono hover:text-neon-green uppercase transition-colors">Behance/</a>
              <a href="#" className="text-xs font-mono hover:text-neon-green uppercase transition-colors">Twitter/</a>
            </div>
            <div className="hidden sm:block font-mono text-[10px] text-white/30 tracking-widest uppercase">
              © 2024 L STUDIO
            </div>
          </footer>
        </div>
        
        {/* Decorative background text */}
        <div className="fixed top-1/2 -right-48 -translate-y-1/2 rotate-90 pointer-events-none z-0 hidden xl:block">
          <span className="text-[160px] font-black text-white/5 whitespace-nowrap uppercase leading-none">Portfolio 2024</span>
        </div>
      </div>
    </I18nProvider>
  );
}


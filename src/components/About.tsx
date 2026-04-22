import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-32 px-6 lg:px-12 border-b border-white/20 bg-cyber-black">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-sm font-mono text-neon-green tracking-[0.4em] uppercase font-black">{t('about_title')}</h2>
            <p className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase">
              {t('about_text')}
            </p>
            
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
              <div>
                <h4 className="text-[10px] font-mono text-neon-green uppercase mb-6 tracking-widest font-black">EXPERTISE</h4>
                <ul className="text-xs font-mono space-y-3 text-white/50 uppercase italic font-bold">
                  <li>VISUAL SYSTEMS</li>
                  <li>MOTION DESIGN</li>
                  <li>WEB ARCHITECTURE</li>
                  <li>UI PROTOTYPING</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-neon-green uppercase mb-6 tracking-widest font-black">TOOLS</h4>
                <ul className="text-xs font-mono space-y-3 text-white/50 uppercase italic font-bold">
                   <li>FIGMA / AE</li>
                   <li>REACT / VITE</li>
                   <li>TAILWIND / GSAP</li>
                   <li>BLENDER</li>
                </ul>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square border border-white/20 p-4"
          >
            <div className="w-full h-full bg-white/5 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="Designer" 
                className="w-full h-full object-cover filter grayscale opacity-40 group-hover:opacity-100 transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-neon-green/5 mix-blend-overlay" />
            </div>
            {/* Decorative corner tag */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-green" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-green" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { Mail, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-cyber-black">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-neon-green tracking-[0.4em] uppercase mb-8 font-black">{t('contact_title')}</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-12 italic leading-none">
              READY FOR THE NEXT <span className="text-neon-green">EVOLUTION?</span>
            </h3>
            
            <motion.a 
              href="mailto:design@neofolio.com"
              whileHover={{ x: 20 }}
              className="flex items-center gap-6 text-2xl md:text-5xl font-black tracking-tighter hover:text-neon-green transition-colors uppercase border-b-4 border-neon-green pb-4"
            >
              HIREME@NEOFOLIO.COM
              <ArrowUpRight size={48} className="text-neon-green" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:w-1/3">
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono text-neon-green uppercase tracking-widest font-black">SOCIALS</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-sm font-mono hover:text-neon-green transition-colors uppercase font-bold">Dribbble/</a>
                <a href="#" className="text-sm font-mono hover:text-neon-green transition-colors uppercase font-bold">Behance/</a>
                <a href="#" className="text-sm font-mono hover:text-neon-green transition-colors uppercase font-bold">Twitter/</a>
                <a href="#" className="text-sm font-mono hover:text-neon-green transition-colors uppercase font-bold">Instagram/</a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono text-neon-green uppercase tracking-widest font-black">OFFICE</h4>
              <p className="text-sm font-mono uppercase font-bold leading-relaxed text-white/50">
                SHANGHAI, CN<br/>
                CREATIVE HUB 801<br/>
                NODE_01_SH
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 flex justify-center">
           <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center gap-4 text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 hover:text-neon-green transition-colors"
            >
              <span>BACK TO TOP</span>
              <div className="w-[1px] h-20 bg-white/10 group-hover:bg-neon-green transition-colors" />
            </motion.button>
        </div>
      </div>
    </section>
  );
}

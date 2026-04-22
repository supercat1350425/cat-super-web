import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" className="min-h-[70vh] flex flex-col justify-center px-6 lg:px-12 relative overflow-hidden border-b border-white/20">
      <div className="mx-auto w-full z-10 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-[2px] bg-neon-green" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neon-green font-black">DESIGNER & ENGINEER</span>
          </div>
          
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter text-white mb-16 uppercase">
            AIGC视频实验室
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-full h-[1px] bg-white/20" />
            </div>

            <div className="flex flex-col gap-8 md:items-end lg:col-span-2">
              <motion.a
                id="cta-works"
                href="#works"
                whileHover={{ backgroundColor: '#00ff00', color: '#000000' }}
                className="group flex items-center justify-center gap-6 border border-white/20 text-white px-12 py-6 font-mono text-xs font-black tracking-[0.3em] uppercase transition-all"
              >
                {t('cta_view_works')}
                <ArrowDownRight className="transition-transform group-hover:rotate-45" size={20} />
              </motion.a>
              
              <div className="grid grid-cols-2 gap-12 font-mono text-[9px] text-white/20 uppercase tracking-widest">
                <div>
                  <p className="text-neon-green">Protocol</p>
                  <p>TLS_V3 // ACTIVE</p>
                </div>
                <div>
                  <p className="text-neon-green">Latency</p>
                  <p>0.042 MS</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

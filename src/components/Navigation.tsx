import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { Languages, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const { lang, setLang, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  const navItems = [
    { name: t('nav_works'), href: '#works' },
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <nav id="main-nav" className="sticky top-0 left-0 w-full z-40 border-b border-white/20 bg-cyber-black/80 backdrop-blur-sm">
      <div className="mx-auto px-6 lg:px-12 h-24 lg:h-32 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="text-4xl lg:text-5xl font-black tracking-tight leading-none uppercase">
            L Studio<span className="text-neon-green">.</span>
          </div>
        </motion.div>

        {/* Desktop Nav Actions */}
        <div className="flex items-center gap-12">
          <div className="hidden md:flex gap-12 text-right">
            <div>
              <p className="text-[10px] text-neon-green font-bold uppercase font-mono">Location</p>
              <p className="text-sm font-medium">Shanghai / Digital</p>
            </div>
            <div>
              <p className="text-[10px] text-neon-green font-bold uppercase font-mono">Status</p>
              <p className="text-sm italic font-medium">Available Q2</p>
            </div>
          </div>

          <button 
            id="lang-toggle"
            onClick={toggleLang}
            className="flex items-center gap-2 text-xs font-mono border border-white/20 px-4 py-2 rounded-none hover:bg-white hover:text-black transition-all uppercase font-bold"
          >
            {lang === 'en' ? 'EN' : '中文'}
          </button>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 border border-white/10">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white/5"
      >
        <div className="flex flex-col p-6 gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-mono uppercase tracking-tighter"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

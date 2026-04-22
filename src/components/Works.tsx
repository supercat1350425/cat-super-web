import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  type: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  { id: 1, title: 'CYBER ARCHIVE', type: 'project_type_ui', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop', year: '2024' },
  { id: 2, title: 'NEURAL MESH', type: 'project_type_web', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop', year: '2024' },
  { id: 3, title: 'VOID INTERFACE', type: 'project_type_ui', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', year: '2023' },
  { id: 4, title: 'SYNTH WAVE', type: 'project_type_web', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', year: '2023' },
];

export default function Works() {
  const { t } = useI18n();

  return (
    <section id="works" className="bg-cyber-black">
      <div className="mx-auto border-b border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          {/* Decorative placeholder */}
          <div className="hidden md:flex flex-col justify-center p-12 border-l border-white/20 bg-neon-green text-black min-h-[500px]">
             <h3 className="text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tighter">PUSHING THE BOUNDARIES OF DIGITAL INTERACTION.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t, lang } = useI18n();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative overflow-hidden flex flex-col justify-end p-8 md:p-12 min-h-[500px] border-b border-white/20 ${index % 2 !== 0 ? 'md:border-l' : ''}`}
    >
      <div className="absolute top-8 left-8 text-neon-green font-mono text-xs font-bold leading-none">
        0{project.id}
      </div>

      <div className="mb-8 overflow-hidden">
        <div className="aspect-[3/4] bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
           <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-16 h-16 border-2 border-neon-green group-hover:rotate-45 group-hover:scale-110 transition-transform duration-500"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] font-mono text-neon-green uppercase tracking-[0.3em] mb-2 font-bold">
              {t(project.type)}
            </p>
            <h4 className="text-3xl md:text-4xl font-black tracking-tight uppercase group-hover:text-neon-green transition-colors leading-none">
              {project.title}
             </h4>
          </div>
          <span className="font-mono text-[10px] text-white/30">/{project.year}</span>
        </div>
        <p className="text-xs text-white/40 mt-4 max-w-xs font-mono uppercase leading-relaxed">
          {lang === 'en' ? 'Technical exploration of visual systems and architecture.' : '视觉系统与架构的技术探索。'}
        </p>
      </div>
    </motion.div>
  );
}

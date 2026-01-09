import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Project } from '../types';
import { useApp } from '../AppContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useApp();

  return (
    <>
      <div 
        className="group notion-card p-8 rounded-[2rem] cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="flex items-start justify-between mb-8">
          <div className="max-w-[80%]">
            <h3 className="text-xl md:text-2xl font-black text-[#37352f] mb-3 tracking-tight group-hover:text-[#1F9CF0] transition-colors">
              {project.title}
            </h3>
            <p className="text-[#37352f]/50 text-[13px] leading-relaxed line-clamp-2 font-medium">
              {project.description}
            </p>
          </div>
          <button className="flex items-center whitespace-nowrap text-[10px] font-bold text-[#37352f]/40 group-hover:text-black transition-all mt-1 uppercase tracking-widest">
            <span className="mr-1.5">{t.projects.viewDetails}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden bg-[#fafaf9] aspect-[16/10] border border-[#f1f1ef] shadow-inner">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Detail Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#37352f]/20 backdrop-blur-[4px] animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setShowDetails(false)}></div>
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#eef0f2] animate-in slide-in-from-bottom-4 duration-300">
            <button 
              onClick={() => setShowDetails(false)}
              className="absolute top-6 right-6 z-10 p-2.5 bg-white/90 rounded-full hover:bg-[#f1f1ef] transition-colors border border-[#eef0f2] shadow-sm"
            >
              <X size={18} className="text-[#37352f]" />
            </button>
            
            <div className="p-4">
               <img 
                src={project.imageUrl} 
                className="w-full aspect-video object-cover rounded-2xl" 
                alt={project.title} 
              />
            </div>

            <div className="p-10 md:p-14 space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h2 className="text-3xl md:text-5xl font-black text-[#37352f] tracking-tight leading-none">{project.title}</h2>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#1F9CF0] text-white px-8 py-3.5 rounded-2xl font-bold text-xs transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-50/50">
                    {t.projects.livePreview} <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-14 border-t border-[#eef0f2] pt-12">
                <div className="md:col-span-2 space-y-6">
                  <h4 className="font-black uppercase tracking-[0.25em] text-[#37352f]/20 text-[10px]">{t.projects.overview}</h4>
                  <p className="text-[#37352f]/60 leading-relaxed text-[15px]">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-12">
                  <div>
                    <h4 className="font-black uppercase tracking-[0.25em] text-[#37352f]/20 text-[10px] mb-5">{t.projects.stack}</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Tailwind', 'Typescript', 'Node.js'].map(tech => (
                        <span key={tech} className="bg-[#f1f1ef] text-[#37352f]/60 px-4 py-1.5 rounded-xl text-[11px] font-bold border border-[#eef0f2]">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
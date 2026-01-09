
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { useApp } from '../AppContext';

const Projects: React.FC = () => {
  const { t, data, isLoading, lang } = useApp();

  const projects = data.projects.map(p => ({
    ...p,
    title: p.title[lang],
    description: p.description[lang]
  }));

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <Breadcrumbs />
        <h1 className="text-2xl md:text-3xl font-black text-[#37352f] mb-3 tracking-tight">
          {t.projects.portfolioTitle}
        </h1>
        <p className="text-[13px] text-[#37352f]/50 max-w-2xl leading-relaxed font-medium">
          {t.projects.portfolioSubtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mb-20">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-96 bg-gray-50 rounded-[2rem] animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

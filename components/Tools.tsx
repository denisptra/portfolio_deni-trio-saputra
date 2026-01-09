import React from 'react';
import { useApp } from '../AppContext';

const tools = [
  // Row 1
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'Affinity', icon: 'https://cdn.worldvectorlogo.com/logos/affinity-designer.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  // Row 2
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Unity', icon: 'https://img.icons8.com/ios-filled/50/000000/unity.png' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
];

const Tools: React.FC = () => {
  const { t } = useApp();

  return (
    <section className="py-24 bg-white border-b border-[#eef0f2]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#37352f]/40 font-bold mb-16 uppercase tracking-[0.2em] text-[11px]">
          {t.tools.title}
        </p>
        
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 md:gap-6 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <div 
              key={tool.name} 
              className="flex flex-col items-center justify-center aspect-square group cursor-pointer transition-all hover:-translate-y-1 hover:border-[#1F9CF0] hover:shadow-lg hover:shadow-blue-50 border border-[#eef0f2] bg-white rounded-2xl p-4"
            >
              <div className="w-full h-full flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100">
                <img 
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
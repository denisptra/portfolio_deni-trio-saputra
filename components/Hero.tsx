import React from 'react';
import { useApp } from '../AppContext';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="hero-section pt-24 md:pt-36 pb-20 border-b border-[#eef0f2] bg-white">
      {/* Subtle bubble background */}
      <div className="hero-grid-pattern"></div>
      <div className="bubble w-52 h-52 top-10 left-[5%]"></div>
      <div className="bubble w-72 h-72 top-[20%] right-[10%]" style={{ animationDelay: '3s' }}></div>
      <div className="bubble w-40 h-40 bottom-10 left-[40%]" style={{ animationDelay: '6s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold bg-[#f1f1ef] text-[#37352f]/60 border border-[#eef0f2] tracking-tight">
            <span className="mr-2 flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            {t.hero.badge}
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#37352f] tracking-tight leading-[1.02] mb-12 max-w-5xl mx-auto">
          {t.hero.title}
        </h1>
        
        <p className="text-sm md:text-xl text-[#37352f]/50 leading-relaxed max-w-3xl mx-auto mb-16 font-medium">
          {t.hero.subtitle}
        </p>

        {/* Hero Buttons Above Mockup */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 mb-20">
          <Link to="/projects" className="w-full sm:w-auto bg-[#1F9CF0] hover:bg-[#1581cc] text-white px-10 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xl shadow-blue-50/50">
            {t.hero.viewProjects}
          </Link>
          <Link to="/contact" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#1F9CF0] px-10 py-3.5 rounded-xl font-bold text-sm transition-all border border-blue-100 flex items-center justify-center">
            {t.hero.letsTalk} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Video Macbook Mockup Boundary */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#eef0f2] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] overflow-hidden">
            <div className="bg-[#f9f9f8] h-9 flex items-center px-5 space-x-2 border-b border-[#eef0f2]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="aspect-[16/10] bg-[#fafaf9] overflow-hidden group relative cursor-pointer">
              <img 
                className="w-full h-full object-cover grayscale-[0.1] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Workspace intro"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/0 transition-colors">
                 <div className="bg-white/95 backdrop-blur-2xl w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border border-white">
                    <Play className="fill-black text-black ml-1" size={28} />
                 </div>
                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-black/80 backdrop-blur rounded-full text-white text-[11px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                   {t.hero.introVideo}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
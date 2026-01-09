import React from 'react';
import CTASection from '../components/CTASection';
import Breadcrumbs from '../components/Breadcrumbs';
import { useApp } from '../AppContext';

const About: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-6">
        <Breadcrumbs />
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 mt-6">
          <div className="w-52 h-52 md:w-64 md:h-64 flex-shrink-0 relative">
            <div className="absolute inset-2 border border-black/5 rounded-xl rotate-3 -z-10 bg-[#f9f9f8]"></div>
            <div className="w-full h-full rounded-xl overflow-hidden shadow-sm grayscale-[0.3] hover:grayscale-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop" 
                alt="Deni Trio Saputra" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-grow">
            <h1 className="text-2xl md:text-3xl font-black text-[#37352f] mb-4 tracking-tight leading-tight">{t.about.title}</h1>
            <p className="text-[14px] text-[#37352f]/60 leading-relaxed mb-6">
              {t.about.intro}
            </p>
            <div className="inline-block px-3 py-1 bg-[#f1f1ef] rounded text-[11px] font-bold text-[#37352f]/40 italic">
              "{t.about.quote}"
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[#37352f]/60 mb-20">
          <div className="space-y-4">
            <h2 className="text-sm font-black text-[#37352f] uppercase tracking-widest">{t.about.storyTitle}</h2>
            <p className="text-[13px] leading-relaxed">{t.about.storyPara1}</p>
            <p className="text-[13px] leading-relaxed">{t.about.storyPara2}</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-sm font-black text-[#37352f] uppercase tracking-widest">{t.about.valuesTitle}</h2>
            <ul className="space-y-6">
              {[
                { title: t.about.v1Title, desc: t.about.v1Desc },
                { title: t.about.v2Title, desc: t.about.v2Desc },
                { title: t.about.v3Title, desc: t.about.v3Desc }
              ].map((val, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[10px] font-black text-[#37352f]/20 mr-4 mt-0.5">0{i+1}</span>
                  <div className="text-[13px] leading-relaxed">
                    <strong className="text-[#37352f] font-black block mb-0.5">{val.title}</strong> 
                    {val.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <CTASection 
        variant="dark"
        emoji="🚀"
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        buttonText={t.contact.form.send}
      />
    </div>
  );
};

export default About;
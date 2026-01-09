
import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import CTASection from '../components/CTASection';
import Breadcrumbs from '../components/Breadcrumbs';
import { useApp } from '../AppContext';

const Study: React.FC = () => {
  const { t, data, isLoading, lang } = useApp();

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <Breadcrumbs />
        <h1 className="text-2xl md:text-3xl font-black text-[#37352f] mb-3 tracking-tight">
          {t.study.title}
        </h1>
        <p className="text-[13px] text-[#37352f]/50 leading-relaxed font-medium">
          {t.study.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mb-20">
        {isLoading ? (
          <div className="space-y-6">
            {[1, 2].map(i => (
              <div key={i} className="h-40 bg-gray-50 rounded-3xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          data.education.map(item => (
            <ExperienceCard 
              key={item.id}
              title={item.school}
              subtitle={item.degree[lang]}
              location={item.major[lang]}
              period={item.period}
              description={item.description[lang]}
              iconType={item.iconType}
              isEducation
            />
          ))
        )}
      </div>

      <CTASection 
        emoji="🎓"
        title={t.experience.ctaTitle}
        subtitle={t.cta.subtitle}
        buttonText={t.experience.ctaBtn}
      />
    </div>
  );
};

export default Study;

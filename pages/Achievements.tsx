import React from 'react';
import { Trophy, Star, Award, Zap } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useApp } from '../AppContext';

const Achievements: React.FC = () => {
  const { t } = useApp();

  const recognitions = [
    {
      id: '1',
      title: 'Best Innovator Award',
      issuer: 'Regional Hackathon 2024',
      date: 'Oct 2024',
      desc: 'Awarded for developing a blockchain-based voting system for student governments.',
      icon: <Trophy size={14} className="text-amber-500" />
    },
    {
      id: '2',
      title: 'Outstanding Student',
      issuer: 'Cakrawala University',
      date: 'Dec 2023',
      desc: 'Recognized for top GPA and leading the Tech Community on campus.',
      icon: <Star size={14} className="text-blue-500" />
    },
    {
      id: '3',
      title: 'Web Dev Professional',
      issuer: 'Google Developers',
      date: 'Jan 2023',
      desc: 'Certification for advanced performance optimization and scalable architectures.',
      icon: <Award size={14} className="text-emerald-500" />
    }
  ];

  return (
    <div className="py-12 animate-in fade-in duration-700 bg-white">
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <Breadcrumbs />
        <h1 className="text-3xl font-black text-[#37352f] mb-4 tracking-tight leading-none">
          {t.achievements.title}
        </h1>
        <p className="text-[13px] text-[#37352f]/50 leading-relaxed font-medium max-w-lg">
          {t.achievements.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-4 mb-24">
        {recognitions.map((item) => (
          <div key={item.id} className="bg-white border border-[#eef0f2] p-6 rounded-2xl hover:bg-[#fcfcfc] transition-all flex items-start space-x-6">
            <div className="w-10 h-10 rounded-xl bg-[#f1f1ef] flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1.5">
                <h3 className="text-[15px] font-bold text-[#37352f] tracking-tight">{item.title}</h3>
                <span className="text-[10px] font-black text-[#37352f]/20 uppercase tracking-[0.2em]">{item.date}</span>
              </div>
              <p className="text-[#1F9CF0] font-bold text-[11px] mb-2 uppercase tracking-wide">{item.issuer}</p>
              <p className="text-[#37352f]/50 leading-relaxed text-[13px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
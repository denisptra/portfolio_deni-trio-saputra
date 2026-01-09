import React from 'react';

interface CTASectionProps {
  variant?: 'dark' | 'light';
  emoji?: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const CTASection: React.FC<CTASectionProps> = ({ variant = 'light', emoji = '👀', title, subtitle, buttonText }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto rounded-[3rem] p-12 md:p-24 text-center bg-black text-white relative overflow-hidden shadow-2xl">
        {/* Subtle glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F9CF0]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-3xl mb-10 border border-white/10">
            {emoji}
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
            {title}
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            {subtitle}
          </p>
          <button className="bg-white hover:bg-gray-100 text-black px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95 text-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
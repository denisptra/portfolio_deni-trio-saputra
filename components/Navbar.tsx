import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Globe, GraduationCap, LayoutGrid, Award } from 'lucide-react';
import { useApp } from '../AppContext';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useApp();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#eef0f2]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Name */}
        <Link to="/" className="flex items-center group">
          <div className="w-8 h-8 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
             <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4V8M16 24V28M24.4853 7.51472L21.6569 10.3431M10.3431 21.6569L7.51472 24.4853M28 16H24M8 16H4M24.4853 24.4853L21.6569 21.6569M10.3431 10.3431L7.51472 7.51472" stroke="currentColor" className="text-black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="ml-2.5 font-bold tracking-tight text-[#37352f] text-sm hidden sm:inline">Deni Trio Saputra</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-[13px] font-medium text-[#7a7872]">
          <Link to="/about" className={`hover:text-black transition-colors ${isActive('/about') ? 'text-black font-bold' : ''}`}>
            {t.nav.about}
          </Link>
          <Link to="/experience" className={`hover:text-black transition-colors ${isActive('/experience') ? 'text-black font-bold' : ''}`}>
            {t.nav.experience}
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsExploreOpen(true)}
            onMouseLeave={() => setIsExploreOpen(false)}
          >
            <button 
              className={`flex items-center hover:text-black transition-colors py-2 ${(isActive('/study') || isActive('/projects') || isActive('/achievements')) ? 'text-black' : ''}`}
            >
              {t.nav.explore} <ChevronDown className={`ml-1 w-3 h-3 transition-transform duration-300 ${isExploreOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 transform transition-all duration-200 origin-top ${isExploreOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
              <div className="bg-white border border-[#eef0f2] rounded-2xl dropdown-shadow p-2">
                <Link to="/study" className="flex items-start space-x-4 p-3 hover:bg-blue-50 rounded-xl group transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div className="text-[#37352f] font-bold text-[13px]">{t.nav.education}</div>
                    <div className="text-[11px] text-[#9a9892] mt-0.5 font-normal leading-tight">{t.nav.eduSub}</div>
                  </div>
                </Link>
                <Link to="/projects" className="flex items-start space-x-4 p-3 hover:bg-amber-50 rounded-xl group transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                    <LayoutGrid size={18} />
                  </div>
                  <div>
                    <div className="text-[#37352f] font-bold text-[13px]">{t.nav.portfolio}</div>
                    <div className="text-[11px] text-[#9a9892] mt-0.5 font-normal leading-tight">{t.nav.portSub}</div>
                  </div>
                </Link>
                <Link to="/achievements" className="flex items-start space-x-4 p-3 hover:bg-emerald-50 rounded-xl group transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="text-[#37352f] font-bold text-[13px]">{t.nav.achievements}</div>
                    <div className="text-[11px] text-[#9a9892] mt-0.5 font-normal leading-tight">{t.nav.achSub}</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/contact" className={`hover:text-black transition-colors ${isActive('/contact') ? 'text-black font-bold' : ''}`}>
            {t.nav.contact}
          </Link>
        </div>

        {/* Toggles & CTA */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#f1f1ef] text-[#37352f] hover:bg-[#e1e1df] transition-colors text-[11px] font-bold"
          >
            <Globe size={13} />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button className="hidden md:block bg-[#1F9CF0] text-white px-5 py-2 rounded-xl text-[12px] font-bold hover:bg-[#1581cc] transition-all shadow-sm">
            {t.nav.downloadCv}
          </button>

          <button 
            className="md:hidden p-2 text-[#37352f] hover:bg-[#f1f1ef] rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#eef0f2] py-4 px-6 animate-in slide-in-from-top duration-300">
          <Link to="/about" className="block py-3 font-bold text-[#37352f] border-b border-[#f9f9f8]" onClick={() => setIsMobileMenuOpen(false)}>
            {t.nav.about}
          </Link>
          <Link to="/experience" className="block py-3 font-bold text-[#37352f] border-b border-[#f9f9f8]" onClick={() => setIsMobileMenuOpen(false)}>
            {t.nav.experience}
          </Link>
          
          <div className="border-b border-[#f9f9f8]">
            <button 
              onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
              className="flex items-center justify-between w-full py-3 font-bold text-[#37352f]"
            >
              {t.nav.explore} 
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileExploreOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileExploreOpen && (
              <div className="grid grid-cols-1 gap-1 pb-3 px-4">
                <Link to="/study" className="block py-2 text-[#7a7872] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.nav.education}
                </Link>
                <Link to="/projects" className="block py-2 text-[#7a7872] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.nav.portfolio}
                </Link>
                <Link to="/achievements" className="block py-2 text-[#7a7872] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.nav.achievements}
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="block py-3 font-bold text-[#37352f]" onClick={() => setIsMobileMenuOpen(false)}>
            {t.nav.contact}
          </Link>
          
          <div className="pt-4 pb-2">
            <button className="w-full bg-[#1F9CF0] text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-blue-50">
              {t.nav.downloadCv}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { useApp } from '../AppContext';

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="pt-24 pb-12 bg-white border-t border-[#eef0f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 lg:col-span-1 space-y-7">
            <div>
              <Link to="/" className="flex items-center mb-6">
                <div className="w-7 h-7 bg-black rounded flex items-center justify-center">
                   <svg width="14" height="14" viewBox="0 0 40 40" fill="none">
                    <path d="M12 28V12H20C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28H12Z" stroke="white" strokeWidth="4"/>
                  </svg>
                </div>
                <span className="ml-2.5 font-black text-[15px] tracking-tight text-[#37352f]">Deni Trio Saputra</span>
              </Link>
              <p className="text-[#37352f]/40 text-[12px] leading-relaxed max-w-[240px]">
                {t.footer.description}
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/deni-trio-saputra-451075276/" target="_blank" rel="noopener noreferrer" className="text-[#37352f]/30 hover:text-black transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/denisptra" target="_blank" rel="noopener noreferrer" className="text-[#37352f]/30 hover:text-black transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.instagram.com/denisptra_69" target="_blank" rel="noopener noreferrer" className="text-[#37352f]/30 hover:text-black transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-[#37352f] mb-8 text-[11px] uppercase tracking-[0.2em]">{t.footer.socials}</h4>
            <ul className="space-y-4 text-[13px] font-medium text-[#37352f]/60">
              <li><a href="https://instagram.com" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="https://linkedin.com" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" className="hover:text-black transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#37352f] mb-8 text-[11px] uppercase tracking-[0.2em]">{t.footer.sitemap}</h4>
            <ul className="space-y-4 text-[13px] font-medium text-[#37352f]/60">
              <li><Link to="/experience" className="hover:text-black transition-colors">{t.nav.experience}</Link></li>
              <li><Link to="/projects" className="hover:text-black transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link to="/about" className="hover:text-black transition-colors">{t.nav.about}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#37352f] mb-8 text-[11px] uppercase tracking-[0.2em]">{t.footer.legal}</h4>
            <ul className="space-y-4 text-[13px] font-medium text-[#37352f]/60">
              <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-black transition-colors">Term of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#eef0f2] pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#37352f]/20 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 Deni Trio Saputra. {t.footer.rights}
          </p>
          <div className="text-[#37352f]/20 text-[10px] font-black uppercase tracking-[0.2em] italic">
            {t.footer.credit}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
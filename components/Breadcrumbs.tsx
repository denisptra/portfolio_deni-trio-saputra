import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-xs font-medium text-gray-400 mb-8 uppercase tracking-widest">
      <Link to="/" className="flex items-center hover:text-black transition-colors">
        <Home size={14} className="mr-1.5" /> Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <React.Fragment key={to}>
            <ChevronRight size={14} />
            {last ? (
              <span className="text-black font-bold">{value.replace(/-/g, ' ')}</span>
            ) : (
              <Link to={to} className="hover:text-black transition-colors">
                {value.replace(/-/g, ' ')}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
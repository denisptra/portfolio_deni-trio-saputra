
import React from 'react';
import { Briefcase, PenTool, Globe, User, GraduationCap, Code, School } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  location?: string;
  period: string;
  description: string;
  iconType: 'design' | 'media' | 'tech' | 'university' | 'code' | 'school';
  isEducation?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, subtitle, location, period, description, iconType, isEducation 
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'design': return <PenTool className="text-amber-500" />;
      case 'media': return <User className="text-red-500" />;
      case 'tech': return <Globe className="text-green-500" />;
      case 'university': return <GraduationCap className="text-blue-500" />;
      case 'code': return <Code className="text-green-500" />;
      case 'school': return <School className="text-amber-500" />;
      default: return <Briefcase className="text-gray-500" />;
    }
  };

  const getBgColor = () => {
    switch (iconType) {
      case 'design': return 'bg-amber-50';
      case 'media': return 'bg-red-50';
      case 'tech': return 'bg-green-50';
      case 'university': return 'bg-blue-50';
      case 'code': return 'bg-green-50';
      case 'school': return 'bg-amber-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <div className="relative p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-lg transition-all mb-6">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Icon */}
        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${getBgColor()}`}>
          {renderIcon()}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              <p className="text-gray-500 font-medium">
                {subtitle} {location && `— ${location}`}
              </p>
            </div>
            <div className="px-3 py-1 bg-gray-50 text-gray-400 text-xs font-semibold rounded-lg self-start md:self-auto border border-gray-100">
              {period}
            </div>
          </div>
          
          <p className="text-gray-500 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

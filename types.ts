
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  iconType: 'design' | 'media' | 'tech';
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  major: string;
  period: string;
  description: string;
  iconType: 'university' | 'code' | 'school';
}

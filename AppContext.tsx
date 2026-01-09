
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

type Language = 'en' | 'id';

interface AppData {
  projects: any[];
  experiences: any[];
  education: any[];
  achievements: any[];
  [key: string]: any[];
}

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
  data: AppData;
  isLoading: boolean;
  updateData: (newData: AppData) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('app_lang') as Language) || 'en';
  });
  const [data, setData] = useState<AppData>({
    projects: [],
    experiences: [],
    education: [],
    achievements: []
  });
  const [isLoading, setIsLoading] = useState(true);

  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
  }, [lang]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First check local storage for modified "backend" data
        const savedData = localStorage.getItem('portfolio_data');
        if (savedData) {
          setData(JSON.parse(savedData));
          setIsLoading(false);
          return;
        }

        // Fallback to static JSON
        const response = await fetch('./data.json');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error loading dynamic data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateData = (newData: AppData) => {
    setData(newData);
    localStorage.setItem('portfolio_data', JSON.stringify(newData));
  };

  return (
    <AppContext.Provider value={{ lang, setLang, t, data, isLoading, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

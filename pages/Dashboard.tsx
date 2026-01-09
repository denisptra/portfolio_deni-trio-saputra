
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Settings, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  ExternalLink,
  Save,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../AppContext';

const Dashboard: React.FC = () => {
  const { data, isLoading, lang } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'experience' | 'education' | 'achievements'>('overview');
  const [localData, setLocalData] = useState(data);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setLocalData(data);
    }
  }, [data]);

  const handleLogout = () => {
    localStorage.removeItem('is_admin');
    navigate('/login');
  };

  const handleSave = () => {
    // In a real app, this would be an API call
    localStorage.setItem('portfolio_data', JSON.stringify(localData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const renderSidebarItem = (id: typeof activeTab, icon: React.ReactNode, label: string) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === id ? 'bg-blue-50 text-[#1F9CF0]' : 'text-[#37352f]/50 hover:bg-gray-50'}`}
    >
      {icon}
      <span className="text-[13px] font-bold">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#f9f9f8] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#eef0f2] flex flex-col p-6 fixed inset-y-0 z-10">
        <div className="flex items-center space-x-3 mb-12 px-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Settings className="text-white" size={16} />
          </div>
          <span className="font-black text-sm tracking-tight">Admin Console</span>
        </div>

        <nav className="flex-grow space-y-2">
          {renderSidebarItem('overview', <LayoutDashboard size={18} />, 'Overview')}
          <div className="h-4"></div>
          <p className="px-4 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-4">Management</p>
          {renderSidebarItem('projects', <LayoutDashboard size={18} />, 'Projects')}
          {renderSidebarItem('experience', <Briefcase size={18} />, 'Experience')}
          {renderSidebarItem('education', <GraduationCap size={18} />, 'Education')}
          {renderSidebarItem('achievements', <Award size={18} />, 'Achievements')}
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all font-bold text-[13px]"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-10 bg-[#f9f9f8]">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-black text-[#37352f] tracking-tight capitalize">{activeTab}</h1>
            <p className="text-[13px] text-[#37352f]/40 mt-1">Manage your portfolio items efficiently.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleSave}
              className="flex items-center space-x-2 bg-black text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-800 transition-all shadow-lg shadow-black/5"
            >
              {isSaved ? <CheckCircle2 size={16} /> : <Save size={16} />}
              <span>{isSaved ? 'Changes Saved' : 'Publish Changes'}</span>
            </button>
          </div>
        </header>

        {/* Dynamic View */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Projects', count: localData.projects.length, icon: <LayoutDashboard />, color: 'blue' },
              { label: 'Work History', count: localData.experiences.length, icon: <Briefcase />, color: 'amber' },
              { label: 'Academic Years', count: localData.education.length, icon: <GraduationCap />, color: 'emerald' },
              { label: 'Key Achievements', count: localData.achievements.length, icon: <Award />, color: 'purple' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-[#eef0f2] p-8 rounded-3xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600`}>
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 24 })}
                  </div>
                </div>
                <p className="text-[13px] font-bold text-gray-400 mb-1">{stat.label}</p>
                <h3 className="text-4xl font-black text-[#37352f]">{stat.count}</h3>
              </div>
            ))}
          </div>
        )}

        {(activeTab === 'projects' || activeTab === 'experience' || activeTab === 'education' || activeTab === 'achievements') && (
          <div className="bg-white border border-[#eef0f2] rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="p-8 border-b border-[#eef0f2] flex items-center justify-between bg-white sticky top-0 z-[5]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder={`Search ${activeTab}...`} 
                  className="pl-12 pr-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-100 text-[13px] w-80" 
                />
              </div>
              <button className="flex items-center space-x-2 bg-[#1F9CF0] text-white px-6 py-3 rounded-2xl text-xs font-bold hover:bg-[#1581cc] transition-all shadow-lg shadow-blue-50">
                <Plus size={18} />
                <span>Add New {activeTab.slice(0, -1)}</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Content</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Date/Period</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eef0f2]">
                  {localData[activeTab]?.map((item: any) => (
                    <tr key={item.id} className="hover:bg-gray-50/30 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center space-x-4">
                          {item.imageUrl && (
                            <img src={item.imageUrl} className="w-12 h-12 rounded-xl object-cover bg-gray-100" />
                          )}
                          <div>
                            <p className="font-bold text-[#37352f] text-[14px]">{typeof item.title === 'object' ? item.title[lang] : item.title || item.school}</p>
                            <p className="text-[12px] text-gray-400 line-clamp-1 mt-0.5">{item.company || item.issuer || item.major?.en || item.description?.en}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-green-50 text-green-600 border border-green-100">
                          Active
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[12px] font-medium text-gray-500">{item.period || item.date}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-2.5 text-gray-400 hover:text-black hover:bg-gray-100 rounded-xl transition-all">
                            <Edit size={16} />
                          </button>
                          <button className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                            <Trash2 size={16} />
                          </button>
                          <button className="p-2.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all">
                            <ExternalLink size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

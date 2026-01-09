
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowLeft, Loader2 } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulated login logic
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('is_admin', 'true');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Hint: admin / admin123');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f8] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-[#37352f]/40 hover:text-black transition-colors mb-8 text-[11px] font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={14} className="mr-2" /> Back to Portfolio
        </button>

        <div className="bg-white border border-[#eef0f2] rounded-3xl p-10 shadow-xl shadow-black/[0.02]">
          <div className="mb-10 text-center">
            <div className="w-12 h-12 bg-[#1F9CF0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-100">
              <Lock className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-black text-[#37352f] tracking-tight">Admin Dashboard</h1>
            <p className="text-[13px] text-[#37352f]/40 mt-2">Sign in to manage your portfolio content</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#37352f]/40 ml-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={16} />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1F9CF0] focus:outline-none transition-all text-sm" 
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#37352f]/40 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={16} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1F9CF0] focus:outline-none transition-all text-sm" 
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-[11px] font-bold text-center bg-red-50 py-2 rounded-lg border border-red-100">{error}</p>}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#1F9CF0] text-white py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-[#1581cc] transition-all shadow-lg shadow-blue-100 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { Mail, Send, Linkedin, Github, Instagram, MapPin } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Contact: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-8">
          <div className="space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-900 tracking-tight">Contact Me.</h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                I'm always looking for interesting projects and creative collaborations. Let's make something meaningful.
              </p>
            </div>

            <div className="space-y-6 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center space-x-4 group cursor-pointer">
                 <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-[#1F9CF0] transition-all">
                    <Mail size={22} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Me</p>
                    <p className="font-bold text-gray-800">denitri0609@gmail.com</p>
                 </div>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                 <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-50 group-hover:text-green-600 transition-all">
                    <MapPin size={22} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Based In</p>
                    <p className="font-bold text-gray-800">Jakarta, Indonesia</p>
                 </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/deni-trio-saputra-451075276/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#1F9CF0] hover:border-[#1F9CF0] hover:bg-gray-50 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/denisptra" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black hover:bg-gray-50 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/denisptra_69" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500 hover:bg-gray-50 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm notion-card w-full">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1F9CF0] focus:outline-none transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1F9CF0] focus:outline-none transition-all text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={6} placeholder="Tell me about your project, goals, and timeline..." className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#1F9CF0] focus:outline-none transition-all text-sm resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#1F9CF0] text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-[#1581cc] transition-all shadow-md">
                Send Message <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
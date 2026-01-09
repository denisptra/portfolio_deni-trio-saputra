
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useApp } from '../AppContext';

const AIAssistant: React.FC = () => {
  const { data, lang, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        You are a helpful AI assistant for Deni Trio Saputra's personal portfolio. 
        Language current: ${lang}.
        Here is Deni's background data: ${JSON.stringify(data)}.
        Your goal is to answer questions about Deni's skills, experience, projects, and education.
        Be professional, concise, and enthusiastic. 
        If you don't know something, suggest contacting Deni via the contact form.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const botResponse = response.text || "Sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting right now. Feel free to check my projects manually!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white border border-[#eef0f2] w-80 sm:w-96 h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#1F9CF0] p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Portfolio Assistant</p>
                <p className="text-[10px] opacity-80">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-[#1F9CF0] rounded-2xl flex items-center justify-center mx-auto">
                  <MessageSquare size={24} />
                </div>
                <p className="text-xs text-gray-500 px-6">
                  {lang === 'en' ? "Ask me anything about Deni's experience or skills!" : "Tanyakan apa saja tentang pengalaman atau keahlian Deni!"}
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] ${m.role === 'user' ? 'bg-[#1F9CF0] text-white' : 'bg-[#f1f1ef] text-[#37352f]'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#f1f1ef] p-3 rounded-2xl flex items-center space-x-2">
                  <Loader2 size={14} className="animate-spin text-gray-400" />
                  <span className="text-[11px] text-gray-400 font-medium">AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-[#eef0f2]">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'en' ? "Type a message..." : "Ketik pesan..."}
                className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F9CF0]"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-[#1F9CF0] text-white p-2 rounded-xl hover:bg-[#1581cc] transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#1F9CF0] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;

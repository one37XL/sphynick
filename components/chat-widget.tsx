
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { MessageSquare } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hi! I'm Nick's AI assistant. Ask me anything about his skills, projects, or how to hire him!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const aiText = await getGeminiResponse(userText);
    setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 md:w-96 glass-dark border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-4 zoom-in-95 duration-300">
          {/* Header */}
          <div className="bg-[#F27D26] p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <span className="font-black uppercase tracking-widest text-[10px]">AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-transparent">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-[#F27D26] text-white rounded-tr-none shadow-lg shadow-[#F27D26]/20' 
                  : 'bg-white/10 text-white rounded-tl-none border border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/10 flex gap-1">
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-5 border-t border-white/10 bg-[#141414]">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 text-xs bg-white/5 border-white/10 border rounded-xl px-4 py-3 focus:ring-1 focus:ring-[#F27D26] focus:outline-none text-white placeholder-white/30"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-[#F27D26] text-white p-3 rounded-xl hover:bg-white hover:text-black transition-all disabled:opacity-50 shadow-lg shadow-[#F27D26]/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#F27D26] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center gap-3 group border border-white/10"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black uppercase tracking-widest text-[10px] whitespace-nowrap px-0 group-hover:px-2">
            AI Assistant
          </span>
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;

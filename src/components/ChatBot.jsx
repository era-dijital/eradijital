import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, RefreshCw } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  
  const messagesEndRef = useRef(null);

  const generateSessionId = () => {
    return 'session_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const fetchHistory = async (sessId) => {
    if (!sessId) return;
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/webhooks/web/era-dijital/history?session_id=${sessId}`);
      if (response.ok) {
        const data = await response.json();
        if (data.messages && data.messages.length > 0) {
          setMessages(data.messages);
          localStorage.setItem('era_chatbot_messages', JSON.stringify(data.messages));
        } else {
          initializeWelcomeMessages();
        }
      }
    } catch (e) {
      // Fallback
    }
  };

  useEffect(() => {
    let savedSessionId = localStorage.getItem('era_chatbot_session_id');
    if (!savedSessionId) {
      savedSessionId = generateSessionId();
      localStorage.setItem('era_chatbot_session_id', savedSessionId);
    }
    setSessionId(savedSessionId);

    const savedMessages = localStorage.getItem('era_chatbot_messages');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        // Fallback
      }
    }

    fetchHistory(savedSessionId);
  }, []);

  useEffect(() => {
    if (!isOpen || !sessionId) return;
    const interval = setInterval(() => {
      fetchHistory(sessionId);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen, sessionId]);

  const initializeWelcomeMessages = () => {
    const welcomeMsgs = [
      {
        id: 'welcome-1',
        sender: 'bot',
        text: 'Merhaba! 👋 Era Dijital Büyüme Asistanına hoş geldiniz. Size nasıl yardımcı olabilirim?',
        timestamp: new Date().toISOString(),
      },
    ];
    setMessages(welcomeMsgs);
    localStorage.setItem('era_chatbot_messages', JSON.stringify(welcomeMsgs));
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessageText = inputText.trim();
    setInputText('');

    const userMsg = {
      id: 'msg_' + Date.now(),
      sender: 'user',
      text: userMessageText,
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    localStorage.setItem('era_chatbot_messages', JSON.stringify(updatedMessages));
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/webhooks/web/era-dijital`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          text: userMessageText,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      const botMsg = {
        id: 'msg_' + Date.now() + '_reply',
        sender: 'bot',
        text: data.response || 'Üzgünüm, şu anda yanıt veremiyorum. Lütfen tekrar deneyin.',
        timestamp: new Date().toISOString(),
      };

      const finalMessages = [...updatedMessages, botMsg];
      setMessages(finalMessages);
      localStorage.setItem('era_chatbot_messages', JSON.stringify(finalMessages));
    } catch (error) {
      const errorMsg = {
        id: 'msg_' + Date.now() + '_err',
        sender: 'bot',
        text: 'Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin veya doğrudan WhatsApp hattımızdan bizimle iletişime geçin.',
        timestamp: new Date().toISOString(),
      };
      const finalMessages = [...updatedMessages, errorMsg];
      setMessages(finalMessages);
      localStorage.setItem('era_chatbot_messages', JSON.stringify(finalMessages));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm('Sohbet geçmişini temizlemek istediğinize emin misiniz?')) {
      const newSessionId = generateSessionId();
      localStorage.setItem('era_chatbot_session_id', newSessionId);
      setSessionId(newSessionId);
      initializeWelcomeMessages();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.15 }}
            className="w-[90vw] sm:w-[380px] h-[520px] rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0d14] shadow-2xl flex flex-col overflow-hidden mb-3"
          >
            {/* Window Header */}
            <div className="px-4 py-3 bg-[#f8f6f0] dark:bg-[#0d121c] border-b border-black/5 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <div>
                  <h3 className="font-mono text-xs text-zinc-900 dark:text-white font-semibold tracking-wide">
                    ERA-BOT // BÜYÜME ASİSTANI
                  </h3>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">SLA: ~1.2s • Bilgi Tabanı Aktif</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearHistory}
                  title="Sohbeti Sıfırla"
                  className="p-1 rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Kapat"
                  className="p-1 rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f8f6f0]/50 dark:bg-[#0a0d14]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {msg.sender === 'bot' && (
                      <div className="w-6 h-6 rounded bg-petrol-/10 border border-petrol-/20 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] text-petrol- dark:text-petrol- font-bold">
                        AI
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-petrol- text-white font-medium shadow-sm'
                          : 'bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 text-zinc-800 dark:text-zinc-200 shadow-sm'
                      }`}
                    >
                      {msg.text.split('\n').map((line, i) => (
                        <p key={i} className={i > 0 ? 'mt-1' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-petrol-/10 border border-petrol-/20 flex items-center justify-center font-mono text-[10px] text-petrol- dark:text-petrol- font-bold">
                      AI
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-petrol- rounded-full animate-ping" />
                      <span>Yanıt hazırlanıyor...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-white dark:bg-[#0d121c] border-t border-black/5 dark:border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Sorunuzu buraya yazın..."
                className="flex-1 bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-petrol- focus:ring-1 focus:ring-petrol- transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="p-2 bg-petrol- hover:bg-petrol- text-white rounded-xl shadow-md shadow-petrol-/20 disabled:opacity-40 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-xl bg-petrol- hover:bg-petrol- text-white flex items-center justify-center shadow-lg shadow-petrol-/30 transition-all hover:scale-105 cursor-pointer"
        aria-label="Canlı Destek"
        title="Canlı Yapay Zekâ Asistanı"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>
    </div>
  );
}

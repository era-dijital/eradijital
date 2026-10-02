import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuoteWizard } from '../context/QuoteWizardContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openWizard } = useQuoteWizard();

  const navItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Metodoloji', path: '/#metodoloji' },
    { name: 'Dijital Röntgen', path: '/on-analiz' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Blog', path: '/blog' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0d14]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Mark */}
          <Link to="/" className="flex items-center gap-3 group focus-visible:outline-none">
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-blue-400 font-mono font-bold text-sm tracking-tighter group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
              ERA
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-blue-300 transition-colors">
                Era Dijital
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                Büyüme & Teknoloji Ajansı
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navItems.map((item) => {
              if (item.path.startsWith('/#')) {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    className="relative px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.03] transition-colors"
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-white bg-white/[0.06] font-semibold border border-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openWizard()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 hover:shadow-blue-500/35 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>30 Sn'de Teklif Al</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openWizard()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-lg"
            >
              Teklif Al
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Menü"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#0a0d14]/98 px-4 pt-3 pb-6 space-y-3"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-white bg-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openWizard();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>30 Sn'de Ücretsiz Büyüme Analizi</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
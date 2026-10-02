import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuoteWizard } from '../context/QuoteWizardContext';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openWizard } = useQuoteWizard();
  const { theme, toggleTheme, isDark } = useTheme();

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
    <header className="sticky top-0 z-40 w-full bg-[#f8f6f0]/90 dark:bg-[#0a0d14]/90 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Mark */}
          <Link to="/" className="flex items-center gap-3 group focus-visible:outline-none">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-white/[0.03] border border-cyan-500/30 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm tracking-tighter group-hover:border-cyan-500 transition-colors">
              ERA
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Era Dijital
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
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
                    className="relative px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/[0.03] transition-colors"
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
                      ? 'text-zinc-900 dark:text-white bg-black/5 dark:bg-white/[0.06] font-semibold border border-black/5 dark:border-white/10'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/[0.03]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Theme Switcher & Wizard CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Açık Moda Geç (dijital10 stili)" : "Koyu Moda Geç"}
              title={isDark ? "Açık Moda Geç" : "Koyu Moda Geç"}
              className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 transition-all hover:scale-105"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            {/* Turkuaz Mavisi CTA */}
            <button
              onClick={() => openWizard()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-400 shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-100" />
              <span>30 Sn'de Teklif Al</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Tema Değiştir"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 bg-black/5 dark:bg-white/5"
            >
              {isDark ? <Sun className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            <button
              onClick={() => openWizard()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-cyan-500 rounded-lg shadow-sm"
            >
              Teklif Al
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white focus:outline-none"
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
            className="md:hidden border-b border-black/5 dark:border-white/10 bg-[#f8f6f0]/98 dark:bg-[#0a0d14]/98 px-4 pt-3 pb-6 space-y-3"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-zinc-900 dark:text-white bg-black/5 dark:bg-white/10 font-bold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-black/5 dark:border-white/5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openWizard();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/20"
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
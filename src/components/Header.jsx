import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuoteWizard } from '../context/QuoteWizardContext';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openWizard } = useQuoteWizard();
  const { toggleTheme, isDark } = useTheme();

  const navItems = [
    { name: 'İhtiyaçlar', path: '/#ihtiyaclar' },
    { name: 'Gelişim Alanları', path: '/#gelisim-alanlari' },
    { name: 'Uygulamalar', path: '/#uygulamalar' },
    { name: 'Süreç', path: '/#surec' },
    { name: 'Sorular', path: '/#sorular' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="w-full max-w-6xl pointer-events-auto flex items-center justify-between border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#070b10]/90 backdrop-blur-xl rounded-full py-2.5 px-4 sm:px-6 shadow-lg shadow-black/5 dark:shadow-black/40 transition-all duration-300">
        
        {/* Brand Logo & Slogan */}
        <Link to="/" className="flex items-center gap-2.5 group focus-visible:outline-none">
          <div className="w-8 h-8 rounded-full bg-petrol-700/10 dark:bg-petrol-400/15 border border-petrol-700/25 dark:border-petrol-400/30 flex items-center justify-center text-petrol-700 dark:text-petrol-300 font-display font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform">
            ERA
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-navy-900 dark:text-white">
              Era Dijital
            </span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-petrol-700 dark:text-petrol-400 hidden sm:inline -mt-0.5 font-semibold">
              #dijitalgelişim
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            if (item.path.startsWith('/#')) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-petrol-700 dark:hover:text-petrol-300 hover:bg-black/5 dark:hover:bg-white/[0.05] transition-colors"
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-petrol-700 dark:text-white bg-petrol-50 dark:bg-white/[0.08] font-semibold'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-petrol-700 dark:hover:text-petrol-300 hover:bg-black/5 dark:hover:bg-white/[0.05]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Theme Switcher & AnalyticaHouse Style Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Açık Moda Geç" : "Koyu Moda Geç"}
            title={isDark ? "Açık Moda Geç" : "Koyu Moda Geç"}
            className="p-2 sm:p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-petrol-700 dark:hover:text-petrol-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-petrol-300 animate-spin-slow" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-700" />
            )}
          </button>

          {/* AnalyticaHouse Signature Button (Sliding Text) */}
          <button
            onClick={() => openWizard()}
            className="ah-btn text-xs sm:text-xs py-2 sm:py-2.5 px-3.5 sm:px-5 cursor-pointer"
          >
            <span className="ah-btn-inner">
              <span className="ah-btn-text">
                <span>Ücretsiz Ön Değerlendirme</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="ah-btn-text text-white/90">
                <span>Gelişimi Başlatın</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full lg:hidden text-zinc-600 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Menü"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            className="lg:hidden pointer-events-auto fixed top-20 left-4 right-4 bg-white/98 dark:bg-[#070b10]/98 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-2xl p-5 shadow-2xl space-y-4"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-black/5 dark:border-white/5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openWizard();
                }}
                className="w-full ah-btn text-xs py-3 justify-center"
              >
                <span>Ücretsiz Ön Değerlendirme İste</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

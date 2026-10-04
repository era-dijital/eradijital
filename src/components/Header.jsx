import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useQuoteWizard } from '../context/QuoteWizardContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openWizard } = useQuoteWizard();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Yaklaşım', href: '/#ihtiyaclar' },
    { name: 'Çözümler', href: '/#gelisim-alanlari' },
    { name: 'Yetkinlik', href: '/#yetkinlik' },
    { name: 'Süreç', href: '/#surec' },
    { name: 'SSS', href: '/#sorular' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 md:px-10 flex justify-center py-3 sm:py-4 pointer-events-none transition-all duration-200">
      
      {/* Floating Pill Container - Refined & Crisp */}
      <div 
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 py-2 px-3.5 sm:px-5 rounded-full border transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0F172A]/95 border-[#E2E8F0] dark:border-white/15 backdrop-blur-md shadow-lg'
            : 'bg-white/85 dark:bg-[#0F172A]/85 border-[#E2E8F0] dark:border-white/10 backdrop-blur-md shadow-xs'
        }`}
      >
        
        {/* Brand Logo & Hashtag */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-7 h-7 rounded-lg bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:bg-[#FFD23F] group-hover:text-[#0F172A] transition-colors">
            E
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-[#0F172A] dark:text-white">
            ERA<span className="text-slate-900 dark:text-slate-200">Dijital</span>
          </span>
          <span className="hidden lg:inline-flex items-center gap-1 font-mono text-[9px] text-slate-600 dark:text-slate-300 font-semibold bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10 ml-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
            #dijitalgelişim
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Tema Değiştir"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#FFD23F]" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
          </button>

          {/* Yellow Action Button - Clean Conversion CTA */}
          <button
            onClick={() => openWizard()}
            className="btn-yellow text-xs py-2 px-3.5 sm:px-4 shrink-0 cursor-pointer group"
          >
            <span>Ön Değerlendirme</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-0 top-16 bg-white dark:bg-[#0F172A] border-b border-[#E2E8F0] dark:border-white/10 shadow-xl p-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-800 dark:text-slate-200 font-semibold py-2 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E2E8F0] dark:border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWizard();
              }}
              className="w-full btn-yellow py-3 px-4 justify-center text-xs group"
            >
              <span>30 Saniyede Ön Değerlendirme Al</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
}

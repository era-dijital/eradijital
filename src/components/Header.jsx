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
      
      {/* Floating Pill Container - Dijital10 Style */}
      <div 
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 py-2 px-3.5 sm:px-5 rounded-full border transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#111827]/95 border-[#E7E3DA] dark:border-white/15 backdrop-blur-md shadow-lg'
            : 'bg-white/85 dark:bg-[#111827]/85 border-[#E7E3DA] dark:border-white/10 backdrop-blur-md shadow-sm'
        }`}
      >
        
        {/* Brand Logo & Hashtag */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-[#FFD23F] text-[#111827] flex items-center justify-center font-mono font-bold text-xs shadow-sm">
            E
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-[#111827] dark:text-white">
            ERA<span className="text-[#EAB308] dark:text-[#FFD23F]">Dijital</span>
          </span>
          <span className="hidden lg:inline-block font-mono text-[9px] text-[#92400E] dark:text-[#FFD23F] font-semibold bg-[#FFD23F]/20 dark:bg-[#FFD23F]/15 px-2 py-0.5 rounded-full border border-[#FFD23F]/30 ml-1">
            #dijitalgelişim
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-zinc-600 dark:text-zinc-300 hover:text-[#111827] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/10 transition-colors font-medium"
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
            className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-[#111827] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#FFD23F]" /> : <Moon className="w-3.5 h-3.5 text-zinc-700" />}
          </button>

          {/* Yellow Action Button - Always Bold, Crisp, and Visible */}
          <button
            onClick={() => openWizard()}
            className="btn-yellow text-xs py-2 px-3.5 sm:px-4 shrink-0 cursor-pointer"
          >
            <span>Ön Değerlendirme</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-black/[0.04] dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-0 top-16 bg-white dark:bg-[#111827] border-b border-[#E7E3DA] dark:border-white/10 shadow-xl p-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-zinc-800 dark:text-zinc-200 font-semibold py-2 px-3 rounded-xl hover:bg-black/[0.03] dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E7E3DA] dark:border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWizard();
              }}
              className="w-full btn-yellow py-3 px-4 justify-center text-xs"
            >
              <span>30 Saniyede Ön Değerlendirme Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
}

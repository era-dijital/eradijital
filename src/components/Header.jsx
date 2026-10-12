import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useQuoteWizard } from '../context/QuoteWizardContext';
import EraLogo from './EraLogo';

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
    { name: 'Örnek İşler', href: '/#yetkinlik' },
    { name: 'Biz Kimiz', href: '/#hakkimizda' },
    { name: 'Süreç', href: '/#surec' },
    { name: 'SSS', href: '/#sorular' },
    { name: 'İletişim', href: '/#iletisim' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 pointer-events-none transition-all duration-200">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-4">
        
        {/* Brand Logo - Standalone outside the framed bar, 50% larger */}
        <Link 
          to="/" 
          className="pointer-events-auto shrink-0 flex items-center group py-1"
          aria-label="ERA Dijital Ana Sayfa"
        >
          <EraLogo size="header" />
        </Link>

        {/* Floating Pill Container - Navigation & Action Buttons */}
        <div 
          className={`pointer-events-auto flex items-center gap-3 sm:gap-6 py-2 px-3.5 sm:px-5 rounded-full border transition-all duration-200 ${
            scrolled
              ? 'bg-white/95 dark:bg-[#0F172A]/95 border-[#E2E8F0] dark:border-white/15 backdrop-blur-md shadow-lg'
              : 'bg-white/85 dark:bg-[#0F172A]/85 border-[#E2E8F0] dark:border-white/10 backdrop-blur-md shadow-xs'
          }`}
        >

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
              <span>Ön Değerlendirme Al</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useQuoteWizard } from '../context/QuoteWizardContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openWizard } = useQuoteWizard();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 md:px-10 flex justify-center py-3 sm:py-4 pointer-events-none transition-all duration-300">
      
      {/* Floating Pill Container (AnalyticaHouse Architecture) */}
      <div 
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 py-2 px-3.5 sm:px-5 rounded-full border transition-all duration-300 shadow-lg ${
          scrolled
            ? 'bg-[#070b10]/95 border-white/15 backdrop-blur-md shadow-2xl'
            : 'bg-[#070b10]/85 border-white/10 backdrop-blur-md'
        }`}
      >
        
        {/* Brand Logo & Hashtag */}
        <Link to="/" className="flex items-center gap-2 relative shrink-0">
          <div className="w-7 h-7 rounded-lg bg-petrol-600 text-white flex items-center justify-center font-mono font-bold text-xs">
            E
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-white">
            ERA<span className="text-petrol-400">Dijital</span>
          </span>
          <span className="hidden lg:inline-block font-mono text-[9px] text-petrol-400 font-semibold pl-1">
            #dijitalgelişim
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors font-light"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Tema Değiştir"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* AnalyticaHouse Signature Button */}
          <button
            onClick={() => openWizard()}
            className="ah-button text-xs py-2 px-3.5 sm:px-4 shrink-0"
          >
            <span>
              <span className="text-primary">
                Ön Değerlendirme <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </span>
              <span className="text-secondary">
                30 Sn Analiz <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu (AnalyticaHouse Style) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-0 top-16 bg-[#070b10]/98 border-b border-white/10 backdrop-blur-2xl p-6 shadow-2xl space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 font-medium py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWizard();
              }}
              className="w-full ah-button py-3 px-4 justify-center text-xs"
            >
              <span>
                <span className="text-primary">
                  30 Saniyede Ön Değerlendirme Al <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </span>
                <span className="text-secondary">
                  Analizi Başlat <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}

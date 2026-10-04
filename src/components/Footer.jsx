import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { useQuoteWizard } from '../context/QuoteWizardContext';

export default function Footer() {
  const { openWizard } = useQuoteWizard();

  return (
    <footer className="border-t border-[#E2E8F0] dark:border-white/10 bg-[#F8F9FA] dark:bg-[#070B10] text-[#0F172A] dark:text-slate-300 transition-colors duration-300">
      {/* Top Status Strip */}
      <div className="border-b border-[#E2E8F0] dark:border-white/5 py-3.5 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFD23F] animate-pulse"></span>
          <span className="font-semibold text-[#0F172A] dark:text-white">ERA DİJİTAL // DİJİTAL GELİŞİM VE DÖNÜŞÜM AJANSI</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>Ön İnceleme: &lt;24 Saat</span>
          <span>•</span>
          <span>İstanbul & Global Operasyon</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Intro */}
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:bg-[#FFD23F] group-hover:text-[#0F172A] transition-colors">
                ERA
              </div>
              <span className="font-display font-bold text-lg text-[#0F172A] dark:text-white">ERA Dijital</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md font-light">
              İşletmenizin dijital gelişim önceliklerini belirliyor; görünürlük, müşteri kazanımı ve iş süreçleri için gerekli çözümleri hayata geçiriyoruz.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300">Dijital Varlık</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300">Müşteri Kazanımı</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300">Satış & CRM</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300">Yazılım & Süreç</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <span className="font-mono text-xs text-[#0F172A] dark:text-white font-bold uppercase tracking-wider block mb-4">
              Gelişim Alanları
            </span>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-light">
              <li>
                <a href="/#ihtiyaclar" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">İhtiyaç Tespiti</a>
              </li>
              <li>
                <a href="/#gelisim-alanlari" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Çözüm Yaklaşımı</a>
              </li>
              <li>
                <a href="/#yetkinlik" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Uygulama Örnekleri</a>
              </li>
              <li>
                <a href="/#surec" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Çalışma Süreci</a>
              </li>
              <li>
                <a href="/#sorular" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Karar Öncesi Sorular</a>
              </li>
              <li>
                <Link to="/hakkimizda" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Hakkımızda</Link>
              </li>
            </ul>
          </div>

          {/* Quick Analysis & Contact */}
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#0F172A] dark:text-white font-bold uppercase tracking-wider block mb-4">
              Ön Değerlendirme
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-light">
              İşletmenizin mevcut dijital varlıklarını 24 saat içinde inceliyor, öncelikli yol haritanızı paylaşıyoruz.
            </p>
            <button
              onClick={() => openWizard()}
              className="btn-yellow text-xs py-2.5 px-4 w-full justify-center cursor-pointer shadow-md group"
            >
              <span>30 Saniyelik Analizi Başlat</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1 font-light">
              <p>E-posta: iletisim@eradijital.com</p>
              <p>Konum: İstanbul / Türkiye</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} ERA Dijital. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href="/#iletisim" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">İletişim Formu</a>
            <button onClick={() => openWizard()} className="hover:text-[#0F172A] dark:hover:text-white transition-colors cursor-pointer">Ön Değerlendirme</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

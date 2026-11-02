import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { useQuoteWizard } from '../context/QuoteWizardContext';
import { capabilities } from '../data/capabilities';

export default function Footer() {
  const { openWizard } = useQuoteWizard();

  return (
    <footer className="border-t border-[#E2E8F0] dark:border-white/10 bg-[#F8F9FA] dark:bg-[#070B10] text-[#0F172A] dark:text-slate-300 transition-colors duration-300">
      {/* Kayan Hizmet Şeridi (Marquee - Neler Yapıyoruz :) */}
      <div className="border-b border-[#E2E8F0] dark:border-white/10 w-full overflow-hidden py-2.5">
        <div className="max-w-6xl mx-auto flex items-center px-4 sm:px-6 lg:px-8">
          <span className="shrink-0 font-display font-bold text-xs sm:text-sm text-[#0F172A] dark:text-white mr-4 border-r border-[#E2E8F0] dark:border-white/10 pr-4">
            Neler Yapıyoruz :
          </span>
          <div className="carousel-container flex-1">
            <div className="carousel-track flex items-center gap-8">
              {[...capabilities, ...capabilities].map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm font-sans text-slate-600 dark:text-slate-300 shrink-0 hover:text-[#0F172A] dark:hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
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
              İşletmenizin dijital gelişim önceliklerini birlikte belirliyoruz; görünürlük, müşteri kazanımı ve iş süreçleri için gerekli çözümleri hayata geçiriyoruz.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300">Dijital Varlık</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300">Müşteri Kazanımı</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300">Satış & Talep Takibi</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300">İş Süreçleri & Düzen</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <span className="font-mono text-xs text-[#0F172A] dark:text-white font-bold uppercase tracking-wider block mb-4">
              Gelişim Alanları
            </span>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-light">
              <li>
                <a href="/#ihtiyaclar" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">İhtiyaç Analizi</a>
              </li>
              <li>
                <a href="/#gelisim-alanlari" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Çözüm Yaklaşımı</a>
              </li>
              <li>
                <a href="/#yetkinlik" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Uygulama Örnekleri</a>
              </li>
              <li>
                <a href="/#hakkimizda" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Biz Kimiz</a>
              </li>
              <li>
                <a href="/#surec" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Çalışma Süreci</a>
              </li>
              <li>
                <a href="/#sorular" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Sıkça Sorulan Sorular</a>
              </li>
            </ul>
          </div>

          {/* Quick Analysis & Direct Contact */}
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#0F172A] dark:text-white font-bold uppercase tracking-wider block mb-4">
              Ön Değerlendirme
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-light">
              İşletmenizin mevcut dijital varlıklarını 1 iş günü içinde inceliyor, öncelikli yol haritanızı paylaşıyoruz.
            </p>
            <button
              onClick={() => openWizard()}
              className="btn-yellow text-xs py-2.5 px-4 w-full justify-center cursor-pointer shadow-md group"
            >
              <span>Ön Değerlendirme Al</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="pt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1.5 font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href="tel:+905433619239" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">+90 543 361 92 39</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href="mailto:info@eradijital.com" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">info@eradijital.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Maslak / İstanbul</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with KVKK and Copyright */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} ERA Dijital. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href="/#iletisim" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">İletişim</a>
            <a href="/#hakkimizda" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Biz Kimiz</a>
            <span className="hover:text-[#0F172A] dark:hover:text-white cursor-pointer transition-colors" title="KVKK Aydınlatma Metni">KVKK Aydınlatma Metni</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

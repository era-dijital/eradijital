import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  const trustCredentials = [
    {
      title: "Google Partners",
      subtitle: "Sertifikalı Performans Ekibi",
      tag: "SEARCH & YOUTUBE"
    },
    {
      title: "Meta Business",
      subtitle: "Performans & Reklam Partneri",
      tag: "INSTAGRAM & FACEBOOK"
    },
    {
      title: "KVKK & GDPR",
      subtitle: "Uyumlu Güvenli Veri Altyapısı",
      tag: "VERİ GÜVENLİĞİ"
    },
    {
      title: "%99.9 Uptime",
      subtitle: "Cloudflare & Edge Barındırma",
      tag: "HIZ & ERİŞİLEBİLİRLİK"
    },
    {
      title: "140+ Marka",
      subtitle: "B2B & İhracat Büyüme Ortağı",
      tag: "ÖLÇÜLEBİLİR SONUÇ"
    }
  ];

  return (
    <section className="py-8 border-b border-black/5 dark:border-white/5 bg-[#f1ede4]/70 dark:bg-[#080b12] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 items-center">
          {trustCredentials.map((cred) => (
            <div 
              key={cred.title} 
              className="p-3 sm:p-4 rounded-xl bg-white/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex flex-col justify-center shadow-xs"
            >
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-white tracking-tight">
                  {cred.title}
                </span>
              </div>
              <span className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight">
                {cred.subtitle}
              </span>
              <span className="font-mono text-[9px] text-orange-700 dark:text-orange-400/80 mt-1 uppercase font-semibold">
                {cred.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

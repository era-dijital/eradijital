import React from 'react';
import { CheckCircle, XSquare } from 'lucide-react';

export default function ComparisonMatrix() {
  const comparisonRows = [
    {
      criteria: "Başlangıç & Analiz",
      traditional: "Ezbere hazır paketler sunar, firmanın röntgenini çekmeden satış yapmaya çalışır.",
      era: "24 saatte ücretsiz dijital röntgen ile web, rakip ve reklam eksiklerini somut verilerle tespit eder."
    },
    {
      criteria: "Yeni Ürün & Fikir Lansmanı",
      traditional: "Yüksek kalıp ve stok maliyetleriyle doğrudan üretime yönlendirir; satılmazsa zarar firmaya kalır.",
      era: "Üretimden önce 3D modelleme ve test reklamlarıyla gerçek alıcı iştahını ölçer, riski sıfırlar."
    },
    {
      criteria: "Web Sitesi & Landing Page",
      traditional: "Hantal WordPress veya hazır şablonlarla haftalarca sürer; ziyaretçiyi teklife yönlendirmez.",
      era: "Vite + React & Tailwind ile 0.8s altı açılan, 30 saniyelik etkileşimli teklif hesaplayıcılı büyüme motoru kurar."
    },
    {
      criteria: "Ekip & Koordinasyon",
      traditional: "Video için ayrı, reklam için ayrı, site için ayrı ajans vardır; herkes suçu birbirine atar.",
      era: "Tüm disiplinleri (reklam, web, 3D, AI) tek bir stratejik büyüme beyniyle tek elden yönetir."
    },
    {
      criteria: "Şeffaflık & Raporlama",
      traditional: "Ay sonunda anlaşılmaz teknik jargondan ibaret PDF raporlar gönderir.",
      era: "Haftalık şeffaf ROAS, nitelikli lead ve ciro getirisini canlı veri tablosuyla sunar."
    }
  ];

  return (
    <section className="py-24 border-b border-black/5 dark:border-white/5 bg-[#f1ede4] dark:bg-[#0b0e17] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-700 dark:text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
            [ KARŞILAŞTIRMA MATRİSİ // STRATEJİK FARK ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
            Geleneksel Ajans vs. <span className="hl">Era Dijital</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3">
            İşletmenizin ciro artışını ve pazar güvenliğini şansa bırakmayan kurumsal büyüme mimarimiz.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0e1320] shadow-xl overflow-hidden">
          <div className="grid grid-cols-12 border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider py-4 px-6">
            <div className="col-span-12 sm:col-span-3 mb-2 sm:mb-0">KRİTER / ALAN</div>
            <div className="col-span-6 sm:col-span-4 text-zinc-600 dark:text-zinc-400">GELENEKSEL AJANS</div>
            <div className="col-span-6 sm:col-span-5 text-orange-600 dark:text-orange-400">ERA DİJİTAL ORTAKLIĞI</div>
          </div>

          <div className="divide-y divide-black/5 dark:divide-white/5 text-xs sm:text-sm">
            {comparisonRows.map((row) => (
              <div 
                key={row.criteria} 
                className="grid grid-cols-12 py-5 px-6 items-center gap-4 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors"
              >
                <div className="col-span-12 sm:col-span-3 font-semibold text-zinc-900 dark:text-white font-display text-sm">
                  {row.criteria}
                </div>
                <div className="col-span-12 sm:col-span-4 text-zinc-500 dark:text-zinc-400 flex items-start gap-2">
                  <XSquare className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="col-span-12 sm:col-span-5 text-zinc-800 dark:text-zinc-200 font-medium flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                  <span>{row.era}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

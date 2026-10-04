import React from 'react';
import { Sparkles, Search, MessageSquare, RefreshCw, ArrowUpRight } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function NeedsSection() {
  const { openWizard } = useQuoteWizard();

  const needs = [
    {
      num: "01",
      icon: Sparkles,
      title: "İşletmenin gücünü daha iyi yansıtmak",
      desc: "Ürünlerin, hizmetlerin ve uzmanlığın daha açık, tutarlı ve güven veren bir anlatımla sunulması."
    },
    {
      num: "02",
      icon: Search,
      title: "Doğru müşteriler tarafından bulunmak",
      desc: "İçerik, arama görünürlüğü ve reklam çalışmalarının ilgili hedef kitleye yönelmesi."
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "Gelen ilgiyi daha düzenli yönetmek",
      desc: "Mesajların, başvuruların ve teklif taleplerinin takip edilebilir bir sürece dahil edilmesi."
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "Tekrarlanan işleri kolaylaştırmak",
      desc: "Dağınık bilgi ve manuel işlemlerin uygun dijital araçlarla düzenlenmesi."
    }
  ];

  return (
    <section id="ihtiyaclar" className="py-20 sm:py-24 border-b border-black/5 dark:border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-petrol-700 dark:text-petrol-300 font-semibold block mb-2">
            [ ÖNCELİKLER // İHTİYACIN TANIMI ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white tracking-tight">
            İşletmenizin bugün neye ihtiyacı var?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Dijital gelişim her işletmede aynı noktadan başlamıyor. ERA Dijital, önceliği mevcut duruma göre belirliyor.
          </p>
        </div>

        {/* 4 Needs Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {needs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                onClick={() => openWizard()}
                className="ah-card p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-petrol-500/10 text-petrol-700 dark:text-petrol-300 flex items-center justify-center group-hover:bg-petrol-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-petrol-700 dark:group-hover:text-petrol-300 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-navy-900 dark:text-white mb-2.5 leading-snug group-hover:text-petrol-700 dark:group-hover:text-petrol-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-medium text-petrol-700 dark:text-petrol-400">
                  <span>Bu alanda incele</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarifying Assurance */}
        <div className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
          İşletmenizin eksiklerini suçlamadan; gerçek ihtiyaç ve gelişim alanlarını birlikte netleştiriyoruz.
        </div>
      </div>
    </section>
  );
}

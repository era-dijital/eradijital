import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Search, Target, Film, ArrowRight } from 'lucide-react';

export default function DigitalGrowthSection() {
  const handlePreselect = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.preselectAuditForm) {
      window.preselectAuditForm({ needArea: 'dijital_gelisim' });
    } else {
      const target = document.getElementById('durum-tespiti');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      icon: Layout,
      title: "Güven Veren Web Mimarisi",
      desc: "Üretim kapasitenizi, ürün çeşitliliğinizi ve hizmetlerinizi modern bir vitrinle sunun. Ziyaretçilerinizi saniyeler içinde teklif istemeye ve siparişe yönlendirin."
    },
    {
      icon: Search,
      title: "Aramalarda ve Yapay Zekâda Liderlik (SEO & GEO)",
      desc: "Müşterileriniz artık yanıtları sadece Google'dan değil, yapay zekâ asistanlarından da alıyor. Sektörünüzde arama yapıldığında ilk önerilen ve güvenilen marka olun."
    },
    {
      icon: Target,
      title: "Doğru Alıcıya Odaklanan Reklamlar",
      desc: "Tanıtım bütçenizi boşa harcamayın. Doğrudan toptan alıcıları, ihracat kanallarını veya profesyonel hizmetinizi arayan karar vericileri hedefleyin."
    },
    {
      icon: Film,
      title: "Tanıtım Filmleri ve Dijital Katalog",
      desc: "Tesisinizi, üretim kalitenizi ve projelerinizi profesyonel video çekimleri ve müşterilerinizin kolayca inceleyebileceği dijital kataloglarla sergileyin."
    }
  ];

  return (
    <section id="dijital-gelisim" className="section-gelisim py-24 sm:py-32 border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FFD23F]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.15]">
            Prestij Kazanın, <span className="hl-yellow">Doğru Alıcıya Ulaşın</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Şirketinizin sahadaki kalitesini ekranlara eksiksiz yansıtın. Mevcut düzeninizi bozmadan dijital vitrininizi yenileyin, rakiplerinizin önüne geçin ve doğrudan ürün veya hizmetinizi arayan alıcılarla buluşun.
          </p>
        </motion.div>

        {/* 4 Temel Çözüm Kartı (2x2 Grid — .solutions-grid-2x2) */}
        <div className="solutions-grid-2x2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 hover:border-slate-400/50 dark:hover:border-white/25 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-[#0F172A] dark:bg-white/10 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD23F] group-hover:text-[#0F172A] transition-all duration-300 shadow-xs mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] dark:text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Alt Teşhis / Empati Kutusu (.audience-callout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="audience-callout flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"
        >
          <div className="space-y-1.5 max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#0F172A] dark:text-[#FFD23F] uppercase tracking-wider block">
              Bu Alan Kimler İçin?
            </span>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 italic font-normal leading-relaxed">
              &ldquo;Web sitemiz eski kaldı, reklam veriyoruz ama geri dönüş alamıyoruz, aramalarda rakiplerimizin gerisinde kalıyoruz&rdquo; diyorsanız, önceliğiniz Dijital Gelişim çözümleridir.
            </p>
          </div>

          <a
            href="#durum-tespiti"
            onClick={handlePreselect}
            data-preselect-need="dijital_gelisim"
            className="btn-yellow text-xs py-3 px-5 shrink-0 cursor-pointer shadow-md group inline-flex items-center gap-2"
          >
            <span>Dijital Gelişim Raporu İsteyin</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function DigitalTransformationSection() {
  const handlePreselect = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.preselectAuditForm) {
      window.preselectAuditForm({ needArea: 'dijital_donusum' });
    } else {
      const target = document.getElementById('durum-tespiti');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      title: "Müşteri ve Teklif Takip Sistemi (CRM)",
      desc: "Telefon, web sitesi veya WhatsApp'tan gelen hiçbir talebi kaçırmayın. Hangi müşteriye ne teklif verildiğini, numune ve satış aşamalarını tek bir panelden kontrol edin.",
      img: "/resimler/cozumler/card-crm-takip.jpg",
      imgAlt: "Müşteri ve Teklif Takip Sistemi (CRM)"
    },
    {
      title: "Birbiriyle Konuşan Programlar (API Bağlantıları)",
      desc: "Web siteniz, e-ticaret altyapınız, muhasebe ve depo programlarınız birbirine bağlansın. Aynı faturayı veya müşteri bilgisini farklı programlara elle tekrar tekrar yazma derdinden kurtulun.",
      img: "/resimler/cozumler/card-api-entegrasyon.jpg",
      imgAlt: "Birbiriyle Konuşan Programlar (API Bağlantıları)"
    },
    {
      title: "Şirketinize Özel Yazılım ve Bayi Panelleri",
      desc: "Kalıp paket programlara mecbur kalmayın. Toptan müşterileriniz ve bayileriniz için özel sipariş ekranları, otomatik fiyat hesaplama araçları ve anlık şirket özet raporları kullanın.",
      img: "/resimler/cozumler/card-ozel-yazilim.jpg",
      imgAlt: "Şirketinize Özel Yazılım ve Bayi Panelleri"
    },
    {
      title: "Zaman Kazandıran İş Otomasyonları",
      desc: "Mesai saatleri dışında gelen müşteri mesajlarını 7/24 anında karşılayın. Yeni bir ürünü seri üretime sokmadan önce pazar talebini dijital olarak test edip sermaye riskinizi sıfırlayın.",
      img: "/resimler/cozumler/card-is-otomasyonu.jpg",
      imgAlt: "Zaman Kazandıran İş Otomasyonları"
    }
  ];

  return (
    <section id="dijital-donusum" className="section-donusum-navy py-24 sm:py-32 relative overflow-hidden transition-colors duration-300">

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[1.15]">
              İşinizi Tek Ekrandan, <span className="text-[#FFD23F]">Hatasız Yönetin</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Dağınık Excel tabloları, kaybolan notlar ve WhatsApp mesajları arasında vakit kaybetmeyin. Müşteri takibini, şirket içi yazılımlarınızı ve günlük tekrarlayan işlerinizi tıkır tıkır çalışan sistemlere bağlayın.
            </p>
          </motion.div>
        </div>

        {/* 4 Temel Çözüm Kartı (2x2 Grid — .solutions-grid-2x2 / .card-navy) */}
        <div className="solutions-grid-2x2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {cards.map((card, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="card-navy group p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6 h-full">
                  {/* Sol Kolon: Başlık ve Yazılar */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>

                  {/* Sağ Kolon: Başlığa Uygun Küçük İmaj */}
                  <div className="w-full sm:w-44 lg:w-48 shrink-0 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] border border-white/10 bg-white/5 shadow-inner">
                    <img
                      src={card.img}
                      alt={card.imgAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* Alt Teşhis / Empati Kutusu (.audience-callout--navy) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="audience-callout--navy flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-1.5 max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#FFD23F] uppercase tracking-wider block">
              Bu Alan Kimler İçin?
            </span>
            <p className="text-sm sm:text-base text-slate-200 italic font-normal leading-relaxed">
              &ldquo;Müşteri geliyor ama takip etmekte zorlanıyoruz, kullandığımız programlar birbirinden kopuk, aynı işleri personelimiz elle tekrar tekrar yapıyor&rdquo; diyorsanız, önceliğiniz Dijital Dönüşüm çözümleridir.
            </p>
          </div>

          <a
            href="#durum-tespiti"
            onClick={handlePreselect}
            data-preselect-need="dijital_donusum"
            className="btn-yellow text-xs py-3 px-5 shrink-0 cursor-pointer shadow-md group inline-flex items-center gap-2"
          >
            <span>Dijital Dönüşüm Raporu İsteyin</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

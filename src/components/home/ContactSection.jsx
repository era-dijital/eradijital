import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Send, CheckCircle2, Sparkles, Building2, User, Mail, Globe, MessageSquare } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function ContactSection() {
  const { openWizard } = useQuoteWizard();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    contactInfo: '',
    websiteOrSocial: '',
    priorityNeed: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.contactInfo) {
      alert('Lütfen zorunlu alanları doldurunuz.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="py-24 sm:py-32 bg-[#fbfcfb] dark:bg-[#070b10] border-t border-black/[0.06] dark:border-white/[0.08] relative overflow-hidden">
      {/* AnalyticaHouse style ambient glow */}
      <div className="ah-glow-bg bottom-0 right-1/4 w-[450px] h-[450px] bg-petrol-500/15 dark:bg-petrol-400/10 blur-[140px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Direct Wizard Callout */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol-500/10 dark:bg-petrol-400/10 border border-petrol-700/20 dark:border-petrol-400/25 text-petrol-700 dark:text-petrol-300 font-mono text-[11px] font-semibold tracking-wider uppercase">
              <span>Bölüm 7 — Sonuç ve İletişim</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy-900 dark:text-white leading-[1.12]">
              Dijitalde bir sonraki adımınız netleşsin.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
              ERA Dijital, işletmenizin mevcut durumunu ve öncelikli ihtiyacını değerlendirerek uygun başlangıç alanını belirliyor.
            </p>

            {/* Quick 30-Sec Analysis Callout Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0d1522] border border-black/[0.06] dark:border-white/[0.08] space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-petrol-50 dark:bg-petrol-900/30 text-petrol-700 dark:text-petrol-300 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-navy-900 dark:text-white">
                    Hızlı Dijital Analiz
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">
                    Form doldurmak yerine doğrudan 30 saniyede ihtiyaçlarınızı seçin.
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => openWizard()}
                className="w-full ah-button text-xs py-3 px-4 justify-center"
              >
                <span>
                  <span className="text-primary">
                    30 Saniyelik Analizi Başlat <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                  <span className="text-secondary">
                    Ön Değerlendirme Al <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </span>
              </button>
            </div>

            <div className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1.5 pt-2 font-light">
              <p>• Başvuru için web sitesi sahibi olmak şart değildir.</p>
              <p>• Kısa bir ihtiyaç görüşmesi ve mevcut dijital varlıkların ön incelemesiyle başlar.</p>
            </div>
          </motion.div>

          {/* Right Column: Contact & Lead Form */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0d1522] border border-black/[0.08] dark:border-white/[0.08] shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy-900 dark:text-white">
                    Talebiniz Alındı
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed font-light">
                    Ön değerlendirme başvurunuz ekibimize ulaştı. Mevcut dijital varlıklarınızı inceledikten sonra en geç 24 saat içinde sizinle iletişime geçeceğiz.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-petrol-700 dark:text-petrol-400 hover:underline cursor-pointer"
                  >
                    Yeni bir başvuru gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-display font-bold text-navy-900 dark:text-white mb-2">
                    Ücretsiz Ön Değerlendirme Formu
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Ad Soyad <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Adınız Soyadınız"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-petrol-600 dark:focus:border-petrol-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                        İşletme Adı <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Şirket / Marka Adı"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-petrol-600 dark:focus:border-petrol-400 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                        E-posta veya Telefon <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.contactInfo}
                          onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                          placeholder="ornek@sirket.com veya 05xx"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-petrol-600 dark:focus:border-petrol-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Web Sitesi veya Sosyal Medya <span className="text-zinc-400 font-normal">(İsteğe bağlı)</span>
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={formData.websiteOrSocial}
                          onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                          placeholder="www.sirketiniz.com ya da @instagram"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-petrol-600 dark:focus:border-petrol-400 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Öncelikli olarak neyi geliştirmek istiyorsunuz?
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
                      <textarea
                        rows={3}
                        value={formData.priorityNeed}
                        onChange={(e) => setFormData({ ...formData, priorityNeed: e.target.value })}
                        placeholder="Örn: Web sitemizi yenilemek, aramalarda bulunmak veya müşteri taleplerini düzenli takip etmek istiyoruz..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-petrol-600 dark:focus:border-petrol-400 resize-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full ah-button py-3.5 px-6 justify-center text-sm shadow-md"
                    >
                      <span>
                        <span className="text-primary">
                          Ücretsiz Ön Değerlendirme İste <Send className="w-4 h-4 ml-1" />
                        </span>
                        <span className="text-secondary">
                          Başvuruyu İlet <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, Sparkles, Building2, User, Mail, Globe, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
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
    <section id="iletisim" className="py-24 sm:py-32 bg-[#F7F7F5] dark:bg-[#0B0F17] border-t border-[#E7E3DA] dark:border-white/10 relative overflow-hidden transition-colors duration-250">
      
      {/* Subtle Yellow Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FFD23F]/12 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Context & Direct Wizard Callout */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD23F]/20 dark:bg-[#FFD23F]/15 border border-[#FFD23F]/40 text-[#92400E] dark:text-[#FFD23F] font-mono text-[11px] font-semibold tracking-wider uppercase shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>Bölüm 7 — Sonuç ve İletişim</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#111827] dark:text-white leading-[1.12]">
              Dijitalde bir sonraki <br />
              <span className="hl-yellow">adımınız netleşsin.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
              ERA Dijital, işletmenizin mevcut durumunu ve öncelikli ihtiyacını değerlendirerek uygun başlangıç alanını belirliyor.
            </p>

            {/* Quick 30-Sec Analysis Callout Card */}
            <div className="p-7 rounded-3xl bg-white dark:bg-[#111827] border border-[#E7E3DA] dark:border-white/10 space-y-4 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD23F] text-[#111827] flex items-center justify-center font-bold shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#92400E] dark:text-[#FFD23F] uppercase tracking-wider">
                    ÖN DEĞERLENDİRME SİSTEMİ
                  </span>
                  <h4 className="text-base font-display font-bold text-[#111827] dark:text-white">
                    Hızlı 30 Sn Dijital Analiz
                  </h4>
                </div>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                Uzun form doldurmak yerine doğrudan etkileşimli adımlarla gelişim alanlarınızı ve öncelikli yol haritanızı belirleyin.
              </p>
              
              <button
                onClick={() => openWizard()}
                className="w-full btn-yellow text-xs py-3 px-4 justify-center shadow-md cursor-pointer"
              >
                <span>30 Saniyelik Analizi Başlat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-xs text-zinc-500 dark:text-zinc-400 space-y-2 pt-2 font-light">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EAB308] shrink-0" />
                <span>Başvuru için web sitesi sahibi olmak şart değildir.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0" />
                <span>Kısa bir ihtiyaç görüşmesi ve mevcut dijital varlıkların ön incelemesiyle başlar.</span>
              </p>
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
            <div className="p-8 sm:p-11 rounded-3xl bg-white dark:bg-[#111827] border border-[#E7E3DA] dark:border-white/10 shadow-2xl relative overflow-hidden">
              {/* Yellow Top Indicator Strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#FFD23F]" />

              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#111827] dark:text-white">
                    Talebiniz Alındı
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed font-light">
                    Ön değerlendirme başvurunuz ekibimize ulaştı. Mevcut dijital varlıklarınızı inceledikten sonra en geç 24 saat içinde sizinle iletişime geçeceğiz.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#B45309] dark:text-[#FFD23F] hover:underline cursor-pointer"
                  >
                    Yeni bir başvuru gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#111827] dark:text-white">
                      Ücretsiz Ön Değerlendirme Formu
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-light">
                      Ekibimiz varlıklarınızı inceleyip 24 saat içinde gelişim önerilerini iletecektir.
                    </p>
                  </div>

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
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-zinc-900/60 border border-[#E7E3DA] dark:border-zinc-800 text-sm text-[#111827] dark:text-white focus:outline-none focus:border-[#FFD23F] focus:ring-2 focus:ring-[#FFD23F]/30 transition-all"
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
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-zinc-900/60 border border-[#E7E3DA] dark:border-zinc-800 text-sm text-[#111827] dark:text-white focus:outline-none focus:border-[#FFD23F] focus:ring-2 focus:ring-[#FFD23F]/30 transition-all"
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
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-zinc-900/60 border border-[#E7E3DA] dark:border-zinc-800 text-sm text-[#111827] dark:text-white focus:outline-none focus:border-[#FFD23F] focus:ring-2 focus:ring-[#FFD23F]/30 transition-all"
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
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-zinc-900/60 border border-[#E7E3DA] dark:border-zinc-800 text-sm text-[#111827] dark:text-white focus:outline-none focus:border-[#FFD23F] focus:ring-2 focus:ring-[#FFD23F]/30 transition-all"
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
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-zinc-900/60 border border-[#E7E3DA] dark:border-zinc-800 text-sm text-[#111827] dark:text-white focus:outline-none focus:border-[#FFD23F] focus:ring-2 focus:ring-[#FFD23F]/30 resize-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-yellow py-4 px-6 justify-center text-sm shadow-lg cursor-pointer"
                    >
                      <span>Ücretsiz Ön Değerlendirme İste</span>
                      <Send className="w-4 h-4" />
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

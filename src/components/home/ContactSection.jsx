import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, Sparkles, Building2, User, Mail, Globe, MessageSquare, ShieldCheck, Phone, MapPin, FileText } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function ContactSection() {
  const { openWizard } = useQuoteWizard();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    contactInfo: '',
    websiteOrSocial: '',
    priorityNeed: '',
    budgetRange: '',
    kvkkConsent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.contactInfo) {
      alert('Lütfen zorunlu alanları doldurunuz.');
      return;
    }
    if (!formData.kvkkConsent) {
      alert('Lütfen KVKK Aydınlatma Metni onayını işaretleyiniz.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-200/40 dark:bg-white/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Context, Scope Breakdown & Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
              <span>Ön Değerlendirme & İletişim</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.12]">
              Dijitalde Bir Sonraki <br />
              <span className="hl-yellow">Adımınız Netleşsin</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              İşletmenizin mevcut durumunu ve öncelikli hedeflerini inceleyerek sizin için en uygun başlangıç alanını belirliyoruz.
            </p>

            {/* Clear Roadmap Flow Box (PDF: Tek Bir Akış) */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FFD23F]" />
                <span>Ön Değerlendirme Sürecimiz</span>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 font-light">
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-[#0F172A] dark:text-white shrink-0">1.</span>
                  <p><strong className="font-semibold text-[#0F172A] dark:text-white">Ne inceliyoruz?</strong> Web sitesi, Google arama görünürlüğü ve müşteri taleplerinin karşılanma biçimi.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-[#0F172A] dark:text-white shrink-0">2.</span>
                  <p><strong className="font-semibold text-[#0F172A] dark:text-white">Ne alırsınız?</strong> 1–2 sayfalık yazılı gelişim özeti ve kısa değerlendirme görüşmesi.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-[#0F172A] dark:text-white shrink-0">3.</span>
                  <p><strong className="font-semibold text-[#0F172A] dark:text-white">Ne zaman?</strong> Başvurunuzdan sonra 1 iş günü içinde.</p>
                </div>
                <div className="flex items-start gap-2.5 pt-1 border-t border-[#E2E8F0] dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400">
                  <p>Ayrıntılı teknik kod denetimi ve kapsamlı uygulama yol haritası ayrıca tekliflendirilir.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-3 pt-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0F172A] dark:text-[#FFD23F] shrink-0" />
                <span>Telefon / WhatsApp: <a href="tel:+905433619239" className="font-medium text-[#0F172A] dark:text-white hover:underline">+90 543 361 92 39</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0F172A] dark:text-[#FFD23F] shrink-0" />
                <span>E-posta: <a href="mailto:eradijitalinfo@gmail.com" className="font-medium text-[#0F172A] dark:text-white hover:underline">eradijitalinfo@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#0F172A] dark:text-[#FFD23F] shrink-0" />
                <span>Konum: Maslak / İstanbul, Türkiye</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 pt-1 font-light">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Başvuru için aktif bir web sitenizin olması şart değildir.</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact & Lead Form */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-11 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 shadow-2xl relative overflow-hidden">
              {/* Refined Subtle Hairline Top Highlight */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFD23F] to-transparent" />

              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#0F172A] dark:text-white">
                    Talebiniz Alındı
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-light">
                    Ön değerlendirme başvurunuz ekibimize ulaştı. Mevcut dijital varlıklarınızı inceledikten sonra en geç 1 iş günü içinde sizinle iletişime geçeceğiz.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-slate-700 dark:text-white hover:underline cursor-pointer"
                  >
                    Yeni bir başvuru gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#0F172A] dark:text-white">
                      Ücretsiz Ön Değerlendirme Formu
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-light">
                      Ekibimiz varlıklarınızı inceleyip 1 iş günü içinde gelişim önerilerini iletecektir.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Ad Soyad <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Adınız Soyadınız"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#0F172A] dark:focus:border-white/40 focus:ring-2 focus:ring-[#0F172A]/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        İşletme Adı <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Şirket / Marka Adı"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#0F172A] dark:focus:border-white/40 focus:ring-2 focus:ring-[#0F172A]/10 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        E-posta veya Telefon <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.contactInfo}
                          onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                          placeholder="ornek@sirket.com veya 05xx"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#0F172A] dark:focus:border-white/40 focus:ring-2 focus:ring-[#0F172A]/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Web Sitesi veya Sosyal Medya <span className="text-slate-400 font-normal">(İsteğe bağlı)</span>
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={formData.websiteOrSocial}
                          onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                          placeholder="www.sirketiniz.com ya da @instagram"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#0F172A] dark:focus:border-white/40 focus:ring-2 focus:ring-[#0F172A]/10 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Öncelikli olarak neyi geliştirmek istiyorsunuz?
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <textarea
                        rows={3}
                        value={formData.priorityNeed}
                        onChange={(e) => setFormData({ ...formData, priorityNeed: e.target.value })}
                        placeholder="Örn: Web sitemizi yenilemek, aramalarda bulunmak veya müşteri taleplerini düzenli takip etmek istiyoruz..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#0F172A] dark:focus:border-white/40 focus:ring-2 focus:ring-[#0F172A]/10 resize-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Optional Budget Range (PDF: Bütçe aralığı isteğe bağlı) */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Tahmini Bütçe Aralığı <span className="text-slate-400 font-normal">(İsteğe bağlı)</span>
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#0F172A] dark:focus:border-white/40 focus:ring-2 focus:ring-[#0F172A]/10 transition-all"
                    >
                      <option value="">Belirtmek istemiyorum / Ön değerlendirmede konuşalım</option>
                      <option value="15k-30k">15.000 TL – 30.000 TL</option>
                      <option value="30k-60k">30.000 TL – 60.000 TL</option>
                      <option value="60k+">60.000 TL ve üzeri</option>
                    </select>
                  </div>

                  {/* Mandatory KVKK Consent (PDF: KVKK onayı eklenmeli) */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="kvkkConsent"
                      required
                      checked={formData.kvkkConsent}
                      onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                      className="mt-0.5 rounded border-[#E2E8F0] text-[#0F172A] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="kvkkConsent" className="text-xs text-slate-500 dark:text-slate-400 font-light cursor-pointer select-none leading-relaxed">
                      Kişisel verilerimin iletişim ve ön değerlendirme amacıyla işlenmesine ilişkin <span className="underline font-normal text-slate-700 dark:text-slate-300">KVKK Aydınlatma Metni</span>'ni okudum ve onaylıyorum. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-yellow py-4 px-6 justify-center text-sm shadow-lg cursor-pointer group"
                    >
                      <span>Ücretsiz Ön Değerlendirme İste</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

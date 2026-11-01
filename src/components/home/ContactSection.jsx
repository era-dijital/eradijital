import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, ShieldCheck, Phone, Mail, MapPin, FileCheck } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [pulseNeed, setPulseNeed] = useState(null);
  const [formData, setFormData] = useState({
    name_company: '',
    phone: '',
    sector: 'Üretici',
    need_area: 'emin_degilim',
    kvkkConsent: false
  });

  // Global Akıllı Form Ön Seçimi (Smart Form Pre-selection)
  useEffect(() => {
    window.preselectAuditForm = ({ needArea, sector }) => {
      const formEl = document.getElementById('durum-tespiti');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }

      setFormData(prev => ({
        ...prev,
        ...(needArea ? { need_area: needArea } : {}),
        ...(sector ? { sector: sector } : {})
      }));

      if (needArea) {
        setPulseNeed(needArea);
        setTimeout(() => setPulseNeed(null), 2500);
      }
    };

    return () => {
      delete window.preselectAuditForm;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name_company || !formData.phone || !formData.sector) {
      alert('Lütfen zorunlu alanları doldurunuz.');
      return;
    }
    if (!formData.kvkkConsent) {
      alert('Lütfen KVKK Aydınlatma Metni onayını işaretleyiniz.');
      return;
    }

    // Backend payload eşleştirmesi (api/growth-lead.php ile tam uyumlu)
    const payload = {
      website: formData.name_company,
      fullName: formData.name_company,
      companyName: formData.name_company,
      phone: formData.phone,
      businessType: formData.sector,
      goal: formData.need_area,
      services: `İhtiyaç Alanı: ${formData.need_area} | Sektör: ${formData.sector}`
    };

    try {
      await fetch('/api/growth-lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.log('Lead kaydedildi (lokal simülasyon):', err);
    }

    setSubmitted(true);
  };

  const needOptions = [
    {
      value: "dijital_gelisim",
      label: "Dijital Gelişim: Yeni müşteri kazanmak, web sitesi, katalog ve reklam."
    },
    {
      value: "dijital_donusum",
      label: "Dijital Dönüşüm: CRM müşteri takibi, programları bağlamak (API), özel yazılım ve otomasyon."
    },
    {
      value: "her_ikisi",
      label: "Her İki Alanda da Çözüm Arıyorum."
    },
    {
      value: "emin_degilim",
      label: "Emin Değilim, İncelemeniz Sonucunda Belirleyelim."
    }
  ];

  return (
    <section
      id="durum-tespiti"
      className="py-24 sm:py-32 bg-[#F8F9FA] dark:bg-[#090D14] border-t border-[#E2E8F0] dark:border-white/10 relative overflow-hidden transition-colors duration-300"
    >
      {/* Anchor alias support for backwards compatibility */}
      <div id="iletisim" className="absolute -top-16" />
      <div id="on-degerlendirme" className="absolute -top-16" />

      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-200/40 dark:bg-white/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

          {/* Sol Sütun: İletişim & Güvence Özeti */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
              <span>1 İŞ GÜNÜNDE YAZILI ÖZET</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.12]">
              Eksiklerinizi Görün, <br />
              <span className="hl-yellow">Doğru Adımı Atın</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Hemen bir bütçe ayırmak veya teknik kararlar vermek zorunda değilsiniz. Şirketinizin mevcut web görünümünü veya iş süreçlerini ücretsiz inceletin; size özel 1-2 sayfalık anlaşılır durum raporunu masanızda bulun.
            </p>

            {/* 1 İş Gününde Rapor Güvencesi */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 space-y-4 shadow-sm">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 aspect-[16/9] max-h-36 w-full bg-slate-100 dark:bg-white/5">
                <img
                  src="/resimler/ikili-yapi/audit-diagnostic-report.jpg"
                  alt="1 iş gününde teslim edilen yazılı durum raporu dokümanı"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                <FileCheck className="w-4 h-4 text-emerald-500" />
                <span>Ücretsiz Durum Tespiti Neler İçerir?</span>
              </div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD23F] font-bold">✓</span>
                  <span>Mevcut web sitenizin hız, mobil uyum ve ikna edicilik kontrolü</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD23F] font-bold">✓</span>
                  <span>Google ve yapay zekâ asistanlarında (SEO/GEO) bulunabilirlik analizi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD23F] font-bold">✓</span>
                  <span>Manuel iş yükünü azaltacak öncelikli entegrasyon önerileri</span>
                </li>
              </ul>
            </div>

            {/* Doğrudan İletişim Kanalları */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0F172A] dark:text-[#FFD23F] shrink-0" />
                <span>Telefon / WhatsApp: <a href="tel:+905433619239" className="font-semibold text-[#0F172A] dark:text-white hover:underline">+90 543 361 92 39</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0F172A] dark:text-[#FFD23F] shrink-0" />
                <span>E-posta: <a href="mailto:eradijitalinfo@gmail.com" className="font-semibold text-[#0F172A] dark:text-white hover:underline">eradijitalinfo@gmail.com</a></span>
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

          {/* Sağ Sütun: Sadeleştirilmiş Başvuru Formu (#audit-request-form) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-11 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-white/10 shadow-2xl relative overflow-hidden">
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
                    Durum tespiti başvurunuz ekibimize ulaştı. 1 iş günü içinde şirketinize özel durum raporunu hazırlayıp sizinle iletişime geçeceğiz.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-slate-700 dark:text-white hover:underline cursor-pointer"
                  >
                    Yeni bir başvuru gönder
                  </button>
                </div>
              ) : (
                <form id="audit-request-form" onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#0F172A] dark:text-white">
                      Ücretsiz Durum Tespiti Başvuru Formu
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-light">
                      Ekibimiz varlıklarınızı inceleyip 1 iş günü içinde durum raporunuzu iletecektir.
                    </p>
                  </div>

                  {/* Alan 1: Adınız ve Şirketinizin Adı */}
                  <div>
                    <label htmlFor="field-name-company" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Adınız ve Şirketinizin Adı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name_company"
                      id="field-name-company"
                      required
                      value={formData.name_company}
                      onChange={(e) => setFormData({ ...formData, name_company: e.target.value })}
                      placeholder="Örn: Ahmet Yılmaz — Yılmaz Makina A.Ş."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#0F172A] dark:focus:border-white/40 focus:ring-2 focus:ring-[#0F172A]/10 transition-all"
                    />
                  </div>

                  {/* Alan 2 & Alan 3: Telefon Numaranız & Sektörünüz */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="field-phone" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Telefon Numaranız <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="field-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#0F172A] dark:focus:border-white/40 focus:ring-2 focus:ring-[#0F172A]/10 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="field-sector" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Sektörünüz <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="sector"
                        id="field-sector"
                        required
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-[#0F172A] dark:focus:border-white/40 focus:ring-2 focus:ring-[#0F172A]/10 transition-all cursor-pointer"
                      >
                        <option value="Üretici">Üretici (Fabrikalar ve Üreticiler)</option>
                        <option value="Toptancı">Toptancı (Toptan Ticaret ve Dağıtım)</option>
                        <option value="Ar-Ge">Ar-Ge (Ar-Ge ve Proje Stüdyoları)</option>
                        <option value="Hizmet">Hizmet (Hizmet Sektörü ve Ofisler)</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>
                  </div>

                  {/* Alan 4: Hangi Alanda İhtiyacınız Var? (Radyo Kart Grubu) */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Hangi Alanda İhtiyacınız Var?
                    </label>
                    <div className="space-y-2">
                      {needOptions.map((opt) => {
                        const isChecked = formData.need_area === opt.value;
                        const isPulsing = pulseNeed === opt.value;

                        return (
                          <label
                            key={opt.value}
                            className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all duration-200 select-none ${isChecked
                                ? 'bg-amber-500/10 dark:bg-amber-500/15 border-[#FFD23F] shadow-xs'
                                : 'bg-[#F8F9FA] dark:bg-white/[0.03] border-[#E2E8F0] dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                              } ${isPulsing ? 'highlight-pulse' : ''}`}
                          >
                            <input
                              type="radio"
                              name="need_area"
                              value={opt.value}
                              checked={isChecked}
                              onChange={() => setFormData({ ...formData, need_area: opt.value })}
                              className="mt-0.5 text-[#0F172A] focus:ring-0 cursor-pointer"
                            />
                            <span className="text-xs text-slate-700 dark:text-slate-200 font-normal leading-relaxed">
                              {opt.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* KVKK Onayı */}
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
                      Kişisel verilerimin iletişim ve durum tespiti amacıyla işlenmesine ilişkin <span className="underline font-normal text-slate-700 dark:text-slate-300">KVKK Aydınlatma Metni</span>'ni okudum ve onaylıyorum. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Gönder Butonu */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-yellow py-4 px-6 justify-center text-sm font-bold shadow-lg cursor-pointer group flex items-center gap-2"
                    >
                      <span>Ücretsiz Durum Raporunuzu İsteyin</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

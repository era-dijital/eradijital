import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, CheckCircle2, Sparkles, TrendingUp, Building2, Layers, Cpu, Rocket, Monitor } from 'lucide-react';
import { useQuoteWizard } from '../../context/QuoteWizardContext';

export default function QuoteWizardModal() {
  const { 
    isOpen, 
    step, 
    setStep, 
    formData, 
    loading, 
    error, 
    closeWizard, 
    resetWizard,
    updateFormData, 
    toggleService, 
    submitLead 
  } = useQuoteWizard();

  if (!isOpen) return null;

  const handleGoalSelect = (goal) => {
    updateFormData('goal', goal);
    setStep(2);
  };

  const handleBusinessSelect = (type) => {
    updateFormData('businessType', type);
    setStep(3);
  };

  const handleServicesContinue = () => {
    if (formData.services.length === 0) {
      updateFormData('services', ['Performans Reklamları (Meta & Google)']);
    }
    setStep(4);
  };

  const handleBudgetSelect = (budget) => {
    updateFormData('budgetRange', budget);
    setStep(5);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await submitLead();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeWizard}
          className="fixed inset-0 bg-[#06080e]/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0e131f] border border-white/10 rounded-2xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Bar: Step count & Close */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono font-bold">
                {step <= 5 ? step : 5}
              </span>
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
                {step === 6 ? 'TAMAMLANDI' : `ADIM ${step} / 5 // BÜYÜME ANALİZİ`}
              </span>
            </div>

            <button
              onClick={closeWizard}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          {step <= 5 && (
            <div className="w-full bg-white/5 h-1.5 rounded-full mb-8 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
                initial={false}
                animate={{ width: `${(step / 5) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Step 1: Goal */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  İşletmenizin öncelikli büyüme hedefi nedir?
                </h3>
                <p className="text-sm text-zinc-400">
                  Size özel büyüme stratejisi ve dijital röntgen kapsamını belirlemek için seçin.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  {
                    title: 'Satışları ve Ciroyu Katlamak',
                    desc: 'Mevcut pazarınızda dönüşüm oranlarını artırmak ve yeni satış kanalları açmak.',
                    icon: TrendingUp
                  },
                  {
                    title: 'Yeni Bir Ürünü / Fikri Pazarda Test Etmek',
                    desc: 'Üretime girmeden önce 3D/AI görsel reklamlarla talep toplamak ve piyasa yoklamak.',
                    icon: Rocket
                  },
                  {
                    title: 'Dönüşüm Odaklı Web Altyapısı Kurmak',
                    desc: 'Eski vitrin sitenizi ziyaretçiyi anında müşteriye dönüştüren modern bir yapıya kavuşturmak.',
                    icon: Monitor
                  },
                  {
                    title: 'Süreçleri AI ve Otomasyonla Hızlandırmak',
                    desc: 'WhatsApp, CRM ve manuel işleri 7/24 otonom çalışan akıllı sistemlere devretmek.',
                    icon: Cpu
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.title}
                      onClick={() => handleGoalSelect(item.title)}
                      className="group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-blue-600/10 hover:border-blue-500/40 text-left transition-all hover:scale-[1.01]"
                    >
                      <div className="p-2.5 rounded-lg bg-white/5 text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Business Type */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  Hedef kitleniz ve müşteri profiliniz kimler?
                </h3>
                <p className="text-sm text-zinc-400">
                  Pazarlama kanalı karmasını (Meta, Google, LinkedIn veya B2B doğrudan temas) belirler.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  {
                    title: 'B2B (Diğer Şirketler & Kurumlar)',
                    desc: 'Şirket sahipleri, satınalma yöneticileri, bayiler ve kurumsal müşteriler.',
                    type: 'B2B'
                  },
                  {
                    title: 'B2C (Doğrudan Son Tüketici)',
                    desc: 'Bireysel alıcılar, e-ticaret tüketicileri, yerel veya bölgesel halk.',
                    type: 'B2C'
                  },
                  {
                    title: 'Hem B2B Hem B2C (Karma Model)',
                    desc: 'Aynı anda hem toptan kurumsal dağıtım hem de perakende tüketici operasyonu.',
                    type: 'Hybrid'
                  }
                ].map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleBusinessSelect(item.type)}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-blue-600/10 hover:border-blue-500/40 text-left transition-all hover:scale-[1.01]"
                  >
                    <div className="font-semibold text-white text-base">
                      {item.title}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1">
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors pt-2"
              >
                <ArrowLeft className="w-4 h-4" /> Önceki Adım
              </button>
            </div>
          )}

          {/* Step 3: Services (Multi-select) */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  Hangi büyüme araçlarına ihtiyaç duyuyorsunuz?
                </h3>
                <p className="text-sm text-zinc-400">
                  Birden fazla seçim yapabilirsiniz. İhtiyacınıza göre entegre bir büyüme paketi tasarlanır.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Performans Reklamları (Meta & Google)',
                  'Dönüşüm Odaklı Web & Landing Page',
                  '3D Modelleme & Video Prodüksiyon',
                  'Yapay Zeka Asistanları & CRM',
                  'Açık Hava (Billboard) & Fuar',
                  'Özel Yazılım / Sektörel SaaS'
                ].map((service) => {
                  const selected = formData.services.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                        selected 
                          ? 'border-blue-500 bg-blue-600/15 text-white' 
                          : 'border-white/5 bg-white/[0.02] text-zinc-300 hover:border-white/20'
                      }`}
                    >
                      <span className="text-sm font-medium pr-2">{service}</span>
                      <span className={`w-5 h-5 rounded flex items-center justify-center text-xs shrink-0 ${
                        selected ? 'bg-blue-500 text-white' : 'border border-white/20'
                      }`}>
                        {selected ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Önceki Adım
                </button>

                <button
                  onClick={handleServicesContinue}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-sm transition-colors"
                >
                  Devam Et →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Budget Range */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  Aylık reklam / büyüme yatırımı bütçeniz ne kadardır?
                </h3>
                <p className="text-sm text-zinc-400">
                  Gerçekçi pazar testleri ve orantılı yatırım getirisi (ROI) planlayabilmemiz için ölçeğinizi belirtin.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  {
                    range: '20.000 TL altı',
                    label: 'Pilot Başlangıç',
                    desc: 'Dar kapsamlı lokal reklam veya tekil optimizasyon adımları için.'
                  },
                  {
                    range: '20.000 TL – 50.000 TL',
                    label: 'Hızlı Pazar Testi & Giriş',
                    desc: 'Yeni bir ürün veya hizmet için ilk talep toplama ve pazar doğrulama aşaması.'
                  },
                  {
                    range: '50.000 TL – 150.000 TL',
                    label: 'Agresif Büyüme & Çok Kanallı Reklam',
                    desc: 'Meta, Google ve otomasyon entegrasyonuyla ciro katlama odaklı ölçekleme.'
                  },
                  {
                    range: '150.000 TL ve üzeri',
                    label: 'Stratejik Büyüme Partnerliği',
                    desc: 'Ulusal/global pazar açılımı, açık hava, TV/YouTube ve uçtan uca büyüme mimarisi.'
                  }
                ].map((item) => (
                  <button
                    key={item.range}
                    onClick={() => handleBudgetSelect(item.range)}
                    className="p-4 sm:p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-blue-600/10 hover:border-blue-500/40 text-left transition-all hover:scale-[1.01] flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-white text-base flex items-center gap-2">
                        {item.range}
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {item.label}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-400 mt-1">
                        {item.desc}
                      </div>
                    </div>
                    <span className="text-blue-400 font-bold ml-2">→</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors pt-2"
              >
                <ArrowLeft className="w-4 h-4" /> Önceki Adım
              </button>
            </div>
          )}

          {/* Step 5: Contact & Website for Digital X-Ray */}
          {step === 5 && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  Ücretsiz Dijital Röntgeninizi Gönderelim
                </h3>
                <p className="text-sm text-zinc-400">
                  Web sitenizi ve sektörünüzü 24 saat içinde ücretsiz inceleyip tıkanıklıkları ve büyüme yol haritanızı iletiyoruz.
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg">
                  {error}
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    Web Siteniz (veya Instagram Hesabınız) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ornek-sirket.com veya @markahesabi"
                    value={formData.website}
                    onChange={(e) => updateFormData('website', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <span className="text-[11px] text-blue-400/80 mt-1 block">
                    ⚡ Dijital röntgen taraması bu adres üzerinden gerçekleştirilecektir.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Şirket / Marka Adı
                    </label>
                    <input
                      type="text"
                      placeholder="Şirketiniz"
                      value={formData.companyName}
                      onChange={(e) => updateFormData('companyName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ad Soyad"
                      value={formData.fullName}
                      onChange={(e) => updateFormData('fullName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      placeholder="info@sirket.com"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Önceki Adım
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 text-sm"
                >
                  {loading ? 'İnceleniyor...' : 'Büyüme Analizini Başlat ➔'}
                </button>
              </div>
            </form>
          )}

          {/* Step 6: Success */}
          {step === 6 && (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Röntgen Talebiniz Alındı!
              </h3>

              <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                Uzman ekibimiz <span className="text-blue-400 font-mono font-semibold">{formData.website || 'web sitenizi'}</span> ve sektörünüzdeki rakipleri taramaya başladı.
              </p>

              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-yellow-400" /> Sırada Ne Var?
                </div>
                <ul className="space-y-1.5 text-zinc-400 list-disc list-inside">
                  <li>24 saat içinde dijital varlıklarınızın röntgen raporu çıkarılır.</li>
                  <li>Tıkanıklıklar, eksikler ve ciro artırıcı büyüme kanalları belirlenir.</li>
                  <li>Doğrudan sizinle iletişime geçilerek somut yol haritası sunulur.</li>
                </ul>
              </div>

              <button
                onClick={() => {
                  resetWizard();
                  closeWizard();
                }}
                className="mt-4 px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium text-sm transition-colors"
              >
                Pencereyi Kapat
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
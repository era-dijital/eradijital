import React, { useState } from 'react';
import SEO from '../components/SEO';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Target, 
  Clock, 
  Check
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useQuoteWizard } from '../context/QuoteWizardContext';

export default function OnAnalizPage() {
  const { openWizard } = useQuoteWizard();

  const [formData, setFormData] = useState({
    website: '',
    companyName: '',
    fullName: '',
    phone: '',
    email: '',
    goal: 'Satışları ve Ciroyu Katlamak',
    businessType: 'B2B',
    budgetRange: '50.000 TL - 150.000 TL',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/growth-lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Gönderim sırasında hata oluştu.');
      }
      setSubmitted(true);
    } catch (err) {
      // Fallback: don't block user
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f4] dark:bg-[#070b10] text-zinc-900 dark:text-slate-100 selection:bg-petrol-600 selection:text-white transition-colors duration-250">
      <SEO
        title="Ücretsiz Dijital Röntgen & Büyüme Analizi | Era Dijital"
        description="Web sitenizi, rakiplerinizi ve reklam kanallarınızı 24 saatte ücretsiz inceliyor; cironuzu artıracak somut büyüme planını çıkarıyoruz."
      />

      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="py-16 sm:py-24 border-b border-black/5 dark:border-white/5 bg-[#f1ede4] dark:bg-[#0b0e17] relative overflow-hidden transition-colors duration-250">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-petrol-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-petrol-500/10 border border-petrol-500/25 text-petrol-700 dark:text-petrol-400 font-mono text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-petrol-500" />
                <span>SIFIR MALİYET // DİJİTAL CHECK-UP</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Ücretsiz Dijital Röntgen & <span className="hl">Büyüme Analizi</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                İşletmenizin web sitesini, reklam geçmişini ve rakiplerini derinlemesine tarıyoruz. Nerede ciro kaçtığını, hangi kanallarla büyüyebileceğinizi 24 saat içinde ücretsiz raporluyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: What to expect */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs text-petrol-700 dark:text-petrol-400 font-bold uppercase tracking-wider block">
                    [ TEŞHİS PROTOKOLÜ ]
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
                    24 Saatte Masanıza Gelecek Raporun İçeriği
                  </h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Standart otomatik bot raporları değil; büyüme uzmanlarımızın bizzat incelediği, doğrudan eyleme dönüştürülebilir stratejik bir analiz sunuyoruz.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 shadow-sm dark:shadow-none space-y-2">
                    <div className="flex items-center gap-2.5 font-bold text-zinc-900 dark:text-white text-sm">
                      <Target className="w-4 h-4 text-petrol-600 dark:text-petrol-400" />
                      <span>1. Dönüşüm Hunisi (Funnel) Taraması</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6">
                      Sitenize gelen ziyaretçilerin nerede takıldığını, formları neden doldurmadığını ve mobildeki hız kayıplarını tespit ederiz.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 shadow-sm dark:shadow-none space-y-2">
                    <div className="flex items-center gap-2.5 font-bold text-zinc-900 dark:text-white text-sm">
                      <Activity className="w-4 h-4 text-petrol-600 dark:text-petrol-400" />
                      <span>2. Rakip ve Reklam Haritası</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6">
                      Sektörünüzdeki ana rakiplerinizin Meta ve Google'da hangi açılarla reklam çıktığını, pazar paylarını ve eksik bıraktıkları alanları çıkarırız.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 shadow-sm dark:shadow-none space-y-2">
                    <div className="flex items-center gap-2.5 font-bold text-zinc-900 dark:text-white text-sm">
                      <ShieldCheck className="w-4 h-4 text-petrol-600 dark:text-petrol-400" />
                      <span>3. Süreç & Otomasyon Potansiyeli</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6">
                      WhatsApp, CRM ve müşteri yanıtlama süreçlerinizin yapay zekâ ile nasıl otomatikleştirilebileceğini formüle ederiz.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-petrol-500/10 border border-petrol-500/20 text-xs text-zinc-800 dark:text-zinc-300 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-petrol-700 dark:text-petrol-400 font-mono uppercase">
                    <Clock className="w-4 h-4" />
                    <span>HIZLI SEÇENEK: 30 SANİYELİK TEST</span>
                  </div>
                  <p className="leading-relaxed">
                    Formu doldurmak yerine etkileşimli adımlarla hızlıca bütçe ve büyüme rotası hesaplamak isterseniz sihirbazımızı kullanabilirsiniz.
                  </p>
                  <button
                    onClick={() => openWizard()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-petrol-700 dark:text-petrol-400 hover:text-petrol-800 dark:hover:text-petrol-300 pt-1 cursor-pointer"
                  >
                    <span>30 Saniyelik Teklif Sihirbazını Aç</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#111622] border border-black/10 dark:border-white/10 shadow-xl dark:shadow-2xl">
                  
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-display">
                        Dijital Röntgen Taraması Başlatıldı!
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                        Bilgileriniz büyüme analiz ekibimize ulaştı. 24 saat içinde web siteniz ve rakipleriniz taranarak hazırlanan özel rapor telefon ve e-posta yoluyla iletilecektir.
                      </p>
                      <div className="pt-4">
                        <button
                          onClick={() => setSubmitted(false)}
                          className="text-xs font-mono text-petrol-600 dark:text-petrol-400 hover:underline cursor-pointer"
                        >
                          ← Yeni bir analiz talebi gönder
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <span className="font-mono text-xs text-petrol-700 dark:text-petrol-400 font-bold uppercase tracking-wider block">
                          [ ANALİZ TALEBİ ]
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                          İşletmenizin Röntgenini Çekelim
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                          Yıldız (*) işaretli alanlar zorunludur. Tüm verileriniz gizlilik sözleşmesi kapsamında korunur.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-medium">
                            Web Siteniz veya Sosyal Medya Hesabınız *
                          </label>
                          <input
                            type="text"
                            required
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="ornekfirma.com veya @instagramhesabi"
                            className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/15 dark:border-white/10 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm focus:border-petrol-500 focus:outline-none focus:ring-1 focus:ring-petrol-500 transition-colors"
                          />
                          <span className="text-[11px] text-petrol-700 dark:text-petrol-400 mt-1 block">
                            Dijital röntgen taraması doğrudan bu adres üzerinden yapılacaktır.
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-medium">
                              Şirket / Marka Adı
                            </label>
                            <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              placeholder="Şirket Adı"
                              className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/15 dark:border-white/10 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm focus:border-petrol-500 focus:outline-none focus:ring-1 focus:ring-petrol-500 transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-medium">
                              Adınız Soyadınız *
                            </label>
                            <input
                              type="text"
                              required
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Ad Soyad"
                              className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/15 dark:border-white/10 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm focus:border-petrol-500 focus:outline-none focus:ring-1 focus:ring-petrol-500 transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-medium">
                              Telefon Numaranız *
                            </label>
                            <input
                              type="tel"
                              required
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="05XX XXX XX XX"
                              className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/15 dark:border-white/10 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm focus:border-petrol-500 focus:outline-none focus:ring-1 focus:ring-petrol-500 transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-medium">
                              E-posta Adresiniz
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="info@sirket.com"
                              className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/15 dark:border-white/10 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm focus:border-petrol-500 focus:outline-none focus:ring-1 focus:ring-petrol-500 transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-medium">
                              Öncelikli Büyüme Hedefiniz
                            </label>
                            <select
                              name="goal"
                              value={formData.goal}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#090d16] border border-black/15 dark:border-white/10 text-zinc-900 dark:text-white text-sm focus:border-petrol-500 focus:outline-none focus:ring-1 focus:ring-petrol-500 transition-colors"
                            >
                              <option value="Satışları ve Ciroyu Katlamak">Satışları ve Ciroyu Katlamak</option>
                              <option value="Yeni Bir Ürünü / Fikri Pazarda Test Etmek">Yeni Ürünü 3D/AI ile Pazar Testine Çıkarmak</option>
                              <option value="Dönüşüm Odaklı Web Altyapısı Kurmak">Dönüşüm Odaklı Web Altyapısı Kurmak</option>
                              <option value="Süreçleri AI ve Otomasyonla Hızlandırmak">Süreçleri AI ve Otomasyonla Hızlandırmak</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-medium">
                              Tahmini Büyüme Bütçesi
                            </label>
                            <select
                              name="budgetRange"
                              value={formData.budgetRange}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#090d16] border border-black/15 dark:border-white/10 text-zinc-900 dark:text-white text-sm focus:border-petrol-500 focus:outline-none focus:ring-1 focus:ring-petrol-500 transition-colors"
                            >
                              <option value="20.000 TL altı">20.000 TL altı (Pilot)</option>
                              <option value="20.000 TL - 50.000 TL">20.000 TL - 50.000 TL (Test & Giriş)</option>
                              <option value="50.000 TL - 150.000 TL">50.000 TL - 150.000 TL (Ölçekleme)</option>
                              <option value="150.000 TL ve üzeri">150.000 TL ve üzeri (Partnerlik)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-medium">
                            İşletmeniz Hakkında Ek Notlar
                          </label>
                          <textarea
                            name="notes"
                            rows={3}
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Mevcut en büyük tıkanıklığınız veya hedefleriniz nelerdir?"
                            className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/15 dark:border-white/10 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm focus:border-petrol-500 focus:outline-none focus:ring-1 focus:ring-petrol-500 transition-colors"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-petrol-600 hover:bg-petrol-700 text-white font-bold rounded-xl shadow-lg shadow-petrol-600/25 transition-all disabled:opacity-50 text-base cursor-pointer"
                      >
                        {loading ? 'Röntgen Taraması Başlatılıyor...' : '→ Ücretsiz Dijital Röntgenimi Başlat'}
                      </button>
                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import React, { useState } from 'react';
import SEO from '../components/SEO';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Target, 
  Rocket, 
  Clock, 
  Check,
  TrendingUp
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
    budgetRange: '50.000 TL – 150.000 TL',
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
    <div className="min-h-screen flex flex-col bg-[#0a0d14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <SEO
        title="Ücretsiz Dijital Röntgen & Büyüme Analizi | Era Dijital"
        description="Web sitenizi, rakiplerinizi ve reklam kanallarınızı 24 saatte ücretsiz inceliyor; cironuzu artıracak somut büyüme planını çıkarıyoruz."
      />

      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="py-16 sm:py-24 border-b border-white/5 bg-[#0b0e17] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>SIFIR MALİYET // DİJİTAL CHECK-UP</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                Ücretsiz Dijital Röntgen & Büyüme Analizi
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                İşletmenizin web sitesini, reklam geçmişini ve rakiplerini derinlemesine tarıyoruz. Nerede ciro kaçtığını, hangi kanallarla büyüyebileceğinizi 24 saat içinde ücretsiz raporluyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Content & Form Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Scope & Benefits */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider block">
                    [ RÖNTGEN NELERİ KAPSIYOR? ]
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Ezbere Değil, Veriye Dayalı Teşhis
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Standart bir otomatik SEO raporu sunmuyoruz; bizzat uzman büyüme ekibimiz dijital varlıklarınızı tek tek masaya yatırıyor.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "1. Web & Dönüşüm Tıkanıklıkları",
                      desc: "Ziyaretçiler neden satın almadan çıkıyor? Sayfa hızı, mobil deneyim ve CTA butonlarının kayıp analizi."
                    },
                    {
                      title: "2. Reklam & Pazar Boşlukları",
                      desc: "Meta ve Google reklamlarında bütçeniz nereye yanıyor? Rakiplerinizin kullandığı ancak sizin kaçırdığınız kitleler."
                    },
                    {
                      title: "3. Süreç & Otomasyon Fırsatları",
                      desc: "Müşteri soruları ne kadar sürede yanıtlanıyor? WhatsApp ve CRM'de manuel yükü sıfırlayacak AI otomasyonları."
                    },
                    {
                      title: "4. Ön Pazar Testi Yol Haritası",
                      desc: "Yeni bir ürün veya fikir varsa, üretime girmeden 3D/AI ile talebi nasıl doğrulayabileceğinizin stratejisi."
                    }
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-zinc-400 leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-xs text-zinc-300 space-y-2">
                  <div className="font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Gizlilik & Güven Taahhüdü
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Verdiğiniz tüm veriler sadece işletmenize özel rapor üretmek amacıyla kullanılır. Asla üçüncü taraflarla paylaşılmaz.
                  </p>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1320] border border-white/10 shadow-2xl relative">
                  
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Röntgen Talebiniz Alındı!</h3>
                      <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                        Ekibimiz <span className="text-blue-400 font-mono font-semibold">{formData.website}</span> adresini ve sektörünüzdeki rakipleri incelemeye başladı.
                      </p>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 max-w-md mx-auto text-left">
                        <b>24 Saat İçinde:</b> Uzmanımız sizinle iletişime geçerek detaylı dijital röntgen raporunu ve büyüme eylem planını paylaşacaktır.
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          Röntgen Talebi Oluşturun
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400">
                          Formu doldurun, 24 saat içinde işletmenizin büyüme röntgenini çıkaralım.
                        </p>
                      </div>

                      {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl">
                          {error}
                        </div>
                      )}

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                            Web Siteniz (veya Sosyal Medya Hesabınız) *
                          </label>
                          <input
                            type="text"
                            required
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="sirketiniz.com veya @markahesabi"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                          />
                          <span className="text-[11px] text-blue-400/80 mt-1 block">
                            Dijital röntgen taraması doğrudan bu adres üzerinden yapılacaktır.
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                              Şirket / Marka Adı
                            </label>
                            <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              placeholder="Şirket Adı"
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                              Adınız Soyadınız *
                            </label>
                            <input
                              type="text"
                              required
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Ad Soyad"
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                              Telefon Numaranız *
                            </label>
                            <input
                              type="tel"
                              required
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="05XX XXX XX XX"
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                              E-posta Adresiniz
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="info@sirket.com"
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                              Öncelikli Büyüme Hedefiniz
                            </label>
                            <select
                              name="goal"
                              value={formData.goal}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                            >
                              <option value="Satışları ve Ciroyu Katlamak">Satışları ve Ciroyu Katlamak</option>
                              <option value="Yeni Bir Ürünü / Fikri Pazarda Test Etmek">Yeni Ürünü 3D/AI ile Pazar Testine Çıkarmak</option>
                              <option value="Dönüşüm Odaklı Web Altyapısı Kurmak">Dönüşüm Odaklı Web Altyapısı Kurmak</option>
                              <option value="Süreçleri AI ve Otomasyonla Hızlandırmak">Süreçleri AI ve Otomasyonla Hızlandırmak</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                              Tahmini Büyüme Bütçesi
                            </label>
                            <select
                              name="budgetRange"
                              value={formData.budgetRange}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                            >
                              <option value="20.000 TL altı">20.000 TL altı (Pilot)</option>
                              <option value="20.000 TL – 50.000 TL">20.000 TL – 50.000 TL (Test & Giriş)</option>
                              <option value="50.000 TL – 150.000 TL">50.000 TL – 150.000 TL (Ölçekleme)</option>
                              <option value="150.000 TL ve üzeri">150.000 TL ve üzeri (Partnerlik)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                            İşletmeniz Hakkında Ek Notlar
                          </label>
                          <textarea
                            name="notes"
                            rows={3}
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Mevcut en büyük tıkanıklığınız veya hedefleriniz nelerdir?"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 text-base"
                      >
                        {loading ? 'Röntgen Taraması Başlatılıyor...' : '🚀 Ücretsiz Dijital Röntgenimi Başlat'}
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
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useQuoteWizard } from '../context/QuoteWizardContext';

export default function IletisimPage() {
  const { openWizard } = useQuoteWizard();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/growth-lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.company,
          website: formData.company || 'Doğrudan İletişim',
          goal: 'Toplantı & İletişim Talebi',
          budgetRange: 'Görüşmede Belirlenecek',
          services: formData.message
        })
      });
      setSubmitted(true);
    } catch (err) {
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
        title="İletişim & Büyüme Toplantısı | Era Dijital"
        description="Büyüme ajansı hizmetlerimiz, 3D pazar testleri ve yapay zekâ süreç otomasyonu hakkında yüz yüze veya online görüşme planlayın."
      />

      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 sm:py-24 border-b border-white/5 bg-[#0b0e17] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>DOĞRUDAN DİYALOG // YÜZ YÜZE TOPLANTI</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                İşinizi Büyütmek İçin Bir Araya Gelelim
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                Dikkat dağıtıcı ofis ortamları yerine; sakin kahvaltı veya akşam yemeklerinde yüz yüze oturup işletmenizin büyüme planını masaya yatıralım.
              </p>
            </div>
          </div>
        </section>

        {/* Content & Form */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider block">
                    [ İLETİŞİM KANALLARI ]
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Hızlı ve Doğrudan Erişim
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Süreçlerimiz şeffaftır. Bize telefon, e-posta veya doğrudan WhatsApp üzerinden ulaşabilirsiniz.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-zinc-400">E-POSTA DESTEK & TEKLİF</div>
                      <a href="mailto:eradijitalinfo@gmail.com" className="font-bold text-white hover:text-blue-300 transition-colors">
                        eradijitalinfo@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-zinc-400">TELEFON & WHATSAPP HATTI</div>
                      <a href="tel:+905528080345" className="font-bold text-white hover:text-blue-300 transition-colors">
                        +90 552 808 03 45
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-zinc-400">OPERASYON MERKEZİ</div>
                      <div className="font-semibold text-white">
                        İstanbul Avrupa Yakası & Global Hizmet
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-blue-600/10 border border-blue-500/20 space-y-3">
                  <div className="font-bold text-white text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-300" />
                    30 Saniyede Ön Teklif İster misiniz?
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Form doldurmak yerine etkileşimli büyüme sihirbazımızı kullanarak ihtiyacınızı saniyeler içinde belirleyebilirsiniz.
                  </p>
                  <button
                    onClick={() => openWizard()}
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300"
                  >
                    <span>Sihirbazı Başlat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1320] border border-white/10 shadow-2xl">
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Mesajınız Alındı!</h3>
                      <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                        Talebiniz ekibimize ulaştı. En geç 24 saat içinde doğrudan sizinle iletişime geçeceğiz.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          Toplantı & İletişim Formu
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400">
                          Bilgilerinizi bırakın, büyüme stratejinizi konuşmak için dönüş yapalım.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                            Adınız Soyadınız *
                          </label>
                          <input
                            type="text"
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ad Soyad"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                            Şirket / Marka Adı
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Şirketiniz"
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
                            E-posta Adresiniz *
                          </label>
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="info@sirket.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                          Hedefiniz & Mesajınız
                        </label>
                        <textarea
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="İşletmenizdeki temel tıkanıklık veya hedefiniz nedir?"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 text-base"
                      >
                        {loading ? 'Gönderiliyor...' : 'Görüşme Talebi Gönder ➔'}
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
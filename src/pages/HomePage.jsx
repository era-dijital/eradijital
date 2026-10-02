import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  ArrowRight, 
  Sparkles,
  Rocket,
  Megaphone,
  Cpu,
  Activity
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveAutomationFlow from '../components/LiveAutomationFlow';
import { useQuoteWizard } from '../context/QuoteWizardContext';
import TrustStrip from '../components/home/TrustStrip';
import VisualGrowthLab from '../components/home/VisualGrowthLab';
import ComparisonMatrix from '../components/home/ComparisonMatrix';
import TargetIndustries from '../components/home/TargetIndustries';

export default function HomePage() {
  const { openWizard } = useQuoteWizard();

  const methodologySteps = [
    {
      step: "01 // TEŞHİS",
      title: "Ücretsiz Dijital Röntgen",
      desc: "Web sitenizi, rakiplerinizi, reklam hesaplarınızı ve pazar konumunuzu 24 saat içinde inceliyoruz. Nerede ciro kaçtığını somut verilerle ortaya koyuyoruz.",
      tag: "SIFIR MALİYET & RİSK",
      icon: Activity
    },
    {
      step: "02 // DOĞRULAMA",
      title: "3D & AI ile Pazar Testi",
      desc: "Ürün veya fikir henüz üretim bandına girmeden 3D modeller ve hedefli test reklamlarıyla gerçek piyasa talebini ölçüyoruz. Boşa yatırım yapmanızı engelliyoruz.",
      tag: "PİYASA YOKLAMASI",
      icon: Rocket
    },
    {
      step: "03 // ORKESTRASYON",
      title: "Çok Kanallı Büyüme Mimarisi",
      desc: "Dönüşüm odaklı web altyapısı, Meta & Google reklamları, açık hava (billboard) ve CRM otomasyonunu aynı anda devreye alıp satış kanallarını açıyoruz.",
      tag: "360° OPERASYON",
      icon: Megaphone
    },
    {
      step: "04 // ÖLÇEKLEME",
      title: "Süreç Otomasyonu & Sektörel SaaS",
      desc: "İşleyen satış sisteminizi yapay zeka ajanlarına devrediyor; işletmenize özel akıllı yazılımlar geliştirerek marjınızı ve müşteri kapasitenizi katlıyoruz.",
      tag: "SÜREKLİ DEĞER",
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f0] dark:bg-[#0a0d14] text-zinc-900 dark:text-slate-100 selection:bg-orange-600 selection:text-white transition-colors duration-250">
      <SEO 
        title="Era Dijital | İşinizi Büyüten, Satış Kanallarınızı Açan Büyüme Ortağınız"
        description="Klasik ajans kalıplarından uzak; 24 saatte ücretsiz dijital röntgen, 3D pazar testleri, çok kanallı performans reklamları ve yapay zekâ süreç otomasyonu ile işletmenizi büyütüyoruz."
      />

      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden hairline-b">
          {/* Subtle Warm Amber / Orange Backing Gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Strategic Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Growth Agency Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-700 dark:text-orange-400 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  BÜYÜME AJANSI // GROWTH AGENCY
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
                  İşinizi Büyüten, Satış Kanallarınızı Açan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-zinc-900 dark:from-orange-400 dark:via-amber-400 dark:to-white">Büyüme Ortağınız.</span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                  Yalnızca reklam çıkmıyor veya site yapmıyoruz; işletmenizin röntgenini çekiyor, eksiklerini tespit ediyor, pazar talebini sınıyor ve ölçülebilir büyüme sağlıyoruz.
                </p>

                {/* Primary & Secondary Action */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => openWizard()}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-xl shadow-orange-600/25 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-orange-200" />
                    <span>30 Saniyede Büyüme Planını Başlat</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#metodoloji"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-black/5 hover:bg-black/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-black/5 dark:border-white/10 transition-colors"
                  >
                    <span>Nasıl Çalışıyoruz?</span>
                    <span className="text-zinc-400 dark:text-zinc-500">↓</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">★</span>
                    <span className="text-zinc-900 dark:text-zinc-300 font-semibold">140+ Marka & Girişim</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>24 Saat İçinde Ücretsiz Röntgen</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span>İstanbul & Global Operasyon</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hallmark Live Growth & Telemetry Panel */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-white dark:bg-[#0e1320] border border-black/10 dark:border-white/10 p-6 sm:p-7 shadow-xl dark:shadow-2xl overflow-hidden group transition-colors duration-250">
                  {/* Subtle inner card glow */}
                  <div className="absolute top-0 right-0 w-52 h-52 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-[80px] pointer-events-none" />
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                      <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-semibold">
                        Büyüme İndeksi • Son 6 Ay
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 text-xs font-mono font-bold">
                      +%42.8
                    </span>
                  </div>

                  {/* SVG Area Chart Graphic */}
                  <div className="relative h-32 sm:h-36 w-full mb-6">
                    <svg className="w-full h-full" viewBox="0 0 400 130" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ea580c" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,110 Q40,95 80,100 T160,75 T240,60 T320,35 T400,10 L400,130 L0,130 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,110 Q40,95 80,100 T160,75 T240,60 T320,35 T400,10"
                        fill="none"
                        stroke="#ea580c"
                        className="stroke-orange-500 dark:stroke-orange-400"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="400" cy="10" r="5" fill="#f97316" className="animate-ping opacity-75" />
                      <circle cx="400" cy="10" r="4" fill="#ea580c" />
                    </svg>
                  </div>

                  {/* Stat Counter Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-black/5 dark:border-white/5 text-center">
                    <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.02]">
                      <div className="font-display font-bold text-lg sm:text-xl text-zinc-900 dark:text-white">180+</div>
                      <div className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">Nitelikli Lead</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.02]">
                      <div className="font-display font-bold text-lg sm:text-xl text-orange-600 dark:text-orange-400">4.9x</div>
                      <div className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">Aktif ROAS</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.02]">
                      <div className="font-display font-bold text-lg sm:text-xl text-emerald-600 dark:text-emerald-400">7/24</div>
                      <div className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">Otonom Akış</div>
                    </div>
                  </div>

                  {/* Live Activity Toast */}
                  <div className="mt-4 flex items-center gap-2.5 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-800 dark:text-orange-300">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="truncate">
                      <b>Canlı:</b> Yeni 3D pazar testi doğrulandı (240+ talep alındı)
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ENTERPRISE TRUST & ACCREDITATION STRIP */}
        <TrustStrip />

        {/* CORE PROBLEMS: WHY CLASSIC AGENCIES BURN CAPITAL */}
        <section className="py-20 border-b border-black/5 dark:border-white/5 bg-[#f1ede4]/40 dark:bg-[#070a10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-orange-700 dark:text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
                [ PAZARDAKİ YANILGILAR // BÜYÜME ENGELİ ]
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
                Klasik Ajans Yaklaşımı Neden Para Yaktırır?
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                Tek bir araca hapsolmuş reklamcılar veya site yapıp kaybolan şirketler işinizi büyütemez.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  no: "01",
                  title: "Ezbere Reklam Çıkmak",
                  desc: "Web sitenizdeki kaçakları veya pazar talebini analiz etmeden doğrudan reklama para basmak, delik kovaya su doldurmaya benzer."
                },
                {
                  no: "02",
                  title: "Pazar Testi Yapmadan Üretmek",
                  desc: "Yeni bir ürün veya fikir için doğrudan yüksek kalıp ve stok maliyetlerine girmek büyük sermaye riskidir. Önce talep ölçülmelidir."
                },
                {
                  no: "03",
                  title: "Kopuk ve Parça Pinçik Ajanslar",
                  desc: "Biri video çeker, diğeri reklamı yönetir, öbürü siteyi yapar. Kimse işletmenizin ciro artışını bir bütün olarak sahiplenmez; herkes suçu birbirine atar."
                },
                {
                  no: "04",
                  title: "Manuel Süreçlerde Boğulma",
                  desc: "Ekibiniz mesai saatleri dışında gelen müşteri mesajlarına yetişemiyor; geç verilen her cevap potansiyel müşteriyi anında rakibe kaptırıyor."
                }
              ].map((item) => (
                <div 
                  key={item.no}
                  className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-orange-500/40 transition-all shadow-sm dark:shadow-none hover:shadow-md"
                >
                  <div className="font-mono text-xs font-bold text-orange-600 dark:text-orange-400 mb-3">{item.no} // PROBLEM</div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISUAL DELIVERABLES: CORPORATE GROWTH LAB & TANGIBLE PROOF */}
        <VisualGrowthLab />

        {/* ARCHITECTURAL COMPARISON MATRIX */}
        <ComparisonMatrix />

        {/* METHODOLOGY: 4-STEP GROWTH CYCLE */}
        <section id="metodoloji" className="py-24 border-b border-black/5 dark:border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-orange-700 dark:text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
                  [ 4 ADIMLI BÜYÜME DÖNGÜSÜ // STRATEJİK YAKLAŞIM ]
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
                  Röntgenden Ölçeklemeye: Nasıl Çalışıyoruz?
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3">
                  Ezbere iş yapmıyoruz; önce ücretsiz teşhis ediyor, küçük bütçelerle pazar testini yapıyor, kazandırdıkça ölçekliyoruz.
                </p>
              </div>

              <button
                onClick={() => openWizard()}
                className="self-start md:self-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-md shadow-orange-600/20 transition-all shrink-0 cursor-pointer"
              >
                Röntgeninizi Başlatın →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.step}
                    className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 hover:border-orange-500/40 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-all shadow-sm dark:shadow-none group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                        {step.tag}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-orange-600 dark:text-orange-400 font-semibold mb-1">
                      {step.step}
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2.5 group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TARGET INDUSTRIES & CORPORATE VERTICALS */}
        <TargetIndustries />

        {/* LIVE AUTOMATION PREVIEW */}
        <section className="py-20 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0b0e17] transition-colors duration-250">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-orange-700 dark:text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
                [ OTONOM BÜYÜME MOTORU ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
                Tüm Kanallarınız Tek Bir Akıllı Beyne Bağlı
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                WhatsApp, Instagram, Reklamlar ve CRM hatları kopuk değil; tek bir akışta 7/24 çalışır.
              </p>
            </div>

            <LiveAutomationFlow />
          </div>
        </section>

        {/* FINAL BIG CTA BANNER */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f8f6f0] to-[#eae5d8] dark:from-[#0a0d14] dark:to-[#0e1726] transition-colors duration-250">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 dark:text-orange-400 font-mono text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              SIFIR MALİYET, SIFIR RİSK
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
              İşletmenizin Dijital Röntgenini Bugün Çekelim.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Web sitenizi ve verilerinizi 24 saat içinde inceleyip eksikleri, tıkanıklıkları ve önünüzü açacak büyüme planını ücretsiz hazırlayalım.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWizard()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-xl shadow-orange-600/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>30 Saniyede Büyüme Planını Başlat</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://api.whatsapp.com/send?phone=905528080345&text=Merhaba,%20büyüme%20ajansı%20hizmetleriniz%20ve%20dijital%20röntgen%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-black/5 hover:bg-black/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/10 transition-colors"
              >
                <span>WhatsApp'tan Yazın</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

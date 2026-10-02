import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  Layers, 
  BarChart3, 
  Cpu, 
  Clock, 
  ShieldCheck,
  TrendingUp,
  Rocket,
  Monitor,
  Building2,
  Sparkles,
  Zap,
  Target,
  Megaphone,
  Box,
  Eye,
  Check,
  Activity
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveAutomationFlow from '../components/LiveAutomationFlow';
import { useQuoteWizard } from '../context/QuoteWizardContext';

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

  const growthServices = [
    {
      badge: "Kanal Açma & Satış",
      title: "Performans & Çok Kanallı Reklam",
      desc: "Meta (Instagram & Facebook), Google Ads, YouTube ve Açık Hava (Billboard/Fuar) entegrasyonuyla bütçenizi zekat gibi değil, katlanan bir büyüme yatırımı olarak yönetiyoruz.",
      features: [
        "ROI & ROAS odaklı harcama optimizasyonu",
        "Remarketing ve terzi usulü kitle segmentasyonu",
        "Açık hava & dijital medya çaprazlama"
      ],
      icon: Target
    },
    {
      badge: "Satış Dönüştürme",
      title: "Dönüşüm Odaklı Web & Landing Page",
      desc: "Ziyaretçinin bakıp çıktığı sıradan vitrin siteleri yapmıyoruz; ziyaretçiyi saniyeler içinde teklife, randevuya ve siparişe yönlendiren yüksek hızlı mimariler kuruyoruz.",
      features: [
        "Modern Vite + React & Tailwind altyapısı",
        "Etkileşimli teklif hesaplama ve lead motorları",
        "Mobil-öncelikli 0.8s altı yükleme performansı"
      ],
      icon: Monitor
    },
    {
      badge: "Talep Testi & Prestij",
      title: "Görsel Güç, 3D & Ürün Lansmanı",
      desc: "Daha üretilmemiş bir fikri dahi fotogerçekçi 3D modelleme ve AI videolarla varmış gibi test reklamlarına çıkarıyor, pazardan gerçek alıcı talebi topluyoruz.",
      features: [
        "Fiziksel ürün üretim öncesi talep doğrulaması",
        "Fuar ekranları & LCD tanıtım prodüksiyonu",
        "Viral sosyal medya video kreatifleri"
      ],
      icon: Box
    },
    {
      badge: "Akıllı Operasyon",
      title: "Yapay Zeka, Otomasyon & SaaS",
      desc: "Müşteri sorularını 7/24 yanıtlayan WhatsApp AI asistanları, CRM hatları ve firmanızın operasyonunu hızlandırıp lisansla gelir üretebileceği SaaS yazılımları geliştiriyoruz.",
      features: [
        "7/24 Otonom WhatsApp & Instagram AI temsilcisi",
        "CRM, takvim ve sipariş entegrasyon köprüleri",
        "Sektöre özel lisanslanabilir SaaS platformları"
      ],
      icon: Zap
    }
  ];

  const caseStudies = [
    {
      category: "PAZAR TESTİ & DOĞRULAMA",
      title: "Üretime Girmeden 5 Günde 240+ Ön Talep",
      desc: "Henüz fabrikada üretilmemiş yenilikçi bir ev ürünü için 3D modelleme ve AI reklam kreatifleriyle pilot kampanya çıkıldı; yüksek talep doğrulanarak risk sıfırlandı.",
      metric: "240+ Talep",
      metricLabel: "5 Günde Sıfır Stokla Doğrulama"
    },
    {
      category: "DÖNÜŞÜM & PERFORMANS",
      title: "Durgun Pazarda Reklam Optimizasyonuyla 2.8x Ciro",
      desc: "Geleneksel mobilya ve dekorasyon üreticisinin eski vitrin sitesi dönüşüm odaklı kurgulanıp bölgesel Meta reklamlarıyla desteklendi; satış kanalları yeniden açıldı.",
      metric: "2.8×",
      metricLabel: "Aylık Net Satış Büyümesi"
    },
    {
      category: "OTOMASYON & LEAD YÖNETİMİ",
      title: "Kaçan Müşteri Oranında %70 Düşüş",
      desc: "Mesai saatleri dışında gelen mesajların satışa dönmesini sağlayan 7/24 WhatsApp AI asistanı ve CRM köprüsüyle randevu kapasitesi zirveye taşındı.",
      metric: "-%70",
      metricLabel: "Cevapsız Müşteri Kaybı"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0d14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <SEO 
        title="İşinizi Büyüten, Satış Kanallarınızı Açan Büyüme Ortağınız | Era Dijital"
        description="Yalnızca reklam çıkmıyor veya site yapmıyoruz; işletmenizin röntgenini çekiyor, eksiklerini tespit ediyor ve ölçülebilir büyüme sağlıyoruz."
      />

      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 border-b border-white/5">
          {/* Subtle Background Mesh */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-[140px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Strategic Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  BÜYÜME AJANSI // GROWTH AGENCY
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.12]">
                  İşinizi Büyüten, Satış Kanallarınızı Açan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">Büyüme Ortağınız.</span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                  Yalnızca reklam çıkmıyor veya site yapmıyoruz; işletmenizin röntgenini çekiyor, eksiklerini tespit ediyor ve ölçülebilir büyüme sağlıyoruz.
                </p>

                {/* Primary & Secondary Action */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => openWizard()}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02]"
                  >
                    <Sparkles className="w-4 h-4 text-blue-200" />
                    <span>30 Saniyede Büyüme Planını Başlat</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#metodoloji"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                  >
                    <span>Nasıl Çalışıyoruz?</span>
                    <span className="text-zinc-500">↓</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="text-yellow-400 font-bold">★</span>
                    <span className="text-zinc-300 font-semibold">140+ Marka & Girişim</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>24 Saat İçinde Ücretsiz Röntgen</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>İstanbul & Global Operasyon</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Dijital10 Style Live Growth Panel Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-[#0e1320] border border-white/10 p-6 sm:p-7 shadow-2xl overflow-hidden group">
                  {/* Background mesh in card */}
                  <div className="absolute top-0 right-0 w-52 h-52 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      <span className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold">
                        Büyüme İndeksi · Son 6 Ay
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                      ↑ %42.8
                    </span>
                  </div>

                  {/* SVG Area Chart Graphic */}
                  <div className="relative h-32 sm:h-36 w-full mb-6">
                    <svg className="w-full h-full" viewBox="0 0 400 130" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,110 Q40,95 80,100 T160,75 T240,60 T320,35 T400,10 L400,130 L0,130 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,110 Q40,95 80,100 T160,75 T240,60 T320,35 T400,10"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="400" cy="10" r="5" fill="#60a5fa" className="animate-ping opacity-75" />
                      <circle cx="400" cy="10" r="4" fill="#3b82f6" />
                    </svg>
                  </div>

                  {/* Stat Counter Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/5 text-center">
                    <div className="p-2.5 rounded-xl bg-white/[0.02]">
                      <div className="font-display font-bold text-lg sm:text-xl text-white">180+</div>
                      <div className="font-mono text-[10px] text-zinc-400 mt-0.5">Nitelikli Lead</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02]">
                      <div className="font-display font-bold text-lg sm:text-xl text-blue-400">3.4×</div>
                      <div className="font-mono text-[10px] text-zinc-400 mt-0.5">ROAS Çarpanı</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02]">
                      <div className="font-display font-bold text-lg sm:text-xl text-emerald-400">7/24</div>
                      <div className="font-mono text-[10px] text-zinc-400 mt-0.5">Otonom Akış</div>
                    </div>
                  </div>

                  {/* Live Activity Toast */}
                  <div className="mt-4 flex items-center gap-2.5 p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-xs text-blue-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="truncate">
                      <b>Canlı:</b> Yeni 3D pazar testi tamamlandı (240+ ön talep)
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROBLEM DEFINITION (PAIN POINTS) */}
        <section className="py-20 border-b border-white/5 bg-[#0b0e17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
                [ PAZAR GERÇEKLERİ // PROBLEM TEŞHİSİ ]
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Piyasa durgun, geleneksel ajanslar yetersiz. <br className="hidden sm:inline" />
                <span className="text-zinc-400">Bu tıkanıklıklar size tanıdık geliyor mu?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  no: "01",
                  title: "Trafik Var, Satış Yok",
                  desc: "Sosyal medyadan veya reklamdan sitenize ziyaretçi yağıyor; ancak dönüşüm odaklı kurgulanmamış eski bir vitrin yüzünden müşteriler satın almadan çıkıyor."
                },
                {
                  no: "02",
                  title: "Pazar Talebi Doğrulanmamış Ürün",
                  desc: "Yeni bir fikir veya ürün üretmek için yüz binlerce lira kalıp ve stok riski alıyorsunuz; ancak pazarda gerçek bir satın alma iştahı olup olmadığını önceden test etmediniz."
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
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all hover:bg-white/[0.04]"
                >
                  <div className="font-mono text-xs font-bold text-blue-400 mb-3">{item.no} // PROBLEM</div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODOLOGY: 4-STEP GROWTH CYCLE */}
        <section id="metodoloji" className="py-24 border-b border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
                  [ 4 ADIMLI BÜYÜME DÖNGÜSÜ // STRATEJİK YAKLAŞIM ]
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Röntgenden Ölçeklemeye: Nasıl Çalışıyoruz?
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 mt-3">
                  Ezbere iş yapmıyoruz; önce ücretsiz teşhis ediyor, küçük bütçelerle pazar testini yapıyor, kazandırdıkça ölçekliyoruz.
                </p>
              </div>

              <button
                onClick={() => openWizard()}
                className="self-start md:self-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all shrink-0"
              >
                Röntgeninizi Başlatın ➔
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.step}
                    className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-blue-600/5 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                        {step.tag}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-blue-400 font-semibold mb-1">
                      {step.step}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-blue-200 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4 CORE GROWTH SERVICES */}
        <section className="py-24 border-b border-white/5 bg-[#0b0e17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
                [ BÜYÜME SÜTUNLARI // TEK EKİP, 360° GÜÇ ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                İşinizi Büyütmek İçin Gereken Her Şey
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-3">
                Parça pinçik servisler değil; web'den reklamına, 3D'den yapay zekâya tek bir büyüme beyniyle koordine edilen bütünleşik çözümler.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {growthServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="p-7 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono text-blue-400 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                            <Check className="w-4 h-4 text-blue-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => openWizard()}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors pt-4 border-t border-white/5"
                    >
                      <span>Bu Alanda Analiz İsteyin</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CASE STUDIES (BÜYÜME HİKAYELERİ) */}
        <section className="py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
                [ SOMUT BAŞARI METRİKLERİ // VAKA ANALİZLERİ ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Ezber Bozan Büyüme Hikayeleri
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2">
                Hattatlık değil; doğrudan ciroya, pazar doğrulamasına ve müşteri sayısına etki eden gerçek işler.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((item) => (
                <div
                  key={item.title}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-wider block mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <div className="font-display text-3xl font-extrabold text-white">
                      {item.metric}
                    </div>
                    <div className="font-mono text-[11px] text-zinc-400 mt-0.5">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE AUTOMATION & CONSTELATION PREVIEW */}
        <section className="py-20 border-b border-white/5 bg-[#0b0e17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider block mb-2">
                [ OTONOM BÜYÜME MOTORU ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Tüm Kanallarınız Tek Bir Akıllı Beyne Bağlı
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                WhatsApp, Instagram, Reklamlar ve CRM hatları kopuk değil; tek bir akışta 7/24 çalışır.
              </p>
            </div>

            <LiveAutomationFlow />
          </div>
        </section>

        {/* FINAL BIG CTA BANNER */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              SIFIR MALİYET, SIFIR RİSK
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
              İşletmenizin Dijital Röntgenini Bugün Çekelim.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Web sitenizi ve verilerinizi 24 saat içinde inceleyip eksikleri, tıkanıklıkları ve önünüzü açacak büyüme planını ücretsiz hazırlayalım.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWizard()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                <span>30 Saniyede Büyüme Planını Başlat</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://api.whatsapp.com/send?phone=905528080345&text=Merhaba,%20büyüme%20ajansı%20hizmetleriniz%20ve%20dijital%20röntgen%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
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
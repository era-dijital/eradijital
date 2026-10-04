import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useQuoteWizard } from '../context/QuoteWizardContext';

export default function HakkimizdaPage() {
  const { openWizard } = useQuoteWizard();

  const values = [
    { 
      index: "01",
      title: "Ezbere Değil, Teşhisle Başlarız", 
      desc: "Doğrudan 'şu paketi satalım' demek yerine önce işletmenizin web sitesini, reklam geçmişini ve pazarını tarar; ücretsiz dijital röntgenle eksikleri tespit ederiz." 
    },
    { 
      index: "02",
      title: "Boşa Para Yaktırmayız (Pazar Testi)", 
      desc: "Yeni bir ürün fikrini fabrikada üretmeden önce 3D prototipler ve hedefli test reklamlarıyla pazarın satın alma iştahını ölçer, riski sıfırlarız." 
    },
    { 
      index: "03",
      title: "Tek Çatı Altında 360° Orkestrasyon", 
      desc: "Video için ayrı, reklam için ayrı, site için ayrı ajanslarla vakit kaybetmezsiniz. Büyümenin tüm parçalarını tek bir stratejik beyinle koordine ederiz." 
    },
    { 
      index: "04",
      title: "Süreçleri Akıllı Otomasyona Bağlarız", 
      desc: "WhatsApp ve Instagram'dan gelen müşterileri 7/24 otonom karşılayan yapay zeka asistanları ve firmanıza özel SaaS yazılımlarıyla marjınızı katlarız." 
    },
    { 
      index: "05",
      title: "Masa Başı Değil, Yüz Yüze Ortaklık", 
      desc: "Müşterilerimizle ezilip büzülmeden, profesyonel bir büyüme ortağı gibi konuşur; dikkat dağıtıcı ofisler yerine sakin yemeklerde strateji kurarız." 
    },
    { 
      index: "06",
      title: "Şeffaf & Ölçülebilir Raporlama", 
      desc: "Hangi kanaldan kaç lira harcandı, kaç müşteri geldi ve ne kadar ciro sağlandı? Haftalık net dashboardlarla her kuruşun hesabını gösteririz." 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f4] dark:bg-[#070b10] text-zinc-900 dark:text-slate-100 selection:bg-petrol-600 selection:text-white transition-colors duration-250">
      <SEO
        title="Hakkımızda & Büyüme Felsefemiz | Era Dijital"
        description="Era Dijital; web, reklam, 3D pazar testi ve yapay zekâ süreç otomasyonunu birleştirerek işletmelere ölçülebilir büyüme sağlayan yeni nesil Growth Agency'dir."
      />

      <Header />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="py-16 sm:py-24 border-b border-black/5 dark:border-white/5 bg-[#f1ede4] dark:bg-[#0b0e17] relative overflow-hidden transition-colors duration-250">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-petrol-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-petrol-500/10 border border-petrol-500/25 text-petrol-700 dark:text-petrol-400 font-mono text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-petrol-500" />
                <span>BİZ KİMİZ? // BÜYÜME AJANSI</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Klasik Ajans Kalıplarının Ötesinde: <span className="hl">Büyüme Ortağınız</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Yalnızca reklam çıkmıyor veya site yapmıyoruz. İşletmenizin dijital röntgenini çekiyor, eksiklerini tespit ediyor, pazar testlerini yapıyor ve satış kanallarını açıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Manifest & Story */}
        <section className="py-20 border-b border-black/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <span className="font-mono text-xs text-petrol-700 dark:text-petrol-400 font-bold uppercase tracking-wider block">
                  [ VİZYONUMUZ // GELENEKSELDEN GROWTH MODELİNE ]
                </span>
                
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                  "Hattatlar Durumuna Düşmek Yerine Güçlerimizi Birleştirdik."
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Dijital dünyada kurallar yeniden yazılıyor. Eskiden sadece bir web sitesi veya tekil bir 3D animasyon yaptırmak işletmeler için yeterliydi. Ancak matbaanın icadından sonra hattatların başına gelen şey, bugün tek bir araçla sınırlı kalan klasik ajansların başına geliyor.
                  </p>
                  <p>
                    Biz Era Dijital olarak farklı disiplinlerdeki tecrübelerimizi birleştirdik ve işletmelerin önünü açan tam teşekküllü bir <strong className="text-zinc-900 dark:text-white font-semibold">Büyüme Ajansı (Growth Agency)</strong> kurduk. 
                  </p>
                  <p>
                    Bugün bir işletme bize geldiğinde ona standart hazır paketler sunmuyoruz; önce işletmesinin röntgenini çekiyor, nerede müşteri kaçırdığını tespit ediyor, pazar talebini 3D/AI ile sınıyor ve ciro artışını bir bütün olarak sahipleniyoruz.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/10 dark:border-white/10 space-y-6 shadow-sm dark:shadow-none">
                  <div className="font-mono text-xs text-petrol-700 dark:text-petrol-400 font-bold uppercase tracking-wider">
                    [ BİZİ FARKLI KILAN 3 İLKE ]
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                      <div className="font-bold text-zinc-900 dark:text-white text-base mb-1">1. Ücretsiz Röntgen & Teşhis</div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        Ezbere iş yapmayız. Önce sitenizi ve verilerinizi 24 saat içinde inceler, eksikleri ortaya koyarız.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                      <div className="font-bold text-zinc-900 dark:text-white text-base mb-1">2. Üretim Öncesi Talep Doğrulama</div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        Büyük kalıp ve stok masrafları yapmadan önce 3D ve reklam testiyle pazarın satın alma iştahını ölçeriz.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                      <div className="font-bold text-zinc-900 dark:text-white text-base mb-1">3. Sektörel SaaS & Kalıcı Değer</div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        Şirketinizin tıkanıklıklarını çözen özel yazılımlar üretip süreçlerinizi hızlandırırız.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pillars / Values Grid */}
        <section className="py-20 border-b border-black/5 dark:border-white/5 bg-[#f1ede4] dark:bg-[#0b0e17] transition-colors duration-250">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs text-petrol-700 dark:text-petrol-400 font-bold uppercase tracking-wider block mb-2">
                [ ÇALIŞMA PROTOKOLÜ ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
                Müşterilerimize Nasıl Değer Katıyoruz?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.index} className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 hover:border-petrol-500/40 transition-all shadow-sm dark:shadow-none hover:shadow-md">
                  <span className="font-mono text-xs text-petrol-700 dark:text-petrol-400 font-bold block mb-2">{v.index} // İLKE</span>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-24 text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
              Birlikte Yeni Pazarlar Açmaya Hazır mısınız?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              30 saniyelik testimizi çözün veya işletmenizin dijital röntgenini isteyin; 24 saat içinde net bir büyüme planı sunalım.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => openWizard()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-petrol-600 hover:bg-petrol-700 shadow-xl shadow-petrol-600/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                30 Saniyede Büyüme Analizini Başlat →
              </button>
              <Link
                to="/iletisim"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition-colors"
              >
                Yüz Yüze Toplantı Talep Et
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

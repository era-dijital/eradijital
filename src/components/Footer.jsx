import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { useQuoteWizard } from '../context/QuoteWizardContext';

export default function Footer() {
  const { openWizard } = useQuoteWizard();

  return (
    <footer className="border-t border-white/5 bg-[#070a10] text-zinc-300">
      {/* Top Status Strip */}
      <div className="border-b border-white/5 py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>BÜYÜME SİSTEMİ AKTİF // 7/24 ANALİZ VE OTO PİLOT</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>Yanıt: &lt;1.2s</span>
          <span>·</span>
          <span>Röntgen: 24s</span>
          <span>·</span>
          <span>Bölge: TR-IST (Avrupa Yakası & Global)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Intro */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                ERA
              </div>
              <span className="font-display font-bold text-base text-white">Era Dijital</span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed">
              İşinizi büyüten, satış kanallarınızı açan büyüme ortağınız. Çok kanallı performans reklamları, dönüşüm odaklı web altyapısı, 3D pazar testleri ve yapay zekâ süreç otomasyonunu tek elden yönetiyoruz.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 font-mono text-[10px] text-blue-400">
              <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">GROWTH PARTNER</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">DIGITAL X-RAY</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">AI & SAAS</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-4">
              [NAVİGASYON]
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/hizmetler" className="hover:text-white transition-colors">Büyüme Sütunlarımız</Link>
              </li>
              <li>
                <a href="/#metodoloji" className="hover:text-white transition-colors">4 Adımlı Metodoloji</a>
              </li>
              <li>
                <Link to="/hakkimizda" className="hover:text-white transition-colors">Vizyonumuz & Ekip</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Büyüme & Teknoloji Rehberleri</Link>
              </li>
              <li>
                <button 
                  onClick={() => openWizard()}
                  className="hover:text-blue-300 text-blue-400 transition-colors flex items-center gap-1 font-semibold pt-1"
                >
                  <Sparkles className="w-3 h-3 text-blue-300" />
                  <span>30 Sn'de Ücretsiz Röntgen</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-4">
              [BÜYÜME ALANLARI]
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <span className="text-zinc-200 font-medium">Meta & Google Ads Yönetimi</span>
              </li>
              <li>
                <span className="text-zinc-200 font-medium">Dönüşüm Odaklı Web Geliştirme</span>
              </li>
              <li>
                <span className="text-zinc-200 font-medium">3D Modelleme & Pazar Doğrulama</span>
              </li>
              <li>
                <span className="text-zinc-200 font-medium">7/24 WhatsApp AI Satış Temsilcisi</span>
              </li>
              <li>
                <span className="text-zinc-200 font-medium">Açık Hava (Billboard) Reklamları</span>
              </li>
              <li>
                <span className="text-zinc-200 font-medium">Sektörel SaaS & Süreç Yazılımları</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-4">
              [İLETİŞİM & LOKASYON]
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Toplantılarımızı dikkat dağıtıcı ofis ortamlarında değil; sakin kahvaltı veya akşam yemeklerinde yüz yüze gerçekleştiriyoruz.
            </p>
            <div className="space-y-2 text-xs text-zinc-300 pt-1">
              <a href="mailto:eradijitalinfo@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>eradijitalinfo@gmail.com</span>
              </a>
              <a href="tel:+905528080345" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+90 552 808 03 45</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>İstanbul Avrupa Yakası & Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Era Dijital. Tüm hakları saklıdır. Büyüme & Teknoloji Ajansı.
          </div>
          <div className="flex gap-4">
            <Link to="/hizmetler" className="hover:text-zinc-300 transition-colors">Hizmetler</Link>
            <span>·</span>
            <Link to="/on-analiz" className="hover:text-zinc-300 transition-colors">Dijital Röntgen</Link>
            <span>·</span>
            <Link to="/iletisim" className="hover:text-zinc-300 transition-colors">İletişim</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
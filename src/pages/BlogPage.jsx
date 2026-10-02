import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBlogPosts } from '../data/blogPosts';

const API_URL = import.meta.env.VITE_PANEL_API_URL || '';

export default function BlogPage() {
  const [posts, setPosts] = useState(() => getBlogPosts());
  const [loading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleLocalUpdate = (e) => {
      if (e.detail) {
        setPosts(e.detail);
      } else {
        setPosts(getBlogPosts());
      }
    };
    window.addEventListener('era_blog_updated', handleLocalUpdate);

    const fetchApiPosts = async () => {
      if (!API_URL) return;
      try {
        const res = await fetch(`${API_URL}/blog.php`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setPosts(data);
          }
        }
      } catch (err) {
        // API fallback
      }
    };

    fetchApiPosts();

    return () => window.removeEventListener('era_blog_updated', handleLocalUpdate);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f0] dark:bg-[#0a0d14] text-zinc-900 dark:text-slate-100 selection:bg-orange-600 selection:text-white transition-colors duration-250">
      <SEO
        title="Blog & Büyüme Teknolojileri Rehberi | Era Dijital"
        description="Yapay zekâ otomasyonları, dijital dönüşüm süreçleri, 3D pazar testleri ve performans pazarlaması hakkında teknik makaleler ve rehberler."
      />

      <Header />

      <main className="flex-1">
        {/* Intro */}
        <section className="py-16 sm:py-24 border-b border-black/5 dark:border-white/5 bg-[#f1ede4] dark:bg-[#0b0e17] transition-colors duration-250">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-700 dark:text-orange-400 font-mono text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>BİLGİ MERKEZİ // TEKNİK REHBERLER</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
                Büyüme & <span className="hl">Yapay Zekâ Notları</span>
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                İşletmenizi büyütmenizi sağlayacak yapay zekâ uygulamaları, webhook senaryoları ve dönüşüm vaka analizleri.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Konu veya anahtar kelime ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-white/[0.04] border border-black/15 dark:border-white/10 rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors shadow-sm"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Arama kriterlerine uygun makale bulunamadı.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const imageSrc = post.featured_image || '/resimler/placeholder.webp';
                const dateStr = new Date(post.published_at).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                });

                return (
                  <article
                    key={post.id}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 hover:border-orange-500/40 shadow-sm dark:shadow-none hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      {imageSrc && (
                        <div className="h-48 w-full rounded-xl bg-black/5 dark:bg-[#0b0e16] border border-black/5 dark:border-white/10 overflow-hidden">
                          <img
                            src={imageSrc}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-[11px] font-mono text-orange-700 dark:text-orange-400">
                        <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                          <Calendar className="w-3 h-3" />
                          <span>{dateStr}</span>
                        </span>
                        <span>•</span>
                        <span className="font-semibold uppercase tracking-wider">{post.category || 'AI Büyüme'}</span>
                      </div>

                      <h2 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-orange-600 dark:text-orange-400 font-bold hover:text-orange-700 dark:hover:text-orange-300 flex items-center gap-1 font-mono text-xs"
                      >
                        <span>İncele</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                        {post.read_time || '4 dk okuma'}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

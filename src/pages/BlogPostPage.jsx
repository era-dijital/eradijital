import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBlogPostBySlug } from '../data/blogPosts';

const API_URL = import.meta.env.VITE_PANEL_API_URL || '';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(() => getBlogPostBySlug(slug));
  const [loading] = useState(false);

  useEffect(() => {
    const handleLocalUpdate = () => {
      setPost(getBlogPostBySlug(slug));
    };
    window.addEventListener('era_blog_updated', handleLocalUpdate);

    const fetchApiPost = async () => {
      if (!API_URL) return;
      try {
        const res = await fetch(`${API_URL}/blog.php?slug=${encodeURIComponent(slug)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && !data.status && data.title) {
            setPost(data);
          }
        }
      } catch (err) {
        // Fallback
      }
    };

    fetchApiPost();

    return () => window.removeEventListener('era_blog_updated', handleLocalUpdate);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-[#f8f6f0] dark:bg-[#0a0d14] text-zinc-900 dark:text-slate-100">
        <Header />
        <div className="flex justify-center items-center py-40">
          <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-[#f8f6f0] dark:bg-[#0a0d14] text-zinc-900 dark:text-slate-100">
        <Header />
        <div className="max-w-xl mx-auto text-center py-40 space-y-4 px-4">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-500/20">
            [404 // BULUNAMADI]
          </span>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Yazı Bulunamadı</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Aradığınız makale mevcut değil veya yayından kaldırılmış olabilir.</p>
          <div className="pt-2">
            <Link to="/blog" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-zinc-900 dark:text-white border border-black/10 dark:border-white/10 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tüm Makalelere Dön</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const imageSrc = post.featured_image || '/resimler/placeholder.webp';
  const dateStr = new Date(post.published_at).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f0] dark:bg-[#0a0d14] text-zinc-900 dark:text-slate-100 selection:bg-orange-600 selection:text-white transition-colors duration-250">
      <SEO
        title={`${post.seo_title || post.title} | Era Dijital Blog`}
        description={post.seo_description || post.excerpt}
      />

      <Header />

      <main className="flex-1 py-12">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Back Nav */}
          <Link to="/blog" className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>[GERİ // BLOG DİZİNİ]</span>
          </Link>

          {/* Article Header */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 border-y border-black/10 dark:border-white/10 py-3">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span>{dateStr}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span>{post.author_name || 'Era Dijital Teknik Ekip'}</span>
              </div>
              {post.category && (
                <>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-500/20 text-[10px] uppercase font-bold">
                    {post.category}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Hero Thumbnail */}
          {imageSrc && (
            <div className="rounded-2xl overflow-hidden bg-black/5 dark:bg-[#0d111a] border border-black/10 dark:border-white/10 shadow-sm">
              <img
                src={imageSrc}
                alt={post.title}
                className="w-full h-auto max-h-[460px] object-cover"
              />
            </div>
          )}

          {/* Body Content */}
          <div 
            className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4 text-sm sm:text-base pt-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              Yapay zekâ otomasyonu ve büyüme sistemleri hakkında daha fazla bilgi almak için ücretsiz analiz talep edebilirsiniz.
            </div>
            <Link 
              to="/on-analiz" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-md shadow-orange-600/20 transition-all shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ücretsiz Ön Analiz Al</span>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

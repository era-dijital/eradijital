import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }

    // JSON-LD Organization / ProfessionalService Schema with hasOfferCatalog (SEO & GEO)
    const schemaId = 'era-digital-dual-schema';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "ERA Dijital",
      "url": "https://eradijital.com",
      "logo": "https://eradijital.com/resimler/era-logo.png",
      "telephone": "+905433619239",
      "email": "eradijitalinfo@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Maslak, İstanbul",
        "addressCountry": "TR"
      },
      "description": "ERA Dijital; Dijital Gelişim (Dış Görünüm & Satış) ve Dijital Dönüşüm (İç Operasyon & Sistem) çözümleri sunan dijital gelişim ajansıdır.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ERA Dijital İkili Hizmet Kataloğu",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Dijital Gelişim (Dış Görünüm & Satış)",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Güven Veren Web Mimarisi" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aramalarda ve Yapay Zekâda Liderlik (SEO & GEO)" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Doğru Alıcıya Odaklanan Reklamlar" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tanıtım Filmleri ve Dijital Katalog" } }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Dijital Dönüşüm (İç Operasyon & Sistem)",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Müşteri ve Teklif Takip Sistemi (CRM)" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Birbiriyle Konuşan Programlar (API Bağlantıları)" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Şirketinize Özel Yazılım ve Bayi Panelleri" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zaman Kazandıran İş Otomasyonları" } }
            ]
          }
        ]
      }
    };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description]);

  return null;
};

export default SEO;

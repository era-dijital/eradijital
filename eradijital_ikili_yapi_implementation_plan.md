# ERA Dijital (eradijital.com) — İkili Yapı (Dijital Gelişim & Dijital Dönüşüm) Implementation Plan

## Agent Görev Özeti
Bu doküman, https://eradijital.com/ web sitesinin mevcut tasarım sistemini, CSS değişkenlerini, tipografisini, animasyon kurgusunu, kurumsal güven bölümlerini (Biz Kimiz, Süreç, SSS, Footer) ve form/backend altyapısını bozmadan, siteyi ziyaretçinin ilk saniyede ihtiyacını seçebildiği **"1. Dijital Gelişim (Dış Görünüm & Satış)"** ve **"2. Dijital Dönüşüm (İç Operasyon & Sistem)"** merkezli 7 Bölümlü İkili Yapıya dönüştürmek için hazırlanmış uygulama planıdır.

---

## 1. Mimari Koruma Kuralları (Non-Destructive Guardrails)
1. **Mevcut Tasarım Token'larını ve CSS Altyapısını Koru:**
   - Mevcut CSS değişkenlerini silme.
   - Yalnızca 4. Bölüm (2. Hizmet Alanı — Dijital Dönüşüm) ve Hero 2. Tercih Kartı için görsel ayrışmayı sağlayan koyu lacivert yüzey değişkenlerini (`--surface-navy: #0B1528`, `--surface-navy-card: #132238`, `--border-navy: rgba(255, 255, 255, 0.12)`, `--text-on-navy: #F8FAFC`, `--text-muted-on-navy: #94A3B8`) ekle.
2. **Mevcut Yardımcı Bölümleri ve Akışı Koru:**
   - Header / Navbar ve Footer (iletişim bilgileri: `+90 543 361 92 39`, `info@eradijital.com`, Maslak / İstanbul, KVKK Aydınlatma Metni modal/link yapısı ve Blog linki) korunacaktır.
   - Hero altındaki Kayan Hizmet Şeridi (Marquee — Neler Yapıyoruz :) korunacaktır.
   - Biz Kimiz (`#biz-kimiz`), 4 Aşamalı Çalışma Süreci (`#surec`) ve Sıkça Sorulan Sorular (`#sss`) bölümleri 6. Bölüm ile 7. Bölüm arasında kurumsal güven katmanı olarak yer almaya devam edecektir.
3. **Backend / Form Gönderim Uyumluluğunu Koru:**
   - Yeni form alanlarını (`name_company`, `phone`, `sector`, `need_area`, `kvkkConsent`) mevcut backend payload yapısına (`fullName`, `companyName`, `phone`, `email`, `goal`, `businessType`, `budgetRange`, `services`) geriye dönük uyumlu bağla.
4. **Birebir Metin Sadakati (Zero Hallucination Copy):**
   - Dokümanda yer alan tüm etiketler, başlıklar, açıklamalar, kart metinleri kelimesi kelimesine uygulanacaktır.

---

## 2. 7 Bölümlü DOM Eşleştirme Tablosu
1. **1. Bölüm:** Hero (Giriş Ekranı) — `#hero`
2. **Ara Şerit:** Kayan Hizmet Şeridi (Marquee — Neler Yapıyoruz :)
3. **2. Bölüm:** 1. Hizmet Alanı: Dijital Gelişim — `#dijital-gelisim`
4. **3. Bölüm:** Geçiş Eşiği — `#gecis-esigi`
5. **4. Bölüm:** 2. Hizmet Alanı: Dijital Dönüşüm — `#dijital-donusum`
6. **5. Bölüm:** Sektörel Çözümler — `#sektorel-cozumler`
7. **6. Bölüm:** Sahada Çalışan Gerçek Projeler — `#ornek-isler`
8. **Güven Katmanı:** Biz Kimiz (`#biz-kimiz`), Süreç (`#surec`), SSS (`#sss`)
9. **7. Bölüm:** Ücretsiz Durum Tespiti — `#durum-tespiti` (aynı zamanda `#iletisim`)

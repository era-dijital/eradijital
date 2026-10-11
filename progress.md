# Era Dijital — Proje İlerleme ve Süreç Günlüğü (`progress.md`)

Son Güncelleme: 11 Ekim 2026  
Canlı Site: [https://eradijital.com/](https://eradijital.com/)  
GitHub Repo: `https://github.com/era-dijital/eradijital.git`  
Canlı Dal (Hostinger): `production`  
Kaynak Kod Dalı: `main`

---

## 1. Tamamlanan Talepler & Yapılan Değişiklikler

### İçerik ve İletişim Bilgileri
- [x] **İletişim Bilgileri Güncellendi:**
  - E-posta: `eradijitalinfo@gmail.com`
  - Telefon: `+90 543 361 92 39`
  - Tıklanabilir `tel:` ve `mailto:` bağlantıları Header, Footer, İletişim sayfası ve İletişim bölümüne entegre edildi.
- [x] **Başlık Formatı (Title Case):**
  - Sitedeki tüm bölüm başlıkları ve kart başlıkları her kelimesi büyük harfle başlayacak şekilde düzenlendi.
  - Başlık sonlarındaki noktalar temizlendi (Örn: Hero başlığı *"İşinizin Bir Sonraki Adımında"*).
- [x] **Kart Etiketlerinin Temizlenmesi:**
  - `NeedsSection.jsx` (İhtiyaç Analizi) kartlarının sağ üst köşesindeki etiket rozetleri (`Kurumsal Vitrin & Temsil`, `Hedefli Arama & Reklam`, `Satış & Talep Takibi`, `Süreç & Düzen`) kaldırıldı.
- [x] **Çalışma Süreci Rozeti:**
  - `ProcessSection.jsx` içerisindeki başlık üstü "Çalışma Süreci" rozeti kaldırıldı.

### Altyapı, Git ve Canlı Dağıtım
- [x] **Hostinger Git Dağıtım Mimarisi Kuruldu:**
  - `production` dalı oluşturuldu ve `dist/` klasörü ile kaynak kodlar bu dala bağlandı.
- [x] **Deployment Becerisi (Skill):**
  - `.agents/skills/eradijital-deployment/SKILL.md` oluşturuldu.
- [x] **Cursor & AI Kuralları:**
  - `.cursorrules` dosyası kök dizine eklendi.

---

## 2. Yaşanan Hatalar & Alınan Dersler (Post-Mortem / Lessons Learned)

### Hata 1: Canlı Sitede Beyaz Ekran (`SyntaxError: Unexpected token ')'`)
- **Neden Oluştu?**
  - `main` dalı `production` dalına git merge edilirken Git, tek satırlık minified `dist/assets/index-gVmr-BHd.js` dosyasını 3-way text merge ile birleştirmeye çalıştı ve içine `>>>>>>> main:dist/assets/...` çakışma metni yazdı.
  - Hostinger CDN (`hcdn`) bu bozuk dosyayı 7 gün (`max-age=604800`) önbelleğe aldı.
- **Nasıl Çözüldü?**
  - `src/App.jsx` içine sürüm belirteci eklenerek sıfırdan derleme (`npm run build`) alındı.
  - Yepyeni bir dosya adı (`index-O8ga6_Dj.js`) üretilerek CDN önbelleği baypas edildi.
  - `node --check` ile derleme dosyası test edildi.
- **Kalıcı Kural:**
  - `dist/` dosyaları asla git metin birleştirmesine tabi tutulamaz. `production` dalına aktarım sadece `git merge main --ff-only` veya `git checkout main -- dist/ src/` ile yapılmalıdır.

---

## 3. Standart Dağıtım Komut Seti

Her dağıtımda sırasıyla çalıştırılacak komutlar:

```powershell
# 1. Derleme Al (Temiz build)
Remove-Item -Recurse -Force dist
npm run build

# 2. Syntax Kontrolü Yap
node --check dist/assets/*.js

# 3. main Dalına Commit & Push
git add src/ dist/
git commit -m "feat/fix: <açıklama>"

# 4. production Dalına Aktar (Fast-forward)
git checkout production
git merge main --ff-only

# 5. GitHub'a Pushla ve Temizle
$token = "<GITHUB_TOKEN>"
git remote set-url origin "https://${token}@github.com/era-dijital/eradijital.git"
try {
    git push origin main
    git push origin production
} finally {
    git remote set-url origin "https://github.com/era-dijital/eradijital.git"
    git checkout main
}
```

---

## 4. Aktif Durum
- Canlı Site Durumu: **ÇALIŞIYOR (HTTP 200)**
- Aktif JS Bundle: `dist/assets/index-O8ga6_Dj.js`
- Aktif CSS Bundle: `dist/assets/index-G6rWnMl3.css`

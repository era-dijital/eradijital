---
name: eradijital-deployment
description: Standardized build, branch management, and deployment workflow for Era Dijital Web (React 19 + Vite + PHP on Hostinger).
---

# Era Dijital — Deployment & Git Workflow Skill

Bu kılavuz, Era Dijital web sitesinde yapılan kod ve tasarım değişikliklerinin hatasız şekilde derlenip canlı sunucuya (`eradijital.com`) aktarılması için izlenmesi gereken standart protokolü tanımlar.

---

## 1. Branch (Dal) Mimarisi ve Rolleri

| Branch | Rol | İçerik | Hostinger Durumu |
| :--- | :--- | :--- | :--- |
| **`main`** | Kaynak Kod Dalı | Temiz React kaynak kodları (`src/`, `panel/`, `public/`). `dist/` gitignore edilebilir veya opsiyoneldir. | Geliştirme referansı |
| **`production`** | Canlı Dağıtım Dalı | Kaynak kodlar + **derlenmiş `dist/` klasörü**. | **Hostinger bu dalı dinler ve yayınlar.** |

> ⚠️ **KRİTİK KURAL:** Yapılan değişiklikler sadece `main` dalına pushlanırsa canlı site GÜNCELLENMEZ. Değişikliklerin canlıya yansıması için mutlaka **`dist` derlenmeli** ve **`production` branch'ine pushlanmalıdır**.

---

## 2. Standart Güncelleme & Dağıtım Protokolü (Step-by-Step)

Her kod veya içerik değişikliğinde aşağıdaki sıra takip edilmelidir:

### Adım 1: Değişiklikleri `main` Dalında Yap ve Doğrula
1. Kod değişikliklerini `src/` veya ilgili dosyalarda yapın.
2. `main` dalında commit oluşturun:
   ```bash
   git add <dosyalar>
   git commit -m "feat/fix: <açıklayıcı mesaj>"
   ```
3. `main` dalını GitHub'a gönderin:
   ```bash
   git push origin main
   ```

### Adım 2: Prodüksiyon Derlemesini (Build) Al
Hostinger paylaşımlı sunucusunda Node derleyicisi çalışmadığı için derleme yerelde alınmalıdır:
```cmd
npm run build
```
* Çıktı: `dist/index.html`, `dist/assets/index-[hash].js`, `dist/assets/index-[hash].css`
* Kontrol: `dist/` klasörünün güncellendiğinden ve yeni hash kodlu bundle'ın oluştuğundan emin olun.

### Adım 3: `production` Dalına Aktar ve Yayınla
1. `production` dalına geçin ve `main`'deki yenilikleri birleştirin:
   ```bash
   git checkout production
   git merge main -m "Merge branch 'main' into production"
   ```
2. Çakışma durumunda `main` sürümünü koruyun:
   ```bash
   git checkout --theirs .
   ```
3. Yeni `dist/` klasörünü ekleyin ve commit atın:
   ```bash
   git add dist/ .gitignore
   git commit -m "build(dist): deploy updated release to production"
   ```
4. `production` dalını GitHub'a pushlayın:
   ```bash
   git push origin production
   ```
5. Yerel çalışma alanını tekrar `main` dalına alın:
   ```bash
   git checkout main
   ```

---

## 3. GitHub Kimlik Doğrulama Güvenliği

Token ile push yaparken, güvenlik gereği token'ın yerel `.git/config` dosyasında kalıcı olarak saklanmaması gerekir:

```bash
# Push öncesi geçici kimlikli URL tanımla
git remote set-url origin https://<TOKEN>@github.com/era-dijital/eradijital.git

# Push işlemini yap
git push origin <branch>

# Güvenlik için temizle
git remote set-url origin https://github.com/era-dijital/eradijital.git
```

---

## 4. Hostinger Canlı Sunucu Kontrolü

1. Push işlemi tamamlandıktan sonra Hostinger hPanel > **Git** alanına gidin.
2. Otomatik webhook kurulu değilse **"Deploy" (Dağıt)** butonuna tıklayın.
3. Canlı sitede doğrulamak için:
   ```powershell
   (Invoke-WebRequest -Uri "https://eradijital.com/?v=$((Get-Date).Ticks)" -Method Get).Content
   ```
   Çıktıda yeni bundle isminin yer aldığını ve HTTP 200 döndüğünü teyit edin.

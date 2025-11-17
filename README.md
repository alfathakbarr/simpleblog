# 📚 Simple Blog

**Blog statis sederhana dengan 3 artikel yang dirender secara dinamis menggunakan JavaScript dan styling profesional dengan Tailwind CSS.**

---

## � Cara Menjalankan

### Prasyarat
- Node.js dan npm sudah terinstall
- XAMPP atau web server lokal (opsional)

### Step 1: Clone Repository
```bash
git clone https://github.com/alfathakbarr/simpleblog.git
cd simpleblog
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Build Tailwind CSS (Opsional)
Jika Anda ingin memodifikasi CSS:
```bash
npm run build
```

Atau gunakan watch mode untuk development:
```bash
npm run watch
```

### Step 4: Jalankan Blog
Ada 2 cara untuk menjalankan:

**Opsi A: Buka langsung di browser**
- Double-click file `public/index.html`, atau
- Drag and drop ke browser

**Opsi B: Gunakan XAMPP (Recommended)**
1. Pastikan XAMPP Apache sudah running
2. Buka browser: `http://localhost/simpleblog/public/index.html`

---

## ✨ Fitur yang Dibuat

### 📝 Content Management
- ✅ **3 Artikel Berkualitas** dengan minimal 3 paragraf masing-masing
- ✅ **Data Terpusat** - Semua artikel disimpan di `src/data/posts.js`
- ✅ **Render Dinamis** - Judul, tanggal, author, dan konten ditampilkan otomatis
- ✅ **Format Tanggal** - Tanggal otomatis di-format dalam Bahasa Indonesia

### 🎨 Desain & Styling
- ✅ **Styling Profesional** - Desain modern dengan color gradient yang menarik
- ✅ **Card-Based Layout** - Setiap artikel dalam card dengan shadow effects
- ✅ **Hover Effects** - Animasi smooth saat cursor hover di atas artikel
- ✅ **Typography Premium** - Font Google Fonts (Playfair Display + Inter)
- ✅ **Gradient Background** - Background halaman dengan gradient yang elegan
- ✅ **Dark Header** - Header dengan gradient purple-blue

### 📱 Responsive Design
- ✅ **Mobile-Friendly** - Responsive di semua ukuran device
- ✅ **Media Queries** - Breakpoint untuk desktop, tablet, dan mobile
- ✅ **Optimal Readability** - Font size dan spacing yang sesuai untuk setiap device
- ✅ **Flexible Layout** - Grid system yang adaptif

### ⚙️ Technical Features
- ✅ **Pure JavaScript** - Render dinamis tanpa framework
- ✅ **HTML Security** - Escape HTML untuk prevent XSS
- ✅ **Modular Structure** - Separation of concerns (HTML, CSS, JS, Data)
- ✅ **Tailwind CSS Integration** - Modern CSS framework dengan plugin typography
- ✅ **Git Version Control** - Repository sudah siap di GitHub

---

## 📁 Struktur Project

```
simpleblog/
├── public/
│   ├── index.html          # Halaman blog utama (HTML + CSS + JS)
│   └── output.css          # CSS output dari Tailwind (auto-generated)
├── src/
│   ├── data/
│   │   └── posts.js        # Data 3 artikel dalam format JavaScript
│   └── input.css           # CSS input untuk Tailwind
├── package.json            # Dependencies npm
├── tailwind.config.js      # Konfigurasi Tailwind CSS
├── .gitignore             # Git ignore configuration
└── README.md              # Dokumentasi project
```

---

## 📝 Artikel yang Tersedia

### 1. 📚 Memulai Perjalanan Belajar Web Development
- **Author:** John Developer
- **Tanggal:** 15 November 2024
- **Ringkasan:** Panduan langkah demi langkah untuk memulai belajar web development dari nol, mencakup fondasi HTML, CSS, dan JavaScript
- **Panjang:** 3 paragraf lengkap

### 2. ✍️ Best Practices dalam Penulisan Kode yang Clean
- **Author:** Sarah Code
- **Tanggal:** 12 November 2024
- **Ringkasan:** Tips dan trik menulis kode yang bersih, maintainable, dan mudah dipahami dengan prinsip SRP
- **Panjang:** 3 paragraf lengkap

### 3. 🎨 Responsive Design: Mengoptimalkan Website untuk Semua Perangkat
- **Author:** Mike Mobile
- **Tanggal:** 8 November 2024
- **Ringkasan:** Teknik membuat website responsif menggunakan mobile-first approach, grid, dan media queries
- **Panjang:** 3 paragraf lengkap

---

## � Keterangan Teknis

### Teknologi yang Digunakan
| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| HTML5 | - | Struktur halaman |
| CSS3 | - | Styling dan animasi |
| JavaScript | ES6+ | Rendering dinamis |
| Tailwind CSS | 3.3.0 | CSS Framework |
| @tailwindcss/typography | 0.5.10 | Plugin typography |
| Node.js | - | Package manager |

### Cara Kerja Render Dinamis
1. Halaman `public/index.html` memuat file `src/data/posts.js`
2. JavaScript membaca array `posts` dari data file
3. Setiap artikel di-loop dan dirender menjadi HTML
4. Tanggal otomatis di-format ke format Indonesia
5. HTML di-escape untuk keamanan (prevent XSS)
6. Hasil di-insert ke DOM dengan `innerHTML`

### Customization

#### Menambah/Mengubah Artikel
Edit file `src/data/posts.js`:
```javascript
const posts = [
  {
    id: 1,
    title: "Judul Artikel",
    date: "YYYY-MM-DD",          // Format: 2024-11-17
    author: "Nama Author",
    content: `
      <p>Paragraf 1...</p>
      <p>Paragraf 2...</p>
      <p>Paragraf 3...</p>
    `
  },
  // Tambah artikel baru di sini
];
```

#### Mengubah Styling
- Modify `src/input.css` untuk CSS custom
- Edit `tailwind.config.js` untuk Tailwind configuration
- Run `npm run build` untuk generate CSS baru

#### Mengubah Font & Warna
Edit CSS di section `<style>` di `public/index.html`:
```css
header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Ubah hex color sesuai keinginan */
}
```

---

## 📊 Performance

- **Page Load Time:** < 1 detik (tanpa network delay)
- **Bundle Size:** ~3KB HTML + CSS inline
- **JavaScript Size:** ~2KB (tanpa dependency external)
- **Mobile Optimization:** Fully responsive
- **SEO Friendly:** Semantic HTML structure

---

## 🔐 Security

- ✅ HTML escaping untuk prevent XSS attacks
- ✅ No external CDN dependencies (kecuali Google Fonts)
- ✅ Content Security Policy compatible
- ✅ No sensitive data exposed

---

## 📦 NPM Scripts

```bash
npm run build    # Build Tailwind CSS satu kali
npm run watch    # Watch mode - auto rebuild saat CSS berubah
npm install      # Install dependencies
```

---

## 🐛 Troubleshooting

### Artikel tidak tampil
- Pastikan file `src/data/posts.js` sudah dibuat
- Buka browser console (F12) dan lihat error message
- Pastikan path `../src/data/posts.js` benar

### Styling tidak tampil
- Run `npm run build` untuk generate CSS baru
- Hard refresh browser (Ctrl + Shift + R)
- Cek file `public/output.css` sudah ada

### XAMPP tidak bisa akses
- Pastikan XAMPP Apache sudah running
- File harus di folder `htdocs/simpleblog/`
- Gunakan URL: `http://localhost/simpleblog/public/index.html`

---

## 📄 License

MIT License - Feel free to use, modify, and distribute

---

## 👤 Author

**Alfathakbarr**
- GitHub: [@alfathakbarr](https://github.com/alfathakbarr)
- Repository: [simpleblog](https://github.com/alfathakbarr/simpleblog)

---

## 📝 Changelog

### v1.0.0 (17 November 2024)
- ✅ Initial release
- ✅ 3 artikel dengan konten lengkap
- ✅ Responsive design
- ✅ Tailwind CSS integration
- ✅ GitHub repository setup

# Simple Blog

Blog sederhana dengan 3 artikel yang dirender secara dinamis menggunakan JavaScript.

## 📋 Fitur

- ✅ 3 artikel dengan minimal 3 paragraf masing-masing
- ✅ Data artikel dari file `src/data/posts.js`
- ✅ Render dinamis (judul, tanggal, isi, author)
- ✅ Styling profesional dan responsif
- ✅ Design yang rapi dan readable
- ✅ Gradient background yang menarik
- ✅ Card design dengan hover effect
- ✅ Font profesional (Playfair Display & Inter)
- ✅ Support mobile-friendly

## 🚀 Cara Menggunakan

### 1. Install Dependencies
```bash
npm install
```

### 2. Build CSS (Optional - jika menggunakan Tailwind)
```bash
npm run build
```

atau watch mode:
```bash
npm run watch
```

### 3. Jalankan Blog
- Buka file `public/index.html` di browser, atau
- Jika menggunakan XAMPP: `http://localhost/simpleblog/public/index.html`

## 📁 Struktur Project

```
simpleblog/
├── public/
│   └── index.html          # Halaman blog utama
├── src/
│   ├── data/
│   │   └── posts.js        # Data artikel (3 artikel)
│   └── input.css           # CSS input untuk Tailwind
├── package.json
├── tailwind.config.js
└── README.md
```

## 📝 Artikel yang Tersedia

1. **Memulai Perjalanan Belajar Web Development**
   - Author: John Developer
   - Date: 2024-11-15
   - Isi: Panduan memulai belajar web development dari nol

2. **Best Practices dalam Penulisan Kode yang Clean**
   - Author: Sarah Code
   - Date: 2024-11-12
   - Isi: Tips menulis kode yang bersih dan maintainable

3. **Responsive Design: Mengoptimalkan Website untuk Semua Perangkat**
   - Author: Mike Mobile
   - Date: 2024-11-08
   - Isi: Teknik membuat website responsif untuk semua device

## 🎨 Styling

Halaman menggunakan:
- Custom CSS dengan design profesional
- Gradient background
- Card-based layout
- Responsive media queries
- Font Google Fonts (Playfair Display + Inter)
- Hover effects yang smooth

## 📱 Responsive Design

- Desktop: Full width dengan padding optimal
- Tablet: Grid responsif dengan spacing yang sesuai
- Mobile: Single column dengan font size yang readable

## 🔧 Customization

Untuk mengubah data artikel, edit file `src/data/posts.js`:

```javascript
const posts = [
  {
    id: 1,
    title: "Judul Artikel",
    date: "YYYY-MM-DD",
    author: "Nama Author",
    content: `<p>Isi artikel dalam format HTML...</p>`
  },
  // ... artikel lainnya
];
```

## 📄 License

MIT License - Feel free to use and modify

const posts = [
  {
    id: 1,
    title: "Memulai Perjalanan Belajar Web Development",
    date: "2024-11-15",
    author: "John Developer",
    content: `
      <p>
        Belajar web development adalah keputusan yang tepat untuk masa depan karir Anda. Dengan semakin bertumbuhnya teknologi dan kebutuhan digital, skill di bidang ini sangat diminati oleh perusahaan-perusahaan besar maupun startup. Artikel ini akan membahas langkah-langkah awal untuk memulai perjalanan Anda menjadi web developer yang sukses.
      </p>
      <p>
        Hal pertama yang perlu Anda lakukan adalah memahami fondasi dasar web development. Ada tiga pilar utama yang harus dikuasai: HTML, CSS, dan JavaScript. HTML adalah struktur dasar dari setiap halaman web, CSS memberikan styling dan tampilan yang menarik, sedangkan JavaScript menambahkan interaktivitas dan dinamisme pada halaman. Ketiga teknologi ini saling bekerja sama menciptakan pengalaman pengguna yang optimal.
      </p>
      <p>
        Perjalanan belajar tidak harus sempurna sejak hari pertama. Ambil waktu Anda untuk memahami konsep-konsep dasar, praktikkan dengan membuat proyek-proyek kecil, dan jangan takut untuk membuat kesalahan. Komunitas web development sangat supportif dan selalu siap membantu. Dengan konsistensi dan dedikasi, Anda akan menjadi developer yang kompeten dalam waktu singkat.
      </p>
    `
  },
  {
    id: 2,
    title: "Best Practices dalam Penulisan Kode yang Clean",
    date: "2024-11-12",
    author: "Sarah Code",
    content: `
      <p>
        Menulis kode yang bersih dan terstruktur adalah salah satu keterampilan paling penting untuk seorang programmer. Kode yang clean bukan hanya mudah dibaca, tetapi juga mudah dipelihara, di-debug, dan ditingkatkan oleh developer lain di tim Anda. Dalam artikel ini, kami akan membahas beberapa best practices yang dapat meningkatkan kualitas kode Anda secara signifikan.
      </p>
      <p>
        Gunakan nama variabel yang deskriptif dan mudah dipahami. Hindari nama singkat seperti 'x', 'y', atau 'tmp' yang tidak menjelaskan tujuan variabel tersebut. Sebaliknya, gunakan nama seperti 'userName', 'userEmail', atau 'totalPrice' yang langsung menunjukkan apa yang disimpan dalam variabel. Selain itu, ikuti konvensi penamaan yang konsisten dalam seluruh proyek Anda, seperti camelCase untuk JavaScript atau snake_case untuk Python.
      </p>
      <p>
        Fungsi atau method harus memiliki satu tanggung jawab utama. Prinsip Single Responsibility Principle (SRP) ini membuat kode lebih modular dan mudah diuji. Fungsi yang terlalu panjang dan melakukan banyak hal sekaligus cenderung lebih rentan terhadap bug. Tambahkan komentar yang berguna untuk menjelaskan logika kompleks, tetapi hindari komentar yang hanya mengulangi apa yang sudah jelas dari kode itu sendiri. Dengan menerapkan prinsip-prinsip ini, kode Anda akan menjadi lebih profesional dan maintainable.
      </p>
    `
  },
  {
    id: 3,
    title: "Responsive Design: Mengoptimalkan Website untuk Semua Perangkat",
    date: "2024-11-08",
    author: "Mike Mobile",
    content: `
      <p>
        Di era digital ini, mayoritas pengguna internet mengakses website melalui perangkat mobile seperti smartphone dan tablet. Oleh karena itu, responsive design bukan lagi pilihan tetapi kebutuhan yang imperatif. Website yang responsif dapat menyesuaikan dengan ukuran layar perangkat apapun, memberikan pengalaman pengguna yang optimal di desktop, tablet, maupun mobile.
      </p>
      <p>
        Teknik mobile-first adalah pendekatan terbaik dalam responsive design modern. Mulai dengan merancang untuk perangkat mobile terlebih dahulu, kemudian secara progresif tambahkan fitur dan layout yang lebih kompleks untuk ukuran layar yang lebih besar. Gunakan media queries untuk mengatur breakpoint pada ukuran layar yang berbeda, dan pastikan setiap elemen dapat beradaptasi dengan lancar. Grid dan flexbox adalah alat CSS yang powerful untuk membuat layout yang responsif tanpa perlu script tambahan.
      </p>
      <p>
        Pengujian adalah bagian krusial dari proses responsive design. Gunakan browser developer tools untuk melihat preview pada berbagai ukuran layar, dan lakukan testing actual di perangkat nyata jika memungkinkan. Perhatikan tidak hanya layout, tetapi juga kecepatan loading, readability teks, dan ukuran tombol yang dapat diklik dengan mudah. Dengan menerapkan responsive design dengan baik, Anda memastikan website Anda dapat diakses dan memberikan pengalaman yang memuaskan untuk semua pengguna, di manapun dan dengan perangkat apapun mereka mengakses.
      </p>
    `
  }
];

// Export untuk digunakan di HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = posts;
}

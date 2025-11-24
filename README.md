# Resume SPA - Mahasiswa UNIKMA

Deskripsi singkat:
- Single-page application (SPA) responsif menggunakan HTML5, CSS3 (SCSS disediakan), dan Vanilla JavaScript.
- Mengutamakan estetika premium, transisi halus, dan UX.

File penting:
- index.html — markup utama
- styles.scss — sumber SCSS (ubah variabel warna / tipografi di sini)
- styles.css — file CSS terkompilasi (untuk langsung digunakan)
- app.js — semua interaksi JS (smooth scroll, reveal, parallax, project filter, form validation)
- assets/ — tempat menaruh foto, gambar project, dan CV (assets/photo-placeholder.jpg, assets/CV.pdf, dll.)

Cara menjalankan:
1. Pastikan struktur folder seperti:
   - index.html
   - styles.css
   - styles.scss (opsional, untuk pengembangan)
   - app.js
   - assets/ (taruh foto & CV)
2. Buka `index.html` di browser (cukup klik dua kali).
3. Untuk pengembangan SCSS: kompilasi styles.scss ke styles.css dengan tool favorit Anda (Dart Sass, node-sass, dll).

Customisasi cepat:
- Ganti `assets/photo-placeholder.jpg` dengan foto asli Anda.
- Ganti `assets/CV.pdf` dengan CV Anda agar tombol "Download CV" bekerja.
- Ubah data proyek di app.js (array `projects`) untuk menampilkan proyek nyata.

Catatan teknis & aksesibilitas:
- Intersection Observer digunakan untuk in-view reveal dan active navbar state.
- Form kontak hanya melakukan validasi sisi-klien; tambahkan backend / API untuk pengiriman nyata.
- Warna dan tipografi dapat disesuaikan di file styles.scss.

Jika Anda ingin:
- Menambahkan deployment (GitHub Pages) atau CI build untuk SCSS otomatis, saya bisa bantu menambahkan konfigurasi.
- Mengubah layout atau menambahkan lebih banyak animasi (mis. micro-interactions), beri tahu preferensi Anda.
# Nadzif Portfolio

Personal portfolio website — dibangun dengan tema **network engineer**: terminal-style typography, signal bar, status indicator, dan animasi bergaya sinyal jaringan.

🔗 **Live demo:** _(tambahkan link setelah deploy)_

![status](https://img.shields.io/badge/status-in%20development-yellow)
![react](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

---

## ✨ Tentang

Portofolio pribadi Muhammad Ramdhan Nadzif Hasan — Telecommunications Engineering student & aspiring Network Engineer. Website ini menampilkan profil, keahlian, dan proyek dengan visual bertema jaringan/terminal untuk merefleksikan latar belakang di bidang **networking** dan **software engineering**.

## 🚀 Tech Stack

| Kategori | Tools |
|---|---|
| Framework | React 19 + Vite |
| Routing | React Router DOM v7 |
| Styling | CSS custom (tanpa framework CSS) |
| Linting | Oxlint |

## 📁 Struktur Proyek

```
nadzif_portofolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/            # Gambar (hero, foto profil)
│   ├── App.jsx            # Root app + routing
│   ├── Navigation.jsx     # Navbar dengan efek scroll
│   ├── Home.jsx           # Hero section
│   ├── Skills.jsx         # Section keahlian (horizontal bar)
│   ├── Experience.jsx     # Section proyek/pengalaman
│   ├── Footer.jsx         # Footer dengan status & social links
│   ├── index.css          # Semua styling
│   └── main.jsx           # Entry point
├── package.json
└── vite.config.js
```

## 🛠️ Instalasi & Menjalankan Secara Lokal

Pastikan sudah terinstall **Node.js** (disarankan versi 18 ke atas) dan **npm**.

```bash
# 1. Clone repository
git clone https://github.com/<username>/nadzif_portofolio.git
cd nadzif_portofolio

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka `http://localhost:5173` di browser.

### Script yang tersedia

| Command | Keterangan |
|---|---|
| `npm run dev` | Menjalankan development server dengan hot reload |
| `npm run build` | Build production ke folder `dist/` |
| `npm run preview` | Preview hasil build secara lokal |
| `npm run lint` | Menjalankan Oxlint untuk cek kualitas kode |

## 🗺️ Routing

| Path | Komponen | Deskripsi |
|---|---|---|
| `/` | `Home.jsx` | Halaman utama / hero section |
| `/Skills` | `Skills.jsx` | Daftar keahlian teknis |
| `/Experience` | `Experience.jsx` | Daftar proyek yang pernah dikerjakan |

## 📌 Roadmap

- [ ] Section Contact / form pesan
- [ ] Deploy ke Vercel / Netlify
- [ ] Optimasi untuk mobile (responsive lanjutan)
- [ ] Dark/light mode toggle

## 📬 Kontak

- GitHub: [@NadzifHasan2005](https://github.com/NadzifHasan2005)
- LinkedIn: [Muhammad Ramdhan Nadzif Hasan](https://www.linkedin.com/in/muhammad-ramdhan-nadzif-hasan-0156a5211/)
- Instagram: [@mr_nadzif19](https://www.instagram.com/mr_nadzif19/)
- Email: nadzif.hasan3work@gmail.com

## 📄 Lisensi

Proyek ini dibuat untuk keperluan personal portfolio. Bebas digunakan sebagai referensi, mohon cantumkan atribusi jika menyalin struktur/desain.

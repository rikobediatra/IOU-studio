# IOU Studio - Web Platform & CMS

Platform digital resmi **IOU Studio**. Aplikasi ini mengintegrasikan profil perusahaan publik yang dinamis dengan sistem manajemen konten (CMS) internal yang aman untuk pengelolaan aset studio.

## 🛠 Tech Stack

- **Core:** Next.js 16 (App Router)
- **Database:** MongoDB, Cloudinary
- **UI/UX:** Shadcn UI, Tailwind CSS, Lucide Icons, React Icons
- **Auth:** NextAuth.js
- **Deployment:** Vercel

## 🌟 Fitur Utama

### 1. Public Facing Site

- **Portfolio Showcase:** Galeri karya studio yang responsif.
- **Services Page:** Penjelasan layanan IOU Studio.
- **SEO Optimized:** Menggunakan metadata dinamis untuk setiap halaman.
- **High Performance:** Optimasi gambar otomatis menggunakan `next/image`.

### 2. Admin Dashboard (CMS)

- **Secure Login:** Proteksi halaman admin khusus internal.
- **Full CRUD:** Manajemen konten (Create, Read, Update, Delete) tanpa akses database manual.
- **Data Persistence:** Integrasi langsung dengan MongoDB untuk pembaruan konten real-time.
- **Modern Interface:** Dashboard minimalis dan intuitif menggunakan Shadcn UI.

## 🚀 Cara Menjalankan Proyek

1. **Clone Repository**
```bash
git clone https://github.com
cd iou-studio
```
2. **Install Dependencies**
```bash
npm install
```
3. **Setup Environment Variables**
```bash
NEXT_PUBLIC_API_URL=your_public_api
ADMIN_USERNAME=username
ADMIN_PASSWORD=password_admin
JWT_SECRET=JWT
NODE_ENV=''

MONGODB_USERNAME=username_mongodb
MONGODB_PASSWORD=password_mongodb
MONGODB_URI=your_uri_mongodb

CLOUDINARY_CLOUD_NAME=object_storage_name
CLOUDINARY_API_KEY=object_storage_key
CLOUDINARY_API_SECRET=object_storage_secret
```
4. **Running the App**
```bash
npm run dev
```
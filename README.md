# Ganipedia - Jasa Pembuatan Website Professional

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Website landing page profesional untuk jasa pembuatan website dan solusi digital. Menampilkan portofolio, layanan, dan informasi lengkap tentang Ganipedia.

## 🚀 Features

### 🎨 **UI/UX Modern**
- Desain responsif dengan Tailwind CSS v4
- Animasi smooth dengan transisi CSS
- Dark/Light mode support 
- Mobile-first responsive design

### 🌐 **Multi-Language**
- Dukungan Bahasa Indonesia & English
- Context-based translation system
- Toggle bahasa dengan icon bendera

### 💼 **Portfolio Showcase**
- Optimized image loading with lazy loading
- Interactive image gallery with lightbox
- Filter berdasarkan kategori
- Multiple images per portfolio
- Image validation on build
- Error handling for missing images
- Link eksternal ke website asli
- Responsive grid layout

### 🛠️ **Layanan Digital**
- Portfolio Website (Rp 500.000)
- Landing Page (Rp 1.000.000) 
- Company Profile (Rp 2.500.000)
- E-Commerce (Rp 10.000.000)
- POS System (Rp 12.000.000)
- Custom Web App (Quote)

### 💬 **Customer Service Chatbot**
- Floating chat widget
- Quick replies untuk FAQ
- Auto-response berdasarkan keyword
- Integrasi langsung ke WhatsApp

### 📊 **Stats & Testimonials**
- Statistik project selesai: 12+
- Klien puas: 10+
- Pengalaman: 3+ tahun
- Support 24/7

### 📱 **Contact & Social**
- Form kontak dengan validasi
- WhatsApp integration
- Social media links (GitHub, LinkedIn, Instagram)
- Google Maps integration

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React 19** - UI Library
- 📘 **TypeScript** - Type Safety
- 🎨 **Tailwind CSS v4** - Styling Framework
- ⚡ **Vite 7.3.1** - Build Tool & Dev Server

### **Icons & Assets**
- 🎯 **Lucide React** - Icon Library
- 🖼️ **Unsplash** - High-quality Images
- 🎨 **Google Fonts** - Inter Font Family

### **Development Tools**
- 📦 **PNPM** - Package Manager
- 🔍 **ESLint** - Code Linting
- 🎯 **TypeScript** - Static Type Checking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PNPM (recommended) atau NPM
- Docker & Docker Compose (optional, untuk deployment)

### Installation

1. **Clone repository**
\`\`\`bash
git clone https://github.com/Ganiramadhan/ganipedia-v1.git
cd ganipedia-v1
\`\`\`

2. **Install dependencies**
\`\`\`bash
pnpm install
\`\`\`

3. **Start development server**
\`\`\`bash
pnpm dev
\`\`\`

Server akan berjalan di \`http://localhost:3001\`

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| \`pnpm dev\` | Start development server (port 3001) |
| `pnpm build` | Build for production (validates images first) |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm validate:images` | Validate all portfolio images exist |

## 🏭 Production Build

### Standard Build
\`\`\`bash
# Build for production
pnpm build

# Preview production build
pnpm preview
\`\`\`

Build output akan tersedia di folder \`dist/\`

### 🐳 Docker Deployment

**Build Docker Image:**
\`\`\`bash
docker build -t ganipedia:latest .
\`\`\`

**Run Container (maps internal port 80 to external 3001):**
\`\`\`bash
docker run -d -p 3001:80 --name ganipedia ganipedia:latest
\`\`\`

**Using Docker Compose:**
\`\`\`bash
docker-compose up -d
\`\`\`

Website akan tersedia di \`http://localhost:3001\`

**Stop Container:**
\`\`\`bash
docker stop ganipedia
# or with docker-compose
docker-compose down
\`\`\`

### 🚀 Production Deployment

**Nginx Configuration:**
- Internal Port: 80 (nginx default)
- External Port: 3001 (mapped via docker)
- Gzip compression enabled
- Static assets caching (1 year)
- SPA routing support
- Security headers configured

**Environment Variables:**
\`\`\`bash
# Optional - set in Dockerfile or docker-compose.yml
NODE_ENV=production
\`\`\`

## 📱 Portfolio Projects

Website ini menampilkan 8 project portfolio:

1. **BPDA Bujapi Jabar** - Company Profile resmi organisasi
2. **BPDA Admin CMS** - Content Management System
3. **BPDA HRMIS** - Human Resource Management System
4. **Batik Merawit** - Company Profile brand batik tradisional
5. **TechStart E-Commerce** - Platform e-commerce startup teknologi
6. **Warung Digital POS** - Point of Sale system untuk UMKM
7. **Creative Portfolio Studio** - Portfolio website studio kreatif
8. **EduLearn LMS** - Learning Management System

## 🌍 Customization

### **Content Management**
Edit \`src/data/index.ts\` untuk update:
- Portfolio projects
- Testimonials
- Statistics
- Navigation items

**Important**: Setelah menambah portfolio baru dengan gambar, jalankan:
```bash
pnpm validate:images
```

### **Adding Portfolio Images**
1. Place images in `public/projects/` folder
2. Update portfolio data in `src/data/index.ts`
3. Reference using path: `/projects/your-image.png`
4. Run `pnpm validate:images` to verify

See [docs/IMAGE_OPTIMIZATION.md](docs/IMAGE_OPTIMIZATION.md) for details.

### **Translations**
Edit `src/contexts/LanguageContext.tsx` untuk menambah/edit translations.

## ⚡ Performance Optimizations

- **Lazy Loading**: Images load only when visible
- **Priority Loading**: First 6 portfolio items load eagerly
- **Error Handling**: Fallback UI for broken images
- **IntersectionObserver**: Pre-loads images 100px before viewport
- **Code Splitting**: Vendor chunking for better caching
- **Compression**: Gzip enabled for all text assets
- **Caching**: 1-year cache for static assets
- **Performance Monitoring**: Core Web Vitals tracking in dev mode

## 👨‍💻 Author

**Gani Ramadhan**
- GitHub: [@Ganiramadhan](https://github.com/Ganiramadhan)
- LinkedIn: [ganiramadhan35](https://www.linkedin.com/in/ganiramadhan35/)
- Instagram: [@gani.raa_](https://www.instagram.com/gani.raa_/)

## 🆘 Support

Jika ada pertanyaan atau butuh bantuan:

1. **WhatsApp**: [+62 838-7862-4702](https://wa.me/6283878624702)
2. **Email**: hello@ganipedia.com

---

⭐ **Jika project ini membantu, jangan lupa kasih star di GitHub!**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

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
- 8 project portfolio dengan detail lengkap
- Filter berdasarkan kategori
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

4. **Open browser**
\`\`\`
http://localhost:5173
\`\`\`

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| \`pnpm dev\` | Start development server |
| \`pnpm build\` | Build for production |
| \`pnpm preview\` | Preview production build |
| \`pnpm lint\` | Run ESLint |

## 🏭 Production Build

\`\`\`bash
# Build for production
pnpm build

# Preview production build
pnpm preview
\`\`\`

Build output akan tersedia di folder \`dist/\`

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

### **Translations**
Edit \`src/contexts/LanguageContext.tsx\` untuk menambah/edit translations.

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

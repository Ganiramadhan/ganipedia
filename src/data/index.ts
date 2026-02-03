import type {
  NavItem,
  Testimonial,
  Portfolio,
  Stat,
  CarouselSlide,
} from '@/types';

// Navigation Data
export const navigationItems: NavItem[] = [
  { id: 'home', label: 'Beranda', href: '#home' },
  { id: 'products', label: 'Produk', href: '#products' },
  { id: 'services', label: 'Layanan', href: '#services' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'testimonials', label: 'Testimoni', href: '#testimonials' },
  { id: 'contact', label: 'Kontak', href: '#contact' },
];

// Carousel Slides Data
export const carouselSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    title: 'Transformasi Digital Bisnis Anda',
    subtitle: 'Solusi Website Professional',
    description:
      'Kami membantu bisnis Anda berkembang dengan solusi digital yang modern, cepat, dan scalable menggunakan teknologi terkini.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    ctaText: 'Mulai Sekarang',
    ctaLink: '#contact',
  },
  {
    id: 'slide-2',
    title: 'E-Commerce yang Powerful',
    subtitle: 'Tingkatkan Penjualan Online',
    description:
      'Platform e-commerce dengan fitur lengkap: payment gateway, inventory management, dan analitik penjualan real-time.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80',
    ctaText: 'Lihat Demo',
    ctaLink: '#portfolio',
  },
  {
    id: 'slide-3',
    title: 'Company Profile Premium',
    subtitle: 'Tampilkan Profesionalitas',
    description:
      'Website company profile yang elegan dan responsif untuk meningkatkan kredibilitas dan kepercayaan klien Anda.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    ctaText: 'Konsultasi Gratis',
    ctaLink: '#contact',
  },
];

// Portfolio Data
export const portfolios: Portfolio[] = [
  {
    id: 'portfolio-1',
    title: 'BPDA Bujapi Jabar',
    category: 'Company Profile',
    image: '/projects/abujapi-profile.png',
    images: ['/projects/abujapi-profile.png', '/projects/abujapi-profile2.png', '/projects/abujapi-profile-3.png'],
    description: 'Website company profile resmi untuk Badan Pengelola Dana Amanah Bujapi Jawa Barat. Menampilkan informasi lengkap organisasi, visi misi, struktur kepengurusan, dan program-program unggulan dengan desain yang profesional dan informatif.',
    technologies: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
    link: 'https://bpdabujapijabar.or.id/',
  },
  {
    id: 'portfolio-2',
    title: 'BPDA Admin CMS',
    category: 'Web App',
    image: '/projects/abujapi-cms1.png',
    images: ['/projects/abujapi-cms1.png', '/projects/abujapi-cms2.png'],
    description: 'Content Management System untuk mengelola konten website BPDA Bujapi Jabar. Dashboard admin yang lengkap dengan fitur CRUD artikel, manajemen media, user management, dan sistem approval workflow untuk publikasi konten.',
    technologies: ['React', 'Laravel', 'MySQL', 'REST API'],
    link: 'https://admin.bpdabujapijabar.or.id/login',
  },
  {
    id: 'portfolio-3',
    title: 'BPDA HRMIS',
    category: 'Web App',
    image: '/projects/abujapi-hrmis-1.png',
    images: ['/projects/abujapi-hrmis-1.png', '/projects/abujapi-hrmis-2.png', '/projects/abujapi-hrmis-3.png'],
    description: 'Human Resource Management Information System untuk pengelolaan data karyawan, absensi, payroll, dan sistem HR terintegrasi. Dilengkapi dengan fitur performance appraisal, leave management, dan reporting dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT Auth'],
    link: 'https://hrmis.bpdabujapijabar.or.id/login',
  },
  {
    id: 'portfolio-4',
    title: 'Batik Merawit',
    category: 'Company Profile',
    image: '/projects/batik-merawit-1.png',
    images: ['/projects/batik-merawit-1.png', '/projects/batik-merawit-2.png'],
    description: 'Website company profile untuk brand batik tradisional Merawit. Menampilkan katalog produk batik dengan galeri yang memukau, sejarah perusahaan, proses pembuatan batik tradisional, dan informasi kontak untuk pemesanan.',
    technologies: ['React', 'Tailwind CSS', 'Next.js'],
    link: 'https://batikmerawit.com/',
  },
  {
    id: 'portfolio-5',
    title: 'Drizy E-Commerce',
    category: 'E-Commerce',
    image: '/projects/drizy-1.png',
    images: ['/projects/drizy-1.png', '/projects/drizy-2.png', '/projects/drizy-3.png'],
    description: 'Platform e-commerce modern untuk produk fashion. Dilengkapi dengan payment gateway terintegrasi, inventory management real-time, customer dashboard, sistem review & rating, dan analytics penjualan komprehensif.',
    technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Redis'],
    link: '#',
  },
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Budi Santoso',
    role: 'CEO',
    company: 'PT. Teknologi Maju',
    content:
      'Ganipedia sangat profesional dalam mengerjakan company profile kami. Hasilnya melebihi ekspektasi dan tim sangat responsif terhadap revisi. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Siti Rahayu',
    role: 'Owner',
    company: 'Butik Cantika',
    content:
      'Website e-commerce yang dibuat sangat user-friendly dan penjualan online kami meningkat 200% setelah launching. Terima kasih Ganipedia!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Ahmad Fadli',
    role: 'Manager',
    company: 'Resto Nusantara',
    content:
      'Sistem POS yang dibuat sangat membantu operasional restoran kami. Fitur reporting-nya lengkap dan mudah digunakan oleh staff.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Maya Putri',
    role: 'Freelance Designer',
    company: 'Self Employed',
    content:
      'Portfolio website saya jadi terlihat sangat profesional. Banyak client baru yang datang setelah melihat portfolio online saya.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
  },
];

// Stats Data
export const stats: Stat[] = [
  { id: 'stat-1', value: '12+', label: 'Project Selesai', icon: 'CheckCircle' },
  { id: 'stat-2', value: '10+', label: 'Klien Puas', icon: 'Users' },
  { id: 'stat-3', value: '3+', label: 'Tahun Pengalaman', icon: 'Award' },
  { id: 'stat-4', value: '24/7', label: 'Support', icon: 'Headphones' },
];

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

// Portfolio Types
export interface Portfolio {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Stats Types
export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

// Carousel Slide Types
export interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

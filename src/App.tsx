import { Navbar, Footer } from '@/components/layout';
import {
  HeroSection,
  ProductsSection,
  ServicesSection,
  PortfolioSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
} from '@/components/sections';
import { ChatWidget, ScrollToTop } from '@/components/ui';
import { LanguageProvider } from '@/contexts';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <ProductsSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <ChatWidget />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;

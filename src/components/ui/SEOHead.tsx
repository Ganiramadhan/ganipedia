import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts';
import type { FC } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEOHead: FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = 'https://ganipedia.com/og-image.jpg',
  url,
}) => {
  const { language } = useLanguage();
  
  const seoData = {
    id: {
      title: title || 'Ganipedia - Jasa Pembuatan Website Professional',
      description: description || 'Kami membantu bisnis Anda berkembang dengan solusi digital yang modern, cepat, dan scalable menggunakan teknologi terkini.',
      keywords: keywords || 'web development, portfolio, company profile, ecommerce, pos, jasa website, website bandung, developer indonesia',
    },
    en: {
      title: title || 'Ganipedia - Professional Website Development Services',
      description: description || 'We help your business grow with modern, fast, and scalable digital solutions using the latest technology.',
      keywords: keywords || 'web development, portfolio, company profile, ecommerce, pos, website services, website development, indonesia developer',
    },
  };

  const currentUrl = url || `https://ganipedia.com/${language}`;
  const { title: seoTitle, description: seoDescription, keywords: seoKeywords } = seoData[language];

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ganipedia',
    description: seoDescription,
    url: 'https://ganipedia.com',
    logo: 'https://ganipedia.com/ganipedia-logo.jpg',
    sameAs: [
      'https://www.instagram.com/ganipedia',
      'https://www.linkedin.com/company/ganipedia',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-812-3456-7890',
      contactType: 'Customer Service',
      availableLanguage: ['Indonesian', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bandung',
      addressCountry: 'ID',
    },
  };

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ganipedia',
    url: 'https://ganipedia.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ganipedia.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Alternate language links */}
      <link rel="alternate" hrefLang="id" href="https://ganipedia.com/id" />
      <link rel="alternate" hrefLang="en" href="https://ganipedia.com/en" />
      <link rel="alternate" hrefLang="x-default" href="https://ganipedia.com/en" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'id' ? 'en_US' : 'id_ID'} />
      <meta property="og:site_name" content="Ganipedia" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="author" content="Ganipedia" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
    </Helmet>
  );
};

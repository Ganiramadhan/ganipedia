import { useState, type FC } from 'react';
import { ExternalLink } from 'lucide-react';
import { portfolios } from '@/data';
import { Section, SectionHeader, Badge } from '@/components/ui';
import { useLanguage } from '@/contexts';

export const PortfolioSection: FC = () => {
  const { t } = useLanguage();
  const allLabel = t('portfolio.all');
  
  const categories = [allLabel, ...new Set(portfolios.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState(allLabel);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredPortfolios =
    activeCategory === allLabel
      ? portfolios
      : portfolios.filter((p) => p.category === activeCategory);

  return (
    <Section id="portfolio" variant="gray">
      <SectionHeader
        subtitle={t('portfolio.subtitle')}
        title={t('portfolio.title')}
        description={t('portfolio.description')}
      />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                : 'bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPortfolios.map((portfolio) => (
          <div
            key={portfolio.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
            onMouseEnter={() => setHoveredItem(portfolio.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Image */}
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-transparent transition-opacity duration-300 ${
                  hoveredItem === portfolio.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-3">
                    {portfolio.link && (
                      <a 
                        href={portfolio.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all duration-300"
                        aria-label="Open external link"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <Badge variant="primary">{portfolio.category}</Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                {portfolio.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {portfolio.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {portfolio.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

import type { FC } from 'react';
import {
  Globe,
  Palette,
  Smartphone,
  Search,
  Wrench,
  Server,
} from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { useLanguage } from '@/contexts';

const iconMap: Record<string, FC<{ className?: string }>> = {
  Globe,
  Palette,
  Smartphone,
  Search,
  Wrench,
  Server,
};

const serviceKeys = ['webDevelopment', 'mobileApp', 'uiux', 'seo', 'maintenance', 'hosting'];
const serviceIcons = ['Globe', 'Smartphone', 'Palette', 'Search', 'Wrench', 'Server'];

export const ServicesSection: FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="services" variant="default">
      <SectionHeader
        subtitle={t('services.subtitle')}
        title={t('services.title')}
        description={t('services.description')}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceKeys.map((key, index) => {
          const IconComponent = iconMap[serviceIcons[index]];
          const title = t(`services.items.${key}.title`);
          const description = t(`services.items.${key}.description`);
          
          return (
            <Card
              key={key}
              variant="bordered"
              hover
              className="group text-center"
            >
              <div className="w-16 h-16 bg-linear-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
                {IconComponent && (
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {description}
              </p>
            </Card>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-linear-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('services.customCta.title')}
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('services.customCta.description')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
          >
            {t('services.customCta.button')}
          </a>
        </div>
      </div>
    </Section>
  );
};

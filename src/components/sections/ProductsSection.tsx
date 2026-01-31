import type { FC } from 'react';
import {
  Briefcase,
  Building2,
  ShoppingCart,
  Monitor,
  Code2,
  Rocket,
  Check,
  Star,
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';
import { useLanguage } from '@/contexts';

const iconMap: Record<string, FC<{ className?: string }>> = {
  Briefcase,
  Building2,
  ShoppingCart,
  Monitor,
  Code2,
  Rocket,
};

const productKeys = ['portfolio', 'companyProfile', 'ecommerce', 'pos', 'customWebapp', 'landingPage'];
const productIcons = ['Briefcase', 'Building2', 'ShoppingCart', 'Monitor', 'Code2', 'Rocket'];
const popularIndex = 1; // Company Profile is popular

export const ProductsSection: FC = () => {
  const { t } = useLanguage();

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="products" variant="gray">
      <SectionHeader
        subtitle={t('products.subtitle')}
        title={t('products.title')}
        description={t('products.description')}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productKeys.map((key, index) => {
          const IconComponent = iconMap[productIcons[index]];
          const isPopular = index === popularIndex;
          
          // Access nested translation data
          const title = t(`products.items.${key}.title`);
          const description = t(`products.items.${key}.description`);
          const price = t(`products.items.${key}.price`);
          
          const featuresKey = `products.items.${key}.features`;
          const features = [0, 1, 2, 3, 4, 5, 6, 7].map(i => 
            t(`${featuresKey}.${i}`)
          ).filter(f => !f.includes('products.items')); 
          
          return (
            <Card
              key={key}
              variant="elevated"
              hover
              className={`relative flex flex-col h-full ${
                isPopular ? 'ring-2 ring-primary-500 ring-offset-4' : ''
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="primary">
                    <Star className="w-3 h-3 mr-1" />
                    {t('products.popular')}
                  </Badge>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-linear-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                  {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-primary-600 font-semibold text-sm">
                    {price}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {description}
              </p>

              <ul className="space-y-3 mb-6 flex-grow">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={isPopular ? 'primary' : 'outline'}
                className="w-full mt-auto"
                onClick={handleContactClick}
              >
                {t('products.consultFree')}
              </Button>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

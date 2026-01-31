import { useState, type FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { useLanguage } from '@/contexts';

export const FAQSection: FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Get FAQ items by accessing each index individually
  const faqItems = [0, 1, 2, 3, 4, 5].map(i => ({
    question: t(`faq.items.${i}.question`),
    answer: t(`faq.items.${i}.answer`),
  })).filter(item => !item.question.includes('faq.items')); // Filter out missing translations

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" variant="default">
      <SectionHeader
        subtitle={t('faq.subtitle')}
        title={t('faq.title')}
        description={t('faq.description')}
      />

      <div className="max-w-3xl mx-auto">
        {faqItems.map((faq, index) => (
          <div
            key={index}
            className="border-b border-slate-200 last:border-b-0"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-6 flex items-center justify-between text-left group"
            >
              <h3
                className={`text-lg font-semibold pr-8 transition-colors ${
                  openIndex === index ? 'text-primary-600' : 'text-slate-900 group-hover:text-primary-600'
                }`}
              >
                {faq.question}
              </h3>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-primary-600 text-white rotate-180'
                    : 'bg-slate-100 text-slate-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

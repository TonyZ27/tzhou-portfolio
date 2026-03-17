import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export interface TocItem {
  id: string;
  label: LocalizedText;
}

import type { LocalizedText } from '../../types/project';

interface CaseStudySidebarProps {
  className?: string;
  tocItems?: TocItem[];
}

const translations = {
  en: {
    back: 'Back',
    goBack: 'Go back',
  },
  zh: {
    back: '返回',
    goBack: '返回',
  },
};

// Default TOC items for AI Voice Assistant page (backward compatible)
const defaultTocItems = (lang: 'en' | 'zh'): TocItem[] => [
  { id: 'overview', label: { en: '1-Minute Overview', zh: '一分钟速览' } },
  { id: 'problem', label: { en: 'Problem', zh: 'Problem' } },
  { id: 'mental-model', label: { en: 'Mental Model', zh: 'Mental Model' } },
  { id: 'architecture', label: { en: 'Architecture', zh: 'Architecture' } },
  { id: 'solution', label: { en: 'Solution', zh: 'Solution' } },
  { id: 'takeaways', label: { en: 'Takeaways', zh: 'Takeaways' } },
];

export function CaseStudySidebar({ className, tocItems }: CaseStudySidebarProps) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('');
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  // Use provided tocItems or fall back to default
  const items = tocItems || defaultTocItems(currentLanguage);

  useEffect(() => {
    // Set up IntersectionObserver to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top
        threshold: 0,
      }
    );

    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col h-screen sticky top-0 w-45 border-r border-muted-border p-12 gap-12 shrink-0 ${className || ''}`}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors duration-200"
          aria-label={t.goBack}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-sans text-base">{t.back}</span>
        </button>

        {/* Table of Contents */}
        <nav className="flex flex-col gap-4">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`font-sans text-sm transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label[currentLanguage]}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Back Bar */}
      <div className="lg:hidden flex items-center px-4 py-3 border-b border-border bg-background">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors duration-200"
          aria-label={t.goBack}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-sans text-base">{t.back}</span>
        </button>
      </div>
    </>
  );
}

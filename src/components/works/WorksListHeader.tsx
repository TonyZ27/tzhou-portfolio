import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';

interface WorksListHeaderProps {
  className?: string;
}

const translations = {
  en: {
    project: 'Project',
    company: 'Company',
    type: 'Type',
    year: 'Year',
  },
  zh: {
    project: '项目',
    company: '公司',
    type: '类型',
    year: '年份',
  },
};

export function WorksListHeader({ className }: WorksListHeaderProps) {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div
      className={cn(
        'font-sans text-sm text-muted-foreground gap-x-4 gap-y-4 grid grid-cols-9 pb-2 pt-4 relative w-full',
        className
      )}
    >
      {/* Project - 4 columns */}
      <div className="col-span-4 flex flex-col justify-center relative">
        <span className="leading-normal">{t.project}</span>
      </div>
      {/* Company - 2 columns */}
      <div className="col-span-2 flex flex-col justify-center relative">
        <span className="leading-normal">{t.company}</span>
      </div>
      {/* Type - 2 columns, hidden on mobile */}
      <div className="hidden md:flex col-span-2 flex-col justify-center relative">
        <span className="leading-normal">{t.type}</span>
      </div>
      {/* Year - 1 column */}
      <div className="col-span-5 md:col-span-1 flex flex-col justify-center relative">
        <span className="leading-normal font-mono">{t.year}</span>
      </div>
    </div>
  );
}

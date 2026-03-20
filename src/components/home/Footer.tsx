import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';

const translations = {
  en: {
    creatorLabel: 'CREATOR',
    creatorValue: 'T.ZHOU',
    yearLabel: 'YEAR',
    yearValue: '@2026',
    viewMoreLabel: 'VIEW MORE',
    scrollValue: 'SCROLL',
  },
  zh: {
    creatorLabel: '创作者',
    creatorValue: 'T.ZHOU',
    yearLabel: '年份',
    yearValue: '@2026',
    viewMoreLabel: '查看更多',
    scrollValue: '滚动',
  },
};

/** Footer displayed at the bottom of the project list panel. */
export function Footer({ className }: { className?: string }) {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className={cn('flex flex-col gap-4 pt-6 px-6 pb-12 shrink-0', className)}>
      {/* Top divider */}
      <div className="h-px w-full bg-muted-border" />

      {/* Three-column row */}
      <div className="flex items-start justify-between">
        {/* CREATOR */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-primary uppercase">{t.creatorLabel}</span>
          <span className="font-mono text-sm text-foreground tracking-[1.3px] uppercase">
            {t.creatorValue}
          </span>
        </div>

        {/* YEAR */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-muted-foreground uppercase">{t.yearLabel}</span>
          <span className="font-mono text-sm text-foreground uppercase">{t.yearValue}</span>
        </div>

        {/* VIEW MORE + SCROLL indicator */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-muted-foreground uppercase">
            {t.viewMoreLabel}
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-foreground tracking-[1.04px] uppercase">
              {t.scrollValue}
            </span>
            {/* Scroll bar indicator: 2px × 16px, animated fill sweeps bottom→top */}
            <div className="h-4 w-0.5 bg-muted-foreground overflow-hidden relative">
              <div className="absolute inset-0 bg-primary animate-scroll-guide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

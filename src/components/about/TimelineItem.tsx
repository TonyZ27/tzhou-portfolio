import { useLanguage } from '../../contexts/LanguageContext';
import type { LocalizedText } from '../../types/project';

interface TimelineItemProps {
  title: LocalizedText;
  subtitle: LocalizedText;
}

export function TimelineItem({ title, subtitle }: TimelineItemProps) {
  const { currentLanguage } = useLanguage();

  return (
    <div className="flex gap-4 items-center w-full overflow-hidden pr-4">
      <div className="flex flex-col gap-1 items-start min-w-0 flex-1">
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans font-normal text-[15px] text-foreground leading-none">
            {title[currentLanguage]}
          </p>
        </div>
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans font-normal text-[13px] text-muted-foreground leading-none">
            {subtitle[currentLanguage]}
          </p>
        </div>
      </div>
    </div>
  );
}

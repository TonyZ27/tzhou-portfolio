import { useLanguage } from '../../contexts/LanguageContext';
import type { LocalizedText } from '../../types/project';

interface SkillItemProps {
  title: LocalizedText;
  description: LocalizedText;
  colorClass: string;
}

export function SkillItem({ title, description, colorClass }: SkillItemProps) {
  const { currentLanguage } = useLanguage();

  return (
    <div className="flex gap-4 items-center w-full overflow-hidden pr-4">
      <div className={`${colorClass} rounded-[8px] shrink-0 size-12`} />
      <div className="flex flex-col gap-1 items-start min-w-0 flex-1">
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans text-base text-foreground leading-none">
            {title[currentLanguage]}
          </p>
        </div>
        <div className="flex flex-col justify-center w-full">
          <p className="font-sans text-sm text-muted-foreground leading-none">
            {description[currentLanguage]}
          </p>
        </div>
      </div>
    </div>
  );
}

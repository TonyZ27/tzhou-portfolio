import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';

interface LanguageSwitchProps {
  orientation?: 'vertical' | 'horizontal';
}

export function LanguageSwitch({ orientation = 'horizontal' }: LanguageSwitchProps) {
  const { currentLanguage, toggleLanguage } = useLanguage();
  const isZh = currentLanguage === 'zh';

  const isVertical = orientation === 'vertical';

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        'relative bg-primary p-0.5 rounded-lg flex',
        isVertical ? 'flex-col w-8' : 'flex-row h-8'
      )}
      aria-label={isZh ? 'Switch to English' : '切换到中文'}
    >
      {/* Sliding indicator */}
      <div
        className={cn(
          'absolute w-7 h-7 bg-primary-foreground rounded-md transition-transform duration-300 ease-in-out',
          isVertical
            ? isZh
              ? 'translate-y-7'
              : 'translate-y-0'
            : isZh
              ? 'translate-x-7'
              : 'translate-x-0'
        )}
        style={{
          top: '2px',
          left: '2px',
        }}
      />

      {/* EN Label */}
      <div
        className={cn(
          'relative z-10 flex items-center justify-center w-7 h-7 text-xs font-semibold transition-colors duration-300',
          isZh ? 'text-muted-primary-foreground' : 'text-primary'
        )}
      >
        EN
      </div>

      {/* 中 Label */}
      <div
        className={cn(
          'relative z-10 flex items-center justify-center w-7 h-7 text-xs font-semibold transition-colors duration-300',
          isZh ? 'text-primary' : 'text-muted-primary-foreground'
        )}
      >
        中
      </div>
    </button>
  );
}

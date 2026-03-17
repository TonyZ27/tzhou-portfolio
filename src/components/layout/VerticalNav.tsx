import { Home, Briefcase, CircleUser } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageSwitch } from './LanguageSwitch';

interface VerticalNavProps {
  activeTab?: 'home' | 'works' | 'about';
}

const translations = {
  en: {
    home: 'Home',
    works: 'Works',
    about: 'About',
  },
  zh: {
    home: '首页',
    works: '作品',
    about: '关于',
  },
};

export function VerticalNav({ activeTab = 'home' }: VerticalNavProps) {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();

  const t = translations[currentLanguage];

  const navItems = [
    { id: 'home', icon: Home, label: t.home, path: '/' },
    { id: 'works', icon: Briefcase, label: t.works, path: '/works' },
    { id: 'about', icon: CircleUser, label: t.about, path: '/about' },
  ] as const;

  return (
    <nav className="hidden lg:flex bg-background border-r border-border flex-col gap-6 h-screen items-center py-6 w-16 shrink-0 sticky top-0">
      {/* Logo */}
      <div className="flex h-[70px] items-center justify-center relative w-[17px]">
        <div className="flex-none rotate-90">
          <span className="font-sans font-semibold h-[17px] leading-normal relative text-sm text-foreground w-[70px] whitespace-nowrap">
            T.ZHOU
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-border h-px w-[29px]" />

      {/* Navigation Items */}
      <div className="flex flex-1 flex-col gap-2 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex flex-col gap-1 items-center justify-center w-10 h-10 rounded-md transition-colors duration-200',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>

      {/* Language Switch */}
      <div className="flex flex-col items-center">
        <LanguageSwitch orientation="vertical" />
      </div>
    </nav>
  );
}

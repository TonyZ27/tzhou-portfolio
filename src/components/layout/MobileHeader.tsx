import { Link } from 'react-router-dom';
import { LanguageSwitch } from './LanguageSwitch';

export function MobileHeader() {
  return (
    <header className="lg:hidden sticky top-0 z-50 bg-background border-b border-border px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-sans font-semibold text-base">T.ZHOU</Link>

        {/* Language Switch */}
        <LanguageSwitch orientation="horizontal" />
      </div>
    </header>
  );
}

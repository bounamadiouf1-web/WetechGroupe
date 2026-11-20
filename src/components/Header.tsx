import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Language, SiteContent } from '../types/cms';

interface HeaderProps {
  content: SiteContent;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

export const Header: React.FC<HeaderProps> = ({
  content,
  language,
  onLanguageChange,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '#services', label: content.nav.services[language] },
    { href: '#projects', label: content.nav.projects[language] },
    { href: '#leadership', label: content.nav.leadership[language] },
    { href: '#contact', label: content.nav.partnerships[language] },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand lockup */}
        <a
          href="#top"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] rounded-md"
        >
          <img
            src={MEDIA_ASSETS.wetechLogo}
            alt="WE-TECH"
            className="h-9 w-9 rounded-lg object-cover border border-slate-200 shrink-0"
            referrerPolicy="no-referrer"
          />
          <span className="font-display text-lg font-bold tracking-tight text-[#0B1F1A]">
            {content.brand.name}
          </span>
        </a>

        {/* Zone 2: 4 clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 hover:text-[#0B1F1A] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#047857] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher + Primary CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <div
            className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/80"
            role="group"
            aria-label="Language selector"
          >
            {LANGUAGES.map((lang) => {
              const active = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-[#0B1F1A] shadow-xs'
                      : 'text-slate-600 hover:text-[#0B1F1A]'
                  }`}
                >
                  {lang.label}
                </button>
              );
            })}
          </div>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-white bg-[#047857] hover:bg-[#065F46] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#047857]"
          >
            {content.nav.contactCta[language]}
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/80">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => onLanguageChange(lang.code)}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  language === lang.code
                    ? 'bg-white text-[#0B1F1A] shadow-xs'
                    : 'text-slate-600'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#047857] rounded-lg"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#047857] rounded-lg"
            >
              {content.nav.contactCta[language]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

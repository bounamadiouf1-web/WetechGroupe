import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Language, SiteContent } from '../types/cms';

interface FooterProps {
  content: SiteContent;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({
  content,
  language,
  onLanguageChange,
}) => {
  return (
    <footer className="bg-[#0B1F1A] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={MEDIA_ASSETS.wetechLogo}
                alt="WE-TECH"
                className="h-9 w-9 rounded-lg object-cover bg-white"
                referrerPolicy="no-referrer"
              />
              <span className="font-display text-lg font-bold text-white">
                {content.brand.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {content.footer.tagline[language]}
            </p>
            <p className="text-xs text-slate-400">
              {content.brand.location[language]}
            </p>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-sm">
            <div className="font-display font-semibold text-white mb-3">
              {content.nav.projects[language]}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {content.projectsSection.platforms.map((p) => (
                <a
                  key={p.id}
                  href="#projects"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 text-sm">
            <div className="font-display font-semibold text-white">
              Bissau Digital
            </div>
            <div>
              <a
                href={content.bissauDigital.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#38BDF8] hover:underline"
              >
                <span>{content.footer.bissauDigitalLink[language]}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="flex items-center gap-2 pt-1">
              {(['pt', 'fr', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-1 text-xs rounded border transition-colors cursor-pointer uppercase ${
                    language === lang
                      ? 'border-[#047857] bg-[#047857]/20 text-white font-semibold'
                      : 'border-white/15 text-slate-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{content.footer.copyright[language]}</p>
          <p>{content.leadership.ceoName} · {content.leadership.ceoRole[language]}</p>
        </div>
      </div>
    </footer>
  );
};

import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { DEFAULT_CONTENT } from './data/defaultContent';
import { Language } from './types/cms';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SynergySection } from './components/SynergySection';
import { LeadershipSection } from './components/LeadershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const LANG_STORAGE_KEY = 'wetech_lang_v1';

const SEO_META: Record<Language, { htmlLang: string; title: string; description: string }> = {
  pt: {
    htmlLang: 'pt-PT',
    title: 'WE-TECH — Tecnologia & Bissau Digital | Guiné-Bissau',
    description:
      'WE-TECH em Bissau: serviços digitais Bissau Digital e plataformas BindiCumpra, Kummy, Bissau Go e FarmaGo na Guiné-Bissau.',
  },
  fr: {
    htmlLang: 'fr',
    title: 'WE-TECH — Technologie & Bissau Digital | Guinée-Bissau',
    description:
      'WE-TECH à Bissau : services numériques Bissau Digital et plateformes BindiCumpra, Kummy, Bissau Go et FarmaGo en Guinée-Bissau.',
  },
  en: {
    htmlLang: 'en',
    title: 'WE-TECH — Digital Technology & Bissau Digital | Guinea-Bissau',
    description:
      'WE-TECH in Bissau: Bissau Digital engineering services and local platforms BindiCumpra, Kummy, Bissau Go, and FarmaGo.',
  },
};

export default function App() {
  // Always initialize in European Portuguese ('pt') by default on first visit
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = sessionStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'pt' || saved === 'fr' || saved === 'en') {
        return saved;
      }
    } catch {
      // Ignore storage access restrictions
    }
    return 'pt';
  });

  const content = DEFAULT_CONTENT;

  useEffect(() => {
    const meta = SEO_META[language];
    document.documentElement.lang = meta.htmlLang;
    document.title = meta.title;

    const currentUrl = window.location.origin + window.location.pathname;

    const setMetaTag = (selector: string, contentValue: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', contentValue);
      }
    };

    setMetaTag('meta[name="description"]', meta.description);
    setMetaTag('meta[property="og:title"]', meta.title);
    setMetaTag('meta[property="og:description"]', meta.description);
    setMetaTag('meta[name="twitter:title"]', meta.title);
    setMetaTag('meta[name="twitter:description"]', meta.description);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', currentUrl);

    try {
      sessionStorage.setItem(LANG_STORAGE_KEY, language);
    } catch {
      // Ignore
    }
  }, [language]);

  const handleGoToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B1F1A]">
        <Header
          content={content}
          language={language}
          onLanguageChange={setLanguage}
        />

        <main className="flex-1 overflow-x-hidden">
          <HeroSection content={content} language={language} />
          <ServicesSection content={content} language={language} />
          <ProjectsSection
            content={content}
            language={language}
            onSelectInterest={handleGoToContact}
          />
          <SynergySection content={content} language={language} />
          <LeadershipSection content={content} language={language} />
          <ContactSection content={content} language={language} />
        </main>

        <Footer
          content={content}
          language={language}
          onLanguageChange={setLanguage}
        />
      </div>
    </MotionConfig>
  );
}

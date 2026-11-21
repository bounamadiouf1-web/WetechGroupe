import type { MediaAssetKey } from '../data/mediaAssets';

export type Language = 'pt' | 'fr' | 'en';

export type LocalizedText = {
  pt: string;
  fr: string;
  en: string;
};

export interface ServiceItem {
  id: string;
  number: string;
  title: LocalizedText;
  summary: LocalizedText;
  deliverables: {
    pt: string[];
    fr: string[];
    en: string[];
  };
  highlight: LocalizedText;
}

export interface ProjectPlatform {
  id: string;
  name: string;
  category: LocalizedText;
  modelReference: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  forSideA: {
    label: LocalizedText;
    detail: LocalizedText;
  };
  forSideB: {
    label: LocalizedText;
    detail: LocalizedText;
  };
  payments: LocalizedText;
  businessModel: LocalizedText;
  status: LocalizedText;
  logoKey?: MediaAssetKey;
  visualKey?: MediaAssetKey;
  visualPendingNote?: LocalizedText;
  websiteUrl?: string;
  imageAlt: LocalizedText;
  accentHex: string;
}

export interface SynergyPillar {
  id: string;
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface MetricItem {
  value: string;
  label: LocalizedText;
  context: LocalizedText;
}

export interface SiteContent {
  brand: {
    name: string;
    location: LocalizedText;
  };
  nav: {
    services: LocalizedText;
    projects: LocalizedText;
    leadership: LocalizedText;
    partnerships: LocalizedText;
    contactCta: LocalizedText;
  };
  hero: {
    kicker: LocalizedText;
    headline: LocalizedText;
    subheadline: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
    imageKey: MediaAssetKey;
    imageAlt: LocalizedText;
    metrics: MetricItem[];
  };
  bissauDigital: {
    kicker: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    websiteUrl: string;
    websiteLabel: LocalizedText;
    trustNote: LocalizedText;
    trackRecordTitle: LocalizedText;
    trackRecordItems: {
      pt: string[];
      fr: string[];
      en: string[];
    };
    imageKey: MediaAssetKey;
    imageAlt: LocalizedText;
    services: ServiceItem[];
  };
  projectsSection: {
    kicker: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    allFilterLabel: LocalizedText;
    tableHeaders: {
      project: LocalizedText;
      what: LocalizedText;
      audience: LocalizedText;
      status: LocalizedText;
    };
    platforms: ProjectPlatform[];
  };
  synergy: {
    kicker: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    pillars: SynergyPillar[];
  };
  leadership: {
    kicker: LocalizedText;
    title: LocalizedText;
    ceoName: string;
    ceoRole: LocalizedText;
    photoKey: MediaAssetKey;
    bioHeading: LocalizedText;
    bioParagraphs: {
      pt: string[];
      fr: string[];
      en: string[];
    };
    bioPendingNotice: LocalizedText;
  };
  contact: {
    kicker: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    email: string;
    phones: string[];
    address: LocalizedText;
    labels: {
      phones: LocalizedText;
      email: LocalizedText;
      address: LocalizedText;
    };
  };
  footer: {
    tagline: LocalizedText;
    copyright: LocalizedText;
    bissauDigitalLink: LocalizedText;
  };
}

export interface PartnershipInquiry {
  id: string;
  name: string;
  organization: string;
  email: string;
  interest: string;
  message: string;
  language: Language;
  createdAt: string;
}

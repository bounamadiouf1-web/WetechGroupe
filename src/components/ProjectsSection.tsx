import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, CreditCard, MapPin, Users } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Language, ProjectPlatform, SiteContent } from '../types/cms';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  content: SiteContent;
  language: Language;
  onSelectInterest: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  content,
  language,
  onSelectInterest,
}) => {
  const { projectsSection } = content;
  const [selectedId, setSelectedId] = useState<string>('all');

  const activePlatform: ProjectPlatform | undefined = projectsSection.platforms.find(
    (p) => p.id === selectedId
  );

  const labels = {
    payments: { pt: 'Pagamentos', fr: 'Paiements', en: 'Payments' },
    model: { pt: 'Modelo', fr: 'Modèle', en: 'Model' },
    status: { pt: 'Estado atual', fr: 'Avancement', en: 'Current Status' },
    explore: { pt: 'Ver detalhes', fr: 'Voir détails', en: 'View details' },
    visitSite: { pt: 'Visitar site', fr: 'Visiter le site', en: 'Visit website' },
    partnerCta: {
      pt: 'Propor parceria neste projeto',
      fr: 'Proposer un partenariat sur ce projet',
      en: 'Discuss partnership for this platform',
    },
  };

  const renderPlatformVisual = (platform: ProjectPlatform, compact = false) => {
    if (platform.visualKey) {
      return (
        <div
          className={`w-full h-full bg-[#F8FAFC] flex items-center justify-center overflow-hidden ${
            compact ? 'min-h-[320px] sm:min-h-[380px]' : 'min-h-[380px] lg:min-h-[480px]'
          }`}
        >
          <ResilientImage
            src={MEDIA_ASSETS[platform.visualKey]}
            alt={platform.imageAlt[language]}
            className="w-full h-full max-h-[460px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      );
    }

    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-emerald-50/60 via-white to-cyan-50/70 flex flex-col items-center justify-center p-8 text-center ${
          compact ? 'min-h-[280px] sm:min-h-[380px]' : 'min-h-[340px] lg:min-h-[460px]'
        }`}
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-[260px] w-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-[1.04]">
          <ResilientImage
            src={MEDIA_ASSETS[platform.logoKey]}
            alt={platform.imageAlt[language]}
            className="w-full h-auto max-h-28 object-contain"
          />
        </div>
        {platform.visualPendingNote && (
          <p className="text-xs font-medium text-slate-500 max-w-[26ch] leading-relaxed">
            {platform.visualPendingNote[language]}
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="bg-white py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Slide Left) + Interactive Filter Controls (Slide Right) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs sm:text-sm font-medium text-[#047857] mb-3">
              {projectsSection.kicker[language]}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F1A] tracking-tight text-balance mb-3">
              {projectsSection.title[language]}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {projectsSection.subtitle[language]}
            </p>
          </motion.div>

          {/* Interactive Filter Bar */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200/80 self-start lg:self-end"
            role="tablist"
            aria-label="Filter platforms"
          >
            <motion.button
              type="button"
              role="tab"
              aria-selected={selectedId === 'all'}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedId('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedId === 'all'
                  ? 'bg-white text-[#0B1F1A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1F1A]'
              }`}
            >
              {projectsSection.allFilterLabel[language]}
            </motion.button>
            {projectsSection.platforms.map((platform) => (
              <motion.button
                key={platform.id}
                type="button"
                role="tab"
                aria-selected={selectedId === platform.id}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedId(platform.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedId === platform.id
                    ? 'bg-white text-[#0B1F1A] shadow-xs'
                    : 'text-slate-600 hover:text-[#0B1F1A]'
                }`}
              >
                {platform.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {selectedId === 'all' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* 2x2 Grid with alternating Slide-In Left / Slide-In Right + Hover Pop-Out */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
                {projectsSection.platforms.map((platform, idx) => (
                  <motion.article
                    key={platform.id}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -36 : 36, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-stretch hover:border-slate-300 transition-colors"
                  >
                    <div className="sm:col-span-5 border-b sm:border-b-0 sm:border-r border-slate-200/80 overflow-hidden">
                      {renderPlatformVisual(platform, true)}
                    </div>

                    <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-5">
                      <div>
                        <div className="h-12 mb-4 flex items-center">
                          <img
                            src={MEDIA_ASSETS[platform.logoKey]}
                            alt={`${platform.name} logo`}
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                            className="h-11 w-auto max-w-[180px] object-contain rounded-md"
                          />
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                          <span style={{ color: platform.accentHex }} className="font-semibold">
                            {platform.category[language]}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{platform.modelReference[language]}</span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-[#0B1F1A] mb-2">
                          {platform.name}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          {platform.description[language]}
                        </p>

                        <div className="grid grid-cols-1 gap-2.5 pt-3 border-t border-slate-100">
                          <div>
                            <div className="text-xs font-semibold text-[#0B1F1A]">
                              {platform.forSideA.label[language]}
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                              {platform.forSideA.detail[language]}
                            </p>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#0B1F1A]">
                              {platform.forSideB.label[language]}
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                              {platform.forSideB.detail[language]}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 space-y-3">
                        <span className="block text-xs text-slate-600 font-medium">
                          {platform.status[language]}
                        </span>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          {platform.websiteUrl ? (
                            <motion.a
                              href={platform.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.03, y: -1 }}
                              whileTap={{ scale: 0.97 }}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#047857] hover:bg-[#065F46] rounded-lg transition-colors whitespace-nowrap shrink-0"
                            >
                              <span>{labels.visitSite[language]}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </motion.a>
                          ) : (
                            <span />
                          )}

                          <motion.button
                            type="button"
                            whileHover={{ x: 3 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setSelectedId(platform.id)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] cursor-pointer whitespace-nowrap shrink-0"
                          >
                            <span>{labels.explore[language]}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* At-a-Glance Comparison Matrix (Slide Up + Pop) */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-[#F8FAFC]"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs font-semibold text-slate-500 bg-slate-50">
                        <th className="py-3.5 px-5">{projectsSection.tableHeaders.project[language]}</th>
                        <th className="py-3.5 px-5">{projectsSection.tableHeaders.what[language]}</th>
                        <th className="py-3.5 px-5">{projectsSection.tableHeaders.audience[language]}</th>
                        <th className="py-3.5 px-5">{projectsSection.tableHeaders.status[language]}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm bg-white">
                      {projectsSection.platforms.map((platform) => (
                        <tr
                          key={platform.id}
                          onClick={() => setSelectedId(platform.id)}
                          className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                        >
                          <td className="py-4 px-5 font-display font-semibold text-[#0B1F1A] whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <img
                                src={MEDIA_ASSETS[platform.logoKey]}
                                alt={`${platform.name} logo`}
                                loading="lazy"
                                className="h-7 w-10 object-contain rounded"
                              />
                              <span>{platform.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-5 text-slate-600">
                            {platform.tagline[language]}
                          </td>
                          <td className="py-4 px-5 text-slate-600 whitespace-nowrap">
                            {platform.category[language]}
                          </td>
                          <td className="py-4 px-5 text-xs font-medium text-[#047857] tabular-nums">
                            {platform.status[language]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            activePlatform && (
              /* Spotlight Pop-Out entrance */
              <motion.div
                key={activePlatform.id}
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200">
                  {renderPlatformVisual(activePlatform, false)}
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 bg-white flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <div className="h-14 mb-4 flex items-center">
                        <img
                          src={MEDIA_ASSETS[activePlatform.logoKey]}
                          alt={`${activePlatform.name} logo`}
                          referrerPolicy="no-referrer"
                          className="h-12 w-auto max-w-[210px] object-contain"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                        <span style={{ color: activePlatform.accentHex }} className="font-semibold">
                          {activePlatform.category[language]}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{activePlatform.modelReference[language]}</span>
                      </div>
                      <h3 className="font-display text-3xl font-bold text-[#0B1F1A] mb-3">
                        {activePlatform.name}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {activePlatform.description[language]}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F1A]">
                          <Users className="w-4 h-4 text-[#047857]" />
                          <span>{activePlatform.forSideA.label[language]}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {activePlatform.forSideA.detail[language]}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F1A]">
                          <MapPin className="w-4 h-4 text-[#0284C7]" />
                          <span>{activePlatform.forSideB.label[language]}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {activePlatform.forSideB.detail[language]}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F1A] mb-1">
                          <CreditCard className="w-4 h-4 text-[#D97706]" />
                          <span>{labels.payments[language]}</span>
                        </div>
                        <p className="text-sm text-slate-600">{activePlatform.payments[language]}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#0B1F1A] mb-1">
                          {labels.model[language]}
                        </div>
                        <p className="text-sm text-slate-600">{activePlatform.businessModel[language]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="block text-xs text-slate-500">{labels.status[language]}</span>
                      <span className="text-sm font-semibold text-[#047857]">
                        {activePlatform.status[language]}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {activePlatform.websiteUrl && (
                        <motion.a
                          href={activePlatform.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03, y: -1 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>{labels.visitSite[language]}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.a>
                      )}

                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => onSelectInterest(activePlatform.name)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#047857] hover:bg-[#065F46] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>{labels.partnerCta[language]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

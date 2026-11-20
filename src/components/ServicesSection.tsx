import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, Check } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Language, SiteContent } from '../types/cms';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  content: SiteContent;
  language: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ content, language }) => {
  const { bissauDigital } = content;
  const [activeServiceId, setActiveServiceId] = useState<string>(
    bissauDigital.services[0]?.id || 'web-dev'
  );

  return (
    <section id="services" className="bg-[#F8FAFC] py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium text-[#0284C7] mb-3">
            {bissauDigital.kicker[language]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F1A] tracking-tight text-balance mb-4">
            {bissauDigital.title[language]}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {bissauDigital.subtitle[language]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Slide In from Left + Hover Pop */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 overflow-hidden"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <ResilientImage
                src={MEDIA_ASSETS[bissauDigital.imageKey]}
                alt={bissauDigital.imageAlt[language]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-[#0B1F1A] mb-3">
                  {bissauDigital.trackRecordTitle[language]}
                </h3>
                <ul className="space-y-2.5">
                  {bissauDigital.trackRecordItems[language].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <Check className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-slate-100 space-y-3">
                <p className="text-xs text-slate-500">
                  {bissauDigital.trustNote[language]}
                </p>
                <motion.a
                  href={bissauDigital.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>{bissauDigital.websiteLabel[language]}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Slide In from Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 divide-y divide-slate-200 bg-white rounded-2xl border border-slate-200 overflow-hidden"
          >
            {bissauDigital.services.map((service) => {
              const isOpen = activeServiceId === service.id;
              return (
                <div key={service.id} className="transition-colors">
                  <motion.button
                    type="button"
                    onClick={() => setActiveServiceId(isOpen ? '' : service.id)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-sm font-medium text-[#047857] tabular-nums shrink-0">
                        {service.number}.
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-[#0B1F1A]">
                        {service.title[language]}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#047857]' : ''
                      }`}
                    />
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-7 pl-14 sm:pl-16 space-y-4">
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {service.summary[language]}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                            {service.deliverables[language].map((deliv, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-sm text-slate-700"
                              >
                                <span className="text-[#0284C7] font-semibold mt-0.5" aria-hidden="true">
                                  ·
                                </span>
                                <span>{deliv}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-xs font-medium text-[#047857] pt-1">
                            {service.highlight[language]}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Language, SiteContent } from '../types/cms';
import { ResilientImage } from './ResilientImage';

interface LeadershipSectionProps {
  content: SiteContent;
  language: Language;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  content,
  language,
}) => {
  const { leadership } = content;

  return (
    <section id="leadership" className="bg-[#F8FAFC] py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait Slot Column: Slide In from Left + Pop */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ y: -4, scale: 1.01 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
              <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-white border border-slate-100">
                <ResilientImage
                  src={MEDIA_ASSETS[leadership.photoKey]}
                  alt={`${leadership.ceoName} — ${leadership.ceoRole[language]}`}
                  className="w-full h-full object-contain object-bottom"
                />
              </div>

              <div className="pt-4">
                <h3 className="font-display text-lg font-bold text-[#0B1F1A]">
                  {leadership.ceoName}
                </h3>
                <p className="text-xs font-medium text-[#047857]">
                  {leadership.ceoRole[language]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Biography Column: Slide In from Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#047857] mb-3">
                {leadership.kicker[language]}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F1A] tracking-tight text-balance mb-3">
                {leadership.title[language]}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span className="font-semibold text-[#0B1F1A]">{leadership.ceoName}</span>
                <span aria-hidden="true">·</span>
                <span>{leadership.ceoRole[language]}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#0B1F1A]">
                {leadership.bioHeading[language]}
              </h3>
              {leadership.bioParagraphs[language].map((paragraph, idx) => (
                <p key={idx} className="text-base text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200/70">
              <p className="text-xs text-slate-500">
                {leadership.bioPendingNotice[language]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

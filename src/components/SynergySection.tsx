import React from 'react';
import { motion } from 'motion/react';
import { Language, SiteContent } from '../types/cms';

interface SynergySectionProps {
  content: SiteContent;
  language: Language;
}

export const SynergySection: React.FC<SynergySectionProps> = ({ content, language }) => {
  const { synergy } = content;

  return (
    <section className="bg-[#071A1C] text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium text-[#34D399] tracking-[0.01em] mb-3">
            {synergy.kicker[language]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance mb-4">
            {synergy.title[language]}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed tracking-[0.01em]">
            {synergy.subtitle[language]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {synergy.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 flex flex-col justify-between space-y-5 hover:border-white/25 transition-colors"
            >
              <div>
                <span className="font-mono text-sm font-medium text-[#F59E0B] tabular-nums block mb-4">
                  {pillar.number}.
                </span>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {pillar.title[language]}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed tracking-[0.01em]">
                  {pillar.description[language]}
                </p>
              </div>
              <div
                className="h-[2px] w-12 bg-gradient-to-r from-[#047857] via-[#06B6D4] to-[#F59E0B]"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

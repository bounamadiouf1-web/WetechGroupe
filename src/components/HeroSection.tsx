import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Language, SiteContent } from '../types/cms';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  content: SiteContent;
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content, language }) => {
  const { hero } = content;

  return (
    <section id="top" className="bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Slide In from Left */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center py-2"
          >
            <p className="text-xs sm:text-sm font-medium text-[#047857] tracking-tight mb-4">
              {hero.kicker[language]}
            </p>

            <h1 className="font-display font-bold text-[#0B1F1A] tracking-tight leading-[1.08] text-balance text-[clamp(2.15rem,4vw,3.5rem)] mb-5">
              {hero.headline[language]}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              {hero.subheadline[language]}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#047857] hover:bg-[#065F46] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#047857]"
              >
                <span>{hero.primaryCta[language]}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.16 }}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-[#0B1F1A] hover:text-[#0284C7] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{hero.secondaryCta[language]}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Slide In from Right + subtle Pop */}
          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative min-h-[280px] lg:min-h-[420px]">
              <ResilientImage
                src={MEDIA_ASSETS[hero.imageKey]}
                alt={hero.imageAlt[language]}
                loading="eager"
                className="w-full h-full lg:h-full object-cover object-left"
              />
              <div
                className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#047857] via-[#06B6D4] to-[#F59E0B]"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Ecosystem Metrics Strip with staggered Pop-Out */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {hero.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{
                duration: 0.45,
                delay: 0.14 + idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-1 rounded-xl p-2 -m-2 transition-colors hover:bg-slate-50/80"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F1A] tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-[#047857]">
                {metric.label[language]}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {metric.context[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

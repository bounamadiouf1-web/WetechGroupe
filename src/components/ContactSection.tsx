import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Language, SiteContent } from '../types/cms';

interface ContactSectionProps {
  content: SiteContent;
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  content,
  language,
}) => {
  const { contact } = content;

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Slide In from Left */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5"
          >
            <p className="text-xs sm:text-sm font-medium text-[#047857]">
              {contact.kicker[language]}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1F1A] tracking-tight text-balance">
              {contact.title[language]}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              {contact.subtitle[language]}
            </p>
          </motion.div>

          {/* Right Column: Slide In from Right + Pop-Out rows */}
          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#F8FAFC] rounded-2xl border border-slate-200 divide-y divide-slate-200 overflow-hidden"
          >
            {/* Phone Numbers */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.16 }}
              className="p-6 sm:p-7 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#047857]" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-slate-500">
                  {contact.labels.phones[language]}
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-5">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="font-display text-lg font-semibold text-[#0B1F1A] hover:text-[#047857] transition-colors tabular-nums whitespace-nowrap"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.16 }}
              className="p-6 sm:p-7 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#0284C7]" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-500">
                  {contact.labels.email[language]}
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-display text-lg font-semibold text-[#0B1F1A] hover:text-[#0284C7] transition-colors break-all"
                >
                  {contact.email}
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.16 }}
              className="p-6 sm:p-7 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#D97706]" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-500">
                  {contact.labels.address[language]}
                </div>
                <p className="font-display text-lg font-semibold text-[#0B1F1A]">
                  {contact.address[language]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

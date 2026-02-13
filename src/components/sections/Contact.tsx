"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const contactCards = [
  {
    emoji: "◈",
    label: "Gmail",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "primary",
  },
  {
    emoji: "◇",
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "accent",
  },
  {
    emoji: "◆",
    label: "LinkedIn",
    value: "Lucas Nocquet",
    href: personalInfo.social.linkedin,
    color: "gold",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-[family-name:var(--font-heading)] text-accent-400 uppercase tracking-[0.2em] mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <motion.p
            className="text-dark-200 max-w-xl mx-auto font-[family-name:var(--font-body)] leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Whether you have a project in mind, want to collaborate on something cool,
            or just want to say hi — I&apos;d love to hear from you. Feel free to reach out
            through any of the channels below.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.label}
              className="glass rounded-2xl p-6 text-center group border border-dark-500/20 hover:border-primary-500/20 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 48px rgba(168, 85, 247, 0.12)",
              }}
            >
              <motion.span
                className="text-3xl block mb-3 gradient-text"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                {card.emoji}
              </motion.span>
              <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-dark-200 uppercase tracking-wider mb-2">
                {card.label}
              </h3>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-white text-sm font-[family-name:var(--font-body)] hover:text-primary-400 transition-colors break-all"
                >
                  {card.value}
                </a>
              ) : (
                <span className="text-white text-sm font-[family-name:var(--font-body)]">
                  {card.value}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold font-[family-name:var(--font-heading)] text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Find me on LinkedIn</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
          <motion.a
            href="https://wa.me/5491159401084"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-xl border border-green-500/40 text-green-400 hover:bg-green-500/10 font-semibold font-[family-name:var(--font-heading)] text-sm transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Message on WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const contactCards = [
  {
    emoji: "📧",
    label: "Gmail",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "primary",
  },
  {
    emoji: "📍",
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "accent",
  },
  {
    emoji: "💼",
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
            through any of the channels below. 🚀
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
                className="text-3xl block mb-3"
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

        {/* LinkedIn CTA */}
        <motion.div
          className="text-center mt-12"
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
        </motion.div>
      </div>
    </section>
  );
}

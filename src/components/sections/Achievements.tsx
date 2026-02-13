"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-[family-name:var(--font-heading)] text-gold-400 uppercase tracking-[0.2em] mb-3 block">
            My Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            Certifications & <span className="gradient-text-gold">Awards</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-5 group border border-dark-500/20 hover:border-gold-500/20 transition-colors"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 40px rgba(245, 158, 11, 0.1)",
              }}
            >
              {/* Emoji badge */}
              <motion.span
                className="text-3xl block mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {achievement.emoji}
              </motion.span>

              {/* Title */}
              <h3 className="text-base font-bold font-[family-name:var(--font-heading)] text-white mb-1 group-hover:text-gold-300 transition-colors">
                {achievement.title}
              </h3>

              {/* Detail/Year */}
              <div className="flex items-center gap-2 flex-wrap">
                {achievement.detail && (
                  <span className="text-dark-200 text-xs font-[family-name:var(--font-body)]">
                    {achievement.detail}
                  </span>
                )}
                {achievement.year && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-300 font-[family-name:var(--font-heading)] font-medium">
                    {achievement.year}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

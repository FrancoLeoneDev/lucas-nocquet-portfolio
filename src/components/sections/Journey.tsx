"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { journey } from "@/data/portfolio";

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof journey)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl shrink-0 border border-primary-500/20 z-10 gradient-text"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          {item.emoji}
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-px flex-1 bg-gradient-to-b from-primary-500/40 to-transparent min-h-[60px]"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="pb-10 pt-1"
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-1">
          {item.title}
        </h3>
        <p className="text-dark-200 text-sm font-[family-name:var(--font-body)]">
          {item.institution}
        </p>
      </motion.div>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 overflow-hidden relative bg-dark-800/30">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-[family-name:var(--font-heading)] text-primary-400 uppercase tracking-[0.2em] mb-3 block">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            Education & <span className="gradient-text">Path</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-0">
          {journey.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === journey.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

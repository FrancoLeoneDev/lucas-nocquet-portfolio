"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionTooLong = project.description.length > 120;

  return (
    <motion.article
      layoutId={project.id}
      layout
      className="group relative bg-dark-800/60 rounded-2xl overflow-hidden border border-dark-500/30 hover:border-primary-500/30 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85, y: 20 }}
      transition={{
        layout: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 60px -12px rgba(168, 85, 247, 0.15)",
      }}
    >
      {/* Image / Video area */}
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-dark-700 to-dark-600 overflow-hidden">
        {project.videoUrl ? (
          <iframe
            src={project.videoUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={project.title}
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Hover overlay with link */}
        {!project.videoUrl && (
          <motion.div
            className="absolute inset-0 bg-dark-900/70 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-colors border border-white/20"
                initial={{ scale: 0, y: 20 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                }}
                transition={{ delay: 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-colors border border-white/20"
                initial={{ scale: 0, y: 20 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                }}
                transition={{ delay: 0.15, duration: 0.3 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            )}
          </motion.div>
        )}

        {/* Status badge */}
        <motion.div
          className="absolute top-3 left-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium font-[family-name:var(--font-heading)] ${
              project.status === "completed"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
            }`}
          >
            {project.status === "completed" ? "✅ Completed" : "🚧 In Progress"}
          </span>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            className="absolute top-3 right-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <span className="px-3 py-1 rounded-full text-xs font-medium font-[family-name:var(--font-heading)] bg-primary-500/20 text-primary-300 border border-primary-500/30 animate-glow-pulse">
              ⭐ Featured
            </span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <motion.div layout="position" className="p-5">
        {/* Title */}
        <motion.h3
          layout="position"
          className="text-xl font-bold font-[family-name:var(--font-heading)] text-white mb-2 group-hover:text-primary-400 transition-colors"
          whileHover={{ x: 4 }}
          transition={{
            layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {project.title}
        </motion.h3>

        {/* Description with expand/collapse */}
        <motion.div
          layout
          className="mb-4 overflow-hidden"
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <motion.p
            layout="position"
            className={`text-dark-200 text-sm leading-relaxed font-[family-name:var(--font-body)] ${
              !isExpanded && descriptionTooLong ? "line-clamp-2" : ""
            }`}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.description}
          </motion.p>
          {descriptionTooLong && (
            <motion.button
              layout="position"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary-400 hover:text-primary-300 text-xs font-medium font-[family-name:var(--font-heading)] mt-1.5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? "Show less ↑" : "Read more ↓"}
            </motion.button>
          )}
        </motion.div>

        {/* Tags */}
        <motion.div layout="position" className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-dark-600/80 text-dark-100 font-[family-name:var(--font-body)]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1 + 0.3 + tagIndex * 0.05,
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(168, 85, 247, 0.2)",
                color: "rgb(216, 180, 254)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient line */}
      <motion.div
        layout="position"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-400 to-gold-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ scaleX: { duration: 0.4 }, layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        style={{ originX: 0 }}
      />
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 overflow-hidden relative">
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
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            What I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <motion.p
            className="text-dark-200 max-w-xl mx-auto mt-3 font-[family-name:var(--font-body)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            A selection of my game development and virtual simulation projects 🎮
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <LayoutGroup>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}

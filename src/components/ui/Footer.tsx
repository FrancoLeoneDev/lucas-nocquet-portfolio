"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-600/50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-dark-300">
            <span className="gradient-text">&#9670;</span>
            <span className="ml-1">{personalInfo.name.split(" ")[0]}</span>
            <span className="text-dark-400 ml-1">N.</span>
          </span>

          {/* Copyright */}
          <p className="text-dark-400 text-xs font-[family-name:var(--font-body)]">
            &copy; {year} {personalInfo.name}. Crafted with dedication.
          </p>

          {/* Social */}
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-400 hover:text-primary-400 transition-colors text-xs font-[family-name:var(--font-body)]"
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

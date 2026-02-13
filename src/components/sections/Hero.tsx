"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, started]);

  return (
    <span>
      {displayed}
      <span
        className={`inline-block w-[3px] h-[1em] bg-primary-400 ml-1 align-middle ${
          displayed.length < text.length ? "animate-cursor-blink" : "opacity-0"
        }`}
      />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orb */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[100px]" />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[15%] right-[20%] w-3 h-3 bg-primary-400/40 rotate-45"
          animate={{ y: [-10, 10, -10], rotate: [45, 90, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[70%] left-[15%] w-2 h-2 bg-accent-400/40 rounded-full"
          animate={{ y: [-15, 5, -15], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] left-[10%] w-4 h-4 border border-gold-400/20 rotate-12"
          animate={{ rotate: [12, 60, 12], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-2.5 h-2.5 bg-gold-400/30 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center pt-20">
        {/* Profile Image with animated ring */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-500 via-accent-400 to-gold-400 animate-ring-rotate opacity-80" />
            <div className="absolute inset-0 rounded-full bg-dark-900" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-dark-700">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Status indicator */}
          <motion.div
            className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-medium"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300">Available</span>
          </motion.div>
        </motion.div>

        {/* Name with typewriter */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] tracking-tight text-white">
            <TypewriterText text={personalInfo.name} delay={600} />
          </h1>
        </motion.div>

        {/* Title with gradient */}
        <motion.p
          className="text-xl md:text-2xl font-semibold font-[family-name:var(--font-heading)] gradient-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {personalInfo.title} of Virtual Simulators
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-dark-200 text-base md:text-lg max-w-lg font-[family-name:var(--font-body)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold font-[family-name:var(--font-heading)] text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-dark-400 text-dark-100 hover:border-primary-500/50 hover:text-white font-semibold font-[family-name:var(--font-heading)] text-sm transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

      </div>

      {/* Scroll indicator - positioned relative to the section */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-dark-400 flex items-start justify-center p-1.5"
          animate={{ borderColor: ["rgba(74,74,102,1)", "rgba(168,85,247,0.5)", "rgba(74,74,102,1)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary-400"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

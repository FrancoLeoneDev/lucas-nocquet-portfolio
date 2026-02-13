"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import {
  SiAutodeskmaya,
  SiBlender,
  SiAutodesk,
  SiUnity,
  SiUnrealengine,
  SiAdobephotoshop,
  SiKrita,
  SiFigma,
  SiPython,
} from "react-icons/si";
import { TbBrandCSharp, TbCube3dSphere, TbTexture, TbDeviceGamepad2, TbMovie, TbLayout, TbCode } from "react-icons/tb";

// Map tool names to their brand icons
const toolIcons: Record<string, ReactNode> = {
  Maya: <SiAutodeskmaya />,
  Blender: <SiBlender />,
  ZBrush: <SiAutodesk />,
  "3Ds Max": <SiAutodesk />,
  "Substance Painter": <TbTexture />,
  Unity: <SiUnity />,
  Unreal: <SiUnrealengine />,
  "C#": <TbBrandCSharp />,
  Dragonbones: <TbMovie />,
  Photoshop: <SiAdobephotoshop />,
  Krita: <SiKrita />,
  Figma: <SiFigma />,
  Python: <SiPython />,
  "Visual Basic": <TbCode />,
};

// Map category names to their icons
const categoryIcons: Record<string, ReactNode> = {
  "3D Modeling": <TbCube3dSphere className="w-8 h-8" />,
  "3D Texturing": <TbTexture className="w-8 h-8" />,
  "Game Development": <TbDeviceGamepad2 className="w-8 h-8" />,
  "2D & 3D Animation": <TbMovie className="w-8 h-8" />,
  "UI Interfaces": <TbLayout className="w-8 h-8" />,
  Programming: <TbCode className="w-8 h-8" />,
};

const colorMap: Record<
  string,
  { border: string; glow: string; chip: string; chipText: string; iconColor: string }
> = {
  primary: {
    border: "border-primary-500/30",
    glow: "group-hover:shadow-primary-500/20",
    chip: "bg-primary-500/10",
    chipText: "text-primary-300",
    iconColor: "text-primary-400",
  },
  accent: {
    border: "border-accent-500/30",
    glow: "group-hover:shadow-accent-500/20",
    chip: "bg-accent-500/10",
    chipText: "text-accent-300",
    iconColor: "text-accent-400",
  },
  gold: {
    border: "border-gold-500/30",
    glow: "group-hover:shadow-gold-500/20",
    chip: "bg-gold-500/10",
    chipText: "text-gold-300",
    iconColor: "text-gold-400",
  },
};

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const colors = colorMap[skill.color] || colorMap.primary;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`group relative glass rounded-2xl p-6 cursor-default border ${colors.border} transition-shadow duration-300 group-hover:shadow-xl ${colors.glow}`}
      style={{
        perspective: "800px",
      }}
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Category icon */}
        <motion.div
          className={`mb-4 ${colors.iconColor}`}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          {categoryIcons[skill.category]}
        </motion.div>

        {/* Category name */}
        <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-4">
          {skill.category}
        </h3>

        {/* Tool chips with icons */}
        <div className="flex flex-wrap gap-2">
          {skill.tools.map((tool, toolIndex) => (
            <motion.span
              key={tool}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-[family-name:var(--font-body)] ${colors.chip} ${colors.chipText}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1 + 0.3 + toolIndex * 0.06,
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {toolIcons[tool] && (
                <span className="text-sm">{toolIcons[tool]}</span>
              )}
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 overflow-hidden relative bg-dark-800/30"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-[family-name:var(--font-heading)] text-accent-400 uppercase tracking-[0.2em] mb-3 block">
            Skills & Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            My <span className="gradient-text">Toolkit</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

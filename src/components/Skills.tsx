"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiTypescript,
} from "react-icons/si";
import { HiCpuChip, HiSparkles, HiCog8Tooth } from "react-icons/hi2";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  accent: string;
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <FaReact size={20} />,
    accent: "var(--blue-400)",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={22} /> },
      { name: "CSS3", icon: <FaCss3Alt size={22} /> },
      { name: "JavaScript", icon: <FaJs size={22} /> },
      { name: "TypeScript", icon: <SiTypescript size={20} /> },
      { name: "React", icon: <FaReact size={22} /> },
      { name: "Next.js", icon: <SiNextdotjs size={22} /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={22} /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs size={20} />,
    accent: "var(--cyan-400)",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={22} /> },
      { name: "Python", icon: <FaPython size={22} /> },
      { name: "REST APIs", icon: <HiCog8Tooth size={22} /> },
    ],
  },
  {
    title: "AI & Automation",
    icon: <HiCpuChip size={20} />,
    accent: "var(--purple-400)",
    skills: [
      { name: "Python Scripting", icon: <FaPython size={22} /> },
      { name: "LLM APIs", icon: <HiSparkles size={22} /> },
      { name: "Prompt Engineering", icon: <HiCpuChip size={22} /> },
      { name: "Web Scraping", icon: <HiCog8Tooth size={22} /> },
      { name: "Workflow Automation", icon: <HiCog8Tooth size={22} /> },
    ],
  },
  {
    title: "Deployment",
    icon: <SiVercel size={18} />,
    accent: "var(--blue-300)",
    skills: [
      { name: "GitHub", icon: <FaGithub size={22} /> },
      { name: "Vercel", icon: <SiVercel size={20} /> },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 48 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span className="glow-dot" />
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--blue-400)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Skills
            </span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">tech stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
          className="skills-grid"
        >
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + ci * 0.12 }}
              className="glass-card"
              style={{ padding: 28 }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                  color: cat.accent,
                }}
              >
                {cat.icon}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills list */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + ci * 0.1 + si * 0.05,
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 14px",
                      borderRadius: 10,
                      background: "rgba(59, 130, 246, 0.06)",
                      border: "1px solid rgba(59, 130, 246, 0.1)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    whileHover={{
                      background: "rgba(59, 130, 246, 0.12)",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                      y: -2,
                    }}
                  >
                    <span style={{ color: cat.accent, display: "flex" }}>
                      {skill.icon}
                    </span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

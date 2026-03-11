"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { GlowCard } from "./ui/Effects";

interface Project {
  title: string;
  description: string;
  problem: string;
  tech: string[];
  live?: string;
  github: string;
  category: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "Gym Website",
    description:
      "Full-featured gym landing page with modern design, membership plans, and trainer profiles.",
    problem: "Local gym needed a professional web presence to attract new members.",
    tech: ["Next.js", "React", "CSS", "Vercel"],
    live: "https://ironcore-gym-website.vercel.app/",
    github: "https://github.com/adityasalunke255",
    category: "Web",
    accent: "var(--blue-500)",
  },
  {
    title: "Salon Website",
    description:
      "Luxury salon website with booking integration, service showcase, and elegant animations.",
    problem: "Salon business required an online presence to showcase services and enable bookings.",
    tech: ["Next.js", "React", "TailwindCSS", "Vercel"],
    live: "https://luxe-salon-y916.vercel.app/",
    github: "https://github.com/adityasalunke255",
    category: "Web",
    accent: "var(--purple-500)",
  },
  {
    title: "Resume Enhancer",
    description:
      "Interactive resume builder tool with clean UI for creating professional resumes.",
    problem: "Students and job seekers needed a simple tool to build polished resumes.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://adityasalunke255.github.io/resume-enhancher/",
    github: "https://github.com/adityasalunke255/resume-enhancher",
    category: "Tool",
    accent: "var(--cyan-500)",
  },
  {
    title: "AI Maintenance Chatbot",
    description:
      "Intelligent chatbot system for maintenance support with reporting and admin dashboard.",
    problem: "Maintenance teams needed an automated support system to log and resolve issues.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    github: "https://github.com/adityasalunke255/ai-maintenance-chatbot",
    category: "AI",
    accent: "var(--blue-400)",
  },
  {
    title: "Mini Game Hub",
    description:
      "Collection of browser-based mini games built with vanilla JavaScript for fun and learning.",
    problem: "Created as a learning project to master DOM manipulation and game logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://adityasalunke255.github.io/mini-game-hub/",
    github: "https://github.com/adityasalunke255/mini-game-hub",
    category: "Web",
    accent: "var(--purple-400)",
  },
  {
    title: "CET Question Bank",
    description:
      "Frontend interface for browsing and practicing CET exam questions by category.",
    problem: "Students needed an organized platform to practice CET exam questions.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://adityasalunke255.github.io/cet-question-bank/",
    github: "https://github.com/adityasalunke255/cet-question-bank",
    category: "Tool",
    accent: "var(--cyan-400)",
  },
  {
    title: "News Video Generator",
    description:
      "Automated pipeline that converts news articles into video clips with narration.",
    problem: "Content creators needed an efficient way to turn text news into shareable video content.",
    tech: ["Python", "Automation"],
    github: "https://github.com/adityasalunke255/news-video-generator",
    category: "AI",
    accent: "var(--blue-500)",
  },
];

const categories = ["All", "Web", "Tool", "AI"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding" ref={ref}>
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
              Projects
            </span>
          </div>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="section-subtitle">
            Each project represents a real problem solved with code. From
            business websites to AI experiments.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: 99,
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                border:
                  filter === cat
                    ? "1px solid var(--blue-400)"
                    : "1px solid var(--border-color)",
                background:
                  filter === cat
                    ? "rgba(59, 130, 246, 0.15)"
                    : "transparent",
                color:
                  filter === cat
                    ? "var(--blue-300)"
                    : "var(--text-secondary)",
                transition: "all 0.3s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: 24,
          }}
          className="projects-grid"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
            <GlowCard
              className="gradient-border-card"
              style={{
                padding: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Card top gradient header */}
              <div
                style={{
                  height: 4,
                  background: `linear-gradient(90deg, ${project.accent}, transparent)`,
                }}
              />

              <div style={{ padding: "28px 28px 24px" }}>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: project.accent,
                        marginBottom: 6,
                        display: "block",
                      }}
                    >
                      {project.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          border: "1px solid var(--border-color)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        aria-label={`View live demo of ${project.title}`}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--blue-400)";
                          e.currentTarget.style.color = "var(--blue-400)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--border-color)";
                          e.currentTarget.style.color = "var(--text-secondary)";
                        }}
                      >
                        <HiExternalLink size={16} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        border: "1px solid var(--border-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      aria-label={`View GitHub repository of ${project.title}`}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--blue-400)";
                        e.currentTarget.style.color = "var(--blue-400)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--border-color)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                    marginBottom: 12,
                  }}
                >
                  {project.description}
                </p>

                {/* Problem */}
                <p
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.5,
                    color: "var(--text-muted)",
                    marginBottom: 20,
                    fontStyle: "italic",
                    borderLeft: `2px solid ${project.accent}`,
                    paddingLeft: 12,
                  }}
                >
                  {project.problem}
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginTop: "auto",
                  }}
                >
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

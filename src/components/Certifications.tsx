"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiAcademicCap, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { GlowCard } from "./ui/Effects";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  category: string;
}

const certifications: Certification[] = [
  {
    title: "AI Impact Summit Buildathon",
    issuer: "HCL GUVI",
    date: "Jan 2026",
    skills: ["AI Software Development"],
    category: "AI",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Dec 2025",
    skills: ["Prompt Engineering", "Generative AI", "Responsible AI", "Microsoft Copilot"],
    category: "AI",
  },
  {
    title: "Generative AI: Working with Large Language Models",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["Large Language Models", "Transformer Models"],
    category: "AI",
  },
  {
    title: "Building Advanced AI Apps with Prompt Flow",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["Prompt Flow", "Generative AI", "AI Software Development"],
    category: "AI",
  },
  {
    title: "Prompt Engineering with LangChain",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["Prompt Engineering", "LangChain", "AI"],
    category: "Prompt Eng.",
  },
  {
    title: "Prompt Engineering Skills for Developers",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["Prompt Engineering", "Generative AI", "NLP"],
    category: "Prompt Eng.",
  },
  {
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn",
    date: "Oct 2025",
    skills: ["Prompt Engineering", "AI Prompting"],
    category: "Prompt Eng.",
  },
  {
    title: "Prompt Engineering with ChatGPT",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["ChatGPT"],
    category: "Prompt Eng.",
  },
  {
    title: "ChatGPT: Perfecting Output with Templates",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["ChatGPT", "AI"],
    category: "Prompt Eng.",
  },
  {
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["Generative AI", "Responsible AI", "Computer Ethics"],
    category: "AI",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["Artificial Intelligence"],
    category: "AI",
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn",
    date: "Oct 2025",
    skills: ["Generative AI Tools"],
    category: "AI",
  },
  {
    title: "AI and Developer Productivity",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["Software Development", "AI Software Development"],
    category: "Dev",
  },
  {
    title: "AI & ML in Manufacturing Industry",
    issuer: "Mesmerise Soft-Tech Pvt. Ltd.",
    date: "Jun 2025",
    skills: ["Python", "Machine Learning"],
    category: "AI",
  },
  {
    title: "Streamlining Work with Microsoft Copilot",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["AI Productivity", "Microsoft Copilot"],
    category: "Productivity",
  },
  {
    title: "Learning Microsoft 365 Copilot for Work",
    issuer: "LinkedIn",
    date: "Dec 2025",
    skills: ["Office 365"],
    category: "Productivity",
  },
  {
    title: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn",
    date: "Oct 2025",
    skills: ["Data Analytics"],
    category: "Data",
  },
  {
    title: "Generative AI: Evolution of Thoughtful Online Search",
    issuer: "LinkedIn",
    date: "Oct 2025",
    skills: ["Generative AI"],
    category: "AI",
  },
];

const categories = ["All", "AI", "Prompt Eng.", "Productivity", "Data", "Dev"];

// Issuer to color mapping
function getIssuerColor(issuer: string) {
  if (issuer.includes("Microsoft")) return "#00a4ef";
  if (issuer.includes("HCL") || issuer.includes("GUVI")) return "#f59e0b";
  if (issuer.includes("Mesmerise")) return "#8b5cf6";
  return "var(--blue-400)";
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    filter === "All"
      ? certifications
      : certifications.filter((c) => c.category === filter);

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 32 }}
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
              Certifications
            </span>
          </div>
          <h2 className="section-title">
            Continuous <span className="gradient-text">learning</span>
          </h2>
          <p className="section-subtitle">
            {certifications.length} industry certifications across AI,
            prompt engineering, and data analytics.
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
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              style={{
                padding: "6px 16px",
                borderRadius: 99,
                fontSize: "0.8rem",
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

        {/* Certifications grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 16,
          }}
          className="certs-grid"
        >
          {displayed.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
            >
              <GlowCard
                className="glass-card"
                style={{ padding: "20px 24px" }}
              >
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 11,
                      background: `${getIssuerColor(cert.issuer)}15`,
                      border: `1px solid ${getIssuerColor(cert.issuer)}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: getIssuerColor(cert.issuer),
                      flexShrink: 0,
                    }}
                  >
                    <HiAcademicCap size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        marginBottom: 4,
                        lineHeight: 1.4,
                      }}
                    >
                      {cert.title}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          color: getIssuerColor(cert.issuer),
                        }}
                      >
                        {cert.issuer}
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        · {cert.date}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 4,
                      }}
                    >
                      {cert.skills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="tech-tag"
                          style={{ fontSize: "0.68rem", padding: "2px 8px" }}
                        >
                          {s}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span
                          className="tech-tag"
                          style={{ fontSize: "0.68rem", padding: "2px 8px" }}
                        >
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Show more / less */}
        {filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ textAlign: "center", marginTop: 32 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 28px",
                borderRadius: 12,
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                border: "1px solid var(--border-color)",
                background: "rgba(59, 130, 246, 0.06)",
                color: "var(--blue-300)",
                transition: "all 0.3s ease",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {showAll ? (
                <>
                  Show Less <HiChevronUp size={16} />
                </>
              ) : (
                <>
                  Show All {filtered.length} Certifications{" "}
                  <HiChevronDown size={16} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

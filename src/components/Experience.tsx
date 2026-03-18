"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase } from "react-icons/hi";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Mesmerise Soft-Tech Private Limited",
    period: "2025",
    description:
      "Worked on real-world web development projects, gaining hands-on experience with frontend technologies, client communication, and agile development workflows.",
    highlights: [
      "Built responsive web interfaces for client projects",
      "Collaborated with senior developers on feature implementation",
      "Learned production-level coding practices and version control",
      "Participated in code reviews and sprint planning",
    ],
  },
  {
    role: "Automation Developer",
    company: "Lead Generation & WhatsApp Automation Tool",
    period: "2025",
    description:
      "Developed an automated system to extract business leads and send personalized WhatsApp outreach messages using APIs and scripting.",
    highlights: [
      "Built lead scraping system for targeted business categories",
      "Integrated WhatsApp API for automated messaging",
      "Connected database (Supabase) for storing and managing leads",
      "Created personalized message workflows for client outreach",
      "Focused on real-world business use case"
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
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
              Experience
            </span>
          </div>
          <h2 className="section-title">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
          <p className="section-subtitle">
            Real-world experience building software in professional
            environments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: 700 }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 19,
              top: 8,
              bottom: 8,
              width: 2,
              background:
                "linear-gradient(180deg, var(--blue-500), var(--cyan-500), transparent)",
            }}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                style={{ display: "flex", gap: 24, position: "relative" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "var(--bg-secondary)",
                    border: "2px solid var(--blue-500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--blue-400)",
                    zIndex: 2,
                  }}
                >
                  <HiBriefcase size={18} />
                </div>

                {/* Card */}
                <div
                  className="glass-card"
                  style={{ padding: 28, flex: 1 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        color: "var(--blue-300)",
                        background: "rgba(59, 130, 246, 0.1)",
                        padding: "4px 12px",
                        borderRadius: 99,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--blue-400)",
                      marginBottom: 12,
                    }}
                  >
                    {exp.company}
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: "var(--text-secondary)",
                      marginBottom: 16,
                    }}
                  >
                    {exp.description}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "var(--blue-400)",
                            flexShrink: 0,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

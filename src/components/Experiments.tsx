"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiSparkles, HiBeaker } from "react-icons/hi";
import { HiRocketLaunch, HiFilm, HiCpuChip } from "react-icons/hi2";

const experiments = [
  {
    icon: <HiRocketLaunch size={24} />,
    title: "AI Website Generator MVP",
    description:
      "Building a tool that takes a business description and generates a complete website using AI — from design to deployment.",
    status: "In Progress",
    statusColor: "#4ade80",
  },
  {
    icon: <HiCpuChip size={24} />,
    title: "Advanced Automation Pipelines",
    description:
      "Exploring multi-step automation workflows that chain scraping, AI processing, and outreach into single pipelines.",
    status: "Exploring",
    statusColor: "#60a5fa",
  },
  {
    icon: <HiFilm size={24} />,
    title: "AI-Generated Video Experiments",
    description:
      "Experimenting with automated video creation using text-to-speech, image generation, and video composition tools.",
    status: "Experimenting",
    statusColor: "#a78bfa",
  },
];

export default function Experiments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experiments" className="section-padding" ref={ref}>
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
              Experiments
            </span>
          </div>
          <h2 className="section-title">
            What I&apos;m{" "}
            <span className="gradient-text">exploring now</span>
          </h2>
          <p className="section-subtitle">
            Always curious, always building. Here&apos;s what I&apos;m
            currently working on.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 20,
          }}
          className="experiments-grid"
        >
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="glass-card"
              style={{
                padding: 28,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle animated background shimmer */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 200,
                  height: 200,
                  background: `radial-gradient(circle, ${exp.statusColor}10, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative" }}>
                {/* Status badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 12px",
                    borderRadius: 99,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    background: `${exp.statusColor}15`,
                    color: exp.statusColor,
                    border: `1px solid ${exp.statusColor}30`,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: exp.statusColor,
                      animation: "pulse-glow 2s infinite",
                    }}
                  />
                  {exp.status}
                </div>

                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(59, 130, 246, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--blue-400)",
                    marginBottom: 16,
                  }}
                >
                  {exp.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: 10,
                  }}
                >
                  {exp.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .experiments-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

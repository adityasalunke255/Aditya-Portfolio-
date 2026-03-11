"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineLocationMarker, HiOutlineChatAlt2 } from "react-icons/hi";
import { HiCog8Tooth, HiSignal } from "react-icons/hi2";
import { GlowCard } from "./ui/Effects";

const tools = [
  {
    icon: <HiOutlineLocationMarker size={28} />,
    title: "Google Maps Lead Finder",
    description:
      "Automated lead extraction tool that scrapes Google Maps for business listings, collects contact information, and exports structured data for outreach campaigns.",
    workflow: [
      "Define target business category & location",
      "Automated scraping of Google Maps listings",
      "Extract name, phone, address, ratings",
      "Export to structured CSV/database",
    ],
    tech: ["Python", "Web Scraping", "Automation", "Data Processing"],
    status: "Private",
  },
  {
    icon: <HiOutlineChatAlt2 size={28} />,
    title: "WhatsApp Message Automation",
    description:
      "Personalized bulk messaging system that sends customized WhatsApp messages to leads with rate limiting, duplicate prevention, and delivery tracking.",
    workflow: [
      "Load leads from database/CSV",
      "Generate personalized messages per lead",
      "Send via WhatsApp Business API",
      "Log delivery status & prevent duplicates",
    ],
    tech: ["Python", "WhatsApp API", "Supabase", "Automation"],
    status: "Private",
  },
];

export default function AutomationTools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="automation" className="section-padding" ref={ref}>
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
              Automation
            </span>
          </div>
          <h2 className="section-title">
            Tools that <span className="gradient-text">work for you</span>
          </h2>
          <p className="section-subtitle">
            Automation systems built to solve real business problems — from lead
            generation to personalized outreach.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
            gap: 24,
          }}
          className="automation-grid"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="gradient-border-card"
              style={{ padding: 32, position: "relative", overflow: "hidden" }}
            >
              {/* Status badge */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  padding: "4px 12px",
                  borderRadius: 99,
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  background: "rgba(251, 191, 36, 0.1)",
                  color: "#fbbf24",
                  border: "1px solid rgba(251, 191, 36, 0.2)",
                }}
              >
                {tool.status}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(59, 130, 246, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--blue-400)",
                  marginBottom: 20,
                }}
              >
                {tool.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  marginBottom: 12,
                }}
              >
                {tool.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  marginBottom: 24,
                }}
              >
                {tool.description}
              </p>

              {/* Workflow steps */}
              <div style={{ marginBottom: 24 }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 12,
                  }}
                >
                  Workflow
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {tool.workflow.map((step, si) => (
                    <div
                      key={si}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 8,
                          background: "rgba(59, 130, 246, 0.1)",
                          border: "1px solid rgba(59, 130, 246, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "var(--blue-400)",
                          flexShrink: 0,
                        }}
                      >
                        {si + 1}
                      </div>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {tool.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .automation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

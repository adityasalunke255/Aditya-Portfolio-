"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiLightningBolt, HiCode } from "react-icons/hi";
import { HiCpuChip, HiRocketLaunch, HiSparkles } from "react-icons/hi2";

const highlights = [
  {
    icon: <HiCpuChip size={22} />,
    title: "AI / ML Student",
    desc: "Diploma program with focus on machine learning and artificial intelligence",
  },
  {
    icon: <HiRocketLaunch size={22} />,
    title: "Automation Builder",
    desc: "Creating tools that save time and solve real business problems",
  },
  {
    icon: <HiSparkles size={22} />,
    title: "Experimenter",
    desc: "Constantly exploring LLMs, generative AI, and emerging technologies",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 60 }}
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
              About Me
            </span>
          </div>
          <h2 className="section-title">
            Passionate about building things
            <br />
            that <span className="gradient-text">make a difference</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left - story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: 20,
              }}
            >
              I&apos;m <strong style={{ color: "var(--text-primary)" }}>Aditya Salunke</strong>, an
              AI/ML diploma student with a drive for building practical
              technology solutions. My journey started with curiosity about how
              software could automate real-world tasks — and that turned into a
              passion for creating tools that solve genuine problems.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: 20,
              }}
            >
              From gym and salon websites for local businesses, to automation
              systems that extract leads and send personalized outreach, I focus
              on impact over complexity. I love the intersection of{" "}
              <strong style={{ color: "var(--blue-300)" }}>
                AI, automation, and web development
              </strong>{" "}
              — where you can build something once and let it work for you.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
              }}
            >
              Currently experimenting with LLM APIs, prompt engineering,
              AI-generated content, and building an AI Website Generator MVP.
              Always learning, always building.
            </p>
          </motion.div>

          {/* Right - highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="glass-card"
                style={{ padding: 24, display: "flex", gap: 16 }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(59, 130, 246, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--blue-400)",
                    flexShrink: 0,
                  }}
                >
                  {h.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      marginBottom: 4,
                    }}
                  >
                    {h.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

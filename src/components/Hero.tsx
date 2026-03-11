"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineEye } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { FloatingParticles, AnimatedCounter } from "./ui/Effects";

const roles = [
  "AI Automation Developer",
  "Full-Stack Builder",
  "Web App Creator",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 70;
      timeout = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentRole.slice(0, displayedText.length - 1)
            : currentRole.slice(0, displayedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating particles */}
      <FloatingParticles />
      {/* Animated gradient ring behind content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, transparent, rgba(59,130,246,0.08), transparent, rgba(6,182,212,0.06), transparent)",
          animation: "spin 30s linear infinite",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-container"
        style={{ textAlign: "center", position: "relative", zIndex: 2 }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 99,
            background: "rgba(59, 130, 246, 0.08)",
            border: "1px solid rgba(59, 130, 246, 0.15)",
            marginBottom: 32,
            fontSize: "0.85rem",
            color: "var(--blue-300)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 8px #4ade80",
              display: "inline-block",
              animation: "pulse-glow 2s infinite",
            }}
          />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          Aditya{" "}
          <span className="gradient-text">Salunke</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontWeight: 500,
            color: "var(--blue-300)",
            marginBottom: 24,
            minHeight: "2em",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {displayedText}
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: "1.2em",
              background: "var(--blue-400)",
              marginLeft: 2,
              verticalAlign: "text-bottom",
              animation: "blink 1s step-end infinite",
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Building automation tools, AI experiments, and modern web
          applications. Turning ideas into impactful digital solutions.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#projects" className="btn-primary">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                position: "relative",
                zIndex: 1,
              }}
            >
              <HiOutlineEye size={18} />
              View Projects
            </span>
          </a>
          <a href="#contact" className="btn-secondary">
            <HiEnvelope size={18} />
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            marginTop: 64,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: 7, suffix: "+", label: "Projects Built" },
            { value: 5, suffix: "+", label: "Tech Stacks" },
            { value: 2, suffix: "+", label: "Automation Tools" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                className="gradient-text"
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginTop: 4,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: "var(--text-muted)", fontSize: "1.2rem" }}
          >
            <HiArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

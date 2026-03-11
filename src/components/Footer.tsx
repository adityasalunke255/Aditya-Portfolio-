"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "40px 24px",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            <span className="gradient-text">AS</span>
            <span style={{ opacity: 0.5, fontWeight: 400, marginLeft: 4 }}>
              .dev
            </span>
          </div>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            Built with <HiHeart style={{ color: "var(--blue-400)" }} /> by
            Aditya Salunke
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <a
            href="https://github.com/adityasalunke255"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--blue-400)";
              e.currentTarget.style.color = "var(--blue-400)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-salunke-7389b0364/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--blue-400)";
              e.currentTarget.style.color = "var(--blue-400)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Aditya Salunke. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiMail, HiArrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub size={22} />,
    label: "GitHub",
    href: "https://github.com/adityasalunke255",
    desc: "Check out my code",
  },
  {
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-salunke-7389b0364/",
    desc: "Let's connect",
  },
  {
    icon: <HiMail size={22} />,
    label: "Email",
    href: "mailto:adityasalunke2550@gmail.com",
    desc: "Send me a message",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const bodyText = [
      "Hello Aditya,",
      "",
      formData.message,
      "",
      "---",
      "Name: " + formData.name,
      "Email: " + formData.email,
    ].join("\n");
    const body = encodeURIComponent(bodyText);
    const mailtoUrl = "mailto:adityasalunke2550@gmail.com?subject=" + subject + "&body=" + body;

    // Simulate link click for better browser support
    const a = document.createElement("a");
    a.href = mailtoUrl;
    a.click();
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            marginBottom: 60,
            padding: "60px 40px",
            borderRadius: 24,
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.05), rgba(139, 92, 246, 0.05))",
            border: "1px solid rgba(59, 130, 246, 0.12)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: -80,
              width: 250,
              height: 250,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.08), transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                Get in Touch
              </span>
            </div>
            <h2
              className="section-title"
              style={{ marginBottom: 16 }}
            >
              Let&apos;s{" "}
              <span className="gradient-text">work together</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ margin: "0 auto 8px" }}
            >
              Have a project in mind? Looking for a developer? I&apos;d love
              to hear from you.
            </p>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 40,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card"
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                  color: "inherit",
                }}
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
                  {link.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {link.desc}
                  </div>
                </div>
                <HiArrowRight
                  style={{ color: "var(--text-muted)", flexShrink: 0 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card"
            style={{ padding: 32 }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: 24,
              }}
            >
              Send a message
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(4, 8, 16, 0.6)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--blue-400)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-color)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(4, 8, 16, 0.6)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--blue-400)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-color)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(4, 8, 16, 0.6)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--blue-400)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-color)")
                  }
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, position: "relative", zIndex: 1 }}>
                  <HiMail size={18} />
                  Send Message
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

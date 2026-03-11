"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Automation", href: "#automation" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleSectionObserver = () => {
      const sections = navLinks.map((l) =>
        document.querySelector(l.href) as HTMLElement
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      sections.forEach((s) => s && observer.observe(s));
      return () => observer.disconnect();
    };

    window.addEventListener("scroll", handleScroll);
    const cleanup = handleSectionObserver();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanup?.();
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 24px",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          background: scrolled
            ? "rgba(4, 8, 16, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(59, 130, 246, 0.1)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              textDecoration: "none",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="gradient-text">AS</span>
            <span style={{ opacity: 0.5, fontWeight: 400, marginLeft: 4 }}>
              .dev
            </span>
          </a>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
            className="nav-desktop"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color:
                    activeSection === link.href
                      ? "var(--blue-400)"
                      : "var(--text-secondary)",
                  transition: "color 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--blue-300)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    activeSection === link.href
                      ? "var(--blue-400)"
                      : "var(--text-secondary)")
                }
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      background:
                        "linear-gradient(90deg, var(--blue-400), var(--cyan-400))",
                      borderRadius: 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
              <span>Let&apos;s Talk</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "var(--text-primary)",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(4, 8, 16, 0.97)",
              backdropFilter: "blur(24px)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 28,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  textDecoration: "none",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color:
                    activeSection === link.href
                      ? "var(--blue-400)"
                      : "var(--text-secondary)",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
              style={{ marginTop: 16 }}
            >
              <span>Let&apos;s Talk</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline responsive styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

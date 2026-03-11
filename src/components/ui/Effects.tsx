"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// ─── Scroll Progress Bar ───
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50 });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(90deg, var(--blue-500), var(--cyan-400), var(--purple-400))",
        transformOrigin: "left",
        scaleX,
        zIndex: 1001,
      }}
    />
  );
}

// ─── Animated Counter ───
export function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const step = target / (duration * 60);
          const animate = () => {
            start += step;
            if (start >= target) {
              setCount(target);
              return;
            }
            setCount(Math.floor(start));
            requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref} suppressHydrationWarning>
      {count}
      {suffix}
    </span>
  );
}

// ─── Mouse Glow Card Wrapper ───
export function GlowCard({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Mouse-follow glow */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: glowPos.y - 150,
            left: glowPos.x - 150,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
            transition: "top 0.1s, left 0.1s",
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

// ─── Back to Top Button ───
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        pointerEvents: visible ? "auto" as const : "none" as const,
      }}
      transition={{ duration: 0.3 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 14,
        background: "rgba(59, 130, 246, 0.15)",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        backdropFilter: "blur(12px)",
        color: "var(--blue-400)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
        zIndex: 999,
        transition: "all 0.3s ease",
      }}
      whileHover={{
        background: "rgba(59, 130, 246, 0.25)",
        borderColor: "rgba(59, 130, 246, 0.5)",
        y: -3,
        boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3)",
      }}
    >
      ↑
    </motion.button>
  );
}

// ─── Preloader / Splash Screen ───
export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      onAnimationComplete={() => setLoading(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--bg-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
      }}
    >
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "3rem",
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}
      >
        <span className="gradient-text">AS</span>
        <span style={{ opacity: 0.4, fontWeight: 400, marginLeft: 4 }}>
          .dev
        </span>
      </motion.div>

      {/* Loading bar */}
      <div
        style={{
          width: 120,
          height: 3,
          borderRadius: 3,
          background: "rgba(59, 130, 246, 0.1)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%",
            background:
              "linear-gradient(90deg, var(--blue-500), var(--cyan-400))",
            borderRadius: 3,
          }}
        />
      </div>
    </motion.div>
  );
}

// ─── Section Divider ───
export function SectionDivider() {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(6,182,212,0.15), transparent)",
        }}
      />
    </div>
  );
}

// ─── Floating Particles ───
interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 8,
        opacity: 0.2 + Math.random() * 0.3,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 15, -10],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "var(--blue-400)",
            boxShadow: `0 0 ${p.size * 3}px rgba(59,130,246,0.3)`,
          }}
        />
      ))}
    </div>
  );
}

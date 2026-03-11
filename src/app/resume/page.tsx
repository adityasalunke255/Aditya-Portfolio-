"use client";

import { HiMail, HiDownload, HiArrowLeft } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ResumePage() {
  return (
    <>
      {/* Floating action bar — hidden in print */}
      <div className="resume-actions no-print">
        <a href="/" className="resume-back-btn">
          <HiArrowLeft size={16} />
          Back to Portfolio
        </a>
        <button
          className="resume-download-btn"
          onClick={() => window.print()}
        >
          <HiDownload size={16} />
          Download PDF
        </button>
      </div>

      <div className="resume-page">
        {/* ── HEADER ── */}
        <header className="resume-header">
          <div>
            <h1 className="resume-name">Aditya Salunke</h1>
            <p className="resume-tagline">
              AI / ML Student &bull; Full-Stack Developer &bull; Automation Builder
            </p>
          </div>
          <div className="resume-contact-info">
            <a href="mailto:adityasalunke2550@gmail.com">
              <HiMail size={14} />
              adityasalunke2550@gmail.com
            </a>
            <a
              href="https://github.com/adityasalunke255"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={14} />
              github.com/adityasalunke255
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-salunke-7389b0364/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={14} />
              LinkedIn
            </a>
          </div>
        </header>

        <hr className="resume-hr" />

        {/* ── SUMMARY ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Summary</h2>
          <p className="resume-text">
            AI/ML diploma student and developer passionate about building
            practical technology solutions. Experienced in web development,
            automation tools, AI experimentation, and startup platform
            development. Focused on creating tools that solve genuine problems
            at the intersection of AI, automation, and web development.
          </p>
        </section>

        <hr className="resume-hr" />

        {/* ── EXPERIENCE ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">Platform Contributor</h3>
                <span className="resume-entry-company">
                  InterJob — Startup Platform
                </span>
              </div>
              <span className="resume-entry-date">2026</span>
            </div>
            <ul className="resume-list">
              <li>Developed key UI components for the job listing platform</li>
              <li>Implemented responsive design patterns</li>
              <li>Worked with REST APIs for data integration</li>
              <li>Gained startup environment experience</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">
                  Software Development Intern
                </h3>
                <span className="resume-entry-company">
                  Mesmerise Soft-Tech Private Limited
                </span>
              </div>
              <span className="resume-entry-date">2025</span>
            </div>
            <ul className="resume-list">
              <li>Built responsive web interfaces for client projects</li>
              <li>
                Collaborated with senior developers on feature implementation
              </li>
              <li>
                Learned production-level coding practices and version control
              </li>
              <li>Participated in code reviews and sprint planning</li>
            </ul>
          </div>
        </section>

        <hr className="resume-hr" />

        {/* ── PROJECTS ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Projects</h2>

          <div className="resume-projects-grid">
            {[
              {
                name: "AI Website Generator MVP",
                desc: "Tool that takes a business description and generates a complete website using AI — from design to deployment.",
                tech: "AI, LLM APIs, Next.js",
              },
              {
                name: "Google Maps Lead Finder",
                desc: "Automated lead extraction tool that scrapes Google Maps for business listings and exports structured data.",
                tech: "Python, Web Scraping, Automation",
              },
              {
                name: "WhatsApp Message Automation",
                desc: "Personalized bulk messaging system with rate limiting, duplicate prevention, and delivery tracking.",
                tech: "Python, WhatsApp API, Supabase",
              },
              {
                name: "News Video Generator",
                desc: "Automated pipeline that converts news articles into video clips with narration.",
                tech: "Python, TTS, Video Composition",
              },
              {
                name: "Gym Website",
                desc: "Full-featured gym landing page with modern design, membership plans, and trainer profiles.",
                tech: "Next.js, React, CSS, Vercel",
              },
              {
                name: "Salon Website",
                desc: "Luxury salon website with booking integration, service showcase, and elegant animations.",
                tech: "Next.js, React, TailwindCSS",
              },
              {
                name: "AI Maintenance Chatbot",
                desc: "Intelligent chatbot system for maintenance support with reporting and admin dashboard.",
                tech: "HTML, CSS, JavaScript, Python",
              },
              {
                name: "Resume Enhancer",
                desc: "Interactive resume builder with clean UI for creating professional resumes.",
                tech: "HTML, CSS, JavaScript",
              },
            ].map((p) => (
              <div key={p.name} className="resume-project-item">
                <h4 className="resume-project-name">{p.name}</h4>
                <p className="resume-project-desc">{p.desc}</p>
                <span className="resume-project-tech">{p.tech}</span>
              </div>
            ))}
          </div>
        </section>

        <hr className="resume-hr" />

        {/* ── SKILLS ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Technical Skills</h2>
          <div className="resume-skills-grid">
            <div>
              <strong>Frontend:</strong> HTML5, CSS3, JavaScript, TypeScript,
              React, Next.js, TailwindCSS
            </div>
            <div>
              <strong>Backend:</strong> Node.js, Python, REST APIs
            </div>
            <div>
              <strong>AI &amp; Automation:</strong> Python Scripting, LLM APIs,
              Prompt Engineering, Web Scraping, Workflow Automation
            </div>
            <div>
              <strong>Deployment:</strong> GitHub, Vercel
            </div>
          </div>
        </section>

        <hr className="resume-hr" />

        {/* ── CERTIFICATIONS ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">
            Certifications
            <span className="resume-cert-count">18</span>
          </h2>
          <div className="resume-certs-grid">
            {[
              { name: "AI Impact Summit Buildathon", issuer: "HCL GUVI", date: "Jan 2026" },
              { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", date: "Dec 2025" },
              { name: "Working with Large Language Models", issuer: "LinkedIn", date: "Dec 2025" },
              { name: "Building Advanced AI Apps with Prompt Flow", issuer: "LinkedIn", date: "Dec 2025" },
              { name: "Prompt Engineering with LangChain", issuer: "LinkedIn", date: "Dec 2025" },
              { name: "Prompt Engineering Skills for Developers", issuer: "LinkedIn", date: "Dec 2025" },
              { name: "Ethics in the Age of Generative AI", issuer: "LinkedIn", date: "Dec 2025" },
              { name: "AI & ML in Manufacturing Industry", issuer: "Mesmerise Soft-Tech", date: "Jun 2025" },
              { name: "Learning Data Analytics: 1 Foundations", issuer: "LinkedIn", date: "Oct 2025" },
            ].map((c) => (
              <div key={c.name} className="resume-cert-item">
                <span className="resume-cert-name">{c.name}</span>
                <span className="resume-cert-issuer">
                  {c.issuer} · {c.date}
                </span>
              </div>
            ))}
            <div className="resume-cert-item">
              <span className="resume-cert-name resume-cert-more">
                + 9 more certifications in Prompt Eng., AI Productivity, &amp; Data Analytics
              </span>
            </div>
          </div>
        </section>

        <hr className="resume-hr" />

        {/* ── EDUCATION ── */}
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">
                  Diploma in AI / Machine Learning
                </h3>
                <span className="resume-entry-company">Currently Pursuing</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap");

        /* ─── Page shell ─── */
        body {
          margin: 0;
          font-family: "Inter", sans-serif;
        }

        .resume-page {
          max-width: 820px;
          margin: 80px auto 60px;
          padding: 56px 52px;
          background: #ffffff;
          color: #1a1a2e;
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          line-height: 1.6;
        }

        /* ─── Floating action bar ─── */
        .resume-actions {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 32px;
          background: rgba(4, 8, 16, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.15);
        }

        .resume-back-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .resume-back-btn:hover {
          color: #60a5fa;
        }

        .resume-download-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          color: white;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: "Space Grotesk", sans-serif;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .resume-download-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(59, 130, 246, 0.35);
        }

        /* ─── Header ─── */
        .resume-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          flex-wrap: wrap;
        }

        .resume-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 2rem;
          font-weight: 800;
          margin: 0 0 4px;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .resume-tagline {
          font-size: 0.9rem;
          color: #3b82f6;
          font-weight: 500;
          margin: 0;
        }

        .resume-contact-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-end;
        }
        .resume-contact-info a {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #475569;
          text-decoration: none;
        }
        .resume-contact-info a:hover {
          color: #3b82f6;
        }

        /* ─── Dividers ─── */
        .resume-hr {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
          margin: 24px 0;
        }

        /* ─── Section titles ─── */
        .resume-section-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #0f172a;
          margin: 0 0 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .resume-text {
          font-size: 0.88rem;
          color: #475569;
          margin: 0;
        }

        /* ─── Experience entries ─── */
        .resume-entry {
          margin-bottom: 20px;
        }
        .resume-entry:last-child {
          margin-bottom: 0;
        }

        .resume-entry-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 6px;
        }

        .resume-entry-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .resume-entry-company {
          font-size: 0.82rem;
          color: #3b82f6;
          font-weight: 500;
        }

        .resume-entry-date {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
          white-space: nowrap;
          background: #f1f5f9;
          padding: 3px 10px;
          border-radius: 6px;
        }

        .resume-list {
          margin: 6px 0 0;
          padding-left: 18px;
          list-style: disc;
        }
        .resume-list li {
          font-size: 0.82rem;
          color: #475569;
          margin-bottom: 3px;
        }

        /* ─── Projects grid ─── */
        .resume-projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .resume-project-item {
          padding: 14px 16px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .resume-project-name {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: #0f172a;
          margin: 0 0 4px;
        }

        .resume-project-desc {
          font-size: 0.76rem;
          color: #64748b;
          margin: 0 0 6px;
          line-height: 1.5;
        }

        .resume-project-tech {
          font-size: 0.7rem;
          color: #3b82f6;
          font-weight: 500;
        }

        /* ─── Skills grid ─── */
        .resume-skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .resume-skills-grid div {
          font-size: 0.82rem;
          color: #475569;
        }
        .resume-skills-grid strong {
          color: #1e293b;
          font-weight: 600;
        }

        /* ─── Certifications ─── */
        .resume-cert-count {
          font-size: 0.72rem;
          background: #3b82f6;
          color: white;
          padding: 2px 8px;
          border-radius: 8px;
          font-weight: 600;
        }

        .resume-certs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .resume-cert-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .resume-cert-name {
          font-size: 0.8rem;
          color: #1e293b;
          font-weight: 500;
        }

        .resume-cert-more {
          color: #64748b;
          font-style: italic;
          font-weight: 400;
        }

        .resume-cert-issuer {
          font-size: 0.72rem;
          color: #94a3b8;
        }

        /* ─── Print styles ─── */
        .no-print {
          display: flex;
        }

        @media print {
          body {
            background: white !important;
          }

          .no-print {
            display: none !important;
          }

          .resume-page {
            margin: 0;
            padding: 32px 40px;
            box-shadow: none;
            border-radius: 0;
            max-width: 100%;
          }

          .resume-name {
            font-size: 1.6rem;
          }

          .resume-hr {
            margin: 16px 0;
          }

          .resume-section-title {
            font-size: 0.95rem;
          }

          .resume-entry {
            margin-bottom: 14px;
          }

          .resume-projects-grid,
          .resume-certs-grid,
          .resume-skills-grid {
            gap: 8px;
          }

          .resume-project-item {
            padding: 10px 12px;
            break-inside: avoid;
          }

          @page {
            margin: 0.5in;
            size: A4;
          }
        }

        /* ─── Mobile responsive ─── */
        @media (max-width: 768px) {
          .resume-page {
            margin: 60px 12px 40px;
            padding: 32px 24px;
          }

          .resume-header {
            flex-direction: column;
          }

          .resume-contact-info {
            align-items: flex-start;
          }

          .resume-projects-grid,
          .resume-certs-grid,
          .resume-skills-grid {
            grid-template-columns: 1fr;
          }

          .resume-actions {
            padding: 10px 16px;
          }
        }
      `}</style>
    </>
  );
}

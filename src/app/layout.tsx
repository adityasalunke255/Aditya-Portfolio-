import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Salunke | AI Automation & Web Developer",
  description:
    "Portfolio of Aditya Salunke — AI/ML student and developer specializing in automation tools, AI experiments, and modern web applications.",
  keywords: [
    "Aditya Salunke",
    "AI Developer",
    "Web Developer",
    "Automation",
    "Portfolio",
    "Next.js",
  ],
  openGraph: {
    title: "Aditya Salunke | AI Automation & Web Developer",
    description:
      "Building automation tools, AI experiments, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* Background effects */}
        <div className="bg-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="noise-overlay" />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
      </body>
    </html>
  );
}

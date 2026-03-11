import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AutomationTools from "@/components/AutomationTools";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Experiments from "@/components/Experiments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  ScrollProgress,
  BackToTop,
  Preloader,
  SectionDivider,
} from "@/components/ui/Effects";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <AutomationTools />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Experiments />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

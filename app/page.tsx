import Intro from "@/components/intro";
import Section from "@/components/section";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
      <main className="flex flex-col items-center px=4">
        <Intro />
        <Section />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    
  );
}

import Intro from "@/components/intro";
import Section from "@/components/section";
import About from "@/components/about";

export default function Home() {
  return (
      <main className="flex flex-col items-center px=4">
        <Intro />
        <Section />
        <About />
      </main>
    
  );
}

// import Skills from "./pages/skills/page";
import About from "./pages/about/page";
import Experience from "./pages/experience/page";
import Presentation from "./pages/presentation/page";

export default function Home() {
  return (
    <div>
      <Presentation />
      <About />
      <Experience /> 
      {/* <Skills /> */}
    </div>
  );
}

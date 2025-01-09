import Skills from "./pages/skills/page";
import About from "./pages/about/page";
import Experience from "./pages/experience/page";
import Presentation from "./pages/presentation/page";
import ProjectsPage from "./pages/projects/page";
import LinkPage from "./pages/link/page";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <div>
      <Presentation />
      <About />
      <Experience /> 
      <Skills />
      <ProjectsPage />
      <LinkPage />
      <Footer />
    </div>
  );
}

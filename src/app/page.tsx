import NavBar from "./componets/layout/NavBar";
import Presentation from "./componets/layout/Presentation";
import About from "./componets/layout/About";
import Experience from "./componets/layout/Experience";
export default function Home() {
  return (
    <div >
      <NavBar />
      <Presentation />
      <About />
      <Experience />
    </div>    
  );
}

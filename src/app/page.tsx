// import ProgressBar from "./componets/layout/ProgressBar";
import NavBar from "./componets/layout/NavBar";
import Presentation from "./componets/layout/Presentation";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen scroll-m-2">
        <NavBar />
        {/* <ProgressBar /> */}
        <div><Presentation /></div>
    </div>    
  );
}

// import ProgressBar from "./componets/layout/ProgressBar";
import NavBar from "./componets/layout/NavBar";
import Presentation1 from "./componets/layout/Presentation1";
import Presentation from "./componets/layout/Presentation";

export default function Home() {
  return (
    <div>
        <NavBar />
        {/* <ProgressBar /> */}
        <div className="grid grid-cols-2"> 
          <div><Presentation /></div>       
          <div><Presentation1 /></div>
        </div>

    </div>    
  );
}

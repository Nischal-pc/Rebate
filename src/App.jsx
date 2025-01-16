import LandingPage from "./components/Home";
import NavBar from "./components/NavBar";
import BottomSection from "./components/BottomSection";
import { useEffect } from "react";

// import Rebateoption from "./components/Rebateoption";
// import RebateQualifier from "./components/RebateQualifier";

function App() {
  return (
    <>
      <div className="sticky top-0 z-50 " id="top">
        <NavBar />
      </div>
      <LandingPage />

      <BottomSection />
    </>
  );
}

export default App;

import LandingPage from "./components/Home";
import NavBar from "./components/NavBar";
import EligibilityChecker from "./components/EligibilityChecker";
import BottomSection from "./components/BottomSection";

// import Rebateoption from "./components/Rebateoption";
// import RebateQualifier from "./components/RebateQualifier";

function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <LandingPage />
      <EligibilityChecker />
      <BottomSection />

      {/* <Rebateoption />
      <RebateQualifier /> */}
    </>
  );
}

export default App;

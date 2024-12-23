import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Rebateoption from "./components/Rebateoption";
import RebateQualifier from "./components/RebateQualifier";

function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <LandingPage />
      <Rebateoption />
      <RebateQualifier />
    </>
  );
}

export default App;

import { Link } from "react-scroll";
import RebatePage from "./RebatePage";

const LandingPage = () => {
  return (
    // <body className="relative flex items-center justify-center h-[55vh] overflow-hidden ">
    //   <img src="/assets/main.png" />
    //   {/* <svg
    //     className="absolute bottom-0 left-0 w-full h-[100px] z-20"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 1440 320"
    //     preserveAspectRatio="none"
    //   >
    //     <path
    //       fill="white"
    //       d="M0,160 C360,300 1080,300 1440,160 L1440,320 L0,320 Z"
    //     ></path>
    //   </svg> */}
    // </body>

    <div>
      {/* Header Section */}
      <header className="relative bg-[url('/assets/main.png')] bg-cover bg-center py-32 px-4 text-center">
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Discover Ontario Rebates
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Empowering Ontario Residents with Financial Support for a
            Sustainable Future
          </p>
          <Link
            to="eligibility-checker"
            smooth={true}
            duration={500}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            Check Your Eligibility Now
          </Link>
        </div>

        {/* Optional SVG Overlay */}
      </header>

      {/* Featured Rebates Section */}
      <section className="bg-white ">
        <RebatePage />
      </section>

      {/* Testimonials Section */}
    </div>
  );
};

export default LandingPage;

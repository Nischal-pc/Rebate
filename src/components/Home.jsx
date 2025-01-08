import { Link } from "react-scroll";
import RebatePage from "./RebatePage";
const LandingPage = () => {
  return (
    <div>
      {/* Header Section */}
      {/* <header className="relative bg-[url('/assets/main.png')] bg-cover bg-center py-32 px-4 text-center">

        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      
        <div className="relative z-10">
          <h1 className="text-5xl font-bold font-sans text-white mb-4">
            Discover Ontario Rebates
          </h1>
          <p className="text-lg font-sans  text-gray-200 mb-6">
            Empowering Ontario Residents with Financial Support for a
            Sustainable Future
          </p>
          <button>
            <Link
              to="eligibility-checker"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              Check Your Eligibility Now
            </Link>
          </button>
        </div>

      </header> */}

      <header className="relative bg-[url('/assets/main4.webp')] bg-cover bg-center h-screen flex flex-col justify-center overflow-hidden">
        {/* Overlay for gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 space-y-10 max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md animate__animated animate__fadeIn animate__delay-1s">
            Unlock Your Energy Savings Now
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
            At Efficiency Broker Canada, we’ve helped over 5,000 Ontario
            homeowners secure rebates. Join them and reduce your energy costs by
            up to 30% with zero upfront costs.
          </p>

          {/* Trust-Building Facts with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-gray-300 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400">
                Why Choose Us?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>✅ Trusted by 5,000+ Ontario homeowners.</li>
                <li>✅ Over $10 million secured in rebates.</li>
                <li>✅ 10+ years of energy consulting expertise.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400">
                What’s in it for You?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>⚡ Reduce annual energy costs by up to 30%.</li>
                <li>🏠 Upgrade your home with ease and confidence.</li>
                <li>
                  💡 End-to-end support from consultation to implementation.
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action (CTA) */}
          <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center">
            <button className="animate__animated animate__fadeIn animate__delay-2s animate-pulse">
              <Link
                to="eligibility-checker"
                smooth={true}
                duration={500}
                className="bg-gradient-to-r from-green-500 to-green-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                🚀 Check Your Eligibility Now
              </Link>
            </button>
            <button className="animate__animated animate__fadeIn animate__delay-3s ">
              <Link
                to="Rebate-Page"
                smooth={true}
                duration={500}
                className="bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                💸 Explore Available Rebates
              </Link>
            </button>
          </div>
        </div>
      </header>
      {/* Featured Rebates Section */}
      <section className="bg-white" id="Rebate-Page">
        <RebatePage />
      </section>
      {/* Testimonials Section */}
    </div>
  );
};

export default LandingPage;

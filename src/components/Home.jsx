import { Link } from "react-scroll";
import RebatePage from "./RebatePage";
const LandingPage = () => {
  return (
    <div>
      <header className="relative bg-[url('/assets/main4.webp')] bg-cover bg-center h-screen flex flex-col justify-center overflow-hidden ">
        {/* Overlay for gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>

        {/* Main Content */}
        <div className="relative mt-10 z-10 flex flex-col items-center text-center px-6 space-y-10 max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className=" text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md animate__animated animate__fadeIn animate__delay-1s">
            Unlock Your Energy Savings Now
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl  text-gray-200 max-w-4xl leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
            At Efficiency Broker Canada, we’ve helped over 5,000 Ontario
            homeowners secure rebates. Join them and reduce your energy costs by
            up to 30% with zero upfront costs.
          </p>

          {/* Trust-Building Facts with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-gray-300 max-w-5xl  mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-400">
                Why Choose Us?
              </h3>
              <ul className="space-y-2 font-bold pb-3">
                <li>✅ Over $10 million secured in rebates.</li>
                <li>✅ Trusted by 5,000+ Ontario homeowners.</li>
                <li>✅ 10+ years of energy consulting expertise.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-400">
                What’s in it for You?
              </h3>
              <ul className="space-y-2 font-bold pb-3">
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

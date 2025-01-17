import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 " id="top">
      <nav
        className="fixed top-0 left-0 w-full bg-white shadow-lg"
        style={{
          height: "12vh", // Adjust height dynamically as a percentage of the viewport
        }}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2 sm:px-6 sm:py-4 lg:px-10">
          {/* Logo and Company Name */}
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/assets/Brokerlogo1.png"
              alt="Logo"
              className="object-contain"
              style={{
                width: "200px", // Adjust for smaller screens
                height: "8vh", // Scale height with navbar
                borderRadius: "10px",
              }}
            />
          </a>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              id="menu-toggle"
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            id="menu"
            className="hidden lg:flex lg:items-center lg:space-x-4"
          >
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full border-2 border-transparent hover:border-white transition-all duration-300">
              <Link to="eligibility-checker" smooth={true} duration={500}>
                Get Started
              </Link>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          className="hidden lg:hidden px-4 pb-4 bg-white shadow-lg"
        >
          <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full">
            <Link to="eligibility-checker" smooth={true} duration={500}>
              Get Started
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

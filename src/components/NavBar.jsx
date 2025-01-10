import { Link } from "react-scroll";

const NavBar = () => {
  return (
    // <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
    //   <div className="max-w-screen-xl flex items-center justify-between mx-auto p-5">
    //     {/* Logo and Title */}
    //     <a href="#" className="flex items-center space-x-4 rtl:space-x-reverse">
    //       <img
    //         src="/assets/logo5.webp"
    //         className="h-14 rounded-full border-2 border-gray-200 dark:border-gray-600"
    //         alt="Broker logo"
    //       />
    //       <span className="text-2xl font-semibold font-poppins text-gray-800 dark:text-white tracking-wide">
    //         Efficiency Broker Canada
    //       </span>
    //     </a>

    //     {/* Navbar Links */}
    //     <div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
    //       {/* Get Started Button */}

    //       <button>
    //         <Link
    //           to="eligibility-checker"
    //           smooth={true}
    //           duration={500}
    //           className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
    //         >
    //           Get Started
    //         </Link>
    //       </button>

    //       {/* Hamburger Menu Button */}
    //       <button
    //         data-collapse-toggle="navbar-sticky"
    //         type="button"
    //         className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-sticky"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-6 h-6"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </nav>
    // <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-lg transition-all duration-300 ease-in-out">
    //   <div className="max-w-screen-xl flex items-center justify-between mx-auto p-5">
    //     {/* Logo and Title with Hover Effect */}
    //     <a
    //       href="#"
    //       className="flex items-center space-x-4 rtl:space-x-reverse transition-transform duration-300 hover:scale-105"
    //     >
    //       <img
    //         src="/assets/logo5.webp"
    //         className="h-14 rounded-full border-2 border-gray-200 dark:border-gray-600"
    //         alt="Broker logo"
    //       />
    //       <span
    //         className="text-2xl font-poppins
    //        text-gray-800 dark:text-white tracking-wide transition-colors duration-300 hover:text-blue-600"
    //       >
    //         Efficiency Broker Canada
    //       </span>
    //     </a>

    //     {/* Navbar Links */}
    //     <div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
    //       {/* Get Started Button with Hover Effects */}
    //       <button>
    //         <Link
    //           to="eligibility-checker"
    //           smooth={true}
    //           duration={500}
    //           className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out"
    //         >
    //           Get Started
    //         </Link>
    //       </button>

    //       {/* Hamburger Menu Button with Subtle Hover Effect */}
    //       <button
    //         data-collapse-toggle="navbar-sticky"
    //         type="button"
    //         className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-200"
    //         aria-controls="navbar-sticky"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-6 h-6"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </nav>
    // <nav className="fixed w-full z-20 top-0 left-0 shadow-lg transition-all duration-300 ease-in-out">
    //   <div className="bg-white to-transparent opacity-100 inset-0 absolute"></div>
    //   <div className="relative max-w-screen-xl flex items-center justify-between mx-auto  p-5">
    //     {/* Logo and Title */}
    //     <a
    //       href="#"
    //       className="flex items-center space-x-4 rtl:space-x-reverse transition-transform duration-300 hover:scale-105"
    //     >
    //       <img
    //         src="/assets/logo5.webp"
    //         className="h-14 rounded-full border-2 border-gray-200 dark:border-gray-600 shadow-lg"
    //         alt="Broker logo"
    //       />
    //       <span className="text-3xl font-semibold font-poppins text-gray-100 tracking-wide transition-colors duration-300 hover:text-blue-400">
    //         Efficiency Broker Canada
    //       </span>
    //     </a>

    //     {/* Navbar Links */}
    //     <div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
    //       {/* Get Started Button */}
    //       <button>
    //         <Link
    //           to="eligibility-checker"
    //           smooth={true}
    //           duration={500}
    //           className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
    //         >
    //           Get Started
    //         </Link>
    //       </button>

    //       {/* Hamburger Menu */}
    //       <button
    //         data-collapse-toggle="navbar-sticky"
    //         type="button"
    //         className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
    //         aria-controls="navbar-sticky"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-6 h-6"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </nav>
    <nav
      className="fixed top-0 left-0 w-full bg-white shadow-lg"
      style={{
        height: "10vh", // Adjust height dynamically as a percentage of the viewport
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
        <div id="menu" className="hidden lg:flex lg:items-center lg:space-x-4">
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
  );
};

export default NavBar;

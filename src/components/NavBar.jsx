// import { Link } from "react-scroll";

// const NavBar = () => {
//   return (
//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img
//             src="/assets/Brokerlogo.webp"
//             className="h-12 rounded-lg"
//             alt="Cannot render thistime"
//           />
//           {/* <img
//             src="/assets/canada.png"
//             className="h-10"
//             alt="Cannot render thistime"
//           /> */}
//           <span className="self-center text-xl font-sans whitespace-nowrap dark:text-white">
//             Efficiency Broker Canada
//           </span>
//         </a>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <button>
//             <Link
//               to="eligibility-checker"
//               smooth={true}
//               duration={500}
//               type="button"
//               className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
//             >
//               Get started
//             </Link>
//           </button>

//           <button
//             data-collapse-toggle="navbar-sticky"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import { Link } from "react-scroll";

const NavBar = () => {
  return (
    // <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
    //   <div className="max-w-screen-xl flex items-center justify-between mx-auto p-5">
    //     {/* Logo and Title */}
    //     <a href="#" className="flex items-center space-x-4 rtl:space-x-reverse">
    //       <img
    //         src="/assets/Brokerlogo.webp"
    //         className="h-14 rounded-full border-2 border-gray-200 dark:border-gray-600"
    //         alt="Broker logo"
    //       />
    //       <span className="text-2xl font-medium text-gray-800 dark:text-white tracking-wide">
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
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-5">
        {/* Logo and Title with Hover Effect */}
        <a
          href="#"
          className="flex items-center space-x-4 rtl:space-x-reverse transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/assets/Brokerlogo.webp"
            className="h-14 rounded-full border-2 border-gray-200 dark:border-gray-600"
            alt="Broker logo"
          />
          <span
            className="text-2xl font-poppins 
           text-gray-800 dark:text-white tracking-wide transition-colors duration-300 hover:text-blue-600"
          >
            Efficiency Broker Canada
          </span>
        </a>

        {/* Navbar Links */}
        <div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
          {/* Get Started Button with Hover Effects */}
          <button>
            <Link
              to="eligibility-checker"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Get Started
            </Link>
          </button>

          {/* Hamburger Menu Button with Subtle Hover Effect */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

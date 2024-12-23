const LandingPage = () => {
  return (
    <body className="relative flex items-center justify-center h-[55vh] overflow-hidden ">
      <img src="/assets/rebate.jpg" />
      <svg
        className="absolute bottom-0 left-0 w-full h-[100px] z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,160 C360,300 1080,300 1440,160 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </body>
  );
};

export default LandingPage;

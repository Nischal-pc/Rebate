const Modal = ({ setModalVisible }) => {
  const handleReload = () => {
    setModalVisible(false);
    window.location.reload();
  };
  return (
    <div className="fixed inset-0 px-4 flex justify-center items-center w-full h-full z-[1000] overflow-auto font-sans">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8 relative mx-auto text-center transform transition-all duration-500 ease-in-out scale-105 hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24 fill-green-500 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 "
          viewBox="0 0 60 60"
        >
          <circle cx="30" cy="30" r="29" fill="#5edd60" />
          <path
            fill="white"
            d="m24.262 42.07-6.8-6.642a1.534 1.534 0 0 1 0-2.2l2.255-2.2a1.621 1.621 0 0 1 2.256 0l4.048 3.957 11.353-17.26a1.617 1.617 0 0 1 2.2-.468l2.684 1.686a1.537 1.537 0 0 1 .479 2.154L29.294 41.541a3.3 3.3 0 0 1-5.032.529z"
          />
        </svg>

        <div className="mt-12">
          <h3 className="text-green-500 text-3xl font-semibold tracking-tight leading-tight">
            Awesome!
          </h3>
          <p className="text-sm text-gray-700 opacity-80 mt-4 max-w-xs mx-auto">
            Your Appointment has been confirmed.Thank you!
          </p>
        </div>

        <button
          onClick={handleReload}
          className="mt-8 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default Modal;

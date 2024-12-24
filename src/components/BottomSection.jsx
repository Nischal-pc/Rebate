const reviews = [
  {
    id: 1,
    text: "Thanks to this website, I received $5,000 for home insulation upgrades.",
    name: "Ali, Toronto",
  },
  {
    id: 2,
    text: "This platform helped me save on my energy bills by offering great rebates.",
    name: "Jessica, Ottawa",
  },
  {
    id: 3,
    text: "The rebate information was clear and easy to understand. Highly recommend!",
    name: "John, Vancouver",
  },
  {
    id: 4,
    text: "I got an amazing rebate for installing new windows. Thank you!",
    name: "Emily, Calgary",
  },
  {
    id: 5,
    text: "Fantastic experience! The rebates I got made a huge difference in my renovation costs.",
    name: "Michael, Hamilton",
  },
  {
    id: 6,
    text: "This service helped me access great energy-saving rebates for my home.",
    name: "Sarah, Mississauga",
  },
  {
    id: 7,
    text: "Quick and easy process to get rebates for my home improvements.",
    name: "David, Brampton",
  },
  {
    id: 8,
    text: "I saved thousands of dollars on my home energy upgrades, all thanks to these rebates!",
    name: "Olivia, Toronto",
  },
];

const BottomSection = () => {
  return (
    <div>
      <section className="bg-gray-50 py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          What Our Users Say
        </h2>

        {/* Review Slider */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex animate-scroll"
            style={{
              animationDuration: `${reviews.length * 4}s`, // Adjust duration based on the number of reviews
            }}
          >
            {/* Display all reviews */}
            {[...reviews, ...reviews].map((review) => (
              <div
                key={review.id}
                className="flex-none w-80 p-4 mx-2"
                style={{
                  minWidth: "300px", // Adjust card width as needed
                }}
              >
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 line-clamp-3 ">
                    {review.text}
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://dummyimage.com/110x110"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {review.name}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p>&copy; 2024 Energy Efficiency Broker. All rights reserved.</p>
          <nav className="mt-4 space-x-4">
            <a href="/about" className="hover:underline">
              About Us
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/faq" className="hover:underline">
              FAQ
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default BottomSection;

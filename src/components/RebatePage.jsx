import { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon

const rebates = [
  {
    id: 1,
    title: "HomeEnergySaver Program",
    shortDescription:
      "The HomeEnergySaver Program offers incentives to Ontario homeowners with electrically heated homes to install energy-efficient heat pumps, providing rebates up to $5,000 for air source heat pumps and $10,000 for ground source heat pumps.",
    fullDescription:
      "The HomeEnergySaver Program helps homeowners reduce energy usage and save on bills. It offers expert advice, personalized solutions, and practical tips for making your home more energy-efficient.",
    link: "/assets/saveonenergy2.png",
  },
  {
    id: 2,
    title: "Canada Greener Homes Loan",
    shortDescription:
      "The Canada Greener Homes Loan offers interest-free financing for energy-efficient home upgrades.",
    fullDescription:
      "The Canada Mortgage and Housing Corporation (CMHC) provides an interest-free loan program to support homeowners in implementing energy-efficient retrofits. This initiative, known as the Canada Greener Homes Loan, allows eligible property owners to borrow between $5,000 and $40,000 for improvements recommended by registered energy advisors during a pre-retrofit evaluation4. The loan is available as an unsecured personal loan, subject to credit approval, with a 10-year repayment term. Homeowners can access up to 15% of the loan amount in advance to initiate the retrofit work, with the remaining funds disbursed after a post-retrofit energy audit confirms the completed upgrades",
    category: "Sustainability",
    link: "/assets/green1.png",
  },
  {
    id: 3,
    title: "Home Efficiency Rebate ",
    shortDescription:
      "Get rebates for energy-saving home upgrades and installations, including insulation, windows, and heating systems.",
    fullDescription:
      "Enbridge offers rebates for homeowners to improve energy efficiency in their homes. This includes upgrades such as new insulation, windows, and energy-efficient heating systems. The goal of the program is to help homeowners save on their energy bills while reducing environmental impact.",
    category: "Energy",
    link: "/assets/enbridge1.png",
  },
  {
    id: 4,
    title: " Oil to Heat Pump Affordability program",
    shortDescription:
      "The Oil to Heat Pump Affordability (OHPA) program provides grants of up to $10,000 (or $15,000 in co-delivery provinces) to Canadian homeowners for switching from oil heating to electric heat pumps. The program aims to reduce energy costs and promote energy efficiency.",
    fullDescription:
      "The Oil to Heat Pump Affordability (OHPA) program is a Canadian initiative designed to assist homeowners in transitioning from oil-based heating systems to more efficient electric heat pumps. This program offers financial support through grants, making it easier for eligible households to upgrade their heating systems and reduce their energy costs.",
    category: "Energy",
    link: "/assets/oiltoheat1.png",
  },
];

const RebatePage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedRebate, setSelectedRebate] = useState(null);

  const filteredRebates =
    filter === "All"
      ? rebates
      : rebates.filter((rebate) => rebate.category === filter);

  const closeModal = () => setSelectedRebate(null);

  return (
    <div className="bg-gray-50 py-8 px-4">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Available Rebates
        </h1>
        <p className="text-lg text-gray-600">
          Explore financial incentives and grants available for Ontario
          residents.
        </p>
      </header>

      {/* Filter Options */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 rounded-lg mx-2 ${
            filter === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-lg mx-2 ${
            filter === "Energy"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setFilter("Energy")}
        >
          Energy
        </button>
        <button
          className={`px-4 py-2 rounded-lg mx-2 ${
            filter === "Sustainability"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setFilter("Sustainability")}
        >
          Sustainability
        </button>
      </div>

      {/* Rebate List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10        m-10 justify-items-center">
        {filteredRebates.map((rebate) => (
          <div
            key={rebate.id}
            className="relative flex flex-col bg-white shadow-sm  border-gray-200 border-2"
          >
            {/* Background Image and Centered Header */}
            <div className="relative w-full h-48 sm:h-64 md:h-72">
              <img
                src={rebate.link} // Replace with your image URL
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover backdrop-blur-sm  "
              />

              {/* Centered Header Title */}
            </div>

            {/* Content Below Image */}
            <div className="relative z-10 p-4 bg-white rounded-b-lg">
              <h5 className=" text-slate-800 text-2xl font-semibold z-10">
                {rebate.title}
              </h5>
              <p className="text-slate-600 leading-normal line-clamp-2 font-light">
                {rebate.shortDescription}
              </p>
              <button
                className="rounded-md bg-blue-600 py-2 px-4 mt-4 text-center text-sm text-white hover:bg-slate-700"
                onClick={() => setSelectedRebate(rebate)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRebate && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[80vw] h-auto overflow-y-auto relative">
            {/* Close Icon */}
            <IoClose
              className="absolute top-2 right-2 text-2xl cursor-pointer"
              onClick={closeModal}
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedRebate.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {selectedRebate.fullDescription}
            </p>
            {/* Display Detailed Content */}
            {selectedRebate.detailedContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default RebatePage;

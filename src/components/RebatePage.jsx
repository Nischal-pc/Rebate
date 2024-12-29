import { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon

const rebates = [
  {
    id: 1,
    title: "HomeEnergySaver Program",
    shortDescription:
      "Get up to $10,000 for energy-efficient home upgrades such as windows, doors, and insulation.",
    fullDescription:
      "The HomeEnergySaver Program helps homeowners reduce energy usage and save on bills. It offers expert advice, personalized solutions, and practical tips for making your home more energy-efficient.",
    link: "/assets/saveonenergy1.png",
  },
  {
    id: 2,
    title: "Canada Greener Homes Grant",
    shortDescription:
      "Save on home retrofits including heat pumps, solar panels, and smart thermostats.",
    fullDescription:
      "The Canada Greener Homes Grant helps homeowners make their homes more energy-efficient by offering rebates for retrofits such as installing heat pumps, solar panels, and smart thermostats. This program aims to reduce energy consumption and increase the adoption of green technologies across the country.",
    category: "Sustainability",
    link: "/assets/green.jpg",
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
    detailedContent: `The Home Efficiency Rebate Plus (HER+) program helps homeowners save money by offering rebates for energy-efficient home upgrades. This includes improvements like better insulation, energy-efficient windows, and upgraded heating systems. The goal is to make your home more comfortable, lower energy bills, and reduce environmental impact.`,
  },
  // {
  //   id: 4,
  //   title: "Home Energy Assessment",
  //   shortDescription:
  //     "Get rebates for professional energy audits and identify ways to save on utility bills.",
  //   fullDescription:
  //     "Home energy assessments are an essential first step in improving energy efficiency in your home. Ontario offers rebates for energy audits, which can help identify areas for improvement, such as insulation, air leaks, and inefficient appliances. This program provides homeowners with valuable information to reduce energy consumption and save on utility bills.",
  //   category: "Energy",
  //   link: "/rebates/energy-assessment",
  // },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {filteredRebates.map((rebate) => (
          <div
            key={rebate.id}
            className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg"
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

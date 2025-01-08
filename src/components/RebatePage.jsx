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
    category: "Rebate",
    amount: "$10,000",
    areas: "Ontario",
  },
  {
    id: 2,
    title: "Canada Greener Homes Loan",
    shortDescription:
      "The Canada Greener Homes Loan offers interest-free financing for energy-efficient home upgrades.",
    fullDescription:
      "The Canada Mortgage and Housing Corporation (CMHC) provides an interest-free loan program to support homeowners in implementing energy-efficient retrofits. This initiative, known as the Canada Greener Homes Loan, allows eligible property owners to borrow between $5,000 and $40,000 for improvements recommended by registered energy advisors during a pre-retrofit evaluation4. The loan is available as an unsecured personal loan, subject to credit approval, with a 10-year repayment term. Homeowners can access up to 15% of the loan amount in advance to initiate the retrofit work, with the remaining funds disbursed after a post-retrofit energy audit confirms the completed upgrades",
    category: "Loan",
    link: "/assets/green1.png",
    amount: " up to $40,000",
    areas: "Ontario || BC",
  },
  {
    id: 3,
    title: "Home Efficiency Rebate ",
    shortDescription:
      "Get rebates for energy-saving home upgrades and installations, including insulation, windows, and heating systems.",
    fullDescription:
      "Enbridge offers rebates for homeowners to improve energy efficiency in their homes. This includes upgrades such as new insulation, windows, and energy-efficient heating systems. The goal of the program is to help homeowners save on their energy bills while reducing environmental impact.",
    category: "Rebate",
    link: "/assets/enbridge1.png",
    amount: "$ 5,000",
    areas: "Ontario",
  },
  {
    id: 4,
    title: " Oil to Heat Pump Affordability program",
    shortDescription:
      "The Oil to Heat Pump Affordability (OHPA) program provides grants of up to $10,000 (or $15,000 in co-delivery provinces) to Canadian homeowners for switching from oil heating to electric heat pumps. The program aims to reduce energy costs and promote energy efficiency.",
    fullDescription:
      "The Oil to Heat Pump Affordability (OHPA) program is a Canadian initiative designed to assist homeowners in transitioning from oil-based heating systems to more efficient electric heat pumps. This program offers financial support through grants, making it easier for eligible households to upgrade their heating systems and reduce their energy costs.",
    category: "Rebate",
    link: "/assets/oiltoheat1.png",
    amount: "Up to $10,000",
    areas: "Canada wide",
  },
  {
    id: 5,
    title: "Home Renovation Savings Program ",
    shortDescription:
      "Enbridge Gas and Save on Energy have teamed up to offer Ontarians rebates for energy-efficient home upgrades, including insulation, heat pumps, smart thermostats, solar panels, and more.",
    fullDescription:
      "Enbridge Gas and Save on Energy have collaborated to introduce a new program designed to assist Ontarians in enhancing their home's energy efficiency and comfort. This program provides substantial rebates for various energy-efficient upgrades, such as insulation, heat pumps, smart thermostats, solar panels, and other improvements, whether your home is heated by natural gas or electricity.",
    category: "Rebate",
    link: "/assets/comingsoon1.png",
    amount: "Up to $12,000",
    areas: "Ontario",
  },
  // {
  //   id: 6,
  //   title: "CleanBC Better Homes & Renovation Rebate",
  //   shortDescription: "Get rebates for energy-efficient home upgrades in B.C.",
  //   fullDescription:
  //     "The CleanBC Better Homes and Home Renovation Rebate Program offers substantial financial incentives to British Columbia residents for various energy-efficient home upgrades. This program covers a wide range of improvements including heat pumps, insulation, windows, doors, and more. Rebates vary based on the type of upgrade and the applicant's income level, making energy-efficient renovations more accessible to B.C. homeowners.",
  //   category: "Rebate",
  //   link: "/assets/cleanbcbetterhomes.png",
  //   amount: "Up to $14,000 ",
  //   areas: "British Columbia",
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
    <div className="bg-white py-8 px-4" id="Rebate-page">
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
            filter === "Rebate"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setFilter("Rebate")}
        >
          Rebate
        </button>
        <button
          className={`px-4 py-2 rounded-lg mx-2 ${
            filter === "Loan"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setFilter("Loan")}
        >
          Loan
        </button>
      </div>

      {/* Rebate List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-10 justify-items-center">
        {filteredRebates.map((rebate) => (
          <div
            key={rebate.id}
            className="relative flex flex-col w-full bg-white shadow-lg border-gray-200 border-2 rounded-3xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 min-h-[350px]"
          >
            {/* Apply blur to the entire background */}
            <div className="absolute inset-0 bg-blue-50 bg-opacity-40 backdrop-blur-sm"></div>

            {/* Background Image and Blur */}
            <div className="relative w-full h-48 sm:h-64 md:h-72">
              <img
                src={rebate.link} // Ensure this is a valid image URL
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover transition-transform transform hover:scale-110"
              />
            </div>

            {/* Slanted Premium Badge */}
            <div className="absolute top-2 right-2 bg-teal-500 text-white text-sm font-semibold py-2 px-4 rounded-full z-20 transform -hue-rotate-60">
              {rebate.amount}
            </div>

            {/* Content Above the Blurred Background */}
            <div className="relative z-10 p-4 rounded-b-lg flex-1">
              <h5 className="text-black text-2xl font-semibold ">
                {rebate.title}
              </h5>
              <p className="text-gray-600 leading-normal h-12 line-clamp-2 font-light">
                {rebate.shortDescription}
              </p>

              <div className="flex justify-between">
                <button
                  className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-2 px-4 mt-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
                  onClick={() => setSelectedRebate(rebate)}
                >
                  Read More
                </button>
                <span className="text-gray-700 px-2 py-4">{rebate.areas}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRebate && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[80vw] h-full overflow-y-auto relative">
            {/* Close Icon */}
            <IoClose
              className="absolute top-2 right-2 text-2xl cursor-pointer"
              onClick={closeModal}
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedRebate.title}
            </h2>
            <iframe
              src="https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings"
              className="w-full h-full border-0"
            />
            {/* <p className="text-gray-700 mb-6">
              {selectedRebate.fullDescription}
            </p>
            {selectedRebate.detailedContent} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default RebatePage;

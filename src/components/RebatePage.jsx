import { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon
import SafeIframe from "./iframe/SafeIframe";

const rebates = [
  {
    id: 1,
    title: "HomeEnergySaver Program",
    shortDescription:
      "The HomeEnergySaver Program offers incentives to Ontario homeowners with electrically heated homes to install energy-efficient heat pumps, providing rebates up to $5,000 for air source heat pumps and $10,000 for ground source heat pumps.",
    fullDescription:
      "The HomeEnergySaver Program helps homeowners reduce energy usage and save on bills. It offers expert advice, personalized solutions, and practical tips for making your home more energy-efficient.",
    link: "/assets/saveonenergy4.jpg",
    category: "Rebate",
    amount: "$10,000",
    areas: "Ontario",
    website: "https://saveonenergy.ca/For-Your-Home/HomeEnergySaver",
  },
  {
    id: 2,
    title: "Canada Greener Homes Loan",
    shortDescription:
      "The Canada Greener Homes Loan is an interest-free financing program offered by the Canadian government to help homeowners make energy-efficient improvements to their homes",
    fullDescription:
      "The Canada Greener Homes Loan, allows eligible property owners to borrow between $5,000 and $40,000 for improvements recommended by registered energy advisors during a pre-retrofit evaluation. The loan is available as an unsecured personal loan, subject to credit approval, with a 10-year repayment term. Homeowners can access up to 15% of the loan amount in advance to initiate the retrofit work, with the remaining funds disbursed after a post-retrofit energy audit confirms the completed upgrades.",
    category: "Loan",
    link: "/assets/green1.png",
    amount: "Up to $40,000",
    areas: "Ontario || BC",
    website:
      "https://natural-resources.canada.ca/energy-efficiency/homes/canada-greener-homes-initiative/canada-greener-homes-loan/24286",
  },
  {
    id: 3,
    title: "Home Efficiency Rebate",
    shortDescription:
      "Enbridge Gas provides rebates of up to $5,000 for energy-efficient home upgrades. To qualify, schedule an initial home energy assessment with a Registered Energy Advisor before beginning any work and complete a minimum of two upgrades.  ",
    fullDescription:
      "Enbridge Gas provides rebates of up to $5,000 for energy-efficient home upgrades. To qualify, schedule an initial home energy assessment with a Registered Energy Advisor before beginning any work and complete a minimum of two upgrades.",
    category: "Rebate",
    link: "/assets/enbridge1.png",
    amount: "$5,000",
    areas: "Ontario",
    website:
      "https://www.enbridgegas.com/ontario/rebates-energy-conservation/home-efficiency-rebate",
  },
  {
    id: 4,
    title: "Oil to Heat Pump Affordability Program",
    shortDescription:
      "The Oil to Heat Pump Affordability (OHPA) program helps homeowners who are currently heating their homes with oil, transition to eligible electric heat pump systems.",
    fullDescription:
      "The Oil to Heat Pump Affordability (OHPA) program helps homeowners who are currently heating their homes with oil, transition to eligible electric heat pump systems.",
    category: "Rebate",
    link: "/assets/oiltoheat1.png",
    amount: "Up to $10,000",
    areas: "Canada wide",
    website:
      "https://natural-resources.canada.ca/energy-efficiency/homes/canada-greener-homes-initiative/oil-heat-pump-affordability-program/24775",
  },
  {
    id: 5,
    title: "Home Renovation Savings Program",
    shortDescription:
      "Enbridge Gas and Save on Energy have teamed up to offer Ontarians rebates for energy-efficient home upgrades, including insulation, heat pumps, smart thermostats, solar panels, and more.",
    fullDescription:
      "Enbridge Gas and Save on Energy have collaborated to introduce a new program designed to assist Ontarians in enhancing their home's energy efficiency and comfort. This program provides substantial rebates for various energy-efficient upgrades, such as insulation, heat pumps, smart thermostats, solar panels, and other improvements, whether your home is heated by natural gas or electricity.",
    category: "Rebate",
    link: "/assets/hrs-logo2.png",
    amount: "Up to $29,000",
    areas: "Ontario",
    startdate: "Starting Jan 28",
    website: "https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings",
  },
  {
    id: 6,
    title: "Better Homes Kingston Loan Program",
    shortDescription:
      "Better Homes Kingston offers no-interest loans of up to $40,000 for deep-energy retrofits to homeowners in Kingston, with repayment terms of up to 20 years.",
    fullDescription:
      "Better Homes Kingston is a local improvement charge (LIC) financing program that provides homeowners in Kingston with no-interest loans for deep-energy retrofits. The program offers loans of up to $40,000 or 10% of the current value assessment of the home, whichever is less. Key features include a 0% interest rate, repayment terms of up to 20 years, no penalty for early repayment, and the loan being tied to the property rather than the individual. To qualify, homes must achieve a minimum 20% reduction in greenhouse gas emissions or equivalent reduction in energy consumption for electrically heated homes.",
    category: "Loan",
    link: "/assets/kingston.jpg",
    amount: "Up to $40,000",
    areas: "Kingston, Ontario",
    website: "https://www.cityofkingston.ca/better-homes",
  },
  {
    id: 7,
    title: "Better Homes Ottawa Loan Program",
    shortDescription:
      "The Better Homes Ottawa Loan Program (BHOLP) is an initiative by the City of Ottawa designed to help homeowners enhance energy efficiency in their homes. The program encourages residents to lower energy usage and reduce greenhouse gas emissions.",
    fullDescription:
      " The Better Homes Ottawa Loan Program (BHOLP) is an initiative by the City of Ottawa designed to help homeowners enhance energy efficiency in their homes. The program encourages residents to lower energy usage and reduce greenhouse gas emissions.",
    category: "Loan",
    link: "/assets/ottawa2.png",
    amount: "Up to $125,000",
    areas: "Ottawa, Ontario",
    website: "https://betterhomesottawa.ca/",
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
    <div
      className="bg-gray-50 py-10 px-16 sm:px-28 min-h-screen "
      id="Rebate-page"
    >
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold  mb-4">Available Rebates</h1>
        <p className="text-xl text-gray-600">
          Explore financial incentives and grants available for Ontario
          residents.
        </p>
      </header>

      {/* Filter Options */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Rebate", "Loan"].map((option) => (
          <button
            key={option}
            className={`px-6 py-2 rounded-full text-lg font-semibold shadow-md transition-all duration-300 ${
              filter === option
                ? "bg-blue-600 text-white scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Rebate List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 ">
        {filteredRebates.map((rebate) => (
          <div
            key={rebate.id}
            className="relative flex flex-col bg-white shadow-lg rounded-3xl overflow-hidden border-2 border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-400"
          >
            {/* Background Image */}
            <div className="relative w-full h-48">
              <img
                src={rebate.link}
                alt={rebate.title}
                className="absolute inset-0 w-full h-full object-contain rounded-t-3xl"
              />
            </div>

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-teal-500 text-white text-sm font-bold py-1 px-3 rounded-full">
              {rebate.amount}
            </div>
            {rebate.id === 5 && (
              <div
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, calc(100% - 10px) 50%, 100% 100%, 0 100%)",
                }}
                className="absolute top-4 -left-1  bg-red-700 text-white text-sm font-bold py-1 px-4 animate-pulse shadow-lg border-2 border-white"
              >
                {rebate.startdate}
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <h5 className="text-2xl font-bold text-gray-800 mb-2">
                {rebate.title}
              </h5>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {rebate.shortDescription}
              </p>
              <div className="flex justify-between items-center">
                <button
                  className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
                  onClick={() => setSelectedRebate(rebate)}
                >
                  Read More
                </button>
                <span className="text-gray-700 text-sm">{rebate.areas}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedRebate && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-white rounded-lg p-6 w-[90vw] max-w-4xl overflow-y-auto relative">
            {/* Close Button */}
            <IoClose
              className="absolute top-4 right-4 text-3xl text-gray-600 cursor-pointer hover:text-gray-800"
              onClick={closeModal}
            />
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {selectedRebate.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {selectedRebate.fullDescription}
            </p>
            <SafeIframe src={selectedRebate.website} id={selectedRebate.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RebatePage;

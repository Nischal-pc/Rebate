import { useState } from "react";

const rebates = [
  {
    id: 1,
    title: "Ontario Energy Rebates",
    shortDescription:
      "Get up to $10,000 for energy-efficient home upgrades such as windows, doors, and insulation.",
    fullDescription:
      "Ontario offers energy rebates to homeowners who make energy-efficient upgrades to their homes. These include rebates for windows, doors, insulation, and energy-efficient appliances. The program helps reduce greenhouse gas emissions and promotes energy conservation, ultimately lowering utility bills for homeowners.",
    category: "Energy",
    link: "/rebates/energy-rebates",
  },
  {
    id: 2,
    title: "Canada Greener Homes Grant",
    shortDescription:
      "Save on home retrofits including heat pumps, solar panels, and smart thermostats.",
    fullDescription:
      "The Canada Greener Homes Grant helps homeowners make their homes more energy-efficient by offering rebates for retrofits such as installing heat pumps, solar panels, and smart thermostats. This program aims to reduce energy consumption and increase the adoption of green technologies across the country.",
    category: "Sustainability",
    link: "/rebates/greener-homes",
  },
  {
    id: 3,
    title: "Enbridge Rebates",
    shortDescription:
      "Get rebates for energy-saving home upgrades and installations, including insulation, windows, and heating systems.",
    fullDescription:
      "Enbridge offers rebates for homeowners to improve energy efficiency in their homes. This includes upgrades such as new insulation, windows, and energy-efficient heating systems. The goal of the program is to help homeowners save on their energy bills while reducing environmental impact.",
    category: "Energy",
    link: "/rebates/enbridge-rebates",
  },
  {
    id: 4,
    title: "Home Energy Assessment",
    shortDescription:
      "Get rebates for professional energy audits and identify ways to save on utility bills.",
    fullDescription:
      "Home energy assessments are an essential first step in improving energy efficiency in your home. Ontario offers rebates for energy audits, which can help identify areas for improvement, such as insulation, air leaks, and inefficient appliances. This program provides homeowners with valuable information to reduce energy consumption and save on utility bills.",
    category: "Energy",
    link: "/rebates/energy-assessment",
  },
];

const RebatePage = () => {
  const [filter, setFilter] = useState("All");
  const [expandedRebate, setExpandedRebate] = useState(null);

  const filteredRebates =
    filter === "All"
      ? rebates
      : rebates.filter((rebate) => rebate.category === filter);

  const toggleDescription = (id) => {
    setExpandedRebate((prev) => (prev === id ? null : id));
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRebates.map((rebate) => (
          <div
            key={rebate.id}
            className="border rounded-lg shadow-md bg-white p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {rebate.title}
            </h2>
            <p className="text-gray-600 mb-4">{rebate.shortDescription}</p>
            <button
              onClick={() => toggleDescription(rebate.id)}
              className="text-blue-600 hover:underline font-medium"
            >
              {expandedRebate === rebate.id ? "Show Less" : "Learn More"}
            </button>
            {expandedRebate === rebate.id && (
              <p className="mt-4 text-gray-700">{rebate.fullDescription}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RebatePage;

// export default Timeline;
import { useState, useContext } from "react";
import {
  Home,
  Droplet,
  ThermometerSun,
  Wind,
  CheckCircle2,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";
import { DataContext } from "../context/context";
import EnergyCostComparison from "../EnergyCostComparison";

const Timeline = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const { formData } = useContext(DataContext);
  const { gasBill, electricBill } = formData;

  // Separate functions for raw numbers and formatted strings
  const calculateSavingsAmount = (type) => {
    const gas = parseFloat(gasBill) || 0;
    const electricity = parseFloat(electricBill) || 0;

    switch (type) {
      case "heatPump":
        return (gas + electricity) * 0.7 * 0.6 * 12;
      case "attic":
        return gas * 0.3 * 12;
      case "waterHeater":
        return electricity * 0.2 * 12 + 100;
      case "smartThermostat":
        return (gas + electricity) * 0.6 * 0.15 * 12;
      case "airSealing":
        return (gas + electricity) * 0.3 * 0.2 * 12;
      default:
        return 0;
    }
  };

  const formatSavings = (amount) => {
    return `$${amount.toFixed(2)}/year`;
  };

  const calculateTotalAnnualCost = () => {
    const gas = parseFloat(gasBill) || 0;
    const electricity = parseFloat(electricBill) || 0;
    return (gas + electricity) * 12;
  };

  const totalCurrentCost = calculateTotalAnnualCost();
  const totalSavings = [
    "heatPump",
    "attic",
    "waterHeater",
    "smartThermostat",
    "airSealing",
  ].reduce((acc, type) => acc + calculateSavingsAmount(type), 0);

  const totalAfterUpgrades = totalCurrentCost - totalSavings;

  const HeatPump = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-7 h-7"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="2"
        ry="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8v1.5M12 14.5v1.5M8.5 12h-1.5M16 12h1.5M10.6 10.6l-1.06-1.06M14.5 13.4l1.06 1.06M13.4 10.6l1.06-1.06M10.6 13.4l-1.06 1.06"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8h2M2 12h2M2 16h2M20 8h2M20 12h2M20 16h2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 18h12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const steps = [
    {
      number: 1,
      title: "Install Heat Pump",
      icon: <HeatPump className="w-7 h-7" />,
      savings: formatSavings(calculateSavingsAmount("heatPump")),
      rebate: "Up to $8,000",
      description: "High-efficiency heating & cooling solution",
      benefits: ["Reduced energy costs", "Year-round comfort", "Eco-friendly"],
      roi: "3-5 years",
    },
    {
      number: 2,
      title: "Upgrade Hot Water Heater",
      icon: <Droplet className="w-7 h-7" />,
      savings: formatSavings(calculateSavingsAmount("waterHeater")),
      rebate: "Up to $1,750",
      description: "Energy-efficient water heating system",
      benefits: [
        "Lower utility bills",
        "Consistent hot water",
        "Long lifespan",
      ],
      roi: "4-6 years",
    },
    {
      number: 3,
      title: "Upgrade Attic Insulation",
      icon: <Home className="w-7 h-7" />,
      savings: formatSavings(calculateSavingsAmount("attic")),
      rebate: "Up to $1,500",
      description: "Improved thermal barrier & comfort",
      benefits: [
        "Better temperature control",
        "Reduced energy loss",
        "Noise reduction",
      ],
      roi: "2-4 years",
    },
    {
      number: 4,
      title: "Smart Thermostat",
      icon: <ThermometerSun className="w-7 h-7" />,
      savings: formatSavings(calculateSavingsAmount("smartThermostat")),
      rebate: "Up to $100",
      description: "Intelligent temperature control",
      benefits: ["Automated scheduling", "Remote control", "Usage insights"],
      roi: "1-2 years",
    },
    {
      number: 5,
      title: "Air Sealing",
      icon: <Wind className="w-7 h-7" />,
      savings: formatSavings(calculateSavingsAmount("airSealing")),
      rebate: "Up to $1,000",
      description: "Reduce air leakage & drafts",
      benefits: [
        "Improved comfort",
        "Better air quality",
        "Lower energy bills",
      ],
      roi: "2-3 years",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-white ">
      <EnergyCostComparison
        totalCurrentCost={totalCurrentCost}
        totalAfterUpgrades={totalAfterUpgrades}
      />
      <div className="text-center mt-12 mb-2 text-4xl font-bold text-green-500">
        SUGGESTED ROADMAP
      </div>
      <div className="text-center  mb-12">
        <p className="text-gray-600">
          Maximize your home's efficiency with these strategic improvements
        </p>
      </div>

      <div className="relative mb-32">
        {/* <div className="absolute top-1/2 left-0 w-full h-3 bg-gradient-to-r from-yellow-400 via-yellow-200 to-green-400 transform -translate-y-1/2 rounded-full shadow-lg" />
        <div className="absolute top-1/2 left-0 w-full h-3 bg-gradient-to-r from-yellow-400/20 via-yellow-200/20 to-green-400/20 transform -translate-y-1/2 rounded-full blur-xl" /> */}
        <div className="absolute top-1/2 left-0 w-full h-3 sm:h-2 md:h-3 bg-gradient-to-r from-yellow-400 via-yellow-200 to-green-400 transform -translate-y-1/2 rounded-full shadow-lg sm:opacity-100 opacity-10" />
        <div className="absolute top-1/2 left-0 w-full h-3 sm:h-2 md:h-3 bg-gradient-to-r from-yellow-400/20 via-yellow-200/20 to-green-400/20 transform -translate-y-1/2 rounded-full blur-xl sm:opacity-100  opacity-10" />

        <div className="relative flex flex-wrap justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col  items-center"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div
                className={`
                relative w-20 h-20 rounded-full bg-white 
                border-4 border-gray-200 flex items-center justify-center mb-4
                transition-all duration-300 ease-in-out cursor-pointer
                hover:border-blue-500 hover:shadow-xl
                ${
                  hoveredStep === index || selectedStep === index
                    ? "scale-110 border-blue-500 shadow-xl bg-blue-50"
                    : ""
                }
              `}
              >
                <div
                  className={`
                  transition-colors duration-300
                  ${
                    hoveredStep === index || selectedStep === index
                      ? "text-blue-500"
                      : "text-gray-600"
                  }
                `}
                >
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  {step.number}
                </div>
              </div>

              <div
                className={`
                absolute top-32 w-80 transition-all duration-500
                ${
                  hoveredStep === index || selectedStep === index
                    ? "opacity-100 translate-y-0 z-10"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }
              `}
              >
                <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6">
                  <div className="border-l-4 border-blue-500 -ml-6 pl-4">
                    <h3 className="font-bold text-xl text-gray-800 mb-2 flex items-center gap-2">
                      {step.title}
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-green-700 font-semibold mb-1">
                        <TrendingUp className="w-4 h-4" />
                        Annual Savings
                      </div>
                      <div className="text-green-800 font-bold">
                        {step.savings}
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-blue-700 font-semibold mb-1">
                        <BadgeDollarSign className="w-4 h-4" />
                        Available Rebate
                      </div>
                      <div className="text-blue-800 font-bold">
                        {step.rebate}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-700">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {step.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        Return on Investment:
                      </span>
                      <span className="font-semibold text-blue-600">
                        {step.roi}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center w-32">
                <span
                  className={`
                  text-sm font-semibold transition-colors duration-300
                  ${
                    hoveredStep === index || selectedStep === index
                      ? "text-blue-600"
                      : "text-gray-700"
                  }
                `}
                >
                  {step.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { validPostalCodes } from "./data/postalCodes";
import { useContext } from "react";
import { DataContext } from "./context/context";

const StepThree = ({ handleNext }) => {
  const { formData } = useContext(DataContext);
  const {
    residentOfOntario,
    primaryResidence,
    postalCode,
    ownerShip,
    ownershipLength,
    homeType,
    income,
    heatingSystem,
    gasProvider,
  } = formData;

  // Eligibility checks
  const isOntarioResident = residentOfOntario === "yes";
  const isPrimaryResidence = primaryResidence === "yes";
  const isPropertyOwner = ownerShip === "yes";
  const ownershipLengthOver6Months =
    ownershipLength && ownershipLength !== "Less than 6 months";
  const incomeRange = income === "30000to50000" || income === "50000to70000";
  const eligibleHouses =
    homeType === "detached" ||
    homeType === "rowHouse" ||
    homeType === "mobileHome" ||
    homeType === "floatingHouse";

  // Program-specific eligibility
  const isEligibleForHomeEfficiencyRebate =
    isOntarioResident &&
    (isPrimaryResidence || primaryResidence === "no") &&
    eligibleHouses &&
    isPropertyOwner &&
    heatingSystem === "naturalGas" &&
    gasProvider === "enbridge";

  const checked_input = validPostalCodes.includes(
    postalCode.trim().substring(0, 3).toUpperCase()
  );

  const isEligibleForHomeEnergySaver =
    isOntarioResident &&
    (isPrimaryResidence || primaryResidence === "no") &&
    eligibleHouses &&
    checked_input &&
    (heatingSystem === "heatpump" || heatingSystem === "baseboard") &&
    ownerShip === "yes";

  const isEligibleForCanadaGreenerHomeLoan =
    isOntarioResident &&
    isPrimaryResidence &&
    eligibleHouses &&
    isPropertyOwner &&
    (heatingSystem === "naturalGas" ||
      heatingSystem === "baseboard" ||
      heatingSystem === "propane" ||
      heatingSystem === "heatpump" ||
      heatingSystem == "oilFurnace" ||
      gasProvider === "enbridge") &&
    ownershipLengthOver6Months;

  const isEligibleForOilToHeatPumpProgram =
    isOntarioResident &&
    isPrimaryResidence &&
    isPropertyOwner &&
    eligibleHouses &&
    ownershipLengthOver6Months &&
    heatingSystem === "oilFurnace";

  const isEligibleForThermostatRebate =
    isOntarioResident && isPrimaryResidence && isPropertyOwner;

  const conditionForConfet =
    isEligibleForCanadaGreenerHomeLoan ||
    isEligibleForHomeEfficiencyRebate ||
    isEligibleForHomeEnergySaver ||
    isEligibleForOilToHeatPumpProgram ||
    isEligibleForThermostatRebate;

  useEffect(() => {
    if (conditionForConfet) {
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Fire confetti in two different directions
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
    }
  }, [conditionForConfet]);

  // Mapping eligibility to programs
  const eligibilityCriteria = [
    {
      name: "Home Efficiency Rebate (HER)",
      eligible: isEligibleForHomeEfficiencyRebate,
      amount: "$5,000",
      image: "/assets/rebate.jpg",
      message:
        "Save energy, save money! You qualify for up to $5,000 in energy efficiency upgrades. Let’s make your home more efficient and reduce your bills!",
      step: "Talk to our Expert Sales Agent to get more information about these rebates",
    },
    {
      name: "HomeEnergySaver Program",
      eligible: isEligibleForHomeEnergySaver,
      amount: "$10,000",
      image: "/assets/homesaver.jpg",
      message:
        "Upgrade your home for comfort and savings! Get up to $10,000 in energy-saving benefits. Make your home the best it can be!",
      step: " Book an appointment to see how we can help you save.",
    },
    {
      name: "Canada Greener Home Loan",
      eligible: isEligibleForCanadaGreenerHomeLoan,
      amount: "$10,000",
      image: "/assets/heatpumpfor.jpg",
      message:
        "Go green with a loan up to $10,000! Make your home energy-efficient and eco-friendly with trusted government-backed support.",
      step: " Secure your loan and start your home’s green transformation.",
    },
    {
      name: "Oil to Heat Pump Affordability Program",
      eligible: isEligibleForOilToHeatPumpProgram,
      amount: "$10,000",
      image: "/assets/greenhomeloan.webp",
      message:
        "Make the switch to a heat pump! You qualify for up to $10,000 to replace your oil furnace. Let’s make your home more energy-efficient today.",
      step: " Book an appointment to explore your options and get started.",
    },
    {
      name: "Thermostat Rebate",
      eligible: isEligibleForThermostatRebate,
      amount: "$100",
      image: "/assets/oiltopump.jpg",
      message:
        "Smart thermostats for smart savings! Get a $100 rebate on your new thermostat. A simple change for better control and savings.",
      step: " Book an appointment and claim your rebate today.",
    },
  ];

  // Filter eligible programs
  const eligiblePrograms = eligibilityCriteria.filter(
    (program) => program.eligible
  );

  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center py-6 px-6">
      {eligiblePrograms.length > 0 && (
        <>
          <h1 className="text-4xl font-semibold text-center text-green-600 mb-4">
            Congratulations!
          </h1>
          <span className="text-lg mb-8 text-green-600 ">
            {" "}
            You Are Eligible for These Programs{" "}
          </span>
        </>
      )}

      <div className="w-full   grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center ">
        {eligiblePrograms.length > 0 ? (
          eligiblePrograms.map((program, index) => (
            <div
              key={index}
              className="flex flex-col justify-between  p-6 w-full max-w-sm min-h-[450px] rounded-3xl border border-gray-300 shadow-lg bg-gradient-to-br from-white via-gray-100 to-gray-50 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 relative mb-6"
              style={{
                backgroundImage: `url('${program.image}')`,
                backgroundSize: "cover",
                backgroundBlendMode: "soft-light",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl"></div>
              <div className="flex justify-center mb-4 z-50">
                {" "}
                <div className="flex items-center justify-center text-white bg-blue-600 text-4xl font-semibold rounded-full w-16 h-16 shadow-xl">
                  {index + 1}
                </div>
              </div>

              {/* Program Name */}
              <div className="text-3xl z-50 font-extrabold text-white text-center mb-4">
                {program.name}
              </div>

              {/* Rebate Amount */}
              <div className="text-center z-50 mb-6">
                <h3
                  className="text-4xl font-bold text-green-200"
                  style={{
                    letterSpacing: "0.05em",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {program.amount}
                </h3>
              </div>

              {/* Image */}
              {/* <div className="flex justify-center mb-6">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-32 h-32 object-cover rounded-xl shadow-md"
                />
              </div> */}

              {/* Message */}
              <p className="text-center z-50 text-gray-200 mb-4">
                {" "}
                {program.message}
              </p>
              <p className="text-center text-sm z-50 text-gray-200 mb-4">
                {" "}
                {program.step}
              </p>

              {/* CTA */}
              <div className="text-center z-50">
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
                >
                  Apply Today
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              No Matching Programs
            </h2>
            <p className="mt-4 text-gray-600">
              Unfortunately, you don't qualify for any available programs based
              on your inputs. Please review your information or contact support.
            </p>
          </div>
        )}
      </div>
      {/* {eligiblePrograms.length > 0 && (
        <div>
          <h2 className="text-4xl mb-2 text-center font-semibold text-blue-400">
            Suggested RoadMap
          </h2>
          <img
            src="/assets/roadmap.png"
            className="w-full h-auto object-contain"
          />
        </div>
      )} */}
    </div>
  );
};

export default StepThree;

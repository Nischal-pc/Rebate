// export default StepThree;
import confetti from "canvas-confetti";
import { useContext, useEffect } from "react";
import { DataContext } from "./context/context";
import { validPostalCodes } from "./data/postalCodes";

import toast from "react-hot-toast";
import Timeline from "./Timeline/Timeline";

const StepThree = ({ handleNext }) => {
  const { formData, setRebates } = useContext(DataContext);
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
    electricBill,
    gasBill,
  } = formData;

  const calculateProduct = () => {
    const gas = parseFloat(gasBill) || 0;
    const electricity = parseFloat(electricBill) || 0;

    if (isNaN(gas) || isNaN(electricity)) {
      toast.error("Invalid input for gasBill or electricityBill.");
      return;
    }

    const total = ((gas + electricity) * 0.7 * 0.6 * 12).toFixed(2);
    console.log(
      `Gas Bill: ${gas}, Electricity Bill: ${electricity}, Total: ${total}`
    );
  };

  // Recalculate whenever gasBill or electricityBill changes
  useEffect(() => {
    calculateProduct();
  }, [electricBill, gasBill]);

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
      const duration = 5 * 1000;
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

  const eligibilityCriteria = [
    {
      name: "Home Efficiency Rebate (HER)",
      eligible: isEligibleForHomeEfficiencyRebate,
      amount: "$5,000",
      image: "/assets/rebate.jpg",
      message:
        "Enbridge offers rebates for homeowners to improve energy efficiency in their homes. This includes upgrades such as new insulation, windows, and energy-efficient heating systems. The goal of the program is to help homeowners save on their energy bills while reducing environmental impact.",
      step: "Talk to our Expert Sales Agent to get more information about these rebates",
    },
    {
      name: "HomeEnergySaver Program",
      eligible: isEligibleForHomeEnergySaver,
      amount: "$10,000",
      image: "/assets/homesaver.jpg",
      message:
        "The HomeEnergySaver Program offers incentives to Ontario homeowners with electrically heated homes to install energy-efficient heat pumps, providing rebates up to $5,000 for air source heat pumps and $10,000 for ground source heat pumps.",
      step: " Book an appointment to see how we can help you save.",
    },
    {
      name: "Canada Greener Home Loan",
      eligible: isEligibleForCanadaGreenerHomeLoan,
      amount: "$10,000",
      image: "/assets/heatpumpfor.jpg",
      message:
        "The Canada Greener Homes Loan is an interest-free financing program offered by the Canadian government to help homeowners make energy-efficient improvements to their homes",
      step: " Secure your loan and start your home’s green transformation.",
    },
    {
      name: "Oil to Heat Pump Affordability Program",
      eligible: isEligibleForOilToHeatPumpProgram,
      amount: "$10,000",
      image: "/assets/oiltopump.jpg",
      message:
        "The Oil to Heat Pump Affordability (OHPA) program helps homeowners who are currently heating their homes with oil, transition to eligible electric heat pump systems.",
      step: " Book an appointment to explore your options and get started.",
    },
    {
      name: "Thermostat Rebate",
      eligible: isEligibleForThermostatRebate,
      amount: "$75",
      image: "/assets/oiltopump.jpg",
      message:
        "Smart thermostats for smart savings! Get a $100 rebate on your new thermostat. A simple change for better control and savings.",
      step: " Book an appointment and claim your rebate today.",
    },
  ];

  const eligiblePrograms = eligibilityCriteria.filter(
    (program) => program.eligible
  );

  useEffect(() => {
    setRebates(eligiblePrograms);
  }, []);

  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center py-6 px-6 ">
      {eligiblePrograms?.length > 0 && (
        <>
          <h1 className="text-4xl font-semibold text-center text-green-600 mb-4">
            Congratulations!
          </h1>
          <span className="text-lg mb-8 text-green-600 ">
            {" "}
            You Are Eligible To Apply For These Programs{" "}
          </span>
        </>
      )}

      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:gi lg:grid-cols-3 gap-6 justify-items-center">
        {eligiblePrograms?.length > 0 ? (
          eligiblePrograms?.map((program, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 w-full max-w-md min-w-[300px] min-h-[250px] rounded-3xl border border-gray-300 shadow-lg bg-gradient-to-br from-white via-gray-100 to-gray-50 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 relative mb-6"
              style={{
                backgroundImage: `url('${program.image}')`,
                backgroundSize: "cover",
                backgroundBlendMode: "soft-light",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl"></div>
              <div className="flex justify-center mb-4 z-50">
                <div className="flex items-center justify-center text-white bg-blue-600 text-4xl font-semibold rounded-full w-16 h-16 shadow-xl">
                  {index + 1}
                </div>
              </div>

              {/* Program Name */}
              <div className="text-2xl sm:text-3xl z-50 font-extrabold text-white text-center mb-4">
                {program.name}
              </div>

              {/* Rebate Amount */}
              <div className="text-center z-50 mb-6">
                <h3
                  className="text-3xl sm:text-4xl font-bold text-green-200"
                  style={{
                    letterSpacing: "0.05em",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {program.amount}
                </h3>
              </div>

              {/* Message */}
              <p className="text-center z-50 text-gray-200 mb-4">
                {program.message}
              </p>
              {/* <div
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%, 0 50%)", // Fancy dynamic clip path
                }}
                className="relative left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-yellow-500 text-white text-sm font-bold py-4 px-4  border-l-4 border-white  "
              >
                {program.step}
              </div> */}
            </div>
          ))
        ) : (
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              No Matching Programs
            </h2>
            <p className="mt-4 text-gray-600">
              Unfortunately, you do not qualify for any available programs at
              the moment.
            </p>
          </div>
        )}
      </div>

      {eligiblePrograms?.length > 0 && (
        <div>
          <div className="text-center z-50">
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
      {eligiblePrograms?.length > 0 && <Timeline />}
    </div>
  );
};

export default StepThree;

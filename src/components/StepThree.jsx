// const StepThree = ({ formData }) => {
//   // Extract values from formData
//   const isOntarioResident = formData.residentOfOntario === "yes";
//   const isPrimaryResidence = formData.primaryResidence === "yes";
//   const isPropertyOwner = formData.ownerShip === "yes";
//   const hasEnerGuide = formData.energyAudit === "yes";
//   const ownershipLengthOver6Months =
//     formData.ownershipLength &&
//     formData.ownershipLength !== "Less than 6 months";
//   const incomeRange =
//     formData.income === "30000to50000" || formData.income === "50000to70000"; // assuming these ranges for programs like HomeEnergySaver and Canada HomeLoan Grant
//   const hasHeatPumpUpgrade = formData.plannedUpgrades?.includes("Heat Pump");
//   const hasAtticInsulationUpgrade =
//     formData.plannedUpgrades?.includes("Attic Insulation");
//   const hasWaterHeaterUpgrade =
//     formData.plannedUpgrades?.includes("Water Heater");
//   const hasSmartThermostatUpgrade = formData.plannedUpgrades?.includes(
//     "Smart Thermostat Installation"
//   );

//   // Home Efficiency Rebate (HER) Eligibility
//   const isEligibleForHER =
//     isOntarioResident &&
//     isPrimaryResidence &&
//     isPropertyOwner &&
//     hasEnerGuide &&
//     ownershipLengthOver6Months &&
//     (hasAtticInsulationUpgrade || hasWaterHeaterUpgrade); // Must have either Attic Insulation or Water Heater upgrade

//   // HomeEnergySaver Program Eligibility
//   const isEligibleForHomeEnergySaver =
//     isOntarioResident &&
//     isPrimaryResidence &&
//     isPropertyOwner &&
//     hasEnerGuide &&
//     incomeRange &&
//     (hasHeatPumpUpgrade ||
//       hasAtticInsulationUpgrade ||
//       hasSmartThermostatUpgrade); // Must have at least one planned upgrade from eligible list

//   // Canada HomeLoan Grant Eligibility
//   const isEligibleForCanadaHomeLoanGrant =
//     isOntarioResident &&
//     isPrimaryResidence &&
//     isPropertyOwner &&
//     hasEnerGuide &&
//     incomeRange &&
//     (hasAtticInsulationUpgrade || hasSmartThermostatUpgrade); // Focus on insulation and smart thermostat upgrades

//   // Thermostat Rebate Eligibility
//   const isEligibleForThermostatRebate =
//     isOntarioResident &&
//     isPrimaryResidence &&
//     isPropertyOwner &&
//     hasSmartThermostatUpgrade; // Must have Smart Thermostat installation planned

//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen flex items-center justify-center py-12 px-6">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
//           Step Three: Eligibility Results
//         </h1>

//         {/* Home Efficiency Rebate (HER) */}
//         {isEligibleForHER && (
//           <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl mb-6">
//             <h2 className="text-3xl font-semibold text-green-800">
//               Home Efficiency Rebate (HER)
//             </h2>
//             <p className="mt-2 text-gray-700">
//               You qualify for the Home Efficiency Rebate! Based on your home
//               energy audit and ownership details, you're eligible for a rebate
//               to improve your home's energy efficiency.
//             </p>
//             <div className="mt-4 text-green-600 font-medium">Eligible</div>
//           </div>
//         )}

//         {/* HomeEnergySaver Program */}
//         {isEligibleForHomeEnergySaver && (
//           <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl mb-6">
//             <h2 className="text-3xl font-semibold text-blue-800">
//               HomeEnergySaver Program
//             </h2>
//             <p className="mt-2 text-gray-700">
//               You qualify for the HomeEnergySaver Program! Based on your income
//               and planned energy-saving upgrades, you're eligible for this
//               program.
//             </p>
//             <div className="mt-4 text-blue-600 font-medium">Eligible</div>
//           </div>
//         )}

//         {/* Canada HomeLoan Grant */}
//         {isEligibleForCanadaHomeLoanGrant && (
//           <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl mb-6">
//             <h2 className="text-3xl font-semibold text-yellow-800">
//               Canada HomeLoan Grant
//             </h2>
//             <p className="mt-2 text-gray-700">
//               You qualify for the Canada HomeLoan Grant! This grant helps with
//               financing home upgrades and energy efficiency improvements.
//             </p>
//             <div className="mt-4 text-yellow-600 font-medium">Eligible</div>
//           </div>
//         )}

//         {/* Thermostat Rebate */}
//         {isEligibleForThermostatRebate && (
//           <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl mb-6">
//             <h2 className="text-3xl font-semibold text-purple-800">
//               Thermostat Rebate
//             </h2>
//             <p className="mt-2 text-gray-700">
//               You qualify for the Thermostat Rebate based on your smart
//               thermostat installation upgrade.
//             </p>
//             <div className="mt-4 text-purple-600 font-medium">Eligible</div>
//           </div>
//         )}

//         {/* If no programs match */}
//         {!(
//           isEligibleForHER ||
//           isEligibleForHomeEnergySaver ||
//           isEligibleForCanadaHomeLoanGrant ||
//           isEligibleForThermostatRebate
//         ) && (
//           <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-3xl font-semibold text-gray-800">
//               No Matching Programs
//             </h2>
//             <p className="mt-4 text-gray-600">
//               It seems you do not qualify for any of the available programs
//               based on the provided information. Please check your inputs or
//               contact support for more assistance.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StepThree;
import { useEffect } from "react";
import confetti from "canvas-confetti";

const StepThree = ({ formData, index }) => {
  // Extract values from formData
  const {
    residentOfOntario,
    primaryResidence,
    ownerShip,
    energyAudit,
    ownershipLength,
    income,
    plannedUpgrades,
    currentHeatingSystem,
  } = formData;

  // Common eligibility checks
  const isOntarioResident = residentOfOntario === "yes";
  const isPrimaryResidence = primaryResidence === "yes";
  const isPropertyOwner = ownerShip === "yes";
  const hasEnerGuide = energyAudit === "yes";
  const ownershipLengthOver6Months =
    ownershipLength && ownershipLength !== "Less than 6 months";
  const incomeRange = income === "30000to50000" || income === "50000to70000";
  const lowIncome = income === "30000to50000";

  // Upgrade-specific checks
  const hasHeatPumpUpgrade = plannedUpgrades?.includes("Heat Pump");
  const hasAtticInsulationUpgrade =
    plannedUpgrades?.includes("Attic Insulation");
  const hasWaterHeaterUpgrade = plannedUpgrades?.includes("Water Heater");
  const hasSmartThermostatUpgrade = plannedUpgrades?.includes(
    "Smart Thermostat Installation"
  );
  const usesOilHeating = currentHeatingSystem === "Oil furnace or boiler";

  // Program-specific eligibility
  const isEligibleForHER =
    isOntarioResident &&
    isPrimaryResidence &&
    isPropertyOwner &&
    hasEnerGuide &&
    ownershipLengthOver6Months &&
    (hasAtticInsulationUpgrade || hasWaterHeaterUpgrade);

  const isEligibleForHomeEnergySaver =
    isOntarioResident &&
    isPrimaryResidence &&
    isPropertyOwner &&
    hasEnerGuide &&
    incomeRange &&
    (hasHeatPumpUpgrade ||
      hasAtticInsulationUpgrade ||
      hasSmartThermostatUpgrade);

  const isEligibleForCanadaGreenerHomeLoan =
    isOntarioResident &&
    isPrimaryResidence &&
    isPropertyOwner &&
    hasEnerGuide &&
    (hasAtticInsulationUpgrade || hasSmartThermostatUpgrade);

  const isEligibleForOilToHeatPumpProgram =
    isOntarioResident &&
    isPrimaryResidence &&
    isPropertyOwner &&
    usesOilHeating &&
    lowIncome &&
    hasHeatPumpUpgrade;

  const isEligibleForThermostatRebate =
    isOntarioResident &&
    isPrimaryResidence &&
    isPropertyOwner &&
    hasSmartThermostatUpgrade;
  useEffect(() => {
    if (true) {
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
  }, [
    isEligibleForHER,
    isEligibleForCanadaGreenerHomeLoan,
    isEligibleForOilToHeatPumpProgram,
    isEligibleForHomeEnergySaver,
    isEligibleForThermostatRebate,
  ]);

  // Mapping eligibility to programs
  const eligibilityCriteria = [
    {
      name: "Home Efficiency Rebate (HER)",
      eligible: isEligibleForHER,
    },
    {
      name: "HomeEnergySaver Program",
      eligible: isEligibleForHomeEnergySaver,
    },
    {
      name: "Canada Greener Home Loan",
      eligible: isEligibleForCanadaGreenerHomeLoan,
    },
    {
      name: "Oil to Heat Pump Affordability Program",
      eligible: isEligibleForOilToHeatPumpProgram,
    },
    {
      name: "Thermostat Rebate",
      eligible: isEligibleForThermostatRebate,
    },
  ];

  // Filter eligible programs
  const eligiblePrograms = eligibilityCriteria.filter(
    (program) => program.eligible
  );

  return (
    <div className="flex flex-col w-full mx-auto  items-center justify-center py-6 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Eligibility Results
      </h1>
      <div className="w-full h-full   ">
        {eligiblePrograms.length > 0 ? (
          eligiblePrograms.map((program, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl mb-6 ${
                program.name.includes("HER")
                  ? "bg-green-50 border-l-4 border-green-500"
                  : program.name.includes("HomeEnergySaver")
                  ? "bg-blue-50 border-l-4 border-blue-500"
                  : program.name.includes("Canada Greener")
                  ? "bg-yellow-50 border-l-4 border-yellow-500"
                  : program.name.includes("Oil to Heat Pump")
                  ? "bg-red-50 border-l-4 border-red-500"
                  : "bg-purple-50 border-l-4 border-purple-500"
              }`}
            >
              <h2 className="text-3xl font-semibold text-gray-800">
                {program.name}
              </h2>
              <p className="mt-2 text-gray-700">
                {`Great news! You're eligible for the ${program.name}. Take the next step toward success by connecting with our expert sales team today—they're ready to provide personalized guidance and all the information you need!`}
              </p>

              <div className="mt-4 font-medium text-gray-600">Eligible</div>
            </div>
          ))
        ) : (
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              No Matching Programs
            </h2>
            <p className="mt-4 text-gray-600">
              It seems you do not qualify for any of the available programs
              based on the provided information. Please check your inputs or
              contact support for more assistance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepThree;

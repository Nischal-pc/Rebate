import { useState } from "react";

const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    rebateType: "",
    income: "",
    homeOwnership: false,
    electricVehicle: false,
    homeAge: "",
  });

  const [eligibilityResult, setEligibilityResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const checkEligibility = () => {
    let isEligible = false;

    // Ontario Energy Rebates eligibility check
    if (formData.rebateType === "energy" && formData.homeOwnership) {
      if (parseInt(formData.income) < 80000 && formData.homeAge > 10) {
        isEligible = true;
      }
    }

    // Electric Vehicle Incentives eligibility check
    if (formData.rebateType === "ev" && formData.electricVehicle) {
      isEligible = true;
    }

    // Canada Greener Homes Grant eligibility check
    if (formData.rebateType === "greenerHomes" && formData.homeOwnership) {
      isEligible = true;
    }

    setEligibilityResult(
      isEligible
        ? "Congratulations! You are eligible for this rebate."
        : "Unfortunately, you are not eligible for this rebate."
    );
  };

  return (
    <div className="bg-blue-50 py-8 px-4" id="eligibility-checker">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Eligibility Checker
        </h1>
        <p className="text-lg text-gray-600">
          Find out if you are eligible for various Ontario rebates based on your
          personal details.
        </p>
      </header>

      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Check Your Eligibility
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="rebateType" className="block text-lg text-gray-700">
              Select Rebate Type
            </label>
            <select
              name="rebateType"
              id="rebateType"
              className="mt-2 w-full p-3 border rounded-md text-gray-700"
              value={formData.rebateType}
              onChange={handleInputChange}
            >
              <option value="">-- Select Rebate Type --</option>
              <option value="energy">Ontario Energy Rebates</option>
              <option value="greenerHomes">Canada Greener Homes Grant</option>
              <option value="ev">Electric Vehicle Incentives</option>
            </select>
          </div>

          {/* Income Field for Energy Rebates */}
          {formData.rebateType === "energy" && (
            <div className="mb-4">
              <label htmlFor="income" className="block text-lg text-gray-700">
                What is your annual household income? (in $)
              </label>
              <input
                type="number"
                name="income"
                id="income"
                className="mt-2 w-full p-3 border rounded-md text-gray-700"
                value={formData.income}
                onChange={handleInputChange}
                required
                placeholder="Enter your annual household income"
              />
            </div>
          )}

          {/* Home Ownership Field for Energy and Greener Homes Rebates */}
          {(formData.rebateType === "energy" ||
            formData.rebateType === "greenerHomes") && (
            <div className="mb-4">
              <label
                htmlFor="homeOwnership"
                className="block text-lg text-gray-700"
              >
                Do you own your home?
              </label>
              <input
                type="checkbox"
                name="homeOwnership"
                id="homeOwnership"
                checked={formData.homeOwnership}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>
          )}

          {/* Electric Vehicle Field for EV Rebates */}
          {formData.rebateType === "ev" && (
            <div className="mb-4">
              <label
                htmlFor="electricVehicle"
                className="block text-lg text-gray-700"
              >
                Do you own an Electric Vehicle?
              </label>
              <input
                type="checkbox"
                name="electricVehicle"
                id="electricVehicle"
                checked={formData.electricVehicle}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>
          )}

          {/* Home Age Field for Energy Rebates */}
          {formData.rebateType === "energy" && (
            <div className="mb-4">
              <label htmlFor="homeAge" className="block text-lg text-gray-700">
                How old is your home (in years)?
              </label>
              <input
                type="number"
                name="homeAge"
                id="homeAge"
                className="mt-2 w-full p-3 border rounded-md text-gray-700"
                value={formData.homeAge}
                onChange={handleInputChange}
                required
                placeholder="Enter the age of your home"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="button"
              onClick={checkEligibility}
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Check Eligibility
            </button>
          </div>

          {/* Eligibility Result */}
          {eligibilityResult && (
            <div className="text-center text-lg font-semibold text-gray-700">
              <p>{eligibilityResult}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EligibilityChecker;

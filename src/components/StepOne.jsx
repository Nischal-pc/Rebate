const StepOne = ({ formData, handleInputChange }) => {
  console.log(formData);
  return (
    <div>
      {/* Question 1 */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">
          Are you a resident of Ontario?
        </label>
        <div className="flex gap-x-4 mt-4">
          <button
            type="button"
            className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
              formData.residentOfOntario === "yes"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() =>
              handleInputChange({
                target: { name: "residentOfOntario", value: "yes" },
              })
            }
          >
            Yes
          </button>
          <button
            type="button"
            className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
              formData.residentOfOntario === "no"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() =>
              handleInputChange({
                target: { name: "residentOfOntario", value: "no" },
              })
            }
          >
            No
          </button>
        </div>
      </div>

      {formData.residentOfOntario && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Is this your primary residence?
          </label>
          <div className="flex gap-x-4 mt-4">
            <button
              type="button"
              className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
                formData.primaryResidence === "yes"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() =>
                handleInputChange({
                  target: { name: "primaryResidence", value: "yes" },
                })
              }
            >
              Yes
            </button>
            <button
              type="button"
              className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
                formData.primaryResidence === "no"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() =>
                handleInputChange({
                  target: { name: "primaryResidence", value: "no" },
                })
              }
            >
              No
            </button>
          </div>
        </div>
      )}
      {formData.primaryResidence && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Enter your postal code:
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md"
            placeholder="Enter postal code"
          />
        </div>
      )}
      {/* Question about ownership */}
      {formData.postalCode && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Are you the registered property owner?
          </label>
          <div className="flex gap-x-4 mt-4">
            <button
              type="button"
              className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
                formData.ownerShip === "yes"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() =>
                handleInputChange({
                  target: { name: "ownerShip", value: "yes" },
                })
              }
            >
              Yes
            </button>
            <button
              type="button"
              className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
                formData.ownerShip === "no"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() =>
                handleInputChange({
                  target: { name: "ownerShip", value: "no" },
                })
              }
            >
              No
            </button>
          </div>
        </div>
      )}

      {formData.ownerShip && (
        <div className="mb-4 mt-4">
          <label className="block text-lg font-medium text-gray-700">
            What type of home do you have?
          </label>
          <div className="grid grid-cols-5 gap-8 mt-4">
            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "detached" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                  formData.homeType === "detached"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/house.png"
                  alt="Detached"
                  className="w-full h-auto aspect-square scale-105 object-contain"
                />
              </div>
              <span className="text-md">Detached/Semi-detached</span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "rowHouse" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                  formData.homeType === "rowHouse"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/townhouse.png"
                  alt="Row House"
                  className="w-full h-auto aspect-square scale-105 object-contain"
                />
              </div>
              <span className="text-md">Row House or Townhouse</span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "mobileHome" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                  formData.homeType === "mobileHome"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/tinyhouse.png"
                  alt="Mobile Home"
                  className="w-full h-auto aspect-square scale-105 object-contain"
                />
              </div>
              <span className="text-md">
                Mobile Home on a Permanent Foundation
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "floatingHouse" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                  formData.homeType === "floatingHouse"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/houseboat.png"
                  alt="Floating House"
                  className="w-full h-auto aspect-square scale-105 object-contain"
                />
              </div>
              <span className="text-md">Permanently Moored Floating House</span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "none" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                  formData.homeType === "none"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/5.png"
                  alt="None"
                  className="w-full h-auto aspect-square object-contain scale-105"
                />
              </div>
              <span className="text-md">None of the Above</span>
            </button>
          </div>
        </div>
      )}

      {/* Ownership length */}
      {formData.homeType && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            How long have you owned this property?
          </label>
          <select
            name="ownershipLength"
            value={formData.ownershipLength}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 block w-full border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="lessThan6Months">Less than 6 months</option>
            <option value="6MonthsTo1Year">6 months to 1 year</option>
            <option value="1To2Years">1 to 2 years</option>
            <option value="moreThan2Years">More than 2 years</option>
          </select>
        </div>
      )}

      {/* Household income */}
      {formData.ownershipLength && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            What is your total household income (approximately)?
          </label>
          <select
            name="income"
            value={formData.income}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 block w-full border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="lessThan30000">Less than $30,000</option>
            <option value="30000to50000">$30,000 to $50,000</option>
            <option value="50000to70000">$50,000 to $70,000</option>
            <option value="70000to100000">$70,000 to $100,000</option>
            <option value="greaterThan100000">Greater than $100,000</option>
          </select>
        </div>
      )}
      {/* {formData.income && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Have you applied for any of the rebates below?
          </label>
          <select
            name="rebateType"
            value={formData.rebateType}
            onChange={handleInputChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md"
          >
            {" "}
            <option value="">Select</option>
            <option value="Rebate 1">Canada Greener Homes Loan</option>
            <option value="Rebate 2">Home Efficiency Rebate</option>
            <option value="Rebate 3">HomeEnergySaver Program</option>
            <option value="Rebate 4">Thermostat Rebate</option>
            <option value="Rebate 5">
              Oil to Heat Pump Affordability program
            </option>
            <option value="Rebate 6">No</option>
          </select>
        </div>
      )} */}
    </div>
  );
};

export default StepOne;

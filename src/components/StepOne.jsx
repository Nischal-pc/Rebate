const StepOne = ({ formData, handleInputChange }) => {
  return (
    <div>
      {/* Question 1 */}
      <div className="mb-4">
        <label className="block text-md font-medium text-gray-700">
          Are you a resident of Ontario?*
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

      {/* Stop flow if "No" */}
      {formData.residentOfOntario === "no" && (
        <div className="mb-4 border border-red-500 p-4 text-red-700">
          To be eligible for these rebates, you must reside in Ontario.
        </div>
      )}

      {/* Question 2 (Only if Q1 is "Yes") */}
      {formData.residentOfOntario === "yes" && (
        <div className="mb-4 mt-4">
          <label className="block text-md font-medium text-gray-700">
            What type of home do you have?*
          </label>
          <select
            name="homeType"
            value={formData.homeType}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 block w-full border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="detached">Detached/Semi-detached</option>
            <option value="rowHouse">Row House or Townhouse</option>
            <option value="mobileHome">
              Mobile Home on a Permanent Foundation
            </option>
            <option value="floatingHouse">
              Permanently Moored Floating House
            </option>
            <option value="none">None of the Above</option>
          </select>
        </div>
      )}

      {/* Stop flow if "None of the Above" is selected */}
      {formData.residentOfOntario === "yes" && formData.homeType === "none" && (
        <div className="mb-4 border border-red-500 p-4 text-red-700">
          {`Your type of home isn't eligible for these rebates.`}
        </div>
      )}

      {/* Question 3 (Only if Q2 is answered and valid) */}
      {formData.homeType &&
        formData.homeType !== "none" &&
        formData.residentOfOntario === "yes" && (
          <div className="mb-4 ">
            <label className="block  text-md font-medium text-gray-700">
              Is the home receiving upgrades occupied by the owner?*
            </label>
            <div className="flex gap-x-4 mt-4">
              <button
                type="button"
                className={`px-4 py-2 w-[30vw] mx-auto rounded-md font-medium ${
                  formData.homeOccupied === "yes"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() =>
                  handleInputChange({
                    target: { name: "homeOccupied", value: "yes" },
                  })
                }
              >
                Yes
              </button>
              <button
                type="button"
                className={`px-4 py-2 w-[30vw] mx-auto rounded-md font-medium ${
                  formData.homeOccupied === "no"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() =>
                  handleInputChange({
                    target: { name: "homeOccupied", value: "no" },
                  })
                }
              >
                No
              </button>
            </div>
          </div>
        )}

      {/* Stop flow if Q3 is "No" */}
      {formData.residentOfOntario === "yes" &&
        formData.homeType &&
        formData.homeType !== "none" &&
        formData.homeOccupied === "no" && (
          <div className="mb-4 border border-red-500 p-4 text-red-700">
            Only owner-occupied homes qualify for these rebates.
          </div>
        )}

      {/* Question 4 (Only if Q3 is "Yes") */}
      {formData.homeOccupied === "yes" &&
        formData.homeType !== "none" &&
        formData.residentOfOntario === "yes" && (
          <div className="mb-4">
            <label className="block text-md font-medium text-gray-700">
              Are you an active Enbridge customer, or in the process of
              converting to Enbridge gas?*
            </label>
            <div className="flex gap-x-4 mt-4">
              <button
                type="button"
                className={`px-4 py-2 w-[30vw] mx-auto rounded-md font-medium ${
                  formData.enbridgeCustomer === "yes"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() =>
                  handleInputChange({
                    target: { name: "enbridgeCustomer", value: "yes" },
                  })
                }
              >
                Yes
              </button>
              <button
                type="button"
                className={`px-4 py-2 w-[30vw] mx-auto rounded-md font-medium ${
                  formData.enbridgeCustomer === "no"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() =>
                  handleInputChange({
                    target: { name: "enbridgeCustomer", value: "no" },
                  })
                }
              >
                No
              </button>
            </div>
          </div>
        )}

      {formData.residentOfOntario === "yes" &&
        formData.homeType &&
        formData.homeType !== "none" &&
        formData.homeOccupied === "yes" &&
        formData.enbridgeCustomer === "no" && (
          <div className="mb-4 border border-red-500 p-4 text-red-700">
            To be eligible for rebates, you need to be an Enbridge customer.
          </div>
        )}

      {/* Question 5 (Only if Q4 is "Yes") */}
      {formData.homeOccupied === "yes" &&
        formData.homeType !== "none" &&
        formData.residentOfOntario === "yes" &&
        formData.enbridgeCustomer === "yes" && (
          <div className="mb-4">
            <label className="block text-md font-medium text-gray-700">
              Do you currently heat your home with a natural gas fired
              appliance?*
            </label>
            <div className="flex gap-x-4 mt-4">
              <button
                type="button"
                className={`px-4 py-2 w-[30vw] mx-auto rounded-md font-medium ${
                  formData.heatingType === "yes"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() =>
                  handleInputChange({
                    target: { name: "heatingType", value: "yes" },
                  })
                }
              >
                Yes
              </button>
              <button
                type="button"
                className={`px-4 py-2 w-[30vw] mx-auto rounded-md font-medium ${
                  formData.heatingType === "no"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() =>
                  handleInputChange({
                    target: { name: "heatingType", value: "no" },
                  })
                }
              >
                No
              </button>
            </div>
          </div>
        )}

      {formData.residentOfOntario === "yes" &&
        formData.homeType &&
        formData.homeType !== "none" &&
        formData.homeOccupied === "yes" &&
        formData.enbridgeCustomer === "no" &&
        formData.heatingType === "no" && (
          <div className="mb-4 border border-red-500 p-4 text-red-700">
            Qualifying homes must be heated primarily with Enbridge NG at time
            of the Pre-Audit and/or Post-Audit.
          </div>
        )}
    </div>
  );
};

export default StepOne;

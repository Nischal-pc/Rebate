const StepTwo = ({ formData, handleInputChange, handleNext }) => {
  const canProceed = formData.prequalifyConsent === "yes";

  return (
    <div>
      {/* Qualification Criteria */}
      <div className="mb-6">
        <p className="mb-2">To qualify you must:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Have an energy assessment both before and after your renovations.
          </li>
          <li>Complete two eligible upgrades.</li>
          <li>Provide copies of all receipts for energy upgrades.</li>
          <li>
            Post assessment must be completed within 120 days of the
            pre-assessment.
          </li>
        </ul>
      </div>

      {/* Prequalify Statement Consent */}
      <div className="mb-4">
        <p className="mb-2 text-gray-700 font-medium">
          Prequalify Statement Consent*
        </p>
        <p className="text-sm text-gray-600 mb-4">
          You must acknowledge you have read the prequalifying statement before
          proceeding to the calculator.
        </p>
        <div className="flex gap-x-4">
          <button
            type="button"
            className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
              formData.prequalifyConsent === "yes"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() =>
              handleInputChange({
                target: { name: "prequalifyConsent", value: "yes" },
              })
            }
          >
            I Agree
          </button>
          <button
            type="button"
            className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
              formData.prequalifyConsent === "no"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() =>
              handleInputChange({
                target: { name: "prequalifyConsent", value: "no" },
              })
            }
          >
            I Disagree
          </button>
        </div>
      </div>

      {/* Error Message */}
      {formData.prequalifyConsent === "no" && (
        <div className="mb-4 border border-red-500 p-4 text-red-700">
          You must agree with the prequalifying statement to proceed.
        </div>
      )}
    </div>
  );
};

export default StepTwo;

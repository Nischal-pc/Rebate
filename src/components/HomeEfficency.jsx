import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
const HomeEfficency = () => {
  const [formData, setFormData] = useState({
    residentOfOntario: "",
    homeType: "",
    homeOccupied: "",
    enbridgeCustomer: "",
    heatingType: "",
    prequalifyConsent: "",
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value); // Validate on change
  };

  // Validation function
  const validateField = (field, value) => {
    let error = "";

    // Validation rule: if field is empty, set error
    if (!value.trim()) {
      error = "This field is required.";
    }

    // Update errors state
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const isNextDisabled =
    formData.residentOfOntario === "no" || // Resident of Ontario must not be "no"
    formData.homeType === "none" || // Home type must not be "none"
    formData.homeOccupied === "no" || // Home must be occupied
    formData.enbridgeCustomer === "no" || // Must be an Enbridge customer
    !formData.residentOfOntario || // Resident of Ontario must be answered
    (formData.residentOfOntario === "yes" && !formData.homeType) || // Home type must be answered if resident is "yes"
    (formData.homeType &&
      formData.homeType !== "none" &&
      !formData.homeOccupied) || // Home occupancy must be answered if home type is valid
    (formData.homeOccupied === "yes" &&
      !formData.enbridgeCustomer &&
      formData.heatingType === "no") || // Heating type must be answered "yes" if home is occupied
    formData.prequalifyConsent === "no" || // Prequalify consent must not be "no"
    formData.heatingType !== "yes"; // Heating type must be answered "yes"
  const steps = [
    {
      index: 1,
      label: "Start",
      content: (
        <StepOne
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
        />
      ),
    },
    {
      index: 2,
      label: "Acknowledge",
      content: (
        <StepTwo formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    { index: 3, label: "Result", content: <StepThree /> },
    {
      index: 4,
      label: "Book Appointment",
      content: "Final content",
      isFinal: true,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="bg-blue-50 py-8 px-4" id="eligibility-checker">
      <ul className="relative flex flex-row gap-x-2 w-[60vw] mx-auto">
        {steps.map((step) => (
          <li
            key={step.index}
            className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${
              currentStep === step.index
                ? "active"
                : currentStep > step.index
                ? "success"
                : ""
            }`}
          >
            <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
              <span
                className={`size-7 flex justify-center items-center shrink-0 font-medium text-gray-800 rounded-full ${
                  currentStep === step.index
                    ? "bg-blue-600 text-white"
                    : currentStep > step.index
                    ? "bg-teal-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {currentStep > step.index ? (
                  <svg
                    className="shrink-0 size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  step.index
                )}
              </span>
              <span className="ms-2 text-sm font-medium text-gray-800">
                {step.label}
              </span>
            </span>
            <div
              className={`w-full h-px flex-1 ${
                currentStep > step.index ? "bg-teal-600" : "bg-gray-200"
              } group-last:hidden`}
            ></div>
          </li>
        ))}
      </ul>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[60vw] mx-auto mt-5 sm:mt-8">
        {steps.map((step) => (
          <div
            key={step.index}
            style={{ display: currentStep === step.index ? "block" : "none" }}
          >
            {step.content}
          </div>
        ))}
        <div className="mt-5 flex justify-between items-center gap-x-2">
          <button
            type="button"
            onClick={handleBack}
            className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            disabled={currentStep === 1}
          >
            Back
          </button>
          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
              disabled={isNextDisabled} // Disable if any field is empty or invalid
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Book an Appointment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeEfficency;

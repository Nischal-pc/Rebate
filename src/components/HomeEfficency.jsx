import { useState, useContext, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Appointment from "./appointment/Appointment";
import { DataContext } from "./context/context";

const HomeEfficency = () => {
  const { formData, setFormData } = useContext(DataContext);

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [conditionForConfet, setConditionForConfet] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked, selectedOptions } = e.target;

    if (type === "checkbox") {
      // Handle checkbox input (for single checkboxes like plannedUpgrades)
      setFormData((prevData) => {
        const newValue = checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value);
        return { ...prevData, [name]: newValue };
      });
    } else if (type === "select-multiple") {
      // Handle select multiple (for selecting multiple values)
      const selectedValues = Array.from(
        selectedOptions,
        (option) => option.value
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedValues,
      }));
    } else {
      // Handle other types (input, radio, etc.)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
    currentStep === 1
      ? !formData.homeAge // Disable if no planned upgrades selected
      : currentStep === 2
      ? !formData.electricBill
      : false;
  const handleNext = () => {
    setConditionForConfet(false);
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setConditionForConfet(false);
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    {
      index: 1,
      label: "1 of 1",
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
      label: "2 of 2",
      content: (
        <StepTwo formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    {
      index: 3,
      label: "Result",
      content: (
        <StepThree
          formData={formData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      ),
    },
    {
      index: 4,
      label: "Book Appointment",
      content: <Appointment />,
      isFinal: true,
    },
  ];
  // useEffect(() => {
  //   document.getElementById("eligibility-checker").scrollIntoView();
  // }, [currentStep]);

  return (
    <div className="bg-blue-50 py-8 px-4" id="eligibility-checker">
      <ul className="relative flex flex-row gap-x-2 container  sm:w-[60vw] mx-auto">
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
      <div className="bg-white p-6 rounded-lg shadow-lg container max-w-screen-xl mx-auto mt-5 sm:mt-8">
        {/* {steps.map((step) => (
          <div
            key={step.index}
            style={{ display: currentStep === step.index ? "block" : "none" }}
          >
            {step.content}
          </div>
        ))} */}
        {steps?.[currentStep - 1]?.content}
        <div className="mt-5 flex justify-between items-center gap-x-2">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
            disabled={currentStep === 1}
          >
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          {currentStep === 3 ? (
            <button
              type="button"
              onClick={handleNext} // Replace with your booking logic
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              Book Appointment
            </button>
          ) : currentStep === 4 ? null : (
            <button
              type="button"
              onClick={handleNext}
              className={`py-3 px-6 rounded-full shadow-lg font-bold text-white transition-all duration-300 ease-in-out ${
                isNextDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:shadow-xl hover:bg-blue-700"
              }`}
              disabled={isNextDisabled} // Disable if any field is empty or invalid
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeEfficency;

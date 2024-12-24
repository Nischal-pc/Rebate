import { useState } from "react";

const RebateQualifier = () => {
  const [answers, setAnswers] = useState({
    isHomeowner: null,
    isResidentOfOntario: null,
    propertyType: "",
    receivedRebates: null,
    isEnbridgeCustomer: null,
    heatingType: "",
    furnaceAge: "",
    waterHeaterAge: "",
    houseAge: "",
    heaterAge: "",
    householdIncome: "",
  });

  const [activeQuestion, setActiveQuestion] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes and proceed to next question when a value is filled
  const handleInputChange = (e, question) => {
    const value = e.target.value;
    setAnswers({ ...answers, [question]: value });

    // Proceed to next question if input is filled
    if (value.trim() !== "") {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  // Handle Yes/No button clicks and show next question accordingly
  const handleYesClick = (question) => {
    setAnswers({ ...answers, [question]: true });
    setErrorMessage("");
    setActiveQuestion(activeQuestion + 1);
  };

  const handleNoClick = (question) => {
    setAnswers({ ...answers, [question]: false });
    setErrorMessage(
      "You are not eligible for the rebate based on your answer."
    );
    setActiveQuestion(null); // Prevent further questions from being asked
  };

  const handleSubmit = () => {
    const isValid =
      answers.isHomeowner !== null &&
      answers.isResidentOfOntario !== null &&
      answers.propertyType !== "" &&
      answers.receivedRebates !== null &&
      answers.isEnbridgeCustomer !== null &&
      answers.heatingType !== "" &&
      answers.furnaceAge !== "" &&
      answers.waterHeaterAge !== "" &&
      answers.houseAge !== "" &&
      answers.heaterAge !== "" &&
      answers.householdIncome !== "";

    if (isValid) {
      setErrorMessage("");
      alert("Form submitted successfully!");
    } else {
      setErrorMessage(
        "Please answer all required questions to proceed with the rebate application."
      );
    }
  };

  // Function to apply color based on selection
  const getButtonClass = (question, option) => {
    const answer = answers[question];
    if (answer === null) return "bg-black"; // Default color is black (unselected)
    if (answer === option) return "bg-green-500"; // Selected answer (green)
    return "bg-black"; // Unselected answer (black)
  };

  return (
    <div className="p-6">
      <div className="max-w-lg mx-auto space-y-4">
        {/* Question 1: Are you the Homeowner? */}
        {activeQuestion >= 1 && (
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="font-semibold text-lg">Are you the Homeowner?</h3>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => handleYesClick("isHomeowner")}
                className={`px-8 py-3 text-white rounded w-full ${getButtonClass(
                  "isHomeowner",
                  true
                )}`}
              >
                Yes
              </button>
              <button
                onClick={() => handleNoClick("isHomeowner")}
                className={`px-8 py-3 text-white rounded w-full ${getButtonClass(
                  "isHomeowner",
                  false
                )}`}
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Question 2: Are you a Resident of Ontario? */}
        {answers.isHomeowner !== null && activeQuestion >= 2 && (
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="font-semibold text-lg">
              Are you a Resident of Ontario?
            </h3>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => handleYesClick("isResidentOfOntario")}
                className={`px-8 py-3 text-white rounded w-full ${getButtonClass(
                  "isResidentOfOntario",
                  true
                )}`}
              >
                Yes
              </button>
              <button
                onClick={() => handleNoClick("isResidentOfOntario")}
                className={`px-8 py-3 text-white rounded w-full ${getButtonClass(
                  "isResidentOfOntario",
                  false
                )}`}
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Question 3: What type of property is your home? */}
        {answers.isResidentOfOntario !== null && activeQuestion >= 3 && (
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="font-semibold text-lg">
              What type of property is your home?
            </h3>
            <select
              value={answers.propertyType}
              onChange={(e) => handleInputChange(e, "propertyType")}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            >
              <option value="">Select Property Type</option>
              <option value="Single-family">Single-family</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Condominium">Condominium</option>
              <option value="Semi-detached">Semi-detached</option>
              <option value="Row house">Row house</option>
            </select>
          </div>
        )}

        {/* Question 4: Have you received any rebates in the past 5 years? */}
        {answers.propertyType !== "" && activeQuestion >= 4 && (
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="font-semibold text-lg">
              Have you received any rebates in the past 5 years?
            </h3>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => handleYesClick("receivedRebates")}
                className={`px-8 py-3 text-white rounded w-full ${getButtonClass(
                  "receivedRebates",
                  true
                )}`}
              >
                Yes
              </button>
              <button
                onClick={() => handleNoClick("receivedRebates")}
                className={`px-8 py-3 text-white rounded w-full ${getButtonClass(
                  "receivedRebates",
                  false
                )}`}
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Question 5: Are you an Enbridge customer? */}
        {answers.receivedRebates !== null && activeQuestion >= 5 && (
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="font-semibold text-lg">
              Are you an Enbridge customer?
            </h3>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => handleYesClick("isEnbridgeCustomer")}
                className={`px-8 py-3 text-white rounded w-full ${getButtonClass(
                  "isEnbridgeCustomer",
                  true
                )}`}
              >
                Yes
              </button>
              <button
                onClick={() => handleNoClick("isEnbridgeCustomer")}
                className={`px-8 py-3 text-white rounded w-full ${getButtonClass(
                  "isEnbridgeCustomer",
                  false
                )}`}
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Question 6: What is your current heating type? */}
        {answers.isEnbridgeCustomer !== null && activeQuestion >= 6 && (
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="font-semibold text-lg">
              What is your current heating type?
            </h3>
            <input
              type="text"
              value={answers.heatingType}
              onChange={(e) => handleInputChange(e, "heatingType")}
              placeholder="Enter heating type"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
        )}

        {/* Question 7: What is the age of your furnace? */}
        {answers.heatingType !== "" && activeQuestion >= 7 && (
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="font-semibold text-lg">
              What is the age of your furnace?
            </h3>
            <input
              type="number"
              value={answers.furnaceAge}
              onChange={(e) => handleInputChange(e, "furnaceAge")}
              placeholder="Enter age"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
        )}

        {/* Question 8: What is the age of your water heater? */}
        {answers.furnaceAge !== "" && activeQuestion >= 8 && (
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="font-semibold text-lg">
              What is the age of your water heater?
            </h3>
            <input
              type="number"
              value={answers.waterHeaterAge}
              onChange={(e) => handleInputChange(e, "waterHeaterAge")}
              placeholder="Enter age"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
        )}

        {/* Question 9: What is the age of your house? */}
        {answers.waterHeaterAge !== "" && activeQuestion >= 9 && (
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="font-semibold text-lg">
              What is the age of your house?
            </h3>
            <input
              type="number"
              value={answers.houseAge}
              onChange={(e) => handleInputChange(e, "houseAge")}
              placeholder="Enter age"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
        )}

        {/* Submit Button */}
        {activeQuestion === null && (
          <div className="p-4">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-500 text-white rounded mt-4"
            >
              Submit
            </button>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 text-sm mt-4">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RebateQualifier;
